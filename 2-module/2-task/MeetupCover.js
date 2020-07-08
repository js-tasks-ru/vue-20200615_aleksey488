export const MeetupCover = {
  template: `<div class="meetup-cover" :style="style">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,

  // Пропсы
  props: {
    title: String,
    link: String,
  },

  // Возможно, тут потребуется computed
  computed: {
    style() {
      return this.link ? `--bg-url: url('${this.link}')` : '';
    },
  },
};
