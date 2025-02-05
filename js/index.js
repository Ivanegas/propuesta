let index = 0;

const data = [
    {
        img: "https://ih1.redbubble.net/image.4364754615.7017/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
        title: "Estas invitada a volver a recrear esta cita",
        text: "El dia 14 de febrero no faltes 🩵"
    },
    {
        img: "https://preview.redd.it/meme-de-gato-v0-krd7xsbs9dvc1.jpeg?width=640&crop=smart&auto=webp&s=05ec1e9889c5bdcec057a17f175302ddd9227ff1",
        title: "Pregunta 1",
        text: "¿Que comimos en nuestra primera cita de San Valentin?",
        options: [
            { text: "Pizza", correct: true },
            { text: "Cereales", correct: false }
        ]
    },
    {
        img: "https://i.pinimg.com/1200x/35/3a/d9/353ad9619623b527859c9ce2d07dbcac.jpg",
        title: "Pregunta 2",
        text: "¿Que miramos ese dia?",
        options: [
            { text: "Un partido de Millonarios", correct: false },
            { text: "Un partido de KRU VISAAAAAAAAAAA", correct: true }
        ]
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8vELHYE08xVB6frmlxzaU4dMJ-18XVWPVAA&s",
        title: "Pregunta 3",
        text: "¿Terminamos de ver el partido?",
        options: [
            { text: "Si", correct: false },
            { text: "No", correct: true }
        ]
    },
    {
        img: "https://i.redd.it/c8jn3lyh6w3b1.gif",
        title: "Pregunta 4",
        text: "¿Que hicimos despues del partido?",
        options: [
            { text: "Partidas de Valos", correct: true },
            { text: "Ver una pelicula", correct: false }
        ]
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzBG_XGtfP37htIKw5fSkXssDDY4_1-n1xGQ&s",
        title: "Pregunta 5",
        text: "¿Nos acostamos temprano?",
        options: [
            { text: "Si", correct: false },
            { text: "No", correct: true }
        ]
    }
];

const enableButton = () => {
    document.getElementById('next-button').style.display = 'block';
}

const enableNextButton = () => {
    document.getElementById('next-button').style.display = 'block';
}

const updateContent = () => {
    index = (index + 1) % data.length;
    const content = data[index];
    document.querySelector('.container img').src = content.img;
    document.querySelector('.text h2').textContent = content.title;
    document.querySelector('.text p').textContent = content.text;

    const optionsContainer = document.querySelector('.options');
    optionsContainer.innerHTML = '';

    if (content.options) {
        document.getElementById('next-button').style.display = 'none';
        content.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option.text;
            button.onclick = () => {
                showModal(option.correct);
                enableNextButton();
            };
            optionsContainer.appendChild(button);
        });
    } else {
        document.getElementById('next-button').style.display = content.alwaysShowNext ? 'block' : 'none';
    }
}

const showModal = (isCorrect) => {
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    const modalImg = modal.querySelector('img');
    const modalText = modal.querySelector('p');

    if (isCorrect) {
        modalImg.src = "https://img.buzzfeed.com/buzzfeed-static/static/2019-02/5/11/asset/buzzfeed-prod-web-06/sub-buzz-20992-1549385640-3.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto";
        modalText.textContent = "¡Respuesta correcta!";
    } else {
        modalImg.src = "https://ih1.redbubble.net/image.5121978944.6680/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg";
        modalText.textContent = "Respuesta incorrecta.";
    }

    modal.style.display = 'block';
    overlay.style.display = 'block';
}

const closeModal = () => {
    document.querySelector('.modal').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
}