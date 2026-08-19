__d("WAWebQuickPromotionSanitize.react", ["dompurify", "react"], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.dirty;
		return s.jsx("span", { dangerouslySetInnerHTML: { __html: c(t) } });
	}
	u.displayName = u.name + " [from " + i.id + "]";
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
