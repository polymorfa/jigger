__d("MAWDbPendingStanza", ["WAAssertUnreachable"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = "revoked", s = "deleteForMe", u = "deleteThread", c = "Revoked", d = "DeleteForMe", m = "DeleteThread", p = {
		DELETE_FOR_ME: d,
		DELETE_THREAD: m,
		REVOKED: c
	};
	function _(t) {
		switch (t) {
			case "Revoked": return e;
			case "DeleteForMe": return s;
			case "DeleteThread": return u;
			default: return r("WAAssertUnreachable")(t);
		}
	}
	l.PENDING_REVOKED = e, l.PENDING_DELETE_FOR_ME = s, l.REVOKED = c, l.DELETE_FOR_ME = d, l.PENDING_TYPE = p, l.getPendingSuffix = _;
}), 98);
