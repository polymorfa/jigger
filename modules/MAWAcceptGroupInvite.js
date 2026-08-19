__d("MAWAcceptGroupInvite", [
	"MAWGetGroupInviteApi",
	"MAWJids",
	"MAWJobManager",
	"MAWRemoveGroupInvitesApi",
	"WADeprecatedSendIq",
	"WADeprecatedWapParser",
	"WAJids",
	"WALogger",
	"WAPersistedJobManager",
	"WATimeUtils",
	"WAWaitForComms",
	"WAWap",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = new (r("WADeprecatedWapParser"))("getAcceptGroupInviteResponse", function(e) {
		e.assertTag("iq"), e.assertAttr("type", "result");
	}), d = o("MAWJobManager").getPersistedJobsApi().definePersistedJob().finalStep("saveAndPassOff", function(e) {
		return m(e);
	}).end();
	function m(e) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n = t.chatJid, r = t.inviteCode, a = t.invitedParticipantUserId, i = t.inviteExpirationTs, l = t.inviterUserId;
			yield o("WAWaitForComms").waitForComms(), o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["acceptGroupInvite called"])));
			var d = o("MAWJids").toUserJid(l), m = o("MAWJids").toUserJid(a), p, _, f;
			if (r != null && i != null) {
				if (p = o("WAJids").interpretAsGroupJid(n), p == null) return o("WALogger").DEV(s || (s = babelHelpers.taggedTemplateLiteralLoose(["acceptGroupInvite failed to get group jid for ", ""])), n), !1;
				_ = r, f = i;
			} else {
				var g = yield o("MAWGetGroupInviteApi").getGroupInvite(n, d, m);
				if (!g.success) return o("WALogger").DEV(u || (u = babelHelpers.taggedTemplateLiteralLoose(["acceptGroupInvite failed to get group invite info ", ""])), g.error), !1;
				p = g.value.groupJid, _ = g.value.groupInvite.inviteCode, f = g.value.groupInvite.inviteExpirationTs;
			}
			var h = o("WAWap").wap("iq", {
				id: o("WAWap").generateId(),
				to: o("WAWap").GROUP_JID(p),
				type: "set",
				xmlns: "w:g2"
			}, o("WAWap").wap("accept", {
				admin: o("WAWap").USER_JID(d),
				code: o("WAWap").CUSTOM_STRING(_),
				expiration: o("WAWap").LONG_INT(f)
			})), y = yield o("WADeprecatedSendIq").deprecatedSendIq(h, c);
			if (!y.success) {
				var C = y.errorCode.toString().startsWith("5");
				if (C) throw new (o("WAPersistedJobManager")).RetryOnBackoff({
					algo: {
						first: o("WATimeUtils").HOUR_MILLISECONDS / 60,
						type: "exponential"
					},
					jitter: .1
				});
				return !1;
			}
			return n != null && (yield o("MAWRemoveGroupInvitesApi").removeGroupInvites(n, m)), !0;
		}), p.apply(this, arguments);
	}
	l.acceptGroupInvite = d, l.acceptGroupInviteImpl = m;
}), 98);
