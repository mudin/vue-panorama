/**
 *  RotatedMarker
 *  originally cloned from @bbecquet's RotatedMarker plugin
 *  https://github.com/bbecquet/Leaflet.RotatedMarker/blob/master/leaflet.rotatedMarker.js
 *  and changed to ES6 class to import easily
 */

import L from 'leaflet';

class RotatedMarker extends L.Marker {
  constructor(latlngs, options) {
    super(latlngs, options);
    this.proto_initIcon = L.Marker.prototype._initIcon;
    this.proto_setPos = L.Marker.prototype._setPos;

    var iconOptions = this.options.icon && this.options.icon.options;
    var iconAnchor = iconOptions && this.options.icon.options.iconAnchor;
    if (iconAnchor) {
      iconAnchor = iconAnchor[0] + 'px ' + iconAnchor[1] + 'px';
    }
    this.options.rotationOrigin =
      this.options.rotationOrigin || iconAnchor || 'center bottom';
    this.options.rotationAngle = this.options.rotationAngle || 0;

    console.log(this.options.rotationAngle);

    // Ensure marker keeps rotated during dragging
    this.on('drag', function(e) {
      e.target._applyRotation();
    });
  }

  _initIcon() {
    this.proto_initIcon.call(this);
  }

  _setPos(pos) {
    this.proto_setPos.call(this, pos);
    this._applyRotation();
  }

  _applyRotation() {
    if (this.options.rotationAngle) {
      this._icon.style[
        L.DomUtil.TRANSFORM + 'Origin'
      ] = this.options.rotationOrigin;

      if (L.DomUtil.TRANSFORM === 'msTransform') {
        // for IE 9, use the 2D rotation
        this._icon.style[L.DomUtil.TRANSFORM] =
          'rotate(' + this.options.rotationAngle + 'deg)';
      } else {
        // for modern browsers, prefer the 3D accelerated version
        this._icon.style[L.DomUtil.TRANSFORM] +=
          ' rotateZ(' + this.options.rotationAngle + 'deg)';
      }
    }
  }
  setRotationAngle(angle) {
    this.options.rotationAngle = angle;
    this.update();
    return this;
  }

  setRotationOrigin(origin) {
    this.options.rotationOrigin = origin;
    this.update();
    return this;
  }
}

export { RotatedMarker };
