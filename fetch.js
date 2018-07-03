url = "https://jsonplaceholder.typicode.com/posts/"
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("bad", error))


    ///100s of data