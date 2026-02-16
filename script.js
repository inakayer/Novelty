const translations = {
    'es': {
      'txt-h1': 'Apartamento Novelty I - Salou',
      'txt-hero-sub': 'Tu estancia frente al mar en el Paseo Jaime I',
      'txt-btn-hero': 'Consultar Disponibilidad',
      'txt-apt-title': 'El Apartamento',
      'txt-apt-desc': 'Disfruta de uno de los complejos más exclusivos de Salou. Nuestro apartamento en el Edificio Novelty I cuenta con:',
      'txt-apt-list': '<li>Terraza privada con vistas.</li><li>Piscina comunitaria para adultos y niños.</li><li>Aire acondicionado, Wi-Fi y cocina equipada.</li><li>Ubicación inmejorable: a 50 metros de la playa.</li>',
      'txt-gal-title': 'Galería de Fotos',
      'txt-cal-title': 'Disponibilidad y Fechas',
      'txt-cal-desc': 'Los días marcados en ROJO ya están reservados. El resto de días están LIBRES.',
      'txt-form-title': 'Solicitud de Reserva',
      'txt-form-desc': 'Envíanos tus fechas y te confirmaremos el presupuesto en menos de 24 horas.',
      'lbl-name': 'Nombre Completo:',
      'lbl-in': 'Fecha de Entrada:',
      'lbl-out': 'Fecha de Salida:',
      'lbl-email': 'Email de contacto:',
      'lbl-msg': 'Mensaje o peticiones especiales:',
      'txt-btn-submit': 'Enviar Solicitud de Reserva'
    },
    'en': {
      'txt-h1': 'Novelty I Apartment - Salou',
      'txt-hero-sub': 'Your seaside stay at Paseo Jaime I',
      'txt-btn-hero': 'Check Availability',
      'txt-apt-title': 'The Apartment',
      'txt-apt-desc': 'Enjoy one of the most exclusive complexes in Salou. Our apartment in the Novelty I Building features:',
      'txt-apt-list': '<li>Private terrace with views.</li><li>Community pool for adults and children.</li><li>Air conditioning, Wi-Fi and equipped kitchen.</li><li>Unbeatable location: 50 meters from the beach.</li>',
      'txt-gal-title': 'Photo Gallery',
      'txt-cal-title': 'Availability and Dates',
      'txt-cal-desc': 'Days marked in RED are already booked. All other days are FREE.',
      'txt-form-title': 'Booking Request',
      'txt-form-desc': 'Send us your dates and we will confirm the budget in less than 24 hours.',
      'lbl-name': 'Full Name:',
      'lbl-in': 'Arrival Date:',
      'lbl-out': 'Departure Date:',
      'lbl-email': 'Contact Email:',
      'lbl-msg': 'Message or special requests:',
      'txt-btn-submit': 'Send Booking Request'
    },
    'fr': {
      'txt-h1': 'Appartement Novelty I - Salou',
      'txt-hero-sub': 'Votre séjour face à la mer sur le Paseo Jaime I',
      'txt-btn-hero': 'Vérifier la Disponibilité',
      'txt-apt-title': "L'Appartement",
      'txt-apt-desc': "Profitez de l'un des complexes les plus exclusifs de Salou. Notre appartement dans l'immeuble Novelty I comprend :",
      'txt-apt-list': '<li>Terrasse privée avec vue.</li><li>Piscine communautaire pour adultes et enfants.</li><li>Climatisation, Wi-Fi et cuisine équipée.</li><li>Emplacement imbattable : à 50 mètres de la plage.</li>',
      'txt-gal-title': 'Galerie de Photos',
      'txt-cal-title': 'Disponibilité et Dates',
      'txt-cal-desc': 'Les jours marqués en ROUGE sont déjà réservés. Les autres jours sont LIBRES.',
      'txt-form-title': 'Demande de Réservation',
      'txt-form-desc': 'Envoyez-nous vos dates et nous confirmerons le budget en moins de 24 heures.',
      'lbl-name': 'Nom complet :',
      'lbl-in': "Date d'arrivée :",
      'lbl-out': 'Date de départ :',
      'lbl-email': 'E-mail de contact :',
      'lbl-msg': 'Message o solicitudes especiales :',
      'txt-btn-submit': 'Envoyer la demande de réservation'
    }
};

function changeLang(lang) {
    for (let id in translations[lang]) {
        const element = document.getElementById(id);
        if (element) element.innerHTML = translations[lang][id];
    }
    const msgField = document.getElementById('placeholder-msg');
    if (msgField) {
        if (lang === 'en') msgField.placeholder = "How many people? Any questions?";
        else if (lang === 'fr') msgField.placeholder = "Combien de personnes? Des questions?";
        else msgField.placeholder = "¿Cuántas personas sois? ¿Alguna duda?";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'es',
        firstDay: 1,
        headerToolbar: { left: 'prev,next today', center: 'title', right: '' },
        events: [
            { title: 'RESERVADO', start: '2026-04-02', end: '2026-04-06', color: '#ff4d4d', display: 'background' },
            { title: 'RESERVADO', start: '2026-05-24', end: '2026-06-01', color: '#ff4d4d', display: 'background' },
            { title: 'RESERVADO', start: '2026-06-05', end: '2026-06-11', color: '#ff4d4d', display: 'background' },
            { title: 'RESERVADO', start: '2026-06-22', end: '2026-07-03', color: '#ff4d4d', display: 'background' },
            { title: 'RESERVADO', start: '2026-07-13', end: '2026-07-22', color: '#ff4d4d', display: 'background' },
            { title: 'RESERVADO', start: '2026-08-03', end: '2026-08-19', color: '#ff4d4d', display: 'background' },
            { title: 'RESERVADO', start: '2026-08-19', end: '2026-08-30', color: '#ff4d4d', display: 'background' },
            { title: 'RESERVADO', start: '2026-09-01', end: '2026-09-24', color: '#ff4d4d', display: 'background' }
        ]
    });
    calendar.render();
});