__d("useMWEBBackupState", [
	"CometRelay",
	"react-compiler-runtime",
	"useMWEBBackupStateQuery.graphql",
	"useMWEBBackupStateUtil"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t) {
		var a, i = o("react-compiler-runtime").c(2), l = t.entrypoint, s, u;
		i[0] === Symbol.for("react.memo_cache_sentinel") ? (s = e !== void 0 ? e : e = n("useMWEBBackupStateQuery.graphql"), u = {}, i[0] = s, i[1] = u) : (s = i[0], u = i[1]);
		var c = o("CometRelay").useClientQuery(s, u);
		return r("useMWEBBackupStateUtil")(l, (c == null ? void 0 : c.viewer) == null, c == null || (a = c.viewer) == null ? void 0 : a.backup_state);
	}
	l.default = s;
}), 98);
