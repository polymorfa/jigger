__d("WDSIconIcGroupAddFilled.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-group-add-filled";
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
				d: "M12.5 11.95a5.96 5.96 0 0 0 0-7.9c1 .13 1.83.57 2.5 1.32.67.75 1 1.63 1 2.63s-.33 1.88-1 2.63a3.97 3.97 0 0 1-2.5 1.32ZM17.45 20a3.65 3.65 0 0 0 .55-2v-1c0-.6-.13-1.17-.4-1.71a5.11 5.11 0 0 0-1.05-1.44c.85.3 1.64.69 2.36 1.16A2.25 2.25 0 0 1 20 17v1c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59h-.55ZM20 11h-1a.97.97 0 0 1-.71-.29A.97.97 0 0 1 18 10c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h1V8c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v1h1c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 23 11h-1v1c0 .28-.1.52-.29.71A.94.94 0 0 1 21 13a.97.97 0 0 1-.71-.29A.97.97 0 0 1 20 12v-1ZM8 12a3.9 3.9 0 0 1-2.83-1.18A3.85 3.85 0 0 1 4 8c0-1.1.4-2.04 1.17-2.83A3.85 3.85 0 0 1 8 4c1.1 0 2.04.4 2.82 1.17A3.85 3.85 0 0 1 12 8c0 1.1-.4 2.04-1.18 2.82A3.85 3.85 0 0 1 8 12Zm-8 6v-.8c0-.57.15-1.09.44-1.56a2.9 2.9 0 0 1 1.16-1.09 13.76 13.76 0 0 1 9.65-1.16c1.07.26 2.12.64 3.15 1.16.48.25.87.61 1.16 1.09.3.47.44 1 .44 1.56v.8c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H2c-.55 0-1.02-.2-1.41-.59C.19 19.02 0 18.55 0 18Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
