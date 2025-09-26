  const getAllPizzasApi = async(url, dataSource, stateSetter) =>{
    const res = await fetch(url)
    const data = await res.json()
    stateSetter(data)
    console.log(`${dataSource} fetch was succesful!`)
  }

  export default getAllPizzasApi