__d("MAWParseXMAProtocol", [
	"FBLogger",
	"MAWMsgType",
	"MAWODSProxy",
	"MAWParseArmadilloProtocol",
	"MAWParseCollapsibleIdFromXMADataClass",
	"MAWParseSubprotocolVersionConsts",
	"MAWParseXMAFBConfig",
	"MAWParseXMAUnsupportedMessageType",
	"MAWXMALoggingUtils",
	"MWXMAV2IsCollapsibleXMA",
	"MWXMAV2XmaDataClass",
	"WAArmadilloXMA.pb",
	"WAGetPlatformFromStanzaId",
	"WAHex",
	"WAJids",
	"WALogger",
	"WAMedia",
	"WAMsgApplication.pb",
	"WAOdsEnums",
	"WAParseConsumerMessageProtocol",
	"WAParseMediaTransportProtocol",
	"WAParseMessageApplication",
	"WAParseProtocolUtils",
	"WAStanzaUtils",
	"WATimeUtils",
	"decodeProtobuf",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["actionContentBlob"], s, u, c, d, m, p, _, f, g, h, y, C, b, v = new Set([o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_STORY_REPLY]);
	function S(e, t) {
		if (!(e == null || e.payload == null)) return o("WAParseMediaTransportProtocol").decodeImageTransport(e.payload, t, "xma-image");
	}
	function R(e, t, n, a, i) {
		if (t == null || t.payload == null) return null;
		t.version !== o("MAWParseSubprotocolVersionConsts").ASSOCIATED_MESSAGE_SUBPROTOCOL_VERSION && o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[XMA] received associated message with incorrect version ", ""])), t.version);
		var l = o("decodeProtobuf").decodeProtobufWithUnknowns(o("WAMsgApplication.pb").MessageApplicationSpec, t.payload), u = o("WAParseMessageApplication").parseMessageApplication(l);
		if (u.type === "error") throw r("FBLogger")("messenger_web").mustfixThrow("XMA contains unparseable message application.");
		var c = u;
		if (c.subprotocolType !== "consumerMessage") throw r("FBLogger")("messenger_web").mustfixThrow("XMA contains incorrect message application type: " + c.subprotocolType);
		return o("WAParseConsumerMessageProtocol").parseConsumerMessageProtocol(e, c.payload, n, a, i);
	}
	var L = "https://www.instagram.com/stories/", E = "https://www.instagram.com/reel/", k = "https://www.instagram.com/tv/", I = "https://www.instagram.com/_n/profile_shop?", T = "https://www.instagram.com/", D = "https://www.alpha.facebook.com/share/", x = "https://m.facebook.com/share/", $ = "https://www.facebook.com/share/", P = "https://m.alpha.facebook.com/share/", N = "https://facebook.com/share/", M = "https://www.alpha.facebook.com/stories/", w = "https://www.facebook.com/stories/", A = "https://fb.gg/", F = "https://www.facebook.com/", O = "https://m.facebook.com/", B = "https://www.alpha.facebook.com/", W = "https://m.alpha.facebook.com/", q = "https://facebook.com/", U = "https://fb.watch/", V = "https://www.facebook.com/l.php", H = "https://m.facebook.com/l.php", G = "https://www.alpha.facebook.com/l.php", z = "https://m.alpha.facebook.com/l.php", j = "https://facebook.com/l.php", K = "https://l.facebook.com/l.php", Q = "https://facebook.com/events/", X = "https://www.facebook.com/events/", Y = "https://www.alpha.facebook.com/events/", J = "https://m.facebook.com/events/", Z = "https://m.alpha.facebook.com/events/", ee = "fb-messenger://payments/receipt?product_id=", te = "messenger://location_share", ne = "http://m.me/", re = ":", oe = "http://", ae = "https://";
	function ie(t) {
		var n, a, i, l, s, _ = t.chat, f = t.content, g = t.ebTimestampMs, h = t.meta, y = t.metadata, C = t.protobuf, b = o("MAWParseArmadilloProtocol").parseOneOfContentType(f), L = b === "paymentsTransactionMessage", E = null;
		if (L) {
			var k;
			E = (k = f.paymentsTransactionMessage) == null ? void 0 : k.extendedContentMessage;
		} else E = f.extendedContentMessage;
		if (E == null && L) return "paymentsTransactionMessage";
		if (E == null) throw r("FBLogger")("messenger_web").mustfixThrow("extendedContentMessage has no content");
		var I = E, T = I.targetType, D = I.xmaDataclass, x = o("WAGetPlatformFromStanzaId").getPlatformFromStanzaId(h.id.externalId);
		if (D != null && o("MAWODSProxy").odsBumpEntityKey({
			entity: o("WAOdsEnums").Entity.MAW_XMA_PROTOCOL_PARSING,
			key: "xma_dataclass.exists." + (T != null ? T : "null")
		}), T == null || !o("MAWParseXMAFBConfig").isFBSupportedTargetType({
			fbTargetType: T,
			xmaDataclass: D
		})) return {
			contentTypeForLogging: "extendedContentMessage",
			unstoredMedia: null,
			unstoredMsg: {
				ack: h.ack,
				id: h.id,
				msgContent: {
					protobuf: o("WAHex").bytesToBuffer(C),
					subtype: o("MAWParseXMAUnsupportedMessageType").getXMAUnsupportedMessageType(T, D, L)
				},
				reportingMeta: h.reportingMeta,
				sentTs: h.sentTs,
				serverTs: h.serverTs,
				ts: h.ts,
				type: o("MAWMsgType").MSG_TYPE.FUTUREPROOF
			},
			unstoredQuotedMedia: null,
			unstoredXMA: null,
			xmaTargetTypeForLogging: T
		};
		var $ = o("WAParseProtocolUtils").parseEphemerality(h, y), P = $.deleteTs, N = $.ephemeralSetting, M = $.expirationTs, w = o("WAParseProtocolUtils").enhanceReportingMeta(h, y), A = E, F = A.associatedMessage, O = A.commands, B = A.contentRef, W = A.ctas, q = A.favicon, U = A.headerImage, V = A.headerTitle, H = A.maxSubtitleNumOfLines, G = A.maxTitleNumOfLines, z = A.mentionedJid, j = A.messageText, K = A.overlayDescription, Q = A.overlayIconGlyph, X = A.overlayTitle, Y = A.previews, J = A.sentWithMessageId, Z = A.subtitleText, ee = A.targetId, te = A.targetUsername, ne = A.titleText, re = A.xmaLayoutType;
		F != null && (F.version == null || F.version < o("MAWParseSubprotocolVersionConsts").ASSOCIATED_MESSAGE_SUBPROTOCOL_VERSION) && o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["\n      received associatedMessage version is older than expected ", " as expected. "])), o("MAWParseSubprotocolVersionConsts").ASSOCIATED_MESSAGE_SUBPROTOCOL_VERSION), U != null && (U.version == null || U.version < o("MAWParseSubprotocolVersionConsts").XMA_HEADER_SUBPROTOCOL_VERSION) && o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["\n    received headerImage version is older than expected ", ". "])), o("MAWParseSubprotocolVersionConsts").XMA_HEADER_SUBPROTOCOL_VERSION), q != null && (q.version == null || q.version < o("MAWParseSubprotocolVersionConsts").XMA_FAVICON_SUBPROTOCOL_VERSION) && o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["\n    received favicon version is older than expected ", ". "])), o("MAWParseSubprotocolVersionConsts").XMA_FAVICON_SUBPROTOCOL_VERSION), Y.every(function(e) {
			(e.version == null || e.version < o("MAWParseSubprotocolVersionConsts").XMA_PREVIEW_SUBPROTOCOL_VERSION) && o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose(["\n      received previews version is older than expected ", ". "])), o("MAWParseSubprotocolVersionConsts").XMA_PREVIEW_SUBPROTOCOL_VERSION);
		});
		var oe = E.targetExpiringAtSec != null ? o("WATimeUtils").castLongIntToUnixTime(E.targetExpiringAtSec) : void 0, ae = F != null && J != null ? [o("WAStanzaUtils").toStanzaId(J), h.id.externalId] : [h.id.externalId, void 0], ie = ae[0], le = ae[1], se = [];
		if (Y != null) for (var ue = 0; ue < Y.length; ue++) {
			var ce, de, me = S(Y[ue], h.ts);
			me != null && !((T === o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_EXTERNAL_LINK_SHARE || T === o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_FEED_SHARE) && me.mediaType === o("WAMedia").MEDIA_TYPE.IMAGE && ((ce = me.validatedImageInfo) == null ? void 0 : ce.height) === 1 && ((de = me.validatedImageInfo) == null ? void 0 : de.width) === 1) && se.push(me);
		}
		var pe = S(U, h.ts), _e = S(q, h.ts), fe = (n = o("WAParseConsumerMessageProtocol").parsedQuotedConsumerMessage(y)) != null ? n : void 0, ge = o("MWXMAV2XmaDataClass").parseXmaDataClass(D), he;
		if (o("MWXMAV2IsCollapsibleXMA").isCollapsibleXMA(ge)) try {
			he = o("MAWParseCollapsibleIdFromXMADataClass").parseCollapsibleIdFromXMADataClass(ge);
		} catch (e) {
			var ye = r("getErrorSafe")(e);
			throw o("MAWODSProxy").odsBumpEntityKey({
				entity: o("WAOdsEnums").Entity.MAW_XMA_PROTOCOL_PARSING,
				key: "xma_validation." + x + "." + (T || 0) + ".error"
			}), r("FBLogger")("messenger_web").mustfixThrow("Unexpected error trying to parse collapsible ID: " + ye.message);
		}
		var Ce = babelHelpers.extends({
			collapsibleId: he,
			deleteTs: P,
			ebTimestampMs: g,
			ephemeralSetting: N,
			expirationTs: M,
			id: babelHelpers.extends({}, h.id, { externalId: ie }),
			quote: fe,
			reportingMeta: w,
			type: o("MAWMsgType").MSG_TYPE.XMA
		}, h), be = W.map(function(t) {
			var n = t.actionContentBlob, r = babelHelpers.objectWithoutPropertiesLoose(t, e);
			return r;
		}), ve = be.slice(1);
		T === o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_GAMING_CUSTOM_UPDATE && W.length === 1 && (ve = be);
		var Se = T === o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_CONTACT, Re = {
			author: h.id.author,
			commands: O,
			contentRef: B,
			ctas: ve,
			defaultCTA: be[0],
			externalId: ie,
			faviconMediaId: Se ? pe == null ? void 0 : pe.plaintextHash : _e == null ? void 0 : _e.plaintextHash,
			headerMediaId: Se ? _e == null ? void 0 : _e.plaintextHash : pe == null ? void 0 : pe.plaintextHash,
			headerTitle: V,
			isTombstoned: oe != null ? o("WATimeUtils").unixTime() > oe : !1,
			maxSubtitleNumOfLines: H,
			maxTitleNumOfLines: G,
			mentionedJids: z.map(o("WAJids").validateUserJid).filter(Boolean),
			overlayDescription: K,
			overlayIconGlyph: Q,
			overlayTitle: X,
			previewMediaIds: se.length > 0 ? se.map(function(e) {
				return e.plaintextHash;
			}) : void 0,
			sentWithMessage: j,
			subtitleText: Z,
			targetExpiringAtSec: oe,
			targetId: ee,
			targetType: T,
			targetUsername: te,
			threadJid: _,
			titleText: ne,
			xmaDataclass: D,
			xmaLayoutType: re
		}, Le;
		if (F != null && J == null) throw r("FBLogger")("messenger_web").mustfixThrow("XMA associatedMessage cannot be received without sentWithMessageId field");
		F != null && le != null && (Le = R(_, F, h, C, y));
		var Ee = (a = (i = Le) == null ? void 0 : i.unstoredMedia) != null ? a : null, ke = v.has(T);
		if (Ee != null && !ke) {
			var Ie = o("MAWXMALoggingUtils").getXmaTargetTypeStringFromEnum(T);
			throw o("MAWODSProxy").odsBumpEntityKey({
				entity: o("WAOdsEnums").Entity.MAW_XMA_PROTOCOL_PARSING,
				key: "assoc_msg_media_" + (Ie != null ? Ie : "unknown")
			}), r("FBLogger")("messenger_web").mustfixThrow("XMA associated msg cannot have additioinal dbMedia");
		}
		var Te = (l = (s = Le) == null ? void 0 : s.unstoredMsg) != null ? l : null;
		if (le != null && Te != null && (o("WALogger").DEV(p || (p = babelHelpers.taggedTemplateLiteralLoose([
			"ExternalId: ",
			" textId: ",
			""
		])), ie, le), Te.id = babelHelpers.extends({}, Te.id, { externalId: le }), Ce.id = babelHelpers.extends({}, Te.id, { externalId: ie }), Re.externalId = ie), ke && Ee != null && ((Te == null ? void 0 : Te.type) === "Gif" || (Te == null ? void 0 : Te.type) === "Sticker")) return {
			contentTypeForLogging: "extendedContentMessage",
			unstoredMedia: null,
			unstoredMsg: Ce,
			unstoredQuotedMedia: null,
			unstoredXMA: {
				unstoredAssociatedMedia: Ee,
				unstoredAssociatedMsg: Te,
				unstoredFavicon: Se ? se[0] : _e,
				unstoredHeaderMedia: pe,
				unstoredPreviews: se.length > 0 ? se : void 0,
				xma: Re
			},
			xmaTargetTypeForLogging: T
		};
		if (Te != null && Te.type !== "Text") throw r("FBLogger")("messenger_web").mustfixThrow("XMA associated msg cannot have type different from \"Text\". Received type: " + Te.type);
		return {
			contentTypeForLogging: "extendedContentMessage",
			unstoredMedia: null,
			unstoredMsg: Ce,
			unstoredQuotedMedia: null,
			unstoredXMA: {
				unstoredAssociatedMedia: void 0,
				unstoredAssociatedMsg: Te,
				unstoredFavicon: Se ? se[0] : _e,
				unstoredHeaderMedia: pe,
				unstoredPreviews: se.length > 0 && !Se ? se : void 0,
				xma: Re
			},
			xmaTargetTypeForLogging: T
		};
	}
	function le(e) {
		var t = e.ebRestore, n = e.hasActionUrl, r = e.hasNativeUrl, a = e.isActionUrlValid, i = e.isNativeUrlValid, l = e.targetType;
		!i && !a ? o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
			"",
			" XMA has invalid action and native URL for target type: ",
			". hasNativeUrl: ",
			". hasActionUrl: ",
			"."
		])), t != null && t ? "[labyrinth_web]" : "[S410301][transport]", l, r, n) : i && !a ? o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
			"",
			" XMA has invalid action URL for target type: ",
			". hasNativeUrl: ",
			". hasActionUrl: ",
			"."
		])), t != null && t ? "[labyrinth_web]" : "[S410301][transport]", l, r, n) : a && !i && o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
			"",
			" XMA has invalid native URL for target type: ",
			". hasNativeUrl: ",
			". hasActionUrl: ",
			"."
		])), t != null && t ? "[labyrinth_web]" : "[S410301][transport]", l, r, n);
	}
	function se(e) {
		return {
			actionUrl: e,
			buttonType: o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_CTA_BUTTON_TYPE.OPEN_NATIVE,
			nativeUrl: e
		};
	}
	function ue(e, t, n) {
		var r = e.nativeUrl, o = e.actionUrl, a = ce(r, t, n), i = ce(o, t, n);
		return le({
			ebRestore: n,
			hasActionUrl: o != null,
			hasNativeUrl: r != null,
			isActionUrlValid: i,
			isNativeUrlValid: a,
			targetType: t
		}), a && i;
	}
	function ce(e, t, n, r) {
		return r === void 0 && (r = !1), e == null ? !0 : fe(e, t) === !1 ? (n != null && n && !r && o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] Invalid url prefix during XMA restore"]))), !1) : ge(e) ? !0 : (n != null && n && !r && o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] Invalid message text during XMA restore"]))), !1);
	}
	function de(e) {
		return e.startsWith(D) || e.startsWith(x) || e.startsWith($) || e.startsWith(P) || e.startsWith(N);
	}
	function me(e) {
		return e.startsWith(V) || e.startsWith(H) || e.startsWith(G) || e.startsWith(z) || e.startsWith(j) || e.startsWith(K);
	}
	function pe(e) {
		return e.startsWith(F) || e.startsWith(O) || e.startsWith(B) || e.startsWith(W) || e.startsWith(q);
	}
	function _e(e) {
		return e.startsWith(Q) || e.startsWith(X) || e.startsWith(Y) || e.startsWith(J) || e.startsWith(Z);
	}
	function fe(e, t) {
		if (e == null) return !0;
		switch (t) {
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_STORY_PHOTO_MENTION:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_STORY_PHOTO_SHARE:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_STORY_VIDEO_SHARE:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_STORY_PHOTO_HIGHLIGHT_SHARE:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_STORY_VIDEO_HIGHLIGHT_SHARE:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_STORY_REPLY:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_STORY_HIGHLIGHT_REPLY:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_STORY_REACTION:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_STORY_HIGHLIGHT_REACTION:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_STORY_VIDEO_MENTION: return e.startsWith(L);
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_CLIPS_SHARE: return e.startsWith(E);
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_IGTV_SHARE: return e.startsWith(k);
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_SHOP_SHARE: return e.startsWith(I);
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_SINGLE_IMAGE_POST_SHARE:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_MULTIPOST_SHARE:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_SINGLE_VIDEO_POST_SHARE:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_PROFILE_SHARE:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_IG_MEDIA_SHARE: return e.startsWith(T);
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_STORY_REPLY:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_STORY_SHARE:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_PRODUCER_STORY_REPLY:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_STORY_MENTION: return e.startsWith(w) || e.startsWith(M) || de(e);
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_PROFILE_DIRECTORY_ITEM: return pe(e);
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_GAMING_CUSTOM_UPDATE: return e.startsWith(A);
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_FEED_POST_PRIVATE_REPLY:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_FEED_POST_REACTION_REPLY:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_FEED_SHARE:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_SHORT:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_FEED_VIDEO_SHARE:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_HIGHLIGHTS_TAB_FRIEND_UPDATES_REPLY:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_SOCIAL_CUE_MEMORIES: return (pe(e) || e.startsWith(U)) && !me(e);
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_LOCATION_SHARING:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_LOCATION_SHARING_V2: return e.startsWith(te);
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_HIGHLIGHTS_TAB_LOCAL_EVENT_REPLY: return _e(e);
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.FB_EVENT: return _e(e) || de(e);
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_CONTACT: return pe(e) || e.startsWith(ne);
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_EXTERNAL_LINK:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_EXTERNAL_LINK_SHARE:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_AUDIO_CALL:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_ONGOING_AUDIO_CALL:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_VIDEO_CALL:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_ONGOING_VIDEO_CALL:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_MISSED_AUDIO_CALL:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_MISSED_VIDEO_CALL:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_GROUP_AUDIO_CALL:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_GROUP_VIDEO_CALL:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_MISSED_GROUP_AUDIO_CALL:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.RTC_MISSED_GROUP_VIDEO_CALL:
				if (e.includes(re) && !e.startsWith(oe) && !e.startsWith(ae)) {
					var n = e.indexOf("://");
					return n === -1 && o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose(["S410301 The url is invalid. It contains a colon separator, but not \"://\""]))), !1;
				}
				break;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.IG_RECEIVER_FETCH:
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.DATACLASS_SENDER_COPY: return !0;
			case o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE.MSG_P2P_PAYMENT: return e.startsWith(ee);
		}
		return !0;
	}
	function ge(e) {
		for (var t = 0; t < e.length; t++) {
			var n = e.charAt(t);
			switch (n) {
				case "‬":
				case "‭":
				case "‮": return o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose(["S410301 The url contains RTL characters"]))), !1;
				default: break;
			}
		}
		return !0;
	}
	l.SUPPORTED_XMA_ASSOC_MEDIA_TARGET_TYPES = v, l.parseXMAProtocol = ie, l.getDefaultCTA = se, l.isValidCTA = ue, l.isURLValid = ce;
}), 98);
