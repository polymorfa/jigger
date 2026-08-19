__d("WAWebGiphyIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "giphy";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 12, 42, "0 0 42 12");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				version: "1.1",
				id: "c212a434-5ccb-432f-a8c7-c12941522a3a",
				x: "0px",
				y: "0px",
				enableBackground: "new 0 0 42 12",
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("path", {
						fill: "#263238",
						fillOpacity: .2,
						d: "M6.7 2c1.15-.06 2.27.4 3.05 1.25L8.47 4.52a2.57 2.57 0 0 0-1.77-.68 1.98 1.98 0 0 0-2.09 2.28 2.04 2.04 0 0 0 1.84 2.22h.25a2.7 2.7 0 0 0 1.5-.4v-1H6.23v-1.7h3.8v3.45A3.62 3.62 0 0 1 6.7 10.2a3.86 3.86 0 0 1-4.24-4.08A3.98 3.98 0 0 1 6.7 2m32.33.22v.1L35.95 6.9V10h-2.2V6.9L30.8 2.31v-.09h2.47l1.61 2.66 1.68-2.66h2.47m-25.57 0V10h-2.19V2.22h2.2m5.34 0a2.8 2.8 0 0 1 3.12 2.83c0 1.59-1.05 2.82-3.12 2.84h-1.58V10h-2.2V2.22h3.78m-1.58 3.82h1.58a.89.89 0 0 0 .92-.96.91.91 0 0 0-.92-.97h-1.58v1.93m12.84-3.8V10H27.9V7.06h-2.8V10h-2.2V2.23h2.2v2.95h2.8V2.23h2.17M6.7 1a4.96 4.96 0 0 0-5.25 5.12 4.84 4.84 0 0 0 5.24 5.08 5.2 5.2 0 0 0 3.58-1.21v1h7.96v-2.1h.58a4.3 4.3 0 0 0 3.1-1.19V11h4.2V8.06h.8V11h4.18V4.59l1.67 2.6v3.8h4.2V7.2l2.9-4.32.17-.25v-1.4H36l-.3.46-.8 1.29-.77-1.28-.3-.48H29.8v.01h-2.9v2.95h-.8V1.23h-4.2v1.19a4.23 4.23 0 0 0-3.1-1.2h-8.53v1.15A4.83 4.83 0 0 0 6.7 1zm3.49 3.23.08-.09v.09h-.08z"
					}),
					u.jsx("path", {
						fill: "#FFFFFF",
						fillOpacity: .5,
						d: "M6.7 2c1.15-.06 2.27.4 3.05 1.25L8.47 4.52a2.57 2.57 0 0 0-1.77-.68 1.98 1.98 0 0 0-2.09 2.28 2.04 2.04 0 0 0 1.84 2.22h.25a2.7 2.7 0 0 0 1.5-.4v-1H6.23v-1.7h3.8v3.45A3.62 3.62 0 0 1 6.7 10.2a3.86 3.86 0 0 1-4.24-4.08A3.98 3.98 0 0 1 6.7 2m32.33.22v.1L35.95 6.9V10h-2.2V6.9L30.8 2.31v-.09h2.47l1.61 2.66 1.68-2.66h2.47m-25.57 0V10h-2.19V2.22h2.2m5.34 0a2.8 2.8 0 0 1 3.12 2.83c0 1.59-1.05 2.82-3.12 2.84h-1.58V10h-2.2V2.22h3.78m-1.58 3.82h1.58a.89.89 0 0 0 .92-.96.91.91 0 0 0-.92-.97h-1.58v1.93m12.84-3.8V10H27.9V7.06h-2.8V10h-2.2V2.23h2.2v2.95h2.8V2.23h2.17m-19.88 2 .09-.08v.08h-.1z"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.GiphyIcon = d;
}), 98);
