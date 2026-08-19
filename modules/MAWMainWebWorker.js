__d("MAWMainWebWorker", [
	"CurrentWorkerMessagePort",
	"FalcoLoggerTransports",
	"MAWBackend",
	"MAWCommonMainWebWorker",
	"MAWLowLevelApiImpl",
	"MAWMainWebWorkerConfig",
	"WABridge",
	"WADynamicRouterSync",
	"WorkerBridgeAdaptor",
	"cr:12423",
	"cr:40092",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = !((e = r("gkx")("23949")) != null && e);
	function u() {
		var e, t = new (r("WorkerBridgeAdaptor"))(o("CurrentWorkerMessagePort").getMessagePort(), "MAWMainWebWorker");
		o("WABridge").makeWABridge(new (o("WADynamicRouterSync")).DynamicRouterSync()), o("MAWCommonMainWebWorker").initWorker({
			config: o("MAWMainWebWorkerConfig").waConfig,
			currentWorker: t,
			initBackend: (e = n("cr:12423") == null ? void 0 : n("cr:12423").startMAWBackendWithConfig) != null ? e : o("MAWBackend").startMAWBackend,
			makeLowLevelApi: o("MAWLowLevelApiImpl").makeLowLevelApi
		}), n("cr:40092") == null || n("cr:40092").initE2EEIgnitionService(), s && o("FalcoLoggerTransports").attach();
	}
	l.default = u;
}), 98);
