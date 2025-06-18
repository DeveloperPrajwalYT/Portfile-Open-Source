// Weather api
const apiKey = "3af1494b2952fb227643fee0721546cf";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Sivas,tr&appid=" + apiKey;


async function getWeather() {
  try {
    const response = await fetch(weatherUrl);
    const data = await response.json();

    document.querySelector(".temp").textContent = `${Math.round(data.main.temp)}°C`;
    document.querySelector(".humidity").textContent = `${data.main.humidity}%`;
  } catch (error) {
    console.error("Hava durumu alınamadı:", error);
    document.querySelector(".temp").textContent = "N/A";
    document.querySelector(".humidity").textContent = "N/A";
  }
}

function updateTime() {
  const now = new Date();
  const options = {
    timeZone: "Asia/Nepal",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  };

  const formattedTime = now.toLocaleString("tr-TR", options);
  document.querySelector(".datetime").textContent = formattedTime;
}

getWeather();
updateTime();
setInterval(updateTime, 1000);


window.addEventListener('load', function () {
  setTimeout(function() {
    document.querySelector('.loading').classList.add('hidden');
  }, 1500); 
});
