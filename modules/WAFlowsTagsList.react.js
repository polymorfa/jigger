__d("WAFlowsTagsList.react", ["WAFlowsBadge.react", "react"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useMemo;
	function c(e) {
		var t = e.tags, n = u(function() {
			return t.map(function(e, t) {
				return s.jsx("li", {
					className: "xhbfen4",
					children: s.jsx(r("WAFlowsBadge.react"), {
						badgeType: "tag",
						text: e
					})
				}, t);
			});
		}, [t]);
		return s.jsx("ul", {
			className: "x78zum5 x1q0g3np x4prdry x1a02dak",
			children: n
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
