window.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.filters'),
        carsItems = document.querySelector('.cars__items');

    let request = new XMLHttpRequest();
    request.open('GET', 'js/cars.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.addEventListener('readystatechange', function () {
        if (request.readyState == 4) {
            if (request.status == 200) {
                const base = JSON.parse(request.response);
                let categorys = [];
                base.cars.forEach(element => {
                    const carCard = document.createElement('div');
                    carCard.classList.add('car__item');
                    carCard.setAttribute("category", element.category);
                    if (categorys.indexOf(element.category) == -1) {
                        categorys.push(element.category);
                    }
                    element.description = element.description.slice(0,200) + '...';
                    carCard.innerHTML = `
                        <div class="car__item-title">${element.name}</div> 
                        <div class="car__item-img"><img src="${element.img}" alt="${element.name}"/></div>
                        <div class="car__item-price">Цена: ${element.price}</>\$</div>
                        <div class="car__item-disc">${element.description}</div>
                    `;
                    carsItems.appendChild(carCard);
                });
                categorys.forEach( country =>{
                    const btn = document.createElement('button');
                    btn.setAttribute('id', country);
                    btn.textContent = country;
                    content.appendChild(btn);
                    btn.addEventListener('click', function () {
                        let attr = this.getAttribute('id');
                        const items = document.querySelectorAll('.car__item');
                        items.forEach(element =>{
                            if (element.getAttribute('category') == attr) {
                                element.style.display = 'block';
                            } else {
                                element.style.display = 'none';
                            }
                        });
                    });
                });
                const btn = document.createElement('button');
                btn.textContent = "show all";
                content.appendChild(btn);
                btn.addEventListener('click', () =>{
                    const items = document.querySelectorAll('.car__item');
                    items.forEach(element => element.style.display = 'block');
                });

            } else {
                carsItems.innerHTML = `Произошла ошибка, при получении данных с сервера!`;
            }
        }
    });
    request.send();
    console.log(request);
});