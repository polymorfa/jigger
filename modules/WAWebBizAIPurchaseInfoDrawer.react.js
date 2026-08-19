__d("WAWebBizAIPurchaseInfoDrawer.react", [
	"fbt",
	"CometRelay",
	"WAWebBizAIFieldItem.react",
	"WAWebBizAIKnowledgeEditModal.react",
	"WAWebBizAILargeScreensLogEvents",
	"WAWebBizAIModal",
	"WAWebBizAIPurchaseInfoDrawerQuery.graphql",
	"WAWebBizAIQueryBoundary.react",
	"WAWebBizAIQueryRefreshBanner.react",
	"WAWebBizAiExampleResponseUpdateMutation",
	"WAWebBizAiKnowledgeUtils",
	"WAWebBizAiSaveUtils",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebModalManager",
	"WAWebSpinner.react",
	"WDSIconIcDirectionsBoat.react",
	"WDSIconIcPayments.react",
	"WDSIconIcRedeem.react",
	"WDSIconIcShoppingCart.react",
	"WDSIconIcSyncAlt.react",
	"WDSIllustrationWdsSmbPictoReceiptAndroid.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebBizAIQueryRefreshError"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.Suspense, p = d.useCallback, _ = d.useEffect, f = d.useMemo, g = d.useRef, h = d.useState, y = {
		body: {
			paddingInlineStart: "x1iw51ew",
			paddingInlineEnd: "xde1mab",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		fieldIcon: {
			color: "xhslqc4",
			flexShrink: "x2lah0s",
			height: "xxk0z11",
			width: "xvy4d1p",
			$$css: !0
		}
	};
	function C() {
		return [
			{
				exampleQuestion: s._(
					/*BTDS*/
					""
				),
				fieldKey: "purchase_info",
				fieldLabel: s._(
					/*BTDS*/
					""
				),
				hint: s._(
					/*BTDS*/
					""
				),
				icon: c.jsx(r("WDSIconIcShoppingCart.react"), { iconXstyle: y.fieldIcon }),
				label: s._(
					/*BTDS*/
					""
				),
				maxLines: 3,
				testid: "purchase-info-purchase"
			},
			{
				exampleQuestion: s._(
					/*BTDS*/
					""
				),
				fieldKey: "payment_methods",
				fieldLabel: s._(
					/*BTDS*/
					""
				),
				hint: s._(
					/*BTDS*/
					""
				),
				icon: c.jsx(r("WDSIconIcPayments.react"), { iconXstyle: y.fieldIcon }),
				label: s._(
					/*BTDS*/
					""
				),
				maxLines: 3,
				testid: "purchase-info-payment-methods"
			},
			{
				exampleQuestion: s._(
					/*BTDS*/
					""
				),
				fieldKey: "shipping_policy",
				fieldLabel: s._(
					/*BTDS*/
					""
				),
				hint: s._(
					/*BTDS*/
					""
				),
				icon: c.jsx(r("WDSIconIcDirectionsBoat.react"), { iconXstyle: y.fieldIcon }),
				label: s._(
					/*BTDS*/
					""
				),
				maxLines: 3,
				testid: "purchase-info-shipping-policy"
			},
			{
				exampleQuestion: s._(
					/*BTDS*/
					""
				),
				fieldKey: "return_policy",
				fieldLabel: s._(
					/*BTDS*/
					""
				),
				hint: s._(
					/*BTDS*/
					""
				),
				icon: c.jsx(r("WDSIconIcSyncAlt.react"), { iconXstyle: y.fieldIcon }),
				label: s._(
					/*BTDS*/
					""
				),
				maxLines: 3,
				testid: "purchase-info-return-policy"
			},
			{
				exampleQuestion: s._(
					/*BTDS*/
					""
				),
				fieldKey: "discount_policy",
				fieldLabel: s._(
					/*BTDS*/
					""
				),
				hint: s._(
					/*BTDS*/
					""
				),
				icon: c.jsx(r("WDSIconIcRedeem.react"), { iconXstyle: y.fieldIcon }),
				label: s._(
					/*BTDS*/
					""
				),
				maxLines: 3,
				testid: "purchase-info-discount-policy"
			}
		];
	}
	var b = {
		discount_policy: "DISCOUNT_POLICY",
		payment_methods: "PAYMENT_METHODS",
		purchase_info: "PURCHASE_INFO",
		return_policy: "RETURN_POLICY",
		shipping_policy: "SHIPPING_POLICY"
	};
	function v(e) {
		var t = o("react-compiler-runtime").c(23), n = e.onBack, a = e.onRefresh, i = e.onRetry, l = e.queryRef, u = e.queryVersion, d = e.ref, p = u === void 0 ? 0 : u, f;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (f = [], t[0] = f) : f = t[0], _(S, f);
		var g;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (g = c.jsx("div", {
			"data-testid": "biz-ai-purchase-info-loading",
			className: "x6s0dn4 x78zum5 x98rzlu xl56j7k",
			children: c.jsx(o("WAWebSpinner.react").Spinner, {
				color: "default",
				size: 24,
				stroke: 3
			})
		}), t[1] = g) : g = t[1];
		var h = g, C;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (C = s._(
			/*BTDS*/
			""
		), t[2] = C) : C = t[2];
		var b;
		t[3] !== n ? (b = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: C,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: n
		}), t[3] = n, t[4] = b) : b = t[4];
		var v, R, E;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (v = { className: "x6s0dn4 x78zum5 xdt5ytf x12xbjc7" }, R = c.jsx(r("WDSIllustrationWdsSmbPictoReceiptAndroid.react"), {}), E = { className: "x6s0dn4 xkh2ocl x78zum5 x8a3fw1 x1aj3ljl x16ovd2e x12xbjc7 xvtqlqk x1phvje8" }, t[5] = v, t[6] = R, t[7] = E) : (v = t[5], R = t[6], E = t[7]);
		var k, I;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (I = c.jsx("div", babelHelpers.extends({}, E, { children: c.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Headline2",
			maxLines: 1,
			children: s._(
				/*BTDS*/
				""
			)
		}) })), k = { className: "x6s0dn4 xkh2ocl x78zum5 x8a3fw1 x1aj3ljl xvpt6g3 xvtqlqk x1phvje8" }, t[8] = k, t[9] = I) : (k = t[8], I = t[9]);
		var T;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (T = c.jsxs("div", babelHelpers.extends({}, v, { children: [
			R,
			I,
			c.jsx("div", babelHelpers.extends({}, k, { children: c.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Body1",
				children: s._(
					/*BTDS*/
					""
				)
			}) }))
		] })), t[10] = T) : T = t[10];
		var D;
		t[11] !== a || t[12] !== i || t[13] !== l ? (D = c.jsx(m, {
			fallback: h,
			children: l != null ? c.jsx(L, {
				onRefresh: a,
				onRetry: i,
				queryRef: l
			}) : h
		}), t[11] = a, t[12] = i, t[13] = l, t[14] = D) : D = t[14];
		var x;
		t[15] !== i || t[16] !== p || t[17] !== D ? (x = c.jsxs(r("WAWebDrawerBody.react"), {
			xstyle: y.body,
			children: [T, c.jsx(r("WAWebBizAIQueryBoundary.react"), {
				boundaryName: "biz-ai-purchase-info",
				onRetry: i,
				queryVersion: p,
				testid: "biz-ai-purchase-info-error",
				children: D
			})]
		}), t[15] = i, t[16] = p, t[17] = D, t[18] = x) : x = t[18];
		var $;
		return t[19] !== d || t[20] !== x || t[21] !== b ? ($ = c.jsxs(r("WAWebDrawer.react"), {
			ref: d,
			testid: "biz-ai-purchase-info-drawer",
			children: [b, x]
		}), t[19] = d, t[20] = x, t[21] = b, t[22] = $) : $ = t[22], $;
	}
	function S() {
		o("WAWebBizAILargeScreensLogEvents").logViewPurchaseInfoDrawer();
	}
	var R = e !== void 0 ? e : e = n("WAWebBizAIPurchaseInfoDrawerQuery.graphql");
	function L(e) {
		var t, n = o("react-compiler-runtime").c(23), a = e.onRefresh, i = e.onRetry, l = e.queryRef, u;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (u = C(), n[0] = u) : u = n[0];
		var d = u, m = o("CometRelay").usePreloadedQuery(R, l), p = r("useWAWebBizAIQueryRefreshError")(l.source), _;
		if (n[1] !== ((t = m.xfb_meta_ai_biz_agent_wa_ai_home) == null ? void 0 : t.ordered_knowledge)) {
			var f;
			e: {
				var y, v = {}, S = (y = m.xfb_meta_ai_biz_agent_wa_ai_home) == null ? void 0 : y.ordered_knowledge;
				if (S == null) {
					_ = v;
					break e;
				}
				for (var L of S) if (L != null) {
					var k = L.knowledge_type, I = L.string_data;
					if (!(k == null || I == null)) for (var T of d) b[T.fieldKey] === k && (v[T.fieldKey] = I);
				}
				_ = v;
			}
			n[1] = (f = m.xfb_meta_ai_biz_agent_wa_ai_home) == null ? void 0 : f.ordered_knowledge, n[2] = _;
		} else _ = n[2];
		var D = _, x;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (x = new Set(), n[3] = x) : x = n[3];
		var $ = h(x), P = $[0], N = $[1], M;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (M = new Set(), n[4] = M) : M = n[4];
		var w = g(M), A;
		n[5] !== D || n[6] !== a ? (A = function(t) {
			var e, n = (e = D[t.fieldKey]) != null ? e : "";
			o("WAWebBizAIModal").openBizAIModal(c.jsx(r("WAWebBizAIKnowledgeEditModal.react"), {
				currentValue: n,
				exampleQuestion: t.exampleQuestion,
				fieldKey: t.fieldKey,
				fieldLabel: t.fieldLabel,
				onClose: o("WAWebModalManager").closeModalManager,
				onSaved: function() {
					o("WAWebModalManager").ModalManager.close(), a();
				},
				title: t.label
			}));
		}, n[5] = D, n[6] = a, n[7] = A) : A = n[7];
		var F = A, O;
		n[8] !== a ? (O = function(t) {
			w.current.has(t.fieldKey) || (w.current.add(t.fieldKey), N(function(e) {
				var n = new Set(e);
				return n.add(t.fieldKey), n;
			}), o("WAWebBizAILargeScreensLogEvents").logClickDeleteSource(), o("WAWebBizAiExampleResponseUpdateMutation").updateKnowledge(o("WAWebBizAiKnowledgeUtils").buildKnowledgeInput(t.fieldKey, "")).then(function(e) {
				o("WAWebBizAILargeScreensLogEvents").logApiDeleteSourceResult(e.isSuccess), e.isSuccess ? (o("WAWebBizAiSaveUtils").showDeletedToast(), a()) : o("WAWebBizAiSaveUtils").showErrorToast();
			}).catch(E).finally(function() {
				w.current.delete(t.fieldKey), N(function(e) {
					var n = new Set(e);
					return n.delete(t.fieldKey), n;
				});
			}));
		}, n[8] = a, n[9] = O) : O = n[9];
		var B = O, W;
		n[10] !== p || n[11] !== i ? (W = p && i != null ? c.jsx(r("WAWebBizAIQueryRefreshBanner.react"), {
			onRetry: i,
			testid: "biz-ai-purchase-info-refresh"
		}) : null, n[10] = p, n[11] = i, n[12] = W) : W = n[12];
		var q;
		n[13] === Symbol.for("react.memo_cache_sentinel") ? (q = { className: "x6s0dn4 x78zum5 xvkrg5o xvtqlqk x1phvje8" }, n[13] = q) : q = n[13];
		var U;
		n[14] === Symbol.for("react.memo_cache_sentinel") ? (U = c.jsx("div", babelHelpers.extends({}, q, { children: c.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1Emphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), n[14] = U) : U = n[14];
		var V;
		n[15] !== P || n[16] !== D || n[17] !== B || n[18] !== F ? (V = d.map(function(e) {
			return c.jsx(o("WAWebBizAIFieldItem.react").WAWebBizAIFieldItem, {
				deleting: P.has(e.fieldKey),
				field: e,
				hasValue: !!D[e.fieldKey],
				value: D[e.fieldKey],
				onEdit: function() {
					return F(e);
				},
				onDelete: function() {
					return B(e);
				}
			}, e.testid);
		}), n[15] = P, n[16] = D, n[17] = B, n[18] = F, n[19] = V) : V = n[19];
		var H;
		return n[20] !== V || n[21] !== W ? (H = c.jsxs(c.Fragment, { children: [
			W,
			U,
			V
		] }), n[20] = V, n[21] = W, n[22] = H) : H = n[22], H;
	}
	function E() {
		o("WAWebBizAILargeScreensLogEvents").logApiDeleteSourceResult(!1), o("WAWebBizAiSaveUtils").showErrorToast();
	}
	l.WAWebBizAIPurchaseInfoDrawer = v, l.PurchaseInfoDrawerQuery = R;
}), 226);
