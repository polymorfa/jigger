__d("WAWebBizBroadcastExistingAudiencesModal.react", [
	"WAWebBizBroadcastExistingAudienceModalAudienceItem.react",
	"WAWebBizBroadcastExistingAudienceModalInner.react",
	"WAWebBizBroadcastsAudienceUtils",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebChatCollection",
	"WAWebWidFactory",
	"compactMap",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useMemo, p = u.useState;
	function _(e) {
		var t = o("react-compiler-runtime").c(26), n = e.entryPoint, a = e.onClose, i = e.selectedChats, l = e.setSelectedChats, u;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (u = o("WAWebBizBroadcastsAudienceUtils").getBroadcastChatsAsAudiences(), t[0] = u) : u = t[0];
		var c = u, m;
		t[1] !== i ? (m = new Set(Array.from(i).map(C)), t[1] = i, t[2] = m) : m = t[2];
		var _ = m, y;
		t[3] !== _ ? (y = function() {
			return new Set(c.filter(function(e) {
				return _.has(e.broadcastJid);
			}));
		}, t[3] = _, t[4] = y) : y = t[4];
		var b = p(y), v = b[0], S = b[1], R, L;
		t[5] !== n ? (R = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.existingAudiencesModalViewed(n);
		}, L = [n], t[5] = n, t[6] = R, t[7] = L) : (R = t[6], L = t[7]), d(R, L);
		var E;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (E = function(t) {
			S(function(e) {
				var n = new Set(e);
				return n.has(t) ? n.delete(t) : n.add(t), n;
			});
		}, t[8] = E) : E = t[8];
		var k = E, I;
		t[9] !== v ? (I = Array.from(v).flatMap(h), t[9] = v, t[10] = I) : I = t[10];
		var T = I.length, D;
		t[11] !== n || t[12] !== a || t[13] !== v || t[14] !== l ? (D = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.existingAudiencesModalSaved(v.size, n);
			var e = new Set(c.map(g)), t = r("compactMap")(Array.from(v), f);
			l(function(n) {
				var r = Array.from(n).filter(function(t) {
					return !e.has(t.id.toString());
				});
				return new Set([].concat(r, t));
			}), a();
		}, t[11] = n, t[12] = a, t[13] = v, t[14] = l, t[15] = D) : D = t[15];
		var x = D, $;
		t[16] !== v ? ($ = c.map(function(e) {
			return s.jsx(r("WAWebBizBroadcastExistingAudienceModalAudienceItem.react"), {
				audience: {
					name: e.name,
					recipientCount: e.recipientCount
				},
				isSelected: v.has(e),
				onToggle: function() {
					return k(e);
				}
			}, e.broadcastJid);
		}), t[16] = v, t[17] = $) : $ = t[17];
		var P;
		t[18] !== $ ? (P = s.jsx(s.Fragment, { children: $ }), t[18] = $, t[19] = P) : P = t[19];
		var N = P, M;
		return t[20] !== x || t[21] !== N || t[22] !== a || t[23] !== v.size || t[24] !== T ? (M = s.jsx(r("WAWebBizBroadcastExistingAudienceModalInner.react"), {
			onSave: x,
			list: N,
			onClose: a,
			selectedAudienceCount: v.size,
			totalRecipients: T
		}), t[20] = x, t[21] = N, t[22] = a, t[23] = v.size, t[24] = T, t[25] = M) : M = t[25], M;
	}
	function f(e) {
		return o("WAWebChatCollection").ChatCollection.get(o("WAWebWidFactory").createWid(e.broadcastJid));
	}
	function g(e) {
		return e.broadcastJid;
	}
	function h(e) {
		var t, n = o("WAWebChatCollection").ChatCollection.get(o("WAWebWidFactory").createWid(e.broadcastJid)), r = n == null || (t = n.broadcastMetadata) == null ? void 0 : t.recipients;
		return r ? r.toArray().map(y) : [];
	}
	function y(e) {
		return e.id;
	}
	function C(e) {
		return e.id.toString();
	}
	l.default = _;
}), 98);
