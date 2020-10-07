import ContributionResources from ".";

export default {
    'user-responses': [
      {
        name: 'How to work with Git?',
        link: 'http://learngitbranching.js.org/',
      },
      {
        name: 'How to work with forks?',
        link: 'https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/working-with-forks'
      },
      {
        name: 'Labelling Issues and Pull Request',
        link:
          'https://github.com/MovingBlocks/Terasology/wiki/Labelling-Issues-and-Pull-Request',
      },
      {
        name: 'Done. What else should I know about?',
        child: ContributionResources,
      },
    ],
    'gooey-response': {
      gooey: 'New to Git / GitHub? Check this out.',
    },
  };
  