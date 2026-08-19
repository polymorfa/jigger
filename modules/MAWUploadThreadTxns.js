__d("MAWUploadThreadTxns", ["$InternalEnum", "MAWFolderTypes"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = n("$InternalEnum")({
		INBOX: 0,
		PENDING: 1,
		OTHER: 2,
		SPAM: 3,
		ARCHIVED: 4,
		HIDDEN: 5
	});
	function s(t) {
		switch (t) {
			case o("MAWFolderTypes").FOLDER_ID.INBOX: return e.INBOX;
			case o("MAWFolderTypes").FOLDER_ID.PENDING: return e.PENDING;
			case o("MAWFolderTypes").FOLDER_ID.ARCHIVED: return e.ARCHIVED;
			default: return e.INBOX;
		}
	}
	function u(e) {
		return s(e).toString();
	}
	l.FolderType = e, l.getFolderTypeAsText = u;
}), 98);
