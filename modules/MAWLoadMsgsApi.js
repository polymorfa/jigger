__d("MAWLoadMsgsApi", [
	"MAWIndexedDb",
	"MAWLoadMsgsTxnsV2",
	"MAWTransactionMode"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = o("MAWIndexedDb").makeMsgrTransactor({
		chunk: (e = o("MAWTransactionMode")).READONLY,
		editMsgHistory: e.READONLY,
		media: e.READONLY,
		messages: e.READONLY,
		poll: e.READONLY,
		reactions: e.READONLY,
		receiverFetchInfo: e.READONLY,
		threads: e.READONLY,
		xma: e.READONLY
	}, "loadMsgsFromTs", function(e) {
		return (function(t, n, r, a, i, l, s) {
			return o("MAWLoadMsgsTxnsV2").loadMoreMsgsAndMediaFromTs(e, t, n, r, a, i, l, s);
		});
	}), u = o("MAWIndexedDb").makeMsgrTransactor({
		chunk: e.READONLY,
		editMsgHistory: e.READONLY,
		media: e.READONLY,
		messages: e.READONLY,
		poll: e.READONLY,
		reactions: e.READONLY,
		receiverFetchInfo: e.READONLY,
		threads: e.READONLY,
		xma: e.READONLY
	}, "loadMsgsRange", function(e) {
		return (function(t, n, r, a) {
			return o("MAWLoadMsgsTxnsV2").loadMoreMsgsAndMediaForRange({
				chatJid: t,
				config: n,
				db: e,
				direction: r,
				range: a
			});
		});
	}), c = o("MAWIndexedDb").makeMsgrTransactor({
		chunk: e.READONLY,
		editMsgHistory: e.READONLY,
		media: e.READONLY,
		messages: e.READONLY,
		poll: e.READONLY,
		reactions: e.READONLY,
		receiverFetchInfo: e.READONLY,
		threads: e.READONLY,
		xma: e.READONLY
	}, "loadMsgsByExternalId", function(e) {
		return (function(t, n) {
			return o("MAWLoadMsgsTxnsV2").loadMsgsAndMediaByExternalId(e, t, n);
		});
	});
	l.loadMsgsFromTs = s, l.loadMsgsRange = u, l.loadMsgsByExternalId = c;
}), 98);
