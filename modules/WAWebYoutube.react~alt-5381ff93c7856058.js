__d("WAWebYoutube.react", [
	"WADeepEquals",
	"WAWebNoop",
	"WAWebTimeSpentLoggingNavigation",
	"react",
	"youtube-player"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useRef;
	function p(e, t) {
		var n, r;
		if (e.videoId !== t.videoId) return !0;
		var o = ((n = e.opts) == null ? void 0 : n.playerVars) || {}, a = ((r = t.opts) == null ? void 0 : r.playerVars) || {};
		return o.start !== a.start || o.end !== a.end;
	}
	function _(e) {
		return babelHelpers.extends({}, e, { playerVars: babelHelpers.extends({}, e == null ? void 0 : e.playerVars, {
			autoplay: 0,
			start: 0,
			end: 0
		}) });
	}
	function f(e, t) {
		return !o("WADeepEquals").deepEqual(_(e == null ? void 0 : e.opts), _(t == null ? void 0 : t.opts));
	}
	function g(e, t) {
		return e.id === t.id || e.className === t.className;
	}
	var h = {
		UNSTARTED: -1,
		ENDED: 0,
		PLAYING: 1,
		PAUSED: 2,
		BUFFERING: 3,
		CUED: 5
	};
	function y(e) {
		var t = e.onReady, n = t === void 0 ? r("WAWebNoop") : t, a = e.onError, i = a === void 0 ? r("WAWebNoop") : a, l = e.onStateChange, u = l === void 0 ? r("WAWebNoop") : l, _ = e.onEnd, y = _ === void 0 ? r("WAWebNoop") : _, C = e.onPlay, b = C === void 0 ? r("WAWebNoop") : C, v = e.onPause, S = v === void 0 ? r("WAWebNoop") : v, R = e.onPlaybackRateChange, L = R === void 0 ? r("WAWebNoop") : R, E = e.onPlaybackQualityChange, k = E === void 0 ? r("WAWebNoop") : E, I = e.opts, T = I === void 0 ? { playerVars: {} } : I, D = e.videoId, x = e.id, $ = x === void 0 ? null : x, P = e.className, N = P === void 0 ? null : P, M = e.containerClassName, w = M === void 0 ? "" : M, A = m(null), F = m(null), O = m([]), B = m(e), W = c(function(e) {
			return n(e);
		}, [n]), q = c(function(e) {
			return i(e);
		}, [i]), U = c(function(e) {
			switch (u(e), e.data) {
				case h.ENDED:
					y(e);
					break;
				case h.PLAYING:
					b(e);
					break;
				case h.PAUSED:
					S(e);
					break;
				default: return;
			}
		}, [
			y,
			S,
			b,
			u
		]), V = c(function(e) {
			return L(e);
		}, [L]), H = c(function(e) {
			return k(e);
		}, [k]), G = c(function() {
			var e, t, n, o, a = babelHelpers.extends({}, T, { videoId: D });
			F.current = r("youtube-player")(A.current, a), O.current.push(F.current.on("ready", W), (e = F.current) == null ? void 0 : e.on("error", q), (t = F.current) == null ? void 0 : t.on("stateChange", U), (n = F.current) == null ? void 0 : n.on("playbackRateChange", V), (o = F.current) == null ? void 0 : o.on("playbackQualityChange", H));
		}, [
			q,
			H,
			V,
			W,
			U,
			T,
			D
		]);
		d(function() {
			return G(), function() {
				var e;
				O.current.filter(Boolean).forEach(function(e) {
					var t;
					(t = F.current) == null || t.off(e);
				}), (e = F.current) == null || e.destroy();
			};
		}, []);
		var z = c(function() {
			var e, t;
			return (e = (t = F.current) == null ? void 0 : t.destroy().then(G)) != null ? e : Promise.resolve();
		}, [G]), j = c(async function() {
			var e, t = await ((e = F.current) == null ? void 0 : e.getIframe());
			$ ? t == null || t.setAttribute("id", $) : t == null || t.removeAttribute("id"), N ? t == null || t.setAttribute("class", N) : t == null || t.removeAttribute("class");
		}, [N, $]), K = c(function() {
			var e;
			if (D == null) {
				var t;
				(t = F.current) == null || t.stopVideo();
				return;
			}
			var n = !1, r, o;
			"playerVars" in T && (n = T.playerVars.autoplay === 1, "start" in T.playerVars && (r = T.playerVars.start), "end" in T.playerVars && (o = T.playerVars.end));
			var a = {
				videoId: D,
				startSeconds: r,
				endSeconds: o
			};
			if (n) {
				var i;
				(i = F.current) == null || i.loadVideoById(a);
				return;
			}
			(e = F.current) == null || e.cueVideoById(a);
		}, [T, D]);
		return d(function() {
			var t = B.current;
			g(t, e) && j(), f(t, e) && z(), p(t, e) && K(), B.current = e;
		}, [
			e,
			z,
			j,
			K
		]), o("WAWebTimeSpentLoggingNavigation").useTsNavigation({ surface: "youtube-player" }), s.jsx("span", {
			className: w,
			children: s.jsx("div", {
				id: $,
				className: N,
				ref: A
			})
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 98);
