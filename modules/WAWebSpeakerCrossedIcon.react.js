__d("WAWebSpeakerCrossedIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "speaker-crossed";
	function d(t) {
		var n = o("react-compiler-runtime").c(26), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 24, 24, "0 0 24 24"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			d: "M8.17 8.44c0-.12.06-.23.17-.29l4.02-2.43c.41-.25.96.03.96.5v9.77c0 .45-.53.74-.94.5l-4.04-2.3a.34.34 0 0 1-.17-.29V8.44ZM2 10.2a2 2 0 0 1 2.06-1.95H6.8c.18 0 .33.15.33.34v5.17c0 .19-.15.34-.33.34h-.6l.94 3.35a.53.53 0 0 1-.38.66l-.99.25c-.3.07-.6-.1-.68-.4l-1.07-3.79A.55.55 0 0 1 4 14.1a2 2 0 0 1-2-1.95V10.2Z",
			clipRule: "evenodd"
		}), y = u.jsx("path", {
			fill: "currentColor",
			stroke: "currentColor",
			strokeWidth: .25,
			d: "m15.91 13.21-.09.1.1.08 1.05 1.06.1.1.08-.1 2.03-2.03 2.03 2.03.1.1.08-.1 1.06-1.06.1-.09-.1-.09-2.03-2.03 2.03-2.03.1-.09-.1-.09-1.06-1.06-.09-.09-.09.1-2.03 2.02-2.03-2.03-.09-.09-.09.1-1.06 1.05-.09.1.1.08 2.02 2.03-2.03 2.03Z"
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
	l.SpeakerCrossedIcon = d;
}), 98);
