__d("WAWebGoogleBusinessHours.react", [
	"WAWebBusinessLogEvents",
	"WAWebDrawerContext",
	"WAWebFlex.react",
	"WAWebGoogleBusinessHoursUtils",
	"WAWebProductCatalogContext",
	"WAWebSmbUtils",
	"WAWebUnstyledButton.react",
	"WDSIconIcExpandMore.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useContext, d = u.useState, m = 40, p = {
		button: {
			alignItems: "x6s0dn4",
			boxSizing: "x9f619",
			display: "x78zum5",
			minHeight: "xvkrg5o",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineEnd: "x1nzty39",
			paddingInlineStart: "x1phvje8",
			textAlign: "x1yc453h",
			width: "xh8yej3",
			$$css: !0
		},
		row: {
			columnGap: "x1s70e7g",
			width: "xh8yej3",
			$$css: !0
		},
		days: {
			rowGap: "x1qvou4u",
			$$css: !0
		},
		dayRow: {
			columnGap: "x1s70e7g",
			width: "xh8yej3",
			$$css: !0
		},
		iconColumn: {
			color: "xhslqc4",
			width: "x100vrsf",
			$$css: !0
		},
		iconFlipped: {
			transform: "xtjevij",
			$$css: !0
		}
	};
	function _(e) {
		var t = o("react-compiler-runtime").c(52), n = e.hasCoverPhoto, a = e.iconColumnXstyle, i = e.isProfileLinked, l = e.weekdayHours, u = e.xstyle, m = c(o("WAWebDrawerContext").DrawerContext), _;
		t[0] !== m ? (_ = o("WAWebProductCatalogContext").getProductCatalogSessionId(m), t[0] = m, t[1] = _) : _ = t[1];
		var h = _, y = d(!0), C = y[0], b = y[1];
		if (l == null || l.length === 0) return null;
		var v, S, R, L, E, k, I, T, D, x, $, P;
		if (t[2] !== h || t[3] !== n || t[4] !== C || t[5] !== i || t[6] !== l || t[7] !== u) {
			var N = o("WAWebSmbUtils").getBusinessHours(o("WAWebGoogleBusinessHoursUtils").googleWeekdayHoursToBusinessHours(l)), M = C ? N.filter(g) : N;
			R = r("WAWebUnstyledButton.react"), $ = !C, t[20] !== u ? (P = [p.button, u], t[20] = u, t[21] = P) : P = t[21], t[22] !== h || t[23] !== n || t[24] !== C || t[25] !== i ? (L = function() {
				o("WAWebBusinessLogEvents").logHoursClick(h, i, !!n), b(!C);
			}, t[22] = h, t[23] = n, t[24] = C, t[25] = i, t[26] = L) : L = t[26], E = "biz_google_profile_hours_button", S = o("WAWebFlex.react").FlexRow, D = "start", x = p.row, v = o("WAWebFlex.react").FlexColumn, k = 1, I = p.days, T = M.map(f), t[2] = h, t[3] = n, t[4] = C, t[5] = i, t[6] = l, t[7] = u, t[8] = v, t[9] = S, t[10] = R, t[11] = L, t[12] = E, t[13] = k, t[14] = I, t[15] = T, t[16] = D, t[17] = x, t[18] = $, t[19] = P;
		} else v = t[8], S = t[9], R = t[10], L = t[11], E = t[12], k = t[13], I = t[14], T = t[15], D = t[16], x = t[17], $ = t[18], P = t[19];
		var w;
		t[27] !== v || t[28] !== k || t[29] !== I || t[30] !== T ? (w = s.jsx(v, {
			grow: k,
			xstyle: I,
			children: T
		}), t[27] = v, t[28] = k, t[29] = I, t[30] = T, t[31] = w) : w = t[31];
		var A;
		t[32] !== a ? (A = [p.iconColumn, a], t[32] = a, t[33] = A) : A = t[33];
		var F = !C && p.iconFlipped, O;
		t[34] !== F ? (O = s.jsx(r("WDSIconIcExpandMore.react"), { iconXstyle: [F] }), t[34] = F, t[35] = O) : O = t[35];
		var B;
		t[36] !== A || t[37] !== O ? (B = s.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: A,
			children: O
		}), t[36] = A, t[37] = O, t[38] = B) : B = t[38];
		var W;
		t[39] !== S || t[40] !== w || t[41] !== B || t[42] !== D || t[43] !== x ? (W = s.jsxs(S, {
			align: D,
			xstyle: x,
			children: [w, B]
		}), t[39] = S, t[40] = w, t[41] = B, t[42] = D, t[43] = x, t[44] = W) : W = t[44];
		var q;
		return t[45] !== R || t[46] !== L || t[47] !== E || t[48] !== W || t[49] !== $ || t[50] !== P ? (q = s.jsx(R, {
			"aria-expanded": $,
			xstyle: P,
			onClick: L,
			testid: E,
			children: W
		}), t[45] = R, t[46] = L, t[47] = E, t[48] = W, t[49] = $, t[50] = P, t[51] = q) : q = t[51], q;
	}
	function f(e) {
		var t = e.day, n = e.first, a = e.hours, i = n ? "Body1" : "Body2";
		return s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "all",
			xstyle: p.dayRow,
			children: [s.jsx(r("WDSText.react"), {
				type: i,
				colorName: "contentDefault",
				dir: "auto",
				children: t
			}), s.jsx(r("WDSText.react"), {
				type: i,
				colorName: "contentDefault",
				dir: "auto",
				children: a
			})]
		}, t);
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		return e.first;
	}
	l.default = _;
}), 98);
