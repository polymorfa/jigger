__d("WAWebLeaveCommunityModalV2.react", [
	"fbt",
	"WAWebDeleteCommunityAndSubgroupsPopup.react",
	"WAWebExitCommunityAction",
	"WAWebFbtCommon",
	"WAWebGroupSafetyCheckModalLoggingUtils",
	"WAWebModalManager",
	"WAWebNetworkStatus",
	"WAWebSendSpamChatAction",
	"WAWebSpamConstants",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWamEnumPsGroupSafetyCheckExitDialogActions",
	"WDSButtonGroup.react",
	"WDSDialog.react",
	"WDSDialogBridge",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.chat, n = e.onExitAndDeleteSuccess, a = e.onSuccess, i = e.spamFlow, l = t.id.toJid(), c = t.formattedTitle ? s._(
			/*BTDS*/
			"",
			[s._param("community-name", t.formattedTitle)]
		) : s._(
			/*BTDS*/
			""
		), m = s._(
			/*BTDS*/
			""
		), p = function() {
			o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) }));
		}, _ = function() {
			i === o("WAWebSpamConstants").SpamFlow.GroupSafetyCheckModalUpsell && o("WAWebGroupSafetyCheckModalLoggingUtils").logGroupSafetyCheckExitDialogUIInteractionsEvent({
				groupJid: l,
				interaction: o("WAWebWamEnumPsGroupSafetyCheckExitDialogActions").PS_GROUP_SAFETY_CHECK_EXIT_DIALOG_ACTIONS.COMMUNITY_EXIT_DIALOG_DISMISS
			}), o("WDSDialogBridge").closeWDSDialog(), a == null || a();
		}, f = function() {
			if (!r("WAWebNetworkStatus").online) {
				p();
				return;
			}
			i === o("WAWebSpamConstants").SpamFlow.GroupSafetyCheckModalUpsell && o("WAWebGroupSafetyCheckModalLoggingUtils").logGroupSafetyCheckExitDialogUIInteractionsEvent({
				groupJid: l,
				interaction: o("WAWebWamEnumPsGroupSafetyCheckExitDialogActions").PS_GROUP_SAFETY_CHECK_EXIT_DIALOG_ACTIONS.COMMUNITY_EXIT_DIALOG_EXIT
			}), o("WAWebExitCommunityAction").sendExitCommunity(t), d(i) && i != null && o("WAWebSendSpamChatAction").sendReport({
				chat: t,
				spamFlow: i
			}), o("WDSDialogBridge").closeWDSDialog(), a == null || a();
		}, g = function() {
			if (!r("WAWebNetworkStatus").online) {
				p();
				return;
			}
			i === o("WAWebSpamConstants").SpamFlow.GroupSafetyCheckModalUpsell && o("WAWebGroupSafetyCheckModalLoggingUtils").logGroupSafetyCheckExitDialogUIInteractionsEvent({
				groupJid: l,
				interaction: o("WAWebWamEnumPsGroupSafetyCheckExitDialogActions").PS_GROUP_SAFETY_CHECK_EXIT_DIALOG_ACTIONS.COMMUNITY_EXIT_DIALOG_EXIT_AND_DELETE
			}), o("WDSDialogBridge").closeWDSDialog(), o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebDeleteCommunityAndSubgroupsPopup.react"), {
				chat: t,
				shouldReport: d(i),
				spamFlow: i,
				onExitAndDeleteSuccess: n
			}), { transition: "modal" });
		}, h = u.jsx(r("WDSButtonGroup.react"), {
			orientation: "stacked",
			width: "fill",
			primaryButtonProps: {
				label: s._(
					/*BTDS*/
					""
				),
				onPress: f,
				testid: "popup-controls-ok",
				type: "destructive",
				variant: "outline"
			},
			secondaryButtonProps: {
				label: s._(
					/*BTDS*/
					""
				),
				onPress: g,
				testid: "popup-controls-extra",
				type: "destructive",
				variant: "outline"
			},
			tertiaryButtonProps: {
				label: r("WAWebFbtCommon")("Cancel"),
				onPress: _,
				testid: "popup-controls-cancel",
				variant: "borderless"
			}
		});
		return u.jsx(r("WDSDialog.react"), {
			closeButton: !1,
			description: m,
			footer: h,
			headerType: "expressive",
			layoutType: "expressive",
			onDismiss: _,
			open: !0,
			size: "sm",
			testid: "leave-community-popup",
			title: c
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		return e === o("WAWebSpamConstants").SpamFlow.GroupFmxCardLeave || e === o("WAWebSpamConstants").SpamFlow.GroupSpamBannerReport || e === o("WAWebSpamConstants").SpamFlow.GroupSafetyCheckModalUpsell;
	}
	l.default = c;
}), 226);
