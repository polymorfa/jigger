__d("WDSIconIcUpload.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-upload";
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
				d: "M6 20c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41v-2c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v2h12v-2c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v2c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H6Zm5-12.15L9.12 9.72c-.2.2-.43.3-.7.3a1.02 1.02 0 0 1-1-1.02.87.87 0 0 1 .28-.7l3.6-3.6c.1-.1.2-.17.32-.21a1.1 1.1 0 0 1 .75 0c.12.04.23.11.33.21l3.6 3.6c.2.2.3.43.29.7a1.03 1.03 0 0 1-1 1.01.93.93 0 0 1-.71-.29L13 7.85V15c0 .28-.1.52-.29.71A.94.94 0 0 1 12 16a.97.97 0 0 1-.71-.29A.97.97 0 0 1 11 15V7.85Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
