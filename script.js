const APARTMENTS = [
  {id:1,  name:"Apartman Uvala Borik", city:"Zadar",     price:95,  rating:4.8, beds:2, guests:4, img:"slike/slika1.jpg", amenities:["Wi-Fi","Klimatizacija","Kuhinja"]},
  {id:2,  name:"Studio Dioklecijan",   city:"Split",     price:120, rating:4.9, beds:1, guests:2, img:"slike/slika2.jpg", amenities:["Wi-Fi","Klima","Perilica"]},
  {id:3,  name:"Villa Lungomare",      city:"Rovinj",    price:150, rating:4.7, beds:2, guests:5, img:"slike/slika3.jpg", amenities:["Wi-Fi","Parking","Bazen"]},
  {id:4,  name:"Apartman Verudela",    city:"Pula",      price:70,  rating:4.5, beds:1, guests:2, img:"slike/slika4.jpg", amenities:["Wi-Fi","Parking","Terasa"]},
  {id:5,  name:"Apartman Banj",        city:"Šibenik",   price:110, rating:4.8, beds:2, guests:4, img:"slike/slika5.jpg", amenities:["Wi-Fi","Klimatizacija","Balkon"]},
  {id:6,  name:"Kuća Srđ",             city:"Dubrovnik", price:180, rating:4.9, beds:3, guests:6, img:"slike/slika6.jpg", amenities:["Wi-Fi","Parking","Pogled na more"]},
  {id:7,  name:"Studio Riva",          city:"Makarska",  price:75,  rating:4.4, beds:1, guests:2, img:"slike/slika7.jpg", amenities:["Wi-Fi","Klima","Kuhinja"]},
  {id:8,  name:"Apartman Punat",       city:"Krk",       price:130, rating:4.6, beds:2, guests:4, img:"slike/slika8.jpg", amenities:["Wi-Fi","Parking","Plaža"]},
  {id:9,  name:"Apartman Foša",        city:"Zadar",     price:85,  rating:4.5, beds:1, guests:3, img:"slike/slika9.jpg", amenities:["Wi-Fi","Klima","Lift"]},
  {id:10, name:"Apartman Bačvice",     city:"Split",     price:140, rating:4.8, beds:2, guests:4, img:"slike/slika10.jpg", amenities:["Wi-Fi","Balkon","Perilica"]},
  {id:11, name:"Villa Zlatni Rt",      city:"Rovinj",    price:160, rating:4.9, beds:2, guests:4, img:"slike/slika11.jpg", amenities:["Wi-Fi","Kamin","Pogled na more"]},
  {id:12, name:"Arena Studio",         city:"Pula",      price:82,  rating:4.6, beds:1, guests:3, img:"slike/slika12.jpg", amenities:["Wi-Fi","Parking","Klima"]},
  {id:13, name:"Apartman St. Jakov",   city:"Šibenik",   price:115, rating:4.7, beds:2, guests:4, img:"slike/slika13.jpg", amenities:["Wi-Fi","Kuhinja","Balkon"]},
  {id:14, name:"Loft Pile Gate",       city:"Dubrovnik", price:195, rating:5.0, beds:2, guests:4, img:"slike/slika14.jpg", amenities:["Wi-Fi","Klima","Perilica"]},
  {id:15, name:"Apartman Biokovo",     city:"Makarska",  price:88,  rating:4.5, beds:1, guests:3, img:"slike/slika15.jpg", amenities:["Wi-Fi","Terasa","Parking"]},
  {id:16, name:"Marina Loft Krk",      city:"Krk",       price:125, rating:4.6, beds:2, guests:4, img:"slike/slika16.jpg", amenities:["Wi-Fi","Klima","Kuhinja"]},
  {id:17, name:"Apartman Pakleni",     city:"Hvar",      price:170, rating:4.8, beds:2, guests:4, img:"slike/slika17.jpg", amenities:["Wi-Fi","Balkon","Pogled na more"]},
  {id:18, name:"Apartman Kamerlengo",  city:"Trogir",    price:102, rating:4.7, beds:1, guests:3, img:"slike/slika18.jpg", amenities:["Wi-Fi","Klima","Kuhinja"]},
  {id:19, name:"Apartman Materada",    city:"Poreč",     price:98,  rating:4.6, beds:2, guests:4, img:"slike/slika19.jpg", amenities:["Wi-Fi","Parking","Terasa"]},
  {id:20, name:"Apartman Zrće",        city:"Novalja",   price:110, rating:4.7, beds:2, guests:4, img:"slike/slika20.jpg", amenities:["Wi-Fi","Klima","Perilica"]},
  {id:21, name:"Villa Angiolina",      city:"Opatija",   price:140, rating:4.8, beds:2, guests:4, img:"slike/slika21.jpg", amenities:["Wi-Fi","Jacuzzi","Pogled"]},
  {id:22, name:"Uvala Zlatni Rat",     city:"Bol",       price:145, rating:4.8, beds:2, guests:4, img:"slike/slika22.jpg", amenities:["Wi-Fi","Klimatizacija","Balkon"]},
  {id:23, name:"Apartman Supetar",     city:"Supetar",   price:105, rating:4.6, beds:2, guests:4, img:"slike/slika23.jpg", amenities:["Wi-Fi","Parking","Terasa"]},
  {id:24, name:"Villa Korčula",        city:"Korčula",   price:155, rating:4.9, beds:3, guests:6, img:"slike/slika24.jpg", amenities:["Wi-Fi","Bazen","Pogled"]},
  {id:25, name:"Svjetionik Vis",       city:"Vis",       price:160, rating:4.8, beds:2, guests:4, img:"slike/slika25.jpg", amenities:["Wi-Fi","Kuhinja","Balkon"]},
  {id:26, name:"Kuća Maslina",         city:"Novalja",   price:115, rating:4.6, beds:2, guests:4, img:"slike/slika26.jpg", amenities:["Wi-Fi","Klima","Parking"]},
  {id:27, name:"Old Town Poreč",       city:"Poreč",     price:104, rating:4.5, beds:1, guests:3, img:"slike/slika27.jpg", amenities:["Wi-Fi","Perilica","Klima"]},
  {id:28, name:"Apartman Čiovo",       city:"Trogir",    price:112, rating:4.6, beds:2, guests:4, img:"slike/slika28.jpg", amenities:["Wi-Fi","Balkon","Kuhinja"]},
  {id:29, name:"Palmizana Loft",       city:"Hvar",      price:175, rating:4.9, beds:2, guests:4, img:"slike/slika29.webp", amenities:["Wi-Fi","Jacuzzi","Pogled"]},
  {id:30, name:"Apartman Slatina",     city:"Opatija",   price:135, rating:4.7, beds:2, guests:4, img:"slike/slika30.jpg", amenities:["Wi-Fi","Klima","Terasa"]}
];



// --- MAP COORDS (samo obalni gradovi/otoci) ---
const COORDS = {
  "Zadar":[44.1194,15.2314],"Split":[43.5081,16.4402],"Rovinj":[45.0833,13.6333],
  "Pula":[44.8683,13.8481],"Šibenik":[43.7350,15.8950],"Dubrovnik":[42.6507,18.0944],
  "Makarska":[43.2969,17.0170],"Krk":[45.0290,14.5750],"Hvar":[43.1729,16.4424],
  "Trogir":[43.5170,16.2510],"Poreč":[45.2276,13.5952],"Novalja":[44.5560,14.8866],
  "Opatija":[45.3369,14.3044],"Bol":[43.2616,16.6544],"Supetar":[43.3768,16.5553],
  "Korčula":[42.9607,17.1356],"Vis":[43.0603,16.1833]
};

// --- UTILS ---
const formatEUR = (n)=>`€${Number(n).toFixed(0)}`;
const qs  = (s,doc=document)=>doc.querySelector(s);
const qsa = (s,doc=document)=>[...doc.querySelectorAll(s)];
const loadCart = ()=> JSON.parse(localStorage.getItem('kb_cart')||'[]');
const saveCart = (c)=> localStorage.setItem('kb_cart', JSON.stringify(c));
const updateBadge = ()=> { const b=qs('#cart-badge'); if(!b) return; b.textContent = loadCart().length; };

// --- CART ---
function addToCart(item){ const cart = loadCart(); cart.push(item); saveCart(cart); updateBadge(); }
function removeFromCart(idx){ const cart = loadCart(); cart.splice(idx,1); saveCart(cart); renderCart(); updateBadge(); }

// --- AUTH (localStorage) ---
const USERS_KEY = 'kb_users';
const SESSION_KEY = 'kb_user';

function getUsers(){ return JSON.parse(localStorage.getItem(USERS_KEY) || '[]'); }
function setUsers(u){ localStorage.setItem(USERS_KEY, JSON.stringify(u)); }
function getSession(){ return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null'); }
function setSession(u){ localStorage.setItem(SESSION_KEY, JSON.stringify(u)); }
function logout(){ localStorage.removeItem(SESSION_KEY); location.href = 'index.html'; }

function seedAdmin(){
  let users = getUsers();
  if(!users.some(u => u.role === 'admin')){
    users.push({ name:'Administrator', email:'admin@adria.local', pass:'admin123', role:'admin' });
    setUsers(users);
  }
}

function handleLogin(e){
  e.preventDefault();
  const form = e.target;
  const email = form.querySelector('input[type="email"]').value.trim().toLowerCase();
  const pass  = form.querySelector('input[type="password"]').value;

  const user = getUsers().find(u => u.email.toLowerCase() === email && u.pass === pass);

  // UX: prikaži inline grešku umjesto alert
  const errBox = document.getElementById('login-error');
  if(!user){
    if(errBox) errBox.classList.remove('d-none');
    return;
  }
  if(errBox) errBox.classList.add('d-none');

  setSession({ email:user.email, name:user.name, role:user.role||'user' });
  location.href = (user.role === 'admin') ? 'admin.html' : 'index.html';
}

function handleRegister(e){
  e.preventDefault();
  const form  = e.target;
  const first = form.querySelector('input[name="first"]').value.trim();
  const last  = form.querySelector('input[name="last"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim().toLowerCase();
  const pass  = form.querySelector('input[type="password"]').value;

  const errBox = document.getElementById('reg-error');
  if(!first || !last || !email || !pass){
    if(errBox){ errBox.textContent = 'Molimo ispunite sva polja.'; errBox.classList.remove('d-none'); }
    return;
  }
  let users = getUsers();
  if(users.some(u => u.email.toLowerCase() === email)){
    if(errBox){ errBox.textContent = 'Korisnik s tim emailom već postoji.'; errBox.classList.remove('d-none'); }
    return;
  }
  if(errBox) errBox.classList.add('d-none');

  const user = { name:`${first} ${last}`, email, pass, role:'user' };
  users.push(user); setUsers(users);
  setSession({ email, name:user.name, role:'user' });
  location.href = 'index.html';
}

function initials(nameOrEmail){
  if(!nameOrEmail) return 'U';
  const p = nameOrEmail.trim().split(/\s+/);
  if(p.length >= 2) return (p[0][0] + p[1][0]).toUpperCase();
  if(nameOrEmail.includes('@')) return nameOrEmail[0].toUpperCase();
  return (nameOrEmail[0]||'U').toUpperCase();
}

function renderAuthNav(){
  const slot = document.querySelector('.js-auth-slot');
  if(!slot) return;
  const me = getSession();
  slot.innerHTML = '';

  if(!me){
    // samo jedna ikonica + Prijava
    slot.classList.remove('dropdown');
    slot.innerHTML = `
      <a href="login.html" class="nav-link d-flex align-items-center gap-1" title="Prijava" aria-label="Prijava">
        <i class="bi bi-person"></i> <span class="d-none d-lg-inline">Prijava</span>
      </a>`;
    return;
  }

  const nameShown = me.name || me.email;
  const av = initials(nameShown);
  slot.classList.add('dropdown');
  slot.innerHTML = `
    <a class="nav-link dropdown-toggle d-flex align-items-center gap-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="nav-auth-avatar">${av}</span>
      <span class="d-none d-lg-inline">${nameShown}</span>
    </a>
    <ul class="dropdown-menu dropdown-menu-end shadow">
      ${me.role === 'admin' ? `<li><a class="dropdown-item" href="admin.html"><i class="bi bi-shield-lock me-2"></i>Admin</a></li><li><hr class="dropdown-divider"></li>` : ``}
      <li><a class="dropdown-item" href="#"><i class="bi bi-person me-2"></i>Moj račun</a></li>
      <li><a class="dropdown-item" href="#" id="logout-link"><i class="bi bi-box-arrow-left me-2"></i>Odjava</a></li>
    </ul>`;

  slot.querySelector('#logout-link')?.addEventListener('click', (e)=>{ e.preventDefault(); logout(); });
}

// Admin guard – radi samo na admin.html
function guardAdmin(){
  const path = location.pathname.toLowerCase();
  if(!path.endsWith('/admin.html') && !path.endsWith('admin.html')) return;
  const me = getSession();
  if(!me || me.role !== 'admin'){ location.replace('login.html#login'); }
}



// --- FEATURED / LIST / DETAIL / CHECKOUT / CONFIRMATION / CONTACT / ADMIN ---
function renderFeatured(){ /* siguran renderer */ const grid=qs('#featured-grid'); if(!grid) return;
  const featured = APARTMENTS.slice(0,3);
  grid.innerHTML = featured.map(a=>`
    <div class="col-md-4">
      <div class="card apartment-card h-100 shadow-sm">
<img src="${a.img}" class="w-100" alt="${a.name}"
     loading="lazy" decoding="async" width="1200" height="800">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center mb-1">
            <h3 class="h5 mb-0">${a.name}</h3>
            <span class="rating">★ ${a.rating}</span>
          </div>
          <p class="text-secondary mb-2">${a.city} • ${a.beds} sobe • do ${a.guests} gosta</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="price">${formatEUR(a.price)} <span class="text-secondary fw-normal">/ noć</span></div>
            <div class="d-flex gap-2">
              <a class="btn btn-outline-dark btn-sm" href="apartment.html?id=${a.id}">Detalji</a>
              <button class="btn btn-dark btn-sm" onclick='addToCart({id:${a.id}, nights:1, from:"2025-09-01", to:"2025-09-02"})'>Dodaj</button>
            </div>
          </div>
        </div>
      </div>
    </div>`).join('');
}

function renderList(){
  const grid = qs('#list-grid'); if(!grid) return;
  const search = qs('#search'); const sort = qs('#sort');
  function apply(){
    let data = [...APARTMENTS];
    const term = (search?.value||'').toLowerCase();
    if(term) data = data.filter(a => a.city.toLowerCase().includes(term) || a.name.toLowerCase().includes(term));
    switch(sort?.value){
      case 'price-asc': data.sort((a,b)=>a.price-b.price); break;
      case 'price-desc': data.sort((a,b)=>b.price-a.price); break;
      case 'rating': data.sort((a,b)=>b.rating-a.rating); break;
      default: data.sort((a,b)=>b.rating-a.rating);
    }
    grid.innerHTML = data.map(a=>`
      <div class="col-md-4">
        <div class="card apartment-card h-100 shadow-sm">
<img src="${a.img}" class="w-100" alt="${a.name}"
     loading="lazy" decoding="async" width="1200" height="800">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-1">
              <h3 class="h5 mb-0">${a.name}</h3>
              <span class="rating">★ ${a.rating}</span>
            </div>
            <p class="text-secondary mb-2">${a.city} • ${a.beds} sobe • do ${a.guests} gosta</p>
            <div class="d-flex flex-wrap gap-2 mb-3">
              ${a.amenities.slice(0,3).map(x=>`<span class="badge badge-amenity">${x}</span>`).join('')}
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="price">${formatEUR(a.price)} <span class="text-secondary fw-normal">/ noć</span></div>
              <div class="d-flex gap-2">
                <a class="btn btn-outline-dark btn-sm" href="apartment.html?id=${a.id}">Detalji</a>
                <button class="btn btn-dark btn-sm" onclick='addToCart({id:${a.id}, nights:2, from:"2025-09-05", to:"2025-09-07"})'>Dodaj</button>
              </div>
            </div>
          </div>
        </div>
      </div>`).join('');
  }
  search?.addEventListener('input', apply);
  sort?.addEventListener('change', apply);
  apply();
}

function renderDetail(){
  const wrap = qs('#apartment-detail'); if(!wrap) return;
  const p = new URLSearchParams(location.search);
  const id = +p.get('id') || 1;
  const a = APARTMENTS.find(x=>x.id===id) || APARTMENTS[0];
  wrap.innerHTML = `
    <div class="row g-4">
      <div class="col-lg-7">
<img class="w-100 rounded-4 shadow" src="${a.img}" alt="${a.name}"
     fetchpriority="high" decoding="async" width="1200" height="800">
      </div>
      <div class="col-lg-5">
        <h1 class="h3 fw-bold">${a.name}</h1>
        <p class="text-secondary mb-1">${a.city} • ★ ${a.rating}</p>
        <div class="d-flex flex-wrap gap-2 mt-2 mb-3">
          ${a.amenities.map(x=>`<span class="badge badge-amenity">${x}</span>`).join('')}
        </div>
        <div class="price mb-3">${formatEUR(a.price)} <span class="text-secondary fw-normal">/ noć</span></div>
        <form id="book-form" class="vstack gap-3">
          <div class="row g-3">
            <div class="col-6"><label class="form-label">Dolazak</label><input id="from" type="date" class="form-control" required></div>
            <div class="col-6"><label class="form-label">Odlazak</label><input id="to" type="date" class="form-control" required></div>
          </div>
          <div>
            <label class="form-label">Broj gostiju</label>
            <input id="guests" type="number" min="1" max="${a.guests}" value="2" class="form-control">
          </div>
          <button class="btn btn-dark w-100">Dodaj u rezervacije</button>
          <div id="calc" class="text-center text-secondary small"></div>
        </form>
      </div>
    </div>`;

  const form = qs('#book-form', wrap);
  const from = qs('#from', wrap);
  const to   = qs('#to', wrap);
  const calc = qs('#calc', wrap);

  function nights(){
    if(!from.value || !to.value) return 0;
    const ms = (new Date(to.value) - new Date(from.value));
    return Math.max(0, Math.round(ms/86400000));
  }
  function refresh(){
    const n = nights();
    calc.textContent = n>0 ? `Ukupno: ${n} noći × ${formatEUR(a.price)} = ${formatEUR(n*a.price)}` : "";
  }
  from.addEventListener('change', refresh);
  to.addEventListener('change', refresh);

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const n = nights();
    if(n<=0) return;
    addToCart({id:a.id, from:from.value, to:to.value, nights:n});
    const btn = form.querySelector('button'); btn.disabled = true; btn.textContent="Dodano";
    setTimeout(()=>{ btn.disabled=false; btn.textContent="Dodaj u rezervacije";},800);
    updateBadge();
  });
}

function renderCart(){
  const wrap = qs('#cart-items'); if(!wrap) return;
  const cart = loadCart();
  if(cart.length===0){
    wrap.innerHTML = `<div class="alert alert-light border text-center">Košarica rezervacija je prazna.</div>`;
  } else {
    wrap.innerHTML = cart.map((item, i)=>{
      const a = APARTMENTS.find(x=>x.id===item.id);
      const total = (item.nights || 1) * a.price;
      return `
      <div class="card shadow-sm">
        <div class="card-body d-flex gap-3">
          <img src="${a.img}" class="rounded" style="width:140px;height:100px;object-fit:cover" alt="${a.name}">
          <div class="flex-fill">
            <div class="d-flex justify-content-between">
              <strong>${a.name}</strong>
              <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${i})">Ukloni</button>
            </div>
            <div class="text-secondary small">${a.city} • ★ ${a.rating}</div>
            <div class="mt-2 text-secondary small">📅 ${item.from || '-'} → ${item.to || '-'} (${item.nights || 1} noć/i)</div>
          </div>
          <div class="text-end fw-bold">${formatEUR(total)}</div>
        </div>
      </div>`;
    }).join('');
  }
  const subtotal = cart.reduce((s,it)=>{
    const a = APARTMENTS.find(x=>x.id===it.id);
    return s + (a ? a.price*(it.nights||1) : 0);
  },0);
  const service = Math.round(subtotal*0.05);
  qs('#subtotal') && (qs('#subtotal').textContent = formatEUR(subtotal));
  qs('#service')  && (qs('#service').textContent  = formatEUR(service));
  qs('#total')    && (qs('#total').textContent    = formatEUR(subtotal+service));
  const clr = qs('#clear-cart'); clr && (clr.onclick = ()=>{ saveCart([]); renderCart(); updateBadge(); });
}

function setupCheckout(){
  const form = qs('#checkout-form'); if(!form) return;
  const me = getSession();
  if(me && qs('#f-name')){
    const parts = (me.name || '').split(' ');
    qs('#f-name').value = parts[0] || '';
    qs('#l-name').value = parts.slice(1).join(' ') || '';
    qs('#email').value  = me.email || '';
  }
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const cart = loadCart(); if(cart.length===0){ return; }
    const user = {
      first: qs('#f-name').value,
      last:  qs('#l-name').value,
      email: qs('#email').value,
      phone: qs('#phone').value,
      note:  qs('#note').value
    };
    const subtotal = cart.reduce((s,it)=>{
      const a = APARTMENTS.find(x=>x.id===it.id);
      return s + (a ? a.price*(it.nights||1) : 0);
    },0);
    const service = Math.round(subtotal*0.05);
    const order = {
      id: "AD" + Date.now().toString().slice(-8),
      guest: {name: `${user.first} ${user.last}`, email: user.email},
      items: cart, total: subtotal+service, service, subtotal,
      status: "Zaprimljeno"
    };
    localStorage.setItem('kb_last_order', JSON.stringify(order));
    saveCart([]); updateBadge();
    location.href = "potvrda.html";
  });
}

function renderConfirmation(){
  const box = qs('#order-summary'); if(!box) return;
  const order = JSON.parse(localStorage.getItem('kb_last_order')||'null');
  if(!order){ box.innerHTML = "<p>Rezervacija nije pronađena.</p>"; return; }
  qs('#order-id') && (qs('#order-id').textContent = order.id);
  const lines = order.items.map(it=>{
    const a = APARTMENTS.find(x=>x.id===it.id);
    const total = (it.nights||1)*(a?a.price:0);
    return `<li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="me-auto">
        <div class="fw-bold">${a?a.name:'Apartman'} • ${a?a.city:''}</div>
        <small>Od ${it.from} do ${it.to} • ${it.nights} noći</small>
      </div>
      <span>${formatEUR(total)}</span>
    </li>`;
  }).join('');
  box.innerHTML = `
    <div class="vstack gap-2">
      <div><strong>Gost:</strong> ${order.guest.name} • ${order.guest.email}</div>
      <ul class="list-group">${lines}</ul>
      <div class="d-flex justify-content-between mt-3"><span>Međuzbroj</span><strong>${formatEUR(order.subtotal)}</strong></div>
      <div class="d-flex justify-content-between text-secondary"><span>Usluga</span><span>${formatEUR(order.service)}</span></div>
      <hr>
      <div class="d-flex justify-content-between fs-5"><span>Ukupno</span><strong>${formatEUR(order.total)}</strong></div>
    </div>`;
}

function setupContact(){
  const form = qs('#contact-form'); if(!form) return;
  const res  = qs('#contact-result');
  form.addEventListener('submit', (e)=>{ e.preventDefault(); res?.classList.remove('d-none'); form.reset(); });
}

function renderAdmin(){
  const table = qs('#admin-table'); if(!table) return;
  const last = JSON.parse(localStorage.getItem('kb_last_order')||'null');
  if(!last){ table.innerHTML = '<tr><td colspan="6" class="text-center text-secondary">Nema podataka.</td></tr>'; return; }
  const it = last.items[0];
  const a = APARTMENTS.find(x=>x.id===it.id);
  table.innerHTML = `<tr>
    <td>1</td>
    <td>${a?a.name:'Apartman'}</td>
    <td>${last.guest.name}<div class="text-secondary small">${last.guest.email}</div></td>
    <td>${it.from} → ${it.to} (${it.nights} noći)</td>
    <td>${formatEUR(last.total)}</td>
    <td><span class="badge bg-success">Zaprimljeno</span></td>
  </tr>`;
}

// --- INIT (sigurno na svim stranicama) ---
document.addEventListener('DOMContentLoaded', ()=>{
  seedAdmin(); renderAuthNav(); updateBadge();
  renderFeatured(); renderList(); renderDetail();
  renderCart(); setupCheckout(); renderConfirmation();
  setupContact(); renderAdmin(); guardAdmin();
});

// Tajni ulaz (Ctrl+Shift+A)
document.addEventListener('keydown', (e)=>{ if(e.ctrlKey && e.shiftKey && e.key==="A"){ location.href="admin.html"; }});

// MAPA (Leaflet) — safe init
document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('#map');
  if (!el || typeof window.L === 'undefined') return;
  try {
    const map = L.map('map', { scrollWheelZoom:false }).setView([44.5, 15.5], 6);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(map);
    const jitter = () => (Math.random()-0.5) * 0.04;
    APARTMENTS.forEach(a => {
      const pos = COORDS[a.city]; if (!pos) return;
      const marker = L.marker([pos[0]+jitter(), pos[1]+jitter()]).addTo(map);
      marker.bindPopup(`
        <strong>${a.name}</strong><br>
        ${a.city}<br>
        <span class="fw-bold">${a.price} € / noć</span><br>
        <a href="apartment.html?id=${a.id}" class="btn btn-sm btn-dark mt-1">Detalji</a>
      `);
    });
  } catch (err) { console.warn('Map init skipped:', err); }
});

// KALENDAR (Flatpickr) — safe init
document.addEventListener('DOMContentLoaded', () => {
  const inEl = document.querySelector('#checkin');
  const outEl = document.querySelector('#checkout');
  if (!inEl || !outEl || typeof window.flatpickr === 'undefined') return;
  const fpOut = flatpickr(outEl, { dateFormat: "Y-m-d", minDate: "today" });
  flatpickr(inEl, {
    dateFormat: "Y-m-d", minDate: "today",
    onChange: (dates) => { if (dates[0]) fpOut.set('minDate', dates[0]); }
  });
});

// CHAT FAB – SIGURNO (ne puca ako elemenata nema)
document.addEventListener('DOMContentLoaded', ()=>{
  const toggle = document.getElementById("chatToggle");
  const close  = document.getElementById("chatClose");
  const box    = document.getElementById("chatBox");

  toggle?.addEventListener("click", ()=>{ box?.classList.toggle("open"); });
  close?.addEventListener("click",  ()=>{ box?.classList.remove("open"); });

  // chips fill (za kontakt/CHAT)
  document.addEventListener("click", (e)=>{
    const chip = e.target.closest(".chip");
    if(!chip) return;
    const target = document.querySelector("#chat-message");
    if(target){ target.value = chip.getAttribute("data-fill") || ""; target.focus(); }
  });
});
