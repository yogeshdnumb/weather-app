import { loading_screen } from "./dom.js";
const API_KEY = "8abcc05e965105a7df55aa272c5030bf";
export async function fetch_coords(area) {
  let response = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${area}&appid=${API_KEY}`,
    { mode: "cors" }
  );

  let data = await response.json();
  return { lat: data[0].lat, lon: data[0].lon };
}

export async function fetch_weather(latLon) {
  loading_screen(true);

  // console.log(
  //   `https://api.openweathermap.org/data/2.5/weather?lat=${latLon.lat}&lon=${latLon.lon}&units=metric&appid=${API_KEY}`
  // );
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latLon.lat}&lon=${latLon.lon}&units=metric&appid=${API_KEY}`,
    { mode: "cors" }
  );
  let data = await response.json();
  return data;
}

// fetch_coords("avadi").then((e) => console.log(e.lat));
