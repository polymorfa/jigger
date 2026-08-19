__d("WDSIconWdsIcBookmarkSlash.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-bookmark-slash";
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
					d: "M17 5v8.59l2 2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-.52.07L8.41 5H17Z"
				}),
				u.jsx("path", {
					fill: "currentColor",
					fillRule: "evenodd",
					d: "M5 6.41V18a2 2 0 0 0 2.74 1.86l4.26-1.7 4.26 1.7a2 2 0 0 0 1.93-.25l1.1 1.1a1 1 0 0 0 1.42-1.42l-16-16a1 1 0 0 0-1.42 1.42L5 6.4Zm2 2 9.31 9.31L12 16l-5 2V8.41Z",
					clipRule: "evenodd"
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
