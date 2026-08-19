__d("WAWebGuestEventsNotificationTokenStore", [
	"WALogger",
	"WAWebApiLocalStorage",
	"WAWebWorkerStorage"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	async function s(t, n) {
		try {
			await o("WAWebWorkerStorage").getLocalStorageTable().createOrReplace({
				key: t,
				value: n
			});
		} catch (t) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[guest_events] failed to persist event id->token mapping"]))).sendLogs("guest-events-id-token-map-write-error");
		}
	}
	async function u(e) {
		var t = await o("WAWebApiLocalStorage").getLocalStorageValue(e);
		return t != null ? t : null;
	}
	l.setGuestEventTokenForId = s, l.getGuestEventTokenForId = u;
}), 98);
