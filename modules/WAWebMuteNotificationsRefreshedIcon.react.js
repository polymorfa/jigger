__d("WAWebMuteNotificationsRefreshedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "mute-notifications-refreshed";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M5 19a1 1 0 1 1 0-2h1v-7a6.3 6.3 0 0 1 .85-3.15l1.5 1.5A4.2 4.2 0 0 0 8 10v7h6.2L2.1 4.9a.99.99 0 1 1 1.4-1.4l17 17a1 1 0 0 1-1.4 1.4L16.15 19H5Zm13-3.85-2-2V10c0-1.1-.4-2.04-1.17-2.83A3.85 3.85 0 0 0 12 6c-.43 0-.85.07-1.25.2s-.77.33-1.1.6L8.2 5.35c.33-.27.7-.5 1.08-.7.38-.2.79-.35 1.22-.45v-.7c0-.42.15-.77.44-1.06.29-.3.64-.44 1.06-.44.42 0 .77.15 1.06.44.3.29.44.64.44 1.06v.7a5.77 5.77 0 0 1 3.25 2.11A5.86 5.86 0 0 1 18 10v5.15ZM12 22c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41h4c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59Z"
		}), n[12] = h) : h = n[12];
		var y;
		n[13] !== l || n[14] !== s || n[15] !== d || n[16] !== m || n[17] !== p || n[18] !== g ? (y = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			fill: "none",
			children: [g, h]
		}), n[13] = l, n[14] = s, n[15] = d, n[16] = m, n[17] = p, n[18] = g, n[19] = y) : y = n[19];
		var C;
		return n[20] !== a || n[21] !== _ || n[22] !== f || n[23] !== y ? (C = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: y
		})), n[20] = a, n[21] = _, n[22] = f, n[23] = y, n[24] = C) : C = n[24], C;
	}
	l.MuteNotificationsRefreshedIcon = d;
}), 98);
