__d("WAWebReactionsMsgActionUtils", [
	"WALogger",
	"WAWebAck",
	"WAWebAddonEncryption",
	"WAWebFrontendMsgGetters",
	"WAWebMsgGetters",
	"WAWebMsgKeyUtils",
	"WAWebMsgType",
	"WAWebReferentialMsgKey",
	"WAWebUserPrefsMeUser",
	"WAWebViewMode.flow",
	"WAWebWidFactory",
	"asyncToGeneratorRuntime",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	var e, s;
	function u(e) {
		var t, n = !!((t = o("WAWebFrontendMsgGetters").getChat(e).groupMetadata) != null && t.isCag), r = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
		return n ? r : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
	}
	function c(e) {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n, a = t.from, i = t.globalClockUnixTimeSeconds, l = t.msg, u = t.msgKey, c = t.reaction, d = t.reactionTimestamp, m = t.to, p = o("WAWebMsgKeyUtils").msgKeyToTargetInfo(u, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon);
			if (a.equals(p.from) || o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"create reaction: ",
				" and ",
				" do not match"
			])), a.toLogString(), p.from.toLogString()).tags("messaging").sendLogs("reactionMsgData: from is not matching", { sampling: .01 }), m.equals(p.to) || o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
				"create reaction: ",
				" and ",
				" do not match"
			])), m.toLogString(), p.to.toLogString()).tags("messaging").sendLogs("reactionMsgData: to is not matching", { sampling: .01 }), (n = o("WAWebFrontendMsgGetters").getChat(l).groupMetadata) != null && n.isCag) {
				var _ = self.crypto.getRandomValues(new Uint8Array(12)), f = {
					type: o("WAWebMsgType").MsgKind.ReactionDecrypted,
					encode: {
						text: c,
						senderTimestampMs: d
					}
				}, g = yield o("WAWebAddonEncryption").encryptAddOn(f, {
					messageSecret: r("nullthrows")(l.messageSecret, "Parent message missing message secret"),
					iv: _,
					stanzaId: l.id.id,
					originalMessageSender: o("WAWebMsgGetters").getOriginalSender(l.unsafe()),
					addOnSender: o("WAWebWidFactory").asUserWidOrThrow(a)
				}), h = g.encPayload;
				return {
					id: u,
					type: o("WAWebMsgType").MSG_TYPE.REACTION_ENC,
					kind: o("WAWebMsgType").MsgKind.ReactionEncrypted,
					viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
					t: i,
					from: a,
					to: m,
					author: p.author,
					ack: o("WAWebAck").ACK.CLOCK,
					targetMessageKey: o("WAWebReferentialMsgKey").getReferentialMsgKey(l),
					encPayload: h,
					encIv: _.buffer
				};
			}
			return {
				id: u,
				reactionParentKey: o("WAWebReferentialMsgKey").getReferentialMsgKey(l),
				type: o("WAWebMsgType").MSG_TYPE.REACTION,
				viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
				kind: o("WAWebMsgType").MsgKind.ReactionDecrypted,
				t: i,
				from: a,
				to: m,
				author: p.author,
				ack: o("WAWebAck").ACK.CLOCK,
				reactionText: c,
				reactionTimestamp: d,
				read: !0
			};
		}), d.apply(this, arguments);
	}
	l.getFromForReactionMessage = u, l.getReactionMsgData = c;
}), 98);
