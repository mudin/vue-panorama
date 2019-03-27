<p align="center">
  <a href="https://github.com/mudin/vue-panorama/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mudin/vue-panorama.svg" alt="License">
  </a>
  <a href="https://badge.fury.io/js/vue-panorama">
    <img src="https://badge.fury.io/js/vue-panorama.svg" alt="npm version">
  </a>
  <a href="http://hits.dwyl.io/mudin/vue-panorama">
    <img src="http://hits.dwyl.io/mudin/vue-panorama.svg" alt="HitCount">
  </a>
  <a href="https://github.com/mudin/vue-panorama/blob/master/dist/Panorama.js">
    <img src="https://img.badgesize.io/mudin/vue-panorama/master/dist/Panorama.js" alt="size">
  </a>
  
</p>

# VueJS Panorama Viewer
Embed panorama into your website
VueJS version of [JQuery Panorama Viewer](https://github.com/peachananr/panorama_viewer)

## Demo
[Demo](https://mudin.github.io/vue-panorama/)

![Demo](https://mudin.github.io/vue-panorama/assets/vuepanorama.gif?raw=true)

## Getting started
using npm
```
npm install vuejs-panorama --save
```
Or using script tag for global use
```html
<script src="https://unpkg.com/vuejs-panorama@latest/dist/Panorama.js"></script>
```

Or Download <a href="https://unpkg.com/vuejs-panorama@latest/dist/Panorama.js">Panorama.js</a> and include it in your html

## Installing & Running Locally

Clone the repository using git:
```
git clone https://github.com/mudin/vue-panorama.git 
```
Installing all dependencies:
```
npm install 
```
Build
```
npm run build 
```
Run locally:
```
npm run example 
```
This will start development server on localhost:4000

## Usage

Panorama by equirectangular image
```vue
<template>
    <Panorama source="pano.jpg" caption="Awesome Panorama"/>
</template>
<script>
    import { Panorama } from 'vuejs-panorama'

    export default {
        components: { Panorama }
    }
</script>
```
Or
```vue
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
</head>
<body>
    <div id="app">
        <Panorama source="pano.jpg" caption="Awesome Panorama"/>
    </div>
    <script src="vue.js"></script>
    <script src="vuejs-panorama.js"></script>
    <script>
        new Vue({
            el: '#app'
        })
    </script>
</body>
```

## TODO List
* Auto Rotate

## Contributing [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/mudin/vue-panorama/issues)

If you would like to contribute code you can do so through GitHub by forking the repository and sending a pull request.

## LICENSE
MIT
