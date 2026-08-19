__d("WDSIconIcTouchApp.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-touch-app";
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
				d: "M10.48 22a2.94 2.94 0 0 1-2.35-1.15L3.1 14.47a.7.7 0 0 1-.17-.53.75.75 0 0 1 .22-.51 2 2 0 0 1 1.2-.63c.47-.07.9.02 1.3.27L7.5 14.2V6c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29a1.01 1.01 0 0 1 1.03 1v10c0 .38-.18.67-.52.86A.95.95 0 0 1 8 16.85l-.9-.55 2.6 3.32c.1.12.22.21.35.28.13.07.28.1.43.1H16c.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41v-4c0-.28-.1-.52-.29-.71A.97.97 0 0 0 17 13h-4.47a.97.97 0 0 1-.72-.29.97.97 0 0 1-.28-.71.97.97 0 0 1 1-1H17c.83 0 1.54.3 2.13.88.58.58.87 1.29.87 2.12v4c0 1.1-.4 2.04-1.17 2.82A3.85 3.85 0 0 1 16 22h-5.52Zm1.5-13a.97.97 0 0 1-.72-.29.97.97 0 0 1-.28-.71l.12-.5a3.09 3.09 0 0 0 .4-1.5c0-.83-.3-1.54-.87-2.13A2.9 2.9 0 0 0 8.5 3c-.83 0-1.54.3-2.12.88A2.9 2.9 0 0 0 5.5 6a2.95 2.95 0 0 0 .4 1.5 1.07 1.07 0 0 1 .13.5 1 1 0 0 1-.28.71.93.93 0 0 1-.7.29 1.04 1.04 0 0 1-.88-.53 4.9 4.9 0 0 1 .8-6A4.82 4.82 0 0 1 8.5 1c1.38 0 2.56.49 3.54 1.46A4.82 4.82 0 0 1 13.5 6a4.8 4.8 0 0 1-.67 2.47c-.09.15-.2.28-.35.38a.88.88 0 0 1-.5.15Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
