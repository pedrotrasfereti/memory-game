<div id="top"></div>
<!--
***
*** This readme template was inspired by: https://github.com/othneildrew/Best-README-Template/
***
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- ABOUT THE PROJECT -->
## Memory Game Using React.js and TypeScript

Welcome to the _GitHub repository_ of my **Memory Game**!
Here you can find information about the project's development, such as which technologies were used, how to install and run the project, usage and more.

This game was developed in the span of a week to solidify the lessons and concepts learned on React, Redux and TypeScript. It allowed me to practice my problem-solving skills, and use my creativity to create something fun.

<div align="center">

  <img
    src="public/app.gif"
    alt="Animated Game GIF"
    height="380px"
    width="380px"
  />

</div>

<br />

During the development I was able to:

* Develop a React.js app using **TypeScript**;
* Declare the Component props and state types using interfaces;
* Understand the difference between the `useRef` and `useState` React Hooks;
* Manage the application's state using **React Redux**;
* Create and manage state **slices** using **Redux Toolkit**;
* Use the `useDispatch` Hook to mutate data in the **store**;
* Use the `useSelector` Hook to extract data from the **store**;
* Use the **localStorage** Web API to persist the high score;

<br />

---

### Game Instructions

The objetive of the game is to memorize and repeat as many sequences as possible. After the count of 3 seconds, the player must watch the buttons carefully and then repeat the sequence by clicking on the correct buttons. If the player gets it right, new points will be added to the **score** and the counter will restart automatically. If not, the game score will be reset, and a "retry" button will appear.

Before playing, the player may set the `quantity` of buttons, button `shapes`, and the game `difficulty` (A.K.A. the sequence length) in the `Settings` menu. The higher the difficulty, the more points will be added to the score. The highest score will be saved to the local storage and persist on page refresh.

<br />

---

### Built With

List of major frameworks/libraries used to bootstrap this project:

* [React.js](https://reactjs.org/)
* [React Icons](https://react-icons.github.io/react-icons/)
* [Redux](https://redux.js.org)
* [Sass](https://sass-lang.com/)
* [TypeScript](https://www.typescriptlang.org/)



<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g

  npm install -g yarn
  ```


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/pedrotrasfereti/portfolio.git
   ```
2. Install NPM packages
   ```sh
   yarn install
   ```
3. Start the app with Yarn
   ```sh
   yarn dev
   ```
4. Visit `http://localhost:3000/` on your browser


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

You may use my code or design to build your own projects, just be original about it.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Pedro Trasfereti - [LinkedIn](https://www.linkedin.com/in/pedro-trasfereti/) - pedrotrasfereti@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

List of resources I find helpful and would like to give credit to:

* [Img Shields](https://shields.io) - readme
* [Vite](https://vitejs.dev/) - module bundler
* [ESLint](https://eslint.org/)
* [Prettier](https://prettier.io/)
* [SonarCloud](https://sonarcloud.io/)
* [UUID](https://www.npmjs.com/package/uuid)
* [Google Fonts](https://fonts.google.com/)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/pedrotrasfereti/portfolio/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/pedrotrasfereti/portfolio/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/pedrotrasfereti/portfolio/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/pedrotrasfereti/portfolio/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pedro-trasfereti/

