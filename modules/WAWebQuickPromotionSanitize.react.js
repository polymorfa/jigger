__d("WAWebQuickPromotionSanitize.react", [
	"dompurify",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(4), n = e.dirty, r;
		t[0] !== n ? (r = c(n), t[0] = n, t[1] = r) : r = t[1];
		var a;
		return t[2] !== r ? (a = s.jsx("span", { dangerouslySetInnerHTML: { __html: r } }), t[2] = r, t[3] = a) : a = t[3], a;
	}
	function c(e) {
		return r("dompurify").sanitize(e, {
			ALLOWED_TAGS: [
				"b",
				"i",
				"#text"
			],
			KEEP_CONTENT: !1
		});
	}
	l.default = u;
}), 98);
