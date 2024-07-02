// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”



// const buttonEl = document.createElement('button');
// buttonEl.textContent = 'Кнопка';
// document.body.appendChild(buttonEl);
// window.onload = () => {
//     console.log('Страница загрузилась');
// }

// buttonEl.onclick = function () {
//     console.log('Событие oncklic');
// }

// buttonEl.addEventListener('click', function (e) {
//     console.log('Событие addEventListener');
// });



// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”



// const bodyEl = document.querySelector('body');

// for (let i = 1; i < 4; i++) {
//     bodyEl.insertAdjacentHTML('beforeend', `<button>Кнопка ${i}</button>`)
// }

// const buttonElems = document.querySelectorAll('button');
// buttonElems.forEach(element => {
//     // element.onclick = () => {
//     //     console.log(element);
//     // }
//     element.addEventListener('click', (e) => {
//         console.log(e.target);
//     });
// });

// const buttonEl4 = document.createElement('button');
// buttonEl4.textContent = 'Кнопка 4';
// bodyEl.appendChild(buttonEl4);
// let counter = 0;
// buttonEl4.addEventListener('click', () => {
//     counter++;
//     console.log(`Раз нажато на кнопку: ${counter}`);
// })


// const buttonEl5 = document.createElement('button');
// buttonEl5.textContent = 'Кнопка 5';
// bodyEl.appendChild(buttonEl5);

// buttonEl5.addEventListener('click', function () {
//     buttonEl5.textContent = 'Вы нажали на эту кнопку';
// });




// Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”



// const bodyEl = document.querySelector('body');
// const buttonH1El = document.createElement('button');
// buttonH1El.textContent = 'Добавить H1';
// bodyEl.insertAdjacentElement('beforeend', buttonH1El);
// buttonH1El.addEventListener('click', function () {
//     const h1El = document.createElement('h1');
//     h1El.textContent = 'Новый заголовок';
//     buttonH1El.after(h1El);
// })


// const buttonRemoveH1 = document.createElement('button');
// buttonRemoveH1.textContent = 'Удалить h1';
// bodyEl.appendChild(buttonRemoveH1);
// buttonRemoveH1.addEventListener('click', () => {
//     document.querySelector('h1').remove();
// })


// const buttonPointAtMe = document.createElement('button');
// buttonPointAtMe.textContent = 'Наведи на меня';
// bodyEl.appendChild(buttonPointAtMe);
// buttonPointAtMe.addEventListener('mouseover', () => {
//     console.log('Вы навели курсор на кнопку');
// })
// buttonPointAtMe.addEventListener('mouseleave', () => {
//     console.log('Вы убрали курсор с кнопки');
// })




// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”



// const bodyEl = document.querySelector('body');
// const ulEl = document.createElement('ul');
// const liEl1 = document.createElement('li');
// const liEl2 = document.createElement('li');
// const liEl3 = document.createElement('li');
// liEl1.textContent = 'Элемент';
// liEl2.textContent = 'Элемент';
// liEl3.textContent = 'Элемент';
// bodyEl.appendChild(ulEl);
// ulEl.append(liEl1, liEl2, liEl3);
// const buttonAddEl = document.createElement('button');
// buttonAddEl.textContent = 'Добавить элемент';
// bodyEl.after(buttonAddEl);
// buttonAddEl.addEventListener('click', () => {
//     ulEl.insertAdjacentHTML('beforeend', '<li>Новый элемент списка</li>')
// })
// const buttonRemoveFirstEl = document.createElement('button');
// buttonRemoveFirstEl.textContent = 'Удалить первый элемент';
// buttonAddEl.after(buttonRemoveFirstEl);
// buttonRemoveFirstEl.addEventListener('click', function () {
//     ulEl.firstChild.remove();
// });
// const buttonAddClass = document.createElement('button');
// buttonAddClass.textContent = 'Добавь класс';
// buttonRemoveFirstEl.after(buttonAddClass);
// buttonAddClass.addEventListener('click', function () {
//     buttonAddClass.classList.add('click');
// });






// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.



document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM полностью загружен и разобран");
});



// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.



window.onload = () => {
    console.log('Страница загрузилась');
}



// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.



const bodyEl = document.querySelector('body');
bodyEl.addEventListener('click', function (e) {
    let target = e.target;
    if (target.className != 'super_element') {
        console.log(`Класс "super_element" отсутствует в элементе ${target.tagName}.`);
    } else {
        console.log(`Класс "super_element" присутствует в элементе ${target.tagName}.`);
    }
});



// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."



const textareaEl = document.querySelector('textarea');
textareaEl.addEventListener('mouseover', () => {
    console.log('Вы навели на textarea');
})



// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.



const ulEl = document.querySelector('ul');
ulEl.addEventListener('click', function (e) {
    let target = e.target;
    if (target.tagName != 'BUTTON') return;

    console.log(target);
});



// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.



// так происходит потому что из за всплытия событий, событие возникает на элементе ul а потом всплывает вверх до body. можно отключить с помощью preventDefault



// 7. С помощью JS необходимо изменить цвет заднего фоторона каждого вго тега li.



const liEl = document.querySelectorAll('li');
for (let i = 0; i <= liEl.length; i++) {
    if (i % 2 != 0) {
        liEl[i].style.backgroundColor = 'red';
    }
}
