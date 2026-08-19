__d("BlockingPriorityTickStrategy", [
	"NativeSchedulerTickStrategy",
	"Promise",
	"TaskSchedulerPriority"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (function() {
		function t() {
			this.$1 = o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy();
		}
		var r = t.prototype;
		return r.tick = function(r) {
			return r === o("TaskSchedulerPriority").BLOCKING_PRIORITY ? (e || (e = n("Promise"))).resolve() : this.$1.tick(r);
		}, t;
	})(), u = null;
	function c() {
		return u != null || (u = new s()), u;
	}
	l.BlockingPriorityTickStrategy = s, l.makeBlockingPriorityTickStrategy = c;
}), 98);
