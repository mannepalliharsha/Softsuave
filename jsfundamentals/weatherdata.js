async function data() {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99"
  );
  const value = await response.json();
  console.log(value);
}
data();
