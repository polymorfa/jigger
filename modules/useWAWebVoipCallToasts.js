__d("useWAWebVoipCallToasts", [
	"fbt",
	"WAWebCallCollection",
	"WAWebContactCollection",
	"WAWebFbtIntlList",
	"WAWebFrontendContactGetters",
	"WAWebNetworkStatus",
	"WAWebUserPrefsMeUser",
	"WAWebVoipCallStateUtils",
	"WAWebVoipConnectingToastState",
	"WAWebVoipEventConstants",
	"WAWebVoipGridPageSize",
	"WAWebVoipWaCallEnums",
	"react",
	"useWAWebPrevious",
	"useWAWebTimeout"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = u.useCallback, d = u.useEffect, m = u.useMemo, p = u.useRef, _ = 1500, f = "voip-network-health-warning", g = 500;
	function h(e) {
		return e ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	function y(e) {
		var t = [], n = new Set();
		for (var r of e) {
			var a = r.toString();
			if (!n.has(a)) {
				n.add(a);
				var i = o("WAWebContactCollection").ContactCollection.get(r);
				if (i != null) {
					var l = o("WAWebFrontendContactGetters").getFormattedShortName(i);
					l !== "" && t.push(l);
				}
			}
		}
		return t.length === 0 ? null : t.length === 1 ? s._(
			/*BTDS*/
			"",
			[s._param("name", t[0])]
		) : s._(
			/*BTDS*/
			"",
			[s._plural(t.length - 1, "number"), s._param("name", t[0])]
		);
	}
	function C(e) {
		var t = e.callState, n = e.groupCallParticipantsConnected, a = e.isAnyPeerScreenSharing, i = e.isCallInExternalPlayer, l = e.isSelfScreenSharing, u = e.showCenteredToast, C = e.showWarningToast, b = r("useWAWebPrevious")(l), v = r("useWAWebPrevious")(a), S = m(function() {
			var e, t, n = (e = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.getScreenSharingPeerJid()) != null ? e : null;
			if (n == null) return null;
			var a = o("WAWebContactCollection").ContactCollection.get(n);
			return a != null ? o("WAWebFrontendContactGetters").getDisplayName(a) : null;
		}, [a]);
		d(function() {
			b === !1 && l && !i && u(s._(
				/*BTDS*/
				""
			));
		}, [
			i,
			l,
			b,
			u
		]), d(function() {
			b === !0 && !l && !i && u(s._(
				/*BTDS*/
				""
			));
		}, [
			i,
			l,
			b,
			u
		]), d(function() {
			v === !1 && a && S != null && !i && u(s._(
				/*BTDS*/
				"",
				[s._param("name", S)]
			));
		}, [
			i,
			a,
			v,
			S,
			u
		]);
		var R = p(null);
		d(function() {
			a && S != null && (R.current = S);
		}, [a, S]), d(function() {
			if (v === !0 && !a && !i) {
				var e = R.current;
				e != null && (u(s._(
					/*BTDS*/
					"",
					[s._param("name", e)]
				)), R.current = null);
			}
		}, [
			i,
			a,
			v,
			u
		]), d(function() {
			var e = function() {
				!r("WAWebNetworkStatus").online && o("WAWebVoipCallStateUtils").isCallActive(t) && !i && C(s._(
					/*BTDS*/
					""
				), f);
			};
			return r("WAWebNetworkStatus").on(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipNetworkEvents.ONLINE), e), function() {
				r("WAWebNetworkStatus").off(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipNetworkEvents.ONLINE), e);
			};
		}, [
			t,
			i,
			C
		]), d(function() {
			var e = function() {
				var e;
				if (!i) {
					var t = (e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.getNetHealth();
					if (t != null) {
						var n = t.currentState === o("WAWebVoipWaCallEnums").NetHealthStatus.Poor && t.shouldSendPoorBanner || t.currentState === o("WAWebVoipWaCallEnums").NetHealthStatus.NoNetwork && t.shouldSendNoNetworkBanner;
						n && C(h(t.enableSubMessage), f);
					}
				}
			};
			return r("WAWebCallCollection").on(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.NETWORK_HEALTH), e), function() {
				r("WAWebCallCollection").off(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.NETWORK_HEALTH), e);
			};
		}, [i, C]), d(function() {
			var e;
			if (!i) {
				var n = t === o("WAWebVoipWaCallEnums").CallState.AcceptSent || t === o("WAWebVoipWaCallEnums").CallState.AcceptReceived;
				if (n) {
					var a = (e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.id;
					if (a != null) return o("WAWebVoipConnectingToastState").subscribeToConnectingToast(a, function() {
						C(s._(
							/*BTDS*/
							""
						));
					});
				}
			}
		}, [
			t,
			i,
			C
		]), d(function() {
			var e = function() {
				u(s._(
					/*BTDS*/
					""
				));
			};
			return r("WAWebCallCollection").on(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.MUTE_REQUEST_FAILED), e), function() {
				r("WAWebCallCollection").off(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.MUTE_REQUEST_FAILED), e);
			};
		}, [u]);
		var L = p([]), E = o("useWAWebTimeout").useManualTimeout(function() {
			var e = L.current;
			if (L.current = [], e.length !== 0) {
				var t = y(e);
				t != null && u(t);
			}
		}), k = E[0], I = E[1];
		d(function() {
			var e = function(n) {
				var e, r = n.jids;
				!o("WAWebVoipCallStateUtils").isCallConnected(t) || i || ((e = L.current).push.apply(e, r), k(g));
			};
			return r("WAWebCallCollection").on(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.PARTICIPANTS_INVITED), e), function() {
				r("WAWebCallCollection").off(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.PARTICIPANTS_INVITED), e), I(), L.current = [];
			};
		}, [
			t,
			I,
			i,
			k
		]), d(function() {
			var e = function(t) {
				var e = t.name;
				u(e !== "" ? s._(
					/*BTDS*/
					"",
					[s._param("name", e)]
				) : s._(
					/*BTDS*/
					""
				));
			};
			return r("WAWebCallCollection").on(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.MUTED_BY_OTHERS), e), function() {
				r("WAWebCallCollection").off(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.MUTED_BY_OTHERS), e);
			};
		}, [u]);
		var T = p(null), D = p(null), x = p([]), $ = c(function(e) {
			var t = o("WAWebContactCollection").ContactCollection.get(e);
			return t != null ? o("WAWebFrontendContactGetters").getDisplayName(t) : e.toString();
		}, []);
		d(function() {
			var e = function(t) {
				var e = t.jid;
				if (!i) {
					var n = $(e);
					u(s._(
						/*BTDS*/
						"",
						[s._param("name", n)]
					));
				}
			};
			return r("WAWebCallCollection").on(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.PARTICIPANT_REMOVED), e), function() {
				r("WAWebCallCollection").off(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.PARTICIPANT_REMOVED), e);
			};
		}, [
			$,
			i,
			u
		]);
		var P = c(function() {
			var e = x.current;
			if (x.current = [], e.length !== 0) {
				var t = new Set(), n = [];
				for (var o of e) {
					var a = o.toString();
					t.has(a) || (t.add(a), n.push(o));
				}
				if (n.length !== 0) {
					var i = n.map($), l = r("WAWebFbtIntlList")(i, r("WAWebFbtIntlList").CONJUNCTIONS.AND, r("WAWebFbtIntlList").DELIMITERS.COMMA), c = s._(
						/*BTDS*/
						"",
						[s._plural(i.length), s._param("names", l)]
					);
					u(c);
				}
			}
		}, [$, u]), N = o("useWAWebTimeout").useManualTimeout(P), M = N[0], w = N[1];
		d(function() {
			var e, a, l, s = (e = (a = r("WAWebCallCollection").activeCall) == null ? void 0 : a.isGroup) != null ? e : !1, u = !i && s && o("WAWebVoipCallStateUtils").isCallActive(t);
			if (!u) {
				D.current = null, x.current = [], w();
				return;
			}
			var c = (l = T.current) != null ? l : o("WAWebVoipGridPageSize").getGridParticipantsPerPage();
			T.current = c;
			var d = D.current;
			if (D.current = n, d != null && n.length > c) {
				var m = new Set(d.map(function(e) {
					return e.toString();
				})), p = n.filter(function(e) {
					return !m.has(e.toString()) && !o("WAWebUserPrefsMeUser").isMeAccount(e);
				});
				p.length > 0 && (x.current = [].concat(x.current, p), M(_));
			}
		}, [
			t,
			w,
			n,
			i,
			M
		]);
	}
	l.default = C;
}), 226);
