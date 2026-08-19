__d("useWAWebCometVideoPlayerStateMachine", [
	"CoreVideoPlayerMetaData",
	"WAWebCometVideoPlayerStateMachine",
	"WAWebCometVideoPlayerUtils",
	"WAWebMusicGatingUtils",
	"WAWebMusicPlaybackUtils",
	"WAWebNewsletterGatingUtils",
	"WAWebNoop",
	"WAWebSNAPLUserPrefs",
	"WAWebWamEnumMessageType",
	"WAWebWamMediaMetricUtils",
	"react",
	"react-compiler-runtime",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useCallback, c = s.useEffect, d = s.useRef, m = s.useState, p = { current: null }, _ = { current: null }, f = {
		getCurrent: function() {
			return null;
		},
		subscribe: function() {
			return { remove: r("WAWebNoop") };
		}
	}, g = function() {
		return {};
	};
	function h(e) {
		switch (e) {
			case o("WAWebWamEnumMessageType").MESSAGE_TYPE.STATUS: return !o("WAWebMusicGatingUtils").isStatusMusicReceiverEnabled();
			case o("WAWebWamEnumMessageType").MESSAGE_TYPE.CHANNEL: return !o("WAWebNewsletterGatingUtils").isNewsletterVideoPlaybackLoggingEnabled();
			default: return !0;
		}
	}
	var y = function(t) {
		switch (t) {
			case o("WAWebWamEnumMessageType").MESSAGE_TYPE.STATUS: return o("WAWebMusicGatingUtils").isStatusMusicReceiverEnabled();
			case o("WAWebWamEnumMessageType").MESSAGE_TYPE.CHANNEL: return o("WAWebNewsletterGatingUtils").isNewsletterVideoPlaybackLoggingEnabled();
			default: return !1;
		}
	};
	function C(e) {
		var t = o("react-compiler-runtime").c(20), n = e.isCopyrightMuted, a = e.isStatusWithMusic, i = e.mediaId, l = e.mediaIdString, s = e.msg, u = e.videoOrigin, C = r("useWAWebUnmountSignal")(), b = d(null), v = d(n), S = d(null), R = d(null), L;
		t[0] !== u ? (L = function() {
			return h(u);
		}, t[0] = u, t[1] = L) : L = t[1];
		var E = m(L), k = E[0], I = E[1], T;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (T = {
			handleReactEffectInit: r("WAWebNoop"),
			handleReactEffectCleanup: r("WAWebNoop"),
			callbacks: null
		}, t[2] = T) : T = t[2];
		var D = m(T), x = D[0], $ = D[1], P;
		t[3] !== a || t[4] !== i || t[5] !== l || t[6] !== s || t[7] !== C.aborted || t[8] !== u ? (P = function(t) {
			var e = b.current;
			if (e !== t) {
				b.current = t;
				var n = b.current;
				if (n == null || i == null || !y(u)) {
					$({
						handleReactEffectInit: r("WAWebNoop"),
						handleReactEffectCleanup: r("WAWebNoop"),
						callbacks: null
					}), i == null && I(!0);
					return;
				}
				var c = o("WAWebSNAPLUserPrefs").getSNAPLPersistentId(i, u, a === !0, s), d = o("WAWebCometVideoPlayerUtils").getInitialMetadata(n), m = o("CoreVideoPlayerMetaData").applyDefaultsToCoreVideoPlayerMetaData({
					loggingConfig: { loggingToSNAPLCreateMetadataProvider: null },
					subOrigin: "not_specified_please_fix",
					videoFBID: "0"
				});
				S.current = d, R.current = m;
				var h = o("WAWebCometVideoPlayerStateMachine").makeCometVideoPlayerStateMachine({
					initialLoggingMetaData: d,
					initialCoreVideoPlayerMetaData: m,
					debugLogId: o("WAWebWamMediaMetricUtils").generateMediaEventId().toString(10),
					videoEl: n,
					fullscreenControllerRef: p,
					videoLiveTraceRef: _,
					videoPlayerPassiveViewabilityInfo: f,
					metadataProvider: {
						getErrorMetadata: g,
						getRequiredMetadata: function() {
							return {
								current_watching_module: o("WAWebCometVideoPlayerUtils").getCurrentWatchingModule(s, a),
								media_id: i,
								tracking_type: "organic",
								persistent_id: c,
								media_id_string: l != null ? l : ""
							};
						},
						getTagMetadata: function() {
							return {
								is_copyright_muted: v.current,
								country: o("WAWebMusicPlaybackUtils").getUserCountryCodeForSNAPL(),
								player_sound_on: !n.muted
							};
						}
					},
					videoOrigin: u
				}), L = h.callbacks, E = h.handleReactEffectCleanup, k = h.handleReactEffectInit, T = h.machine;
				C.aborted !== !0 && ($({
					machine: T,
					handleReactEffectInit: k,
					handleReactEffectCleanup: E,
					callbacks: L
				}), I(!0));
			}
		}, t[3] = a, t[4] = i, t[5] = l, t[6] = s, t[7] = C.aborted, t[8] = u, t[9] = P) : P = t[9];
		var N = P, M, w;
		t[10] !== x.machine || t[11] !== n ? (M = function() {
			v.current = n;
			var e = x.machine, t = S.current, r = R.current;
			e == null || t == null || r == null || e.dispatch({
				payload: {
					loggingMetaData: t,
					coreVideoPlayerMetaData: r
				},
				type: "notify_logging_metadata_change"
			});
		}, w = [x.machine, n], t[10] = x.machine, t[11] = n, t[12] = M, t[13] = w) : (M = t[12], w = t[13]), c(M, w);
		var A;
		return t[14] !== x.callbacks || t[15] !== x.handleReactEffectCleanup || t[16] !== x.handleReactEffectInit || t[17] !== k || t[18] !== N ? (A = {
			callbacks: x.callbacks,
			handleReactEffectInit: x.handleReactEffectInit,
			handleReactEffectCleanup: x.handleReactEffectCleanup,
			ready: k,
			videoElementRefCallback: N
		}, t[14] = x.callbacks, t[15] = x.handleReactEffectCleanup, t[16] = x.handleReactEffectInit, t[17] = k, t[18] = N, t[19] = A) : A = t[19], A;
	}
	l.default = C;
}), 98);
