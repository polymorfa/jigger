__d("WAWebBizAIKnowledgeUploadingSourceItem.react", [
	"fbt",
	"WAWebBizAIKnowledgeRow.react",
	"WAWebSpinner.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(11), n = e.upload, a = n.status === "delayed", i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = u.jsx(o("WAWebSpinner.react").Spinner, {
			color: "default",
			size: 20,
			stroke: 3
		}), t[0] = i) : i = t[0];
		var l;
		t[1] !== a ? (l = a ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[1] = a, t[2] = l) : l = t[2];
		var c;
		t[3] !== a || t[4] !== l ? (c = {
			isError: a,
			node: l
		}, t[3] = a, t[4] = l, t[5] = c) : c = t[5];
		var d;
		return t[6] !== c || t[7] !== n.id || t[8] !== n.name || t[9] !== n.previewUrl ? (d = u.jsx(r("WAWebBizAIKnowledgeRow.react"), {
			alt: n.name,
			fallbackIcon: i,
			index: n.id,
			label: n.name,
			secondaryLine: c,
			testidPrefix: "knowledge-source-uploading",
			thumbnailUrl: n.previewUrl
		}), t[6] = c, t[7] = n.id, t[8] = n.name, t[9] = n.previewUrl, t[10] = d) : d = t[10], d;
	}
	l.default = c;
}), 226);
