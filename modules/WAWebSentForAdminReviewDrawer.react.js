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
	"react-compiler-runtime",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useState;
	function _(t) {
		var a = o("react-compiler-runtime").c(15), i, l;
		a[0] !== t ? (l = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), a[0] = t, a[1] = i, a[2] = l) : (i = a[1], l = a[2]);
		var u = i, d = u.chat, _ = u.onClose, h = u.onMsgFooterClick, y;
		a[3] === Symbol.for("react.memo_cache_sentinel") ? (y = [], a[3] = y) : y = a[3];
		var C = p(y), b = C[0], v = C[1], S, R;
		a[4] !== d ? (S = function() {
			o("WAWebSendForAdminReviewUtils").clearLastReportTimestamp(d), o("WAWebReportToAdminEventsLogger").logRTAReportingEvent({
				reportToAdminInteraction: o("WAWebWamEnumReportToAdminInteraction").REPORT_TO_ADMIN_INTERACTION.CLICK_OPEN_ADMIN_DASHBOARD,
				groupId: d.id.user
			});
			var e = (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					var e = yield o("WAWebReportToAdminJob").getReportedMsgs(d.id);
					if (e) {
						var t = e.msgToReporterAndOrderMap, n = e.reports;
						if (n) {
							var r = yield o("WAWebDBMsgUtils").getMsgsByMsgIdsAndChatId(n.reportsReport.map(g), d.id), a = r.map(f), i = o("WAWebMsgCollection").MsgCollection.add(a, { merge: !0 }).filter(Boolean), l = function* (n) {
								n.waitForPrep().then(function() {
									var e;
									n.reporterJidList = (e = t.get(n.id.id)) == null ? void 0 : e.reporters;
								});
							};
							for (var s of i) yield* l(s);
							var u = i.sort(function(e, n) {
								var r, o, a, i;
								return ((r = (o = t.get(e.id.id)) == null ? void 0 : o.order) != null ? r : 0) - ((a = (i = t.get(n.id.id)) == null ? void 0 : i.order) != null ? a : 0);
							});
							v(u);
						}
					}
				});
				function t() {
					return e.apply(this, arguments);
				}
				return t;
			})();
			e();
		}, R = [d], a[4] = d, a[5] = S, a[6] = R) : (S = a[5], R = a[6]), m(S, R);
		var L = new (o("WAWebReportedMsgCollection")).ReportedMsgCollection(), E;
		a[7] !== b ? (E = function(t) {
			v(b.filter(function(e) {
				return e.id.toString() !== t.toString();
			}));
		}, a[7] = b, a[8] = E) : E = a[8];
		var k = E, I;
		a[9] !== k ? (I = function(t) {
			var e = t.oldKey;
			k(e);
		}, a[9] = k, a[10] = I) : I = a[10], o("useWAWebListener").useListener(d.msgs, "change:msgKey", I);
		var T;
		a[11] === Symbol.for("react.memo_cache_sentinel") ? (T = s._(
			/*BTDS*/
			""
		), a[11] = T) : T = a[11];
		var D = T, x;
		a[12] === Symbol.for("react.memo_cache_sentinel") ? (x = c.jsx(o("WAWebEmptyState.react").SentForAdminReview, {}), a[12] = x) : x = a[12];
		var $ = x;
		L.add(b, { sort: !1 });
		var P;
		a[13] !== b.length ? (P = b.length === 0 && o("WAWebABProps").getABPropConfigValue("wds_web_text_layout") ? void 0 : s._(
			/*BTDS*/
			""
		), a[13] = b.length, a[14] = P) : P = a[14];
		var N = P;
		return c.jsx(r("WAWebMsgDrawer.react"), {
			testid: "sent-for-admin-review-drawer",
			ref: l,
			msgCollection: L,
			onClose: _,
			chat: d,
			title: D,
			displayType: o("WAWebDisplayType").DISPLAY_TYPE.REPORTED_MSG,
			emptyListText: $,
			onMsgFooterClick: h,
			footerText: N
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
