import CONSTANTS from "./constants";

const INITIAL_STATE = {
  settings: {
    color: "#000",
    backgroundColor: "#fff",
    showHeader: true,
    showAbout: true,
    showServices: true,
    showNovelty: true,
    showReviews: true,
    showFooter: true,
  },
  header: {
    color: "#fff",
    backgroundColor: "#1b1f20",
    email: "kovaliv@gmail.com",
    phone: "+380938160837",
    instagram: "https://www.instagram.com/aleksey_durnev",
    facebook: "https://www.facebook.com/a.durnev",
    telegram: "https://t.me/durnevportitvse",
  },
  about: {
    color: "#fff",
    backgroundColor: "#b8a293",
    title: "Фотостудия Lion Production",
    description:
      "Самая большая фотостудия и креативное пространство для событий рядом со студгородком КПИ. Мы собрали опытных специалистов и надежное оборудование, чтобы создать лучшие условия для фотографов и воплощения любых идей. Четыре масштабных циклорамы, павильоны с интерьерами и студии для предметной съемки. Большой зал для конференций, лекций и тренингов, которое легко трансформируется.",
  },
  review: {
    reviews: [
      {
        name: "Богдан",
        color: '#1b1f20',
        description:
          "Моя улюблена студія! Найчистіший звук для відео зйомки, багатофункціональні зали! Відношення персоналу супер - завжди готові прийти на допомогу!",
      },
      {
        name: "Ростислав",
        color: '#1b1f20',
        description:
          "По-перше, легко дістатися. По-друге, світла студія, великі приміщення з декількома локаціями! Обов'язково повернуся і жодного разу!",
      },
      {
        name: "Віталій",
        color: '#1b1f20',
        description:
          "Різноманітні інтер'єри та дуже чуйні адміністратори. Добре, що дотримуються правил безпеки під час пандемії.",
      },
    ],
    color: "#000",
    backgroundColor: "#fff",
  },

  footer: {
    color: "#fff",
    email: "kovaliv@gmail.com",
    phone: "+380938160837",
    address: "Київ, вул. Героїв Маріуполя 22A",
    from: "9.00",
    to: "19.00",
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONSTANTS.GET_STATE_VALUES:
      return state;
    default:
      return state;
  }
};

export default reducer;
