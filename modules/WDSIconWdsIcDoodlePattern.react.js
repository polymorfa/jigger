__d("WDSIconWdsIcDoodlePattern.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-doodle-pattern";
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
				d: "M8 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM7 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm13.21-2.69a1 1 0 0 1 .62 1.02c-.11 1.18-.07 1.73.1 2.15.18.42.54.84 1.46 1.58a1 1 0 0 1-.73 1.77c-1.17-.11-1.73-.07-2.15.1-.41.18-.83.54-1.58 1.45a1 1 0 0 1-1.77-.72c.12-1.17.07-1.73-.1-2.15-.18-.41-.54-.84-1.45-1.58a1 1 0 0 1 .72-1.77c1.18.12 1.73.07 2.15-.1.41-.18.84-.54 1.58-1.45a1 1 0 0 1 1.15-.3Zm-2.64 3.8a3.88 3.88 0 0 1 .54 1.31 3.87 3.87 0 0 1 1.32-.54 3.88 3.88 0 0 1-.55-1.31 3.87 3.87 0 0 1-1.31.55Zm-2.44 7.53a4 4 0 0 1 .5-.07 4.01 4.01 0 0 1 4.35 3.58 4 4 0 0 1-3.62 4.34 4.09 4.09 0 0 1-2.16-.4 3.7 3.7 0 0 1-2.47 1.28h-.01a3.99 3.99 0 0 1-1.47-.16 4.63 4.63 0 0 1-7.23-3.37 4.6 4.6 0 0 1 3.67-4.93 4.6 4.6 0 0 1 8.44-.26Zm-4.41-.63c1.36-.12 2.56.8 2.79 2.1a1 1 0 0 0 1.46.7 2.05 2.05 0 0 1 .82-.25c1.12-.1 2.1.71 2.2 1.79a2 2 0 0 1-1.81 2.15c-.62.05-1.2-.17-1.6-.55a1 1 0 0 0-1.62.37 1.7 1.7 0 0 1-2.39.86 1 1 0 0 0-1.15.14c-.4.37-.93.61-1.53.67a2.63 2.63 0 0 1-2.88-2.34 2.6 2.6 0 0 1 2.46-2.84 1 1 0 0 0 .96-.8 2.57 2.57 0 0 1 2.29-2Z",
				clipRule: "evenodd"
			})]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
