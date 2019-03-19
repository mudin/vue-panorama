# VueJS Panorama Viewer
Embed panorama into your website
(lightweight~4.56 kB)
VueJS version of [JQuery Panorama Viewer](https://github.com/peachananr/panorama_viewer)

## Demo
[Demo](https://mudin.github.io/vue-panorama/)

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

## Contributing
If you would like to contribute code you can do so through GitHub by forking the repository and sending a pull request.

## LICENSE
MIT
