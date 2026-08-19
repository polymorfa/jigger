__d("WDSIconIcEditFilled.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-edit-filled";
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
				d: "m19.3 8.93-4.25-4.2 1.4-1.4c.38-.39.85-.58 1.41-.58.56 0 1.03.2 1.41.58l1.4 1.4c.39.38.59.84.6 1.38.02.54-.16 1-.54 1.39L19.3 8.93ZM4 21a.97.97 0 0 1-.71-.29A.97.97 0 0 1 3 20v-2.82a1.03 1.03 0 0 1 .3-.73l10.3-10.3 4.25 4.25-10.3 10.3a1 1 0 0 1-.72.3H4Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
