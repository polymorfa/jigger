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
	"ReQL",
	"WAOdsEnums",
	"gkx",
	"qex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u() {
		return r("gkx")("10704");
	}
	var c = 1e4, d = (e || (e = o("I64"))).of_float(c), m = new Map();
	function p(t, n, r) {
		return n == null || r == null ? null : (e || (e = o("I64"))).to_string(t) + ":" + e.to_string(n) + ":" + r;
	}
	function _(e) {
		for (var t of m) {
			var n = t[0], r = t[1];
			e - r > c && m.delete(n);
		}
	}
	function f(t, n) {
		if (n.isAdminMessage !== !0) return !1;
		var r = p(t, n.senderId, n.text);
		if (r == null) return !1;
		var a = (e || (e = o("I64"))).to_float(n.timestampMs);
		_(a);
		var i = m.get(r);
		return i != null && Math.abs(a - i) <= c ? !0 : (m.set(r, a), !1);
	}
	async function g(t, n, r) {
		var a;
		if (r.isAdminMessage !== !0) return !1;
		var i = r.senderId;
		if (i == null) return !1;
		var l = r.timestampMs, s = (a = r.text) != null ? a : null, u = await o("ReQL").firstAsync(o("ReQL").fromTableDescending(t.messages).getKeyRange(n).filter(function(t) {
			if (t.isAdminMessage !== !0 || t.senderId == null || !(e || (e = o("I64"))).equal(t.senderId, i)) return !1;
			var n = (e || (e = o("I64"))).sub(t.timestampMs, l), r = (e || (e = o("I64"))).gt(n, (e || (e = o("I64"))).of_float(0)) ? n : (e || (e = o("I64"))).sub((e || (e = o("I64"))).of_float(0), n);
			return (e || (e = o("I64"))).gt(r, d) ? !1 : t.text === s;
		}));
		return u != null;
	}
	function h(t, n, a) {
		return babelHelpers.extends({}, o("MAWBridgeBuildMsg").buildNewAndUpdatedMessageSharedParams(n, a), {
			forwardScore: (e || (e = o("I64"))).of_float(n.forwardingScore),
			isAdminMessage: n.isAdminMessage,
			isForwarded: n.isForwarded,
			messageRenderingType: (s || (s = o("LSIntEnum"))).ofNumber(r("LSMessageRenderingType").DEFAULT),
			offlineThreadingId: n.externalId,
			quickReplyType: s.ofNumber(r("LSQuickReplyType").NONE),
			senderId: e.of_string(n.sender),
			threadKey: t,
			viewFlags: s.ofNumber(0)
		});
	}
	function y(e, t, n) {
		var r = t.mediaId, a = t.offlineAttachmentId, i = t.plaintextHash, l = o("MAWBridgeNewMediaHandler").getAttachmentID(r, i), s = a != null ? a : l;
		return o("MAWBridgeNewMediaHandler").getAttachmentFromBridgeMedia(null, t, n, l, s, e);
	}
	async function C(e, t, n, r) {
		n.unsupportedType === "stickerReceiverFetchMessage" && o("MWPBumpEntityKey").bumpEntityKeyWithAppId("maw.new_msg_handler", "sticker_receiver_fetch_fallback");
		var a = h(t, n, r), i = a.messageId, l = a.timestampMs;
		if (u()) {
			if (f(t, a)) {
				o("MWPBumpEntityKey").bumpEntityKeyWithAppId("maw.new_msg_handler", "admin_msg_dedup_skipped_in_memory");
				return;
			}
			if (await g(e, t, a)) {
				o("MWPBumpEntityKey").bumpEntityKeyWithAppId("maw.new_msg_handler", "admin_msg_dedup_skipped_in_db");
				return;
			}
		}
		await e.messages.upsert([
			t,
			l,
			i
		], a), await o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.messages).getKeyRange(t, l, i)).then(function(t) {
			if (t != null) return o("MAWMsgFetchLSReplyMsgAndAttachment").updateMessagesReplyingToMsg(e, t);
		});
	}
	async function b(e, t, n) {
		var a = n.replyContent;
		if (a == null || a.replyType !== "MESSAGE") return n;
		var i = await o("MpsOverBridge").mps().loadMessage({
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
			(d == null ? void 0 : d.kind) === "bridgeMedia" ? (p = y(t, d == null ? void 0 : d.value, a.replyToMsgId), await o("MAWBridgeNewMediaHandler").callWithoutWaitingForAnything(e, d == null ? void 0 : d.value, t)) : (d == null ? void 0 : d.kind) === "bridgeXMA" && (p = o("MAWBridgeXMAUtils").composeAttachmentXMA(d == null ? void 0 : d.value, t, String(d == null ? void 0 : d.value.xmaId), m, void 0, void 0, void 0, void 0, "MAWBridgeNewMsgHandler"), await o("MAWBridgeNewXMAHandler").callWithoutWaitingForAnything(e, d == null ? void 0 : d.value, t));
			var _ = h(t, u.value, void 0);
			return await e.messages.add(_), babelHelpers.extends({}, n, { replyContent: babelHelpers.extends({}, a, {
				replyToLSAttachment: p,
				replyToLSMessage: _
			}) });
		}
		return n;
	}
	async function v(e, t, n) {
		var r, a, i = await o("MAWMsgFetchLSReplyMsgAndAttachment").fetchReplyLocalViaLS(e, n);
		return i == null ? n : ((r = i.replyContent) == null ? void 0 : r.replyToLSAttachment) == null && ((a = i.replyContent) == null ? void 0 : a.replyToLSMessage) == null ? b(e, t, n) : i;
	}
	async function S(t, n, a) {
		var i = await v(t, a, n);
		if (!o("MAWXMAUtils").isXMAStoryReply(i.xmaMessageType)) {
			if (i.isExpiredMsg === !0) {
				r("FBLogger")("messenger_web").mustfix("Attempted to insert an expired message");
				return;
			}
			var l = await o("MAWAdminMsgCTA").getAdminMsgCtaStep(t, a, i);
			if (await C(t, a, i, l), i.collapsibleId != null) {
				var s = (e || (e = o("I64"))).of_float(i.collapsibleId), u = await o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(t.messages.index("collapsibleId")).getKeyRange(s));
				if (u.length > 1) {
					var c = u[0], d = u[1];
					(e || (e = o("I64"))).gt(c.timestampMs, d.timestampMs) ? await t.messages.put(babelHelpers.extends({}, d, { isCollapsed: !0 })) : await t.messages.put(babelHelpers.extends({}, c, { isCollapsed: !0 }));
				}
			}
		}
	}
	async function R(e, t) {
		var n = await o("MAWThreadLoadingState").getThreadKeyIfMiThreadNotMissing(e, t.chatJid);
		if (n == null) {
			var a = r("qex")._("5746") === !0 ? "him_enabled" : "him_disabled";
			o("MAWODSProxy").odsBumpEntityKey({
				entity: o("WAOdsEnums").Entity.MAW_BRIDGE_UI_EVENT,
				key: "new_msg." + a + ".thread_mapping_missing"
			});
			return;
		}
		await S(e, t, n);
	}
	async function L(e, t) {
		await Promise.all(t.map(function(t) {
			return R(e, t);
		}));
	}
	l.callWithoutWaitingForAnything = S, l.call = R, l.bulkCall = L;
}), 98);
