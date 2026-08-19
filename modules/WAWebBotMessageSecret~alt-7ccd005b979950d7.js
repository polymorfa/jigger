__d("WAWebBotMessageSecret", [
	"WABinary",
	"WACryptoAesGcm",
	"WACryptoHkdf",
	"WALogger",
	"WAWebBotGating",
	"WAWebBotGroupGatingUtils",
	"WAWebBotTypes",
	"WAWebCoexV2BotWid",
	"WAWebCoexV2GatingUtils",
	"WAWebDBMessageSerialization",
	"WAWebLidMigrationUtils",
	"WAWebMsgKey",
	"WAWebMsmsgMsgSecretCache",
	"WAWebOrphanBotMsgError",
	"WAWebProtobufsE2E.pb",
	"WAWebSchemaMessage",
	"WAWebUserPrefsMeUser",
	"WAWebWidToJid",
	"decodeProtobuf",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c = 32, d = "Bot Message";
	async function m(e) {
		var t = new (o("WABinary")).Binary(e).readByteArrayView(), n = await o("WACryptoHkdf").extractAndExpand(new Uint8Array(t), d, c);
		return n;
	}
	async function p(e, t) {
		return t.msgInfo.author.isFbidBot() ? f(e, t) : _(e, t);
	}
	async function _(t, n) {
		var a, i, l = n.msgInfo, s = n.msgMeta, u = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSecretMessageSpec, t), c = s.targetSenderJid ? o("WAWebUserPrefsMeUser").isMeAccount(s.targetSenderJid) : !0, d = {
			fromMe: c,
			remote: (a = s.targetChatJid) != null ? a : l.chat,
			id: r("nullthrows")(s.targetId, "decryptMsmsgBotMessage: targetId")
		};
		l.chat.isGroup() && (d.participant = s.targetSenderJid);
		var m = await g(d), p = o("WAWebWidToJid").widToUserJid((i = s.targetSenderJid) != null ? i : o("WAWebUserPrefsMeUser").getMeUserOrThrow()), _ = o("WAWebWidToJid").widToUserJid(r("nullthrows")(l.author, "decryptMsmsgBotMessage: author")), f = null, y = r("nullthrows")(u.encIv, "decryptMsmsgBotMessage: encIv"), C = r("nullthrows")(u.encPayload, "decryptMsmsgBotMessage: encPayload");
		try {
			var b = l.externalId, v = await h({
				decryptSecret: m,
				messageSecretOriginalUserJid: p,
				senderJid: _,
				stanzaId: b
			});
			f = await o("WACryptoAesGcm").gcmDecrypt(v, y, C, b + "\0" + _);
		} catch (t) {
			var S;
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["decryptMsmsgBotMessage: fallback to botEditTargetId: ", ""])), t);
			var R = r("nullthrows")((S = n.msgBotInfo) == null ? void 0 : S.botEditTargetId, "decryptMsmsgBotMessage: botEditTargetId"), L = await h({
				decryptSecret: m,
				messageSecretOriginalUserJid: p,
				senderJid: _,
				stanzaId: R
			});
			f = await o("WACryptoAesGcm").gcmDecrypt(L, y, C, R + "\0" + _);
		}
		return f;
	}
	async function f(e, t) {
		var n, a = t.msgBotInfo, i = t.msgInfo, l = t.msgMeta, c = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(), d = (n = l.targetSenderJid) != null ? n : c, m = {
			fromMe: o("WAWebUserPrefsMeUser").isMeAccount(d),
			remote: i.chat,
			id: r("nullthrows")(l.targetId, "decryptMsmsgFbidBotMessage: targetId")
		};
		if (i.chat.isGroup()) {
			var p;
			m.participant = (p = o("WAWebLidMigrationUtils").toPn(d)) != null ? p : d;
		}
		var _ = await g(m), f = i.externalId, y = null;
		((a == null ? void 0 : a.botEditType) === o("WAWebBotTypes").BotMsgEditType.INNER || (a == null ? void 0 : a.botEditType) === o("WAWebBotTypes").BotMsgEditType.LAST) && ((a == null ? void 0 : a.botEditTargetId) != null ? (f = a == null ? void 0 : a.botEditTargetId, y = i.externalId) : o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[decryptMsmsgFbidBotMessage] fallback→externalId edit=", ""])), a == null ? void 0 : a.botEditType));
		var C = l.from, b = o("WAWebWidToJid").widToUserJid(C != null && i.author != null && i.author.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) && o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled() ? C : r("nullthrows")(i.author, "decryptMsmsgFbidBotMessage: author")), v = o("WAWebWidToJid").widToUserJid(d), S = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSecretMessageSpec, e), R = S.encIv, L = S.encPayload, E = r("nullthrows")(R, "decryptMsmsgFbidBotMessage: encIv"), k = r("nullthrows")(L, "decryptMsmsgFbidBotMessage: encPayload");
		async function I(e) {
			var t = await h({
				decryptSecret: _,
				messageSecretOriginalUserJid: v,
				senderJid: b,
				stanzaId: e
			});
			return o("WACryptoAesGcm").gcmDecrypt(t, E, k, e + "\0" + b);
		}
		try {
			var T = await I(f);
			return T;
		} catch (e) {
			if (y == null) throw e;
			return o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
				"[decryptMsmsgFbidBotMessage] gcmDecrypt failed primaryStanzaId=",
				", fallback→externalId=",
				": ",
				""
			])), f, y, String(e)), I(y);
		}
	}
	async function g(e) {
		var t, n = new (r("WAWebMsgKey"))(e), a = n.toString(), i = (t = o("WAWebLidMigrationUtils").getAlternateMsgKey(n)) == null ? void 0 : t.toString(), l = o("WAWebMsmsgMsgSecretCache").msmsgMsgSecretCache.getMsmsgMsgSecretFromCache(a);
		if (l == null && i != null && (l = o("WAWebMsmsgMsgSecretCache").msmsgMsgSecretCache.getMsmsgMsgSecretFromCache(i)), l == null) {
			var s = await o("WAWebSchemaMessage").getMessageTable().bulkGet([a, i].filter(Boolean)), u = s[0], c = s[1], d = u != null ? u : c;
			if (d == null && o("WAWebBotGating").isBotOrphanMsgEnabled()) throw new (r("WAWebOrphanBotMsgError"))(a);
			var p = o("WAWebDBMessageSerialization").messageFromDbRow(r("nullthrows")(d, "decryptMsmsgBotMessage: targetMsg"));
			if (l = p == null ? void 0 : p.messageSecret, o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() || o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()) {
				var _ = p == null ? void 0 : p.botGroupParticipant;
				_ != null && o("WAWebMsmsgMsgSecretCache").msmsgBotGroupGossipDataCache.addMsmsgBotGroupGossipDataToCache(a, _);
			}
		}
		return m(r("nullthrows")(l, "decryptMsmsgBotMessage: decryptSecretBase"));
	}
	async function h(e) {
		var t = e.decryptSecret, n = e.messageSecretOriginalUserJid, r = e.senderJid, a = e.stanzaId, i = o("WABinary").Binary.build(a, n, r).readBuffer(), l = await o("WACryptoHkdf").extractAndExpand(new Uint8Array(t), i, c);
		return l;
	}
	l.genBotMsgSecretFromMsgSecret = m, l.decryptMsmsgBotMessage = p, l.genBotDecryptionKey = h;
}), 98);
