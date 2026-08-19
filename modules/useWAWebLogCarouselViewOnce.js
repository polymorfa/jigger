__d("useWAWebLogCarouselViewOnce", [
	"WAWebBizHomeCardCarouselLogger",
	"WAWebWamEnumEntryPoint",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useRef;
	function d(e) {
		var t = o("react-compiler-runtime").c(3), n = c(!1), r, a;
		t[0] !== e ? (r = function() {
			!n.current && e.length > 0 && (o("WAWebBizHomeCardCarouselLogger").BizHomeCardCarouselLogger.setEntryPoint(o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_TOOLS), o("WAWebBizHomeCardCarouselLogger").BizHomeCardCarouselLogger.logViewBusinessTools(e.length), n.current = !0);
		}, a = [e], t[0] = e, t[1] = r, t[2] = a) : (r = t[1], a = t[2]), u(r, a);
	}
	l.default = d;
}), 98);
