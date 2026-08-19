__d("MAWSetup.react", [
	"CometPlaceholder.react",
	"CometRelay",
	"CurrentUser",
	"MAWMainThreadEBDeps",
	"MAWOembedIframeContainer.react",
	"MAWSetupBridge",
	"MAWSetupImpl.react",
	"cr:6809",
	"deferredLoadComponent",
	"isGroupInvitesEnabled",
	"promiseDone",
	"react",
	"react-compiler-runtime",
	"requireDeferred",
	"requireDeferredForDisplay"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useEffect, c = r("requireDeferred")("OhaiWebClientSingleton").__setRef("MAWSetup.react"), d = n("cr:6809") != null ? n("cr:6809").CometLogoutProvider : function(e) {
		var t = e.children;
		return s.jsx(s.Fragment, { children: t });
	}, m = r("deferredLoadComponent")(r("requireDeferredForDisplay")("MAWLoadingStateSpinner.react").__setRef("MAWSetup.react"));
	r("isGroupInvitesEnabled")();
	function p(e) {
		var t = o("react-compiler-runtime").c(10), n = e.children, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = [], t[0] = a) : a = t[0], u(_, a);
		var i = o("CometRelay").useRelayEnvironment(), l, p;
		t[1] !== i ? (l = function() {
			c.onReady(function(e) {
				var t = e.initOhaiWebClient;
				r("promiseDone")(t(i));
			});
		}, p = [i], t[1] = i, t[2] = l, t[3] = p) : (l = t[2], p = t[3]), u(l, p), o("MAWMainThreadEBDeps").initEBDeps();
		var f;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (f = r("CurrentUser").getID(), t[4] = f) : f = t[4];
		var g;
		t[5] !== n ? (g = s.jsx(r("MAWSetupImpl.react"), {
			fbid: f,
			logout: void 0,
			setupBridge: o("MAWSetupBridge").setupBridge,
			children: n
		}), t[5] = n, t[6] = g) : g = t[6];
		var h;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (h = s.jsx(r("CometPlaceholder.react"), {
			fallback: null,
			name: "MAWSetup.LoadingState",
			children: s.jsx(m, {})
		}), t[7] = h) : h = t[7];
		var y;
		return t[8] !== g ? (y = s.jsxs(d, { children: [g, h] }), t[8] = g, t[9] = y) : y = t[9], y;
	}
	function _() {
		var e = o("MAWOembedIframeContainer.react").createMAWOembedIframeContainer();
		return function() {
			e == null || e.stopListening();
		};
	}
	l.default = p;
}), 98);
