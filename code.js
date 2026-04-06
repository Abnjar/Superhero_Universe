// 1. Data Source
const destinations = [
    { 
        id: 1,
        name: "Kyoto", 
        vibe: "Zen & Tradition", 
        category: "Cities", 
        price: "$1,200", 
        img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
        desc: "Experience the heart of Japanese culture. Walk through the Fushimi Inari-taisha shrine and enjoy authentic tea ceremonies in ancient wooden temples."
    },
    { 
        id: 2,
        name: "Amalfi Coast", 
        vibe: "Luxury & Sea", 
        category: "Nature", 
        price: "$2,100", 
        img: "https://images.unsplash.com/photo-1533105079780-92b9be482077",
        desc: "A vertical landscape of pastel-colored houses perched above the turquoise Mediterranean. Ideal for coastal hikes and world-class dining."
    },
    { 
        id: 3,
        name: "Tulum", 
        vibe: "Boho & Jungle", 
        category: "Adventure", 
        price: "$950", 
        img: "https://images.unsplash.com/photo-1504730655501-24c39ac53f0e",
        desc: "Where Mayan ruins meet white sand beaches. Tulum offers a unique blend of spiritual wellness and adventurous jungle excursions."
    },
    { 
        id: 4,
        name: "Lofoten", 
        vibe: "Nature & Arctic", 
        category: "Nature", 
        price: "$1,800", 
        img: "https://travel-shark.com/wp-content/uploads/2023/03/underbridge-scaled.jpg",
        desc: "Rugged mountains, deep fjords, and the Northern Lights. Lofoten is a photographer's dream located well within the Arctic Circle."
    },
    { 
        id: 5,
        name: "Taj Mahal", 
        vibe: "Tragic Romance", 
        category: "Cities", 
        price: "$1,000", 
        img: "https://hippie-inheels.com/wp-content/uploads/2018/03/taj-mahal-places-to-visit-in-india.jpg",
        desc: "The Taj Mahal is an ivory-white marble mausoleum in Agra, India, commissioned in 1632 by Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal."
    },
     { 
        id: 6,
        name: "Rann of Kutch", 
        vibe: "magical blend of peaceful vastness and vibrant cultural celebration", 
        category: "Nature", 
        price: "$800", 
        img: "https://hippie-inheels.com/wp-content/uploads/2018/02/rann-utsav-2017-18-2325856_1280.jpg",
        desc: "The Rann of Kutch is a massive, seasonal salt marsh and desert located in Gujarat, India, and partly in Pakistan. Renowned for its surreal white salt landscape (the Great Rann), it turns into a shallow, pink-tinted wetland during the monsoon."
    },
     { 
        id: 7,
        name: "Darjeeling", 
        vibe: "Mountain & Tea", 
        category: "Nature", 
        price: "$1,000", 
        img: "https://hippie-inheels.com/wp-content/uploads/2018/02/toy-train-2725148_1280.jpg",
        desc: "Darjeeling, known as the Queen of the Hills, is a stunning town in West Bengal, India, located in the Lesser Himalayas at 2,042 meters. Famous for its world-renowned tea, the scenic Darjeeling Himalayan Railway (a UNESCO World Heritage Site), and majestic views of Mt. Kanchenjunga, it is a premier tourist destinatio"
    },
     { 
        id: 8,
        name: "Hampi", 
        vibe: "Historical & Ruins", 
        category: "Cities", 
        price: "$1,300", 
        img: "https://cdn.audleytravel.com/3947/2816/79/15996558-ancient-ruins-in-hampi.jpg",
        desc: "Hampi, a UNESCO World Heritage Site in Karnataka, India, is the breathtaking ruin of the 14th-century Vijayanagara Empire's capital, once one of the world's largest cities"
    },
     { 
        id: 9,
        name: "Turkey , Cappadocia", 
        vibe: "Nature", 
        category: "Nature", 
        price: "$1,600", 
        img: "https://kelseyinlondon.com/wp-content/uploads/2025/01/things-to-do-in-cappadocia-hot-air-balloon-watching-tour.jpg",
        desc: "Cappadocia is a semi-arid region in central Turkey famous for its unique “fairy chimneys” – towering, cone-shaped rock formations clustered in Monks Valley, Love Valley, Göreme, Uchisar, and elsewhere. Uchisar Castle and Göreme Open Air Museum contain Bronze Age homes carved into valley walls by troglodytes (cave dwellers) and later used as refuges by early Christians seeking to avoid persecution."
    },
     { 
        id: 10,
        name: "Vaitnam, Halong Bay", 
        vibe: "nature & serenity", 
        category: "Nature", 
        price: "$1,400", 
        img: "https://www.paradisevietnam.com/public/backend/uploads/where-to-stay-in-halong-bay/places-to-visit-in-halong-bay_(7).jpg",
        desc: "Located in northeast Vietnam, this iconic UNESCO Heritage Site is known for its dreamy landscape of emerald waters and more than 1600 rugged karst limestone islands rising up in the natural bay and topped by rainforests"
    },
     { 
        id: 11,
        name: "Naxos Town, Naxos, Greece", 
        vibe: "Mordern & Traditional", 
        category: "Cities", 
        price: "$1,500", 
        img: "https://images.squarespace-cdn.com/content/v1/6324802d2fb2bb196e51937d/8c5c4807-49a3-41bd-b238-5335c94047ab/Naxos+Greece00018.jpg",
        desc: "Naxos: Soak in the Greek Island life! Take the short walk from town to the Temple of Apollo. Rent a pedal boat. Have late-afternoon drinks at 1739 overlooking Naxos."
    },
];

// 2. Select Elements
const grid = document.getElementById('destinationsGrid');
const tags = document.querySelectorAll('.tag');
const searchInput = document.getElementById('searchInput');
const modal = document.getElementById('detailModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close-modal');

// 3. Render Cards Function
function renderCards(data) {
    grid.innerHTML = data.map((item, index) => `
        <div class="card animate-up" style="transition-delay: ${index * 0.1}s" onclick="openDetails(${item.id})">
            <div class="like-btn" onclick="event.stopPropagation(); toggleLike(this)">
                <i class="fas fa-heart"></i>
            </div>
            <img src="${item.img}?auto=format&fit=crop&w=600&q=80" alt="${item.name}">
            <div class="card-info">
                <span class="vibe-tag">${item.vibe}</span>
                <h3>${item.name}</h3>
                <div class="card-footer">
                    <span class="price"><b>${item.price}</b> / stay</span>
                    <button class="btn-mini">Details</button>
                </div>
            </div>
        </div>
    `).join('');
    setTimeout(observeScroll, 50);
}

// 4. Modal Logic
function openDetails(id) {
    const item = destinations.find(d => d.id === id);
    if(!item) return;

    modalBody.innerHTML = `
        <div class="modal-grid">
            <img class="modal-img" src="${item.img}?auto=format&fit=crop&w=1000&q=80">
            <div class="modal-info">
                <span class="vibe-tag">${item.category}</span>
                <h2>${item.name}</h2>
                <p class="description">${item.desc}</p>
                <div class="amenities">
                    <i class="fas fa-wifi" title="Free Wifi"></i>
                    <i class="fas fa-coffee" title="Breakfast included"></i>
                    <i class="fas fa-camera" title="Photo Tours"></i>
                </div>
                <div class="price" style="margin-bottom: 2rem;">Starting at <b>${item.price}</b></div>
                <button class="btn-mini" style="width: 100%; padding: 1.2rem; border-radius: 15px; background: var(--primary);">Book This Trip</button>
            </div>
        </div>
    `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

closeBtn.onclick = () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
};

window.onclick = (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
};

// 5. Filter & Search Logic
tags.forEach(tag => {
    tag.addEventListener('click', () => {
        tags.forEach(t => t.classList.remove('active'));
        tag.classList.add('active');
        const selected = tag.textContent;
        const filtered = selected === "All" ? destinations : destinations.filter(d => d.category === selected);
        renderCards(filtered);
    });
});

searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = destinations.filter(d => d.name.toLowerCase().includes(term) || d.vibe.toLowerCase().includes(term));
    renderCards(filtered);
});

// 6. Interactions & Observer
function toggleLike(btn) {
    btn.classList.toggle('active');
    btn.style.transform = 'scale(1.4)';
    setTimeout(() => btn.style.transform = '', 200);
}

function observeScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.animate-up').forEach(el => observer.observe(el));
}

// Initialize
renderCards(destinations);
/* Keep your existing filter, search, and heart logic below */
// 3. Add the Calculation Logic
function calculateTotal(basePrice) {
    const guests = document.getElementById('guestCount').value || 1;
    const display = document.getElementById('totalPriceDisplay');
    
    // Add visual feedback (the "blink" effect)
    display.classList.add('updating');
    
    setTimeout(() => {
        const total = basePrice * guests;
        display.textContent = `$${total.toLocaleString()}`;
        display.classList.remove('updating');
    }, 150);
}

// Combine your two openDetails functions into this one:
function openDetails(id) {
    const item = destinations.find(d => d.id === id);
    if(!item) return;

    const basePrice = parseInt(item.price.replace(/[^0-9]/g, ''));

    modalBody.innerHTML = `
        <div class="modal-grid">
            <img class="modal-img" src="${item.img}?auto=format&fit=crop&w=1000&q=80">
            <div class="modal-info">
                <span class="vibe-tag">${item.category}</span>
                <h2>${item.name}</h2>
                <p class="description">${item.desc}</p>
                
                <div class="booking-form">
                    <div class="form-group">
                        <label>Check-in Date</label>
                        <input type="date" id="bookingDate" value="${new Date().toISOString().split('T')[0]}">
                    </div>
                    <div class="form-group">
                        <label>Guests</label>
                        <input type="number" id="guestCount" value="1" min="1" max="10" 
                               oninput="calculateTotal(${basePrice})">
                    </div>
                    
                    <div class="price-summary">
                        <span>Total Estimate</span>
                        <b id="totalPriceDisplay">$${basePrice.toLocaleString()}</b>
                    </div>
                </div>

                <button class="btn-mini" style="width: 100%; padding: 1.2rem; border-radius: 15px; background: var(--primary); margin-top: 1.5rem;">
                    Confirm Booking
                </button>
            </div>
        </div>
    `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Add this at the end of your file to trigger the About section animation
document.addEventListener('DOMContentLoaded', observeScroll);