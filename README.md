<p align="left">
   <img src=".github/logo.png" width="200"/>
</p>

# Pokedex

> Explore pokemons with different renders options that a NextJS application provides

[![Author](https://img.shields.io/badge/author-paulinavita-F65555?style=flat-square)](https://github.com/paulinavita)
[![Languages](https://img.shields.io/github/languages/count/paulinavita/cautious-fiesta?color=%23F65555&style=flat-square)](#)

<p align="center">
   <img src="https://media.giphy.com/media/AshvQPgMXCf2piHrZI/giphy.gif" width="500"/>
</p>

<p align="center">
   <a href="https://reymon.vercel.app/">Live version on vercel</a>
</p>
<hr />
<p align="center">
   <a href="https://reymon.paulndavita.site/">Live version on docker container (GCP)</a><br/>
   <span>Temporarily; path to be shut on 10th July 2022</span><br>
    <i>Knows issues listed on respective section</i>
</p>

# :pushpin: Table of Contents

* [Features](#rocket-features)
* [Goals](#dart-goals)
* [Installation](#construction_worker-installation)
* [Getting Started](#runner-getting-started)
* [Stack](#stack)
* [Issues and Improvements](#bug-issues)


# :rocket: Features

* Explore pokemons
* See the abilities, state and evolution of pokemons in the details page

# :dart: Goals

As a web dev assignment 

# :construction_worker: Installation

**You need to install [Node.js](https://pt-br.reactjs.org/) and [Yarn](https://yarnpkg.com/), then in order to clone the project via HTTPS, run this command:**

```
  git clone https://github.com/paulinavita/cautious-fiesta.git
```

SSH URLs provide access to a Git repository via SSH, a secure protocol. If you have a SSH key registered in your Github account, clone the project using this command:

```
  git clone https://github.com/paulinavita/cautious-fiesta.git
```

**Install dependencies**

```
  yarn install
```

# :runner: Getting Started

Run the following command in order to start the application in a development environment:

```
  yarn dev
```

# :postbox: Stack

The tecnologies used in this project are [NextJS](https://nextjs.org/) + [MUI v5](https://mui.com/material-ui/getting-started/overview/)
# :bug: Issues and Improvements

Below listed issued that are found 
  - Localization still not working properly
  - Next.js generated images path on docker still has issue with static path
  - UT with jest is not fully implemented

Improvements
  - Using context to save all pokemon data
  - Use fully SSG
  - Make code more DRY; Extract reusable styled component such as modal + detail card or pagination, fetch fn

# :closed_book: License, etc

Released in 2022.
Made with love, (plus hunch of bugs) by [Paulina](https://github.com/paulinavita) 💜🚀

Learn something new everyday, happy coding