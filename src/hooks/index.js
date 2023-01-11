const url = "https://github.com/sin0light/api-kaamelott/blob/master/assets/quotes.json"


export default async function fethQuote() {
    // Default options are marked with *
    const response =  await fetch(url)
    .then((response) => response.json())
    return response
  }


  



