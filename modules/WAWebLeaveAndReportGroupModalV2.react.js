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
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState, p = { inlineName: {
		display: "xt0psk2",
		$$css: !0
	} };
	function _(e) {
		var t = e.chat, a = e.spamFlow, i = m(!1), l = i[0], c = i[1], _ = m(g(a)), h = _[0], y = _[1], C = t.id.toJid();
		d(function() {
			o("WAWebGroupExitModalLoggingUtils").logGroupExitModalOpenEvent({
				groupJid: C,
				spamFlow: a
			});
		}, [C, a]);
		var b = function() {
			o("WAWebGroupExitModalLoggingUtils").logGroupExitModalLearnMoreEvent({
				groupJid: C,
				spamFlow: a
			});
		}, v = function() {
			o("WAWebGroupExitModalLoggingUtils").logGroupExitModalCancelEvent({
				groupJid: C,
				spamFlow: a
			}), a === o("WAWebSpamConstants").SpamFlow.GroupSafetyCheckModalUpsell && o("WAWebGroupSafetyCheckModalLoggingUtils").logGroupSafetyCheckExitDialogUIInteractionsEvent({
				groupJid: C,
				interaction: o("WAWebWamEnumPsGroupSafetyCheckExitDialogActions").PS_GROUP_SAFETY_CHECK_EXIT_DIALOG_ACTIONS.GROUP_EXIT_DIALOG_DISMISS
			}), o("WDSDialogBridge").closeWDSDialog();
		};
		function S() {
			return R.apply(this, arguments);
		}
		function R() {
			return R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (!r("WAWebNetworkStatus").online) return o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) })), !1;
				if (a === o("WAWebSpamConstants").SpamFlow.GroupSafetyCheckModalUpsell) {
					var e = h ? o("WAWebWamEnumPsGroupSafetyCheckExitDialogActions").PS_GROUP_SAFETY_CHECK_EXIT_DIALOG_ACTIONS.GROUP_EXIT_DIALOG_EXIT_AND_REPORT : o("WAWebWamEnumPsGroupSafetyCheckExitDialogActions").PS_GROUP_SAFETY_CHECK_EXIT_DIALOG_ACTIONS.GROUP_EXIT_DIALOG_EXIT;
					o("WAWebGroupSafetyCheckModalLoggingUtils").logGroupSafetyCheckExitDialogUIInteractionsEvent({
						groupJid: C,
						interaction: e
					});
				}
				var n = yield o("WAWebExitGroupAction").sendExitGroup(t);
				return n && h && o("WAWebSendSpamChatAction").sendReport({
					chat: t,
					spamFlow: a
				}), o("WDSDialogBridge").closeWDSDialog(), n;
			}), R.apply(this, arguments);
		}
		function L() {
			return E.apply(this, arguments);
		}
		function E() {
			return E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				l || (o("WAWebGroupExitModalLoggingUtils").logGroupExitModalExitEvent({
					groupJid: C,
					spamFlow: a,
					reportingEnabled: h
				}), c(!0), yield S(), c(!1));
			}), E.apply(this, arguments);
		}
		var k = function(t) {
			o("WAWebGroupExitModalLoggingUtils").logGroupDeleteConfirmationModalDeleteEvent({
				groupJid: C,
				spamFlow: a
			}), t.finally(r("WAWebNoop"));
		}, I = function() {
			o("WAWebGroupExitModalLoggingUtils").logGroupDeleteConfirmationModalCancelEvent({
				groupJid: C,
				spamFlow: a
			});
		};
		function T() {
			return D.apply(this, arguments);
		}
		function D() {
			return D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (!l) {
					o("WAWebGroupExitModalLoggingUtils").logGroupExitModalExitAndDeleteEvent({
						groupJid: C,
						spamFlow: a,
						reportingEnabled: h
					}), c(!0);
					var e = yield S();
					c(!1), e && o("WDSDialogBridge").openWDSDialog(u.jsx(r("WAWebDeleteChatDialogV2.react"), {
						chat: t,
						onDeleteOrExit: k,
						onCancel: I
					}));
				}
			}), D.apply(this, arguments);
		}
		var x = s._(
			/*BTDS*/
			"",
			[s._param("group_name", u.jsx(o("WAWebName.react").Name, {
				chat: t,
				titlify: !0,
				xstyle: p.inlineName
			}))]
		), $ = s._(
			/*BTDS*/
			""
		), P = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: o("WAWebFaqUrl").getBlockingReportingFaqUrl(),
			testid: "learn-more-link",
			onClick: b,
			children: r("WAWebFbtCommon")("Learn more")
		}), N = s._(
			/*BTDS*/
			"",
			[s._param("link to learn more", P)]
		);
		return u.jsx(r("WDSConfirmDialog.react"), {
			description: $,
			conditional: f(a) ? {
				title: r("WAWebFbtCommon")("Report to WhatsApp"),
				description: N,
				checked: h,
				onChange: function(t) {
					return y(t);
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
				L();
			},
			onDismiss: v,
			onSecondary: function() {
				T();
			},
			open: !0,
			secondaryLabel: s._(
				/*BTDS*/
				""
			),
			title: x
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
