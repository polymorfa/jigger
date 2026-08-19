__d("MAWMpsMutateMessagePreprocessor", [
	"FBLogger",
	"MAWMpsTypes",
	"MAWProtobufDeserializers",
	"MpsPreprocessor",
	"MpsTypes",
	"WAArmadilloApplication.pb",
	"WAArmadilloBackupMessage.pb",
	"WAJids",
	"WAMsgApplication.pb",
	"WAResultOrError",
	"encodeProtobuf",
	"err",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		m,
		c,
		u
	];
	function s(e, t, n) {
		var r = { ephemeralType: n }, a = { payload: { content: { ravenMessage: r } } }, i = {
			metadata: t.metadata,
			payload: { subProtocol: { armadillo: {
				payload: o("encodeProtobuf").encodeProtobuf(o("WAArmadilloApplication.pb").ArmadilloSpec, a).readBuffer(),
				version: 1
			} } }
		}, l = o("encodeProtobuf").encodeProtobuf(o("WAMsgApplication.pb").MessageApplicationSpec, i).readBuffer(), s = {
			encryptedTransportMessage: l,
			metadata: e.proto.metadata
		};
		return o("MpsTypes").toBytes(o("encodeProtobuf").encodeProtobuf(o("WAArmadilloBackupMessage.pb").BackupMessageSpec, s).readBuffer());
	}
	function u(e, t) {
		var n, r = e.directive, a = e.insertionSource, i = e.message, l = (n = t.encryptedTransportMessage()) == null || (n = n.armadillo()) == null || (n = n.payload) == null || (n = n.content) == null ? void 0 : n.ravenActionNotifMessage;
		if (l != null) {
			var s = r.targetMessageId, u = {
				actionType: o("MpsTypes").ActionType.UpsertSupplemental,
				debugFlags: r.debugFlags,
				isLocalOnly: !1,
				isTransportErrorPlaceholder: !1,
				supplementalKey: r == null ? void 0 : r.supplementalKey,
				tags: [],
				targetMessageId: s
			}, c = {
				actionType: o("MpsTypes").ActionType.DeleteSupplemental,
				debugFlags: r.debugFlags,
				isLocalOnly: !0,
				isTransportErrorPlaceholder: !1,
				supplementalKey: o("MpsTypes").toSupplementalKey(o("MAWMpsTypes").SupplementalKeyPrefixMps.RAVEN_ORIGINAL_MESSAGE),
				tags: [],
				targetMessageId: s
			}, d = {
				messageId: s,
				payload: i.payload,
				senderId: i.senderId,
				threadId: i.threadId,
				timestampMs: i.timestampMs
			};
			return [{
				directive: u,
				insertionSource: a,
				message: i
			}, {
				directive: c,
				insertionSource: a,
				message: d
			}];
		}
	}
	function c(e, t) {
		var n, r = e.directive, a = e.insertionSource, i = e.message, l = t.encryptedTransportMessage(), u = (n = t.encryptedTransportMessage()) == null || (n = n.armadillo()) == null || (n = n.payload) == null || (n = n.content) == null || (n = n.ravenMessageMsgr) == null ? void 0 : n.ephemeralType;
		if (!(l == null || u == null)) {
			var c = [], d = {
				messageId: i.messageId,
				payload: s(t, l.proto, u),
				senderId: i.senderId,
				threadId: i.threadId,
				timestampMs: i.timestampMs
			}, m = {
				actionType: o("MpsTypes").ActionType.UpsertTopLevel,
				debugFlags: r.debugFlags,
				isLocalOnly: !1,
				isTransportErrorPlaceholder: !1,
				tags: [],
				targetMessageId: i.messageId
			}, p = {
				actionType: o("MpsTypes").ActionType.UpsertSupplemental,
				debugFlags: r.debugFlags,
				isLocalOnly: !0,
				isTransportErrorPlaceholder: !1,
				supplementalKey: o("MpsTypes").toSupplementalKey(o("MAWMpsTypes").SupplementalKeyPrefixMps.RAVEN_ORIGINAL_MESSAGE),
				tags: [],
				targetMessageId: i.messageId
			};
			return c.push({
				directive: m,
				insertionSource: a,
				message: d
			}, {
				directive: p,
				insertionSource: a,
				message: i
			}), c;
		}
	}
	function d(e) {
		if (e == null) return null;
		var t = o("WAJids").interpretAndValidateJid(e);
		return t.jidType === "msgrUser" ? t.userJid : t.jidType === "group" ? t.groupJid : (t.jidType, null);
	}
	function m(e, t) {
		var n, r, o = (n = t.encryptedTransportMessage()) == null || (n = n.armadillo()) == null || (n = n.payload) == null ? void 0 : n.applicationData;
		if (o != null) {
			var a = [];
			if (((r = o.metadataSync) == null ? void 0 : r.actions) != null) {
				var i;
				(i = o.metadataSync) == null || i.actions.forEach(function(t) {
					return p(a, e, t);
				});
			}
			return a;
		}
	}
	function p(e, t, n) {
		if (n.chatAction != null) return _(e, t, n.chatAction);
		if (n.messageAction != null) return f(e, t, n.messageAction);
	}
	function _(e, t, n) {
		var a = t.directive, i = t.insertionSource, l = t.message;
		if (n.chatId == null) {
			r("FBLogger")("mps").warn("Chat id not defined for appdata chat action");
			return;
		}
		if (n.chatDelete != null && e.push({
			directive: {
				actionType: o("MpsTypes").ActionType.DeleteThread,
				debugFlags: a.debugFlags,
				isLocalOnly: !0,
				isTransportErrorPlaceholder: !1,
				tags: [],
				targetMessageId: l.messageId
			},
			insertionSource: i,
			message: babelHelpers.extends({}, l, { threadId: o("MpsTypes").toThreadId(n.chatId) })
		}), n.chatArchive != null) {
			r("FBLogger")("mps").warn("Chat archive not supported for appdata");
			return;
		}
		if (n.chatRead != null) {
			r("FBLogger")("mps").warn("Chat read not supported for appdata");
			return;
		}
	}
	function f(e, t, n) {
		var a = t.directive, i = t.insertionSource, l = t.message;
		if (n.key == null) {
			r("FBLogger")("mps").warn("Message key not defined for appdata message");
			return;
		}
		var s = n.key.id, u = d(n.key.remoteJid);
		if (u == null) {
			r("FBLogger")("mps").warn("Message key remoteJid incomplete for appdata message");
			return;
		}
		if (s == null) {
			r("FBLogger")("mps").warn("Message key id is incomplete for appdata message");
			return;
		}
		n.messageDelete != null && e.push({
			directive: {
				actionType: o("MpsTypes").ActionType.DeleteTopLevel,
				debugFlags: a.debugFlags,
				isLocalOnly: !1,
				isTransportErrorPlaceholder: !1,
				tags: [],
				targetMessageId: o("MpsTypes").toMessageId(s)
			},
			insertionSource: i,
			message: babelHelpers.extends({}, l, { threadId: o("MpsTypes").toThreadId(u) })
		});
	}
	function g(t) {
		try {
			for (var n of e) {
				var a = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(t.message.payload), i = n(t, a);
				if (i != null) return o("WAResultOrError").makeResult(i);
			}
			return r("FBLogger")("mps").warn("mutate preprocessor failed to mutate payload"), o("WAResultOrError").makeResult([t]);
		} catch (e) {
			var l = r("getErrorSafe")(e);
			return r("FBLogger")("mps").catching(l).mustfix("Preprocess directive handling failed for message"), o("WAResultOrError").DEPRECATED_makeError("runtime-error", l);
		}
	}
	var h = o("MpsPreprocessor").preprocessor(function(e) {
		var t = e.ctx, n = e.payloadList, a = new Map(), i = [];
		for (var l of n) {
			if (l.directive.actionType !== o("MpsTypes").ActionType.Preprocess) {
				i.push(l);
				continue;
			}
			var s = g(l);
			if (s.success) s.value.length === 0 && t.messageToQpl.endSuccess(l.message.messageId), i.push.apply(i, s.value);
			else {
				var u;
				a.set(l.message.messageId, (u = s.payload) != null ? u : r("err")("Preprocess directive handler failed - runtime error"));
			}
		}
		return {
			ctx: t,
			errors: a,
			payloadList: i
		};
	}, "mutate_message");
	l.MAWMpsMutateMessagePreprocessor = h;
}), 98);
