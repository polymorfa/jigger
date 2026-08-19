__d("WAWebMessageReportIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "message-report";
	function d(t) {
		var n = o("react-compiler-runtime").c(26), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			d: "M.94 5.53 3 8.85v8.48C3 18.81 4.2 20 5.66 20h13.67C20.8 20 22 18.8 22 17.33V6.67C22 5.19 20.8 4 19.33 4H1.79a1 1 0 0 0-.85 1.53ZM5 8.28v9.05c0 .37.3.67.66.67h13.67c.37 0 .67-.3.67-.67V6.67c0-.37-.3-.67-.67-.67H3.59l1.4 2.28Z",
			clipRule: "evenodd"
		}), y = u.jsx("path", {
			fill: "currentColor",
			d: "M13.1 15.71a.91.91 0 0 1-.7.29.97.97 0 0 1-.72-.29.97.97 0 0 1-.29-.71c0-.28.1-.52.3-.71a.9.9 0 0 1 .7-.29 1 1 0 0 1 .72.29c.19.19.28.43.28.71a1 1 0 0 1-.28.71Zm0-3a.91.91 0 0 1-.7.29 1.03 1.03 0 0 1-.72-.29 1.03 1.03 0 0 1-.29-.71V9c0-.28.1-.52.3-.71a.9.9 0 0 1 .7-.29 1 1 0 0 1 .72.29c.19.19.28.43.28.71v3a1 1 0 0 1-.28.71Z"
		}), n[12] = h, n[13] = y) : (h = n[12], y = n[13]);
		var C;
		n[14] !== l || n[15] !== s || n[16] !== d || n[17] !== m || n[18] !== p || n[19] !== g ? (C = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			fill: "none",
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
	l.MessageReportIcon = d;
}), 98);
