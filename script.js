const apiKey = "MWT2LpkCLiq6GIL1GmT2BZu4WhTXv6R22o4rrmEi"; // Use your own API key if obtained
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

function updateAPOD() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Handle the data here
      console.log(data);

      // Display APOD information
      const imageElement = document.getElementById("apod-image");
      imageElement.src = data.url;
      imageElement.alt = data.title;
      document.getElementById("apod-title").innerText = data.title;
      document.getElementById("apod-explanation").innerText = data.explanation;
      document.getElementById("apod-date").innerText = `Date: ${data.date}`;

      // Calculate time to next APOD
      const nextApodDate = new Date(data.date);
      nextApodDate.setDate(nextApodDate.getDate() + 1); // Assuming APOD is updated daily
      const now = new Date();
      const timeToNextApod = nextApodDate - now;
      const hours = Math.floor(
        (timeToNextApod % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeToNextApod % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeToNextApod % (1000 * 60)) / 1000);
      document.getElementById(
        "time-to-next-apod"
      ).innerText = `Time to next APOD: ${hours}h`;

      // Add event listener for the "View Full Resolution" button
      const fullResolutionButton = document.getElementById(
        "view-full-resolution"
      );
      fullResolutionButton.addEventListener("click", () => {
        window.open(data.hdurl, "_blank");
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
}

// Initial update
updateAPOD();

// Update APOD every day (24 hours)
setInterval(updateAPOD, 24 * 60 * 60 * 1000);
