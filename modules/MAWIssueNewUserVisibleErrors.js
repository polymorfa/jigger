__d("MAWIssueNewUserVisibleErrors", [
	"fbt",
	"$InternalEnum",
	"LSDatabaseSingleton",
	"LSFactory",
	"LSIssueNewErrorStoredProcedure",
	"LSRemoveErrorStoredProcedure",
	"Promise",
	"ReQL",
	"asyncToGeneratorRuntime",
	"gkx",
	"promiseDone"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u;
	function c(e, t, n, a) {
		r("promiseDone")((u || (u = o("LSDatabaseSingleton"))).LSDatabaseSingleton.then(function(o) {
			return o.runInTransaction(function(o) {
				return r("LSIssueNewErrorStoredProcedure")(r("LSFactory")(o), {
					errorBodyText: e != null ? e.toString() : void 0,
					errorExtraData: a,
					errorTitleText: t.toString(),
					presentationStyle: String(n)
				});
			}, "readwrite", void 0, void 0, i.id + ":37");
		}));
	}
	function d(e, t) {
		return e.runInTransaction(function(e) {
			return r("LSRemoveErrorStoredProcedure")(r("LSFactory")(e), { errorId: t });
		}, "readwrite", void 0, void 0, i.id + ":56");
	}
	function m() {
		r("promiseDone")(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var t = yield (u || (u = o("LSDatabaseSingleton"))).LSDatabaseSingleton, r = yield o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(t.tables.user_visible_errors));
			yield (e || (e = n("Promise"))).all(r.map((function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					yield d(t, e.errorId);
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})()));
		})());
	}
	function p(t) {
		r("promiseDone")(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var r = yield (u || (u = o("LSDatabaseSingleton"))).LSDatabaseSingleton, a = yield o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(r.tables.user_visible_errors));
			yield (e || (e = n("Promise"))).all(a.map((function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					e.errorExtraData === t && (yield d(r, e.errorId));
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})()));
		})());
	}
	var _ = n("$InternalEnum")({
		TOAST: "toast",
		BANNER: "banner"
	}), f = s._(
		/*BTDS*/
		""
	), g = s._(
		/*BTDS*/
		""
	), h = s._(
		/*BTDS*/
		""
	), y = s._(
		/*BTDS*/
		""
	), C = r("gkx")("4424") ? s._(
		/*BTDS*/
		""
	) : s._(
		/*BTDS*/
		""
	), b = r("gkx")("4424") ? s._(
		/*BTDS*/
		""
	) : s._(
		/*BTDS*/
		""
	), v = new Map([[f.toString(), f], [h.toString(), h]]), S = new Map([[g.toString(), g], [y.toString(), y]]);
	l.issueError = c, l.deleteUserVisibleError = d, l.deleteAllErrors = m, l.deleteUserVisibleErrorByJSErrorMessage = p, l.MAWUserVisibleErrorPresentationType = _, l.MAWGeneralErrorMsgTitle = f, l.MAWGeneralErrorMsgBody = g, l.MAWLegacyUserErrorMsgTitle = h, l.MAWLegacyUserErrorMsgBody = y, l.MAWUnsupportedIndexedDBErrorMsgTitle = C, l.MAWUnsupportedIndexedDBErrorMsg = b, l.errorMsgTitleToFbtMap = v, l.errorMsgBodyToFbtMap = S;
}), 226);
