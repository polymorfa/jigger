__d("WDSIconWdsIcStickerSmiley.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-sticker-smiley";
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
					d: "M8.5 10.25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm8.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
				}),
				u.jsx("path", {
					fill: "currentColor",
					fillRule: "evenodd",
					d: "M16.82 19.98A6.97 6.97 0 0 1 12 22H9.27A7.27 7.27 0 0 1 2 14.73V9.27A7.27 7.27 0 0 1 9.27 2h5.46A7.27 7.27 0 0 1 22 9.27v2.54c0 1.94-.77 3.8-2.15 5.17l-3.03 3ZM14.72 4H9.28A5.27 5.27 0 0 0 4 9.27v5.46A5.27 5.27 0 0 0 9.27 20h2.06a.9.9 0 0 0 .68-.88l-.02-2.26v-.11a5.5 5.5 0 0 1-4.65-2.6.6.6 0 0 1 .03-.6c.12-.2.3-.3.53-.3h5.7a4.8 4.8 0 0 1 3.22-1.23l2.26.01c.5 0 .9-.4.9-.9V9.07H20A5.27 5.27 0 0 0 14.73 4Zm-.71 15.11c0 .15-.01.3-.04.44a4.96 4.96 0 0 0 1.44-.99l3.03-3c.46-.46.83-.99 1.09-1.56-.15.02-.3.03-.46.03h-2.26A2.8 2.8 0 0 0 14 16.84l.02 2.26Z",
					clipRule: "evenodd"
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
