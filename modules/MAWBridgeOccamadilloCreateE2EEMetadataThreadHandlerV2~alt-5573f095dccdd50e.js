__d("MAWBridgeOccamadilloCreateE2EEMetadataThreadHandlerV2", [
	"DedupMiThreadCreationCache",
	"FBLogger",
	"I64",
	"LSAuthorityLevel",
	"LSCreateE2EEMetadataThreadStoredProcedure",
	"LSFactory",
	"LSIntEnum",
	"MAWCreateOptimisticThread",
	"MAWFolderUtils",
	"MAWGetLSThreadTypeUtil",
	"MAWJids",
	"MAWThreadLoadingState",
	"vulture"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = "[Occamadillo][CreateE2EEMetadataThreadHandlerV2]";
	async function c(t, n) {
		var a = n.bumpTimestampMs, i = n.creationSource, l = n.folderId, s = n.jid, u = n.optimisticThreadKey;
		p(i, s);
		var c = u != null ? await t.threads.get((e || (e = o("I64"))).of_string(u)) : null;
		if (c != null && o("DedupMiThreadCreationCache").DedupMiThreadCreationCache.has(s)) {
			h(s);
			return;
		}
		if (c != null && d(c)) {
			_(s, (e || (e = o("I64"))).to_string(c.threadKey));
			return;
		}
		var f = {
			bumpTimestampMs: a,
			createdByLocalDevice: i === "outgoing_message",
			folderType: o("MAWFolderUtils").systemFolderToLSCoreClientFolder(l),
			offlineThreadKey: await m(c, s, t),
			threadType: o("MAWGetLSThreadTypeUtil").getLSThreadTypeFromJid(s),
			waJid: o("MAWJids").convertChatJidToIntJid(s)
		};
		return g(f), r("LSCreateE2EEMetadataThreadStoredProcedure")(r("LSFactory")(t), f).then(function() {
			o("DedupMiThreadCreationCache").addToDedupMiThreadCreationCache(s);
		});
	}
	function d(e) {
		var t = (s || (s = o("LSIntEnum"))).unwrapIntEnum(e.authorityLevel);
		switch (t) {
			case r("LSAuthorityLevel").CLIENT_PARTIAL:
			case r("LSAuthorityLevel").OPTIMISTIC:
			case r("LSAuthorityLevel").SERVER_PARTIAL: return !1;
			case r("LSAuthorityLevel").AUTHORITATIVE:
			case r("LSAuthorityLevel").AUTHORITATIVE_PENDING_REPLACEMENT:
			case r("LSAuthorityLevel").CLIENT_AUTHORITATIVE_DELETE: return !0;
			default: throw r("FBLogger")("messenger_web").mustfixThrow("Unknown authority level");
		}
	}
	async function m(e, t, n) {
		if (e != null) return Promise.resolve(e.threadKey);
		var r = await o("MAWCreateOptimisticThread").createOfflineThreadingId(n);
		return f(t, r), await Promise.all([o("MAWCreateOptimisticThread").createOptimisticThreadWithThreadKey(n, r), o("MAWThreadLoadingState").markActThreadLoadingAsCompleted(n, {
			intJid: o("MAWJids").convertChatJidToIntJid(t),
			threadKey: r
		})]), r;
	}
	function p(e, t) {
		r("FBLogger")("messenger_web").info(u + " handler called from %s for jid %s", e, t);
	}
	function _(e, t) {
		r("FBLogger")("messenger_web").info(u + " handler returned early for jid %s because thread %s was already authoritative", e, t);
	}
	function f(t, n) {
		r("FBLogger")("messenger_web").info(u + " no thread exists for jid %s, creating optimistic thread with key %s", t, (e || (e = o("I64"))).to_string(n));
	}
	function g(t) {
		r("FBLogger")("messenger_web").info(u + " Calling LSCreateE2EEMetadataThreadStoredProcedure with params: bumpTimestampMs: %s, createdByLocalDevice: %s, folderType: %s, offlineThreadKey: %s, offlineThreadKeySource: %s, threadType: %s, waJid: %s", (e || (e = o("I64"))).to_string(t.bumpTimestampMs), t.createdByLocalDevice, e.to_string(t.folderType), e.to_string(t.offlineThreadKey), e.to_string(t.threadType), e.to_string(t.waJid));
	}
	function h(e) {
		r("vulture")("t6G0qiRbs8L46rS0s3JKDOtUqnA="), r("FBLogger")("messenger_web").info(u + " LSCreateE2EEMetadataThreadStoredProcedure has already been called for jid %s, early returning", e);
	}
	l.call = c;
}), 98);
