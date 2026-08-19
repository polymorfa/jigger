__d("WDSIconIcVideoCall.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ic-video-call";
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
				d: "M10 16c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71v-2h2c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 13 11h-2V9c0-.28-.1-.52-.29-.71A.97.97 0 0 0 10 8c-.28 0-.52.1-.71.29A.94.94 0 0 0 9 9v2H7c-.28 0-.52.1-.71.29A.94.94 0 0 0 6 12c0 .28.1.52.29.71.19.2.43.29.71.29h2v2c0 .28.1.52.29.71.19.2.43.29.71.29Zm-6 4c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V6c0-.55.2-1.02.59-1.41C2.98 4.19 3.45 4 4 4h12c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v4.5l3.15-3.15a.47.47 0 0 1 .54-.11c.2.07.31.23.31.46v8.6c0 .23-.1.39-.31.46a.47.47 0 0 1-.54-.11L18 13.5V18c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H4Zm0-2h12V6H4v12Z"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
