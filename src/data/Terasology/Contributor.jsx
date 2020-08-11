import ContributionResources from '../ContributionResources';
import CoreGame from './Core Game';
import Artist from './Artist';
import Documentation from './Documentation';

export default {
  'user-responses': [
    {
      name: 'Yes. Show me the prerequisites resources. ',
      child: ContributionResources,
    },
    {
      name: 'Skip this and continue with contributions.',
      child: {
        'user-responses': [
          {
            name: 'I wish to work on the core Game stuff.. (in Java) ☕',
            child: CoreGame,
          },
          {
            name:
              'Tell me more about Artistic stuff. (3D/2D Design, Music, etc.)',
            child: Artist,
          },

          {
            name: 'I wish to contribute with Translations and Documentation.',
            child: Documentation,
          },
          {
            name: 'I wish to contribute in Game Designing and UI.',
            child: {
              'user-responses': [
                {
                  name: 'Tell me about Level designing',
                },
                {
                  name: 'Tell me about UI designing (NUI)',
                  link: 'https://github.com/Terasology/TutorialNui/wiki',
                },
              ],
              'gooey-response': {
                gooey: 'Select the topic you wish learn.',
              },
            },
          },
          {
            name: 'Tell me about web dev.',
          },
        ],
        'gooey-response': {
          gooey: 'Where do you wish to contribute?',
        },
      },
    },
  ],
  'gooey-response': {
    gooey: 'Please checkout the general prerequisites before you continue.',
  },
};
