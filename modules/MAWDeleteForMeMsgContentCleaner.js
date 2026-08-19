__d("MAWDeleteForMeMsgContentCleaner", [
	"FBLogger",
	"MAWMsgCleaner",
	"WALogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = null;
	function c(e) {
		u == null && (u = new (o("MAWMsgCleaner")).MsgCleaner(e, o("MAWMsgCleaner").CLEANER_TYPE.DELETE_FOR_ME));
	}
	function d(t) {
		if (u == null) {
			var n = "Trying to add new DeleteForMeContentCleanerTimestamp before the cleaner is initialized!";
			throw o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["", ""])), n), r("FBLogger")("messenger_web").mustfixThrow(n);
		} else o("WALogger").DEV(s || (s = babelHelpers.taggedTemplateLiteralLoose(["DeleteForMeMsgContentCleaner: Adding timestamps (", ")"])), t), u.update(t);
	}
	function m() {
		return u;
	}
	function p() {
		u = null;
	}
	l.startDeleteForMeMsgContentCleaner = c, l.addNewDeleteForMeMsgContentCleanerTimestamp = d, l.getDeleteForMeMsgContentCleaner_FOR_TESTING_ONLY = m, l.resetDeleteForMeMsgContentCleaner_FOR_TESTING_ONLY = p;
}), 98);
