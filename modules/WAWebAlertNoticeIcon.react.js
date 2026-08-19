__d("WAWebAlertNoticeIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "alert-notice";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 27, 23, "0 0 23 27"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			d: "M15.64 1c.64 0 1.26.24 1.74.67l3.77 3.42c.54.49.85 1.18.85 1.91v16.5c0 1.44-1.12 2.5-2.5 2.5h-16A2.46 2.46 0 0 1 1 23.5V3.62A2.57 2.57 0 0 1 3.5 1h12.14Zm.84 19.25H6.2a.6.6 0 0 0-.05 1.2h10.33a.6.6 0 0 0 0-1.2Zm0-3.6H6.2a.6.6 0 0 0-.05 1.2h10.33a.6.6 0 1 0 0-1.2Zm0-3.62h-3.97a.6.6 0 0 0-.04 1.2h4.01a.6.6 0 0 0 .05-1.2h-.05ZM7.9 8.23c1.15 0 1.72.9 1.68 2.57h.05c.31 0 .56.25.56.56v2.92c0 .31-.25.56-.56.56H6.15a.56.56 0 0 1-.56-.56v-2.92c0-.31.25-.56.56-.56h.06c-.03-1.67.54-2.58 1.7-2.58Zm0 .6c-.8 0-1.2.6-1.16 1.97h2.3c.05-1.36-.33-1.97-1.14-1.97Zm8.58.6a.6.6 0 0 1 0 1.2h-3.97a.6.6 0 1 1 0-1.2h3.97Z"
		}), n[12] = h) : h = n[12];
		var y;
		n[13] !== l || n[14] !== s || n[15] !== d || n[16] !== m || n[17] !== p || n[18] !== g ? (y = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			version: "1.1",
			children: [g, h]
		}), n[13] = l, n[14] = s, n[15] = d, n[16] = m, n[17] = p, n[18] = g, n[19] = y) : y = n[19];
		var C;
		return n[20] !== a || n[21] !== _ || n[22] !== f || n[23] !== y ? (C = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: y
		})), n[20] = a, n[21] = _, n[22] = f, n[23] = y, n[24] = C) : C = n[24], C;
	}
	l.AlertNoticeIcon = d;
}), 98);
