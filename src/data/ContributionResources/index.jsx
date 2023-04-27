import Git from "./Git";
import Conventions from "./Conventions";
import Workspace from "./Workspace";
import Contributor from "../Terasology/Contributor";

const index = {
  'user-responses': [
    {
      name: 'How do I work with Git / GitHub?',
      child: Git,
    },
    {
      name: 'Can you help me set up my workspace?',
      child: Workspace,
    },
    {
      name: 'I want to know more about the codebase structure.',
      link: 'https://github.com/MovingBlocks/Terasology/wiki/Codebase-Structure',
    },
    {
      name: 'How do I work on a PR most efficiently?',
      link: 'https://github.com/MovingBlocks/Terasology/wiki/How-to-Work-on-a-PR-Efficiently',
    },
    {
      name: 'Which conventions should I follow?',
      child: Conventions
    },
    {
      name: 'Okay, got it. Now I feel ready to contribute!',
      jump: 'u0u0u3',
    },
  ],
  'gooey-response': {
    gooey: "You're a new contributor? Awesome and welcome! How can I help you?",
  },
};

export default index;