function updateCounter() {

    // Birthday: 12 July 1975
    const birthDate = new Date("1975-07-12T00:00:00");

    const now = new Date();

    const diff = now - birthDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));
    const seconds = Math.floor(diff / 1000);

    document.getElementById("days").innerText = days.toLocaleString();
    document.getElementById("hours").innerText = hours.toLocaleString();
    document.getElementById("minutes").innerText = minutes.toLocaleString();
    document.getElementById("seconds").innerText = seconds.toLocaleString();
}

// Run once immediately
updateCounter();

// Update every second
setInterval(updateCounter, 1000);