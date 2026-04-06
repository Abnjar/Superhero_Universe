const products = [
    { id: 1, name: "Minimalist Cotton Shirt",          price: 3499, category:  "men",     size: "M", img: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/shirt/f/z/l/l-plain-sky-blue-a1-hasini-fashion-original-imahgtf9mk7xht4p.jpeg?q=90" },
    { id: 2, name: "Silk Summer Dress",                price: 5999, category:  "women",   size: "S", img: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/dress/c/c/f/-original-imaheazspszgtcuz.jpeg?q=90" },
    { id: 3, name: "Structure Denim Jacket",           price: 4299, category:  "kids",    size: "S", img: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/jacket/p/d/r/6-7-years-1-no-boysngirls-happy-comics-denim-jacket-mysha-original-imahfct94ehq7fb3.jpeg?q=90" },
    { id: 4, name: "Overcoat in Wool",                 price: 12999, category: "women",   size: "L", img: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/coat/b/b/z/3xl-dlnxwcoat48earthbrwn-chkokko-original-imahgvkrahjk5xmp.jpeg?q=90" },
    { id: 5, name: "Relaxed Fit Chinos",               price: 2799, category:  "men",     size: "L", img: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/trouser/h/f/j/34-31058795-roadster-original-imah8nxrg3fkmez6.jpeg?q=90" },
    { id: 6, name: "Green Midi/Calf",                  price: 799, category:   "women",   size: "M", img: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/dress/f/i/y/s-dr11272-new25-sheetal-accociates-original-imahgs3wfyfmbh3z.jpeg?q=90"},
    { id: 7, name: "Brown Midi/Calf",                  price: 799, category:   "women",   size: "M", img: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/dress/l/h/2/m-floe-130-133-purvaja-original-imahag9yyhg76nhz.jpeg?q=90"},
    { id: 8, name: "Tankori Kanjivaram Tissue Saree",  price: 999, category:   "women",   size: "L", img: "https://rukminim2.flixcart.com/image/1280/1280/xif0q/sari/y/r/n/free-regular-tankori-unstitched-original-imahdnhxbqubzdgz.jpeg?q=90"},
    { id: 9, name: "Men Regular Fit Shirt",            price: 899, category:   "men",     size: "L", img: "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260311/xF02/69b14cc84970ce6a6e3a0c28/-473Wx593H-703144500-brown-MODEL.jpg"},
    { id: 10, name: " Boys Embroidered Relaxed Shirt", price: 699, category:   "kids",   size: "S", img: "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20250725/zNMz/68836b2b3d468c61ab20b29b/-473Wx593H-443081680-ltblue-MODEL.jpg"},
    { id: 11, name: "Hello Kitty Fit & Flare Dress",   price: 699, category:   "kids",   size: "s", img: "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20251118/2jmT/691c73b5a470c5082f9e64ad/-473Wx593H-443098207-pink-MODEL.jpg"},
    { id: 12, name: "Girls Relaxed Cargo Trousers",    price: 899, category:   "kids",   size: "s", img: "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20251205/Wmp9/6932c1ab720fb821d36e9fa9/-473Wx593H-702589411-blue-MODEL.jpg"},
    { id: 13, name: "Women One-Shoulder Bodycon Dress",price: 1799, category:   "women",   size: "L", img: "https://assets-jiocdn.ajio.com/medias/sys_master/root/20250610/VhBC/6847655d55340d4b4f96d16a/-1117Wx1400H-701704665-red-MODEL.jpg"},
    { id: 14, name: "Men Regular Fit Shirt"           ,price: 799, category:   "men",   size: "L", img:"https://assets-jiocdn.ajio.com/medias/sys_master/root/20250617/yGME/685120c27a6cd4182fb6d38f/-473Wx593H-443062636-green-MODEL.jpg"},
    { id: 15, name: "Men Relaxed Fit Chinos"          ,price: 799, category:   "men",   size: "L", img:"https://assets-jiocdn.ajio.com/medias/sys_master/root1/20251224/FhIz/694bfc71720fb821d3af18e3/-473Wx593H-443099783-beige-MODEL4.jpg"},
    { id: 16, name: "Women Striped Regular Fit Top"   ,price: 1799, category:   "women",   size: "M", img:"https://assets-jiocdn.ajio.com/medias/sys_master/root1/20250728/nDoS/688765a63d468c61ab285b14/-1117Wx1400H-702028648-beige-MODEL.jpg"},
    { id: 17, name: "Women Lace Slim Fit Top"         ,price: 1399, category:   "women",   size: "M", img:"https://assets-jiocdn.ajio.com/medias/sys_master/root1/20250902/ALRL/68b5f9b83d468c61abb06cd2/-1117Wx1400H-702189108-white-MODEL.jpg"},
    { id: 18, name: "Disney Graphic Print Oversized"  ,price: 899, category:   "women",   size: "L", img:"https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260119/ILb5/696e4621cbfa0d560881bf49/-473Wx593H-702779372-white-MODEL.jpg"},
    { id: 19, name: "Linen Cotton Printed Saree",      price: 1299, category:   "women",   size: "L", img:"https://assets-jiocdn.ajio.com/medias/sys_master/root1/20251222/aGBg/69492f95720fb821d3a14c11/-1117Wx1400H-702647422-pink-MODEL2.jpg"},
    { id: 20, name: "Embroidered Half & Half Saree",   price: 1499, category:   "women",   size: "L", img:"https://assets-jiocdn.ajio.com/medias/sys_master/root/20230628/Souv/649bc06deebac147fc1eed9d/-1117Wx1400H-465944058-black-MODEL.jpg"},
    { id: 21, name: "Men Regular Spread-Collar Shirt", price: 999, category:   "men",   size: "L", img:"https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260218/Aiey/6994ca66cbfa0d5608109f27/-473Wx593H-702972686-brown-MODEL.jpg"},
    { id: 22, name: "Men Shirt with Patch Pocket",     price: 999, category:   "men",   size: "L", img:"https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260121/e2XR/6970bd75cbfa0d56088aca09/-473Wx593H-702787162-olive-MODEL.jpg"},
    { id: 23, name: "Boys Printed Tailored Fit Shirt", price: 799, category:   "kids",   size: "S", img:"https://assets-jiocdn.ajio.com/medias/sys_master/root1/20260227/QQFO/69a1793d08a98823902a58ad/-1117Wx1400H-443111812-white-MODEL.jpg"},
    { id: 24, name: "Graphic Print Round-Neck T-Shirt",price: 899, category:   "kids",   size: "S", img:"https://assets-jiocdn.ajio.com/medias/sys_master/root1/20251110/20eJ/6911c5bb88d6d62ff8d537e0/-473Wx593H-443615558-multi-MODEL.jpg"},
    { id: 25, name: "Shein Square Neck Balloon Sleeves Blouson Fitted Short Top",price: 999, category:   "women",   size: "M", img:"https://assets.sheinindia.in/medias/shein_sys_master/root/20250301/9YRv/67c29d422960820c49c10335/-1117Wx1400H-443319259-red-MODEL3.jpg"},
];

let cart = [];
let wishlist = [];
let activeCategory = "";

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('productGrid');
    const searchInput = document.getElementById('search');

    // --- Main Rendering Engine ---
    
    window.renderProducts = (items) => {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = '';
    
    if (items.length === 0) {
        grid.innerHTML = `<div class="no-results"><p>No pieces found.</p><button onclick="resetFilters()" class="reset-link">Reset</button></div>`;
        return;
    }

    items.forEach(p => {
        const isFav = wishlist.some(item => item.id === p.id);
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="img-container">
                <button class="wishlist-add" onclick="toggleWishlist(${p.id})">${isFav ? '❤️' : '🤍'}</button>
                <img src="${p.img}" class="product-img" onclick="openModal(${p.id})">
                <button class="quick-add" onclick="addToCart(${p.id})">Quick Add +</button>
            </div>
            <div class="product-info">
                <div class="info-flex">
                   <h3>${p.name.toUpperCase()}</h3>
                   <p class="product-price">₹${p.price.toLocaleString()}</p>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
};
     

// --- Cart Logic ---
window.addToCart = (id) => {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCartUI();
    showToast(`${product.name} added to bag`);
    function updateCartUI() {
    const container = document.getElementById('cartItems');
    const totalEl = document.getElementById('cartTotal');
    const countEl = document.getElementById('cartCount');
    const progress = document.getElementById('progressBar');
    const shipMsg = document.getElementById('shippingMsg');
    
    container.innerHTML = '';
    let total = 0;

    // Use a Map or Object to track quantities if not already structured
    const uniqueItems = [...new Set(cart.map(item => item.id))];

    uniqueItems.forEach(id => {
        const product = products.find(p => p.id === id);
        const quantity = cart.filter(item => item.id === id).length;
        const subtotal = product.price * quantity;
        total += subtotal;

        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <img src="${product.img}" class="cart-item-img">
            <div class="cart-item-info">
                <h4>${product.name}</h4>
                <p>₹${product.price.toLocaleString()}</p>
                <div class="qty-controls">
                    <button class="qty-btn" onclick="updateQty(${id}, -1)">-</button>
                    <span class="qty-val">${quantity}</span>
                    <button class="qty-btn" onclick="updateQty(${id}, 1)">+</button>
                </div>
            </div>
            <button class="remove-btn" onclick="removeAllOfItem(${id})">✕</button>
        `;
        container.appendChild(div);
    });

    // Update Shipping Goal (Goal: ₹5000)
    const goal = 5000;
    const percentage = Math.min((total / goal) * 100, 100);
    progress.style.width = `${percentage}%`;
    
    if (total >= goal) {
        shipMsg.innerHTML = "You've unlocked <strong>Free Shipping</strong>";
    } else {
        shipMsg.innerHTML = `Add ₹${(goal - total).toLocaleString()} more for <strong>Free Shipping</strong>`;
    }

    totalEl.innerText = total.toLocaleString();
    countEl.innerText = cart.length;
}

// Logic for quantity buttons
window.updateQty = (id, change) => {
    if (change > 0) {
        const product = products.find(p => p.id === id);
        cart.push(product);
    } else {
        const index = cart.findLastIndex(item => item.id === id);
        if (index > -1) cart.splice(index, 1);
    }
    updateCartUI();
};

window.removeAllOfItem = (id) => {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
};
};

function updateCartUI() {
    const container = document.getElementById('cartItems');
    const totalEl = document.getElementById('cartTotal');
    const countEl = document.getElementById('cartCount');
    
    container.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const div = document.createElement('div');
        div.className = 'sidebar-item';
        div.innerHTML = `
            <div class="item-details">
                <p class="item-name">${item.name}</p>
                <p class="item-price">₹${item.price.toLocaleString()}</p>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})">✕</button>
        `;
        container.appendChild(div);
    });

    totalEl.innerText = total.toLocaleString();
    countEl.innerText = cart.length;
}

window.removeFromCart = (index) => {
    cart.splice(index, 1);
    updateCartUI();
};

function showToast(msg) {
    const t = document.getElementById('toast');
    t.innerText = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
}

// Connect the Modal Add Button
document.getElementById('modalAdd').onclick = () => {
    // We need to know which ID is currently in the modal. 
    // A simple way is to check the name or store a global 'currentModalId'
    const name = document.getElementById('modalName').innerText;
    const product = products.find(p => p.name === name);
    if(product) addToCart(product.id);
    document.getElementById('modal').classList.add('hidden');
}; 

    // --- Filter & Search Logic ---
    function applyAllFilters() {
        let filtered = [...products];
        const searchTerm = searchInput.value.toLowerCase().trim();
        const sizeTerm = document.getElementById('sizeFilter').value;
        const sortTerm = document.getElementById('sort').value;

        if (activeCategory) filtered = filtered.filter(p => p.category === activeCategory);
        if (searchTerm) filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm));
        if (sizeTerm) filtered = filtered.filter(p => p.size === sizeTerm);
        
        if (sortTerm === "low") filtered.sort((a, b) => a.price - b.price);
        if (sortTerm === "high") filtered.sort((a, b) => b.price - a.price);

        renderProducts(filtered);
    }

    // --- Event Listeners ---
    searchInput.addEventListener('input', applyAllFilters);
    document.getElementById('sizeFilter').onchange = applyAllFilters;
    document.getElementById('sort').onchange = applyAllFilters;

    document.querySelectorAll('.category-card').forEach(card => {
        card.onclick = () => {
            document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            activeCategory = card.dataset.category;
            applyAllFilters();
        };
    });

    window.resetFilters = () => {
        searchInput.value = '';
        document.getElementById('sizeFilter').value = '';
        document.getElementById('sort').value = '';
        activeCategory = "";
        applyAllFilters();
    };

    // --- Sidebar & Theme Logic ---
    const setupSidebar = (btnId, sidebarId, closeId) => {
        document.getElementById(btnId).onclick = () => document.getElementById(sidebarId).classList.add('open');
        document.getElementById(closeId).onclick = () => document.getElementById(sidebarId).classList.remove('open');
    };
    setupSidebar('cartBtn', 'cartSidebar', 'closeCart');
    setupSidebar('wishlistBtn', 'wishlistSidebar', 'closeWishlist');

    document.getElementById('darkToggle').onclick = () => {
        document.body.classList.toggle('dark-mode');
        document.getElementById('darkToggle').innerText = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    };

    // --- Initial Load ---
    renderProducts(products);
});

// Modal Logic
window.openModal = (id) => {
    const p = products.find(prod => prod.id === id);
    document.getElementById('modalImg').src = p.img;
    document.getElementById('modalName').innerText = p.name;
    document.getElementById('modalPrice').innerText = "₹" + p.price.toLocaleString();
    document.getElementById('modal').classList.remove('hidden');
};
document.getElementById('closeModal').onclick = () => document.getElementById('modal').classList.add('hidden');

// Wishlist Logic
window.toggleWishlist = (id) => {
    const prod = products.find(p => p.id === id);
    const idx = wishlist.findIndex(p => p.id === id);
    idx > -1 ? wishlist.splice(idx, 1) : wishlist.push(prod);
    document.getElementById('wishCount').innerText = wishlist.length;
    // Note: Re-rendering full grid can be slow, but works for small catalogs
    document.querySelectorAll('.category-card.active')[0].click(); 
};




function animateCounters() {
  const counters = document.querySelectorAll('.stat-num');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const target = parseInt(el.dataset.target);
      const duration = 1800;
      const start = performance.now();

      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(ease * target).toLocaleString();
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = target.toLocaleString();
      }

      requestAnimationFrame(update);
      observer.unobserve(el);
    });
  }, { threshold: 0.4 });

  counters.forEach(el => observer.observe(el));
}