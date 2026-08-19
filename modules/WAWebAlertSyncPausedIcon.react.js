__d("WAWebAlertSyncPausedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "alert-sync-paused";
	function d(t) {
		var n = o("react-compiler-runtime").c(27), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 21, 20, "0 0 20 21"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y, C;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsx("path", {
			fill: "#FFD279",
			fillRule: "evenodd",
			d: "M10 .5a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 11a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1 1 1 0 0 1 1 1v4a1 1 0 0 1-1 1Zm-1 2v2h2v-2H9Z",
			clipRule: "evenodd"
		}), C = u.jsx("path", {
			fill: "#667781",
			d: "M9 13.5v2h2v-2H9Z"
		}), h = u.jsx("path", {
			fill: "#54656F",
			d: "M10 11.5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1 1 1 0 0 1 1 1v4a1 1 0 0 1-1 1Z"
		}), n[12] = h, n[13] = y, n[14] = C) : (h = n[12], y = n[13], C = n[14]);
		var b;
		n[15] !== l || n[16] !== s || n[17] !== d || n[18] !== m || n[19] !== p || n[20] !== g ? (b = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			fill: "none",
			children: [
				g,
				y,
				C,
				h
			]
		}), n[15] = l, n[16] = s, n[17] = d, n[18] = m, n[19] = p, n[20] = g, n[21] = b) : b = n[21];
		var v;
		return n[22] !== a || n[23] !== b || n[24] !== _ || n[25] !== f ? (v = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: b
		})), n[22] = a, n[23] = b, n[24] = _, n[25] = f, n[26] = v) : v = n[26], v;
	}
	l.AlertSyncPausedIcon = d;
}), 98);
