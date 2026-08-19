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
	"asyncToGeneratorRuntime",
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
		var t = e.chat, a = e.enableDeactivateIfSuperAdmin, i = e.onExitAndDeleteSuccess, l = e.onSuccess, c = e.onTransferOwnership, y = e.spamFlow, b = p(!1), v = b[0], S = b[1], R = p(!0), L = R[0], E = R[1], k = p(C(y)), I = k[0], T = k[1], D = m(null);
		d(function() {
			if (a === !0 && D != null && D.current) {
				var e = D.current.getBoundingClientRect();
				e.right > window.innerWidth && L === !0 && E(!1);
			}
		}, [a, L]);
		var x = o("WAWebChatCommunityUtils").isCommunitySuperAdmin(t), $ = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: o("WAWebFaqUrl").getExitCommunityUrl(),
			children: r("WAWebFbtCommon")("Learn more")
		}), P = s._(
			/*BTDS*/
			""
		), N = s._(
			/*BTDS*/
			"",
			[s._param("link to learn more", $)]
		), M = C(y) ? u.jsxs(u.Fragment, { children: [
			u.jsx(o("WAWebCheckBox.react").CheckBox, {
				onChange: function() {
					return T(!I);
				},
				checked: I,
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
				children: N
			})
		] }) : null, w = u.jsxs(u.Fragment, { children: [u.jsx(o("WAWebText.react").WAWebTextSmall, {
			xstyle: o("WDSMargins.stylex").wdsMargins.marginVer12,
			children: P
		}), M] }), A = function() {
			o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) }));
		}, F = function() {
			if (!r("WAWebNetworkStatus").online) {
				A();
				return;
			}
			y === o("WAWebSpamConstants").SpamFlow.GroupSafetyCheckModalUpsell && o("WAWebGroupSafetyCheckModalLoggingUtils").logGroupSafetyCheckExitDialogUIInteractionsEvent({
				groupJid: t.id.toJid(),
				interaction: o("WAWebWamEnumPsGroupSafetyCheckExitDialogActions").PS_GROUP_SAFETY_CHECK_EXIT_DIALOG_ACTIONS.COMMUNITY_EXIT_DIALOG_EXIT
			}), S(!0), o("WAWebExitCommunityAction").sendExitCommunity(t), I && y != null && o("WAWebSendSpamChatAction").sendReport({
				chat: t,
				spamFlow: y
			}), S(!1), o("WAWebModalManager").ModalManager.close(), l == null || l();
		}, O = function() {
			y === o("WAWebSpamConstants").SpamFlow.GroupSafetyCheckModalUpsell && o("WAWebGroupSafetyCheckModalLoggingUtils").logGroupSafetyCheckExitDialogUIInteractionsEvent({
				groupJid: t.id.toJid(),
				interaction: o("WAWebWamEnumPsGroupSafetyCheckExitDialogActions").PS_GROUP_SAFETY_CHECK_EXIT_DIALOG_ACTIONS.COMMUNITY_EXIT_DIALOG_DISMISS
			}), o("WAWebModalManager").ModalManager.close(), l == null || l();
		}, B = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (!r("WAWebNetworkStatus").online) {
					A();
					return;
				}
				y === o("WAWebSpamConstants").SpamFlow.GroupSafetyCheckModalUpsell && o("WAWebGroupSafetyCheckModalLoggingUtils").logGroupSafetyCheckExitDialogUIInteractionsEvent({
					groupJid: t.id.toJid(),
					interaction: o("WAWebWamEnumPsGroupSafetyCheckExitDialogActions").PS_GROUP_SAFETY_CHECK_EXIT_DIALOG_ACTIONS.COMMUNITY_EXIT_DIALOG_EXIT_AND_DELETE
				}), o("WAWebModalManager").ModalManager.close(), o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebDeleteCommunityAndSubgroupsPopup.react"), {
					chat: t,
					shouldReport: I,
					spamFlow: y,
					onExitAndDeleteSuccess: i
				}), { transition: "modal" });
			});
			return function() {
				return e.apply(this, arguments);
			};
		})();
		if (x !== !0) {
			var W = {
				text: s._(
					/*BTDS*/
					""
				),
				onClick: B,
				disabled: v,
				type: "warning"
			}, q = g(t), U = h();
			return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				testid: "leave-community-popup",
				title: q,
				onCancel: O,
				onOverlayClick: O,
				okDisabled: v,
				cancelDisabled: v,
				onOK: F,
				okButtonType: "solid-warning",
				okText: U,
				buttonsDirection: "vertical",
				extraButtonProps: W,
				children: w
			});
		}
		var V = function() {
			o("WAWebModalManager").ModalManager.close(), l == null || l(), c ? c() : o("WAWebDrawerManager").DrawerManager.openDrawerRight(u.jsx(o("WAWebCommunityTransferOwnershipFlowLoadable.react").CommunityTransferOwnershipFlowLoadable, {
				parentGroupChat: t,
				onEnd: o("WAWebDrawerManager").closeDrawerRight
			}), {
				transition: "flow-transition-drawer-push",
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
			});
		}, H = function() {
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
		}, G = s._(
			/*BTDS*/
			""
		), z = r("WAWebFbtCommon")("Cancel"), j = {
			text: s._(
				/*BTDS*/
				""
			),
			onClick: H
		}, K = a === !0 ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), Q = a === !0 ? "leave-community-as-deactivate-instead-popup" : "leave-community-as-creator-or-assign-owner-popup", X = a === !0 ? z : G, Y = a === !0 ? G : z, J = a === !0 ? o("WAWebModalManager").closeModalManager : V, Z = a === !0 ? V : o("WAWebModalManager").closeModalManager, ee = L ? "horizontal" : "vertical";
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, babelHelpers.extends({
			testid: Q,
			cancelText: X,
			okText: Y,
			onCancel: J,
			onOK: Z,
			contentRef: D
		}, a === !0 && {
			extraButtonProps: j,
			type: o("WAWebModal.react").ModalTheme.AutoWrap,
			buttonsDirection: ee
		}, { children: K }));
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		return e === o("WAWebSpamConstants").SpamFlow.GroupFmxCardLeave || e === o("WAWebSpamConstants").SpamFlow.GroupSpamBannerReport || e === o("WAWebSpamConstants").SpamFlow.GroupSafetyCheckModalUpsell;
	}
	l.default = y;
}), 226);
