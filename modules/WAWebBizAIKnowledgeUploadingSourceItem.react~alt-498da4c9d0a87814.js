__d("WAWebBizAIKnowledgeUploadingSourceItem.react", [
	"fbt",
	"WAWebBizAIKnowledgeRow.react",
	"WAWebSpinner.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.upload, n = t.status === "delayed";
		return u.jsx(r("WAWebBizAIKnowledgeRow.react"), {
			alt: t.name,
			fallbackIcon: u.jsx(o("WAWebSpinner.react").Spinner, {
				color: "default",
				size: 20,
				stroke: 3
			}),
			index: t.id,
			label: t.name,
			secondaryLine: {
				isError: n,
				node: n ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				)
			},
			testidPrefix: "knowledge-source-uploading",
			thumbnailUrl: t.previewUrl
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
