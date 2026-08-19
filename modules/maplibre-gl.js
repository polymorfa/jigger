__d("maplibre-gl", ["maplibre-gl-5.18.0"], (function(t, n, r, o, a, i) {
	var e = n("maplibre-gl-5.18.0")();
	e.supported || (e.supported = function() {
		return !0;
	}), e.Map && [
		"on",
		"off",
		"once"
	].forEach(function(t) {
		var n = e.Map.prototype[t];
		e.Map.prototype[t] = function() {
			return n.apply(this, arguments), this;
		};
	}), a.exports = e;
}), null);
