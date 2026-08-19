__d("WAWebContactManagerEmptyState.react", [
	"fbt",
	"WAWebContactManagerSMBUserJourneyLogger",
	"WAWebEmptyStateActionTile.react",
	"WAWebLabelOutlineIcon.react",
	"WAWebListPeopleRefreshedIcon.react",
	"WAWebListsGatingUtils",
	"WAWebWdsPictoUserCheckFeedbackPositiveIcon.react",
	"WDSButton.react",
	"WDSFlex.stylex",
	"WDSIconIcPersonAdd.react",
	"WDSText.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = {
		wrapper: {
			backgroundColor: "x6egj2d",
			width: "xh8yej3",
			height: "x5yr21d",
			textAlign: "x2b8uid",
			$$css: !0
		},
		titleCard: {
			maxWidth: "x1rjt51p",
			backgroundColor: "x16w0wmm",
			borderStartStartRadius: "x1g83kfv",
			borderStartEndRadius: "x3qq2k7",
			borderEndEndRadius: "x2x8art",
			borderEndStartRadius: "x1qor8vf",
			paddingTop: "xl7twdi",
			paddingInlineEnd: "xyo0t3i",
			paddingBottom: "xvg22vi",
			paddingInlineStart: "xb0esv5",
			marginTop: "x98l61r",
			marginInlineEnd: "xviac27",
			marginBottom: "x1ua1l7f",
			marginInlineStart: "xlese2p",
			rowGap: "x1j3ira4",
			boxSizing: "x9f619",
			height: "xg7h5cd",
			$$css: !0
		},
		textGroup: {
			rowGap: "x1qvou4u",
			$$css: !0
		}
	};
	function m(t) {
		var n = t.onAddCustomer, a = t.onLearnMore, i = t.onManageLabels, l = function() {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickEmptyStateAddCustomer("no_customers"), n == null || n();
		}, u = function() {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickEmptyStateManageLabels(), i == null || i();
		};
		return c.jsxs("section", babelHelpers.extends({ "data-testid": "customer-manager-empty-state" }, (e || (e = r("stylex"))).props(d.wrapper, o("WDSFlex.stylex").wdsFlex.flexCenter, o("WDSFlex.stylex").wdsFlex.flexColumn), { children: [c.jsxs("div", babelHelpers.extends({}, e.props(d.titleCard, o("WDSFlex.stylex").wdsFlex.flexColumn, o("WDSFlex.stylex").wdsFlex.alignCenter), { children: [
			c.jsx("span", {
				"aria-hidden": !0,
				children: c.jsx(o("WAWebWdsPictoUserCheckFeedbackPositiveIcon.react").WdsPictoUserCheckFeedbackPositiveIcon, {})
			}),
			c.jsxs("div", babelHelpers.extends({}, e.props(o("WDSFlex.stylex").wdsFlex.flexColumn, d.textGroup), { children: [c.jsx("div", {
				role: "heading",
				"aria-level": 2,
				children: c.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					type: "Headline2",
					children: s._(
						/*BTDS*/
						""
					)
				})
			}), c.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				children: s._(
					/*BTDS*/
					""
				)
			})] })),
			c.jsx(r("WDSButton.react"), {
				type: "default",
				variant: "tonal",
				size: "small",
				label: s._(
					/*BTDS*/
					""
				),
				onPress: a != null ? a : p,
				testid: "customer-manager-empty-learn-more"
			})
		] })), c.jsxs("div", babelHelpers.extends({}, e.props(o("WDSFlex.stylex").wdsFlex.flex), { children: [c.jsx(r("WAWebEmptyStateActionTile.react"), {
			Icon: r("WDSIconIcPersonAdd.react"),
			title: s._(
				/*BTDS*/
				""
			),
			clickHandler: l,
			testid: "customer-manager-empty-add-customer"
		}), c.jsx(r("WAWebEmptyStateActionTile.react"), {
			Icon: o("WAWebListsGatingUtils").isListsEnabled() ? o("WAWebListPeopleRefreshedIcon.react").ListPeopleRefreshedIcon : o("WAWebLabelOutlineIcon.react").LabelOutlineIcon,
			title: o("WAWebListsGatingUtils").isListsEnabled() ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			),
			clickHandler: u,
			testid: "customer-manager-empty-manage-labels"
		})] }))] }));
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p() {}
	l.default = m;
}), 226);
