__d("MAWSubscribeToLSTruncateMetadataThreads", [
	"I64",
	"Int64Hooks",
	"MAWMiActMappingTableAPI",
	"MAWThreadRangeResetSignal",
	"emptyFunction",
	"gkx",
	"promiseDone",
	"useAsyncReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = function(t, n) {
		var e = [o("MAWThreadRangeResetSignal").subscribeToThreadRangeReset(n), r("gkx")("9855") ? o("MAWMiActMappingTableAPI").subscribeToMappingDeletion(t, n) : r("emptyFunction")];
		return function() {
			for (var t of e) t();
		};
	};
	function u(t, n) {
		var a = r("useAsyncReStore")();
		o("Int64Hooks").useEffectInt64(function() {
			var i = a.then(function(r) {
				return s(r, function(r, a) {
					(e || (e = o("I64"))).equal(a, t) && n();
				});
			});
			return function() {
				r("promiseDone")(i, function(e) {
					return e();
				});
			};
		}, [
			t,
			a,
			n
		]);
	}
	l.subscribeToLSTruncateMetadataThreads = s, l.useLSTruncateMetadataThread = u;
}), 98);
