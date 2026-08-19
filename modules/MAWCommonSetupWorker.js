__d("MAWCommonSetupWorker", [
	"Deferred",
	"FBLogger",
	"MAWCurrentUser",
	"MAWGetDBVersionForTest",
	"MAWInit",
	"MAWMIC",
	"MAWSetupWorker",
	"MAWWaitForBackendSetup",
	"MAWWebWorkerSingleton",
	"MessengerWebInitData",
	"Promise",
	"WADevToolMessageChannel",
	"WALogger",
	"WorkerClient",
	"WorkerMessagePort",
	"err",
	"gkx",
	"pageID",
	"promiseDone",
	"shouldUseMAWSharedWorker"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = r("gkx")("3282"), c = (function(e) {
		function t(t, n) {
			var r;
			return r = e.call(this, t, n) || this, r.onmessage = null, r.$BridgeAdapter$p_1 = t, o("WorkerClient").init(r), r.onUnhandledMessage.add(function(e) {
				r.onmessage && r.onmessage({ data: e });
			}), r.addMessageListener("worker-setup", function(e) {
				e.status === "worker-ready" && o("MAWInit").MAWInit.addBoolAnnotation("workerReadyReceived", !0);
			}), r;
		}
		babelHelpers.inheritsLoose(t, e);
		var n = t.prototype;
		return n.getBridgePort = function() {
			return this;
		}, t;
	})(o("WorkerMessagePort").WorkerSyncedMessagePort);
	function d(e) {
		var t = e.bridge, n = e.ebState, a = e.reason, i = e.vaultMaterials, l = new (r("Deferred"))();
		return t.addMessageListener("worker-setup", function(t) {
			return m(e, l, t);
		}), t.addMessageListener("worker-setup-ack", function(e) {
			return p(e, a);
		}), f(t, i, n), r("promiseDone")(o("MAWWebWorkerSingleton").doesWorkerExist(), function(e) {
			return o("MAWInit").MAWInit.addBoolAnnotation("workerExistsOnSetup", e);
		}), r("promiseDone")(o("MAWWebWorkerSingleton").getWorkerHealthStatus(), function(e) {
			return o("MAWInit").MAWInit.addStringAnnotation("workerHealthStatus", e.tag);
		}), l.getPromise();
	}
	function m(e, t, n) {
		var a;
		if (n.setupHash === r("pageID")) switch (n.status) {
			case "success":
				t.resolve(e.bridge.getBridgePort());
				break;
			case "failure":
				t.reject(r("err")((a = n.msg) != null ? a : "Error setting up worker"));
				break;
			case "already-setup": return _(e, t, n);
			default: throw o("MAWInit").MAWInit.addBoolAnnotation("invalidSetupMessageReceived", !0), r("FBLogger")("messenger_web").mustfixThrow("Invalid message for worker: " + n.status);
		}
	}
	function p(e, t) {
		var n;
		if (e.setupHash === r("pageID")) {
			o("MAWInit").MAWInit.logPoint(t + "_backend_setup_ack"), o("MAWMIC").addPoint(t + "_backend_setup_ack");
			var a = (n = e.backendState) != null ? n : "none";
			o("MAWInit").MAWInit.addStringAnnotation("backendAckState", a), o("MAWMIC").addStringAnnotation("backendAckState", a);
		}
	}
	function _(t, a, i) {
		var l = t.bridge, u = t.onWorkerAlreadySetup, c = t.onWorkerRestart, d = t.reason;
		switch (i.action) {
			case "no-action": {
				a.resolve(l.getBridgePort()), u(), o("MAWInit").MAWInit.logPoint(d + "_backend_already_setup"), o("MAWMIC").addPoint(d + "_backend_already_setup");
				break;
			}
			case "reboot-required": {
				var m;
				o("WALogger").DEV(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Terminating worker and rebooting..."]))), o("MAWMIC").addPoint(d + "_worker_rebooting"), o("MAWInit").MAWInit.logPoint(d + "_worker_rebooting");
				var p = (m = i == null ? void 0 : i.reason) != null ? m : "none";
				o("MAWInit").MAWInit.addStringAnnotation("workerRebootReason", p), o("MAWMIC").addStringAnnotation("workerRebootReason", p);
				var _ = o("shouldUseMAWSharedWorker").shouldUseMAWSharedWorker() ? (s || (s = n("Promise"))).resolve(o("MAWWaitForBackendSetup").resetCurrentWorkerWithId(o("MAWWaitForBackendSetup").getCurrentWorkerID())) : o("MAWSetupWorker").terminateDedicatedWorker("reboot required");
				return _.then(function() {
					return c("rebootRequired").then(function(e) {
						return a.resolve(e);
					}).catch(function(e) {
						return a.reject(e);
					});
				});
			}
			default: throw i.action, r("FBLogger")("messenger_web").mustfixThrow("Invalid action for worker-setup:already-setup: " + i.action);
		}
	}
	function f(e, t, n) {
		var a = {
			content: {
				createdAt: r("MessengerWebInitData").createdAt,
				ebState: n,
				fbId: o("MAWCurrentUser").getID(),
				sessionId: r("MessengerWebInitData").sessionId,
				testDbVersion: o("MAWGetDBVersionForTest").getDbVersionForTest(),
				userKeyBase: r("MessengerWebInitData").userKeyBase,
				vaultMaterials: t
			},
			setupHash: r("pageID"),
			type: "worker-setup"
		};
		if (u) {
			o("MAWInit").MAWInit.addBoolAnnotation("devToolsEnabled", !0);
			var i = o("WADevToolMessageChannel").createNewChannel();
			a.content.devToolMessageChannelPort2 = i.port2, e.postMessage(a, [i.port2]);
		} else e.postMessage(a);
	}
	l.BridgeAdapter = c, l.initWorker = d;
}), 98);
