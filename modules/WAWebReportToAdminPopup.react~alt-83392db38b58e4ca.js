__d("WAWebReportToAdminPopup.react", [
	"fbt",
	"WAWebActionToast.react",
	"WAWebConfirmPopup.react",
	"WAWebFrontendMsgGetters",
	"WAWebModalManager",
	"WAWebReportToAdminEventsLogger",
	"WAWebReportToAdminJob",
	"WAWebText.react",
	"WAWebToastManager",
	"WAWebWamEnumReportToAdminInteraction",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.msg, n = s._(
			/*BTDS*/
			""
		), r = s._(
			/*BTDS*/
			""
		), a = s._(
			/*BTDS*/
			""
		), i = s._(
			/*BTDS*/
			""
		), l = s._(
			/*BTDS*/
			""
		), c = s._(
			/*BTDS*/
			""
		), d = o("WAWebFrontendMsgGetters").getChat(t).id, m = function() {
			o("WAWebReportToAdminEventsLogger").logRTAReportingEvent({
				reportToAdminInteraction: o("WAWebWamEnumReportToAdminInteraction").REPORT_TO_ADMIN_INTERACTION.CLICK_CONFIRM_SEND_FOR_ADMIN_REVIEW,
				groupId: d.user
			});
			var e = new (o("WAWebActionToast.react")).ActionType(i), n = o("WAWebReportToAdminJob").sendForAdminReview(t, d).then(function() {
				return new (o("WAWebActionToast.react")).ActionType(l);
			}).catch(function() {
				return new (o("WAWebActionToast.react")).ActionType(c);
			}).finally(o("WAWebModalManager").closeModalManager);
			o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebActionToast.react").ActionToast, {
				initialAction: e,
				pendingAction: n
			}));
		}, p = function() {
			o("WAWebReportToAdminEventsLogger").logRTAReportingEvent({
				reportToAdminInteraction: o("WAWebWamEnumReportToAdminInteraction").REPORT_TO_ADMIN_INTERACTION.CLICK_CANCEL_SEND_FOR_ADMIN_REVIEW,
				groupId: d.user
			}), o("WAWebModalManager").ModalManager.close();
		};
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "report-to-admin"
			},
			onOK: m,
			okText: a,
			okButtonType: "solid-warning",
			onCancel: p,
			title: n,
			children: u.jsx(o("WAWebText.react").WAWebTextMuted, { children: r })
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
