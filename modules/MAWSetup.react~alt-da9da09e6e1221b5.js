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
		var t = e.children;
		u(function() {
			var e = o("MAWOembedIframeContainer.react").createMAWOembedIframeContainer();
			return function() {
				e == null || e.stopListening();
			};
		}, []);
		var n = o("CometRelay").useRelayEnvironment();
		return u(function() {
			c.onReady(function(e) {
				var t = e.initOhaiWebClient;
				r("promiseDone")(t(n));
			});
		}, [n]), o("MAWMainThreadEBDeps").initEBDeps(), s.jsxs(d, { children: [s.jsx(r("MAWSetupImpl.react"), {
			fbid: r("CurrentUser").getID(),
			logout: void 0,
			setupBridge: o("MAWSetupBridge").setupBridge,
			children: t
		}), s.jsx(r("CometPlaceholder.react"), {
			fallback: null,
			name: "MAWSetup.LoadingState",
			children: s.jsx(m, {})
		})] });
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
