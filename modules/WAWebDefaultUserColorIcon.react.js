__d("WAWebDefaultUserColorIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "default-user-color";
	function d(t) {
		var n = o("react-compiler-runtime").c(26), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 212, 212, "0 0 212 212"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M106.25.5C164.65.5 212 47.85 212 106.25S164.65 212 106.25 212 .5 164.65.5 106.25 47.85.5 106.25.5z",
			className: "background"
		}), y = u.jsx("path", {
			fill: "#FFFFFF",
			d: "M173.56 171.62a62.77 62.77 0 0 0-4.67-6.26 70.11 70.11 0 0 0-9.11-9 72.46 72.46 0 0 0-16.18-10.08l-.18-.08c-9.8-4.44-22.11-7.53-37.42-7.53s-27.62 3.09-37.42 7.53l-.98.47a75.37 75.37 0 0 0-6.23 3.3 72.59 72.59 0 0 0-15.07 11.86 70.06 70.06 0 0 0-7.86 9.78 63.2 63.2 0 0 0-1.45 2.33l-.1.17c-.44.75-.8 1.4-1.07 1.93-.56 1.07-.82 1.68-.82 1.68v.4a101.01 101.01 0 0 0 70.94 28.98c27.68 0 52.77-11.1 71.06-29.1v-.29s-.62-1.45-2-3.77c-.4-.7-.88-1.48-1.44-2.32zM106 125.5a39.87 39.87 0 0 0 11.3-1.63 37.12 37.12 0 0 0 11.28-5.63 35.92 35.92 0 0 0 11.9-15.32 37.05 37.05 0 0 0 2.45-8.95 40.28 40.28 0 0 0-1.22-17.12 37.05 37.05 0 0 0-5.63-11.27 35.92 35.92 0 0 0-13.65-11.18 37.12 37.12 0 0 0-8.75-2.85 39.87 39.87 0 0 0-7.68-.74c-21.16 0-37.34 16.19-37.34 37.35S84.84 125.5 106 125.5z",
			className: "primary"
		}), n[12] = h, n[13] = y) : (h = n[12], y = n[13]);
		var C;
		n[14] !== l || n[15] !== s || n[16] !== d || n[17] !== m || n[18] !== p || n[19] !== g ? (C = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			version: "1.1",
			x: "0px",
			y: "0px",
			enableBackground: "new 0 0 212 212",
			children: [
				g,
				h,
				y
			]
		}), n[14] = l, n[15] = s, n[16] = d, n[17] = m, n[18] = p, n[19] = g, n[20] = C) : C = n[20];
		var b;
		return n[21] !== a || n[22] !== C || n[23] !== _ || n[24] !== f ? (b = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: C
		})), n[21] = a, n[22] = C, n[23] = _, n[24] = f, n[25] = b) : b = n[25], b;
	}
	l.DefaultUserColorIcon = d;
}), 98);
