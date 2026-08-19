__d("WDSIconIcRedeem.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-redeem";
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
				d: "M4 17v2h16v-2H4ZM4 6h2.2a1.4 1.4 0 0 1-.16-.47A3.54 3.54 0 0 1 6 5c0-.83.3-1.54.88-2.13a2.9 2.9 0 0 1 3.5-.48c.43.26.8.58 1.12.96L12 4l.5-.65c.3-.4.67-.73 1.1-.98a2.94 2.94 0 0 1 3.53.51c.58.58.87 1.29.87 2.12 0 .18-.01.36-.04.53a1.4 1.4 0 0 1-.16.47H20c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v11c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H4c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V8c0-.55.2-1.02.59-1.41C2.98 6.19 3.45 6 4 6Zm0 8h16V8h-5.1l1.5 2.05c.17.23.23.48.2.74a.9.9 0 0 1-.4.64.97.97 0 0 1-1.38-.2L12 7.4l-2.82 3.82a.98.98 0 0 1-1.38.2.95.95 0 0 1-.22-1.37L9.04 8H4v6Zm5-8c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 9 4c-.28 0-.52.1-.71.29A.94.94 0 0 0 8 5c0 .28.1.52.29.71.19.2.43.29.71.29Zm6 0c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 15 4c-.28 0-.52.1-.71.29A.94.94 0 0 0 14 5c0 .28.1.52.29.71.19.2.43.29.71.29Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
