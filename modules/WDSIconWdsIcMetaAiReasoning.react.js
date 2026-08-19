__d("WDSIconWdsIcMetaAiReasoning.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-meta-ai-reasoning";
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
					d: "M19.11.38a.58.58 0 0 1 1.07 0l.77 1.78a.5.5 0 0 0 .3.3l1.79.77c.47.2.47.86 0 1.06l-1.79.76a.58.58 0 0 0-.3.3l-.79 1.83a.58.58 0 0 1-1.06 0l-.84-1.83a.58.58 0 0 0-.29-.3l-1.73-.75a.58.58 0 0 1 0-1.06l1.8-.78a.58.58 0 0 0 .3-.3l.77-1.78Z"
				}),
				u.jsx("path", {
					fill: "currentColor",
					d: "M18.62 9.33a6.79 6.79 0 0 1-2.9 5.27H8.28a6.79 6.79 0 0 1-2-2.17 6.37 6.37 0 0 1-.9-3.3c0-1.88.64-3.4 1.93-4.7A6.32 6.32 0 0 1 12 2.5c.74 0 1.43.1 2.07.3.24-.6.7-1.11 1.38-1.4l.25-.1A8.54 8.54 0 0 0 12 .5c-2.4 0-4.43.84-6.1 2.52a8.32 8.32 0 0 0-2.53 6.1c0 1.56.4 3 1.17 4.32a8.81 8.81 0 0 0 3.15 3.16h8.62a8.81 8.81 0 0 0 3.15-3.16 8.35 8.35 0 0 0 1.16-4.1c-.63.25-1.36.25-2-.01Zm-8.24 13.49c.45.45.99.68 1.62.68.63 0 1.17-.23 1.62-.68.45-.45.68-.99.68-1.62H9.7c0 .63.23 1.17.68 1.62Z"
				}),
				u.jsx("path", {
					fill: "currentColor",
					fillRule: "evenodd",
					d: "M7.47 18.9a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1Z",
					clipRule: "evenodd"
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
