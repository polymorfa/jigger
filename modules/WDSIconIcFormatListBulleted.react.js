__d("WDSIconIcFormatListBulleted.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-format-list-bulleted";
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
				d: "M10 19a.97.97 0 0 1-.71-.29A.97.97 0 0 1 9 18c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h10c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 20 19H10Zm0-6a.97.97 0 0 1-.71-.29A.97.97 0 0 1 9 12c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h10c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 20 13H10Zm0-6a.97.97 0 0 1-.71-.29A.97.97 0 0 1 9 6c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h10c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 20 7H10ZM5 20c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41 0-.55.2-1.02.59-1.41.39-.4.86-.59 1.41-.59.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41 0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59Zm0-6c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41 0-.55.2-1.02.59-1.41.39-.4.86-.59 1.41-.59.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41 0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59Zm0-6c-.55 0-1.02-.2-1.41-.59C3.19 7.02 3 6.55 3 6c0-.55.2-1.02.59-1.41C3.98 4.19 4.45 4 5 4c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41 0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
