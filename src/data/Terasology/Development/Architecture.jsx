import ECS from "./ECS";
import Engine from "./Engine";
import Modules from "./Modules";

const Architechture = {
  'user-responses': [
    {
      name: "Give me the architecture deep dive!",
      child: ECS
    },
    {
      name: "I'm interested in the engine.",
      child: Engine
    },
    {
      name: "I'm all-in for modularity.",
      child: Modules
    }
  ],
  'gooey-response': {
    gooey: "Terasology mainly consists of an engine and a variety of modules, all based on our core architecture: the Entity-Component-System. About which would you like to learn more?",
  },
};

export default Architechture;