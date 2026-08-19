__d("useWAWebBizBroadcastResolvedCampaignSentAts", [
	"Promise",
	"WALogger",
	"WAWebBizBroadcastCampaignDataLayer",
	"WAWebBroadcastConsts",
	"WAWebCmd",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c = u || (u = o("react")), d = c.useEffect, m = c.useRef, p = c.useState;
	function _(e) {
		var t = o("react-compiler-runtime").c(6), r = p(C), a = r[0], i = r[1], l = m(a), u, c;
		t[0] !== a ? (u = function() {
			l.current = a;
		}, c = [a], t[0] = a, t[1] = u, t[2] = c) : (u = t[1], c = t[2]), d(u, c);
		var _, y;
		return t[3] !== e ? (_ = function() {
			var t = !1, r = (function() {
				var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					var r = l.current, o = e.filter(function(e) {
						return e.campaignModelForLazyMedia != null && !r.has(e.campaignId);
					});
					if (o.length !== 0) {
						var a = yield (s || (s = n("Promise"))).all(o.map(h));
						t || a.every(g) || i(function(e) {
							var t = new Map(e);
							for (var n of a) n.sentAt != null && t.set(n.campaignId, n.sentAt);
							return t;
						});
					}
				});
				function o() {
					return r.apply(this, arguments);
				}
				return o;
			})(), a = function() {
				r().catch(f);
			};
			a();
			var u = function() {
				a();
			};
			return o("WAWebCmd").Cmd.on(o("WAWebBroadcastConsts").BIZ_BROADCAST_CAMPAIGN_UPDATED_EVENT, u), (function() {
				t = !0, o("WAWebCmd").Cmd.off(o("WAWebBroadcastConsts").BIZ_BROADCAST_CAMPAIGN_UPDATED_EVENT, u);
			});
		}, y = [e], t[3] = e, t[4] = _, t[5] = y) : (_ = t[4], y = t[5]), d(_, y), a;
	}
	function f(t) {
		o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[useWAWebBizBroadcastResolvedCampaignSentAts] Failed to resolve campaign send times"]))).catching(r("getErrorSafe")(t)).sendLogs("biz-broadcast-resolve-sent-at");
	}
	function g(e) {
		return e.sentAt == null;
	}
	function h(e) {
		return y.apply(this, arguments);
	}
	function y() {
		return y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.campaignModelForLazyMedia, n = t != null ? yield o("WAWebBizBroadcastCampaignDataLayer").resolveCampaignSentAtMs(t.msgId, t.broadcastJid) : null;
			return {
				campaignId: e.campaignId,
				sentAt: n
			};
		}), y.apply(this, arguments);
	}
	function C() {
		return new Map();
	}
	l.default = _;
}), 98);
