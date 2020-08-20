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

Contributing to an open source project is very rewarding, but in the beginning it is also hard and confusing. The more complex a project and its codebase and the more numerous the contribution possibilities, the more difficult it is to find a good starting point or resources for an easy immersion into the project.

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
