__d("WAWebLeaveAndReportGroupModal.react", [
	"fbt",
	"WAWebABProps",
	"WAWebCheckBox.react",
	"WAWebConfirmPopup.react",
	"WAWebDeleteChatDialogV2.react",
	"WAWebDeleteChatPopup.react",
	"WAWebExitGroupAction",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebGroupExitModalLoggingUtils",
	"WAWebGroupSafetyCheckModalLoggingUtils",
	"WAWebModalManager",
	"WAWebName.react",
	"WAWebNetworkStatus",
	"WAWebNoop",
	"WAWebSendSpamChatAction",
	"WAWebSpamConstants",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWamEnumPsGroupSafetyCheckExitDialogActions",
	"WDSDialogBridge",
	"WDSMargins.stylex",
	"react",
	"stylex",
	"useVisibility"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useState, m = {
		marginInlineStart25: {
			marginInlineStart: "x1ult018",
			$$css: !0
		},
		marginTop6: {
			marginTop: "x1k70j0n",
			$$css: !0
		}
	};
	function p(t) {
		var n = t.chat, a = t.spamFlow, i = d(!1), l = i[0], u = i[1], p = d(!1), g = p[0], h = p[1], y = d(f(a)), C = y[0], b = y[1], v = n.id.toJid(), S = r("useVisibility")({ onVisible: function() {
			return o("WAWebGroupExitModalLoggingUtils").logGroupExitModalOpenEvent({
				groupJid: v,
				spamFlow: a
			});
		} }), R = S[0], L = function() {
			o("WAWebGroupExitModalLoggingUtils").logGroupExitModalLearnMoreEvent({
				groupJid: v,
				spamFlow: a
			});
		}, E = function() {
			o("WAWebGroupExitModalLoggingUtils").logGroupExitModalCancelEvent({
				groupJid: v,
				spamFlow: a
			}), a === o("WAWebSpamConstants").SpamFlow.GroupSafetyCheckModalUpsell && o("WAWebGroupSafetyCheckModalLoggingUtils").logGroupSafetyCheckExitDialogUIInteractionsEvent({
				groupJid: v,
				interaction: o("WAWebWamEnumPsGroupSafetyCheckExitDialogActions").PS_GROUP_SAFETY_CHECK_EXIT_DIALOG_ACTIONS.GROUP_EXIT_DIALOG_DISMISS
			}), o("WAWebModalManager").ModalManager.close();
		};
		async function k() {
			if (!r("WAWebNetworkStatus").online) return o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) })), !1;
			if (a === o("WAWebSpamConstants").SpamFlow.GroupSafetyCheckModalUpsell) {
				var e = C ? o("WAWebWamEnumPsGroupSafetyCheckExitDialogActions").PS_GROUP_SAFETY_CHECK_EXIT_DIALOG_ACTIONS.GROUP_EXIT_DIALOG_EXIT_AND_REPORT : o("WAWebWamEnumPsGroupSafetyCheckExitDialogActions").PS_GROUP_SAFETY_CHECK_EXIT_DIALOG_ACTIONS.GROUP_EXIT_DIALOG_EXIT;
				o("WAWebGroupSafetyCheckModalLoggingUtils").logGroupSafetyCheckExitDialogUIInteractionsEvent({
					groupJid: v,
					interaction: e
				});
			}
			var t = await o("WAWebExitGroupAction").sendExitGroup(n);
			return t && C && o("WAWebSendSpamChatAction").sendReport({
				chat: n,
				spamFlow: a
			}), o("WAWebModalManager").ModalManager.close(), t;
		}
		async function I() {
			o("WAWebGroupExitModalLoggingUtils").logGroupExitModalExitEvent({
				groupJid: v,
				spamFlow: a,
				reportingEnabled: C
			}), u(!0), await k(), u(!1);
		}
		var T = function(t) {
			o("WAWebGroupExitModalLoggingUtils").logGroupDeleteConfirmationModalDeleteEvent({
				groupJid: v,
				spamFlow: a
			}), t.finally(r("WAWebNoop"));
		}, D = function() {
			o("WAWebGroupExitModalLoggingUtils").logGroupDeleteConfirmationModalCancelEvent({
				groupJid: v,
				spamFlow: a
			});
		};
		async function x() {
			o("WAWebGroupExitModalLoggingUtils").logGroupExitModalExitAndDeleteEvent({
				groupJid: v,
				spamFlow: a,
				reportingEnabled: C
			}), h(!0);
			var e = await k();
			h(!1), e && (o("WAWebABProps").getABPropConfigValue("wds_web_dialog") ? o("WDSDialogBridge").openWDSDialog(c.jsx(r("WAWebDeleteChatDialogV2.react"), {
				chat: n,
				onDeleteOrExit: T,
				onCancel: D
			})) : o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebDeleteChatPopup.react"), {
				chat: n,
				onDeleteOrExit: T,
				onCancel: D
			}), { transition: "modal" }));
		}
		var $ = s._(
			/*BTDS*/
			"",
			[s._param("group_name", c.jsx(o("WAWebName.react").Name, {
				chat: n,
				titlify: !0
			}))]
		), P = s._(
			/*BTDS*/
			""
		), N = s._(
			/*BTDS*/
			""
		), M = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: o("WAWebFaqUrl").getBlockingReportingFaqUrl(),
			testid: "learn-more-link",
			onClick: L,
			children: r("WAWebFbtCommon")("Learn more")
		}), w = s._(
			/*BTDS*/
			"",
			[s._param("link to learn more", M)]
		), A = {
			text: s._(
				/*BTDS*/
				""
			),
			onClick: x,
			spinner: g,
			disabled: g || l,
			type: "warning"
		}, F = _(a) ? c.jsxs(c.Fragment, { children: [c.jsxs("div", {
			className: "x78zum5 x1q0g3np x6s0dn4",
			children: [c.jsx(o("WAWebCheckBox.react").CheckBox, {
				onChange: function() {
					return b(!C);
				},
				checked: C,
				id: "menu-icon-Report-checkbox",
				testid: "report-group-checkbox"
			}), c.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
				color: "primary",
				xstyle: o("WDSMargins.stylex").wdsMargins.marginStart8,
				testid: "report-group-title",
				children: r("WAWebFbtCommon")("Report to WhatsApp")
			})]
		}), c.jsx(o("WAWebText.react").WAWebTextSmall, {
			color: "secondary",
			xstyle: [m.marginInlineStart25, m.marginTop6],
			testid: "report-group-subtext",
			children: w
		})] }) : null;
		return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "leave-report-group"
			},
			onOK: I,
			okText: N,
			contentRef: R,
			okButtonType: "solid-warning",
			onCancel: E,
			onOverlayClick: E,
			okSpinner: l,
			okDisabled: l || g,
			title: $,
			extraButtonProps: A,
			children: c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginVer12), { children: [c.jsx(o("WAWebText.react").WAWebTextSmall, {
				color: "secondary",
				xstyle: o("WDSMargins.stylex").wdsMargins.marginVer12,
				children: P
			}), F] }))
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		return f(e) || o("WAWebABProps").getABPropConfigValue("improve_group_reporting");
	}
	function f(e) {
		return e === o("WAWebSpamConstants").SpamFlow.GroupFmxCardLeave || e === o("WAWebSpamConstants").SpamFlow.GroupSpamBannerReport || e === o("WAWebSpamConstants").SpamFlow.GroupSafetyCheckModalUpsell;
	}
	l.default = p;
}), 226);
