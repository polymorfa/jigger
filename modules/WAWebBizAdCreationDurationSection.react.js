__d("WAWebBizAdCreationDurationSection.react", [
	"fbt",
	"TWAWebBizAdCreationSpec",
	"WAWebBizAdCreationContinuousDurationUtils",
	"WAWebBizAdCreationDurationInput.react",
	"WAWebBizAdCreationDurationReducer",
	"WAWebBizAdCreationDurationSlider.react",
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdLogger",
	"WAWebBizCard.react",
	"WAWebBizNativeAdsGatingUtils",
	"WAWebFlex.react",
	"WAWebRadio.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebBizAdCreationSpecDispatcherContext",
	"withWAWebBizAdCreationSpecContext"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useContext, p = c.useEffect, _ = c.useRef, f = c.useState, g = 1, h = 60, y = {
		radioOption: {
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			$$css: !0
		},
		valueContainer: {
			height: "xnnlda6",
			$$css: !0
		}
	};
	function C(e) {
		var t = o("react-compiler-runtime").c(35), n = e.adAccountID, a = e.initialDuration, i = e.selectedDuration, l = m(r("WAWebBizAdCreationLoggerContext")), c = _(!1), d, C;
		t[0] !== n || t[1] !== a || t[2] !== l || t[3] !== i ? (d = function() {
			l != null && !c.current && (c.current = !0, r("WAWebBizAdLogger").log({
				adAccountID: n,
				defaultDuration: a,
				duration: i,
				event: "duration_card_impression",
				extra: { recommended_value: i },
				loggerContext: l
			}));
		}, C = [
			n,
			a,
			l,
			i
		], t[0] = n, t[1] = a, t[2] = l, t[3] = i, t[4] = d, t[5] = C) : (d = t[4], C = t[5]), p(d, C);
		var b = f(i), v = b[0], S = b[1], R = f(i), L = R[0], E = R[1];
		i !== L && (E(i), S(i));
		var k;
		t[6] !== n || t[7] !== l || t[8] !== i ? (k = function(t, o) {
			t !== i && l != null && r("WAWebBizAdLogger").log({
				adAccountID: n,
				endingValue: String(t),
				event: "change_duration",
				extra: { input_type: o },
				loggerContext: l,
				startingValue: String(i)
			});
		}, t[6] = n, t[7] = l, t[8] = i, t[9] = k) : k = t[9];
		var I = k, T;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (T = o("WAWebBizNativeAdsGatingUtils").continuousDurationEnabled(), t[10] = T) : T = t[10];
		var D = T, x;
		t[11] !== i ? (x = o("WAWebBizAdCreationContinuousDurationUtils").isContinuousDurationActive(i), t[11] = i, t[12] = x) : x = t[12];
		var $ = x, P = f(null), N = P[0], M = P[1], w;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (w = [r("WAWebBizAdCreationDurationReducer")], t[13] = w) : w = t[13];
		var A = r("useWAWebBizAdCreationSpecDispatcherContext")(w), F;
		t[14] !== n || t[15] !== A || t[16] !== $ || t[17] !== N || t[18] !== l || t[19] !== i ? (F = function(t) {
			var e = t === "continuous";
			if (e !== $) {
				var a = e ? o("TWAWebBizAdCreationSpec").CONTINUOUS_DURATION : N != null ? N : 10;
				e && M(i), A({
					durationData: { durationInDays: a },
					type: "duration_reducer.update_duration"
				}), l != null && r("WAWebBizAdLogger").log({
					adAccountID: n,
					endingValue: String(a),
					event: "change_duration",
					extra: { input_type: "radio_toggle" },
					loggerContext: l,
					startingValue: String(i)
				});
			}
		}, t[14] = n, t[15] = A, t[16] = $, t[17] = N, t[18] = l, t[19] = i, t[20] = F) : F = t[20];
		var O = F, B;
		t[21] === Symbol.for("react.memo_cache_sentinel") ? (B = s._(
			/*BTDS*/
			""
		), t[21] = B) : B = t[21];
		var W;
		t[22] === Symbol.for("react.memo_cache_sentinel") ? (W = s._(
			/*BTDS*/
			""
		), t[22] = W) : W = t[22];
		var q;
		t[23] === Symbol.for("react.memo_cache_sentinel") ? (q = [{
			label: B,
			secondaryLabel: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				gap: 4,
				children: [W, u.jsx(r("WDSText.react"), {
					colorName: "secondaryPositive",
					type: "Body2",
					children: s._(
						/*BTDS*/
						""
					)
				})]
			}),
			testid: "biz_native_ads_duration_mode_continuous",
			value: "continuous",
			xstyle: y.radioOption
		}, {
			label: s._(
				/*BTDS*/
				""
			),
			testid: "biz_native_ads_duration_mode_set_duration",
			value: "fixed",
			xstyle: y.radioOption
		}], t[23] = q) : q = t[23];
		var U = q, V;
		t[24] === Symbol.for("react.memo_cache_sentinel") ? (V = s._(
			/*BTDS*/
			""
		), t[24] = V) : V = t[24];
		var H;
		t[25] !== O || t[26] !== $ ? (H = D ? u.jsx(o("WAWebRadio.react").RadioGroup, {
			ariaLabel: s._(
				/*BTDS*/
				""
			),
			checkedValue: $ ? "continuous" : "fixed",
			name: "biz-native-ads-duration-mode",
			onChange: O,
			options: U,
			testid: "biz_native_ads_duration_mode_radio",
			theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.LARGE
		}) : null, t[25] = O, t[26] = $, t[27] = H) : H = t[27];
		var G;
		t[28] !== $ || t[29] !== v || t[30] !== I ? (G = $ ? null : u.jsxs(u.Fragment, { children: [u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			testid: "biz_native_ads_duration_input",
			xstyle: y.valueContainer,
			children: u.jsx(r("WAWebBizAdCreationDurationInput.react"), {
				displayDuration: v,
				logDurationChange: I,
				maxDuration: h,
				minDuration: g,
				setLocalDuration: S
			})
		}), u.jsx(o("WAWebFlex.react").FlexItem, {
			align: "stretch",
			testid: "biz_native_ads_duration_slider",
			children: u.jsx(r("WAWebBizAdCreationDurationSlider.react"), {
				logDurationChange: I,
				maxDuration: h,
				minDuration: g,
				setLocalDuration: S
			})
		})] }), t[28] = $, t[29] = v, t[30] = I, t[31] = G) : G = t[31];
		var z;
		return t[32] !== H || t[33] !== G ? (z = u.jsx(r("WAWebBizCard.react"), {
			header: V,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				gap: 16,
				children: [H, G]
			})
		}), t[32] = H, t[33] = G, t[34] = z) : z = t[34], z;
	}
	var b = r("withWAWebBizAdCreationSpecContext")(C, function(e) {
		return {
			adAccountID: e.adAccountData.id,
			initialDuration: e.durationData.initialDurationInDays,
			selectedDuration: e.durationData.durationInDays
		};
	});
	l.default = b;
}), 226);
