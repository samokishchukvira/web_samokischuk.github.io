var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();

    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                const timestamp = new Date(position.timestamp);
    
                const userMarker = L.marker([latitude, longitude]).addTo(map);
                userMarker.bindPopup(
                    `Ваше місце розташування:<br>Lat: ${latitude}, Lng: ${longitude}<br>Час: ${timestamp.toLocaleTimeString()}`
                ).openPopup();
    
                map.setView([latitude, longitude], 13);
            },
            () => {
                alert("Не вдалося отримати ваше місце розташування.");
            }
        );
    } else {
        alert("Ваш браузер не підтримує геолокацію.");
    }
    
    map.on('click', (e) => {
        const { lat, lng } = e.latlng;
        const timestamp = new Date(); 
    
        const marker = L.marker([lat, lng]).addTo(map);
        marker.bindPopup(
            `Ви були тут:<br>Lat: ${lat.toFixed(5)}, Lng: ${lng.toFixed(5)}<br>Час: ${timestamp.toLocaleTimeString()}`
        ).openPopup();
    });
    
    document.getElementById('scrollButton').addEventListener('click', () => {
        const input = document.getElementById('destination').value;
        const [lat, lng] = input.split(',').map(Number);
    
        if (!isNaN(lat) && !isNaN(lng)) {
            map.setView([lat, lng], 13);
    
            const destinationMarker = L.marker([lat, lng]).addTo(map);
            destinationMarker.bindPopup("Пункт призначення").openPopup();
        } else {
            alert("Введіть правильні координати!");
        }
    });
