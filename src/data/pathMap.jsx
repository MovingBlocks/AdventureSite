import Terasology from './Terasology';

export default {
  'user-responses': [
    {
      name: 'Gotcha 👍 Let the Journey begin. 🌄',
      child: {
        'user-responses': [
          {
            name: '🔦 I wish to learn more about Terasology.',
            child: Terasology,
          },
          {
            name: 'I wish to learn more about in DestinationSol.',
          },
          {
            name: '👋 I just wish to work on Game Stuff.',
          },
        ],
        'gooey-response': {
          gooey: 'Which project you wish to explore? 🧐 ',
        },
      },
    },
  ],
  'gooey-response': {
    gooey:
      '👋 Hey there, I am Gooey! Welcome to The Terasology Foundation Tutorial Journey! I will be guiding you through this Journey to know Project better. You can respond to my questions by selecting an appropriate reply from the user section below 👇',
    firstMessage: true,
  },
};
