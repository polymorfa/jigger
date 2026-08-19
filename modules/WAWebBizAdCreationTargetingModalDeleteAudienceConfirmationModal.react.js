__d("WAWebBizAdCreationTargetingModalDeleteAudienceConfirmationModal.react", [
	"fbt",
	"CometRelay",
	"WAWebBizAdCreationTargetingModalContext",
	"WAWebBizAdCreationTargetingModalDeleteAudienceConfirmationModal_SavedAudienceDeleteMutation.graphql",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WDSButton.react",
	"WDSText.react",
	"err",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useContext, _ = d.useState, f = {
		modalContainer: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			rowGap: "x1f0uite",
			columnGap: "xs2akgl",
			paddingTop: "x1p57kb1",
			paddingBottom: "xvpt6g3",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		text: {
			textAlign: "x1yc453h",
			$$css: !0
		}
	}, g = e !== void 0 ? e : e = n("WAWebBizAdCreationTargetingModalDeleteAudienceConfirmationModal_SavedAudienceDeleteMutation.graphql");
	function h(e) {
		var t = e.environment, n = e.onComplete, a = e.onError, i = e.savedAudienceID;
		o("CometRelay").commitMutation(t, {
			mutation: g,
			onCompleted: function() {
				n();
			},
			onError: function(t) {
				r("err")("WAWebBizAdCreationTargetingModalDeleteAudienceConfirmationComponent: Failed to delete audience", { cause: t }), a();
			},
			updater: function(t) {
				t.delete(i);
			},
			variables: { savedAudienceID: i }
		});
	}
	function y(e) {
		var t = e.audienceID, n = e.onCancel, a = e.onComplete, i = p(r("WAWebBizAdCreationTargetingModalContext")), l = i.environment, u = _(!1), d = u[0], g = u[1], y = function() {
			n();
		}, C = m(function() {
			g(!0), h({
				environment: l,
				onComplete: function() {
					g(!1), a();
				},
				onError: function() {
					g(!1);
				},
				savedAudienceID: t
			});
		}, [
			t,
			l,
			a
		]);
		return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, { children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: f.modalContainer,
			children: [
				c.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					type: "Headline2",
					xstyle: f.text,
					children: s._(
						/*BTDS*/
						""
					)
				}),
				c.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					type: "Body2",
					xstyle: f.text,
					children: s._(
						/*BTDS*/
						""
					)
				}),
				c.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					gap: 8,
					justify: "end",
					children: [c.jsx(r("WDSButton.react"), {
						disabled: d,
						label: r("WAWebFbtCommon")("Cancel"),
						onPress: y,
						size: "medium",
						type: "default",
						variant: "tonal"
					}), c.jsx(r("WDSButton.react"), {
						disabled: d,
						label: s._(
							/*BTDS*/
							""
						),
						loading: d,
						onPress: C,
						size: "medium",
						testid: "biz_native_ads_delete_audience_confirm_button",
						type: "destructive",
						variant: "filled"
					})]
				})
			]
		}) });
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 226);
