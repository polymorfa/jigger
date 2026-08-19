__d("MAWRemoveExpiredMsgsFromUIApi", [
	"MAWBridgeXMA",
	"MAWDbMsg",
	"MAWDbXMATxns",
	"MAWDexieTable",
	"MAWEphemeralMsgTxns",
	"MAWIndexedDb",
	"MAWJidUtils",
	"MAWMsgType",
	"MAWTransactionMode",
	"MAWUpdateQuotedMsgTxns",
	"MpsMediaManagerV2Deferred",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = o("MAWIndexedDb").makeMsgrTransactor({
		groupInfo: (e = o("MAWTransactionMode")).READONLY,
		media: e.READONLY,
		messages: e.READWRITE,
		reactions: e.READWRITE,
		threads: e.READWRITE,
		xma: e.READONLY
	}, "removeExpiredMsgsFromUI", function(e) {
		return function() {
			return e.messages.where("messageExpirationTs").belowOrEqual(o("WATimeUtils").unixTime()).filter(function(e) {
				return e.ephemeralMsgDisappeared !== !0;
			}).toArray().then(function(t) {
				if (t.length === 0) return 0;
				var n = t.reduce(function(e, t) {
					var n, r = (n = e.get(t.threadJid)) != null ? n : new Set();
					return r.add(t.msgId), e.set(t.threadJid, r), e;
				}, new Map()), r = t.map(function(e) {
					return babelHelpers.extends({}, e, { ephemeralMsgDisappeared: !0 });
				}), a = e.messages.bulkPut(r), i = t.map(function(t) {
					return o("MAWUpdateQuotedMsgTxns").disassociateQuotedMsg(e, t.threadJid, t.externalId, t.author, o("MAWMsgType").MSG_TYPE.EXPIRED_EPHEMERAL);
				});
				return o("MAWDexieTable").dexieAll([a, o("MAWEphemeralMsgTxns").updateThreadsOnMessagesExpiredFromUi(e, n)].concat(i)).then(function() {
					var t = [];
					return r.forEach(function(n) {
						if (o("MAWDbMsg").isMediaMsg(n)) {
							var r = n.mediaId, a = n.plaintextHash;
							r != null && (a != null ? (o("MpsMediaManagerV2Deferred").dequeueDownload(a), o("MAWIndexedDb").afterTransaction({
								tag: "MediaExpired",
								value: {
									mediaId: r,
									msgId: n.msgId,
									plaintextHash: a,
									threadJid: n.threadJid
								}
							})) : o("MAWIndexedDb").afterTransaction({
								tag: "MediaExpired",
								value: {
									mediaId: r,
									msgId: n.msgId,
									threadJid: n.threadJid
								}
							}));
						}
						n.type === o("MAWMsgType").MSG_TYPE.XMA && t.push(o("MAWDbXMATxns").maybeGetXMAFromProtocolMsgId(e, o("MAWJidUtils").maybeToProtocolMsgId(n.author, n.threadJid, n.externalId)).then(function(e) {
							e != null && o("MAWIndexedDb").afterTransaction({
								tag: "XMAShareExpired",
								value: o("MAWBridgeXMA").createBridgeXMAShareExpired(n, e.xmaId)
							});
						}));
					}), o("MAWDexieTable").dexieAll(t).then(function(e) {
						return r.length;
					});
				});
			});
		};
	});
	l.removeExpiredMsgsFromUI = s;
}), 98);
