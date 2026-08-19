__d("MAWAuthor", [
	"MAWUserJidWrapper",
	"WAJids",
	"isStringNullOrEmpty"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = function(t) {
		if (t == null || t === o("WAJids").AUTHOR_SYSTEM) return null;
		if (o("WAJids").isAuthorMe(t)) return o("MAWUserJidWrapper").getMyUserJid();
		var e = o("WAJids").authorAsUserJid(t);
		return e == null || r("isStringNullOrEmpty")(o("WAJids").userIdFromJid(e)) ? null : o("WAJids").authorAsUserJid(t);
	};
	l.getAuthorUserJid = e;
}), 98);
