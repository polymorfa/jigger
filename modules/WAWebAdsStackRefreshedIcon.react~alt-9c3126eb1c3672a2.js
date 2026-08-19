__d("WAWebAdsStackRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "ads-stack-refreshed";
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
					d: "M8 18c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V4c0-.55.2-1.02.59-1.41C6.98 2.19 7.45 2 8 2h12c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v12c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H8Zm0-2h12V6H8v10Zm-4 6c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V7c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v13h13c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 17 22H4Z"
				})]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.AdsStackRefreshedIcon = d;
}), 98);
