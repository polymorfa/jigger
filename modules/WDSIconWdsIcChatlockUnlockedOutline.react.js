__d("WDSIconWdsIcChatlockUnlockedOutline.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-chatlock-unlocked-outline";
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
				u.jsxs("g", {
					fill: "currentColor",
					clipPath: "url(#WDSIconWdsIcChatlockUnlockedOutline__a)",
					children: [u.jsx("path", {
						fillRule: "evenodd",
						d: "M5.16 7.15A2.67 2.67 0 0 0 2.5 9.8v8.65c0 1.47 1.2 2.66 2.66 2.66h1.35v1.78a1 1 0 0 0 1.53.85l3.47-2.62h7.33c1.47 0 2.66-1.2 2.66-2.67V9.8c0-1.47-1.2-2.66-2.66-2.66H5.16Zm13.68 2H5.16c-.36 0-.66.3-.66.66v8.65c0 .37.3.66.66.66h3.35v1.76l2.33-1.75h8c.36 0 .66-.3.66-.67V9.8c0-.36-.3-.66-.66-.66Z",
						clipRule: "evenodd"
					}), u.jsx("path", { d: "M7.5 13h9a1 1 0 0 0 0-2h-9a1 1 0 1 0 0 2Zm0 2a1 1 0 1 0 0 2h6a1 1 0 0 0 0-2h-6Zm5.45-9.48v1.73h2V5.52a3.52 3.52 0 0 1 7.05 0v.52a1 1 0 0 0 2 0v-.52a5.52 5.52 0 1 0-11.05 0Z" })]
				}),
				u.jsx("defs", { children: u.jsx("clipPath", {
					id: "WDSIconWdsIcChatlockUnlockedOutline__a",
					children: u.jsx("path", {
						fill: "white",
						d: "M0 0h24v24H0z"
					})
				}) })
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
