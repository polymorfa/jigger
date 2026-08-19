__d("VultureJSDeadComponent.react", [
	"ErrorBoundary.react",
	"FBLogger",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["name"], s, u = s || (s = o("react")), c = "VultureJSDeadComponent was hit. This should never happen as this component is intended to be used to replace dead components, as a stub. this being hit indicates that a component may have been cleaned up in error.";
	function d(e) {
		var t = e.name, n = t != null ? c + " Expected component " + t : c, o = r("FBLogger")("vulture_js").blameToModule("m#VultureJSDeadComponent.react");
		throw o.addToCategoryKey(t != null ? t : "VultureJSDeadComponent"), o.mustfixThrow(n);
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(t) {
		var n = t.name, o = babelHelpers.objectWithoutPropertiesLoose(t, e);
		return u.jsx(r("ErrorBoundary.react"), {
			context: {
				project: "vulture_js",
				type: "error"
			},
			fallback: function() {
				return null;
			},
			children: u.jsx(d, { name: n })
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
