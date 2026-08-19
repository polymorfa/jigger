__d("MAWExpiredXMACleaner", [
	"FBLogger",
	"MAWMsgCleaner",
	"WALogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = null;
	function c(e) {
		u == null && (u = new (o("MAWMsgCleaner")).MsgCleaner(e, o("MAWMsgCleaner").CLEANER_TYPE.XMA));
	}
	function d(t) {
		if (u == null) {
			var n = "Trying to add new addNewExpiredXMACleanerTimestamp before the cleaner is initialized!";
			throw o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["", ""])), n), r("FBLogger")("messenger_web").mustfixThrow(n);
		} else o("WALogger").DEV(s || (s = babelHelpers.taggedTemplateLiteralLoose(["ExpiredXMACleaner: Adding timestamps backend(", ")"])), t), u.update(t);
	}
	function m() {
		return u;
	}
	function p() {
		u = null;
	}
	l.startExpiredXMACleaner = c, l.addNewExpiredXMACleanerTimestamp = d, l.getExpiredXMACleaner_FOR_TESTING_ONLY = m, l.resetExpiredXMACleaner_FOR_TESTING_ONLY = p;
}), 98);
