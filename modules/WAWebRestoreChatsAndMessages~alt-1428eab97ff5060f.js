__d("WAWebRestoreChatsAndMessages", [
	"WAJobOrchestratorTypes",
	"WALogger",
	"WATimeUtils",
	"WAWebABProps",
	"WAWebApiChat",
	"WAWebApiHydrateWidsUtil",
	"WAWebAppTracker",
	"WAWebChatCollection",
	"WAWebChatComparator",
	"WAWebChatGetters",
	"WAWebChatMsgsCollection",
	"WAWebCmd",
	"WAWebDBAddOnProviders",
	"WAWebDBMessageSerialization",
	"WAWebDBMessageStoreUtils",
	"WAWebDBMessageUtils",
	"WAWebDBQueryChatVisibleMessageHelper",
	"WAWebDbEncryptionKey",
	"WAWebEventsWaitForOfflineDeliveryEnd",
	"WAWebFrontendChatGetters",
	"WAWebModelStorageInitialize",
	"WAWebMsgCollection",
	"WAWebMsgKey",
	"WAWebNewsletterCollection",
	"WAWebNewsletterCommonGatingUtils",
	"WAWebOrchestratorNonPersistedJob",
	"WAWebPromiseQueue",
	"WAWebRegionReadinessSignals",
	"WAWebRestoreBusinessInfo",
	"WAWebRestoreGroupParticipantsAction",
	"WAWebSchemaMessage",
	"WAWebThreadMetadata",
	"WAWebThreadMetadataUtil",
	"WAWebWamOfflineResumeReporter",
	"WAWebWidFactory",
	"cr:11133",
	"getErrorSafe",
	"isStringNullOrEmpty"
], (function(t, n, r, o, a, i, l) {
	var e = ["id"], s, u, c, d, m, p, _, f, g, h = 20, y = 5, C = 100;
	function b(e, t) {
		return e.reduce(function(e, n) {
			var r, a = o("WAWebApiHydrateWidsUtil").hydrateWids(babelHelpers.extends({}, n, {
				pendingInitialLoading: !0,
				isReadOnly: (r = n.isReadOnly) != null ? r : !1
			})), i = o("WAWebThreadMetadataUtil").getOfflineMetaPreviewForChat({
				chatTimestamp: t,
				chatId: a.id,
				accountLid: a.accountLid
			});
			return i != null && (a.previewT = i), a.id.isNewsletter() ? e.newsletters.push(a) : e.chats.push(a), e;
		}, {
			chats: [],
			newsletters: []
		});
	}
	async function v() {
		return o("WAWebApiChat").getAllChatsDeserialized();
	}
	function S(e, t) {
		var n = b(e, t), a = n.chats, i = n.newsletters;
		return a.sort(r("WAWebChatComparator")), o("WAWebChatCollection").ChatCollection.add(a, { merge: !0 }), {
			chats: a,
			newsletters: i
		};
	}
	async function R() {
		var e = o("WAWebChatCollection").ChatCollection.filter(o("WAWebFrontendChatGetters").getShouldAppearInList).length, t = e > 0;
		o("WAWebRegionReadinessSignals").markChatlistRowsReady(t), await o("WAWebRegionReadinessSignals").waitForChatlistRowsPaint(t && (n("cr:11133") == null ? void 0 : n("cr:11133")()) === !0);
	}
	var L = null, E = !1, k = null, I = !1;
	function T(e) {
		return (n("cr:11133") == null ? void 0 : n("cr:11133")()) !== !0 || I || E || o("WAWebCmd").Cmd.isMainStreamReadyMd ? Promise.resolve() : (k = e, L != null || (L = (async function() {
			if (await o("WAWebDbEncryptionKey").DbEncKeyStore.waitForFinalDbMsgEncKey(), await o("WAWebModelStorageInitialize").initializeWithoutGKs(), !(I || E || o("WAWebCmd").Cmd.isMainStreamReadyMd)) {
				var e = await v();
				S(e, k), E = !0, await R();
			}
		})().catch(function(e) {
			o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[offline-resume] provisional chat row restore failed"]))).catching(r("getErrorSafe")(e)).sendLogs("provisional-chat-row-restore-failed");
		}).finally(function() {
			L = null;
		})), L);
	}
	async function D() {
		I = !0;
		var e = !1;
		try {
			return L != null && await L, o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint("RestoreChatsAndMessages_start"), await o("WAWebDbEncryptionKey").DbEncKeyStore.waitForFinalDbMsgEncKey(), o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[init-from-storage] load DbEncKeyStore key"]))), o("WAWebAppTracker").AppTracker.start(o("WAWebAppTracker").AppTrackerType.InitialChatLoad), e = !0, await o("WAWebModelStorageInitialize").initializeWithoutGKs().then(async function() {
				var e;
				(e = o("WAWebWamOfflineResumeReporter")).OfflineResumeReporter.qpl.addPoint("RestoreChats_start"), e.OfflineResumeReporter.qpl.addPoint("RCMGetChats_start");
				var t = await v();
				e.OfflineResumeReporter.qpl.addPoint("RCMGetChats_end"), e.OfflineResumeReporter.qpl.addPoint("RCMPopulateMatCache_start"), e.OfflineResumeReporter.qpl.addPoint("RCMPopulateMatCache_end"), e.OfflineResumeReporter.qpl.addPoint("RCMFilterChats_start");
				var n = o("WAWebThreadMetadata").getOfflineThreadMetaPreview(), a = S(t, n == null ? void 0 : n.chatTimestamp), i = a.chats, l = a.newsletters;
				o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.logOfflineChatThreadCount(t.length), await R(), o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint("RCMFilterChats_end"), o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint("RestoreChats_end"), o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint("RestoreChatsAndMessagesFirstChunk_start");
				var s = o("WAWebABProps").getABPropConfigValue("web_init_chat_batch_size") || C;
				o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addAnnotations({ int: { web_init_chat_batch_size: s } }), o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() && (l.sort(r("WAWebChatComparator")), r("WAWebNewsletterCollection") == null || r("WAWebNewsletterCollection").add(l, { merge: !0 }), x(q(l), s));
				var u = await x(q(i), s);
				return o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint("RestoreChatsAndMessagesFirstChunk_end"), o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint("RCMUpdateDuplicatedLidThread_start"), o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint("RCMUpdateDuplicatedLidThread_end"), u;
			}).then(o("WAWebRestoreBusinessInfo").restoreBusinessInfo).then(function() {
				o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint("RestoreChatsAndMessages_end");
			}).catch(function(e) {
				throw o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["restoreChatsAndMessages: failed with error"]))).catching(r("getErrorSafe")(e)), e;
			});
		} finally {
			I = !1, e && o("WAWebAppTracker").AppTracker.stop(o("WAWebAppTracker").AppTrackerType.InitialChatLoad);
		}
	}
	function x(e, t) {
		for (var n = Promise.resolve(), a = new (o("WAWebPromiseQueue")).PromiseQueue(), i = function(l) {
			var i = e.slice(l, l + t), s = async function() {
				var e = self.performance.now();
				l === 0 && o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint("RCMChatMetadata_start");
				var t = await $(i);
				l === 0 && o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint("RCMChatMetadata_end"), l === 0 && o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint("RCMRestoreMessages_start"), await P(t), l === 0 && o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint("RCMRestoreMessages_end");
				var n = [];
				t.forEach(function(e) {
					var t, a = e.chat, i = o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled != null && o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() ? (t = o("WAWebChatCollection").ChatCollection.get(a.id)) != null ? t : r("WAWebNewsletterCollection") == null ? void 0 : r("WAWebNewsletterCollection").get(a.id) : o("WAWebChatCollection").ChatCollection.get(a.id);
					i && (i.set({ pendingInitialLoading: !1 }), o("WAWebChatGetters").getIsGroup(i) && n.push(String(a.id)));
				}), await o("WAWebRestoreGroupParticipantsAction").restoreGroupParticipantsForChats(n);
			};
			l === 0 ? n = a.enqueue(function() {
				return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("initialChatLoad", s, { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP }).waitUntilCompleted();
			}) : a.enqueue(async function() {
				return await o("WAWebEventsWaitForOfflineDeliveryEnd").waitForOfflineDeliveryEnd(), o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("initialChatLoad", s).waitUntilCompleted();
			});
		}, l = 0; l < e.length; l += t) i(l);
		return n;
	}
	function $(e) {
		return Promise.all(e.map(function(e) {
			var t = N(e);
			return o("WAWebDBMessageStoreUtils").getKeyMsgsFromChatHistory(e, t).then(function(n) {
				var r = n.anchor, o = n.lastReceivedKey, a = n.previewMsg, i = babelHelpers.extends({}, e, { unreadMsgAnchorId: t ? r : void 0 });
				return {
					chat: i,
					previewMsg: a,
					lastReceivedKey: o
				};
			});
		}));
	}
	function P(e) {
		var t = M(e), n = t.lastMessageKeys, r = t.missingAnchorCount, a = t.missingAnchorIds, i = t.tasks;
		return i.push(O(n)), Promise.all(i).then(function() {
			r > 0 && o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
				"",
				" unread anchor messages not in message collection => ",
				""
			])), r, a);
		});
	}
	function N(e) {
		return e.t != null && o("WATimeUtils").happenedWithin(o("WATimeUtils").castToUnixTime(e.t), o("WATimeUtils").DAY_SECONDS) || e.pin != null && e.pin > 0;
	}
	function M(e) {
		var t = [], n = [], a = [], i = 0;
		return e.forEach(function(e) {
			var l = e.chat, s = e.lastReceivedKey, u = e.previewMsg;
			if (N(l) || u && u.id !== s) {
				var c = self.performance.now();
				t.push(w(l, u).then(function() {
					var e = l.unreadMsgAnchorId;
					if (!r("isStringNullOrEmpty")(e)) {
						var t = r("WAWebMsgKey").fromString(e), n = o("WAWebMsgCollection").MsgCollection.get(t);
						if (!n) {
							i++, a.length < 3 && a.push(e);
							return;
						}
						var s = o("WAWebChatCollection").ChatCollection.get(o("WAWebWidFactory").createWidFromWidLike(l.id));
						s && (s.unreadMsgAnchor = n);
					}
				}));
			} else n.push(String(s));
		}), {
			tasks: t,
			lastMessageKeys: n,
			missingAnchorIds: a,
			missingAnchorCount: i
		};
	}
	async function w(e, t) {
		if (!N(e) || e.unreadCount === 0) return A(e, t);
		if (e.unreadCount >= h) return await A(e, t), F(e);
		o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["restoreMessagesForChat: restoring last ", " messages."])), e.unreadCount + y);
		var n = [];
		if (t) {
			var r = o("WAWebDBMessageSerialization").messageFromDbRow(t), a = o("WAWebDBAddOnProviders").getAddOnProviderForFutureproofMsg(r);
			a != null && a.canRenderInUi(r) && n.push(t.id.toString());
		}
		var i = await o("WAWebDBQueryChatVisibleMessageHelper").queryChatVisibleMessageHelper({
			lowerBound: e.id + "_/",
			upperBound: e.id + "_g",
			options: { reverse: !0 },
			count: e.unreadCount + y,
			addOnReparseExclusionList: n
		});
		await o("WAWebMsgCollection").MsgCollection.processMultipleMessages(o("WAWebWidFactory").createWidFromWidLike(e.id), i.map(function(e) {
			return o("WAWebDBMessageSerialization").messageFromDbRow(e);
		}).reverse(), {
			pendingMsgsDone: !0,
			resume: !1,
			add: "last",
			isHistory: !0
		}, "restoreMessagesForChat");
	}
	async function A(e, t) {
		var n, r = [];
		if (t != null && t.internalId != null) {
			var a = t.internalId, i = o("WAWebDBMessageSerialization").messageFromDbRow(t), l = o("WAWebDBAddOnProviders").getAddOnProviderForFutureproofMsg(i);
			t && l != null && l.canRenderInUi(i) && r.push(t.id.toString()), n = await o("WAWebDBQueryChatVisibleMessageHelper").queryChatVisibleMessageHelper({
				lowerBound: a,
				upperBound: e.id + "_g",
				options: { lowerInclusive: !0 },
				addOnReparseExclusionList: r
			});
		} else {
			var s = 1;
			n = await o("WAWebDBQueryChatVisibleMessageHelper").queryChatVisibleMessageHelper({
				lowerBound: e.id + "_/",
				upperBound: e.id + "_g",
				options: { reverse: !0 },
				count: s
			});
		}
		o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["processPreviewMessageInChat: restoring ", " message."])), n.length), o("WAWebMsgCollection").MsgCollection.processMultipleMessages(o("WAWebWidFactory").createWidFromWidLike(e.id), n.map(function(e) {
			return o("WAWebDBMessageSerialization").messageFromDbRow(e, function(e) {
				e.invis = !0;
			});
		}), {
			pendingMsgsDone: !1,
			resume: !1,
			add: "last",
			isHistory: !0
		}, "processPreviewMessageInChat");
	}
	async function F(e) {
		var t = e.unreadMsgAnchorId;
		if (r("isStringNullOrEmpty")(t)) return o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["unreadMsgAnchorId is not defined"]))), Promise.resolve();
		await o("WAWebSchemaMessage").getMessageTable().equals(["id"], t).then(function(t) {
			if (t.length === 0) {
				o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose(["Unread anchor message does not exist in message table"])));
				return;
			}
			var n = o("WAWebDBMessageUtils").getInChatMsgId(t[0].internalId || ""), a = B(e, n, y), i = W(e, n, y), l = Promise.all([a, i]).then(function(e) {
				var t = e[0], n = e[1];
				return [].concat(t, n);
			});
			return l.then(function(t) {
				var n = t.length - y;
				if (!(n < 0)) {
					var a = t[t.length - y].id, i = t.map(function(e) {
						return o("WAWebDBMessageSerialization").messageFromDbRow(e, function(e) {
							e.invis = !0;
						});
					});
					return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(o("WAWebWidFactory").createWidFromWidLike(e.id), i, {
						pendingMsgsDone: !0,
						resume: !1,
						add: "unread",
						isHistory: !0,
						firstUnreadKey: r("WAWebMsgKey").fromString(a)
					}, "processUnreadMessage", new (o("WAWebChatMsgsCollection")).ChatMsgsCollection());
				}
			});
		});
	}
	function O(e) {
		var t = self.performance.now();
		return o("WAWebSchemaMessage").getMessageTable().bulkGet(e).then(async function(e) {
			await Promise.all(e.map(function(e) {
				if (!e) return Promise.resolve();
				var t = o("WAWebDBMessageSerialization").messageFromDbRow(e, function(e) {
					e.invis = !0;
				});
				return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(t.id.remote, [t], {
					pendingMsgsDone: !1,
					resume: !1,
					add: "last",
					isHistory: !0
				}, "loadLastMessagesFromDb");
			}));
		}).catch(function(e) {
			throw o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose(["loadLastMessagesFromDB: failed with error"]))).catching(r("getErrorSafe")(e)), e;
		});
	}
	function B(e, t, n) {
		var r = {
			lowerInclusive: !0,
			upperInclusive: !1
		}, a = o("WAWebDBMessageUtils").beginningOfChat(o("WAWebWidFactory").createWid(e.id)), i = o("WAWebDBMessageUtils").craftInternalId({
			chatId: e.id,
			inChatMsgId: t
		});
		return o("WAWebDBQueryChatVisibleMessageHelper").queryChatVisibleMessageHelper({
			lowerBound: a,
			upperBound: i,
			options: babelHelpers.extends({}, r, { reverse: !0 }),
			count: y
		}).then(function(e) {
			return e.reverse();
		});
	}
	function W(e, t, n) {
		var r = {
			lowerInclusive: !0,
			upperInclusive: !1
		};
		return o("WAWebDBQueryChatVisibleMessageHelper").queryChatVisibleMessageHelper({
			lowerBound: o("WAWebDBMessageUtils").craftInternalId({
				chatId: e.id,
				inChatMsgId: t
			}),
			upperBound: o("WAWebDBMessageUtils").endOfChat(o("WAWebWidFactory").createWid(e.id)),
			options: r,
			count: y
		});
	}
	function q(t) {
		return t.map(function(t) {
			var n = t.id, r = babelHelpers.objectWithoutPropertiesLoose(t, e);
			return babelHelpers.extends({}, r, { id: n.toString() });
		});
	}
	l.restoreChatRowsForDisplay = T, l.restoreChatsAndMessages = D;
}), 98);
