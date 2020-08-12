import Translation from './Translation';
import Documentation from './Documentation';

export default {
  'user-responses': [
    Translation,
    {
      name: 'How to contribute in Documentation?',
      child: Documentation,
    },
  ],
  'gooey-response': {
    gooey: 'Select the topic you wish learn.',
  },
};
