__d("WAWebVoipVideoCaptureBase", [
	"$InternalEnum",
	"WALogger",
	"WAResolvable",
	"WAWebABProps",
	"WAWebNoop",
	"WAWebVoipVideoCaptureCanvas",
	"WAWebVoipVideoCaptureOffThread",
	"WAWebVoipVideoCaptureWebGL",
	"WAWebVoipVideoCaptureWebGPU",
	"WAWebVoipWebCodecsEncoderState",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $ = n("$InternalEnum").Mirrored([
		"Uninitialized",
		"Initializing",
		"Ready",
		"Error"
	]), P = n("$InternalEnum")({
		DEFAULT: 0,
		CANVAS_CPU: 1,
		CANVAS_WEBGL: 2,
		CANVAS_WEBGPU: 3,
		OFF_THREAD_MSTP: 4
	});
	async function N() {
		var t = await o("WAWebVoipVideoCaptureWebGPU").WAWebVoipVideoCaptureWebGPU.isAvailable();
		return t ? (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: Using WebGPU for video capture (default selected)"]))), new (o("WAWebVoipVideoCaptureWebGPU")).WAWebVoipVideoCaptureWebGPU()) : o("WAWebVoipVideoCaptureWebGL").WAWebVoipVideoCaptureWebGL.isAvailable() ? (o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["voip: Using WebGL for video capture (default selected)"]))), new (o("WAWebVoipVideoCaptureWebGL")).WAWebVoipVideoCaptureWebGL()) : (o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: WebGPU/WebGL unavailable, using Canvas CPU"]))), new (o("WAWebVoipVideoCaptureCanvas")).WAWebVoipVideoCaptureCanvas());
	}
	var M = (function() {
		function e() {
			var e;
			this.name = "base", this.captureInitState = $.Uninitialized, this.captureInitResolvable = null;
			var t = o("WAWebABProps").getABPropConfigValue("web_voip_video_capture_impl"), n = (e = P.cast(t)) != null ? e : P.DEFAULT;
			this.captureImplementation = n === P.CANVAS_CPU ? new (o("WAWebVoipVideoCaptureCanvas")).WAWebVoipVideoCaptureCanvas() : n === P.OFF_THREAD_MSTP ? new (o("WAWebVoipVideoCaptureOffThread")).WAWebVoipVideoCaptureOffThread() : n === P.CANVAS_WEBGL ? new (o("WAWebVoipVideoCaptureWebGL")).WAWebVoipVideoCaptureWebGL() : n === P.CANVAS_WEBGPU ? new (o("WAWebVoipVideoCaptureWebGPU")).WAWebVoipVideoCaptureWebGPU() : N();
		}
		var t = e.prototype;
		return t.__cleanup = async function() {
			var e = "voip: cleanupVideoCapture (" + this.name + ")";
			o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["", ""])), e);
			try {
				var t = await this.captureImplementation;
				await t.stopVideoCapture(), this.captureInitState = $.Uninitialized, o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["voip: cleanupCapture completed successfully"])));
			} catch (t) {
				o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
					"",
					" error: ",
					""
				])), e, t);
			}
		}, t.__startCapture = async function(t) {
			var e = this, n = t.getMediaStream, a = t.height, i = t.maxFps, l = t.onVideoDataFnType, s = t.width, u = "voip: wasm: [AV:startCapture (" + this.name + ")]";
			if (o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["", ""])), u), this.captureInitState !== $.Uninitialized && (o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
				"",
				" cleaning up existing capture (state=",
				")"
			])), u, this.captureInitState), await this.__cleanup()), o("WAWebVoipWebCodecsEncoderState").isWebCodecsEncoderEnabled() && !(this.captureImplementation instanceof o("WAWebVoipVideoCaptureOffThread").WAWebVoipVideoCaptureOffThread)) {
				var c, d, m = this.captureImplementation instanceof Promise ? "pending-async" : (c = (d = this.captureImplementation) == null || (d = d.constructor) == null ? void 0 : d.name) != null ? c : "unknown";
				o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["voip: [webcodec-encode] capture->OffThread (was ", ")"])), m), this.captureImplementation = new (o("WAWebVoipVideoCaptureOffThread")).WAWebVoipVideoCaptureOffThread();
			} else o("WAWebVoipWebCodecsEncoderState").isWebCodecsEncoderEnabled() && o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["voip: [webcodec-encode] reusing existing OffThread instance"])));
			var L = new (o("WAResolvable")).Resolvable();
			this.captureInitState = $.Initializing, this.captureInitResolvable = L, L.promise.catch(r("WAWebNoop"));
			var E = null;
			try {
				var k;
				if (E = await n(), E == null) throw new w();
				if (this.captureInitResolvable !== L) {
					o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose(["", " superseded by newer capture, releasing stream"])), u);
					return;
				}
				o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose(["", " got video media stream"])), u);
				var I = await this.captureImplementation, T = 1e4, D = null, x = I.startVideoCapture({
					stream: E,
					onVideoDataFnType: l,
					width: s,
					height: a,
					maxFps: i
				});
				x.catch(r("WAWebNoop")), await Promise.race([x, new Promise(function(e, t) {
					D = self.setTimeout(function() {
						t(r("err")("startVideoCapture timed out after " + T + "ms"));
					}, T);
				})]).finally(function() {
					D != null && self.clearTimeout(D);
				}), E = null, this.captureInitState = $.Ready, (k = this.captureInitResolvable) == null || k.resolve(), o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose(["", " video capture prepared successfully"])), u);
			} catch (e) {
				e instanceof w ? o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose(["voip: wasm: [AV:startCapture (", ")] no media stream acquired"])), this.name) : o("WALogger").ERROR(v || (v = babelHelpers.taggedTemplateLiteralLoose([
					"",
					" error: ",
					""
				])), u, e).sendLogs("voip: wasm: error in startVideoCaptureJSImpl"), this.captureInitState = $.Error;
				try {
					await this.__cleanup();
				} finally {
					L.reject(e);
				}
			} finally {
				E != null && (o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
					"voip: wasm: [AV:startCapture (",
					")] safety net: releasing ",
					" orphaned track(s)"
				])), this.name, E.getTracks().length), E.getTracks().forEach(function(t) {
					o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
						"voip: wasm: [AV:startCapture (",
						")] safety net: stopping ",
						" track (readyState=",
						")"
					])), e.name, t.kind, t.readyState), t.stop();
				}));
			}
		}, t.stopCapture = async function(t) {
			t === void 0 && (t = !1);
			var e = "voip: wasm: [AV:stopCapture (" + this.name + ")]";
			if (o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose(["", ""])), e), !t && this.captureInitState === $.Uninitialized && this.captureInitResolvable == null) {
				o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose(["", " already stopped, skipping"])), e);
				return;
			}
			try {
				if (!t && this.captureInitState !== $.Ready && this.captureInitState !== $.Error) {
					var n;
					o("WALogger").WARN(k || (k = babelHelpers.taggedTemplateLiteralLoose([
						"",
						" invalid initialization. state = ",
						". Waiting for init..."
					])), e, this.captureInitState), await ((n = this.captureInitResolvable) == null ? void 0 : n.promise), o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose(["", " init complete. Cleaning up capture"])), e);
				}
			} catch (e) {
				if (e instanceof w) o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose(["voip: wasm: [AV:stopCapture (", ")] no stream, cleanup"])), this.name);
				else throw e;
			}
			try {
				await this.__cleanup(), this.captureInitResolvable = null, o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose(["", " completed successfully"])), e);
			} catch (t) {
				o("WALogger").ERROR(x || (x = babelHelpers.taggedTemplateLiteralLoose([
					"",
					" error: ",
					""
				])), e, t);
			}
		}, e;
	})(), w = (function(e) {
		function t() {
			return e.apply(this, arguments) || this;
		}
		return babelHelpers.inheritsLoose(t, e), t;
	})(babelHelpers.wrapNativeSuper(Error));
	l.CaptureInitState = $, l.WAWebVoipVideoCaptureBase = M;
}), 98);
