__d("WAWebAttachMediaDrawerAttachMediaTypeFile.react", [
	"WAWebAttachMediaDrawerAttachMediaTypeStyles",
	"WAWebDocumentFileIcon",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebDocumentMediaType"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react"));
	function c(t) {
		var n = o("react-compiler-runtime").c(16), a = t.filename, i = t.mimeType, l;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (l = "x23j0i4 x1gnnpzl xiy17q3 x1tbiz1a x1fqp7bg", n[0] = l) : l = n[0];
		var s = l, c;
		n[1] !== a || n[2] !== i ? (c = {
			mimetype: i,
			filename: a
		}, n[1] = a, n[2] = i, n[3] = c) : c = n[3];
		var d = r("useWAWebDocumentMediaType")(c), m = d.ext, p = d.mime, _;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (_ = (e || (e = r("stylex"))).props(r("WAWebAttachMediaDrawerAttachMediaTypeStyles").container), n[4] = _) : _ = n[4];
		var f, g;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (f = (e || (e = r("stylex"))).props(r("WAWebAttachMediaDrawerAttachMediaTypeStyles").mediaContainer), g = { className: "x78zum5 x3psx0u xdt5ytf x6s0dn4 xamitd3" }, n[5] = f, n[6] = g) : (f = n[5], g = n[6]);
		var h = p != null ? p : "", y = m != null ? m : "", C;
		n[7] !== h || n[8] !== y ? (C = u.jsx("div", {
			className: s,
			children: u.jsx(r("WAWebDocumentFileIcon"), {
				width: 26,
				mimeType: h,
				ext: y
			})
		}), n[7] = h, n[8] = y, n[9] = C) : C = n[9];
		var b;
		n[10] === Symbol.for("react.memo_cache_sentinel") ? (b = { className: "x1iikomf" }, n[10] = b) : b = n[10];
		var v;
		n[11] !== a ? (v = u.jsx("div", babelHelpers.extends({}, b, { children: a })), n[11] = a, n[12] = v) : v = n[12];
		var S;
		return n[13] !== v || n[14] !== C ? (S = u.jsx("div", babelHelpers.extends({}, _, {
			"data-animate-attach-media": !0,
			children: u.jsx("div", babelHelpers.extends({}, f, { children: u.jsxs("div", babelHelpers.extends({}, g, { children: [C, v] })) }))
		})), n[13] = v, n[14] = C, n[15] = S) : S = n[15], S;
	}
	l.default = c;
}), 98);
