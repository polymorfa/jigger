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
	"useWAWebBizAdCreationSpecDispatcherContext",
	"withWAWebBizAdCreationSpecContext"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState, p = { content: {
		rowGap: "x1j3ira4",
		$$css: !0
	} };
	function _(e) {
		var t = e.subjectToDSA, n = m(!1), a = n[0], i = n[1], l = m(""), c = l[0], _ = l[1], f = m(""), g = f[0], h = f[1], y = r("useWAWebBizAdCreationSpecDispatcherContext")([r("WAWebBizAdCreationDSAReducer")]), C = function(t) {
			i(t), t ? (h(""), y({
				dsaPayor: "",
				type: "dsa_reducer.set_dsa_payor"
			})) : (h(""), y({
				dsaPayor: c,
				type: "dsa_reducer.set_dsa_payor"
			}));
		}, b = function(t) {
			_(t), y({
				dsaBeneficiary: t,
				type: "dsa_reducer.set_dsa_beneficiary"
			}), a || y({
				dsaPayor: t,
				type: "dsa_reducer.set_dsa_payor"
			});
		}, v = function(t) {
			h(t), y({
				dsaPayor: t,
				type: "dsa_reducer.set_dsa_payor"
			});
		};
		return d(function() {
			t || (y({
				dsaBeneficiary: "",
				type: "dsa_reducer.set_dsa_beneficiary"
			}), y({
				dsaPayor: "",
				type: "dsa_reducer.set_dsa_payor"
			}));
		}, [t, y]), t ? u.jsx(r("WAWebBizCard.react"), {
			header: s._(
				/*BTDS*/
				""
			),
			testid: "biz_native_ads_dsa_section",
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				gap: 16,
				children: [u.jsx(r("WAWebBizAdCreationSectionNotices.react"), { specElement: "DSA" }), u.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "stretch",
					xstyle: p.content,
					children: [
						u.jsx(r("WDSText.react"), {
							colorName: "contentDeemphasized",
							type: "Body2",
							children: s._(
								/*BTDS*/
								""
							)
						}),
						u.jsx(r("WDSTextField.react"), {
							label: s._(
								/*BTDS*/
								""
							),
							onValueChange: b,
							testid: "biz_native_ads_dsa_beneficiary_textfield",
							value: c
						}),
						u.jsxs(o("WAWebFlex.react").FlexRow, {
							align: "center",
							justify: "all",
							children: [u.jsx(r("WDSText.react"), {
								colorName: "contentDefault",
								type: "Body2",
								children: s._(
									/*BTDS*/
									""
								)
							}), u.jsx(r("WDSSwitch.react"), {
								onChange: C,
								testid: "dsa-different-payer-switch",
								value: a
							})]
						}),
						a ? u.jsx(r("WDSTextField.react"), {
							label: s._(
								/*BTDS*/
								""
							),
							onValueChange: v,
							testid: "biz_native_ads_dsa_payer_textfield",
							value: g
						}) : null
					]
				})]
			})
		}) : null;
	}
	_.displayName = _.name + " [from " + i.id + "]";
	var f = r("withWAWebBizAdCreationSpecContext")(_, function(e) {
		return { subjectToDSA: e.audienceData.subjectToDSA };
	});
	l.default = f;
}), 226);
