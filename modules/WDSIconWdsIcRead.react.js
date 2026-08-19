__d("WDSIconWdsIcRead.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-read";
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
				d: "M14.73 6.01a1 1 0 0 1 1.41-.15l.01.01a1 1 0 0 1 .15 1.41L7.6 18.01a1 1 0 0 1-.73.37h-.05c-.26 0-.52-.11-.71-.3l-4.03-4.09a.99.99 0 0 1 0-1.41.99.99 0 0 1 1.41 0l3.25 3.29 7.99-9.86Zm5.71.12a1 1 0 0 1 1.41-.15h-.01a1 1 0 0 1 .15 1.41l-8.41 10.45a1 1 0 0 1-.73.37h-.05a1 1 0 0 1-.71-.3l-1.36-1.26a.55.55 0 0 1-.02-.81l.56-.68c.21-.2.53-.21.75-.03l.71.58 7.71-9.58Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
