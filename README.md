<h1 align="center">Turorial Journey Website for The Terasology Foundation!</h1>

[![status](https://img.shields.io/badge/status-pre--alpha-red.svg)](https://github.com/MovingBlocks/AdventureSite)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/MovingBlocks/AdventureSite.svg)](https://github.com/MovingBlocks/AdventureSite/issues/)

---

<p align="center">
  <a href="#setup">About</a>&nbsp;&nbsp;
  <a href="#help">Setup</a>&nbsp;&nbsp;
  <a href="#testing">Testing</a>&nbsp;&nbsp;
  <a href="#deployment">Testing</a>&nbsp;&nbsp;
  <a href="#contributing">Contributing</a>
</p>

---

<h2 id="about">About The Project</h2>

The Adventure Site is a web app that provides Terasology’s various documentation resources to new contributors in a conversational form. This “Tutorial Journey” or “Adventure Site” supports new contributors to find suitable resources based on their contribution interests. A user can navigate by conversing with the Gooey and Gooey helps the user to learn more about the projects. Gooey helps the user to access the resources in a sequential order, which helps the user to study all possible resources related to that particular path.

---

<p  align="center">
<img src="./AdventureSite.gif"></img>
</p>

---

<h2 id="project-structure">Project Structure</h2>

The Paths behind this Adventure Site are defined by a JSON schema in the [pathMap](/src/data/pathMap.jsx).

---
### What is a Path inside [AdventureSite](http://prathamesh.me/AdventureSite/) -
- A path is nothing but a set of sequential steps that a user will follow. 
- The path will be decided according to the users choice.
- Every Directory inside `/src/data` shows a group of similar paths and `pathMap.jsx` is the root file which compiles everything in one code.

---

### What is the PathMap -
- PathMap is a JSX file which compiles JSON schema of every path on a high level.
- Every component inside `/data` directory contains path information for its respective Path.
- The overall structure of the paths can be represented by a nested JSON.
- You can find the general structure of each component [here](./pathStructure.md).

---

<h2 id="editors-guide">Editor's Guide</h2>

### How to edit a path?
- Open the project inside your favorite editor.
- Go to the [pathMap](/src/data/pathMap.jsx) file.
- Navigate to the point where you wish to edit the information.
  - **How?** 
    - To navigate inside child paths, hold `ctrl` and click on the subPath.   
    - This will take you to that particular path.
- Make the required edits inside that path ( according to the [Path Structure](./pathStructure.md) ).
- Save and build the project.    

### How to Add a new Path?
- To add a new path we have to decide if it is a totally new path or a subPath?
- If it is a new path, then you can create a new directory under the `src/data/` and name it accordingly. Also, add an appropriate path by following the [Path Structure](./pathStructure.md).
- If it is a sub path then create the path file inside the appropriate directory in `src/data/` and name it accordingly.
- Make sure the path is added inside our existing flow.
- Path can be imported by using an import statement (similar to react components).

---

<h2 id="built-with">Built With</h2>

The following generator is built using the following software, you'll need them installed in your workspace to run properly.

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)

---

<h2 id="tools-used">Tools Used</h2>

- [React](https://reactjs.org/docs/getting-started.html)

- [Sass](https://sass-lang.com/)

<h2 id="setup">Setup</h2>

- Setting up workspace

  - node

    - Download and setup NodeJs from [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

  - yarn

    - Download and setup yarn package manager from [https://yarnpkg.com/en/docs/install](https://yarnpkg.com/en/docs/install)

* Fork the repository
* Clone the repository `git clone forked-repository-link`
* Navigate inside the repository `cd AdventureSite`
* Install the dependencies ( yarn is recommended ) `yarn`

---

<h2 id="testing">Testing</h2>

You can test the website locally using `yarn start`.

<h2 id="deployment">Deployment</h2>

You can the website to github pages using `npm run deploy`.

<h2 id="contributing">Contributing</h2>

To add a new feature or fix a bug follow the steps -

- Make sure your local workspace is up-to-date with the main repository.

  - Add the original repository as `upstream` in you local git remote

    `git remote add upstream https://github.com/MovingBlocks/AdventureSite.git`

  - Fetch the latest code `git fetch upstream`

  - Checkout to your local master branch `git checkout master`

  - Merge changes from `upstream/master` to sync `git merge upstream/master`

- Create a new branch to work on the new feature or bug via the updated master branch

  `git checkout -b "branch_name"`

- Work on feature/bug and stage all the files to commit it on that branch

  `git add .` > `git commit -m "Commit Message"`

- Push the branch to your fork `git push -u origin branch_name`

- Create a pull request.

---

## Contributors

A list of contributors can be found [here](https://github.com/MovingBlocks/AdventureSite/graphs/contributors).
