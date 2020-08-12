export default {
  'user-responses': [
    {
      name: 'I wish to know more about 3D Modeling.',
      child: {
        'user-responses': [
          {
            name: 'Creation of animated models with Blender',
            link:
              'https://github.com/MovingBlocks/TeraMisc/blob/master/blender_addons/io_md5_exporter/tutorial/Tutorial.md',
          },
          {
            name: 'Blender Assets',
            link:
              'https://github.com/MovingBlocks/Terasology/wiki/Using-Blender-Assets-as-Miniion-Models',
          },
          {
            name: 'Collada Models',
            link:
              'https://github.com/MovingBlocks/Terasology/wiki/Collada-Models',
          },
          {
            name: 'I wish to learn about 2D Stuff',
            jump: 'u0u0u2u1u1',
          },
        ],
        'gooey-response': {
          gooey: 'What in 3D Modelling?',
        },
      },
    },
    {
      name: 'I would like to learn more about 2D Art.',
      child: {
        'user-responses': [
          {
            name: 'Learn more about Aseprite',
            link: 'https://github.com/MovingBlocks/Terasology/wiki/Aseprite',
          },
          {
            name: 'Tell me about Textures',
            link: 'https://github.com/MovingBlocks/Terasology/wiki/Textures',
          },
        ],
        'gooey-response': {
          gooey: 'What about 2D Designing?',
        },
      },
    },
    {
      name: 'I am interested in sound design roles',
      child: {
        'user-responses': [
          {
            name: 'Video Game Sound Design 101',
            link: 'https://www.gamedesigning.org/learn/video-game-sound/',
          },
        ],
        'gooey-response': {
          gooey: 'Here is a nice resource for Sound Design :)',
        },
      },
    },
  ],
  'gooey-response': {
    gooey: 'What type of artist are you?',
  },
};
