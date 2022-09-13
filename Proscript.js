console.log("Promises (Get Method)");

function getData(){
    url = "https://api.github.com/users";
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    })
}

getData();
