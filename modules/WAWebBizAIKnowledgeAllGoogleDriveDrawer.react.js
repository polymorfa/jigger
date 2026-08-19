__d("WAWebBizAIKnowledgeAllGoogleDriveDrawer.react", [
	"fbt",
	"WAWebBizAIKnowledgeGoogleDriveItem.react",
	"WAWebBizAIKnowledgeGoogleDriveTypes",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebSearchInput",
	"WAWebSpinner.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useMemo, m = c.useState, p = { body: {
		paddingInlineStart: "x1iw51ew",
		paddingInlineEnd: "xde1mab",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} };
	function _(e) {
		var t = o("react-compiler-runtime").c(23), n = e.deletingGoogleDriveIds, a = e.files, i = e.loading, l = e.onBack, c = e.onDeleteGoogleDriveFile, d = e.ref, _ = m(""), g = _[0], h = _[1], y;
		if (t[0] !== a || t[1] !== g) {
			e: {
				var C = g.trim().toLowerCase();
				if (C === "") {
					y = a;
					break e;
				}
				y = a.filter(function(e) {
					return e.file_name.toLowerCase().includes(C);
				});
			}
			t[0] = a, t[1] = g, t[2] = y;
		} else y = t[2];
		var b = y, v = o("WAWebBizAIKnowledgeGoogleDriveTypes").countSyncingGoogleDriveFiles(a), S, R;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (S = { className: "x1cy8zhl x78zum5 xdt5ytf" }, R = s._(
			/*BTDS*/
			""
		), t[3] = S, t[4] = R) : (S = t[3], R = t[4]);
		var L;
		t[5] !== v ? (L = v > 0 ? u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body3",
			maxLines: 1,
			testid: "knowledge-all-gdrive-syncing-count",
			children: s._(
				/*BTDS*/
				"",
				[s._plural(v, "number")]
			)
		}) : null, t[5] = v, t[6] = L) : L = t[6];
		var E;
		t[7] !== L ? (E = u.jsxs("span", babelHelpers.extends({}, S, { children: [R, L] })), t[7] = L, t[8] = E) : E = t[8];
		var k = E, I;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (I = { className: "x78zum5 xdt5ytf x1iyjqo2 x5yr21d x6ikm8r x10wlt62" }, t[9] = I) : I = t[9];
		var T;
		t[10] !== l || t[11] !== k ? (T = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: k,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: l
		}), t[10] = l, t[11] = k, t[12] = T) : T = t[12];
		var D;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (D = u.jsx(o("WAWebSearchInput").DrawerSearchInput, {
			onSearch: h,
			placeholder: s._(
				/*BTDS*/
				""
			),
			searchInputA11yLabel: s._(
				/*BTDS*/
				""
			)
		}), t[13] = D) : D = t[13];
		var x;
		t[14] !== n || t[15] !== b || t[16] !== i || t[17] !== c ? (x = u.jsx(r("WAWebDrawerBody.react"), {
			xstyle: p.body,
			children: u.jsx(f, {
				deletingGoogleDriveIds: n,
				filteredFiles: b,
				loading: i,
				onDeleteGoogleDriveFile: c
			})
		}), t[14] = n, t[15] = b, t[16] = i, t[17] = c, t[18] = x) : x = t[18];
		var $;
		return t[19] !== d || t[20] !== T || t[21] !== x ? ($ = u.jsxs("div", babelHelpers.extends({
			ref: d,
			"data-testid": "biz-ai-knowledge-all-google-drive-drawer"
		}, I, { children: [
			T,
			D,
			x
		] })), t[19] = d, t[20] = T, t[21] = x, t[22] = $) : $ = t[22], $;
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(13), n = e.deletingGoogleDriveIds, a = e.filteredFiles, i = e.loading, l = e.onDeleteGoogleDriveFile;
		if (i) {
			var c;
			t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = s._(
				/*BTDS*/
				""
			), t[0] = c) : c = t[0];
			var d;
			return t[1] === Symbol.for("react.memo_cache_sentinel") ? (d = u.jsx("div", {
				"aria-label": c,
				"data-testid": "knowledge-all-gdrive-loading",
				role: "status",
				className: "x1p57kb1 xvpt6g3 xdx6fka xvtqlqk x1yc453h",
				children: u.jsx(o("WAWebSpinner.react").Spinner, {
					color: "default",
					size: 20,
					stroke: 3
				})
			}), t[1] = d) : d = t[1], d;
		}
		if (a.length === 0) {
			var m;
			t[2] === Symbol.for("react.memo_cache_sentinel") ? (m = { className: "x1p57kb1 xvpt6g3 xdx6fka xvtqlqk x1yc453h" }, t[2] = m) : m = t[2];
			var p;
			return t[3] === Symbol.for("react.memo_cache_sentinel") ? (p = u.jsx("div", babelHelpers.extends({
				"data-testid": "knowledge-all-gdrive-empty",
				role: "status"
			}, m, { children: u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				children: s._(
					/*BTDS*/
					""
				)
			}) })), t[3] = p) : p = t[3], p;
		}
		var _;
		if (t[4] !== n || t[5] !== a || t[6] !== l) {
			var f;
			t[8] !== n || t[9] !== l ? (f = function(t, o) {
				return u.jsx(r("WAWebBizAIKnowledgeGoogleDriveItem.react"), {
					deleting: n.has(t.google_file_id),
					file: t,
					index: o,
					onDelete: l == null ? null : function() {
						return l(t);
					},
					testidPrefix: "knowledge-all-gdrive-item"
				}, t.google_file_id);
			}, t[8] = n, t[9] = l, t[10] = f) : f = t[10], _ = a.map(f), t[4] = n, t[5] = a, t[6] = l, t[7] = _;
		} else _ = t[7];
		var g;
		return t[11] !== _ ? (g = u.jsx(u.Fragment, { children: _ }), t[11] = _, t[12] = g) : g = t[12], g;
	}
	l.default = _;
}), 226);
