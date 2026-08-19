__d("WDSIconIcChecklist.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-checklist";
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
				d: "m5.52 16.18 3.55-3.55c.2-.2.44-.3.7-.3a1 1 0 0 1 .98 1.02 1 1 0 0 1-.28.7L6.25 18.3a.96.96 0 0 1-1.4 0L2.7 16.15a.95.95 0 0 1-.28-.7.95.95 0 0 1 .97-.97c.3 0 .53.09.71.27l1.42 1.43Zm0-8 3.55-3.55c.2-.2.44-.3.7-.3a1 1 0 0 1 .98 1.02 1 1 0 0 1-.28.7L6.25 10.3a.96.96 0 0 1-1.4 0L2.7 8.15a.95.95 0 0 1-.28-.7.95.95 0 0 1 .97-.98c.3 0 .53.1.71.28l1.42 1.43ZM14 17a.97.97 0 0 1-.71-.29A.97.97 0 0 1 13 16c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h7c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 21 17h-7Zm0-8a.97.97 0 0 1-.71-.29A.97.97 0 0 1 13 8c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h7c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 21 9h-7Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
