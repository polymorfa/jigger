__d("WAWebLeaveAndReportGroupModalV2.react", [
	"fbt",
	"WAWebABProps",
	"WAWebDeleteChatDialogV2.react",
	"WAWebExitGroupAction",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebGroupExitModalLoggingUtils",
	"WAWebGroupSafetyCheckModalLoggingUtils",
	"WAWebName.react",
	"WAWebNetworkStatus",
	"WAWebNoop",
	"WAWebSendSpamChatAction",
	"WAWebSpamConstants",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWamEnumPsGroupSafetyCheckExitDialogActions",
	"WDSConfirmDialog.react",
	"WDSDialogBridge",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState, p = { inlineName: {
		display: "xt0psk2",
		$$css: !0
	} };
	function _(e) {
		var t = e.chat, n = e.spamFlow, a = m(!1), i = a[0], l = a[1], c = m(g(n)), _ = c[0], h = c[1], y = t.id.toJid();
		d(function() {
			o("WAWebGroupExitModalLoggingUtils").logGroupExitModalOpenEvent({
				groupJid: y,
				spamFlow: n
			});
		}, [y, n]);
		var C = function() {
			o("WAWebGroupExitModalLoggingUtils").logGroupExitModalLearnMoreEvent({
				groupJid: y,
				spamFlow: n
			});
		}, b = function() {
			o("WAWebGroupExitModalLoggingUtils").logGroupExitModalCancelEvent({
				groupJid: y,
				spamFlow: n
			}), n === o("WAWebSpamConstants").SpamFlow.GroupSafetyCheckModalUpsell && o("WAWebGroupSafetyCheckModalLoggingUtils").logGroupSafetyCheckExitDialogUIInteractionsEvent({
				groupJid: y,
				interaction: o("WAWebWamEnumPsGroupSafetyCheckExitDialogActions").PS_GROUP_SAFETY_CHECK_EXIT_DIALOG_ACTIONS.GROUP_EXIT_DIALOG_DISMISS
			}), o("WDSDialogBridge").closeWDSDialog();
		};
		async function v() {
			if (!r("WAWebNetworkStatus").online) return o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) })), !1;
			if (n === o("WAWebSpamConstants").SpamFlow.GroupSafetyCheckModalUpsell) {
				var e = _ ? o("WAWebWamEnumPsGroupSafetyCheckExitDialogActions").PS_GROUP_SAFETY_CHECK_EXIT_DIALOG_ACTIONS.GROUP_EXIT_DIALOG_EXIT_AND_REPORT : o("WAWebWamEnumPsGroupSafetyCheckExitDialogActions").PS_GROUP_SAFETY_CHECK_EXIT_DIALOG_ACTIONS.GROUP_EXIT_DIALOG_EXIT;
				o("WAWebGroupSafetyCheckModalLoggingUtils").logGroupSafetyCheckExitDialogUIInteractionsEvent({
					groupJid: y,
					interaction: e
				});
			}
			var a = await o("WAWebExitGroupAction").sendExitGroup(t);
			return a && _ && o("WAWebSendSpamChatAction").sendReport({
				chat: t,
				spamFlow: n
			}), o("WDSDialogBridge").closeWDSDialog(), a;
		}
		async function S() {
			i || (o("WAWebGroupExitModalLoggingUtils").logGroupExitModalExitEvent({
				groupJid: y,
				spamFlow: n,
				reportingEnabled: _
			}), l(!0), await v(), l(!1));
		}
		var R = function(t) {
			o("WAWebGroupExitModalLoggingUtils").logGroupDeleteConfirmationModalDeleteEvent({
				groupJid: y,
				spamFlow: n
			}), t.finally(r("WAWebNoop"));
		}, L = function() {
			o("WAWebGroupExitModalLoggingUtils").logGroupDeleteConfirmationModalCancelEvent({
				groupJid: y,
				spamFlow: n
			});
		};
		async function E() {
			if (!i) {
				o("WAWebGroupExitModalLoggingUtils").logGroupExitModalExitAndDeleteEvent({
					groupJid: y,
					spamFlow: n,
					reportingEnabled: _
				}), l(!0);
				var e = await v();
				l(!1), e && o("WDSDialogBridge").openWDSDialog(u.jsx(r("WAWebDeleteChatDialogV2.react"), {
					chat: t,
					onDeleteOrExit: R,
					onCancel: L
				}));
			}
		}
		var k = s._(
			/*BTDS*/
			"",
			[s._param("group_name", u.jsx(o("WAWebName.react").Name, {
				chat: t,
				titlify: !0,
				xstyle: p.inlineName
			}))]
		), I = s._(
			/*BTDS*/
			""
		), T = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: o("WAWebFaqUrl").getBlockingReportingFaqUrl(),
			testid: "learn-more-link",
			onClick: C,
			children: r("WAWebFbtCommon")("Learn more")
		}), D = s._(
			/*BTDS*/
			"",
			[s._param("link to learn more", T)]
		);
		return u.jsx(r("WDSConfirmDialog.react"), {
			description: I,
			conditional: f(n) ? {
				title: r("WAWebFbtCommon")("Report to WhatsApp"),
				description: D,
				checked: _,
				onChange: function(t) {
					return h(t);
				},
				testid: "report-group-checkbox"
			} : void 0,
			confirmLabel: s._(
				/*BTDS*/
				""
			),
			cancelLabel: s._(
				/*BTDS*/
				""
			),
			destructive: !0,
			onConfirm: function() {
				S();
			},
			onDismiss: b,
			onSecondary: function() {
				E();
			},
			open: !0,
			secondaryLabel: s._(
				/*BTDS*/
				""
			),
			title: k
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		return g(e) || o("WAWebABProps").getABPropConfigValue("improve_group_reporting");
	}
	function g(e) {
		return e === o("WAWebSpamConstants").SpamFlow.GroupFmxCardLeave || e === o("WAWebSpamConstants").SpamFlow.GroupSpamBannerReport || e === o("WAWebSpamConstants").SpamFlow.GroupSafetyCheckModalUpsell;
	}
	l.default = _;
}), 226);
