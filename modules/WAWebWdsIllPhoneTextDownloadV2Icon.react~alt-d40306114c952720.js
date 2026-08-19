__d("WAWebWdsIllPhoneTextDownloadV2Icon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ill-phone-text-download-v2";
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
						d: "M207.56 19.76a18 18 0 0 0-18-18H131.6v149.48h57.97a18 18 0 0 0 18-18V19.76z"
					}),
					u.jsx("path", {
						fill: "#111b21",
						d: "M141.8 15.52a2.21 2.21 0 0 0 1.56-3.77 2.21 2.21 0 0 0-3.77 1.56 2.21 2.21 0 0 0 2.21 2.21"
					}),
					u.jsx("path", {
						fill: "#25d366",
						stroke: "#111b21",
						strokeMiterlimit: 10,
						strokeWidth: 1.5,
						d: "M197.54 19.76a18 18 0 0 0-18-18h-56.97a18 18 0 0 0-18 18v113.48a18 18 0 0 0 5.27 12.73 18 18 0 0 0 12.73 5.27h56.97c2.36 0 4.7-.47 6.89-1.37a18.02 18.02 0 0 0 9.74-9.74 18 18 0 0 0 1.37-6.89z"
					}),
					u.jsx("path", {
						stroke: "#111b21",
						strokeLinecap: "round",
						strokeWidth: 1.5,
						d: "M144.73 12.52h12.66"
					}),
					u.jsx("path", {
						stroke: "#111b21",
						strokeWidth: 1.5,
						d: "M151.06 138.64a7.42 7.42 0 1 0 0-14.84 7.42 7.42 0 0 0 0 14.84Z"
					}),
					u.jsx("path", {
						fill: "#e6ffda",
						stroke: "#111b21",
						strokeLinejoin: "round",
						strokeMiterlimit: 10,
						strokeWidth: 1.5,
						d: "M73.65 10.92c30.28-.98 55.43 17.76 56.17 41.85a36 36 0 0 1-3.7 16.94l8.99 14.22c1.27 2-.2 4.82-2.4 4.84l-22.73-1.05c-9.15 6.17-20.83 10.05-33.65 10.47-30.28.98-55.43-17.76-56.17-41.86s23.2-44.43 53.49-45.41Z"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WdsIllPhoneTextDownloadV2Icon = d;
}), 98);
