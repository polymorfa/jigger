__d("EBWasmSerializeMessagesModule", [
	"EBLogger",
	"EBWasm.pb",
	"EBWasmSerializeMessagesPayload",
	"I64",
	"MAWEBUploadTrackingUtils",
	"MSGDataclassTypes.flow",
	"ReQL",
	"WALongInt",
	"WAResultOrError",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g = o("EBLogger").EBLogger().tags(["EBWasmSerializeMessagesModule"]), h = new Map([
		[(_ = o("MSGDataclassTypes.flow")).MpsMessageTag.Photo, (f = o("EBWasm.pb")).MessageTag.PHOTO],
		[_.MpsMessageTag.Permanent, f.MessageTag.PERMANENT],
		[_.MpsMessageTag.Ephemeral, f.MessageTag.EPHEMERAL],
		[_.MpsMessageTag.Video, f.MessageTag.VIDEO],
		[_.MpsMessageTag.Gif, f.MessageTag.GIF],
		[_.MpsMessageTag.Audio, f.MessageTag.AUDIO],
		[_.MpsMessageTag.File, f.MessageTag.FILE],
		[_.MpsMessageTag.Raven, f.MessageTag.RAVEN],
		[_.MpsMessageTag.UnreadRaven, f.MessageTag.UNREAD_RAVEN],
		[_.MpsMessageTag.ShareIgMedia, f.MessageTag.SHARE_IG_MEDIA],
		[_.MpsMessageTag.ShareLink, f.MessageTag.SHARE_LINK],
		[_.MpsMessageTag.ShareIgClips, f.MessageTag.SHARE_IG_CLIPS],
		[_.MpsMessageTag.Shh, f.MessageTag.SHH],
		[_.MpsMessageTag.StoryReply, f.MessageTag.STORY_REPLY],
		[_.MpsMessageTag.DisappearingMessage, f.MessageTag.DISAPPEARING_MESSAGE],
		[_.MpsMessageTag.RavenSeen, f.MessageTag.RAVEN_SEEN],
		[_.MpsMessageTag.RavenReplayed, f.MessageTag.RAVEN_REPLAYED],
		[_.MpsMessageTag.RavenReadOnce, f.MessageTag.RAVEN_READ_ONCE],
		[_.MpsMessageTag.RavenReplayable, f.MessageTag.RAVEN_REPLAYABLE],
		[_.MpsMessageTag.RavenPermanent, f.MessageTag.RAVEN_PERMANENT],
		[_.MpsMessageTag.ActionLog, f.MessageTag.ACTION_LOG]
	]);
	function y(e) {
		return h.get(e);
	}
	function C(e) {
		var t;
		return (function(e) {
			return e === 0 ? o("EBWasm.pb").EncryptedBackupsKeyValueActionType.UNKNOWN : e === 1 ? o("EBWasm.pb").EncryptedBackupsKeyValueActionType.UPSERT_TOPLEVEL : e === 2 ? o("EBWasm.pb").EncryptedBackupsKeyValueActionType.UPSERT_SUPPLEMENTAL : e === 3 ? o("EBWasm.pb").EncryptedBackupsKeyValueActionType.DELETE_TOPLEVEL : e === 4 ? o("EBWasm.pb").EncryptedBackupsKeyValueActionType.DELETE_TOPLEVEL_WITH_PLACEHOLDER : o("EBWasm.pb").EncryptedBackupsKeyValueActionType.UNKNOWN;
		})((t = e.protoMsg) == null ? void 0 : t.backupActionType);
	}
	function b(t, n, r) {
		var o, a = t == null || (o = t.protoMsg) == null ? void 0 : o.supplementalKey;
		if (a == null) {
			g.MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Supplemental key is null - unable to serialize payload"])));
			return;
		}
		return {
			payload: r,
			supplementalKey: a,
			toplevelOfflineThreadingId: n
		};
	}
	function v(e, t, n) {
		var r, a, i, l = o("WALongInt").decimalStringToLongInt(e.threadId), _ = o("WALongInt").decimalStringToLongInt(e.sortOrderMs.toString()), f = C(e);
		if (f === o("EBWasm.pb").EncryptedBackupsKeyValueActionType.UNKNOWN) {
			g.MUSTFIX(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Action type is unknown - unable to serialize payload"])));
			return;
		}
		var h = e.actionType === 2 ? o("EBWasm.pb").BackupOperationType.REMOVE_BACKUP_ITEM : o("EBWasm.pb").BackupOperationType.UPSERT_BACKUP_ITEM, v = o("EBWasm.pb").ThreadSubtype.STANDARD, S = o("WALongInt").decimalStringToLongInt((p || (p = o("I64"))).to_string(t)), R = e.traceId, L = {
			actionType: f,
			attachmentPayload: n,
			contentType: o("EBWasm.pb").BackupContentType.MESSAGE,
			encryptionVersion: S,
			operationType: h,
			requestId: R,
			threadId: l,
			threadSubtype: v,
			timestamp: _
		}, E = (r = e.protoMsg) == null ? void 0 : r.tags, k = E != null ? E.map(function(e) {
			return y(e);
		}).filter(function(e) {
			return e != null;
		}) : [], I = [], T = (a = e.protoMsg) == null || (a = a.originalMsgProtocolId) == null ? void 0 : a.externalId;
		if (T == null) {
			g.MUSTFIX(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Original message otid is null - unable to serialize payload"])));
			return;
		}
		var D = o("WALongInt").decimalStringToLongInt(T), x = (i = e.protoMsg) == null || (i = i.protobuf) == null ? void 0 : i.buffer;
		if (x == null) {
			g.MUSTFIX(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Protobuf top level upload payload is null - unable to serialize payload"])));
			return;
		}
		if (f === o("EBWasm.pb").EncryptedBackupsKeyValueActionType.UPSERT_TOPLEVEL) {
			var $ = { payload: x };
			return babelHelpers.extends({}, L, {
				messageTags: k,
				offlineThreadingId: D,
				tagsToDelete: I,
				toplevelMessage: $
			});
		}
		if (f === o("EBWasm.pb").EncryptedBackupsKeyValueActionType.UPSERT_SUPPLEMENTAL) {
			var P, N = (P = e.protoMsg) == null || (P = P.msgId) == null ? void 0 : P.externalId;
			if (N == null) {
				g.MUSTFIX(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Supplemental otid is null - unable to serialize payload"])));
				return;
			}
			var M = o("WALongInt").decimalStringToLongInt(N), w = b(e, D, x);
			if (w != null) return babelHelpers.extends({}, L, {
				messageTags: k,
				offlineThreadingId: M,
				supplementalMessage: w,
				tagsToDelete: I
			});
		}
		if (f === o("EBWasm.pb").EncryptedBackupsKeyValueActionType.DELETE_TOPLEVEL || f === o("EBWasm.pb").EncryptedBackupsKeyValueActionType.DELETE_TOPLEVEL_WITH_PLACEHOLDER) {
			var A, F = (A = e.protoMsg) == null || (A = A.msgId) == null ? void 0 : A.externalId;
			if (F == null) {
				g.MUSTFIX(m || (m = babelHelpers.taggedTemplateLiteralLoose(["Deletion message otid is null - unable to serialize payload"])));
				return;
			}
			var O = o("WALongInt").decimalStringToLongInt(F), B = { payload: x }, W = babelHelpers.extends({}, L, {
				messageTags: k,
				offlineThreadingId: O,
				tagsToDelete: I,
				toplevelMessage: B
			});
			return f === o("EBWasm.pb").EncryptedBackupsKeyValueActionType.DELETE_TOPLEVEL_WITH_PLACEHOLDER ? babelHelpers.extends({}, W, { deletionOtid: D }) : W;
		}
	}
	function S(e, t, n) {
		return R.apply(this, arguments);
	}
	function R() {
		return R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var r = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.secure_encrypted_backups_client_state)), a = r == null ? void 0 : r.backupId, i = r == null ? void 0 : r.deviceId, l = r == null ? void 0 : r.encryptionVersion, s = yield o("ReQL").firstAsync(o("ReQL").fromTableDescending(e.secure_encrypted_backups_epochs)), u = s == null ? void 0 : s.epochId, c = s == null ? void 0 : s.epochAnonIdBlob, d = s == null ? void 0 : s.epochRootKeyBlob, m = r == null ? void 0 : r.ocmfClientStateBlob, _ = r == null ? void 0 : r.mailboxRootKeyBlob;
			if (a == null) return t.map(function(e) {
				return o("WAResultOrError").makeError({
					error: "backup_id_null",
					instanceKey: e.uploadTrackingInstanceKey
				});
			});
			if (i == null) return t.map(function(e) {
				return o("WAResultOrError").makeError({
					error: "device_id_null",
					instanceKey: e.uploadTrackingInstanceKey
				});
			});
			if (u == null) return t.map(function(e) {
				return o("WAResultOrError").makeError({
					error: "epoch_id_null",
					instanceKey: e.uploadTrackingInstanceKey
				});
			});
			if (c == null) return t.map(function(e) {
				return o("WAResultOrError").makeError({
					error: "epoch_anon_id_null",
					instanceKey: e.uploadTrackingInstanceKey
				});
			});
			if (d == null) return t.map(function(e) {
				return o("WAResultOrError").makeError({
					error: "epoch_root_key_null",
					instanceKey: e.uploadTrackingInstanceKey
				});
			});
			if (m == null) return t.map(function(e) {
				return o("WAResultOrError").makeError({
					error: "ocmf_client_state_blob_null",
					instanceKey: e.uploadTrackingInstanceKey
				});
			});
			if (_ == null) return t.map(function(e) {
				return o("WAResultOrError").makeError({
					error: "mailbox_root_key_blob_null",
					instanceKey: e.uploadTrackingInstanceKey
				});
			});
			if (l == null) return t.map(function(e) {
				return o("WAResultOrError").makeError({
					error: "encryption_version_null",
					instanceKey: e.uploadTrackingInstanceKey
				});
			});
			var f = o("WALongInt").decimalStringToLongInt((p || (p = o("I64"))).to_string(a)), g = o("WALongInt").decimalStringToLongInt(p.to_string(i)), h = o("WALongInt").decimalStringToLongInt(p.to_string(u)), y = t.map(function(e, t) {
				var r = n[t];
				return v(e, l, r != null ? r : void 0);
			}), C = {
				backupId: f,
				deviceId: g,
				epoch: {
					epochAnonId: c,
					epochId: h,
					epochRootKey: d
				},
				mailboxRootKeyBlob: _,
				messages: y.filter(Boolean),
				ocmfClientStateBlob: m
			};
			try {
				var b = yield o("EBWasmSerializeMessagesPayload").serializeMessagesPayload({ messagesData: C });
				if (b.success) {
					var S = b.value.payloads, R = new Map();
					return S.forEach(function(e) {
						var t = o("WALongInt").longIntToDecimalString(e.threadId), n = o("WALongInt").longIntToDecimalString(e.offlineThreadingId), r = n + "_" + t;
						R.set(r, e);
					}), t.map(function(e) {
						var t, n = e.threadId, r = (t = e.protoMsg) == null || (t = t.msgId) == null ? void 0 : t.externalId;
						if (r == null) return o("WAResultOrError").makeError({
							error: "otid is null",
							instanceKey: e.uploadTrackingInstanceKey
						});
						var a = r + "_" + n, i = R.get(a);
						if (i == null) return o("WAResultOrError").makeError({
							error: "serialized_payload_not_found",
							instanceKey: e.uploadTrackingInstanceKey
						});
						var l = i.payload, s = i.error, u = e.uploadTrackingInstanceKey;
						if (l != null) {
							if (u != null) {
								var c = o("MAWEBUploadTrackingUtils").makeEBWorkerQplFlowFromInstanceKey(u);
								c.addPoint("eb_wasm_serialization_success");
							}
							return o("WAResultOrError").makeResult({
								msg: e,
								payload: l
							});
						}
						return o("WAResultOrError").makeError({
							error: s != null ? s : "runtime_error_during_serialization",
							instanceKey: e.uploadTrackingInstanceKey
						});
					});
				} else return t.map(function(e) {
					return o("WAResultOrError").makeError({
						error: b.error,
						instanceKey: e.uploadTrackingInstanceKey
					});
				});
			} catch (e) {
				return t.map(function(e) {
					return o("WAResultOrError").makeError({
						error: "runtime_error",
						instanceKey: e.uploadTrackingInstanceKey
					});
				});
			}
		}), R.apply(this, arguments);
	}
	l.serializeMessageBatchWasm = S;
}), 98);
