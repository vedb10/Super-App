export const getweatherdetails = async () =>{
  try{
    const defaultLocation = "mumbai"
  const url = `http://api.weatherapi.com/v1/current.json?key=91462470361748be94775457233011&q=${defaultLocation}&aqi=no`
  const weather = await fetch(url).then((response)=>{ return response.json()})
  console.log(weather)
  return weather
  }catch (error){
    console.log(error)
}
}


