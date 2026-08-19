__d("WASendMsgUtilV2", [
	"Promise",
	"WADevicesState",
	"WAGenReportingMeta",
	"WAGlobals",
	"WAJids",
	"WALoadReceiptApi",
	"WALogger",
	"WAMsg",
	"WAResultOrError",
	"WASaveReceiptApi",
	"WASendMsgInternal",
	"WASentBytesCache",
	"WATimeUtils",
	"asyncToGeneratorRuntime",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _;
	function f(e) {
		return (_ || (_ = n("Promise"))).resolve();
	}
	function g(e, t) {
		return o("WADevicesState").getDevicesState().waitForUserDevices(Array.from(new Set([e, o("WAGlobals").getMyUserJid()])), "GetDevicesBeforeSend: " + t);
	}
	function h(t) {
		var r = t.chatJid, a = t.reason;
		return o("WAJids").switchOnChatJidType(r, {
			group: function(t) {
				return f(t);
			},
			interopUser: function(t) {
				return g(t, a);
			},
			lidUser: function(t) {
				return g(t, a);
			},
			msgrUser: function(t) {
				return g(t, a);
			},
			phoneUser: function(t) {
				return g(t, a);
			}
		}).catch(function(t) {
			return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Error during get devices before sending: ", ""])), t), (_ || (_ = n("Promise"))).resolve();
		});
	}
	function y(e, t) {
		return C.apply(this, arguments);
	}
	function C() {
		return C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = e.loadThreadParticipants, r = e.messagePayload, a = {
				author: r.protocolMsgId.author,
				chat: r.protocolMsgId.chat,
				externalId: r.protocolMsgId.externalId
			}, i = yield o("WALoadReceiptApi").loadReceipt(a);
			if (i.success) return i;
			t.addPoint("get_devices_before_send_start"), yield h({
				chatJid: r.protocolMsgId.chat,
				reason: "prepareReceipt"
			}), t.addPoint("get_devices_before_send_end");
			var l = yield n(r.protocolMsgId.chat);
			t.addPoint("get_identities_start");
			var u = yield o("WAGlobals").getWaOneQueue().enqueue(function(e) {
				var t = e.cryptoManager;
				return t.storage.bulkLoadIdentities(l);
			}, {
				flush: !1,
				afterInit: !0,
				operationType: "prepare_receipt_load_identities"
			}), c = [];
			if (u.size === 0) c = [].concat(l);
			else for (var d of u) {
				var m = d[0], p = d[1];
				p.size === 0 && c.push(m);
			}
			c.length > 0 && (yield o("WADevicesState").getDevicesState().waitForUserDevices(c, "GetDevicesBeforeSend: prepareReceipt", !0), u = yield o("WAGlobals").getWaOneQueue().enqueue(function(e) {
				var t = e.cryptoManager;
				return t.storage.bulkLoadIdentities(l);
			}, {
				afterInit: !0,
				flush: !1,
				operationType: "prepare_receipt_load_identities"
			}));
			var _ = new Map();
			for (var f of u) {
				var g = f[0], y = f[1];
				for (var C of y) {
					var b = C[0], v = C[1];
					b !== o("WAGlobals").getMyDeviceJid() && _.set(b, { pubKey: v });
				}
			}
			t.addPoint("get_identities_end");
			var S = new Set(), R = {
				permittedIdentitiesPerDevice: _,
				recipientDevices: S,
				id: a
			};
			return t.addPoint("save_receipts_start"), yield o("WASaveReceiptApi").saveReceipt(R).catch(function(e) {
				return t.addPoint("save_receipts_fail"), o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Failed to save receipt for message with error ", ""])), e), o("WAResultOrError").makeError("missing-receipt");
			}), t.addPoint("save_receipts_end"), o("WAResultOrError").makeResult(R);
		}), C.apply(this, arguments);
	}
	function b(e, t) {
		return v.apply(this, arguments);
	}
	function v() {
		return v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var r = e.isInstamadillo, a = r === void 0 ? !1 : r, i = e.loadThreadParticipants, l = e.messagePayload, s = e.sendIdentity, p = s === void 0 ? !1 : s;
			t.addPoint("prepare_receipt_start");
			var f = yield y({
				messagePayload: l,
				loadThreadParticipants: i
			}, t);
			if (f.success === !1) return t.addPoint("prepare_receipt_fail"), o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Trying to send a message that does not have a receipt in db"]))), o("WAResultOrError").makeError({ type: "missing-receipt" });
			t.addPoint("prepare_receipt_end");
			var g = f.value, h = l.backupDirective, C = l.frankingKey, b = l.frankingVersion, v = l.messageBytes, L = l.messageType, E = l.protocolMsgId, k = S(g.permittedIdentitiesPerDevice), I = L.type === "text" && L.invitedParticipantUserJid != null ? k.filter(function(e) {
				return e.user === L.invitedParticipantUserJid || e.user === o("WAGlobals").getMyUserJid();
			}) : k;
			t.addPoint("recipients-calculated", {
				int: { recipientsCount: I.length },
				string: { msgType: L.type }
			});
			var T = L.type === "text" && L.invitedParticipantUserJid != null ? L.invitedParticipantUserJid : E.chat, D = E.chat === o("WAGlobals").getMyUserJid();
			if (I.length === 0 && !D) return o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Trying to send a message with no recipients"]))), o("WAResultOrError").makeError({
				type: "no-recipients",
				isRetriable: !1
			});
			if (I.length === 0 && D) return o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Trying to send a message with no recipients, but it is a self thread"]))), o("WAResultOrError").makeResult({
				baseKey: null,
				reportingMeta: null,
				serverTs: o("WATimeUtils").unixTime()
			});
			var x = p ? yield o("WAGlobals").getWaOneQueue().enqueue(function(e) {
				var t = e.cryptoManager;
				return R(t);
			}, {
				operationType: "get_my_device_identity",
				flush: !1,
				afterInit: !0
			}) : null, $ = yield L.isRevoked === !0 ? (_ || (_ = n("Promise"))).resolve(null) : o("WAGenReportingMeta").genReportingMeta(v.bytes, C, b);
			return o("WASendMsgInternal").sendMessage({
				type: "chat",
				messageBytes: v,
				chat: T,
				deviceIdentity: x,
				messageType: L,
				protocolMsgId: E,
				externalId: E.externalId,
				recipients: I,
				reportingMeta: $,
				backupDirective: h
			}, t, a).then(function(e) {
				return e.success ? o("WASentBytesCache").sentBytesCache().saveSentBytes({
					ts: e.value.serverTs,
					frankingKey: C,
					frankingVersion: b,
					messageBytes: v,
					backupDirective: h,
					messageType: L,
					protocolMsgId: E,
					waMsgId: o("WAMsg").craftWAMsgIdString({
						author: E.author,
						chat: E.chat,
						externalId: E.externalId
					})
				}).catch(function(e) {
					o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["sendWrittenMsg failed to save sent bytes to cache: ", ""])), e);
				}).then(function() {
					return e;
				}) : e;
			});
		}), v.apply(this, arguments);
	}
	function S(e) {
		var t = new Map();
		return e.forEach(function(e, n) {
			var r = e.pubKey, a = o("WAJids").extractUserJid(n), i = {
				identity: r,
				jid: n
			}, l = t.get(a) || [];
			l.push(i), t.set(a, l);
		}), Array.from(t, function(e) {
			var t = e[0], n = e[1];
			return {
				devicesInfo: n,
				user: t
			};
		});
	}
	function R(e) {
		return L.apply(this, arguments);
	}
	function L() {
		return L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			try {
				var t = yield e.storage.loadIdentities(o("WAGlobals").getMyUserJid()), n = t.get(o("WAGlobals").getMyDeviceJid());
				if (n != null) return n;
				throw r("err")("missing-identity");
			} catch (e) {
				o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["Error loading current device identity ", ""])), e);
			}
		}), L.apply(this, arguments);
	}
	l.getDevicesBeforeSend = h, l.sendChatMessage = b;
}), 98);
