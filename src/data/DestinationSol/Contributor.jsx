import ContributionResources from '../ContributionResources';

export default {
  'user-responses': [
    {
      name: 'Show me the prerequisites and resources. ',
      child: ContributionResources,
    },
    {
      name: 'How to find and fix bugs?',
      //temp
      child: {
        'user-responses': [{ name: 'oops.' }],
        'gooey-response': { gooey: 'Working..' },
      },
    },
    {
      name: 'I wish to explore other contribution domains.',
      child: {
        'user-responses': [
          {
            name: 'I wish to work on the core Game Dev ☕',
          },
          {
            name: 'I want to make mods.',
          },
          {
            name: 'I wish to contribute with Translations and Documentation.',
          },
          {
            name: 'I wish to contribute in Game UI in Destination Sol.',
          },
        ],
        'gooey-response': {
          gooey: 'Where do you wish to contribute?',
        },
      },
    },
  ],
  'gooey-response': {
    gooey: 'Here are some contribution areas..',
  },
};
