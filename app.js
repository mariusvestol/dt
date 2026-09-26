(() => {
  "use strict";

  const dateElement = document.getElementById("today");
  const checkInButton = document.getElementById("check-in");
  const checkInStatus = document.getElementById("check-in-status");
  const checkInTime = document.getElementById("check-in-time");
  const formatter = new Intl.DateTimeFormat("nb-NO", {
    timeZone: "Europe/Oslo",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  });

  function updateDate(now = new Date()) {
    const parts = Object.fromEntries(
      formatter.formatToParts(now).map(({ type, value }) => [type, value]),
    );
    const dateKey = `${parts.year}-${parts.month}-${parts.day}`;

    if (dateElement.dateTime !== dateKey) {
      dateElement.dateTime = dateKey;
      dateElement.textContent = `${parts.day}.${parts.month}.${parts.year}`;

      // A previous day's click must not leave an old date visible.
      checkInStatus.hidden = true;
      checkInTime.textContent = "";
      checkInTime.removeAttribute("datetime");
      checkInButton.hidden = false;
    }

    return parts;
  }

  checkInButton.addEventListener("click", () => {
    const now = new Date();
    const parts = updateDate(now);

    checkInTime.dateTime = now.toISOString();
    checkInTime.textContent = `${parts.day}.${parts.month}.${parts.year} kl: ${parts.hour}:${parts.minute}`;
    checkInButton.hidden = true;
    checkInStatus.hidden = false;
    checkInStatus.focus({ preventScroll: true });
  });

  updateDate();
  checkInButton.disabled = false;

  // Keep the date current across midnight and when returning to a sleeping tab.
  const refreshDate = () => updateDate();
  window.setInterval(refreshDate, 1000);
  window.addEventListener("pageshow", refreshDate);
  window.addEventListener("focus", refreshDate);
  document.addEventListener("visibilitychange", refreshDate);
})();
