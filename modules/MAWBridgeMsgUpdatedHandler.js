__d("MAWBridgeMsgUpdatedHandler", [
	"FBLogger",
	"MAWAdminMsgCTA",
	"MAWMiActOnMiThreadExistsForJid__DO_NOT_USE",
	"MAWMsgFetchLSReplyMsgAndAttachment",
	"MAWUpdateMsg",
	"ReQL",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		return o("MAWMiActOnMiThreadExistsForJid__DO_NOT_USE").onMiThreadExistsForJidNoThrow__DO_NOT_USE(e, t.chatJid, "MAWBridgeMsgUpdatedHandler", (function() {
			var a = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n, a) {
				var i, l = yield (i = o("ReQL")).firstAsync(i.fromTableAscending(n.messages.index("messageId")).getKeyRange(t.msgId)), u = yield i.firstAsync(i.fromTableAscending(n.attachments).getKeyRange(a, t.msgId));
				if (l == null) {
					r("FBLogger")("messenger_web").info("existing message is null for type %s, and attachment is null: %s", t.type_, u == null);
					return;
				}
				var c = yield o("MAWAdminMsgCTA").getAdminMsgCtaStep(n, a, t), d = yield s(e, t);
				return o("MAWUpdateMsg").call(n, d, l, c);
			});
			return function(e, t) {
				return a.apply(this, arguments);
			};
		})());
	}
	function s(e, t) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = yield o("MAWMsgFetchLSReplyMsgAndAttachment").fetchReplyLocalViaLS(e, t);
			return n != null ? n : t;
		}), u.apply(this, arguments);
	}
	l.call = e;
}), 98);
