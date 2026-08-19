__d("WAWebChatLockArchivePopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	async function e() {
		return o("WAWebConfirmPopup.react").waitForConfirmPopup({
			okText: r("WAWebFbtCommon")("Continue"),
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	l.waitForChatLockArchivePopup = e;
}), 226);
