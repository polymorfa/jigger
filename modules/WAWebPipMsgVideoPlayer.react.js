__d("WAWebPipMsgVideoPlayer.react", [
	"WAWebMediaMissingModal.react",
	"WAWebMediaNeedPokeModal.react",
	"WAWebMediaTypes",
	"WAWebMediaUnsupportedModal.react",
	"WAWebModalManager",
	"WAWebMsgGetters",
	"WAWebPipController",
	"WAWebPipSharedVideoPlayer.react",
	"WAWebStateUtils",
	"react",
	"react-compiler-runtime",
	"useWAWebModelValues",
	"useWAWebMsgValues",
	"useWAWebSendViewCount",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useImperativeHandle, p = c.useRef;
	function _(t) {
		var n = o("react-compiler-runtime").c(52), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, s = l.msg, c = l.onClose, _ = l.onMissingMedia, f = l.onNeedPokeMedia, g = l.onOpenVideoFloater, h = l.onUnsupportedMedia, y = p(null), C;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (C = [o("WAWebMsgGetters").getId], n[3] = C) : C = n[3], o("useWAWebMsgValues").useMsgValues(a.msg.id, C);
		var b;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (b = [
			"mediaStage",
			"preview",
			"streamable"
		], n[4] = b) : b = n[4];
		var v = o("useWAWebModelValues").useModelValues(a.mediaData, b), S;
		n[5] !== v ? (S = { mediaData: v }, n[5] = v, n[6] = S) : S = n[6];
		var R = o("useWAWebSendViewCount").usePlaybackSendViewCount(a.msg.id, S), L;
		n[7] === Symbol.for("react.memo_cache_sentinel") ? (L = function() {
			return y.current ? y.current.getCurrentTimeFromVideo() : 0;
		}, n[7] = L) : L = n[7];
		var E = L, k;
		n[8] !== s || n[9] !== g ? (k = function() {
			g && g(), r("WAWebPipController").openPiP(o("WAWebStateUtils").unproxy(s), E(), null);
		}, n[8] = s, n[9] = g, n[10] = k) : k = n[10];
		var I = k, T;
		n[11] !== s || n[12] !== c || n[13] !== _ ? (T = function() {
			_ && _(), o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebMediaMissingModal.react"), { msg: s })), c();
		}, n[11] = s, n[12] = c, n[13] = _, n[14] = T) : T = n[14];
		var D = r("useWAWebStableCallback")(T), x;
		n[15] !== s || n[16] !== c || n[17] !== h ? (x = function() {
			h && h(), o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebMediaUnsupportedModal.react"), { msg: s })), c();
		}, n[15] = s, n[16] = c, n[17] = h, n[18] = x) : x = n[18];
		var $ = r("useWAWebStableCallback")(x), P;
		n[19] !== s || n[20] !== c || n[21] !== f ? (P = function() {
			f && f(), o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebMediaNeedPokeModal.react"), { msg: s })), c();
		}, n[19] = s, n[20] = c, n[21] = f, n[22] = P) : P = n[22];
		var N = r("useWAWebStableCallback")(P), M;
		n[23] === Symbol.for("react.memo_cache_sentinel") ? (M = function() {
			var e;
			return (e = y.current) == null ? void 0 : e.getContainerElement();
		}, n[23] = M) : M = n[23];
		var w = M, A;
		n[24] === Symbol.for("react.memo_cache_sentinel") ? (A = function() {
			return { getContainerElement: w };
		}, n[24] = A) : A = n[24], m(i, A);
		var F, O;
		n[25] !== D || n[26] !== N || n[27] !== $ || n[28] !== v.mediaStage ? (F = function() {
			e: switch (v.mediaStage) {
				case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING: {
					D();
					break e;
				}
				case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED: {
					$();
					break e;
				}
				case o("WAWebMediaTypes").MediaDataStage.NEED_POKE: {
					N();
					break e;
				}
				default:
			}
		}, O = [
			D,
			N,
			$,
			v.mediaStage
		], n[25] = D, n[26] = N, n[27] = $, n[28] = v.mediaStage, n[29] = F, n[30] = O) : (F = n[29], O = n[30]), d(F, O);
		var B;
		n[31] !== v || n[32] !== s ? (B = {
			msg: s,
			mediaData: v
		}, n[31] = v, n[32] = s, n[33] = B) : B = n[33];
		var W = B, q;
		return n[34] !== I || n[35] !== R || n[36] !== W || n[37] !== a.autoPlay || n[38] !== a.disablePiPControls || n[39] !== a.noPip || n[40] !== a.onClose || n[41] !== a.onError || n[42] !== a.onFullscreenToggle || n[43] !== a.onLoadedData || n[44] !== a.onRefSet || n[45] !== a.onSetFullscreenToggleCallback || n[46] !== a.onVideoEnded || n[47] !== a.onVideoMetadataChange || n[48] !== a.overlays || n[49] !== a.startTime || n[50] !== a.type ? (q = u.jsx(o("WAWebPipSharedVideoPlayer.react").WrappedSharedVideoPlayer, {
			ref: y,
			type: a.type,
			msgVideoInfo: W,
			startTime: a.startTime,
			onClose: a.onClose,
			onVideoEnded: a.onVideoEnded,
			onError: a.onError,
			onOpenVideoFloater: I,
			onTimeUpdate: R,
			onLoadedData: a.onLoadedData,
			onFullscreenToggle: a.onFullscreenToggle,
			autoPlay: a.autoPlay,
			overlays: a.overlays,
			noPip: a.noPip,
			disablePiPControls: a.disablePiPControls,
			onRefSet: a.onRefSet,
			onVideoMetadataChange: a.onVideoMetadataChange,
			onSetFullscreenToggleCallback: a.onSetFullscreenToggleCallback
		}), n[34] = I, n[35] = R, n[36] = W, n[37] = a.autoPlay, n[38] = a.disablePiPControls, n[39] = a.noPip, n[40] = a.onClose, n[41] = a.onError, n[42] = a.onFullscreenToggle, n[43] = a.onLoadedData, n[44] = a.onRefSet, n[45] = a.onSetFullscreenToggleCallback, n[46] = a.onVideoEnded, n[47] = a.onVideoMetadataChange, n[48] = a.overlays, n[49] = a.startTime, n[50] = a.type, n[51] = q) : q = n[51], q;
	}
	var f = _;
	l.WrappedMsgVideoPlayer = f;
}), 98);
