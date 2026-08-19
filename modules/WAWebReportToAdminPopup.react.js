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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(18), n = e.msg, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = s._(
			/*BTDS*/
			""
		), t[0] = r) : r = t[0];
		var a = r, i;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (i = s._(
			/*BTDS*/
			""
		), t[1] = i) : i = t[1];
		var l = i, c;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (c = s._(
			/*BTDS*/
			""
		), t[2] = c) : c = t[2];
		var d = c, m;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (m = s._(
			/*BTDS*/
			""
		), t[3] = m) : m = t[3];
		var p = m, _;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
			/*BTDS*/
			""
		), t[4] = _) : _ = t[4];
		var f = _, g;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (g = s._(
			/*BTDS*/
			""
		), t[5] = g) : g = t[5];
		var h = g, y;
		t[6] !== n ? (y = o("WAWebFrontendMsgGetters").getChat(n), t[6] = n, t[7] = y) : y = t[7];
		var C = y.id, b;
		t[8] !== C || t[9] !== n ? (b = function() {
			o("WAWebReportToAdminEventsLogger").logRTAReportingEvent({
				reportToAdminInteraction: o("WAWebWamEnumReportToAdminInteraction").REPORT_TO_ADMIN_INTERACTION.CLICK_CONFIRM_SEND_FOR_ADMIN_REVIEW,
				groupId: C.user
			});
			var e = new (o("WAWebActionToast.react")).ActionType(p), t = o("WAWebReportToAdminJob").sendForAdminReview(n, C).then(function() {
				return new (o("WAWebActionToast.react")).ActionType(f);
			}).catch(function() {
				return new (o("WAWebActionToast.react")).ActionType(h);
			}).finally(o("WAWebModalManager").closeModalManager);
			o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebActionToast.react").ActionToast, {
				initialAction: e,
				pendingAction: t
			}));
		}, t[8] = C, t[9] = n, t[10] = b) : b = t[10];
		var v = b, S;
		t[11] !== C.user ? (S = function() {
			o("WAWebReportToAdminEventsLogger").logRTAReportingEvent({
				reportToAdminInteraction: o("WAWebWamEnumReportToAdminInteraction").REPORT_TO_ADMIN_INTERACTION.CLICK_CANCEL_SEND_FOR_ADMIN_REVIEW,
				groupId: C.user
			}), o("WAWebModalManager").ModalManager.close();
		}, t[11] = C.user, t[12] = S) : S = t[12];
		var R = S, L;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (L = {
			surface: "unknown",
			viewName: "report-to-admin"
		}, t[13] = L) : L = t[13];
		var E;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (E = u.jsx(o("WAWebText.react").WAWebTextMuted, { children: l }), t[14] = E) : E = t[14];
		var k;
		return t[15] !== R || t[16] !== v ? (k = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: L,
			onOK: v,
			okText: d,
			okButtonType: "solid-warning",
			onCancel: R,
			title: a,
			children: E
		}), t[15] = R, t[16] = v, t[17] = k) : k = t[17], k;
	}
	l.default = c;
}), 226);
