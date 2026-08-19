__d("MAWSpamReportUtils", [
	"I64",
	"InstamadilloTransportPayload.pb",
	"LSIntEnum",
	"MAWAsMessageApplication",
	"MAWMediaUtils",
	"MAWProtobufDeserializers",
	"WAMsgApplication.pb",
	"WAWap",
	"createInstamadilloAddMessagePayload",
	"createInstamadilloTransportPayload",
	"encodeProtobuf"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(t, n, r, a, i, l) {
		var u;
		l === void 0 && (l = !1);
		var c = l ? "1" : "0", d = (e || (e = o("I64"))).to_string(t.timestampMs), m = t.isUnsent ? "1" : "0", p = o("WAWap").DROP_ATTR, _, f, g, h = "2", y = o("WAWap").DROP_ATTR, C = (u = t == null ? void 0 : t.text) != null ? u : null;
		if ((e || (e = o("I64"))).equal(t.displayedContentTypes, (s || (s = o("LSIntEnum"))).ofNumber(131072)) && C !== null) f = new TextEncoder().encode(C), _ = o("WAWap").DROP_ATTR, g = "3";
		else if ((e || (e = o("I64"))).equal(t.displayedContentTypes, (s || (s = o("LSIntEnum"))).ofNumber(65536))) f = null, _ = o("WAWap").DROP_ATTR, g = o("WAWap").DROP_ATTR;
		else if ((e || (e = o("I64"))).equal(t.displayedContentTypes, (s || (s = o("LSIntEnum"))).ofNumber(256)) || t.isUnsent) {
			var b = o("MAWAsMessageApplication").asMessageApplicationLSDb(t);
			f = o("encodeProtobuf").encodeProtobuf(o("WAMsgApplication.pb").MessageApplicationSpec, b).readByteArrayView(), _ = "text", g = "3", y = t.isUnsent ? "7" : o("WAWap").DROP_ATTR;
		} else if (t.transportKey === "Instamadillo") {
			var v = i != null ? o("createInstamadilloAddMessagePayload").createInstamadilloAddMessageMediaPayload(t, i) : o("createInstamadilloAddMessagePayload").createInstamadilloAddMessageTextPayload(t), S = o("createInstamadilloTransportPayload").createInstamadilloAddMessageTransportPayload(v);
			f = o("encodeProtobuf").encodeProtobuf(o("InstamadilloTransportPayload.pb").TransportPayloadSpec, S).readByteArrayView(), _ = i != null ? "media" : "text", g = "3", h = "3";
		} else {
			var R = o("MAWAsMessageApplication").asMessageApplicationLSDb(t);
			f = o("encodeProtobuf").encodeProtobuf(o("WAMsgApplication.pb").MessageApplicationSpec, R).readByteArrayView(), _ = "text", g = "3";
		}
		return o("WAWap").wap("message", {
			edit: y,
			from: r != null ? o("WAWap").GROUP_JID(r) : a != null ? o("WAWap").USER_JID(a) : o("WAWap").DROP_ATTR,
			id: o("WAWap").CUSTOM_STRING(t.messageId),
			participant: a != null ? o("WAWap").USER_JID(a) : o("WAWap").DROP_ATTR,
			selected: c,
			t: o("WAWap").CUSTOM_STRING(d),
			to: n != null ? o("WAWap").USER_JID(n) : o("WAWap").DROP_ATTR,
			type: _,
			unsent: m
		}, o("WAWap").wap("raw", {
			mediatype: p,
			protocol_v: h,
			v: g
		}, f != null ? f : []));
	}
	function c(e, t, n, r, a) {
		var i = [l(e.toplevelProtobuf.payload, e.toplevelProtobuf.messageId, e.toplevelProtobuf.timestampMs)];
		return e.supplementalProtobufs.entries().forEach(function(t) {
			var n = t[0], r = t[1];
			i.push(l(r.payload, r.messageId, r.timestampMs, e.toplevelProtobuf.messageId));
		}), i;
		function l(e, i, l, s) {
			var u, c, m, p, _, f, g = a ? "1" : "0", h = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(e), y = h.encryptedTransportMessage();
			if (y == null || ((u = y.consumerMessage()) == null || (u = u.payload) == null || (u = u.content) == null ? void 0 : u.reactionMessage) != null) return null;
			var C = y, b = (c = (m = C.armadillo()) == null || (m = m.payload) == null || (m = m.applicationData) == null || (m = m.metadataSync) == null || (m = m.actions) == null ? void 0 : m.some(function(e) {
				var t;
				return ((t = e.messageAction) == null ? void 0 : t.messageDelete) != null;
			})) != null ? c : !1, v = o("WAWap").DROP_ATTR, S, R, L, E, k, I = o("WAWap").DROP_ATTR, T = b;
			if (s != null && ((p = C.consumerMessage()) == null || (p = p.payload) == null || (p = p.content) == null ? void 0 : p.editMessage) != null) R = "text", L = "3", S = C.bytes, k = i, E = l;
			else if (b) R = "text", L = "3", S = C.bytes, k = i, I = "7", E = l;
			else {
				var D;
				(D = C.consumerMessage()) != null && D.attachmentMessage() ? R = "media" : R = "text", L = "3", v = d(C), E = l, k = i, S = C.bytes;
			}
			var x = null;
			if (((_ = h.proto.metadata) == null || (_ = _.frankingMetadata) == null ? void 0 : _.frankingTag) != null && ((f = h.proto.metadata) == null || (f = f.frankingMetadata) == null ? void 0 : f.reportingTag) != null && !T) {
				var $;
				x = o("WAWap").wap("franking", null, o("WAWap").wap("franking_tag", null, h.proto.metadata.frankingMetadata.frankingTag), o("WAWap").wap("reporting_tag", null, ($ = h.proto.metadata.frankingMetadata) == null ? void 0 : $.reportingTag));
			}
			return o("WAWap").wap("message", {
				edit: I,
				from: n != null ? o("WAWap").GROUP_JID(n) : r != null ? o("WAWap").USER_JID(r) : o("WAWap").DROP_ATTR,
				id: o("WAWap").CUSTOM_STRING(k),
				participant: r != null ? o("WAWap").USER_JID(r) : o("WAWap").DROP_ATTR,
				selected: g,
				t: o("WAWap").CUSTOM_STRING(E.toString()),
				to: t != null ? o("WAWap").USER_JID(t) : o("WAWap").DROP_ATTR,
				type: R,
				unsent: b ? "1" : "0"
			}, o("WAWap").wap("raw", {
				mediatype: typeof v == "string" ? o("WAWap").CUSTOM_STRING(v) : o("WAWap").DROP_ATTR,
				v: L
			}, S), x);
		}
	}
	function d(e) {
		var t, n = (t = e.consumerMessage()) == null ? void 0 : t.attachmentMessage();
		if (!n) {
			var r, a = ((r = e.armadillo()) == null ? void 0 : r.extendedContentMessage()) != null;
			return a ? "xma-image" : o("WAWap").DROP_ATTR;
		}
		return (function(e) {
			if ((typeof e == "object" && e !== null || typeof e == "function") && e.kind === "audioTransport") return "ptt";
			if ((typeof e == "object" && e !== null || typeof e == "function") && e.kind === "documentTransport") return "document";
			if ((typeof e == "object" && e !== null || typeof e == "function") && e.kind === "imageTransport") return "image";
			if ((typeof e == "object" && e !== null || typeof e == "function") && e.kind === "stickerTransport") return "sticker";
			if ((typeof e == "object" && e !== null || typeof e == "function") && e.kind === "videoTransport") {
				var t = e;
				return o("MAWMediaUtils").isTransportLegacyGif(t.payload) ? "gif" : "video";
			}
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})(n);
	}
	l.formatLSDbMsgForSpamReport = u, l.getFormattedMpsMsgsForSpamReport = c;
}), 98);
