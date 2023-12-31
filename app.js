const form = document.querySelector("form");
const submit = document.querySelector("i");
const input = document.querySelector(".search");
const div = document.querySelector(".container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value === "") {
    alert("Enter a city name");
    return false;
  }
  div.innerHTML = `<dotlottie-player src="https://lottie.host/aacb7517-ef9d-4d5b-9499-44af09a0c767/vAuswnrSJy.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></dotlottie-player>`;
  //   console.log(input.value);
  axios
    .get(
      `https://api.weatherapi.com/v1/current.json?key=f7402a6bba5949fb957104953231610&q=${input.value}`
    )
    .then((result) => {
      setTimeout(() => {
        div.innerHTML = `<div class="parent-div"><div class="data-div"><span class="name-region"><h1 class=" city-name">${result.data.location.name}</h1><div class="con-reg"> <h6 >${result.data.location.region},</h6><h6>${result.data.location.country}</h6></div></span><h1 class="item center">${result.data.current.temp_c} °C</h1 class="item"><h1>${result.data.current.condition.text}</h1><h1 class="item">Humidity: ${result.data.current.humidity}</h1><h1 class="item">${result.data.location.country}</h1><h1 class="item">Wind: ${result.data.current.wind_kph} km/h</h1><h1 class="item">${result.data.location.localtime}</h1></div><div>
    <img src="${result.data.current.condition.icon}"</div></div>`;
      }, 600);
    })
    .catch(() => {
      setTimeout(() => {
        console.log("City is not in our database");
        div.innerHTML = `<h1 class="animate__animated animate__bounce">Looks like there is a spelling mistake!!</h1>`;
      }, 700);
    });
  input.value = "";
});
