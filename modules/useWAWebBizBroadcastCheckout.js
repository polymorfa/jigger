__d("useWAWebBizBroadcastCheckout", [
	"Promise",
	"WALogger",
	"WAWebBackendErrors",
	"WAWebBizBroadcastCreationQPLLogger",
	"WAWebBizBroadcastPendingCampaignsUtils",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebGetSMBMeteredMessagingCheckoutJob",
	"WAWebWidToJid",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _ = p || (p = o("react")), f = _.useCallback, g = _.useEffect, h = _.useMemo, y = _.useState, C = 1e3, b = 2e3;
	function v() {
		return S.apply(this, arguments);
	}
	function S() {
		return S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield o("WAWebBizBroadcastPendingCampaignsUtils").getBizBroadcastPendingCampaigns();
			if (e.length !== 0) {
				var t = e.map(function(e) {
					return {
						campaignFreeReservedMsgs: e.freeReservedMsgs,
						campaignSendTimestamp: e.sendTimestamp
					};
				});
				return { campaignArgs: t };
			}
		}), S.apply(this, arguments);
	}
	function R(e, t) {
		return L.apply(this, arguments);
	}
	function L() {
		return L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var r = (function() {
				var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					var n, r, a = yield v();
					return o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[useWAWebBizBroadcastCheckout] Including ", " pending campaigns"])), (n = a == null || (r = a.campaignArgs) == null ? void 0 : r.length) != null ? n : 0), o("WAWebGetSMBMeteredMessagingCheckoutJob").getSMBMeteredMessagingCheckout({
						hasSkipDedupe: t,
						hasUseAdAccount: !0,
						pendingCampaignsArgs: a,
						toArgs: e.map(function(e) {
							return { toJid: o("WAWebWidToJid").widToUserJid(e) };
						})
					});
				});
				return function() {
					return r.apply(this, arguments);
				};
			})();
			try {
				return yield r();
			} catch (e) {
				return o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[useWAWebBizBroadcastCheckout] First attempt failed (", "), retrying..."])), String(e)), yield new (m || (m = (n("Promise"))))(function(e) {
					return window.setTimeout(e, C);
				}), r();
			}
		}), L.apply(this, arguments);
	}
	function E(t, r) {
		var a, i, l = (a = r == null ? void 0 : r.enabled) != null ? a : !0, c = (i = r == null ? void 0 : r.skipDedupe) != null ? i : !1, d = y(null), m = d[0], p = d[1], _ = y(!1), C = _[0], v = _[1], S = y(null), L = S[0], E = S[1], k = y(0), I = k[0], T = k[1], D = t.length > b, x = f(function() {
			T(function(e) {
				return e + 1;
			});
		}, []), $ = h(function() {
			return {
				attempt: I + 1,
				recipientWids: t,
				skipDedupe: c
			};
		}, [
			t,
			c,
			I
		]);
		return g(function() {
			if (!(!l || $.recipientWids.length === 0 || D)) {
				o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.pointOnce(o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastQPLPoints.CHECKOUT_FETCH_START);
				var t = !1;
				return n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					v(!0), E(null);
					try {
						o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
							"[useWAWebBizBroadcastCheckout] Fetching checkout data for ",
							" recipients (attempt ",
							")"
						])), $.recipientWids.length, $.attempt);
						var n = yield R($.recipientWids, $.skipDedupe);
						if (t) return;
						o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[useWAWebBizBroadcastCheckout] Checkout data fetched successfully"]))), p(n);
					} catch (e) {
						if (t) return;
						var r = e instanceof o("WAWebBackendErrors").ServerStatusCodeError ? e.statusCode : null, a = String(e), i = o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[useWAWebBizBroadcastCheckout] Checkout failed after 2 attempts"])));
						e instanceof Error && i.catching(e), i.sendLogs("business-broadcast-checkout-fetch-failed"), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.checkoutFetchFailed(a, r), E(a);
					} finally {
						t || v(!1);
					}
				})(), function() {
					t = !0;
				};
			}
		}, [
			l,
			D,
			$
		]), D ? {
			checkoutData: null,
			error: "too_many_recipients",
			isLoading: !1,
			refetch: x
		} : {
			checkoutData: m,
			error: L,
			isLoading: C,
			refetch: x
		};
	}
	l.default = E;
}), 98);
