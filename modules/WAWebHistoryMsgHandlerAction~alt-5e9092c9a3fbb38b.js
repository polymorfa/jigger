__d("WAWebHistoryMsgHandlerAction", [
	"WABase64",
	"WAFilteredCatch",
	"WALogger",
	"WALongInt",
	"WATimeUtils",
	"WAWebAddonProcessMsgs",
	"WAWebAddonProcessMsgsUtils",
	"WAWebAdvHostedAccountTypeSystemMsg",
	"WAWebApiContact",
	"WAWebApiFilterAndReplaceMessages",
	"WAWebApiHistorySyncNotification",
	"WAWebAsISOCountryCode",
	"WAWebBackendApi",
	"WAWebBackendErrors",
	"WAWebBizCoexGatingUtils",
	"WAWebBizCoexUtils",
	"WAWebBotTypes",
	"WAWebCTWAGatingUtils",
	"WAWebCallsOnlyGating",
	"WAWebChatConstants",
	"WAWebCheckUpdateOrphanReactions",
	"WAWebCryptoCurve25519",
	"WAWebCurrentUser",
	"WAWebDBCreateLidPnMappings",
	"WAWebDBProcessInitialHistorySyncMessage",
	"WAWebEphemeralityTypes",
	"WAWebEphemeralityUtils",
	"WAWebHandleAddChats",
	"WAWebHistorySyncLidChatGating",
	"WAWebHistorySyncLogUtils",
	"WAWebHistorySyncNotificationCommonUtils",
	"WAWebHistorySyncNotificationUtils",
	"WAWebHistorySyncStickers",
	"WAWebLidMigrationUtils",
	"WAWebLimitSharingProtoUtils",
	"WAWebMemberLabelHistorySync",
	"WAWebMessageAssociationGatingUtils",
	"WAWebMmSignalSharingExpirationWindowUtils",
	"WAWebMobilePlatforms",
	"WAWebMsgAGMProcessing",
	"WAWebMsgKey",
	"WAWebMsgType",
	"WAWebNoop",
	"WAWebProcessMessageAssociationMessages",
	"WAWebProtobufsAdv.pb",
	"WAWebProtobufsE2E.pb",
	"WAWebProtobufsHistorySync.pb",
	"WAWebSignalCommonUtils",
	"WAWebSignalProtocolStore",
	"WAWebSyncBootstrap",
	"WAWebSyncdOrphan",
	"WAWebUserPrefsHistorySync",
	"WAWebUserPrefsIndexedDBStorage",
	"WAWebUserPrefsMeUser",
	"WAWebUserPrefsModelStorage",
	"WAWebUserPrefsMultiDevice",
	"WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
	"WAWebUsernameTypes",
	"WAWebVoipActionWriteCallLogSync",
	"WAWebWid",
	"WAWebWidFactory",
	"getErrorSafe",
	"isStringNullOrEmpty"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $, P, N, M;
	async function w(t) {
		var n = t.chunkDownloadFinishTimestamp, a = t.chunkInfo, i = t.historyLidPnMappings, l = t.historySyncDataAppliedMetric, L = t.historySyncDownloadMetric, E = t.newLidMetadata, k = t.newUsernameUpdates, I = t.proto;
		o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[history sync] starts hanlding initial sync msgs"])));
		var T = [], D = {}, x = {}, $ = new Map(), P = {}, N = [], M = new Set(), w = 0, A = [], F = o("WAWebHistorySyncNotificationCommonUtils").getLidMappingAsStringSet(i);
		o("WAWebCurrentUser").isEmployee() && o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
			"first lid mappings for initial sync. count: ",
			". ",
			"..."
		])), F == null ? void 0 : F.size, o("WAWebHistorySyncNotificationCommonUtils").getLidsForLogging(F)).verbose();
		var H = new Map(), G = [], z = 0, j = 0, K = 0, Q = o("WAWebBizCoexGatingUtils").smbHostedLazySystemMsgInsertInHistorySyncEnabled() && await o("WAWebUserPrefsMultiDevice").getIsHostedMeAccount() === !0, X = async function(t) {
			var e, n, l, s, u, c, d = t.id;
			o("WAWebCurrentUser").isEmployee() && o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
				"[history sync] processing conversation ",
				" with ",
				" messages"
			])), d, t.messages.length);
			var m = o("WAWebWidFactory").createWid(d);
			if (m.isNewsletter()) return 0;
			var p = B(m, t);
			if (p.result === "skip-chat") return 0;
			if (p.result === "extracted") {
				var _ = p.accountLid;
				if ($.has(_)) return o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose(["[history sync] handleInitialSyncMsgs: Found duplicated accountLid during initial sync"]))).sendLogs("duplicated-account-lid-in-history-sync"), 0;
				$.set(_, m);
			} else p.result;
			var f = m, g, h = o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat() && m.isRegularUserPn() && p.accountLid != null;
			if (h && p.accountLid != null && (z++, G.length < 3 && G.push(m.toLogString() + " -> " + p.accountLid.toLogString()), f = p.accountLid, g = m.toString()), m.isUser()) {
				if (m.isLid()) {
					var L = t.pnJid;
					L != null && T.push({
						lid: m,
						pn: o("WAWebWidFactory").createUserWidOrThrow(L)
					});
					var k = t.displayName, I = t.shareOwnPn;
					if (k != null || I != null) {
						var O = {};
						k != null && (O.displayNameLID = k), I != null && (O.shareOwnPn = I), E.push({
							lid: m,
							data: O
						});
					}
				} else if (t.lidJid != null) {
					var W = o("WAWebWidFactory").createUserLidOrThrow(t.lidJid);
					T.push({
						lid: W,
						pn: m
					});
				}
			}
			var q = [];
			w += t.messages.length;
			var X = [], Y = new Set(), J = [];
			t.messages.length === 0 && (D[d] = -1), r("isStringNullOrEmpty")(t.pHash) || (P[d] = t.pHash);
			var Z, ee = !1, te = [], ne = 0, re = 0;
			t.messages.forEach(function(e, n) {
				var l, s, u, c;
				if (n === t.messages.length - 1) {
					var p = o("WALongInt").maybeNumberOrThrowIfTooLarge(e.msgOrderId);
					p != null && (D[d] = p);
				}
				var _ = (e == null || (l = e.message) == null || (l = l.message) == null || (l = l.protocolMessage) == null ? void 0 : l.type) === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REQUEST_WELCOME_MESSAGE;
				if (_) {
					ne++;
					return;
				}
				var g = (e == null || (s = e.message) == null || (s = s.message) == null || (s = s.protocolMessage) == null ? void 0 : s.type) === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.BOT_MEMU_ONBOARDING_MESSAGE;
				if (g) {
					re++;
					return;
				}
				if (o("WAWebMobilePlatforms").isSMB() && o("WAWebBizCoexGatingUtils").smbHostedLazySystemMsgInsertInHistorySyncEnabled() && n === 0 && f.isUser() && t.systemMessageToInsert != null) switch (t.systemMessageToInsert) {
					case o("WAWebProtobufsHistorySync.pb").PrivacySystemMessage.E2EE_MSG: {
						if (Q) break;
						var h = o("WAWebAdvHostedAccountTypeSystemMsg").genAdvAccountTypeChangeNotificationMsg({
							accountTypeChangedUser: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
							chatId: f,
							newAdvAccountType: o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE
						});
						X.push(h), o("WAWebBizCoexUtils").sendWamCoexPrivacySysMsgHistorySyncInsert(h);
						break;
					}
					case o("WAWebProtobufsHistorySync.pb").PrivacySystemMessage.NE2EE_SELF: {
						if (!Q) break;
						var y = o("WAWebAdvHostedAccountTypeSystemMsg").genAdvAccountTypeSelfTransitionToCoexNotificationMsg(f, o("WAWebUserPrefsMeUser").getMeUserOrThrow());
						X.push(y), o("WAWebBizCoexUtils").sendWamCoexPrivacySysMsgHistorySyncInsert(y);
						break;
					}
					case o("WAWebProtobufsHistorySync.pb").PrivacySystemMessage.NE2EE_OTHER: {
						var C = o("WAWebAdvHostedAccountTypeSystemMsg").genAdvAccountTypeChangeNotificationMsg({
							accountTypeChangedUser: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
							chatId: f,
							newAdvAccountType: o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED
						});
						X.push(C), o("WAWebBizCoexUtils").sendWamCoexPrivacySysMsgHistorySyncInsert(C);
					}
				}
				var b = o("WAWebHistorySyncNotificationCommonUtils").parseWebMsgInfoAndReturnNullOnFailure({
					protobufChatId: m,
					message: e.message,
					chunkInfo: a,
					allLidMapping: F,
					totalMissingMapping: H,
					historyLidPnMappings: i,
					dbChatId: f
				}), v = ((u = e.message) == null || (u = u.message) == null || (u = u.commentMessage) == null ? void 0 : u.targetMessageKey) == null, S = (b == null ? void 0 : b.associationType) != null;
				if (v) {
					var R;
					b != null && Y.has(b.id.toString()) && o("WAWebMessageAssociationGatingUtils").isMessageAssociationInfraEnabled() && Y.delete(b == null ? void 0 : b.id.toString()), b != null && b.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE && b.ctwaContext != null || X.push(b);
					var L = (R = e.message) == null || (R = R.message) == null || (R = R.extendedTextMessage) == null || (R = R.contextInfo) == null ? void 0 : R.externalAdReply, E = b != null ? b : {}, k = E.from, I = E.id, T = E.to;
					if (L != null && (I == null ? void 0 : I.fromMe) != null && k != null && T != null && o("WAWebCTWAGatingUtils").shouldGenerateAGMMsgs(L)) {
						var x, $ = new (r("WAWebMsgKey"))({
							fromMe: !I.fromMe,
							remote: f,
							id: r("WAWebMsgKey").newId_DEPRECATED()
						}), P = o("WAWebMsgAGMProcessing").genHistoryAutomatedGreetingMsg({
							msgKey: $,
							ctwaContext: L,
							to: k,
							from: T,
							msgTimestamp: (x = e.message) == null ? void 0 : x.messageTimestamp
						});
						X.push(P);
					}
				}
				if (b != null && S && o("WAWebMessageAssociationGatingUtils").isMessageAssociationInfraEnabled()) {
					var N = b.parentMsgKey.toString();
					Y.add(N), J.push(b);
				}
				q = q.concat(o("WAWebAddonProcessMsgsUtils").parseHistorySyncMsg({
					webMsgInfo: e.message,
					parsedWebMsgInfo: b,
					isFromCag: (c = t.isDefaultSubgroup) != null ? c : !1
				})), (b == null ? void 0 : b.subtype) === "biz_bot_1p_disclosure" && (Z = o("WAWebBotTypes").BizBotType.BIZ_1P), (b == null ? void 0 : b.subtype) === "biz_bot_3p_disclosure" && (Z = o("WAWebBotTypes").BizBotType.BIZ_3P), (b == null ? void 0 : b.subtype) === "ctwa_consumer_data_sharing_disclosure_system_message" && (ee = !0), te = o("WAWebMmSignalSharingExpirationWindowUtils").getUpdatedMmSignalSharingExpirationWindowFromHistorySync(e.message, te);
			}), ne > 0 && o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose(["[history sync] Dropped ", " request welcome messages"])), ne), re > 0 && o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose(["[history sync] Dropped ", " memu onboarding messages"])), re);
			var oe;
			if (Y.size > 0 && o("WAWebMessageAssociationGatingUtils").isMessageAssociationInfraEnabled()) {
				var ae = o("WAWebProcessMessageAssociationMessages").classifyAssociatedMsgsFromHistorySyncUsingMissingParentsCache(J, Y);
				ae != null && ae.validAssociatedMsgs && (oe = o("WAWebApiFilterAndReplaceMessages").validateMsgFn(ae == null ? void 0 : ae.validAssociatedMsgs));
			}
			X = o("WAWebApiFilterAndReplaceMessages").filterAndReplaceMessagesInitialHistorySync(X, oe), X = X.reverse();
			var ie = t.contactPrimaryIdentityKey;
			if (ie && r("WAWebWid").isUser(f)) {
				var le = o("WAWebSignalCommonUtils").bufferToStr(o("WAWebCryptoCurve25519").toSignalCurvePubKey(ie));
				A.push({
					userId: o("WAWebWidFactory").asUserWidOrThrow(f),
					identityKey: le
				});
			}
			var se, ue, ce;
			if (((e = t.disappearingMode) == null ? void 0 : e.initiator) != null) switch (t.disappearingMode.initiator) {
				case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator.CHANGED_IN_CHAT:
					se = o("WAWebEphemeralityTypes").DisappearingModeInitiator.ChangedInChat, ue = o("WAWebEphemeralityTypes").DisappearingModeTrigger.ChatSettings;
					break;
				case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator.INITIATED_BY_ME:
					se = o("WAWebEphemeralityTypes").DisappearingModeInitiator.InitiatedByMe, ue = o("WAWebEphemeralityTypes").DisappearingModeTrigger.AccountSettings, ce = !0;
					break;
				case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator.INITIATED_BY_OTHER:
				case o("WAWebProtobufsE2E.pb").DisappearingMode$Initiator.BIZ_UPGRADE_FB_HOSTING:
					se = o("WAWebEphemeralityTypes").DisappearingModeInitiator.InitiatedByOther, ue = o("WAWebEphemeralityTypes").DisappearingModeTrigger.AccountSettings, ce = !1;
					break;
			}
			if (((n = t.disappearingMode) == null ? void 0 : n.trigger) != null) {
				var de = o("WAWebEphemeralityUtils").getDisappearingModeTriggerFromProtobuf(t.disappearingMode.trigger);
				de != null && (ue = de);
			}
			((l = t.disappearingMode) == null ? void 0 : l.initiatedByMe) != null && (ce = t.disappearingMode.initiatedByMe);
			var me = t.tcToken != null && t.tcTokenTimestamp != null;
			if (o("WAWebCurrentUser").isEmployee()) {
				var pe;
				o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
					"handleInitialSyncMsgs: incoming chat info: protobufChatId=",
					", dbChatId=",
					", ",
					", ",
					""
				])), m, f, (pe = p.accountLid) != null ? pe : "n/a", f.isRegularUser() ? o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(f)) : "n/a");
			}
			var _e = p.accountLid, fe = {
				t: o("WALongInt").maybeNumberOrThrowIfTooLarge((s = t.conversationTimestamp) != null ? s : t.lastMsgTimestamp),
				accountLid: _e,
				id: f,
				unreadCount: t.unreadCount,
				ephemeralDuration: t.ephemeralExpiration,
				ephemeralSettingTimestamp: t.ephemeralSettingTimestamp,
				disappearingModeInitiator: se,
				disappearingModeTrigger: ue,
				disappearingModeInitiatedByMe: ce,
				endOfHistoryTransferType: (u = t.endOfHistoryTransferType) != null ? u : o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType.INCOMPLETE,
				name: t.name,
				notSpam: t.notSpam,
				isSenderNewAccount: t.isSenderNewAccount,
				isSenderSuspicious: t.isSenderSuspicious,
				pendingInitialLoading: !1,
				unreadMentionCount: t.unreadMentionCount,
				tcToken: me ? t.tcToken : null,
				tcTokenTimestamp: me ? t.tcTokenTimestamp : null,
				tcTokenSenderTimestamp: t.tcTokenSenderTimestamp,
				bizBotSystemMsgType: Z,
				hasCtwaConsumerDataSharingDisclosureSystemMsg: ee || void 0,
				isLocked: t.locked,
				limitSharing: o("WAWebLimitSharingProtoUtils").getLimitSharingFromProtocolHistorySyncConversation(t),
				capiThreadControl: U(t.maibaAiThreadEnabled),
				historyChatId: g
			};
			if (f.isLid() && (fe.lidOriginType = V(t.lidOriginType)), t.archived != null && (fe.archive = t.archived), t.authAgentParentCompanyName != null) {
				var ge;
				fe.parentCompanyName = t.authAgentParentCompanyName, fe.obaPhoneNumber = (ge = t.authAgentObaPhoneNumber) != null ? ge : "";
			}
			(c = te) != null && c.length && (fe.mmSignalSharingExpirationWindow = o("WAWebMmSignalSharingExpirationWindowUtils").getSortedMmSignalSharingExpirationWindowFromHistorySync(te));
			try {
				o("WAWebHistorySyncNotificationUtils").saveGroupMetadataForLeftGroup(t, fe.id);
			} catch (e) {
				o("WALogger").WARN(R || (R = babelHelpers.taggedTemplateLiteralLoose(["[history sync] history_sync_notification_handler: saveGroupMetadataForLeftGroup failed"]))).tags("history-sync");
			}
			var he = f.toString(), ye = M.has(d);
			ye ? j++ : M.add(d);
			var Ce = Object.prototype.hasOwnProperty.call(x, he);
			Ce ? K++ : ye || N.push(fe), x[he] = {
				chatInfo: fe,
				msgs: X,
				unifiedAddons: q
			};
		}, Y;
		for (var J of I.conversations) Y = await X(J);
		z > 0 && o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
			"[history sync] overriding ",
			" chat ids => ",
			""
		])), z, G), j > 0 && o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[history sync] found ", " duplicated protobuf conversation ids during initial sync"])), j), K > 0 && o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[history sync] found ", " duplicated db conversation ids during initial sync"])), K);
		for (var Z of I.accounts) {
			var ee = W(Z);
			ee && k.push(ee);
		}
		T.length > 0 && (o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[history sync] saving ", " LIDxPN mappings obtained from conversations"])), T.length), await o("WAWebDBCreateLidPnMappings").createLidPnMappings({
			mappings: T,
			flushImmediately: !0,
			identityChangeHandlingEnabled: !1,
			learningSource: "history-msg-handler"
		})), L.mdBootstrapMessagesCount = w, L.mdBootstrapChatsCount = I.conversations.length, o("WAWebHistorySyncNotificationUtils").commitHistoryDownloadedMetric({
			chunkDownloadFinishTimestamp: n,
			historySyncDownloadMetric: L,
			isSuccess: !0,
			startTs: a.historySyncStepStartedTs
		}), r("WAWebSyncBootstrap").markInitialHistorySyncCountDebugStats(w, N.length);
		var te = 0, ne = [];
		A.forEach(function(e) {
			var t = e.identityKey, n = e.userId;
			!n.isLid() && o("WAWebApiContact").getCurrentLid(n) == null && n.isRegularUser() && te++;
			try {
				var r = o("WAWebSignalCommonUtils").createSignalAddress(n).toString();
				o("WAWebUserPrefsMeUser").isMeAccount(n) ? o("WAWebHistorySyncNotificationUtils").checkSelfHistorySyncIdentity(r, t).catch(function() {
					o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[history sync] handleInitialSyncMsgs: can't save the identity key."], ["[history sync] handleInitialSyncMsgs: can\\'t save the identity key."]))).sendLogs("failed-self-identity-check-from-history-sync");
				}) : ne.push({
					identifier: r,
					identityKey: t
				});
			} catch (e) {
				o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["[history sync] handleInitialSyncMsgs: can't save the identity key."], ["[history sync] handleInitialSyncMsgs: can\\'t save the identity key."])));
			}
		}), await o("WAWebSignalProtocolStore").getPersistSignalProtocolStore().bulkCreateIdentity(ne), te > 0 && o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["[history sync] handleInitialSyncMsgs: there are Identities with missing LIDs: ", ""])), te).sendLogs("handleInitialSyncMsgs: there are Identities with missing LIDs", { sampling: .01 }), await r("WAWebHandleAddChats")(N), await O(x), await o("WAWebApiHistorySyncNotification").updateCurrentlyProcessed(a.msgKey, a.syncType, a.chunkOrder), o("WAWebHistorySyncNotificationUtils").commitHistoryDataAppliedMetric({
			historySyncDataAppliedMetric: l,
			startTs: a.historySyncStepStartedTs,
			isSuccess: !0,
			forceFlushWamBuffer: !0
		}), o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["[history sync] storing initial sync messages complete, ", ""])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(a, w, N.length)), o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose(["[history sync] set history initial sync boundary with length ", ""])), Object.keys(D).length), await Promise.all([
			o("WAWebHistorySyncNotificationUtils").handleChatThreadLoggingMetadata(I),
			o("WAWebUserPrefsHistorySync").setHistoryInitialSyncBoundary(D),
			I.companionMetaNonce != null ? o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set("WAWebCompanionMetaNonce", I.companionMetaNonce) : null,
			q(I.nctSalt)
		]), o("WAWebUserPrefsModelStorage").setInitialGroupPhash(P), o("WAWebHistorySyncNotificationCommonUtils").reportMissingMapping(H);
	}
	async function A(e, t, n, r, a) {
		o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose(["[history sync] processing history non blocking data"]))), o("WAWebHistorySyncNotificationUtils").commitHistoryDownloadedMetric({
			chunkDownloadFinishTimestamp: a,
			historySyncDownloadMetric: n,
			isSuccess: !0,
			startTs: t.historySyncStepStartedTs
		}), e.pastParticipants != null && e.pastParticipants.length > 0 && await o("WAWebHistorySyncNotificationUtils").processPastParticipants(e, t), e.callLogRecords != null && e.callLogRecords.length > 0 && await F(e, t), e.conversations != null && await o("WAWebMemberLabelHistorySync").processMemberLabels(e), o("WAWebHistorySyncStickers").processRecentStickers(e, t), o("WAWebHistorySyncNotificationUtils").commitHistoryDataAppliedMetric({
			historySyncDataAppliedMetric: r,
			startTs: t.historySyncStepStartedTs,
			isSuccess: !0
		});
	}
	async function F(e, t) {
		o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose(["[history sync] start processing call log records"]))), e.callLogRecords.sort(function(e, t) {
			var n = e.startTime, r = t.startTime;
			return o("WATimeUtils").castToUnixTime(parseInt(n, 10)) - o("WATimeUtils").castToUnixTime(parseInt(r, 10));
		}), await Promise.all(e.callLogRecords.map(async function(e) {
			await o("WAWebVoipActionWriteCallLogSync").generateCallLogFromCallSyncRecord({
				callLogRecord: e,
				fromHistorySync: !0
			});
		})), o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose(["[history sync] storing call log records complete, ", ""])), o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(t, e.callLogRecords.length));
	}
	function O(e) {
		if (o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled()) return Promise.resolve();
		var t = {
			add: "last",
			isHistory: !0
		}, n = Object.keys(e).map(function(n) {
			return o("WAWebBackendApi").frontendSendAndReceive("processMultipleMessages", {
				chatId: o("WAWebWidFactory").createWid(n),
				msgObjs: e[n].msgs,
				meta: t,
				processMessagesOrigin: "historyMsgHandlerAction",
				chatMsgsCollection: null
			});
		});
		return Promise.all([].concat(n, [o("WAWebDBProcessInitialHistorySyncMessage").storeInitialSyncMessages(e)])).then(function() {
			var t, n = (t = Array.prototype).concat.apply(t, Object.keys(e).map(function(t) {
				return e[t].msgs.map(function(e) {
					return e.id.toString();
				});
			}));
			o("WAWebCheckUpdateOrphanReactions").checkUpdateForOrphanReactions(n).catch(function() {
				o("WALogger").ERROR(I || (I = babelHelpers.taggedTemplateLiteralLoose(["[history sync] Failed update for orphan reactions"]))).sendLogs("failed-update-for-orphan-reactions");
			});
			var r = Object.keys(e).flatMap(function(t) {
				return e[t].msgs.flatMap(function(e) {
					var t;
					return ((t = e.threadIds) != null ? t : []).map(function(e) {
						return e.toString();
					});
				});
			});
			return o("WAWebSyncdOrphan").checkOrphanMutations(n, Object.keys(e), r);
		}).then(function() {
			var t;
			return Promise.all((t = Array.prototype).concat.apply(t, Object.keys(e).map(function(t) {
				return e[t].unifiedAddons;
			}))).then(function(e) {
				var t;
				return o("WAWebAddonProcessMsgs").processHistoryMsgs((t = []).concat.apply(t, e));
			});
		}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").LogoutDrop, r("WAWebNoop"))).catch(function(e) {
			o("WALogger").ERROR(T || (T = babelHelpers.taggedTemplateLiteralLoose(["[history sync] error occurred"]))).catching(r("getErrorSafe")(e)).sendLogs("msg_handler for MD: error storing/processing multiple messages");
		});
	}
	function B(e, t) {
		if (!o("WAWebLidMigrationUtils").shouldHaveAccountLid(e)) return { result: "not-needed" };
		if (t.accountLid != null) {
			var n = o("WAWebWidFactory").createUserLidOrThrow(t.accountLid);
			return {
				result: "extracted",
				accountLid: n
			};
		}
		return e.isLid() ? {
			result: "extracted",
			accountLid: e
		} : (o("WALogger").ERROR(D || (D = babelHelpers.taggedTemplateLiteralLoose(["[history sync] handleInitialSyncMsgs: Migrated account not sending accountLid for a PN chat in history sync"]))).sendLogs("missing-account-lid-in-history-sync"), { result: "skip-chat" });
	}
	function W(e) {
		var t = e.lid, n = e.username, a = e.countryCode;
		if (!(t == null || n == null && a == null)) {
			var i = o("WAWebWidFactory").createUserWidOrThrow(t), l;
			if (a != null && (l = o("WAWebAsISOCountryCode").asISOCountryCode(a), !l && o("WAWebCurrentUser").isEmployee() && o("WALogger").WARN(x || (x = babelHelpers.taggedTemplateLiteralLoose(["[history sync] invalid country code retrieved"]))).sendLogs("invalid-country-code-for-username-history-sync", { sampling: .01 })), n != null) try {
				var s = {
					userId: i,
					username: o("WAWebUsernameTypes").asUsername(n)
				};
				return l != null && (s.usernameCountryCode = l), s;
			} catch (e) {
				return o("WALogger").ERROR($ || ($ = babelHelpers.taggedTemplateLiteralLoose(["[history sync] handleInitialSyncMsgs: invalid username received."]))).catching(r("getErrorSafe")(e)).sendLogs("invalid-username-history-sync"), l != null ? {
					userId: i,
					usernameCountryCode: l
				} : null;
			}
			else if (l != null) return {
				userId: i,
				usernameCountryCode: l
			};
		}
	}
	function q(e) {
		return e != null ? (o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose(["[history sync] Stored NCT salt, size=", " bytes"])), e.byteLength), o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set("WAWebNctSalt", o("WABase64").encodeB64(e))) : null;
	}
	function U(e) {
		return e === !0 ? o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.CONTROL_TAKEN : e === !1 || e === void 0 ? o("WAWebProtobufsE2E.pb").Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.UNKNOWN : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	function V(e) {
		if (e != null) {
			var t = o("WAWebUsernameTypes").LidOriginType.cast(e);
			return t == null ? (o("WALogger").ERROR(N || (N = babelHelpers.taggedTemplateLiteralLoose(["[history sync] handleInitialSyncMsgs: invalid lidOriginType received."]))).sendLogs("handleInitialSyncMsgs: invalid lidOriginType received: " + e), o("WAWebUsernameTypes").LidOriginType.GENERAL) : t === o("WAWebUsernameTypes").LidOriginType.PNH_CTWA && o("WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration").hasPhoneNumberHidingThreadPromotionMigrationStarted() ? (o("WALogger").WARN(M || (M = babelHelpers.taggedTemplateLiteralLoose(["[history sync] handleInitialSyncMsgs: overriding PNH_CTWA to GENERAL post-migration"]))).sendLogs("handleInitialSyncMsgs: overriding PNH_CTWA lidOriginType to GENERAL post-migration"), o("WAWebUsernameTypes").LidOriginType.GENERAL) : t;
		}
		return o("WAWebUsernameTypes").LidOriginType.GENERAL;
	}
	l.handleInitialSyncMsgs = w, l.handleNonBlockingData = A, l.getUsernameUpdate = W, l.storeNctSaltFromHistorySync = q, l.getCapiThreadControlForHistorySync = U, l.determineLidOriginTypeForHistorySync = V;
}), 98);
