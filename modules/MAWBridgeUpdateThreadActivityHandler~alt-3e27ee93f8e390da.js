__d("MAWBridgeUpdateThreadActivityHandler", [
	"I64",
	"LSBumpE2EEMetadataThreadStoredProcedure",
	"LSFactory",
	"MAWBridgeOccamadilloCreateE2EEMetadataThreadHandlerV2",
	"MAWBridgeOccamadilloVerifyThreadExistsHandler",
	"MAWChatJid",
	"MAWFolderTypes",
	"MAWJids",
	"MAWMiActGetThreadLifecycleState__DO_NOT_USE",
	"MWFBLogger",
	"ODS",
	"WAJids",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = o("MWFBLogger").MWLogger().tags([
		"bridgeUIEvent",
		"Occam",
		"ActivityUpdate"
	]);
	async function c(t, n) {
		var r = null;
		return (e || (e = o("ODS"))).bumpEntityKey(3185, "occam_thread_creation", "verify"), await o("MAWBridgeOccamadilloVerifyThreadExistsHandler").call(t, {
			authoritativeThreadKey: null,
			cannotReplyReason: null,
			clientThreadKey: null,
			description: "",
			folder: null,
			instanceKey: null,
			isGroup: o("WAJids").switchOnMsgrChatJidType(n.chatJid, {
				group: function() {
					return !0;
				},
				user: function() {
					return !1;
				}
			}),
			jid: n.chatJid,
			lastReadTs: o("WATimeUtils").castToMillisTime((s || (s = o("I64"))).to_float(n.bumpTimestampMs))
		}), r = await o("MAWChatJid").toThreadMaybe(t, n.chatJid), r == null && ((e || (e = o("ODS"))).bumpEntityKey(3185, "occam_thread_creation", "create"), await o("MAWBridgeOccamadilloCreateE2EEMetadataThreadHandlerV2").call(t, {
			bumpTimestampMs: n.bumpTimestampMs,
			creationSource: n.source === "outgoing_msg" ? "outgoing_message" : "incoming_message",
			folderId: o("MAWFolderTypes").INBOX,
			jid: n.chatJid,
			optimisticThreadKey: null
		}), r = await o("MAWChatJid").toThreadMaybe(t, n.chatJid)), r == null ? (await g(t, n.chatJid), null) : r;
	}
	async function d(e, t) {
		var n = await o("MAWChatJid").toThreadMaybe(e, t.chatJid);
		e: {
			if (t.source === "outgoing_msg" || t.source === "incoming_msg") {
				var r = n != null ? n : await c(e, t);
				if (r == null) {
					await g(e, t.chatJid);
					return;
				}
				return m(e, r, t);
			}
			if (t.source === "deleted_msg") {
				if (n == null) {
					await g(e, t.chatJid);
					return;
				}
				return p(e, n, t);
			}
			if (t.source === "inserted_admin_msg") {
				if (n == null) {
					await g(e, t.chatJid);
					return;
				}
				return f(n, t, "No bump for admin message");
			}
			if (t.source === "eb_restore") return u.warn("Attempted bump from EB restore");
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + t.source);
		}
	}
	async function m(e, t, n) {
		if (_(t, n)) {
			f(t, n, "Stale incoming bump");
			return;
		}
		await r("LSBumpE2EEMetadataThreadStoredProcedure")(r("LSFactory")(e), {
			bumpedByLocalDeviceSend: n.source === "outgoing_msg",
			isUnbump: !1,
			serverAuthoritativeTimestampMs: n.bumpTimestampMs,
			threadKey: t.threadKey
		}), f(t, n, "Thread bumped");
	}
	async function p(e, t, n) {
		await e.threads.put(babelHelpers.extends({}, t, {
			lastActivityTimestampMs: (s || (s = o("I64"))).min(t.lastActivityTimestampMs, n.bumpTimestampMs),
			lastReadWatermarkTimestampMs: s.min(t.lastReadWatermarkTimestampMs, n.bumpTimestampMs)
		})), f(t, n, "Thread unbumped");
	}
	function _(e, t) {
		return t.source === "incoming_msg" && (s || (s = o("I64"))).le(t.bumpTimestampMs, e.lastActivityTimestampMs);
	}
	function f(e, t, n) {
		var r = [
			(s || (s = o("I64"))).to_string(e.threadKey),
			t.source,
			s.to_string(t.bumpTimestampMs),
			s.to_string(e.lastActivityTimestampMs),
			s.to_string(e.lastReadWatermarkTimestampMs)
		];
		u.debug.apply(u, [n + ". threadKey: %s, source: %s, bumpTimestampMs: %s, originalLastActivityTimestampMs: %s, originalLastReadWatermarkTimestampMs: %s"].concat(r));
	}
	async function g(e, t) {
		var n = await o("MAWMiActGetThreadLifecycleState__DO_NOT_USE").getThreadLifecycleStateByJid(e, o("MAWJids").convertChatJidToIntJid(t), "MAWBridgeUpdateThreadActivityHandler");
		u.mustfix("Missing LSDBThread when updating thread activity. jid: %s, thread state: %s", t, n.type);
	}
	l.call = d;
}), 98);
