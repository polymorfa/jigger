__d("MAWBulkMaybeUpsertThreadAndParticipants", [
	"FBLogger",
	"MAWCreateUpdateThreadUtils",
	"MAWDbParticipantTxns",
	"MAWDexieError",
	"MAWDexieTable",
	"MAWGetOrCreateThreadTxns",
	"MAWInMemoryGroupInfoStore",
	"MAWInMemoryParticipantStore",
	"MAWIndexedDb",
	"MAWODSProxy",
	"MAWTransactionMode",
	"MawMpsThreadMsgInfo",
	"MaybeCreateOrUpdateThreadResultCache",
	"WAJids",
	"WAOdsEnums",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = async function(t, n) {
		var e = t.threads.filter(function(e) {
			return !o("MaybeCreateOrUpdateThreadResultCache").cache__I_KNOW_WHAT_I_AM_DOING.has(e.chatJid);
		});
		if (e.length > 0) {
			var r = e.map(function(e) {
				var t = e.chatJid;
				return t;
			}), a = null;
			if (o("MAWInMemoryParticipantStore").isInMemoryParticipantsStoreExperiment()) {
				var i = [], l = [];
				r.forEach(function(e) {
					return o("WAJids").switchOnMsgrChatJidType(e, {
						group: function() {
							return l.push(e);
						},
						user: function() {
							return i.push(e);
						}
					});
				}), o("MAWInMemoryParticipantStore").seedOneToOneParticipantsStore(i), a = l.length > 0 ? o("MAWInMemoryParticipantStore").hydrateGroupParticipantsFromLSDBWithTimeout(l) : null;
			}
			var u = await o("MawMpsThreadMsgInfo").bulkGetThreadMsgInfo(r);
			await a;
			var c = await s(babelHelpers.extends({ threads: e }, t), n, u);
			c.forEach(function(e) {
				e.status === "fulfilled" && o("MaybeCreateOrUpdateThreadResultCache").cache__I_KNOW_WHAT_I_AM_DOING.set(e.value.chatJid, e);
			});
		}
		return t.threads.map(function(e) {
			var n;
			return (n = o("MaybeCreateOrUpdateThreadResultCache").cache__I_KNOW_WHAT_I_AM_DOING.get(e.chatJid)) != null ? n : {
				jid: e.chatJid,
				reason: t.reason,
				status: "rejected"
			};
		});
	}, s = o("MAWIndexedDb").makeMsgrTransactor({
		messages: o("MAWTransactionMode").READWRITE,
		participants: o("MAWTransactionMode").READWRITE,
		threads: o("MAWTransactionMode").READWRITE
	}, "bulkMaybeCreateOrUpdateThread", function(e) {
		return (function(t, n, a) {
			var i = t.reason, l = t.s2sInstanceKey, s = t.threads, d = function(t) {
				o("MAWCreateUpdateThreadUtils").maybeSendMICState(i, t, n == null ? void 0 : n.fromClientId);
			};
			g(i, n, s.length);
			var _ = Array.from(new Map(s.map(function(e) {
				return [e.authoritativeThreadKey, e];
			})).values()), y = new Map(), C = _.map(function(e) {
				var t = e.chatJid, n = e.instanceKey;
				return n != null && y.set(t, n), n;
			}).filter(Boolean);
			return o("MAWCreateUpdateThreadUtils").sendThreadMappingQPLPoints("bulk_get_or_create_thread_start", C, void 0, l), o("MAWGetOrCreateThreadTxns").bulkGetOrCreateThread(e, h(_), {
				logState: d,
				threadMsgInfo: a
			}).then(function(e) {
				return d("threadMapping4BulkGetDone"), e.map(function(e) {
					var t = e.adminMsgParams, n = e.created, r = e.thread, a = y.get(r.jid);
					return o("MAWCreateUpdateThreadUtils").sendThreadMappingQPLPoint("bulk_get_or_create_thread_end", a, void 0, l), {
						adminMsgParams: t,
						created: n,
						instanceKey: a,
						thread: r
					};
				});
			}).then(function(t) {
				return t.map(function(t) {
					var n = t.adminMsgParams, r = t.created, a = t.instanceKey, i = t.thread;
					return o("WAJids").switchOnMsgrChatJidType(i.jid, {
						group: function(o) {
							return u(e, o, a, l).then(function(e) {
								return p(i, e, r, n, o);
							});
						},
						user: function(o) {
							return c(e, o, a, l).then(function(e) {
								return m(i, e, r, n);
							});
						}
					});
				});
			}).then(function(e) {
				return o("MAWDexieTable").dexieAllSettled(e).then(function(e) {
					f(d);
					var t = [];
					for (var n of e.entries()) {
						var r = n[0], o = n[1];
						o.status === "rejected" ? t.push(babelHelpers.extends({ jid: s[r].chatJid }, o)) : t.push(o);
					}
					return t;
				});
			}).catch(function(e) {
				throw e.name === o("MAWDexieError").DEXIE_ERROR.BulkError && e.failures.forEach(function(e) {
					e.name === o("MAWDexieError").DEXIE_ERROR.ConstraintError && e.message.includes("authoritativeThreadKey") && r("FBLogger")("maw_threads").warn("[ConstraintError/authoritativeThreadKey] bulk create threads %s", Array.from(new Set(s.map(function(e) {
						return e.authoritativeThreadKey;
					}))).length - Array.from(new Set(s.map(function(e) {
						return e.chatJid;
					}))).length);
				}), e;
			});
		});
	});
	function u(e, t, n, r) {
		return o("MAWCreateUpdateThreadUtils").sendThreadMappingQPLPoint("get_participants_for_group_start", n, void 0, r), o("MAWDbParticipantTxns").getParticipantsInThreads(e, [t]).then(function(e) {
			return o("MAWCreateUpdateThreadUtils").sendThreadMappingQPLPoint("get_participants_for_group_end", n, { int: { participantsLoaded: e.length } }, r), e;
		});
	}
	function c(e, t, n, r) {
		return o("MAWCreateUpdateThreadUtils").sendThreadMappingQPLPoint("upsert_participants_in_1_to_1_start", n, void 0, r), o("MAWDbParticipantTxns").bulkRemoveIncorrectAndInsertMissingParticipantsInOneToOneThread(e, t, !1).then(function(e) {
			return o("MAWCreateUpdateThreadUtils").sendThreadMappingQPLPoint("upsert_participants_in_1_to_1_end", n, { int: { participantsLoaded: e.length } }, r), e;
		});
	}
	function d(e, t, n, r) {
		return {
			adminMsgParams: r,
			chatJid: e.jid,
			clientThreadKey: e.optimisticThreadKey,
			folder: e.folder,
			isCreated: n,
			participants: t.map(function(e) {
				var t = e.type, n = e.userJid;
				return {
					type: t,
					userJid: n
				};
			})
		};
	}
	function m(e, t, n, r) {
		return babelHelpers.extends({}, d(e, t, n, r), { shouldQueryForGroup: !1 });
	}
	function p(e, t, n, r, o) {
		return babelHelpers.extends({}, d(e, t, n, r), { shouldQueryForGroup: n || t.length === 0 || t.some(function(e) {
			return e.addressable !== !0;
		}) || _(o) });
	}
	function _(e) {
		return o("MAWInMemoryGroupInfoStore").getInMemoryGroupInfo(e) == null;
	}
	function f(e) {
		e("threadMapping5LoadedParticipantsAndMsg");
	}
	function g(e, t, n) {
		o("MAWODSProxy").odsBumpEntityKey({
			entity: o("WAOdsEnums").Entity.MAW_THREAD_MAPPING,
			key: "bulk_create_thread_backend." + (e != null ? e : "unknown")
		});
		var r = function(r, a) {
			o("MAWCreateUpdateThreadUtils").maybeSendMICPoint(e, r, t == null ? void 0 : t.fromClientId, a);
		};
		r("bulk_create_thread_start", { int: { thread_mapping_unique_threads: n } });
	}
	function h(e) {
		return e.map(function(e) {
			return {
				authoritativeThreadKey: e.authoritativeThreadKey,
				description: "bulkCreateThread",
				instanceKey: e.instanceKey,
				jid: e.chatJid,
				lastActivityTimestamp: o("WATimeUtils").castToMillisTime(e.lastActivityTimestampMs),
				lastReadWatermarkTimestamp: o("WATimeUtils").castToMillisTime(e.lastReadWatermarkTimestampMs)
			};
		});
	}
	l.bulkMaybeCreateOrUpdateThread = e, l.getOutputForGroupThread = p, l.isGroupInfoMissingInMemory = _;
}), 98);
