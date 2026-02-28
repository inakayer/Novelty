// =============================
// FOTOS para lightbox
// =============================
const photos = [
    { src: 'img/foto5.jpg', caption: 'Vista aérea · Edificio Novelty I frente al mar' },
    { src: 'img/foto1.jpg', caption: 'Terraza · Orientación este con sol de mañana' },
    { src: 'img/foto2.jpg', caption: 'Dormitorio · Cama doble + armario' },
    { src: 'img/foto3.jpg', caption: 'Piscina comunitaria · Jun-Sep' },
    { src: 'img/foto4.jpg', caption: 'Baño · Reformado recientemente' },
    { src: 'img/foto6.jpg', caption: 'Salón · Sofá cama + aire acondicionado' },
    { src: 'img/foto7.jpg', caption: 'Cocina · Totalmente equipada con lavadora' },
    { src: 'img/principal.jpg', caption: 'Edificio Novelty I · Paseo Jaime I' },
];

let currentPhoto = 0;

function openLightbox(index) {
    currentPhoto = index;
    const lb = document.getElementById('lightbox');
    lb.classList.add('open');
    updateLightbox();
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('open');
    document.body.style.overflow = '';
}

function changePhoto(dir) {
    currentPhoto = (currentPhoto + dir + photos.length) % photos.length;
    updateLightbox();
}

function updateLightbox() {
    const p = photos[currentPhoto];
    document.getElementById('lb-img').src = p.src;
    document.getElementById('lb-caption').textContent = `${currentPhoto + 1} / ${photos.length} · ${p.caption}`;
}

// Cerrar lightbox con teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') changePhoto(1);
    if (e.key === 'ArrowLeft') changePhoto(-1);
});

// =============================
// TRADUCCIONES
// =============================
const translations = {
    es: {
        // ... (mantén lo que ya tienes y añade/cambia esto)
        "txt-prices-title": "Tarifas y Reserva",
        "txt-prices-sub": "Mejor precio garantizado reservando directamente",
        "txt-price-info": "Nuestras tarifas se adaptan según la temporada, el número de personas y la duración de la estancia.",
        "txt-price-offer": "¡Escríbenos y recibe tu presupuesto personalizado sin compromiso!",
        "txt-btn-quote": "Pedir Presupuesto",
        "txt-feat-1": "Sin comisiones de gestión",
        "txt-feat-2": "Descuentos > 7 noches",
        "txt-feat-3": "Trato directo propietario"
    },
    en: {
        "txt-prices-title": "Rates & Booking",
        "txt-prices-sub": "Best price guaranteed booking direct",
        "txt-price-info": "Our rates vary according to the season, number of guests and length of stay.",
        "txt-price-offer": "Contact us for your personalized quote!",
        "txt-btn-quote": "Request Quote",
        "txt-feat-1": "No booking fees",
        "txt-feat-2": "Long stay discounts",
        "txt-feat-3": "Direct owner contact"
    },
    fr: {
        "txt-prices-title": "Tarifs et Réservation",
        "txt-prices-sub": "Meilleur prix garanti en réservant direct",
        "txt-price-info": "Nos tarifs s'adaptent selon la saison, le nombre de personnes et la durée du séjour.",
        "txt-price-offer": "Écrivez-nous pour recevoir votre devis personnalisé !",
        "txt-btn-quote": "Demander un devis",
        "txt-feat-1": "Sans frais de gestion",
        "txt-feat-2": "Réductions > 7 nuits",
        "txt-feat-3": "Contact direct propriétaire"
    }
};

function changeLang(lang) {
    const t = translations[lang];
    for (let id in t) {
        const el = document.getElementById(id);
        if (el) el.innerText = t[id];
    }
    // Update lightbox captions translation
    const captionMap = {
        'es': [
            'Vista aérea · Edificio Novelty I frente al mar',
            'Terraza · Orientación este con sol de mañana',
            'Dormitorio · Cama doble + armario',
            'Piscina comunitaria · Jun-Sep',
            'Baño · Reformado recientemente',
            'Salón · Sofá cama + aire acondicionado',
            'Cocina · Totalmente equipada con lavadora',
            'Edificio Novelty I · Paseo Jaime I'
        ],
        'en': [
            'Aerial view · Novelty I Building beachfront',
            'Terrace · East-facing, morning sun',
            'Bedroom · Double bed + wardrobe',
            'Communal pool · Jun-Sep',
            'Bathroom · Recently renovated',
            'Living room · Sofa bed + AC',
            'Kitchen · Fully equipped with washing machine',
            'Novelty I Building · Paseo Jaime I'
        ],
        'fr': [
            'Vue aérienne · Novelty I face à la mer',
            'Terrasse · Orientée Est, soleil du matin',
            'Chambre · Lit double + armoire',
            'Piscine commune · Juin-Sept',
            'Salle de bain · Rénovée récemment',
            'Salon · Canapé-lit + climatisation',
            'Cuisine · Totalement équipée avec lave-linge',
            'Immeuble Novelty I · Paseo Jaime I'
        ]
    };
    photos.forEach((p, i) => { p.caption = captionMap[lang]?.[i] || p.caption; });

    // Active button
    document.querySelectorAll('.lang-selector button').forEach(b => b.classList.remove('active'));
    const activeBtn = document.getElementById('btn-' + lang);
    if (activeBtn) activeBtn.classList.add('active');

    localStorage.setItem('preferredLang', lang);
    if (window.calendarInstance) {
        window.calendarInstance.setOption('locale', lang);
    }
}

// =============================
// INIT
// =============================
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'es';
    changeLang(savedLang);

    // FAQ - event delegation (más fiable que onclick inline)
    document.querySelectorAll('.faq-q').forEach(btn => {
        btn.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isOpen = answer.classList.contains('open');
            document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
            document.querySelectorAll('.faq-q').forEach(b => b.classList.remove('open'));
            if (!isOpen) {
                answer.classList.add('open');
                this.classList.add('open');
            }
        });
    });

    // Calendar
    const calendarEl = document.getElementById('calendar');
    if (calendarEl && typeof FullCalendar !== 'undefined') {
        window.calendarInstance = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            locale: savedLang,
            firstDay: 1,
            height: 480,
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: ''
            },
            events: [
                { start: '2026-04-02', end: '2026-04-06', color: '#e05555', display: 'background' },
                { start: '2026-04-06', end: '2026-04-10', color: '#e05555', display: 'background' },
                { start: '2026-05-01', end: '2026-05-07', color: '#e05555', display: 'background' },
                { start: '2026-05-24', end: '2026-06-01', color: '#e05555', display: 'background' },
                { start: '2026-06-05', end: '2026-06-11', color: '#e05555', display: 'background' },
                { start: '2026-06-22', end: '2026-07-03', color: '#e05555', display: 'background' },
                { start: '2026-07-13', end: '2026-07-22', color: '#e05555', display: 'background' },
                { start: '2026-08-03', end: '2026-08-19', color: '#e05555', display: 'background' },
                { start: '2026-08-19', end: '2026-08-30', color: '#e05555', display: 'background' },
                { start: '2026-09-01', end: '2026-09-24', color: '#e05555', display: 'background' }
            ]
        });
        window.calendarInstance.render();
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-card, .review-card, .apt-stat').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // Fake visible when intersection fires
    document.querySelectorAll('.feature-card, .review-card, .apt-stat').forEach(el => {
        const obs2 = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.style.opacity = '1';
                    e.target.style.transform = 'translateY(0)';
                    obs2.unobserve(e.target);
                }
            });
        }, { threshold: 0.1 });
        obs2.observe(el);
    });
});

// =============================

