# Market Cockpit Vue Client
[![Python](https://img.shields.io/badge/Vue.js-2.6-blue.svg)]()

[Vue.js](https://vuejs.org/v2/guide/index.html) is a progressive framework for building user interfaces.The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.

# Architecture
![Architecture](https://lh4.googleusercontent.com/QxuRPXWzIXRpIVCh2TcCHdQ9rbeh6u2b--tyfiKx3gCkFWzdTiOpdTtjbPMx8oFSra-YUc9HVoRXuXryq9Pv=w1208-h856)

# Getting Started

## Installing

```
npm install
npm run serve
```

# Docker

## Dev
```
docker-compose up --build
```
## Prod
```
docker-compose -f docker-compose.prod.yml up -d --build
```

After the application goes up, open your browser on [http://localhost:8080/](http://localhost:8080/).

![](docs/screenshot.png)

# Project Structure


```
.
├── nginx
├── public
│   └── index.html
├── src
│   ├── components
│   ├── layouts
│   ├── plugins
│   ├── router
│   ├── store
│   ├── styles
│   └── views
├── docker-compose.prod.yml
├── docker-compose.yml
├── Dockerfile
├── package.json
└── README.md
```

### Folders
* `src/components` - All the UI components.
* `src/layouts` -  Layout components Header and Footer
* `src/router` - All the routes of your projects. 
* `src/store` - The Vuex constants splited in actions, mutations and getters.
* `src/styles` - All global CSS.
* `src/views` -  A template of components on a route.
* `nginx` - NGINX is open source software for web serving, reverse proxying, caching and more.

### Files
* `package.json` - The NPM package meta file that contains all the build dependencies and build commands
