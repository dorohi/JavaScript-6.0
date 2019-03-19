let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    function convertPromise() {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.addEventListener('readystatechange', function () {
                if (request.readyState == 4) {
                    if (request.status == 200) {
                        resolve(request);
                    } else {
                        reject(request);
                    }
                }
            });
            request.send();
            return request;
        });
    }
    convertPromise()
        .then(request => {
            let data = JSON.parse(request.responseText);
            console.log(request);
            inputUsd.value = (inputRub.value / data.usd).toFixed(3);
        })
        .catch(request => {
            inputUsd.value = `Что-то пошло не так! Ошибка: ${request.status}`;
        });
});