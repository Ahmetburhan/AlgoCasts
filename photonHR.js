const https = require('https');

function getMovieTitles(substr) {
    let title = []

    https.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}&page=1`, (res) => {
        var body = '';
        res.on('data', function (chunk) {
            body += chunk;
        });
        res.on('end', function () {
            console.log(body);
            let obj = JSON.parse(body)
            let collect = obj.data.map(el => el.Title)
            title = [...title, ...collect]
            console.log(collect.join("\n"))

        });
        // return title;
    }).on('error', (e) => {
        console.error(e);
    });

    https.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}&page=2`, (res) => {
        var body = '';
        res.on('data', function (chunk) {
            body += chunk;
        });
        res.on('end', function () {
            // console.log(body);
            let obj = JSON.parse(body)
            let collect2 = obj.data.map(el => el.Title)
            title = [...title, ...collect2]

        });
        // return title;
    }).on('error', (e) => {
        console.error(e);
    });

}



// console.log(getMovieTitles("spiderman"))

console.log(getMovieTitles("Waterworld"))




