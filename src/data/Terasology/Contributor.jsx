import ContributionResources from '../ContributionResources';
import CoreGame from './Core Game';
import Artist from './Artist';
import Documentation from './Documentation';
import UI from './UI/UI';
import Contact from '../Contact';

export default {
  'user-responses': [
    {
      name: 'I`m a developer. I code. Where is my coffee? ☕',
      child: Development,
    },
    {
      name: 'I`m an artist. 2D image art, 3D models, in-game structures, music and sound - stuff like that.',
      child: Art,
    },
    {
      name: 'I`m a technical writer. Documentation comments are my code, doc guides and wiki pages my canvas.',
      child: Documentation,
    },
    {
      name: 'Actually, I`m not sure I`m one of the above 😥 Can you help me figure out?',
      child: Contact,
    }
  ],
  'gooey-response': {
    gooey: 'So I heard you want to contribute? Tell me who you are and I tell you where to go.',
  },
};
