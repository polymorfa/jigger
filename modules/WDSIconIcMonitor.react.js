__d("WDSIconIcMonitor.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-monitor";
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
				d: "M4 18c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V5c0-.55.2-1.02.59-1.41C2.98 3.19 3.45 3 4 3h16c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v11c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59h-3l.7.7a1 1 0 0 1 .3.73V20c0 .28-.1.52-.29.71A.94.94 0 0 1 17 21H7a.97.97 0 0 1-.71-.29A.97.97 0 0 1 6 20v-.57a1.03 1.03 0 0 1 .3-.73L7 18H4Zm0-2h16V5H4v11Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
