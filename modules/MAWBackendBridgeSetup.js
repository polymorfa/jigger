__d("MAWBackendBridgeSetup", [
	"EBSMBridgeHandlers",
	"MAWBridge",
	"WAAPIBridgeHandlers",
	"WACrossWorkerPortal",
	"WAResultOrError",
	"getErrorSafe",
	"pageID"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		try {
			var t = s();
			return t.setPort(e.getBridgePort()), o("WAResultOrError").makeResult(null);
		} catch (e) {
			return o("WAResultOrError").makeError(r("getErrorSafe")(e));
		}
	}
	function s() {
		var e = o("MAWBridge").getBridge();
		e.setHandlers("waapi", o("WAAPIBridgeHandlers").waapiBridgeHandlers), e.setHandlers("ebsmapi", o("EBSMBridgeHandlers").ebsmapiBridgeHandlers);
		var t = { bridgeBatcherMaxTokens: Number.MAX_SAFE_INTEGER }, n = o("WACrossWorkerPortal").attachPortal(e, ["event", "threadEvent"], function(e, t) {
			var n = e.length > 0 ? e[e.length - 1] : null;
			return n != null && n.type === "request" && n.content.name === "uiUpdate" && n.content.arg.events && t.type === "request" && t.content.name === "uiUpdate" ? Array.prototype.push.apply(n.content.arg.events, t.content.arg.events) : e.push(t), e;
		}, r("pageID"), t);
		return n;
	}
	l.initWorkerBridge = e;
}), 98);
