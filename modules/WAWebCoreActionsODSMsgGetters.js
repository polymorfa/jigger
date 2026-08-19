__d("WAWebCoreActionsODSMsgGetters", [
	"WAWebCoreActionsODS",
	"WAWebMsgGetters",
	"WAWebMsgType",
	"WAWebODS",
	"WAWebWamEnumMessageSendResultType"
], (function(t, n, r, o, a, i, l) {
	function e() {
		r("WAWebODS").incr("web.msg.send.text");
	}
	function s() {
		r("WAWebODS").incr("web.msg.send.ptt");
	}
	function u() {
		r("WAWebODS").incr("web.msg.send.media");
	}
	function c() {
		r("WAWebODS").incr("web.msg.send.reply");
	}
	function d() {
		r("WAWebODS").incr("web.msg.send.reaction");
	}
	function m() {
		r("WAWebODS").incr("web.msg.send.forward");
	}
	function p() {
		r("WAWebODS").incr("web.msg.send.sticker");
	}
	function _() {
		r("WAWebODS").incr("web.msg.send.individual");
	}
	function f() {
		r("WAWebODS").incr("web.msg.send.group");
	}
	function g(t) {
		var n = [], r = o("WAWebMsgGetters").getIsReply(t);
		o("WAWebMsgGetters").getIsGroupMsg(t) ? n.push(f) : o("WAWebMsgGetters").getIs1to1Msg(t) ? n.push(_) : o("WAWebMsgGetters").getIsNewsletterMsg(t) && n.push(o("WAWebCoreActionsODS").logChannelMsgSend), r ? n.push(c) : o("WAWebMsgGetters").getIsReaction(t) && n.push(d), o("WAWebMsgGetters").getIsStatus(t) && n.push(o("WAWebCoreActionsODS").logStatusSend), t.isForwarded === !0 && n.push(m);
		e: {
			if (t.type === o("WAWebMsgType").MSG_TYPE.CHAT || t.type === o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION) {
				n.push(e);
				break e;
			}
			if (t.type === o("WAWebMsgType").MSG_TYPE.IMAGE || t.type === o("WAWebMsgType").MSG_TYPE.VIDEO || t.type === o("WAWebMsgType").MSG_TYPE.ALBUM) {
				n.push(u);
				break e;
			}
			if (t.type === o("WAWebMsgType").MSG_TYPE.AUDIO || t.type === o("WAWebMsgType").MSG_TYPE.PTT) {
				n.push(s);
				break e;
			}
			if (t.type === o("WAWebMsgType").MSG_TYPE.STICKER || t.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK) {
				n.push(p);
				break e;
			}
			break e;
		}
		return function() {
			n.map(function(e) {
				return e();
			});
		};
	}
	function h() {
		r("WAWebODS").incr("web.msg.send.error.terminal");
	}
	function y() {
		r("WAWebODS").incr("web.msg.send.error.network");
	}
	function C() {
		r("WAWebODS").incr("web.msg.send.error.payload_too_big");
	}
	function b() {
		r("WAWebODS").incr("web.msg.send.error.invalid_protobuf");
	}
	function v() {
		r("WAWebODS").incr("web.msg.send.error.cancelled");
	}
	function S() {
		r("WAWebODS").incr("web.msg.send.error.expired");
	}
	function R() {
		r("WAWebODS").incr("web.msg.send.error.backfill_usync_failed");
	}
	function L() {
		r("WAWebODS").incr("web.msg.send.error.location");
	}
	function E() {
		r("WAWebODS").incr("web.msg.send.error.invalid_message");
	}
	function k() {
		r("WAWebODS").incr("web.msg.send.error.e2ee");
	}
	function I() {
		r("WAWebODS").incr("web.msg.send.error.ephemerally_expired");
	}
	function T() {
		r("WAWebODS").incr("web.msg.send.error.client_oom");
	}
	function D() {
		r("WAWebODS").incr("web.msg.send.error.unknown");
	}
	function x() {
		r("WAWebODS").incr("web.msg.send.individual.error.terminal");
	}
	function $() {
		r("WAWebODS").incr("web.msg.send.group.error.terminal");
	}
	function P() {
		r("WAWebODS").incr("web.msg.send.channel.error.terminal");
	}
	function N() {
		r("WAWebODS").incr("web.msg.send.text.error.terminal");
	}
	function M() {
		r("WAWebODS").incr("web.msg.send.media.error.terminal");
	}
	function w() {
		r("WAWebODS").incr("web.msg.send.ptt.error.terminal");
	}
	function A() {
		r("WAWebODS").incr("web.msg.send.sticker.error.terminal");
	}
	function F() {
		r("WAWebODS").incr("web.msg.send.reply.error.terminal");
	}
	function O() {
		r("WAWebODS").incr("web.msg.send.reaction.error.terminal");
	}
	function B() {
		r("WAWebODS").incr("web.msg.send.forward.error.terminal");
	}
	function W(e) {
		var t = [h];
		o("WAWebMsgGetters").getIsGroupMsg(e) ? t.push($) : o("WAWebMsgGetters").getIs1to1Msg(e) ? t.push(x) : o("WAWebMsgGetters").getIsNewsletterMsg(e) && t.push(P), o("WAWebMsgGetters").getIsReply(e) ? t.push(F) : o("WAWebMsgGetters").getIsReaction(e) && t.push(O), e.isForwarded === !0 && t.push(B);
		e: {
			if (e.type === o("WAWebMsgType").MSG_TYPE.CHAT || e.type === o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION) {
				t.push(N);
				break e;
			}
			if (e.type === o("WAWebMsgType").MSG_TYPE.IMAGE || e.type === o("WAWebMsgType").MSG_TYPE.VIDEO || e.type === o("WAWebMsgType").MSG_TYPE.ALBUM) {
				t.push(M);
				break e;
			}
			if (e.type === o("WAWebMsgType").MSG_TYPE.AUDIO || e.type === o("WAWebMsgType").MSG_TYPE.PTT) {
				t.push(w);
				break e;
			}
			if (e.type === o("WAWebMsgType").MSG_TYPE.STICKER || e.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK) {
				t.push(A);
				break e;
			}
			break e;
		}
		return function(e, n) {
			o("WAWebCoreActionsODS").logMsgSendError(), n && t.map(function(e) {
				return e();
			});
			e: {
				if (e === o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_NETWORK || e === o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.SERVER_ERROR) {
					y();
					break e;
				}
				if (e === o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_PAYLOAD_TOO_BIG) {
					C();
					break e;
				}
				if (e === o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_INVALID_PROTOBUF) {
					b();
					break e;
				}
				if (e === o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_UPLOAD || e === o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.MEDIA_UPLOAD_FAILED) {
					o("WAWebCoreActionsODS").logMsgSendErrorUpload();
					break e;
				}
				if (e === o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_CANCELLED || e === o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_UPLOAD_CANCELLED_MANUALLY || e === o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_UPLOAD_CANCELLED_AUTOMATIC) {
					v();
					break e;
				}
				if (e === o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_EXPIRED) {
					S();
					break e;
				}
				if (e === o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_BACKFILL_USYNC_FAILED) {
					R();
					break e;
				}
				if (e === o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_LOCATION) {
					L();
					break e;
				}
				if (e === o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_INVALID_MESSAGE) {
					E();
					break e;
				}
				if (e === o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_E2EE) {
					k();
					break e;
				}
				if (e === o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.EPHEMERALLY_EXPIRED) {
					I();
					break e;
				}
				if (e === o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE.ERROR_CLIENT_OUT_OF_MEMORY) {
					T();
					break e;
				}
				{
					D();
					break e;
				}
			}
		};
	}
	l.createPostODSCountersFn = g, l.createPostODSErrorCountersFn = W;
}), 98);
