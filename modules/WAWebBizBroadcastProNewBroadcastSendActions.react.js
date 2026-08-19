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
	"react-compiler-runtime",
	"sumBy",
	"useWAWebBizBroadcastProCreateCampaignMutation",
	"useWAWebOnUnmount"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useMemo, p = c.useRef, _ = 3e4;
	function f(t) {
		var a = o("react-compiler-runtime").c(40), i = t.attachmentData, l = t.buttonData, s = t.currency, c = t.hasRequiredAction, d = t.lifetimeBudget, m = t.maxBid, f = t.message, C = t.selectedAudiences, b = p(null), v;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (v = function(t) {
			var e = b.current;
			e != null && (window.clearTimeout(e.timeoutID), e.resolve()), b.current = null;
		}, a[0] = v) : v = a[0];
		var S = v, R;
		a[1] === Symbol.for("react.memo_cache_sentinel") ? (R = function(t) {
			var e = b.current;
			e != null && (window.clearTimeout(e.timeoutID), e.reject(t)), b.current = null;
		}, a[1] = R) : R = a[1];
		var L = R, E = r("useWAWebBizBroadcastProCreateCampaignMutation")(), k = E[0], I = E[1], T = r("useWAWebBizBroadcastProCreateCampaignMutation")(S, L), D = T[0], x = T[1], $;
		a[2] === Symbol.for("react.memo_cache_sentinel") ? ($ = function() {
			var e = b.current;
			e != null && (window.clearTimeout(e.timeoutID), e.reject(r("err")("Scheduled broadcast was cancelled before it completed.")), b.current = null);
		}, a[2] = $) : $ = a[2], r("useWAWebOnUnmount")($);
		var P;
		a[3] !== C ? (P = Array.from(C), a[3] = C, a[4] = P) : P = a[4];
		var N = P, M;
		a[5] !== N ? (M = N.map(y), a[5] = N, a[6] = M) : M = a[6];
		var w = M, A;
		a[7] !== N ? (A = r("sumBy")(N, h), a[7] = N, a[8] = A) : A = a[8];
		var F = A, O = g(i == null ? void 0 : i.mediaType), B;
		a[9] !== f ? (B = f.trim(), a[9] = f, a[10] = B) : B = a[10];
		var W = B === "", q = i != null, U = q && O == null, V = W && !q, H = N.length === 0, G = d == null || d <= 0, z = m == null || m <= 0, j = I || x, K = j || V || H || U || G || z || c, Q;
		a[11] !== c ? (Q = c ? o("WAWebBizBroadcastsCreationStrings").getPaymentPendingDisabledReason() : null, a[11] = c, a[12] = Q) : Q = a[12];
		var X = Q, Y;
		a[13] !== i || a[14] !== l || a[15] !== s || a[16] !== w || a[17] !== d || a[18] !== m || a[19] !== f || a[20] !== F ? (Y = function(t, n) {
			t({
				attachmentData: i,
				buttonData: l,
				customAudienceIDs: w,
				lifetimeBudget: o("WAWebBizBroadcastProCurrencyUtils").displayAmountToSmallestUnit(d != null ? d : 0, s),
				message: f,
				rateCard: o("WAWebBizBroadcastProCurrencyUtils").displayAmountToCpmSmallestUnit(m != null ? m : 0, s),
				recipientCount: F,
				startTime: n != null ? n : null
			});
		}, a[13] = i, a[14] = l, a[15] = s, a[16] = w, a[17] = d, a[18] = m, a[19] = f, a[20] = F, a[21] = Y) : Y = a[21];
		var J = Y, Z;
		a[22] !== k || a[23] !== J ? (Z = function() {
			J(k);
		}, a[22] = k, a[23] = J, a[24] = Z) : Z = a[24];
		var ee = Z, te;
		a[25] !== D || a[26] !== J ? (te = function(o) {
			return b.current != null ? (e || (e = n("Promise"))).reject(r("err")("A broadcast send is already in progress.")) : new (e || (e = (n("Promise"))))(function(e, t) {
				var n = window.setTimeout(function() {
					b.current != null && (b.current = null, t(r("err")("Scheduled broadcast timed out.")));
				}, _);
				b.current = {
					reject: t,
					resolve: e,
					timeoutID: n
				};
				try {
					J(D, o);
				} catch (e) {
					var a = e;
					window.clearTimeout(n), b.current = null, t(a instanceof Error ? a : r("err")("Scheduled broadcast failed to start."));
				}
			});
		}, a[25] = D, a[26] = J, a[27] = te) : te = a[27];
		var ne = te, re;
		a[28] !== ne || a[29] !== K || a[30] !== X ? (re = o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProScheduledSendsEnabled() ? u.jsx(r("WAWebBizBroadcastProScheduleSection.react"), {
			onScheduleSend: ne,
			disabled: K,
			disabledReason: X
		}) : null, a[28] = ne, a[29] = K, a[30] = X, a[31] = re) : re = a[31];
		var oe;
		a[32] !== ee || a[33] !== K || a[34] !== I || a[35] !== X ? (oe = u.jsx(r("WAWebBizBroadcastProNewBroadcastSendNowButton.react"), {
			disabled: K,
			disabledReason: X,
			loading: I,
			onSend: ee
		}), a[32] = ee, a[33] = K, a[34] = I, a[35] = X, a[36] = oe) : oe = a[36];
		var ae;
		return a[37] !== re || a[38] !== oe ? (ae = u.jsxs(u.Fragment, { children: [re, oe] }), a[37] = re, a[38] = oe, a[39] = ae) : ae = a[39], ae;
	}
	function g(e) {
		return e === o("WAWebMsgType").MSG_TYPE.IMAGE ? "IMAGE" : e === o("WAWebMsgType").MSG_TYPE.VIDEO ? "VIDEO" : null;
	}
	function h(e) {
		return e.audienceSize;
	}
	function y(e) {
		return String(e.id);
	}
	l.default = f;
}), 98);
