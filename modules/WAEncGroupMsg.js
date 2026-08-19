__d("WAEncGroupMsg", [
	"WAAsMessageTransport",
	"WABridge",
	"WACryptoManager",
	"WACryptoManagerUtils",
	"WADbPersonalSenderKeyStatusTxns",
	"WAEncUserMsg",
	"WAGetUserDevices",
	"WAGlobals",
	"WAHex",
	"WAMsgTransport.pb",
	"WAOdsEnums",
	"WAPhash",
	"WAPromiseQueue",
	"WAProtocolMediaType",
	"WAResultOrError",
	"WASortedLists",
	"WATagsLogger",
	"WATimeUtils",
	"asyncToGeneratorRuntime",
	"encodeProtobuf"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _ = o("WATagsLogger").TAGS(["WAEncGroupMsg"]), f = 30 * o("WATimeUtils").DAY_SECONDS, g = new (o("WAPromiseQueue")).PromiseQueue();
	function h(e, t, n) {
		return y.apply(this, arguments);
	}
	function y() {
		return y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var r = e.senderKeyId;
			if (r == null || e.rotateSenderKey || !o("WATimeUtils").happenedWithin(e.ts, f)) return o("WAResultOrError").makeError("sender-key-invalid");
			var a = yield n.cryptoManager.storage.loadSenderKeySession(t, o("WAGlobals").getMyDeviceJid());
			if (a.success === !1 || a.value.senderKeyStates.length === 0) return o("WAResultOrError").makeError("sender-key-missing");
			var i = a.value.senderKeyStates.at(-1);
			return i == null ? o("WAResultOrError").makeError("sender-key-missing") : i.senderKeyId !== e.senderKeyId ? o("WAResultOrError").makeError("sender-key-id-mismatch") : o("WAResultOrError").makeResult({ senderKeyId: r });
		}), y.apply(this, arguments);
	}
	function C(e, t) {
		return b.apply(this, arguments);
	}
	function b() {
		return b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = yield o("WACryptoManager").rotateGroupSenderKey(t.cryptoManager, e, o("WAGlobals").getMyDeviceJid());
			return yield o("WADbPersonalSenderKeyStatusTxns").markSenderKeyAsRotated(e, n.senderKeyId, o("WATimeUtils").unixTime()), { senderKeyId: n.senderKeyId };
		}), b.apply(this, arguments);
	}
	function v(t, r, a, i) {
		return g.enqueue(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var n = yield o("WADbPersonalSenderKeyStatusTxns").getSenderKeyStatus(t), l = yield h(n, t, a), s = yield o("WAGetUserDevices").getUserDevices(r, a.cryptoManager), u = new Set(s);
			if (l.success === !1) {
				_.LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
					"Rotating sender key for group ",
					" because ",
					""
				])), t, l.error), o("WABridge").getBridge().fireAndForget("event", "odsBumpEntityKey", {
					entity: o("WAOdsEnums").Entity.GROUP_SKS_INVALID,
					key: l.error
				}), i.addPoint("sender_key_rotation_start");
				var c = yield C(t, a);
				return i.addPoint("sender_key_rotation_end"), {
					senderKeyId: c.senderKeyId,
					needsSenderKey: u,
					groupParticipants: new Set(s)
				};
			} else {
				var d;
				return ((d = n.hasSenderKey) != null ? d : []).forEach(function(e) {
					return u.delete(e);
				}), i.addPoint("no_sk_rotation", { int: { noRotationNeedsSK: u.size } }), {
					senderKeyId: l.value.senderKeyId,
					needsSenderKey: u,
					groupParticipants: new Set(s)
				};
			}
		}));
	}
	function S(e, t, n, r, o, a, i) {
		return R.apply(this, arguments);
	}
	function R() {
		return R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r, a, i, l) {
			l.addPoint("enc_group_start");
			var f = yield v(e, t.map(function(e) {
				return e.user;
			}), a, l), g = f.groupParticipants, h = f.needsSenderKey, y = f.senderKeyId;
			_.LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Finish rotate participant info"]))), l.addPoint("rotated_participant_info");
			var C = null, b, S, R = t.flatMap(function(e) {
				return e.devicesInfo;
			}).map(function(e) {
				return e.jid;
			});
			g.delete(o("WAGlobals").getMyDeviceJid());
			var E = !o("WASortedLists").areEqual(o("WASortedLists").asSortedSet(g), o("WASortedLists").sortAndDedupe(R)), k = r.type === "text" && r.isRevoked, I = r.type === "media" ? o("WAProtocolMediaType").castToProtocolMediaType(r.mediaType) : null;
			if (E || k) {
				var T = yield o("WAEncUserMsg").encryptGroupFanoutMsg(R, {
					type: "message",
					messageBytes: n,
					messageType: r,
					chat: e,
					backupDirective: i
				}, a);
				T && !(r.type === "text" && r.isInvisible === !0) && (b = T, S = {
					encType: "group",
					to: e,
					v: n.version === "v3" ? "3" : "2",
					type: "skmsg",
					mediaType: I,
					ciphertext: null
				}), _.LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Finish group fanout msg"]))), l.addPoint("finish_group_fanout_msg");
			} else {
				var D;
				if (n.version === "v3") {
					var x = o("WAAsMessageTransport").asMessageTransport(n.bytes);
					D = o("encodeProtobuf").encodeProtobuf(o("WAMsgTransport.pb").MessageTransportSpec, x).readByteArrayView();
				} else D = n.bytes;
				var $ = yield o("WACryptoManagerUtils").encryptGroupContentWithMetrics(e, D, a);
				if (_.LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Finish encrypt group content"]))), l.addPoint("finish_encrypt_group_content"), $.success) {
					_.LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Encrypt success"])));
					var P = $.value;
					if (y !== P.senderKeyId && g.forEach(function(e) {
						return h.add(e);
					}), h.size > 0) {
						var N = {
							groupId: e,
							axolotlSenderKeyDistributionMessage: o("WAHex").bytesToBuffer(P.senderKeyDistributionProto)
						};
						_.LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["start key distribution"])));
						var M = R.filter(function(e) {
							return h.has(e);
						}), w = yield L(M, N, a);
						_.LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["end key distribution"]))), l.addPoint("finish_skdm_enc_node"), w.length > 0 && (b = w, C = {
							group: e,
							senderKeyId: P.senderKeyId,
							knowsSenderKey: new Set(M)
						});
					}
					S = {
						encType: "group",
						to: e,
						v: n.version === "v2" ? "2" : "3",
						type: P.ciphertext.type,
						mediaType: I,
						ciphertext: P.ciphertext.ciphertext
					}, r.type === "text" && r.isInvisible === !0 && (S = {
						encType: "group",
						to: e,
						v: n.version === "v2" ? "2" : "3",
						type: "skmsg",
						mediaType: null,
						ciphertext: null
					});
				}
			}
			var A = yield o("WAPhash").calculatePHash(R.concat(o("WAGlobals").getMyDeviceJid()));
			return l.addPoint("phash_finish"), {
				phash: A,
				participants: b,
				encNode: S,
				senderKeyDistributionInfo: C
			};
		}), R.apply(this, arguments);
	}
	function L(e, t, n) {
		var r = o("WAAsMessageTransport").asMessageTransport(null, null, t), a = o("encodeProtobuf").encodeProtobuf(o("WAMsgTransport.pb").MessageTransportSpec, r).readByteArrayView();
		return o("WACryptoManagerUtils").bulkEncrypt(new Map(e.map(function(e) {
			return [e, { plaintext: a }];
		})), n).then(function(e) {
			var t = [];
			return e.forEach(function(e, n) {
				t.push({
					encType: "device",
					to: n,
					v: "3",
					type: e.type,
					ciphertext: e.ciphertext,
					mediaType: null,
					count: null,
					baseKey: null
				});
			}), t;
		});
	}
	l.encryptGroupMsg = S;
}), 98);
