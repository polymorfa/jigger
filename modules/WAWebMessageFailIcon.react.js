__d("WAWebMessageFailIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "message-fail";
	function d(t) {
		var n = o("react-compiler-runtime").c(25), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 20, 18, "0 0 18 20"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			d: "M3.5 14.74v-7.9L2.11 4.5h12.63c.42 0 .76.34.76.76v9.48c0 .42-.34.76-.76.76H4.26a.76.76 0 0 1-.76-.76ZM2 7.24.25 4.3A.86.86 0 0 1 .97 3h13.77A2.26 2.26 0 0 1 17 5.26v9.48A2.26 2.26 0 0 1 14.74 17H4.26A2.26 2.26 0 0 1 2 14.74v-7.5Zm9.27 5.58L9.5 11.06l-1.77 1.77a.73.73 0 0 1-.53.22.72.72 0 0 1-.53-.22.72.72 0 0 1-.22-.53c0-.2.07-.38.22-.53L8.44 10 6.67 8.23a.73.73 0 0 1-.23-.53c0-.2.08-.38.23-.53a.72.72 0 0 1 .53-.22c.2 0 .38.07.53.22L9.5 8.94l1.77-1.76a.72.72 0 0 1 .53-.23c.2 0 .38.08.53.22.15.15.22.33.22.54 0 .2-.08.38-.23.53L10.56 10l1.77 1.77c.15.15.22.32.22.53 0 .2-.07.38-.22.52a.73.73 0 0 1-.53.23.72.72 0 0 1-.53-.23Z",
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
	l.MessageFailIcon = d;
}), 98);
