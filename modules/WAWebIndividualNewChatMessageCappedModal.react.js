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
	"react",
	"react-compiler-runtime"
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
		var e = o("react-compiler-runtime").c(15), t, n, a, i, l, d, _, h, C, b, v, S, R;
		if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
			var L, E, k = o("WAWebIndividualNewChatMessageCappingLimitUtils").getCappingData(), I = (L = k == null ? void 0 : k.used_quota) != null ? L : 0, T = (E = k == null ? void 0 : k.total_quota) != null ? E : 0, D = o("WAWebIndividualNewChatMessageCappingLimitUtils").getCycleEndDateFormatted(r("WAWebL10N").getFullLocale()), x = o("WAWebMobilePlatforms").isSMB(), $ = x && o("WAWebIndividualNewChatMessageCappingLimitUtils").isOTEEligible(), P = x && !$ && o("WAWebBizBroadcastDeviceCapabilityCommon").isBizBroadcastEnabledAndDeviceSupported(!1), N = y, M = g, w = f, A = p, F = u.jsx(o("WAWebText.react").WAWebClickableText, {
				onClick: A,
				color: "primary",
				children: u.jsx(r("WDSText.react"), {
					type: "Body2Emphasized",
					colorName: "contentActionEmphasized",
					children: s._(
						/*BTDS*/
						""
					)
				})
			});
			a = s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m2", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebMobilePlatforms").isSMB() ? o("WAWebFaqUrl").getSMBIndividualNewChatMessageCappingHCAUrl() : o("WAWebFaqUrl").getConsumerIndividualNewChatMessageCappingHCAUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			), n = [{
				icon: u.jsx(r("WDSIconIcBlock.react"), {
					width: 24,
					height: 24,
					iconXstyle: c.bulletIcon
				}),
				text: D !== "" ? s._(
					/*BTDS*/
					"",
					[s._param("date", u.jsx(r("WDSText.react"), {
						type: "Body2Emphasized",
						colorName: "contentDefault",
						children: D
					})), s._param("settingsLink", F)]
				) : s._(
					/*BTDS*/
					"",
					[s._param("settingsLink", F)]
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
			}], $ ? n.push({
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
			}) : P ? n.push({
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
			}) : x || n.push({
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
			var O, B, W, q;
			$ ? (O = s._(
				/*BTDS*/
				""
			), B = w, W = s._(
				/*BTDS*/
				""
			), q = N) : P ? (O = s._(
				/*BTDS*/
				""
			), B = M, W = s._(
				/*BTDS*/
				""
			), q = N) : x ? (O = s._(
				/*BTDS*/
				""
			), B = N, W = s._(
				/*BTDS*/
				""
			), q = o("WDSDialogBridge").closeWDSDialog) : (O = s._(
				/*BTDS*/
				""
			), B = N, W = s._(
				/*BTDS*/
				""
			), q = o("WDSDialogBridge").closeWDSDialog);
			var U = u.jsx(r("WDSButtonGroup.react"), {
				orientation: "stacked",
				width: "fill",
				primaryButtonProps: {
					label: O,
					onPress: B,
					variant: "filled",
					testid: "popup-controls-ok"
				},
				secondaryButtonProps: {
					label: W,
					onPress: q,
					variant: "outline",
					testid: "popup-controls-cancel"
				}
			});
			t = r("WDSDialog.react"), i = !0, l = U, d = u.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				children: u.jsx(r("WDSIllustrationWdsPictoMessageReportFeedbackWarning.react"), {
					"aria-hidden": !0,
					testid: "individual-new-chat-message-capped-modal-illustration"
				})
			}), _ = "expressive", h = "expressive", C = o("WDSDialogBridge").closeWDSDialog, b = !0, v = "md", S = "individual-new-chat-message-capped-modal", R = s._(
				/*BTDS*/
				"",
				[s._param("used", r("WAWebL10N").n(I)), s._param("total", r("WAWebL10N").n(T))]
			), e[0] = t, e[1] = n, e[2] = a, e[3] = i, e[4] = l, e[5] = d, e[6] = _, e[7] = h, e[8] = C, e[9] = b, e[10] = v, e[11] = S, e[12] = R;
		} else t = e[0], n = e[1], a = e[2], i = e[3], l = e[4], d = e[5], _ = e[6], h = e[7], C = e[8], b = e[9], v = e[10], S = e[11], R = e[12];
		var V;
		e[13] === Symbol.for("react.memo_cache_sentinel") ? (V = u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			paddingBottom: 16,
			children: u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				testid: "individual-new-chat-message-capped-modal-subtitle",
				textAlign: "center",
				children: a
			})
		}), e[13] = V) : V = e[13];
		var H;
		return e[14] === Symbol.for("react.memo_cache_sentinel") ? (H = u.jsxs(t, {
			closeButton: i,
			footer: l,
			headerMedia: d,
			headerType: _,
			layoutType: h,
			onDismiss: C,
			open: b,
			size: v,
			testid: S,
			title: R,
			children: [V, u.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "start",
				justify: "start",
				children: n.map(m)
			})]
		}), e[14] = H) : H = e[14], H;
	}
	function m(e) {
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
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p() {
		o("WDSDialogBridge").closeWDSDialog(), o("WDSDialogBridge").openWDSDialog(u.jsx(o("WAWebCappingUsageModalLoadable.react").CappingUsageModalLoadable, { onBack: _ }));
	}
	function _() {
		o("WDSDialogBridge").closeWDSDialog(), o("WDSDialogBridge").openWDSDialog(u.jsx(o("WAWebIndividualNewChatMessageCappedModalLoadable.react").IndividualNewChatMessageCappedModalLoadable, {}));
	}
	function f() {
		o("WDSDialogBridge").closeWDSDialog(), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebCappingOTERequestModalLoadable.react").CappingOTERequestModalLoadable, {}));
	}
	function g() {
		o("WDSDialogBridge").closeWDSDialog(), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(u.jsx(o("WAWebBusinessBroadcastHomeFlowLoadable").WAWebBusinessBroadcastHomeFlowLoadable, {
			entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.MESSAGE_CAPPING_NUX,
			onClose: h
		}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
	}
	function h() {
		return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
	}
	function y() {
		o("WDSDialogBridge").closeWDSDialog(), o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getWhatsAppBusinessHomeUrl());
	}
	l.IndividualNewChatMessageCappedModal = d;
}), 226);
