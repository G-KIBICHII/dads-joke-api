const jokeEl =document.getElementById('joke')
const jokeBtn = document.getElementById('btn')

jokeBtn.addEventListener('click',generateJoke)
generateJoke()

 async function generateJoke(){
    const config = {
        headers: {
            'accept': "application/json"
        }
      
    }

    const res =await  fetch('https://icanhazdadjoke.com',config)
    const data = await res.json()
    jokeEl.innerHTML=data.joke
 }


//     const config = {  headers: {
//         'Accept': 'application/json'
//     }
// }
//     fetch('https://icanhazdadjoke.com/',config).then(response=>response.json())
//     .then((data)=>{
//         jokeEl.innerHTML=data.joke
//     })
//}