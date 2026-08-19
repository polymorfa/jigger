__d("WDSIconWdsIcAiContent.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-ai-content";
	function d(t) {
		var n = o("WDSSvgIconHelpers").resolveSvgIcon(t, 24, 24, "0 0 72 72");
		return u.jsx(r("WDSSvgComponentBase.react"), babelHelpers.extends({}, n.otherProps, { children: u.jsxs("svg", {
			viewBox: n.viewBox,
			height: n.height,
			width: n.width,
			preserveAspectRatio: "xMidYMid meet",
			className: (e || (e = r("stylex")))(n.iconXstyle),
			fill: "currentColor",
			children: [u.jsx("title", { children: c }), u.jsx("path", {
				fill: "currentColor",
				d: "M44.36 12a3 3 0 0 0-3-3H15a5.8 5.8 0 0 0-4.24 1.76A5.78 5.78 0 0 0 9 15v42a5.8 5.8 0 0 0 1.76 4.24A5.78 5.78 0 0 0 15 63h42a5.8 5.8 0 0 0 4.24-1.76A5.78 5.78 0 0 0 63 57V32.04a3 3 0 1 0-6 0V57H15V15h26.36a3 3 0 0 0 3-3zM58.4 1.91c.6-1.4 2.59-1.4 3.2 0l2.29 5.35c.18.4.5.73.91.91l5.37 2.3c1.4.6 1.4 2.58 0 3.18l-5.37 2.3c-.4.17-.73.5-.91.9l-2.35 5.46a1.74 1.74 0 0 1-3.17.04l-2.52-5.53c-.18-.4-.5-.7-.89-.87l-5.2-2.29a1.73 1.73 0 0 1 .01-3.18l5.42-2.31c.4-.17.73-.5.9-.91l2.3-5.35z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
