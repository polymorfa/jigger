__d("WAWebMultiSelectCount.react", ["fbt", "react"], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.selectedMsgsCount, n = e.theme;
		return u.jsx("span", babelHelpers.extends({ "aria-live": "polite" }, {
			0: { className: "x98rzlu x7yx35o xlyipyv xuxw1ft x1sa5p1d" },
			1: { className: "x98rzlu x7yx35o xlyipyv xuxw1ft x1sa5p1d x1wmqtwo" }
		}[(n === "mediaGallery") << 0], { children: s._(
			/*BTDS*/
			"",
			[s._plural(t, "count")]
		) }));
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
