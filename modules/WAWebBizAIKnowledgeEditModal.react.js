__d("WAWebBizAIKnowledgeEditModal.react", [
	"fbt",
	"WAWebBizAILargeScreensLogEvents",
	"WAWebBizAiExampleResponseUpdateMutation",
	"WAWebBizAiKnowledgeUtils",
	"WAWebBizAiSaveUtils",
	"WAWebValidationUtils",
	"WAWebWDSRichTextField.react",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"WDSTextField.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useState, _ = 5e3, f = new Set(["email"]);
	function g(e) {
		var t = o("react-compiler-runtime").c(62), n = e.currentValue, a = e.exampleQuestion, i = e.fieldKey, l = e.fieldLabel, c = e.onClose, d = e.onSaved, g = e.rows, C = e.title, b;
		t[0] !== n || t[1] !== i ? (b = {
			currentValue: n,
			fieldKey: i,
			text: n
		}, t[0] = n, t[1] = i, t[2] = b) : b = t[2];
		var v = p(b), S = v[0], R = v[1], L = p(!1), E = L[0], k = L[1], I;
		t[3] !== i ? (I = f.has(i), t[3] = i, t[4] = I) : I = t[4];
		var T = I, D = S.fieldKey === i && S.currentValue === n ? S.text : n, x;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (x = [], t[5] = x) : x = t[5], m(h, x);
		var $;
		t[6] !== i || t[7] !== D ? ($ = y(i, D), t[6] = i, t[7] = D, t[8] = $) : $ = t[8];
		var P = $, N;
		t[9] !== n || t[10] !== P || t[11] !== E || t[12] !== D ? (N = D.trim().length > 0 && !E && D.trim() !== n.trim() && P == null, t[9] = n, t[10] = P, t[11] = E, t[12] = D, t[13] = N) : N = t[13];
		var M = N, w;
		t[14] !== n || t[15] !== i ? (w = function(t) {
			R({
				currentValue: n,
				fieldKey: i,
				text: t
			});
		}, t[14] = n, t[15] = i, t[16] = w) : w = t[16];
		var A = w, F;
		t[17] !== M || t[18] !== i || t[19] !== d || t[20] !== D ? (F = function() {
			M && (o("WAWebBizAILargeScreensLogEvents").logClickSaveKnowledge(), k(!0), o("WAWebBizAiExampleResponseUpdateMutation").updateKnowledge(o("WAWebBizAiKnowledgeUtils").buildKnowledgeInput(i, D.trim())).then(function(e) {
				if (o("WAWebBizAILargeScreensLogEvents").logApiSaveKnowledgeResult(e.isSuccess), e.isSuccess) {
					o("WAWebBizAiSaveUtils").showUpdatedToast(), d();
					return;
				}
				o("WAWebBizAiSaveUtils").showErrorToast(), k(!1);
			}).catch(function() {
				o("WAWebBizAILargeScreensLogEvents").logApiSaveKnowledgeResult(!1), o("WAWebBizAiSaveUtils").showErrorToast(), k(!1);
			}));
		}, t[17] = M, t[18] = i, t[19] = d, t[20] = D, t[21] = F) : F = t[21];
		var O = F, B;
		t[22] === Symbol.for("react.memo_cache_sentinel") ? (B = { className: "x1h678fw xcldk2z xv6tirj x1phvje8 x1czfd9k" }, t[22] = B) : B = t[22];
		var W;
		t[23] === Symbol.for("react.memo_cache_sentinel") ? (W = { className: "x6s0dn4 x78zum5 x1qvou4u x1s70e7g x1nhvcw1 x12xbjc7" }, t[23] = W) : W = t[23];
		var q;
		t[24] === Symbol.for("react.memo_cache_sentinel") ? (q = s._(
			/*BTDS*/
			""
		).toString(), t[24] = q) : q = t[24];
		var U;
		t[25] !== c ? (U = u.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcClose.react"),
			onPress: c,
			variant: "borderless",
			size: "small",
			"aria-label": q,
			testid: "knowledge-edit-close-btn"
		}), t[25] = c, t[26] = U) : U = t[26];
		var V;
		t[27] !== C ? (V = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			children: C
		}), t[27] = C, t[28] = V) : V = t[28];
		var H;
		t[29] !== U || t[30] !== V ? (H = u.jsxs("div", babelHelpers.extends({}, W, { children: [U, V] })), t[29] = U, t[30] = V, t[31] = H) : H = t[31];
		var G;
		t[32] === Symbol.for("react.memo_cache_sentinel") ? (G = { className: "x12xbjc7 x1yc453h" }, t[32] = G) : G = t[32];
		var z;
		t[33] !== a ? (z = u.jsx("div", babelHelpers.extends({}, G, { children: u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			children: a
		}) })), t[33] = a, t[34] = z) : z = t[34];
		var j;
		t[35] !== n || t[36] !== P || t[37] !== i || t[38] !== l || t[39] !== A || t[40] !== T || t[41] !== g || t[42] !== D ? (j = T ? u.jsx(r("WDSTextField.react"), {
			bottomText: s._(
				/*BTDS*/
				""
			),
			label: l,
			value: D,
			onValueChange: A,
			error: P != null,
			errorText: P,
			testid: "knowledge-edit-text-input"
		}) : u.jsx(r("WAWebWDSRichTextField.react"), {
			bottomText: s._(
				/*BTDS*/
				""
			),
			label: l,
			placeholder: l,
			rows: g != null ? g : 4,
			initialText: n,
			onValueChange: A,
			maxCharacterCount: _,
			error: P != null,
			errorText: P,
			testid: "knowledge-edit-text-input"
		}, i), t[35] = n, t[36] = P, t[37] = i, t[38] = l, t[39] = A, t[40] = T, t[41] = g, t[42] = D, t[43] = j) : j = t[43];
		var K;
		t[44] === Symbol.for("react.memo_cache_sentinel") ? (K = { className: "x78zum5 x1qvou4u x1s70e7g x13a6bvl x1h678fw" }, t[44] = K) : K = t[44];
		var Q;
		t[45] === Symbol.for("react.memo_cache_sentinel") ? (Q = s._(
			/*BTDS*/
			""
		), t[45] = Q) : Q = t[45];
		var X;
		t[46] !== E || t[47] !== c ? (X = u.jsx(r("WDSButton.react"), {
			variant: "tonal",
			size: "small",
			label: Q,
			disabled: E,
			onPress: c,
			testid: "knowledge-edit-cancel-btn"
		}), t[46] = E, t[47] = c, t[48] = X) : X = t[48];
		var Y;
		t[49] === Symbol.for("react.memo_cache_sentinel") ? (Y = s._(
			/*BTDS*/
			""
		), t[49] = Y) : Y = t[49];
		var J = !M, Z;
		t[50] !== O || t[51] !== E || t[52] !== J ? (Z = u.jsx(r("WDSButton.react"), {
			variant: "filled",
			size: "small",
			label: Y,
			onPress: O,
			disabled: J,
			loading: E,
			testid: "knowledge-edit-save-btn"
		}), t[50] = O, t[51] = E, t[52] = J, t[53] = Z) : Z = t[53];
		var ee;
		t[54] !== X || t[55] !== Z ? (ee = u.jsxs("div", babelHelpers.extends({}, K, { children: [X, Z] })), t[54] = X, t[55] = Z, t[56] = ee) : ee = t[56];
		var te;
		return t[57] !== H || t[58] !== z || t[59] !== j || t[60] !== ee ? (te = u.jsxs("div", babelHelpers.extends({}, B, {
			"data-testid": "knowledge-edit-modal",
			children: [
				H,
				z,
				j,
				ee
			]
		})), t[57] = H, t[58] = z, t[59] = j, t[60] = ee, t[61] = te) : te = t[61], te;
	}
	function h() {
		o("WAWebBizAILargeScreensLogEvents").logViewKnowledgeEdit();
	}
	function y(e, t) {
		var n = t.trim();
		return n === "" ? null : e === "email" && !o("WAWebValidationUtils").validateEmail(n) ? s._(
			/*BTDS*/
			""
		) : null;
	}
	l.default = g;
}), 226);
