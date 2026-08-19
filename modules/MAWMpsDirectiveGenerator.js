__d("MAWMpsDirectiveGenerator", [
	"FBLogger",
	"MAWMpsTypes",
	"MAWProtobufDeserializers",
	"MWFBLogger",
	"MpsFutureProofKey",
	"MpsPreprocessor",
	"MpsTags",
	"MpsTypes",
	"WAResultOrError",
	"err",
	"getErrorSafe",
	"getMediaTypeFromConsumerMessage",
	"justknobx",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = { status: "next" };
	function s(e) {
		return o("MpsTypes").toSupplementalKey(o("MAWMpsTypes").SupplementalKeyPrefixMps.REACTION + ":" + e);
	}
	function u(e) {
		return o("MpsTypes").toSupplementalKey(o("MAWMpsTypes").SupplementalKeyPrefixMps.DELETE_REACTION + ":" + e);
	}
	function c(e, t) {
		var n, r = t.subProtocol();
		return (r == null ? void 0 : r.kind) !== "consumerApplication" || ((n = r.payload) == null || (n = n.content) == null || (n = n.editMessage) == null ? void 0 : n.timestampMs) == null ? o("WAResultOrError").makeError("edit_protobuf_invalid") : o("WAResultOrError").makeResult(d(e.senderId, r.payload.content.editMessage.timestampMs));
	}
	function d(e, t) {
		return o("MpsTypes").toSupplementalKey(o("MAWMpsTypes").SupplementalKeyPrefixMps.EDIT + ":" + e + ":" + t);
	}
	function m(e) {
		return o("MpsTypes").toSupplementalKey(o("MAWMpsTypes").SupplementalKeyPrefixMps.RAVEN_ACTION_MESSAGE + ":" + e);
	}
	function p(e) {
		return o("MpsTypes").toSupplementalKey(e);
	}
	function _(t, n) {
		var r, a = n.subProtocol();
		return (a == null ? void 0 : a.kind) !== "armadillo" || ((r = a.payload) == null || (r = r.content) == null ? void 0 : r.ravenMessageMsgr) == null ? e : {
			directive: {
				actionType: o("MpsTypes").ActionType.Preprocess,
				isLocalOnly: !1,
				isTransportErrorPlaceholder: !1,
				tags: [],
				targetMessageId: t.messageId
			},
			status: "success"
		};
	}
	function f(t, n) {
		var r, a = n.subProtocol();
		return (a == null ? void 0 : a.kind) !== "consumerApplication" || ((r = a.payload) == null || (r = r.content) == null ? void 0 : r.pollCreationMessage) == null ? e : {
			directive: {
				actionType: o("MpsTypes").ActionType.UpsertTopLevel,
				isLocalOnly: !1,
				isTransportErrorPlaceholder: !1,
				tags: [],
				targetMessageId: t.messageId
			},
			status: "success"
		};
	}
	function g(t, n) {
		var r, a, i = n.subProtocol();
		if ((i == null ? void 0 : i.kind) !== "consumerApplication" || ((r = i.payload) == null || (r = r.content) == null ? void 0 : r.pollUpdateMessage) == null) return e;
		if (((a = i.payload.content.pollUpdateMessage.pollCreationMessageKey) == null ? void 0 : a.id) == null) return {
			errorMessage: "no target message id found for poll update message",
			status: "drop"
		};
		var l = i.payload.content.pollUpdateMessage.pollCreationMessageKey.id;
		return {
			directive: {
				actionType: o("MpsTypes").ActionType.UpsertSupplemental,
				isLocalOnly: !1,
				isTransportErrorPlaceholder: !1,
				supplementalKey: p(t.messageId),
				tags: [],
				targetMessageId: o("MpsTypes").toMessageId(l)
			},
			status: "success"
		};
	}
	function h(t, n) {
		var r, a, i, l = n.subProtocol();
		if ((l == null ? void 0 : l.kind) !== "armadillo" || ((r = l.payload) == null || (r = r.content) == null ? void 0 : r.ravenActionNotifMessage) == null) return e;
		if (((a = l.payload.content.ravenActionNotifMessage.key) == null ? void 0 : a.id) == null) return {
			errorMessage: "no target message id found for raven action message",
			status: "drop"
		};
		var s = (i = l.payload) == null || (i = i.content) == null || (i = i.ravenActionNotifMessage.key) == null ? void 0 : i.id;
		return {
			directive: {
				actionType: o("MpsTypes").ActionType.Preprocess,
				isLocalOnly: !1,
				isTransportErrorPlaceholder: !1,
				supplementalKey: m(t.senderId),
				tags: [],
				targetMessageId: o("MpsTypes").toMessageId(s)
			},
			status: "success"
		};
	}
	function y(t, n) {
		var r, a = n.subProtocol();
		if ((a == null ? void 0 : a.kind) !== "consumerApplication") return e;
		var i = a.proto, l = (r = i.payload) == null ? void 0 : r.content, s = o("getMediaTypeFromConsumerMessage").getMediaTypeFromConsumerMessage(i);
		if (s == null && (l == null ? void 0 : l.messageText) == null && (l == null ? void 0 : l.pollCreationMessage) == null) return e;
		var u = [], c = o("MpsTags").getMpsMessageTagFromMediaType(s);
		return c != null && u.push(c), {
			directive: {
				actionType: o("MpsTypes").ActionType.UpsertTopLevel,
				isLocalOnly: !1,
				isTransportErrorPlaceholder: !1,
				tags: u,
				targetMessageId: t.messageId
			},
			status: "success"
		};
	}
	function C(t, n) {
		var r, a = n.subProtocol();
		if ((a == null ? void 0 : a.kind) !== "armadillo") return e;
		var i = a, l = (r = i.payload) == null ? void 0 : r.content;
		return (l == null ? void 0 : l.extendedContentMessage) == null && (l == null ? void 0 : l.bumpExistingMessage) == null && (l == null ? void 0 : l.noteReplyMessage) == null && (l == null ? void 0 : l.screenshotAction) == null ? e : {
			directive: {
				actionType: o("MpsTypes").ActionType.UpsertTopLevel,
				isLocalOnly: !1,
				isTransportErrorPlaceholder: !1,
				tags: [],
				targetMessageId: t.messageId
			},
			status: "success"
		};
	}
	function b(t, n) {
		var r;
		return n.proto.payload != null || ((r = n.proto.metadata) == null ? void 0 : r.chatEphemeralSetting) == null ? e : {
			directive: {
				actionType: o("MpsTypes").ActionType.Noop,
				isLocalOnly: !0,
				isTransportErrorPlaceholder: !1,
				tags: [],
				targetMessageId: t.messageId
			},
			status: "success"
		};
	}
	function v(t, n) {
		var r, a, i, l = n.subProtocol();
		if ((l == null ? void 0 : l.kind) !== "consumerApplication") return e;
		var s = l.proto;
		if (((r = s.payload) == null || (r = r.content) == null ? void 0 : r.editMessage) == null) return e;
		var u = (a = s.payload) == null || (a = a.content) == null ? void 0 : a.editMessage, d = (i = u.key) == null ? void 0 : i.id, m = c(t, n);
		return d == null ? {
			errorMessage: "no target message id found for edit supplemental message",
			status: "drop"
		} : m.success ? {
			directive: {
				actionType: o("MpsTypes").ActionType.UpsertSupplemental,
				isLocalOnly: !1,
				isTransportErrorPlaceholder: !1,
				supplementalKey: m.value,
				tags: [],
				targetMessageId: o("MpsTypes").toMessageId(d)
			},
			status: "success"
		} : {
			errorMessage: "no edit timestampMs found for edit supplemental message",
			status: "drop"
		};
	}
	function S(t, n) {
		var a, i, l, c, d = n.subProtocol();
		if ((d == null ? void 0 : d.kind) !== "consumerApplication") return e;
		var m = d.proto;
		if (((a = m.payload) == null || (a = a.content) == null ? void 0 : a.reactionMessage) == null) return e;
		var p = (i = m.payload) == null || (i = i.content) == null ? void 0 : i.reactionMessage;
		if (((l = p.key) == null ? void 0 : l.id) == null) return {
			errorMessage: "no target message id found for reaction supplemental message",
			status: "drop"
		};
		var _ = (c = p.key) == null ? void 0 : c.id, f = (p.text == null || p.text === "") && r("justknobx")._("204");
		return {
			directive: {
				actionType: o("MpsTypes").ActionType.UpsertSupplemental,
				isLocalOnly: !1,
				isTransportErrorPlaceholder: !1,
				supplementalKey: f ? u(t.senderId) : s(t.senderId),
				tags: [],
				targetMessageId: o("MpsTypes").toMessageId(_)
			},
			status: "success"
		};
	}
	function R(t, n) {
		var r, a, i = n.subProtocol();
		if ((i == null ? void 0 : i.kind) !== "consumerApplication") return e;
		var l = i.proto, s = (r = l.payload) == null || (r = r.applicationData) == null ? void 0 : r.revoke;
		if (s == null) return e;
		if (((a = s.key) == null ? void 0 : a.id) == null) return {
			errorMessage: "no target message id found for revoked message",
			status: "drop"
		};
		var u = s.key.id;
		return {
			directive: {
				actionType: o("MpsTypes").ActionType.DeleteTopLevelWithPlaceholder,
				isLocalOnly: !1,
				isTransportErrorPlaceholder: !1,
				tags: [],
				targetMessageId: o("MpsTypes").toMessageId(u)
			},
			status: "success"
		};
	}
	function L(e, t) {
		var n = e.locallyTransformedMessage(), r = (n == null ? void 0 : n.proto.pollUpdateMessage) != null;
		return {
			actionType: o("MpsTypes").ActionType.UpsertTopLevel,
			isLocalOnly: !r,
			isTransportErrorPlaceholder: !1,
			tags: [],
			targetMessageId: t.messageId
		};
	}
	function E(t, n) {
		var r, a, i = n.subProtocol();
		if ((i == null ? void 0 : i.kind) !== "armadillo") return e;
		var l = i;
		return ((r = l.payload) == null || (r = r.applicationData) == null || (r = r.metadataSync) == null ? void 0 : r.actions) != null || ((a = l.payload) == null || (a = a.signal) == null ? void 0 : a.encryptedBackupsSecrets) != null ? {
			directive: {
				actionType: o("MpsTypes").ActionType.Preprocess,
				isLocalOnly: !1,
				isTransportErrorPlaceholder: !1,
				tags: [],
				targetMessageId: t.messageId
			},
			status: "success"
		} : e;
	}
	function k(e, t) {
		try {
			var n, a = r("nullthrows")(e.encryptedTransportMessage()), i = [
				y,
				C,
				S,
				v,
				R,
				E,
				h,
				g,
				f,
				_,
				b
			];
			for (var l of i) {
				var s = l(t, a);
				if (s.status === "success") return o("WAResultOrError").makeResult(s.directive);
				if (s.status === "drop") return o("WAResultOrError").makeError(s.errorMessage);
			}
			return o("MWFBLogger").MPSLogger().mustfix("Unknown message type %s", (n = a.subProtocol()) == null ? void 0 : n.kind), o("WAResultOrError").makeResult({
				actionType: o("MpsTypes").ActionType.Unknown,
				isLocalOnly: !0,
				isTransportErrorPlaceholder: !1,
				tags: [],
				targetMessageId: t.messageId
			});
		} catch (e) {
			var u = r("getErrorSafe")(e);
			return r("FBLogger")("mps").catching(u).mustfix("Directive generation failed for message"), o("WAResultOrError").DEPRECATED_makeError("runtime-error", u);
		}
	}
	function I(e, t) {
		var n, a = r("nullthrows")(e.encryptedTransportEvent()).proto;
		if (((n = a.placeholder) == null ? void 0 : n.type) != null) return {
			actionType: o("MpsTypes").ActionType.UpsertTopLevel,
			isLocalOnly: !0,
			isTransportErrorPlaceholder: !0,
			tags: [],
			targetMessageId: t.messageId
		};
		if (a.event != null) return {
			actionType: o("MpsTypes").ActionType.UpsertTopLevel,
			isLocalOnly: !0,
			isTransportErrorPlaceholder: !1,
			tags: [],
			targetMessageId: t.messageId
		};
	}
	function T(e, t) {
		var n, a = r("nullthrows")(e.encryptedTransportEvent()).proto, i = a.placeholder != null;
		switch ((n = e.proto.metadata) == null ? void 0 : n.futureProofBehavior) {
			case o("MpsFutureProofKey").WCEPlaintextPayloadFutureProof.WCEPlaintextPayloadFutureProofPlaceholder: return o("WAResultOrError").makeResult({
				actionType: o("MpsTypes").ActionType.UpsertTopLevel,
				isLocalOnly: !0,
				isTransportErrorPlaceholder: i,
				tags: [],
				targetMessageId: t.messageId
			});
			case o("MpsFutureProofKey").WCEPlaintextPayloadFutureProof.WCEPlaintextPayloadFutureProofNoPlaceholder:
			case o("MpsFutureProofKey").WCEPlaintextPayloadFutureProof.WCEPlaintextPayloadFutureProofIgnore: return o("WAResultOrError").makeResult({
				actionType: o("MpsTypes").ActionType.Noop,
				isLocalOnly: !0,
				isTransportErrorPlaceholder: i,
				tags: [],
				targetMessageId: t.messageId
			});
			default: {
				var l = I(e, t);
				return o("WAResultOrError").makeResult(l != null ? l : {
					actionType: o("MpsTypes").ActionType.UpsertTopLevel,
					isLocalOnly: !0,
					isTransportErrorPlaceholder: i,
					tags: [],
					targetMessageId: t.messageId
				});
			}
		}
	}
	function D(e) {
		return {
			actionType: o("MpsTypes").ActionType.UpsertTopLevel,
			isLocalOnly: !0,
			isTransportErrorPlaceholder: !1,
			tags: [],
			targetMessageId: e.messageId
		};
	}
	function x(e) {
		var t = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(e.payload), n = t.payload();
		switch (n.kind) {
			case "messageApplication": return k(t, e);
			case "transportEvent": return T(t, e);
			case "locallyTransformedMessage": return o("WAResultOrError").makeResult(L(t, e));
			case "adminMessage": return o("WAResultOrError").makeResult(D(e));
			default: n.kind;
		}
		return o("WAResultOrError").makeError("Incoming message has no payload");
	}
	var $ = o("MpsPreprocessor").preprocessor(function(e) {
		var t = e.ctx, n = e.payloadList, o = new Map(), a = [];
		return n.forEach(function(e) {
			var t, n = e.directive, i = e.insertionSource, l = e.message, s = x(l);
			if (s.success && s.value != null) {
				a.push({
					directive: babelHelpers.extends({}, s.value, { debugFlags: ["WA"] }),
					insertionSource: i,
					message: l
				});
				return;
			}
			if (n != null) {
				a.push({
					directive: n,
					insertionSource: i,
					message: l
				});
				return;
			}
			o.set(l.messageId, (t = s.payload) != null ? t : r("err")("Directive generation failed for message - runtime error"));
		}), {
			ctx: t,
			errors: o,
			payloadList: a
		};
	}, "maw-mps-directive-generator");
	l.ravenActionSupplementalKeyForMps = m, l.pollUpdateSupplementalKeyForMps = p, l.generateDirectiveForMessage = x, l.MawMpsDirectiveGeneratorPreprocessor = $;
}), 98);
