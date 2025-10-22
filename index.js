document.addEventListener("DOMContentLoaded", () => {
    const timeDisplay = document.querySelector('[data-testid="test-user-time"]');
    if (!timeDisplay) {
        console.error('Element not found: [data-testid="test-user-time"]');
        return;
    }

    function updateTime() {
        const now = new Date();
        const formatted = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        timeDisplay.textContent = formatted;
    }

    updateTime();
    setInterval(updateTime, 1000);
});