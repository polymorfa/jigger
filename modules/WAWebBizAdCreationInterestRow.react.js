__d("WAWebBizAdCreationInterestRow.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebUnstyledButton.react",
	"WDSBaseCheckbox.react",
	"WDSIconIcChevronRight.react",
	"WDSText.react",
	"isStringNullOrEmpty",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useCallback, d = {
		root: {
			alignItems: "x6s0dn4",
			display: "x78zum5",
			paddingTop: "x1p57kb1",
			paddingBottom: "xvpt6g3",
			width: "xh8yej3",
			$$css: !0
		},
		rootCompact: {
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			$$css: !0
		}
	};
	function m(e) {
		return e === "interests" ? s._(
			/*BTDS*/
			""
		) : e === "behaviors" ? s._(
			/*BTDS*/
			""
		) : e === "life_events" || e === "education_statuses" || e === "education_schools" || e === "education_majors" || e === "college_years" || e === "work_employers" || e === "work_positions" || e === "relationship_statuses" || e === "interested_in" || e === "industries" || e === "income" || e === "family_statuses" ? s._(
			/*BTDS*/
			""
		) : null;
	}
	function p(e) {
		var t, n, a, i, l = o("react-compiler-runtime").c(35), s = e.interestNode, c = e.isSelected, p = e.onCategoryClick, _ = e.onInterestToggle, f = e.showTargetType, g = c === void 0 ? !1 : c, h = f === void 0 ? !1 : f, y;
		l[0] !== s || l[1] !== p ? (y = function() {
			p == null || p(s);
		}, l[0] = s, l[1] = p, l[2] = y) : y = l[2];
		var C = y, b;
		l[3] !== s || l[4] !== _ ? (b = function() {
			_ == null || _(s);
		}, l[3] = s, l[4] = _, l[5] = b) : b = l[5];
		var v = b, S = (t = s.node) == null ? void 0 : t.id;
		if (!r("isStringNullOrEmpty")(S)) {
			var R, L, E, k, I = "Toggle " + ((R = (L = s.node) == null ? void 0 : L.name) != null ? R : "interest"), T = h ? d.rootCompact : null, D;
			l[6] !== T ? (D = [d.root, T], l[6] = T, l[7] = D) : D = l[7];
			var x = (E = s.node) == null ? void 0 : E.name, $;
			l[8] !== x ? ($ = u.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				maxLines: 1,
				type: "Body1",
				children: x
			}), l[8] = x, l[9] = $) : $ = l[9];
			var P;
			if (l[10] !== ((k = s.node) == null ? void 0 : k.target_type) || l[11] !== h) {
				var N, M;
				P = h ? u.jsx(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					testid: "biz_native_ads_interest_item_target_type",
					type: "Body2",
					children: m((N = s.node) == null ? void 0 : N.target_type)
				}) : null, l[10] = (M = s.node) == null ? void 0 : M.target_type, l[11] = h, l[12] = P;
			} else P = l[12];
			var w;
			l[13] !== P || l[14] !== $ ? (w = u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "start",
				gap: 2,
				grow: 1,
				children: [$, P]
			}), l[13] = P, l[14] = $, l[15] = w) : w = l[15];
			var A;
			l[16] !== g ? (A = u.jsx(r("WDSBaseCheckbox.react"), {
				shape: "circle",
				value: g
			}), l[16] = g, l[17] = A) : A = l[17];
			var F;
			l[18] !== w || l[19] !== A ? (F = u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				gap: 12,
				grow: 1,
				justify: "all",
				children: [w, A]
			}), l[18] = w, l[19] = A, l[20] = F) : F = l[20];
			var O;
			return l[21] !== v || l[22] !== F || l[23] !== I || l[24] !== D ? (O = u.jsx(r("WAWebUnstyledButton.react"), {
				"aria-label": I,
				onClick: v,
				testid: "biz_native_ads_interest_item",
				xstyle: D,
				children: F
			}), l[21] = v, l[22] = F, l[23] = I, l[24] = D, l[25] = O) : O = l[25], O;
		}
		var B = "View " + ((n = (a = s.node) == null ? void 0 : a.name) != null ? n : "category") + " category", W = (i = s.node) == null ? void 0 : i.name, q;
		l[26] !== W ? (q = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			maxLines: 1,
			type: "Body1",
			children: W
		}), l[26] = W, l[27] = q) : q = l[27];
		var U;
		l[28] === Symbol.for("react.memo_cache_sentinel") ? (U = u.jsx(r("WDSIconIcChevronRight.react"), {
			height: 20,
			width: 20
		}), l[28] = U) : U = l[28];
		var V;
		l[29] !== q ? (V = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 8,
			grow: 1,
			justify: "all",
			children: [q, U]
		}), l[29] = q, l[30] = V) : V = l[30];
		var H;
		return l[31] !== C || l[32] !== B || l[33] !== V ? (H = u.jsx(r("WAWebUnstyledButton.react"), {
			"aria-label": B,
			onClick: C,
			testid: "biz_native_ads_interest_category_item",
			xstyle: d.root,
			children: V
		}), l[31] = C, l[32] = B, l[33] = V, l[34] = H) : H = l[34], H;
	}
	l.default = p;
}), 226);
