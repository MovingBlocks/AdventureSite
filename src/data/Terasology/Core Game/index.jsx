export default {
  'user-responses': [
    {
      name: "Let's setup the Developer Environment.",
      child: {
        'user-responses': [
          {
            name: 'Set up the workspace.',
            link:
              'https://github.com/MovingBlocks/Terasology/wiki/Setting-up-a-Light-Environment',
          },
          {
            name: 'Quick Start',
            link: 'https://github.com/MovingBlocks/Terasology/wiki/Dev-Setup',
          },
          {
            name: 'I know the basics, lets jump to Development',
            jump: 'u0u0u2u0',
          },
        ],
        'gooey-response': {
          gooey:
            "Here are some good to know resouces in sequential order, you can skip this if you're already familiar.",
        },
      },
    },
    {
      name: 'I wish to learn more about AI/Behaviour',
    },
    {
      name: 'I wish to learn more about Architecture',
      child: {
        'user-responses': [
          {
            name: 'I wish to know more about Block Arch.',
            isGraph: true,
          },
          {
            name: 'I wish to know more about Shape Arch.',
          },
        ],
        'gooey-response': {
          gooey: 'What about Arch ?',
        },
      },
    },
    {
      name: '🎮 I wish to learn more about Multiplayer 🕹️',
    },
  ],
  'gooey-response': {
    gooey: 'Great. Choose a path you wish to explore.',
  },
};
