__d("WDSIconWdsIcWeave.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-weave";
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
					d: "M7.8 8.49a6.36 6.36 0 0 1 2.33 8.69L7.87 21.1a9.1 9.1 0 0 1-1.58-.9l2.27-3.93a4.55 4.55 0 0 0-1.66-6.21L2.95 7.78c.26-.56.56-1.09.91-1.58l3.95 2.28-.01.01Zm14.16 2.61c.05.6.05 1.21 0 1.82h-4.44a4.55 4.55 0 0 0-4.55 4.55v4.49c-.6.06-1.21.06-1.82 0v-4.5a6.36 6.36 0 0 1 6.36-6.36h4.45Z"
				}),
				u.jsx("path", {
					fill: "currentColor",
					d: "M6.16 11.26a3.19 3.19 0 0 1 1.16 4.35l-2.14 3.71c-.47-.44-.89-.92-1.27-1.44l1.84-3.18c.38-.65.15-1.49-.5-1.86l-3.2-1.85c.05-.52.15-1.05.29-1.58l.09-.3 3.73 2.15Zm15.5 3.33a9.69 9.69 0 0 1-.55 1.54h-3.56c-.75 0-1.36.61-1.36 1.36v3.58c-.58.27-1.19.48-1.82.64v-4.22a3.18 3.18 0 0 1 3.18-3.18h4.17l-.07.28h.01ZM10.12 6.83a4.55 4.55 0 0 0 6.21 1.66l3.86-2.23c.35.5.65 1.03.9 1.58l-3.85 2.22a6.36 6.36 0 0 1-8.69-2.33L6.28 3.79a9.9 9.9 0 0 1 1.58-.9l2.27 3.93-.01.01Z"
				}),
				u.jsx("path", {
					fill: "currentColor",
					d: "M12.89 5.2c.38.65 1.21.88 1.86.5l3.11-1.8c.52.38 1 .8 1.44 1.27l-3.64 2.1a3.19 3.19 0 0 1-4.35-1.16l-2.14-3.7c.61-.18 1.25-.3 1.89-.36l1.82 3.15h.01Z"
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
