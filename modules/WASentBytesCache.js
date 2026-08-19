__d("WASentBytesCache", [
	"WAGlobals",
	"WAJids",
	"WAMsg",
	"WASentBytesCacheApi",
	"WATagsLogger",
	"WATimeUtils",
	"WAWaitForUserUnblocked",
	"asyncToGeneratorRuntime",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = o("WATagsLogger").TAGS(["SentBytesCache"]), c = 720 * 60 * 60, d = (function() {
		function t() {
			var t = this;
			o("WAWaitForUserUnblocked").waitForUserUnblocked().then(function() {
				t.$1().catch(function(t) {
					u.ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to prune sent bytes: ", ""])), t);
				});
			});
		}
		var a = t.prototype;
		return a.loadSentBytes = function(t) {
			return o("WASentBytesCacheApi").loadSentBytes(t);
		}, a.getMsgsForRetry = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = Array.from(new Set(e.map(function(e) {
					var t = e.deviceJid;
					return o("WAJids").extractUserJid(t);
				}))), n = new Map();
				try {
					n = yield o("WAGlobals").getWaOneQueue().enqueue(function(e) {
						var n = e.cryptoManager;
						return n.storage.bulkLoadIdentities(t);
					}, {
						operationType: "retries_load_identities",
						flush: !1,
						afterInit: !0
					});
				} catch (e) {
					var a = r("getErrorSafe")(e);
					u.ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["It fails to bulkLoadIdentities: ", ""])), a.toString());
				}
				var i = yield this.loadSentBytes(e.map(function(e) {
					var t = e.protocolMsgId;
					return o("WAMsg").craftWAMsgIdString({
						author: t.author,
						chat: t.chat,
						externalId: t.externalId
					});
				}));
				return e.map(function(e) {
					var t, r = e.deviceJid, a = e.protocolMsgId, l = o("WAMsg").craftWAMsgIdString({
						author: a.author,
						chat: a.chat,
						externalId: a.externalId
					}), s = (t = n.get(o("WAJids").extractUserJid(r))) == null ? void 0 : t.get(r);
					if (s == null) return { type: "unauthorized" };
					var u = i.find(function(e) {
						return e.waMsgId === l;
					});
					return u == null ? { type: "missing" } : o("WATimeUtils").happenedWithin(u.ts, c) ? {
						frankingKey: u.frankingKey,
						frankingVersion: u.frankingVersion,
						messageBytes: u.messageBytes,
						backupDirective: u.backupDirective,
						messageType: u.messageType,
						protocolMsgId: u.protocolMsgId,
						retryCount: e.retryCount + 1,
						type: "unacked",
						serverTs: u.ts
					} : { type: "unauthorized" };
				});
			});
			function t(t) {
				return e.apply(this, arguments);
			}
			return t;
		})(), a.saveSentBytes = function(t) {
			return o("WASentBytesCacheApi").saveSentBytes(t);
		}, a.$1 = function() {
			return o("WASentBytesCacheApi").loadExpired(o("WATimeUtils").pastUnixTime(c)).then(function(e) {
				return o("WASentBytesCacheApi").deleteSentBytes(e);
			});
		}, t;
	})(), m = new d();
	function p() {
		return m;
	}
	l.SentBytesCache = d, l.sentBytesCache = p;
}), 98);
