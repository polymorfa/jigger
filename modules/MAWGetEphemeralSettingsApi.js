__d("MAWGetEphemeralSettingsApi", [
	"MAWIndexedDb",
	"MAWTransactionMode",
	"Promise",
	"WAJids",
	"WALogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = o("MAWIndexedDb").makeMsgrTransactor({ ephemeralSettings: o("MAWTransactionMode").READONLY }, "getEphemeralSettings", function(e) {
		return function(t) {
			return e.ephemeralSettings.get({ userJid: t }).then(function(e) {
				return e == null ? void 0 : e.ephemeralSetting;
			});
		};
	}), c = function(r) {
		var t = o("WAJids").interpretAsUserJid(r);
		return t == null ? (o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Received invalid chat jid for getting ephemeral settings"]))), (s || (s = n("Promise"))).resolve(void 0)) : u(t);
	};
	l.getEphemeralSettings_DEPRECATED_DO_NOT_USE = c;
}), 98);
