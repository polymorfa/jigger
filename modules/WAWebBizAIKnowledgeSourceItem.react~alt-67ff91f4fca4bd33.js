__d("WAWebBizAIKnowledgeSourceItem.react", [
	"WAWebBizAIKnowledgeRow.react",
	"WDSIconIcDescription.react",
	"WDSIconIcImage.react",
	"WDSIconIcLink.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = { icon: {
		color: "xhslqc4",
		flexShrink: "x2lah0s",
		height: "xxk0z11",
		width: "xvy4d1p",
		$$css: !0
	} };
	function c(e) {
		var t = e.deleting, n = e.index, o = e.onDelete, a = e.source, i = e.testidPrefix, l = i === void 0 ? "knowledge-source-item" : i, u = p(a), c = a.source_type === "FILE_UPLOAD" ? a.user_provided_file_name : "";
		return s.jsx(r("WAWebBizAIKnowledgeRow.react"), {
			alt: c,
			deleting: t,
			fallbackIcon: d(a),
			index: n,
			label: m(a),
			onDelete: o,
			testidPrefix: l,
			thumbnailUrl: u
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		return e.source_type === "WEBSITE" ? s.jsx(r("WDSIconIcLink.react"), { iconXstyle: u.icon }) : e.source_type === "FILE_UPLOAD" && e.file_type === "IMAGE" ? s.jsx(r("WDSIconIcImage.react"), { iconXstyle: u.icon }) : s.jsx(r("WDSIconIcDescription.react"), { iconXstyle: u.icon });
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		return e.source_type === "FILE_UPLOAD" ? e.user_provided_file_name : e.label;
	}
	function p(e) {
		if (e.source_type === "FILE_UPLOAD" && e.file_type === "IMAGE") {
			var t;
			return (t = e.cdn_url) != null ? t : e.thumbnail_url;
		}
		return null;
	}
	l.default = c;
}), 98);
