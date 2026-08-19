__d("WAWebProcessMsgInfoForLid", [
	"WAJids",
	"WALogger",
	"WAWebApiContact",
	"WAWebBotUtils",
	"WAWebCoexV2BotWid",
	"WAWebCoexV2GatingUtils",
	"WAWebGetPlatformFromStanzaId",
	"WAWebHandleMsgCommon",
	"WAWebHandleMsgTypes.flow",
	"WAWebLid1X1MigrationGating",
	"WAWebLidMigrationUtils",
	"WAWebLidStatusMigrationUtils",
	"WAWebMessageProcessUtils",
	"WAWebProcessPhoneNumberMapping",
	"WAWebUsernameGatingUtils",
	"WAWebWidFactory",
	"WAWebWorkerSafeBackendApi",
	"err",
	"justknobx"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m;
	async function p(t) {
		var n = t.chatWid, a = t.mapping, i = t.msgInfo, l = t.msgMeta, m = null, p = l == null ? void 0 : l.origin, _ = p === "ctwa";
		if (_) {
			if (!n.isLid()) throw r("err")("received ctwa message but remote id is not Lid");
			m = n;
		} else if ((l == null ? void 0 : l.targetSenderJid) != null) m = o("WAWebLidMigrationUtils").toUserLidOrThrow(o("WAWebWidFactory").asUserWidOrThrow(i.chat));
		else if (a == null) {
			var f = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(), g = f && (i.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT || i.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST || i.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST) && i.author.isLid() && n.isLid(), h = r("justknobx")._("2459") && (i.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT || i.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST || i.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST) && i.author.isHosted() && i.author.isHostedLid() && n.isLid(), y = i.author.isFbidBot() && o("WAWebBotUtils").isMaibaAiHubFbid(i.author) && n.isLid(), C = i.author.isFbidBot() && i.author.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) && n.isLid() && o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled();
			if (g = g || h || y || C, g) m = o("WAWebLidMigrationUtils").toUserLidOrThrow(n);
			else if (i.username != null || i.participantUsername != null) {
				var b = f ? "missing-pn-lid-mapping-in-1-1-message-with-username-UN-enabled" : "missing-pn-lid-mapping-in-1-1-message-with-username-UN-off";
				if (o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
					"findDestinationChatForSingleMapping: missing pn-lid mapping in 1-1 message with username, sender: ",
					", type: ",
					", author: ",
					", chatWid: ",
					""
				])), o("WAWebGetPlatformFromStanzaId").getPlatformFromStanzaId(i.externalId), i.type, i.author.toLogString(), n.toLogString()).sendLogs(b), !f) m = o("WAWebLidMigrationUtils").toUserLidOrThrow(n);
				else throw r("err")("findDestinationChatForSingleMapping: missing pn-lid mapping in 1-1 message");
			} else throw o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["findDestinationChatForSingleMapping: missing pn-lid mapping in 1-1 message, sender: ", ""])), o("WAWebGetPlatformFromStanzaId").getPlatformFromStanzaId(i.externalId)).sendLogs("misssing-pn-lid-mapping-in-1-1-message"), r("err")("findDestinationChatForSingleMapping: missing pn-lid mapping in 1-1 message");
		} else if (a === "missing-peer-recipient-pn") {
			var v;
			if (o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["findDestinationChatForSingleMapping: missing peer recipient pn in 1-1 message from device ", ""])), (v = i.author.device) != null ? v : 0).sendLogs("misssing-peer-recipient-pn-in-1-1-message"), n.isLid() && o("WAWebApiContact").lidPnCache.getPhoneNumber(n) != null && (m = n), m == null) {
				o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["findDestinationChatForSingleMapping: missing peer recipient pn and local mapping, processing message anyway"])));
				return;
			}
		} else if (a === "missing-peer-recipient-lid") {
			if (o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["findDestinationChatForSingleMapping: missing peer recipient lid in 1-1 message"]))).sendLogs("misssing-peer-recipient-lid-in-1-1-message"), o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget("syncContactListJob", {
				contactIds: [n],
				shouldSyncDevice: !1,
				mode: "query"
			}), m = o("WAWebApiContact").lidPnCache.getCurrentLid(n), m == null) throw r("err")("findDestinationChatForSingleMapping: missing peer recipient lid in 1-1 message");
		} else m = a.lid;
		var S = await o("WAWebMessageProcessUtils").selectChatForOneOnOneMessage({
			lid: m,
			lidOrigin: p
		}), R = S.chatId;
		return R.isSameAccountAndAddressingMode(n) ? { accountLid: S.accountLid } : {
			newRemote: R,
			accountLid: S.accountLid
		};
	}
	async function _(e) {
		var t = e.msgInfo, n = e.msgMeta, a = await o("WAWebProcessPhoneNumberMapping").processPhoneNumberMappings(t, n, t.offline == null);
		if (t.category !== o("WAWebHandleMsgCommon").MSG_CATEGORY.peer) {
			if (t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_STATUS) {
				var i = o("WAWebWidFactory").asUserWidOrThrow(t.author), l = o("WAWebWidFactory").asUserWidOrThrow(o("WAWebLidStatusMigrationUtils").matWidConvert(i));
				if (!i.equals(l)) {
					var s;
					o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
						"maybeProcessMsgInfoForLid: converting status message from ",
						" to ",
						""
					])), t.author.toLogString(), l.toLogString()), t.author = o("WAWebWidFactory").createDeviceWidFromUserAndDevice(l.user, l.server, (s = t.author.device) != null ? s : o("WAJids").DEFAULT_DEVICE_ID);
				}
				return;
			}
			var u = o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() || t.author.isLid() || t.chat.isLid();
			if (u) if (t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST) {
				if (a.type !== "peer-broadcast") throw r("err")("maybeProcessMsgInfoForLid: mappings type is not the expected peer-broadcast");
				a.type;
				var c = a.mappings.map(async function(e, r) {
					var a = t.bclParticipants[r], i = await p({
						msgInfo: t,
						msgMeta: n,
						mapping: e,
						chatWid: a.wid
					});
					(i == null ? void 0 : i.newRemote) != null && (a.preMatWid = a.wid, a.wid = o("WAWebWidFactory").asUserWidOrThrow(i.newRemote));
				});
				await Promise.all(c);
			} else {
				if (a.type !== "not-peer-broadcast") throw r("err")("maybeProcessMsgInfoForLid: mappings type is not the expected not-peer-broadcast");
				a.type;
				var d = t.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST, _ = d ? t.author : t.chat;
				if (!_.isRegularUser()) return;
				var f = await p({
					msgInfo: t,
					msgMeta: n,
					mapping: a.mapping,
					chatWid: _
				});
				if (f == null) return;
				var g = f.accountLid, h = f.newRemote;
				if (g != null && (t.accountLid = g), h == null) return;
				d ? (t.preMatChat = t.author, t.author = h) : (t.preMatChat = _, t.chat = h);
			}
		}
	}
	l.maybeProcessMsgInfoForLid = _;
}), 98);
