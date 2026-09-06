// ===== Product catalog (single source of truth) =====
const CATALOG = [
  { id:"rtx-4070", name:"NVIDIA GeForce RTX 4070 12GB", brand:"GIGABYTE", cat:"Graphics Cards", price:52990, was:59990, img:"https://codervent.com/fobia/demo/ltr/assets/images/products/12.png", stock:"In Stock", desc:"12GB GDDR6X graphics card built for 1440p and entry 4K gaming with DLSS 3 support." },
  { id:"rtx-4060ti", name:"NVIDIA GeForce RTX 4060 Ti 8GB", brand:"ASUS", cat:"Graphics Cards", price:38990, was:42990, img:"https://codervent.com/fobia/demo/ltr/assets/images/products/07.png", stock:"In Stock", desc:"Efficient 1440p performer with 8GB GDDR6 and dual-fan cooling." },
  { id:"ryzen-7800x3d", name:"AMD Ryzen 7 7800X3D", brand:"AMD", cat:"Processors", price:34990, was:38990, img:"https://codervent.com/fobia/demo/ltr/assets/images/products/10.png", stock:"In Stock", desc:"8-core gaming-first CPU with 3D V-Cache for class-leading frame rates." },
  { id:"intel-i5-14600k", name:"Intel Core i5-14600K", brand:"Intel", cat:"Processors", price:27990, was:31990, img:"https://codervent.com/fobia/demo/ltr/assets/images/products/03.png", stock:"In Stock", desc:"14-core hybrid processor balancing single-thread speed with multitasking headroom." },
  { id:"gigabyte-b650", name:"GIGABYTE B650 AORUS Elite AX", brand:"GIGABYTE", cat:"Motherboards", price:16990, was:19990, img:"https://codervent.com/fobia/demo/ltr/assets/images/products/02.png", stock:"In Stock", desc:"AM5 ATX board with WiFi 6E, PCIe 4.0, and robust VRM for Ryzen builds." },
  { id:"corsair-32gb", name:"Corsair Vengeance 32GB DDR5-6000", brand:"Corsair", cat:"Memory", price:9490, was:11990, img:"https://codervent.com/fobia/demo/ltr/assets/images/products/05.png", stock:"In Stock", desc:"Dual-channel 2x16GB kit tuned for AMD EXPO and Intel XMP 3.0." },
  { id:"wd-2tb-nvme", name:"WD Black SN850X 2TB NVMe Gen4", brand:"Western Digital", cat:"Storage", price:14990, was:17990, img:"https://codervent.com/fobia/demo/ltr/assets/images/products/06.png", stock:"In Stock", desc:"Up to 7300MB/s reads — built for large game libraries and creative workloads." },
  { id:"corsair-rm850", name:"Corsair RM850x 850W 80+ Gold", brand:"Corsair", cat:"Power Supplies", price:10990, was:12990, img:"https://codervent.com/fobia/demo/ltr/assets/images/products/17.png", stock:"In Stock", desc:"Fully modular, zero-RPM fan mode, 10-year warranty." },
  { id:"lianli-o11", name:"Lian Li O11 Dynamic EVO", brand:"Lian Li", cat:"Cases", price:13990, was:15990, img:"https://codervent.com/fobia/demo/ltr/assets/images/products/04.png", stock:"Low Stock", desc:"Dual-chamber ATX case with excellent airflow and cable management." },
  { id:"logitech-g502", name:"Logitech G502 Hero Wireless", brand:"Logitech", cat:"Gaming Gear", price:6990, was:8490, img:"https://codervent.com/fobia/demo/ltr/assets/images/products/10.png", stock:"In Stock", desc:"25K DPI wireless gaming mouse with 11 programmable buttons." },
  { id:"keychron-k8", name:"Keychron K8 Pro Mechanical Keyboard", brand:"Keychron", cat:"Gaming Gear", price:8990, was:9990, img:"https://codervent.com/fobia/demo/ltr/assets/images/products/02.png", stock:"In Stock", desc:"Hot-swappable TKL board with QMK/VIA support and wireless connectivity." },
  { id:"prebuilt-vortex", name:"Vortex Gaming Rig — RTX 4070 / R7 7800X3D", brand:"CoreForge", cat:"Pre-Built PCs", price:139990, was:154990, img:"https://codervent.com/fobia/demo/ltr/assets/images/products/12.png", stock:"In Stock", desc:"Ready-to-ship 1440p gaming system, 240Hz ready, 2-year warranty." }
];

// PC Builder catalog — grouped by step
const BUILDER_PARTS = {
  cpu: [
    { id:"cpu-7800x3d", name:"AMD Ryzen 7 7800X3D", meta:"8C/16T · AM5", price:34990, img:"https://codervent.com/fobia/demo/ltr/assets/images/products/10.png" },
    { id:"cpu-i5-14600k", name:"Intel Core i5-14600K", meta:"14C/20T · LGA1700", price:27990, img:"https://codervent.com/fobia/demo/ltr/assets/images/products/03.png" },
    { id:"cpu-r5-7600", name:"AMD Ryzen 5 7600", meta:"6C/12T · AM5", price:17990, img:"https://codervent.com/fobia/demo/ltr/assets/images/products/07.png" }
  ],
  motherboard: [
    { id:"mb-b650-aorus", name:"GIGABYTE B650 AORUS Elite AX", meta:"AM5 · ATX · WiFi 6E", price:16990, img:"https://codervent.com/fobia/demo/ltr/assets/images/products/02.png" },
    { id:"mb-z790", name:"ASUS Prime Z790-P", meta:"LGA1700 · ATX", price:15990, img:"https://codervent.com/fobia/demo/ltr/assets/images/products/05.png" }
  ],
  ram: [
    { id:"ram-32-6000", name:"Corsair Vengeance 32GB DDR5-6000", meta:"2x16GB", price:9490, img:"https://codervent.com/fobia/demo/ltr/assets/images/products/05.png" },
    { id:"ram-16-5600", name:"Kingston Fury Beast 16GB DDR5-5600", meta:"2x8GB", price:4990, img:"https://codervent.com/fobia/demo/ltr/assets/images/products/06.png" }
  ],
  gpu: [
    { id:"gpu-4070", name:"NVIDIA GeForce RTX 4070 12GB", meta:"GIGABYTE Windforce", price:52990, img:"https://codervent.com/fobia/demo/ltr/assets/images/products/12.png" },
    { id:"gpu-4060ti", name:"NVIDIA GeForce RTX 4060 Ti 8GB", meta:"ASUS Dual", price:38990, img:"https://codervent.com/fobia/demo/ltr/assets/images/products/07.png" },
    { id:"gpu-7800xt", name:"AMD Radeon RX 7800 XT 16GB", meta:"Sapphire Pulse", price:44990, img:"https://codervent.com/fobia/demo/ltr/assets/images/products/17.png" }
  ],
  storage: [
    { id:"sto-2tb", name:"WD Black SN850X 2TB NVMe Gen4", meta:"7300MB/s", price:14990, img:"https://codervent.com/fobia/demo/ltr/assets/images/products/06.png" },
    { id:"sto-1tb", name:"Samsung 980 Pro 1TB NVMe Gen4", meta:"7000MB/s", price:8490, img:"https://codervent.com/fobia/demo/ltr/assets/images/products/02.png" }
  ],
  case_: [
    { id:"case-o11", name:"Lian Li O11 Dynamic EVO", meta:"Dual-chamber ATX", price:13990, img:"https://codervent.com/fobia/demo/ltr/assets/images/products/04.png" },
    { id:"case-4000d", name:"Corsair 4000D Airflow", meta:"Mid-tower ATX", price:8990, img:"https://codervent.com/fobia/demo/ltr/assets/images/products/17.png" }
  ],
  psu: [
    { id:"psu-850", name:"Corsair RM850x 850W Gold", meta:"Fully modular", price:10990, img:"https://codervent.com/fobia/demo/ltr/assets/images/products/17.png" },
    { id:"psu-650", name:"Corsair RM650x 650W Gold", meta:"Fully modular", price:8490, img:"https://codervent.com/fobia/demo/ltr/assets/images/products/05.png" }
  ]
};
const BUILDER_STEPS = [
  { key:"cpu", label:"Processor" },
  { key:"motherboard", label:"Motherboard" },
  { key:"ram", label:"Memory" },
  { key:"gpu", label:"Graphics Card" },
  { key:"storage", label:"Storage" },
  { key:"case_", label:"Case" },
  { key:"psu", label:"Power Supply" }
];

const money = n => '₹' + n.toLocaleString('en-IN');

// ===== Cart (localStorage) =====
const Cart = {
  KEY:'cf_cart',
  get(){ try{ return JSON.parse(localStorage.getItem(this.KEY)) || []; }catch(e){ return []; } },
  set(items){ try{ localStorage.setItem(this.KEY, JSON.stringify(items)); }catch(e){} },
  add(p){
    const items = this.get();
    const existing = items.find(i=>i.id===p.id);
    if(existing){ existing.qty += 1; } else { items.push({...p, qty:1}); }
    this.set(items); this.updateBadge();
  },
  removeById(id){ this.set(this.get().filter(i=>i.id!==id)); this.updateBadge(); },
  updateQty(id, qty){ const items=this.get(); const it=items.find(i=>i.id===id); if(it) it.qty=Math.max(1,qty); this.set(items); },
  count(){ return this.get().reduce((n,i)=>n+i.qty,0); },
  clear(){ this.set([]); this.updateBadge(); },
  updateBadge(){
    document.querySelectorAll('.cart-count').forEach(el=>{
      const c = this.count();
      el.textContent = c; el.style.display = c>0 ? 'flex':'none';
    });
  }
};

// ===== Wishlist =====
const Wishlist = {
  KEY:'cf_wishlist',
  get(){ try{ return JSON.parse(localStorage.getItem(this.KEY)) || []; }catch(e){ return []; } },
  set(ids){ try{ localStorage.setItem(this.KEY, JSON.stringify(ids)); }catch(e){} },
  has(id){ return this.get().includes(id); },
  toggle(id){ let ids=this.get(); ids = ids.includes(id) ? ids.filter(x=>x!==id) : [...ids, id]; this.set(ids); this.updateBadge(); },
  updateBadge(){
    document.querySelectorAll('.wish-count').forEach(el=>{
      const c = this.get().length;
      el.textContent = c; el.style.display = c>0 ? 'flex':'none';
    });
  }
};

// ===== Render helpers =====
function productCardHTML(p){
  const discount = Math.round((1 - p.price/p.was)*100);
  const wished = Wishlist.has(p.id) ? 'active' : '';
  return `<div class="product-card" data-product-id="${p.id}" data-category="${p.cat}" data-brand="${p.brand}" data-price="${p.price}" data-name="${p.name}">
    <div class="product-media">
      <span class="discount-badge">-${discount}%</span>
      <div class="wish-toggle ${wished}" data-wish="${p.id}"><svg viewBox="0 0 24 24" fill="${wished?'currentColor':'none'}" stroke="currentColor" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.6z"/></svg></div>
      <a href="product.html?id=${p.id}"><img src="${p.img}" alt="${p.name}" loading="lazy"></a>
    </div>
    <div class="product-body">
      <div class="product-brand">${p.brand}</div>
      <a href="product.html?id=${p.id}" style="color:inherit;"><div class="product-name">${p.name}</div></a>
      <div class="price-row"><span class="price-now">${money(p.price)}</span><span class="price-was">${money(p.was)}</span></div>
      <div class="product-foot">
        <button class="add-btn" data-add-to-cart data-id="${p.id}" data-name="${p.name}" data-price="${p.price}" data-img="${p.img}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h2l2.4 12.4a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L22 7H6"/><circle cx="9" cy="21" r="1"/><circle cx="18" cy="21" r="1"/></svg>
          Add to Cart
        </button>
      </div>
    </div>
  </div>`;
}

function renderGrid(containerId, items){
  const el = document.getElementById(containerId);
  if(!el) return;
  el.innerHTML = items.map(productCardHTML).join('');
}

// ===== Search =====
function initSearch(){
  const input = document.getElementById('siteSearch');
  const dropdown = document.getElementById('searchResults');
  if(!input || !dropdown) return;
  const params = new URLSearchParams(location.search);
  if(params.get('q')) input.value = params.get('q');

  const render = (term)=>{
    if(!term){ dropdown.classList.remove('open'); dropdown.innerHTML=''; return; }
    const matches = CATALOG.filter(p => p.name.toLowerCase().includes(term.toLowerCase()) || p.cat.toLowerCase().includes(term.toLowerCase()) || p.brand.toLowerCase().includes(term.toLowerCase())).slice(0,6);
    dropdown.innerHTML = (matches.length ? matches.map(p=>`
      <a class="search-result" href="product.html?id=${p.id}">
        <img src="${p.img}" alt="${p.name}"><span class="sr-name">${p.name}</span><span class="sr-price">${money(p.price)}</span>
      </a>`).join('') : `<div class="search-empty">No products match "${term}"</div>`)
      + `<div class="search-viewall" data-viewall="${term}">View all results for "${term}"</div>`;
    dropdown.classList.add('open');
  };
  input.addEventListener('input', ()=>render(input.value.trim()));
  input.addEventListener('focus', ()=>{ if(input.value.trim()) render(input.value.trim()); });
  input.addEventListener('keydown', e=>{ if(e.key==='Enter' && input.value.trim()) location.href='shop.html?q='+encodeURIComponent(input.value.trim()); });
  dropdown.addEventListener('click', e=>{
    const v = e.target.closest('[data-viewall]');
    if(v) location.href='shop.html?q='+encodeURIComponent(v.dataset.viewall);
  });
  document.addEventListener('click', e=>{ if(!e.target.closest('.header-search')) dropdown.classList.remove('open'); });

  // Mobile drawer search: simple Enter-to-navigate (no live dropdown needed in the drawer)
  const mobileInput = document.getElementById('siteSearchMobile');
  if(mobileInput){
    if(params.get('q')) mobileInput.value = params.get('q');
    mobileInput.addEventListener('keydown', e=>{
      if(e.key==='Enter' && mobileInput.value.trim()) location.href='shop.html?q='+encodeURIComponent(mobileInput.value.trim());
    });
  }
}

// ===== Filtering (shop page) =====
function initFiltering(){
  const cards = () => document.querySelectorAll('[data-product-id]');
  if(cards().length===0) return;
  const state = { category:null, maxPrice:Infinity, brand:null };
  const params = new URLSearchParams(location.search);
  const q = (params.get('q')||'').toLowerCase();

  const apply = ()=>{
    let visible = 0;
    cards().forEach(card=>{
      const cat = card.dataset.category, price = parseFloat(card.dataset.price), brand = card.dataset.brand, name=(card.dataset.name||'').toLowerCase();
      let show = true;
      if(state.category && cat!==state.category) show=false;
      if(price > state.maxPrice) show=false;
      if(state.brand && brand!==state.brand) show=false;
      if(q && !name.includes(q)) show=false;
      card.style.display = show ? '' : 'none';
      if(show) visible++;
    });
    const empty = document.getElementById('filterEmpty');
    if(empty) empty.style.display = visible===0 ? 'block':'none';
  };

  document.querySelectorAll('[data-filter-category]').forEach(el=>{
    el.addEventListener('click', (e)=>{
      e.preventDefault();
      document.querySelectorAll('[data-filter-category]').forEach(x=>x.classList.remove('filter-active'));
      const val = el.dataset.filterCategory;
      state.category = val==='all' ? null : val;
      el.classList.add('filter-active');
      apply();
    });
  });
  document.querySelectorAll('[data-filter-price]').forEach(el=>{
    el.addEventListener('input', ()=>{
      state.maxPrice = parseFloat(el.value);
      const label = document.querySelector('[data-price-label]');
      if(label) label.textContent = money(0) + ' — ' + money(el.value);
      apply();
    });
  });
  document.querySelectorAll('[data-filter-brand]').forEach(el=>{
    el.addEventListener('change', ()=>{
      const checked = Array.from(document.querySelectorAll('[data-filter-brand]')).find(x=>x.checked && x.dataset.filterBrand);
      state.brand = checked ? checked.dataset.filterBrand : null;
      apply();
    });
  });
  apply();
}

// ===== Product details hydration =====
function initProductDetails(){
  const titleEl = document.querySelector('.pd-title');
  if(!titleEl) return;
  const id = new URLSearchParams(location.search).get('id');
  const p = CATALOG.find(x=>x.id===id) || CATALOG[0];

  document.querySelector('.pd-brand').textContent = p.brand;
  titleEl.textContent = p.name;
  document.querySelector('.pd-price').textContent = money(p.price);
  document.querySelector('.pd-price-was').textContent = money(p.was);
  document.querySelector('.pd-desc').textContent = p.desc;
  document.querySelector('.pd-gallery-main img').src = p.img;
  document.querySelectorAll('.pd-thumb img').forEach(img=>img.src=p.img);
  const crumbCurrent = document.querySelector('.crumb-path b');
  if(crumbCurrent) crumbCurrent.textContent = p.name;
  const stockBadge = document.querySelector('.pd-stock');
  if(stockBadge){ stockBadge.textContent = p.stock; stockBadge.className='badge pd-stock ' + (p.stock==='In Stock' ? 'in-stock':'low-stock'); }

  const addBtn = document.querySelector('[data-add-to-cart-main]');
  if(addBtn){ addBtn.dataset.id=p.id; addBtn.dataset.name=p.name; addBtn.dataset.price=p.price; addBtn.dataset.img=p.img; }

  const wishBtn = document.querySelector('[data-wish-main]');
  if(wishBtn){
    wishBtn.dataset.wish = p.id;
    if(Wishlist.has(p.id)) wishBtn.classList.add('active');
  }

  renderGrid('relatedProducts', CATALOG.filter(x=>x.cat===p.cat && x.id!==p.id).slice(0,4).length ? CATALOG.filter(x=>x.cat===p.cat && x.id!==p.id).slice(0,4) : CATALOG.filter(x=>x.id!==p.id).slice(0,4));
}

// ===== Cart page render =====
function renderCartPage(){
  const root = document.getElementById('cartRoot');
  if(!root) return;
  const items = Cart.get();
  if(items.length===0){
    root.innerHTML = `<div class="card" style="text-align:center; padding:60px 20px;">
      <div style="font-size:17px; font-weight:700; margin-bottom:8px;">Your cart is empty</div>
      <div style="font-size:13px; color:var(--muted); margin-bottom:20px;">Add some parts to get building.</div>
      <a href="shop.html" class="btn btn-primary">Browse Products</a>
    </div>`;
    return;
  }
  const subtotal = items.reduce((s,i)=>s+i.price*i.qty,0);
  const shipping = subtotal>2000 ? 0 : 249;
  const tax = Math.round(subtotal*0.18);
  const total = subtotal+shipping+tax;
  const rows = items.map(i=>`
    <tr data-id="${i.id}">
      <td><div class="cart-prod"><div class="cart-thumb"><img src="${i.img}" alt="${i.name}"></div>
        <div><div class="cart-name">${i.name}</div><div class="cart-remove" data-remove="${i.id}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6"/></svg>Remove</div></div>
      </div></td>
      <td>${money(i.price)}</td>
      <td><div class="qty-box" data-qty-id="${i.id}"><button data-dir="-1">&minus;</button><span>${i.qty}</span><button data-dir="1">+</button></div></td>
      <td style="font-weight:700;">${money(i.price*i.qty)}</td>
    </tr>`).join('');

  root.innerHTML = `<div class="shop-shell" style="grid-template-columns:1fr 340px;">
    <div class="card">
      <div class="card-head"><h3>Your Cart (${items.reduce((n,i)=>n+i.qty,0)})</h3></div>
      <div style="overflow-x:auto;"><table class="cart-table"><thead><tr><th style="text-align:left; padding-bottom:10px; color:var(--muted); font-size:11.5px; text-transform:uppercase;">Product</th><th style="text-align:left; color:var(--muted); font-size:11.5px; text-transform:uppercase;">Price</th><th style="text-align:left; color:var(--muted); font-size:11.5px; text-transform:uppercase;">Qty</th><th style="text-align:left; color:var(--muted); font-size:11.5px; text-transform:uppercase;">Total</th></tr></thead><tbody>${rows}</tbody></table></div>
      <a href="shop.html" style="font-size:13px; font-weight:700; color:var(--primary); display:inline-block; margin-top:16px;">&larr; Continue Shopping</a>
    </div>
    <div class="card">
      <div class="card-head"><h3>Order Summary</h3></div>
      <div class="summary-row"><span>Subtotal</span><span>${money(subtotal)}</span></div>
      <div class="summary-row"><span>Shipping</span><span>${shipping===0?'Free':money(shipping)}</span></div>
      <div class="summary-row"><span>GST (18%)</span><span>${money(tax)}</span></div>
      <div class="summary-row total"><span>Total</span><span>${money(total)}</span></div>
      <a href="checkout.html" class="btn btn-primary btn-block" style="margin-top:14px;">Proceed to Checkout</a>
    </div>
  </div>`;

  root.querySelectorAll('[data-qty-id]').forEach(box=>{
    const id = box.dataset.qtyId;
    box.querySelectorAll('button').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const cur = Cart.get().find(i=>i.id===id);
        Cart.updateQty(id, (cur?.qty||1)+parseInt(btn.dataset.dir,10));
        Cart.updateBadge(); renderCartPage();
      });
    });
  });
  root.querySelectorAll('[data-remove]').forEach(el=>{
    el.addEventListener('click', ()=>{ Cart.removeById(el.dataset.remove); renderCartPage(); });
  });
}

// ===== Checkout page =====
function renderCheckoutPage(){
  const root = document.getElementById('checkoutRoot');
  if(!root) return;
  const items = Cart.get();
  if(items.length===0){
    root.innerHTML = `<div class="card" style="text-align:center; padding:60px 20px;">
      <div style="font-size:17px; font-weight:700; margin-bottom:8px;">Nothing to check out</div>
      <div style="font-size:13px; color:var(--muted); margin-bottom:20px;">Your cart is empty.</div>
      <a href="shop.html" class="btn btn-primary">Browse Products</a>
    </div>`;
    return;
  }
  const subtotal = items.reduce((s,i)=>s+i.price*i.qty,0);
  const shipping = subtotal>2000?0:249;
  const tax = Math.round(subtotal*0.18);
  const total = subtotal+shipping+tax;
  const rows = items.map(i=>`<div class="summary-row"><span>${i.name} &times; ${i.qty}</span><span>${money(i.price*i.qty)}</span></div>`).join('');

  root.innerHTML = `<div class="shop-shell" style="grid-template-columns:1fr 340px;">
    <form class="card" id="checkoutForm">
      <div class="card-head"><h3>Shipping Details</h3></div>
      <div class="f-row">
        <div class="f-group"><label class="f-label">Full Name</label><input class="f-control" required placeholder="Jordan Diaz"></div>
        <div class="f-group"><label class="f-label">Phone</label><input class="f-control" required placeholder="+91 90000 00000"></div>
      </div>
      <div class="f-group"><label class="f-label">Email</label><input type="email" class="f-control" required placeholder="you@example.com"></div>
      <div class="f-group"><label class="f-label">Address</label><input class="f-control" required placeholder="No. 838, Mount Road, Annasalai"></div>
      <div class="f-row f-3">
        <div class="f-group"><label class="f-label">City</label><input class="f-control" required placeholder="Chennai"></div>
        <div class="f-group"><label class="f-label">PIN Code</label><input class="f-control" required placeholder="600002"></div>
        <div class="f-group"><label class="f-label">State</label><input class="f-control" required placeholder="Tamil Nadu"></div>
      </div>
      <div class="card-head"><h3>Payment</h3></div>
      <div class="f-row f-3" style="margin-bottom:14px;">
        <label class="option-card" style="justify-content:center;"><input type="radio" name="pay" checked> UPI</label>
        <label class="option-card" style="justify-content:center;"><input type="radio" name="pay"> Card</label>
        <label class="option-card" style="justify-content:center;"><input type="radio" name="pay"> COD</label>
      </div>
      <div class="f-group"><label class="f-label">UPI ID</label><input class="f-control" placeholder="yourname@upi"></div>
      <button type="submit" class="btn btn-primary btn-block">Place Order &mdash; ${money(total)}</button>
    </form>
    <div class="card">
      <div class="card-head"><h3>Order Summary</h3></div>
      ${rows}
      <div class="summary-row"><span>Subtotal</span><span>${money(subtotal)}</span></div>
      <div class="summary-row"><span>Shipping</span><span>${shipping===0?'Free':money(shipping)}</span></div>
      <div class="summary-row"><span>GST (18%)</span><span>${money(tax)}</span></div>
      <div class="summary-row total"><span>Total</span><span>${money(total)}</span></div>
    </div>
  </div>`;

  root.querySelector('#checkoutForm').addEventListener('submit', e=>{
    e.preventDefault();
    const order = { number:'CF-'+Math.floor(10000+Math.random()*89999), date:new Date().toISOString(), items, subtotal, shipping, tax, total };
    try{ localStorage.setItem('cf_last_order', JSON.stringify(order)); }catch(err){}
    Cart.clear();
    location.href = 'order-confirmation.html';
  });
}

// ===== Order confirmation =====
function renderOrderConfirmation(){
  const root = document.getElementById('confirmRoot');
  if(!root) return;
  let order=null;
  try{ order = JSON.parse(localStorage.getItem('cf_last_order')); }catch(e){}
  if(!order){
    order = { number:'CF-48213', date:new Date().toISOString(), items:[{name:'AMD Ryzen 7 7800X3D',qty:1,price:34990}], subtotal:34990, shipping:0, tax:6298, total:41288 };
  }
  const dateStr = new Date(order.date).toLocaleDateString('en-IN',{year:'numeric',month:'long',day:'numeric'});
  const rows = order.items.map(i=>`<tr><td>${i.name}</td><td style="text-align:center;">${i.qty}</td><td style="text-align:right; font-weight:700;">${money(i.price*i.qty)}</td></tr>`).join('');
  root.innerHTML = `
    <div class="card" style="text-align:center; padding:50px 24px; margin-bottom:20px;">
      <div style="width:56px;height:56px;border-radius:50%; background:var(--success); color:#03231a; display:flex; align-items:center; justify-content:center; margin:0 auto 18px;">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:26px;height:26px;"><path d="M20 6L9 17l-5-5"/></svg>
      </div>
      <div style="font-size:20px; font-weight:700; margin-bottom:8px;">Order Confirmed!</div>
      <div style="font-size:13px; color:var(--muted);">Order #${order.number} &middot; placed ${dateStr}</div>
    </div>
    <div class="card">
      <div class="card-head"><h3>Order Summary</h3></div>
      <table style="width:100%; border-collapse:collapse; margin-bottom:16px;"><tbody>${rows}</tbody></table>
      <div class="summary-row"><span>Subtotal</span><span>${money(order.subtotal)}</span></div>
      <div class="summary-row"><span>Shipping</span><span>${order.shipping===0?'Free':money(order.shipping)}</span></div>
      <div class="summary-row"><span>GST</span><span>${money(order.tax)}</span></div>
      <div class="summary-row total"><span>Total Paid</span><span>${money(order.total)}</span></div>
      <a href="shop.html" class="btn btn-primary btn-block" style="margin-top:16px;">Continue Shopping</a>
    </div>`;
}

// ===== Wishlist page =====
function renderWishlistPage(){
  const root = document.getElementById('wishlistRoot');
  if(!root) return;
  const ids = Wishlist.get();
  const items = CATALOG.filter(p=>ids.includes(p.id));
  if(items.length===0){
    root.innerHTML = `<div class="card" style="text-align:center; padding:60px 20px;">
      <div style="font-size:17px; font-weight:700; margin-bottom:8px;">Your wishlist is empty</div>
      <div style="font-size:13px; color:var(--muted); margin-bottom:20px;">Tap the heart on any product to save it here.</div>
      <a href="shop.html" class="btn btn-primary">Browse Products</a>
    </div>`;
    return;
  }
  root.innerHTML = `<div class="product-grid">${items.map(productCardHTML).join('')}</div>`;
  bindProductGridEvents(root);
}

// ===== Bind add-to-cart / wishlist events within a container (re-bindable after re-render) =====
function bindProductGridEvents(scope){
  (scope||document).querySelectorAll('[data-add-to-cart]').forEach(btn=>{
    btn.addEventListener('click', e=>{
      e.preventDefault(); e.stopPropagation();
      Cart.add({ id:btn.dataset.id, name:btn.dataset.name, price:parseFloat(btn.dataset.price), img:btn.dataset.img });
      const original = btn.innerHTML;
      btn.innerHTML = '&#10003; Added';
      setTimeout(()=>{ btn.innerHTML = original; }, 1100);
    });
  });
  (scope||document).querySelectorAll('[data-wish]').forEach(btn=>{
    btn.addEventListener('click', e=>{
      e.preventDefault(); e.stopPropagation();
      Wishlist.toggle(btn.dataset.wish);
      btn.classList.toggle('active');
    });
  });
}

// ===== PC Builder =====
function initBuilder(){
  const root = document.getElementById('builderRoot');
  if(!root) return;
  const selection = {};

  const renderSteps = ()=>{
    root.innerHTML = BUILDER_STEPS.map((step, idx)=>{
      const opts = BUILDER_PARTS[step.key];
      const sel = selection[step.key];
      return `<div class="build-step ${sel?'done':''}">
        <div class="build-step-head">
          <div class="build-step-num">${sel ? '&#10003;' : idx+1}</div>
          <div class="build-step-title">${step.label}</div>
          ${sel ? `<div class="build-step-selected">${sel.name}</div>` : ''}
        </div>
        <div class="option-row">
          ${opts.map(o=>`
            <div class="option-card ${sel?.id===o.id?'selected':''}" data-step="${step.key}" data-opt="${o.id}">
              <img src="${o.img}" alt="${o.name}">
              <div class="option-info"><div class="option-name">${o.name}</div><div class="option-meta">${o.meta}</div></div>
              <div class="option-price">${money(o.price)}</div>
            </div>`).join('')}
        </div>
      </div>`;
    }).join('');

    root.querySelectorAll('.option-card').forEach(card=>{
      card.addEventListener('click', ()=>{
        const stepKey = card.dataset.step;
        const optId = card.dataset.opt;
        const opt = BUILDER_PARTS[stepKey].find(o=>o.id===optId);
        selection[stepKey] = opt;
        renderSteps();
        renderSummary();
      });
    });
  };

  const renderSummary = ()=>{
    const summary = document.getElementById('builderSummary');
    if(!summary) return;
    const chosen = BUILDER_STEPS.filter(s=>selection[s.key]);
    const total = chosen.reduce((sum,s)=>sum+selection[s.key].price,0);
    const lines = BUILDER_STEPS.map(s=>{
      const sel = selection[s.key];
      return sel
        ? `<div class="summary-line"><span>${s.label}</span><span class="sv">${money(sel.price)}</span></div>`
        : `<div class="summary-line empty"><span>${s.label}</span><span>&mdash;</span></div>`;
    }).join('');
    summary.innerHTML = `
      ${lines}
      <div class="summary-total"><span>Total</span><span>${money(total)}</span></div>
      ${chosen.length === BUILDER_STEPS.length ? `
        <div class="compat-note"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>All parts compatible &mdash; ready to build.</div>
        <button class="btn btn-primary btn-block" style="margin-top:16px;" id="builderAddCart">Add Full Build to Cart</button>
      ` : `<div class="compat-note" style="background:var(--surface2); border-color:var(--border); color:var(--muted);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>Pick a part for every step to see your final build.</div>`}
    `;
    document.getElementById('builderAddCart')?.addEventListener('click', ()=>{
      BUILDER_STEPS.forEach(s=>{
        const sel = selection[s.key];
        Cart.add({ id:sel.id, name:sel.name, price:sel.price, img:sel.img });
      });
      location.href = 'cart.html';
    });
  };

  renderSteps();
  renderSummary();
}

// ===== Init on load =====
document.addEventListener('DOMContentLoaded', ()=>{
  Cart.updateBadge();
  Wishlist.updateBadge();
  initSearch();

  const mobileToggle = document.getElementById('mobileToggle');
  const mobileNav = document.getElementById('mobileNav');
  mobileToggle?.addEventListener('click', ()=> {
    mobileNav?.classList.toggle('open');
    mobileToggle.classList.toggle('active');
  });
  mobileNav?.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=>{ mobileNav.classList.remove('open'); mobileToggle?.classList.remove('active'); });
  });

  // Shop page: full catalog grid render if placeholder exists
  if(document.getElementById('shopGrid')){
    renderGrid('shopGrid', CATALOG);
    initFiltering();
  }
  // Home page top picks
  if(document.getElementById('topPicksGrid')){
    renderGrid('topPicksGrid', CATALOG.slice(0,4));
  }

  bindProductGridEvents(document);
  initProductDetails();
  renderCartPage();
  renderCheckoutPage();
  renderOrderConfirmation();
  renderWishlistPage();
  initBuilder();

  // Re-bind after any dynamic render (grid/related products use bindProductGridEvents already called above,
  // but re-run once more after product-details related grid renders asynchronously in same tick)
  bindProductGridEvents(document);
});
