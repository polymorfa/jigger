__d("MpsMediaDeletionPostProcessor", [
	"MpsTypes",
	"Promise",
	"WmiMediaService",
	"asyncToGeneratorRuntime",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e) {
		var t = e.directive, n = e.message, a = t.actionType === o("MpsTypes").ActionType.DeleteTopLevel ? o("WmiMediaService").mediaService().handleMessageDeletion(n.threadId, t.targetMessageId) : t.actionType === o("MpsTypes").ActionType.DeleteThread ? o("WmiMediaService").mediaService().handleThreadDeletion(n.threadId) : null;
		return a == null ? void 0 : a.catch(function(e) {
			return r("getErrorSafe")(e);
		});
	}
	var u = {
		name: "MpsMediaDeletionPostProcessor",
		process: (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var r = new Map(), o = t.map(function(e) {
					var t;
					return (t = s(e)) == null ? void 0 : t.then(function(t) {
						t != null && r.set(e.message.messageId, t);
					});
				}).filter(Boolean);
				return o.length > 0 && (yield (e || (e = n("Promise"))).all(o)), r;
			});
			function r(e) {
				return t.apply(this, arguments);
			}
			return r;
		})()
	};
	l.MpsMediaDeletionPostProcessor = u;
}), 98);
