const https = require('https');

function getMovieTitles(substr) {
    let title = []

    function launcher(substr, page = 1) {
        https.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}&page=${page}`, (res) => {
            var body = '';
            res.on('data', function (chunk) {
                body += chunk;
            });
            res.on('end', function () {
                // console.log(body);
                let obj = JSON.parse(body)
                let counter = obj.total_pages;
                let collect = obj.data.map(el => el.Title)
                title = [...title, ...collect];
                console.log(collect.join("\n"));

            });
        }).on('error', (e) => {
            console.error(e);
        });

    };

    launcher(substr, page = 1)
    launcher(substr, page = 2)


}



console.log(getMovieTitles("spiderman"))

// console.log(getMovieTitles("Waterworld"))
