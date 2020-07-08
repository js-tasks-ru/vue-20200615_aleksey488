import { MeetupAgendaItem } from './MeetupAgendaItem.js';

export const MeetupAgenda = {
  name: 'MeetupAgenda',

  template: `
    <div class="meetup-agenda">
      <p class="meetup-agenda__empty" v-if="!agenda.length">Программа пока пуста, но когда-нибудь в ней обязательно что-нибудь появится!</p>
      <meetup-agenda-item v-else v-for="item in agenda" :key="item.id" :agenda-item="item"></meetup-agenda-item>
    </div>`,

  // Components
  components: {
    MeetupAgendaItem,
  },

  // Props
  props: {
    agenda: {
      type: Array,
      required: true,
    },
  },
};
