const menuData = [
  { id:1,  cat:'starters', name:'Caesar Salad',          desc:'Romaine, parmesan, croutons, house Caesar dressing',           price:9,  img:'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500&q=80', badges:['veg'] },
  { id:2,  cat:'starters', name:'Loaded Nachos',          desc:'Tortilla chips, cheddar, jalapeños, salsa & guacamole',         price:11, img:'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500&q=80', badges:['pop','spicy'] },
  { id:3,  cat:'starters', name:'Crispy Calamari',        desc:'Golden fried squid rings with zesty marinara dip',              price:12, img:'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&q=80', badges:['pop'] },
  { id:4,  cat:'starters', name:'French Onion Soup',      desc:'Rich beef broth, caramelized onions, gruyère crouton',          price:10, img:'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&q=80', badges:[] },
  { id:5,  cat:'burgers',  name:'Classic Smash Burger',   desc:'Double smash patty, American cheese, pickles, secret sauce',   price:15, img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80', badges:['pop'] },
  { id:6,  cat:'burgers',  name:'BBQ Bacon Burger',       desc:'Beef patty, crispy bacon, BBQ sauce, onion rings',              price:17, img:'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&q=80', badges:['pop'] },
  { id:7,  cat:'burgers',  name:'Spicy Jalapeño Burger',  desc:'Beef patty, pepper jack, jalapeños, chipotle mayo',             price:16, img:'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&q=80', badges:['spicy'] },
  { id:8,  cat:'pizza',    name:'Margherita Pizza',       desc:'San Marzano tomato, fresh mozzarella, basil, olive oil',       price:14, img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80', badges:['veg','pop'] },
  { id:9,  cat:'pizza',    name:'Pepperoni Pizza',        desc:'Classic pepperoni, mozzarella, rich tomato sauce',              price:16, img:'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&q=80', badges:['pop'] },
  { id:10, cat:'pizza',    name:'BBQ Chicken Pizza',      desc:'Smoky BBQ sauce, grilled chicken, red onion, cilantro',         price:17, img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80', badges:[] },
  { id:11, cat:'mains',    name:'Grilled Ribeye Steak',   desc:'12oz prime cut, truffle butter, garlic mashed potatoes',       price:32, img:'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80', badges:['pop'] },
  { id:12, cat:'mains',    name:'Spaghetti Bolognese',    desc:'Slow-cooked beef ragù, fresh pasta, aged parmesan',             price:16, img:'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=500&q=80', badges:[] },
  { id:13, cat:'mains',    name:'Pan-Seared Salmon',      desc:'Fresh Atlantic salmon, lemon butter sauce, asparagus',         price:24, img:'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&q=80', badges:['pop'] },
  { id:14, cat:'mains',    name:'Chicken Tikka Masala',   desc:'Tender chicken in creamy spiced tomato sauce, basmati rice',  price:18, img:'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=500&q=80', badges:['spicy','pop'] },
  { id:15, cat:'asian',    name:'Sushi Platter (12pc)',   desc:'Salmon, tuna & prawn nigiri + California rolls',               price:26, img:'https://images.unsplash.com/photo-1553621042-f6e147245754?w=500&q=80', badges:['pop'] },
  { id:16, cat:'asian',    name:'Chicken Pad Thai',       desc:'Rice noodles, chicken, peanuts, bean sprouts, lime',           price:16, img:'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=500&q=80', badges:['spicy'] },
  { id:17, cat:'asian',    name:'Tonkotsu Ramen',         desc:'Rich pork broth, chashu pork, soft egg, bamboo shoots',       price:18, img:'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&q=80', badges:['pop'] },
  { id:18, cat:'asian',    name:'Kung Pao Chicken',       desc:'Stir-fried chicken, peanuts, dried chili, Sichuan sauce',     price:17, img:'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=500&q=80', badges:['spicy'] },
  { id:19, cat:'desserts', name:'Chocolate Lava Cake',     desc:'Warm dark chocolate cake, vanilla bean ice cream',             price:9,  img:'https://images.unsplash.com/photo-1602351447937-745cb720612f?w=500&q=80', badges:['pop'] },
  { id:20, cat:'desserts', name:'New York Cheesecake',     desc:'Classic creamy cheesecake with fresh berry compote',           price:8,  img:'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&q=80', badges:['pop'] },
  { id:21, cat:'desserts', name:'Tiramisu',                desc:'Espresso-soaked ladyfingers, mascarpone, cocoa dust',          price:8,  img:'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&q=80', badges:['veg'] },
];

let cart = {};
let currentCat = 'all';

function renderMenu() {
  const list = currentCat === 'all' ? menuData : menuData.filter(i => i.cat === currentCat);
  document.getElementById('menu-grid').innerHTML = list.map(item => `
    <div class="dish-card">
      <div class="dish-img-wrap">
        <img src="${item.img}" alt="${item.name}" loading="lazy">
        <div class="dish-badges">
          ${item.badges.map(b =>
            b==='pop'   ? '<span class="badge badge-pop">⭐ Popular</span>' :
            b==='veg'   ? '<span class="badge badge-veg">🌿 Veg</span>' :
                          '<span class="badge badge-spicy">🌶 Spicy</span>'
          ).join('')}
        </div>
      </div>
      <div class="dish-body">
        <div class="dish-name">${item.name}</div>
        <div class="dish-desc">${item.desc}</div>
        <div class="dish-footer">
          <span class="dish-price">$${item.price}.00</span>
          <button class="add-btn ${cart[item.id]?'in-cart':''}" onclick="addItem(${item.id})" aria-label="Add ${item.name}">
            ${cart[item.id] ? cart[item.id] : '+'}
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterMenu(cat, btn) {
  currentCat = cat;
  document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMenu();
}

function addItem(id) {
  cart[id] = (cart[id] || 0) + 1;
  updateCart();
  renderMenu();
  showToast('Added to order!');
  if (!document.getElementById('order-sidebar').classList.contains('open')) toggleCart();
}

function changeQty(id, delta) {
  cart[id] = (cart[id] || 0) + delta;
  if (cart[id] <= 0) delete cart[id];
  updateCart();
  renderMenu();
}

function updateCart() {
  const keys = Object.keys(cart);
  const total = keys.reduce((s, id) => s + menuData.find(m=>m.id==id).price * cart[id], 0);
  const count = keys.reduce((s, id) => s + cart[id], 0);

  document.getElementById('cart-count').textContent = count;

  if (keys.length === 0) {
    document.getElementById('sidebar-items').innerHTML = '<div class="empty-cart"><div class="empty-cart-icon">🍽️</div><p>Your cart is empty.<br>Add something delicious!</p></div>';
    document.getElementById('sidebar-footer').style.display = 'none';
    return;
  }

  document.getElementById('sidebar-footer').style.display = 'block';
  document.getElementById('total-val').textContent = '$' + total.toFixed(2);

  document.getElementById('sidebar-items').innerHTML = keys.map(id => {
    const item = menuData.find(m => m.id == id);
    return `<div class="cart-row">
      <img class="cart-row-img" src="${item.img}" alt="${item.name}">
      <div class="cart-row-info">
        <div class="cart-row-name">${item.name}</div>
        <div class="cart-row-price">$${(item.price * cart[id]).toFixed(2)}</div>
        <div class="qty-ctrl">
          <button class="qty-btn" onclick="changeQty(${id},-1)">−</button>
          <span class="qty-num">${cart[id]}</span>
          <button class="qty-btn" onclick="changeQty(${id},1)">+</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function toggleCart() {
  document.getElementById('order-sidebar').classList.toggle('open');
}

function checkout() {
  const keys = Object.keys(cart);
  if (!keys.length) return;
  const total = keys.reduce((s, id) => s + menuData.find(m=>m.id==id).price * cart[id], 0);
  const summary = keys.map(id => `${cart[id]}× ${menuData.find(m=>m.id==id).name}`).join(', ');
  alert(`✅ Order placed!\n\n${summary}\n\nTotal: $${total.toFixed(2)}\n\nThank you! Your order will be ready in ~30 minutes.`);
  cart = {};
  updateCart();
  renderMenu();
  toggleCart();
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2000);
}

// Initial Render
renderMenu();