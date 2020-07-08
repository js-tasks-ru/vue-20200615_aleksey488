import { agendaItemTitles, agendaItemIcons } from './data.js';

export const MeetupAgendaItem = {
  name: 'MeetupAgendaItem',

  template: `<div class="meetup-agenda__item">
      <div class="meetup-agenda__item-col">
        <img class="icon" alt="icon" :src="iconLink" />
      </div>
      <div class="meetup-agenda__item-col">{{ processedAgenda.startsAt }} - {{ processedAgenda.endsAt }}</div>
      <div class="meetup-agenda__item-col">
        <h5 class="meetup-agenda__title">{{ processedAgenda.title }}</h5>
        <template v-if="processedAgenda.type === 'talk'">
          <p><span>{{ processedAgenda.speaker }}</span><span class="meetup-agenda__dot"></span><span class="meetup-agenda__lang">{{ processedAgenda.language }}</span></p>
          <p>{{ processedAgenda.description }}</p>
        </template>
      </div>
    </div>`,

  // Пропсы
  props: {
    agendaItem: {
      type: Object,
      required: true,
    },
  },

  // Тут помогут computed
  computed: {
    processedAgenda() {
      return {
        ...this.agendaItem,
        title: this.agendaItem.title
          ? this.agendaItem.title
          : agendaItemTitles[this.agendaItem.type],
        icon: agendaItemIcons[this.agendaItem.type] || 'cal-sm',
      }
    },
    iconLink() {
      return `/assets/icons/icon-${this.processedAgenda.icon}.svg`;
    },
  },
};
