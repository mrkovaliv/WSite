import CONSTANTS from "./constants";

const INITIAL_STATE = {
  settings: {
    color: "#000",
    backgroundColor: "#fff",
    showHeader: true,
    showMain: true,
    showAbout: true,
    showServices: true,
    showNovelty: true,
    showTeam: true,
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
  main: {
    color: "#fff",
    backgroundColor: "#b8a293",
    backgroundImage:
      "https://emilydenisephotography.com/wp-content/uploads/2021/02/Unitec_Website_1594x675_Photography.jpg",
    title: "Фотостудія Lion Production",
    description:
      "Нам би дуже хотілося, щоб ви завжди посміхалися і відчували радість дивлячись на свої фотографії.",
  },
  about: {
    color: "#fff",
    backgroundColor: "#1b1f20",
    title: "Фотостудия Lion Production",
    description:
      "Самая большая фотостудия и креативное пространство для событий рядом со студгородком КПИ. Мы собрали опытных специалистов и надежное оборудование, чтобы создать лучшие условия для фотографов и воплощения любых идей. Четыре масштабных циклорамы, павильоны с интерьерами и студии для предметной съемки. Большой зал для конференций, лекций и тренингов, которое легко трансформируется.",
  },
  service: {
    color: "#fff",
    backgroundColor: "#1b1f20",
    data: [
      {
        title: "ПОСЛУГИ ВІЗАЖУ, СТИЛІСТА",
        description:
          "Запорука гарної фотосесії вдало підібраний макіяж та зачіска. Тепер в XXL-studio, ви знайдете не тільки шикарний інтер'єр, але і стиліста-візажиста, який допоможе у створенні неповторного образу. Макіяж та зачіска доповнять будь-який образ та підкреслять індивідуальність, притаманну кожній дівчині. Нададуть впевненості в собі, аби на фото ви були неперевершені.",
      },
      {
        title: "vsdfvdsfvds",
        description:
          "Самая большая лекций и тренингов, которое легко трансформируется.",
      },
      {
        title: "vsdfvdsfvds",
        description:
          "Самая большая лекций и тренингов, которое легко трансформируется.",
      },
      {
        title: "vsdfvdsfvds",
        description:
          "Самая большая лекций и тренингов, которое легко трансформируется.",
      },
    ],
  },
  review: {
    reviews: [
      {
        name: "Норберт",
        color: "#1b1f20",
        description:
          "Моя улюблена студія! Найчистіший звук для відео зйомки, багатофункціональні зали! Відношення персоналу супер - завжди готові прийти на допомогу!",
      },
      {
        name: "Василь",
        color: "#1b1f20",
        description:
          "По-перше, легко дістатися. По-друге, світла студія, великі приміщення з декількома локаціями! Обов'язково повернуся і жодного разу!",
      },
      {
        name: "Андрій",
        color: "#1b1f20",
        description:
          "Різноманітні інтер'єри та дуже чуйні адміністратори. Добре, що дотримуються правил безпеки під час пандемії.",
      },
    ],
    color: "#000",
    backgroundColor: "#fff",
  },

  team: {
    data: [
      {
        name: "Фотограф",
        img: "https://images.unian.net/photos/2020_10/thumb_files/400_0_1601542911-3769.jpg?0.029252425211480526",
        color: "#1b1f20",
        description:
          "Мене звати Богдан. Я весільний і сімейний фотограф понад 3 роки. Живу та працюю в Києві. Фотографія для мене не просто робота, а спосіб показати почуття та емоції пар через об'єктив моєї камери.",
      },
      {
        name: "Візажист",
        img: "http://cdn.goodhouse.com.ua/images-jpeg/15994/159940.jpeg",
        color: "#1b1f20",
        description:
          "Привіт, мене звуть Ростислав, я візажист – гример. Художник образ. Створюю у цій сфері з 2007 року. Робота художником з гриму в кіно, стилістом/візажистом на телебаченні, рекламі, серіалах.",
      },
      {
        name: "Стиліст",
        img: "https://rivne1.tv/pics2/1901/i97511.jpg?1546526976",
        color: "#1b1f20",
        description:
          "Привіт, мене звуть Віталій, я стиліст і дуже люблю створювати красиві образи. Я буду дуже радий мати відношення до Ваших позитивних спогадів та красивих знімків",
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
