__d("WAWebNewsletterRemediationOptionDeleteUpdate.react", [
	"fbt",
	"WAWebCommonNewsletterIntegrityStrings",
	"WAWebDeleteIcon.react",
	"WAWebDeleteRevokeMsgFlow.react",
	"WAWebEnforcementActionLogging",
	"WAWebFrontendMsgGetters",
	"WAWebModalManager",
	"WAWebNewsletterAlertsRowComponent.react",
	"WAWebNewsletterIntegrityDeleteStatus.react",
	"WAWebRevokeMetricUtils",
	"WAWebStateUtils",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = { secondaryColor: {
		color: "xhslqc4",
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(11), n = e.isStatusContent, a = e.msgModel, i = e.onBack, l;
		t[0] !== n || t[1] !== a || t[2] !== i ? (l = function(t) {
			t.preventDefault(), t.stopPropagation(), r("WAWebEnforcementActionLogging").logDeleteFromChannelClick(), n === !0 ? o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebNewsletterIntegrityDeleteStatus.react"), {
				msg: a,
				onDeleteSuccess: i
			})) : (o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebDeleteRevokeMsgFlow.react"), {
				chat: o("WAWebFrontendMsgGetters").getChat(a),
				fromChannelAlerts: !0,
				msgList: [o("WAWebStateUtils").unproxy(a)],
				onEnd: i
			})), o("WAWebRevokeMetricUtils").UiRevokeActionHelper.startSession(), o("WAWebRevokeMetricUtils").UiRevokeActionHelper.messageSelected());
		}, t[0] = n, t[1] = a, t[2] = i, t[3] = l) : l = t[3];
		var d = l, m;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (m = u.jsx(o("WAWebDeleteIcon.react").DeleteIcon, {
			height: 24,
			width: 24,
			iconXstyle: c.secondaryColor
		}), t[4] = m) : m = t[4];
		var p;
		t[5] !== n ? (p = n === !0 ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[5] = n, t[6] = p) : p = t[6];
		var _;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (_ = o("WAWebCommonNewsletterIntegrityStrings").deleteViolatingContentText(), t[7] = _) : _ = t[7];
		var f;
		return t[8] !== d || t[9] !== p ? (f = u.jsx(r("WAWebNewsletterAlertsRowComponent.react"), {
			icon: m,
			onClick: d,
			showBottomBorder: !1,
			showDetailRight: !1,
			subtitle: p,
			testId: "newsletter-remediation-options-drawer-delete",
			title: _
		}), t[8] = d, t[9] = p, t[10] = f) : f = t[10], f;
	}
	l.default = d;
}), 226);
