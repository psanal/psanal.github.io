export const fetchData=(endPoint,accessToke)=>{
    const headers=new Headers();
    headers.append("Authorization",`Bearer ${accessToke}`)
    const options={
        method:"GET",
        headers:headers
    }
    return fetch(endPoint,options)
    .then(response=> response.json())
    .catch(error=>console.log(error ))
}