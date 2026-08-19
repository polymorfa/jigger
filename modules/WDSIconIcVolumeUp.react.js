__d("WDSIconIcVolumeUp.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-volume-up";
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
				d: "M19 11.97c0-1.38-.37-2.64-1.1-3.78a6.82 6.82 0 0 0-2.95-2.56c-.25-.12-.43-.3-.55-.54a.95.95 0 0 1-.05-.74c.1-.27.28-.46.54-.57a.93.93 0 0 1 .79 0 8.8 8.8 0 0 1 3.87 3.28A8.77 8.77 0 0 1 21 11.98a8.7 8.7 0 0 1-1.45 4.9 8.8 8.8 0 0 1-3.88 3.3.93.93 0 0 1-.78 0 .99.99 0 0 1-.54-.58.95.95 0 0 1 .05-.74c.12-.24.3-.42.55-.54a6.82 6.82 0 0 0 2.95-2.56 6.86 6.86 0 0 0 1.1-3.79ZM7 15H4a.97.97 0 0 1-.71-.29A.97.97 0 0 1 3 14v-4c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h3l3.3-3.3a.91.91 0 0 1 1.09-.21c.4.17.61.48.61.93v11.15c0 .45-.2.77-.61.94-.41.18-.77.1-1.09-.21L7 15Zm9.5-3a4.46 4.46 0 0 1-1.72 3.53.5.5 0 0 1-.52 0 .46.46 0 0 1-.26-.43V8.85c0-.2.09-.35.26-.44a.5.5 0 0 1 .52.02A4.68 4.68 0 0 1 16.5 12ZM10 8.85 7.85 11H5v2h2.85L10 15.15v-6.3Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
