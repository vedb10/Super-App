
export const getnews = async() =>{

    const country = "IN"
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=33843ff9ee9b47d18a3a3bb8a32d4b25`
    const getter = await fetch(url).then((response)=>{return response.json()})
    console.log(getter)
    return getter
}
