__d("MAWEphemeralCleaner", [
	"MAWLoggerUtils",
	"MAWMsgCleaner",
	"MWFBLogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = null, u = o("MWFBLogger").MWLogger().tags([
		o("MAWLoggerUtils").Tag.Ephemeral,
		o("MAWLoggerUtils").Tag.MsgCleaner,
		o("MAWLoggerUtils").Tag.CleanerTimestamp,
		"backend"
	]);
	function c(e) {
		var t = e.expiryFns, n = e.purgeDeletionsFns;
		if (s == null) {
			var r;
			s = {
				expiry: new (r = (o("MAWMsgCleaner"))).MsgCleaner(t, r.CLEANER_TYPE.EPHEMERAL),
				purgeDeletions: new r.MsgCleaner(n, r.CLEANER_TYPE.EPHEMERAL)
			};
		}
	}
	function d(t, n) {
		if (s == null) throw u.mustfixThrow("Trying to add new ephemeral timestamp before the cleaner is initialized!");
		var r = s, o = r.expiry, a = r.purgeDeletions;
		u.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
			"EphemeralCleaner: Adding timestamps for expiry(",
			") and deletion(",
			")"
		])), t, n), o.update(t), a.update(n);
	}
	function m() {
		return s;
	}
	function p() {
		s = null;
	}
	l.startEphemeralCleaner = c, l.addNewEphemeralTimestamp = d, l.getEphemeralCleaner_FOR_TESTING_ONLY = m, l.resetEphemeralCleaner_FOR_TESTING_ONLY = p;
}), 98);
