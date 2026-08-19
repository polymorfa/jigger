__d("MpsPreprocessor", [
	"Promise",
	"getSafeQplErrorMessage",
	"mergeMaps"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["errors"], s;
	function u(t, a) {
		return function(r) {
			var o = r.payloadList.map(function(e) {
				return e.message.messageId;
			});
			r.ctx.messageToQpl.all(o).addPoint(a + "_start");
			var l = r.errors, u = babelHelpers.objectWithoutPropertiesLoose(r, e), c = t(u);
			return c instanceof (s || (s = n("Promise"))) ? c.then(function(e) {
				return i(e, l != null ? l : new Map());
			}) : i(c, l != null ? l : new Map());
		};
		function i(e, t) {
			var n = e.payloadList.map(function(e) {
				return e.message.messageId;
			});
			return e.ctx.messageToQpl.all(n).addPoint(a + "_end"), e.errors.entries().forEach(function(t) {
				var n = t[0], r = t[1];
				e.ctx.messageToQpl.endFail(n, a.toLowerCase() + "-error", o("getSafeQplErrorMessage").getSafeQPLErrorMessage(r));
			}), babelHelpers.extends({}, e, { errors: r("mergeMaps")(t, e.errors) });
		}
	}
	l.preprocessor = u;
}), 98);
