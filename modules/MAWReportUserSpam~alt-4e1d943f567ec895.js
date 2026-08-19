__d("MAWReportUserSpam", [
	"FBLogger",
	"I64",
	"MAWGetGroupInfoApi",
	"MAWJids",
	"MAWODSProxy",
	"MAWSpamReportUtils",
	"MWBUtil",
	"MpsTypes",
	"WADeprecatedSendIq",
	"WAGlobals",
	"WAJids",
	"WAOdsEnums",
	"WAResultOrError",
	"WAWap",
	"WebMps",
	"isStringNullOrEmpty"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	async function s(e) {
		var t = e.chatJid, n = e.context, a = e.frxParams, i = e.frxTags, l = e.openMsgs, s = e.reportedMessageId, u = e.spamFlow, p = e.userJid;
		o("MAWODSProxy").odsBumpEntityKey({
			entity: o("WAOdsEnums").Entity.SPAM_REPORT,
			key: "mps"
		});
		var _ = (i == null ? void 0 : i.some(function(e) {
			return o("MWBUtil").ALL_IMPERSONATION_TAGS.includes(e);
		})) === !0, f = _ ? [] : await o("WebMps").mps().spamReportLoadMessages({
			numMessages: o("MWBUtil").SPAM_REPORT_MESSAGE_COUNT,
			threadId: o("MpsTypes").toThreadId(t)
		}), g = null;
		if (i != null) {
			if (i.length === 0) throw r("FBLogger")("messenger_web").mustfixThrow("spam reasons should not be an empty array");
			g = o("WAWap").wap("tagset", null, i.map(function(e) {
				return o("WAWap").wap("tag", { value: o("WAWap").CUSTOM_STRING(e) });
			}));
		}
		var h = null;
		r("isStringNullOrEmpty")(a) || (h = o("WAWap").wap("parameters", null, a));
		var y = null;
		n != null && (y = o("WAWap").wap("context", null, n));
		var C = null;
		(g != null || y != null || h != null) && (C = o("WAWap").wap("frx", null, g, y, h));
		var b = c(l, t, p), v = await o("WAJids").switchOnMsgrChatJidType(t, {
			group: async function(t) {
				var e = o("WAWap").DROP_ATTR, n = o("WAWap").DROP_ATTR, r = await o("MAWGetGroupInfoApi").getGroupInfo(t);
				return r != null && r.subject != null && r.subject.content != null && (e = o("WAWap").CUSTOM_STRING(r.subject.content)), r != null && r.inviter != null && (n = o("WAWap").USER_JID(r.inviter)), d(f, t, e, n, p, u, C, b, s);
			},
			user: function() {
				return m(f, p, u, C, b, s);
			}
		});
		return o("WADeprecatedSendIq").deprecatedCastStanza(v), o("MAWODSProxy").odsBumpEntityKey({
			entity: o("WAOdsEnums").Entity.SPAM_REPORT,
			key: "mps_success"
		}), o("WAResultOrError").makeResult();
	}
	function u(e, t) {
		var n = e.flat();
		if (e.length < o("MWBUtil").SPAM_REPORT_MESSAGE_COUNT) {
			var r, a = o("MWBUtil").SPAM_REPORT_MESSAGE_COUNT - e.length;
			a < ((r = t == null ? void 0 : t.length) != null ? r : 0) ? n = [].concat((t != null ? t : []).slice(0, a), n) : n = [].concat(t != null ? t : [], n);
		}
		return n;
	}
	function c(t, n, r) {
		return (t != null ? t : []).map(function(t) {
			var a = o("MAWJids").toUserJid((e || (e = o("I64"))).to_string(t.senderId));
			if (o("WAJids").interpretAsGroupJid(n) != null) return o("MAWSpamReportUtils").formatLSDbMsgForSpamReport(t, null, o("WAJids").toGroupJid(n), a);
			var i = (e || (e = o("I64"))).equal(t.senderId, (e || (e = o("I64"))).of_string(o("WAJids").userIdFromJid(o("WAGlobals").getMyUserJid()))) ? r : o("WAGlobals").getMyUserJid();
			return o("MAWSpamReportUtils").formatLSDbMsgForSpamReport(t, i, null, a);
		});
	}
	function d(e, t, n, r, a, i, l, s, c) {
		var d, m = e.map(function(e) {
			return o("MAWSpamReportUtils").getFormattedMpsMsgsForSpamReport(e, a, t, o("MAWJids").toUserJid(e.toplevelProtobuf.senderId), c != null && e.toplevelProtobuf.messageId === c);
		}).filter(function(e) {
			return e != null;
		}), p = u(m, s);
		return (d = o("WAWap")).wap("iq", {
			id: d.generateId(),
			to: d.S_WHATSAPP_NET,
			type: "set",
			xmlns: "spam"
		}, d.wap("spam_list", {
			jid: d.GROUP_JID(t),
			reportee: d.USER_JID(a),
			source: r,
			spam_flow: d.CUSTOM_STRING(i),
			subject: n
		}, p), l);
	}
	function m(e, t, n, r, a, i) {
		var l, s = e.map(function(e) {
			return o("MAWSpamReportUtils").getFormattedMpsMsgsForSpamReport(e, t, null, o("MAWJids").toUserJid(e.toplevelProtobuf.senderId), i != null && e.toplevelProtobuf.messageId === i);
		}).filter(function(e) {
			return e != null;
		}), c = u(s, a);
		return (l = o("WAWap")).wap("iq", {
			id: l.generateId(),
			to: l.S_WHATSAPP_NET,
			type: "set",
			xmlns: "spam"
		}, l.wap("spam_list", {
			jid: l.USER_JID(t),
			reportee: l.USER_JID(t),
			spam_flow: l.CUSTOM_STRING(n)
		}, c), r);
	}
	l.reportUserSpamImpl = s;
}), 98);
