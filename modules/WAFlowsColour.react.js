__d("WAFlowsColour.react", [
	"WAFlowsImagePlaceholder.react",
	"WAFlowsLocalization",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = { colorContianer: {
		flexDirection: "xdt5ytf",
		alignItems: "x6s0dn4",
		borderStartStartRadius: "xpgljz4",
		borderStartEndRadius: "x1jmugne",
		borderEndEndRadius: "x37x3mu",
		borderEndStartRadius: "x1iudza5",
		overflowX: "x6ikm8r",
		overflowY: "x10wlt62",
		display: "x78zum5",
		flexGrow: "x1iyjqo2",
		justifyContent: "xl56j7k",
		$$css: !0
	} };
	function d(t) {
		var n = t.color, a = t.colourName, i = t.enableImagesInPickers, l = i === void 0 ? !1 : i, s = t.height, d = t.width, m = t.xstyle, p = {
			backgroundColor: "" + n,
			width: d,
			height: s,
			borderWidth: n.length === 0 && 0
		};
		return u.jsx("div", {
			style: p,
			className: (e || (e = r("stylex")))([c.colorContianer, m]),
			"aria-label": o("WAFlowsLocalization").getHexColourAltTextFbt(a),
			children: n.length === 0 && u.jsx(r("WAFlowsImagePlaceholder.react"), {
				isSmallPreview: !0,
				isItemUnavailable: !0,
				enableImageImprovements: l
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
