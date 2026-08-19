__d("WDSIconWdsIcPoll.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-poll";
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
				d: "M4 18c0-.55.2-1.02.59-1.41.39-.4.86-.59 1.41-.59h3c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41 0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H6c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41Zm0-6c0-.55.2-1.02.59-1.41.39-.4.86-.59 1.41-.59h12c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41 0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H6c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41Zm0-6c0-.55.2-1.02.59-1.41C4.98 4.19 5.45 4 6 4h7c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41 0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H6c-.55 0-1.02-.2-1.41-.59C4.19 7.02 4 6.55 4 6Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
