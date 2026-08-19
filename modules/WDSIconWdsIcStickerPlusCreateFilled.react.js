__d("WDSIconWdsIcStickerPlusCreateFilled.react", [
	"WDSSvgComponentBase.react",
	"WDSSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-sticker-plus-create-filled";
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
					fillRule: "evenodd",
					d: "M9.27 2A7.27 7.27 0 0 0 2 9.27v5.46A7.27 7.27 0 0 0 9.27 22h3.96c.73 0 1.31-.6 1.3-1.33L14.5 20v-.34c0-2.84 2.3-5.14 5.15-5.14h1.2c.59 0 1.07-.44 1.14-1.01V9.27A7.27 7.27 0 0 0 14.73 2H9.27ZM11 16v-3H8a.97.97 0 0 1-.71-.29A.97.97 0 0 1 7 12c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h3V8c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v3h3c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 16 13h-3v3c0 .28-.1.52-.29.71A.94.94 0 0 1 12 17a.97.97 0 0 1-.71-.29A.97.97 0 0 1 11 16Z",
					clipRule: "evenodd"
				}),
				u.jsx("path", {
					fill: "currentColor",
					d: "M18.98 19.86c-.8.87-1.82 1.5-2.92 1.84.11-.33.18-.69.17-1.06l-.02-.66v-.32c0-1.9 1.55-3.44 3.45-3.44h1.2a3 3 0 0 0 .74-.1 7.27 7.27 0 0 1-1.54 2.58l-1.08 1.16Z"
				})
			]
		}) }));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
