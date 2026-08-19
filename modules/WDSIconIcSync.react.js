__d("WDSIconIcSync.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-sync";
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
				d: "M6 12.05a5.84 5.84 0 0 0 1.75 4.15l.25.25V15c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v4c0 .28-.1.52-.29.71A.94.94 0 0 1 9 20H5a.97.97 0 0 1-.71-.29A.97.97 0 0 1 4 19c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h1.75l-.4-.35a6.32 6.32 0 0 1-1.82-2.62A8.82 8.82 0 0 1 4 12.04a8 8 0 0 1 4.43-7.2.77.77 0 0 1 .73-.02c.26.11.43.3.52.57a1.14 1.14 0 0 1-.5 1.32A6.14 6.14 0 0 0 6 12.05Zm12-.1a5.84 5.84 0 0 0-1.75-4.15L16 7.55V9c0 .28-.1.52-.29.71A.94.94 0 0 1 15 10a.97.97 0 0 1-.71-.29A.97.97 0 0 1 14 9V5c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h4c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 19 6h-1.75l.4.35a7.77 7.77 0 0 1 2.35 5.6 8 8 0 0 1-4.43 7.2.77.77 0 0 1-.73.02.9.9 0 0 1-.52-.57 1.1 1.1 0 0 1 .02-.75c.09-.25.25-.44.48-.58A6.14 6.14 0 0 0 18 11.95Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
