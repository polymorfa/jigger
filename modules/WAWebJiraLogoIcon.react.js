__d("WAWebJiraLogoIcon.react", [
	"WAWebSvgComponentBase",
	"WAWebSvgIconHelpers",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "jira-logo";
	function d(t) {
		var n = o("react-compiler-runtime").c(30), a, i, l, s, d, m, p, _, f;
		n[0] !== t ? (i = o("WAWebSvgIconHelpers").resolveSvgIcon(t, c, 2500, 2500, "0 -30.632 255.324 285.956"), a = o("WAWebSvgComponentBase").BaseSvgSpan, _ = i.otherProps, f = i.iconName, l = i.viewBox, s = i.height, d = i.width, m = "xMidYMid meet", p = (e || (e = r("stylex")))(i.iconXstyle), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = m, n[7] = p, n[8] = _, n[9] = f) : (a = n[1], i = n[2], l = n[3], s = n[4], d = n[5], m = n[6], p = n[7], _ = n[8], f = n[9]);
		var g;
		n[10] !== i.iconName ? (g = u.jsx("title", { children: i.iconName }), n[10] = i.iconName, n[11] = g) : g = n[11];
		var h, y, C, b, v, S;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (v = u.jsxs("linearGradient", {
			id: "WAWebJiraLogoIcon__a",
			children: [u.jsx("stop", {
				offset: .18,
				stopColor: "#0052cc"
			}), u.jsx("stop", {
				offset: 1,
				stopColor: "#2684ff"
			})]
		}), S = u.jsx("linearGradient", {
			xlinkHref: "#WAWebJiraLogoIcon__a",
			id: "WAWebJiraLogoIcon__b",
			x1: "98.03%",
			x2: "58.89%",
			y1: ".16%",
			y2: "40.77%"
		}), h = u.jsx("linearGradient", {
			xlinkHref: "#WAWebJiraLogoIcon__a",
			id: "WAWebJiraLogoIcon__c",
			x1: "100.67%",
			x2: "55.4%",
			y1: ".46%",
			y2: "44.73%"
		}), y = u.jsx("path", {
			fill: "#2684ff",
			d: "M244.66 0H121.7a55.5 55.5 0 0 0 55.5 55.5h22.65v21.87a55.5 55.5 0 0 0 55.46 55.47V10.67c0-5.9-4.77-10.67-10.66-10.67"
		}), C = u.jsx("path", {
			fill: "url(#WAWebJiraLogoIcon__b)",
			d: "M183.82 61.26H60.87a55.5 55.5 0 0 0 55.47 55.47h22.65v21.94a55.5 55.5 0 0 0 55.5 55.43V71.93c0-5.9-4.78-10.67-10.67-10.67z"
		}), b = u.jsx("path", {
			fill: "url(#WAWebJiraLogoIcon__c)",
			d: "M122.95 122.49H0a55.5 55.5 0 0 0 55.5 55.5h22.72v21.87a55.5 55.5 0 0 0 55.4 55.46V133.16c0-5.9-4.78-10.67-10.67-10.67"
		}), n[12] = h, n[13] = y, n[14] = C, n[15] = b, n[16] = v, n[17] = S) : (h = n[12], y = n[13], C = n[14], b = n[15], v = n[16], S = n[17]);
		var R;
		n[18] !== l || n[19] !== s || n[20] !== d || n[21] !== m || n[22] !== p || n[23] !== g ? (R = u.jsxs("svg", {
			viewBox: l,
			height: s,
			width: d,
			preserveAspectRatio: m,
			className: p,
			children: [
				g,
				v,
				S,
				h,
				y,
				C,
				b
			]
		}), n[18] = l, n[19] = s, n[20] = d, n[21] = m, n[22] = p, n[23] = g, n[24] = R) : R = n[24];
		var L;
		return n[25] !== a || n[26] !== R || n[27] !== _ || n[28] !== f ? (L = u.jsx(a, babelHelpers.extends({}, _, {
			name: f,
			children: R
		})), n[25] = a, n[26] = R, n[27] = _, n[28] = f, n[29] = L) : L = n[29], L;
	}
	l.JiraLogoIcon = d;
}), 98);
