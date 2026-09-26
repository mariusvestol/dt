(() => {
  "use strict";

  const dateElement = document.getElementById("today");
  const formatter = new Intl.DateTimeFormat("nb-NO", {
    timeZone: "Europe/Oslo",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  function updateDate() {
    const parts = Object.fromEntries(
      formatter.formatToParts(new Date()).map(({ type, value }) => [type, value]),
    );
    const dateKey = `${parts.year}-${parts.month}-${parts.day}`;

    if (dateElement.dateTime !== dateKey) {
      dateElement.dateTime = dateKey;
      dateElement.textContent = `${parts.day}.${parts.month}.${parts.year}`;
    }
  }

  updateDate();

  // Keep the date current across midnight and when returning to a sleeping tab.
  window.setInterval(updateDate, 1000);
  window.addEventListener("pageshow", updateDate);
  window.addEventListener("focus", updateDate);
  document.addEventListener("visibilitychange", updateDate);
})();
