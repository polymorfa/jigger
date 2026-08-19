__d("MAWEphemeralMsgTxns", [
	"EBLogger",
	"MAWBridgeMsgCountdown",
	"MAWDbMsg",
	"MAWDbMsgTxns",
	"MAWDbThreadTxns",
	"MAWDbXMATxns",
	"MAWDexieTable",
	"MAWEphemeralCleaner",
	"MAWEphemeralConsts",
	"MAWEphemeralMsgUtils",
	"MAWEphemeralSettingsCache",
	"MAWEphemeralSettingsTxns",
	"MAWInMemoryThreadStore",
	"MAWIndexedDb",
	"MAWLoggerUtils",
	"MAWODSProxy",
	"MAWThreadSnippetUtils",
	"MWFBLogger",
	"WAJids",
	"WAOdsEnums",
	"WATimeUtils",
	"WmiMetadataEphemeralSyncResponseBackoffWriter",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _ = o("MWFBLogger").MWLogger().tags([
		(p = o("MAWLoggerUtils")).Tag.Ephemeral,
		p.Tag.SettingSync,
		p.Tag.Incoming
	]), f = o("MWFBLogger").MWLogger().tags([
		p.Tag.Ephemeral,
		p.Tag.OnRead,
		p.Tag.Countdown
	]);
	function g(e, t, n) {
		return n === void 0 && (n = function() {
			return !0;
		}), o("MAWDbMsgTxns").getThreadMessagesBySortOrder(e, t, !1, !0).filter(n).limit(1).toArray().then(function(e) {
			var t;
			return {
				needsUpdate: !0,
				value: (t = e[0]) != null ? t : null
			};
		});
	}
	function h(e, t, n) {
		return n.size === 0 ? o("MAWDexieTable").dexieResolve() : o("MAWDbThreadTxns").getThread(e, t).then(function(t) {
			if (t.success) {
				var r = t.value;
				return o("MAWDexieTable").dexieAll([o("MAWDbMsgTxns").getThreadOldestMessageId(e, r.jid), o("MAWDbMsgTxns").getThreadNewestMessageId(e, r.jid)]).then(function(t) {
					var a = t[0], i = t[1];
					if (!(a == null || i == null)) {
						var l = o("MAWEphemeralMsgUtils").filterNonExpiredMsg(n), s = n.has(a) ? g(e, r.jid, l) : o("MAWDexieTable").dexieResolve({ needsUpdate: !1 }), u = n.has(i) ? o("MAWDbMsgTxns").getThreadMessagesBySortOrder(e, r.jid, !0, !1).filter(l).reverse().limit(1).toArray().then(function(t) {
							var a = t[0];
							return a != null && o("MAWThreadSnippetUtils").isDbMsgDisabledForThreadSnippet(a) ? o("MAWThreadSnippetUtils").recalculateSnippetFromScratch_EXPENSIVE(e, r, n).then(function(e) {
								return {
									needsUpdate: !0,
									value: e != null ? e : null
								};
							}) : {
								needsUpdate: !0,
								value: a != null ? a : null
							};
						}) : o("MAWDexieTable").dexieResolve({ needsUpdate: !1 });
						return o("MAWDexieTable").dexieAll([s, u]).then(function(t) {
							var n, l, s, u, c = t[0], d = t[1];
							if (!(!c.needsUpdate && !d.needsUpdate)) {
								var m = d.needsUpdate ? (n = (l = d.value) == null ? void 0 : l.msgId) != null ? n : void 0 : i, p = d.needsUpdate ? d.value != null ? o("WATimeUtils").castUnixTimeToMillisTime(o("MAWDbMsg").getCanonicalTsFromMsg(d.value)) : void 0 : r.snippetMsgTs, _ = babelHelpers.extends({}, r, {
									oldestMsg: c.needsUpdate ? (s = (u = c.value) == null ? void 0 : u.msgId) != null ? s : null : a,
									snippetMsg: m,
									snippetMsgTs: p
								});
								o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() && o("MAWInMemoryThreadStore").getReadwriteInMemoryThreadsStore().compareAndStore(_, {
									oldestMsg: _.oldestMsg,
									snippetMsg: m,
									snippetMsgTs: p
								}, "MAWEphemeralMsgTxns.updateThreadOnMessagesExpiredFromUi"), o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() || e.threads.put(_);
							}
						});
					}
				});
			}
		});
	}
	function y(t, n, r) {
		if (r === void 0 && (r = !0), n == null || n.ephemeralSetting == null || n.ephemeralSetting.ephemeralExpirationInSec === 0) return o("MAWDexieTable").dexieResolve(n);
		var a = o("WATimeUtils").castToUnixTime(n.ts + n.ephemeralSetting.ephemeralExpirationInSec), i = o("WATimeUtils").castToUnixTime(a + o("MAWEphemeralConsts").ephemeralReportingWindowInSeconds);
		return n.ebTimestampMs != null && (o("EBLogger").EBLogger().tags(["eb_restore"]).WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Delete DM backup - S472027 follow up"]))), o("MAWODSProxy").odsBumpEntityKey({
			entity: o("WAOdsEnums").Entity.EB_RESTORE,
			key: "restore_dm_s472027"
		})), C(t, [{
			messageDeleteTs: i,
			messageExpirationTs: a,
			msgId: n.msgId,
			readTsForLogging: n.ts
		}]).then(function(e) {
			var t = e[0], n = e[1], a = e[2];
			return a.length > 0 && (f.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["markEphemeralMessageAsSent EphemeralCounter: Showing UI counter for ", ""])), String(a.map(function(e) {
				return e.msgId;
			}))), r && o("MAWIndexedDb").afterTransaction({
				tag: "MsgsStartCountdown",
				value: o("MAWBridgeMsgCountdown").createBridgeMsgsStartCountdown(a)
			})), t != null && n != null && o("MAWEphemeralCleaner").addNewEphemeralTimestamp(t, n), a[0];
		});
	}
	function C(e, t) {
		var n = t.map(function(e) {
			return e.msgId;
		});
		return o("MAWDbXMATxns").getXMAMsgIdsFromAssociatedMsgIds(e, n).then(function(r) {
			var o = new Map();
			t.forEach(function(e) {
				o.set(e.msgId, {
					messageDeleteTs: e.messageDeleteTs,
					messageExpirationTs: e.messageExpirationTs,
					readTsForLogging: e.readTsForLogging
				});
				var t = r.get(e.msgId);
				t != null && o.set(t, {
					messageDeleteTs: e.messageDeleteTs,
					messageExpirationTs: e.messageExpirationTs,
					readTsForLogging: e.readTsForLogging
				});
			});
			var a = null, i = null, l = [], s = Array.from(new Set(n.concat(Array.from(r.values()))));
			return e.messages.where("msgId").anyOf(s).toArray().then(function(t) {
				if (t.length !== 0) return t.forEach(function(e) {
					var t = e.messageExpirationTs, n = e.messageDeleteTs, r = o.get(e.msgId), s = r == null ? void 0 : r.messageExpirationTs, c = r == null ? void 0 : r.messageDeleteTs;
					if (f.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
						"updating ephemeral timestamp msg ",
						", existing expiration ",
						", existing deletion ",
						", updated expiration ",
						", updated deletion ",
						""
					])), e.msgId, t, n, s, c), !(s == null || c == null) && e.ephemeralCounterStarted !== !0) {
						(a == null || s < a) && (a = s), (i == null || c < i) && (i = c);
						var d = babelHelpers.extends({}, e, {
							ephemeralCounterStarted: !0,
							messageDeleteTs: c,
							messageExpirationTs: s
						});
						l.push(d);
					}
				}), e.messages.bulkPut(l);
			}).then(function() {
				return [
					a,
					i,
					l
				];
			});
		});
	}
	function b(e, t) {
		if (t.size === 0) return o("MAWDexieTable").dexieResolve();
		var n = [];
		return t.forEach(function(t, r) {
			n.push(h(e, r, t));
		}), o("MAWDexieTable").dexieAll(n).then(r("emptyFunction"));
	}
	function v(e, t, n, a, i) {
		if (t == null) return o("MAWDexieTable").dexieResolve();
		_.DEBUG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
			"maybeUpdateEphemeralSettingOrCheckOutOfSyncAfterWritingIncomingMsg: Message from ",
			", chat ",
			", type ",
			""
		])), n, a.jid, t.type);
		var l = o("MAWDexieTable").dexieResolve();
		if (t.ephemeralSetting == null) o("WAJids").switchOnMsgrChatJidType(a.jid, {
			group: function() {
				if (o("MAWEphemeralSettingsCache").ephemeralSettingMigrationEnabled()) {
					o("WmiMetadataEphemeralSyncResponseBackoffWriter").deleteEphemeralSyncResponseBackoffInfo([n]);
					return;
				}
				return o("MAWEphemeralSettingsTxns").maybeResetEphemeralSyncResponseBackoffInfo(e, n).then(r("emptyFunction"));
			},
			user: function() {
				o("MAWDbMsg").isMsgEligibleForTriggeringEphemeralSyncResponse(t) && (l = o("MAWEphemeralSettingsTxns").getOutOfSyncEphemeralSettingForIncomingNonEphemeralMsg(e, a.jid).then(function(e) {
					var t;
					return e == null || (t = e.value) == null ? void 0 : t.outOfSyncEphemeralSetting;
				}));
			}
		});
		else if (t.messageExpirationTs != null && t.messageDeleteTs != null) {
			var s = t.ephemeralSetting, u = t.messageDeleteTs, p = t.messageExpirationTs;
			_.DEBUG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
				"incoming msg is ephemeral: duration ",
				", timestamp ",
				""
			])), s.ephemeralExpirationInSec, s.ephemeralLastUpdatedOrSetTimestamp), o("MAWEphemeralCleaner").addNewEphemeralTimestamp(p, u), l = o("MAWEphemeralSettingsTxns").handleAndWriteIncomingEphemeralSetting(e, n, s.ephemeralExpirationInSec, s.ephemeralLastUpdatedOrSetTimestamp, !1, a, i, null, !0).then(function(e) {
				return e == null ? void 0 : e.outOfSyncEphemeralSetting;
			});
		}
		return l.then(function(t) {
			if (t != null) _.DEBUG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
				"incoming msg is out of sync: correct duration ",
				", correct timestamp ",
				""
			])), t.correctEphemeralExpirationInSec, t.correctEphemeralLastUpdatedOrSetTimestamp);
			else {
				if (o("MAWEphemeralSettingsCache").ephemeralSettingMigrationEnabled()) {
					o("WmiMetadataEphemeralSyncResponseBackoffWriter").deleteEphemeralSyncResponseBackoffInfo([n]);
					return;
				}
				return o("MAWEphemeralSettingsTxns").maybeResetEphemeralSyncResponseBackoffInfo(e, n).then(r("emptyFunction"));
			}
		});
	}
	l.markEphemeralMessageAsSent = y, l.updateThreadsOnMessagesExpiredFromUi = b, l.syncEphemeralSettingOnIncomingMsg = v;
}), 98);
