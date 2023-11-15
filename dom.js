import { fetch_weather, fetch_coords } from "./api.js";

const search_btn = document.querySelector("#search button");
const search_bar = document.querySelector("#search input");
const container = document.querySelector("#container");

const temperature = document.querySelector("#temperature span");
const humidity = document.querySelector("#humidity span");
const wind = document.querySelector("#wind span");
const icon = document.querySelector("#icon");
const info = document.querySelector("#info");

const place = document.querySelector("#place");
const time = document.querySelector("#time");
const date = document.querySelector("#date");

document.addEventListener("DOMContentLoaded", () => {
  update_weather("new york");
});

search_bar.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    update_weather(search_bar.value);
  }
});
search_btn.addEventListener("click", () => {
  update_weather(search_bar.value);
});

async function update_weather(area) {
  const coords = await fetch_coords(area);
  const data = await fetch_weather(coords);

  temperature.innerHTML = Math.round(+data.main.temp) + "&deg;C";
  humidity.innerText = data.main.humidity + "%";
  wind.innerText = Math.round(data.wind.speed * 3.6) + "km/h";
  info.innerText = data.weather[0].description;

  date.innerText = new Date(data.dt * 1000).toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
  });
  time.innerText = new Date(data.dt * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  place.innerText = data.name + ", " + data.sys.country;

  //   console.log(icon.src);
  icon.src = "/openweathermap/" + data.weather[0].icon + ".svg";
  // icon.src = "/droplet.svg";

  loading_screen(false);
}
export function loading_screen(state) {
  if (state) {
    container.style.opacity = "0.4";
  }
  if (!state) {
    container.style.opacity = "1";
  }
}
