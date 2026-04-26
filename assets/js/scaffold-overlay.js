const ScaffoldOverlay = {
  active: false,
  svg: null,

  GRID_COLOR:      '#7ab830',
  FLEX_COLOR:      '#6820c0',
  CONTAINER_COLOR: '#0098c8',
  GRID_FILL:       'rgba(122,184,48,0.04)',
  FLEX_FILL:       'rgba(104,32,192,0.04)',
  FLEX_ITEM_FILL:  'rgba(104,32,192,0.07)',
  CONTAINER_FILL:  'rgba(0,152,200,0.04)',
  SPAN_FILL:       'rgba(122,184,48,0.12)',

  init() {
    this.svg = document.getElementById('scaffold-overlay');
  },

  toggle() {
    this.active = !this.active;
    const btn   = document.querySelector('.scaffold-toggle-btn');
    const label = document.getElementById('scaffold-toggle-label');

    btn.classList.toggle('active', this.active);
    label.textContent = this.active ? 'Hide layout' : 'Show layout';
    this.svg.classList.toggle('active', this.active);

    if (this.active) {
      this.draw();
      this._onScroll = () => this.draw();
      this._onResize = () => this.draw();
      window.addEventListener('scroll', this._onScroll);
      window.addEventListener('resize', this._onResize);
    } else {
      this.svg.innerHTML = '';
      window.removeEventListener('scroll', this._onScroll);
      window.removeEventListener('resize', this._onResize);
    }
  },

  draw() {
    this.svg.innerHTML = '';
    const W = document.documentElement.scrollWidth;
    const H = document.documentElement.scrollHeight;
    this.svg.setAttribute('width',  W);
    this.svg.setAttribute('height', H);
    this.svg.style.width  = W + 'px';
    this.svg.style.height = H + 'px';

    this.drawContainers();
    this.drawGrids();
    this.drawFlex();
  },

  drawGrids() {
    document.querySelectorAll('.scaffold-grid').forEach(el => {
      const rect = el.getBoundingClientRect();
      const x = rect.left + window.scrollX;
      const y = rect.top  + window.scrollY;

      this.svg.appendChild(this._rect(x, y, rect.width, rect.height, this.GRID_FILL, this.GRID_COLOR, 1));

      // Column lines from computed grid-template-columns
      const computed  = getComputedStyle(el);
      const colSizes  = computed.gridTemplateColumns.split(' ').map(parseFloat).filter(n => !isNaN(n));
      const colGap    = parseFloat(computed.columnGap) || 0;

      let colX = x;
      colSizes.forEach((colW, i) => {
        this.svg.appendChild(this._line(colX, y, colX, y + rect.height, this.GRID_COLOR, 0.5));
        colX += colW;
        if (i < colSizes.length - 1) colX += colGap;
      });
      this.svg.appendChild(this._line(colX, y, colX, y + rect.height, this.GRID_COLOR, 0.5));

      this.svg.appendChild(this._label(x + 2, y + 2, this._labelFor(el), this.GRID_COLOR, '#fff'));

      // Highlight span children
      Array.from(el.children).forEach(child => {
        const spanClass = Array.from(child.classList).find(c => c.startsWith('scaffold-grid-span-'));
        if (!spanClass) return;
        const cr = child.getBoundingClientRect();
        const cx = cr.left + window.scrollX;
        const cy = cr.top  + window.scrollY;
        this.svg.appendChild(this._rect(cx, cy, cr.width, cr.height, this.SPAN_FILL, this.GRID_COLOR, 0.5));
        const spanName  = spanClass.replace('scaffold-grid-span-', '');
        const selfLabel = this._selfLabelFor(child);
        const lbl = selfLabel ? `${spanName} · ${selfLabel}` : spanName;
        this.svg.appendChild(this._label(cx + 2, cy + 2, lbl, this.GRID_COLOR, '#fff'));
      });
    });
  },

  drawFlex() {
    document.querySelectorAll('.scaffold-flex').forEach(el => {
      const rect = el.getBoundingClientRect();
      const x = rect.left + window.scrollX;
      const y = rect.top  + window.scrollY;

      this.svg.appendChild(this._rect(x, y, rect.width, rect.height, this.FLEX_FILL, this.FLEX_COLOR, 1));

      // Highlight children
      Array.from(el.children).forEach(child => {
        const cr = child.getBoundingClientRect();
        const cx = cr.left + window.scrollX;
        const cy = cr.top  + window.scrollY;
        this.svg.appendChild(this._rect(cx, cy, cr.width, cr.height, this.FLEX_ITEM_FILL, this.FLEX_COLOR, 0.5));
        const selfLabel = this._selfLabelFor(child);
        if (selfLabel) this.svg.appendChild(this._label(cx + 2, cy + 2, selfLabel, this.FLEX_COLOR, '#fff'));
      });

      // Direction arrow for flex-col
      if (el.classList.contains('scaffold-flex-col')) {
        const midX = x + rect.width / 2;
        this.svg.appendChild(this._line(midX, y + 6, midX, y + rect.height - 6, this.FLEX_COLOR, 1.5));
        this.svg.appendChild(this._line(midX, y + rect.height - 6, midX - 5, y + rect.height - 14, this.FLEX_COLOR, 1.5));
        this.svg.appendChild(this._line(midX, y + rect.height - 6, midX + 5, y + rect.height - 14, this.FLEX_COLOR, 1.5));
      }

      this.svg.appendChild(this._label(x + 2, y + 2, this._labelFor(el), this.FLEX_COLOR, '#fff'));
    });
  },

  drawContainers() {
    document.querySelectorAll('.scaffold-container, .scaffold-container-full').forEach(el => {
      const rect = el.getBoundingClientRect();
      const x = rect.left + window.scrollX;
      const y = rect.top  + window.scrollY;
      this.svg.appendChild(this._rect(x, y, rect.width, rect.height, this.CONTAINER_FILL, this.CONTAINER_COLOR, 1.5, '6 3'));
      this.svg.appendChild(this._label(x + 2, y + 2, this._labelFor(el), this.CONTAINER_COLOR, '#fff'));
    });
  },

  // Build a compact label from all scaffold-* classes on an element
  _labelFor(el) {
    const tokens = Array.from(el.classList)
      .filter(c => c.startsWith('scaffold-'))
      .map(c => c.replace('scaffold-', ''));
    return tokens.length ? tokens.join(' · ') : 'scaffold';
  },

  _selfLabelFor(el) {
    const cls = Array.from(el.classList).find(c => c.startsWith('scaffold-self-'));
    return cls ? cls.replace('scaffold-', '') : null;
  },

  // ── SVG helpers ──────────────────────────────────────────────────────────

  _rect(x, y, w, h, fill, stroke, strokeW, dashArray) {
    const NS = 'http://www.w3.org/2000/svg';
    const r  = document.createElementNS(NS, 'rect');
    r.setAttribute('x',            x);
    r.setAttribute('y',            y);
    r.setAttribute('width',        Math.max(0, w));
    r.setAttribute('height',       Math.max(0, h));
    r.setAttribute('fill',         fill);
    r.setAttribute('stroke',       stroke);
    r.setAttribute('stroke-width', strokeW);
    if (dashArray) r.setAttribute('stroke-dasharray', dashArray);
    return r;
  },

  _line(x1, y1, x2, y2, stroke, strokeW) {
    const NS = 'http://www.w3.org/2000/svg';
    const l  = document.createElementNS(NS, 'line');
    l.setAttribute('x1',             x1);
    l.setAttribute('y1',             y1);
    l.setAttribute('x2',             x2);
    l.setAttribute('y2',             y2);
    l.setAttribute('stroke',         stroke);
    l.setAttribute('stroke-width',   strokeW);
    l.setAttribute('stroke-dasharray', '4 4');
    return l;
  },

  _label(x, y, text, bg, fg) {
    const NS = 'http://www.w3.org/2000/svg';
    const g  = document.createElementNS(NS, 'g');
    const r  = document.createElementNS(NS, 'rect');
    r.setAttribute('x',      x);
    r.setAttribute('y',      y);
    r.setAttribute('width',  text.length * 6 + 8);
    r.setAttribute('height', 16);
    r.setAttribute('fill',   bg);
    g.appendChild(r);
    const t = document.createElementNS(NS, 'text');
    t.setAttribute('x',           x + 4);
    t.setAttribute('y',           y + 11);
    t.setAttribute('fill',        fg);
    t.setAttribute('font-size',   '10');
    t.setAttribute('font-family', 'JetBrains Mono, monospace');
    t.setAttribute('font-weight', '500');
    t.textContent = text;
    g.appendChild(t);
    return g;
  }
};

document.addEventListener('DOMContentLoaded', () => ScaffoldOverlay.init());
