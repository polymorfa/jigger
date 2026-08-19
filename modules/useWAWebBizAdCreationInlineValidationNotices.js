__d("useWAWebBizAdCreationInlineValidationNotices", [
	"WAWebBizAdCreationNoticesUtils",
	"WAWebBizAdCreationValidateSpecContext",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useContext, c = s.useMemo;
	function d(e, t) {
		var n = o("react-compiler-runtime").c(8), a = t === void 0 ? !1 : t, i = u(r("WAWebBizAdCreationValidateSpecContext")), l;
		e: {
			if (i == null) {
				var s;
				n[0] === Symbol.for("react.memo_cache_sentinel") ? (s = [], n[0] = s) : s = n[0], l = s;
				break e;
			}
			var c;
			if (n[1] !== e || n[2] !== i.inlineNotices) {
				var d;
				c = (d = i.inlineNotices[e]) != null ? d : [], n[1] = e, n[2] = i.inlineNotices, n[3] = c;
			} else c = n[3];
			var m = c;
			if (!a) {
				l = m;
				break e;
			}
			var p;
			n[4] !== m ? (p = o("WAWebBizAdCreationNoticesUtils").pickHighestPriorityNotice(m), n[4] = m, n[5] = p) : p = n[5];
			var _ = p, f;
			n[6] !== _ ? (f = _ == null ? [] : [_], n[6] = _, n[7] = f) : f = n[7], l = f;
		}
		var g = l;
		return g;
	}
	l.default = d;
}), 98);
