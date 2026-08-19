__d("WAWebViewOnceDownloadIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "view-once-download";
	function d(t) {
		var n = o("react-compiler-runtime").c(26), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M13.8 12.5h1.3a.5.5 0 0 1 .35.85l-2.8 2.8a.5.5 0 0 1-.7 0l-2.8-2.8a.5.5 0 0 1 .35-.85h1.3V8.4c0-.28.22-.5.5-.5h2c.27 0 .5.22.5.5v4.1Z"
		}), y = u.jsx("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			d: "M12 21h.26a1 1 0 0 0-.06-2H12v2Zm0-16h.2a1 1 0 0 0 .06-2H12v2Zm4.27-.92a1 1 0 0 0-.95 1.76l.35.2a1 1 0 1 0 1.06-1.7 9 9 0 0 0-.46-.26Zm3.4 3.2a1 1 0 0 0-1.71 1.05l.2.35a1 1 0 0 0 1.76-.95 9 9 0 0 0-.26-.46ZM21 11.73a1 1 0 0 0-2 .06 7.33 7.33 0 0 1 0 .4 1 1 0 1 0 2 .06 9.5 9.5 0 0 0 0-.52Zm-1.08 4.53a1 1 0 1 0-1.76-.95l-.2.35a1 1 0 1 0 1.7 1.06 9 9 0 0 0 .26-.46Zm-3.2 3.4a1 1 0 0 0-1.05-1.71l-.35.2a1 1 0 0 0 .95 1.76 9 9 0 0 0 .46-.26ZM12 3a9 9 0 0 0 0 18v-2a7 7 0 1 1 0-14V3Z",
			clipRule: "evenodd"
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
	l.ViewOnceDownloadIcon = d;
}), 98);
