__d("WAPublishMessage", [
	"FBLogger",
	"Promise",
	"WAGenReportingMeta",
	"WAGlobals",
	"WAJids",
	"WALoadReceiptApi",
	"WALogger",
	"WAMsg",
	"WASaveReceiptApi",
	"WASendMsgInternal",
	"WASentBytesCache",
	"WATimeUtils",
	"asyncToGeneratorRuntime",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	function c(e, t) {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = e.identities, r = e.messagePayload, a = {
				author: r.protocolMsgId.author,
				chat: r.protocolMsgId.chat,
				externalId: r.protocolMsgId.externalId
			}, i = yield o("WALoadReceiptApi").loadReceipt(a);
			if (i.success) return i.value;
			var l = new Map();
			for (var s of n) {
				var u = s[0], c = s[1];
				for (var d of c) {
					var m = d[0], p = d[1];
					m !== o("WAGlobals").getMyDeviceJid() && l.set(m, { pubKey: p });
				}
			}
			var _ = new Set(), f = {
				permittedIdentitiesPerDevice: l,
				recipientDevices: _,
				id: a
			};
			return t.addPoint("save_receipts_start"), yield o("WASaveReceiptApi").saveReceipt(f), t.addPoint("save_receipts_end"), f;
		}), d.apply(this, arguments);
	}
	function m(e, t) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
			var i = t.identities, l = t.messagePayload, s = t.sendIdentity, d = s === void 0 ? !1 : s;
			a.addPoint("prepare_receipt_start");
			var m = yield c({
				messagePayload: l,
				identities: i
			}, a);
			a.addPoint("prepare_receipt_end"), a.addPoint("calculate_recipients_start");
			var p = l.backupDirective, g = l.frankingKey, h = l.frankingVersion, y = l.messageBytes, C = l.messageType, b = l.protocolMsgId, v = _(m.permittedIdentitiesPerDevice), S = C.type === "text" && C.invitedParticipantUserJid != null ? v.filter(function(e) {
				return e.user === C.invitedParticipantUserJid || e.user === o("WAGlobals").getMyUserJid();
			}) : v;
			a.addPoint("calculate_recipients_end", { int: { recipientsCount: S.length } });
			var R = C.type === "text" && C.invitedParticipantUserJid != null ? C.invitedParticipantUserJid : b.chat, L = b.chat === o("WAGlobals").getMyUserJid();
			if (S.length === 0 && !L) throw r("FBLogger")("wmi").mustfixThrow("Trying to send a message with no recipients");
			if (S.length === 0 && L) return {
				serverResponse: {
					type: "success",
					ts: o("WATimeUtils").unixTime(),
					phash: { type: "ok" },
					count: null,
					reportingMeta: null
				},
				encryption: {
					type: "user",
					messageTo: o("WAGlobals").getMyUserJid(),
					participants: [],
					phash: ""
				}
			};
			var E = d ? yield o("WAGlobals").getWaOneQueue().enqueue(function(e) {
				var t = e.cryptoManager;
				return f(t);
			}, {
				operationType: "get_my_device_identity",
				flush: !1,
				afterInit: !0
			}) : null, k = yield C.isRevoked === !0 ? (u || (u = n("Promise"))).resolve(null) : o("WAGenReportingMeta").genReportingMeta(y.bytes, g, h), I = yield o("WASendMsgInternal").sendMessageV2({
				type: "chat",
				messageBytes: y,
				chat: R,
				deviceIdentity: E,
				messageType: C,
				protocolMsgId: b,
				externalId: b.externalId,
				recipients: S,
				reportingMeta: k,
				backupDirective: p
			}, a), T = I.serverResponse;
			return T.type === "success" && (yield o("WASentBytesCache").sentBytesCache().saveSentBytes({
				ts: T.ts,
				frankingKey: g,
				frankingVersion: h,
				messageBytes: y,
				backupDirective: p,
				messageType: C,
				protocolMsgId: b,
				waMsgId: o("WAMsg").craftWAMsgIdString({
					author: b.author,
					chat: b.chat,
					externalId: b.externalId
				})
			}).catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["sendWrittenMsg failed to save sent bytes to cache: ", ""])), t);
			})), I;
		}), p.apply(this, arguments);
	}
	function _(e) {
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
	function f(e) {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			try {
				var t = yield e.storage.loadIdentities(o("WAGlobals").getMyUserJid()), n = t.get(o("WAGlobals").getMyDeviceJid());
				if (n != null) return n;
				throw r("err")("missing-identity");
			} catch (e) {
				o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Error loading current device identity ", ""])), e);
			}
		}), g.apply(this, arguments);
	}
	l.publishMessage = m;
}), 98);
