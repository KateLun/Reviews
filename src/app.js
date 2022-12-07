let reviews = [
  {
    image: "/images/cake-bithday.jpg",
    text: "Спасибо огромное за такой вкусный, красивый торт, как всегда – изумительный! Заказываем у Татьяны не первый раз!",
    name: "Дарья",
    date: "18.07.2020",
  },
  {
    image: "/images/cake-born.jpg",
    text: "Самый вкусный торт, который я когда-либо пробовала! Очень вкусный, не приторный, тает во рту. Все гости были в восторге!",
    name: "Екатерина",
    date: "30.06.2021",
  },
  {
    image: "/images/kapk.jpg",
    text: "Заказывали в подарок. Все вкусно! Красивое оформление! Рекомендую!",
    name: "Николай",
    date: "20.03.2022",
  },
  {
    image: "/images/cake-five.jpg",
    text: "Нежный, нереально вкусный, креативное оформление, хорошая доставка. Кондитеру спасибо, успехов!",
    name: "Анастасия",
    date: "19.11.2019",
  },
  {
    image: "/images/cake-one-year.jpg",
    text: "Заказывали тортик на день рождения дочери. Спасибо вам за шикарный торт! Было очень вкусно, все были в восторге от вашего шедевра! Вы просто волшебница!",
    name: "Ольга",
    date: "16.07.2021",
  },
  {
    image: "/images/cake-four.jpg",
    text: "Большое спасибо за чудо-тортик!!!!Были все в восторге от такой красоты и вкусноты!))",
    name: "Алексей",
    date: "27.07.2022",
  },
  {
    image: "/images/cake-three.jpg",
    text: "Восхитительно вкусный торт, который в очередной раз украсил наши семейные праздники! Скажу честно, в разрезе не успела сфотографировать, разлетелся невероятно быстро...Спасибо за Ваш труд!",
    name: "Валерия",
    date: "06.08.2022",
  },
];

const container = document.getElementById("container");

let index = 0;

function renderReview() {
  let review = reviews[index];
  container.innerHTML = `<div class="review">
            <img class='review_image' src='${review.image}' />
            <p class='review_text'>${review.text}<p>
            <p class='review_text'>${review.name}</p>
            <p class='review_text'>${review.date}</p>      
        </div> `;
}

renderReview();

const buttonNext = document.getElementById("button-next");
buttonNext.addEventListener("click", nextReview);

const buttonPrev = document.getElementById("button-prev");
buttonPrev.addEventListener("click", prevReview);

const buttonRandom = document.getElementById("button-random");
buttonRandom.addEventListener("click", randomReview);

function nextReview() {
  if (index == reviews.length) {
    index = 0;
  } else {
    index = index + 1;
  }
  renderReview();
  console.log(review);
}

function prevReview() {
  if (index <= 0) {
    index = reviews.length;
  } else {
    index = index - 1;
  }
  renderReview();
}

function randomReview() {
  var randInd = Math.floor(Math.random() * reviews.length);
  if (index === randInd) {
    randomReview();
  } else {
    index = randInd;
    renderReview();
  }
}

renderReview();
