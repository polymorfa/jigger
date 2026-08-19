__d("WAWebBizAiKnowledgeReviewDrawer.react", [
	"fbt",
	"$InternalEnum",
	"CometRelay",
	"WALogger",
	"WAWebBizAIKnowledgeEntry.react",
	"WAWebBizAIQueryBoundary.react",
	"WAWebBizAIQueryRefreshBanner.react",
	"WAWebBizAiKnowledgeItemDetailDrawer.react",
	"WAWebBizAiKnowledgeReviewCommitMutation",
	"WAWebBizAiKnowledgeReviewDrawerQuery.graphql",
	"WAWebBizAiKnowledgeReviewSummaryPageDescription.react",
	"WAWebBizAiSaveUtils",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerManager",
	"WAWebFlex.react",
	"WAWebSpinner.react",
	"WAWebWdsSmbAnimBookAiTeachLearningIcon.react",
	"WDSPaddings.stylex",
	"react",
	"useWAWebBizAIQueryRefreshError",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c, p = m.Suspense, _ = m.useState, f = {
		marginTop15: {
			marginTop: "xcxhlts",
			$$css: !0
		},
		marginBottom36: {
			marginBottom: "xvl6max",
			$$css: !0
		}
	}, g = "", h = n("$InternalEnum").Mirrored(["List", "Detail"]), y = e !== void 0 ? e : e = n("WAWebBizAiKnowledgeReviewDrawerQuery.graphql"), C = { container: {
		width: "xh8yej3",
		$$css: !0
	} };
	function b(e) {
		var t = e.onRetry, n = e.queryRef, a = e.queryVersion, i = a === void 0 ? 0 : a, l = e.source, s = l === void 0 ? "AUTO_SAVE" : l;
		return d.jsx(r("WAWebBizAIQueryBoundary.react"), {
			boundaryName: "biz-ai-knowledge-review",
			onRetry: t,
			queryVersion: i,
			renderErrorChrome: function(t) {
				return d.jsx(S, {
					onBack: o("WAWebDrawerManager").closeDrawerRight,
					children: t
				});
			},
			testid: "biz-ai-knowledge-review-error",
			children: d.jsx(p, {
				fallback: R(),
				children: n != null ? d.jsx(v, {
					onRetry: t,
					queryRef: n,
					source: s
				}) : R()
			})
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.onRetry, n = e.queryRef, a = e.source, i = o("CometRelay").usePreloadedQuery(y, n), l = r("useWAWebBizAIQueryRefreshError")(n.source), s = _(function() {
			var e, t;
			return ((e = (t = i.xfb_maiba_load_potential_knowledge_for_review) == null ? void 0 : t.items) != null ? e : []).map(function(e) {
				var t, n, r, o, a, i;
				return {
					id: (t = e == null ? void 0 : e.id) != null ? t : g,
					type: (n = e == null ? void 0 : e.type) != null ? n : g,
					faq_question: (r = e == null ? void 0 : e.faq_question) != null ? r : g,
					faq_answer: (o = e == null ? void 0 : e.faq_answer) != null ? o : g,
					biz_info_attribute: (a = e == null ? void 0 : e.biz_info_attribute) != null ? a : g,
					biz_info_value: (i = e == null ? void 0 : e.biz_info_value) != null ? i : g
				};
			});
		}), c = s[0], m = s[1], p = o("useWAWebFlow").useFlow(h.List, { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }), b = p[0], v = p[1], R = _(null), E = R[0], k = R[1], I = function(t) {
			m(function(e) {
				return e.filter(function(e) {
					return e.id !== t;
				});
			});
		}, T = function(t) {
			var e;
			k((e = c.find(function(e) {
				return e.id === t;
			})) != null ? e : null), v.push(h.Detail);
		}, D = function(t) {
			I(t), v.pop();
		}, x = function() {
			o("WAWebBizAiKnowledgeReviewCommitMutation").commitPendingData(c.map(function(e) {
				var t;
				return (t = e.id) != null ? t : g;
			})).then(function(e) {
				e || (o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["biz_ai: knowledge review commit failed"]))).sendLogs("biz-ai-knowledge-review-commit"), o("WAWebBizAiSaveUtils").showErrorToast());
			}), o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
		}, $ = v.step;
		if ($ == null) return null;
		var P = null;
		switch ($) {
			case h.List:
				P = d.jsxs(S, {
					onBack: x,
					children: [l && t != null ? d.jsx(r("WAWebBizAIQueryRefreshBanner.react"), {
						onRetry: t,
						testid: "biz-ai-knowledge-review-refresh"
					}) : null, d.jsx(o("WAWebFlex.react").FlexColumn, {
						xstyle: [f.marginTop15, C.container],
						children: c.map(function(e, t) {
							var n, o = L(e), i = o.content, l = o.title;
							return d.jsx(r("WAWebBizAIKnowledgeEntry.react"), {
								id: (n = e.id) != null ? n : g,
								question: l,
								answer: i,
								source: a,
								onKnowledgeItemDeleted: I,
								onViewDetail: T
							}, t);
						})
					})]
				});
				break;
			case h.Detail:
				if (E != null) {
					var N, M = L(E), w = M.content, A = M.title;
					P = d.jsx(r("WAWebBizAiKnowledgeItemDetailDrawer.react"), {
						id: (N = E.id) != null ? N : g,
						title: A,
						content: w,
						source: a,
						onBack: function() {
							return v.pop();
						},
						onKnowledgeItemDeleted: D
					});
				}
				break;
		}
		return d.jsx(b, {
			flow: v,
			children: P
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t = e.children, n = e.onBack;
		return d.jsxs(r("WAWebDrawer.react"), {
			testid: "biz-ai-knowledge-review-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "biz-ai-knowledge-review"
			},
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				focusBackOrCancel: !0,
				onBack: n
			}), d.jsx(r("WAWebDrawerBody.react"), { children: d.jsxs(o("WAWebFlex.react").FlexColumn, {
				padding: 8,
				children: [
					d.jsx(o("WAWebFlex.react").FlexColumn, {
						align: "center",
						xstyle: [
							o("WDSPaddings.stylex").wdsPaddings.paddingTop16,
							f.marginBottom36,
							C.container
						],
						children: d.jsx(o("WAWebWdsSmbAnimBookAiTeachLearningIcon.react").WdsSmbAnimBookAiTeachLearningIcon, {})
					}),
					d.jsx(r("WAWebBizAiKnowledgeReviewSummaryPageDescription.react"), {}),
					t
				]
			}) })]
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R() {
		return d.jsx(S, {
			onBack: o("WAWebDrawerManager").closeDrawerRight,
			children: d.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				xstyle: [f.marginTop15, C.container],
				children: d.jsx(o("WAWebSpinner.react").Spinner, {
					color: "default",
					size: 24,
					stroke: 3
				})
			})
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t = e.biz_info_attribute, n = e.biz_info_value, r = e.faq_answer, o = e.faq_question, a = e.type, i = "", l = "";
		return a === "FAQ" && o != null && r != null ? (i = o, l = r) : a === "BIZ_INFO" && t != null && n != null && (i = E(t), l = n), {
			title: i,
			content: l
		};
	}
	function E(e) {
		switch (e.toUpperCase()) {
			case "ADDRESS": return s._(
				/*BTDS*/
				""
			);
			case "BUSINESS_HOURS": return s._(
				/*BTDS*/
				""
			);
			case "DESCRIPTION": return s._(
				/*BTDS*/
				""
			);
			case "CATALOG": return s._(
				/*BTDS*/
				""
			);
			case "DISCOUNT_POLICY": return s._(
				/*BTDS*/
				""
			);
			case "EMAIL": return s._(
				/*BTDS*/
				""
			);
			case "PAYMENT_METHODS": return s._(
				/*BTDS*/
				""
			);
			case "PURCHASE_INFO": return s._(
				/*BTDS*/
				""
			);
			case "RETURN_POLICY": return s._(
				/*BTDS*/
				""
			);
			case "SHIPPING_POLICY": return s._(
				/*BTDS*/
				""
			);
			case "WEBSITE": return s._(
				/*BTDS*/
				""
			);
			default: return g;
		}
	}
	l.KnowledgeReviewDrawerQuery = y, l.WAWebBizAiKnowledgeReviewDrawer = b;
}), 226);
