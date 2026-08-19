__d("WAWebBizAIKnowledgeSourceItem.react", [
	"WAWebBizAIKnowledgeRow.react",
	"WDSIconIcDescription.react",
	"WDSIconIcImage.react",
	"WDSIconIcLink.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = { icon: {
		color: "xhslqc4",
		flexShrink: "x2lah0s",
		height: "xxk0z11",
		width: "xvy4d1p",
		$$css: !0
	} };
	function c(e) {
		var t = o("react-compiler-runtime").c(15), n = e.deleting, a = e.index, i = e.onDelete, l = e.source, u = e.testidPrefix, c = u === void 0 ? "knowledge-source-item" : u, _;
		t[0] !== l ? (_ = p(l), t[0] = l, t[1] = _) : _ = t[1];
		var f = _, g = l.source_type === "FILE_UPLOAD" ? l.user_provided_file_name : "", h;
		t[2] !== l ? (h = d(l), t[2] = l, t[3] = h) : h = t[3];
		var y;
		t[4] !== l ? (y = m(l), t[4] = l, t[5] = y) : y = t[5];
		var C;
		return t[6] !== g || t[7] !== n || t[8] !== a || t[9] !== i || t[10] !== h || t[11] !== y || t[12] !== c || t[13] !== f ? (C = s.jsx(r("WAWebBizAIKnowledgeRow.react"), {
			alt: g,
			deleting: n,
			fallbackIcon: h,
			index: a,
			label: y,
			onDelete: i,
			testidPrefix: c,
			thumbnailUrl: f
		}), t[6] = g, t[7] = n, t[8] = a, t[9] = i, t[10] = h, t[11] = y, t[12] = c, t[13] = f, t[14] = C) : C = t[14], C;
	}
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
