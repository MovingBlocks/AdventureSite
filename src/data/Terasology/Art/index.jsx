import TwoD from './2D'
import ThreeD from './3D'
import Sound from './Sound'

export default {
  'user-responses': [
    {
      name: 'Show me open tasks related to art',
      link: 'https://github.com/MovingBlocks/Terasology/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3AArtwork',
    },
    {
      name: 'I wish to know more about 3D Modeling.',
      child: ThreeD,
    },
    {
      name: 'I would like to learn more about 2D Art.',
      child: TwoD,
    },
    {
      name: 'I am interested in sound design roles',
      child: Sound,
    },
  ],
  'gooey-response': {
    gooey: 'What type of art would you like to contribute?',
  },
};
