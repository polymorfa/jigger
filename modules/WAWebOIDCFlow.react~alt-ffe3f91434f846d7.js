__d("WAWebOIDCFlow.react", [
	"fbt",
	"FBLogger",
	"PopupWindow",
	"URI",
	"WAWebEnvironment",
	"WAWebExternalLink.react",
	"WAWebFetchOIDCState",
	"WAWebOIDCBroadcastChannelAdapter",
	"WAWebOIDCCallbackEventBus",
	"WAWebOIDCExchangeToken",
	"WAWebToast.react",
	"WAWebToastManager",
	"getErrorSafe",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u.useEffect;
	async function m() {
		var t = 1e3, n = 800, a = 656096963291760, i = "https://www.facebook.com/oidc/";
		try {
			var l = await r("WAWebFetchOIDCState")(), u = r("WAWebEnvironment").getSubPlatform() === "win_hybrid", d = window.location.origin + (u ? "/oidc_callback/hybrid/" : "/oidc_callback/"), m = new (e || (e = (r("URI"))))(i);
			m.addQueryData({
				app_id: a,
				redirect_uri: d,
				response_type: "code",
				scope: "openid expiring_offline_token",
				state: l
			}), u ? o("WAWebExternalLink.react").openExternalLink(m.toString()) : o("PopupWindow").open(m.toString(), n, t);
		} catch (e) {
			r("FBLogger")("wa_ctwa_web").catching(r("getErrorSafe")(e)).mustfix("OIDC flow failed to fetch CSRF token"), o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) }), o("WAWebToastManager").ToastPosition.LEFT);
		}
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(3), n = e.onSuccess, r, a;
		return t[0] !== n ? (r = function() {
			o("WAWebOIDCBroadcastChannelAdapter").ensureInstalled();
			var e = function(t) {
				var e = t.code, r = t.state;
				o("WAWebOIDCExchangeToken").exchangeOIDCToken(e, r, n);
			};
			return o("WAWebOIDCCallbackEventBus").WAWebOIDCCallbackEventBus.on(o("WAWebOIDCCallbackEventBus").OIDCCallbackEvent.OIDC_CALLBACK, e), (function() {
				o("WAWebOIDCCallbackEventBus").WAWebOIDCCallbackEventBus.off(o("WAWebOIDCCallbackEventBus").OIDCCallbackEvent.OIDC_CALLBACK, e);
			});
		}, a = [n], t[0] = n, t[1] = r, t[2] = a) : (r = t[1], a = t[2]), d(r, a), null;
	}
	l.launchOIDCFlow = m, l.OIDCEventListener = p;
}), 226);
