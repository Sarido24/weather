const apiKey = "d8a93279dfdefa6af449ed915be5e3fc"

async function fetchDataAwal(kotaAwal) { //Fetch pertama kalinya
    const responseOpenWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${kotaAwal}&appid=${apiKey}`)
    const responseOpenWeatherJson = await responseOpenWeather.json()
    console.log(responseOpenWeatherJson, "<< response Open Weather Json")
    
    let lat = responseOpenWeatherJson.coord.lat;
    let lon = responseOpenWeatherJson.coord.lon;
    
    const responseOpenMeteo = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FBangkok`)
    const responseOpenMeteoJson = await responseOpenMeteo.json()
    console.log(responseOpenMeteoJson, "<< response Open Meteo Json")
    if(responseOpenWeatherJson){
        document.getElementById("place").innerHTML = responseOpenWeatherJson.name
        document.getElementById("time").innerHTML = new Date();
        document.getElementById("place-time").innerHTML += "<h1>INI JAKARTA BUNG</h1>"
    }
}

const kotaAwal = document.getElementById("place").innerHTML
fetchDataAwal(kotaAwal)

document.getElementById("time").innerHTML = new Date();



async function fetchData() {
    const searchCity = document.getElementById("input-search").value
    // const searchCity = "Medan"
    const responseOpenWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}`)
    const responseOpenWeatherJson = await responseOpenWeather.json()
    console.log(responseOpenWeatherJson, "<< response Open Weather Json")

    let lat = responseOpenWeatherJson.coord.lat;
    let lon = responseOpenWeatherJson.coord.lon;
    
    const responseOpenMeteo = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FBangkok`)
    const responseOpenMeteoJson = await responseOpenMeteo.json()
    console.log(responseOpenMeteoJson, "<< response Open Meteo Json")
    if(responseOpenWeatherJson){
        document.getElementById("place").innerHTML = responseOpenWeatherJson.name
        document.getElementById("time").innerHTML = new Date();
    }
}
