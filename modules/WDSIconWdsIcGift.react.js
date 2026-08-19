__d("WDSIconWdsIcGift.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-gift";
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
				fillRule: "evenodd",
				d: "M6.2 6H4c-.55 0-1.02.2-1.41.59C2.19 6.98 2 7.45 2 8v12c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59h16c.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41V8c0-.55-.2-1.02-.59-1.41-.39-.4-.86-.59-1.41-.59h-2.2c.08-.15.14-.3.16-.47a3.08 3.08 0 0 0-.84-2.66 2.9 2.9 0 0 0-3.52-.5c-.43.25-.8.58-1.1.98L12 4l-.5-.65a4.4 4.4 0 0 0-1.11-.96 2.9 2.9 0 0 0-3.51.49A2.9 2.9 0 0 0 6 5c0 .18.01.36.04.53.02.16.08.32.16.47ZM4 20v-5h7v5H4Zm9 0h7v-5h-7v5Zm0-7h7V8h-7v5Zm-2-5H4v5h7V8ZM9.71 5.71A.94.94 0 0 1 9 6a.97.97 0 0 1-.71-.29A.97.97 0 0 1 8 5c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71Zm6 0A.94.94 0 0 1 15 6a.97.97 0 0 1-.71-.29A.97.97 0 0 1 14 5c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71Z",
				clipRule: "evenodd"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
