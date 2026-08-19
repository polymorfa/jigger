__d("WAWebBizAICustomRuleModal.react", [
	"fbt",
	"WAWebBizAiRuleCreateMutation",
	"WAWebBizAiRuleUpdateMutation",
	"WAWebBizAiSaveUtils",
	"WAWebWDSRichTextField.react",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useRef, p = c.useState, _ = 1e4, f = { suggestionsHeader: {
		paddingBottom: "x12xbjc7",
		paddingTop: "x1h678fw",
		paddingInlineStart: "x12w63v0",
		$$css: !0
	} }, g = [
		s._(
			/*BTDS*/
			""
		),
		s._(
			/*BTDS*/
			""
		),
		s._(
			/*BTDS*/
			""
		)
	];
	function h(e) {
		var t, n, a = o("react-compiler-runtime").c(46), i = e.onClose, l = e.onSaved, c = e.rule, d = c != null && c.id != null, h = p((t = c == null ? void 0 : c.customRule) != null ? t : ""), y = h[0], C = h[1], b = p(!1), v = b[0], S = b[1], R = m(null), L;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (L = function(t) {
			var e;
			C(t), (e = R.current) == null || e.setTextContent(t);
		}, a[0] = L) : L = a[0];
		var E = L, k;
		if (a[1] !== d || a[2] !== v || a[3] !== (c == null ? void 0 : c.customRule) || a[4] !== y) {
			var I;
			k = y.trim().length > 0 && y.length <= _ && !v && (!d || y !== ((I = c == null ? void 0 : c.customRule) != null ? I : "")), a[1] = d, a[2] = v, a[3] = c == null ? void 0 : c.customRule, a[4] = y, a[5] = k;
		} else k = a[5];
		var T = k, D;
		a[6] !== T || a[7] !== i || a[8] !== l || a[9] !== (c == null ? void 0 : c.id) || a[10] !== y ? (D = function() {
			if (T) {
				S(!0);
				var e = c == null ? void 0 : c.id;
				o("WAWebBizAiSaveUtils").saveBizAISetting(function() {
					return e != null ? o("WAWebBizAiRuleUpdateMutation").updateRule({
						custom_rule: y.trim(),
						rule_id: e
					}) : o("WAWebBizAiRuleCreateMutation").createRule({
						custom_rule: y.trim(),
						rule_type: "CUSTOM_RULE"
					});
				}, {
					onError: i,
					onSuccess: l
				});
			}
		}, a[6] = T, a[7] = i, a[8] = l, a[9] = c == null ? void 0 : c.id, a[10] = y, a[11] = D) : D = a[11], c == null || c.id;
		var x = D, $;
		a[12] === Symbol.for("react.memo_cache_sentinel") ? ($ = { className: "x1h678fw xcldk2z xv6tirj x1phvje8 x1czfd9k" }, a[12] = $) : $ = a[12];
		var P;
		a[13] === Symbol.for("react.memo_cache_sentinel") ? (P = { className: "x6s0dn4 x78zum5 x1qvou4u x1s70e7g x1nhvcw1 x12xbjc7" }, a[13] = P) : P = a[13];
		var N;
		a[14] === Symbol.for("react.memo_cache_sentinel") ? (N = s._(
			/*BTDS*/
			""
		).toString(), a[14] = N) : N = a[14];
		var M;
		a[15] !== i ? (M = u.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcClose.react"),
			onPress: i,
			variant: "borderless",
			size: "small",
			"aria-label": N,
			testid: "custom-rule-close-btn"
		}), a[15] = i, a[16] = M) : M = a[16];
		var w;
		a[17] !== d ? (w = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			children: d ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			)
		}), a[17] = d, a[18] = w) : w = a[18];
		var A;
		a[19] !== M || a[20] !== w ? (A = u.jsxs("div", babelHelpers.extends({}, P, { children: [M, w] })), a[19] = M, a[20] = w, a[21] = A) : A = a[21];
		var F, O, B;
		a[22] === Symbol.for("react.memo_cache_sentinel") ? (F = s._(
			/*BTDS*/
			""
		), O = s._(
			/*BTDS*/
			""
		), B = s._(
			/*BTDS*/
			""
		), a[22] = F, a[23] = O, a[24] = B) : (F = a[22], O = a[23], B = a[24]);
		var W = (n = c == null ? void 0 : c.customRule) != null ? n : "", q;
		a[25] !== W ? (q = u.jsx(r("WAWebWDSRichTextField.react"), {
			ref: R,
			bottomText: F,
			label: O,
			placeholder: B,
			rows: 4,
			initialText: W,
			onValueChange: C,
			maxLength: _,
			maxCharacterCount: _,
			testid: "biz_custom_rule_textfield"
		}), a[25] = W, a[26] = q) : q = a[26];
		var U, V, H;
		a[27] === Symbol.for("react.memo_cache_sentinel") ? (U = u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			xstyle: f.suggestionsHeader,
			children: s._(
				/*BTDS*/
				""
			)
		}), V = g.map(function(e, t) {
			return u.jsx("div", {
				className: "xefnzgg",
				children: u.jsx(r("WDSButton.react"), {
					variant: "tonal",
					size: "small",
					label: e,
					onPress: function() {
						return E(String(e));
					},
					testid: "suggestion-" + t
				})
			}, t);
		}), H = { className: "x78zum5 x1qvou4u x1s70e7g x13a6bvl x1h678fw" }, a[27] = U, a[28] = V, a[29] = H) : (U = a[27], V = a[28], H = a[29]);
		var G;
		a[30] === Symbol.for("react.memo_cache_sentinel") ? (G = s._(
			/*BTDS*/
			""
		), a[30] = G) : G = a[30];
		var z;
		a[31] !== v || a[32] !== i ? (z = u.jsx(r("WDSButton.react"), {
			variant: "tonal",
			size: "small",
			label: G,
			onPress: i,
			disabled: v,
			testid: "custom-rule-cancel-btn"
		}), a[31] = v, a[32] = i, a[33] = z) : z = a[33];
		var j;
		a[34] === Symbol.for("react.memo_cache_sentinel") ? (j = s._(
			/*BTDS*/
			""
		), a[34] = j) : j = a[34];
		var K = !T, Q;
		a[35] !== x || a[36] !== v || a[37] !== K ? (Q = u.jsx(r("WDSButton.react"), {
			variant: "filled",
			size: "small",
			label: j,
			onPress: x,
			disabled: K,
			loading: v,
			testid: "custom-rule-save-btn"
		}), a[35] = x, a[36] = v, a[37] = K, a[38] = Q) : Q = a[38];
		var X;
		a[39] !== z || a[40] !== Q ? (X = u.jsxs("div", babelHelpers.extends({}, H, { children: [z, Q] })), a[39] = z, a[40] = Q, a[41] = X) : X = a[41];
		var Y;
		return a[42] !== q || a[43] !== X || a[44] !== A ? (Y = u.jsxs("div", babelHelpers.extends({}, $, {
			"data-testid": "custom-rule-modal",
			children: [
				A,
				q,
				U,
				V,
				X
			]
		})), a[42] = q, a[43] = X, a[44] = A, a[45] = Y) : Y = a[45], Y;
	}
	l.default = h;
}), 226);
