fetch("/data.json",{
    method: "GET"
}).then(response => {  
    if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
    }           
    return response.json();        
}).then((jsonData) => {
   localStorage.setItem("movies", JSON.stringify(jsonData))
})
.catch(error => {
    console.error("Fetch error:", error);
})