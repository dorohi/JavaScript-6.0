//Восстановить порядок в меню, добавить пятый пункт

const menu = document.querySelector(".menu"),
		menuItems = document.querySelectorAll(".menu-item"),
		li = document.createElement('li');
console.log(menuItems);
menu.insertBefore(menuItems[2], menuItems[1]);
li.classList.add('menu-item');
li.textContent = 'Пьятый пункт';
menu.appendChild(li);

//Заменить картинку заднего фона на другую из папки img
document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

//  Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")
const title = document.querySelector(".title");
title.textContent = 'Мы продаем только подлинную технику Apple';

// Удалить рекламу со страницы
const column = document.querySelectorAll('.column');
const adv = document.querySelector(".adv");
//adv.remove(); Не поддерживается IE11-
column[1].removeChild(adv);

//Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
let question = prompt('Как вы относитесь к технике Apple?', '');
const prom = document.querySelector('#prompt');
prom.innerHTML = '<h2>' + question + '</h2>';