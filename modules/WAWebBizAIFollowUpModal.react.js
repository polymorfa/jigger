__d("WAWebBizAIFollowUpModal.react", [
	"fbt",
	"WAWebBizAiReengagementUpdateMutation",
	"WAWebBizAiSaveUtils",
	"WAWebFlex.react",
	"WDSBaseRadio.react",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"WDSTextField.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useMemo, p = c.useState, _ = 15, f = 1, g = 23, h = {
		description: {
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			$$css: !0
		},
		radioLabel: {
			paddingInlineStart: "x1iw51ew",
			$$css: !0
		},
		sectionLabel: {
			paddingBottom: "x1nbhmlj",
			paddingTop: "x1h678fw",
			$$css: !0
		}
	};
	function y(e) {
		var t, n = o("react-compiler-runtime").c(44), a = e.onClose, i = e.onSaved, l = e.rule, c = (l == null ? void 0 : l.followUpEnabled) === !0, d = (t = l == null ? void 0 : l.followUpAmount) != null ? t : _, m = p(c), y = m[0], C = m[1], b = p(String(d)), v = b[0], S = b[1], R = p(!1), L = R[0], E = R[1], k = parseInt(v, 10), I;
		n[0] !== v || n[1] !== k ? (I = /^\d+$/.test(v) && k >= f && k <= g, n[0] = v, n[1] = k, n[2] = I) : I = n[2];
		var T = I, D = y !== c || y && k !== d, x = D && !L && (!y || T), $;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? ($ = [{
			label: s._(
				/*BTDS*/
				""
			),
			testid: "followup-yes",
			value: "yes"
		}, {
			label: s._(
				/*BTDS*/
				""
			),
			testid: "followup-no",
			value: "no"
		}], n[3] = $) : $ = n[3];
		var P = $, N;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (N = function(t) {
			C(t === "yes");
		}, n[4] = N) : N = n[4];
		var M = N, w;
		n[5] !== k || n[6] !== x || n[7] !== y || n[8] !== a || n[9] !== i ? (w = function() {
			x && (E(!0), o("WAWebBizAiSaveUtils").saveBizAISetting(function() {
				return o("WAWebBizAiReengagementUpdateMutation").updateReengagement({
					amount: y ? k : void 0,
					enabled: y
				});
			}, {
				onError: a,
				onSuccess: i
			}));
		}, n[5] = k, n[6] = x, n[7] = y, n[8] = a, n[9] = i, n[10] = w) : w = n[10];
		var A = w, F;
		n[11] === Symbol.for("react.memo_cache_sentinel") ? (F = { className: "x1h678fw xcldk2z xv6tirj x1phvje8 x1czfd9k" }, n[11] = F) : F = n[11];
		var O;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (O = { className: "x6s0dn4 x78zum5 x1qvou4u x1s70e7g x1nhvcw1 x12xbjc7" }, n[12] = O) : O = n[12];
		var B;
		n[13] === Symbol.for("react.memo_cache_sentinel") ? (B = s._(
			/*BTDS*/
			""
		).toString(), n[13] = B) : B = n[13];
		var W;
		n[14] !== a ? (W = u.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcClose.react"),
			onPress: a,
			variant: "borderless",
			size: "small",
			"aria-label": B,
			testid: "followup-close-btn"
		}), n[14] = a, n[15] = W) : W = n[15];
		var q;
		n[16] === Symbol.for("react.memo_cache_sentinel") ? (q = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			children: s._(
				/*BTDS*/
				""
			)
		}), n[16] = q) : q = n[16];
		var U;
		n[17] !== W ? (U = u.jsxs("div", babelHelpers.extends({}, O, { children: [W, q] })), n[17] = W, n[18] = U) : U = n[18];
		var V;
		n[19] === Symbol.for("react.memo_cache_sentinel") ? (V = u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			xstyle: h.description,
			children: s._(
				/*BTDS*/
				""
			)
		}), n[19] = V) : V = n[19];
		var H;
		n[20] !== y ? (H = u.jsx(o("WAWebFlex.react").FlexColumn, {
			role: "radiogroup",
			"aria-label": "Follow-up options",
			children: P.map(function(e) {
				return u.jsxs("label", {
					htmlFor: "followup-" + e.value,
					className: "x6s0dn4 x1ubxc9n xyi3aci xwf5gio x1p453bz x1suzm8a x9f619 x1ypdohk x78zum5 xbktkl8 x16ovd2e x1nzty39 x12xbjc7 x12w63v0 xh8yej3",
					"data-testid": e.testid,
					children: [u.jsx("div", {
						className: "x16ovd2e x1nzty39 x12xbjc7 x12w63v0",
						children: u.jsx(r("WDSBaseRadio.react"), {
							checked: y && e.value === "yes" || !y && e.value === "no",
							id: "followup-" + e.value,
							name: "followup-option",
							onChange: M,
							value: e.value
						})
					}), u.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Body1",
						xstyle: h.radioLabel,
						children: e.label
					})]
				}, e.value);
			})
		}), n[20] = y, n[21] = H) : H = n[21];
		var G;
		n[22] !== v || n[23] !== y || n[24] !== T ? (G = y && u.jsxs(u.Fragment, { children: [u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			xstyle: h.sectionLabel,
			children: s._(
				/*BTDS*/
				""
			)
		}), u.jsx(r("WDSTextField.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			bottomText: s._(
				/*BTDS*/
				""
			),
			value: v,
			onValueChange: S,
			error: !T,
			errorText: s._(
				/*BTDS*/
				""
			),
			testid: "biz_profile_ai_followup_hours_textfield"
		})] }), n[22] = v, n[23] = y, n[24] = T, n[25] = G) : G = n[25];
		var z;
		n[26] === Symbol.for("react.memo_cache_sentinel") ? (z = { className: "x78zum5 x1qvou4u x1s70e7g x13a6bvl x1h678fw" }, n[26] = z) : z = n[26];
		var j;
		n[27] === Symbol.for("react.memo_cache_sentinel") ? (j = s._(
			/*BTDS*/
			""
		), n[27] = j) : j = n[27];
		var K;
		n[28] !== L || n[29] !== a ? (K = u.jsx(r("WDSButton.react"), {
			variant: "tonal",
			size: "small",
			label: j,
			onPress: a,
			disabled: L,
			testid: "followup-cancel-btn"
		}), n[28] = L, n[29] = a, n[30] = K) : K = n[30];
		var Q;
		n[31] === Symbol.for("react.memo_cache_sentinel") ? (Q = s._(
			/*BTDS*/
			""
		), n[31] = Q) : Q = n[31];
		var X = !x, Y;
		n[32] !== A || n[33] !== L || n[34] !== X ? (Y = u.jsx(r("WDSButton.react"), {
			variant: "filled",
			size: "small",
			label: Q,
			onPress: A,
			disabled: X,
			loading: L,
			testid: "followup-save-btn"
		}), n[32] = A, n[33] = L, n[34] = X, n[35] = Y) : Y = n[35];
		var J;
		n[36] !== K || n[37] !== Y ? (J = u.jsxs("div", babelHelpers.extends({}, z, { children: [K, Y] })), n[36] = K, n[37] = Y, n[38] = J) : J = n[38];
		var Z;
		return n[39] !== U || n[40] !== H || n[41] !== G || n[42] !== J ? (Z = u.jsxs("div", babelHelpers.extends({}, F, {
			"data-testid": "followup-modal",
			children: [
				U,
				V,
				H,
				G,
				J
			]
		})), n[39] = U, n[40] = H, n[41] = G, n[42] = J, n[43] = Z) : Z = n[43], Z;
	}
	l.default = y;
}), 226);
