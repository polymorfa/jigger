__d("useWAWebBizAdCreationResolvedNoticeActionOverrides", [
	"WAWebBizAdCreationValidateSpecContext",
	"WAWebNoop",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useContext, c = s.useMemo;
	function d() {
		var e = o("react-compiler-runtime").c(4), t = u(r("WAWebBizAdCreationValidateSpecContext")), n = t == null ? void 0 : t.noticeActionOverrides, a = t == null ? void 0 : t.revalidate, i;
		e: {
			if (n == null) {
				var l;
				e[0] === Symbol.for("react.memo_cache_sentinel") ? (l = {}, e[0] = l) : l = e[0], i = l;
				break e;
			}
			var s;
			if (e[1] !== n || e[2] !== a) {
				s = {};
				var c = function() {
					var e = n[d];
					s[d] = function() {
						e(a != null ? a : r("WAWebNoop"));
					};
				};
				for (var d in n) c();
				e[1] = n, e[2] = a, e[3] = s;
			} else s = e[3];
			i = s;
		}
		return i;
	}
	l.default = d;
}), 98);
