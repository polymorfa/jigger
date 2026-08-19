__d("WAWebDOIntroPopup.react", [
	"fbt",
	"WAWebAutomaticEventsUserJourneyWamEvent",
	"WAWebClickableLink.react",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebLabelOutlineIcon.react",
	"WAWebListPeopleIcon.react",
	"WAWebListsGatingUtils",
	"WAWebModalManager",
	"WAWebText.react",
	"WAWebWamEnumAutomaticEventsTargetComponentEnum",
	"WAWebWamEnumSmbUserActionTypeEnum",
	"WAWebWdsIllDetectedOutcomesAutomatedLabelsIcon.react",
	"WDSIconIcBolt.react",
	"WDSIconIcSettings.react",
	"WDSMargins.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = ["content", "listsEnabled"], u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useRef, f = {
		marginTop10: {
			marginTop: "x1anpbxc",
			$$css: !0
		},
		paddingInline10: {
			paddingInlineStart: "xe2zdcy",
			paddingInlineEnd: "x2vl965",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		paddingBlock18: {
			paddingTop: "x109j2v6",
			paddingBottom: "x1hhzuzn",
			$$css: !0
		}
	}, g = {
		header: {
			fontSize: "x1603h9y",
			fontWeight: "xk50ysn",
			lineHeight: "x37zpob",
			$$css: !0
		},
		buttonGroupStyle: {
			justifyContent: "x1lvf691",
			paddingBottom: "xs9asl8",
			$$css: !0
		},
		icon: {
			color: "xhslqc4",
			$$css: !0
		}
	}, h = "https://business.facebook.com";
	function y(e) {
		var t = function(n) {
			n.preventDefault(), new (o("WAWebAutomaticEventsUserJourneyWamEvent")).AutomaticEventsUserJourneyWamEvent({
				surface: e.surfaceType,
				smbUserActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
				automaticEventsTargetComponent: o("WAWebWamEnumAutomaticEventsTargetComponentEnum").AUTOMATIC_EVENTS_TARGET_COMPONENT_ENUM.NUX_SCREEN_META_BUSINESS_SUITE
			}).commit(), self.setTimeout(function() {
				return o("WAWebExternalLink.react").openExternalLink(h);
			}, 10);
		}, n = o("WAWebListsGatingUtils").isListsEnabled(), a = n ? [
			{
				Icon: o("WAWebListPeopleIcon.react").ListPeopleIcon,
				title: s._(
					/*BTDS*/
					""
				),
				key: "chats-are-added-to-list-new-order-or-lead"
			},
			{
				Icon: r("WDSIconIcBolt.react"),
				title: s._(
					/*BTDS*/
					""
				),
				key: "organizing-chats-with-auto-created-lists-saves-time"
			},
			{
				Icon: r("WDSIconIcSettings.react"),
				title: s._(
					/*BTDS*/
					""
				),
				key: "change-your-lists-settings-in-tools-tab"
			}
		] : [
			{
				Icon: r("WDSIconIcBolt.react"),
				title: s._(
					/*BTDS*/
					""
				),
				key: "auto-labels-can-help-you-save-time-and-work-more-efficiently"
			},
			{
				Icon: o("WAWebLabelOutlineIcon.react").LabelOutlineIcon,
				title: s._(
					/*BTDS*/
					""
				),
				key: "labels-are-added-new-order-or-lead"
			},
			{
				Icon: r("WDSIconIcSettings.react"),
				title: s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m2", d.jsx(r("WAWebClickableLink.react"), {
						href: h,
						onClick: t,
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				),
				key: "change-your-labeling-settings-in-mbs"
			}
		];
		return d.jsx(C, babelHelpers.extends({
			content: a,
			listsEnabled: n
		}, e));
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(t) {
		var n, a = t.content, i = t.listsEnabled, l = babelHelpers.objectWithoutPropertiesLoose(t, e), u = _();
		p(function() {
			var e;
			(e = u.current) == null || e.focus(), new (o("WAWebAutomaticEventsUserJourneyWamEvent")).AutomaticEventsUserJourneyWamEvent({
				surface: l.surfaceType,
				smbUserActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW,
				automaticEventsTargetComponent: o("WAWebWamEnumAutomaticEventsTargetComponentEnum").AUTOMATIC_EVENTS_TARGET_COMPONENT_ENUM.NUX_SCREEN
			}).commit();
		}, [l.surfaceType]);
		var c = function() {
			new (o("WAWebAutomaticEventsUserJourneyWamEvent")).AutomaticEventsUserJourneyWamEvent({
				surface: l.surfaceType,
				smbUserActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
				automaticEventsTargetComponent: o("WAWebWamEnumAutomaticEventsTargetComponentEnum").AUTOMATIC_EVENTS_TARGET_COMPONENT_ENUM.NUX_SCREEN_OK
			}).commit(), o("WAWebModalManager").ModalManager.close(), l.onContinue == null || l.onContinue();
		};
		return d.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			okText: r("WAWebFbtCommon")("OK"),
			onOK: c,
			ref: u,
			buttonGroupStyle: g.buttonGroupStyle,
			children: [
				d.jsx((n = o("WAWebFlex.react")).FlexRow, {
					align: "center",
					justify: "center",
					children: d.jsx(n.FlexItem, {
						xstyle: [f.marginTop10, f.paddingInline10],
						children: d.jsx(o("WAWebWdsIllDetectedOutcomesAutomatedLabelsIcon.react").WdsIllDetectedOutcomesAutomatedLabelsIcon, {
							width: 90,
							height: 90
						})
					})
				}),
				d.jsx(n.FlexRow, {
					align: "center",
					justify: "center",
					children: d.jsx(n.FlexItem, {
						xstyle: [g.header, f.paddingBlock18],
						children: i ? s._(
							/*BTDS*/
							""
						) : s._(
							/*BTDS*/
							""
						)
					})
				}),
				d.jsx(o("WAWebFlex.react").FlexColumn, { children: a.map(function(e) {
					var t = e.Icon, n = e.description, r = e.key, o = e.title;
					return d.jsx(b, {
						Icon: t,
						title: o,
						description: n
					}, r);
				}) })
			]
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e.Icon, n = e.description, a = e.title;
		return d.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			className: (u || (u = r("stylex")))([o("WDSMargins.stylex").wdsMargins.marginTop20]),
			children: [d.jsx(o("WAWebFlex.react").FlexItem, {
				shrink: 0,
				className: "x1ult018 x1wcu8vx",
				children: d.jsx(t, {
					width: 24,
					iconXstyle: g.icon
				})
			}), d.jsxs(o("WAWebFlex.react").FlexItem, { children: [d.jsx(o("WAWebText.react").WAWebTextTitle, {
				xstyle: o("WDSMargins.stylex").wdsMargins.marginEnd24,
				color: "wdsContentDeemphasized",
				children: a
			}), n != null && d.jsx(o("WAWebText.react").WAWebTextSmall, { children: n })] })]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = y;
}), 226);
