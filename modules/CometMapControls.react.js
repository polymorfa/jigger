__d("CometMapControls.react", ["react", "react-compiler-runtime"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(5), n = e.children, r = e.position, a = r === void 0 ? "top-end" : r, i;
		t[0] !== a ? (i = {
			0: { className: "x10l6tqk" },
			2: { className: "x10l6tqk x1r4y97 x13vifvy" },
			1: { className: "x10l6tqk x9q68il x13vifvy" },
			3: { className: "x10l6tqk x1r4y97 x9q68il x13vifvy" }
		}[(a === "top-start") << 1 | (a === "top-end") << 0], t[0] = a, t[1] = i) : i = t[1];
		var l;
		return t[2] !== n || t[3] !== i ? (l = s.jsx("div", babelHelpers.extends({}, i, { children: n })), t[2] = n, t[3] = i, t[4] = l) : l = t[4], l;
	}
	l.default = u;
}), 98);
