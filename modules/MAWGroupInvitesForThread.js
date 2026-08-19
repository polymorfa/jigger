__d("MAWGroupInvitesForThread", ["LSMessagingThreadTypeUtil", "LSThreadBitOffset"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = o("LSMessagingThreadTypeUtil").isArmadilloSecure(e.threadType), n = o("LSMessagingThreadTypeUtil").isGroup(e.threadType), r = o("LSThreadBitOffset").has(105, e);
		return t && n ? r : !1;
	}
	l.isGroupInviteThread = e;
}), 98);
