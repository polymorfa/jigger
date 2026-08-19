__d("MAWDeleteExpiredMsgsApi", [
	"MAWDbMsg",
	"MAWDbReactionsTxns",
	"MAWDbXMATxns",
	"MAWDexieTable",
	"MAWIndexedDb",
	"MAWJidUtils",
	"MAWTransactionMode",
	"WAArmadilloXMA.pb",
	"WALogger",
	"WASortedLists",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	function c(t, n) {
		return t.media.bulkGet(n.map(function(e) {
			return e[0];
		})).then(function(r) {
			var a = [], i = [];
			if (r.forEach(function(e, t) {
				if (e != null) {
					var r = n[t][1];
					e.msgIds = o("WASortedLists").filter(e.msgIds, function(e) {
						return e !== r;
					}), e.mediaEntries.delete(r), e.msgIds.length === 0 && e.mediaEntries.size === 0 && (e.hashedPlaintextHash != null && a.push(e.hashedPlaintextHash), i.push(e.mediaId));
				}
			}), !(a.length === 0 && i.length === 0)) {
				var l = t.media.bulkDelete(i), s = a.length > 0 ? t.chunk.where("hashedPlaintextHash").anyOf(a).delete() : o("MAWDexieTable").dexieResolve(), u = t.mediaBackup.where("mediaId").anyOf(i).delete();
				return o("MAWDexieTable").dexieAll([
					l,
					s,
					u
				]).then(function() {
					o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
						"Successfully deleted: ",
						" media rows, ",
						" chunk rows."
					])), i.length, a.length);
				});
			}
		});
	}
	function d(e, t) {
		var n = [], r = t.map(function(t) {
			return o("MAWDbXMATxns").maybeGetXMAFromProtocolMsgId(e, t[0]);
		});
		return o("MAWDexieTable").dexieAll(r).then(function(r) {
			var a = r.filter(Boolean);
			if (a.length !== 0) {
				a.forEach(function(e, r) {
					var o = t[r][1];
					e.faviconMediaId != null && n.push([e.faviconMediaId, o]), e.headerMediaId != null && n.push([e.headerMediaId, o]), e.previewMediaIds != null && e.previewMediaIds.forEach(function(e) {
						n.push([e, o]);
					});
				});
				var i = e.xma.bulkDelete(a.map(function(e) {
					var t = e.xmaId;
					return t;
				})), l = c(e, n);
				return o("MAWDexieTable").dexieAll([l, i]).then(function() {
					o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Successfully deleted: ", " XMA rows"])), t.length);
				});
			}
		});
	}
	var m = o("MAWIndexedDb").makeMsgrTransactor({
		chunk: (u = o("MAWTransactionMode")).READWRITE,
		media: u.READWRITE,
		mediaBackup: u.READWRITE,
		messages: u.READWRITE,
		reactions: u.READWRITE,
		xma: u.READWRITE
	}, "deleteExpiredMsgs", function(e) {
		return function() {
			var t = o("WATimeUtils").unixTime();
			return e.messages.where("messageDeleteTs").belowOrEqual(t).toArray().then(function(t) {
				var n = [], r = [], a = [], i = [], l = [], s = [];
				t.forEach(function(e) {
					if (e.mediaId != null && n.push([e.mediaId, e.msgId]), o("MAWDbMsg").isXMAMsg(e)) {
						var t = o("MAWJidUtils").maybeToProtocolMsgId(e.author, e.threadJid, e.externalId);
						t != null && s.push([t, e.msgId]);
					}
					if (e.quote != null && e.quote.content.xmaMessageType === o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_STORY_REPLY) {
						var u = o("MAWJidUtils").maybeToProtocolMsgId(e.author, e.threadJid, e.quote.content.externalId);
						u != null && s.push([u, e.msgId]);
					}
					r.push(e.msgId), a.push(o("MAWDbMsg").getWAMsgId(e)), i.push({
						author: e.author,
						chatJid: e.threadJid,
						externalId: e.externalId
					}), l.push(e.rowId);
				});
				var u = e.messages.bulkDelete(l), m = c(e, n), p = d(e, s), _ = o("MAWDbReactionsTxns").deleteReactionsByUniqueMsgIdentifiers(e, i);
				return o("MAWDexieTable").dexieAll([
					u,
					_,
					m,
					p
				]).then(function() {
					return o("MAWDexieTable").dexieResolve(a);
				});
			});
		};
	});
	l.deleteOrUpdateMediaAndChunkForExpiredMsgs = c, l.deleteOrUpdateXMAForExpiredMsgs = d, l.deleteExpiredMsgs = m;
}), 98);
