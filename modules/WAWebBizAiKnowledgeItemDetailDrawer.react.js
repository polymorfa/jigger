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
	"asyncToGeneratorRuntime",
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
		var a = o("react-compiler-runtime").c(27), i = t.content, l = t.id, u = t.onBack, m = t.onKnowledgeItemDeleted, p = t.source, _ = t.title, f;
		a[0] !== m || a[1] !== p ? (f = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var n = yield o("WAWebBizAiKnowledgeReviewDeleteMutation").deletePendingData(t, p);
				if (!n) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["biz_ai: knowledge review delete failed"]))).sendLogs("biz-ai-knowledge-review-delete"), o("WAWebBizAiSaveUtils").showErrorToast();
					return;
				}
				m(t);
			});
			return function(n) {
				return t.apply(this, arguments);
			};
		})(), a[0] = m, a[1] = p, a[2] = f) : f = a[2];
		var g = f, h;
		a[3] === Symbol.for("react.memo_cache_sentinel") ? (h = c.jsx(o("WAWebDeleteIcon.react").DeleteIcon, {}), a[3] = h) : h = a[3];
		var y;
		a[4] !== g || a[5] !== l ? (y = c.jsx(o("WAWebMenuBar.react").MenuBarItem, {
			icon: h,
			onClick: function() {
				return g(l);
			},
			testid: "biz-ai-knowledge-detail-delete",
			title: ""
		}), a[4] = g, a[5] = l, a[6] = y) : y = a[6];
		var C = y, b;
		a[7] === Symbol.for("react.memo_cache_sentinel") ? (b = {
			surface: "unknown",
			viewName: "biz-ai-knowledge-detail"
		}, a[7] = b) : b = a[7];
		var v;
		a[8] === Symbol.for("react.memo_cache_sentinel") ? (v = s._(
			/*BTDS*/
			""
		), a[8] = v) : v = a[8];
		var S;
		a[9] !== C || a[10] !== u ? (S = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: v,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			focusBackOrCancel: !0,
			onBack: u,
			menu: C
		}), a[9] = C, a[10] = u, a[11] = S) : S = a[11];
		var R;
		a[12] === Symbol.for("react.memo_cache_sentinel") ? (R = [d.paddingStart20, d.paddingEnd20], a[12] = R) : R = a[12];
		var L;
		a[13] !== _ ? (L = s._(
			/*BTDS*/
			"",
			[s._param("title", _)]
		), a[13] = _, a[14] = L) : L = a[14];
		var E;
		a[15] !== L ? (E = c.jsx(o("WAWebFlex.react").FlexItem, { children: c.jsx(o("WAWebText.react").WAWebTextTitle, { children: L }) }), a[15] = L, a[16] = E) : E = a[16];
		var k;
		a[17] !== i ? (k = s._(
			/*BTDS*/
			"",
			[s._param("content", i)]
		), a[17] = i, a[18] = k) : k = a[18];
		var I;
		a[19] !== k ? (I = c.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: d.marginTop8,
			children: c.jsx(o("WAWebText.react").WAWebTextMuted, { children: k })
		}), a[19] = k, a[20] = I) : I = a[20];
		var T;
		a[21] !== I || a[22] !== E ? (T = c.jsx(r("WAWebDrawerBody.react"), { children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: R,
			children: [E, I]
		}) }), a[21] = I, a[22] = E, a[23] = T) : T = a[23];
		var D;
		return a[24] !== T || a[25] !== S ? (D = c.jsxs(r("WAWebDrawer.react"), {
			tsNavigationData: b,
			children: [S, T]
		}), a[24] = T, a[25] = S, a[26] = D) : D = a[26], D;
	}
	l.default = m;
}), 226);
