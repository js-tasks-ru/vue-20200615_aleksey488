export const MeetupsCalendar = {
  name: 'MeetupsCalendar',

  template: `<div class="rangepicker">
    <div class="rangepicker__calendar">
      <div class="rangepicker__month-indicator">
        <div class="rangepicker__selector-controls">
          <button class="rangepicker__selector-control-left" @click="prevMonth"></button>
          <div>{{ localeDate }}</div>
          <button class="rangepicker__selector-control-right" @click="nextMonth"></button>
        </div>
      </div>
      <div class="rangepicker__date-grid">
        <div class="rangepicker__cell"
            v-for="day in days"
             :class="{'rangepicker__cell_inactive': day.inactive}"
        >
          {{ day.date }}
          <template v-if="day.meetups && day.meetups.length">
            <a class="rangepicker__event" v-for="meetup in day.meetups">{{ meetup.title }}</a>
          </template>
        </div>
      </div>
    </div>
  </div>`,

  props: {
    meetups: {
      type: Array,
      require: true,
    },
  },

  data() {
    return {
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
    };
  },

  computed: {
    days() {
      let year = this.year;
      let mon = this.month - 1;
      let d = new Date(year, mon);
      let days = [];

      for (let i = this.getDay(d); i > 0; i--) {
        days.push({
          date: new Date(d - 1000 * 60 * 60 * 24 * i).getDate(),
          inactive: true,
        });
      }

      while (d.getMonth() === mon) {
        let meetups = this.meetups.filter(
          (meetup) =>
            new Date(meetup.date).getDate() === d.getDate() &&
            new Date(meetup.date).getMonth() === mon &&
            new Date(meetup.date).getFullYear() === year,
        );

        days.push({ date: d.getDate(), meetups });

        d.setDate(d.getDate() + 1);
      }

      if (this.getDay(d) !== 0) {
        for (let i = this.getDay(d); i < 7; i++) {
          days.push({ date: new Date(d).getDate(), inactive: true });
          d.setDate(d.getDate() + 1);
        }
      }

      return days;
    },
    localeDate() {
      return new Date(this.year, this.month - 1).toLocaleString(
        navigator.language,
        {
          year: 'numeric',
          month: 'long',
        },
      );
    },
  },
  methods: {
    getDay(date) {
      let day = date.getDay();
      if (day === 0) day = 7;
      return day - 1;
    },
    nextMonth() {
      if (this.month === 12) {
        this.year = this.year + 1;
        this.month = 1;
      } else {
        this.month = this.month + 1;
      }
    },
    prevMonth() {
      if (this.month === 1) {
        this.year = this.year - 1;
        this.month = 12;
      } else {
        this.month = this.month - 1;
      }
    },
  },
};
