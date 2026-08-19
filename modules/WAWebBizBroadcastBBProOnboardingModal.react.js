__d("WAWebBizBroadcastBBProOnboardingModal.react", [
	"fbt",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebConfirmPopup.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebNoop",
	"WAWebWamEnumBbTierType",
	"WAWebWdsIllClipMessagesIcon.react",
	"WDSIconIcSchedule.react",
	"WDSIconIcSend.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		body: {
			rowGap: "x1f0uite",
			$$css: !0
		},
		content: {
			rowGap: "x1j3ira4",
			$$css: !0
		},
		featureIcon: {
			color: "xhslqc4",
			$$css: !0
		},
		legalFooterControls: {
			paddingTop: "x1p57kb1",
			$$css: !0
		},
		titleSubtitle: {
			rowGap: "x1f0uite",
			$$css: !0
		},
		valuePropItem: {
			columnGap: "xrdqr27",
			paddingInlineStart: "x12w63v0",
			$$css: !0
		},
		valueProps: {
			rowGap: "x1qvou4u",
			$$css: !0
		}
	}, d = {
		height: 24,
		width: 24,
		xstyle: c.featureIcon
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(71), n, a, i, l, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $, P, N;
		if (t[0] !== e) {
			var M = e.entryPoint, w = e.onContinueWithout, A = e.onTryNow, F;
			t[27] === Symbol.for("react.memo_cache_sentinel") ? (F = o("WAWebFaqUrl").getBusinessBroadcastsLearnMoreUrl(), t[27] = F) : F = t[27];
			var O = F;
			m = o("WAWebConfirmPopup.react").ConfirmPopup, y = o("WAWebModal.react").ModalTheme.Small, C = c.legalFooterControls, t[28] === Symbol.for("react.memo_cache_sentinel") ? (b = s._(
				/*BTDS*/
				""
			), t[28] = b) : b = t[28], v = A, t[29] === Symbol.for("react.memo_cache_sentinel") ? (S = s._(
				/*BTDS*/
				""
			), t[29] = S) : S = t[29], R = w, E = r("WAWebNoop"), k = "biz-broadcast-bb-pro-onboarding-modal", l = o("WAWebFlex.react").FlexColumn, f = c.content, g = "stretch", t[30] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				testid: "biz-broadcast-bb-pro-onboarding-modal-illustration",
				children: u.jsx(o("WAWebWdsIllClipMessagesIcon.react").WdsIllClipMessagesIcon, {
					width: 180,
					height: 120
				})
			}), t[30] = h) : h = t[30], i = o("WAWebFlex.react").FlexColumn, N = c.body, _ = "stretch", a = o("WAWebFlex.react").FlexColumn, x = c.titleSubtitle, $ = "stretch", t[31] === Symbol.for("react.memo_cache_sentinel") ? (P = u.jsx(r("WDSText.react"), {
				type: "Headline1",
				colorName: "contentDefault",
				textAlign: "center",
				testid: "biz-broadcast-bb-pro-onboarding-modal-title",
				children: s._(
					/*BTDS*/
					""
				)
			}), t[31] = P) : P = t[31], n = r("WDSText.react"), p = "Body2", L = "contentDeemphasized", I = "center", T = "biz-broadcast-bb-pro-onboarding-modal-subtitle", D = s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m2", u.jsx(r("WDSTextualLink.react"), {
					href: O,
					onClick: function() {
						return o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxLinkClicked(M, "learn_more", o("WAWebWamEnumBbTierType").BB_TIER_TYPE.PRO);
					},
					testid: "biz-broadcast-bb-pro-onboarding-modal-learn-more",
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			), t[0] = e, t[1] = n, t[2] = a, t[3] = i, t[4] = l, t[5] = m, t[6] = p, t[7] = _, t[8] = f, t[9] = g, t[10] = h, t[11] = y, t[12] = C, t[13] = b, t[14] = v, t[15] = S, t[16] = R, t[17] = L, t[18] = E, t[19] = k, t[20] = I, t[21] = T, t[22] = D, t[23] = x, t[24] = $, t[25] = P, t[26] = N;
		} else n = t[1], a = t[2], i = t[3], l = t[4], m = t[5], p = t[6], _ = t[7], f = t[8], g = t[9], h = t[10], y = t[11], C = t[12], b = t[13], v = t[14], S = t[15], R = t[16], L = t[17], E = t[18], k = t[19], I = t[20], T = t[21], D = t[22], x = t[23], $ = t[24], P = t[25], N = t[26];
		var B;
		t[32] !== n || t[33] !== p || t[34] !== L || t[35] !== I || t[36] !== T || t[37] !== D ? (B = u.jsx(n, {
			type: p,
			colorName: L,
			textAlign: I,
			testid: T,
			children: D
		}), t[32] = n, t[33] = p, t[34] = L, t[35] = I, t[36] = T, t[37] = D, t[38] = B) : B = t[38];
		var W;
		t[39] !== a || t[40] !== B || t[41] !== x || t[42] !== $ || t[43] !== P ? (W = u.jsxs(a, {
			xstyle: x,
			align: $,
			children: [P, B]
		}), t[39] = a, t[40] = B, t[41] = x, t[42] = $, t[43] = P, t[44] = W) : W = t[44];
		var q;
		t[45] === Symbol.for("react.memo_cache_sentinel") ? (q = u.jsx(r("WDSIconIcSend.react"), babelHelpers.extends({}, d)), t[45] = q) : q = t[45];
		var U;
		t[46] === Symbol.for("react.memo_cache_sentinel") ? (U = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: c.valuePropItem,
			testid: "biz-broadcast-bb-pro-onboarding-modal-value-prop-volume",
			children: [q, u.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDefault",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}), t[46] = U) : U = t[46];
		var V;
		t[47] === Symbol.for("react.memo_cache_sentinel") ? (V = u.jsx(r("WDSIconIcSchedule.react"), babelHelpers.extends({}, d)), t[47] = V) : V = t[47];
		var H;
		t[48] === Symbol.for("react.memo_cache_sentinel") ? (H = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: c.valueProps,
			align: "stretch",
			children: [U, u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: c.valuePropItem,
				testid: "biz-broadcast-bb-pro-onboarding-modal-value-prop-customization",
				children: [V, u.jsx(r("WDSText.react"), {
					type: "Body1",
					colorName: "contentDefault",
					children: s._(
						/*BTDS*/
						""
					)
				})]
			})]
		}), t[48] = H) : H = t[48];
		var G;
		t[49] !== i || t[50] !== _ || t[51] !== W || t[52] !== N ? (G = u.jsxs(i, {
			xstyle: N,
			align: _,
			children: [W, H]
		}), t[49] = i, t[50] = _, t[51] = W, t[52] = N, t[53] = G) : G = t[53];
		var z;
		t[54] !== l || t[55] !== f || t[56] !== g || t[57] !== h || t[58] !== G ? (z = u.jsxs(l, {
			xstyle: f,
			align: g,
			children: [h, G]
		}), t[54] = l, t[55] = f, t[56] = g, t[57] = h, t[58] = G, t[59] = z) : z = t[59];
		var j;
		return t[60] !== m || t[61] !== y || t[62] !== C || t[63] !== b || t[64] !== v || t[65] !== S || t[66] !== R || t[67] !== E || t[68] !== k || t[69] !== z ? (j = u.jsx(m, {
			type: y,
			buttonGroupStyle: C,
			okText: b,
			onOK: v,
			cancelText: S,
			onCancel: R,
			onOverlayClick: E,
			testid: k,
			children: z
		}), t[60] = m, t[61] = y, t[62] = C, t[63] = b, t[64] = v, t[65] = S, t[66] = R, t[67] = E, t[68] = k, t[69] = z, t[70] = j) : j = t[70], j;
	}
	l.default = m;
}), 226);
