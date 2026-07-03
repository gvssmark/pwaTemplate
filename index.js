document.getElementById("title").textContent =
APP.NAME;

document.getElementById("version").textContent =
"Version " + APP.VERSION;

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker.register("sw.js")
            .then(() => console.log("Service Worker Registered"))
            .catch(console.error);

    });

}
