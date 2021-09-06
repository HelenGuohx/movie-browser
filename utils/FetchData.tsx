const FetchData = async (url: string) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    const res = await fetch(url, requestOptions)
    if (res.status !== 200 ) throw `Fetch URL Error: ${res.Error}, status: ${res.status}, url: ${url}`

    const obj = await res.json()
    console.log(obj)
    return obj
  
  
}

export default FetchData