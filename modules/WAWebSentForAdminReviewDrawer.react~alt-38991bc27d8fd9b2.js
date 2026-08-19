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
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useState;
	function _(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.chat, l = a.onClose, u = a.onMsgFooterClick, d = p([]), _ = d[0], f = d[1];
		m(function() {
			o("WAWebSendForAdminReviewUtils").clearLastReportTimestamp(i), o("WAWebReportToAdminEventsLogger").logRTAReportingEvent({
				reportToAdminInteraction: o("WAWebWamEnumReportToAdminInteraction").REPORT_TO_ADMIN_INTERACTION.CLICK_OPEN_ADMIN_DASHBOARD,
				groupId: i.id.user
			});
			async function e() {
				var e = await o("WAWebReportToAdminJob").getReportedMsgs(i.id);
				if (e) {
					var t = e.msgToReporterAndOrderMap, n = e.reports;
					if (n) {
						var r = await o("WAWebDBMsgUtils").getMsgsByMsgIdsAndChatId(n.reportsReport.map(function(e) {
							return e.messageId;
						}), i.id), a = r.map(function(e) {
							return o("WAWebDBMessageSerialization").messageFromDbRow(e);
						}), l = o("WAWebMsgCollection").MsgCollection.add(a, { merge: !0 }).filter(Boolean), s = async function(n) {
							n.waitForPrep().then(function() {
								var e;
								n.reporterJidList = (e = t.get(n.id.id)) == null ? void 0 : e.reporters;
							});
						};
						for (var u of l) await s(u);
						var c = l.sort(function(e, n) {
							var r, o, a, i;
							return ((r = (o = t.get(e.id.id)) == null ? void 0 : o.order) != null ? r : 0) - ((a = (i = t.get(n.id.id)) == null ? void 0 : i.order) != null ? a : 0);
						});
						f(c);
					}
				}
			}
			e();
		}, [i]);
		var g = new (o("WAWebReportedMsgCollection")).ReportedMsgCollection(), h = function(t) {
			f(_.filter(function(e) {
				return e.id.toString() !== t.toString();
			}));
		};
		o("useWAWebListener").useListener(i.msgs, "change:msgKey", function(e) {
			var t = e.oldKey;
			h(t);
		});
		var y = s._(
			/*BTDS*/
			""
		), C = c.jsx(o("WAWebEmptyState.react").SentForAdminReview, {});
		g.add(_, { sort: !1 });
		var b = _.length === 0 && o("WAWebABProps").getABPropConfigValue("wds_web_text_layout") ? void 0 : s._(
			/*BTDS*/
			""
		);
		return c.jsx(r("WAWebMsgDrawer.react"), {
			testid: "sent-for-admin-review-drawer",
			ref: n,
			msgCollection: g,
			onClose: l,
			chat: i,
			title: y,
			displayType: o("WAWebDisplayType").DISPLAY_TYPE.REPORTED_MSG,
			emptyListText: C,
			onMsgFooterClick: u,
			footerText: b
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
