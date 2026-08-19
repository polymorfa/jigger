__d("CurrentWorkerMessagePort", ["err", "ifRequired"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = null;
	function s() {
		if (e == null) if ("SharedWorkerGlobalScope" in self && self instanceof self.SharedWorkerGlobalScope) {
			var t, n;
			e = (t = (n = r("ifRequired")("SharedWorkerBootstrapV4", function(e) {
				return new e.CurrentSharedWorkerV4Adapter();
			}, function() {
				return null;
			})) != null ? n : r("ifRequired")("SharedWorkerBootstrapExperimental", function(e) {
				return new e.CurrentSharedWorkerExperimentalAdapter();
			}, function() {
				return null;
			})) != null ? t : r("ifRequired")("CurrentSharedWorkerAdapter", function(e) {
				return new e.CurrentSharedWorkerAdapter();
			}, function() {
				return null;
			});
		} else if ("DedicatedWorkerGlobalScope" in self && self instanceof self.DedicatedWorkerGlobalScope) e = self;
		else {
			var o = new Error("CurrentWorkerAdapter: Unsupported worker type");
			throw o.stack, o;
		}
		if (e == null) throw r("err")("CurrentWorkerAdapter: None of shared worker adapters are available");
		return e;
	}
	l.getMessagePort = s;
}), 98);
