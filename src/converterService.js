import axios from 'axios';
export const converter_service = {
    sendFile,
    sendFileAxios
};

function sendFileAxios(file) {

        const data = new FormData();
        data.append('file', file[0]);

        axios.get("https://cors-anywhere.herokuapp.com/https://umja.herokuapp.com/convert", data, {
            // receive two    parameter endpoint url ,form data
        }).then(res => { // then print response status
                console.log(res.statusText)
            });

}

function sendFile (file) {

    /*console.log(file[0]);

    const data = new FormData();
    data.append('file', new Blob([file[0]], { type: 'application/json' }));

    const xhr = new XMLHttpRequest();


    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.response);
        }
    });


    xhr.open("GET", "https://umja.herokuapp.com/convert");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.send(data);*/

    console.log(file);

    var data = new FormData();
    data.append("file", file, "package-lock.json");

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("GET", "https://umja.herokuapp.com/convert");
    xhr.setRequestHeader("Content-Type", "multipart/form-data; boundary=--------------------------145190103762412521954642");

    xhr.send(data);

};
