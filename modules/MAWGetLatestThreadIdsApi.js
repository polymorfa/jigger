__d("MAWGetLatestThreadIdsApi", [
	"MAWDexieTable",
	"MAWIndexedDb",
	"MAWTransactionMode",
	"WALogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = o("MAWIndexedDb").makeMsgrTransactor({ threads: o("MAWTransactionMode").READONLY }, "getLatestThreadIds", function(t) {
		return (function(n) {
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] getLatestThreadIds started"])));
			var r = t.threads.orderBy("threadOrder").reverse().limit(n).toArray();
			return r.then(function(e) {
				var t = [];
				return e.forEach(function(e) {
					t.push(e.jid.split("@")[0]);
				}), o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] getLatestThreadIds complete, threads count: ", ""])), t.length), o("MAWDexieTable").dexieResolve(t);
			});
		});
	});
	l.getLatestThreadIds = u;
}), 98);
