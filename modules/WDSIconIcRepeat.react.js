__d("WDSIconIcRepeat.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-repeat";
	function d(t) {
		var n = o("WDSSvgIconHelpers").resolveSvgIcon(t, 24, 24, "0 0 24 24");
		return u.jsx(r("WDSSvgComponentBase.react"), babelHelpers.extends({}, n.otherProps, { children: u.jsxs("svg", {
			viewBox: n.viewBox,
			height: n.height,
			width: n.width,
			preserveAspectRatio: "xMidYMid meet",
			className: (e || (e = r("stylex")))(n.iconXstyle),
			fill: "currentColor",
			children: [
				u.jsx("title", { children: c }),
				u.jsx("mask", {
					id: "WDSIconIcRepeat__a",
					width: 24,
					height: 24,
					x: 0,
					y: 0,
					maskUnits: "userSpaceOnUse",
					style: { maskType: "alpha" },
					children: u.jsx("path", {
						fill: "#D9D9D9",
						d: "M0 0h24v24H0z"
					})
				}),
				u.jsx("g", {
					mask: "url(#WDSIconIcRepeat__a)",
					children: u.jsx("path", {
						fill: "currentColor",
						d: "m6.85 19 .85.85c.2.2.3.43.29.7a1.03 1.03 0 0 1-1 1.01.93.93 0 0 1-.72-.29L3.7 18.7a.88.88 0 0 1-.21-.32 1.1 1.1 0 0 1-.07-.38c0-.13.03-.26.07-.38a.88.88 0 0 1 .21-.32l2.57-2.58c.2-.2.44-.3.72-.28a1.02 1.02 0 0 1 1 1.01c0 .27-.09.5-.29.7l-.85.85H17v-3c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v3c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H6.85Zm10.3-12H7v3c0 .28-.1.52-.29.71A.94.94 0 0 1 6 11a.97.97 0 0 1-.71-.29A.97.97 0 0 1 5 10V7c0-.55.2-1.02.59-1.41C5.98 5.19 6.45 5 7 5h10.15l-.85-.85a.92.92 0 0 1-.29-.7 1.03 1.03 0 0 1 1-1.01c.28-.01.51.09.71.29L20.3 5.3c.1.1.17.2.21.33a1.2 1.2 0 0 1 0 .75.88.88 0 0 1-.21.32l-2.57 2.58a.9.9 0 0 1-.72.28 1.02 1.02 0 0 1-1-1.01c0-.27.09-.5.29-.7l.85-.85Z"
					})
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
