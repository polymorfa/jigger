__d("WAWebHandleRetryRequest", [
	"WAJids",
	"WALogger",
	"WAWebApiContact",
	"WAWebApiDeviceList",
	"WAWebHandleRetryRequestNonMigratedLog",
	"WAWebLid1X1MigrationGating",
	"WAWebLidMigrationUtils",
	"WAWebMaibaWASSMigration",
	"WAWebManageE2ESessionsJob",
	"WAWebMdRetryFromUnknownDeviceWamEvent",
	"WAWebMessageQueue",
	"WAWebMsgKey",
	"WAWebPostMessageHighRetryCountMetric",
	"WAWebProcessRetryKeyBundle",
	"WAWebSchemaChat",
	"WAWebSchemaMessage",
	"WAWebSendMsgQueueMap",
	"WAWebSendRetryMsgJob",
	"WAWebSessionScope",
	"WAWebSignalCommonUtils",
	"WAWebSignalProtocolStore",
	"WAWebSimpleSignalPNToFBIDMigration",
	"WAWebStatusSessionGatingUtils",
	"WAWebUpdateLocalSignalSession",
	"WAWebUserPrefsMeUser",
	"WAWebVoipStackInterface",
	"WAWebWamEnumDeviceType",
	"WAWebWidFactory",
	"cr:10198",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S;
	async function R(t) {
		var a = await E(t);
		if (a.error) {
			o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["handleMessageRetryRequest: no chat info found for incoming retry request. error: ", ""])), a.error).sendLogs(await o("WAWebHandleRetryRequestNonMigratedLog").buildNoChatInfoSendLogsArg(t));
			return;
		}
		var i = a.accountLid, l = a.chat, d = a.from, m = a.lidOrigin, p = t.from;
		t.from = d;
		var _ = t.participant, f = t.recipient, g = t.retryCount, h = t.type, y = (p.isStatus() || l.isStatus()) && o("WAWebStatusSessionGatingUtils").shouldUseStatusSessionForOutgoingMessage() ? o("WAWebSessionScope").SessionScope.STATUS : o("WAWebSessionScope").SessionScope.DEFAULT, C = p.isStatus() || l.isStatus() ? y : void 0;
		return o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
			"handleRetryRequest: receivedFrom=",
			" chat=",
			" sessionScope=",
			""
		])), p.toLogString(), l.toLogString(), y), o("WAWebMessageQueue").onMessageQueue({
			chatWid: l,
			isOffline: !1,
			msgCategory: null,
			action: async function() {
				var e = await L(l, t, y);
				if (e != null) {
					var a = e.identity, s = e.isLidBot, b = e.originalMsgId, v = e.requester;
					r("gkx")("26258") || n("cr:10198") == null || n("cr:10198").injectDebug(l, "RetryReceiptReceived", "originalMsgId:" + b + " - requester:" + v.toString());
					try {
						if (h === "enc_rekey_retry") {
							var S = await o("WAWebVoipStackInterface").getVoipStackInterface();
							await (S == null ? void 0 : S.resendEncRekeyRetry(d.toString({ legacy: !0 }), g));
						} else if (h !== "voip_1x1_retry") {
							var R = await o("WAWebProcessRetryKeyBundle").getMsgIfAuthorized({
								chat: l,
								identity: a,
								originalMsgId: b,
								requester: v,
								retryCount: g,
								sessionScope: C
							}), E = R == null ? o("WAWebApiContact").getAlternateDeviceWid(o("WAWebWidFactory").createDeviceWidFromWidOrThrow(v)) : null;
							if (E && (R = await o("WAWebProcessRetryKeyBundle").getMsgIfAuthorized({
								chat: l,
								identity: a,
								originalMsgId: b,
								requester: E,
								retryCount: g,
								sessionScope: C
							})), !R) {
								var k;
								o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["handleMessageRetryRequest ", " retry not authorized"])), (k = R) == null ? void 0 : k.type);
								return;
							}
							var I = {
								to: p,
								participant: _,
								msgRecord: R,
								retryCount: g,
								isLidBot: s,
								sessionScope: y
							};
							f && (I.recipient = f), m && (I.lidOrigin = m), i && (I.accountLid = i), await o("WAWebSendRetryMsgJob").sendRetry(I);
						}
					} catch (e) {
						o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["handleMessageRetryRequest error: ", ""])), e);
					}
				}
			}
		});
	}
	async function L(e, t, n) {
		var r = t.from, a = t.isLid, i = a === void 0 ? !1 : a, l = t.offline, s = t.originalMsgId, u = t.participant, c = t.retryCount;
		if (c >= o("WAWebPostMessageHighRetryCountMetric").MAX_RETRY) {
			o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
				"handleRetryRequest refusing retry attempt #",
				" for ",
				""
			])), c, e.toLogString()).sendLogs("retry-request-cap-exhausted", { sampling: .01 });
			return;
		}
		var g = e.isUser() ? r : u;
		if (!g) {
			o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose(["handleRetryRequest: no requester found for incoming retry request."])));
			return;
		}
		var h = g.device || 0;
		try {
			var y = await o("WAWebApiDeviceList").hasDevice(g, h);
			if (!y) {
				o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
					"handleRetryRequest: device ",
					" not found for ",
					""
				])), h, g.user), o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
					"handleRetryRequest: no device found for isUser:",
					" lid:",
					" isLidBot:",
					""
				])), e.isUser(), g.isLid(), i).sendLogs("no-device-found-for-retry-request", { sampling: .001 }), new (o("WAWebMdRetryFromUnknownDeviceWamEvent")).MdRetryFromUnknownDeviceWamEvent({
					offline: l,
					senderType: h === o("WAJids").DEFAULT_DEVICE_ID ? o("WAWebWamEnumDeviceType").DEVICE_TYPE.PRIMARY : o("WAWebWamEnumDeviceType").DEVICE_TYPE.COMPANION
				}).commit();
				return;
			}
			return await o("WAWebSendMsgQueueMap").sendMsgQueueMap.enqueue(e.toString(), async function() {
				await o("WAWebUpdateLocalSignalSession").updateLocalSignalSession(e, t, n), await o("WAWebManageE2ESessionsJob").ensureE2ESessions({
					identityChanged: !1,
					sessionScope: n,
					wids: [g]
				});
				var r = await o("WAWebSignalProtocolStore").getPersistSignalProtocolStore().getIdentityWithRowId(o("WAWebSignalCommonUtils").createSignalAddress(g));
				return {
					originalMsgId: s,
					chat: e,
					requester: g,
					isLidBot: i,
					identity: r
				};
			});
		} catch (e) {
			o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose(["handleRetryRequest error: ", ""])), e);
		}
	}
	async function E(e) {
		var t, n, a, i = k(e);
		if (o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
			"getActualChatInfo: retry request from ",
			", target chat: ",
			", type: ",
			`,
      participant: `,
			", recipient: ",
			""
		])), e.from.toLogString(), (t = i) == null ? void 0 : t.toLogString(), e.type, (n = e.participant) == null ? void 0 : n.toLogString(), (a = e.recipient) == null ? void 0 : a.toLogString()), i == null) return o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose(["getActualChatInfo: no target chat found"]))), { error: "no_target_chat" };
		if (i = o("WAWebSimpleSignalPNToFBIDMigration").maybeReplaceFbidWithDeprecatedBotPn(i), i = o("WAWebMaibaWASSMigration").resolveMaibaAiHubFbidToLidOrChatId(i), i.isUser()) {
			o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose(["getActualChatInfo: this is a user chat"])));
			var l = !o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() && i.isLid();
			if (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() || l) {
				var s;
				o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose(["getActualChatInfo: in migrated/pre-migrated flow"])));
				var u = new (r("WAWebMsgKey"))({
					fromMe: !0,
					remote: i,
					id: e.originalMsgId
				}), c = [u, o("WAWebLidMigrationUtils").getAlternateMsgKey(u)].filter(Boolean).map(function(e) {
					return e.toString();
				}), d;
				if (e.type === "retry") {
					var m = (await o("WAWebSchemaMessage").getMessageTable().bulkGet(c, !1)).filter(Boolean);
					if (m.length === 0) return o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose(["getActualChatInfo: could not find messages"]))), { error: o("WAWebHandleRetryRequestNonMigratedLog").selectRetryErrorType(e) };
					m.length > 1 && o("WALogger").WARN(v || (v = babelHelpers.taggedTemplateLiteralLoose(["getActualChatInfo: multiple messages found"]))), d = o("WAWebWidFactory").createWidFromWidLike(m[0].to);
				} else e.type, d = e.from;
				var p;
				if (e.from.isBot()) p = e.from;
				else {
					var _ = o("WAWebWidFactory").asUserWidOrThrow(e.from);
					p = d.isLid() ? o("WAWebLidMigrationUtils").toLid(_) : o("WAWebLidMigrationUtils").toPn(_);
				}
				if (p == null) return { error: "empty_from_user" };
				var f = o("WAWebWidFactory").createDeviceWidFromUserAndDevice(p.user, p.server, (s = e.from.device) != null ? s : 0), S = await o("WAWebSchemaChat").getChatTable().get(d.toString()), R = S == null ? void 0 : S.lidOriginType, L = (S == null ? void 0 : S.accountLid) != null ? o("WAWebWidFactory").createWidFromWidLike(S.accountLid) : void 0;
				return {
					chat: d,
					from: f,
					lidOrigin: R,
					accountLid: L
				};
			}
		}
		return {
			chat: i,
			from: e.from
		};
	}
	function k(e) {
		var t = e.from, n = e.recipient;
		if (t.isBot() && n != null) return n;
		if (t.isUser()) {
			var r = o("WAWebWidFactory").asUserWidOrThrow(t);
			if (o("WAWebUserPrefsMeUser").isMeAccount(r)) {
				if (!n) {
					var a;
					return o("WALogger").WARN(S || (S = babelHelpers.taggedTemplateLiteralLoose([
						"getTargetChat: from is a peer device, but without recipient, isLid: ",
						", peer device: ",
						", retryCount: ",
						", hasKeyBundle: ",
						""
					])), t.isLid(), (a = t.device) != null ? a : "primary", e.retryCount, e.keyBundle != null), null;
				}
				return n;
			}
			return o("WAWebWidFactory").asUserWidOrThrow(r);
		}
		return t;
	}
	l.handleRetryRequest = R, l.getTargetChat = k;
}), 98);
