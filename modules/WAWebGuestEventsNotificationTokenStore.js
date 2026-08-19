__d("WAWebGuestEventsNotificationTokenStore", [
	"WALogger",
	"WAWebApiLocalStorage",
	"WAWebWorkerStorage",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e, t) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
			try {
				yield o("WAWebWorkerStorage").getLocalStorageTable().createOrReplace({
					key: t,
					value: n
				});
			} catch (t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[guest_events] failed to persist event id->token mapping"]))).sendLogs("guest-events-id-token-map-write-error");
			}
		}), u.apply(this, arguments);
	}
	function c(e) {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = yield o("WAWebApiLocalStorage").getLocalStorageValue(e);
			return t != null ? t : null;
		}), d.apply(this, arguments);
	}
	l.setGuestEventTokenForId = s, l.getGuestEventTokenForId = c;
}), 98);
