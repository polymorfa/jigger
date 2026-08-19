__d("WAWebBizAdCreationTargetingModalAdvantagePlusToggle.react", [
	"fbt",
	"WAWebBizAdCreationTargetingSpecDispatcherContext",
	"WAWebFlex.react",
	"WDSSwitch.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"react",
	"react-compiler-runtime",
	"withWAWebBizAdCreationTargetingSpecPart.react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useContext, p = { textContent: {
		flexGrow: "x1iyjqo2",
		flexShrink: "xs83m0k",
		minWidth: "xeuugli",
		$$css: !0
	} };
	function _(e) {
		var t = o("react-compiler-runtime").c(10), n = e.audienceOption, a = e.isTargetingAutomationEnabled, i = n === "NCPP", l = m(r("WAWebBizAdCreationTargetingSpecDispatcherContext")), c;
		t[0] !== l ? (c = function(t) {
			l({
				enabled: t,
				type: "wa_web_biz_ad_creation_targeting_modal_reducer.update_targeting_automation"
			});
		}, t[0] = l, t[1] = c) : c = t[1];
		var d = c, _ = a === 1, f;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (f = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1Emphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[2] = f) : f = t[2];
		var g;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (g = s._(
			/*BTDS*/
			""
		), t[3] = g) : g = t[3];
		var h;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			gap: 4,
			xstyle: p.textContent,
			children: [f, u.jsxs(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				children: [
					g,
					" ",
					u.jsx(r("WDSTextualLink.react"), {
						href: "https://www.facebook.com/business/help/273363992030035?id=1629569087788063",
						children: s._(
							/*BTDS*/
							""
						)
					})
				]
			})]
		}), t[4] = h) : h = t[4];
		var y;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (y = s._(
			/*BTDS*/
			""
		), t[5] = y) : y = t[5];
		var C;
		return t[6] !== d || t[7] !== _ || t[8] !== i ? (C = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "all",
			children: [h, u.jsx(r("WDSSwitch.react"), {
				"aria-label": y,
				disabled: i,
				onChange: d,
				testid: "biz_native_ads_advantage_plus_audience_toggle",
				value: _
			})]
		}), t[6] = d, t[7] = _, t[8] = i, t[9] = C) : C = t[9], C;
	}
	var f = r("withWAWebBizAdCreationTargetingSpecPart.react")(_, function(e) {
		var t, n;
		return { isTargetingAutomationEnabled: (t = (n = e.targeting_automation) == null ? void 0 : n.advantage_audience) != null ? t : 0 };
	});
	l.default = f;
}), 226);
