__d("MawMpsDeleteTopLevelPreprocessor", [
	"MawMpsDeletionPreprocessingUtils",
	"MpsPreprocessor",
	"MpsTypes",
	"Promise",
	"asyncToGeneratorRuntime",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = o("MpsPreprocessor").preprocessor((function() {
		var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var a = t.ctx, i = t.payloadList, l = new Map(), s = [], u = (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
					try {
						var n = yield o("MawMpsDeletionPreprocessingUtils").generateDeletionPayload(e, i), a = n[0], u = n[1];
						s[t] = a;
					} catch (t) {
						l.set(e.message.messageId, r("getErrorSafe")(t));
					}
				});
				return function(n, r) {
					return e.apply(this, arguments);
				};
			})(), c = i.map(function(e, t) {
				var n, r = (n = e.directive) == null ? void 0 : n.actionType;
				return r === o("MpsTypes").ActionType.DeleteTopLevel ? u(e, t) : (s[t] = e, null);
			}).filter(Boolean);
			return c.length !== 0 && (yield (e || (e = n("Promise"))).all(c)), {
				ctx: a,
				errors: l,
				payloadList: s.filter(Boolean)
			};
		});
		return function(e) {
			return t.apply(this, arguments);
		};
	})(), "delete_top_level");
	l.MawMpsDeleteTopLevelPreprocessor = s;
}), 98);
