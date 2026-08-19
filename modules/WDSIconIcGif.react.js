__d("WDSIconIcGif.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-gif";
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
				d: "M4 17c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V9c0-.55.2-1.02.59-1.41C2.98 7.19 3.45 7 4 7h5c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 9 9H4v6h4v-2H7a.97.97 0 0 1-.71-.29A.97.97 0 0 1 6 12c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h2c.28 0 .52.1.71.29.2.19.29.43.29.71v3c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H4Zm8-1V8c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v8c0 .28-.1.52-.29.71A.94.94 0 0 1 13 17a.97.97 0 0 1-.71-.29A.97.97 0 0 1 12 16Zm4 0V8c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h5c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 22 9h-4v2h3c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 21 13h-3v3c0 .28-.1.52-.29.71A.94.94 0 0 1 17 17a.97.97 0 0 1-.71-.29A.97.97 0 0 1 16 16Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
