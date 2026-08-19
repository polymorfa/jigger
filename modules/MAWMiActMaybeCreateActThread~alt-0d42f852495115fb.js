__d("MAWMiActMaybeCreateActThread", [
	"CurrentMessengerUser",
	"I64",
	"LSIntEnum",
	"LSMessagingThreadTypeUtil",
	"MAWBulkCreateOrUpdateThreadInActWithMiData",
	"MAWCreateGroupThread",
	"MAWCreateOneToOneThread",
	"MAWJids",
	"MAWLoadThreadFromMI",
	"MAWThreadLoadingState",
	"MAWThreadMappingQPL",
	"MWFBLogger",
	"ReQL",
	"sendToSentQPLLogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = o("MWFBLogger").MWLogger().tags([
		"Occam",
		"CreateThread",
		"MiActMapping"
	]), d = new Map(), m = new Set();
	function p(e, t, n, a, i, l) {
		o("MAWThreadMappingQPL").addPoint("upgrade_optimistic_to_act_thread", l);
		var d = a.actorId, m = a.participantIds, p = m.filter(function(e) {
			return e !== (s || (s = o("I64"))).to_string(d);
		});
		if (o("LSMessagingThreadTypeUtil").isOneToOne(n)) {
			var _ = p.length === 1 ? p : m;
			return o("MAWThreadMappingQPL").measurePerformance("maw_create_1-1_thread", l, function() {
				return o("MAWCreateOneToOneThread").call(e, (s || (s = o("I64"))).of_string(_[0]), s.to_string(t), i, void 0, l);
			});
		} else if (o("LSMessagingThreadTypeUtil").isGroup(n) && p.length > 1) return o("MAWThreadMappingQPL").measurePerformance("maw_create_group_thread", l, function() {
			return r("MAWCreateGroupThread")({
				db: e,
				offlineThreadingId: t,
				participantIds: m
			});
		}).then(async function(n) {
			var r = n.isCreated, a = n.jid;
			return await o("MAWThreadMappingQPL").end({
				instanceKey: l,
				intJid: o("MAWJids").convertChatJidToIntJid(a),
				tables: e.tables,
				threadKey: t
			}), {
				isCreated: r,
				jid: a
			};
		});
		throw o("MAWThreadMappingQPL").addPoint("upgrade_optimistic_to_act_thread_fail", l), o("MAWThreadMappingQPL").endFailure("upgrade_optimistic_to_act_thread_fail", l), c.mustfixThrow("Did not know which type of optimistic thread to create for threadKey: %s, participantsCount: %s, threadType: %s", (s || (s = o("I64"))).to_string(t), m.length, (u || (u = o("LSIntEnum"))).toNumber(n));
	}
	async function _(e, t, n, r, a, i, l, u, d) {
		o("MAWThreadMappingQPL").addPoint("act_thread_creation_start", u);
		var m = {
			description: l,
			fbid: n,
			instanceKey: u,
			isGroupThread: o("LSMessagingThreadTypeUtil").isGroup(r),
			jid: o("MAWJids").convertChatJidToIntJid(t),
			lastActivityTimestampMs: a,
			lastReadWatermarkTimestampMs: i
		}, p = o("MAWBulkCreateOrUpdateThreadInActWithMiData").bulkCreateOrUpdateThreadInActWithMiData(e, [m], "create_thread", d), _ = await p, f = _[0];
		if (f.status === "rejected") throw o("MAWThreadMappingQPL").addAnnotations({ string: { retryActThreadCreationError: f.reason } }, u), o("MAWThreadMappingQPL").endFailure("act_thread_creation_fail", u), c.mustfixThrow("Failed to create ACT thread for threadKey: %s, error: %s", (s || (s = o("I64"))).to_string(n), f.reason);
		return o("MAWThreadMappingQPL").addPoint("act_thread_creation_end", u), {
			isCreated: f.value.isCreated,
			jid: f.value.chatJid
		};
	}
	function f(e, t, n) {
		if (!o("LSMessagingThreadTypeUtil").isOneToOne(e)) return o("MAWThreadMappingQPL").addPoint("convert_missing_mapping_not_supported_groups", n), null;
		o("MAWThreadMappingQPL").addPoint("convert_missing_mapping_start", n);
		var r = t.actorId, a = t.participantIds, i = a.filter(function(e) {
			return e !== (s || (s = o("I64"))).to_string(r);
		});
		if (i.length !== 1) return o("MAWThreadMappingQPL").addPoint("convert_missing_mapping_fail", n), null;
		var l = i[0];
		return o("MAWThreadMappingQPL").addPoint("convert_missing_mapping_end", n), o("MAWJids").toUserJid(l);
	}
	async function g(e, t, n) {
		var a, l, c, d, m = await Promise.all([(d = o("ReQL")).firstAsync(d.fromTableAscending(e.tables.threads).getKeyRange(t)), d.firstAsync(d.fromTableAscending(e.tables.mi_act_mapping_table).getKeyRange(t))]), p = m[0], _ = m[1], f = (a = _ == null ? void 0 : _.serverThreadKey) != null ? a : t, g = p == null ? 15 : (u || (u = o("LSIntEnum"))).unwrapIntEnum(p.threadType), h = (l = p == null ? void 0 : p.lastActivityTimestampMs) != null ? l : (s || (s = o("I64"))).zero, y = (c = p == null ? void 0 : p.lastReadWatermarkTimestampMs) != null ? c : (s || (s = o("I64"))).zero, C = o("MAWThreadMappingQPL").getInstanceKeyForThreadKey(f), b = o("MAWThreadLoadingState").getThreadLoadingStateForDbRows(p, _), v = b.miState === o("MAWThreadLoadingState").MiState.PARTIAL || b.miState === o("MAWThreadLoadingState").MiState.MISSING ? e.runInTransaction(function(e) {
			return r("MAWLoadThreadFromMI")(e, f, g, C, n);
		}, "readwrite", void 0, void 0, i.id + ":259").then(function() {
			return o("MAWThreadLoadingState").genThreadLoadingState(e.tables, t);
		}) : Promise.resolve(b), S = await v, R = _ == null ? null : o("MAWJids").convertIntJidToChatJid(_.jid, p == null ? !1 : o("LSMessagingThreadTypeUtil").isGroup(p.threadType));
		return {
			instanceKey: C,
			jid: R,
			lastActivityTimestampMs: h,
			lastReadWatermarkTimestampMs: y,
			mappingState: S,
			threadKey: f,
			threadType: g
		};
	}
	async function h(e, t) {
		var n = await o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(e.tables.participants, ["contactId"]).getKeyRange(t).map(function(e) {
			return (s || (s = o("I64"))).to_string(e.contactId);
		})), r = [o("CurrentMessengerUser").getID(), o("CurrentMessengerUser").getPageMessagingMailboxId()], a = r[0], i = r[1];
		return {
			actorId: (s || (s = o("I64"))).of_string(i !== "0" ? i : a),
			participantIds: n
		};
	}
	async function y(t, n, r, a, i, l, u, g, y) {
		if (y === o("MAWThreadLoadingState").MiState.READY) {
			var C = await h(t, n), b = f(r, C, u);
			if (b != null) return m.has(b) && c.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Duplicated thread creation for ", ""])), b), m.add(b), _(t, b, n, r, a != null ? a : (s || (s = o("I64"))).zero, i != null ? i : (s || (s = o("I64"))).zero, l, u);
			o("MAWThreadMappingQPL").endFailure("auth_thread_missing_mapping", u);
		}
		if (y === o("MAWThreadLoadingState").MiState.OPTIMISTIC) {
			var v = (s || (s = o("I64"))).to_string(n), S = d.get(v);
			if (S != null) return o("MAWThreadMappingQPL").endCancel("thread_creation_in_progress", u), S;
			o("sendToSentQPLLogger").markSendToSentPoint(g, "create_act_thread_start");
			var R = await h(t, n), L = p(t, n, r, R, l, u).then(function(e) {
				return o("sendToSentQPLLogger").markSendToSentPoint(g, "create_act_thread_end"), e;
			});
			return d.set(v, L), L;
		}
		throw o("MAWThreadMappingQPL").endFailure("unhandled_thread_state_when_mapping_missing", u), c.mustfixThrow("Missing mapping from threadKey to jid");
	}
	async function C(e, t, n, a) {
		var l = await g(e, t, n), d = l.instanceKey, m = l.jid, p = l.lastActivityTimestampMs, f = l.lastReadWatermarkTimestampMs, h = l.mappingState, C = l.threadKey, b = l.threadType, v = h.actState, S = h.miState;
		if (a != null && o("sendToSentQPLLogger").addSendToSentAnnotations(a, { string: {
			actState: v.toString(),
			miState: S.toString()
		} }), o("MAWThreadMappingQPL").start({
			instanceKey: d,
			jid: m != null ? m : void 0,
			s2sInstanceKey: a,
			threadKey: C,
			trigger: "maybeCreateActThread_in_" + n
		}), m == null) return y(e, C, (u || (u = o("LSIntEnum"))).ofNumber(b), p != null ? p : (s || (s = o("I64"))).zero, f != null ? f : (s || (s = o("I64"))).zero, n, d, a, S);
		switch (S) {
			case o("MAWThreadLoadingState").MiState.OPTIMISTIC: return o("MAWThreadMappingQPL").endCancel("thread_should_remain_optimistic", d), {
				isCreated: !1,
				jid: m
			};
			case o("MAWThreadLoadingState").MiState.MISSING: throw c.mustfixThrow("Unreachable actState: " + v);
			case o("MAWThreadLoadingState").MiState.PARTIAL: return await e.runInTransaction(function(e) {
				return o("MAWThreadMappingQPL").measurePerformance("retry_load_from_mi", d, function() {
					return r("MAWLoadThreadFromMI")(e, t, b, d, n);
				});
			}, "readwrite", void 0, void 0, i.id + ":465"), await o("MAWThreadMappingQPL").end({
				instanceKey: d,
				intJid: o("MAWJids").convertChatJidToIntJid(m),
				tables: e.tables,
				threadKey: C
			}), {
				isCreated: !1,
				jid: m
			};
			case o("MAWThreadLoadingState").MiState.READY: switch (v) {
				case o("MAWThreadLoadingState").ActState.READY: return o("MAWThreadMappingQPL").endForThreadState(d, {
					actState: v,
					miState: S
				}), {
					isCreated: !1,
					jid: m
				};
				case o("MAWThreadLoadingState").ActState.IN_PROGRESS: return _(e, m, C, (u || (u = o("LSIntEnum"))).ofNumber(b), p, f, n, d);
				case o("MAWThreadLoadingState").ActState.MISSING: throw c.mustfixThrow("Unreachable actState: " + v);
				default: throw c.mustfixThrow("Unreachable actState: " + v);
			}
			default: throw c.mustfixThrow("Unreachable actState: " + S);
		}
	}
	l.default = C;
}), 98);
