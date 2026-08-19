__d("WAWebSafetyToolsModal.react", [
	"fbt",
	"WAWebBlockContactUtils",
	"WAWebBlockContants",
	"WAWebCellV2.react",
	"WAWebChevronIcon.react",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebPsFmxActionWamEvent",
	"WAWebReportContactDialogUtils",
	"WAWebSettingsBlockedIcon.react",
	"WAWebSpamConstants",
	"WAWebThumbsDownIcon.react",
	"WAWebWamEnumFmxEntryPoint",
	"WAWebWamEnumFmxEvent",
	"WDSIconIcDialpad.react",
	"WDSIconIcPerson.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		secondaryColor: {
			color: "xhslqc4",
			$$css: !0
		},
		criticalColor: {
			color: "x30a034",
			$$css: !0
		},
		paddingTop16: {
			paddingTop: "xyamay9",
			$$css: !0
		},
		paddingTop8: {
			paddingTop: "x1y1aw1k",
			$$css: !0
		}
	};
	function d(e, t) {
		o("WAWebModalManager").ModalManager.open(u.jsx(p, {
			chat: t,
			contact: e
		}));
	}
	function m(e) {
		var t = e.trusted ? o("WAWebSpamConstants").SpamFlow.ChatFmxCardSafetyToolsReport : o("WAWebSpamConstants").SpamFlow.ChatFmxCardSafetyToolsReportSuspicious;
		o("WAWebReportContactDialogUtils").openReportContactPopup(e, t);
	}
	function p(e) {
		var t = e.chat, n = e.contact, a = function(t) {
			new (o("WAWebPsFmxActionWamEvent")).PsFmxActionWamEvent({
				fmxEvent: t,
				fmxEntryPoint: o("WAWebWamEnumFmxEntryPoint").FMX_ENTRY_POINT.SAFETY_TOOLS
			}).commit();
		}, i = function() {
			a(o("WAWebWamEnumFmxEvent").FMX_EVENT.LEARN_MORE), o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getSafetyToolsFaqUrl());
		}, l = function() {
			a(o("WAWebWamEnumFmxEvent").FMX_EVENT.REPORT), o("WAWebModalManager").closeModalManager(), m(t);
		}, d = function() {
			a(o("WAWebWamEnumFmxEvent").FMX_EVENT.BLOCK), o("WAWebModalManager").closeModalManager(), o("WAWebBlockContactUtils").handleBlock(t, t.trusted ? o("WAWebBlockContants").BlockEntryPoint.ChatFmxCardSafetyToolsBlock : o("WAWebBlockContants").BlockEntryPoint.ChatFmxCardSafetyToolsBlockSuspicious);
		};
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "fmx-safety-tools"
			},
			cancelText: r("WAWebFbtCommon")("Learn more"),
			okText: s._(
				/*BTDS*/
				""
			),
			onCancel: i,
			onOK: o("WAWebModalManager").closeModalManager,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [
				u.jsx(r("WDSText.react"), {
					type: "Headline2",
					colorName: "contentDefault",
					children: s._(
						/*BTDS*/
						""
					)
				}),
				u.jsx(r("WDSText.react"), {
					type: "Body1",
					colorName: "contentDefault",
					xstyle: c.paddingTop16,
					children: s._(
						/*BTDS*/
						""
					)
				}),
				u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					xstyle: c.paddingTop8,
					children: s._(
						/*BTDS*/
						""
					)
				}),
				u.jsxs(o("WAWebFlex.react").FlexColumn, {
					alignSelf: "stretch",
					gap: 4,
					padding: [16, 0],
					children: [!n.isContactBlocked && u.jsx(r("WAWebCellV2.react"), {
						colorScheme: "lightest",
						detailLeft: u.jsx(o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon, { iconXstyle: c.criticalColor }),
						detailRight: u.jsx(o("WAWebChevronIcon.react").ChevronIcon, { directional: !0 }),
						onClick: d,
						testid: "fmx-safety-tools-block-contact",
						primary: u.jsx(r("WDSText.react"), {
							type: "Body1",
							colorName: "secondaryNegative",
							children: s._(
								/*BTDS*/
								""
							)
						}),
						size: "medium"
					}), u.jsx(r("WAWebCellV2.react"), {
						colorScheme: "lightest",
						detailLeft: u.jsx(o("WAWebThumbsDownIcon.react").ThumbsDownIcon, { iconXstyle: c.criticalColor }),
						detailRight: u.jsx(o("WAWebChevronIcon.react").ChevronIcon, { directional: !0 }),
						onClick: l,
						testid: "fmx-safety-tools-report-contact",
						primary: u.jsx(r("WDSText.react"), {
							type: "Body1",
							colorName: "secondaryNegative",
							children: s._(
								/*BTDS*/
								""
							)
						}),
						size: "medium"
					})]
				}),
				u.jsx(r("WDSText.react"), {
					type: "Body1",
					colorName: "contentDefault",
					children: s._(
						/*BTDS*/
						""
					)
				}),
				u.jsxs(o("WAWebFlex.react").FlexColumn, {
					alignSelf: "stretch",
					paddingTop: 8,
					children: [u.jsx(r("WAWebCellV2.react"), {
						colorScheme: "lightest",
						detailLeft: u.jsx(r("WDSIconIcPerson.react"), { iconXstyle: c.secondaryColor }),
						interactive: !1,
						primary: u.jsx(r("WDSText.react"), {
							type: "Body1",
							colorName: "contentDefault",
							children: s._(
								/*BTDS*/
								""
							)
						}),
						secondary: u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: s._(
								/*BTDS*/
								""
							)
						}),
						size: "medium"
					}), u.jsx(r("WAWebCellV2.react"), {
						colorScheme: "lightest",
						detailLeft: u.jsx(r("WDSIconIcDialpad.react"), { iconXstyle: c.secondaryColor }),
						interactive: !1,
						primary: u.jsx(r("WDSText.react"), {
							type: "Body1",
							colorName: "contentDefault",
							children: s._(
								/*BTDS*/
								""
							)
						}),
						secondary: u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: s._(
								/*BTDS*/
								""
							)
						}),
						size: "medium"
					})]
				})
			] })
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.displaySafetyToolsModal = d;
}), 226);
