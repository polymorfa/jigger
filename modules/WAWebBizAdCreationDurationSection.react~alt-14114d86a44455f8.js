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
		var t = e.adAccountID, n = e.initialDuration, a = e.selectedDuration, i = m(r("WAWebBizAdCreationLoggerContext")), l = _(!1);
		p(function() {
			i != null && !l.current && (l.current = !0, r("WAWebBizAdLogger").log({
				adAccountID: t,
				defaultDuration: n,
				duration: a,
				event: "duration_card_impression",
				extra: { recommended_value: a },
				loggerContext: i
			}));
		}, [
			t,
			n,
			i,
			a
		]);
		var c = f(a), C = c[0], b = c[1], v = f(a), S = v[0], R = v[1];
		a !== S && (R(a), b(a));
		var L = d(function(e, n) {
			e !== a && i != null && r("WAWebBizAdLogger").log({
				adAccountID: t,
				endingValue: String(e),
				event: "change_duration",
				extra: { input_type: n },
				loggerContext: i,
				startingValue: String(a)
			});
		}, [
			a,
			i,
			t
		]), E = o("WAWebBizNativeAdsGatingUtils").continuousDurationEnabled(), k = o("WAWebBizAdCreationContinuousDurationUtils").isContinuousDurationActive(a), I = f(null), T = I[0], D = I[1], x = r("useWAWebBizAdCreationSpecDispatcherContext")([r("WAWebBizAdCreationDurationReducer")]), $ = d(function(e) {
			var n = e === "continuous";
			if (n !== k) {
				var l = n ? o("TWAWebBizAdCreationSpec").CONTINUOUS_DURATION : T != null ? T : 10;
				n && D(a), x({
					durationData: { durationInDays: l },
					type: "duration_reducer.update_duration"
				}), i != null && r("WAWebBizAdLogger").log({
					adAccountID: t,
					endingValue: String(l),
					event: "change_duration",
					extra: { input_type: "radio_toggle" },
					loggerContext: i,
					startingValue: String(a)
				});
			}
		}, [
			t,
			x,
			k,
			T,
			i,
			a
		]), P = [{
			label: s._(
				/*BTDS*/
				""
			),
			secondaryLabel: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				gap: 4,
				children: [s._(
					/*BTDS*/
					""
				), u.jsx(r("WDSText.react"), {
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
		}];
		return u.jsx(r("WAWebBizCard.react"), {
			header: s._(
				/*BTDS*/
				""
			),
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				gap: 16,
				children: [E ? u.jsx(o("WAWebRadio.react").RadioGroup, {
					ariaLabel: s._(
						/*BTDS*/
						""
					),
					checkedValue: k ? "continuous" : "fixed",
					name: "biz-native-ads-duration-mode",
					onChange: $,
					options: P,
					testid: "biz_native_ads_duration_mode_radio",
					theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.LARGE
				}) : null, k ? null : u.jsxs(u.Fragment, { children: [u.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "center",
					testid: "biz_native_ads_duration_input",
					xstyle: y.valueContainer,
					children: u.jsx(r("WAWebBizAdCreationDurationInput.react"), {
						displayDuration: C,
						logDurationChange: L,
						maxDuration: h,
						minDuration: g,
						setLocalDuration: b
					})
				}), u.jsx(o("WAWebFlex.react").FlexItem, {
					align: "stretch",
					testid: "biz_native_ads_duration_slider",
					children: u.jsx(r("WAWebBizAdCreationDurationSlider.react"), {
						logDurationChange: L,
						maxDuration: h,
						minDuration: g,
						setLocalDuration: b
					})
				})] })]
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	var b = r("withWAWebBizAdCreationSpecContext")(C, function(e) {
		return {
			adAccountID: e.adAccountData.id,
			initialDuration: e.durationData.initialDurationInDays,
			selectedDuration: e.durationData.durationInDays
		};
	});
	l.default = b;
}), 226);
