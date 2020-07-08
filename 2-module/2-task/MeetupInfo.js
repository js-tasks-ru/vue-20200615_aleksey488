export const MeetupInfo = {
  template: `<ul class="info-list">
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ processedMeetup.organizer }}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ processedMeetup.place }}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time datetime="processedMeetup.date">{{ processedMeetup.localeDate }}</time>
      </li>
    </ul>`,

  // Пропсы
  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  // computed
  computed: {
    processedMeetup() {
      return {
        ...this.meetup,
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
    }
  }
};
