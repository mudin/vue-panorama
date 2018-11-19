
<template>
  <div style="display: none;">
    <slot v-if="ready"></slot>
  </div>
</template>

<script>
import L from 'leaflet';
import { findRealParent, propsBinder } from 'vue2-leaflet';
import 'leaflet-path-transform';

L.Util.merge = L.Util.extend;

const props = {
  latLngs: {
    type: Array,
    default: () => []
  },
  lStyle: {
    type: Object,
    custom: true
  },
  visible: {
    type: Boolean,
    custom: true,
    default: true
  },
  smoothFactor: {
    type: Number,
    custom: true,
    default: 1.0
  },
  noClip: {
    type: Boolean,
    custom: true,
    default: false
  },
  stroke: {
    type: Boolean,
    custom: true,
    default: true
  },
  color: {
    type: String,
    custom: true,
    default: '#3388ff'
  },
  weight: {
    type: Number,
    custom: true,
    default: 3
  },
  opacity: {
    type: Number,
    custom: true,
    default: 1.0
  },
  lineCap: {
    type: String,
    custom: true,
    default: 'round'
  },
  lineJoin: {
    type: String,
    custom: true,
    default: 'round'
  },
  dashArray: {
    type: String,
    custom: true,
    default: null
  },
  dashOffset: {
    type: String,
    custom: true,
    default: null
  },
  fill: {
    type: Boolean,
    custom: true,
    default: true
  },
  fillColor: {
    type: String,
    custom: true,
    default: '#3388ff'
  },
  fillOpacity: {
    type: Number,
    custom: true,
    default: 0.2
  },
  fillRule: {
    type: String,
    custom: true,
    default: 'evenodd'
  },
  className: {
    type: String,
    custom: true,
    default: null
  },
  draggable: {
    type: Boolean,
    custom: true,
    default: true
  },
  rotation: {
    type: Boolean,
    custom: true,
    default: true
  },
  scaling: {
    type: Boolean,
    custom: true,
    default: true
  },
  options: {
    type: Object,
    default: () => ({
      transform: true
    })
  },
  handlerOptions: {
    type: Object,
    default: () => ({})
  }
};
export default {
  name: 'LPathTransform',
  props,
  data() {
    return {
      ready: false
    };
  },
  mounted() {
    if (this.color) {
      this.options.color = this.color;
    }
    if (this.lStyle) {
      // eslint-disable-next-line
      for (const style in this.lStyle) {
        this.options[style] = this.lStyle[style];
      }
    }
    const otherPropertytoInitialize = ['smoothFactor', 'noClip', 'stroke', 'color',
      'weight', 'opacity', 'lineCap', 'lineJoin', 'dashArray', 'dashOffset', 'fill',
      'fillColor', 'fillOpacity', 'fillRule', 'className'
    ];
    for (let i = 0; i < otherPropertytoInitialize.length; i += 1) {
      const propName = otherPropertytoInitialize[i];
      if (this[propName] !== undefined) {
        this.options[propName] = this[propName];
      }
    }

    this.options.draggable = this.draggable;

    this.mapObject = L.polygon(this.latLngs, this.options);
    L.DomEvent.on(this.mapObject, this.$listeners);
    propsBinder(this, this.mapObject, props);
    this.ready = true;
    this.parentContainer = findRealParent(this.$parent);
    this.parentContainer.addLayer(this, !this.visible);

    this.mapObject.transform.setOptions({
      rotation: this.rotation,
      scaling: this.scaling,
      handlerOptions: this.handlerOptions
    }).enable();

    this.$emit('ready', this.mapObject);
  },
  beforeDestroy() {
    if (this.mapObject) {
      this.mapObject.transform.disable();
      this.mapObject.dragging.disable();
    }

    this.parentContainer.removeLayer(this);
  },
  methods: {
    setDraggable(newVal) {
      if (this.mapObject.dragging) {
        if (newVal) {
          this.mapObject.dragging.enable();
        } else {
          this.mapObject.dragging.disable();
        }
      }
    },
    setVisible(newVal, oldVal) {
      if (newVal === oldVal) return;
      if (this.mapObject) {
        if (newVal) {
          this.parentContainer.addLayer(this);
        } else {
          this.parentContainer.removeLayer(this);
        }
      }
    },
    setLatLngs(newLatLngs) {
      if (newLatLngs === null) {
        return;
      }
      if (this.mapObject) {
        const oldLatLngs = this.mapObject.getLatLngs();

        if (newLatLngs === oldLatLngs) {
          this.mapObject.setLatLngs(newLatLngs);
        }
      }
    },
    setLStyle(newVal, oldVal) {
      if (newVal === oldVal) return;
      this.mapObject.setStyle(newVal);
    },
    setSmoothFactor(newVal, oldVal) {
      if (newVal === oldVal) return;
      if (newVal) {
        this.mapObject.setStyle({ smoothFactor: newVal });
      }
    },
    setNoClip(newVal, oldVal) {
      if (newVal === oldVal) return;
      if (newVal) {
        this.mapObject.setStyle({ noClip: newVal });
      }
    },
    setStroke(newVal, oldVal) {
      if (newVal === oldVal) return;
      this.mapObject.setStyle({ stroke: newVal });
    },
    setColor(newVal, oldVal) {
      if (newVal === oldVal) return;
      if (newVal) {
        this.mapObject.setStyle({ color: newVal });
      }
    },
    setWeight(newVal, oldVal) {
      if (newVal === oldVal) return;
      if (newVal) {
        this.mapObject.setStyle({ weight: newVal });
      }
    },
    setOpacity(newVal, oldVal) {
      if (newVal === oldVal) return;
      if (newVal) {
        this.mapObject.setStyle({ opacity: newVal });
      }
    },
    setLineCap(newVal, oldVal) {
      if (newVal === oldVal) return;
      if (newVal) {
        this.mapObject.setStyle({ lineCap: newVal });
      }
    },
    setLineJoin(newVal, oldVal) {
      if (newVal === oldVal) return;
      if (newVal) {
        this.mapObject.setStyle({ lineJoin: newVal });
      }
    },
    setDashArray(newVal, oldVal) {
      if (newVal === oldVal) return;
      if (newVal) {
        this.mapObject.setStyle({ dashArray: newVal });
      }
    },
    setDashOffset(newVal, oldVal) {
      if (newVal === oldVal) return;
      if (newVal) {
        this.mapObject.setStyle({ dashOffset: newVal });
      }
    },
    setFill(newVal, oldVal) {
      if (newVal === oldVal) return;
      this.mapObject.setStyle({ fill: newVal });
    },
    setFillColor(newVal, oldVal) {
      if (newVal === oldVal) return;
      if (newVal) {
        this.mapObject.setStyle({ fillColor: newVal });
      }
    },
    setFillOpacity(newVal, oldVal) {
      if (newVal === oldVal) return;
      if (newVal) {
        this.mapObject.setStyle({ fillOpacity: newVal });
      }
    },
    setFillRule(newVal, oldVal) {
      if (newVal === oldVal) return;
      if (newVal) {
        this.mapObject.setStyle({ fillRule: newVal });
      }
    },
    setClassName(newVal, oldVal) {
      if (newVal === oldVal) return;
      if (newVal) {
        this.mapObject.setStyle({ className: newVal });
      }
    },
    addLatLng(value) {
      this.mapObject.addLatLng(value);
    },
    getGeoJSONData() {
      return this.mapObject.toGeoJSON();
    }
  }
};
</script>
