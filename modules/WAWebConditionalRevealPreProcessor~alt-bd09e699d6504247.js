__d("WAWebConditionalRevealPreProcessor", [
	"WAJids",
	"WALogger",
	"WATimeUtils",
	"WAWebCommonMsgSubtypeTypes",
	"WAWebContactSystemMsg",
	"WAWebHandleSingleMsg",
	"WAWebMsgType",
	"WAWebProtobufsE2E.pb",
	"WAWebScheduledMessagesGatingUtils",
	"WAWebScheduledMsgCrypto",
	"WAWebScheduledMsgOrphanRevealKeyStore",
	"WAWebScheduledMsgOutgoingMsgKey",
	"WAWebScheduledMsgRevealKeyStore",
	"WAWebScheduledMsgStore",
	"WAWebUserPrefsMeUser",
	"WAWebViewMode.flow",
	"WAWebWidFactory",
	"decodeProtobuf",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T = {
		decryptedProto: null,
		decryptedProtoBytes: null,
		isRevealPending: !1,
		revealKeyId: null,
		viewMode: null
	};
	function D(e, t, n) {
		var r = o("WAWebWidFactory").createWid(t);
		return n != null ? o("WAWebScheduledMsgOutgoingMsgKey").buildScheduledMsgIncomingMsgKey(e, r, n).toString() : o("WAWebScheduledMsgOutgoingMsgKey").buildScheduledMsgOutgoingMsgKey(e, r, o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()).toString();
	}
	async function x(t) {
		var n = t.chatId, a = t.encIv, i = t.encPayload, l = t.msgId, d = t.revealKeyId, m = t.stanzaScheduledMsgMeta;
		o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg] inline reveal key present in stanza meta, persisting encrypted payload"])));
		var p = D(l, n, null);
		try {
			var _ = await o("WAWebScheduledMsgStore").storeScheduledMessage({
				msgId: p,
				chatId: n,
				revealKeyId: d,
				revealKey: m.revealKey,
				scheduledTimestampS: o("WATimeUtils").castToUnixTime(m.scheduledTimestampS),
				encPayload: new Uint8Array(i),
				encIv: new Uint8Array(a)
			});
			_ ? (o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg] stored phone-scheduled message in scheduled list"]))), await $(n)) : o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg] phone-scheduled message dropped: per-chat limit reached"])));
		} catch (e) {
			return o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg] Failed to store phone-scheduled message in list"]))).catching(r("getErrorSafe")(e)).sendLogs("scheduled-msg-store-fail"), null;
		}
		return {
			decryptedProto: null,
			decryptedProtoBytes: null,
			isRevealPending: !0,
			revealKeyId: d,
			viewMode: o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE
		};
	}
	async function $(e) {
		try {
			var t = o("WAWebWidFactory").createWid(e), n = o("WAWebContactSystemMsg").genNotificationMsg(t, {
				type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION,
				kind: o("WAWebMsgType").MsgKind.Notification,
				subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype.ScheduledMessageCreated,
				viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE
			});
			await o("WAWebHandleSingleMsg").handleSingleMsgImpl({
				chatId: t,
				newMsg: n,
				handleSingleMsgOrigin: "scheduledMsgInline"
			}), o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg] inserted ScheduledMessageCreated system bubble"])));
		} catch (e) {
			o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg] Failed to insert ScheduledMessageCreated system bubble"]))).catching(r("getErrorSafe")(e)).sendLogs("scheduled-msg-sysbubble-fail");
		}
	}
	async function P(e, t, n) {
		var a = null;
		try {
			a = await o("WAWebScheduledMsgOrphanRevealKeyStore").getOrphanRevealKeyByRevealKeyId(n), o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg] orphan key lookup completed"])));
		} catch (e) {
			return o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg] Failed to query orphan keys (DB may not be ready), will still store reveal-pending record"]))).catching(r("getErrorSafe")(e)), null;
		}
		if (a == null) return null;
		o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg] Found orphan RevealKey, decrypting immediately"])));
		try {
			var i = await o("WAWebScheduledMsgCrypto").decryptWithRevealKey(e, t, a.revealKey), l = new Uint8Array(i), s = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, l);
			return await o("WAWebScheduledMsgOrphanRevealKeyStore").deleteOrphanRevealKey(a.revealKeyId), o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg] orphan key decryption succeeded"]))), {
				proto: s,
				protoBytes: l
			};
		} catch (e) {
			return o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg] Failed to decrypt with orphan RevealKey, will store as reveal-pending"]))).catching(r("getErrorSafe")(e)), null;
		}
	}
	async function N(e) {
		var t = e.chatId, n = e.encIv, a = e.encPayload, i = e.msgId, l = e.reportingTokenInfo, s = e.revealKeyId, u = e.senderJid, c = e.stanzaScheduledMsgMeta, d = D(i, t, u);
		try {
			return await o("WAWebScheduledMsgRevealKeyStore").storeRevealKey({
				msgId: d,
				chatId: t,
				revealKeyId: s,
				revealKey: new Uint8Array(0),
				encPayload: new Uint8Array(a),
				encIv: new Uint8Array(n),
				scheduledTimestampS: c != null ? o("WATimeUtils").castToUnixTime(c.scheduledTimestampS) : o("WATimeUtils").castToUnixTime(0),
				status: "PENDING",
				createdAt: o("WATimeUtils").unixTime(),
				senderJid: u != null ? u : null,
				reportingTag: l == null ? void 0 : l.reportingTag,
				reportingToken: l == null ? void 0 : l.reportingToken,
				reportingTokenVersion: l == null ? void 0 : l.version,
				reportingStanzaId: (l == null ? void 0 : l.reportingTag) != null ? i : null,
				reportingStanzaTs: (l == null ? void 0 : l.stanzaTs) != null ? o("WATimeUtils").castToUnixTime(l.stanzaTs) : null
			}), o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg] stored reveal-pending record"]))), !0;
		} catch (e) {
			return o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg] Failed to store reveal key (DB may not be ready)"]))).catching(r("getErrorSafe")(e)), !1;
		}
	}
	async function M(e, t, n, r, a, i) {
		if (!w()) return T;
		o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg] preProcess: receiver gating enabled, validating conditionalRevealMessage"])));
		var l = o("WAWebScheduledMsgCrypto").parseConditionalRevealMessage(e);
		if (l == null) return T;
		var s = l.encIv, u = l.encPayload, c = l.revealKeyId;
		o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg] ConditionalRevealMessage detected"])));
		var d = a != null && a.revealKeyId === c ? a : null;
		if (d != null) {
			var m = await x({
				stanzaScheduledMsgMeta: d,
				encIv: s,
				encPayload: u,
				revealKeyId: c,
				msgId: t,
				chatId: n
			});
			if (m != null) return m;
		}
		var p = await P(u, s, c);
		if (p != null) return {
			decryptedProto: p.proto,
			decryptedProtoBytes: p.protoBytes,
			isRevealPending: !1,
			revealKeyId: c,
			viewMode: null
		};
		o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg] storing as reveal-pending"])));
		var _ = await N({
			chatId: n,
			encIv: s,
			encPayload: u,
			msgId: t,
			reportingTokenInfo: i,
			revealKeyId: c,
			senderJid: r,
			stanzaScheduledMsgMeta: d
		});
		return _ ? {
			decryptedProto: null,
			decryptedProtoBytes: null,
			isRevealPending: !0,
			revealKeyId: c,
			viewMode: o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE
		} : T;
	}
	function w() {
		try {
			return o("WAWebScheduledMessagesGatingUtils").isScheduledMessagesReceiverEnabled() ? !0 : (o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg] preProcess skipped: receiver gating disabled"]))), !1);
		} catch (e) {
			return e instanceof Error && o("WALogger").ERROR(L || (L = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg] preProcess: gating check threw"]))).catching(e), !1;
		}
	}
	async function A(e) {
		var t = e.conditionalRevealMessage, n = e.msgId, a = e.rawChatJid, i = e.reportingTokenInfo, l = e.senderJid, s = e.stanzaScheduledMsgMeta;
		try {
			var u = o("WAJids").validateChatJid(a);
			if (u != null) {
				var c = await M(t, n, u, l, s, i), d = c.isRevealPending === !0;
				return {
					proto: c.decryptedProto,
					protoBytes: c.decryptedProtoBytes,
					isRevealPending: d,
					scheduledMsgViewMode: d ? c.viewMode : null
				};
			}
			o("WALogger").ERROR(E || (E = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg] ConditionalReveal pre-processing skipped: invalid chat JID"])));
		} catch (e) {
			o("WALogger").ERROR(k || (k = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg] ConditionalReveal pre-processing failed, continuing with original proto"]))).catching(r("getErrorSafe")(e));
		}
		return {
			proto: null,
			protoBytes: null,
			isRevealPending: !1,
			scheduledMsgViewMode: null
		};
	}
	function F(e, t) {
		if (t == null) return e;
		var n = e.map(function(e) {
			return babelHelpers.extends({}, e, { viewMode: t });
		});
		return o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose([
			"[scheduled_msg] applied viewMode=",
			" to ",
			" msgs"
		])), t, String(n.length)), n;
	}
	l.preProcessConditionalRevealMessage = M, l.maybePreProcessConditionalRevealForReceive = A, l.applyScheduledMsgViewMode = F;
}), 98);
