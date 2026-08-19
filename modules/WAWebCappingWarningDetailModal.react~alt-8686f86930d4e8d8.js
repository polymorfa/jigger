__d("WAWebCappingWarningDetailModal.react", [
	"fbt",
	"WAWebBizBroadcastDeviceCapabilityCommon",
	"WAWebBusinessBroadcastHomeFlowLoadable",
	"WAWebCappingOTERequestModalLoadable.react",
	"WAWebCappingUsageModalLoadable.react",
	"WAWebCappingWarningDetailModalLoadable.react",
	"WAWebDrawerManager",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebIndividualNewChatMessageCappingLimitUtils",
	"WAWebIndividualNewChatMessageCappingLogEvents",
	"WAWebKeyboardTabUtils",
	"WAWebL10N",
	"WAWebMobilePlatforms",
	"WAWebModalManager",
	"WAWebText.react",
	"WAWebUserPrefsTypes",
	"WAWebWamEnumEntryPoint",
	"WAWebWamEnumSurfaceType",
	"WDSButtonGroup.react",
	"WDSDialog.react",
	"WDSDialogBridge",
	"WDSIconIcBlock.react",
	"WDSIconIcCheck.react",
	"WDSIconIcDomain.react",
	"WDSIconWdsIcBroadcastMessage.react",
	"WDSIconWdsIcChat.react",
	"WDSIllustrationWdsPictoMessageReportFeedbackWarning.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useEffect, d = {
		bulletIcon: {
			color: "xhslqc4",
			$$css: !0
		},
		bulletIconContainer: {
			width: "xvy4d1p",
			$$css: !0
		}
	};
	function m() {
		var e, t, n = o("WAWebIndividualNewChatMessageCappingLimitUtils").getCappingWarningLevel(), a = o("WAWebIndividualNewChatMessageCappingLimitUtils").getCappingData(), i = (e = a == null ? void 0 : a.used_quota) != null ? e : 0, l = (t = a == null ? void 0 : a.total_quota) != null ? t : 0, m = o("WAWebMobilePlatforms").isSMB(), p = m && o("WAWebIndividualNewChatMessageCappingLimitUtils").isOTEEligible(), _ = m && !p && o("WAWebBizBroadcastDeviceCapabilityCommon").isBizBroadcastEnabledAndDeviceSupported(!1);
		c(function() {
			o("WAWebIndividualNewChatMessageCappingLogEvents").logView(o("WAWebWamEnumSurfaceType").SURFACE_TYPE.MESSAGE_CAPPING_NUX, JSON.stringify(o("WAWebIndividualNewChatMessageCappingLimitUtils").getCappingData() || {}), o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD_CAPPING_ALERT_CARD);
		}, []);
		var f = n === o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType.SECOND_WARNING, g;
		f ? g = s._(
			/*BTDS*/
			"",
			[s._param("used", r("WAWebL10N").n(i)), s._param("total", r("WAWebL10N").n(l))]
		) : m ? g = s._(
			/*BTDS*/
			""
		) : g = s._(
			/*BTDS*/
			""
		);
		var h = function() {
			o("WDSDialogBridge").closeWDSDialog(), o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getWhatsAppBusinessHomeUrl());
		}, y = function() {
			o("WDSDialogBridge").closeWDSDialog(), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(u.jsx(o("WAWebBusinessBroadcastHomeFlowLoadable").WAWebBusinessBroadcastHomeFlowLoadable, {
				entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.MESSAGE_CAPPING_NUX,
				onClose: function() {
					return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
				}
			}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
		}, C = function() {
			o("WDSDialogBridge").closeWDSDialog(), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebCappingOTERequestModalLoadable.react").CappingOTERequestModalLoadable, {}));
		}, b = function() {
			o("WDSDialogBridge").closeWDSDialog(), o("WDSDialogBridge").openWDSDialog(u.jsx(o("WAWebCappingUsageModalLoadable.react").CappingUsageModalLoadable, { onBack: function() {
				o("WDSDialogBridge").closeWDSDialog(), o("WDSDialogBridge").openWDSDialog(u.jsx(o("WAWebCappingWarningDetailModalLoadable.react").CappingWarningDetailModalLoadable, {}));
			} }));
		}, v = u.jsx(o("WAWebText.react").WAWebClickableText, {
			onClick: b,
			color: "primary",
			children: u.jsx(r("WDSText.react"), {
				type: "Body2Emphasized",
				colorName: "contentActionEmphasized",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), S = s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m2", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: m ? o("WAWebFaqUrl").getSMBIndividualNewChatMessageCappingHCAUrl() : o("WAWebFaqUrl").getConsumerIndividualNewChatMessageCappingHCAUrl(),
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		), R = [{
			icon: u.jsx("span", {
				className: "x1rg5ohu xt8t1vi x1xc408v x129tdwq x15urzxu xjbqb8w x1ktv7sr x142x0oa xv7zg05 x12dgle5 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1uebkx7 xp93uhy x1yepkla x19mw7rs xhslqc4 x1120s5i",
				children: u.jsx(r("WDSIconIcCheck.react"), {
					width: 20,
					height: 18
				})
			}),
			text: s._(
				/*BTDS*/
				""
			),
			testid: "capping-warning-detail-bullet-1"
		}, {
			icon: u.jsx(r("WDSIconIcBlock.react"), {
				width: 24,
				height: 24,
				iconXstyle: d.bulletIcon
			}),
			text: s._(
				/*BTDS*/
				"",
				[s._param("settingsLink", v)]
			),
			testid: "capping-warning-detail-bullet-2"
		}];
		p ? R.push({
			icon: u.jsx(r("WDSIconWdsIcChat.react"), {
				width: 24,
				height: 24,
				iconXstyle: d.bulletIcon
			}),
			text: s._(
				/*BTDS*/
				""
			),
			testid: "capping-warning-detail-bullet-3"
		}) : _ ? R.push({
			icon: u.jsx(r("WDSIconWdsIcBroadcastMessage.react"), {
				width: 24,
				height: 24,
				iconXstyle: d.bulletIcon
			}),
			text: s._(
				/*BTDS*/
				""
			),
			testid: "capping-warning-detail-bullet-3"
		}) : m || R.push({
			icon: u.jsx(r("WDSIconIcDomain.react"), {
				width: 24,
				height: 24,
				iconXstyle: d.bulletIcon
			}),
			text: s._(
				/*BTDS*/
				""
			),
			testid: "capping-warning-detail-bullet-3"
		});
		var L, E, k, I;
		p ? (L = s._(
			/*BTDS*/
			""
		), E = C, k = s._(
			/*BTDS*/
			""
		), I = h) : _ ? (L = s._(
			/*BTDS*/
			""
		), E = y, k = s._(
			/*BTDS*/
			""
		), I = h) : m ? (L = s._(
			/*BTDS*/
			""
		), E = h, k = s._(
			/*BTDS*/
			""
		), I = o("WDSDialogBridge").closeWDSDialog) : (L = s._(
			/*BTDS*/
			""
		), E = h, k = s._(
			/*BTDS*/
			""
		), I = o("WDSDialogBridge").closeWDSDialog);
		var T = u.jsx(r("WDSButtonGroup.react"), {
			orientation: "stacked",
			width: "fill",
			primaryButtonProps: {
				label: L,
				onPress: E,
				variant: "filled",
				testid: "popup-controls-ok"
			},
			secondaryButtonProps: {
				label: k,
				onPress: I,
				variant: "outline",
				testid: "popup-controls-cancel"
			}
		});
		return u.jsxs(r("WDSDialog.react"), {
			closeButton: !0,
			footer: T,
			headerMedia: u.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				children: u.jsx(r("WDSIllustrationWdsPictoMessageReportFeedbackWarning.react"), {
					"aria-hidden": !0,
					testid: "capping-warning-detail-illustration"
				})
			}),
			headerType: "expressive",
			layoutType: "expressive",
			onDismiss: o("WDSDialogBridge").closeWDSDialog,
			open: !0,
			size: "md",
			testid: "capping-warning-detail-modal",
			title: g,
			children: [u.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				paddingBottom: 16,
				children: u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					testid: "capping-warning-detail-subtitle",
					textAlign: "center",
					children: S
				})
			}), u.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "start",
				justify: "start",
				children: R.map(function(e) {
					var t = e.icon, n = e.testid, a = e.text;
					return u.jsxs(o("WAWebFlex.react").FlexRow, {
						testid: n,
						paddingStart: 8,
						paddingTop: 4,
						paddingBottom: 4,
						marginBottom: 8,
						columnGap: 24,
						align: "center",
						children: [u.jsx(o("WAWebFlex.react").FlexColumn, {
							justify: "center",
							align: "center",
							shrink: 0,
							xstyle: d.bulletIconContainer,
							children: t
						}), u.jsx(o("WAWebFlex.react").FlexColumn, {
							align: "center",
							alignSelf: "center",
							children: u.jsx(r("WDSText.react"), {
								type: "Body2",
								colorName: "contentDefault",
								children: a
							})
						})]
					}, n);
				})
			})]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.CappingWarningDetailModal = m;
}), 226);
