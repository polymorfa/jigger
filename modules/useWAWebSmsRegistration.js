__d("useWAWebSmsRegistration", [
	"WAIsoToCc",
	"WAWebPhoneNumberCaptureValidation",
	"WAWebSmsRegistrationSendSmsCall",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
	"requireDeferred",
	"useWAWebTimeout",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useCallback, c = s.useState, d = r("requireDeferred")("WAWebLinkDeviceQplHelpLinkEvent").__setRef("useWAWebSmsRegistration");
	function m(e, t) {
		t !== !0 && d.load().then(function(t) {
			var n = t.WAWebLinkDeviceQplHelpLinkEvent, r = t.WebcPairingScreenLinkType;
			n(e == null ? r.REG_PN_SCREEN_CONTINUE_CLICKED : r.REG_WACOM_PN_SCREEN_CONTINUE_CLICKED);
		});
	}
	function p(e) {
		var t = e == null ? void 0 : e.retry_after;
		return (e == null ? void 0 : e.status) === o("WAWebSmsRegistrationSendSmsCall").WhatsappGrowthInvites_SignUpViaWebResponseStatus.ERROR && t != null && t > 0 ? t * 1e3 : null;
	}
	function _() {
		var e = o("react-compiler-runtime").c(16), t = c(!1), a = t[0], i = t[1], l = c(!1), s = l[0], u = l[1], d = c(), _ = d[0], f = d[1], g = c(""), h = g[0], y = g[1], C = c(""), b = C[0], v = C[1], S = r("useWAWebUnmountSignal")(), R;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (R = function() {
			return u(!1);
		}, e[0] = R) : R = e[0];
		var L = o("useWAWebTimeout").useManualTimeout(R), E = L[0], k;
		e[1] !== E ? (k = function(t) {
			var e = p(t);
			e != null && (u(!0), E(e)), f(t);
		}, e[1] = E, e[2] = k) : k = e[2];
		var I = k, T;
		e[3] !== s || e[4] !== I || e[5] !== a || e[6] !== S ? (T = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, l) {
				var u;
				if (!(a || s || !r("WAWebPhoneNumberCaptureValidation")(e, t))) {
					m(n, l == null ? void 0 : l.skipContinueQpl), i(!0), y(e), v(t);
					var c = ((u = r("WAIsoToCc")[e]) != null ? u : "") + t, d = yield o("WAWebSmsRegistrationSendSmsCall").sendSmsCall(c);
					S.aborted || (I(d), i(!1));
				}
			});
			return function(n, r, o, a) {
				return e.apply(this, arguments);
			};
		})(), e[3] = s, e[4] = I, e[5] = a, e[6] = S, e[7] = T) : T = e[7];
		var D = T, x;
		e[8] === Symbol.for("react.memo_cache_sentinel") ? (x = function() {
			f(null), y(""), v("");
		}, e[8] = x) : x = e[8];
		var $ = x, P;
		return e[9] !== s || e[10] !== h || e[11] !== b || e[12] !== a || e[13] !== D || e[14] !== _ ? (P = {
			blockRetry: s,
			lastCountryId: h,
			lastPhoneNumber: b,
			loading: a,
			reset: $,
			sendSms: D,
			serverResponse: _
		}, e[9] = s, e[10] = h, e[11] = b, e[12] = a, e[13] = D, e[14] = _, e[15] = P) : P = e[15], P;
	}
	l.default = _;
}), 98);
