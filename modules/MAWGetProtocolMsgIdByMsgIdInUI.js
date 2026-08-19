__d("MAWGetProtocolMsgIdByMsgIdInUI", [
	"I64",
	"LSDatabaseSingleton",
	"MAWMpsGating",
	"MAWThreadMappingUtils",
	"MAWUserJidWrapper",
	"WAJids",
	"WAStanzaUtils",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = o("WAJids").createJidUtils({ platform: "msgr" });
	function c(e) {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var r = yield (e || (e = o("LSDatabaseSingleton"))).getLSDatabaseSingletonPromiseOrValue();
			return r.runInTransaction((function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					var n = yield e.messages.index("messageId").get(t);
					if (n == null) return null;
					var r = yield o("MAWThreadMappingUtils").getChatJidFromMappingTable(e, n.threadKey);
					if (r != null) return {
						author: u.toUserJid((s || (s = o("I64"))).to_float(n.senderId).toString()),
						chat: r,
						externalId: o("WAStanzaUtils").toStanzaId(n.offlineThreadingId)
					};
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})(), "readonly", void 0, void 0, i.id + ":32");
		}), d.apply(this, arguments);
	}
	var m = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			if (o("MAWMpsGating").isFullMpsEnabled()) return c(e);
			var t = yield c(e);
			return t != null && o("MAWUserJidWrapper").getMyUserJid() === t.author ? {
				author: "@me",
				chat: t.chat,
				externalId: t.externalId
			} : t;
		});
		return function(n) {
			return e.apply(this, arguments);
		};
	})();
	l.getProtocolMsgIdByMsgIdUI = m;
}), 98);
