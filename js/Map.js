// Map Generation
const coords = [24.577278536264505,73.68667602539064]
const MAP_Generator = function(coords) {
    let map = L.map('map').setView(coords, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker(coords).addTo(map)
    .openPopup();
}
MAP_Generator(coords);

