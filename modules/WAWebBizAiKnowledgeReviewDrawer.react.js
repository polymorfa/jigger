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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(11), n = e.onRetry, a = e.queryRef, i = e.queryVersion, l = e.source, s = i === void 0 ? 0 : i, u = l === void 0 ? "AUTO_SAVE" : l, c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = I(), t[0] = c) : c = t[0];
		var m;
		t[1] !== n || t[2] !== a || t[3] !== u ? (m = a != null ? d.jsx(S, {
			onRetry: n,
			queryRef: a,
			source: u
		}) : I(), t[1] = n, t[2] = a, t[3] = u, t[4] = m) : m = t[4];
		var _;
		t[5] !== m ? (_ = d.jsx(p, {
			fallback: c,
			children: m
		}), t[5] = m, t[6] = _) : _ = t[6];
		var f;
		return t[7] !== n || t[8] !== s || t[9] !== _ ? (f = d.jsx(r("WAWebBizAIQueryBoundary.react"), {
			boundaryName: "biz-ai-knowledge-review",
			onRetry: n,
			queryVersion: s,
			renderErrorChrome: v,
			testid: "biz-ai-knowledge-review-error",
			children: _
		}), t[7] = n, t[8] = s, t[9] = _, t[10] = f) : f = t[10], f;
	}
	function v(e) {
		return d.jsx(k, {
			onBack: o("WAWebDrawerManager").closeDrawerRight,
			children: e
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t, n = o("react-compiler-runtime").c(43), a = e.onRetry, i = e.queryRef, l = e.source, s = o("CometRelay").usePreloadedQuery(y, i), u = r("useWAWebBizAIQueryRefreshError")(i.source), c;
		if (n[0] !== ((t = s.xfb_maiba_load_potential_knowledge_for_review) == null ? void 0 : t.items)) {
			var m;
			c = function() {
				var e, t;
				return ((e = (t = s.xfb_maiba_load_potential_knowledge_for_review) == null ? void 0 : t.items) != null ? e : []).map(E);
			}, n[0] = (m = s.xfb_maiba_load_potential_knowledge_for_review) == null ? void 0 : m.items, n[1] = c;
		} else c = n[1];
		var p = _(c), b = p[0], v = p[1], S;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (S = { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }, n[2] = S) : S = n[2];
		var I = o("useWAWebFlow").useFlow(h.List, S), D = I[0], x = I[1], $ = _(null), P = $[0], N = $[1], M;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (M = function(t) {
			v(function(e) {
				return e.filter(function(e) {
					return e.id !== t;
				});
			});
		}, n[3] = M) : M = n[3];
		var w = M, A;
		n[4] !== x || n[5] !== b ? (A = function(t) {
			var e;
			N((e = b.find(function(e) {
				return e.id === t;
			})) != null ? e : null), x.push(h.Detail);
		}, n[4] = x, n[5] = b, n[6] = A) : A = n[6];
		var F = A, O;
		n[7] !== x ? (O = function(t) {
			w(t), x.pop();
		}, n[7] = x, n[8] = O) : O = n[8];
		var B = O, W;
		n[9] !== b ? (W = function() {
			o("WAWebBizAiKnowledgeReviewCommitMutation").commitPendingData(b.map(L)).then(R), o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
		}, n[9] = b, n[10] = W) : W = n[10];
		var q = W, U = x.step;
		if (U == null) return null;
		var V = null;
		e: switch (U) {
			case h.List: {
				var H;
				n[11] !== u || n[12] !== a ? (H = u && a != null ? d.jsx(r("WAWebBizAIQueryRefreshBanner.react"), {
					onRetry: a,
					testid: "biz-ai-knowledge-review-refresh"
				}) : null, n[11] = u, n[12] = a, n[13] = H) : H = n[13];
				var G;
				n[14] === Symbol.for("react.memo_cache_sentinel") ? (G = [f.marginTop15, C.container], n[14] = G) : G = n[14];
				var z;
				if (n[15] !== F || n[16] !== b || n[17] !== l) {
					var j;
					n[19] !== F || n[20] !== l ? (j = function(t, n) {
						var e, o = T(t), a = o.content, i = o.title;
						return d.jsx(r("WAWebBizAIKnowledgeEntry.react"), {
							id: (e = t.id) != null ? e : g,
							question: i,
							answer: a,
							source: l,
							onKnowledgeItemDeleted: w,
							onViewDetail: F
						}, n);
					}, n[19] = F, n[20] = l, n[21] = j) : j = n[21], z = b.map(j), n[15] = F, n[16] = b, n[17] = l, n[18] = z;
				} else z = n[18];
				var K;
				n[22] !== z ? (K = d.jsx(o("WAWebFlex.react").FlexColumn, {
					xstyle: G,
					children: z
				}), n[22] = z, n[23] = K) : K = n[23];
				var Q;
				n[24] !== q || n[25] !== K || n[26] !== H ? (Q = d.jsxs(k, {
					onBack: q,
					children: [H, K]
				}), n[24] = q, n[25] = K, n[26] = H, n[27] = Q) : Q = n[27], V = Q;
				break e;
			}
			case h.Detail: if (P != null) {
				var X, Y;
				n[28] !== P ? (Y = T(P), n[28] = P, n[29] = Y) : Y = n[29];
				var J = Y, Z = J.content, ee = J.title, te = (X = P.id) != null ? X : g, ne;
				n[30] !== x ? (ne = function() {
					return x.pop();
				}, n[30] = x, n[31] = ne) : ne = n[31];
				var re;
				n[32] !== Z || n[33] !== ee || n[34] !== B || n[35] !== l || n[36] !== te || n[37] !== ne ? (re = d.jsx(r("WAWebBizAiKnowledgeItemDetailDrawer.react"), {
					id: te,
					title: ee,
					content: Z,
					source: l,
					onBack: ne,
					onKnowledgeItemDeleted: B
				}), n[32] = Z, n[33] = ee, n[34] = B, n[35] = l, n[36] = te, n[37] = ne, n[38] = re) : re = n[38], V = re;
			}
		}
		var oe;
		return n[39] !== D || n[40] !== V || n[41] !== x ? (oe = d.jsx(D, {
			flow: x,
			children: V
		}), n[39] = D, n[40] = V, n[41] = x, n[42] = oe) : oe = n[42], oe;
	}
	function R(e) {
		e || (o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["biz_ai: knowledge review commit failed"]))).sendLogs("biz-ai-knowledge-review-commit"), o("WAWebBizAiSaveUtils").showErrorToast());
	}
	function L(e) {
		var t;
		return (t = e.id) != null ? t : g;
	}
	function E(e) {
		var t, n, r, o, a, i;
		return {
			id: (t = e == null ? void 0 : e.id) != null ? t : g,
			type: (n = e == null ? void 0 : e.type) != null ? n : g,
			faq_question: (r = e == null ? void 0 : e.faq_question) != null ? r : g,
			faq_answer: (o = e == null ? void 0 : e.faq_answer) != null ? o : g,
			biz_info_attribute: (a = e == null ? void 0 : e.biz_info_attribute) != null ? a : g,
			biz_info_value: (i = e == null ? void 0 : e.biz_info_value) != null ? i : g
		};
	}
	function k(e) {
		var t = o("react-compiler-runtime").c(11), n = e.children, a = e.onBack, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = {
			surface: "unknown",
			viewName: "biz-ai-knowledge-review"
		}, t[0] = i) : i = t[0];
		var l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
			/*BTDS*/
			""
		), t[1] = l) : l = t[1];
		var u;
		t[2] !== a ? (u = d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: l,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			focusBackOrCancel: !0,
			onBack: a
		}), t[2] = a, t[3] = u) : u = t[3];
		var c, m;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (c = d.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: [
				o("WDSPaddings.stylex").wdsPaddings.paddingTop16,
				f.marginBottom36,
				C.container
			],
			children: d.jsx(o("WAWebWdsSmbAnimBookAiTeachLearningIcon.react").WdsSmbAnimBookAiTeachLearningIcon, {})
		}), m = d.jsx(r("WAWebBizAiKnowledgeReviewSummaryPageDescription.react"), {}), t[4] = c, t[5] = m) : (c = t[4], m = t[5]);
		var p;
		t[6] !== n ? (p = d.jsx(r("WAWebDrawerBody.react"), { children: d.jsxs(o("WAWebFlex.react").FlexColumn, {
			padding: 8,
			children: [
				c,
				m,
				n
			]
		}) }), t[6] = n, t[7] = p) : p = t[7];
		var _;
		return t[8] !== u || t[9] !== p ? (_ = d.jsxs(r("WAWebDrawer.react"), {
			testid: "biz-ai-knowledge-review-drawer",
			tsNavigationData: i,
			children: [u, p]
		}), t[8] = u, t[9] = p, t[10] = _) : _ = t[10], _;
	}
	function I() {
		return d.jsx(k, {
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
	I.displayName = I.name + " [from " + i.id + "]";
	function T(e) {
		var t = e.biz_info_attribute, n = e.biz_info_value, r = e.faq_answer, o = e.faq_question, a = e.type, i = "", l = "";
		return a === "FAQ" && o != null && r != null ? (i = o, l = r) : a === "BIZ_INFO" && t != null && n != null && (i = D(t), l = n), {
			title: i,
			content: l
		};
	}
	function D(e) {
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
