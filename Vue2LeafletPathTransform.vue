<template>
  <div style="display: none;">
    <slot v-if="ready"></slot>
  </div>
</template>

<script>

import L from 'leaflet'
import { propsBinder,findRealParent, LPolygon } from 'vue2-leaflet'
import './L.Path.Transform-src.js'

const props = {
  latLngs: {
    type: Array,
    default: () => []
  },
  draggable: {
    type: Boolean,
    custom: true,
    default: true,
  },
  rotation: {
    type: Boolean,
    custom: true,
    default: true,
  },
  scaling: {
    type: Boolean,
    custom: true,
    default: true,
  },
  options: {
    type: Object,
    default: () => ({
      transform:true
    }),
  },
  handlerOptions: {
    type: Object,
    default: () => ({}),
  },
};


export default {
  name: 'LPathTransform',
  props: props,
  mixins: [LPolygon],
  data() {
    return {
      ready: false,
    }
  },
  beforeMount() {
    this.options.draggable = this.draggable;
  },
  mounted() {
    this.mapObject.transform.setOptions({
      rotation:this.rotation,
      scaling:this.scaling,
      handlerOptions: this.handlerOptions
    }).enable();

  },
  methods: {
    setDraggable(newVal, oldVal) {
      if (this.mapObject.dragging) {
        newVal ? this.mapObject.dragging.enable() : this.mapObject.dragging.disable();
      }
    },
    setVisible(newVal, oldVal) {
      if (newVal == oldVal) return;
      if (this.mapObject) {
        if (newVal) {
          this.parentContainer.addLayer(this);
        } else {
          this.parentContainer.removeLayer(this);
        }
      }
    },
    setLatLngs(newLatLngs) {
      if (newLatLngs == null) {
        return;
      }
      if (this.mapObject) {
        let oldLatLngs = this.mapObject.getLatLngs();

        if (newLatLngs === oldLatLngs) {
          this.mapObject.setLatLngs(newLatLngs);
        }
      }
    }
  }
};

</script>
