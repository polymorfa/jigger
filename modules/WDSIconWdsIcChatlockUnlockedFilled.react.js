__d("WDSIconWdsIcChatlockUnlockedFilled.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-chatlock-unlocked-filled";
	function d(t) {
		var n = o("WDSSvgIconHelpers").resolveSvgIcon(t, 24, 24, "0 0 24 24");
		return u.jsx(r("WDSSvgComponentBase.react"), babelHelpers.extends({}, n.otherProps, { children: u.jsxs("svg", {
			viewBox: n.viewBox,
			height: n.height,
			width: n.width,
			preserveAspectRatio: "xMidYMid meet",
			className: (e || (e = r("stylex")))(n.iconXstyle),
			fill: "currentColor",
			children: [u.jsx("title", { children: c }), u.jsx("path", {
				fill: "currentColor",
				fillRule: "evenodd",
				d: "M12.95 7.15V5.52a5.52 5.52 0 0 1 11.05 0v.52a1 1 0 1 1-2 0v-.52a3.52 3.52 0 0 0-7.05 0v1.63h3.89c1.47 0 2.66 1.2 2.66 2.67v8.64c0 1.47-1.2 2.66-2.66 2.66H11.5l-3.47 2.63a1 1 0 0 1-1.53-.85v-1.78H5.16a2.67 2.67 0 0 1-2.66-2.66V9.82c0-1.48 1.2-2.67 2.66-2.67h7.8ZM7.5 13h9a1 1 0 0 0 0-2h-9a1 1 0 1 0 0 2Zm0 2a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Z",
				clipRule: "evenodd"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
