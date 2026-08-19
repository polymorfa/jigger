__d("WAWebAdsStackIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ads-stack";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				fill: "none",
				children: [u.jsx("title", { children: n.iconName }), u.jsx("path", {
					fill: "currentColor",
					d: "M6.63 19.38c-.5 0-.92-.19-1.28-.56-.37-.37-.55-.8-.55-1.27V3.45c0-.48.18-.9.55-1.27.36-.37.79-.56 1.28-.56h14.1c.47 0 .9.19 1.27.56.37.37.55.8.55 1.27v14.1c0 .48-.18.9-.55 1.27-.37.37-.8.55-1.27.55H6.63Zm0-14.13h14.1v-1.8H6.63v1.8ZM3.3 22.7c-.49 0-.92-.18-1.28-.55-.36-.37-.54-.8-.54-1.27V4.95H3.3v15.93h15.93v1.82H3.3Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.AdsStackIcon = d;
}), 98);
