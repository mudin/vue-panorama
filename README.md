# vue-panorama

This is a [path-transform plugin](https://www.npmjs.com/package/leaflet-path-transform) extension for [vue2-leaflet package](https://github.com/KoRiGaN/Vue2Leaflet)

## Install

    npm install --save vue-panorama

## Demo

    git clone https://github.com/mudin/vue-panorama
    cd vue-panorama
    yarn
    yarn example

    # or alternatively using npm
    npm install
    npm run example

Then you should be able to navigate with your browser and see the demo in http://localhost:4000/

You can see the demo code in the file [example.vue](example.vue)

## Usage

### on &lt;template&gt; add

something like this

    <v-map :zoom=11 :center="initialLocation">
        <v-icondefault></v-icondefault>
        <v-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></v-tilelayer>
        <v-path-transform 
            v-for="(latLng, index) in latLngs"
            :key="index"
            :latLngs="latLng"
            :draggable='true'
            :rotation='true'
            :scaling='true'
            :color='colors[index]'
            :handlerOptions="handlerOptions"
            @transformed='handlePathTransformed'>
        </v-path-transform>
    </v-map>

### on &lt;script&gt; add

#### option 1

In the same template file, at `<script>` part, this will make the component available only to the template in this file

    import Vue2LeafletPathTransform from 'vue-panorama'
    ...
    export default {
      ...
      components: {
        'v-path-transform': Vue2LeafletPathTransform
        ...
      },
      ...
    }

#### option 2

At main Vue configuration, this will make the component available to all templates in your app

    import Vue from 'vue'
    import Vue2LeafletPathTransform from 'vue-panorama'
    ...
    Vue.component('v-path-transform', Vue2LeafletPathTransform)

## Develop and build

    npm install
    npm run build

## Author

[mudin](https://github.com/mudin/)


## License

MIT
path transform plugin extension for vue2-leaflet package
