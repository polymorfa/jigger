__d("WDSIconWdsIcGradeSlash.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-grade-slash";
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
				u.jsx("path", {
					fill: "currentColor",
					fillRule: "evenodd",
					d: "M4.7 3.3a1 1 0 0 0-1.4 1.4l4.53 4.55-3.48.3a.93.93 0 0 0-.55.23 1.07 1.07 0 0 0-.34 1c.04.2.15.37.31.52l3.68 3.18-1.1 4.72a.87.87 0 0 0 .05.59c.08.17.2.32.35.44.15.11.32.18.52.2.2.01.4-.04.58-.15l4.15-2.5 4.15 2.5a.9.9 0 0 0 .58.15c.2-.02.37-.09.52-.2.15-.12.27-.27.35-.44a.9.9 0 0 0 .05-.59l-.04-.18 1.68 1.69a1 1 0 0 0 1.42-1.42l-16-16Zm10.22 13.03-5.25-5.25-2.77.25 2.77 2.42-.82 3.58 3.15-1.9 3.15 1.92-.23-1.02Z",
					clipRule: "evenodd"
				}),
				u.jsx("path", {
					fill: "currentColor",
					d: "m12 7.63.71 1.67 1.83 1.82 2.56.23-1.25 1.08 1.42 1.42 2.96-2.55a.96.96 0 0 0 .27-1.07 1.07 1.07 0 0 0-.3-.45 1 1 0 0 0-.55-.23l-4.85-.42-1.88-4.45a.9.9 0 0 0-.38-.45 1.1 1.1 0 0 0-.54-.15c-.18 0-.36.05-.54.15a.9.9 0 0 0-.39.45l-.88 2.1 1.52 1.52.29-.67Z"
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
