__d("WDSIconWdsIcPrivateProcessingAiLockSparkle.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-private-processing-ai-lock-sparkle";
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
					d: "M11.51 12.3a.54.54 0 0 1 1 0l.71 1.67a.54.54 0 0 0 .28.28l1.67.72a.54.54 0 0 1 0 .99l-1.67.71a.54.54 0 0 0-.28.28l-.73 1.7a.54.54 0 0 1-.99.01l-.78-1.72a.54.54 0 0 0-.28-.27l-1.62-.7a.54.54 0 0 1 0-1l1.7-.72a.54.54 0 0 0 .28-.28z"
				}),
				u.jsx("path", {
					fill: "currentColor",
					fillRule: "evenodd",
					d: "M11.87.52A4.97 4.97 0 0 1 17 5.46v2.12a5 5 0 0 1 4 4.9v6a5 5 0 0 1-4.74 5H8a5 5 0 0 1-5-5v-6a5 5 0 0 1 4-4.9V5.46A4.98 4.98 0 0 1 11.87.52M8 9.48a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3zm3.92-6.96A2.97 2.97 0 0 0 9 5.46v2.02h6V5.46a2.97 2.97 0 0 0-3.08-2.94",
					clipRule: "evenodd"
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
