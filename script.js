let xPromise = new Promise((resolve, reject) => {
    let serverAnswer = {
        "server_сode": "200",
        "server_request_type": "GET",
        "server_time": "1678789421"
    };
    if (serverAnswer.server_сode == 201) {
        resolve(serverAnswer);
    }
    else {
        reject("Error! Server busy!");
    }
});

xPromise.then((data) => {
    if (data.server_сode == 200) {
        console.log("Successfully!Server code" + data.server_сode);
    }
}).catch((err) => {
    console.log(err);
});