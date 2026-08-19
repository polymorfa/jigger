__d("WAFlowsCaretUtils", ["Promise", "getStyleValue"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = 500, u = function(r) {
		return new (e || (e = (n("Promise"))))(function(e) {
			var t = d();
			if (r != null && t) {
				var n, o = m(r);
				r.scrollBy(0, 1), (n = document.activeElement) == null || n.style.setProperty("caret-color", o), r.scrollBy(0, -1), window.setTimeout(e, s);
			} else e();
		});
	}, c = function() {
		if (d()) {
			var e;
			(e = document.activeElement) == null || e.style.setProperty("caret-color", p());
		}
	}, d = function() {
		return document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement;
	}, m = function(t) {
		var e;
		return (e = o("getStyleValue").getStyleValue("--waf-wds-accent-color", t)) != null ? e : "auto";
	}, p = function() {
		return "transparent";
	};
	l.showCaretOnActiveElement = u, l.hideCaretOnActiveElement = c;
}), 98);
