__d("WDSIconWdsIcStatusPending.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-status-pending";
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
					d: "M20.74 10.85q0-1.7-.22-2.68v-.01a6 6 0 0 0-.62-1.79 5.4 5.4 0 0 0-2.28-2.26 6 6 0 0 0-1.8-.63q-.97-.22-2.67-.22h-2.3q-1.7 0-2.68.22h-.01q-.99.2-1.79.62A5.4 5.4 0 0 0 4.1 6.38q-.42.8-.64 1.78-.2.98-.2 2.69v2.29q0 1.7.2 2.69.21.98.64 1.79a5.4 5.4 0 0 0 2.27 2.27q.7.39 1.55.58l.24.05h.01q.98.22 2.68.22h2.3q1.7 0 2.66-.22h.01a6 6 0 0 0 1.8-.62q1.48-.8 2.28-2.29.43-.8.62-1.78v-.02q.22-.98.22-2.67zm2.5 2.29q0 1.84-.27 3.17a9 9 0 0 1-.87 2.48 8 8 0 0 1-3.3 3.3v.01q-1.16.6-2.47.87-1.33.28-3.18.27h-2.3q-1.85 0-3.18-.27a9 9 0 0 1-2.48-.87 8 8 0 0 1-3.3-3.31q-.6-1.15-.87-2.46v-.02Q.75 15 .75 13.14v-2.29Q.75 9 1 7.67q.28-1.33.89-2.48a8 8 0 0 1 3.3-3.3q1.14-.6 2.47-.87a16 16 0 0 1 3.18-.26h2.3q1.84 0 3.16.27 1.32.26 2.48.87 2 1.06 3.16 3.02l.15.27q.62 1.16.87 2.48.28 1.34.27 3.18z"
				}),
				u.jsx("path", {
					fill: "currentColor",
					d: "M10.88 7.58a1.25 1.25 0 1 1 2.5 0v4.44h2.44a1.25 1.25 0 0 1 0 2.5h-3.7c-.68 0-1.24-.56-1.24-1.25z"
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
