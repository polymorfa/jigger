__d("MAWWarmInMemoryParticipantStore", [
	"FBLogger",
	"MAWGetLatestChatJids",
	"MAWInMemoryParticipantStore",
	"asyncToGeneratorRuntime",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = 30;
	function s() {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			if (o("MAWInMemoryParticipantStore").isInMemoryParticipantsStoreExperiment()) try {
				var t = yield o("MAWGetLatestChatJids").getLatestChatJids(e);
				if (t.length === 0) return;
				yield o("MAWInMemoryParticipantStore").hydrateParticipantsStoreFromLSDB(t);
			} catch (e) {
				r("FBLogger")("wmi").catching(r("getErrorSafe")(e)).warn("Failed to warm in-memory participants store from recent threads");
			}
		}), u.apply(this, arguments);
	}
	l.warmInMemoryParticipantStoreFromRecentThreads = s;
}), 98);
