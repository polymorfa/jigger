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
	"asyncToGeneratorRuntime",
	"isStringNullOrEmpty"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.chatJid, a = e.context, i = e.frxParams, l = e.frxTags, s = e.openMsgs, u = e.reportedMessageId, c = e.spamFlow, _ = e.userJid;
			o("MAWODSProxy").odsBumpEntityKey({
				entity: o("WAOdsEnums").Entity.SPAM_REPORT,
				key: "mps"
			});
			var f = (l == null ? void 0 : l.some(function(e) {
				return o("MWBUtil").ALL_IMPERSONATION_TAGS.includes(e);
			})) === !0, g = f ? [] : yield o("WebMps").mps().spamReportLoadMessages({
				numMessages: o("MWBUtil").SPAM_REPORT_MESSAGE_COUNT,
				threadId: o("MpsTypes").toThreadId(t)
			}), h = null;
			if (l != null) {
				if (l.length === 0) throw r("FBLogger")("messenger_web").mustfixThrow("spam reasons should not be an empty array");
				h = o("WAWap").wap("tagset", null, l.map(function(e) {
					return o("WAWap").wap("tag", { value: o("WAWap").CUSTOM_STRING(e) });
				}));
			}
			var y = null;
			r("isStringNullOrEmpty")(i) || (y = o("WAWap").wap("parameters", null, i));
			var C = null;
			a != null && (C = o("WAWap").wap("context", null, a));
			var b = null;
			(h != null || C != null || y != null) && (b = o("WAWap").wap("frx", null, h, C, y));
			var v = d(s, t, _), S = yield o("WAJids").switchOnMsgrChatJidType(t, {
				group: (function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
						var t = o("WAWap").DROP_ATTR, n = o("WAWap").DROP_ATTR, r = yield o("MAWGetGroupInfoApi").getGroupInfo(e);
						return r != null && r.subject != null && r.subject.content != null && (t = o("WAWap").CUSTOM_STRING(r.subject.content)), r != null && r.inviter != null && (n = o("WAWap").USER_JID(r.inviter)), m(g, e, t, n, _, c, b, v, u);
					});
					function t(t) {
						return e.apply(this, arguments);
					}
					return t;
				})(),
				user: function() {
					return p(g, _, c, b, v, u);
				}
			});
			return o("WADeprecatedSendIq").deprecatedCastStanza(S), o("MAWODSProxy").odsBumpEntityKey({
				entity: o("WAOdsEnums").Entity.SPAM_REPORT,
				key: "mps_success"
			}), o("WAResultOrError").makeResult();
		}), u.apply(this, arguments);
	}
	function c(e, t) {
		var n = e.flat();
		if (e.length < o("MWBUtil").SPAM_REPORT_MESSAGE_COUNT) {
			var r, a = o("MWBUtil").SPAM_REPORT_MESSAGE_COUNT - e.length;
			a < ((r = t == null ? void 0 : t.length) != null ? r : 0) ? n = [].concat((t != null ? t : []).slice(0, a), n) : n = [].concat(t != null ? t : [], n);
		}
		return n;
	}
	function d(t, n, r) {
		return (t != null ? t : []).map(function(t) {
			var a = o("MAWJids").toUserJid((e || (e = o("I64"))).to_string(t.senderId));
			if (o("WAJids").interpretAsGroupJid(n) != null) return o("MAWSpamReportUtils").formatLSDbMsgForSpamReport(t, null, o("WAJids").toGroupJid(n), a);
			var i = (e || (e = o("I64"))).equal(t.senderId, (e || (e = o("I64"))).of_string(o("WAJids").userIdFromJid(o("WAGlobals").getMyUserJid()))) ? r : o("WAGlobals").getMyUserJid();
			return o("MAWSpamReportUtils").formatLSDbMsgForSpamReport(t, i, null, a);
		});
	}
	function m(e, t, n, r, a, i, l, s, u) {
		var d, m = e.map(function(e) {
			return o("MAWSpamReportUtils").getFormattedMpsMsgsForSpamReport(e, a, t, o("MAWJids").toUserJid(e.toplevelProtobuf.senderId), u != null && e.toplevelProtobuf.messageId === u);
		}).filter(function(e) {
			return e != null;
		}), p = c(m, s);
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
	function p(e, t, n, r, a, i) {
		var l, s = e.map(function(e) {
			return o("MAWSpamReportUtils").getFormattedMpsMsgsForSpamReport(e, t, null, o("MAWJids").toUserJid(e.toplevelProtobuf.senderId), i != null && e.toplevelProtobuf.messageId === i);
		}).filter(function(e) {
			return e != null;
		}), u = c(s, a);
		return (l = o("WAWap")).wap("iq", {
			id: l.generateId(),
			to: l.S_WHATSAPP_NET,
			type: "set",
			xmlns: "spam"
		}, l.wap("spam_list", {
			jid: l.USER_JID(t),
			reportee: l.USER_JID(t),
			spam_flow: l.CUSTOM_STRING(n)
		}, u), r);
	}
	l.reportUserSpamImpl = s;
}), 98);
