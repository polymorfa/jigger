__d("WAWebCommsBackendWorkerHandlers", [
	"Promise",
	"WAComms",
	"WADeprecatedSendIq",
	"WAGzip",
	"WALogger",
	"WATransferableResult",
	"WAWap",
	"WAWebCommsConfigWorker",
	"asyncToGeneratorRuntime",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(t, a) {
		var i = function(a) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[comms][worker] route ", " failed"])), t).catching(r("getErrorSafe")(a)).sendLogs("comms-worker-handler-error");
		};
		return function() {
			var e;
			try {
				e = a.apply(void 0, arguments);
			} catch (e) {
				throw i(e), e;
			}
			return e instanceof (s || (s = n("Promise"))) ? e.catch(function(e) {
				throw i(e), e;
			}) : e;
		};
	}
	function c(e) {
		var t = function(t) {
			return (s || (s = n("Promise"))).resolve(t);
		}, r = new Map(), a = function() {
			return o("WAComms").singletonOrThrowIfUninitialized("comms-worker-proxy");
		};
		return {
			sendIq: u("sendIq", (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					var n = e.abortToken, i = e.attachToSocket, l = e.iq, s = e.timeoutSeconds, u = e.type, c = yield o("WAWap").decodeStanza(l, t), d = new AbortController();
					r.set(n, d);
					try {
						var m = yield a().sendIq(c, i, s, d.signal, u), p = o("WAWap").encodeStanza(m);
						return o("WATransferableResult").withTransferables(p, [p.buffer]);
					} finally {
						r.delete(n);
					}
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})()),
			abortSendIq: u("abortSendIq", function(e) {
				var t, n = e.abortToken;
				(t = r.get(n)) == null || t.abort();
			}),
			callStanza: u("callStanza", (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					var n = e.flags, r = e.stanza, i = yield o("WAWap").decodeStanza(r, t);
					yield a().callStanza(i, n);
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})()),
			castStanza: u("castStanza", (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					var n = e.flags, r = e.stanza, i = yield o("WAWap").decodeStanza(r, t);
					a().castStanza(i, n);
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})()),
			sendPing: u("sendPing", function() {
				return a().sendPing();
			}),
			waitForNetworkHealth: u("waitForNetworkHealth", function() {
				return a().waitForNetworkHealth();
			}),
			startHandlingRequests: u("startHandlingRequests", function() {
				return a().startHandlingRequests();
			}),
			socketLoopIteration: u("socketLoopIteration", function() {
				return a().socketLoopIteration();
			}),
			softCloseSocket: u("softCloseSocket", function() {
				var e, t;
				(e = (t = a()).softCloseSocket) == null || e.call(t);
			}),
			stopComms: u("stopComms", function() {
				return a().stopComms();
			}),
			closeSocket: u("closeSocket", function() {
				return a().closeSocket();
			}),
			closeSocketInDebugMode: u("closeSocketInDebugMode", function() {
				return a().closeSocketInDebugMode();
			}),
			closeSocketAndPreventRetry: u("closeSocketAndPreventRetry", function() {
				return a().closeSocketAndPreventRetry();
			}),
			closeSocketAndPause: u("closeSocketAndPause", function() {
				return a().closeSocketAndPause();
			}),
			closeSocketAndResume: u("closeSocketAndResume", function() {
				return a().closeSocketAndResume();
			}),
			openSocketLoop: u("openSocketLoop", function() {
				return a().openSocketLoop();
			}),
			maybeResetSocketLoop: u("maybeResetSocketLoop", function() {
				return a().maybeResetSocketLoop();
			}),
			forceResetSocketLoop: u("forceResetSocketLoop", function() {
				return a().forceResetSocketLoop();
			}),
			forceAbortSocketConnection: u("forceAbortSocketConnection", function() {
				return a().forceAbortSocketConnection();
			}),
			onStreamErrorReceived: u("onStreamErrorReceived", function() {
				return a().onStreamErrorReceived();
			}),
			cancelDeadSocketTimer: u("cancelDeadSocketTimer", function() {
				return a().cancelDeadSocketTimer();
			}),
			deprecatedSendStanzaAndReturnAck: u("deprecatedSendStanzaAndReturnAck", (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					var n = e.expectedAck, r = e.stanza, a = yield o("WAWap").decodeStanza(r, t), i = yield o("WADeprecatedSendIq").deprecatedSendStanzaAndReturnAck(a, n), l = o("WAWap").encodeStanza(i);
					return o("WATransferableResult").withTransferables(l, [l.buffer]);
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})()),
			createComms: u("createComms", function(r) {
				var a = r.passive, i = r.pull, l = o("WAWebCommsConfigWorker").getCommsConfig({
					passive: a,
					pull: i
				});
				o("WAComms").startComms((function() {
					var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n, r, a) {
						var i = o("WAWap").encodeStanza(n), l = yield e.sendAndReceive("mainthread_comms", "handleStanza", {
							stanza: i,
							socketId: r,
							size: a
						}, void 0, void 0, void 0, [i.buffer]);
						return l instanceof Uint8Array ? o("WAWap").decodeStanza(l, t) : l;
					});
					return function(e, t, n) {
						return r.apply(this, arguments);
					};
				})(), l, function(e) {
					return (s || (s = n("Promise"))).resolve(o("WAGzip").inflate(e));
				}, !1);
			})
		};
	}
	l.createCommsWorkerHandlers = c;
}), 98);
