__d("WAWebVideo.react", [
	"WALogger",
	"WAWebClassnames",
	"WAWebDomVideoDisposeMediaPlayer",
	"WAWebMediaGatingUtils",
	"WAWebNoop",
	"WAWebNullFunc",
	"WAWebPttAudioChannels",
	"WAWebUA",
	"WAWebVideoPlayerSurfaceLoadable.react",
	"WAWebVideoPlayerXBasicControlsLoadable.react",
	"WAWebVideoPlayerXLoadable.react",
	"gkx",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useLazyRef",
	"useVideoPlayerXAPIOutsideVideoPlayerSurface",
	"useWAWebListener",
	"useWAWebOnUnmount"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = ["ref"], c = ["ref"], d, m, p = m || (m = o("react")), _ = m, f = _.useCallback, g = _.useEffect, h = _.useImperativeHandle, y = _.useMemo, C = _.useRef, b = _.useState, v = { video: {
		display: "x1lliihq",
		width: "xh8yej3",
		height: "x5yr21d",
		$$css: !0
	} };
	function S(e) {
		var t = o("react-compiler-runtime").c(55), n, a;
		t[0] !== e ? (a = e.ref, n = babelHelpers.objectWithoutPropertiesLoose(e, u), t[0] = e, t[1] = n, t[2] = a) : (n = t[1], a = t[2]);
		var i = n, l = i.autoPlay, s = i.controls, c = i.disableAutoplayManagement, m = i.loop, _ = i.muted, f = i.onAudioChannelRelease, y = i.onEnded, C = i.onLoadedData, b = i.onLoadedMetadata, S = i.onLoop, R = i.onPlaying, L = i.onStoppedPlaying, E = i.onTimeUpdate, k = i.renderVideoPixelsFit, I = i.src, T = i.srcObject, D = i.xstyle, x = s === void 0 ? !1 : s, $ = m === void 0 ? !1 : m, P = o("useVideoPlayerXAPIOutsideVideoPlayerSurface").useVideoPlayerXAPIOutsideVideoPlayerSurface(), N = P[0], M = P[1], w = M.controller, A;
		t[3] !== $ || t[4] !== y ? (A = function() {
			$ || y == null || y();
		}, t[3] = $, t[4] = y, t[5] = A) : A = t[5];
		var F = A, O, B;
		t[6] !== w || t[7] !== _ ? (O = function() {
			_ != null && w != null && w.setMuted(_, "product_initiated");
		}, B = [w, _], t[6] = w, t[7] = _, t[8] = O, t[9] = B) : (O = t[8], B = t[9]), g(O, B);
		var W;
		t[10] !== w || t[11] !== x || t[12] !== f ? (W = f != null ? f : function() {
			x && (w == null || w.pause("product_initiated"));
		}, t[10] = w, t[11] = x, t[12] = f, t[13] = W) : W = t[13];
		var q;
		t[14] !== W ? (q = {
			onAudioChannelRelease: W,
			onlyClaimIfUnmuted: !0,
			syncVolumeSettings: !1
		}, t[14] = W, t[15] = q) : q = t[15];
		var U = q, V;
		t[16] !== w ? (V = function() {
			return {
				underlyingVideo: o("WAWebNullFunc").returnNull,
				play: function(t) {
					w == null || w.play(t != null ? t : "user_initiated");
				},
				pause: function(t) {
					w == null || w.pause(t != null ? t : "user_initiated");
				},
				pauseAndReset: function() {
					w == null || w.pause("product_initiated"), w == null || w.seek(0);
				},
				seek: function(t) {
					w == null || w.seek(t);
				},
				getPaused: function() {
					var e;
					return (e = w == null ? void 0 : w.getCurrentState().paused) != null ? e : !0;
				},
				getDuration: function() {
					return w == null ? void 0 : w.getCurrentState().duration;
				},
				getCurrentTime: function() {
					return w == null ? void 0 : w.getPlayheadPosition();
				},
				getVideoDimensions: function() {
					return w == null ? void 0 : w.internal_getVideoPixelsDecodedDimensions();
				},
				getVideoElementDimensions: function() {
					var e = w == null ? void 0 : w.internal_getVideoElement();
					return e == null || e.offsetWidth <= 0 || e.offsetHeight <= 0 ? null : {
						width: e.offsetWidth,
						height: e.offsetHeight
					};
				},
				drawFrameToContext: function(t) {
					for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
					var o = n, a = w == null ? void 0 : w.internal_getVideoElement();
					return a == null ? !1 : (o.length === 4 ? t.drawImage.apply(t, [a].concat(o)) : t.drawImage.apply(t, [a].concat(o)), !0);
				}
			};
		}, t[16] = w, t[17] = V) : V = t[17], h(a, V);
		var H;
		t[18] !== n.onClick ? (H = n.onClick != null ? { onClick: n.onClick } : {}, t[18] = n.onClick, t[19] = H) : H = t[19];
		var G = H, z;
		t[20] !== n.height || t[21] !== n.style || t[22] !== n.width ? (z = n.width != null || n.height != null ? babelHelpers.extends({}, n.style, {
			width: n.width,
			height: n.height
		}) : n.style, t[20] = n.height, t[21] = n.style, t[22] = n.width, t[23] = z) : z = t[23];
		var j = z, K;
		t[24] !== n.className || t[25] !== D ? (K = o("WAWebClassnames").classnamesConvertMeToStylexPlease((d || (d = r("stylex")))(v.video, D), n.className), t[24] = n.className, t[25] = D, t[26] = K) : K = t[26];
		var Q = l != null ? l : !1, X = $ ? -1 : 0, Y;
		t[27] !== b ? (Y = function() {
			b == null || b();
		}, t[27] = b, t[28] = Y) : Y = t[28];
		var J;
		t[29] !== x ? (J = x ? p.jsx(o("WAWebVideoPlayerXBasicControlsLoadable.react").WAWebVideoPlayerXBasicControlsLoadable, {}) : null, t[29] = x, t[30] = J) : J = t[30];
		var Z;
		t[31] !== U || t[32] !== F || t[33] !== C || t[34] !== S || t[35] !== R || t[36] !== L || t[37] !== E || t[38] !== Y || t[39] !== J ? (Z = p.jsx(o("WAWebVideoPlayerSurfaceLoadable.react").WAWebVideoPlayerSurfaceLoadable, {
			audioBridgeOptions: U,
			onEnded: F,
			onLoadedData: C,
			onLoadedMetadata: Y,
			onLoop: S,
			onPlaying: R,
			onStoppedPlaying: L,
			onTimeUpdate: E,
			children: J
		}), t[31] = U, t[32] = F, t[33] = C, t[34] = S, t[35] = R, t[36] = L, t[37] = E, t[38] = Y, t[39] = J, t[40] = Z) : Z = t[40];
		var ee;
		t[41] !== N || t[42] !== c || t[43] !== k || t[44] !== I || t[45] !== T || t[46] !== Q || t[47] !== X || t[48] !== Z ? (ee = p.jsx(o("WAWebVideoPlayerXLoadable.react").WAWebVideoPlayerXLoadable, {
			apiRef: N,
			src: I,
			mediaStream: T,
			autoplayEnabled: Q,
			disableAutoplayManagement: c,
			loopCount: X,
			renderVideoPixelsFit: k,
			children: Z
		}), t[41] = N, t[42] = c, t[43] = k, t[44] = I, t[45] = T, t[46] = Q, t[47] = X, t[48] = Z, t[49] = ee) : ee = t[49];
		var te;
		return t[50] !== j || t[51] !== G || t[52] !== K || t[53] !== ee ? (te = p.jsx("div", babelHelpers.extends({
			className: K,
			style: j
		}, G, { children: ee })), t[50] = j, t[51] = G, t[52] = K, t[53] = ee, t[54] = te) : te = t[54], te;
	}
	function R(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, c), i = a.autoPlay, l = a.controls, u = l === void 0 ? !1 : l, m = a.loop, _ = m === void 0 ? !1 : m, y = a.muted, S = a.onAudioChannelRelease, R = a.onEnded, L = a.onLoadedMetadata, E = a.onLoop, k = a.onPlaying, I = a.src, T = a.srcObject, D = a.xstyle, x = C(null), $ = b(!1), P = $[0], N = $[1], M = b(null), w = M[0], A = M[1];
		r("useWAWebOnUnmount")(function() {
			x.current == null || x.current(), o("WAWebUA").UA.isBlink && w && r("WAWebDomVideoDisposeMediaPlayer")(w);
		});
		var F = function() {
			return w;
		}, O = function(t) {
			w != null && w.paused && w.play().catch(r("WAWebNoop"));
		}, B = function(t) {
			w && !w.paused && w.pause();
		}, W = function() {
			w && (w.currentTime = 0, w.paused || w.pause());
		}, q = function(t) {
			w && (w.currentTime = t);
		}, U = function() {
			var e;
			return (e = w == null ? void 0 : w.paused) != null ? e : !0;
		}, V = function() {
			return w == null ? void 0 : w.duration;
		}, H = function() {
			return w == null ? void 0 : w.currentTime;
		}, G = function() {
			return w && w.videoWidth > 0 && w.videoHeight > 0 ? {
				width: w.videoWidth,
				height: w.videoHeight
			} : null;
		}, z = function() {
			return w && w.offsetWidth > 0 && w.offsetHeight > 0 ? {
				width: w.offsetWidth,
				height: w.offsetHeight
			} : null;
		}, j = function(t) {
			if (w == null) return !1;
			for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
			return n.length === 4 ? t.drawImage.apply(t, [w].concat(n)) : t.drawImage.apply(t, [w].concat(n)), !0;
		};
		h(n, function() {
			return {
				underlyingVideo: F,
				play: O,
				pause: B,
				pauseAndReset: W,
				seek: q,
				getPaused: U,
				getDuration: V,
				getCurrentTime: H,
				getVideoDimensions: G,
				getVideoElementDimensions: z,
				drawFrameToContext: j
			};
		});
		var K = function() {
			x.current == null || x.current();
		}, Q = r("useLazyRef")(function() {
			return Symbol("audio-channel");
		}), X = S != null ? S : function() {
			u && (w == null || w.pause());
		}, Y = function() {
			x.current = o("WAWebPttAudioChannels").MainAudioChannel.claim(Q.current, X);
		}, J = function() {
			w && (w.muted || Y());
		}, Z = function(n) {
			w && (y !== !0 && Y(), (!w.videoHeight || !w.videoWidth) && !P && (N(!0), w.pause(), w.play().catch(r("WAWebNoop")), o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["video height/width should not be 0"]))).tags("non-sad").sendLogs("non-zero height and width")), w.videoHeight && w.videoWidth && k && (k(), N(!1)));
		}, ee = function(t) {
			L == null || L(t);
		};
		g(function() {
			w && ("srcObject" in w && T ? w.srcObject = T : I != null && I !== "" ? w.src = I : r("gkx")("26258") || o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Neither src nor srcObject is passed in to Video component."])))), i === !0 && (w == null || w.play().catch(r("WAWebNoop")));
		}, [w]), o("useWAWebListener").useListener(w, "playing", Z), o("useWAWebListener").useListener(w, "pause", K), o("useWAWebListener").useListener(w, "volumechange", J);
		var te = f(function() {
			_ ? (w == null || w.play().catch(r("WAWebNoop")), E == null || E()) : R == null || R();
		}, [
			_,
			w,
			R,
			E
		]);
		return p.jsx("video", {
			ref: A,
			className: o("WAWebClassnames").classnamesConvertMeToStylexPlease((d || (d = r("stylex")))(v.video, D), a.className),
			muted: a.muted,
			controls: a.controls,
			controlsList: a.controlsList,
			width: a.width,
			height: a.height,
			onClick: a.onClick,
			onEnded: te,
			onLoadedMetadata: ee,
			onLoadedData: a.onLoadedData,
			style: a.style,
			children: a.children
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	var L = o("WAWebMediaGatingUtils").isVideoCometVideoPlayerEnabled() ? S : R, E = L;
	l.default = E;
}), 98);
