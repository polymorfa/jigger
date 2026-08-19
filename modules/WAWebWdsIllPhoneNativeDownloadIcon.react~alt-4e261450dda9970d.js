__d("WAWebWdsIllPhoneNativeDownloadIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ill-phone-native-download";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 152, 228, "0 0 228 152");
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
						fill: "#25d366",
						stroke: "#111b21",
						strokeMiterlimit: 10,
						strokeWidth: 1.5,
						d: "M187.56 19.76a18 18 0 0 0-18-18H111.6v149.48h57.97a18 18 0 0 0 18-18V19.76z"
					}),
					u.jsx("path", {
						fill: "#111b21",
						d: "M121.8 15.52a2.21 2.21 0 0 0 1.56-3.77 2.21 2.21 0 0 0-3.77 1.56 2.21 2.21 0 0 0 2.21 2.21"
					}),
					u.jsx("path", {
						fill: "#25d366",
						stroke: "#111b21",
						strokeMiterlimit: 10,
						strokeWidth: 1.5,
						d: "M177.54 19.76a18 18 0 0 0-18-18H88.57a18 18 0 0 0-18 18v113.48a18 18 0 0 0 18 18h70.97a18 18 0 0 0 16.63-11.11 18 18 0 0 0 1.37-6.89z"
					}),
					u.jsx("path", {
						stroke: "#111b21",
						strokeLinecap: "round",
						strokeWidth: 1.5,
						d: "M117.73 12.52h12.66"
					}),
					u.jsx("path", {
						stroke: "#111b21",
						strokeWidth: 1.5,
						d: "M124.06 138.64a7.42 7.42 0 1 0 0-14.84 7.42 7.42 0 0 0 0 14.84Z"
					}),
					u.jsx("circle", {
						cx: 73,
						cy: 75,
						r: 50,
						fill: "#e6ffda",
						stroke: "#111b21",
						strokeLinejoin: "round",
						strokeMiterlimit: 10,
						strokeWidth: 1.5
					}),
					u.jsx("path", {
						fill: "#25d366",
						stroke: "#111b21",
						strokeWidth: 1.5,
						d: "M87.85 59.8c1.45 0 2.76 1.06 2.77 2.57v14.75c0 .43.41.92 1.1.92h8.5c1.3 0 2.28.77 2.64 1.76a2.44 2.44 0 0 1-1.01 2.88l-14.16 11-10.97 9.17a4.97 4.97 0 0 1-6.29.06L45.15 82.68a2.43 2.43 0 0 1-1-2.88 2.7 2.7 0 0 1 1.02-1.3 2.7 2.7 0 0 1 1.6-.46h7.86c.7 0 1.12-.5 1.12-.92V62.37c0-1.5 1.32-2.57 2.75-2.57zm0-13.8c1.45 0 2.77 1.07 2.77 2.57v3.25c0 1.5-1.32 2.56-2.76 2.56H58.5c-1.44 0-2.75-1.06-2.75-2.56v-3.25c0-1.5 1.3-2.57 2.75-2.57z"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WdsIllPhoneNativeDownloadIcon = d;
}), 98);
