__d("MAWPendingStanzaCleaner", [
	"FBLogger",
	"MAWMsgCleaner",
	"WALogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = null;
	function c(e) {
		u == null && (u = new (o("MAWMsgCleaner")).MsgCleaner(e, o("MAWMsgCleaner").CLEANER_TYPE.PENDING_STANZA));
	}
	function d(t) {
		if (u == null) {
			var n = "Trying to add new PendingStanzaCleanerTimestamp before the cleaner is initialized!";
			throw o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["", ""])), n), r("FBLogger")("messenger_web").mustfixThrow(n);
		} else o("WALogger").DEV(s || (s = babelHelpers.taggedTemplateLiteralLoose(["PendingStanzaCleaner: Adding timestamps (", ")"])), t), u.update(t);
	}
	function m() {
		return u;
	}
	function p() {
		u = null;
	}
	l.startPendingStanzaCleaner = c, l.addNewPendingStanzaCleanerTimestamp = d, l.getPendingStanzaCleaner_FOR_TESTING_ONLY = m, l.resetPendingStanzaCleaner_FOR_TESTING_ONLY = p;
}), 98);
