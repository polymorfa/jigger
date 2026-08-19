__d("MAWBridgeDeleteMessagesOfThreadHandler", [
	"EBIsEbEnabled",
	"LSFactory",
	"LSIntEnum",
	"LSIssueThreadRemoveStoredProcedure",
	"LSMEBTaskCreationSource",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e, t) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
			if (n.actionType === 2) {
				if (!(yield o("EBIsEbEnabled").isEbEnabledLS(t))) return;
				yield r("LSIssueThreadRemoveStoredProcedure")(r("LSFactory")(t), {
					actThreadId: n.threadId,
					sortKey: n.ts.toString(),
					source: (e || (e = o("LSIntEnum"))).ofNumber(r("LSMEBTaskCreationSource").TAM_WEB)
				});
			}
		}), u.apply(this, arguments);
	}
	l.call = s;
}), 98);
