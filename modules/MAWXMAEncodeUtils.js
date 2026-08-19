__d("MAWXMAEncodeUtils", [
	"MAWAsMessageApplication",
	"MAWEncodeMediaTransportProtocol",
	"MAWMsgType",
	"MAWParseSubprotocolVersionConsts",
	"MAWVault",
	"WALogger",
	"WAMsgApplication.pb",
	"encodeProtobuf",
	"validateMAWMediaAndComposeEntryForProtoMsg"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e, t, n) {
		var r = o("validateMAWMediaAndComposeEntryForProtoMsg").validateMAWMediaAndComposeEntryForProtoMsg(e, t), a = r[0], i = r[1];
		return {
			payload: o("MAWEncodeMediaTransportProtocol").encodeValidatedMediaToImageTransport(a, i),
			version: n
		};
	}
	function u(t, n) {
		var r = t.msgContent, a = t.msgId, i = r || {}, l = i.commands, u = i.content, c = i.mentionedJids, d = n.associatedMessage, m = n.favicon, p = n.header, _ = n.previews, f = n.xma, g = null;
		if (d != null) if (d.type !== o("MAWMsgType").MSG_TYPE.TEXT) o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Non-text associated message for the XMA content is not supported"])));
		else {
			var h = o("MAWAsMessageApplication").asMessageApplication(d), y = o("encodeProtobuf").encodeProtobuf(o("WAMsgApplication.pb").MessageApplicationSpec, h);
			g = {
				payload: y.readBuffer(),
				version: o("MAWParseSubprotocolVersionConsts").ASSOCIATED_MESSAGE_SUBPROTOCOL_VERSION
			};
		}
		var C = p != null && a != null ? s(a, p, o("MAWParseSubprotocolVersionConsts").XMA_HEADER_SUBPROTOCOL_VERSION) : null, b = m != null && a != null ? s(a, m, o("MAWParseSubprotocolVersionConsts").XMA_FAVICON_SUBPROTOCOL_VERSION) : null, v = _ != null && a != null ? _.map(function(e) {
			return s(a, e, o("MAWParseSubprotocolVersionConsts").XMA_PREVIEW_SUBPROTOCOL_VERSION);
		}) : null, S = f.defaultCTA == null ? void 0 : [f.defaultCTA].concat(f.ctas).filter(Boolean);
		return { payload: { content: { extendedContentMessage: {
			associatedMessage: g != null ? g : void 0,
			commands: l,
			contentRef: f.contentRef,
			ctas: S,
			favicon: b != null ? b : void 0,
			headerImage: C != null ? C : void 0,
			headerTitle: f.headerTitle,
			maxSubtitleNumOfLines: f.maxSubtitleNumOfLines,
			maxTitleNumOfLines: f.maxTitleNumOfLines,
			mentionedJid: c,
			messageText: u == null ? void 0 : o("MAWVault").unvault(u),
			overlayDescription: f.overlayDescription,
			overlayIconGlyph: f.overlayIconGlyph,
			overlayTitle: f.overlayTitle,
			previews: v != null ? v : [],
			sentWithMessageId: g ? f.externalId : void 0,
			subtitleText: f.subtitleText,
			targetExpiringAtSec: f.targetExpiringAtSec,
			targetId: f.targetId,
			targetType: f.targetType,
			targetUsername: f.targetUsername,
			titleText: f.titleText,
			xmaDataclass: f.xmaDataclass,
			xmaLayoutType: f.xmaLayoutType
		} } } };
	}
	l.encodeXMA = u;
}), 98);
