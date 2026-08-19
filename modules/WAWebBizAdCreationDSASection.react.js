__d("WAWebBizAdCreationDSASection.react", [
	"fbt",
	"WAWebBizAdCreationDSAReducer",
	"WAWebBizAdCreationSectionNotices.react",
	"WAWebBizCard.react",
	"WAWebFlex.react",
	"WDSSwitch.react",
	"WDSText.react",
	"WDSTextField.react",
	"react",
	"react-compiler-runtime",
	"useWAWebBizAdCreationSpecDispatcherContext",
	"withWAWebBizAdCreationSpecContext"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState, p = { content: {
		rowGap: "x1j3ira4",
		$$css: !0
	} };
	function _(e) {
		var t = o("react-compiler-runtime").c(32), n = e.subjectToDSA, a = m(!1), i = a[0], l = a[1], c = m(""), _ = c[0], f = c[1], g = m(""), h = g[0], y = g[1], C;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (C = [r("WAWebBizAdCreationDSAReducer")], t[0] = C) : C = t[0];
		var b = r("useWAWebBizAdCreationSpecDispatcherContext")(C), v;
		t[1] !== _ || t[2] !== b ? (v = function(t) {
			l(t), t ? (y(""), b({
				dsaPayor: "",
				type: "dsa_reducer.set_dsa_payor"
			})) : (y(""), b({
				dsaPayor: _,
				type: "dsa_reducer.set_dsa_payor"
			}));
		}, t[1] = _, t[2] = b, t[3] = v) : v = t[3];
		var S = v, R;
		t[4] !== b || t[5] !== i ? (R = function(t) {
			f(t), b({
				dsaBeneficiary: t,
				type: "dsa_reducer.set_dsa_beneficiary"
			}), i || b({
				dsaPayor: t,
				type: "dsa_reducer.set_dsa_payor"
			});
		}, t[4] = b, t[5] = i, t[6] = R) : R = t[6];
		var L = R, E;
		t[7] !== b ? (E = function(t) {
			y(t), b({
				dsaPayor: t,
				type: "dsa_reducer.set_dsa_payor"
			});
		}, t[7] = b, t[8] = E) : E = t[8];
		var k = E, I, T;
		if (t[9] !== b || t[10] !== n ? (I = function() {
			n || (b({
				dsaBeneficiary: "",
				type: "dsa_reducer.set_dsa_beneficiary"
			}), b({
				dsaPayor: "",
				type: "dsa_reducer.set_dsa_payor"
			}));
		}, T = [n, b], t[9] = b, t[10] = n, t[11] = I, t[12] = T) : (I = t[11], T = t[12]), d(I, T), !n) return null;
		var D;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (D = s._(
			/*BTDS*/
			""
		), t[13] = D) : D = t[13];
		var x;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (x = u.jsx(r("WAWebBizAdCreationSectionNotices.react"), { specElement: "DSA" }), t[14] = x) : x = t[14];
		var $;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? ($ = u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[15] = $) : $ = t[15];
		var P;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (P = s._(
			/*BTDS*/
			""
		), t[16] = P) : P = t[16];
		var N;
		t[17] !== _ || t[18] !== L ? (N = u.jsx(r("WDSTextField.react"), {
			label: P,
			onValueChange: L,
			testid: "biz_native_ads_dsa_beneficiary_textfield",
			value: _
		}), t[17] = _, t[18] = L, t[19] = N) : N = t[19];
		var M;
		t[20] === Symbol.for("react.memo_cache_sentinel") ? (M = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body2",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[20] = M) : M = t[20];
		var w;
		t[21] !== S || t[22] !== i ? (w = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "all",
			children: [M, u.jsx(r("WDSSwitch.react"), {
				onChange: S,
				testid: "dsa-different-payer-switch",
				value: i
			})]
		}), t[21] = S, t[22] = i, t[23] = w) : w = t[23];
		var A;
		t[24] !== k || t[25] !== i || t[26] !== h ? (A = i ? u.jsx(r("WDSTextField.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			onValueChange: k,
			testid: "biz_native_ads_dsa_payer_textfield",
			value: h
		}) : null, t[24] = k, t[25] = i, t[26] = h, t[27] = A) : A = t[27];
		var F;
		return t[28] !== N || t[29] !== w || t[30] !== A ? (F = u.jsx(r("WAWebBizCard.react"), {
			header: D,
			testid: "biz_native_ads_dsa_section",
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				gap: 16,
				children: [x, u.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "stretch",
					xstyle: p.content,
					children: [
						$,
						N,
						w,
						A
					]
				})]
			})
		}), t[28] = N, t[29] = w, t[30] = A, t[31] = F) : F = t[31], F;
	}
	var f = r("withWAWebBizAdCreationSpecContext")(_, function(e) {
		return { subjectToDSA: e.audienceData.subjectToDSA };
	});
	l.default = f;
}), 226);
