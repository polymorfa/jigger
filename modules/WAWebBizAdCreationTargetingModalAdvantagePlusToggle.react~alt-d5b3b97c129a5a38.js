__d("WAWebBizAdCreationTargetingModalAdvantagePlusToggle.react", [
	"fbt",
	"WAWebBizAdCreationTargetingSpecDispatcherContext",
	"WAWebFlex.react",
	"WDSSwitch.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"react",
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
		var t = e.audienceOption, n = e.isTargetingAutomationEnabled, a = t === "NCPP", i = m(r("WAWebBizAdCreationTargetingSpecDispatcherContext")), l = d(function(e) {
			i({
				enabled: e,
				type: "wa_web_biz_ad_creation_targeting_modal_reducer.update_targeting_automation"
			});
		}, [i]), c = n === 1;
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "all",
			children: [u.jsxs(o("WAWebFlex.react").FlexColumn, {
				gap: 4,
				xstyle: p.textContent,
				children: [u.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					type: "Body1Emphasized",
					children: s._(
						/*BTDS*/
						""
					)
				}), u.jsxs(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					type: "Body2",
					children: [
						s._(
							/*BTDS*/
							""
						),
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
			}), u.jsx(r("WDSSwitch.react"), {
				"aria-label": s._(
					/*BTDS*/
					""
				),
				disabled: a,
				onChange: l,
				testid: "biz_native_ads_advantage_plus_audience_toggle",
				value: c
			})]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	var f = r("withWAWebBizAdCreationTargetingSpecPart.react")(_, function(e) {
		var t, n;
		return { isTargetingAutomationEnabled: (t = (n = e.targeting_automation) == null ? void 0 : n.advantage_audience) != null ? t : 0 };
	});
	l.default = f;
}), 226);
