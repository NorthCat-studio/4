document.addEventListener("DOMContentLoaded", function() {
    const settingsPanel = document.getElementById("settingsPanel");
    const settingsButton = document.querySelector(".settings-btn");

    function toggleSettings() {
        settingsPanel.classList.toggle("active");
    }

    function toggleTheme() {
        document.body.classList.toggle("light-theme");
    }

    settingsButton.addEventListener("click", toggleSettings);
});

function toggleSettings() {
    let panel = document.querySelector(".settings-panel");
    let button = document.querySelector(".settings-btn");

    panel.classList.toggle("open");
    button.classList.toggle("open");
}
