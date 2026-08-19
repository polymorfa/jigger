__d("useWAWebLinkDeviceAutoLogout", [
	"CometPlaceholder.react",
	"Promise",
	"SecurePostMessage",
	"WALogger",
	"WAWebAutoLogoutGating",
	"deferredLoadComponent",
	"gkx",
	"react",
	"react-compiler-runtime",
	"requireDeferred",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useState, f = r("requireDeferred")("WAWebBackendEventBus").__setRef("useWAWebLinkDeviceAutoLogout"), g = r("requireDeferred")("WAWebConfirmPopup.react").__setRef("useWAWebLinkDeviceAutoLogout"), h = r("requireDeferred")("WAWebLinkDeviceAutoLogoutIFrame.react").__setRef("useWAWebLinkDeviceAutoLogout"), y = r("requireDeferred")("WAWebLinkDeviceQplHelpLinkEvent").__setRef("useWAWebLinkDeviceAutoLogout"), C = r("requireDeferred")("WAWebModalManager").__setRef("useWAWebLinkDeviceAutoLogout"), b = r("requireDeferred")("WAWebQrDeviceLinkingQpl").__setRef("useWAWebLinkDeviceAutoLogout"), v = r("deferredLoadComponent")(h);
	function S() {
		var t = o("react-compiler-runtime").c(18), a = _(D), i = a[0], l = a[1], u = _(!1), d = u[0], m = u[1], S = _(T), x = S[0], $ = S[1], P, N;
		t[0] !== x ? (P = function() {
			if (!x) {
				var e = h.onReady(function() {
					$(!0);
				});
				return (function() {
					return e.remove();
				});
			}
		}, N = [x], t[0] = x, t[1] = P, t[2] = N) : (P = t[1], N = t[2]), p(P, N);
		var M;
		t[3] !== i ? (M = function() {
			if (o("WAWebAutoLogoutGating").isAutoLogoutEnabled()) {
				if (r("gkx")("26259")) {
					(s || (s = n("Promise"))).all([C.load(), g.load()]).then(I);
					return;
				}
				if (y.onReady(k), i && o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe()) {
					r("SecurePostMessage").sendMessageForCurrentOrigin(self.parent, "AUTO_LOGOUT_DISABLED"), b.onReady(E);
					return;
				}
				var e = !i;
				b.onReady(function(t) {
					t.companionDeviceLinkingScreenQpl.stayLoggedInToggleClicked(e);
				}), l(e), e || f.onReady(L);
			}
		}, t[3] = i, t[4] = M) : M = t[4];
		var w = M, A;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (A = function(t) {
			if (!(!o("WAWebAutoLogoutGating").isAutoLogoutEnabled() && o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe()) && t.origin === window.location.origin) e: switch (t.data) {
				case "QR_CODE_LOADED_FOR_AUTO_LOGOUT": {
					m(!0);
					break e;
				}
				case "AUTO_LOGOUT_DISABLED": m(!1), l(!1), f.onReady(R);
			}
		}, t[5] = A) : A = t[5];
		var F = A, O;
		t[6] !== i || t[7] !== w ? (O = function() {
			o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[auto-logout] iframe timeout"]))), i && w();
		}, t[6] = i, t[7] = w, t[8] = O) : O = t[8];
		var B = O;
		o("useWAWebListener").useListener(o("WAWebAutoLogoutGating").isAutoLogoutEnabled() ? window : null, "message", F);
		var W;
		t[9] !== i || t[10] !== d || t[11] !== B ? (W = c.jsx(r("CometPlaceholder.react"), {
			fallback: null,
			name: "WAWebLinkDeviceAutoLogoutIFrame",
			children: c.jsx(v, {
				autoLogoutEnabled: i,
				visible: d,
				onTimeout: B
			})
		}), t[9] = i, t[10] = d, t[11] = B, t[12] = W) : W = t[12];
		var q = W, U = x ? w : null, V;
		return t[13] !== i || t[14] !== q || t[15] !== d || t[16] !== U ? (V = {
			autoLogoutEnabled: i,
			handleAutoLogoutToggle: U,
			autoLogoutIframe: q,
			autoLogoutIframeLoaded: d
		}, t[13] = i, t[14] = q, t[15] = d, t[16] = U, t[17] = V) : V = t[17], V;
	}
	function R(e) {
		e.BackendEventBus.triggerRefreshQR();
	}
	function L(e) {
		e.BackendEventBus.triggerRefreshQR();
	}
	function E(e) {
		e.companionDeviceLinkingScreenQpl.stayLoggedInToggleClicked(!1);
	}
	function k(e) {
		e.WAWebLinkDeviceQplHelpLinkEvent(e.WebcPairingScreenLinkType.STAY_LOGGED_IN);
	}
	function I(e) {
		var t = e[0], n = e[1], r = t.ModalManager, o = n.ConfirmPopup;
		r.open(c.jsx(o, {
			onOK: function() {
				return r.close();
			},
			children: "Auto logout is not supported in intern. Please use the prod or debug app."
		}));
	}
	function T() {
		return h.getModuleIfRequireable() != null;
	}
	function D() {
		return !!(o("WAWebAutoLogoutGating").isAutoLogoutEnabled() && o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe());
	}
	l.default = S;
}), 98);
