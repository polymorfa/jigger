__d("WASendMsgInternal", [
	"FBLogger",
	"Promise",
	"WABridge",
	"WADevicesState",
	"WAEncGroupMsg",
	"WAEncUserMsg",
	"WAGlobals",
	"WAJids",
	"WALogger",
	"WAMarkSenderKeyAsSentApi",
	"WAOdsEnums",
	"WAQueryGroupsAndSync",
	"WAResultOrError",
	"WASendMsgRPC",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _ = 10002, f = 10009;
	function g(e, t) {
		return h.apply(this, arguments);
	}
	function h() {
		return h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n, a, i, l;
			t.addPoint("encrypt_start", {
				string: { sentMessageType: e.messageType.isRevoked === !0 ? "revoke" : e.messageType.type },
				bool: { isInvisibleMsg: e.messageType.type === "text" && e.messageType.isInvisible === !0 }
			});
			var s = yield o("WAGlobals").getWaOneQueue().enqueue(function(n) {
				var r = n.cryptoManager;
				return e.type === "chat" ? L(e, t, 2, { cryptoManager: r }) : S(e, { cryptoManager: r }, 2);
			}, {
				operationType: "encrypt",
				flush: !0
			});
			if (t.addPoint("finish_encrypt", { string: { chatType: s.success ? s.value.type : s.error } }), s.success === !1) throw r("FBLogger")("wmi").mustfixThrow("Encryption failed %s", s.error);
			var u = s.value;
			t.addPoint("sending_stanza_start", {
				string: { encryptionType: u.type },
				int: { ciphertextByteLength: (n = (a = (i = u.message) == null || (i = i.ciphertext) == null ? void 0 : i.length) != null ? a : (l = u.participants) == null || (l = l[0].ciphertext) == null ? void 0 : l.length) != null ? n : 0 }
			});
			var c = yield o("WASendMsgRPC").sendStanza(e, u, e.reportingMeta, t);
			return t.addPoint("sending_stanza_end", { bool: { wai: c.type === "success" } }), {
				serverResponse: c,
				encryption: u
			};
		}), h.apply(this, arguments);
	}
	function y(e, t, n) {
		return C.apply(this, arguments);
	}
	function C() {
		return C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
			var a, i, l, s;
			r === void 0 && (r = !1), D(e, t);
			var u = r ? 3 : 2, c = function(r) {
				return e.type === "chat" ? L(e, t, u, { cryptoManager: r }) : S(e, { cryptoManager: r }, u);
			}, m = yield o("WAGlobals").getWaOneQueue().enqueue(function(e) {
				var t = e.cryptoManager;
				return c(t);
			}, {
				operationType: "encrypt",
				flush: !0
			}), f = m.success ? m.value.type : m.error;
			if (t.addPoint("finish_encrypt", { string: { chatType: f } }), m.success === !1) return o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["MAWSendMsg Failed to encrypt message for ", " message"])), f), o("WAResultOrError").makeError({
				type: "encryption-error",
				isRetriable: !1
			});
			var g = m.value;
			t.addPoint("sending_stanza_start", {
				string: { encryptionType: g.type },
				int: { ciphertextByteLength: (a = (i = (l = g.message) == null || (l = l.ciphertext) == null ? void 0 : l.length) != null ? i : (s = g.participants) == null || (s = s[0].ciphertext) == null ? void 0 : s.length) != null ? a : 0 }
			});
			var h = yield o("WASendMsgRPC").sendStanza(e, g, e.reportingMeta, t, r);
			if (t.addPoint("sending_stanza_end"), h.type === "success") {
				t.addPoint("send_stanza_success");
				try {
					var y, C = yield (p || (p = n("Promise"))).all([E(e, g, h, t), I(g)]), b = C[0];
					return t.addPoint("mark_sender_key_sent"), o("WAResultOrError").makeResult({
						baseKey: (y = g.message) == null ? void 0 : y.baseKey,
						reportingMeta: h.reportingMeta,
						serverTs: h.ts,
						meta: { pOrDhashMismatch: b }
					});
				} catch (e) {
					throw t.addPoint("send_stanza_failed"), e;
				}
			}
			if (h.type, x(h, f, t), h.applicationError === _ && (yield o("WAGlobals").getDependencies().handleReachabilityErrorAdminMsg(e.chat)), h.type === "parsing_error") return o("WAResultOrError").makeError({
				type: "result-parsing-error",
				isRetriable: !0
			});
			if (h.type === "error") {
				var v = h.errorCode != null && h.errorCode >= 500;
				return v ? o("WAResultOrError").makeError({
					type: "retryable-error",
					backoff: h.backoff,
					isRetriable: !0
				}) : o("WAResultOrError").makeError({
					type: "non-retryable-error",
					applicationErrorCode: h.applicationError,
					errorCode: h.errorCode,
					isRetriable: !1
				});
			}
			return o("WAResultOrError").makeError({
				type: "unexpected-message-codepath",
				details: "impossible-server-error-result",
				isRetriable: !0,
				applicationErrorCode: h.applicationError
			});
		}), C.apply(this, arguments);
	}
	function b(e) {
		return o("WADevicesState").getDevicesState().reset([e]), o("WADevicesState").getDevicesState().waitForUserDevices([e], "SendMsgUtil_recoverUser", !0);
	}
	function v(e) {
		return o("WAJids").switchOnChatJidType(e, {
			interopUser: b,
			msgrUser: b,
			lidUser: b,
			phoneUser: b,
			group: function(t) {
				return o("WAQueryGroupsAndSync").queryGroupsAndSync({
					groupJids: [t],
					ignoreDhash: !0
				});
			}
		});
	}
	function S(e, t, n) {
		return R.apply(this, arguments);
	}
	function R() {
		return R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var r = e.backupDirective, a = e.chat, i = e.count, l = e.identityKey, s = e.messageBytes, u = e.messageType, c = e.sessionInfo, d = e.to, m = yield o("WAEncUserMsg").encryptDeviceJidMessage(d, {
				type: "message",
				chat: a,
				messageBytes: s,
				messageType: u,
				applicationPayloadVersion: n,
				backupDirective: r
			}, t, i, c, l);
			return o("WAJids").switchOnUserChatJidType(a, {
				user: function(n) {
					return m != null ? o("WAResultOrError").makeResult({
						type: "direct_user",
						messageTo: e.to,
						message: m,
						recipient: o("WAGlobals").isPeerDevice(e.to) ? n : null
					}) : o("WAResultOrError").makeError("direct_user");
				},
				group: function(n) {
					return m != null ? o("WAResultOrError").makeResult({
						type: "direct_group",
						messageTo: n,
						participant: e.to,
						message: m
					}) : o("WAResultOrError").makeError("direct_group");
				}
			});
		}), R.apply(this, arguments);
	}
	function L(t, r, a, i) {
		var l = t.backupDirective, u = t.chat, c = t.messageBytes, d = t.messageType, m = t.recipients;
		return o("WAJids").switchOnUserChatJidType(u, {
			user: (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					var t = yield o("WAEncUserMsg").encryptUserMsg(m, {
						type: "message",
						messageBytes: c,
						messageType: d,
						chat: e,
						applicationPayloadVersion: a,
						backupDirective: l
					}, i, r), n = t.participants;
					return n != null && n.length > 0 ? o("WAResultOrError").makeResult({
						type: "user",
						messageTo: e,
						participants: n,
						phash: t.phash
					}) : o("WAResultOrError").makeError("user");
				});
				function t(t) {
					return e.apply(this, arguments);
				}
				return t;
			})(),
			group: (function() {
				var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
					o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["sendWrittenMsg -- encryptChatMessage -- group message"])));
					var n = yield o("WAEncGroupMsg").encryptGroupMsg(t, m, c, d, i, l, r);
					o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["sendWrittenMsg -- encryptChatMessage -- finish encrypt group message"])));
					var a = n.encNode, u = n.participants;
					return u == null && a == null ? o("WAResultOrError").makeError("group") : o("WAResultOrError").makeResult({
						type: "group",
						messageTo: t,
						participants: u,
						message: a,
						senderKeyDistributionInfo: n.senderKeyDistributionInfo,
						phash: n.phash
					});
				});
				function a(e) {
					return t.apply(this, arguments);
				}
				return a;
			})()
		});
	}
	function E(e, t, n, r) {
		return k.apply(this, arguments);
	}
	function k() {
		return k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r) {
			if (n.type !== "success") return !1;
			var a = n.phash;
			return a.type === "mismatch" ? (r.addPoint("phash_mismatch"), o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
				"Got phash mismatch, local[",
				"] server[",
				"]"
			])), a.local, a.server), o("WABridge").getBridge().fireAndForget("event", "odsBumpEntityKey", {
				entity: o("WAOdsEnums").Entity.PHASH_MISMATCH,
				key: t.type
			}), yield v(e.chat), r.addPoint("participant_recovery_finished"), !0) : !1;
		}), k.apply(this, arguments);
	}
	function I(e) {
		return T.apply(this, arguments);
	}
	function T() {
		return T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			if (e.senderKeyDistributionInfo != null) {
				var t = e.senderKeyDistributionInfo, n = t.group, r = t.knowsSenderKey, a = t.senderKeyId;
				yield o("WAMarkSenderKeyAsSentApi").markSenderKeyAsSent(n, a, r);
			}
		}), T.apply(this, arguments);
	}
	function D(e, t) {
		var n = 0;
		e.type === "chat" && (n = e.recipients.reduce(function(e, t) {
			return e + t.devicesInfo.length;
		}, 0)), t.addPoint("start_encrypt", {
			int: { numDevices: n },
			bool: { isInvisibleMsg: e.messageType.type === "text" && e.messageType.isInvisible === !0 }
		});
	}
	function x(e, t, n) {
		if (e.type !== "success") {
			e.type === "parsing_error" && (o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["sendMessage ack success is false, chatType:", ""])), t), n.addPoint("ack_parse_fail"));
			var r = e.applicationError, a = e.errorCode;
			r === _ && n.addPoint("reachability_error_code"), o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
				"sendMessage ack success is true, error: ",
				", applicationError: ",
				", chatType:",
				""
			])), a, r, t), a != null && n.addPoint("ack_success_error_" + a, { int: { applicationError: r } }), r === f && n.addPoint("sender_blocked", {});
		}
	}
	l.sendMessageV2 = g, l.sendMessage = y;
}), 98);
