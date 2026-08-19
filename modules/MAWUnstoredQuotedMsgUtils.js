__d("MAWUnstoredQuotedMsgUtils", [
	"FBLogger",
	"MAWMsgType",
	"WAJids",
	"WAMsgType"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		if (e != null) {
			var t = e.content, n = e.remoteJid, a;
			switch (t.type) {
				case o("MAWMsgType").MSG_TYPE.TEXT:
					a = u(t);
					break;
				case o("MAWMsgType").MSG_TYPE.IMAGE:
					a = c(t);
					break;
				case o("MAWMsgType").MSG_TYPE.VIDEO:
					a = d(t);
					break;
				case o("MAWMsgType").MSG_TYPE.PTT:
					a = m(t);
					break;
				case o("MAWMsgType").MSG_TYPE.GIF:
					a = p(t);
					break;
				case o("MAWMsgType").MSG_TYPE.STICKER:
					a = _(t);
					break;
				case o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE:
					a = g(t);
					break;
				case o("MAWMsgType").MSG_TYPE.UNAVAILABLE:
					a = h(t);
					break;
				case o("MAWMsgType").MSG_TYPE.EXPIRED_EPHEMERAL:
					a = y(t);
					break;
				case o("WAMsgType").NOTE_REPLY:
					a = f(t);
					break;
				case o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH:
					a = C(t);
					break;
				default: throw t.type, r("FBLogger")("messenger_web").mustfixThrow("For flow");
			}
			return {
				content: a,
				remoteJid: n
			};
		}
	}
	function s(e) {
		if (o("WAJids").isAuthorSystem(e.author)) throw r("FBLogger")("messenger_web").mustfixThrow("A system message cannot be quoted");
		return {
			author: e.author,
			externalId: e.externalId,
			ts: e.ts
		};
	}
	function u(e) {
		return babelHelpers.extends({}, s(e), {
			msgContent: e.msgContent,
			type: o("MAWMsgType").MSG_TYPE.TEXT
		});
	}
	function c(e) {
		return babelHelpers.extends({}, s(e), { type: o("MAWMsgType").MSG_TYPE.IMAGE });
	}
	function d(e) {
		return babelHelpers.extends({}, s(e), { type: o("MAWMsgType").MSG_TYPE.VIDEO });
	}
	function m(e) {
		return babelHelpers.extends({}, s(e), { type: o("MAWMsgType").MSG_TYPE.PTT });
	}
	function p(e) {
		return babelHelpers.extends({}, s(e), { type: o("MAWMsgType").MSG_TYPE.GIF });
	}
	function _(e) {
		return babelHelpers.extends({}, s(e), { type: o("MAWMsgType").MSG_TYPE.STICKER });
	}
	function f(e) {
		return babelHelpers.extends({}, s(e), {
			expirationTs: e.expirationTs,
			msgContent: e.msgContent,
			type: o("WAMsgType").NOTE_REPLY
		});
	}
	function g(e) {
		return babelHelpers.extends({}, s(e), { type: o("MAWMsgType").MSG_TYPE.DOCUMENT_FILE });
	}
	function h(e) {
		return babelHelpers.extends({}, s(e), { type: o("MAWMsgType").MSG_TYPE.UNAVAILABLE });
	}
	function y(e) {
		return babelHelpers.extends({}, s(e), { type: o("MAWMsgType").MSG_TYPE.EXPIRED_EPHEMERAL });
	}
	function C(e) {
		return babelHelpers.extends({}, s(e), { type: o("MAWMsgType").MSG_TYPE.RECEIVER_FETCH });
	}
	function b(t) {
		return { quote: e(t.quote) };
	}
	l.getWithQuoteMsg = b;
}), 98);
