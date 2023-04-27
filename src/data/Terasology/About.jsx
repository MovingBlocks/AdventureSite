import Contributor from "./Contributor";
import Player from "./Player";

const About = {
  'user-responses': [
    {
      name: 'Cool! Tell me more!',
      link: 'https://github.com/MovingBlocks/Terasology/wiki/What-is-Terasology',
    },
    {
      name: 'Interesting... But why?',
      link: 'https://github.com/MovingBlocks/Terasology/wiki/Why-Terasology'
    },
    {
      name: 'Sounds awesome! How can I play?',
      child: Player,
    },
    {
      name: 'Wow! I want to join!',
      child: Contributor,
    }
  ],
  'gooey-response': {
    gooey:
      'Terasology is a super extensible open source voxel-based game. Born from a Minecraft-inspired tech demo, it is gradually becoming a stable platform for all sorts of gameplay settings in a voxel world.',
  },
};

export default About;