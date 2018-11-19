<template>
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
</template>

<script>
import L from 'leaflet';
import * as Vue2Leaflet from 'vue2-leaflet';
import Vue2LeafletPathTransform from './Vue2LeafletPathTransform';

export default {
  components: {
    'v-map': Vue2Leaflet.LMap,
    'v-tilelayer': Vue2Leaflet.LTileLayer,
    'v-icondefault': Vue2Leaflet.LIconDefault,
    'v-marker': Vue2Leaflet.LMarker,
    'v-path-transform': Vue2LeafletPathTransform
  },
  methods: {
    handlePathTransformed(path) {
      console.log(path);
    }
  },
  data() {
    var latLngs = [
      [
        [37.66020218426407, 127.2302615142084],
        [37.65576917043108, 127.22937755415857],
        [37.63206106721546, 127.2284935941088],
        [37.617889867705316, 127.22558915394521],
        [37.62218583654154, 127.22260052711019],
        [37.61623784297743, 127.21687583345434],
        [37.60454963021472, 127.21679164678295],
        [37.60866851293536, 127.21380301994793],
        [37.600702722176166, 127.21254021987681],
        [37.598994950890834, 127.20795204628502],
        [37.575703041360754, 127.20487923277864],
        [37.571855815650565, 127.19915453912282],
        [37.5426439582954, 127.19730243235183],
        [37.531314936, 127.19919663245852],
        [37.5381404141856, 127.2040794594002],
        [37.53110931307865, 127.20609993951403],
        [37.52933525874199, 127.21270859321962],
        [37.53179547300276, 127.2146027933263],
        [37.52886006193146, 127.21721258013999],
        [37.5341446094036, 127.22340030048858],
        [37.54438453922385, 127.22188494040324],
        [37.54731709240894, 127.22445263388117],
        [37.557753911625674, 127.22622055398075],
        [37.56009205173456, 127.22975639417993],
        [37.57418916050178, 127.23080872757257],
        [37.58484856242981, 127.23005104752984],
        [37.59890049114319, 127.22975639417993],
        [37.61510984454882, 127.23543899450006],
        [37.62155142253397, 127.23303967436487],
        [37.62250379297307, 127.22790428740896],
        [37.640581698084965, 127.23118756759386]
      ],
      [
        // second polygon
        [
          [37.448932610641115, 126.96618615865709],
          [37.488932610641115, 127.08618615865709],
          [37.56893261064111, 127.09618615865709],
          [37.58893261064111, 126.98618615865709]
        ]
      ]
    ];
    return {
      latLngs,
      colors:['#ff0000','#0000ff'],
      handlerOptions: {
        radius: 5,
        weight: 1.5
      },
      initialLocation: L.latLng(37.54893261064111, 127.03618615865709)
    };
  }
};
</script>

<style>
@import '~leaflet/dist/leaflet.css';
html,
body {
  height: 100%;
  margin: 0;
}
</style>