__d("WAWebVoipVideoDesktopCapture", [
	"WALogger",
	"WAPromiseDelays",
	"WAWebAudioUtility",
	"WAWebBackendApi",
	"WAWebBoolFunc",
	"WAWebVoipAudioCaptureAndPlayback",
	"WAWebVoipAudioCaptureSharedBufferWorklet",
	"WAWebVoipSharedBufferCaptureProcessorConfig",
	"WAWebVoipStackInterface",
	"WAWebVoipVideoCameraCapture",
	"WAWebVoipVideoCaptureBase",
	"err",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v = 8192, S = (function(t) {
		function n() {
			for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
			return e = t.call.apply(t, [this].concat(r)) || this, e.name = "desktop", e.captureParams = null, e.desktopStream = null, e.activeDesktopStream = null, e.systemAudioContext = null, e.systemAudioSourceNode = null, e.systemAudioWorkletNode = null, e.systemAudioSabBuffer = null, e.systemAudioTracks = [], babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
		}
		babelHelpers.inheritsLoose(n, t);
		var a = n.prototype;
		return a.preflightAcquireDesktopStream = async function(t) {
			var e;
			return this.desktopStream = { streamPromise: o("WAWebBackendApi").frontendSendAndReceive("voipAcquireMediaStream", {
				type: "desktop",
				params: (e = o("WAWebVoipVideoCameraCapture").WAWebVoipVideoCameraCapture.captureParams) != null ? e : void 0,
				targetWindow: t
			}) }, this.desktopStream.streamPromise;
		}, a.startDesktopCapture = async function(n) {
			var t, a, i = n.height, l = n.maxFps, m = n.width;
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"[AV:startDesktopCapture] w=",
				" h=",
				" fps=",
				""
			])), m, i, l);
			var p = await this.$WAWebVoipVideoDesktopCaptureImpl$p_1();
			if (p == null) {
				o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[AV:startDesktopCapture] stream failed, canceling"]))), await this.$WAWebVoipVideoDesktopCaptureImpl$p_2();
				return;
			}
			var _ = p.getVideoTracks().at(0), f = _ == null ? void 0 : _.getSettings(), g = (t = f == null ? void 0 : f.width) != null ? t : m, h = (a = f == null ? void 0 : f.height) != null ? a : i;
			(g !== m || h !== i) && o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
				"[AV:startDesktopCapture] actual=",
				"x",
				" req=",
				"x",
				""
			])), g, h, m, i), this.captureParams = {
				width: g,
				height: h,
				maxFps: l
			};
			var y = p.clone();
			if (await this.__startCapture({
				getMediaStream: async function() {
					return y;
				},
				onVideoDataFnType: "onDesktopCaptureDataFromJs",
				width: g,
				height: h,
				maxFps: l
			}), this.captureInitState !== o("WAWebVoipVideoCaptureBase").CaptureInitState.Ready) {
				o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[AV:startDesktopCapture] capture pipeline not ready, canceling share"]))), this.releaseDesktopStream(), await this.$WAWebVoipVideoDesktopCaptureImpl$p_2();
				return;
			}
			var C = y.getAudioTracks();
			if (C.length > 0) try {
				await this.$WAWebVoipVideoDesktopCaptureImpl$p_3(y);
			} catch (e) {
				await this.$WAWebVoipVideoDesktopCaptureImpl$p_4(), o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[AV:systemAudio] failed to start"]))).catching(r("getErrorSafe")(e)).sendLogs("system-audio-start-failed");
			}
		}, a.$WAWebVoipVideoDesktopCaptureImpl$p_1 = async function() {
			var e, t, n, r = this;
			if (this.desktopStream == null) {
				var a = this.activeDesktopStream, i = a == null ? void 0 : a.getVideoTracks().at(0);
				if (a != null && (i == null ? void 0 : i.readyState) === "live") return o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[AV:startDesktopCapture] reusing session stream across driver restart"]))), a;
			}
			this.releaseDesktopStream(), this.desktopStream || await this.preflightAcquireDesktopStream();
			var l = (e = await ((t = this.desktopStream) == null ? void 0 : t.streamPromise)) != null ? e : null;
			return this.desktopStream = null, l == null ? null : (this.activeDesktopStream = l, (n = l.getVideoTracks().at(0)) == null || n.addEventListener("ended", function() {
				o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[AV:startDesktopCapture] stream ended, stopping"]))), r.$WAWebVoipVideoDesktopCaptureImpl$p_2();
			}), l);
		}, a.$WAWebVoipVideoDesktopCaptureImpl$p_2 = async function() {
			var e = await o("WAWebVoipStackInterface").getVoipStackInterface();
			(e == null ? void 0 : e.type) === "web" && await e.stopScreenShare();
		}, a.releaseDesktopStream = function() {
			var e = this.activeDesktopStream;
			if (e != null) {
				o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["[AV:releaseDesktopStream] releasing screen-share stream"])));
				for (var t of e.getTracks()) t.stop();
				this.activeDesktopStream = null;
			}
		}, a.$WAWebVoipVideoDesktopCaptureImpl$p_3 = async function(t) {
			var e = t.getAudioTracks();
			if (e.length !== 0) {
				this.systemAudioTracks = e;
				var n = o("WAWebVoipAudioCaptureAndPlayback").getCaptureParams(), a = n.framesPerChunk, i = n.sampleRate, l = v;
				o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["[AV:systemAudio] starting capture"])));
				var s = o("WAWebAudioUtility").getCachedWasmModule();
				if (!s) throw r("err")("WASM module not initialized");
				var u = new AudioContext({ sampleRate: i });
				this.systemAudioContext = u;
				var c = u.createMediaStreamSource(t);
				this.systemAudioSourceNode = c;
				var d = 8, m = d + l * Float32Array.BYTES_PER_ELEMENT, p = await o("WAWebAudioUtility").mallocWasmBuffer(m);
				this.systemAudioSabBuffer = p;
				var _ = s.GROWABLE_HEAP_U8();
				_.fill(0, p, p + m);
				var h = r("WAWebVoipSharedBufferCaptureProcessorConfig").module_url;
				if (h === "") throw r("err")("voip: [AV:SystemAudio] Missing worklet module url");
				await u.audioWorklet.addModule(h);
				var y = new AudioWorkletNode(u, "voip-shared-buffer-capture-processor", {
					numberOfInputs: 1,
					numberOfOutputs: 0
				});
				this.systemAudioWorkletNode = y;
				var C = new Promise(function(e) {
					y.port.onmessage = function(t) {
						var n = t.data;
						typeof n != "object" || n == null || (n.type === "ready" ? e() : o("WAWebVoipAudioCaptureSharedBufferWorklet").handleSharedBufferWorkletDiagnostics(n, "SystemAudio"));
					};
				}), b = await o("WAPromiseDelays").withTimeout(C, 5e3, o("WAWebBoolFunc").returnFalse);
				if (b === !1) throw r("err")("AudioWorklet processor not ready within 5s");
				var S = s.GROWABLE_HEAP_F32();
				y.port.postMessage({
					type: "initSharedBuffer",
					heapBuffer: S.buffer,
					heapBufferOffset: p,
					bufferSize: l,
					targetSampleRate: i
				}), c.connect(y);
				var R = s.startSystemAudioReaderThread(p, l, a);
				if (!R) throw r("err")("Failed to start system audio reader thread");
				y.port.postMessage({ type: "start" }), o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["[AV:systemAudio] capture started"])));
			}
		}, a.$WAWebVoipVideoDesktopCaptureImpl$p_4 = async function() {
			var e = this.systemAudioWorkletNode;
			if (e) {
				e.port.postMessage({ type: "stop" }), e.disconnect(), this.systemAudioWorkletNode = null;
				try {
					var t;
					(t = o("WAWebAudioUtility").getCachedWasmModule()) == null || t.stopSystemAudioReaderThread();
				} catch (e) {
					o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose(["[AV:systemAudio] reader stop failed"]))).catching(r("getErrorSafe")(e)).sendLogs("system-audio-reader-stop-failed");
				}
			}
			for (var n of this.systemAudioTracks) n.stop();
			if (this.systemAudioTracks = [], this.systemAudioSourceNode && (this.systemAudioSourceNode.disconnect(), this.systemAudioSourceNode = null), this.systemAudioContext && (this.systemAudioContext.close().catch(function(e) {
				o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose(["[AV:systemAudio] context close failed"]))).catching(r("getErrorSafe")(e)).sendLogs("system-audio-context-close-failed");
			}), this.systemAudioContext = null), this.systemAudioSabBuffer != null) {
				try {
					await o("WAWebAudioUtility").freeWasmBuffer(this.systemAudioSabBuffer);
				} catch (e) {
					o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose(["[AV:systemAudio] buffer free failed"]))).catching(r("getErrorSafe")(e)).sendLogs("system-audio-buffer-free-failed");
				}
				this.systemAudioSabBuffer = null;
			}
			o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose(["[AV:systemAudio] capture stopped"])));
		}, a.__cleanup = async function() {
			await this.$WAWebVoipVideoDesktopCaptureImpl$p_4(), await t.prototype.__cleanup.call(this), this.desktopStream = null;
		}, n;
	})(o("WAWebVoipVideoCaptureBase").WAWebVoipVideoCaptureBase), R = new S();
	l.WAWebVoipVideoDesktopCapture = R;
}), 98);
