async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "lugar_da_chave"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`;

  const resultDiv = document.getElementById("result");

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Cidade não encontrada");

    const data = await response.json();
    resultDiv.innerHTML = `
      <p><strong>${data.name}, ${data.sys.country}</strong></p>
      <p>🌡️ Temperatura: ${data.main.temp}°C</p>
      <p>☁️ Clima: ${data.weather[0].description}</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = `<p style="color:red">${error.message}</p>`;
  }
}
