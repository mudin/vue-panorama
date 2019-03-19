<template>
  <div class="demo">
    <div class="header">
      <h1>VueJS Panorama Viewer</h1>
      <p>
        Embed a Panorama Pictures on Your Website
      </p>
      <a href="https://github.com/mudin/vue-panorama"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" alt="Fork me on GitHub"></a>
    </div>
    <Panorama :source="url1" :caption="caption" @viewchange="onChange"/>
    <Panorama :source="url2" :caption="caption"/>
  </div>
</template>

<script>
import Panorama from './Panorama';

export default {
  components: {
    Panorama
  },
  methods: {
    onChange(e,angle) {
      console.log(e,angle);
    }
  },
  data() {
    return {
      url1:"http://www.thepetedesign.com/demos/panorama_viewer/demo_photo4.jpg",
      url2:"http://www.thepetedesign.com/demos/panorama_viewer/demo_photo.jpg",
      caption:'Photo by DAVID ILIFF. License: CC-BY-SA 3.0'
    }
  }
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}
.demo {
  width: 100%;
  height: 600px;
}
.demo .header {
  position: relative;
  text-align: center;
  margin: 20 0px;
  color: #6f6f6f;
}

.demo .header h1 {
  padding: 20px 20px;
  float: left;
  width: 100%;
  font-size: 60px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  font-weight: 100;
  margin: 0;
  /* padding-top: 55px; */
  font-family: 'Open Sans';
  letter-spacing: -1px;
  text-transform: capitalize;
}
</style>