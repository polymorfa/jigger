__d("WAWebSendMsgCreateFanoutStanza", [
	"WABase64",
	"WACryptoHmac",
	"WALogger",
	"WAWap",
	"WAWebABProps",
	"WAWebAdvSignatureApi",
	"WAWebApiCoexV2RelayReceiptStore",
	"WAWebApiContact",
	"WAWebApiDeviceList",
	"WAWebApiMessageInfoStore",
	"WAWebBackendJobs.flow",
	"WAWebBackendJobsCommon",
	"WAWebBotBaseGating",
	"WAWebBotModeSelectionTypes",
	"WAWebBotTypes",
	"WAWebBotUtils",
	"WAWebChatCollection",
	"WAWebChatThreadLogging",
	"WAWebCoexV2BotWid",
	"WAWebCoexV2GatingUtils",
	"WAWebCoexV2HostedContactUtils",
	"WAWebCommsAckParser",
	"WAWebCommsWapMd",
	"WAWebContactCollection",
	"WAWebDeviceSentMessageProtoUtils",
	"WAWebE2EProtoGenerator",
	"WAWebE2EProtoUtils",
	"WAWebEncryptMsgProtobuf",
	"WAWebHandleMsgCommon",
	"WAWebHandleMsgTypes.flow",
	"WAWebICDCMetaApi",
	"WAWebLid1X1MigrationGating",
	"WAWebLidMigrationUtils",
	"WAWebManageE2ESessionsJob",
	"WAWebMessagingGatingUtils",
	"WAWebMsgFanoutTypes",
	"WAWebMsgGetters",
	"WAWebMsgRcatUtils",
	"WAWebPQGatingUtils",
	"WAWebPostPrekeysDepletionMetric",
	"WAWebReportingTokenUtils",
	"WAWebScheduledMsgStanzaContributor",
	"WAWebSendMsgCommonApi",
	"WAWebSendMsgCtwaAttributionNode",
	"WAWebSendMsgMetaNode",
	"WAWebSessionScope",
	"WAWebSignalProtocolStore",
	"WAWebSignalSessionApi",
	"WAWebSimpleSignalDowngradeStore",
	"WAWebSimpleSignalPNToFBIDMigration",
	"WAWebThreadMsgUtils",
	"WAWebTrustedContactsUtils",
	"WAWebUserPrefsIndexedDBStorage",
	"WAWebUserPrefsMeUser",
	"WAWebUsernameGatingUtils",
	"WAWebUsernameTypes",
	"WAWebWamEnumMessageType",
	"WAWebWamEnumPrekeysFetchContext",
	"WAWebWamNumberToSizeBucket",
	"WAWebWasaHatchOutboundWrapper",
	"WAWebWidFactory",
	"WAWebWidToJid",
	"err",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v;
	function S(e, t, n) {
		return {
			ciphertext: t,
			isPqSession: o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(t),
			participant: e,
			type: n
		};
	}
	async function R(e, t) {
		var n = t.sessionScope;
		if (n != null && n !== o("WAWebSessionScope").SessionScope.DEFAULT || t.fanoutType !== o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT || e.isHosted() || e.isBot() || e.isFbidBot() || !o("WAWebPQGatingUtils").isPq1on1MessageEnabled()) return n;
		var r = await o("WAWebSignalSessionApi").hasSignalSessions([e], o("WAWebSessionScope").SessionScope.PQ), a = r[0];
		return a ? o("WAWebSessionScope").SessionScope.PQ : n;
	}
	async function L(t, n, a, i, l, u, c, d, m, p) {
		var _, f = (m == null ? void 0 : m.kind) === "schedule" ? m.originalMediaType : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(i), g = o("WAWebBackendJobsCommon").nativeFlowNameTypeFromProtobuf(i), h = o("WAWebBotBaseGating").isBotEnabled() && ((_ = t.invokedBotWid) == null ? void 0 : _.isBot()) === !0, y = o("WAWebBotBaseGating").isBotEnabled() && o("WAWebMsgGetters").getIsBotFeedbackMessage(t), C = o("WAWebBotBaseGating").isBotEnabled() && B(t, n), b = y && n.isBot() || C, v = y && !n.isBot() && !C, L = o("WAWebMsgGetters").getIsRevokeForMsgFromOrDeliveredToBot(t), T = o("WAWebSimpleSignalPNToFBIDMigration").getFbidBotPersonaType(n), $ = await k(n, i), N = $ ? o("WAWebUserPrefsMeUser").getMaybeMeLidUser() : null, M = $ && N != null;
		if (l.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT && a.length === 1 && o("WAWebSendMsgCommonApi").isPrimaryDevice(a[0]) && !v && !o("WAWebBotUtils").isMetaAiBot(n) && !M) {
			var w = a[0], A = o("WAWebUserPrefsMeUser").isMeAccount(w) ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(i, n) : i, F = A;
			w.isBot() && b && (F = await o("WAWebE2EProtoGenerator").updateBotInvokeMsgProtoCopyForCapi({
				message: A,
				mentionedJidList: t.mentionedJidList
			})), o("WAWebWasaHatchOutboundWrapper").shouldWrapHatchOutbound(n, w) && (F = await o("WAWebWasaHatchOutboundWrapper").wrapHatchOutboundMessage({
				currentStanzaId: t.id.id,
				innerMessage: F
			}));
			var O = o("WAWebMessagingGatingUtils").isSimpleSignalEnabled() && d && (w.isHosted() || w.user === n.user && o("WAWebSendMsgCommonApi").isPrimaryDevice(w)), W = await R(w, l), q = await o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(w, 0, F, t, c, W, O), U = q.ciphertext, V = q.type, H = null;
			return (b || T != null) && (H = o("WAWap").wap("bot", {
				type: b ? "feedback" : o("WAWap").DROP_ATTR,
				persona_type: T ? o("WAWap").CUSTOM_STRING(T) : o("WAWap").DROP_ATTR
			})), {
				deviceEncs: p ? [S(w, U, V)] : [],
				shouldHaveIdentity: V === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg,
				body: o("WAWap").wap("enc", {
					v: o("WAWap").CUSTOM_STRING(o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString()),
					type: o("WAWap").CUSTOM_STRING(V),
					session_type: o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(U) ? o("WAWap").CUSTOM_STRING("pq") : o("WAWap").DROP_ATTR,
					state: O && V === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg ? o("WAWap").CUSTOM_STRING("false") : o("WAWap").DROP_ATTR,
					mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(f),
					"decrypt-fail": o("WAWebBackendJobsCommon").encodeMaybeDecryptFail(o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(i)),
					native_flow_name: o("WAWebBackendJobsCommon").encodeMaybeNativeFlowName(g)
				}, U),
				botBody: H
			};
		}
		var G = !1, z = a.map(async function(r) {
			var a = o("WAWebUserPrefsMeUser").isMeAccount(r) ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(i, n) : i, m = l.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT ? o("WAWebWidFactory").asUserWidOrThrow(r) : o("WAWebWidFactory").asUserWidOrThrow(n);
			await o("WAWebICDCMetaApi").populateICDCMeta(m, a);
			var _ = u == null ? void 0 : u.get(o("WAWebWidToJid").widToUserJid(m)), y = _ != null ? o("WAWap").wap("content_binding", null, _) : null;
			try {
				var C = r.isBot() && (h || v || L), b = await D(a, r, t, C, M);
				if (o("WAWebWasaHatchOutboundWrapper").shouldWrapHatchOutbound(n, r)) try {
					b = await o("WAWebWasaHatchOutboundWrapper").wrapHatchOutboundMessage({
						currentStanzaId: t.id.id,
						innerMessage: b
					});
				} catch (e) {
					throw e instanceof o("WAWebWasaHatchOutboundWrapper").WAWebWasaHatchWrapError ? e : new (o("WAWebWasaHatchOutboundWrapper")).WAWebWasaHatchWrapError("WASA Hatch outbound wrap failed", e);
				}
				var E = o("WAWebMessagingGatingUtils").isSimpleSignalEnabled() && d && (r.isHosted() || r.user === n.user && o("WAWebSendMsgCommonApi").isPrimaryDevice(r)), k = await R(r, l), I = await o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(r, 0, b, t, c, k, E), T = I.ciphertext, x = I.type;
				x === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg && (G = !0);
				var $ = o("WAWap").wap("enc", {
					v: o("WAWap").CUSTOM_STRING(o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString()),
					type: o("WAWap").CUSTOM_STRING(x),
					session_type: o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(T) ? o("WAWap").CUSTOM_STRING("pq") : o("WAWap").DROP_ATTR,
					state: E && x === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg ? o("WAWap").CUSTOM_STRING("false") : o("WAWap").DROP_ATTR,
					mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(f),
					"decrypt-fail": o("WAWebBackendJobsCommon").encodeMaybeDecryptFail(o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(i)),
					native_flow_name: o("WAWebBackendJobsCommon").encodeMaybeNativeFlowName(g)
				}, T);
				return M && r.isFbidBot() ? {
					coexAgentWid: r,
					coexEncType: x,
					coexSharedEnc: $,
					node: null,
					shouldFanoutToBot: C
				} : {
					deviceEnc: p ? S(r, T, x) : null,
					shouldFanoutToBot: C,
					node: o("WAWap").wap("to", { jid: o("WAWebCommsWapMd").DEVICE_JID(r) }, $, y)
				};
			} catch (t) {
				if (t instanceof o("WAWebWasaHatchOutboundWrapper").WAWebWasaHatchWrapError) throw t;
				return o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
					"encryptAndSendUserMsg: encryption fail for ",
					": ",
					""
				])), String(r), t), o("WAWebSendMsgCommonApi").isPrimaryDevice(r) && o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["encryptAndSendUserMsg: encryption fail for primary device: ", ""])), t).tags("messaging").sendLogs("encryption-fail-for-primary-device"), null;
			}
		}), j = await Promise.all(z), K = E(j), Q = K.botSuccessNodes, X = K.coexAgentWids, Y = K.coexEncType, J = K.coexSharedEnc, Z = K.deviceEncs, ee = K.successNodes;
		if (I(M, X.length)) return Promise.reject(r("err")("[messaging] encryptAndSendUserMsg: coexv2 user:agent encryption fail for agent copy"));
		if (ee.length > 0 || Q.length > 0 || X.length > 0) {
			var te = P(!1, n, t);
			if (M && X.length > 0) var ne = o("WAWebMsgGetters").getMessageSecret(t) != null, re = X.map(function(e) {
				return e.toString();
			}).join(",");
			return {
				deviceEncs: Z,
				body: ee.length > 0 ? o("WAWap").wap("participants", null, ee) : null,
				botBody: x({
					agentEngagementType: te,
					botSuccessNodes: Q,
					coexAgentWids: X,
					coexSelfLid: N,
					coexSharedEnc: J,
					coexV2UserAgentSend: M,
					isBotFeedbackMessage: y,
					isBotFeedbackMessageInAgentChat: b,
					personaType: T != null ? T : null
				}),
				shouldHaveIdentity: G
			};
		}
		return Promise.reject(r("err")("[messaging] encryptAndSendUserMsg: encryption fail for all devices"));
	}
	function E(e) {
		var t = [], n = [], r = [], a = [], i = null, l = null;
		return e.forEach(function(e) {
			if (e != null) {
				if (e.coexSharedEnc != null && e.coexAgentWid != null) {
					i == null ? (i = e.coexSharedEnc, l = e.coexEncType, r.push(e.coexAgentWid)) : o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[coexv2] user:agent send has multiple agent devices; relaying only the first"]))).sendLogs("coexv2-user-agent-multi-device-dropped");
					return;
				}
				var s = e.node;
				s != null && (e.shouldFanoutToBot ? n.push(s) : (t.push(s), e.deviceEnc != null && a.push(e.deviceEnc)));
			}
		}), {
			botSuccessNodes: n,
			coexAgentWids: r,
			coexEncType: l,
			coexSharedEnc: i,
			deviceEncs: a,
			successNodes: t
		};
	}
	async function k(e, t) {
		return o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled() && e.isFbidBot() && !e.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) && M(t) && await A();
	}
	function I(e, t) {
		return e && t === 0;
	}
	function T(e, t) {
		var n, r = o("WAWebE2EProtoGenerator").sanitizeCoexV2RelayMessage(e);
		return ((n = r.messageContextInfo) == null ? void 0 : n.botMessageSecret) != null && (r.messageContextInfo = babelHelpers.extends({}, r.messageContextInfo, { botMessageSecret: null })), t != null && (r.messageContextInfo = babelHelpers.extends({}, r.messageContextInfo, { messageSecret: t })), r;
	}
	async function D(e, t, n, r, a) {
		var i = a && t.isFbidBot(), l = e;
		return r && !i && (l = await o("WAWebE2EProtoGenerator").updateBotInvokeMsgProtoCopyForCapi({
			message: e,
			botMessageSecret: n.botMessageSecret,
			mentionedJidList: n.mentionedJidList
		})), t.isFbidBot() && (l = o("WAWebE2EProtoGenerator").updateFbidBotProtobuf(l)), t.isBot() && (l = o("WAWebE2EProtoGenerator").updateBotProtobuf(l)), i && (l = T(l, o("WAWebMsgGetters").getMessageSecret(n))), l;
	}
	function x(e) {
		var t = e.agentEngagementType, n = e.botSuccessNodes, r = e.coexAgentWids, a = e.coexSelfLid, i = e.coexSharedEnc, l = e.coexV2UserAgentSend, s = e.isBotFeedbackMessage, u = e.isBotFeedbackMessageInAgentChat, c = e.personaType;
		return l && i != null && r.length > 0 ? $({
			agentEngagementType: t,
			agentWids: r,
			isFeedback: s,
			personaType: c,
			selfLid: a,
			sharedEnc: i
		}) : n.length > 0 || u ? o("WAWap").wap("bot", {
			type: s ? "feedback" : o("WAWap").DROP_ATTR,
			agent_engagement_type: t != null ? o("WAWap").CUSTOM_STRING(t) : o("WAWap").DROP_ATTR
		}, n) : null;
	}
	function $(e) {
		var t = e.agentEngagementType, n = e.agentWids, r = e.isFeedback, a = e.personaType, i = e.selfLid, l = e.sharedEnc, s = new Set(), u = [];
		if (i != null) {
			var c = o("WAWebCommsWapMd").DEVICE_JID(i);
			s.add(c.toString()), u.push(o("WAWap").wap("to", { jid: c }));
		}
		for (var d of n) {
			var m = o("WAWebCommsWapMd").DEVICE_JID(d), p = m.toString();
			s.has(p) || (s.add(p), u.push(o("WAWap").wap("to", { jid: m })));
		}
		return o("WAWap").wap("bot", {
			type: r ? "feedback" : o("WAWap").DROP_ATTR,
			agent_engagement_type: t != null ? o("WAWap").CUSTOM_STRING(t) : o("WAWap").DROP_ATTR,
			persona_type: a != null ? o("WAWap").CUSTOM_STRING(a) : o("WAWap").DROP_ATTR
		}, [].concat(u, [l]));
	}
	function P(e, t, n) {
		return e ? "member" : t != null && t.isBot() ? "direct_chat" : n && o("WAWebMsgGetters").getIsBotQuery(n) ? "invoked" : null;
	}
	var N = [
		"viewOnceMessage",
		"viewOnceMessageV2",
		"viewOnceMessageV2Extension",
		"liveLocationMessage",
		"sendPaymentMessage",
		"requestPaymentMessage",
		"declinePaymentRequestMessage",
		"cancelPaymentRequestMessage",
		"paymentInviteMessage",
		"callLogMesssage",
		"bcallMessage",
		"scheduledCallCreationMessage",
		"scheduledCallEditMessage"
	];
	function M(e) {
		var t, n, r, o, a, i, l = (t = (n = e.deviceSentMessage) == null ? void 0 : n.message) != null ? t : (r = e.ephemeralMessage) == null ? void 0 : r.message;
		return l != null ? M(l) : ((o = e.locationMessage) == null ? void 0 : o.isLive) === !0 || ((a = e.eventMessage) == null ? void 0 : a.isScheduleCall) === !0 || ((i = e.protocolMessage) == null ? void 0 : i.botFeedbackMessage) != null ? !1 : !N.some(function(t) {
			return e[t] != null;
		});
	}
	function w(e, t, n) {
		return o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled() && n.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT && n.isResendingMsg !== !0 && t.isUser() && !t.isBot() && !t.isFbidBot() && M(e);
	}
	async function A() {
		try {
			var e = await o("WAWebApiDeviceList").getMyDeviceList();
			return e.devices.some(function(e) {
				return e.isHosted === !0;
			});
		} catch (e) {
			return o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[coexv2] gate: failed to read self device list"]))).catching(r("getErrorSafe")(e)).sendLogs("coexv2-self-device-list-read-failed"), !1;
		}
	}
	function F(e, t) {
		var n = e == null ? void 0 : e.accountLid, r = n != null && n.isLid() ? n : o("WAWebLidMigrationUtils").toUserLid(t);
		return r == null && o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[coexv2] relay: peer is CoExV2 but has no LID; dropping peer <to>"]))).sendLogs("coexv2-relay-peer-lid-missing"), r;
	}
	async function O(e, t, n, r, a) {
		if (!w(e, t, a)) return null;
		var i = await Promise.all([
			A(),
			o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Hosted(n),
			o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(n)
		]), l = i[0], s = i[1], u = i[2];
		if (!l && !s) return null;
		var c = l ? o("WAWebUserPrefsMeUser").getMaybeMeLidUser() : null, d = s && !u ? F(r, t) : null, p = d != null && await o("WAWebCoexV2HostedContactUtils").isPeerCoexV2Blocked(d);
		s && (u || p) && o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[coexv2] relay: peer is blocked; dropping peer <to>"]))).sendLogs("coexv2-relay-peer-blocked");
		var _ = p ? null : d;
		return c == null && _ == null ? null : {
			peerLid: _,
			selfLid: c
		};
	}
	function B(e, t) {
		var n;
		return o("WAWebMsgGetters").getIsBotFeedbackMessage(e) && !!(e.bizBotType && (n = e.protocolMessageKey) != null && n.remote.equals(t));
	}
	function W(e) {
		var t;
		if (e.subtype === "bot_request_welcome") t = "request_welcome";
		else if (e.botMsgBodyType != null) e: {
			if (e.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.PROMPT) {
				t = "prompt";
				break e;
			}
			if (e.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.COMMAND) {
				t = "command";
				break e;
			}
			if (e.botMsgBodyType === o("WAWebBotTypes").BotMsgBodyType.VOICE) {
				o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[bot] outgoing voice message is not supported"])));
				break e;
			}
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e.botMsgBodyType);
		}
		return t;
	}
	async function q(e, t, n, r, o, a, i, l) {
		var s = await O(t, n, r, o, a);
		if (s == null) return null;
		var u = s.peerLid, c = s.selfLid, d = [c, u].filter(Boolean), m = await U(e, t, i, d, null, l);
		return m == null ? null : {
			node: m.node,
			shouldHaveIdentity: m.shouldHaveIdentity,
			peerLid: u,
			selfLid: c
		};
	}
	async function U(e, t, n, a, i, l) {
		try {
			await o("WAWebManageE2ESessionsJob").ensureE2ESessions({
				identityChanged: !1,
				sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
				wids: [o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID]
			});
			var s = o("WAWebE2EProtoGenerator").sanitizeCoexV2RelayMessage(t), u = await o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID, 0, s, e, n, o("WAWebSessionScope").SessionScope.DEFAULT, !0), c = u.ciphertext, d = u.type, m = new Set(), p = [];
			for (var f of a) {
				var g = o("WAWebCommsWapMd").DEVICE_JID(f), h = g.toString();
				m.has(h) || (m.add(h), p.push(o("WAWap").wap("to", { jid: g })));
			}
			var y = o("WAWap").wap("enc", {
				v: o("WAWap").CUSTOM_STRING(o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString()),
				type: o("WAWap").CUSTOM_STRING(d),
				session_type: o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(c) ? o("WAWap").CUSTOM_STRING("pq") : o("WAWap").DROP_ATTR,
				state: d === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg ? o("WAWap").CUSTOM_STRING("false") : o("WAWap").DROP_ATTR,
				count: i != null && i > 0 ? o("WAWap").INT(i) : o("WAWap").DROP_ATTR
			}, c), C = o("WAWap").wap("bot", {
				type: o("WAWap").MAYBE_CUSTOM_STRING(l == null ? void 0 : l.type),
				local_automated_type: o("WAWap").MAYBE_CUSTOM_STRING(l == null ? void 0 : l.localAutomatedType),
				client_thread_id: o("WAWap").MAYBE_CUSTOM_STRING(l == null ? void 0 : l.clientThreadId),
				mode_selection: o("WAWap").MAYBE_CUSTOM_STRING(l == null ? void 0 : l.modeSelection),
				mode_selected: o("WAWap").MAYBE_CUSTOM_STRING(l == null ? void 0 : l.modeSelected)
			}, [].concat(p, [y]));
			return {
				node: C,
				shouldHaveIdentity: d === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg,
				type: d
			};
		} catch (e) {
			return o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["[coexv2] failed to build relay bot node"]))).catching(r("getErrorSafe")(e)).sendLogs("coexv2-relay-bot-node-build-failed"), null;
		}
	}
	async function V(e) {
		var t, n, a, i, l, s = e.chatId, u = e.collectDeviceEncs, c = u === void 0 ? !1 : u, d = e.deviceList, m = e.groupData, p = e.metricReporter, _ = e.msgProtobuf, C = e.msgRecord, b = e.option, v = e.scheduledMsgMetadata, S = C.data, R = S.from, E = S.id, k = S.subtype, I = S.to, T = o("WAWebABProps").getABPropConfigValue("web_coex_simple_signal_enabled") === 1 && I.isUser() && ((t = o("WAWebContactCollection").ContactCollection.get(I)) == null || (t = t.privacyMode) == null ? void 0 : t.hostStorage) === o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook && !o("WAWebSimpleSignalDowngradeStore").isCoexUserDowngradedFromSimpleSignal(I);
		T && o("WAWebMessagingGatingUtils").isSimpleSignalEnabled() && await Promise.all(d.filter(function(e) {
			return !e.isHosted() && e.user === I.user && o("WAWebSendMsgCommonApi").isPrimaryDevice(e);
		}).map(function(e) {
			return o("WAWebSignalSessionApi").deleteRemoteSession(e);
		}));
		try {
			var D, x;
			(D = p.sendPerfReporter) == null || D.startPrekeysFetchStage();
			var $ = await o("WAWebManageE2ESessionsJob").ensureE2ESessions({
				identityChanged: !1,
				sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
				wids: d
			}), P = $ == null ? void 0 : $.missedPrekeyCount;
			if (P != null) {
				var N;
				(N = p.sendPerfReporter) == null || N.setFetchedPrekeyCount(P);
			}
			(x = p.sendPerfReporter) == null || x.postPrekeysFetchStage(), o("WAWebPostPrekeysDepletionMetric").maybePostPrekeysDepletionMetric({
				count: $ == null ? void 0 : $.depletedPrekeyCount,
				prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext").PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
				messageType: b.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT ? o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP : o("WAWebWamEnumMessageType").MESSAGE_TYPE.INDIVIDUAL,
				deviceSizeBucket: b.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT ? r("WAWebWamNumberToSizeBucket")(d.length) : null
			}), b.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT && (b.sessionScope == null || b.sessionScope === o("WAWebSessionScope").SessionScope.DEFAULT) && o("WAWebPQGatingUtils").isPq1on1MessageEnabled() && await o("WAWebManageE2ESessionsJob").ensureE2ESessions({
				identityChanged: !1,
				sessionScope: o("WAWebSessionScope").SessionScope.PQ,
				wids: d
			});
		} catch (e) {
			o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["ensureE2ESessions with error"]))).tags("messaging");
		}
		var M = B(S, s), w = o("WAWebBotBaseGating").isBotEnabled() && o("WAWebMsgGetters").getIsBotFeedbackMessage(S) && s.isBot() || M, A = o("WAWebThreadMsgUtils").getMsgAiThread(S), F = A != null ? await o("WAWebChatThreadLogging").getThreadIDHMAC(A) : null, O = d;
		b.isResendingMsg && (O = await o("WAWebSendMsgCommonApi").filterDeviceWithChangedIdentity(C, d));
		var U = O.map(function(e) {
			return {
				msgKey: E,
				receiverId: e
			};
		});
		await o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(U), (n = p.sendPerfReporter) == null || n.startClientEncryptStage();
		var V = await o("WAWebMsgRcatUtils").genContentBindingForMsg(S, H(R, O)), z = o("WAWebMsgGetters").getWamEditType(S), j = await L(S, I, O, _, b, V, z, T, v, c);
		(a = p.sendPerfReporter) == null || a.postClientEncryptStage();
		var K = null;
		if (b.fanoutType === o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT) {
			var Q = (v == null ? void 0 : v.kind) === "schedule" ? v.originalMediaType : o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(_);
			K = o("WAWap").wap("enc", {
				v: o("WAWap").CUSTOM_STRING(o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString()),
				type: o("WAWap").CUSTOM_STRING(o("WAWebBackendJobs.flow").CiphertextType.Skmsg),
				mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(Q)
			});
		}
		var Y = o("WAWebE2EProtoUtils").getBizNativeFlowName(_), J = S.nativeFlowInteractiveMsg, Z, ee = o("WAWebContactCollection").ContactCollection.get(s), te = o("WAWebChatCollection").ChatCollection.get(s), ne = ee == null ? void 0 : ee.privacyMode;
		if (ne != null) {
			var re;
			Z = (re = o("WAWap")).wap("biz", {
				host_storage: re.INT(ne.hostStorage),
				actual_actors: re.INT(ne.actualActors),
				privacy_mode_ts: re.INT(ne.privacyModeTs),
				native_flow_name: re.MAYBE_CUSTOM_STRING(Y)
			});
		}
		var oe, ae, ie, le, se = o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated();
		if (o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
			"createFanoutMsgStanza: create fanout for a message. found chat: ",
			". found contact: ",
			`.
      is lid: `,
			". lid origin: ",
			". isLidMigrated: ",
			`
      contact has phone number: `,
			""
		])), te != null, ee != null, s.isLid(), te == null ? void 0 : te.lidOriginType, se, (ee == null ? void 0 : ee.phoneNumber) != null), s.isLid() && (((te == null ? void 0 : te.lidOriginType) == null || (te == null ? void 0 : te.lidOriginType) === o("WAWebUsernameTypes").LidOriginType.PNH_CTWA) && (ee == null ? void 0 : ee.shareOwnPn) !== !0 && (ee == null ? void 0 : ee.phoneNumber) != null && (oe = ee == null ? void 0 : ee.phoneNumber), o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() && (ee == null ? void 0 : ee.username) != null && (le = ee.username)), I.isLid() ? se && (te == null ? void 0 : te.lidOriginType) !== o("WAWebUsernameTypes").LidOriginType.PNH_CTWA && (ie = o("WAWebApiContact").getPhoneNumber(I)) : I.isUser() && te != null && te.accountLid && (ae = te == null ? void 0 : te.accountLid, ae.isLid() || o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose(["createFanoutMsgStanza: peerRecipientLid is not a LID: ", ""])), ae.toLogString()).sendLogs("peer-recipient-lid-not-lid-fanout")), Z == null && Y != null && J === !0) {
			var re;
			Z = (re = o("WAWap")).wap("biz", null, re.wap("interactive", {
				v: "1",
				type: re.CUSTOM_STRING("native_flow")
			}, re.wap("native_flow", { name: re.CUSTOM_STRING(Y) })));
		} else Z == null && Y != null && (Z = o("WAWap").wap("biz", { native_flow_name: o("WAWap").CUSTOM_STRING(Y) }));
		b.isResendingMsg || await o("WAWebSendMsgCommonApi").updateIdentityRange(C, O), await o("WAWebSignalProtocolStore").getSignalProtocolStore().flushBufferToDiskIfNotMemOnlyMode();
		var ue = o("WAWebSendMsgMetaNode").genMetaNode({
			chatId: s,
			groupData: m,
			includeAttributes: {
				origin: te == null ? void 0 : te.lidOriginType,
				hashedAiThreadId: F
			},
			msgProtobuf: _,
			msgRecord: C
		}), ce = v != null ? o("WAWebScheduledMsgStanzaContributor").genScheduledMsgMetaNode(v) : null, de = V == null ? void 0 : V.get(o("WAWebWidToJid").widToUserJid(o("WAWebWidFactory").asUserWidOrThrow(R))), me = de != null ? o("WAWap").wap("sender_content_binding", null, de) : null, pe = W(S), _e = M ? null : o("WAWebBotTypes").getBotLocalAutomatedType(S.bizBotType), fe, ge;
		if (o("WAWebBotBaseGating").isAiModeSelectorMessagingEnabled()) {
			var he = S.botModeOverride;
			if (he != null && he.length > 0 && o("WAWebBotBaseGating").isDynamicModeSelectorEnabled()) ge = String(he[0]);
			else {
				var ye = S.botModeSelection;
				if (ye != null && ye.length > 0) {
					var Ce = ye[0];
					Ce === o("WAWebBotModeSelectionTypes").BotUserSelectionMode.Default ? fe = "default" : Ce === o("WAWebBotModeSelectionTypes").BotUserSelectionMode.ThinkHard && (fe = "think_hard");
				}
			}
		}
		var be;
		(pe != null || _e != null || A != null || fe != null || ge != null) && (be = o("WAWap").wap("bot", {
			type: pe != null ? o("WAWap").CUSTOM_STRING(pe) : o("WAWap").DROP_ATTR,
			local_automated_type: _e != null ? o("WAWap").CUSTOM_STRING(_e) : o("WAWap").DROP_ATTR,
			client_thread_id: A != null ? o("WAWap").CUSTOM_STRING(A.key.id) : o("WAWap").DROP_ATTR,
			mode_selection: fe != null ? o("WAWap").CUSTOM_STRING(fe) : o("WAWap").DROP_ATTR,
			mode_selected: ge != null ? o("WAWap").CUSTOM_STRING(ge) : o("WAWap").DROP_ATTR
		}));
		var ve = !1;
		if (j.botBody == null) {
			var Se = {
				clientThreadId: A != null ? A.key.id : null,
				localAutomatedType: _e,
				modeSelected: ge,
				modeSelection: fe,
				type: pe
			}, Re = await q(S, _, I, s, te, b, z, Se);
			if (Re != null) {
				be = Re.node, ve = Re.shouldHaveIdentity;
				var Le = [Re.selfLid, Re.peerLid].filter(Boolean);
				try {
					await o("WAWebApiCoexV2RelayReceiptStore").createOrMergeCoexV2RelayReceipts(E.id, Le, S.t);
				} catch (e) {
					throw o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose(["[coexv2] failed to seed relay receipt rows"]))).catching(r("getErrorSafe")(e)).sendLogs("coexv2-relay-receipt-seed-failed"), e;
				}
			}
		}
		var Ee = null;
		if (j.shouldHaveIdentity || ve) {
			var ke = await o("WAWebAdvSignatureApi").getADVEncodedIdentity();
			Ee = o("WAWap").wap("device-identity", null, ke);
		}
		var Ie = await o("WAWebReportingTokenUtils").genReportingTokenBodyForStanza(S, _, E.toString()), Te = (i = await G(te)) != null ? i : await X(te, s), De;
		m != null && (De = (m == null ? void 0 : m.isLidAddressingMode) === !0 ? o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn);
		var xe = o("WAWebSendMsgCtwaAttributionNode").getCtwaAttributionNode(te), $e = o("WAWap").wap("message", {
			id: o("WAWap").CUSTOM_STRING(E.id),
			to: o("WAWebCommsWapMd").CHAT_JID(I),
			type: (l = v == null ? void 0 : v.originalStanzaType) != null ? l : o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(_),
			peer_recipient_lid: ae ? o("WAWebCommsWapMd").USER_JID(ae) : o("WAWap").DROP_ATTR,
			peer_recipient_pn: ie ? o("WAWebCommsWapMd").USER_JID(ie) : o("WAWap").DROP_ATTR,
			peer_recipient_username: le !== void 0 ? o("WAWap").CUSTOM_STRING(o("WAWebUsernameTypes").serializeUsername(le)) : o("WAWap").DROP_ATTR,
			edit: o("WAWebSendMsgCommonApi").editAttribute(_, k),
			device_fanout: b.isResendingMsg === !0 || w ? "false" : o("WAWap").DROP_ATTR,
			recipient_pn: oe ? o("WAWebCommsWapMd").USER_JID(oe) : o("WAWap").DROP_ATTR,
			addressing_mode: De != null ? o("WAWap").CUSTOM_STRING(De) : o("WAWap").DROP_ATTR
		}, j.body, j.botBody, K, Ee, Z, ue, ce, me, be, Ie, Te, xe);
		if (!I.isGroup() && !I.isStatus()) {
			var Pe;
			(Pe = p.sendReporter) == null || Pe.setOppositeHasUsername(le != null);
		}
		var Ne = o("WAWebCommsAckParser").toCoreAckTemplate({
			id: E.id,
			class: "message",
			from: S.to,
			participant: null
		});
		return {
			stanza: $e,
			ackTemplate: Ne,
			deviceEncs: j.deviceEncs
		};
	}
	function H(e, t) {
		var n = new Map();
		n.set(e.user, o("WAWebWidFactory").asUserWidOrThrow(e));
		for (var r of t) n.has(r.user) || n.set(r.user, o("WAWebWidFactory").asUserWidOrThrow(r));
		return Array.from(n.values());
	}
	async function G(e) {
		if (e == null) return null;
		var t = e.tcToken, n = e.tcTokenTimestamp;
		return t == null || n == null || o("WAWebTrustedContactsUtils").isTokenExpired(n, o("WAWebTrustedContactsUtils").TcTokenMode.Receiver) ? null : o("WAWap").wap("tctoken", null, t);
	}
	var z = null, j = null, K = new Map(), Q = 5;
	async function X(e, t) {
		if (o("WAWebABProps").getABPropConfigValue("wa_nct_token_send_enabled") !== !0 || !t.isRegularUser()) return null;
		var n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get("WAWebNctSalt");
		if (n == null) return o("WALogger").WARN(C || (C = babelHelpers.taggedTemplateLiteralLoose(["[nct-cstoken] no salt available in IndexedDB"]))), null;
		var r = e == null ? void 0 : e.accountLid;
		if (r == null) return o("WALogger").WARN(b || (b = babelHelpers.taggedTemplateLiteralLoose(["[nct-cstoken] recipientLid is null"]))), null;
		try {
			var a;
			n === z && j != null ? a = j : (a = o("WABase64").decodeB64(n), z = n, j = a, K.clear());
			var i = r.toString(), l = K.get(i);
			if (l != null) return o("WAWap").wap("cstoken", null, l);
			var s = new Uint8Array(await o("WACryptoHmac").hmacSha256(a, new TextEncoder().encode(i)));
			if (K.size >= Q) {
				var u = K.keys().next().value;
				u != null && K.delete(u);
			}
			return K.set(i, s), o("WAWap").wap("cstoken", null, s);
		} catch (e) {
			return o("WALogger").WARN(v || (v = babelHelpers.taggedTemplateLiteralLoose(["[nct-cstoken] generation failed - ", ""])), String(e)), null;
		}
	}
	l.classifyFanoutEncNodes = E, l.isCoexV2UserAgentSend = k, l.shouldRejectCoexV2UserAgentSend = I, l.genCoexV2UserAgentAgentProto = T, l.genBotFanoutContent = D, l.genCoexV2UserAgentBotBody = $, l.getBotAgentEngagementType = P, l.isSelfCoexV2Hosted = A, l.getIsBizBotFeedback = B, l.getBotStanzaType = W, l.genCoexV2RelayBotNodeForTargets = U, l.createFanoutMsgStanza = V, l.genCsTokenBody = X;
}), 98);
