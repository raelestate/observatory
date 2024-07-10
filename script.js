


const apiKey = "MWT2LpkCLiq6GIL1GmT2BZu4WhTXv6R22o4rrmEi";
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

function updateAPOD() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const imageElement = document.getElementById("apod-image");
      imageElement.src = data.url;
      imageElement.alt = data.title;
      document.getElementById("apod-title").innerText = data.title;
      document.getElementById("apod-explanation").innerText = data.explanation;
      document.getElementById("apod-date").innerText = `Date: ${data.date}`;

      const nextApodDate = new Date(data.date);
      nextApodDate.setDate(nextApodDate.getDate() + 1); 
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


      const fullResolutionButton = document.getElementById(
        "view-full-resolution"
      );
      fullResolutionButton.addEventListener("click", () => {
        window.open(data.hdurl);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
}


updateAPOD();

setInterval(updateAPOD, 24 * 60 * 60 * 1000);

function updateBackground() {
fetch(apiUrl)
.then((response) => response.json())
.then((data) => {

document.body.style.backgroundImage = `url('${data.url}')`;

document.body.style.backgroundSize = '100%';
document.body.style.backgroundPosition = 'center center';
document.body.style.backgroundRepeat = 'no-repeat';

})
.catch((error) => console.error("Error setting background:", error));
}

updateBackground();

setInterval(updateBackground, 24 * 60 * 60 * 1000);