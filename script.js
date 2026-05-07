// =============================
// FOTOS para lightbox
// =============================
const photos = [
    { src: 'img/foto5.jpg', caption: 'Vista aérea · Edificio Novelty I frente al mar' },
    { src: 'img/foto1.jpg', caption: 'Terraza · Orientación este con sol de mañana' },
    { src: 'img/foto2.jpg', caption: 'Dormitorio · 2 camas + cama supletoria' },
    { src: 'img/foto3.jpg', caption: 'Piscina comunitaria · Jun-Sep' },
    { src: 'img/foto4.jpg', caption: 'Baño · Reformado recientemente' },
    { src: 'img/foto6.jpg', caption: 'Salón · Sofá cama + aire acondicionado' },
    { src: 'img/foto7.jpg', caption: 'Cocina · Totalmente equipada con lavadora' },
    { src: 'img/principal.jpg', caption: 'Edificio Novelty I · Paseo Jaime I' },
];

let currentPhoto = 0;

function openLightbox(index) {
    currentPhoto = index;
    document.getElementById('lightbox').classList.add('open');
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
        'txt-nav-cta': 'Reservar',
        'txt-hero-badge': 'Primera Línea de Playa · Salou',
        'txt-h1': 'NOVELTY I',
        'txt-hero-sub': 'Paseo Jaime I · Playa de Llevant',
        'txt-score-label': 'Excelente',
        'txt-booking-link': '★★★★★ Ver opiniones en Booking.com',
        'txt-score-detail': 'Personal 9.1 · Limpieza 8.3 · Calidad-precio 9.0',
        'txt-btn-hero': 'Consultar Disponibilidad',
        'txt-btn-gallery': 'Ver Fotos',
        'txt-trust1': 'Excelente 9.2 en Booking',
        'txt-trust2': '50m de la playa',
        'txt-trust3': 'Sin comisiones · Precio directo',
        'txt-trust4': 'Propietario directo',
        'txt-gallery-title': 'El Apartamento',
        'txt-gallery-sub': '7 fotos reales · Sin filtros',
        'txt-btn-more-photos': '+ Ver todas las fotos',
        'txt-btn-booking-photos': '📷 Galería en Booking.com',
        'txt-apt-title': 'Tu Apartamento',
        'txt-stat-bed': 'Dormitorio', 'txt-stat-guests': 'Huéspedes',
        'txt-stat-bath': 'Baño', 'txt-stat-beach': 'de la Playa',
        'txt-f1-title': 'Ubicación Única',
        'txt-f1-desc': 'Situado en el emblemático Edificio Novelty I, con salida directa al Paseo Jaime I y la Playa de Llevant. A 15 min de PortAventura.',
        'txt-f2-title': 'Equipamiento Completo',
        'txt-f2-desc': 'Cocina totalmente equipada, aire acondicionado, WiFi de alta velocidad, TV Smart y baño moderno recién reformado.',
        'txt-f3-title': 'Piscina & Terraza',
        'txt-f3-desc': 'Piscina comunitaria para adultos y niños (jun-sep). Terraza con orientación este, toldos y mobiliario exterior.',
        'txt-amenities-title': 'Todos los servicios incluidos',
        'txt-amen-kitchen': '🍳 Cocina',
        'txt-amen-k1': 'Cocina vitrocerámica', 'txt-amen-k2': 'Microondas', 'txt-amen-k3': 'Cafetera',
        'txt-amen-k4': 'Tostadora', 'txt-amen-k5': 'Nevera', 'txt-amen-k6': 'Lavadora', 'txt-amen-k7': 'Utensilios de cocina',
        'txt-amen-room': '🛏️ Habitaciones',
        'txt-amen-r1': 'Dormitorio con 2 camas + cama supletoria', 'txt-amen-r2': 'Sofá cama en salón',
        'txt-amen-r3': 'Ropa de cama incluida', 'txt-amen-r4': 'Toallas incluidas',
        'txt-amen-r5': 'Armarios amplios', 'txt-amen-r6': 'TV Smart',
        'txt-amen-extra': '✨ Extras',
        'txt-amen-e1': 'WiFi alta velocidad', 'txt-amen-e2': 'Aire acondicionado', 'txt-amen-e3': 'Terraza con toldos',
        'txt-amen-e4': 'Piscina comunitaria', 'txt-amen-e5': 'Adaptado movilidad reducida', 'txt-amen-e6': 'Check-in online',
        'txt-amen-e7': 'Secador de pelo', 'txt-amen-e8': 'Plancha de ropa',
        'txt-reviews-title': 'Opiniones Verificadas', 'txt-reviews-sub': 'Reseñas reales de Booking.com',
        'txt-reviews-label': 'Excelente',
        'txt-rev-staff': 'Personal', 'txt-rev-price': 'Calidad-precio', 'txt-rev-clean': 'Limpieza',
        'txt-rev1': '"Ubicación inmejorable, a un paso de la playa. El apartamento está muy bien equipado y el propietario muy atento. Repetiremos sin duda."',
        'txt-rev1-author': 'María G. · España',
        'txt-rev2': '"Perfect location right on the promenade. Clean, well-equipped, and the pool was a great bonus. Would definitely recommend!"',
        'txt-rev2-author': 'James T. · United Kingdom',
        'txt-rev3': '"Appartement très bien situé, propre et fonctionnel. La terrasse est top pour les petits déjeuners au soleil."',
        'txt-rev3-author': 'Sophie M. · France',
        'txt-all-reviews': 'Ver todas las opiniones en Booking.com →',
        'txt-cal-title': 'Disponibilidad', 'txt-cal-sub': 'Actualizado en tiempo real',
        'txt-cal-note': '* Las fechas en rojo están reservadas.',
        'txt-prices-title': 'Tarifas y Reserva',
        'txt-prices-sub': 'Mejor precio garantizado reservando directamente',
        'txt-price-info': 'Nuestras tarifas se adaptan según la temporada, el número de personas y la duración de la estancia.',
        'txt-price-offer': '¡Escríbenos y recibe tu presupuesto personalizado sin compromiso!',
        'txt-btn-quote': 'Pedir Presupuesto',
        'txt-feat-1': 'Sin comisiones de gestión', 'txt-feat-2': 'Descuentos > 7 noches', 'txt-feat-3': 'Trato directo propietario',
        'txt-howto-title': 'Cómo Llegar', 'txt-howto-sub': 'Carrer de Berlín, 5 · Salou',
        'txt-d1-name': 'Playa de Llevant', 'txt-d1-time': '50 metros · 1 min a pie',
        'txt-d2-name': 'Supermercado', 'txt-d2-time': 'En el mismo edificio',
        'txt-d3-name': 'Restaurantes', 'txt-d3-time': 'Múltiples opciones alrededor',
        'txt-d4-name': 'PortAventura World', 'txt-d4-time': '15 min en coche',
        'txt-d5-name': 'Aeropuerto de Reus', 'txt-d5-time': '20 min en coche',
        'txt-d6-name': 'Parking privado', 'txt-d6-time': 'En el edificio · 12-15€/día (opcional)',
        'txt-faq-title': 'Preguntas Frecuentes',
        'txt-faq1-q': '¿Cuál es el horario de check-in y check-out?',
        'txt-faq1-a': 'El check-in es a partir de las 16:00h y el check-out antes de las 11:00h. Si necesitas flexibilidad, consúltame con antelación.',
        'txt-faq2-q': '¿Cuál es la política de cancelación?',
        'txt-faq2-a': 'Cancelación gratuita hasta 15 días antes de la llegada. A partir de esa fecha se aplicará un cargo equivalente a una semana de estancia.',
        'txt-faq3-q': '¿Se admiten mascotas?', 'txt-faq3-a': 'Lo sentimos, no se admiten mascotas en el apartamento.',
        'txt-faq4-q': '¿Hay parking disponible?',
        'txt-faq4-a': 'Sí, hay parking privado en el mismo edificio, disponible de forma opcional por 12-15€/día. Recomendamos reservarlo con antelación en temporada alta.',
        'txt-faq5-q': '¿Cuántas personas caben?',
        'txt-faq5-a': 'El apartamento tiene capacidad para 5 personas: dormitorio con 2 camas individuales (combinables en doble) más una cama supletoria y sofá cama en el salón.',
        'txt-faq6-q': '¿Por qué reservar directamente?',
        'txt-faq6-a': 'Al reservar directamente te ahorras las comisiones de Booking (15-20%) y obtienes atención personalizada. Cualquier duda la resuelves directamente conmigo.',
        'txt-form-title': 'Reserva Directa',
        'txt-form-desc': 'Escríbeme directamente y te enviaré un presupuesto personalizado. Sin intermediarios, sin comisiones extra.',
        'txt-perk1': 'Mejor precio garantizado', 'txt-perk2': 'Atención personalizada 24h',
        'txt-perk3': 'Flexibilidad en fechas', 'txt-perk4': 'Check-in online sin esperas',
        'txt-wa-btn': 'WhatsApp directo',
        'lbl-name': 'Nombre', 'lbl-in': 'Entrada', 'lbl-out': 'Salida',
        'lbl-guests': 'Huéspedes', 'lbl-email': 'E-mail', 'lbl-msg': 'Tu mensaje',
        'txt-btn-submit': 'Enviar Consulta Directa',
        'txt-checkin-link': 'Check-in Online',
        'txt-footer-copy': '© 2026 Reservas directas con el propietario · Sin comisiones',
        'txt-cal-cta': '¿Fecha disponible? Consulta precio →',
        "civitatis-title": "Prepara tu viaje a Salou",
        "civitatis-subtitle": "Reserva las mejores actividades, traslados y el Free Tour directamente desde aquí:"
    },
    en: {
        'txt-nav-cta': 'Book Now',
        'txt-hero-badge': 'Beachfront · Salou',
        'txt-h1': 'NOVELTY I',
        'txt-hero-sub': 'Paseo Jaime I · Llevant Beach',
        'txt-score-label': 'Excellent',
        'txt-booking-link': '★★★★★ Read reviews on Booking.com',
        'txt-score-detail': 'Staff 9.1 · Cleanliness 8.3 · Value for money 9.0',
        'txt-btn-hero': 'Check Availability',
        'txt-btn-gallery': 'View Photos',
        'txt-trust1': 'Excellent 9.2 on Booking',
        'txt-trust2': '50m from the beach',
        'txt-trust3': 'No commissions · Direct price',
        'txt-trust4': 'Direct from owner',
        'txt-gallery-title': 'The Apartment',
        'txt-gallery-sub': '7 real photos · No filters',
        'txt-btn-more-photos': '+ View all photos',
        'txt-btn-booking-photos': '📷 Photo gallery on Booking.com',
        'txt-apt-title': 'Your Apartment',
        'txt-stat-bed': 'Bedroom', 'txt-stat-guests': 'Guests',
        'txt-stat-bath': 'Bathroom', 'txt-stat-beach': 'from Beach',
        'txt-f1-title': 'Prime Location',
        'txt-f1-desc': 'Located in the iconic Novelty I Building, with direct access to Paseo Jaime I and Llevant Beach. 15 min from PortAventura.',
        'txt-f2-title': 'Fully Equipped',
        'txt-f2-desc': 'Fully equipped kitchen, AC, high-speed WiFi, Smart TV and recently renovated modern bathroom.',
        'txt-f3-title': 'Pool & Terrace',
        'txt-f3-desc': 'Communal pool for adults and children (Jun-Sep). East-facing terrace with awning and outdoor furniture.',
        'txt-amenities-title': 'All amenities included',
        'txt-amen-kitchen': '🍳 Kitchen',
        'txt-amen-k1': 'Ceramic hob', 'txt-amen-k2': 'Microwave', 'txt-amen-k3': 'Coffee maker',
        'txt-amen-k4': 'Toaster', 'txt-amen-k5': 'Fridge', 'txt-amen-k6': 'Washing machine', 'txt-amen-k7': 'Cooking utensils',
        'txt-amen-room': '🛏️ Rooms',
        'txt-amen-r1': 'Bedroom with 2 beds + extra bed', 'txt-amen-r2': 'Sofa bed in living room',
        'txt-amen-r3': 'Bed linen included', 'txt-amen-r4': 'Towels included',
        'txt-amen-r5': 'Spacious wardrobes', 'txt-amen-r6': 'Smart TV',
        'txt-amen-extra': '✨ Extras',
        'txt-amen-e1': 'High-speed WiFi', 'txt-amen-e2': 'Air conditioning', 'txt-amen-e3': 'Terrace with awning',
        'txt-amen-e4': 'Communal pool', 'txt-amen-e5': 'Accessible for reduced mobility', 'txt-amen-e6': 'Online check-in',
        'txt-amen-e7': 'Hair dryer', 'txt-amen-e8': 'Clothes iron',
        'txt-reviews-title': 'Verified Reviews', 'txt-reviews-sub': 'Real reviews from Booking.com',
        'txt-reviews-label': 'Excellent',
        'txt-rev-staff': 'Staff', 'txt-rev-price': 'Value for money', 'txt-rev-clean': 'Cleanliness',
        'txt-rev1': '"Unbeatable location, a step away from the beach. The apartment is very well equipped and the owner is very attentive. We will definitely return."',
        'txt-rev1-author': 'María G. · Spain',
        'txt-rev2': '"Perfect location right on the promenade. Clean, well-equipped, and the pool was a great bonus. Would definitely recommend!"',
        'txt-rev2-author': 'James T. · United Kingdom',
        'txt-rev3': '"Very well located apartment, clean and functional. The terrace is great for sunny breakfasts. Owner responds quickly."',
        'txt-rev3-author': 'Sophie M. · France',
        'txt-all-reviews': 'See all reviews on Booking.com →',
        'txt-cal-title': 'Availability', 'txt-cal-sub': 'Updated in real time',
        'txt-cal-note': '* Dates in red are already booked.',
        'txt-prices-title': 'Rates & Booking',
        'txt-prices-sub': 'Best price guaranteed booking direct',
        'txt-price-info': 'Our rates vary according to the season, number of guests and length of stay.',
        'txt-price-offer': 'Contact us for your personalised quote — no obligation!',
        'txt-btn-quote': 'Request Quote',
        'txt-feat-1': 'No booking fees', 'txt-feat-2': 'Discounts for stays over 7 nights', 'txt-feat-3': 'Direct owner contact',
        'txt-howto-title': 'How to Get There', 'txt-howto-sub': 'Carrer de Berlín, 5 · Salou',
        'txt-d1-name': 'Llevant Beach', 'txt-d1-time': '50 metres · 1 min walk',
        'txt-d2-name': 'Supermarket', 'txt-d2-time': 'In the same building',
        'txt-d3-name': 'Restaurants', 'txt-d3-time': 'Many options nearby',
        'txt-d4-name': 'PortAventura World', 'txt-d4-time': '15 min by car',
        'txt-d5-name': 'Reus Airport', 'txt-d5-time': '20 min by car',
        'txt-d6-name': 'Private parking', 'txt-d6-time': 'In the building · €12-15/day (optional)',
        'txt-faq-title': 'FAQ',
        'txt-faq1-q': 'What are the check-in and check-out times?',
        'txt-faq1-a': 'Check-in is from 16:00 and check-out before 11:00. If you need flexibility, let me know in advance.',
        'txt-faq2-q': 'What is the cancellation policy?',
        'txt-faq2-a': 'Free cancellation up to 15 days before arrival. After that, a charge equivalent to one week will apply.',
        'txt-faq3-q': 'Are pets allowed?', 'txt-faq3-a': 'Sorry, pets are not allowed in the apartment.',
        'txt-faq4-q': 'Is parking available?',
        'txt-faq4-a': 'Yes, private parking in the same building, optionally available for 12-15€/day. We recommend booking in advance in high season.',
        'txt-faq5-q': 'How many guests can stay?',
        'txt-faq5-a': 'The apartment accommodates up to 5 guests: bedroom with 2 single beds (can be joined as a double) plus an extra bed and a sofa bed in the living room.',
        'txt-faq6-q': 'Why book directly?',
        'txt-faq6-a': 'By booking directly you save Booking.com commissions (15-20%) and get personal attention. Any question is answered directly by me.',
        'txt-form-title': 'Direct Booking',
        'txt-form-desc': 'Write to me directly and I will send you a personalised quote. No intermediaries, no extra commissions.',
        'txt-perk1': 'Best price guaranteed', 'txt-perk2': 'Personal 24h support',
        'txt-perk3': 'Flexible dates', 'txt-perk4': 'Online check-in, no waiting',
        'txt-wa-btn': 'WhatsApp direct',
        'lbl-name': 'Name', 'lbl-in': 'Check-in', 'lbl-out': 'Check-out',
        'lbl-guests': 'Guests', 'lbl-email': 'E-mail', 'lbl-msg': 'Your message',
        'txt-btn-submit': 'Send Direct Inquiry',
        'txt-checkin-link': 'Online Check-in',
        'txt-footer-copy': '© 2026 Direct bookings with the owner · No commissions',
        'txt-cal-cta': 'Date available? Ask for a quote →',
        "civitatis-title": "Plan your trip to Salou",
        "civitatis-subtitle": "Book the best activities, transfers and the Free Tour directly from here:"
    },
    fr: {
        'txt-nav-cta': 'Réserver',
        'txt-hero-badge': 'Front de Mer · Salou',
        'txt-h1': 'NOVELTY I',
        'txt-hero-sub': 'Paseo Jaime I · Plage de Llevant',
        'txt-score-label': 'Excellent',
        'txt-booking-link': '★★★★★ Voir avis sur Booking.com',
        'txt-score-detail': 'Personnel 9.1 · Propreté 8.3 · Rapport qualité-prix 9.0',
        'txt-btn-hero': 'Vérifier la Disponibilité',
        'txt-btn-gallery': 'Voir les Photos',
        'txt-trust1': 'Excellent 9.2 sur Booking',
        'txt-trust2': '50m de la plage',
        'txt-trust3': 'Sans commission · Prix direct',
        'txt-trust4': 'Propriétaire direct',
        'txt-gallery-title': "L'Appartement",
        'txt-gallery-sub': '7 photos réelles · Sans filtres',
        'txt-btn-more-photos': '+ Voir toutes les photos',
        'txt-btn-booking-photos': '📷 Galerie sur Booking.com',
        'txt-apt-title': 'Votre Appartement',
        'txt-stat-bed': 'Chambre', 'txt-stat-guests': 'Voyageurs',
        'txt-stat-bath': 'Salle de bain', 'txt-stat-beach': 'de la Plage',
        'txt-f1-title': 'Emplacement Unique',
        'txt-f1-desc': "Situé dans l'emblématique Novelty I, avec accès direct au Paseo Jaime I. À 15 min de PortAventura.",
        'txt-f2-title': 'Équipement Complet',
        'txt-f2-desc': 'Cuisine équipée, clim, WiFi haut débit, TV Smart et salle de bain moderne rénovée.',
        'txt-f3-title': 'Piscine & Terrasse',
        'txt-f3-desc': 'Piscine commune adultes et enfants (juin-sept). Terrasse Est avec store et mobilier extérieur.',
        'txt-amenities-title': 'Tous les équipements inclus',
        'txt-amen-kitchen': '🍳 Cuisine',
        'txt-amen-k1': 'Plaque vitrocéramique', 'txt-amen-k2': 'Micro-ondes', 'txt-amen-k3': 'Cafetière',
        'txt-amen-k4': 'Grille-pain', 'txt-amen-k5': 'Réfrigérateur', 'txt-amen-k6': 'Lave-linge', 'txt-amen-k7': 'Ustensiles de cuisine',
        'txt-amen-room': '🛏️ Chambres',
        'txt-amen-r1': 'Chambre avec 2 lits + lit supplémentaire', 'txt-amen-r2': 'Canapé-lit au salon',
        'txt-amen-r3': 'Linge de lit inclus', 'txt-amen-r4': 'Serviettes incluses',
        'txt-amen-r5': 'Armoires spacieuses', 'txt-amen-r6': 'TV Smart',
        'txt-amen-extra': '✨ Extras',
        'txt-amen-e1': 'WiFi haut débit', 'txt-amen-e2': 'Climatisation', 'txt-amen-e3': 'Terrasse avec store',
        'txt-amen-e4': 'Piscine commune', 'txt-amen-e5': 'Accessible PMR', 'txt-amen-e6': 'Check-in en ligne',
        'txt-amen-e7': 'Sèche-cheveux', 'txt-amen-e8': 'Fer à repasser',
        'txt-reviews-title': 'Avis Vérifiés', 'txt-reviews-sub': 'Vrais avis de Booking.com',
        'txt-reviews-label': 'Excellent',
        'txt-rev-staff': 'Personnel', 'txt-rev-price': 'Rapport qualité-prix', 'txt-rev-clean': 'Propreté',
        'txt-rev1': '"Emplacement idéal, à deux pas de la plage. Appartement très bien équipé et propriétaire très attentif. On reviendra !"',
        'txt-rev1-author': 'María G. · Espagne',
        'txt-rev2': '"Parfait, situé sur la promenade. Propre, bien équipé, la piscine est un vrai plus. Je recommande vivement !"',
        'txt-rev2-author': 'James T. · Royaume-Uni',
        'txt-rev3': '"Appartement très bien situé, propre et fonctionnel. La terrasse est top pour les petits déjeuners au soleil."',
        'txt-rev3-author': 'Sophie M. · France',
        'txt-all-reviews': 'Voir tous les avis sur Booking.com →',
        'txt-cal-title': 'Disponibilité', 'txt-cal-sub': 'Mis à jour en temps réel',
        'txt-cal-note': '* Les dates en rouge sont déjà réservées.',
        'txt-prices-title': 'Tarifs et Réservation',
        'txt-prices-sub': 'Meilleur prix garanti en réservant direct',
        'txt-price-info': "Nos tarifs s'adaptent selon la saison, le nombre de personnes et la durée du séjour.",
        'txt-price-offer': 'Écrivez-nous pour recevoir votre devis personnalisé !',
        'txt-btn-quote': 'Demander un devis',
        'txt-feat-1': 'Sans frais de gestion', 'txt-feat-2': 'Réductions pour séjours > 7 nuits', 'txt-feat-3': 'Contact direct propriétaire',
        'txt-howto-title': 'Comment Venir', 'txt-howto-sub': 'Carrer de Berlín, 5 · Salou',
        'txt-d1-name': 'Plage de Llevant', 'txt-d1-time': '50 mètres · 1 min à pied',
        'txt-d2-name': 'Supermarché', 'txt-d2-time': 'Dans le même bâtiment',
        'txt-d3-name': 'Restaurants', 'txt-d3-time': 'Nombreuses options autour',
        'txt-d4-name': 'PortAventura World', 'txt-d4-time': '15 min en voiture',
        'txt-d5-name': 'Aéroport de Reus', 'txt-d5-time': '20 min en voiture',
        'txt-d6-name': 'Parking privé', 'txt-d6-time': 'Dans le bâtiment · 12-15\u20ac/jour (optionnel)',
        'txt-faq-title': 'Questions Fréquentes',
        'txt-faq1-q': "Quels sont les horaires d'arrivée et de départ ?",
        'txt-faq1-a': "L'arrivée est à partir de 16h00 et le départ avant 11h00. Si vous avez besoin de flexibilité, contactez-moi à l'avance.",
        'txt-faq2-q': "Quelle est la politique d'annulation ?",
        'txt-faq2-a': "Annulation gratuite jusqu\u2019à 15 jours avant l\u2019arriv\u00e9e. Au-delà, des frais équivalents à une semaine s\u2019appliqueront.",
        'txt-faq3-q': 'Les animaux sont-ils acceptés ?',
        'txt-faq3-a': "Désolé, les animaux ne sont pas acceptés dans l'appartement.",
        'txt-faq4-q': 'Y a-t-il un parking ?',
        'txt-faq4-a': "Oui, un parking privé dans le même bâtiment, en option pour 12-15\u20ac/jour. Nous recommandons de le réserver à l'avance en haute saison.",
        'txt-faq5-q': "Combien de personnes peut accueillir l'appartement ?",
        'txt-faq5-a': "L'appartement accueille jusqu'à 5 personnes : chambre avec 2 lits simples (combinables en lit double), un lit supplémentaire et un canapé-lit au salon.",
        'txt-faq6-q': 'Pourquoi réserver directement ?',
        'txt-faq6-a': "En réservant directement, vous évitez les commissions de Booking (15-20%) et bénéficiez d'une attention personnalisée.",
        'txt-form-title': 'Réservation Directe',
        'txt-form-desc': 'Écrivez-moi directement et je vous enverrai un devis personnalisé. Sans intermédiaires.',
        'txt-perk1': 'Meilleur prix garanti', 'txt-perk2': 'Accompagnement personnalisé 24h',
        'txt-perk3': 'Flexibilité sur les dates', 'txt-perk4': 'Check-in en ligne sans attente',
        'txt-wa-btn': 'WhatsApp direct',
        'lbl-name': 'Nom', 'lbl-in': 'Arrivée', 'lbl-out': 'Départ',
        'lbl-guests': 'Voyageurs', 'lbl-email': 'E-mail', 'lbl-msg': 'Votre message',
        'txt-btn-submit': 'Envoyer la Demande',
        'txt-checkin-link': 'Check-in en Ligne',
        'txt-footer-copy': '© 2026 Réservations directes avec le propriétaire · Sans commissions',
        'txt-cal-cta': 'Date disponible ? Demandez un devis →',
        "civitatis-title": "Préparez votre voyage à Salou",
        "civitatis-subtitle": "Réservez les meilleures activités, les transferts et le Free Tour directement d'ici :"
    }
};

function changeLang(lang) {
    const t = translations[lang];
    for (let id in t) {
        const el = document.getElementById(id);
        if (el) el.innerText = t[id];
    }
    const captionMap = {
        es: ['Vista aérea · Edificio Novelty I frente al mar','Terraza · Orientación este con sol de mañana','Dormitorio · 2 camas + cama supletoria','Piscina comunitaria · Jun-Sep','Baño · Reformado recientemente','Salón · Sofá cama + aire acondicionado','Cocina · Totalmente equipada con lavadora','Edificio Novelty I · Paseo Jaime I'],
        en: ['Aerial view · Novelty I Building beachfront','Terrace · East-facing, morning sun','Bedroom · 2 beds + extra bed','Communal pool · Jun-Sep','Bathroom · Recently renovated','Living room · Sofa bed + AC','Kitchen · Fully equipped with washing machine','Novelty I Building · Paseo Jaime I'],
        fr: ['Vue aérienne · Novelty I face à la mer','Terrasse · Orientée Est, soleil du matin','Chambre · 2 lits + lit supplémentaire','Piscine commune · Juin-Sept','Salle de bain · Rénovée récemment','Salon · Canapé-lit + climatisation','Cuisine · Totalement équipée avec lave-linge','Immeuble Novelty I · Paseo Jaime I']
    };
    photos.forEach((p, i) => { p.caption = captionMap[lang]?.[i] || p.caption; });

    document.querySelectorAll('.lang-selector button').forEach(b => b.classList.remove('active'));
    const activeBtn = document.getElementById('btn-' + lang);
    if (activeBtn) activeBtn.classList.add('active');
    updateCivitatisWidget(lang);
    localStorage.setItem('preferredLang', lang);
    if (window.calendarInstance) window.calendarInstance.setOption('locale', lang);
}

// =============================
// INIT
// =============================
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'es';
    changeLang(savedLang);

    // FAQ
    document.querySelectorAll('.faq-q').forEach(btn => {
        btn.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isOpen = answer.classList.contains('open');
            document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
            document.querySelectorAll('.faq-q').forEach(b => b.classList.remove('open'));
            if (!isOpen) { answer.classList.add('open'); this.classList.add('open'); }
        });
    });

    // Calendar
    const calendarEl = document.getElementById('calendar');
    if (calendarEl && typeof FullCalendar !== 'undefined') {
        window.calendarInstance = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth', locale: savedLang, firstDay: 1, height: 480,
            headerToolbar: { left: 'prev,next today', center: 'title', right: '' },
            events: [
                { start: '2026-04-02', end: '2026-04-06', color: '#e05555', display: 'background' },
                { start: '2026-04-06', end: '2026-04-10', color: '#e05555', display: 'background' },
                { start: '2026-04-15', end: '2026-04-18', color: '#e05555', display: 'background' },
                { start: '2026-05-03', end: '2026-05-09', color: '#e05555', display: 'background' },
                { start: '2026-05-24', end: '2026-06-01', color: '#e05555', display: 'background' },
                { start: '2026-06-05', end: '2026-06-11', color: '#e05555', display: 'background' },
                { start: '2026-06-22', end: '2026-07-03', color: '#e05555', display: 'background' },
                { start: '2026-07-05', end: '2026-07-12', color: '#e05555', display: 'background' },
                { start: '2026-07-13', end: '2026-07-22', color: '#e05555', display: 'background' },                
                { start: '2026-08-03', end: '2026-08-19', color: '#e05555', display: 'background' },
                { start: '2026-08-23', end: '2026-08-30', color: '#e05555', display: 'background' },
                { start: '2026-09-01', end: '2026-09-24', color: '#e05555', display: 'background' },
                { start: '2026-09-26', end: '2026-10-03', color: '#e05555', display: 'background' }
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

    // Animaciones scroll
    document.querySelectorAll('.feature-card, .review-card, .apt-stat').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; obs.unobserve(e.target); }
            });
        }, { threshold: 0.1 });
        obs.observe(el);
    });
});

function updateCivitatisWidget(lang) {
    const widget = document.getElementById('civitatis-widget');
    if (widget) {
        const baseUrl = "https://www.civitatis.com/widget-activities/?agencyId=94856&display=cosy&cant=3&currency=EUR&destination=586&transfer=0&width=100%&hideButton=0&centerContent=1&typeSelection=all&color=f70759&typography=Montserrat&removeBackground=1&showShadow=1&roundedButtons=1";
        widget.src = `${baseUrl}&lang=${lang}&cmp=Widget_Salou_${lang.toUpperCase()}`;
    }
}
