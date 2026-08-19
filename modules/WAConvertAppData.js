__d("WAConvertAppData", [
	"WAAppData",
	"WAArmadilloApplication.pb",
	"WAJids",
	"WALogger",
	"WAMultiDevice.pb",
	"WAParseAppStateSyncKeyRequest",
	"WAStanzaUtils",
	"WASyncdKeyTypes",
	"WATimeUtils",
	"WAWebParseAppStateSyncKeyShare",
	"decodeProtobuf",
	"encodeProtobuf",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b;
	function v(e) {
		var t = o("WAJids").interpretAndValidateJid(e);
		if (t.jidType === "msgrUser") return t.userJid;
		if (t.jidType === "group") return t.groupJid;
		throw t.jidType, r("err")("Incorrect jid type: " + t.jidType);
	}
	function S(e) {
		var t = o("WAJids").interpretAndValidateJid(e);
		if (t.jidType === "msgrUser") return t.userJid;
		if (t.jidType === "msgrDevice") return o("WAJids").extractUserJid(t.deviceJid);
		throw t.jidType, r("err")("Incorrect jid type: " + t.jidType);
	}
	function R(e) {
		return e != null ? typeof e == "number" && e > o("WATimeUtils").MAX_INT ? o("WATimeUtils").castMilliSecondsToUnixTime(e) : o("WATimeUtils").castLongIntToUnixTime(e) : void 0;
	}
	function L(e) {
		return e == null ? void 0 : {
			lastMessageTimestamp: R(e.lastMessageTimestamp),
			lastSystemMessageTimestamp: R(e.lastSystemMessageTimestamp),
			messages: e.messages == null ? [] : e.messages.map(function(e) {
				return {
					key: e.key == null ? void 0 : {
						fromMe: e.key.fromMe,
						id: e.key.id
					},
					ts: R(e.timestamp)
				};
			})
		};
	}
	function E(t, n) {
		var r = t.chatId;
		if (r == null) return o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Missing chatId in chat action: ", ""])), t), null;
		if (t.chatArchive != null) {
			var a = t.chatArchive, i = L(a.messageRange);
			return {
				chatJid: v(r),
				messageRange: i,
				ts: n,
				type: "chat_archive"
			};
		} else if (t.chatDelete != null) {
			var l = t.chatDelete, u = L(l.messageRange);
			return {
				chatJid: v(r),
				messageRange: u,
				ts: n,
				type: "chat_delete"
			};
		} else if (t.chatRead != null) {
			var c = t.chatRead, d = L(c.messageRange);
			return {
				chatJid: v(r),
				messageRange: d,
				read: c.read,
				ts: n,
				type: "chat_read"
			};
		} else return o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Unknown appdata sync action type: ", ""])), t), null;
	}
	function k(e) {
		var t = e.key, n = t == null ? void 0 : t.remoteJid, r = t == null ? void 0 : t.id, a = t == null ? void 0 : t.fromMe;
		if (t == null || n == null || a == null || r == null) return o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Missing messageKey in message action: ", ""])), e), null;
		var i = v(n), l = o("WAJids").interpretAsGroupJid(i) != null, s;
		if (l && !a) {
			if ((t == null ? void 0 : t.participant) == null) return o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["No participant in messageKey in message action when it is group chat and message is not fromMe: ", ""])), e), null;
			s = S(t.participant);
		} else a ? s = o("WAJids").AUTHOR_ME : s = S(n);
		var m = {
			author: s,
			chat: i,
			externalId: o("WAStanzaUtils").toStanzaId(r)
		};
		return e.messageDelete != null ? {
			protocolMsgId: m,
			type: "delete_for_me"
		} : (o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Unknown appdata sync action type: ", ""])), e), null);
	}
	function I(e) {
		var t = [];
		for (var n of e) {
			var r = R(n.actionTimestamp);
			if (n.chatAction != null) {
				var a = E(n.chatAction, r);
				a != null && t.push({ chatAction: a });
			} else if (n.messageAction != null) {
				var i = k(n.messageAction);
				i != null && t.push({ messageAction: i });
			} else o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose(["Unknown appdata sync action type: ", ""])), n);
		}
		return t;
	}
	function T(e) {
		var t = e.anonId, n = e.id, r = e.rootKey, a = e.status;
		if (a == null || n == null || t == null || r == null) return o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose(["missing keys in EncryptedBackupsSecretsEpoch"]))), null;
		var i;
		if (a === o("WAArmadilloApplication.pb").ARMADILLO_SIGNAL_ENCRYPTED_BACKUPS_SECRETS_EPOCH_EPOCH_STATUS.ES_OPEN) i = o("WAAppData").EPOCH_STATUS_OPEN;
		else if (a === o("WAArmadilloApplication.pb").ARMADILLO_SIGNAL_ENCRYPTED_BACKUPS_SECRETS_EPOCH_EPOCH_STATUS.ES_CLOSE) i = o("WAAppData").EPOCH_STATUS_CLOSE;
		else return o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["status in EncryptedBackupsSecretsEpoch has invalid value"]))), null;
		return {
			anonId: t,
			id: n,
			rootKey: r,
			status: i
		};
	}
	function D(e) {
		var t = e.backupId, n = e.epoch, r = e.mailboxRootKey, a = e.obliviousValidationToken, i = e.serverDataId, l = e.tempOcmfClientState;
		return t == null || i == null || l == null || r == null || a == null ? (o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose(["missing keys in EncryptedBackupsSecrets"]))), null) : {
			backupId: t,
			epoch: n.map(T).reduce(function(e, t) {
				return t != null ? e.concat([t]) : e;
			}, []),
			mailboxRootKey: r,
			obliviousValidationToken: a,
			serverDataId: i,
			tempOcmfClientState: l
		};
	}
	function x(e) {
		var t, n;
		if (((t = e.applicationData) == null || (t = t.metadataSync) == null ? void 0 : t.actions) != null) {
			var r;
			return {
				actions: I((r = e.applicationData) == null || (r = r.metadataSync) == null ? void 0 : r.actions),
				type: "meta_sync"
			};
		} else if (((n = e.signal) == null ? void 0 : n.encryptedBackupsSecrets) != null) {
			var a = D(e.signal.encryptedBackupsSecrets);
			return a == null ? null : {
				encryptedBackupsSecrets: a,
				type: "backups_secrets"
			};
		} else return o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose(["Unknown appdata type: ", ""])), e), null;
	}
	function $(e) {
		var t, n;
		if (((t = e.applicationData) == null ? void 0 : t.appStateSyncKeyShare) != null) {
			var r;
			return {
				syncKeyShare: o("WAWebParseAppStateSyncKeyShare").parseAppStateSyncKeyShare((r = e.applicationData) == null ? void 0 : r.appStateSyncKeyShare),
				type: "sync_key_share"
			};
		} else if (((n = e.applicationData) == null ? void 0 : n.appStateSyncKeyRequest) != null) {
			var a;
			return {
				syncKeyRequest: o("WAParseAppStateSyncKeyRequest").parseAppStateSyncKeyRequest((a = e.applicationData) == null ? void 0 : a.appStateSyncKeyRequest),
				type: "sync_key_request"
			};
		} else return o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose(["Unknown appdata type: ", ""])), e), null;
	}
	function P(e) {
		if (e.subprotocolType === "armadillo") {
			var t = o("decodeProtobuf").decodeProtobufWithUnknowns(o("WAArmadilloApplication.pb").ArmadilloSpec, e.payload);
			if (t.payload == null) throw r("err")("Appdata contains unparseable armadillo data.");
			return x(t.payload);
		} else if (e.subprotocolType === "multiDevice") {
			var n = o("decodeProtobuf").decodeProtobufWithUnknowns(o("WAMultiDevice.pb").MultiDeviceSpec, e.payload);
			if (n.payload == null) throw r("err")("Appdata contains unparseable armadillo data.");
			return $(n.payload);
		} else throw r("err")("Appdata contains unexpected message application: " + e.subprotocolType);
	}
	function N(e) {
		return e == null ? void 0 : {
			lastMessageTimestamp: e.lastMessageTimestamp,
			lastSystemMessageTimestamp: e.lastSystemMessageTimestamp,
			messages: e.messages.map(function(e) {
				return {
					key: e.key == null ? void 0 : {
						fromMe: e.key.fromMe,
						id: e.key.id
					},
					timestamp: e.ts
				};
			})
		};
	}
	function M(e) {
		switch (e.type) {
			case "meta_sync": return { payload: { applicationData: V(e) } };
			case "backups_secrets": return { payload: { signal: { encryptedBackupsSecrets: q(e.encryptedBackupsSecrets) } } };
			default: return e.type, o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose(["Unknown appdata type: ", ""])), e.type), {};
		}
	}
	function w(e) {
		return { keyId: o("WASyncdKeyTypes").fromSyncKeyId(e) };
	}
	function A(e) {
		return {
			keyData: {
				fingerprint: {
					currentIndex: e.fingerprint.currentIndex,
					deviceIndexes: e.fingerprint.deviceIndexes,
					rawId: e.fingerprint.rawId
				},
				keyData: o("WASyncdKeyTypes").fromSyncKeyData(e.keyData),
				timestamp: e.timestamp
			},
			keyId: w(e.keyId)
		};
	}
	function F(e) {
		var t = e.keys.map(A), n = e.orphanKeys == null ? [] : e.orphanKeys.map(function(e) {
			return { keyId: w(e) };
		});
		return t.push.apply(t, n), { keys: t };
	}
	function O(e) {
		return { keyIds: e.keyIds.map(w) };
	}
	function B(e) {
		switch (e.type) {
			case "sync_key_share": return { payload: { applicationData: { appStateSyncKeyShare: F(e.syncKeyShare) } } };
			case "sync_key_request": return { payload: { applicationData: { appStateSyncKeyRequest: O(e.syncKeyRequest) } } };
			default: return e.type, o("WALogger").WARN(C || (C = babelHelpers.taggedTemplateLiteralLoose(["Unknown appdata type: ", ""])), e.type), {};
		}
	}
	function W(e) {
		var t;
		switch (e.type) {
			case "meta_sync":
			case "backups_secrets": {
				var n = o("encodeProtobuf").encodeProtobuf(o("WAArmadilloApplication.pb").ArmadilloSpec, M(e));
				t = { armadillo: {
					payload: n.readByteArrayView(),
					version: 1
				} };
				break;
			}
			case "sync_key_share":
			case "sync_key_request": {
				var r = o("encodeProtobuf").encodeProtobuf(o("WAMultiDevice.pb").MultiDeviceSpec, B(e));
				t = { multiDevice: {
					payload: r.readByteArrayView(),
					version: 1
				} };
				break;
			}
			default: e.type, o("WALogger").WARN(b || (b = babelHelpers.taggedTemplateLiteralLoose(["Unknown appdata type: ", ""])), e.type), t = {};
		}
		return { payload: { subProtocol: t } };
	}
	function q(e) {
		return {
			backupId: e.backupId,
			epoch: e.epoch.map(U),
			mailboxRootKey: e.mailboxRootKey,
			obliviousValidationToken: e.obliviousValidationToken,
			serverDataId: e.serverDataId,
			tempOcmfClientState: e.tempOcmfClientState
		};
	}
	function U(e) {
		var t;
		return e.status === o("WAAppData").EPOCH_STATUS_OPEN ? t = o("WAArmadilloApplication.pb").ARMADILLO_SIGNAL_ENCRYPTED_BACKUPS_SECRETS_EPOCH_EPOCH_STATUS.ES_OPEN : e.status === o("WAAppData").EPOCH_STATUS_CLOSE && (t = o("WAArmadilloApplication.pb").ARMADILLO_SIGNAL_ENCRYPTED_BACKUPS_SECRETS_EPOCH_EPOCH_STATUS.ES_CLOSE), {
			anonId: e.anonId,
			id: e.id,
			rootKey: e.rootKey,
			status: t
		};
	}
	function V(e) {
		return { metadataSync: { actions: e.actions.map(function(e) {
			return e.chatAction ? {
				actionTimestamp: e.chatAction.ts,
				chatAction: H(e.chatAction)
			} : { messageAction: G(e.messageAction) };
		}) } };
	}
	function H(e) {
		var t = N(e.messageRange), n = e.chatJid;
		switch (e.type) {
			case "chat_archive": return {
				chatArchive: {
					archived: e.archived,
					messageRange: t
				},
				chatId: n
			};
			case "chat_delete": return {
				chatDelete: { messageRange: t },
				chatId: n
			};
			default: return e.type, {
				chatId: n,
				chatRead: {
					messageRange: t,
					read: e.read
				}
			};
		}
	}
	function G(e) {
		if (e.type === "delete_for_me") {
			var t = e.protocolMsgId.chat, n = o("WAJids").interpretAsGroupJid(t) != null;
			return {
				key: {
					fromMe: o("WAJids").isAuthorMe(e.protocolMsgId.author),
					id: e.protocolMsgId.externalId,
					participant: !o("WAJids").isAuthorMe(e.protocolMsgId.author) && n ? e.protocolMsgId.author : void 0,
					remoteJid: t
				},
				messageDelete: {}
			};
		} else throw r("err")("No other available type");
	}
	l.parseArmadilloAppData = x, l.parseMultiDeviceAppData = $, l.parseAppData = P, l.convertArmadilloAppData = M, l.convertMultiDeviceAppData = B, l.convertAppData = W;
}), 98);
