__d("WAWebBizAiKnowledgeItemDetailDrawer.react", [
	"fbt",
	"WALogger",
	"WAWebBizAiKnowledgeReviewDeleteMutation",
	"WAWebBizAiSaveUtils",
	"WAWebDeleteIcon.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebFlex.react",
	"WAWebMenuBar.react",
	"WAWebText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = {
		marginTop8: {
			marginTop: "x1380le5",
			$$css: !0
		},
		paddingStart20: {
			paddingInlineStart: "x1phvje8",
			$$css: !0
		},
		paddingEnd20: {
			paddingInlineEnd: "xcldk2z",
			$$css: !0
		}
	};
	function m(t) {
		var n = o("react-compiler-runtime").c(27), a = t.content, i = t.id, l = t.onBack, u = t.onKnowledgeItemDeleted, m = t.source, p = t.title, _;
		n[0] !== u || n[1] !== m ? (_ = async function(n) {
			var t = await o("WAWebBizAiKnowledgeReviewDeleteMutation").deletePendingData(n, m);
			if (!t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["biz_ai: knowledge review delete failed"]))).sendLogs("biz-ai-knowledge-review-delete"), o("WAWebBizAiSaveUtils").showErrorToast();
				return;
			}
			u(n);
		}, n[0] = u, n[1] = m, n[2] = _) : _ = n[2];
		var f = _, g;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (g = c.jsx(o("WAWebDeleteIcon.react").DeleteIcon, {}), n[3] = g) : g = n[3];
		var h;
		n[4] !== f || n[5] !== i ? (h = c.jsx(o("WAWebMenuBar.react").MenuBarItem, {
			icon: g,
			onClick: function() {
				return f(i);
			},
			testid: "biz-ai-knowledge-detail-delete",
			title: ""
		}), n[4] = f, n[5] = i, n[6] = h) : h = n[6];
		var y = h, C;
		n[7] === Symbol.for("react.memo_cache_sentinel") ? (C = {
			surface: "unknown",
			viewName: "biz-ai-knowledge-detail"
		}, n[7] = C) : C = n[7];
		var b;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (b = s._(
			/*BTDS*/
			""
		), n[8] = b) : b = n[8];
		var v;
		n[9] !== y || n[10] !== l ? (v = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: b,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			focusBackOrCancel: !0,
			onBack: l,
			menu: y
		}), n[9] = y, n[10] = l, n[11] = v) : v = n[11];
		var S;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (S = [d.paddingStart20, d.paddingEnd20], n[12] = S) : S = n[12];
		var R;
		n[13] !== p ? (R = s._(
			/*BTDS*/
			"",
			[s._param("title", p)]
		), n[13] = p, n[14] = R) : R = n[14];
		var L;
		n[15] !== R ? (L = c.jsx(o("WAWebFlex.react").FlexItem, { children: c.jsx(o("WAWebText.react").WAWebTextTitle, { children: R }) }), n[15] = R, n[16] = L) : L = n[16];
		var E;
		n[17] !== a ? (E = s._(
			/*BTDS*/
			"",
			[s._param("content", a)]
		), n[17] = a, n[18] = E) : E = n[18];
		var k;
		n[19] !== E ? (k = c.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: d.marginTop8,
			children: c.jsx(o("WAWebText.react").WAWebTextMuted, { children: E })
		}), n[19] = E, n[20] = k) : k = n[20];
		var I;
		n[21] !== k || n[22] !== L ? (I = c.jsx(r("WAWebDrawerBody.react"), { children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: S,
			children: [L, k]
		}) }), n[21] = k, n[22] = L, n[23] = I) : I = n[23];
		var T;
		return n[24] !== I || n[25] !== v ? (T = c.jsxs(r("WAWebDrawer.react"), {
			tsNavigationData: C,
			children: [v, I]
		}), n[24] = I, n[25] = v, n[26] = T) : T = n[26], T;
	}
	l.default = m;
}), 226);
