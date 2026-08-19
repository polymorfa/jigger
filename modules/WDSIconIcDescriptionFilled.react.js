__d("WDSIconIcDescriptionFilled.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-description-filled";
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
				d: "M9 18h6c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 15 16H9c-.28 0-.52.1-.71.29A.94.94 0 0 0 8 17c0 .28.1.52.29.71.19.2.43.29.71.29Zm0-4h6c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 15 12H9c-.28 0-.52.1-.71.29A.94.94 0 0 0 8 13c0 .28.1.52.29.71.19.2.43.29.71.29Zm-3 8c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V4c0-.55.2-1.02.59-1.41C4.98 2.19 5.45 2 6 2h7.18a1.97 1.97 0 0 1 1.4.58l4.85 4.84a1.94 1.94 0 0 1 .57 1.4V20c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H6Zm7-14c0 .28.1.52.29.71.19.2.43.29.71.29h4l-5-5v4Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
