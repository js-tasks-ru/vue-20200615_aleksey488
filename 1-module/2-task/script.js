import Vue from '/vendor/vue.esm.browser.js';

/** URL адрес API */
const API_URL = 'https://course-vue.javascript.ru/api';

/** ID митапа для примера; используйте его при получении митапа */
const MEETUP_ID = 6;

/**
 * Возвращает ссылку на изображение митапа для митапа
 * @param meetup - объект с описанием митапа (и параметром meetupId)
 * @return {string} - ссылка на изображение митапа
 */
function getMeetupCoverLink(meetup) {
  return `${API_URL}/images/${meetup.imageId}`;
}

/**
 * Словарь заголовков по умолчанию для всех типов элементов программы
 */
const agendaItemTitles = {
  registration: 'Регистрация',
  opening: 'Открытие',
  break: 'Перерыв',
  coffee: 'Coffee Break',
  closing: 'Закрытие',
  afterparty: 'Afterparty',
  talk: 'Доклад',
  other: 'Другое',
};

/**
 * Словарь иконок для для всех типов элементов программы.
 * Соответствует имени иконок в директории /assets/icons
 */
const agendaItemIcons = {
  registration: 'key',
  opening: 'cal-sm',
  talk: 'tv',
  break: 'clock',
  coffee: 'coffee',
  closing: 'key',
  afterparty: 'cal-sm',
  other: 'cal-sm',
};

export const app = new Vue({
  el: '#app',

  data: {
    meetup: {},
    filter: {
      date: '',
      participation: '',
      search: '',
      view: '',
    },
  },

  async mounted() {
    this.meetup = await this.getMeetupById(MEETUP_ID);
  },

  computed: {
    processedMeetup() {
      return {
        ...this.meetup,
        agenda:
          this.meetup.agenda && this.meetup.agenda.length
            ? this.meetup.agenda.map((agenda) => {
                return {
                  ...agenda,
                  title: agenda.title
                    ? agenda.title
                    : agendaItemTitles[agenda.type],
                  icon: agendaItemIcons[agenda.type] || 'cal-sm',
                };
              })
            : [],
        cover: this.meetup.imageId
          ? getMeetupCoverLink(this.meetup)
          : undefined,
        date: new Date(this.meetup.date),
        localeDate: new Date(this.meetup.date).toLocaleString(
          navigator.language,
          {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          },
        ),
      };
    },
  },

  methods: {
    async getMeetupById(id) {
      return fetch(`${API_URL}/meetups/${id}`).then((meetup) => meetup.json());
    },
  },
});
