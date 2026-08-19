__d("WAWebGcalLogoIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "gcal-logo";
	function d(t) {
		var n = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 200, 200, "0 0 200 200");
		return u.jsx(o("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers.extends({}, n.otherProps, {
			name: n.iconName,
			children: u.jsxs("svg", {
				viewBox: n.viewBox,
				height: n.height,
				width: n.width,
				preserveAspectRatio: "xMidYMid meet",
				className: (e || (e = r("stylex")))(n.iconXstyle),
				children: [
					u.jsx("title", { children: n.iconName }),
					u.jsx("path", {
						fill: "#FFF",
						d: "m152.63 47.37-47.37-5.26-57.9 5.26L42.1 100l5.27 52.63 52.63 6.58 52.63-6.58 5.27-53.94z"
					}),
					u.jsx("path", {
						fill: "#1A73E8",
						d: "M68.96 129.03c-3.93-2.66-6.66-6.54-8.14-11.67l9.13-3.77q1.24 4.74 4.34 7.34a11.19 11.19 0 0 0 7.47 2.6q4.48 0 7.7-2.73c3.22-2.72 3.23-4.13 3.23-6.93q0-4.3-3.4-7.03c-3.4-2.72-5.1-2.72-8.5-2.72h-5.28v-9.04h4.74q4.38 0 7.38-2.37c2-1.58 3-3.74 3-6.49 0-2.44-.9-4.4-2.68-5.85s-4.05-2.2-6.8-2.2c-2.69 0-4.82.71-6.4 2.15s-2.72 3.2-3.45 5.27l-9.04-3.76c1.2-3.4 3.4-6.4 6.62-8.99s7.34-3.9 12.34-3.9c3.7 0 7.03.72 9.98 2.15a17.06 17.06 0 0 1 6.93 5.95 15.18 15.18 0 0 1 2.5 8.54c0 3.22-.77 5.95-2.33 8.18s-3.46 3.95-5.72 5.15v.54a17.4 17.4 0 0 1 7.34 5.72c1.9 2.57 2.87 5.63 2.87 9.21s-.9 6.78-2.72 9.58-4.33 5.01-7.52 6.62A23.69 23.69 0 0 1 81.78 133a22.3 22.3 0 0 1-12.82-3.97M125 83.7l-9.97 7.25-5.02-7.6L128 70.38h6.9v61.2H125z"
					}),
					u.jsx("path", {
						fill: "#EA4335",
						d: "M152.63 200 200 152.63l-23.68-10.52-23.69 10.52-10.52 23.69z"
					}),
					u.jsx("path", {
						fill: "#34A853",
						d: "M36.84 176.32 47.37 200h105.26v-47.37H47.37z"
					}),
					u.jsx("path", {
						fill: "#4285F4",
						d: "M15.79 0A15.79 15.79 0 0 0 0 15.79v136.84l23.68 10.53 23.69-10.53V47.37h105.26l10.53-23.69L152.63 0z"
					}),
					u.jsx("path", {
						fill: "#188038",
						d: "M0 152.63v31.58A15.8 15.8 0 0 0 15.79 200h31.58v-47.37z"
					}),
					u.jsx("path", {
						fill: "#FBBC04",
						d: "M152.63 47.37v105.26H200V47.37l-23.68-10.53z"
					}),
					u.jsx("path", {
						fill: "#1967D2",
						d: "M200 47.37V15.79A15.8 15.8 0 0 0 184.21 0h-31.58v47.37z"
					})
				]
			})
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.GcalLogoIcon = d;
}), 98);
