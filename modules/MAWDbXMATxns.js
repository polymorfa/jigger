__d("MAWDbXMATxns", [
	"MAWDbMediaTxns",
	"MAWDbMsg",
	"MAWDbMsgTxns",
	"MAWDbThreadTxns",
	"MAWDexieTable",
	"MAWJidUtils",
	"WAResultOrError"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		return e.xma.bulkGet(t);
	}
	function s(e, t) {
		return t == null ? o("MAWDexieTable").dexieResolve() : e.xma.get({ xmaId: t });
	}
	function u(e, t) {
		return t == null ? o("MAWDexieTable").dexieResolve() : e.xma.where("associatedMessageId").equals(t).first();
	}
	function c(e, t) {
		return t == null ? o("MAWDexieTable").dexieResolve() : e.xma.where("externalId").equals(t.externalId).filter(function(e) {
			return e.author === t.author && e.threadJid === t.chat;
		}).first();
	}
	function d(e, t) {
		return c(e, t).then(function(t) {
			return t == null ? o("WAResultOrError").makeError("missing") : o("MAWDexieTable").dexieAll([o("MAWDbMediaTxns").getMediaForXMA(e, t), o("MAWDbMsgTxns").maybeGetMsg(e, t.associatedMessageId)]).then(function(e) {
				var n = e[0], r = e[1];
				if (!n.success) return o("WAResultOrError").makeError("missing");
				var a = n.value, i = a.defaultPreview, l = a.favicon, s = a.header, u = a.previews;
				return o("WAResultOrError").makeResult({
					associatedMessage: r,
					defaultPreview: i,
					favicon: l,
					header: s,
					previews: u,
					xma: t
				});
			});
		});
	}
	function m(e, t) {
		if (t.length === 0) return o("MAWDexieTable").dexieResolve([]);
		var n = t.filter(o("MAWDbMsg").isXMAMsg).map(function(e) {
			return o("MAWJidUtils").maybeToProtocolMsgId(e.author, e.threadJid, e.externalId);
		}).filter(Boolean), r = n.map(function(t) {
			return c(e, t);
		});
		return o("MAWDexieTable").dexieAll(r).then(function(e) {
			return e.filter(Boolean);
		});
	}
	function p(e, t) {
		return e.xma.where("associatedMessageId").anyOf(t).toArray().then(function(e) {
			var t = e.filter(function(e) {
				return e.msgId != null && e.targetType != null;
			});
			return t.reduce(function(e, t) {
				return t.associatedMessageId != null && t.msgId != null ? e.set(t.associatedMessageId, t.msgId) : e;
			}, new Map());
		});
	}
	function _(e, t, n) {
		return o("MAWDbThreadTxns").getThread(e, n).then(function(n) {
			if (n.success) {
				var r = n.value;
				if (t == null) return o("MAWDexieTable").dexieResolve();
				var a = {
					author: t.author,
					chat: r.jid,
					externalId: t.externalId
				};
				return o("MAWDbMsgTxns").maybeGetMsgByProtocolMsgId(e, a);
			}
		});
	}
	function f(e, t) {
		return e.xma.where("externalId").anyOf(t).toArray();
	}
	l.bulkGetXMAs = e, l.maybeGetXMAFromXMAId = s, l.maybeGetXMAFromAssociatedMsgId = u, l.maybeGetXMAFromProtocolMsgId = c, l.maybeGetXMAPayloadFromProtocolMsgId = d, l.getXMAFromMsgs = m, l.getXMAMsgIdsFromAssociatedMsgIds = p, l.maybeGetAssociatedXMAMsg = _, l.getMultipleXMAByExternalId = f;
}), 98);
