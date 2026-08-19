__d("WAWebBizBroadcastProSuggestedBudgetModal.react", [
	"WAWebBizBroadcastProBudgetStrings",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WDSButton.react",
	"WDSText.react",
	"WDSTextField.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useState, m = {
		body: {
			rowGap: "x1f0uite",
			$$css: !0
		},
		footer: {
			justifyContent: "x13a6bvl",
			$$css: !0
		}
	};
	function p(e) {
		var t = o("react-compiler-runtime").c(31), n = e.currencySymbol, a = e.maxBid, i = e.onApply, l = e.onClose, u = d(""), c = u[0], p = u[1], _;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (_ = function(t) {
			(t === "" || /^\d+$/.test(t)) && p(t);
		}, t[0] = _) : _ = t[0];
		var f = _, g;
		e: {
			if (c === "" || a === "") {
				g = "";
				break e;
			}
			var h = Number(c), y = Number(a);
			if (!Number.isFinite(h) || !Number.isFinite(y) || h <= 0) {
				g = "";
				break e;
			}
			var C = Math.round(h * y * 100) / 100, b;
			t[1] !== C ? (b = C.toFixed(2), t[1] = C, t[2] = b) : b = t[2], g = b;
		}
		var v = g, S;
		t[3] !== v ? (S = v !== "" ? "" + Number(v).toLocaleString(void 0, {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2
		}) : "", t[3] = v, t[4] = S) : S = t[4];
		var R = S, L;
		t[5] !== i || t[6] !== l || t[7] !== v ? (L = function() {
			v !== "" && (i(v), l());
		}, t[5] = i, t[6] = l, t[7] = v, t[8] = L) : L = t[8];
		var E = L, k;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (k = o("WAWebBizBroadcastProBudgetStrings").getSuggestedBudgetLabel(), t[9] = k) : k = t[9];
		var I;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (I = o("WAWebBizBroadcastProBudgetStrings").getApplySuggestedBudgetLabel(), t[10] = I) : I = t[10];
		var T = v === "" || Number(v) === 0, D;
		t[11] !== E || t[12] !== T ? (D = s.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: m.footer,
			children: s.jsx(r("WDSButton.react"), {
				label: I,
				onPress: E,
				testid: "bb_pro_apply_suggested_budget_button",
				variant: "filled",
				disabled: T
			})
		}), t[11] = E, t[12] = T, t[13] = D) : D = t[13];
		var x;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (x = s.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: o("WAWebBizBroadcastProBudgetStrings").getSuggestedBudgetDescription()
		}), t[14] = x) : x = t[14];
		var $;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? ($ = s.jsx(r("WDSText.react"), {
			type: "Body1Emphasized",
			colorName: "contentDefault",
			children: o("WAWebBizBroadcastProBudgetStrings").getEstimatedPeopleLabel()
		}), t[15] = $) : $ = t[15];
		var P;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (P = o("WAWebBizBroadcastProBudgetStrings").getEstimatedPeopleLabel(), t[16] = P) : P = t[16];
		var N;
		t[17] !== c ? (N = s.jsx(r("WDSTextField.react"), {
			testid: "bb_pro_estimated_people_input",
			label: P,
			floatingLabel: !1,
			value: c,
			onValueChange: f
		}), t[17] = c, t[18] = N) : N = t[18];
		var M;
		t[19] === Symbol.for("react.memo_cache_sentinel") ? (M = s.jsx(r("WDSText.react"), {
			type: "Body1Emphasized",
			colorName: "contentDefault",
			children: o("WAWebBizBroadcastProBudgetStrings").getSuggestedBudgetResultLabel()
		}), t[19] = M) : M = t[19];
		var w;
		t[20] === Symbol.for("react.memo_cache_sentinel") ? (w = o("WAWebBizBroadcastProBudgetStrings").getSuggestedBudgetResultLabel(), t[20] = w) : w = t[20];
		var A;
		t[21] !== n || t[22] !== R ? (A = s.jsx(r("WDSTextField.react"), {
			testid: "bb_pro_suggested_budget_display",
			label: w,
			floatingLabel: !1,
			value: R,
			prefix: n,
			readOnly: !0
		}), t[21] = n, t[22] = R, t[23] = A) : A = t[23];
		var F;
		t[24] !== N || t[25] !== A ? (F = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: m.body,
			children: [
				x,
				$,
				N,
				M,
				A
			]
		}), t[24] = N, t[25] = A, t[26] = F) : F = t[26];
		var O;
		return t[27] !== l || t[28] !== F || t[29] !== D ? (O = s.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Small,
			title: k,
			onOverlayClick: l,
			testid: "bb_pro_suggested_budget_modal",
			actions: D,
			children: F
		}), t[27] = l, t[28] = F, t[29] = D, t[30] = O) : O = t[30], O;
	}
	l.default = p;
}), 98);
