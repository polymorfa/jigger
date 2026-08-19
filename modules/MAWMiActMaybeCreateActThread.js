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
	"Promise",
	"ReQL",
	"asyncToGeneratorRuntime",
	"sendToSentQPLLogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = o("MWFBLogger").MWLogger().tags([
		"Occam",
		"CreateThread",
		"MiActMapping"
	]), m = new Map(), p = new Set();
	function _(e, t, a, i, l, s) {
		o("MAWThreadMappingQPL").addPoint("upgrade_optimistic_to_act_thread", s);
		var m = i.actorId, p = i.participantIds, _ = p.filter(function(e) {
			return e !== (u || (u = o("I64"))).to_string(m);
		});
		if (o("LSMessagingThreadTypeUtil").isOneToOne(a)) {
			var f = _.length === 1 ? _ : p;
			return o("MAWThreadMappingQPL").measurePerformance("maw_create_1-1_thread", s, function() {
				return o("MAWCreateOneToOneThread").call(e, (u || (u = o("I64"))).of_string(f[0]), u.to_string(t), l, void 0, s);
			});
		} else if (o("LSMessagingThreadTypeUtil").isGroup(a) && _.length > 1) return o("MAWThreadMappingQPL").measurePerformance("maw_create_group_thread", s, function() {
			return r("MAWCreateGroupThread")({
				db: e,
				offlineThreadingId: t,
				participantIds: p
			});
		}).then((function() {
			var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
				var r = n.isCreated, a = n.jid;
				return yield o("MAWThreadMappingQPL").end({
					instanceKey: s,
					intJid: o("MAWJids").convertChatJidToIntJid(a),
					tables: e.tables,
					threadKey: t
				}), {
					isCreated: r,
					jid: a
				};
			});
			return function(e) {
				return r.apply(this, arguments);
			};
		})());
		throw o("MAWThreadMappingQPL").addPoint("upgrade_optimistic_to_act_thread_fail", s), o("MAWThreadMappingQPL").endFailure("upgrade_optimistic_to_act_thread_fail", s), d.mustfixThrow("Did not know which type of optimistic thread to create for threadKey: %s, participantsCount: %s, threadType: %s", (u || (u = o("I64"))).to_string(t), p.length, (c || (c = o("LSIntEnum"))).toNumber(a));
	}
	function f(e, t, n, r, o, a, i, l, s) {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r, a, i, l, s, c) {
			o("MAWThreadMappingQPL").addPoint("act_thread_creation_start", s);
			var m = {
				description: l,
				fbid: n,
				instanceKey: s,
				isGroupThread: o("LSMessagingThreadTypeUtil").isGroup(r),
				jid: o("MAWJids").convertChatJidToIntJid(t),
				lastActivityTimestampMs: a,
				lastReadWatermarkTimestampMs: i
			}, p = o("MAWBulkCreateOrUpdateThreadInActWithMiData").bulkCreateOrUpdateThreadInActWithMiData(e, [m], "create_thread", c), _ = yield p, f = _[0];
			if (f.status === "rejected") throw o("MAWThreadMappingQPL").addAnnotations({ string: { retryActThreadCreationError: f.reason } }, s), o("MAWThreadMappingQPL").endFailure("act_thread_creation_fail", s), d.mustfixThrow("Failed to create ACT thread for threadKey: %s, error: %s", (u || (u = o("I64"))).to_string(n), f.reason);
			return o("MAWThreadMappingQPL").addPoint("act_thread_creation_end", s), {
				isCreated: f.value.isCreated,
				jid: f.value.chatJid
			};
		}), g.apply(this, arguments);
	}
	function h(e, t, n) {
		if (!o("LSMessagingThreadTypeUtil").isOneToOne(e)) return o("MAWThreadMappingQPL").addPoint("convert_missing_mapping_not_supported_groups", n), null;
		o("MAWThreadMappingQPL").addPoint("convert_missing_mapping_start", n);
		var r = t.actorId, a = t.participantIds, i = a.filter(function(e) {
			return e !== (u || (u = o("I64"))).to_string(r);
		});
		if (i.length !== 1) return o("MAWThreadMappingQPL").addPoint("convert_missing_mapping_fail", n), null;
		var l = i[0];
		return o("MAWThreadMappingQPL").addPoint("convert_missing_mapping_end", n), o("MAWJids").toUserJid(l);
	}
	function y(e, t, n) {
		return C.apply(this, arguments);
	}
	function C() {
		return C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
			var l, d, m, p = yield (s || (s = n("Promise"))).all([o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.tables.threads).getKeyRange(t)), o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.tables.mi_act_mapping_table).getKeyRange(t))]), _ = p[0], f = p[1], g = (l = f == null ? void 0 : f.serverThreadKey) != null ? l : t, h = _ == null ? 15 : (c || (c = o("LSIntEnum"))).unwrapIntEnum(_.threadType), y = (d = _ == null ? void 0 : _.lastActivityTimestampMs) != null ? d : (u || (u = o("I64"))).zero, C = (m = _ == null ? void 0 : _.lastReadWatermarkTimestampMs) != null ? m : (u || (u = o("I64"))).zero, b = o("MAWThreadMappingQPL").getInstanceKeyForThreadKey(g), v = o("MAWThreadLoadingState").getThreadLoadingStateForDbRows(_, f), S = v.miState === o("MAWThreadLoadingState").MiState.PARTIAL || v.miState === o("MAWThreadLoadingState").MiState.MISSING ? e.runInTransaction(function(e) {
				return r("MAWLoadThreadFromMI")(e, g, h, b, a);
			}, "readwrite", void 0, void 0, i.id + ":259").then(function() {
				return o("MAWThreadLoadingState").genThreadLoadingState(e.tables, t);
			}) : (s || (s = n("Promise"))).resolve(v), R = yield S, L = f == null ? null : o("MAWJids").convertIntJidToChatJid(f.jid, _ == null ? !1 : o("LSMessagingThreadTypeUtil").isGroup(_.threadType));
			return {
				instanceKey: b,
				jid: L,
				lastActivityTimestampMs: y,
				lastReadWatermarkTimestampMs: C,
				mappingState: R,
				threadKey: g,
				threadType: h
			};
		}), C.apply(this, arguments);
	}
	function b(e, t) {
		return v.apply(this, arguments);
	}
	function v() {
		return v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = yield o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(e.tables.participants, ["contactId"]).getKeyRange(t).map(function(e) {
				return (u || (u = o("I64"))).to_string(e.contactId);
			})), r = [o("CurrentMessengerUser").getID(), o("CurrentMessengerUser").getPageMessagingMailboxId()], a = r[0], i = r[1];
			return {
				actorId: (u || (u = o("I64"))).of_string(i !== "0" ? i : a),
				participantIds: n
			};
		}), v.apply(this, arguments);
	}
	function S(e, t, n, r, o, a, i, l, s) {
		return R.apply(this, arguments);
	}
	function R() {
		return R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r, a, i, l, s, c, g) {
			if (g === o("MAWThreadLoadingState").MiState.READY) {
				var y = yield b(t, n), C = h(r, y, s);
				if (C != null) return p.has(C) && d.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Duplicated thread creation for ", ""])), C), p.add(C), f(t, C, n, r, a != null ? a : (u || (u = o("I64"))).zero, i != null ? i : (u || (u = o("I64"))).zero, l, s);
				o("MAWThreadMappingQPL").endFailure("auth_thread_missing_mapping", s);
			}
			if (g === o("MAWThreadLoadingState").MiState.OPTIMISTIC) {
				var v = (u || (u = o("I64"))).to_string(n), S = m.get(v);
				if (S != null) return o("MAWThreadMappingQPL").endCancel("thread_creation_in_progress", s), S;
				o("sendToSentQPLLogger").markSendToSentPoint(c, "create_act_thread_start");
				var R = yield b(t, n), L = _(t, n, r, R, l, s).then(function(e) {
					return o("sendToSentQPLLogger").markSendToSentPoint(c, "create_act_thread_end"), e;
				});
				return m.set(v, L), L;
			}
			throw o("MAWThreadMappingQPL").endFailure("unhandled_thread_state_when_mapping_missing", s), d.mustfixThrow("Missing mapping from threadKey to jid");
		}), R.apply(this, arguments);
	}
	function L(e, t, n, r) {
		return E.apply(this, arguments);
	}
	function E() {
		return E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, a) {
			var l = yield y(e, t, n), s = l.instanceKey, m = l.jid, p = l.lastActivityTimestampMs, _ = l.lastReadWatermarkTimestampMs, g = l.mappingState, h = l.threadKey, C = l.threadType, b = g.actState, v = g.miState;
			if (a != null && o("sendToSentQPLLogger").addSendToSentAnnotations(a, { string: {
				actState: b.toString(),
				miState: v.toString()
			} }), o("MAWThreadMappingQPL").start({
				instanceKey: s,
				jid: m != null ? m : void 0,
				s2sInstanceKey: a,
				threadKey: h,
				trigger: "maybeCreateActThread_in_" + n
			}), m == null) return S(e, h, (c || (c = o("LSIntEnum"))).ofNumber(C), p != null ? p : (u || (u = o("I64"))).zero, _ != null ? _ : (u || (u = o("I64"))).zero, n, s, a, v);
			switch (v) {
				case o("MAWThreadLoadingState").MiState.OPTIMISTIC: return o("MAWThreadMappingQPL").endCancel("thread_should_remain_optimistic", s), {
					isCreated: !1,
					jid: m
				};
				case o("MAWThreadLoadingState").MiState.MISSING: throw d.mustfixThrow("Unreachable actState: " + b);
				case o("MAWThreadLoadingState").MiState.PARTIAL: return yield e.runInTransaction(function(e) {
					return o("MAWThreadMappingQPL").measurePerformance("retry_load_from_mi", s, function() {
						return r("MAWLoadThreadFromMI")(e, t, C, s, n);
					});
				}, "readwrite", void 0, void 0, i.id + ":465"), yield o("MAWThreadMappingQPL").end({
					instanceKey: s,
					intJid: o("MAWJids").convertChatJidToIntJid(m),
					tables: e.tables,
					threadKey: h
				}), {
					isCreated: !1,
					jid: m
				};
				case o("MAWThreadLoadingState").MiState.READY: switch (b) {
					case o("MAWThreadLoadingState").ActState.READY: return o("MAWThreadMappingQPL").endForThreadState(s, {
						actState: b,
						miState: v
					}), {
						isCreated: !1,
						jid: m
					};
					case o("MAWThreadLoadingState").ActState.IN_PROGRESS: return f(e, m, h, (c || (c = o("LSIntEnum"))).ofNumber(C), p, _, n, s);
					case o("MAWThreadLoadingState").ActState.MISSING: throw d.mustfixThrow("Unreachable actState: " + b);
					default: throw d.mustfixThrow("Unreachable actState: " + b);
				}
				default: throw d.mustfixThrow("Unreachable actState: " + v);
			}
		}), E.apply(this, arguments);
	}
	l.default = L;
}), 98);
