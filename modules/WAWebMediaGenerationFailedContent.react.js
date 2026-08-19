__d("WAWebMediaGenerationFailedContent.react", [
	"fbt",
	"WAWebEmptyState.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(2), n = e.isVideo, r;
		if (t[0] !== n) {
			var a = n ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
			r = u.jsx(o("WAWebEmptyState.react").Empty, { text: a }), t[0] = n, t[1] = r;
		} else r = t[1];
		return r;
	}
	l.default = c;
}), 226);
