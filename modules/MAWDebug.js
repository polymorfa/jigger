__d("MAWDebug", [
	"BlobStorageApi",
	"EBConsoleUtils",
	"EBDBConsistencyApi",
	"EBDeps",
	"EBLS",
	"EBWorkerEBDBApi",
	"EBWorkerEBSMStateUtils",
	"ExecutionEnvironment",
	"FBLogger",
	"LSMEBTaskCreationSource",
	"MAWAddGroupParticipants",
	"MAWAdminWriteCutoverThreadMsgTxn",
	"MAWArmadilloPollTableSchema.pb",
	"MAWBackend",
	"MAWBridge",
	"MAWBulkHandleIncomingMsgApi",
	"MAWCacheServiceDB",
	"MAWConfig",
	"MAWCreateGroupStep",
	"MAWDbAddDeviceChangeAlertsTxn",
	"MAWDbAppDataTxns",
	"MAWDbChunkTxns",
	"MAWDbDeviceChangeAlerts",
	"MAWDbEditMsgHistoryTxns",
	"MAWDbGetDeviceChangeAlertsByOptionsTxn",
	"MAWDbGetDeviceChangeAlertsTxn",
	"MAWDbGetUnArchivedDeviceChangeAlertsCountTxn",
	"MAWDbGroupInviteTxns",
	"MAWDbMediaTxns",
	"MAWDbMsg",
	"MAWDbMsgTxns",
	"MAWDbMsgTypeVersionTxns",
	"MAWDbObjDecode",
	"MAWDbObjEncode",
	"MAWDbParticipantTxns",
	"MAWDbPendingReceiptTxns",
	"MAWDbPoll",
	"MAWDbReactionsTxns",
	"MAWDbThreadTxns",
	"MAWDbUnrenderedMsgTxns",
	"MAWDbUpdateDeviceChangeAlertsLogInStatusTxn",
	"MAWDbUpdateDeviceChangeAlertsTxn",
	"MAWDbVersion",
	"MAWDbXMATxns",
	"MAWDebugSendMultipleMsgs",
	"MAWDemoteGroupParticipants",
	"MAWDexieTable",
	"MAWEphemeralCleaner",
	"MAWEphemeralSettingsTxns",
	"MAWExternalId",
	"MAWGroupSetMemberAddMode",
	"MAWJobDefinitions",
	"MAWJobManager",
	"MAWKeychainNaClCrypto",
	"MAWLeaveGroups",
	"MAWLoadMsgsApi",
	"MAWLoggerUtils",
	"MAWMarkThreadAsRead",
	"MAWMediaUtils",
	"MAWMsgType",
	"MAWPromoteGroupParticipants",
	"MAWRemoveGroupParticipants",
	"MAWReportUserSpam",
	"MAWRotateDTSG",
	"MAWSendEphemeralSettingMsg",
	"MAWSetGroupSubject",
	"MAWTransactionMode",
	"MAWTransactor",
	"MAWUnsafeCoerce",
	"MAWVault",
	"MpsTypes",
	"OfflineThreadingId",
	"Promise",
	"QPLFlow",
	"WAAPI",
	"WAAbPropsInit",
	"WADbTransactor",
	"WADevicesState",
	"WAExceededStorageQuota",
	"WAGatherMediaInfo",
	"WAGetPlatformFromStanzaId",
	"WAGlobals",
	"WAGzip",
	"WAHandleFailureUtils",
	"WALogger",
	"WAMediaUtils",
	"WAProtocolQueue",
	"WARotateSignedPreKey",
	"WARunStorageBenchmark",
	"WASignalDB",
	"WASignalOther",
	"WATimeUtils",
	"WebMps",
	"WebStorageEstimator",
	"WormDbDebuggingUtils",
	"asyncToGeneratorRuntime",
	"emptyFunction",
	"err",
	"gkx",
	"promiseDone",
	"qex",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["s2sInstanceKey", "s2sUserFlowQPLEvent"], s, u, c, d = {
		addBadProtocolQueueInstruction: function() {
			var e = {
				instruction: "bad",
				type: "instruction"
			};
			return o("WAProtocolQueue").protocolQueue().addAndCommit([e]);
		},
		addDeviceChangeAlerts: function(t) {
			return m(_({ deviceChangeAlerts: o("MAWTransactionMode").READWRITE })(o("MAWDbAddDeviceChangeAlertsTxn").addDeviceChangeAlertsTxn)(t));
		},
		addGroupParticipants: function(t, n, a) {
			return r("qex")._("5853") === !0 ? o("MAWAddGroupParticipants").addGroupParticipantsImpl({
				group: t,
				instanceKey: a,
				users: n
			}) : o("MAWJobManager").getJobManager().waitUntilCompleted(o("MAWJobDefinitions").jobSerializers.addGroupParticipants(t, n, a));
		},
		benchmarkStorage: function(t, n, r, a) {
			t === void 0 && (t = !1), n === void 0 && (n = 1), r === void 0 && (r = 50), a === void 0 && (a = 500), o("WARunStorageBenchmark").runStorageBenchmark(function(e) {
				return console.log("[storage benchmark]: " + e);
			}, t, n, r, a);
		},
		checkStorageQuota: function() {
			return o("WAExceededStorageQuota").checkStorageQuota();
		},
		clearBlobStorage: function() {
			return r("BlobStorageApi").clear().then(function(e) {
				if (e.success) r("FBLogger")("BlobStorage").info("Blob storage cleared");
				else throw r("err")("Failed to clear blob storage");
			});
		},
		createGroup: function(t, n, a) {
			return r("qex")._("5854") === !0 ? o("MAWCreateGroupStep").createGroupStep(a, t, n, {
				clientThreadKey: a,
				platform: "msgr"
			}, o("MAWLoggerUtils").createInstanceKey()) : o("MAWJobManager").getJobManager().waitUntilCompleted(o("MAWJobDefinitions").createStartJobInfo("createGroup", {
				extras: {
					clientThreadKey: a,
					platform: "msgr"
				},
				key: a,
				s2sInstanceKey: o("MAWLoggerUtils").createInstanceKey(),
				subject: t,
				users: n
			}));
		},
		createOrUpdateThread: function(t) {
			return o("MAWBridge").getBridge().sendAndReceive("backend", "createOrUpdateThread", {
				contactFbid: t,
				description: "MAWDebug",
				threadKey: o("OfflineThreadingId").createOfflineThreadingID()
			});
		},
		createTestPoll: function(t) {
			_({ poll: o("MAWTransactionMode").READWRITE })(function(e) {
				return e.poll.put({
					chatJid: t,
					encKey: new ArrayBuffer(0),
					latestSenderTimestampsMs: new Map([["@me", o("WATimeUtils").millisTime()]]),
					pollAuthor: "@me",
					pollOptions: new Map([[o("MAWDbPoll").convertStringToOptionHash("option1Hash"), {
						optionText: "option1",
						voteAuthors: new Set(["@me"])
					}]]),
					pollParticipantCount: 2,
					pollStanzaId: o("MAWExternalId").generateExternalId(),
					pollState: o("MAWArmadilloPollTableSchema.pb").POLL_STATE.OPEN,
					selectableOptionsCount: 0,
					title: "Test Poll"
				});
			})(t);
		},
		decodeEAR: function(t, n) {
			return o("MAWDbObjDecode").decodeDbObj(t, n);
		},
		deflate: function(t) {
			var e = o("WAGzip").createDeflate();
			return e.push(t, !0), e.result();
		},
		deleteGroupInvitesByThreadAndInvitedParticipant: function(t, n) {
			return m(_({ groupInvites: o("MAWTransactionMode").READWRITE })(o("MAWDbGroupInviteTxns").deleteGroupInvitesByThreadAndInvitedParticipant)(t, n));
		},
		demoteGroupParticipants: function(t, n) {
			return r("qex")._("5855") === !0 ? o("MAWDemoteGroupParticipants").demoteGroupParticipantsImpl({
				group: t,
				users: n
			}) : o("MAWJobManager").getJobManager().waitUntilCompleted(o("MAWJobDefinitions").jobSerializers.demoteGroupParticipants(t, n));
		},
		deregisterPhone: function() {
			r("promiseDone")(o("WAHandleFailureUtils").deregisterPhone());
		},
		dropExpiredMessagesFromDB: function() {
			var e = o("MAWEphemeralCleaner").getEphemeralCleaner_FOR_TESTING_ONLY();
			if (e) e.purgeDeletions.update(o("WATimeUtils").futureUnixTime(5));
			else throw r("err")("Cannot delete expired msgs as cleaner is not initialized!");
		},
		dropExpiredMessagesFromUI: function() {
			var e = o("MAWEphemeralCleaner").getEphemeralCleaner_FOR_TESTING_ONLY();
			if (e) e.expiry.update(o("WATimeUtils").futureUnixTime(5));
			else throw r("err")("Cannot delete expired msgs as cleaner is not initialized!");
		},
		encodeEAR: function(t, n) {
			return o("MAWDbObjEncode").encodeDbObj(t, n);
		},
		encryptEARTweetNaCl: function(t, n, r) {
			return o("MAWKeychainNaClCrypto").encryptTweetNaCl(t, n, r);
		},
		estimateStorage: (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = yield o("WebStorageEstimator").estimateStorage();
				return e;
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(),
		executeQuery: function(t) {
			var e = Object.keys(o("MAWDbVersion").CURRENT_MAW_STORES).filter(function(e) {
				return o("MAWDbVersion").CURRENT_MAW_STORES[e] != null;
			}).reduce(function(e, t) {
				var n;
				return babelHelpers.extends({}, e, (n = {}, n[t + ""] = o("MAWTransactionMode").READWRITE, n));
			}, {});
			return _(e)(t)();
		},
		fetchMessagesForSpamReport: (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				var n = yield o("WebMps").mps().spamReportLoadMessages({
					numMessages: t != null ? t : 30,
					threadId: e
				});
				return n;
			});
			function t(t, n) {
				return e.apply(this, arguments);
			}
			return t;
		})(),
		forwardMsg: function(t, n) {
			return o("MAWBridge").getBridge().sendAndReceive("backend", "forwardMsg", {
				args: {
					args: {},
					chatJid: t,
					externalId: o("MAWExternalId").generateExternalId(),
					protocolMsgId: n
				},
				qplEventType: r("qpl")._(25313175, "1551"),
				qplInstanceKey: o("MAWLoggerUtils").createInstanceKey()
			});
		},
		fromUnixTime: function(t) {
			return o("WATimeUtils").toDate(t);
		},
		gatherMediaInfo: function() {
			r("promiseDone")(o("WAGatherMediaInfo").gatherMediaInfo());
		},
		generateAndUploadPreKeys: function() {
			return r("WAAPI").generateAndUploadPreKeys({ reason: "test" });
		},
		generateAndUploadPreKeysMultipleCalls: function() {
			return (c || (c = n("Promise"))).all([
				r("WAAPI").generateAndUploadPreKeys({ reason: "test" }),
				r("WAAPI").generateAndUploadPreKeys({ reason: "test" }),
				r("WAAPI").generateAndUploadPreKeys({ reason: "test" })
			]);
		},
		generateCipherTextMessagesForChat: function(t, r) {
			return (c || (c = n("Promise"))).all(Array.from({ length: r }).map(function(e, n) {
				var r = o("WATimeUtils").castMilliSecondsToUnixTime(Date.now()), a = o("MAWExternalId").generateExternalId(), i = {
					ack: 2,
					altIndex: void 0,
					author: "@me",
					externalId: a,
					msgContent: { content: "Stub message #" + n },
					msgId: o("MAWDbMsg").craftMsgIdV2(1, 1, { externalId: a }),
					serverTs: r,
					threadJid: t,
					ts: r,
					type: o("MAWMsgType").MSG_TYPE.CIPHERTEXT
				};
				return _({ messages: o("MAWTransactionMode").READWRITE })(function(e) {
					return e.messages.add(i);
				})(i);
			}));
		},
		generateDuplicateMessagesForChat: function(t, n) {
			return d.generateMessagesForChat(t, n).then(function(e) {
				var t = e.msgResults.values().map(function(e) {
					var t;
					return (t = e.value) == null ? void 0 : t.protocolMsgId.externalId;
				}).filter(Boolean), n = t[0];
				return _({ messages: o("MAWTransactionMode").READWRITE })(function(e) {
					return o("MAWDexieTable").dexieAll(t.map(function(t) {
						return e.messages.get({ externalId: t }).then(function(t) {
							if (t != null) return e.messages.put(babelHelpers.extends({}, t, {
								externalId: n,
								protocolMsgId: void 0
							}));
						});
					})).then(r("emptyFunction"));
				})(t);
			});
		},
		generateMessagesForChat: function(t, n) {
			return o("MAWBulkHandleIncomingMsgApi").bulkHandleIncomingMsgs(Array.from({ length: n }).map(function(e, n) {
				var r = o("WATimeUtils").castMilliSecondsToUnixTime(Date.now()), a = o("MAWExternalId").generateExternalId(), i = {
					ack: 2,
					altIndex: void 0,
					author: "@me",
					externalId: a,
					msgContent: { content: "Stub message #" + n },
					serverTs: r,
					ts: r,
					type: "Text"
				};
				return {
					msgData: {
						folder: null,
						id: {
							author: "@me",
							chat: t,
							externalId: a
						},
						msg: {
							encoded: new Uint8Array(0),
							version: "v2"
						},
						recipientsCount: null,
						reportingMeta: null,
						ts: r,
						type: "IncomingMsg"
					},
					receiveFlow: o("QPLFlow").startNoopQPLFlow(),
					stanzaSource: "wa-incoming",
					unstoredContent: {
						unstoredDbMedia: null,
						unstoredDbMsg: i,
						unstoredDbReaction: null,
						unstoredDbReceiverFetchInfo: null
					}
				};
			}), r("LSMEBTaskCreationSource").TEST_ONLY);
		},
		getAbProp: function(t) {
			return o("WAAbPropsInit").getAbProp(t);
		},
		getAbProps: function() {
			return o("WAAbPropsInit").getAbProps();
		},
		getAppDatas: function(t) {
			return m(_({ appData: o("MAWTransactionMode").READONLY })(o("MAWDbAppDataTxns").bulkGetAppData)(t));
		},
		getAppMetaByKey: function(t) {
			return m(_({ appMeta: o("MAWTransactionMode").READONLY })(o("MAWDbMsgTypeVersionTxns").getAppMetaValue)(t));
		},
		getChunksByChunkId: function(t) {
			return m(_({ chunk: o("MAWTransactionMode").READONLY })(o("MAWDbChunkTxns").bulkGetChunks)(t));
		},
		getClockSkew: function() {
			return o("WATimeUtils").getClockSkew();
		},
		getConfig: function() {
			return Object.fromEntries(Object.entries(o("MAWConfig").getConfig()).map(function(e) {
				var t = e[0], n = e[1], r = n;
				try {
					r = n();
				} catch (e) {
					r = n;
				}
				return [t, r];
			}));
		},
		getCurrentUserDeviceList: function() {
			return r("WAAPI").getCurrentUserDeviceList();
		},
		getDeviceChangeAlerts: function(t) {
			return m(_({ deviceChangeAlerts: o("MAWTransactionMode").READWRITE })(o("MAWDbGetDeviceChangeAlertsTxn").getDeviceChangeAlertsTxn)(t));
		},
		getDeviceChangeAlertsByOptions: function(t) {
			return m(_({ deviceChangeAlerts: o("MAWTransactionMode").READWRITE })(o("MAWDbGetDeviceChangeAlertsByOptionsTxn").getDeviceChangeAlertsByOptionsTxn)(t));
		},
		getDeviceChangeAlertsByOptionsLLA: function(t) {
			return o("MAWBridge").getBridge().sendAndReceive("backend", "getDeviceChangeAlertsByOptions", { options: t });
		},
		getDevices: function(t, n) {
			return r("WAAPI").getDevices({
				ignoreDhash: n,
				reason: "debug",
				users: new Set(t)
			});
		},
		getDevicesState: function() {
			return o("WADevicesState").getDevicesState();
		},
		getEBDBClientState: function() {
			return o("EBWorkerEBDBApi").getSecureEBClientState();
		},
		getEBDeps: function() {
			return o("EBDeps").getDeps();
		},
		getEBEpochs: function() {
			return o("EBConsoleUtils").getAllEpochsSorted();
		},
		getEBSMConsistency: (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				return o("EBDBConsistencyApi").checkRegistrationConsistency((yield o("EBLS").genLSClient()).db);
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(),
		getEBSMWorkerState: function() {
			return (u || (u = r("ExecutionEnvironment"))).isInWorker ? o("EBWorkerEBSMStateUtils").getEBSMWorkerState() : o("MAWBridge").getBridge().sendAndReceive("backend", "getEBSMWorkerState");
		},
		getEditMsgHistoryByEditMsgHistoryId: function(t) {
			return m(_({ editMsgHistory: o("MAWTransactionMode").READONLY })(o("MAWDbEditMsgHistoryTxns").bulkGetEditMsgHistorys)(t));
		},
		getEditMsgHistoryByProtocolMsgId: function(t) {
			return m(_({ editMsgHistory: o("MAWTransactionMode").READONLY })(o("MAWDbEditMsgHistoryTxns").maybeGetEditMsgHistoryFromProtocolMsgId)(t));
		},
		getGroupInvite: function(t, n) {
			return m(_({ groupInvites: o("MAWTransactionMode").READONLY })(o("MAWDbGroupInviteTxns").maybeGetGroupInvite)(t, n));
		},
		getGroupInvitesByThreadAndInvitedParticipant: function(t, n) {
			return m(_({ groupInvites: o("MAWTransactionMode").READONLY })(o("MAWDbGroupInviteTxns").getGroupInvitesByThreadAndInvitedParticipant)(t, n));
		},
		getHmacKeyFromGlobals: function() {
			return o("WAGlobals").getHMACKey();
		},
		getKeyTransparencyVerificationStatus: function(t) {
			return o("MAWBridge").getBridge().sendAndReceive("kt", "keyVerificationStatus", { userJid: t });
		},
		getMediaBackupForObjectId: function(t) {
			return m(_({ mediaBackup: o("MAWTransactionMode").READONLY })(o("MAWDbMediaTxns").maybeGetMediaBackupRowFromObjectId)(t));
		},
		getMediaByIdWithDecodedMediaEntries: (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = yield _({ media: o("MAWTransactionMode").READONLY })(o("MAWDbMediaTxns").bulkGetMedias)(e);
				return t.forEach(function(e) {
					e != null && e.mediaEntries && (e.mediaEntries = new Map(Array.from(e.mediaEntries, function(e) {
						var t = e[0], n = e[1];
						return [t, o("WAMediaUtils").decodeMediaEntryData(n)];
					})));
				}), m((c || (c = n("Promise"))).resolve(t));
			});
			function t(t) {
				return e.apply(this, arguments);
			}
			return t;
		})(),
		getMediaByMediaId: function(t) {
			return m(_({ media: o("MAWTransactionMode").READONLY })(o("MAWDbMediaTxns").bulkGetMedias)(t));
		},
		getMediaByPlaintextHash: function(t) {
			return m(_({ media: o("MAWTransactionMode").READONLY })(o("MAWDbMediaTxns").maybeGetMediaFromPlaintextHash)(t));
		},
		getMessagesByMsgIds: function(t) {
			return m(_({ messages: o("MAWTransactionMode").READONLY })(function(e) {
				return e.messages.where("msgId").anyOf(t).toArray().then(function(e) {
					return e.filter(Boolean);
				});
			})(t));
		},
		getMsgsByChat: function(t) {
			return m(_({ messages: o("MAWTransactionMode").READONLY })(function(e) {
				return e.messages.where("threadJid").equals(t).toArray();
			})());
		},
		getMsgsByMsgId: function(t) {
			return m(_({ messages: o("MAWTransactionMode").READONLY })(o("MAWDbMsgTxns").getMsgsByMsgIds)(t));
		},
		getMsgsByProtocolMsgId: function(t) {
			return m(_({ messages: o("MAWTransactionMode").READONLY })(o("MAWDbMsgTxns").getMsgsByProtocolMsgId)(t));
		},
		getNewDTSG: (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				return (yield o("MAWRotateDTSG").getNewDTSG()).token;
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(),
		getParticipantsByParticipantKeys: function(t) {
			return m(_({ participants: o("MAWTransactionMode").READONLY })(o("MAWDbParticipantTxns").bulkGetParticipants)(t));
		},
		getPendingReceipts: function(t) {
			return m(_({ pendingReceipts: o("MAWTransactionMode").READONLY })(o("MAWDbPendingReceiptTxns").getPendingReceipts)(t));
		},
		getPlatform: function(t) {
			return o("WAGetPlatformFromStanzaId").getPlatformFromStanzaId(t);
		},
		getProtocolMsgId: function(t) {
			return o("MAWBridge").getBridge().sendAndReceive("backend", "getProtocolMsgIdByMsgId", { msgId: t });
		},
		getReactionByReactToExternalId: function(t) {
			return m(_({ reactions: o("MAWTransactionMode").READONLY })(function(e) {
				return e.reactions.where("reactToExternalId").anyOf(t).toArray();
			})(t));
		},
		getReactionByReactToMsgId: function(t) {
			return m(_({
				messages: o("MAWTransactionMode").READONLY,
				reactions: o("MAWTransactionMode").READONLY
			})(function(e) {
				return e.messages.where("msgId").anyOf(t).toArray().then(function(t) {
					return o("MAWDbReactionsTxns").getReactionsFromMessages(e, t);
				});
			})(t));
		},
		getReceiptByWAMsgId: function(t) {
			return m(f({ receipts: o("MAWTransactionMode").READONLY })(function(e, t) {
				return e.receipts.get({ waMsgId: t });
			})(t));
		},
		getThreadsByChatJids: function(t) {
			return m(_({ threads: o("MAWTransactionMode").READONLY })(o("MAWDbThreadTxns").getThreads)(t));
		},
		getUnArchivedDeviceChangeAlertsCount: function() {
			return m(_({ deviceChangeAlerts: o("MAWTransactionMode").READWRITE })(o("MAWDbGetUnArchivedDeviceChangeAlertsCountTxn").getUnArchivedDeviceChangeAlertsCountTxn)());
		},
		getUnrenderedMsgsByMsgId: function(t) {
			return m(_({ unrenderedMessages: o("MAWTransactionMode").READONLY })(o("MAWDbUnrenderedMsgTxns").getUnrenderedMsgsByMsgIds)(t));
		},
		getXMAByXMAId: function(t) {
			return m(_({ xma: o("MAWTransactionMode").READONLY })(o("MAWDbXMATxns").bulkGetXMAs)(t));
		},
		hmacPlaintextHash: function(t) {
			return o("MAWMediaUtils").genHMACPlaintextHash(t);
		},
		inflate: function(t) {
			return o("WAGzip").inflate(t);
		},
		leaveGroup: function(t) {
			return r("qex")._("5856") === !0 ? o("MAWLeaveGroups").leaveGroupImpl(t).then(r("emptyFunction")) : o("MAWJobManager").getJobManager().waitUntilCompleted(o("MAWJobDefinitions").jobSerializers.leaveGroups([t]));
		},
		loadMsgs: (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t, n = yield o("MAWLoadMsgsApi").loadMsgsFromTs(e.chatJid, (t = e.numMsgs) != null ? t : 10, e.direction, e.sortOrderMs, e.loadOriginalMsg, e.msgId, {
					admin: !0,
					editMsgHistory: !0,
					media: !0,
					polls: !0,
					reactions: !0,
					receiverFetch: !0,
					xma: !0
				});
				return babelHelpers.extends({}, n, { msgs: n.msgs.map(function(e) {
					return babelHelpers.extends({}, e, { content: e.content != null ? o("MAWVault").unvault(e.content) : "" });
				}) });
			});
			function t(t) {
				return e.apply(this, arguments);
			}
			return t;
		})(),
		makeError: function(t) {
			throw r("FBLogger")("messenger_web_devx").mustfixThrow(t);
		},
		makeWAError: function(t) {
			o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["", ""])), t);
		},
		markThreadAsRead: function(t, n) {
			return o("MAWMarkThreadAsRead").markThreadAsReadImpl({
				chatJid: t,
				isReadReceiptsDisabled: n,
				relationship: null
			});
		},
		maybeGetXMAFromProtocolMsgId: function(t) {
			return m(_({ xma: o("MAWTransactionMode").READONLY })(o("MAWDbXMATxns").maybeGetXMAFromProtocolMsgId)(t));
		},
		mpsLoadLatestMsg: function(t) {
			return o("WebMps").mps().loadMessages({
				debug: { purpose: "getLatestTimestampForDebug" },
				direction: "desc",
				from: [o("MpsTypes").toTimestamp(Number.MAX_SAFE_INTEGER), void 0],
				numMessages: 1,
				threadId: o("MpsTypes").toThreadId(t)
			});
		},
		notifyDeviceChange: function(t) {
			return r("WAAPI").notifyDeviceChange({ users: t });
		},
		overrideAbProp: function(t, n) {
			o("WAAbPropsInit").overrideAbProp(t, n);
		},
		promoteGroupParticipants: function(t, n) {
			return r("qex")._("5857") === !0 ? o("MAWPromoteGroupParticipants").promoteGroupParticipantsImpl({
				group: t,
				users: n
			}) : o("MAWJobManager").getJobManager().waitUntilCompleted(o("MAWJobDefinitions").jobSerializers.promoteGroupParticipants(t, n));
		},
		protocolQueue: function() {
			return o("WAProtocolQueue").protocolQueue();
		},
		putGroupInvite: function(t) {
			return m(_({ groupInvites: o("MAWTransactionMode").READWRITE })(o("MAWDbGroupInviteTxns").putGroupInvite)(t));
		},
		readCacheStore: function(t) {
			return o("MAWCacheServiceDB").getOrSetupMAWCacheDB().then(function(e) {
				return e.runInTransaction([t], "readonly", function(e) {
					return e.stores[t].readAll();
				}, "Debug - read " + t, i.id + ":1130");
			});
		},
		readProtocolQueue: function() {
			return o("WAProtocolQueue").protocolQueue().read();
		},
		readWormStore: function(t) {
			return o("WASignalDB").getDb().runInTransaction([t], "readonly", function(e) {
				return e.stores[t].readAll();
			}, "Debug - read " + t, i.id + ":1145");
		},
		removeDevice: function(t, n) {
			return r("WAAPI").removeDevice({
				deviceId: t,
				identity: n
			});
		},
		removeGroupParticipants: function(t, n) {
			return r("qex")._("5858") === !0 ? o("MAWRemoveGroupParticipants").removeGroupParticipantsImpl({
				group: t,
				users: n
			}) : o("MAWJobManager").getJobManager().waitUntilCompleted(o("MAWJobDefinitions").jobSerializers.removeGroupParticipants(t, n));
		},
		reportUserSpam: function(t, n) {
			return o("MAWReportUserSpam").reportUserSpamImpl({
				chatJid: n,
				context: "fake debug context",
				frxParams: null,
				frxTags: ["harassment"],
				openMsgs: null,
				reportedMessageId: null,
				spamFlow: "frx",
				userJid: t
			});
		},
		reregisterPhone: function() {
			return o("WAHandleFailureUtils").reregisterPhone();
		},
		rotateSignedPreKey: function() {
			return o("WARotateSignedPreKey").rotateSignedPreKey();
		},
		runKeyTransparencyVerification: function(t) {
			return o("MAWBridge").getBridge().sendAndReceive("kt", "runKeyVerification", { userJid: t });
		},
		sendEditMsg: function(t, n) {
			return o("MAWBridge").getBridge().sendAndReceive("backend", "sendEditMsg", {
				args: {
					editMsgContent: {
						content: t.editMsgContent.content,
						mentionedJids: []
					},
					originalProtocolMsgId: t.originalProtocolMsgId
				},
				chatJid: t.originalProtocolMsgId.chat,
				externalId: n,
				qplEventType: r("qpl")._(25313175, "1551"),
				qplInstanceKey: o("MAWLoggerUtils").createInstanceKey()
			});
		},
		sendEphemeralSettingMsg: function(t, n) {
			return o("MAWSendEphemeralSettingMsg").sendEphemeralSettingMsgFn({
				args: n,
				chatJid: t,
				externalId: o("MAWExternalId").generateExternalId(),
				qplEventType: r("qpl")._(25313175, "1551"),
				qplInstanceKey: o("MAWLoggerUtils").createInstanceKey()
			});
		},
		sendMessageTooAllExistingGroups: (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = yield _({ groupInfo: o("MAWTransactionMode").READONLY })(function(e) {
					return e.groupInfo.toArray();
				})(), t = [];
				for (var n of e) t.push(d.sendMsg(n.groupJid, {
					content: "message to " + n.groupJid + " at " + new Date().getTime(),
					s2sInstanceKey: o("MAWLoggerUtils").createInstanceKey()
				}));
				return t;
			});
			function t() {
				return e.apply(this, arguments);
			}
			return t;
		})(),
		sendMsg: function(n, a) {
			var t = a.s2sInstanceKey, i = a.s2sUserFlowQPLEvent, l = babelHelpers.objectWithoutPropertiesLoose(a, e);
			return o("MAWBridge").getBridge().sendAndReceive("backend", "sendMsg", {
				args: l,
				chatJid: n,
				externalId: o("MAWExternalId").generateExternalId(),
				qplEventType: r("qpl")._(25313175, "1551"),
				qplInstanceKey: t
			});
		},
		sendMultipleMsgs: o("MAWDebugSendMultipleMsgs").sendMultipleMsgs.execute,
		sendReaction: function(t, n, a, i) {
			return o("MAWBridge").getBridge().sendAndReceive("backend", "sendReactionMsg", {
				args: {
					groupingKey: "",
					reaction: i,
					reactToAuthor: a,
					reactToProtocolMsgId: n
				},
				chatJid: t,
				externalId: n.externalId,
				qplEventType: r("qpl")._(25313175, "1551"),
				qplInstanceKey: o("MAWLoggerUtils").createInstanceKey()
			});
		},
		setEphemeralSettingWithoutUpdate: function(t, n, r, a) {
			var e = r == null ? o("WATimeUtils").unixTime() : o("WATimeUtils").futureUnixTime(r);
			return m(_({
				ephemeralSettings: o("MAWTransactionMode").READWRITE,
				groupInfo: o("MAWTransactionMode").READONLY,
				messages: o("MAWTransactionMode").READWRITE,
				threads: o("MAWTransactionMode").READWRITE
			})(o("MAWEphemeralSettingsTxns").handleAndWriteOutgoingUserEphemeralSettingChange)(t, n, e, a));
		},
		setGroupSubject: function(t, n) {
			return r("qex")._("5860") === !0 ? o("MAWSetGroupSubject").setGroupSubjectImpl({
				group: t,
				subject: n
			}) : o("MAWJobManager").getJobManager().waitUntilCompleted(o("MAWJobDefinitions").jobSerializers.setGroupSubject(t, n));
		},
		setMemberAddMode: function(t, n) {
			return o("MAWGroupSetMemberAddMode").setMemberAddModeImpl({
				groupJid: t,
				memberAddMode: n
			});
		},
		startComms: function() {
			var e;
			(e = o("MAWBackend").getWaComms()) == null || e.startComms();
		},
		stopComms: function() {
			var e;
			(e = o("MAWBackend").getWaComms()) == null || e.stopComms();
		},
		syncAbProps: function(t) {
			var e = t !== !0;
			return r("WAAPI").syncAbProps({ sendHash: e });
		},
		triggerSecureStorageKeyChangeAlert: function() {
			var e = {
				action: o("MAWDbDeviceChangeAlerts").KEY_CHANGE,
				deviceJid: o("WAGlobals").getMyDeviceJid(),
				identity: o("MAWUnsafeCoerce").unsafeCoerce(o("WASignalOther").makeBytes(33)),
				isArchived: !1,
				model: "secure_storage",
				platform: "Meta",
				ts: o("WATimeUtils").unixTime()
			};
			return m(_({ deviceChangeAlerts: o("MAWTransactionMode").READWRITE })(o("MAWDbAddDeviceChangeAlertsTxn").addDeviceChangeAlertsTxn)(e));
		},
		updateDeviceChangeAlerts: function(t) {
			return m(_({ deviceChangeAlerts: o("MAWTransactionMode").READWRITE })(o("MAWDbUpdateDeviceChangeAlertsTxn").updateDeviceChangeAlertsTxn)(t));
		},
		updateDeviceChangeAlertsLLA: function(t) {
			return o("MAWBridge").getBridge().sendAndReceive("backend", "updateDeviceChangeAlerts", { alert: t });
		},
		updateDeviceChangeAlertsLogInStatus: function(t) {
			return m(_({ deviceChangeAlerts: o("MAWTransactionMode").READWRITE })(o("MAWDbUpdateDeviceChangeAlertsLogInStatusTxn").updateDeviceChangeAlertsLogInStatusTxn)(t));
		},
		wormGetContact: function(t) {
			return o("WormDbDebuggingUtils").getContact(t);
		},
		wormGetContacts: function() {
			return o("WormDbDebuggingUtils").getContacts();
		},
		wormGetIdentities: function() {
			return o("WormDbDebuggingUtils").getIdentities();
		},
		wormGetIdentitiesForUser: function(t) {
			return o("WormDbDebuggingUtils").getIdentitiesForUser(t);
		},
		wormGetMetaRows: function() {
			return o("WormDbDebuggingUtils").getMetaRows();
		},
		wormGetPrekeyGenerations: function() {
			return o("WormDbDebuggingUtils").getPrekeyGenerations();
		},
		wormGetPrekeys: function() {
			return o("WormDbDebuggingUtils").getPrekeys();
		},
		wormGetSenderKeySessions: function() {
			return o("WormDbDebuggingUtils").getSenderKeySessions();
		},
		wormGetSenderKeySessionsForUser: function(t) {
			return o("WormDbDebuggingUtils").getSenderKeySessionsForUser(t);
		},
		wormGetSessions: function() {
			return o("WormDbDebuggingUtils").getSessions();
		},
		wormGetSessionsForUser: function(t) {
			return o("WormDbDebuggingUtils").getSessionsForUser(t);
		},
		wormGetSignedPrekeys: function() {
			return o("WormDbDebuggingUtils").getSignedPrekeys();
		},
		writeCutoverThreadAdminMsg: function(t, n) {
			var e;
			return m(_({
				chunk: (e = o("MAWTransactionMode")).READONLY,
				ftsBackloggedMessages: e.READWRITE,
				groupInfo: e.READONLY,
				media: e.READONLY,
				messages: e.READWRITE,
				threads: e.READWRITE
			})(o("MAWAdminWriteCutoverThreadMsgTxn").writeCutoverThreadAdminMsg)(t, n));
		},
		writeRollbackCutoverThreadAdminMsg: function(t) {
			var e = _({ threads: o("MAWTransactionMode").READONLY })(o("MAWDbThreadTxns").getThread)(t);
			return e.then(function(e) {
				if (!e.success) return (c || (c = n("Promise"))).resolve();
				var t = e.value;
				return m(_({
					chunk: o("MAWTransactionMode").READONLY,
					ftsBackloggedMessages: o("MAWTransactionMode").READWRITE,
					groupInfo: o("MAWTransactionMode").READONLY,
					media: o("MAWTransactionMode").READONLY,
					messages: o("MAWTransactionMode").READWRITE,
					threads: o("MAWTransactionMode").READWRITE
				})(o("MAWAdminWriteCutoverThreadMsgTxn").writeRollbackCutoverAdminMsg)(t));
			});
		}
	};
	function m(e) {
		return e.then(function(e) {
			return e;
		});
	}
	if (r("gkx")("23903")) {
		var p = o("MAWUnsafeCoerce").unsafeCoerce(self);
		p.Debug = d, p.WAAPI = r("WAAPI");
	}
	function _(e) {
		return function(t) {
			return o("MAWTransactor").makeMsgrTransactor(e, "debug", function(e) {
				return (function() {
					for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
					return t.apply(void 0, [e].concat(r));
				});
			});
		};
	}
	function f(e) {
		return function(t) {
			return o("WADbTransactor").makeSignalTransactor(e, "debug", function(e) {
				return (function() {
					for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
					return t.apply(void 0, [e].concat(r));
				});
			});
		};
	}
	l.MAWDebugFuncs = d;
}), 98);
