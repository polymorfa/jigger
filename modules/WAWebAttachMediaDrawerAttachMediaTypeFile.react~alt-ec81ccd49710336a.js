__d("WAWebAttachMediaDrawerAttachMediaTypeFile.react", [
	"WAWebAttachMediaDrawerAttachMediaTypeStyles",
	"WAWebDocumentFileIcon",
	"react",
	"stylex",
	"useWAWebDocumentMediaType"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react"));
	function c(t) {
		var n = t.filename, o = t.mimeType, a = "x23j0i4 x1gnnpzl xiy17q3 x1tbiz1a x1fqp7bg", i = r("useWAWebDocumentMediaType")({
			mimetype: o,
			filename: n
		}), l = i.ext, s = i.mime;
		return u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(r("WAWebAttachMediaDrawerAttachMediaTypeStyles").container), {
			"data-animate-attach-media": !0,
			children: u.jsx("div", babelHelpers.extends({}, e.props(r("WAWebAttachMediaDrawerAttachMediaTypeStyles").mediaContainer), { children: u.jsxs("div", {
				className: "x78zum5 x3psx0u xdt5ytf x6s0dn4 xamitd3",
				children: [u.jsx("div", {
					className: a,
					children: u.jsx(r("WAWebDocumentFileIcon"), {
						width: 26,
						mimeType: s != null ? s : "",
						ext: l != null ? l : ""
					})
				}), u.jsx("div", {
					className: "x1iikomf",
					children: n
				})]
			}) }))
		}));
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
