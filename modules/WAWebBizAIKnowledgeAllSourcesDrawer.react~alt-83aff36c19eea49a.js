__d("WAWebBizAIKnowledgeAllSourcesDrawer.react", [
	"fbt",
	"WAWebBizAIKnowledgeSourceItem.react",
	"WAWebBizAIKnowledgeUploadButton.react",
	"WAWebBizAIKnowledgeUploadingSourceItem.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useMemo, d = { body: {
		paddingInlineStart: "x1g0dm76",
		paddingInlineEnd: "xpdmqnj",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} };
	function m(e) {
		var t = e.deletingSourceIds, n = e.onBack, a = e.onDeleteSource, i = e.onFilesSelected, l = e.ref, m = e.sources, p = e.uploadingFileNames, _ = p.some(function(e) {
			return e.status === "processing";
		}), f = c(function() {
			return m.filter(function(e) {
				return e.source_type !== "CHAT_HISTORY";
			});
		}, [m]);
		return u.jsxs("div", {
			ref: l,
			"data-testid": "biz-ai-knowledge-all-sources-drawer",
			className: "x78zum5 x98rzlu xdt5ytf x5yr21d x6ikm8r x10wlt62",
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: n,
				rightActionElement: u.jsx(r("WAWebBizAIKnowledgeUploadButton.react"), {
					disabled: _,
					onFilesSelected: i,
					testidPrefix: "knowledge-all-sources"
				})
			}), u.jsxs(r("WAWebDrawerBody.react"), {
				xstyle: d.body,
				children: [p.map(function(e) {
					return u.jsx(r("WAWebBizAIKnowledgeUploadingSourceItem.react"), { upload: e }, e.id);
				}), f.map(function(e, n) {
					return u.jsx(r("WAWebBizAIKnowledgeSourceItem.react"), {
						index: n,
						source: e,
						deleting: t.has(e.id),
						onDelete: function() {
							return a(e, m);
						}
					}, e.id);
				})]
			})]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
