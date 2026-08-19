__d("MpsLoadMessagesStep", [
	"I64",
	"LSDatabaseSingleton",
	"MAWAckLevel",
	"MAWLocalizationType",
	"MAWMessagesDirection",
	"MAWThreadCutover",
	"MpsMessageToLoadResponse",
	"MpsOverBridge",
	"MpsToBridgeMessageId",
	"MpsTypes",
	"WATimeUtils",
	"asyncToGeneratorRuntime",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(e, t, n, r) {
		var a = r ? e + "CUTOVER" : e + "E2EE_THREAD_DESCRIPTION", i = o("MpsTypes").toMessageId(a), l = o("MpsTypes").toThreadId(a), s = {
			ack: o("MAWAckLevel").ACK.received,
			adminContent: [],
			adminType: r ? o("MAWLocalizationType").LOCALIZATION_TYPE.CUTOVER_THREAD_ADMIN_MESSAGE : o("MAWLocalizationType").LOCALIZATION_TYPE.E2EE_THREAD_DESCRIPTION,
			adminVersion: r ? 1 : 0,
			chatJid: e,
			externalId: a,
			forwardingScore: 0,
			isAdminMessage: !0,
			isAuthorMe: !1,
			isForwarded: !1,
			msgId: o("MpsToBridgeMessageId").mpsToBridgeMsgId(l, i),
			sender: "",
			sortOrderMs: 0,
			ts: o("WATimeUtils").castToUnixTime(0),
			type_: "Admin"
		};
		t.msgs = [s].concat(t.msgs), n.endCursor = [o("MpsTypes").toTimestamp(0), i];
	}
	function c(e, t) {
		return o("MAWMessagesDirection").switchOnMWPMessagesDirection(e, {
			asc: t.maxExternalId,
			desc: t.minExternalId
		});
	}
	function d(t, n, r) {
		var a, i = o("MAWMessagesDirection").getRangeMsgIdForDirection(t, n), l = (a = c(t, r)) != null ? a : i;
		return [o("MpsTypes").toTimestamp((e || (e = o("I64"))).to_float(o("MAWMessagesDirection").getI64RangeTimestampForDirection(t, n))), o("MpsTypes").toMessageId(l)];
	}
	function m(e, t, n) {
		var r, a, i = o("MpsTypes").messageIdToStanzaId(n[1]);
		return (r = (a = t.msgs.find(function(e) {
			return e.externalId === i;
		})) == null ? void 0 : a.msgId) != null ? r : o("MpsToBridgeMessageId").mpsToBridgeMsgId(o("MpsTypes").toThreadId(e), n[1]);
	}
	function p(e) {
		return _.apply(this, arguments);
	}
	function _() {
		return _ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.chatJid, n = e.count, a = e.direction, i = e.logger, l = e.oldRange, s = e.oldRangeExternalIds;
			i == null || i.addQPLAnnotations({ bool: { use_mps: !0 } });
			var u = d(a, l, s);
			i == null || i.markQPLPoint("mps_load_messages_start");
			var c = yield o("MpsOverBridge").mps().loadMessages({
				config: { useMessageVisibility: !0 },
				debug: { purpose: "load-more" },
				direction: a,
				from: u,
				numMessages: n,
				threadId: o("MpsTypes").toThreadId(t)
			});
			if (c.success === !1) {
				var m, p;
				throw i == null || i.markQPLPoint("mps_load_messages_failure"), r("err")("Failed to fetch messages from MPS: error type: " + c.error + ", error: " + ((m = (p = c.payload) == null ? void 0 : p.message) != null ? m : "unknown"));
			} else {
				var _ = yield f({
					addCutoverHeader: !0,
					chatJid: t,
					direction: a,
					loadMsgsResult: c.value,
					logger: i,
					oldRange: l,
					oldRangeExternalIds: s
				}), g = _.loadMsgsResponse, h = _.newRange, y = _.newRangeExternalIds;
				return i == null || i.markQPLPoint("mps_load_messages_end"), {
					extension: g,
					status: "complete_with_range_override",
					updatedRange: h,
					updatedRangeExternalIds: y
				};
			}
		}), _.apply(this, arguments);
	}
	function f(e) {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n = t.addCutoverHeader, r = t.chatJid, a = t.direction, i = t.loadMsgsResult, l = t.logger, c = t.oldRange, d = t.oldRangeExternalIds, p = o("MAWMessagesDirection").switchOnMWPMessagesDirection(a, {
				asc: i.cursorInfo.hasNext,
				desc: i.cursorInfo.hasPrevious
			}), _ = o("MAWMessagesDirection").switchOnMWPMessagesDirection(a, {
				asc: i.cursorInfo.hasPrevious,
				desc: i.cursorInfo.hasNext
			}), f = o("MpsMessageToLoadResponse").messageToLoadMsgsResponse(i.messages, l, { chatJid: r }), g = babelHelpers.extends({}, f, {
				hasMoreAfter: p,
				hasMoreBefore: _
			});
			if (n && _ === !1 && a === "desc") {
				var h = yield (s || (s = o("LSDatabaseSingleton"))).LSDatabaseSingleton, y = yield o("MAWThreadCutover").isCutoverSecureThreadFromChatJid(h, r);
				u(r, g, i.cursorInfo, y);
			}
			var C = c, b = d, v = i.cursorInfo.endCursor;
			if (v != null) {
				var S = o("MpsTypes").messageIdToStanzaId(v[1]), R = m(r, g, v);
				C = babelHelpers.extends({}, c, o("MAWMessagesDirection").switchOnMWPMessagesDirection(a, {
					asc: {
						hasMoreAfter: p,
						isLoadingAfter: !1,
						maxMessageId: R,
						maxTimestampMs: (e || (e = o("I64"))).of_float(v[0])
					},
					desc: {
						hasMoreBefore: _,
						isLoadingBefore: !1,
						minMessageId: R,
						minTimestampMs: e.of_float(v[0])
					}
				})), b = o("MAWMessagesDirection").switchOnMWPMessagesDirection(a, {
					asc: {
						maxExternalId: S,
						minExternalId: d.minExternalId
					},
					desc: {
						maxExternalId: d.maxExternalId,
						minExternalId: S
					}
				});
			} else C = babelHelpers.extends({}, c, o("MAWMessagesDirection").switchOnMWPMessagesDirection(a, {
				asc: {
					hasMoreAfter: p,
					isLoadingAfter: !1
				},
				desc: {
					hasMoreBefore: _,
					isLoadingBefore: !1
				}
			}));
			return {
				loadMsgsResponse: g,
				newRange: C,
				newRangeExternalIds: b
			};
		}), g.apply(this, arguments);
	}
	l.getLoadMessagesCursorForRange = d, l.MpsLoadMessagesStep = p, l.updateRange = f;
}), 98);
