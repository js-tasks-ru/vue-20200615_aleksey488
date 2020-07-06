import { getMeetupCoverLink } from './data.js';

export const MeetupCover = {
  template: `<div class="meetup-cover" :style="style">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,

  // Пропсы
  props: {
    title: String,
    imageId: Number,
  },

  // Возможно, тут потребуется computed
  computed: {
    style() {
      let link = this.imageId
        ? getMeetupCoverLink({ imageId: this.imageId })
        : undefined;

      return link ? `--bg-url: url('${link}')` : '';
    },
  },
};
