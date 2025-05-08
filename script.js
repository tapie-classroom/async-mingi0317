fetch('https://api.openweathermap.org/data/2.5/weather?lat=37.53609444&lon=126.9675222&appid=1678d5fbe5655c5df4baca85f98cc3ed')
  .then(response => {
      return response.json();
  })
  .then(data => {
      console.log(data);

      document.getElementById("gi").textContent = data.main.temp;
      document.getElementById("sp").textContent = data.main.humidity;
      document.getElementById("ba").textContent = data.wind.speed;

      const { icon, description } = data.weather[0];
      document.getElementById("icon").src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      document.getElementById("icon").alt = description;
  })
  .catch(error => {
      console.error('데이터를 가져오는 중 오류 발생:', error);
  })