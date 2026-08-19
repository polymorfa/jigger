__d("MAWBridgeDeleteMessagesOfThreadHandler", [
	"EBIsEbEnabled",
	"LSFactory",
	"LSIntEnum",
	"LSIssueThreadRemoveStoredProcedure",
	"LSMEBTaskCreationSource"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	async function s(t, n) {
		if (n.actionType === 2) {
			if (!await o("EBIsEbEnabled").isEbEnabledLS(t)) return;
			await r("LSIssueThreadRemoveStoredProcedure")(r("LSFactory")(t), {
				actThreadId: n.threadId,
				sortKey: n.ts.toString(),
				source: (e || (e = o("LSIntEnum"))).ofNumber(r("LSMEBTaskCreationSource").TAM_WEB)
			});
		}
	}
	l.call = s;
}), 98);
