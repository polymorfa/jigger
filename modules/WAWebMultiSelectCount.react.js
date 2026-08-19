__d("WAWebMultiSelectCount.react", [
	"fbt",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(7), n = e.selectedMsgsCount, r = e.theme, a;
		t[0] !== r ? (a = {
			0: { className: "x98rzlu x7yx35o xlyipyv xuxw1ft x1sa5p1d" },
			1: { className: "x98rzlu x7yx35o xlyipyv xuxw1ft x1sa5p1d x1wmqtwo" }
		}[(r === "mediaGallery") << 0], t[0] = r, t[1] = a) : a = t[1];
		var i;
		t[2] !== n ? (i = s._(
			/*BTDS*/
			"",
			[s._plural(n, "count")]
		), t[2] = n, t[3] = i) : i = t[3];
		var l;
		return t[4] !== a || t[5] !== i ? (l = u.jsx("span", babelHelpers.extends({ "aria-live": "polite" }, a, { children: i })), t[4] = a, t[5] = i, t[6] = l) : l = t[6], l;
	}
	l.default = c;
}), 226);
