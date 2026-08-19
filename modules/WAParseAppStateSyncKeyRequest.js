__d("WAParseAppStateSyncKeyRequest", ["WASyncdKeyTypes"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = [];
		for (var n of e.keyIds) n.keyId != null && t.push(o("WASyncdKeyTypes").toSyncKeyId(n.keyId));
		return { keyIds: t };
	}
	l.parseAppStateSyncKeyRequest = e;
}), 98);
