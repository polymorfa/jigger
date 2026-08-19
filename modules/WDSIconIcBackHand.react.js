__d("WDSIconIcBackHand.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-back-hand";
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
				d: "M12.8 23A8.21 8.21 0 0 1 6 19.45l-4.42-6.5a.74.74 0 0 1-.14-.54c.02-.19.1-.35.24-.48.33-.36.74-.55 1.23-.6.5-.05.94.06 1.34.35L7 13.58V4c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v11.5c0 .4-.18.7-.54.89a.92.92 0 0 1-1.04-.07L5.3 14.85l2.38 3.45A6.14 6.14 0 0 0 12.8 21c1.72 0 3.18-.6 4.39-1.81A5.98 5.98 0 0 0 19 14.8V5c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v9.8c0 2.28-.8 4.22-2.39 5.81A7.91 7.91 0 0 1 12.8 23ZM12 1c.28 0 .52.1.71.29.2.19.29.43.29.71v9c0 .28-.1.52-.29.71A.94.94 0 0 1 12 12a.97.97 0 0 1-.71-.29A.97.97 0 0 1 11 11V2c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29Zm4 1c.28 0 .52.1.71.29.2.19.29.43.29.71v8c0 .28-.1.52-.29.71A.94.94 0 0 1 16 12a.97.97 0 0 1-.71-.29A.97.97 0 0 1 15 11V3c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
