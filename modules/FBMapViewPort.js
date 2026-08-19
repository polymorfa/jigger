__d("FBMapViewPort", ["FBMapView", "maplibre-gl"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = 14, s = 1.5, u = .1;
	function c(e) {
		var t = [];
		return e && t.push(e), d(t);
	}
	function d(t, n) {
		t === void 0 && (t = []), n === void 0 && (n = e);
		function o() {
			var e = new (r("maplibre-gl")).LngLatBounds();
			return t.forEach(function(t) {
				return e.extend(r("maplibre-gl").LngLat.convert(t));
			}), e;
		}
		function a(e, t) {
			return new (r("FBMapView"))({
				bounds: m(e, t),
				width: 100,
				height: 100
			});
		}
		if (t.length === 0) return new (r("FBMapView"))();
		if (t.length === 1) return new (r("FBMapView"))({
			center: t[0],
			zoom: n
		});
		for (var i = o(), l = s, c = a(i, l); c.getZoom() > n;) {
			l += u;
			var d = c.getZoom();
			if (c = a(i, l), c.getZoom() === d) return new (r("FBMapView"))({
				center: c.getCenter(),
				zoom: n
			});
		}
		return c;
	}
	function m(e, t) {
		if (t === void 0 && (t = s), t <= 1) return [
			e.getWest(),
			e.getSouth(),
			e.getEast(),
			e.getNorth()
		];
		function n(e, n) {
			var r = Math.abs(e - n), o = r * t;
			return Math.abs(o - r) / 2;
		}
		var r = n(e.getWest(), e.getEast()), o = n(e.getNorth(), e.getSouth());
		return [
			Math.max(e.getWest() - r, -180),
			Math.max(e.getSouth() - o, -90),
			Math.min(e.getEast() + r, 180),
			Math.min(e.getNorth() + o, 90)
		];
	}
	l.DEFAULT_NEIGHBORHOOD_ZOOM_LEVEL = e, l.createViewPortForLocation = c, l.createViewPort = d, l.scaleLngLatBoundsForClusterLinear = m;
}), 98);
