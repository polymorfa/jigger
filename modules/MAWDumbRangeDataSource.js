__d("MAWDumbRangeDataSource", [
	"I64",
	"ReplayLastSubject",
	"asyncToGeneratorRuntime",
	"relay-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = function() {
		this.getOrCreateMessageRangeCoveringCursor = function(t, n) {
			var r;
			return o("relay-runtime").Observable.from(new (o("ReplayLastSubject")).ReplayLastSubject({
				range: {
					hasMoreAfter: !1,
					hasMoreBefore: !1,
					isLoadingAfter: !1,
					isLoadingBefore: !1,
					maxMessageId: "",
					maxTimestampMs: (e || (e = o("I64"))).max_int,
					minMessageId: (r = t.messageId) != null ? r : "",
					minTimestampMs: e.min_int,
					threadKey: t.threadKey
				},
				rangeExternalIds: {
					maxExternalId: null,
					minExternalId: null
				}
			}));
		}, this.extendRange = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r) {});
			return function(t, n, r, o) {
				return e.apply(this, arguments);
			};
		})();
	}, u;
	function c() {
		return u == null && (u = new s()), u;
	}
	l.default = c;
}), 98);
