__d("WDSIconIcRefresh.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-refresh";
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
				d: "M12 20a7.72 7.72 0 0 1-5.67-2.32A7.72 7.72 0 0 1 4 12a7.7 7.7 0 0 1 2.33-5.67A7.72 7.72 0 0 1 12 4a7.92 7.92 0 0 1 6 2.75V5c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v5c0 .28-.1.52-.29.71A.94.94 0 0 1 19 11h-5a.97.97 0 0 1-.71-.29A.97.97 0 0 1 13 10c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h3.2A5.93 5.93 0 0 0 12 6c-1.67 0-3.08.58-4.25 1.75A5.79 5.79 0 0 0 6 12c0 1.67.58 3.08 1.75 4.25A5.79 5.79 0 0 0 12 18a5.95 5.95 0 0 0 5.3-3.18c.13-.23.32-.4.56-.48.24-.1.49-.1.74-.02a.9.9 0 0 1 .57.53.8.8 0 0 1-.02.75 8.07 8.07 0 0 1-2.92 3.2A7.75 7.75 0 0 1 12 20Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
