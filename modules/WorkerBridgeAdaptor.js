__d("WorkerBridgeAdaptor", ["WorkerMessagePort", "WorkerSelf"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = (function(e) {
		function t(t, n) {
			var r;
			return r = e.call(this, t, n) || this, r.onmessage = null, o("WorkerSelf").init(r), r.$WorkerBridgeAdaptor$p_1 = t, r.onUnhandledMessage.add(function(e) {
				r.onmessage && r.onmessage({ data: e });
			}), r;
		}
		babelHelpers.inheritsLoose(t, e);
		var n = t.prototype;
		return n.getBridgePort = function() {
			return this;
		}, t;
	})(o("WorkerMessagePort").WorkerSyncedMessagePort);
	l.default = e;
}), 98);
