__d("WAWebLogReceivedMessages", [
	"PaymentLinkWamLogger",
	"WALogger",
	"WATimeUtils",
	"WAWebAddonProcessMsgsUtils",
	"WAWebAfterReadUtils",
	"WAWebApiBulkGetChats",
	"WAWebBackendApi",
	"WAWebBoolFunc",
	"WAWebChatThreadLogging",
	"WAWebChatThreadLoggingUtils",
	"WAWebCoexV2WamClassification",
	"WAWebDBMsgUtils",
	"WAWebDBProcessReplyMsgs",
	"WAWebEphemeralityResolver",
	"WAWebGalaxyFlowWamLoggerUtils",
	"WAWebGatedMessageReceivedWamEvent",
	"WAWebInteractiveMessagesNativeFlowName",
	"WAWebLidAwareContactsDB",
	"WAWebLidMigrationUtils",
	"WAWebMessageReceiveWamEvent",
	"WAWebMsgGetters",
	"WAWebMsgType",
	"WAWebOrderDetailsReceivedWamLogger",
	"WAWebPaymentInfoReceivedWamLogger",
	"WAWebPaymentRequestWamLogger",
	"WAWebQbmIncomingMessageLogger",
	"WAWebRuntimeEnvironmentUtils",
	"WAWebSignupFlowLoggerLazy",
	"WAWebSignupQPLLogger",
	"WAWebStickerPremiumStatus",
	"WAWebUprReceivedWamLogger",
	"WAWebUserPrefsMeUser",
	"WAWebUsernameGatingUtils",
	"WAWebUsernameTypes",
	"WAWebWamAddressingModeUtils",
	"WAWebWamEnumChatGatedReason",
	"WAWebWamEnumChatOriginsType",
	"WAWebWamEnumRevokeType",
	"WAWebWamGroupMetadataMetricUtils",
	"WAWebWamGroupMetricCache",
	"WAWebWamMessageUtils",
	"WAWebWamMsgUtils",
	"WAWebWidFactory",
	"WAWebWorkerSafeBackendApi"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c = "💚";
	async function d(t) {
		await Promise.all(t.map(async function(t) {
			o("PaymentLinkWamLogger").shouldLogReceiverEvent(t) && await o("PaymentLinkWamLogger").genLogReceiveEvent({
				interaction_component: null,
				msg: t
			}, t.matchedText).catch(function(t) {
				o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["error logging payment link message receive: ", ""])), String(t));
			});
		}));
	}
	async function m(e, t, n) {
		var r, a = e.clientReceivedTsMillis, i = e.localAddressingMode, l = e.msgProcessStartTsMillis, s = e.msgs, u = e.offline, c = e.oppositeHasUsername, d = e.serverAddressingMode, m = e.tsMillis, p = o("WATimeUtils").unixTimeMs(), _ = await Promise.all([o("WAWebChatThreadLoggingUtils").getMeHasUsername(), o("WAWebChatThreadLoggingUtils").getMeHasUsernamePin()]), f = _[0], g = _[1], h = (r = n.get(o("WAWebUserPrefsMeUser").getMeUserOrThrow().toJid())) == null ? void 0 : r.ephemeralDuration;
		await Promise.all(s.map(async function(e, r) {
			var s = e.from;
			if (s != null) {
				var _ = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.OTHERS;
				s.isLid() && (_ = o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.LID_CTWA);
				var y = t[r];
				y != null && y.lidOriginType && (_ = y.lidOriginType === o("WAWebUsernameTypes").LidOriginType.PNH_CTWA ? o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.LID_CTWA : y.lidOriginType === o("WAWebUsernameTypes").LidOriginType.GENERAL ? o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE.OTHERS : (function() {
					throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + y.lidOriginType);
				})());
				var C = await o("WAWebChatThreadLoggingUtils").getOppositeVisibleIdentification(s), b = s.isGroup() ? e.from.isLid() : o("WAWebWamMsgUtils").msgIsLid(e, s), v = new (o("WAWebMessageReceiveWamEvent")).MessageReceiveWamEvent({
					messageType: o("WAWebWamMsgUtils").getWamMessageType(e),
					messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
					messageIsInternational: o("WAWebMsgGetters").getIsInternational(e),
					messageIsOffline: u != null,
					isViewOnce: !!e.isViewOnce,
					isForwardedForward: o("WAWebMsgGetters").getNumTimesForwarded(e) > 1,
					isAReply: o("WAWebMsgGetters").getIsReply(e),
					editType: o("WAWebMsgGetters").getWamEditType(e),
					botType: o("WAWebWamMsgUtils").getWamBotType({
						chatId: s,
						bizBotType: e.bizBotType
					}),
					isAComment: o("WAWebMsgGetters").getType(e) === o("WAWebMsgType").MSG_TYPE.COMMENT,
					hasUsername: f,
					hasUsernamePin: g,
					chatOrigins: _,
					oppositeVisibleIdentification: C != null ? C : void 0,
					isLid: b,
					messageReceiveT0: 0,
					messageReceiveT1: 0,
					messageReceiveT2: 0
				}), S = o("WAWebWamMessageUtils").getVcardMsgWamData(e, "receive");
				if (S) {
					var R = S.lidOnlyVcardCount, L = S.pnAndLidVcardCount, E = S.pnOnlyVcardCount;
					v.receivedPhoneNumberContactSize = E, v.receivedUsernameContactSize = R, v.receivedPhoneNumberWithUsernameContactSize = L;
				}
				if (u != null && (v.offlineCount = u), !s.isGroup() && !s.isStatus()) {
					var k, I = (k = n.get(s.toJid())) == null ? void 0 : k.ephemeralDuration;
					I != null && (v.senderDefaultDisappearingDuration = I), h != null && (v.receiverDefaultDisappearingDuration = h), v.isLid = s.isLid(), c != null && o("WAWebUsernameGatingUtils").usernameAdoptionAndEngagementMonitoringEnabled() && (v.oppositeHasUsername = c);
				}
				o("WAWebMsgGetters").getIsRevoke(e) && (v.revokeType = e.subtype === "admin_revoke" || e.subtype === "admin" ? o("WAWebWamEnumRevokeType").REVOKE_TYPE.ADMIN : o("WAWebWamEnumRevokeType").REVOKE_TYPE.SENDER), a != null && (v.messageReceiveT0 = a - m, v.messageReceiveT1 = p - a, l != null && (v.messageQueueTime = l - a)), e.ephemeralDuration != null && e.ephemeralDuration > 0 && (v.ephemeralityDuration = e.ephemeralDuration);
				var T = e.afterReadDuration;
				T != null && o("WAWebAfterReadUtils").isAfterReadEnabled() && (v.isAfterRead = T > 0, v.afterReadDuration = T);
				var D = o("WAWebMsgGetters").getWamDisappearingModeInitiator(e);
				D != null && (v.disappearingChatInitiator = D);
				var x = o("WAWebMsgGetters").getWamDisappearingModeTrigger(e);
				x != null && (v.ephemeralityTriggerAction = x);
				var $ = o("WAWebMsgGetters").getWamDisappearingModeInitiatedByMe(e);
				$ != null && (v.ephemeralityInitiator = $);
				var P = o("WAWebWamMsgUtils").getWamAgentEngagementType(e);
				P != null && (v.agentEngagementType = P);
				var N = o("WAWebCoexV2WamClassification").getRecvWamE2eClassification(e.senderWithDevice, e.senderWithDevice, e.metaFrom), M = N.e2eSenderType, w = N.encryptionType;
				M != null && (v.e2eSenderType = M), w != null && (v.encryptionType = w);
				var A = await o("WAWebWamGroupMetadataMetricUtils").getGroupTypeFromChatWid(s);
				if (A != null && (v.typeOfGroup = A), d != null && (v.serverAddressingMode = o("WAWebWamAddressingModeUtils").getWamAddressingModeFromString(d)), i != null && (v.localAddressingMode = o("WAWebWamAddressingModeUtils").getWamAddressingModeFromString(i)), o("WAWebMsgGetters").getType(e) === o("WAWebMsgType").MSG_TYPE.STICKER && (v.stickerIsPremium = e.stickerPremiumStatus === o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM), s != null && s.isGroup()) {
					var F = await o("WAWebWamGroupMetadataMetricUtils").isCagFromChatWid(s), O = o("WAWebMsgGetters").getIsReaction(e);
					F != null && O != null && (v.isLid = F && O);
					var B = await o("WAWebWamGroupMetricCache").getGroupMetrics(s);
					(B == null ? void 0 : B.participantCount) != null && (v.participantCount = B.participantCount), (B == null ? void 0 : B.deviceCount) != null && (v.deviceCount = B.deviceCount), (B == null ? void 0 : B.deviceSizeBucket) != null && (v.deviceSizeBucket = B.deviceSizeBucket);
				}
				v.commit();
			}
		}));
	}
	async function p(e) {
		o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["getContactData: for ", " msgs"])), e.length);
		var t = new Set(e.filter(function(e) {
			return e.id.remote.isUser();
		}).map(function(e) {
			return e.id.remote.toJid();
		}));
		t.add(o("WAWebUserPrefsMeUser").getMeUserOrThrow().toJid());
		var n = Array.from(t), a;
		return o("WAWebRuntimeEnvironmentUtils").isWorker() ? (a = await r("WAWebLidAwareContactsDB").bulkGet(n), new Map(a.map(function(e, t) {
			return [n[t], {
				ephemeralDuration: o("WAWebEphemeralityResolver").getEphemeralDurationForUser(e),
				shouldBlockByCountry: o("WAWebBoolFunc").returnFalse,
				shouldBlockByTos: o("WAWebBoolFunc").returnFalse
			}];
		}))) : o("WAWebWorkerSafeBackendApi").workerSafeSendAndReceive("getContactData", { ids: n.map(o("WAWebWidFactory").createWid) });
	}
	async function _(e) {
		return o("WAWebApiBulkGetChats").bulkGetChats(e.map(function(e) {
			return e.from;
		}));
	}
	async function f(e) {
		var t = await Promise.all([_(e), p(e)]), n = t[0], r = t[1];
		return {
			chatData: n,
			contactData: r
		};
	}
	function g(e, t) {
		for (var n of e) {
			var r = t.get(n.id.remote.toJid());
			r && !o("WAWebMsgGetters").getIsSentByMe(n) && (r.shouldBlockByCountry() ? new (o("WAWebGatedMessageReceivedWamEvent")).GatedMessageReceivedWamEvent({ chatGatedReason: o("WAWebWamEnumChatGatedReason").CHAT_GATED_REASON.COUNTRY }).commit() : r.shouldBlockByTos() && new (o("WAWebGatedMessageReceivedWamEvent")).GatedMessageReceivedWamEvent({ chatGatedReason: o("WAWebWamEnumChatGatedReason").CHAT_GATED_REASON.TOS3 }).commit());
		}
	}
	function h(e) {
		return o("WAWebMsgGetters").getIsReaction(e) ? o("WAWebAddonProcessMsgsUtils").getParentMsgKey(e) : o("WAWebDBProcessReplyMsgs").createQuotedMsgKey(e);
	}
	async function y(e) {
		var t, n = (t = o("WAWebLidMigrationUtils").getAlternateMsgKey(e)) == null ? void 0 : t.toString();
		if (n != null) return o("WAWebDBMsgUtils").getMsgByMsgKey(n);
	}
	async function C(e) {
		var t;
		if (o("WAWebMsgGetters").getType(e) === o("WAWebMsgType").MSG_TYPE.COMMENT) {
			var n;
			return {
				activityType: "commentsReceived",
				ts: (n = e.t) != null ? n : o("WATimeUtils").unixTimeMs(),
				chatId: e.id.remote
			};
		}
		var r = h(e);
		if (r !== "missing-stanza-id") {
			var a = await o("WAWebDBMsgUtils").getMsgByMsgKey(r);
			if (o("WAWebMsgGetters").getIsReply(e) && a == null && (a = await y(r)), a != null && o("WAWebMsgGetters").getIsGroupStatus(a)) {
				var i = o("WAWebMsgGetters").getIsReply(e), l = o("WAWebMsgGetters").getIsReaction(e) && e.reactionText === c;
				if (i || l) {
					var s = o("WAWebMsgGetters").getIsSentByMe(a);
					return {
						activityType: "groupStatusMsgReceive",
						chatId: e.id.remote,
						ts: e.t,
						isGroupStatusReplyOthersToOwn: i && s,
						isGroupStatusReplyOthersToOthers: i && !s,
						isGroupStatusLikeOthersToOwn: l && s,
						isGroupStatusLikeOthersToOthers: l && !s
					};
				}
			}
		}
		return {
			activityType: e.id.fromMe ? "msgSend" : "msgReceive",
			ts: e.t,
			chatId: e.id.remote,
			isViewOnce: e.isViewOnce === !0,
			isReaction: o("WAWebMsgGetters").getIsReaction(e),
			isForwarded: e.isForwarded === !0,
			isCommerceMessage: o("WAWebChatThreadLoggingUtils").isCommerceMessage(e),
			isReply: o("WAWebMsgGetters").getIsReply(e),
			isEdit: o("WAWebMsgGetters").getIsEditProtocolMsg(e),
			isBot: o("WAWebMsgGetters").getIsBotQuery(e) || o("WAWebMsgGetters").getIsMetaBotResponse(e),
			isEventCreation: e.type === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION,
			isEventResponse: e.type === o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE,
			isAfterRead: o("WAWebAfterReadUtils").isAfterReadEnabled() ? ((t = e.afterReadDuration) != null ? t : 0) > 0 : void 0
		};
	}
	function b(e) {
		for (var t of e) if (t.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && t.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").INAPP_SIGNUP && !t.id.fromMe) {
			var n, a = (n = t.interactivePayload) == null || (n = n.buttons) == null || (n = n[0]) == null ? void 0 : n.buttonParamsJson;
			if (a == null) {
				o("WAWebSignupQPLLogger").confirmationMissingParams();
				continue;
			}
			try {
				var i = JSON.parse(a), l = i.signup_id;
				if (l == null) {
					o("WAWebSignupQPLLogger").confirmationParseFailure("missing field 'signup_id'");
					continue;
				}
				o("WAWebSignupFlowLoggerLazy").logSignupOp({
					operation: o("WAWebSignupFlowLoggerLazy").SIGNUP_USER_JOURNEY_OPERATION.SIGNUP_CONFIRMATION_RECEIVED,
					signupId: String(l),
					businessWid: t.id.remote
				}), o("WAWebSignupQPLLogger").confirmationSuccess(String(l));
			} catch (e) {
				o("WAWebSignupQPLLogger").confirmationParseFailure(e);
			}
		}
	}
	function v(e) {
		Promise.all(e.filter(o("WAWebChatThreadLoggingUtils").shouldIncrementMsgSendAndReceive).map(C)).then(o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging);
	}
	function S(e) {
		e.filter(o("WAWebMsgGetters").getIsAuthenticationMessage).forEach(function(e) {
			o("WAWebBackendApi").frontendFireAndForget("logOTPMessageReceivedActions", { msgData: e });
		});
	}
	function R(e) {
		var t = e.msgs;
		f(t).then(function(n) {
			return Promise.all([
				m(e, n.chatData, n.contactData),
				g(t, n.contactData),
				v(t),
				S(t),
				d(t),
				o("WAWebGalaxyFlowWamLoggerUtils").logStructuredMessageReceivedWAMEvent(t),
				o("WAWebOrderDetailsReceivedWamLogger").logOrderDetailsReceivedWAMEvent(t),
				o("WAWebPaymentInfoReceivedWamLogger").logPaymentInfoReceivedWAMEvent(t),
				o("WAWebPaymentRequestWamLogger").logPaymentRequestReceivedWAMEvent(t),
				o("WAWebQbmIncomingMessageLogger").logQbmIncomingMessages(t, n.chatData),
				b(t),
				o("WAWebUprReceivedWamLogger").logUprReceivedWAMEvent(t)
			]);
		}).catch(function(e) {
			o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["error logging received messages: ", ""])), String(e));
		});
	}
	l.logReceivedMessagesInWAM = R;
}), 98);
