__d("WAWebLeaveCommunityModal.react", [
	"fbt",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebChatCommunityUtils",
	"WAWebCheckBox.react",
	"WAWebCommunityTransferOwnershipFlowLoadable.react",
	"WAWebConfirmPopup.react",
	"WAWebDeactivateCommunityDrawerLoadable",
	"WAWebDeleteCommunityAndSubgroupsPopup.react",
	"WAWebDrawerManager",
	"WAWebExitCommunityAction",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebGroupSafetyCheckModalLoggingUtils",
	"WAWebKeyboardTabUtils",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebNetworkStatus",
	"WAWebSendSpamChatAction",
	"WAWebSpamConstants",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWamEnumPsGroupSafetyCheckExitDialogActions",
	"WDSMargins.stylex",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useLayoutEffect, m = c.useRef, p = c.useState, _ = {
		marginInlineStart25: {
			marginInlineStart: "x1ult018",
			$$css: !0
		},
		marginTop6: {
			marginTop: "x1k70j0n",
			$$css: !0
		}
	}, f = { checkboxLabel: {
		display: "x1rg5ohu",
		$$css: !0
	} };
	function g(e) {
		return e.formattedTitle ? s._(
			/*BTDS*/
			"",
			[s._param("community-name", e.formattedTitle)]
		) : s._(
			/*BTDS*/
			""
		);
	}
	function h() {
		return s._(
			/*BTDS*/
			""
		);
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.chat, n = e.enableDeactivateIfSuperAdmin, a = e.onExitAndDeleteSuccess, i = e.onSuccess, l = e.onTransferOwnership, c = e.spamFlow, y = p(!1), b = y[0], v = y[1], S = p(!0), R = S[0], L = S[1], E = p(C(c)), k = E[0], I = E[1], T = m(null);
		d(function() {
			if (n === !0 && T != null && T.current) {
				var e = T.current.getBoundingClientRect();
				e.right > window.innerWidth && R === !0 && L(!1);
			}
		}, [n, R]);
		var D = o("WAWebChatCommunityUtils").isCommunitySuperAdmin(t), x = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: o("WAWebFaqUrl").getExitCommunityUrl(),
			children: r("WAWebFbtCommon")("Learn more")
		}), $ = s._(
			/*BTDS*/
			""
		), P = s._(
			/*BTDS*/
			"",
			[s._param("link to learn more", x)]
		), N = C(c) ? u.jsxs(u.Fragment, { children: [
			u.jsx(o("WAWebCheckBox.react").CheckBox, {
				onChange: function() {
					return I(!k);
				},
				checked: k,
				id: "menu-icon-report-checkbox",
				testid: "report-community-checkbox"
			}),
			u.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
				color: "primary",
				xstyle: [f.checkboxLabel, o("WDSMargins.stylex").wdsMargins.marginStart8],
				testid: "report-community-title",
				children: r("WAWebFbtCommon")("Report to WhatsApp")
			}),
			u.jsx(o("WAWebText.react").WAWebTextSmall, {
				color: "secondary",
				xstyle: [_.marginInlineStart25, _.marginTop6],
				testid: "report-community-subtext",
				children: P
			})
		] }) : null, M = u.jsxs(u.Fragment, { children: [u.jsx(o("WAWebText.react").WAWebTextSmall, {
			xstyle: o("WDSMargins.stylex").wdsMargins.marginVer12,
			children: $
		}), N] }), w = function() {
			o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) }));
		}, A = function() {
			if (!r("WAWebNetworkStatus").online) {
				w();
				return;
			}
			c === o("WAWebSpamConstants").SpamFlow.GroupSafetyCheckModalUpsell && o("WAWebGroupSafetyCheckModalLoggingUtils").logGroupSafetyCheckExitDialogUIInteractionsEvent({
				groupJid: t.id.toJid(),
				interaction: o("WAWebWamEnumPsGroupSafetyCheckExitDialogActions").PS_GROUP_SAFETY_CHECK_EXIT_DIALOG_ACTIONS.COMMUNITY_EXIT_DIALOG_EXIT
			}), v(!0), o("WAWebExitCommunityAction").sendExitCommunity(t), k && c != null && o("WAWebSendSpamChatAction").sendReport({
				chat: t,
				spamFlow: c
			}), v(!1), o("WAWebModalManager").ModalManager.close(), i == null || i();
		}, F = function() {
			c === o("WAWebSpamConstants").SpamFlow.GroupSafetyCheckModalUpsell && o("WAWebGroupSafetyCheckModalLoggingUtils").logGroupSafetyCheckExitDialogUIInteractionsEvent({
				groupJid: t.id.toJid(),
				interaction: o("WAWebWamEnumPsGroupSafetyCheckExitDialogActions").PS_GROUP_SAFETY_CHECK_EXIT_DIALOG_ACTIONS.COMMUNITY_EXIT_DIALOG_DISMISS
			}), o("WAWebModalManager").ModalManager.close(), i == null || i();
		}, O = async function() {
			if (!r("WAWebNetworkStatus").online) {
				w();
				return;
			}
			c === o("WAWebSpamConstants").SpamFlow.GroupSafetyCheckModalUpsell && o("WAWebGroupSafetyCheckModalLoggingUtils").logGroupSafetyCheckExitDialogUIInteractionsEvent({
				groupJid: t.id.toJid(),
				interaction: o("WAWebWamEnumPsGroupSafetyCheckExitDialogActions").PS_GROUP_SAFETY_CHECK_EXIT_DIALOG_ACTIONS.COMMUNITY_EXIT_DIALOG_EXIT_AND_DELETE
			}), o("WAWebModalManager").ModalManager.close(), o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebDeleteCommunityAndSubgroupsPopup.react"), {
				chat: t,
				shouldReport: k,
				spamFlow: c,
				onExitAndDeleteSuccess: a
			}), { transition: "modal" });
		};
		if (D !== !0) {
			var B = {
				text: s._(
					/*BTDS*/
					""
				),
				onClick: O,
				disabled: b,
				type: "warning"
			}, W = g(t), q = h();
			return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				testid: "leave-community-popup",
				title: W,
				onCancel: F,
				onOverlayClick: F,
				okDisabled: b,
				cancelDisabled: b,
				onOK: A,
				okButtonType: "solid-warning",
				okText: q,
				buttonsDirection: "vertical",
				extraButtonProps: B,
				children: M
			});
		}
		var U = function() {
			o("WAWebModalManager").ModalManager.close(), i == null || i(), l ? l() : o("WAWebDrawerManager").DrawerManager.openDrawerRight(u.jsx(o("WAWebCommunityTransferOwnershipFlowLoadable.react").CommunityTransferOwnershipFlowLoadable, {
				parentGroupChat: t,
				onEnd: o("WAWebDrawerManager").closeDrawerRight
			}), {
				transition: "flow-transition-drawer-push",
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
			});
		}, V = function() {
			o("WAWebModalManager").ModalManager.close(), o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
				descriptorType: "deactivate_community",
				chat: t
			} : u.jsx(o("WAWebDeactivateCommunityDrawerLoadable").DeactivateCommunityDrawerLoadable, {
				chat: t,
				onBack: o("WAWebDrawerManager").closeDrawerRight
			}), {
				transition: "flow-transition-drawer-push",
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
			});
		}, H = s._(
			/*BTDS*/
			""
		), G = r("WAWebFbtCommon")("Cancel"), z = {
			text: s._(
				/*BTDS*/
				""
			),
			onClick: V
		}, j = n === !0 ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), K = n === !0 ? "leave-community-as-deactivate-instead-popup" : "leave-community-as-creator-or-assign-owner-popup", Q = n === !0 ? G : H, X = n === !0 ? H : G, Y = n === !0 ? o("WAWebModalManager").closeModalManager : U, J = n === !0 ? U : o("WAWebModalManager").closeModalManager, Z = R ? "horizontal" : "vertical";
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, babelHelpers.extends({
			testid: K,
			cancelText: Q,
			okText: X,
			onCancel: Y,
			onOK: J,
			contentRef: T
		}, n === !0 && {
			extraButtonProps: z,
			type: o("WAWebModal.react").ModalTheme.AutoWrap,
			buttonsDirection: Z
		}, { children: j }));
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		return e === o("WAWebSpamConstants").SpamFlow.GroupFmxCardLeave || e === o("WAWebSpamConstants").SpamFlow.GroupSpamBannerReport || e === o("WAWebSpamConstants").SpamFlow.GroupSafetyCheckModalUpsell;
	}
	l.default = y;
}), 226);
