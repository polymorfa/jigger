__d("MAWBridgeOccamadilloVerifyThreadExistsHandler", [
	"I64",
	"LSAuthorityLevel",
	"LSFactory",
	"LSThreadBitOffset",
	"LSThreadPointQueryAndRestoreMessagesWithJIDStoredProcedure",
	"MAWActThreadMapping",
	"MAWBridgeFireAndForget",
	"MAWBridgeOccamadilloCreateE2EEMetadataThreadHandlerV2",
	"MAWFolderTypes",
	"MAWJids",
	"MAWMiActGetThreadLifecycleState__DO_NOT_USE",
	"MAWMiActThreadLifecycleState__DO_NOT_USE",
	"MAWODSProxy",
	"MAWThreadDefaults",
	"MAWThreadLoadingState",
	"MAWThreadMappingQPL",
	"MWFBLogger",
	"WAOdsEnums",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"cannotReplyReason",
		"createAsOutgoing",
		"createIfMissing",
		"folder",
		"lastReadTs"
	], s, u, c = o("MWFBLogger").MWLogger().tags(["Occam", "VerifyThreadExists"]), d = [
		105,
		17,
		25,
		24,
		61,
		267,
		27
	];
	function m(e, t) {
		var n = d.filter(function(t) {
			return o("LSThreadBitOffset").has(t, e);
		});
		return o("LSThreadBitOffset").set(n, t ? o("MAWThreadDefaults").defaultGroupThreadCapabilities : o("MAWThreadDefaults").defaultThreadCapabilities, o("MAWThreadDefaults").defaultThreadCapabilities_2, o("MAWThreadDefaults").defaultThreadCapabilities_3, o("MAWThreadDefaults").defaultThreadCapabilities_4, o("MAWThreadDefaults").defaultThreadCapabilities_5);
	}
	async function p(e, t, n) {
		var r = await e.threads.get(t);
		if (r == null) return c.mustfix("Thread missing in verify thread exists"), Promise.resolve();
		var a = n.clientThreadKey != null ? (u || (u = o("I64"))).of_string(n.clientThreadKey) : r.clientThreadKey, i = m(r, n.isGroup);
		return e.threads.upsert([t], babelHelpers.extends({}, r, {
			capabilities: i[0],
			capabilities2: i[1],
			capabilities3: i[2],
			capabilities4: i[3],
			capabilities5: i[4],
			clientThreadKey: a
		}));
	}
	async function _(e, t, n, r) {
		await Promise.all([o("MAWThreadLoadingState").markActThreadLoadingAsCompleted(e, {
			intJid: n,
			threadKey: t
		}, r.instanceKey), g(e, t, r)]);
	}
	async function f(e, t, n) {
		(u || (u = o("I64"))).equal(t, n) || await e.threads.delete(n);
	}
	async function g(e, t, n) {
		var r = n.clientThreadKey, a = n.instanceKey, i = n.isGroup;
		await o("MAWThreadMappingQPL").measurePerformanceForNullableInstanceKey("handle_existing_thread", a, function() {
			return Promise.all([p(e, t, {
				clientThreadKey: r,
				isGroup: i
			}), r != null && f(e, t, (u || (u = o("I64"))).of_string(r))]);
		});
	}
	async function h(e, t) {
		var n = t.authoritativeThreadKey, a = t.clientThreadKey, i = t.instanceKey, l = t.intJid;
		i != null && o("MAWThreadMappingQPL").allowToSkipUpgradingOptimisticThreadInMI(i);
		var s = n != null ? n : a;
		s != null && (await o("MAWThreadLoadingState").markActThreadLoadingAsCompleted(e, {
			intJid: l,
			threadKey: (u || (u = o("I64"))).of_string(s)
		}, i), await o("MAWThreadMappingQPL").measurePerformanceForNullableInstanceKey("thread_point_query_sproc", i, function() {
			return r("LSThreadPointQueryAndRestoreMessagesWithJIDStoredProcedure")(r("LSFactory")(e), { waJid: l });
		}));
	}
	async function y(e, t, n) {
		var a = await e.threads.get(t);
		a != null && (u || (u = o("I64"))).to_int32(a.authorityLevel) === r("LSAuthorityLevel").AUTHORITATIVE ? await g(e, t, n) : n.instanceKey != null && o("MAWThreadMappingQPL").handleExistingThreadFail(n.instanceKey, a), a == null && c.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Authoritative thread not found for clientThreadKey: ", ""])), n.clientThreadKey);
	}
	async function C(e, t) {
		var n = t.authoritativeThreadKey, r = t.clientThreadKey, a = t.description, i = t.instanceKey, l = t.isGroup, s = t.jid, u = o("MAWJids").convertChatJidToIntJid(s), d = await o("MAWMiActGetThreadLifecycleState__DO_NOT_USE").getThreadLifecycleStateByJidOrThreadKey(e, u, n, "MAWBridgeOccamadilloVerifyThreadExistsHandler");
		switch (i != null && o("MAWThreadMappingQPL").addAnnotations({ string: { threadStateInOccamVTE: d.type.toString() } }, i), d.type) {
			case o("MAWMiActThreadLifecycleState__DO_NOT_USE").MiActThreadStatesEnum.JID_MISSING_MAPPING_ROW:
			case o("MAWMiActThreadLifecycleState__DO_NOT_USE").MiActThreadStatesEnum.JID_MISSING_MI_THREAD:
			case o("MAWMiActThreadLifecycleState__DO_NOT_USE").MiActThreadStatesEnum.OPTIMISTIC_THREAD_WITH_ACT:
			case o("MAWMiActThreadLifecycleState__DO_NOT_USE").MiActThreadStatesEnum.CLIENT_PARTIAL_MI_THREAD:
			case o("MAWMiActThreadLifecycleState__DO_NOT_USE").MiActThreadStatesEnum.CLIENT_PARTIAL_MI_THREAD_WITH_ACT:
			case o("MAWMiActThreadLifecycleState__DO_NOT_USE").MiActThreadStatesEnum.SERVER_PARTIAL_MI_THREAD:
			case o("MAWMiActThreadLifecycleState__DO_NOT_USE").MiActThreadStatesEnum.THREAD_KEY_ONLY: return h(e, {
				authoritativeThreadKey: n,
				clientThreadKey: r,
				instanceKey: i,
				intJid: u
			}).then(function() {
				return { previousState: d.type };
			});
			case o("MAWMiActThreadLifecycleState__DO_NOT_USE").MiActThreadStatesEnum.AUTHORITATIVE_THREAD_ONLY:
			case o("MAWMiActThreadLifecycleState__DO_NOT_USE").MiActThreadStatesEnum.AUTHORITATIVE_THREAD_MISSING_MAPPING_ROW: return _(e, d.serverThreadKey, u, {
				clientThreadKey: r,
				instanceKey: i,
				isGroup: l
			}).then(function() {
				return { previousState: d.type };
			});
			case o("MAWMiActThreadLifecycleState__DO_NOT_USE").MiActThreadStatesEnum.MI_AND_ACT_THREAD_COMPLETE: return y(e, d.serverThreadKey, {
				clientThreadKey: r,
				instanceKey: i,
				isGroup: l
			}).then(function() {
				return { previousState: d.type };
			});
			case o("MAWMiActThreadLifecycleState__DO_NOT_USE").MiActThreadStatesEnum.OPTIMISTIC_THREAD_NO_ACT: throw c.mustfixThrow("[Unimplemented VerifyThreadExists state: %s for JID: %s, from %s", d.type, s, a);
			default: throw d.type, c.mustfixThrow("Unhandled VerifyThreadExists state: %s for JID: %s, from %s", d.type, s, a);
		}
	}
	async function b(e, t, n, r) {
		await o("MAWThreadMappingQPL").measurePerformanceForNullableInstanceKey("insert_ephemeral_cache", r, async function() {
			var r = await e.threads.get(t);
			if (r != null) {
				var a, i, l = {
					ephemeralExpirationInSec: (u || (u = o("I64"))).to_int32((a = r.disappearingSettingTtl) != null ? a : (u || (u = o("I64"))).zero),
					ephemeralLastUpdatedOrSetTimestamp: o("WATimeUtils").castMilliSecondsToUnixTime(u.to_float((i = r.disappearingSettingUpdatedTs) != null ? i : (u || (u = o("I64"))).zero))
				};
				o("MAWBridgeFireAndForget").fireAndForget("backend", "setEphemeralSettingCache", {
					jid: n,
					settings: l
				});
			}
		});
	}
	async function v(t, n) {
		var r = n.cannotReplyReason, a = n.createAsOutgoing, i = n.createIfMissing, l = n.folder, s = n.lastReadTs, c = babelHelpers.objectWithoutPropertiesLoose(n, e), d = c.authoritativeThreadKey, m = c.clientThreadKey, p = c.description, _ = c.instanceKey, f = c.jid;
		_ != null && o("MAWThreadMappingQPL").addPoint("occam_verify_thread_exists_start", _);
		var g = await C(t, c), h = g.previousState;
		if (i === !0 && h === o("MAWMiActThreadLifecycleState__DO_NOT_USE").MiActThreadStatesEnum.JID_MISSING_MAPPING_ROW && d == null && m == null) {
			await o("MAWBridgeOccamadilloCreateE2EEMetadataThreadHandlerV2").call(t, {
				bumpTimestampMs: (u || (u = o("I64"))).of_float(s),
				creationSource: a === !0 ? "outgoing_message" : "incoming_message",
				folderId: o("MAWFolderTypes").INBOX,
				jid: f,
				optimisticThreadKey: null
			}), o("MAWODSProxy").odsBumpEntityKey({
				entity: o("WAOdsEnums").Entity.MAW_BRIDGE_UI_EVENT,
				key: "verify_thread_exists.him_disabled.thread_mapping_missing.create_thread_handler_called"
			});
			var y = await o("MAWThreadLoadingState").getThreadKeyIfMiThreadNotMissing(t, f);
			o("MAWODSProxy").odsBumpEntityKey({
				entity: o("WAOdsEnums").Entity.MAW_BRIDGE_UI_EVENT,
				key: "verify_thread_exists.him_disabled.thread_mapping_missing.recovery_" + (y == null ? "failed" : "succeeded")
			});
		}
		o("MAWActThreadMapping").executePromisesBlockedOnActThreadMapping({
			authoritativeThreadKey: d,
			description: p,
			instanceKey: _,
			jid: f,
			optimisticThreadKey: m
		});
		var v = d != null ? d : m, S = v != null ? (u || (u = o("I64"))).of_string(v) : null;
		if (S != null && h !== o("MAWMiActThreadLifecycleState__DO_NOT_USE").MiActThreadStatesEnum.MI_AND_ACT_THREAD_COMPLETE && await b(t, S, f, _), _ != null) {
			o("MAWThreadMappingQPL").addPoint("occam_verify_thread_exists_end", _);
			var R = o("MAWJids").convertChatJidToIntJid(c.jid);
			o("MAWThreadMappingQPL").pendingThreadCreationOnServer.has((u || (u = o("I64"))).to_string(R)) || await o("MAWThreadMappingQPL").end({
				instanceKey: _,
				intJid: R,
				tables: t,
				threadKey: S
			});
		}
	}
	l.attachLocalMetadata = p, l.ensureOptimisticThreadIsHidden = f, l.genUpdatesForAuthoritativeThread = g, l.insertEphemeralCache = b, l.call = v;
}), 98);
