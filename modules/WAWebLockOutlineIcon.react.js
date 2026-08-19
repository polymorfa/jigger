__d("WAWebLockOutlineIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "lock-outline";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M6.8 22.4c-.5 0-.92-.18-1.27-.53A1.74 1.74 0 0 1 5 20.6V11c0-.5.18-.92.53-1.27.35-.35.77-.53 1.27-.53h.6V6.8c0-1.33.47-2.46 1.4-3.4A4.63 4.63 0 0 1 12.2 2c1.34 0 2.47.47 3.4 1.4.93.94 1.4 2.07 1.4 3.4v2.4h.6c.5 0 .92.18 1.27.53.35.35.53.78.53 1.27v9.6c0 .5-.18.92-.53 1.27-.35.35-.78.53-1.27.53H6.8Zm0-1.8h10.8V11H6.8v9.6Zm5.4-3a1.78 1.78 0 0 0 1.8-1.81c0-.5-.18-.91-.53-1.26a1.75 1.75 0 0 0-1.28-.53c-.5 0-.91.18-1.26.53-.36.35-.53.78-.53 1.28s.18.92.53 1.26c.35.36.78.53 1.28.53Zm-3-8.4h6V6.8c0-.83-.3-1.54-.88-2.13a2.9 2.9 0 0 0-2.12-.87c-.83 0-1.54.3-2.13.88A2.9 2.9 0 0 0 9.2 6.8v2.4Z"
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
	l.LockOutlineIcon = d;
}), 98);
