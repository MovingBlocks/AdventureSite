import About from './About';
import Player from './Player';
import Contributor from './Contributor';

export default {
  'user-responses': [
    {
      name: 'What is Terasology? 🧐',
      child: About,
    },
    {
      name: '🎮 Just tell me about playing Terasology. 🎮',
      child: Player,
    },
    {
      name: '💻 I wish to Contribute 💻',
      child: Contributor,
    },
  ],
  'gooey-response': {
    gooey: 'What about Terasology?',
  },
};
