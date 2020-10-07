import ContributionResources from "../../ContributionResources";
import Architecture from "./Architecture";
import Workspace from "../../ContributionResources/Workspace";

export default {
  'user-responses': [
    {
      name: "No, I'm new here or have contributed only in other areas before.",
      child: ContributionResources,
    },
    {
      name: "Yes, but I don't recall how to set up my workspace.",
      child: Workspace
    },
    {
      name: "Yes, just show me open engine issues.",
      link: 'https://github.com/MovingBlocks/Terasology/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3A%22Good+First+Issue%22',
    },
    {
      name: "Yes, just show me open module issues.",
      link: 'https://github.com/search?q=org%3ATerasology+is%3Apr+is%3Aissue&state=open&type=Issues'
    },
    {
      name: 'Engine? Modules? Wait what?',
      link: Architecture,
    },
  ],
  'gooey-response': {
    gooey: "So I heard you'd like to code? Have you contributed to Terasology as a developer before?",
  },
};
