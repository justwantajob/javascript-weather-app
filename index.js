document.getElementById('js-get-weather-button')
  .addEventListener('click', () => {
    const city = document.getElementById('js-city-input').value;
    const apiKey = '90d171b50d5a7d8cfe2b117a8359dbf8';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const output = document.getElementById('js-weather-output');
    output.innerHTML = 'Loading...';

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('City not found');
        }
        return response.json();
      })
      .then(data => {
        const temp = data.main.temp;
        const desc = data.weather[0].description;
        const icon = data.weather[0].icon;
        const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;

        output.innerHTML = `
          <h2>${data.name}</h2>
          <img src="${iconURL}" alt="${desc}" />
          <p>${desc}</p>
          <p><strong>${temp}°C</strong></p>
        `;
      })
      .catch(error => {
        output.innerHTML = `<p style="color:red;">${error.message}</p>`;
      })
  });