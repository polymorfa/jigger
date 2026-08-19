__d("WAWebPixLogoIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = ["innerStyles"], s, u, c = u || (u = o("react")), d = "pix-logo";
	function m(t) {
		var n, a, i, l = o("react-compiler-runtime").c(43), u, m, p, _, f, g, h, y, C, b;
		if (l[0] !== t) {
			var v = t.innerStyles, S = babelHelpers.objectWithoutPropertiesLoose(t, e);
			p = v, m = o("WAWebSvgIconHelpers").resolveSvgIcon(S, d, 32, 32, "0 0 32 32"), u = o("WAWebSvgComponentBase").BaseSvgSpan, C = m.otherProps, b = m.iconName, _ = m.viewBox, f = m.height, g = m.width, h = "xMidYMid meet", y = (s || (s = r("stylex")))(m.iconXstyle), l[0] = t, l[1] = u, l[2] = m, l[3] = p, l[4] = _, l[5] = f, l[6] = g, l[7] = h, l[8] = y, l[9] = C, l[10] = b;
		} else u = l[1], m = l[2], p = l[3], _ = l[4], f = l[5], g = l[6], h = l[7], y = l[8], C = l[9], b = l[10];
		var R;
		l[11] !== m.iconName ? (R = c.jsx("title", { children: m.iconName }), l[11] = m.iconName, l[12] = R) : R = l[12];
		var L;
		if (l[13] !== ((n = p) == null ? void 0 : n.background)) {
			var E, k;
			L = (s || (s = r("stylex")))((E = p) == null ? void 0 : E.background), l[13] = (k = p) == null ? void 0 : k.background, l[14] = L;
		} else L = l[14];
		var I;
		l[15] === Symbol.for("react.memo_cache_sentinel") ? (I = { fillOpacity: 1 }, l[15] = I) : I = l[15];
		var T;
		l[16] !== L ? (T = c.jsx("rect", {
			width: 32,
			height: 32,
			fill: "#86A3B3",
			className: L,
			rx: 16,
			style: I
		}), l[16] = L, l[17] = T) : T = l[17];
		var D;
		if (l[18] !== ((a = p) == null ? void 0 : a.primary)) {
			var x, $;
			D = (s || (s = r("stylex")))((x = p) == null ? void 0 : x.primary), l[18] = ($ = p) == null ? void 0 : $.primary, l[19] = D;
		} else D = l[19];
		var P;
		l[20] === Symbol.for("react.memo_cache_sentinel") ? (P = { fillOpacity: 1 }, l[20] = P) : P = l[20];
		var N;
		l[21] !== D ? (N = c.jsx("path", {
			fill: "white",
			d: "M20.03 19.82a2.1 2.1 0 0 1-1.5-.62l-2.16-2.16a.41.41 0 0 0-.56 0l-2.17 2.16a2.1 2.1 0 0 1-1.5.62h-.42l2.74 2.74a2.19 2.19 0 0 0 3.1 0l2.73-2.74h-.26Zm-7.89-7.64a2.1 2.1 0 0 1 1.5.62l2.17 2.16a.4.4 0 0 0 .56 0l2.16-2.16a2.1 2.1 0 0 1 1.5-.62h.26l-2.74-2.74a2.19 2.19 0 0 0-3.1 0l-2.73 2.74h.42Z",
			className: D,
			style: P
		}), l[21] = D, l[22] = N) : N = l[22];
		var M;
		if (l[23] !== ((i = p) == null ? void 0 : i.primary)) {
			var w, A;
			M = (s || (s = r("stylex")))((w = p) == null ? void 0 : w.primary), l[23] = (A = p) == null ? void 0 : A.primary, l[24] = M;
		} else M = l[24];
		var F;
		l[25] === Symbol.for("react.memo_cache_sentinel") ? (F = { fillOpacity: 1 }, l[25] = F) : F = l[25];
		var O;
		l[26] !== M ? (O = c.jsx("path", {
			fill: "white",
			d: "M22.56 14.45 20.9 12.8a.32.32 0 0 1-.12.02h-.75c-.4 0-.77.16-1.05.43l-2.16 2.16a1.04 1.04 0 0 1-1.46 0l-2.17-2.17a1.49 1.49 0 0 0-1.05-.43h-.92c-.04 0-.08 0-.11-.02l-1.67 1.66a2.19 2.19 0 0 0 0 3.1l1.66 1.66a.31.31 0 0 1 .12-.02h.92c.4 0 .77-.16 1.05-.43l2.17-2.17c.39-.4 1.07-.4 1.46 0l2.16 2.16c.28.27.66.43 1.05.43h.75c.04 0 .08 0 .12.02l1.66-1.65a2.19 2.19 0 0 0 0-3.1",
			className: M,
			style: F
		}), l[26] = M, l[27] = O) : O = l[27];
		var B;
		l[28] !== _ || l[29] !== f || l[30] !== T || l[31] !== N || l[32] !== O || l[33] !== g || l[34] !== h || l[35] !== y || l[36] !== R ? (B = c.jsxs("svg", {
			viewBox: _,
			height: f,
			width: g,
			preserveAspectRatio: h,
			className: y,
			fill: "none",
			children: [
				R,
				T,
				N,
				O
			]
		}), l[28] = _, l[29] = f, l[30] = T, l[31] = N, l[32] = O, l[33] = g, l[34] = h, l[35] = y, l[36] = R, l[37] = B) : B = l[37];
		var W;
		return l[38] !== u || l[39] !== B || l[40] !== C || l[41] !== b ? (W = c.jsx(u, babelHelpers.extends({}, C, {
			name: b,
			children: B
		})), l[38] = u, l[39] = B, l[40] = C, l[41] = b, l[42] = W) : W = l[42], W;
	}
	l.PixLogoIcon = m;
}), 98);
