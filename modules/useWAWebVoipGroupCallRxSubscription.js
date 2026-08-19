__d("useWAWebVoipGroupCallRxSubscription", [
	"WALogger",
	"WAWebUserPrefsMeUser",
	"WAWebVoipUpdateRxSubscription",
	"justknobx",
	"react",
	"useWAWebOnUnmount",
	"useWAWebVoipCallVisibility"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = u || (u = o("react")), d = c.useEffect, m = c.useMemo, p = c.useRef;
	function _(e, t, n, r) {
		return t != null && e.equals(t) || n != null && e.equals(n) || r != null && e.equals(r) ? o("WAWebVoipUpdateRxSubscription").VideoQuality.MEDIUM : o("WAWebVoipUpdateRxSubscription").VideoQuality.DEFAULT;
	}
	function f(t, n, a, i, l, u) {
		var c = m(function() {
			var e = [];
			if (n === "speaker") {
				t != null && e.push(t);
				for (var r of u) e.push(r);
			} else for (var s of a) e.push(s);
			return e.filter(function(e) {
				return !o("WAWebUserPrefsMeUser").isMeAccount(e);
			}).map(function(e) {
				return {
					wid: e,
					quality: _(e, i, l, t)
				};
			});
		}, [
			n,
			t,
			u,
			a,
			i,
			l
		]), f = r("useWAWebVoipCallVisibility")(), g = r("justknobx")._("5449"), h = p(!1);
		r("useWAWebOnUnmount")(function() {
			h.current = !0;
		}), d(function() {
			if (g && !f) {
				o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[voip] rxSubscription: unsubscribing all (window hidden)"]))), o("WAWebVoipUpdateRxSubscription").updateRxSubscription([]);
				return;
			}
			return o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[voip] rxSubscription: subscribing ", " participants"])), c.length), o("WAWebVoipUpdateRxSubscription").updateRxSubscription(c), function() {
				h.current && o("WAWebVoipUpdateRxSubscription").updateRxSubscription([]);
			};
		}, [
			c,
			f,
			g
		]);
	}
	l.default = f;
}), 98);
