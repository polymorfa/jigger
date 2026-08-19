__d("WDSIconIcPersonAddFilled.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-person-add-filled";
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
				d: "M18 11h-2a.97.97 0 0 1-.71-.29A.97.97 0 0 1 15 10c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h2V7c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v2h2c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 22 11h-2v2c0 .28-.1.52-.29.71A.94.94 0 0 1 19 14a.97.97 0 0 1-.71-.29A.97.97 0 0 1 18 13v-2Zm-9 1a3.9 3.9 0 0 1-2.83-1.18A3.85 3.85 0 0 1 5 8c0-1.1.4-2.04 1.17-2.83A3.85 3.85 0 0 1 9 4c1.1 0 2.04.4 2.82 1.17A3.85 3.85 0 0 1 13 8c0 1.1-.4 2.04-1.18 2.82A3.85 3.85 0 0 1 9 12Zm-8 6v-.8c0-.57.15-1.09.44-1.56a2.9 2.9 0 0 1 1.16-1.09 13.76 13.76 0 0 1 9.65-1.16c1.07.26 2.12.64 3.15 1.16.48.25.87.61 1.16 1.09.3.47.44 1 .44 1.56v.8c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H3c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
