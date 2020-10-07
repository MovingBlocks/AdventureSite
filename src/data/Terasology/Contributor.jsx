import Development from './Development';
import Art from './Art';
import Documentation from './Documentation';
import Design from './Design';
import Contact from './Contact';

export default {
  'user-responses': [
    {
      name: "I'm a developer. I code. Where is my coffee? ☕",
      child: Development,
    },
    {
      name: "I'm an artist. 2D image art, 3D models, music and sound - stuff like that.",
      child: Art,
    },
    {
      name: "I'm a designer. My passion is creating in-game structures and UIs providing awesome user experience.",
      child: Design,
    },
    {
      name: "I'm a technical writer. Documentation comments are my code, doc guides and wiki pages my project.",
      child: Documentation,
    },
    {
      name: "Actually, I'm not sure I'm one of the above 😥 Can you help me figure out?",
      child: Contact,
    }
  ],
  'gooey-response': {
    gooey: 'So I heard you want to contribute? Tell me who you are and I tell you where to go.',
  },
};
