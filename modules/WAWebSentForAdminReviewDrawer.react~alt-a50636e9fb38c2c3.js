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
	"asyncToGeneratorRuntime",
	"react",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useState;
	function _(t) {
		var a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.chat, u = i.onClose, d = i.onMsgFooterClick, _ = p([]), f = _[0], g = _[1];
		m(function() {
			o("WAWebSendForAdminReviewUtils").clearLastReportTimestamp(l), o("WAWebReportToAdminEventsLogger").logRTAReportingEvent({
				reportToAdminInteraction: o("WAWebWamEnumReportToAdminInteraction").REPORT_TO_ADMIN_INTERACTION.CLICK_OPEN_ADMIN_DASHBOARD,
				groupId: l.id.user
			});
			function e() {
				return t.apply(this, arguments);
			}
			function t() {
				return t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					var e = yield o("WAWebReportToAdminJob").getReportedMsgs(l.id);
					if (e) {
						var t = e.msgToReporterAndOrderMap, n = e.reports;
						if (n) {
							var r = yield o("WAWebDBMsgUtils").getMsgsByMsgIdsAndChatId(n.reportsReport.map(function(e) {
								return e.messageId;
							}), l.id), a = r.map(function(e) {
								return o("WAWebDBMessageSerialization").messageFromDbRow(e);
							}), i = o("WAWebMsgCollection").MsgCollection.add(a, { merge: !0 }).filter(Boolean), s = function* (n) {
								n.waitForPrep().then(function() {
									var e;
									n.reporterJidList = (e = t.get(n.id.id)) == null ? void 0 : e.reporters;
								});
							};
							for (var u of i) yield* s(u);
							var c = i.sort(function(e, n) {
								var r, o, a, i;
								return ((r = (o = t.get(e.id.id)) == null ? void 0 : o.order) != null ? r : 0) - ((a = (i = t.get(n.id.id)) == null ? void 0 : i.order) != null ? a : 0);
							});
							g(c);
						}
					}
				}), t.apply(this, arguments);
			}
			e();
		}, [l]);
		var h = new (o("WAWebReportedMsgCollection")).ReportedMsgCollection(), y = function(t) {
			g(f.filter(function(e) {
				return e.id.toString() !== t.toString();
			}));
		};
		o("useWAWebListener").useListener(l.msgs, "change:msgKey", function(e) {
			var t = e.oldKey;
			y(t);
		});
		var C = s._(
			/*BTDS*/
			""
		), b = c.jsx(o("WAWebEmptyState.react").SentForAdminReview, {});
		h.add(f, { sort: !1 });
		var v = f.length === 0 && o("WAWebABProps").getABPropConfigValue("wds_web_text_layout") ? void 0 : s._(
			/*BTDS*/
			""
		);
		return c.jsx(r("WAWebMsgDrawer.react"), {
			testid: "sent-for-admin-review-drawer",
			ref: a,
			msgCollection: h,
			onClose: u,
			chat: l,
			title: C,
			displayType: o("WAWebDisplayType").DISPLAY_TYPE.REPORTED_MSG,
			emptyListText: b,
			onMsgFooterClick: d,
			footerText: v
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
