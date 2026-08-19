__d("WAWebCommsBackendWorkerHandlers", [
	"WAComms",
	"WADeprecatedSendIq",
	"WAGzip",
	"WALogger",
	"WATransferableResult",
	"WAWap",
	"WAWebCommsConfigWorker",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, n) {
		var a = function(a) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[comms][worker] route ", " failed"])), t).catching(r("getErrorSafe")(a)).sendLogs("comms-worker-handler-error");
		};
		return function() {
			var e;
			try {
				e = n.apply(void 0, arguments);
			} catch (e) {
				throw a(e), e;
			}
			return e instanceof Promise ? e.catch(function(e) {
				throw a(e), e;
			}) : e;
		};
	}
	function u(e) {
		var t = function(t) {
			return Promise.resolve(t);
		}, n = new Map(), r = function() {
			return o("WAComms").singletonOrThrowIfUninitialized("comms-worker-proxy");
		};
		return {
			sendIq: s("sendIq", async function(e) {
				var a = e.abortToken, i = e.attachToSocket, l = e.iq, s = e.timeoutSeconds, u = e.type, c = await o("WAWap").decodeStanza(l, t), d = new AbortController();
				n.set(a, d);
				try {
					var m = await r().sendIq(c, i, s, d.signal, u), p = o("WAWap").encodeStanza(m);
					return o("WATransferableResult").withTransferables(p, [p.buffer]);
				} finally {
					n.delete(a);
				}
			}),
			abortSendIq: s("abortSendIq", function(e) {
				var t, r = e.abortToken;
				(t = n.get(r)) == null || t.abort();
			}),
			callStanza: s("callStanza", async function(e) {
				var n = e.flags, a = e.stanza, i = await o("WAWap").decodeStanza(a, t);
				await r().callStanza(i, n);
			}),
			castStanza: s("castStanza", async function(e) {
				var n = e.flags, a = e.stanza, i = await o("WAWap").decodeStanza(a, t);
				r().castStanza(i, n);
			}),
			sendPing: s("sendPing", function() {
				return r().sendPing();
			}),
			waitForNetworkHealth: s("waitForNetworkHealth", function() {
				return r().waitForNetworkHealth();
			}),
			startHandlingRequests: s("startHandlingRequests", function() {
				return r().startHandlingRequests();
			}),
			socketLoopIteration: s("socketLoopIteration", function() {
				return r().socketLoopIteration();
			}),
			softCloseSocket: s("softCloseSocket", function() {
				var e, t;
				(e = (t = r()).softCloseSocket) == null || e.call(t);
			}),
			stopComms: s("stopComms", function() {
				return r().stopComms();
			}),
			closeSocket: s("closeSocket", function() {
				return r().closeSocket();
			}),
			closeSocketInDebugMode: s("closeSocketInDebugMode", function() {
				return r().closeSocketInDebugMode();
			}),
			closeSocketAndPreventRetry: s("closeSocketAndPreventRetry", function() {
				return r().closeSocketAndPreventRetry();
			}),
			closeSocketAndPause: s("closeSocketAndPause", function() {
				return r().closeSocketAndPause();
			}),
			closeSocketAndResume: s("closeSocketAndResume", function() {
				return r().closeSocketAndResume();
			}),
			openSocketLoop: s("openSocketLoop", function() {
				return r().openSocketLoop();
			}),
			maybeResetSocketLoop: s("maybeResetSocketLoop", function() {
				return r().maybeResetSocketLoop();
			}),
			forceResetSocketLoop: s("forceResetSocketLoop", function() {
				return r().forceResetSocketLoop();
			}),
			forceAbortSocketConnection: s("forceAbortSocketConnection", function() {
				return r().forceAbortSocketConnection();
			}),
			onStreamErrorReceived: s("onStreamErrorReceived", function() {
				return r().onStreamErrorReceived();
			}),
			cancelDeadSocketTimer: s("cancelDeadSocketTimer", function() {
				return r().cancelDeadSocketTimer();
			}),
			deprecatedSendStanzaAndReturnAck: s("deprecatedSendStanzaAndReturnAck", async function(e) {
				var n = e.expectedAck, r = e.stanza, a = await o("WAWap").decodeStanza(r, t), i = await o("WADeprecatedSendIq").deprecatedSendStanzaAndReturnAck(a, n), l = o("WAWap").encodeStanza(i);
				return o("WATransferableResult").withTransferables(l, [l.buffer]);
			}),
			createComms: s("createComms", function(n) {
				var r = n.passive, a = n.pull, i = o("WAWebCommsConfigWorker").getCommsConfig({
					passive: r,
					pull: a
				});
				o("WAComms").startComms(async function(n, r, a) {
					var i = o("WAWap").encodeStanza(n), l = await e.sendAndReceive("mainthread_comms", "handleStanza", {
						stanza: i,
						socketId: r,
						size: a
					}, void 0, void 0, void 0, [i.buffer]);
					return l instanceof Uint8Array ? o("WAWap").decodeStanza(l, t) : l;
				}, i, function(e) {
					return Promise.resolve(o("WAGzip").inflate(e));
				}, !1);
			})
		};
	}
	l.createCommsWorkerHandlers = u;
}), 98);
