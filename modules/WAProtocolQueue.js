__d("WAProtocolQueue", [
	"PersistedQueueApi",
	"WAGlobals",
	"WAJids",
	"WALogger",
	"WAMapContentTypeToFbType",
	"WAPersistedQueue"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = 5e3, u = null;
	function c(t) {
		if (u != null) return o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Protocol Queue is already initialized"]))), u;
		var n = o("WAPersistedQueue").initPersistedQueue("stanzaQueue", t, {
			cacheSize: null,
			maxDelay: s
		});
		return u = n, u;
	}
	function d() {
		return u || c(o("PersistedQueueApi").persistedQueueApi());
	}
	var m = (function() {
		function e() {
			this.$1 = [], this.$2 = [], this.$3 = [];
		}
		var t = e.prototype;
		return t.enqueue = function(t, n, r) {
			this.$1.push(t), n && this.$2.push(n), r && this.$3.push(r);
		}, t.flush = function(t, n, r, o) {
			var e = this.$1, a = this.$2, i = this.$3;
			return this.$1 = [], this.$2 = [], this.$3 = [], d().addAndCommit(e).then(function() {
				return a.forEach(function(e) {
					return e();
				});
			}).catch(function(e) {
				return i.forEach(function(t) {
					return t(e);
				});
			});
		}, e;
	})(), p = new m();
	function _(e) {
		switch (e.subtype) {
			case "unavailable": {
				var t = e, n = o("WAJids").extractUserJid(t.from), r = {
					id: {
						author: o("WAGlobals").getMyUserJid() === n ? "@me" : n,
						chat: t.jid,
						externalId: t.stanzaId
					},
					ts: t.serverTs,
					type: "UnavailableMsg"
				};
				return {
					incomingType: "wa-incoming",
					jid: t.jid,
					message: {
						decrypted: r,
						details: {
							count: null,
							externalId: t.stanzaId,
							from: o("WAJids").switchOnMsgrChatJidType(t.jid, {
								group: function(n) {
									return {
										author: t.from,
										chat: n,
										groupJid: n,
										type: "group"
									};
								},
								user: function(n) {
									return {
										author: t.from,
										chat: n,
										deviceJid: t.from,
										type: "device"
									};
								}
							}),
							hideDecryptionFailure: !1,
							isInstamadillo: !1,
							offline: t.offline,
							recipient: t.recipient,
							reportingMeta: t.reportingMeta,
							retryCount: t.retryCount,
							ts: t.serverTs,
							type: o("WAMapContentTypeToFbType").mapContentTypeToFbType(t.contentType)
						}
					},
					priority: t.priority,
					stanzaId: t.stanzaId,
					stanzaQueueId: e.stanzaQueueId,
					type: t.type
				};
			}
			case "armadillo": {
				var a = e, i = o("WAJids").extractUserJid(a.from), l = {
					folder: a.fbFolderId,
					id: {
						author: o("WAGlobals").getMyUserJid() === i ? "@me" : i,
						chat: a.jid,
						externalId: a.stanzaId
					},
					msg: a.message,
					recipientsCount: null,
					reportingMeta: a.reportingMeta,
					ts: a.serverTs,
					type: "IncomingMsg"
				};
				return {
					incomingType: e.incomingType,
					jid: a.jid,
					message: {
						decrypted: l,
						details: {
							count: null,
							externalId: a.stanzaId,
							from: o("WAJids").switchOnMsgrChatJidType(a.jid, {
								group: function(t) {
									return {
										author: a.from,
										chat: t,
										groupJid: t,
										type: "group"
									};
								},
								user: function(t) {
									return {
										author: a.from,
										chat: t,
										deviceJid: a.from,
										type: "device"
									};
								}
							}),
							hideDecryptionFailure: !1,
							isInstamadillo: !1,
							offline: a.offline,
							recipient: a.recipient,
							reportingMeta: a.reportingMeta,
							retryCount: a.retryCount,
							ts: a.serverTs,
							type: o("WAMapContentTypeToFbType").mapContentTypeToFbType(a.contentType)
						}
					},
					priority: a.priority,
					stanzaId: a.stanzaId,
					stanzaQueueId: e.stanzaQueueId,
					type: a.type,
					ebTimestampMs: a.ebTimestampMs
				};
			}
			case "instamadillo": {
				var s = e, u = o("WAJids").extractUserJid(s.from), c = {
					folder: s.fbFolderId,
					id: {
						author: o("WAGlobals").getMyUserJid() === u ? "@me" : u,
						chat: s.jid,
						externalId: s.stanzaId
					},
					msg: s.message,
					recipientsCount: null,
					reportingMeta: s.reportingMeta,
					ts: s.serverTs,
					type: "InstamadilloMsg"
				};
				return {
					incomingType: "wa-incoming",
					jid: s.jid,
					message: {
						decrypted: c,
						details: {
							count: null,
							externalId: s.stanzaId,
							from: o("WAJids").switchOnMsgrChatJidType(s.jid, {
								group: function(t) {
									return {
										author: s.from,
										chat: t,
										groupJid: t,
										type: "group"
									};
								},
								user: function(t) {
									return {
										author: s.from,
										chat: t,
										deviceJid: s.from,
										type: "device"
									};
								}
							}),
							hideDecryptionFailure: !1,
							isInstamadillo: !0,
							offline: s.offline,
							recipient: s.recipient,
							reportingMeta: s.reportingMeta,
							retryCount: s.retryCount,
							ts: s.serverTs,
							type: o("WAMapContentTypeToFbType").mapContentTypeToFbType(s.contentType)
						}
					},
					priority: s.priority,
					stanzaId: s.stanzaId,
					stanzaQueueId: e.stanzaQueueId,
					type: s.type
				};
			}
			case "ciphertext": {
				var d = function() {
					return !(m.contentType === "reaction" || m.hideDecryptionFailure === !0);
				}, m = e, p = o("WAJids").extractUserJid(m.from), _ = {
					createPlaceholder: d(),
					id: {
						author: o("WAGlobals").getMyUserJid() === p ? "@me" : p,
						chat: m.jid,
						externalId: m.stanzaId
					},
					ts: m.serverTs,
					type: "IncomingCiphertextMsg"
				};
				return {
					incomingType: "wa-incoming",
					jid: m.jid,
					message: {
						decrypted: _,
						details: {
							count: null,
							type: o("WAMapContentTypeToFbType").mapContentTypeToFbType(m.contentType),
							externalId: m.stanzaId,
							from: o("WAJids").switchOnMsgrChatJidType(m.jid, {
								group: function(t) {
									return {
										author: m.from,
										chat: t,
										groupJid: t,
										type: "group"
									};
								},
								user: function(t) {
									return {
										author: m.from,
										chat: t,
										deviceJid: m.from,
										type: "device"
									};
								}
							}),
							hideDecryptionFailure: !1,
							isInstamadillo: !1,
							offline: m.offline,
							recipient: m.recipient,
							reportingMeta: m.reportingMeta,
							retryCount: m.retryCount,
							ts: m.serverTs
						}
					},
					priority: m.priority,
					stanzaId: m.stanzaId,
					stanzaQueueId: e.stanzaQueueId,
					type: m.type
				};
			}
			default: return babelHelpers.extends({}, e);
		}
	}
	var f = 9, g = 7, h = 5, y = 2;
	function C(e) {
		return e;
	}
	function b(e) {
		return e;
	}
	function v(e) {
		return e;
	}
	l.protocolQueue = d, l.pqFlushable = p, l.mapProcolQueueMessageV2toV1 = _, l.WAProtocolQueuePriorityHigh = f, l.WAProtocolQueuePriorityMid = g, l.WAProtocolQueuePriorityLow = h, l.WAProtocolQueuePriorityBackground = y, l.appdataApplicationProtocol = C, l.extractSubProtocolFromAppdataProtocol = b, l.numberToStanzaQueueId = v;
}), 98);
