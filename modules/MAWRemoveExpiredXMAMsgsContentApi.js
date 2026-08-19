__d("MAWRemoveExpiredXMAMsgsContentApi", [
	"MAWBridgeMsg",
	"MAWBridgeXMA",
	"MAWDbMsgTxns",
	"MAWDeleteExpiredMsgsApi",
	"MAWDexieTable",
	"MAWIndexedDb",
	"MAWTransactionMode",
	"MAWXMAExpirationTxns",
	"MAWXMAUtils",
	"WALogger",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = o("MAWIndexedDb").makeMsgrTransactor({
		chunk: (u = o("MAWTransactionMode")).READWRITE,
		media: u.READWRITE,
		mediaBackup: u.READWRITE,
		messages: u.READWRITE,
		xma: u.READWRITE
	}, "removeExpiredXMAMsgsContent", function(t) {
		return function() {
			var n = o("WATimeUtils").unixTime();
			return t.xma.where("targetExpiringAtSec").belowOrEqual(n).toArray().then(function(n) {
				var r = n.filter(function(e) {
					return e.isTombstoned !== !0;
				}), a = n.filter(function(e) {
					var t = e.isTombstoned === !0 && e.targetExpiringAtSec != null;
					return t;
				});
				if (r.length === 0 && a.length === 0) return o("MAWDexieTable").dexieResolve(0);
				var i = [], l = new Map(), s = [], u = [], c = [];
				r.forEach(function(t) {
					o("MAWXMAUtils").isXMAStoryShare(t.targetType) || o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Trying to expire an non-story share XMA in XMA Cleaner"])));
					var n = t.msgId;
					if (n != null) {
						o("MAWXMAUtils").isXMAStoryShare(t.targetType) && (l.set(n, t.xmaId), s.push({
							author: t.author,
							chat: t.threadJid,
							externalId: t.externalId
						})), o("MAWXMAUtils").isXMAStoryReply(t.targetType) && (u.push(n), t.associatedMessageId != null && c.push(t.associatedMessageId));
						var r = t.previewMediaIds;
						r != null && r.forEach(function(e) {
							i.push([e, n]);
						}), t.faviconMediaId != null && i.push([t.faviconMediaId, n]), t.headerMediaId != null && i.push([t.headerMediaId, n]);
					}
				});
				var p = r.concat(a).map(function(e) {
					return o("MAWXMAUtils").buildTombstonedDbXMA(e);
				}), _ = Array.from(l.keys());
				return o("MAWDexieTable").dexieAll([
					o("MAWDbMsgTxns").bulkUpdateDbMsgXMAExpired(t, [].concat(_, u)),
					o("MAWXMAExpirationTxns").getXMAShareReplyMsgsToUpdate(t, s),
					o("MAWXMAExpirationTxns").updateExpiredStoryReplyMsg(t, c),
					o("MAWDeleteExpiredMsgsApi").deleteOrUpdateMediaAndChunkForExpiredMsgs(t, i),
					t.xma.bulkPut(p)
				]).then(function(e) {
					var t = e[0], n = e[1], a = e[2];
					return d(t, l, n), m(a), o("MAWDexieTable").dexieResolve(r.length);
				});
			});
		};
	});
	function d(e, t, n) {
		e.forEach(function(e) {
			if (o("MAWXMAUtils").isXMAStoryShare(e.xmaMessageType)) {
				o("MAWIndexedDb").afterTransaction({
					tag: "MsgUpdated",
					value: o("MAWBridgeMsg").createBridgeMsg(e)
				});
				var n = t.get(e.msgId);
				if (n == null) {
					o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["XMAId is null when handling tombstone, something went wrong"])));
					return;
				}
				o("MAWIndexedDb").afterTransaction({
					tag: "XMAShareTombstoned",
					value: o("MAWBridgeXMA").createBridgeXMAShareTombstoned(e, n)
				});
			}
		}), n.forEach(function(e) {
			o("MAWIndexedDb").afterTransaction({
				tag: "MsgUpdated",
				value: o("MAWBridgeMsg").createBridgeMsg(e, void 0)
			});
		});
	}
	function m(e) {
		e.map(function(e) {
			o("MAWIndexedDb").afterTransaction({
				tag: "MsgUpdated",
				value: o("MAWBridgeMsg").createBridgeMsg(e)
			});
		});
	}
	l.removeExpiredXMAMsgsContent = c;
}), 98);
