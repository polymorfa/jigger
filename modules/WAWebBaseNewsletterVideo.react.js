__d("WAWebBaseNewsletterVideo.react", [
	"WAWebFrontendMsgGetters",
	"WAWebNewsletterVideoPlayLoggingContext",
	"react",
	"react-compiler-runtime",
	"useWAWebBaseVideoCommon",
	"useWAWebCanPlaybackAudio",
	"useWAWebNewsletterVideoPlayMetric",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l) {
	var e = [
		"autoPlay",
		"children",
		"className",
		"msg",
		"ref",
		"srcObject"
	], s = ["videoCallbacks"], u;
	function c(e) {
		if (e == null) throw new TypeError("Cannot destructure " + e);
	}
	var d = u || (u = o("react")), m = u, p = m.useContext, _ = m.useImperativeHandle;
	function f(t) {
		var n, a = o("react-compiler-runtime").c(81), i, l, u, m, f, g, h;
		a[0] !== t ? (i = t.autoPlay, l = t.children, u = t.className, m = t.msg, g = t.ref, h = t.srcObject, f = babelHelpers.objectWithoutPropertiesLoose(t, e), a[0] = t, a[1] = i, a[2] = l, a[3] = u, a[4] = m, a[5] = f, a[6] = g, a[7] = h) : (i = a[1], l = a[2], u = a[3], m = a[4], f = a[5], g = a[6], h = a[7]);
		var y, C;
		if (a[8] !== f) {
			var b = f;
			C = b.videoCallbacks, y = babelHelpers.objectWithoutPropertiesLoose(b, s), a[8] = f, a[9] = y, a[10] = C;
		} else y = a[9], C = a[10];
		var v = p(r("WAWebNewsletterVideoPlayLoggingContext")), S = v.finishCount, R = v.setFinishCount, L;
		if (a[11] !== m) {
			var E;
			a[13] === Symbol.for("react.memo_cache_sentinel") ? (E = /@.*/, a[13] = E) : E = a[13], L = o("WAWebFrontendMsgGetters").getChat(m).id.toString().replace(E, ""), a[11] = m, a[12] = L;
		} else L = a[12];
		var k = L, I = (n = m.serverId) != null ? n : 0, T = o("useWAWebCanPlaybackAudio").useCanPlaybackAudio(m), D;
		a[14] !== I ? (D = I.toString(), a[14] = I, a[15] = D) : D = a[15];
		var x = o("useWAWebNewsletterVideoPlayMetric").useWAWebNewsletterVideoPlayMetric(m, k, D), $ = x.videoProps, P;
		a[16] !== $ ? (P = babelHelpers.extends({}, (c($), $)), a[16] = $, a[17] = P) : P = a[17];
		var N;
		a[18] !== P ? (N = {
			onPauseExtra: function(t) {
				P.onChannelVideoPause == null || P.onChannelVideoPause(t);
			},
			onPlayingExtra: function(t) {
				P.onChannelVideoPlaying == null || P.onChannelVideoPlaying(t);
			}
		}, a[18] = P, a[19] = N) : N = a[19];
		var M;
		a[20] !== i || a[21] !== y || a[22] !== f.src || a[23] !== h || a[24] !== N ? (M = {
			autoPlay: i,
			callbacks: N,
			props: y,
			src: f.src,
			srcObject: h
		}, a[20] = i, a[21] = y, a[22] = f.src, a[23] = h, a[24] = N, a[25] = M) : M = a[25];
		var w = r("useWAWebBaseVideoCommon")(M), A = w.getAudioDisabled, F = w.getBuffered, O = w.getCurrentTime, B = w.getDuration, W = w.getMuted, q = w.getPaused, U = w.getPlaybackRate, V = w.getVolume, H = w.pause, G = w.pauseAndReset, z = w.play, j = w.setCurrentTime, K = w.setDuration, Q = w.setMuted, X = w.setPlaybackRate, Y = w.setRefVideo, J = w.setVolume, Z = w.underlyingVideo, ee = w.videoRef, te = w.wrappedProps, ne;
		a[26] !== T || a[27] !== A ? (ne = function() {
			return T ? A() : !0;
		}, a[26] = T, a[27] = A, a[28] = ne) : ne = a[28];
		var re = r("useWAWebStableCallback")(ne), oe;
		a[29] !== T || a[30] !== W ? (oe = function() {
			return T ? W() : !0;
		}, a[29] = T, a[30] = W, a[31] = oe) : oe = a[31];
		var ae = r("useWAWebStableCallback")(oe), ie;
		a[32] !== T || a[33] !== Q ? (ie = function(t) {
			Q(T ? t : !0);
		}, a[32] = T, a[33] = Q, a[34] = ie) : ie = a[34];
		var le = r("useWAWebStableCallback")(ie), se;
		a[35] !== P ? (se = function() {
			P.onChannelVideoWaiting == null || P.onChannelVideoWaiting();
		}, a[35] = P, a[36] = se) : se = a[36];
		var ue = r("useWAWebStableCallback")(se), ce;
		a[37] !== P ? (ce = function() {
			P.onChannelVideoCanPlay == null || P.onChannelVideoCanPlay();
		}, a[37] = P, a[38] = ce) : ce = a[38];
		var de = r("useWAWebStableCallback")(ce), me;
		a[39] !== P || a[40] !== ee ? (me = function() {
			P.onChannelVideoError == null || P.onChannelVideoError(ee);
		}, a[39] = P, a[40] = ee, a[41] = me) : me = a[41];
		var pe = r("useWAWebStableCallback")(me), _e;
		a[42] !== S || a[43] !== R || a[44] !== P || a[45] !== ee ? (_e = function() {
			R(S + 1), P.onChannelVideoEnded == null || P.onChannelVideoEnded(ee, S);
		}, a[42] = S, a[43] = R, a[44] = P, a[45] = ee, a[46] = _e) : _e = a[46];
		var fe = r("useWAWebStableCallback")(_e), ge, he;
		a[47] !== de || a[48] !== fe || a[49] !== F || a[50] !== O || a[51] !== B || a[52] !== re || a[53] !== ae || a[54] !== q || a[55] !== U || a[56] !== V || a[57] !== pe || a[58] !== ue || a[59] !== H || a[60] !== G || a[61] !== z || a[62] !== j || a[63] !== K || a[64] !== le || a[65] !== X || a[66] !== J || a[67] !== Z ? (ge = function() {
			return {
				getAudioDisabled: re,
				play: z,
				pause: H,
				getPaused: q,
				getCurrentTime: O,
				setCurrentTime: j,
				getDuration: B,
				setDuration: K,
				getVolume: V,
				setVolume: J,
				getMuted: ae,
				setMuted: le,
				getPlaybackRate: U,
				setPlaybackRate: X,
				getBuffered: F,
				underlyingVideo: Z,
				pauseAndReset: G,
				onWaiting: ue,
				canPlay: de,
				end: fe,
				onError: pe
			};
		}, he = [
			re,
			z,
			H,
			q,
			O,
			j,
			B,
			K,
			V,
			J,
			ae,
			le,
			U,
			X,
			F,
			Z,
			G,
			ue,
			de,
			fe,
			pe
		], a[47] = de, a[48] = fe, a[49] = F, a[50] = O, a[51] = B, a[52] = re, a[53] = ae, a[54] = q, a[55] = U, a[56] = V, a[57] = pe, a[58] = ue, a[59] = H, a[60] = G, a[61] = z, a[62] = j, a[63] = K, a[64] = le, a[65] = X, a[66] = J, a[67] = Z, a[68] = ge, a[69] = he) : (ge = a[68], he = a[69]), _(g, ge, he);
		var ye = f.src != null ? i : void 0, Ce;
		a[70] !== u ? (Ce = u != null ? u : "x1lliihq xh8yej3 x5yr21d", a[70] = u, a[71] = Ce) : Ce = a[71];
		var be = !T || y.muted === !0, ve;
		return a[72] !== l || a[73] !== y || a[74] !== Y || a[75] !== ye || a[76] !== Ce || a[77] !== be || a[78] !== C || a[79] !== te ? (ve = d.jsx("video", babelHelpers.extends({}, C, {
			ref: Y,
			autoPlay: ye,
			className: Ce
		}, y, te, {
			muted: be,
			children: l
		})), a[72] = l, a[73] = y, a[74] = Y, a[75] = ye, a[76] = Ce, a[77] = be, a[78] = C, a[79] = te, a[80] = ve) : ve = a[80], ve;
	}
	l.default = f;
}), 98);
