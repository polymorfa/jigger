__d("WAWebDebouncedLoadingScreen.react", [
	"$InternalEnum",
	"WALogger",
	"WAPromiseDelays",
	"WAWebCmd",
	"WAWebLoadingScreen.react",
	"WAWebOfflineHandler",
	"WAWebSocketModel",
	"react",
	"useWAWebListener",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useRef, f = d.useState, g = 500, h = 1500, y = 450, C = 800, b = 450, v = n("$InternalEnum").Mirrored([
		"INITIAL_LOAD",
		"CONNECTING",
		"FAKE_FILL",
		"DOWNLOADING",
		"ORGANIZING"
	]), S = n("$InternalEnum").Mirrored([
		"NOT_STARTED",
		"STARTED",
		"PAST_MIN_TIME"
	]);
	function R(t) {
		var n = t.initialLoadState, a = t.onLogout, i = t.onReady, l = n.initialLoadReady, u = r("useWAWebUnmountSignal")(), d = _(!1), R = f(l ? o("WAWebLoadingScreen.react").Stage.CONNECTING : o("WAWebLoadingScreen.react").Stage.INITIAL_LOAD), E = R[0], k = R[1], I = f({
			INITIAL_LOAD: l ? S.PAST_MIN_TIME : S.NOT_STARTED,
			CONNECTING: S.NOT_STARTED,
			FAKE_FILL: S.NOT_STARTED,
			DOWNLOADING: S.NOT_STARTED,
			ORGANIZING: S.NOT_STARTED
		}), T = I[0], D = I[1], x = f(0), $ = x[0], P = x[1], N = f(null), M = N[0], w = N[1], A = function() {
			var e = o("WAWebOfflineHandler").OfflineMessageHandler.getHasMessagesToDownload();
			M == null && e != null && w(e), e === !0 && T.CONNECTING === S.PAST_MIN_TIME && P(o("WAWebOfflineHandler").OfflineMessageHandler.getOfflineDeliveryProgress());
		};
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "offline_progress_update_from_bridge", A);
		var F = m(async function(t, n) {
			D(function(e) {
				var n;
				return babelHelpers.extends({}, e, (n = {}, n[t] = S.STARTED, n));
			}), o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["DebouncedLoadingScreen: ", " - starts minimum display time"])), t), await o("WAPromiseDelays").delayMs(n), !u.aborted && (D(function(e) {
				var n;
				return babelHelpers.extends({}, e, (n = {}, n[t] = S.PAST_MIN_TIME, n));
			}), o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["DebouncedLoadingScreen: ", " - ends minimum display time"])), t));
		}, [u]), O = T.CONNECTING, B = T.DOWNLOADING, W = T.FAKE_FILL, q = T.INITIAL_LOAD, U = T.ORGANIZING;
		p(function() {
			if (U === S.PAST_MIN_TIME) d.current || (i(), d.current = !0);
			else if (B === S.PAST_MIN_TIME && $ >= 100 && U === S.NOT_STARTED) o("WAPromiseDelays").delayMs(b).finally(function() {
				u.aborted || (k(o("WAWebLoadingScreen.react").Stage.ORGANIZING), F(v.ORGANIZING, C));
			});
			else if (O === S.PAST_MIN_TIME && M != null && B === S.NOT_STARTED && W === S.NOT_STARTED) {
				var e = o("WAWebOfflineHandler").OfflineMessageHandler.getFinishedDownloading();
				M && !e ? (k(o("WAWebLoadingScreen.react").Stage.DOWNLOADING), P(o("WAWebOfflineHandler").OfflineMessageHandler.getOfflineDeliveryProgress()), F(v.DOWNLOADING, y)) : (P(100), F(v.FAKE_FILL, b).then(function() {
					u.aborted || (o("WAWebSocketModel").Socket.hasSynced ? d.current || (i(), d.current = !0) : (k(o("WAWebLoadingScreen.react").Stage.ORGANIZING), F(v.ORGANIZING, C)));
				}));
			} else l && q === S.PAST_MIN_TIME && O === S.NOT_STARTED ? (k(o("WAWebLoadingScreen.react").Stage.CONNECTING), F(v.CONNECTING, h)) : q === S.NOT_STARTED && F(v.INITIAL_LOAD, g);
		}, [
			$,
			i,
			M,
			F,
			u,
			l,
			O,
			B,
			U,
			W,
			q
		]);
		var V = L(n, M);
		return c.jsx(o("WAWebLoadingScreen.react").LoadingScreen, {
			stage: E,
			progress: $,
			onLogout: a,
			theme: V
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e, t) {
		return e.initialLoadReady ? e.initialHistorySyncComplete !== !0 ? o("WAWebLoadingScreen.react").LoadingScreenTheme.UNIFIED : t === !0 ? o("WAWebLoadingScreen.react").LoadingScreenTheme.UNIFIED_WITH_PROGRESS : o("WAWebLoadingScreen.react").LoadingScreenTheme.LOGO : o("WAWebLoadingScreen.react").LoadingScreenTheme.MULTI_STAGE;
	}
	l.default = R;
}), 98);
