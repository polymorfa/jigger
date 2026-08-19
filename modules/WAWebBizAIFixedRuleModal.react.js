__d("WAWebBizAIFixedRuleModal.react", [
	"fbt",
	"WAWebBizAiRuleCreateMutation",
	"WAWebBizAiRuleUpdateMutation",
	"WAWebBizAiSaveUtils",
	"WAWebFlex.react",
	"WDSBaseRadio.react",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useMemo, m = c.useState, p = "EMOJIS", _ = {
		NEVER: "NEVER",
		OFTEN: "OFTEN"
	}, f = {
		HANDOFF_AND_NOT_SHARE_PRICE: "HANDOFF_AND_NOT_SHARE_PRICE",
		SHARE_PRICE: "SHARE_PRICE"
	}, g = {
		description: {
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			$$css: !0
		},
		radioLabel: {
			paddingInlineStart: "x1iw51ew",
			$$css: !0
		}
	};
	function h(e) {
		var t, n, a = o("react-compiler-runtime").c(54), i = e.onClose, l = e.onSaved, c = e.rule, d = e.ruleType, h = d === p, y = h ? (t = c == null ? void 0 : c.emojisFreq) != null ? t : _.OFTEN : (n = c == null ? void 0 : c.priceSharing) != null ? n : f.SHARE_PRICE, C = h ? _.OFTEN : f.SHARE_PRICE, b = h ? _.NEVER : f.HANDOFF_AND_NOT_SHARE_PRICE, v = m(y), S = v[0], R = v[1], L = m(!1), E = L[0], k = L[1], I = S !== y && !E, T;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (T = s._(
			/*BTDS*/
			""
		), a[0] = T) : T = a[0];
		var D;
		a[1] !== C ? (D = {
			label: T,
			testid: "fixed-rule-yes",
			value: C
		}, a[1] = C, a[2] = D) : D = a[2];
		var x;
		a[3] === Symbol.for("react.memo_cache_sentinel") ? (x = s._(
			/*BTDS*/
			""
		), a[3] = x) : x = a[3];
		var $;
		a[4] !== b ? ($ = {
			label: x,
			testid: "fixed-rule-no",
			value: b
		}, a[4] = b, a[5] = $) : $ = a[5];
		var P;
		a[6] !== D || a[7] !== $ ? (P = [D, $], a[6] = D, a[7] = $, a[8] = P) : P = a[8];
		var N = P, M;
		a[9] !== I || a[10] !== h || a[11] !== i || a[12] !== l || a[13] !== c || a[14] !== d || a[15] !== S ? (M = function() {
			if (I) {
				k(!0);
				var e = h ? { emojis_freq: S } : void 0, t = h ? void 0 : { price_sharing: S };
				o("WAWebBizAiSaveUtils").saveBizAISetting(function() {
					return (c == null ? void 0 : c.id) != null ? o("WAWebBizAiRuleUpdateMutation").updateRule({
						emojis_config: e,
						price_config: t,
						rule_id: c.id
					}) : o("WAWebBizAiRuleCreateMutation").createRule({
						emojis_config: e,
						price_config: t,
						rule_type: d
					});
				}, {
					onError: i,
					onSuccess: l
				});
			}
		}, a[9] = I, a[10] = h, a[11] = i, a[12] = l, a[13] = c, a[14] = d, a[15] = S, a[16] = M) : M = a[16];
		var w = M, A;
		a[17] !== h ? (A = h ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), a[17] = h, a[18] = A) : A = a[18];
		var F = A, O;
		a[19] !== h ? (O = h ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), a[19] = h, a[20] = O) : O = a[20];
		var B = O, W;
		a[21] === Symbol.for("react.memo_cache_sentinel") ? (W = { className: "x1h678fw xcldk2z xv6tirj x1phvje8 x1czfd9k" }, a[21] = W) : W = a[21];
		var q;
		a[22] === Symbol.for("react.memo_cache_sentinel") ? (q = { className: "x6s0dn4 x78zum5 x1qvou4u x1s70e7g x1nhvcw1 x12xbjc7" }, a[22] = q) : q = a[22];
		var U;
		a[23] === Symbol.for("react.memo_cache_sentinel") ? (U = s._(
			/*BTDS*/
			""
		).toString(), a[23] = U) : U = a[23];
		var V;
		a[24] !== i ? (V = u.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcClose.react"),
			onPress: i,
			variant: "borderless",
			size: "small",
			"aria-label": U,
			testid: "fixed-rule-close-btn"
		}), a[24] = i, a[25] = V) : V = a[25];
		var H;
		a[26] !== F ? (H = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			children: F
		}), a[26] = F, a[27] = H) : H = a[27];
		var G;
		a[28] !== V || a[29] !== H ? (G = u.jsxs("div", babelHelpers.extends({}, q, { children: [V, H] })), a[28] = V, a[29] = H, a[30] = G) : G = a[30];
		var z;
		a[31] !== B ? (z = u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			xstyle: g.description,
			children: B
		}), a[31] = B, a[32] = z) : z = a[32];
		var j;
		a[33] !== N || a[34] !== S ? (j = u.jsx(o("WAWebFlex.react").FlexColumn, {
			role: "radiogroup",
			"aria-label": "Rule options",
			children: N.map(function(e) {
				return u.jsxs("label", {
					htmlFor: "rule-" + e.value,
					className: "x6s0dn4 x1ubxc9n xyi3aci xwf5gio x1p453bz x1suzm8a x9f619 x1ypdohk x78zum5 xbktkl8 x16ovd2e x1nzty39 x12xbjc7 x12w63v0 xh8yej3",
					"data-testid": e.testid,
					children: [u.jsx("div", {
						className: "x16ovd2e x1nzty39 x12xbjc7 x12w63v0",
						children: u.jsx(r("WDSBaseRadio.react"), {
							checked: S === e.value,
							id: "rule-" + e.value,
							name: "fixed-rule-option",
							onChange: R,
							value: e.value
						})
					}), u.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Body1",
						xstyle: g.radioLabel,
						children: e.label
					})]
				}, e.value);
			})
		}), a[33] = N, a[34] = S, a[35] = j) : j = a[35];
		var K;
		a[36] === Symbol.for("react.memo_cache_sentinel") ? (K = { className: "x78zum5 x1qvou4u x1s70e7g x13a6bvl x1h678fw" }, a[36] = K) : K = a[36];
		var Q;
		a[37] === Symbol.for("react.memo_cache_sentinel") ? (Q = s._(
			/*BTDS*/
			""
		), a[37] = Q) : Q = a[37];
		var X;
		a[38] !== E || a[39] !== i ? (X = u.jsx(r("WDSButton.react"), {
			variant: "tonal",
			size: "small",
			label: Q,
			onPress: i,
			disabled: E,
			testid: "fixed-rule-cancel-btn"
		}), a[38] = E, a[39] = i, a[40] = X) : X = a[40];
		var Y;
		a[41] === Symbol.for("react.memo_cache_sentinel") ? (Y = s._(
			/*BTDS*/
			""
		), a[41] = Y) : Y = a[41];
		var J = !I, Z;
		a[42] !== w || a[43] !== E || a[44] !== J ? (Z = u.jsx(r("WDSButton.react"), {
			variant: "filled",
			size: "small",
			label: Y,
			onPress: w,
			disabled: J,
			loading: E,
			testid: "fixed-rule-save-btn"
		}), a[42] = w, a[43] = E, a[44] = J, a[45] = Z) : Z = a[45];
		var ee;
		a[46] !== X || a[47] !== Z ? (ee = u.jsxs("div", babelHelpers.extends({}, K, { children: [X, Z] })), a[46] = X, a[47] = Z, a[48] = ee) : ee = a[48];
		var te;
		return a[49] !== G || a[50] !== z || a[51] !== j || a[52] !== ee ? (te = u.jsxs("div", babelHelpers.extends({}, W, {
			"data-testid": "fixed-rule-modal",
			children: [
				G,
				z,
				j,
				ee
			]
		})), a[49] = G, a[50] = z, a[51] = j, a[52] = ee, a[53] = te) : te = a[53], te;
	}
	l.default = h;
}), 226);
