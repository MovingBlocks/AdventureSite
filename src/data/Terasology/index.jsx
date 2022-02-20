import About from './About';
import Player from './Player';
import Contributor from './Contributor';
import Contact from './Contact';

const index = {
  'user-responses': [
    {
      name: '🧐 What is Terasology?',
      child: About,
    },
    {
      name: '🎮 Just tell me about playing Terasology.',
      child: Player,
    },
    {
      name: "🐞 I'm here to report a bug / ask a question.",
      child: Contact,
    },
    {
      name: '💻 I wish to contribute / fix bugs.',
      child: Contributor,
    },
  ],
  'gooey-response': {
    gooey: 'What about Terasology?',
  },
};

export default index;