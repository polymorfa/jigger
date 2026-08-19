__d("WAWebBizAIKnowledgeAllSourcesDrawer.react", [
	"fbt",
	"WAWebBizAIKnowledgeSourceItem.react",
	"WAWebBizAIKnowledgeUploadButton.react",
	"WAWebBizAIKnowledgeUploadingSourceItem.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useMemo, d = { body: {
		paddingInlineStart: "x1g0dm76",
		paddingInlineEnd: "xpdmqnj",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} };
	function m(e) {
		var t = o("react-compiler-runtime").c(30), n = e.deletingSourceIds, a = e.onBack, i = e.onDeleteSource, l = e.onFilesSelected, c = e.ref, m = e.sources, g = e.uploadingFileNames, h;
		t[0] !== g ? (h = g.some(f), t[0] = g, t[1] = h) : h = t[1];
		var y = h, C;
		t[2] !== m ? (C = m.filter(_), t[2] = m, t[3] = C) : C = t[3];
		var b = C, v;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (v = { className: "x78zum5 x98rzlu xdt5ytf x5yr21d x6ikm8r x10wlt62" }, t[4] = v) : v = t[4];
		var S;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (S = s._(
			/*BTDS*/
			""
		), t[5] = S) : S = t[5];
		var R;
		t[6] !== y || t[7] !== l ? (R = u.jsx(r("WAWebBizAIKnowledgeUploadButton.react"), {
			disabled: y,
			onFilesSelected: l,
			testidPrefix: "knowledge-all-sources"
		}), t[6] = y, t[7] = l, t[8] = R) : R = t[8];
		var L;
		t[9] !== a || t[10] !== R ? (L = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: S,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: a,
			rightActionElement: R
		}), t[9] = a, t[10] = R, t[11] = L) : L = t[11];
		var E;
		t[12] !== g ? (E = g.map(p), t[12] = g, t[13] = E) : E = t[13];
		var k;
		if (t[14] !== n || t[15] !== b || t[16] !== i || t[17] !== m) {
			var I;
			t[19] !== n || t[20] !== i || t[21] !== m ? (I = function(t, o) {
				return u.jsx(r("WAWebBizAIKnowledgeSourceItem.react"), {
					index: o,
					source: t,
					deleting: n.has(t.id),
					onDelete: function() {
						return i(t, m);
					}
				}, t.id);
			}, t[19] = n, t[20] = i, t[21] = m, t[22] = I) : I = t[22], k = b.map(I), t[14] = n, t[15] = b, t[16] = i, t[17] = m, t[18] = k;
		} else k = t[18];
		var T;
		t[23] !== E || t[24] !== k ? (T = u.jsxs(r("WAWebDrawerBody.react"), {
			xstyle: d.body,
			children: [E, k]
		}), t[23] = E, t[24] = k, t[25] = T) : T = t[25];
		var D;
		return t[26] !== c || t[27] !== L || t[28] !== T ? (D = u.jsxs("div", babelHelpers.extends({
			ref: c,
			"data-testid": "biz-ai-knowledge-all-sources-drawer"
		}, v, { children: [L, T] })), t[26] = c, t[27] = L, t[28] = T, t[29] = D) : D = t[29], D;
	}
	function p(e) {
		return u.jsx(r("WAWebBizAIKnowledgeUploadingSourceItem.react"), { upload: e }, e.id);
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		return e.source_type !== "CHAT_HISTORY";
	}
	function f(e) {
		return e.status === "processing";
	}
	l.default = m;
}), 226);
