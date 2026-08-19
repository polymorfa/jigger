__d("WDSIconIcDelete.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-delete";
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
				d: "M7 21c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V6a.97.97 0 0 1-.71-.29A.97.97 0 0 1 4 5c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h4c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h4c.28 0 .52.1.71.29.2.19.29.43.29.71h4c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 19 6v13c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H7ZM17 6H7v13h10V6Zm-7 11c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71V9c0-.28-.1-.52-.29-.71A.97.97 0 0 0 10 8c-.28 0-.52.1-.71.29A.94.94 0 0 0 9 9v7c0 .28.1.52.29.71.19.2.43.29.71.29Zm4 0c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71V9c0-.28-.1-.52-.29-.71A.97.97 0 0 0 14 8c-.28 0-.52.1-.71.29A.94.94 0 0 0 13 9v7c0 .28.1.52.29.71.19.2.43.29.71.29Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
