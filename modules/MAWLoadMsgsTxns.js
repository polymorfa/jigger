__d("MAWLoadMsgsTxns", ["MAWIndexedDb", "MAWLoadMsgsTxnsV2"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n, r, a) {
		return r === void 0 && (r = !1), a === void 0 && (a = "before"), o("MAWLoadMsgsTxnsV2").loadMoreMsgsAndMediaFromTs(e, t, n, a, null, r, null, {
			admin: !0,
			editMsgHistory: !0,
			media: !0,
			polls: !0,
			reactions: !0,
			receiverFetch: !0,
			xma: !0
		}).then(function(e) {
			var t = e.expiringCountdown, n = e.hasMoreAfter, r = e.hasMoreBefore, a = e.medias, i = e.msgs, l = e.quotedMsgs, s = e.receiverFetchInfoPayloads, u = e.xmas;
			return l != null && l.length > 0 && o("MAWIndexedDb").afterTransaction({
				tag: "NewMsgs",
				value: { msgs: l }
			}), i.length > 0 && o("MAWIndexedDb").afterTransaction({
				tag: "NewMsgs",
				value: { msgs: i }
			}), t.length > 0 && o("MAWIndexedDb").afterTransaction({
				tag: "MsgsStartCountdown",
				value: { msgs: t }
			}), u.forEach(function(e) {
				return o("MAWIndexedDb").afterTransaction({
					tag: "NewXMA",
					value: e
				});
			}), a.forEach(function(e) {
				return o("MAWIndexedDb").afterTransaction({
					tag: "NewMedia",
					value: e
				});
			}), s.forEach(function(e) {
				return o("MAWIndexedDb").afterTransaction({
					tag: "NewReceiverFetchInfo",
					value: e
				});
			}), {
				hasMoreAfter: n,
				hasMoreBefore: r
			};
		});
	}
	l.loadMsgAndMedia_COMPAT = e;
}), 98);
