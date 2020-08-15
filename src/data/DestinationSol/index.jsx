import AboutDS from './About';
import Player from './Player';
import Contributor from './Contributor';

export default {
  'user-responses': [
    {
      name: 'What is DestinationSol? 🧐',
      child: AboutDS,
    },
    {
      name: '🎮 Just tell me about playing DestinationSol. 🎮',
      child: Player,
    },
    {
      name: 'I am here to report a bug.',
      link:
        'https://discord.com/channels/270264625419911192/713904031562727445',
    },
    {
      name: '💻 I wish to Contribute / Fix bugs. 💻',
      child: Contributor,
    },
  ],
  'gooey-response': {
    gooey: 'What about DestinationSol?',
  },
};
