__d("WAWebBizBroadcastProNewBroadcastSendActions.react", [
	"Promise",
	"WAWebBizBroadcastProCurrencyUtils",
	"WAWebBizBroadcastProNewBroadcastSendNowButton.react",
	"WAWebBizBroadcastProScheduleSection.react",
	"WAWebBizBroadcastsCreationStrings",
	"WAWebBusinessBroadcastsGatingUtils",
	"WAWebMsgType",
	"err",
	"react",
	"sumBy",
	"useWAWebBizBroadcastProCreateCampaignMutation",
	"useWAWebOnUnmount"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useMemo, p = c.useRef, _ = 3e4;
	function f(t) {
		var a = t.attachmentData, i = t.buttonData, l = t.currency, s = t.hasRequiredAction, c = t.lifetimeBudget, f = t.maxBid, g = t.message, h = t.selectedAudiences, y = p(null), C = d(function(e) {
			var t = y.current;
			t != null && (window.clearTimeout(t.timeoutID), t.resolve()), y.current = null;
		}, []), b = d(function(e) {
			var t = y.current;
			t != null && (window.clearTimeout(t.timeoutID), t.reject(e)), y.current = null;
		}, []), v = r("useWAWebBizBroadcastProCreateCampaignMutation")(), S = v[0], R = v[1], L = r("useWAWebBizBroadcastProCreateCampaignMutation")(C, b), E = L[0], k = L[1];
		r("useWAWebOnUnmount")(function() {
			var e = y.current;
			e != null && (window.clearTimeout(e.timeoutID), e.reject(r("err")("Scheduled broadcast was cancelled before it completed.")), y.current = null);
		});
		var I = m(function() {
			return Array.from(h);
		}, [h]), T = m(function() {
			return I.map(function(e) {
				return String(e.id);
			});
		}, [I]), D = m(function() {
			return r("sumBy")(I, function(e) {
				return e.audienceSize;
			});
		}, [I]), x = (function(e) {
			return e === o("WAWebMsgType").MSG_TYPE.IMAGE ? "IMAGE" : e === o("WAWebMsgType").MSG_TYPE.VIDEO ? "VIDEO" : null;
		})(a == null ? void 0 : a.mediaType), $ = g.trim() === "", P = a != null, N = P && x == null, M = $ && !P, w = I.length === 0, A = c == null || c <= 0, F = f == null || f <= 0, O = R || k, B = O || M || w || N || A || F || s, W = s ? o("WAWebBizBroadcastsCreationStrings").getPaymentPendingDisabledReason() : null, q = d(function(e, t) {
			e({
				attachmentData: a,
				buttonData: i,
				customAudienceIDs: T,
				lifetimeBudget: o("WAWebBizBroadcastProCurrencyUtils").displayAmountToSmallestUnit(c != null ? c : 0, l),
				message: g,
				rateCard: o("WAWebBizBroadcastProCurrencyUtils").displayAmountToCpmSmallestUnit(f != null ? f : 0, l),
				recipientCount: D,
				startTime: t != null ? t : null
			});
		}, [
			a,
			i,
			l,
			T,
			c,
			f,
			g,
			D
		]), U = d(function() {
			q(S);
		}, [S, q]), V = d(function(t) {
			return y.current != null ? (e || (e = n("Promise"))).reject(r("err")("A broadcast send is already in progress.")) : new (e || (e = (n("Promise"))))(function(e, n) {
				var o = window.setTimeout(function() {
					y.current != null && (y.current = null, n(r("err")("Scheduled broadcast timed out.")));
				}, _);
				y.current = {
					reject: n,
					resolve: e,
					timeoutID: o
				};
				try {
					q(E, t);
				} catch (e) {
					window.clearTimeout(o), y.current = null, n(e instanceof Error ? e : r("err")("Scheduled broadcast failed to start."));
				}
			});
		}, [E, q]);
		return u.jsxs(u.Fragment, { children: [o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProScheduledSendsEnabled() ? u.jsx(r("WAWebBizBroadcastProScheduleSection.react"), {
			onScheduleSend: V,
			disabled: B,
			disabledReason: W
		}) : null, u.jsx(r("WAWebBizBroadcastProNewBroadcastSendNowButton.react"), {
			disabled: B,
			disabledReason: W,
			loading: R,
			onSend: U
		})] });
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 98);
