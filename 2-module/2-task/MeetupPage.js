import { MeetupView } from './MeetupView.js';
import { MEETUP_ID, fetchMeetup } from './data.js';

export const MeetupPage = {
  name: 'MeetupPage',

  template: `<meetup-view :meetup="meetup"></meetup-view>`,

  // Components
  components: { MeetupView },

  // Data
  data() {
    return {
      meetup: {},
    };
  },
  // Mounted
  async mounted() {
    this.meetup = await fetchMeetup(MEETUP_ID);
  },
  // Methods
};
