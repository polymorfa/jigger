__d("MAWBridgeNewMsgHandler", [
	"FBLogger",
	"I64",
	"LSIntEnum",
	"LSMessageRenderingType",
	"LSQuickReplyType",
	"MAWAdminMsgCTA",
	"MAWBridgeBuildMsg",
	"MAWBridgeNewMediaHandler",
	"MAWBridgeNewXMAHandler",
	"MAWBridgeXMAUtils",
	"MAWMsgFetchLSReplyMsgAndAttachment",
	"MAWODSProxy",
	"MAWThreadLoadingState",
	"MAWXMAUtils",
	"MWPBumpEntityKey",
	"MpsMessageToBridge",
	"MpsOverBridge",
	"MpsToBridgeMessageId",
	"MpsTypes",
	"Promise",
	"ReQL",
	"WAOdsEnums",
	"asyncToGeneratorRuntime",
	"gkx",
	"qex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	function c() {
		return r("gkx")("10704");
	}
	var d = 1e4, m = (s || (s = o("I64"))).of_float(d), p = new Map();
	function _(e, t, n) {
		return t == null || n == null ? null : (s || (s = o("I64"))).to_string(e) + ":" + s.to_string(t) + ":" + n;
	}
	function f(e) {
		for (var t of p) {
			var n = t[0], r = t[1];
			e - r > d && p.delete(n);
		}
	}
	function g(e, t) {
		if (t.isAdminMessage !== !0) return !1;
		var n = _(e, t.senderId, t.text);
		if (n == null) return !1;
		var r = (s || (s = o("I64"))).to_float(t.timestampMs);
		f(r);
		var a = p.get(n);
		return a != null && Math.abs(r - a) <= d ? !0 : (p.set(n, r), !1);
	}
	function h(e, t, n) {
		return y.apply(this, arguments);
	}
	function y() {
		return y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var r;
			if (n.isAdminMessage !== !0) return !1;
			var a = n.senderId;
			if (a == null) return !1;
			var i = n.timestampMs, l = (r = n.text) != null ? r : null, u = yield o("ReQL").firstAsync(o("ReQL").fromTableDescending(e.messages).getKeyRange(t).filter(function(e) {
				if (e.isAdminMessage !== !0 || e.senderId == null || !(s || (s = o("I64"))).equal(e.senderId, a)) return !1;
				var t = (s || (s = o("I64"))).sub(e.timestampMs, i), n = (s || (s = o("I64"))).gt(t, (s || (s = o("I64"))).of_float(0)) ? t : (s || (s = o("I64"))).sub((s || (s = o("I64"))).of_float(0), t);
				return (s || (s = o("I64"))).gt(n, m) ? !1 : e.text === l;
			}));
			return u != null;
		}), y.apply(this, arguments);
	}
	function C(e, t, n) {
		return babelHelpers.extends({}, o("MAWBridgeBuildMsg").buildNewAndUpdatedMessageSharedParams(t, n), {
			forwardScore: (s || (s = o("I64"))).of_float(t.forwardingScore),
			isAdminMessage: t.isAdminMessage,
			isForwarded: t.isForwarded,
			messageRenderingType: (u || (u = o("LSIntEnum"))).ofNumber(r("LSMessageRenderingType").DEFAULT),
			offlineThreadingId: t.externalId,
			quickReplyType: u.ofNumber(r("LSQuickReplyType").NONE),
			senderId: s.of_string(t.sender),
			threadKey: e,
			viewFlags: u.ofNumber(0)
		});
	}
	function b(e, t, n) {
		var r = t.mediaId, a = t.offlineAttachmentId, i = t.plaintextHash, l = o("MAWBridgeNewMediaHandler").getAttachmentID(r, i), s = a != null ? a : l;
		return o("MAWBridgeNewMediaHandler").getAttachmentFromBridgeMedia(null, t, n, l, s, e);
	}
	function v(e, t, n, r) {
		return S.apply(this, arguments);
	}
	function S() {
		return S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r) {
			n.unsupportedType === "stickerReceiverFetchMessage" && o("MWPBumpEntityKey").bumpEntityKeyWithAppId("maw.new_msg_handler", "sticker_receiver_fetch_fallback");
			var a = C(t, n, r), i = a.messageId, l = a.timestampMs;
			if (c()) {
				if (g(t, a)) {
					o("MWPBumpEntityKey").bumpEntityKeyWithAppId("maw.new_msg_handler", "admin_msg_dedup_skipped_in_memory");
					return;
				}
				if (yield h(e, t, a)) {
					o("MWPBumpEntityKey").bumpEntityKeyWithAppId("maw.new_msg_handler", "admin_msg_dedup_skipped_in_db");
					return;
				}
			}
			yield e.messages.upsert([
				t,
				l,
				i
			], a), yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.messages).getKeyRange(t, l, i)).then(function(t) {
				if (t != null) return o("MAWMsgFetchLSReplyMsgAndAttachment").updateMessagesReplyingToMsg(e, t);
			});
		}), S.apply(this, arguments);
	}
	function R(e, t, n) {
		return L.apply(this, arguments);
	}
	function L() {
		return L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var a = n.replyContent;
			if (a == null || a.replyType !== "MESSAGE") return n;
			var i = yield o("MpsOverBridge").mps().loadMessage({
				config: {
					shouldFetchSupplementals: !0,
					strategy: "local-first"
				},
				debug: { purpose: "reply-fetch-local" },
				messageId: o("MpsToBridgeMessageId").bridgeMsgIdToMps(a.replyToMsgId).messageId,
				threadId: o("MpsTypes").toThreadId(n.chatJid)
			}), l = i.value;
			if (l == null) return r("FBLogger")("messenger_e2ee_web").mustfix("[fetchReplyLocalViaMPS] Reply snippet cannot be generated as original message is not in MPS"), n;
			var s = o("MpsMessageToBridge").mpsFullMessagetoBridge(l), u = s == null ? void 0 : s.topLevel, c = s == null ? void 0 : s.supplementals;
			if (u != null && u.kind === "bridgeMsg") {
				var d = c == null ? void 0 : c.find(function(e) {
					return e.kind === "bridgeMedia" || e.kind === "bridgeXMA";
				}), m = u.value.msgId, p;
				(d == null ? void 0 : d.kind) === "bridgeMedia" ? (p = b(t, d == null ? void 0 : d.value, a.replyToMsgId), yield o("MAWBridgeNewMediaHandler").callWithoutWaitingForAnything(e, d == null ? void 0 : d.value, t)) : (d == null ? void 0 : d.kind) === "bridgeXMA" && (p = o("MAWBridgeXMAUtils").composeAttachmentXMA(d == null ? void 0 : d.value, t, String(d == null ? void 0 : d.value.xmaId), m, void 0, void 0, void 0, void 0, "MAWBridgeNewMsgHandler"), yield o("MAWBridgeNewXMAHandler").callWithoutWaitingForAnything(e, d == null ? void 0 : d.value, t));
				var _ = C(t, u.value, void 0);
				return yield e.messages.add(_), babelHelpers.extends({}, n, { replyContent: babelHelpers.extends({}, a, {
					replyToLSAttachment: p,
					replyToLSMessage: _
				}) });
			}
			return n;
		}), L.apply(this, arguments);
	}
	function E(e, t, n) {
		return k.apply(this, arguments);
	}
	function k() {
		return k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var r, a, i = yield o("MAWMsgFetchLSReplyMsgAndAttachment").fetchReplyLocalViaLS(e, n);
			return i == null ? n : ((r = i.replyContent) == null ? void 0 : r.replyToLSAttachment) == null && ((a = i.replyContent) == null ? void 0 : a.replyToLSMessage) == null ? R(e, t, n) : i;
		}), k.apply(this, arguments);
	}
	function I(e, t, n) {
		return T.apply(this, arguments);
	}
	function T() {
		return T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var a = yield E(e, n, t);
			if (!o("MAWXMAUtils").isXMAStoryReply(a.xmaMessageType)) {
				if (a.isExpiredMsg === !0) {
					r("FBLogger")("messenger_web").mustfix("Attempted to insert an expired message");
					return;
				}
				var i = yield o("MAWAdminMsgCTA").getAdminMsgCtaStep(e, n, a);
				if (yield v(e, n, a, i), a.collapsibleId != null) {
					var l = (s || (s = o("I64"))).of_float(a.collapsibleId), u = yield o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(e.messages.index("collapsibleId")).getKeyRange(l));
					if (u.length > 1) {
						var c = u[0], d = u[1];
						(s || (s = o("I64"))).gt(c.timestampMs, d.timestampMs) ? yield e.messages.put(babelHelpers.extends({}, d, { isCollapsed: !0 })) : yield e.messages.put(babelHelpers.extends({}, c, { isCollapsed: !0 }));
					}
				}
			}
		}), T.apply(this, arguments);
	}
	function D(e, t) {
		return x.apply(this, arguments);
	}
	function x() {
		return x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = yield o("MAWThreadLoadingState").getThreadKeyIfMiThreadNotMissing(e, t.chatJid);
			if (n == null) {
				var a = r("qex")._("5746") === !0 ? "him_enabled" : "him_disabled";
				o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.MAW_BRIDGE_UI_EVENT,
					key: "new_msg." + a + ".thread_mapping_missing"
				});
				return;
			}
			yield I(e, t, n);
		}), x.apply(this, arguments);
	}
	function $(e, t) {
		return P.apply(this, arguments);
	}
	function P() {
		return P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
			yield (e || (e = n("Promise"))).all(r.map(function(e) {
				return D(t, e);
			}));
		}), P.apply(this, arguments);
	}
	l.callWithoutWaitingForAnything = I, l.call = D, l.bulkCall = $;
}), 98);
