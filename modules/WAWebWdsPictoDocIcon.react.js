__d("WAWebWdsPictoDocIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "wds-picto-doc";
	function d(t) {
		var n = o("react-compiler-runtime").c(27), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 88, 88, "0 0 88 88"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			d: "M49 10.9H24.3c-2 0-3.8.7-5.2 2.2a7.26 7.26 0 0 0-2.2 5.2v51.4c0 2 .7 3.8 2.2 5.2 1.4 1.4 3.2 2.2 5.2 2.2h39.4c2 0 3.8-.7 5.2-2.2s2.2-3.2 2.2-5.2V33z",
			style: {
				fill: "#25d366",
				stroke: "#111b21",
				strokeWidth: 1.5
			}
		}), n[12] = h) : h = n[12];
		var y;
		n[13] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsx("path", {
			d: "M49 10.9v14.8c0 4 3.3 7.3 7.3 7.3h14.1",
			style: {
				fill: "none",
				stroke: "#111b21",
				strokeWidth: 1.5
			}
		}), n[13] = y) : y = n[13];
		var C;
		n[14] === Symbol.for("react.memo_cache_sentinel") ? (C = u.jsx("path", {
			d: "M29.3 29.3h9.8M29.3 44H59M29.3 58.7H59",
			style: {
				fill: "none",
				stroke: "#111b21",
				strokeWidth: 1.5,
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}
		}), n[14] = C) : C = n[14];
		var b;
		n[15] !== l || n[16] !== s || n[17] !== d || n[18] !== m || n[19] !== p || n[20] !== g ? (b = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			children: [
				g,
				h,
				y,
				C
			]
		}), n[15] = l, n[16] = s, n[17] = d, n[18] = m, n[19] = p, n[20] = g, n[21] = b) : b = n[21];
		var v;
		return n[22] !== a || n[23] !== b || n[24] !== _ || n[25] !== f ? (v = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: b
		})), n[22] = a, n[23] = b, n[24] = _, n[25] = f, n[26] = v) : v = n[26], v;
	}
	l.WdsPictoDocIcon = d;
}), 98);
