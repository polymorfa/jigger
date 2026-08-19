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
	"WATimeUtils",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = o("MWFBLogger").MWLogger().tags([
		"bridgeUIEvent",
		"Occam",
		"ActivityUpdate"
	]);
	function c(e, t) {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
			var r = null;
			return (e || (e = o("ODS"))).bumpEntityKey(3185, "occam_thread_creation", "verify"), yield o("MAWBridgeOccamadilloVerifyThreadExistsHandler").call(t, {
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
			}), r = yield o("MAWChatJid").toThreadMaybe(t, n.chatJid), r == null && ((e || (e = o("ODS"))).bumpEntityKey(3185, "occam_thread_creation", "create"), yield o("MAWBridgeOccamadilloCreateE2EEMetadataThreadHandlerV2").call(t, {
				bumpTimestampMs: n.bumpTimestampMs,
				creationSource: n.source === "outgoing_msg" ? "outgoing_message" : "incoming_message",
				folderId: o("MAWFolderTypes").INBOX,
				jid: n.chatJid,
				optimisticThreadKey: null
			}), r = yield o("MAWChatJid").toThreadMaybe(t, n.chatJid)), r == null ? (yield b(t, n.chatJid), null) : r;
		}), d.apply(this, arguments);
	}
	function m(e, t) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = yield o("MAWChatJid").toThreadMaybe(e, t.chatJid);
			e: {
				if (t.source === "outgoing_msg" || t.source === "incoming_msg") {
					var r = n != null ? n : yield c(e, t);
					if (r == null) {
						yield b(e, t.chatJid);
						return;
					}
					return _(e, r, t);
				}
				if (t.source === "deleted_msg") {
					if (n == null) {
						yield b(e, t.chatJid);
						return;
					}
					return g(e, n, t);
				}
				if (t.source === "inserted_admin_msg") {
					if (n == null) {
						yield b(e, t.chatJid);
						return;
					}
					return C(n, t, "No bump for admin message");
				}
				if (t.source === "eb_restore") return u.warn("Attempted bump from EB restore");
				throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + t.source);
			}
		}), p.apply(this, arguments);
	}
	function _(e, t, n) {
		return f.apply(this, arguments);
	}
	function f() {
		return f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			if (y(t, n)) {
				C(t, n, "Stale incoming bump");
				return;
			}
			yield r("LSBumpE2EEMetadataThreadStoredProcedure")(r("LSFactory")(e), {
				bumpedByLocalDeviceSend: n.source === "outgoing_msg",
				isUnbump: !1,
				serverAuthoritativeTimestampMs: n.bumpTimestampMs,
				threadKey: t.threadKey
			}), C(t, n, "Thread bumped");
		}), f.apply(this, arguments);
	}
	function g(e, t, n) {
		return h.apply(this, arguments);
	}
	function h() {
		return h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			yield e.threads.put(babelHelpers.extends({}, t, {
				lastActivityTimestampMs: (s || (s = o("I64"))).min(t.lastActivityTimestampMs, n.bumpTimestampMs),
				lastReadWatermarkTimestampMs: s.min(t.lastReadWatermarkTimestampMs, n.bumpTimestampMs)
			})), C(t, n, "Thread unbumped");
		}), h.apply(this, arguments);
	}
	function y(e, t) {
		return t.source === "incoming_msg" && (s || (s = o("I64"))).le(t.bumpTimestampMs, e.lastActivityTimestampMs);
	}
	function C(e, t, n) {
		var r = [
			(s || (s = o("I64"))).to_string(e.threadKey),
			t.source,
			s.to_string(t.bumpTimestampMs),
			s.to_string(e.lastActivityTimestampMs),
			s.to_string(e.lastReadWatermarkTimestampMs)
		];
		u.debug.apply(u, [n + ". threadKey: %s, source: %s, bumpTimestampMs: %s, originalLastActivityTimestampMs: %s, originalLastReadWatermarkTimestampMs: %s"].concat(r));
	}
	function b(e, t) {
		return v.apply(this, arguments);
	}
	function v() {
		return v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = yield o("MAWMiActGetThreadLifecycleState__DO_NOT_USE").getThreadLifecycleStateByJid(e, o("MAWJids").convertChatJidToIntJid(t), "MAWBridgeUpdateThreadActivityHandler");
			u.mustfix("Missing LSDBThread when updating thread activity. jid: %s, thread state: %s", t, n.type);
		}), v.apply(this, arguments);
	}
	l.call = m;
}), 98);
