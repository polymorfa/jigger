__d("WDSIconIcFormatAlignLeft.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-format-align-left";
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
				d: "M4 21a.97.97 0 0 1-.71-.29A.97.97 0 0 1 3 20c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h16c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 20 21H4Zm0-4a.97.97 0 0 1-.71-.29A.97.97 0 0 1 3 16c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h10c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 14 17H4Zm0-4a.97.97 0 0 1-.71-.29A.97.97 0 0 1 3 12c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h16c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 20 13H4Zm0-4a.97.97 0 0 1-.71-.29A.97.97 0 0 1 3 8c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h10c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 14 9H4Zm0-4a.97.97 0 0 1-.71-.29A.97.97 0 0 1 3 4c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h16c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 20 5H4Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
