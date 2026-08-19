__d("WAWebBizAIKnowledgeAllGoogleDriveDrawer.react", [
	"fbt",
	"WAWebBizAIKnowledgeGoogleDriveItem.react",
	"WAWebBizAIKnowledgeGoogleDriveTypes",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebSearchInput",
	"WAWebSpinner.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useMemo, m = c.useState, p = { body: {
		paddingInlineStart: "x1iw51ew",
		paddingInlineEnd: "xde1mab",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} };
	function _(e) {
		var t = e.deletingGoogleDriveIds, n = e.files, a = e.loading, i = e.onBack, l = e.onDeleteGoogleDriveFile, c = e.ref, _ = m(""), g = _[0], h = _[1], y = d(function() {
			var e = g.trim().toLowerCase();
			return e === "" ? n : n.filter(function(t) {
				return t.file_name.toLowerCase().includes(e);
			});
		}, [n, g]), C = d(function() {
			return o("WAWebBizAIKnowledgeGoogleDriveTypes").countSyncingGoogleDriveFiles(n);
		}, [n]), b = u.jsxs("span", {
			className: "x1cy8zhl x78zum5 xdt5ytf",
			children: [s._(
				/*BTDS*/
				""
			), C > 0 ? u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body3",
				maxLines: 1,
				testid: "knowledge-all-gdrive-syncing-count",
				children: s._(
					/*BTDS*/
					"",
					[s._plural(C, "number")]
				)
			}) : null]
		});
		return u.jsxs("div", {
			ref: c,
			"data-testid": "biz-ai-knowledge-all-google-drive-drawer",
			className: "x78zum5 xdt5ytf x1iyjqo2 x5yr21d x6ikm8r x10wlt62",
			children: [
				u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: b,
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
					onBack: i
				}),
				u.jsx(o("WAWebSearchInput").DrawerSearchInput, {
					onSearch: h,
					placeholder: s._(
						/*BTDS*/
						""
					),
					searchInputA11yLabel: s._(
						/*BTDS*/
						""
					)
				}),
				u.jsx(r("WAWebDrawerBody.react"), {
					xstyle: p.body,
					children: u.jsx(f, {
						deletingGoogleDriveIds: t,
						filteredFiles: y,
						loading: a,
						onDeleteGoogleDriveFile: l
					})
				})
			]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.deletingGoogleDriveIds, n = e.filteredFiles, a = e.loading, i = e.onDeleteGoogleDriveFile;
		return a ? u.jsx("div", {
			"aria-label": s._(
				/*BTDS*/
				""
			),
			"data-testid": "knowledge-all-gdrive-loading",
			role: "status",
			className: "x1p57kb1 xvpt6g3 xdx6fka xvtqlqk x1yc453h",
			children: u.jsx(o("WAWebSpinner.react").Spinner, {
				color: "default",
				size: 20,
				stroke: 3
			})
		}) : n.length === 0 ? u.jsx("div", {
			"data-testid": "knowledge-all-gdrive-empty",
			role: "status",
			className: "x1p57kb1 xvpt6g3 xdx6fka xvtqlqk x1yc453h",
			children: u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}) : u.jsx(u.Fragment, { children: n.map(function(e, n) {
			return u.jsx(r("WAWebBizAIKnowledgeGoogleDriveItem.react"), {
				deleting: t.has(e.google_file_id),
				file: e,
				index: n,
				onDelete: i == null ? null : function() {
					return i(e);
				},
				testidPrefix: "knowledge-all-gdrive-item"
			}, e.google_file_id);
		}) });
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = _;
}), 226);
