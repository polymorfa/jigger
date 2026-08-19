__d("MWChatMessageId", ["I64"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e) {
		if (e.type === "sent") return e.value.messageId;
	}
	function u(e) {
		if (e.type === "sent") return e.value.threadId;
	}
	function c(t, n, r) {
		return {
			type: "sent",
			value: {
				messageId: n,
				threadId: (e || (e = o("I64"))).of_string(t),
				timestamp: e.of_string(r)
			}
		};
	}
	function d(t) {
		return {
			type: "sent",
			value: {
				messageId: t,
				threadId: (e || (e = o("I64"))).zero,
				timestamp: e.zero
			}
		};
	}
	var m = {
		type: "sent",
		value: {
			messageId: "",
			threadId: (e || (e = o("I64"))).zero,
			timestamp: e.zero
		}
	};
	l.getMessageId = s, l.getThreadId = u, l.makeSent = c, l.emptyForExamplesWithId = d, l.emptyForExamples = m;
}), 98);
