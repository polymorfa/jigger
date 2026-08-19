__d("MAWSetupWorkerMsg", ["FBLogger", "ifRequired"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = (function() {
		function e(e, t) {
			this.setupHash = e, this.currentWorker = t;
		}
		var t = e.prototype;
		return t.postAck = function() {
			this.currentWorker.postMessage({
				setupHash: this.setupHash,
				type: "worker-setup-ack"
			});
		}, t.postSuccess = function() {
			this.currentWorker.postMessage({
				setupHash: this.setupHash,
				status: "success",
				type: "worker-setup"
			});
		}, t.postFailure = function(t) {
			this.currentWorker.postMessage({
				msg: t,
				setupHash: this.setupHash,
				status: "failure",
				type: "worker-setup"
			});
		}, t.postNoActionRequired = function() {
			this.currentWorker.postMessage({
				action: "no-action",
				setupHash: this.setupHash,
				status: "already-setup",
				type: "worker-setup"
			});
		}, t.postRebootRequired = function(t) {
			this.currentWorker.postMessage({
				action: "reboot-required",
				reason: t,
				setupHash: this.setupHash,
				status: "already-setup",
				type: "worker-setup"
			});
		}, t.postBackendState = function(t) {
			this.currentWorker.postMessage({
				backendState: t,
				setupHash: this.setupHash,
				type: "worker-setup-ack"
			});
		}, e;
	})();
	function s(e) {
		r("ifRequired")("CurrentSharedWorkerExperimental", function(t) {
			t.shutdownWorker(e);
		}, function() {}), r("ifRequired")("CurrentSharedWorker", function(t) {
			t.shutdownWorker(e);
		}, function() {
			throw r("FBLogger")("messenger_web").mustfixThrow("Failed to update shared worker, reason: " + (e != null ? e : ""));
		});
	}
	l.WorkerSetupComms = e, l.shutdownSharedWorker = s;
}), 98);
