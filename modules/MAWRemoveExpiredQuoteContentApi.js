__d("MAWRemoveExpiredQuoteContentApi", [
	"MAWBridgeMsg",
	"MAWIndexedDb",
	"MAWIndexedDbUI",
	"MAWQuotedMsgUtils",
	"MAWTransactionMode",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWIndexedDb").makeMsgrTransactor({ messages: o("MAWTransactionMode").READWRITE }, "removeExpiredQuoteContent", function(e) {
		return function() {
			var t = o("WATimeUtils").unixTime();
			return e.messages.where("quoteExpirationTs").belowOrEqual(t).toArray().then(function(t) {
				var n = t.map(function(e) {
					if (e.quote == null) return null;
					var t = o("MAWQuotedMsgUtils").dbQuotedMsgWithoutExpirableContent(e.quote);
					return t === e.quote ? null : babelHelpers.extends({}, e, { quote: t });
				}).filter(Boolean);
				return e.messages.bulkPut(n).then(function(e) {
					return n.forEach(function(e) {
						return o("MAWIndexedDbUI").afterTransaction({
							tag: "MsgUpdated",
							value: o("MAWBridgeMsg").createBridgeMsg(e)
						});
					}), e;
				});
			});
		};
	});
	l.removeExpiredQuoteContent = e;
}), 98);
