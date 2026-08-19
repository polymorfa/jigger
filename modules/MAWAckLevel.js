__d("MAWAckLevel", ["LSIntEnum", "LSMessageSendStatus"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = {
		clock: 0,
		contentGone: -3,
		contentTooBig: -4,
		contentUnuploadable: -5,
		expired: -2,
		failed: -1,
		failedRetryable: -9,
		inactiveReceived: -6,
		partialOptimistic: -8,
		played: 4,
		read: 3,
		received: 2,
		senderBackFillSent: -7,
		sent: 1
	};
	function u(e) {
		return e > 0;
	}
	function c(t) {
		switch (t) {
			case s.partialOptimistic: return (e || (e = o("LSIntEnum"))).ofNumber(0);
			case s.clock: return (e || (e = o("LSIntEnum"))).ofNumber(1);
			case s.sent:
			case s.received:
			case s.read:
			case s.played: return (e || (e = o("LSIntEnum"))).ofNumber(2);
			case s.failedRetryable: return (e || (e = o("LSIntEnum"))).ofNumber(5);
			default: return (e || (e = o("LSIntEnum"))).ofNumber(4);
		}
	}
	function d(t) {
		switch (t) {
			case s.partialOptimistic: return (e || (e = o("LSIntEnum"))).ofNumber(r("LSMessageSendStatus").NONE);
			case s.clock: return (e || (e = o("LSIntEnum"))).ofNumber(r("LSMessageSendStatus").SENDING_TO_SERVER);
			case s.sent:
			case s.received:
			case s.read:
			case s.played: return (e || (e = o("LSIntEnum"))).ofNumber(r("LSMessageSendStatus").SERVER_RECEIVED);
			case s.failedRetryable: return (e || (e = o("LSIntEnum"))).ofNumber(r("LSMessageSendStatus").RETRIABLE_ERROR);
			default: return (e || (e = o("LSIntEnum"))).ofNumber(r("LSMessageSendStatus").NON_RETRIABLE_ERROR);
		}
	}
	l.ACK = s, l.isMsgAuthoritative = u, l.levelToMessagingSendStatusV2 = c, l.levelToMessagingSendStatus = d;
}), 98);
