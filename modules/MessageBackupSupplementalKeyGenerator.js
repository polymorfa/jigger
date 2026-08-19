__d("MessageBackupSupplementalKeyGenerator", [
	"$InternalEnum",
	"MAWJids",
	"WAGlobals",
	"WAJids",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = n("$InternalEnum")({
		REACTION: "reaction",
		DELETE_REACTION: "delete_reaction",
		EDIT: "edit",
		RAVEN_ACTION_MESSAGE: "raven_action_message"
	}), s = ":";
	function u(e, t) {
		var n = t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), r = new RegExp("^" + n, "i");
		return r.test(e);
	}
	function c(t) {
		return u(t, e.EDIT);
	}
	function d(t) {
		var n = t.split(s);
		if (n.length === 1) return {
			rawIdentifierString: t,
			type: "poll_update"
		};
		var r = n[0];
		if (n.length < 2 || n.length > 3) return {
			prefix: r,
			rawIdentifierString: t,
			type: "unknown"
		};
		var a = n[1], i = o("MAWJids").toUserJid(a);
		if (r === e.REACTION || r === e.DELETE_REACTION) return {
			senderJid: i,
			type: "reaction"
		};
		var l = n.length === 3 ? o("WATimeUtils").castToMillisTime(Number(n[2])) : null;
		return r === e.RAVEN_ACTION_MESSAGE ? {
			senderJid: i,
			type: "raven_action_message"
		} : l == null ? {
			prefix: r,
			rawIdentifierString: t,
			type: "unknown"
		} : r === e.EDIT ? {
			senderJid: i,
			ts: l,
			type: "edit"
		} : {
			prefix: r,
			rawIdentifierString: t,
			type: "unknown"
		};
	}
	function m(t) {
		switch (t.type) {
			case "edit": return "" + e.EDIT + s + o("WAJids").extractUserId(t.senderJid) + s + t.ts.toString();
			case "reaction": return "" + e.REACTION + s + o("WAJids").extractUserId(t.senderJid);
			case "raven_action_message": return "" + e.RAVEN_ACTION_MESSAGE + s + o("WAJids").extractUserId(t.senderJid);
			case "poll_update": return t.rawIdentifierString;
		}
	}
	function p(t) {
		var n;
		if (o("WAJids").isAuthorMe(t)) n = o("WAGlobals").getMyUserJid();
		else {
			var r = o("WAJids").interpretAndValidateJid(t);
			if (r.jidType === "msgrUser") n = r.userJid;
			else return null;
		}
		var a = o("WAJids").userIdFromJid(n);
		return "" + e.REACTION + s + a;
	}
	function _(t, n) {
		var r;
		if (o("WAJids").isAuthorMe(t)) r = o("WAGlobals").getMyUserJid();
		else {
			var a = o("WAJids").interpretAndValidateJid(t);
			if (a.jidType === "msgrUser") r = a.userJid;
			else return null;
		}
		var i = o("WAJids").userIdFromJid(r);
		return "" + e.EDIT + s + i + s + n.toString();
	}
	l.isSupplementalProtobufAnEdit = c, l.parseIdentifierString = d, l.toIdentifierString = m, l.createReactionSupplementalKey = p, l.createEditSupplementalKey = _;
}), 98);
