__d("WAWebWdsIcStickerIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-ic-sticker";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			d: "M12 22a6.97 6.97 0 0 0 4.82-2.02l3.03-3A7.27 7.27 0 0 0 22 11.8V9.27A7.27 7.27 0 0 0 14.73 2H9.27A7.27 7.27 0 0 0 2 9.27v5.46A7.27 7.27 0 0 0 9.27 22H12ZM9.27 4h5.46A5.27 5.27 0 0 1 20 9.08h-.01v2.04c0 .5-.4.91-.9.91h-2.27A4.81 4.81 0 0 0 12 16.85l.02 2.26a.9.9 0 0 1-.68.88H9.27A5.27 5.27 0 0 1 4 14.73V9.27A5.27 5.27 0 0 1 9.27 4Zm4.7 15.55c.03-.14.04-.29.04-.44l-.02-2.26a2.8 2.8 0 0 1 2.82-2.83l2.26.01c.16 0 .3-.01.46-.03-.26.57-.63 1.1-1.09 1.56l-3.03 3c-.42.42-.9.75-1.44 1Z",
			clipRule: "evenodd"
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
	l.WdsIcStickerIcon = d;
}), 98);
