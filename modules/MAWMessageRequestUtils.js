__d("MAWMessageRequestUtils", ["MAWFolderTypes", "WADbContact"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = e === o("MAWFolderTypes").FOLDER_ID.PENDING || e === o("MAWFolderTypes").FOLDER_ID.OTHER;
		return t;
	}
	function s(e, t) {
		return (e === null || e === o("MAWFolderTypes").FOLDER_ID.INBOX) && (t === o("WADbContact").REVERSED_ONE_WAY_CONTACT || t === o("WADbContact").NON_CONTACT);
	}
	l.isMessageRequestOrSpamThread = e, l.isInboxRequest = s;
}), 98);
