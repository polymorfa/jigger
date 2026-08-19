__d("useMWV2FileDropzoneRegisterHandler", [
	"MWV2FileDropzone.react",
	"react",
	"react-compiler-runtime",
	"useMWIsHDMediaEnabled"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useContext, c = s.useEffect;
	function d(e) {
		var t = o("react-compiler-runtime").c(5), n = u(o("MWV2FileDropzone.react").mWV2FileDropzoneContext), a = r("useMWIsHDMediaEnabled")(), i, l;
		t[0] !== n || t[1] !== a || t[2] !== e ? (i = function() {
			var t = {
				enabled: !0,
				handler: function(n) {
					return e(n, a);
				}
			};
			return n.current = t, (function() {
				t.enabled = !1, t.handler = null;
			});
		}, l = [
			n,
			e,
			a
		], t[0] = n, t[1] = a, t[2] = e, t[3] = i, t[4] = l) : (i = t[3], l = t[4]), c(i, l);
	}
	l.default = d;
}), 98);
