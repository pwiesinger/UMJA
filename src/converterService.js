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
    const Http = new XMLHttpRequest();
    const url = "https://umja.herokuapp.com/convertText";
    Http.open("POST", url);
    Http.send(file);
    return new Promise(resolve => {
        Http.onreadystatechange = (e) => {
            if (Http.readyState === 4) {
                resolve(Http.responseText);
            }
        }
    })
};
