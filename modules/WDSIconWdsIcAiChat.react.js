__d("WDSIconWdsIcAiChat.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-ai-chat";
	function d(t) {
		var n = o("WDSSvgIconHelpers").resolveSvgIcon(t, 24, 24, "0 0 24 24");
		return u.jsx(r("WDSSvgComponentBase.react"), babelHelpers.extends({}, n.otherProps, { children: u.jsxs("svg", {
			viewBox: n.viewBox,
			height: n.height,
			width: n.width,
			preserveAspectRatio: "xMidYMid meet",
			className: (e || (e = r("stylex")))(n.iconXstyle),
			fill: "currentColor",
			children: [
				u.jsx("title", { children: c }),
				u.jsx("path", {
					fill: "currentColor",
					d: "M13.34 9.78a1.14 1.14 0 1 0 0-2.28 1.14 1.14 0 0 0 0 2.28Zm3.06-.53c.15.05.27.17.3.33l.5 2.2a.44.44 0 0 1-.57.52l-2.15-.68a.44.44 0 0 1-.17-.74l1.66-1.53c.12-.1.28-.14.43-.1Zm-5.61 1.53a.46.46 0 0 1 .85 0l.61 1.42c.05.11.14.2.25.25l1.43.6c.37.17.37.7 0 .86l-1.43.6a.5.5 0 0 0-.25.25l-.62 1.46a.46.46 0 0 1-.85 0l-.67-1.47a.46.46 0 0 0-.24-.23l-1.39-.61a.46.46 0 0 1 0-.85l1.45-.62a.4.4 0 0 0 .24-.24l.62-1.42Z"
				}),
				u.jsx("path", {
					fill: "currentColor",
					fillRule: "evenodd",
					d: "M3.2 17.33V8.85L1.16 5.53A1 1 0 0 1 2 4h17.54c1.47 0 2.67 1.2 2.67 2.67v10.66c0 1.48-1.2 2.67-2.67 2.67H5.87a2.67 2.67 0 0 1-2.66-2.67Zm2-9.05L3.8 6h15.74c.37 0 .67.3.67.67v10.66c0 .37-.3.67-.67.67H5.87a.67.67 0 0 1-.66-.67V8.28Z",
					clipRule: "evenodd"
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
