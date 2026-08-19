__d("WAWebAlertPhoneIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "alert-phone";
	function d(t) {
		var n = o("react-compiler-runtime").c(26), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 48, 48, "0 0 48 48"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			d: "M24.15 2a22.16 22.16 0 1 0 .02 44.32A22.16 22.16 0 0 0 24.15 2z"
		}), y = u.jsx("path", {
			fill: "#FFBC00",
			d: "M19.35 30.78h2.44v-6.16h-2.45c0 2.05-.01 4.1.01 6.16zm-3.47-8.68 1.92-1.93 1.93 1.93.97-.96-1.93-1.93 1.93-1.93-.97-.96-1.93 1.93-1.92-1.93-.97.96 1.93 1.93-1.93 1.93.97.96zm-.25 5v3.67h2.47v-3.69c-.82 0-1.65-.03-2.47.02zm14.79-9.87v13.55l2.47-.01V17.25c-.82-.05-1.64-.01-2.47-.02zm-3.7 2.9v10.65h2.45c.03-3.69 0-7.38.02-11.07-.81-.05-1.63 0-2.44-.03l-.03.45zm-3.67 2.02c-.02.15-.02.31-.02.46v8.16h2.46V27.9c-.01-1.91.03-3.84-.01-5.75h-2.43z",
			className: "icon-shape"
		}), n[12] = h, n[13] = y) : (h = n[12], y = n[13]);
		var C;
		n[14] !== l || n[15] !== s || n[16] !== d || n[17] !== m || n[18] !== p || n[19] !== g ? (C = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			version: "1.1",
			x: "0px",
			y: "0px",
			enableBackground: "new 0 0 48 48",
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
	l.AlertPhoneIcon = d;
}), 98);
