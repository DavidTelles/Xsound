document.addEventListener("DOMContentLoaded", function () {
    const batteryLevel = document.getElementById("batteryLevel");
    const batteryBar = document.getElementById("batteryBar");
    const volumeLevel = document.getElementById("volumeLevel");
    const volumeSlider = document.getElementById("volumeSlider");

    // Simular atualização da bateria a cada 5 segundos
    setInterval(() => {
        let randomBattery = Math.floor(Math.random() * 100);
        batteryLevel.textContent = randomBattery;
        batteryBar.value = randomBattery;
    }, 5000);

    // Atualizar volume quando o usuário altera o slider
    volumeSlider.addEventListener("input", function () {
        volumeLevel.textContent = this.value;
    });

    // Inicializar mapa com uma localização fictícia
   function loc() {
        const map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: -23.55052, lng: -46.633308 }, // Posição fictícia
            zoom: 14
        });

        new google.maps.Marker({
            position: { lat: -23.55052 + (Math.random() * 0.01), lng: -46.633308 + (Math.random() * 0.01) },
            map: map,
            title: "Fone localizado"
        });
    };
});

