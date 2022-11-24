/* import http from 'http'

const options = {
    hostname: "cafectg-production.up.railway.app",
    port: 7781,
    path:'/api/products',
    method:'GET'
}

const request = http.request(options,res=>{
    res.on('data',data=>{
        console.log(data)
        process.stdout.write(data);
    })
}).on("error", (err) => {
    console.log("Error: " + err.message);
});

request.end() */

import https from 'https'

https.get('https://cafectg-production.up.railway.app/api/products', (resp) => {
    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        console.log(JSON.parse(data));
    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
});