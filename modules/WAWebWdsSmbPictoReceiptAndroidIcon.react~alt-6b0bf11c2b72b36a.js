__d("WAWebWdsSmbPictoReceiptAndroidIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-smb-picto-receipt-android";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 88, 88, null);
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				fill: "none",
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("path", {
						fill: "#25D366",
						stroke: "#111B21",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 1.24,
						d: "M66.25 13.17c2.79 0 2.79-2.67 5.57-2.67h.02v67c-2.78 0-2.79-2.67-5.57-2.67-2.78 0-2.78 2.67-5.56 2.67s-2.79-2.67-5.57-2.67c-2.77 0-2.78 2.67-5.56 2.67s-2.78-2.67-5.56-2.67-2.78 2.67-5.57 2.67-2.79-2.67-5.57-2.67c-2.78 0-2.78 2.67-5.56 2.67-2.79 0-2.79-2.67-5.57-2.67s-2.79 2.67-5.57 2.67h-.02v-67c2.78 0 2.79 2.67 5.57 2.67 2.78 0 2.78-2.67 5.56-2.67s2.79 2.67 5.57 2.67c2.78 0 2.78-2.67 5.56-2.67s2.79 2.67 5.57 2.67 2.77-2.67 5.56-2.67 2.8 2.67 5.57 2.67c2.78 0 2.78-2.67 5.57-2.67 2.78 0 2.78 2.67 5.56 2.67Z"
					}),
					u.jsx("path", {
						stroke: "#111B21",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeWidth: 1.24,
						d: "M28.42 27.43h31.15M28.42 44h31.15M28.42 60.56h31.15"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WdsSmbPictoReceiptAndroidIcon = d;
}), 98);
