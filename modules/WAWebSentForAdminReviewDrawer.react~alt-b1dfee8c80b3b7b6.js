__d("WAWebSentForAdminReviewDrawer.react", [
	"fbt",
	"WAWebABProps",
	"WAWebDBMessageSerialization",
	"WAWebDBMsgUtils",
	"WAWebDisplayType",
	"WAWebEmptyState.react",
	"WAWebMsgCollection",
	"WAWebMsgDrawer.react",
	"WAWebReportToAdminEventsLogger",
	"WAWebReportToAdminJob",
	"WAWebReportedMsgCollection",
	"WAWebSendForAdminReviewUtils",
	"WAWebWamEnumReportToAdminInteraction",
	"react",
	"react-compiler-runtime",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useState;
	function _(t) {
		var n = o("react-compiler-runtime").c(15), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, u = l.chat, d = l.onClose, _ = l.onMsgFooterClick, h;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (h = [], n[3] = h) : h = n[3];
		var y = p(h), C = y[0], b = y[1], v, S;
		n[4] !== u ? (v = function() {
			o("WAWebSendForAdminReviewUtils").clearLastReportTimestamp(u), o("WAWebReportToAdminEventsLogger").logRTAReportingEvent({
				reportToAdminInteraction: o("WAWebWamEnumReportToAdminInteraction").REPORT_TO_ADMIN_INTERACTION.CLICK_OPEN_ADMIN_DASHBOARD,
				groupId: u.id.user
			});
			var e = async function() {
				var e = await o("WAWebReportToAdminJob").getReportedMsgs(u.id);
				if (e) {
					var t = e.msgToReporterAndOrderMap, n = e.reports;
					if (n) {
						var r = await o("WAWebDBMsgUtils").getMsgsByMsgIdsAndChatId(n.reportsReport.map(g), u.id), a = r.map(f), i = o("WAWebMsgCollection").MsgCollection.add(a, { merge: !0 }).filter(Boolean), l = async function(n) {
							n.waitForPrep().then(function() {
								var e;
								n.reporterJidList = (e = t.get(n.id.id)) == null ? void 0 : e.reporters;
							});
						};
						for (var s of i) await l(s);
						var c = i.sort(function(e, n) {
							var r, o, a, i;
							return ((r = (o = t.get(e.id.id)) == null ? void 0 : o.order) != null ? r : 0) - ((a = (i = t.get(n.id.id)) == null ? void 0 : i.order) != null ? a : 0);
						});
						b(c);
					}
				}
			};
			e();
		}, S = [u], n[4] = u, n[5] = v, n[6] = S) : (v = n[5], S = n[6]), m(v, S);
		var R = new (o("WAWebReportedMsgCollection")).ReportedMsgCollection(), L;
		n[7] !== C ? (L = function(t) {
			b(C.filter(function(e) {
				return e.id.toString() !== t.toString();
			}));
		}, n[7] = C, n[8] = L) : L = n[8];
		var E = L, k;
		n[9] !== E ? (k = function(t) {
			var e = t.oldKey;
			E(e);
		}, n[9] = E, n[10] = k) : k = n[10], o("useWAWebListener").useListener(u.msgs, "change:msgKey", k);
		var I;
		n[11] === Symbol.for("react.memo_cache_sentinel") ? (I = s._(
			/*BTDS*/
			""
		), n[11] = I) : I = n[11];
		var T = I, D;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (D = c.jsx(o("WAWebEmptyState.react").SentForAdminReview, {}), n[12] = D) : D = n[12];
		var x = D;
		R.add(C, { sort: !1 });
		var $;
		n[13] !== C.length ? ($ = C.length === 0 && o("WAWebABProps").getABPropConfigValue("wds_web_text_layout") ? void 0 : s._(
			/*BTDS*/
			""
		), n[13] = C.length, n[14] = $) : $ = n[14];
		var P = $;
		return c.jsx(r("WAWebMsgDrawer.react"), {
			testid: "sent-for-admin-review-drawer",
			ref: i,
			msgCollection: R,
			onClose: d,
			chat: u,
			title: T,
			displayType: o("WAWebDisplayType").DISPLAY_TYPE.REPORTED_MSG,
			emptyListText: x,
			onMsgFooterClick: _,
			footerText: P
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		return o("WAWebDBMessageSerialization").messageFromDbRow(e);
	}
	function g(e) {
		return e.messageId;
	}
	l.default = _;
}), 226);
