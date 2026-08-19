__d("MawEchoToProtobufConverter", [
	"EBAPIWorkerCheck",
	"EchoMessage",
	"FBLogger",
	"I64",
	"MAWConvertXMAGatingTypeToExtendedContentOverlayIconGlyph",
	"MAWConvertXMALayoutTypeToExtendedContentXMLLayoutType",
	"MAWConvertXMATargetTypeToExtendedContentTargetType",
	"MAWDbMedia",
	"MAWFrontendMediaUtils",
	"MAWHandleEchoMediaMsgsRestoreV2",
	"MAWJids",
	"MAWMsgType",
	"MAWODSProxy",
	"MAWParseXMAProtocol",
	"MessageBackupSupplementalKeyGenerator",
	"MpsTags",
	"MpsTypes",
	"QPLFlow",
	"SendMsgArgsToProtobuf",
	"WAArmadilloApplication.pb",
	"WABuildMpsPayload",
	"WAConsumerApplication.pb",
	"WAGlobals",
	"WAHashUtils",
	"WAJids",
	"WALogger",
	"WAMsgApplication.pb",
	"WAOdsEnums",
	"WAStanzaUtils",
	"WATimeUtils",
	"encodeProtobuf",
	"qpl",
	"validateMAWMediaAndComposeEntryForProtoMsg"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $, P, N = r("qpl")._(521484676, "2684");
	function M(t) {
		try {
			return o("EchoMessage").decodeEchoMessage(t);
		} catch (t) {
			return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web][echo2protobuf_v2] Failed to decode echo message: ", ""])), t), null;
		}
	}
	function w(e) {
		if (e.mediaData == null) return null;
		var t = e.previewMediaData, n = e.xOfflineThreadingId, r = e.mediaData, a = r.attachmentObjectId, i = r.backupEntFbid, l = r.directPath, m = r.encryptedHash, p = r.filename, _ = r.height, f = r.mediaContentType, g = r.mediaKey, h = r.mediaKeyTimestamp, y = r.mediaPlayableDuration, C = r.plaintextHash, b = r.previewContentHeight, v = r.previewContentWidth, S = r.size, R = r.width, L = e.contentType === o("EchoMessage").EchoMessageContentType.XMA, E = o("MAWFrontendMediaUtils").getMediaTypeAndServerMediaTypeFromBlob(f || "", L), k = E.mediaType, I = E.serverMediaType;
		if (g == null) return o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web][echo2protobuf_v2] Media message is missing media key"]))), null;
		if (m == null) return o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web][echo2protobuf_v2] Media message is missing encrypted hash"]))), null;
		var T = null;
		if (t != null) try {
			T = o("MAWHandleEchoMediaMsgsRestoreV2").constructRawDownloadableThumbnail(t);
		} catch (e) {
			o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
				"[labyrinth_web][echo2protobuf_v2] Unable to construct downloadableThumbnail from previewMediaData: ",
				", msg id: ",
				""
			])), e, n != null ? n : "");
		}
		var D = o("WAHashUtils").stringToPlaintextHash(o("MAWHandleEchoMediaMsgsRestoreV2").getBase64WithoutPadding(C)), x;
		try {
			x = o("validateMAWMediaAndComposeEntryForProtoMsg").validateMediaEntry(D, o("MAWHandleEchoMediaMsgsRestoreV2").constructMediaEntry(D, m, g, l, h, I, p, i, a, T, S));
		} catch (e) {
			return o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web][echo2protobuf_v2] Unable to validate media entry: ", ""])), e), null;
		}
		var $ = o("MAWHandleEchoMediaMsgsRestoreV2").getMediaInfo({
			filename: p,
			height: _,
			mediaPlayableDuration: y,
			mediaType: k,
			previewContentHeight: b,
			previewContentWidth: v,
			width: R
		});
		return {
			mediaData: {
				fileSize: S || 0,
				mediaEntry: x,
				mediaInfo: $
			},
			mediaType: k,
			type: "Media"
		};
	}
	function A(e, t) {
		if (e.xmaData == null) return null;
		var n = e.serializationOrigin, r = e.text, a = e.xmaData, i = a.xmaContentRef, l = a.xmaDataclass, s = a.xmaDefaultCTA, u = a.xmaGatingType, c = a.xmaHeaderSubtitle, d = a.xmaHeaderTitle, f = a.xmaLayoutType, g = a.xmaMaxSubtitleNumLines, h = a.xmaMaxTitleNumLines, y = a.xmaSubtitleText, C = a.xmaTargetExpiry, b = a.xmaTargetId, v = a.xmaTargetType, S = a.xmaTargetUsername, R = a.xmaTitleText;
		if (v == null) return o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web][echo2protobuf_v2] Mandatory XMA Data missing for XMA message. Echo message origin ", ""])), n != null ? n : ""), null;
		var L = o("MAWConvertXMATargetTypeToExtendedContentTargetType").convertXMATargetTypeToExtendedContentTargetType(v), E;
		if (s != null && (E = o("MAWParseXMAProtocol").getDefaultCTA(s)), E != null && !o("MAWParseXMAProtocol").isValidCTA(E, L, !0)) return o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web][echo2protobuf_v2] defaultCTA failed validation check. Echo message origin ", ""])), n != null ? n : ""), null;
		var k;
		u != null && (k = o("MAWConvertXMAGatingTypeToExtendedContentOverlayIconGlyph").convertXMAGatingTypeToExtendedContentOverlayIconGlyph(u));
		var I;
		C != null && (I = o("WATimeUtils").castToUnixTime(C));
		var T;
		f != null && (T = o("MAWConvertXMALayoutTypeToExtendedContentXMLLayoutType").convertXMALayoutTypeToExtendedContentXMLLayoutType(f));
		var D = null, x = null;
		if (e.mediaData != null) {
			var $ = w(e);
			if ($ == null) return o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web][echo2protobuf_v2] Failed to build XMA preview media from EchoMessage. Echo message origin ", ""])), n != null ? n : ""), null;
			var P = {
				fileSize: $.mediaData.fileSize,
				mediaEntry: $.mediaData.mediaEntry,
				mediaInfo: $.mediaData.mediaInfo,
				mediaType: $.mediaType
			};
			D = P, x = P;
		}
		var N = {
			contentRef: i,
			defaultCTA: E,
			headerTitle: d,
			maxSubtitleNumOfLines: g,
			maxTitleNumOfLines: h,
			overlayDescription: c,
			overlayIconGlyph: k,
			overlayTitle: d,
			subtitleText: y,
			targetExpiringAtSec: I,
			targetId: b,
			targetUsername: S,
			titleText: R,
			xmaLayoutType: T
		}, M = {
			associatedMsgSendArgs: null,
			faviconMetadata: null,
			headerMetadata: D,
			previewMetadata: x,
			xmaArgs: N,
			xmaMsgExternalId: t
		};
		return {
			content: r,
			type: o("MAWMsgType").MSG_TYPE.XMA,
			xmaData: M,
			xmaDataclass: l != null ? l : null,
			xmaMessageType: L
		};
	}
	function F(e) {
		var t = e.receiverFetchData, n = e.receiverFetchId;
		if (n == null || t == null) return null;
		if (t.type !== "sticker") {
			var r;
			return o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
				"[labyrinth_web][echo2protobuf_v2] Unsupported receiver fetch message type: ",
				". Echo message origin ",
				""
			])), t.type, (r = e.serializationOrigin) != null ? r : ""), null;
		}
		return {
			height: t.previewHeight,
			mediaType: o("MAWDbMedia").MEDIA_TYPE.STICKER,
			receiverFetchId: (P || (P = o("I64"))).of_string(n),
			type: o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH,
			width: t.previewWidth
		};
	}
	function O(e, t, n) {
		var r = e.quoteData;
		if (r == null || r.quoteMessageId == null || r.quoteMessageSender == null) return o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] Quote data is missing for message: ", ""])), e.messageId), null;
		var a = o("WAJids").interpretAndValidateJid(t), i = o("MAWJids").toUserJid(r.quoteMessageSender.localKey), l = n === i, s;
		if (a.jidType === "msgrUser") s = i;
		else if (a.jidType === "group") s = a.groupJid;
		else return null;
		return U({ payload: { content: { bumpExistingMessage: { key: {
			fromMe: l,
			id: r.quoteMessageId,
			participant: a.jidType === "group" && !l ? i : void 0,
			remoteJid: s
		} } } } });
	}
	function B(e) {
		if (e.text == null) return null;
		if (e.editHistory.length === 0) return e.text;
		var t = [].concat(e.editHistory).sort(function(e, t) {
			return e.timestamp - t.timestamp;
		})[0];
		return t == null ? void 0 : t.text;
	}
	function W(e, t, n, r) {
		if (e.contentType === o("EchoMessage").EchoMessageContentType.DECRYPTION_FAILURE) return null;
		if (e.contentType === o("EchoMessage").EchoMessageContentType.PLACEHOLDER && e.contentSubtype === o("EchoMessage").EchoMessageContentSubtype.UNSEND) {
			if (B(e) == null) {
				var a;
				return o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web][echo2protobuf_v2] Revoked message is missing text content. Echo message origin ", ""])), (a = e.serializationOrigin) != null ? a : ""), null;
			}
			return V({ payload: { applicationData: { revoke: { key: {
				fromMe: !0,
				id: o("WAStanzaUtils").toStanzaId("0")
			} } } } });
		}
		if (e.contentType === o("EchoMessage").EchoMessageContentType.TEXT && e.xContentType === o("EchoMessage").EchoXMessageContentType.BUMP) {
			var i = O(e, t, n);
			return i;
		}
		if (e.contentType === o("EchoMessage").EchoMessageContentType.XMA && e.xmaData != null) {
			var l = A(e, r);
			return l == null ? null : o("SendMsgArgsToProtobuf").createMessageApplication(l, t);
		}
		if (e.receiverFetchId != null) {
			var s = F(e);
			return s == null ? null : o("SendMsgArgsToProtobuf").createMessageApplication(s, t);
		}
		if (e.mediaData != null) {
			var u = w(e);
			return u == null ? null : o("SendMsgArgsToProtobuf").createMessageApplication(u, t);
		}
		var c = B(e);
		if (c == null) {
			var d;
			return o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web][echo2protobuf_v2] Text message is missing text content. Echo message origin ", ""])), (d = e.serializationOrigin) != null ? d : ""), null;
		}
		var m = {
			content: c,
			type: o("MAWMsgType").MSG_TYPE.TEXT
		};
		return o("SendMsgArgsToProtobuf").createMessageApplication(m, t);
	}
	function q(e, t, n, r, a) {
		var i = o("encodeProtobuf").encodeProtobuf(o("WAMsgApplication.pb").MessageApplicationSpec, e).readBuffer(), l = o("WABuildMpsPayload").buildBackupProtobufBytes({ encryptedTransportMessage: i }, {
			externalId: r,
			frankingTag: null,
			reportingTag: null,
			senderJid: t,
			threadId: n,
			timestampMs: o("MpsTypes").toTimestamp(a)
		});
		return {
			decryptedProtobuf: l,
			protobufTimestampMS: a
		};
	}
	function U(e) {
		return {
			metadata: {
				frankingKey: null,
				frankingVersion: null
			},
			payload: { subProtocol: { armadillo: {
				payload: o("encodeProtobuf").encodeProtobuf(o("WAArmadilloApplication.pb").ArmadilloSpec, e).readBuffer(),
				version: 1
			} } }
		};
	}
	function V(e) {
		return {
			metadata: {
				frankingKey: null,
				frankingVersion: null
			},
			payload: { subProtocol: { consumerMessage: {
				payload: o("encodeProtobuf").encodeProtobuf(o("WAConsumerApplication.pb").ConsumerApplicationSpec, e).readBuffer(),
				version: 1
			} } }
		};
	}
	function H(e, t, n, r, a, i) {
		var l = o("WAJids").isAuthorMe(t) ? i : t, s = l === n, u = o("WAJids").interpretAndValidateJid(a).jidType === "group";
		return V({ payload: { content: { reactionMessage: {
			key: {
				fromMe: s,
				id: r,
				participant: u && !s ? n : void 0,
				remoteJid: a
			},
			senderTimestampMs: null,
			text: e
		} } } });
	}
	function G(e, t) {
		var n = o("MAWJids").toUserJid(e.localKey);
		return n === t ? o("WAJids").AUTHOR_ME : n;
	}
	function z(e, t, n) {
		return o("WAJids").interpretAndValidateJid(e).jidType === "group" || t === n ? e : n;
	}
	function j(e, t, n, r, a, i, l) {
		var s = !1, u = z(n, r, a);
		t.forEach(function(t) {
			if (!(t.messageId == null || t.messageId === i)) {
				s = !0;
				var a = o("WAStanzaUtils").toStanzaId(t.messageId), c = o("WATimeUtils").castUnixTimeToMillisTime(o("WATimeUtils").castToUnixTime(t.timestamp)), d = o("MessageBackupSupplementalKeyGenerator").createEditSupplementalKey(r, c);
				if (d == null) {
					l.addPoint("edit_supplemental_key_generation_failure"), o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web][echo2protobuf_v2] Failed to create edit supplemental key"])));
					return;
				}
				var m = {
					content: t.text,
					originalProtocolMsgId: {
						author: r,
						chat: u,
						externalId: i
					},
					timestampMs: c,
					type: o("MAWMsgType").MSG_TYPE.EDIT_ACTION
				};
				try {
					e.set(d, q(o("SendMsgArgsToProtobuf").createMessageApplication(m, n), r, n, a, c));
				} catch (e) {
					l.addPoint("edit_supplemental_protobuf_encoding_failure"), o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web][echo2protobuf_v2] Exception when trying to encode edit supplemental protobuf: ", ""])), e);
				}
			}
		}), s && l.addPoint("convert_edits");
	}
	function K(e, t, n, r, a, i, l) {
		var s, u, c, d = (s = t.reactions) != null ? s : [], m = (u = t.reactionXOfflineThreadingIds) != null ? u : [], p = (c = t.reactionAuthoritativeTimestampMs) != null ? c : [], _ = !1;
		d.forEach(function(t, s) {
			var u = m[s], c = p[s];
			if (u == null || c == null) {
				o("WALogger").WARN(v || (v = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] reaction fields in backup data uneven in length"])));
				return;
			}
			var d = t.displayName;
			if ((d == null ? void 0 : d.length) === 0) {
				o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] reaction string is not a single character"])));
				return;
			}
			var f = u.displayName;
			if (f == null) {
				o("WALogger").ERROR(R || (R = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] reaction external id missing"])));
				return;
			}
			var g = G(t, r), h = o("WAStanzaUtils").toStanzaId(f), y = o("WATimeUtils").castUnixTimeToMillisTime(o("WATimeUtils").castToUnixTime(Number(c.displayName) / 1e3)), C = o("MessageBackupSupplementalKeyGenerator").createReactionSupplementalKey(g);
			if (C == null) {
				l.addPoint("reaction_supplemental_key_generation_failure"), o("WALogger").ERROR(L || (L = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web][echo2protobuf_v2] Failed to create reaction supplemental key"])));
				return;
			}
			_ = !0;
			try {
				e.set(C, q(H(d, g, a, i, n, r), a, n, h, y));
			} catch (e) {
				l.addPoint("reaction_supplemental_protobuf_encoding_failure"), o("WALogger").ERROR(E || (E = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web][echo2protobuf_v2] Exception when trying to encode reaction supplemental protobuf: ", ""])), e);
			}
		}), _ && l.addPoint("convert_reactions");
	}
	function Q(e, t) {
		var n = o("QPLFlow").startQPLFlow(N), r = M(e);
		if (r == null) return o("WALogger").ERROR(k || (k = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web][echo2protobuf_v2] Failed to decode echo message"]))), n.endFail("echo_decode_failure"), null;
		var a = o("WAGlobals").getMyUserJid(), i = r.from, l = r.sortOrderMs, s = r.xOfflineThreadingId;
		if (s == null || i == null) {
			var u;
			return o("WALogger").ERROR(I || (I = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web][echo2protobuf_v2] One of the mandatory fields is null for Echo message. Echo message origin ", ""])), (u = r.serializationOrigin) != null ? u : ""), n.endFail("mandatory_fields_missing"), null;
		}
		var c = o("MAWJids").toUserJid(i.localKey), d = o("WAStanzaUtils").toStanzaId(s), m = o("WATimeUtils").castToMillisTime(l), p = W(r, t, c, d);
		if (p == null) return o("WALogger").ERROR(T || (T = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web][echo2protobuf_v2] Failed to build message application from EchoMessage"]))), n.endFail("echo_message_parsing_failure"), null;
		var _;
		try {
			_ = q(p, c, t, d, m);
		} catch (e) {
			return n.endFail("top_level_protobuf_encoding_failure"), o("WALogger").ERROR(D || (D = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web][echo2protobuf_v2] Exception when trying to encode top-level protobuf: ", ""])), e), null;
		}
		var f = new Map();
		j(f, r.editHistory, t, c, a, d, n), K(f, r, t, a, c, d, n), n.endSuccess();
		var g;
		try {
			g = o("MpsTags").getTagFromProto(_.decryptedProtobuf);
		} catch (e) {
			o("WALogger").ERROR(x || (x = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web][echo2protobuf_v2] Failed to get tag from proto: ", ""])), e);
		}
		return {
			otid: d,
			supplementalProtobufs: f,
			tags: g != null ? [g] : [],
			toplevelProtobuf: _
		};
	}
	function X(e, t) {
		if (!o("EBAPIWorkerCheck").runningInWorker()) throw r("FBLogger")("messenger_web").mustfixThrow("convertEchoMessagesToEBProtobufs should be called from the worker thread");
		var n = e.map(function(e) {
			return Q(e, t);
		}).filter(Boolean);
		return o("MAWODSProxy").odsBumpEntityKey({
			amount: n.length,
			entity: o("WAOdsEnums").Entity.EB_RESTORE,
			key: "echo2protobuf_v2.success"
		}), n.length !== e.length && (o("WALogger").WARN($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
			"[labyrinth_web][echo2protobuf_v2] Failed to convert all echo messages to protobuf. Chat: ",
			", echo messages count: ",
			", converted echo messages count: ",
			""
		])), t, e.length, n.length), o("MAWODSProxy").odsBumpEntityKey({
			amount: e.length - n.length,
			entity: o("WAOdsEnums").Entity.EB_RESTORE,
			key: "echo2protobuf_v2.fail"
		})), n;
	}
	l.convertEchoMessageToEBProtobuf = Q, l.convertEchoMessagesToEBProtobufs = X;
}), 98);
