__d("MAWIssueNewUserVisibleErrors", [
	"fbt",
	"$InternalEnum",
	"LSDatabaseSingleton",
	"LSFactory",
	"LSIssueNewErrorStoredProcedure",
	"LSRemoveErrorStoredProcedure",
	"ReQL",
	"gkx",
	"promiseDone"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e;
	function u(t, n, a, l) {
		r("promiseDone")((e || (e = o("LSDatabaseSingleton"))).LSDatabaseSingleton.then(function(e) {
			return e.runInTransaction(function(e) {
				return r("LSIssueNewErrorStoredProcedure")(r("LSFactory")(e), {
					errorBodyText: t != null ? t.toString() : void 0,
					errorExtraData: l,
					errorTitleText: n.toString(),
					presentationStyle: String(a)
				});
			}, "readwrite", void 0, void 0, i.id + ":37");
		}));
	}
	function c(e, t) {
		return e.runInTransaction(function(e) {
			return r("LSRemoveErrorStoredProcedure")(r("LSFactory")(e), { errorId: t });
		}, "readwrite", void 0, void 0, i.id + ":56");
	}
	function d() {
		r("promiseDone")((async function() {
			var t = await (e || (e = o("LSDatabaseSingleton"))).LSDatabaseSingleton, n = await o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(t.tables.user_visible_errors));
			await Promise.all(n.map(async function(e) {
				await c(t, e.errorId);
			}));
		})());
	}
	function m(t) {
		r("promiseDone")((async function() {
			var n = await (e || (e = o("LSDatabaseSingleton"))).LSDatabaseSingleton, r = await o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(n.tables.user_visible_errors));
			await Promise.all(r.map(async function(e) {
				e.errorExtraData === t && await c(n, e.errorId);
			}));
		})());
	}
	var p = n("$InternalEnum")({
		TOAST: "toast",
		BANNER: "banner"
	}), _ = s._(
		/*BTDS*/
		""
	), f = s._(
		/*BTDS*/
		""
	), g = s._(
		/*BTDS*/
		""
	), h = s._(
		/*BTDS*/
		""
	), y = r("gkx")("4424") ? s._(
		/*BTDS*/
		""
	) : s._(
		/*BTDS*/
		""
	), C = r("gkx")("4424") ? s._(
		/*BTDS*/
		""
	) : s._(
		/*BTDS*/
		""
	), b = new Map([[_.toString(), _], [g.toString(), g]]), v = new Map([[f.toString(), f], [h.toString(), h]]);
	l.issueError = u, l.deleteUserVisibleError = c, l.deleteAllErrors = d, l.deleteUserVisibleErrorByJSErrorMessage = m, l.MAWUserVisibleErrorPresentationType = p, l.MAWGeneralErrorMsgTitle = _, l.MAWGeneralErrorMsgBody = f, l.MAWLegacyUserErrorMsgTitle = g, l.MAWLegacyUserErrorMsgBody = h, l.MAWUnsupportedIndexedDBErrorMsgTitle = y, l.MAWUnsupportedIndexedDBErrorMsg = C, l.errorMsgTitleToFbtMap = b, l.errorMsgBodyToFbtMap = v;
}), 226);
