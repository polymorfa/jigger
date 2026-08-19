__d("WAWebBizAdManagementAdPaymentModal.react", [
	"fbt",
	"CometRelay",
	"WAWebBizAdManagementAdPaymentModalMutation.graphql",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WDSButton.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u.useState, m = 400, p = { root: {
		display: "x78zum5",
		flexDirection: "xdt5ytf",
		paddingTop: "xl7twdi",
		paddingBottom: "xvg22vi",
		paddingInlineStart: "xb0esv5",
		paddingInlineEnd: "xyo0t3i",
		paddingLeft: null,
		paddingRight: null,
		rowGap: "x1f0uite",
		width: "x1l2rt3b",
		$$css: !0
	} }, _ = e !== void 0 ? e : e = n("WAWebBizAdManagementAdPaymentModalMutation.graphql");
	function f(e) {
		var t = e.onError, n = e.onSuccess, r = e.relayEnvironment;
		o("CometRelay").commitMutation(r, {
			mutation: _,
			onCompleted: function(r) {
				r.xfb_wa_biz_send_payment_hub_notification === !0 ? n() : t();
			},
			onError: function() {
				t();
			},
			variables: {}
		});
	}
	function g(e) {
		var t = e.onClose, n = e.onError, a = e.onSuccess, i = e.relayEnvironment, l = d(!1), u = l[0], m = l[1], _ = function() {
			if (i == null) {
				n();
				return;
			}
			m(!0), f({
				onError: function() {
					m(!1), n();
				},
				onSuccess: function() {
					m(!1), a();
				},
				relayEnvironment: i
			});
		};
		return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			type: o("WAWebModal.react").ModalTheme.Auto,
			children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				xstyle: p.root,
				children: [
					c.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Headline1",
						children: s._(
							/*BTDS*/
							""
						)
					}),
					c.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Body1",
						children: s._(
							/*BTDS*/
							""
						)
					}),
					c.jsxs("div", {
						className: "xs2akgl x78zum5 x1q0g3np x1lvf691 x16ovd2e",
						children: [c.jsx(r("WDSButton.react"), {
							label: r("WAWebFbtCommon")("Close"),
							onPress: t,
							size: "medium",
							type: "default",
							variant: "borderless"
						}), c.jsx(r("WDSButton.react"), {
							label: s._(
								/*BTDS*/
								""
							),
							loading: u,
							onPress: _,
							size: "medium",
							type: "default",
							variant: "filled"
						})]
					})
				]
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
