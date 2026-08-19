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
	"react"
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
		var a = t.content, i = t.id, l = t.onBack, u = t.onKnowledgeItemDeleted, m = t.source, p = t.title, _ = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var n = yield o("WAWebBizAiKnowledgeReviewDeleteMutation").deletePendingData(t, m);
				if (!n) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["biz_ai: knowledge review delete failed"]))).sendLogs("biz-ai-knowledge-review-delete"), o("WAWebBizAiSaveUtils").showErrorToast();
					return;
				}
				u(t);
			});
			return function(n) {
				return t.apply(this, arguments);
			};
		})(), f = c.jsx(o("WAWebMenuBar.react").MenuBarItem, {
			icon: c.jsx(o("WAWebDeleteIcon.react").DeleteIcon, {}),
			onClick: function() {
				return _(i);
			},
			testid: "biz-ai-knowledge-detail-delete",
			title: ""
		});
		return c.jsxs(r("WAWebDrawer.react"), {
			tsNavigationData: {
				surface: "unknown",
				viewName: "biz-ai-knowledge-detail"
			},
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				focusBackOrCancel: !0,
				onBack: l,
				menu: f
			}), c.jsx(r("WAWebDrawerBody.react"), { children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: [d.paddingStart20, d.paddingEnd20],
				children: [c.jsx(o("WAWebFlex.react").FlexItem, { children: c.jsx(o("WAWebText.react").WAWebTextTitle, { children: s._(
					/*BTDS*/
					"",
					[s._param("title", p)]
				) }) }), c.jsx(o("WAWebFlex.react").FlexItem, {
					xstyle: d.marginTop8,
					children: c.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
						/*BTDS*/
						"",
						[s._param("content", a)]
					) })
				})]
			}) })]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
