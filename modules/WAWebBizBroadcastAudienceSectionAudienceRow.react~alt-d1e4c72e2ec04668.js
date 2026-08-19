__d("WAWebBizBroadcastAudienceSectionAudienceRow.react", [
	"fbt",
	"WAWebBizBroadcastsCreationStrings",
	"WAWebBizBroadcastsHomeStrings",
	"WAWebBroadcastConsts",
	"WAWebDefaultProfilePicture.react",
	"WAWebFlex.react",
	"WAWebWamEnumEntryPoint",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSIconIcEdit.react",
	"WDSText.react",
	"WDSTooltip.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		listItem: {
			alignItems: "x6s0dn4",
			rowGap: "x8a3fw1",
			columnGap: "x1aj3ljl",
			$$css: !0
		},
		rowButtons: {
			columnGap: "x1trrmfo",
			$$css: !0
		},
		textContainer: {
			flexGrow: "x1iyjqo2",
			minWidth: "xeuugli",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.audienceName, n = e.entryPoint, a = e.handleDeleteAudience, i = e.handleEditAudience, l = e.isDuplicate, s = l === void 0 ? !1 : l, d = e.isPredicateExpression, m = e.recipientCount;
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: c.listItem,
			children: [
				u.jsx(o("WAWebFlex.react").FlexItem, {
					shrink: 0,
					children: u.jsx(r("WAWebDefaultProfilePicture.react"), {
						type: "business-broadcast",
						size: o("WAWebBroadcastConsts").DEFAULT_PROFILE_PICTURE_SIZE
					})
				}),
				u.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: c.textContainer,
					children: [u.jsx("div", {
						className: "x193iq5w",
						children: u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDefault",
							maxLines: 1,
							testid: "audience-name",
							children: t
						})
					}), u.jsx("div", {
						className: "x193iq5w",
						children: u.jsx(r("WDSText.react"), {
							type: "Body3",
							colorName: "contentDeemphasized",
							testid: "audience-recipient-count",
							children: o("WAWebBizBroadcastsCreationStrings").getAudienceRecipientCountLabel(m)
						})
					})]
				}),
				u.jsx(p, {
					entryPoint: n,
					handleDeleteAudience: a,
					handleEditAudience: i,
					isDuplicate: s,
					isPredicateExpression: d
				})
			]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e, t) {
		return e === o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD && !t;
	}
	function p(e) {
		var t = e.entryPoint, n = e.handleDeleteAudience, a = e.handleEditAudience, i = e.isDuplicate, l = i === void 0 ? !1 : i, d = e.isPredicateExpression;
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: c.rowButtons,
			shrink: 0,
			children: [u.jsx(r("WDSTooltip.react"), {
				disabled: !d,
				label: o("WAWebBizBroadcastsHomeStrings").getEditAudienceOnPhoneLabel(),
				children: u.jsx(r("WDSButton.react"), {
					"aria-label": s._(
						/*BTDS*/
						""
					),
					variant: "borderless",
					size: "small",
					type: "default",
					Icon: r("WDSIconIcEdit.react"),
					onPress: a,
					disabled: d,
					testid: "edit-audience-button"
				})
			}), !m(t, l) && u.jsx(r("WDSButton.react"), {
				"aria-label": s._(
					/*BTDS*/
					""
				),
				variant: "borderless",
				size: "small",
				type: "default",
				Icon: r("WDSIconIcClose.react"),
				onPress: n,
				testid: "remove-audience-button"
			})]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = d;
}), 226);
