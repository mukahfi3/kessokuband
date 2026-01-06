function updateClock() {
    const now = new Date();

    const hari = now.toLocaleDateString("id-ID", { weekday: "long" });
    const tanggal = now.toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });
    const jam = now.toLocaleTimeString("id-ID");

    document.getElementById("clock").textContent =
        hari + ", " + tanggal + " | " + jam;
}

updateClock();
setInterval(updateClock, 1000);
