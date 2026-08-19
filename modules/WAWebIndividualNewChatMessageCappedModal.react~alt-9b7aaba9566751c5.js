__d("WAWebIndividualNewChatMessageCappedModal.react", [
	"fbt",
	"WAWebBizBroadcastDeviceCapabilityCommon",
	"WAWebBusinessBroadcastHomeFlowLoadable",
	"WAWebCappingOTERequestModalLoadable.react",
	"WAWebCappingUsageModalLoadable.react",
	"WAWebDrawerManager",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebIndividualNewChatMessageCappedModalLoadable.react",
	"WAWebIndividualNewChatMessageCappingLimitUtils",
	"WAWebKeyboardTabUtils",
	"WAWebL10N",
	"WAWebMobilePlatforms",
	"WAWebModalManager",
	"WAWebText.react",
	"WAWebWamEnumEntryPoint",
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
	var e, u = e || (e = o("react")), c = {
		bulletIcon: {
			color: "xhslqc4",
			$$css: !0
		},
		bulletIconContainer: {
			width: "xvy4d1p",
			$$css: !0
		}
	};
	function d() {
		var e, t, n = o("WAWebIndividualNewChatMessageCappingLimitUtils").getCappingData(), a = (e = n == null ? void 0 : n.used_quota) != null ? e : 0, i = (t = n == null ? void 0 : n.total_quota) != null ? t : 0, l = o("WAWebIndividualNewChatMessageCappingLimitUtils").getCycleEndDateFormatted(r("WAWebL10N").getFullLocale()), d = o("WAWebMobilePlatforms").isSMB(), m = d && o("WAWebIndividualNewChatMessageCappingLimitUtils").isOTEEligible(), p = d && !m && o("WAWebBizBroadcastDeviceCapabilityCommon").isBizBroadcastEnabledAndDeviceSupported(!1), _ = function() {
			o("WDSDialogBridge").closeWDSDialog(), o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getWhatsAppBusinessHomeUrl());
		}, f = function() {
			o("WDSDialogBridge").closeWDSDialog(), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(u.jsx(o("WAWebBusinessBroadcastHomeFlowLoadable").WAWebBusinessBroadcastHomeFlowLoadable, {
				entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.MESSAGE_CAPPING_NUX,
				onClose: function() {
					return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
				}
			}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
		}, g = function() {
			o("WDSDialogBridge").closeWDSDialog(), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebCappingOTERequestModalLoadable.react").CappingOTERequestModalLoadable, {}));
		}, h = function() {
			o("WDSDialogBridge").closeWDSDialog(), o("WDSDialogBridge").openWDSDialog(u.jsx(o("WAWebCappingUsageModalLoadable.react").CappingUsageModalLoadable, { onBack: function() {
				o("WDSDialogBridge").closeWDSDialog(), o("WDSDialogBridge").openWDSDialog(u.jsx(o("WAWebIndividualNewChatMessageCappedModalLoadable.react").IndividualNewChatMessageCappedModalLoadable, {}));
			} }));
		}, y = u.jsx(o("WAWebText.react").WAWebClickableText, {
			onClick: h,
			color: "primary",
			children: u.jsx(r("WDSText.react"), {
				type: "Body2Emphasized",
				colorName: "contentActionEmphasized",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), C = s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m2", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: o("WAWebMobilePlatforms").isSMB() ? o("WAWebFaqUrl").getSMBIndividualNewChatMessageCappingHCAUrl() : o("WAWebFaqUrl").getConsumerIndividualNewChatMessageCappingHCAUrl(),
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		), b = [{
			icon: u.jsx(r("WDSIconIcBlock.react"), {
				width: 24,
				height: 24,
				iconXstyle: c.bulletIcon
			}),
			text: l !== "" ? s._(
				/*BTDS*/
				"",
				[s._param("date", u.jsx(r("WDSText.react"), {
					type: "Body2Emphasized",
					colorName: "contentDefault",
					children: l
				})), s._param("settingsLink", y)]
			) : s._(
				/*BTDS*/
				"",
				[s._param("settingsLink", y)]
			),
			testid: "individual-new-chat-message-capped-modal-bullet-1"
		}, {
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
			testid: "individual-new-chat-message-capped-modal-bullet-2"
		}];
		m ? b.push({
			icon: u.jsx(r("WDSIconWdsIcChat.react"), {
				width: 24,
				height: 24,
				iconXstyle: c.bulletIcon
			}),
			text: s._(
				/*BTDS*/
				""
			),
			testid: "individual-new-chat-message-capped-modal-bullet-3"
		}) : p ? b.push({
			icon: u.jsx(r("WDSIconWdsIcBroadcastMessage.react"), {
				width: 24,
				height: 24,
				iconXstyle: c.bulletIcon
			}),
			text: s._(
				/*BTDS*/
				""
			),
			testid: "individual-new-chat-message-capped-modal-bullet-3"
		}) : d || b.push({
			icon: u.jsx(r("WDSIconIcDomain.react"), {
				width: 24,
				height: 24,
				iconXstyle: c.bulletIcon
			}),
			text: s._(
				/*BTDS*/
				""
			),
			testid: "individual-new-chat-message-capped-modal-bullet-3"
		});
		var v, S, R, L;
		m ? (v = s._(
			/*BTDS*/
			""
		), S = g, R = s._(
			/*BTDS*/
			""
		), L = _) : p ? (v = s._(
			/*BTDS*/
			""
		), S = f, R = s._(
			/*BTDS*/
			""
		), L = _) : d ? (v = s._(
			/*BTDS*/
			""
		), S = _, R = s._(
			/*BTDS*/
			""
		), L = o("WDSDialogBridge").closeWDSDialog) : (v = s._(
			/*BTDS*/
			""
		), S = _, R = s._(
			/*BTDS*/
			""
		), L = o("WDSDialogBridge").closeWDSDialog);
		var E = u.jsx(r("WDSButtonGroup.react"), {
			orientation: "stacked",
			width: "fill",
			primaryButtonProps: {
				label: v,
				onPress: S,
				variant: "filled",
				testid: "popup-controls-ok"
			},
			secondaryButtonProps: {
				label: R,
				onPress: L,
				variant: "outline",
				testid: "popup-controls-cancel"
			}
		});
		return u.jsxs(r("WDSDialog.react"), {
			closeButton: !0,
			footer: E,
			headerMedia: u.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				children: u.jsx(r("WDSIllustrationWdsPictoMessageReportFeedbackWarning.react"), {
					"aria-hidden": !0,
					testid: "individual-new-chat-message-capped-modal-illustration"
				})
			}),
			headerType: "expressive",
			layoutType: "expressive",
			onDismiss: o("WDSDialogBridge").closeWDSDialog,
			open: !0,
			size: "md",
			testid: "individual-new-chat-message-capped-modal",
			title: s._(
				/*BTDS*/
				"",
				[s._param("used", r("WAWebL10N").n(a)), s._param("total", r("WAWebL10N").n(i))]
			),
			children: [u.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				paddingBottom: 16,
				children: u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					testid: "individual-new-chat-message-capped-modal-subtitle",
					textAlign: "center",
					children: C
				})
			}), u.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "start",
				justify: "start",
				children: b.map(function(e) {
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
							xstyle: c.bulletIconContainer,
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
	d.displayName = d.name + " [from " + i.id + "]", l.IndividualNewChatMessageCappedModal = d;
}), 226);
