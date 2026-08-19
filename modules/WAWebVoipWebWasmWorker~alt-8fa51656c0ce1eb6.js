__d("WAWebVoipWebWasmWorker", [
	"WABinary",
	"WACryptoHkdfSync",
	"WACryptoSha256HmacBuilder",
	"WAWebBweModelHashes",
	"WAWebIDBFSStorageBackend",
	"WAWebLoggerWorker",
	"WAWebVoipBrowserAudioStatusSyncBridge",
	"WAWebVoipContactLookupSyncBridge",
	"WAWebVoipJsWorkerMessageHandler",
	"WAWebVoipPersistentFS",
	"WAWebVoipWebWasmLoader.worker",
	"WorkerMessagePort",
	"WorkerSelf",
	"getErrorSafe",
	"nullthrows",
	"requireDeferred"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = r("requireDeferred")("WAWebVoipWebWasmLoader_ProdLab_internal.worker").__setRef("WAWebVoipWebWasmWorker"), s = r("requireDeferred")("WAWebVoipWebWasmLoader_ProdLabvideo_internal.worker").__setRef("WAWebVoipWebWasmWorker");
	async function u(t) {
		var n = t === "prod-lab" ? e : t === "prod-labvideo" ? s : null;
		return n != null ? n.load() : r("WAWebVoipWebWasmLoader.worker");
	}
	var c = new (o("WorkerMessagePort")).WorkerSyncedMessagePort(self, "VoipWebWasmWorker");
	o("WAWebLoggerWorker").initializeWAWebLogger(), o("WorkerSelf").init(c), self.WhatsAppVoipWasmWorkerCompatibleCallbacks = {
		onSignalingXmpp: function(t) {
			var e = t.callId, n = t.peerJid, r = t.xmlPayload;
			c.postMessage({
				type: "waWasmWorkerCompatibleCallback",
				__name: "onSignalingXmpp",
				peerJid: n,
				callId: e,
				xmlPayload: r
			});
		},
		onCallEvent: function(t) {
			var e = t.eventDataJson, n = t.eventType, r = t.userData;
			c.postMessage({
				type: "waWasmWorkerCompatibleCallback",
				__name: "onCallEvent",
				eventType: n,
				userData: r,
				eventDataJson: e
			});
		},
		sendDataToRelay: function(t) {
			var e = t.data, n = t.ip, r = t.len, a = t.port;
			try {
				var i = o("WAWebVoipJsWorkerMessageHandler").trySendDirectOnTransferredChannel(n, a, e);
				if (i) return;
			} catch (e) {}
			c.postMessage({
				type: "waWasmWorkerCompatibleCallback",
				__name: "sendDataToRelay",
				data: e,
				len: r,
				ip: n,
				port: a
			});
		},
		loggingCallback: function(t) {
			c.postMessage(babelHelpers.extends({
				type: "waWasmWorkerCompatibleCallback",
				__name: "loggingCallback"
			}, t));
		},
		initCaptureDriverJS: function(t) {
			c.postMessage(babelHelpers.extends({
				type: "waWasmWorkerCompatibleCallback",
				__name: "initCaptureDriverJS"
			}, t));
		},
		startCaptureJS: function() {
			c.postMessage({
				type: "waWasmWorkerCompatibleCallback",
				__name: "startCaptureJS"
			});
		},
		stopCaptureJS: function() {
			c.postMessage({
				type: "waWasmWorkerCompatibleCallback",
				__name: "stopCaptureJS"
			});
		},
		initPlaybackDriverJS: function(t) {
			c.postMessage(babelHelpers.extends({
				type: "waWasmWorkerCompatibleCallback",
				__name: "initPlaybackDriverJS"
			}, t));
		},
		startPlaybackJS: function() {
			c.postMessage({
				type: "waWasmWorkerCompatibleCallback",
				__name: "startPlaybackJS"
			});
		},
		stopPlaybackJS: function() {
			c.postMessage({
				type: "waWasmWorkerCompatibleCallback",
				__name: "stopPlaybackJS"
			});
		},
		startVideoCaptureJS: function(t) {
			c.postMessage(babelHelpers.extends({
				type: "waWasmWorkerCompatibleCallback",
				__name: "startVideoCaptureJS"
			}, t));
		},
		stopVideoCaptureJS: function() {
			c.postMessage({
				type: "waWasmWorkerCompatibleCallback",
				__name: "stopVideoCaptureJS"
			});
		},
		onVideoFrameWasmToJs: function(t) {
			var e = t.format, n = t.frameBuffer, r = t.height, o = t.isKeyFrame, a = t.isScreenShare, i = t.orientation, l = t.timestamp, s = t.userJid, u = t.width;
			c.postMessage({
				type: "waWasmWorkerCompatibleCallback",
				__name: "onVideoFrameWasmToJs",
				userJid: s,
				frameBuffer: n,
				width: u,
				height: r,
				orientation: i,
				format: e,
				timestamp: l,
				isKeyFrame: o,
				isScreenShare: a
			}, [n]);
		},
		startDesktopCaptureJS: function(t) {
			c.postMessage(babelHelpers.extends({
				type: "waWasmWorkerCompatibleCallback",
				__name: "startDesktopCaptureJS"
			}, t));
		},
		stopDesktopCaptureJS: function() {
			c.postMessage({
				type: "waWasmWorkerCompatibleCallback",
				__name: "stopDesktopCaptureJS"
			});
		},
		dataChannelStateCallback: function(t) {
			c.postMessage(babelHelpers.extends({
				type: "waWasmWorkerCompatibleCallback",
				__name: "dataChannelStateCallback"
			}, t));
		},
		cryptoHkdfExtractWithSaltAndExpand: function(t) {
			var e = t.info_, n = t.key_, r = t.length, a = t.salt_, i = new Uint8Array(n), l = a ? new Uint8Array(a) : void 0, s = o("WABinary").Binary.build(e).readByteArrayView();
			return o("WACryptoHkdfSync").hkdf(i, l, s, r);
		},
		hmacSha256KeyGenerator: function(t) {
			var e = t.data_, n = t.key_, r = new Uint8Array(e), a = new Uint8Array(n);
			return new (o("WACryptoSha256HmacBuilder")).Sha256HMacBuilder(a).update(r).finish();
		},
		isParticipantKnownContact: function(t) {
			return o("WAWebVoipContactLookupSyncBridge").resolveParticipantKnownContactSync({
				jid: t.jid,
				onComplete: function(t) {
					var e = t.jid, n = t.outcome, r = t.timeoutMs, o = 3, a = n;
					n === "timed-out" && (o = 2, a = "timed out after " + String(r) + "ms"), self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback({
						level: o,
						message: "voip: [Worker] isParticipantKnownContact(sync): " + e + " " + a
					});
				},
				postMessage: function(t) {
					c.postMessage(t);
				}
			});
		},
		getBrowserAudioProcessingStatus: function() {
			return o("WAWebVoipBrowserAudioStatusSyncBridge").resolveBrowserAudioProcessingStatusSync({
				onTimeout: function(t) {
					var e = t.fallbackStatus, n = t.timeoutMs;
					self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback({
						level: 2,
						message: "voip: [Worker] browserAudioProcessingStatusSync timed out after " + String(n) + "ms; falling back to status=" + String(e)
					});
				},
				onUnknown: function(t) {
					var e = t.fallbackStatus;
					self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback({
						level: 2,
						message: "voip: [Worker] browserAudioProcessingStatusSync returned unknown; falling back to status=" + String(e) + " without caching"
					});
				},
				postMessage: function(t) {
					c.postMessage(t);
				}
			});
		},
		getPersistentDirectoryPath: function() {
			return o("WAWebVoipPersistentFS").getVoipPersistentDirectoryPath();
		},
		getBweModelPath: function(t) {
			var e = t.versionName, n = o("WAWebBweModelHashes").getBweModelVersion(e);
			return n == null ? null : o("WAWebIDBFSStorageBackend").ML_MODEL_PERSIST_DIR + "/" + o("WAWebBweModelHashes").BWE_MODEL_NAME + "_" + n;
		},
		videoFrameConsumed: function() {
			c.postMessage({
				type: "waWasmWorkerCompatibleCallback",
				__name: "videoFrameConsumed"
			});
		},
		videoCaptureFrameTick: function() {
			c.postMessage({
				type: "waWasmWorkerCompatibleCallback",
				__name: "videoCaptureFrameTick"
			});
		},
		videoEncodedFrameTick: function() {
			c.postMessage({
				type: "waWasmWorkerCompatibleCallback",
				__name: "videoEncodedFrameTick"
			});
		},
		videoCaptureFpsReset: function() {
			c.postMessage({
				type: "waWasmWorkerCompatibleCallback",
				__name: "videoCaptureFpsReset"
			});
		}
	};
	var d = {}, m = !1;
	function p(e, t) {
		if (!e) {
			var n = new Error("Assertion failed: " + t);
			throw n.stack, n;
		}
	}
	function _() {
		for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
		var r = t.slice().join(" ");
	}
	function f() {
		for (var e, t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
		var a = r.slice().join(" ");
		postMessage({
			cmd: "alert",
			text: a,
			threadId: (e = (t = d)._pthread_self) == null ? void 0 : e.call(t)
		});
	}
	var g = _;
	self.alert = f;
	var h;
	d.instantiateWasm = function(e, t) {
		var n = r("nullthrows")(d.wasmModule);
		d.wasmModule = null;
		var o = new WebAssembly.Instance(n, e);
		return t(o);
	}, self.onunhandledrejection = function(e) {
		var t;
		throw (t = e.reason) != null ? t : e;
	};
	var y = 2;
	function C() {
		try {
			var e, t, n;
			(e = d.wasmMemory) == null || e.grow(0), (t = (n = d).GROWABLE_HEAP_U8) == null || t.call(n);
		} catch (e) {}
	}
	function b(e) {
		return e instanceof RangeError;
	}
	function v(e) {
		var t = d.__emscripten_thread_mailbox_await;
		if (t != null) for (var n = 0; n <= y; n++) try {
			t(e);
			return;
		} catch (e) {
			if (!b(e) || n === y) throw e;
			C();
		}
	}
	function S(e) {
		try {
			if (typeof e == "object" && e != null && "excPtr" in e && typeof e.excPtr == "number") {
				var t = d.getExceptionMessage;
				if (t != null) {
					var n = t(e.excPtr), r = n[0], o = n[1];
					self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback({
						level: 1,
						message: "voip: [WASM Crash - WORKER] Native C++ exception: " + r + ": " + o
					});
				}
			} else e instanceof WebAssembly.RuntimeError && self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback({
				level: 1,
				message: "voip: [WASM Crash - WORKER] WebAssembly.RuntimeError: " + String(e.message)
			});
			e != null && typeof e == "object" && "stack" in e && self.WhatsAppVoipWasmWorkerCompatibleCallbacks.loggingCallback({
				level: 1,
				message: "voip: [WASM Crash - WORKER] JavaScript stack trace: " + String(e.stack)
			});
		} catch (e) {
			g("Failed to log native stack trace: " + String(e));
		}
	}
	function R(e) {
		try {
			if (e.cmd === "load") {
				var t = e.handlers, n = e.wasmMemory, a = e.wasmModule, i = e.wasmVariant, l = e.workerID, s = [], _ = function(t) {
					s.push(t);
				};
				c.removeMessageListener("cmd", R), c.addMessageListener("cmd", _);
				var f = !1, y = !1, b = function() {
					if (f && y) {
						c.postMessage({
							type: "cmd",
							cmd: "loaded"
						});
						for (var e of s) R(e);
						c.removeMessageListener("cmd", _), c.addMessageListener("cmd", R);
					}
				};
				self.startWorker = function(e) {
					d = e, f = !0, b();
				}, d.wasmModule = a;
				var L = function(t) {
					d[t] = function() {
						for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
						c.postMessage({
							type: "cmd",
							cmd: "callHandler",
							callHandler: {
								handler: t,
								args: n
							}
						});
					};
				};
				for (var E of t) L(E);
				d.wasmMemory = n, d.buffer = d.wasmMemory.buffer, d.workerID = l, d.ENVIRONMENT_IS_PTHREAD = !0, d.onAbort = function(e) {
					g("[VoIP WASM] onAbort: " + String(e));
				}, u(i).then(function(e) {
					return e(d);
				}).then(async function(e) {
					h = e, y = !0, b();
				});
			} else if (e.cmd === "run") {
				var k, I, T, D, x, $, P = e.pthread_ptr;
				if (C(), (k = (I = d).__emscripten_thread_init) == null || k.call(I, P, 0, 0, 1), v(P), p(!!P, "pthread_ptr is required in event " + e.cmd), (T = (D = d).establishStackSpace) == null || T.call(D), (x = d.PThread) == null || x.receiveObjectTransfer(e), ($ = d.PThread) == null || $.threadInitTLS(), !m) {
					var N, M;
					(N = (M = d).__embind_initialize_bindings) == null || N.call(M), m = !0;
				}
				try {
					var w, A;
					(w = (A = d).invokeEntryPoint) == null || w.call(A, e.start_routine, e.arg);
				} catch (e) {
					if (e !== "unwind") throw e;
				}
			} else if (e.cmd === "cancel") {
				var F, O;
				if ((F = (O = d)._pthread_self) != null && F.call(O)) {
					var B, W;
					(B = (W = d).__emscripten_thread_exit) == null || B.call(W, -1);
				}
			} else if (e.target !== "setimmediate") if (e.cmd === "checkMailbox") {
				if (m) {
					var q, U;
					(q = (U = d).checkMailbox) == null || q.call(U);
				}
			} else e.cmd === "jsWorkerCmd" ? o("WAWebVoipJsWorkerMessageHandler").handleJsWorkerMessage(h, e) : e.cmd && (g("worker.js received unknown command " + e.cmd), g(e));
		} catch (e) {
			var V = r("getErrorSafe")(e);
			if (g("worker.js onmessage() captured an uncaught exception: " + String(e)), V.stack && g(V.stack), S(e), d.__emscripten_thread_crashed) {
				var H, G;
				(H = (G = d).__emscripten_thread_crashed) == null || H.call(G);
			}
			if (e instanceof WebAssembly.RuntimeError) g("[VoIP WASM] RuntimeError suppressed: " + e.message);
			else throw e;
		}
	}
	c.addMessageListener("cmd", R), c.addMessageListener("jsWorkerCmd", function(e) {
		try {
			o("WAWebVoipJsWorkerMessageHandler").handleJsWorkerMessage(h, e);
		} catch (e) {
			throw g("worker.js jsWorkerCmd handler captured an uncaught exception: " + String(e)), e != null && typeof e == "object" && "stack" in e && g(String(e.stack)), S(e), e;
		}
	});
	function L() {}
	l.default = L;
}), 98);
