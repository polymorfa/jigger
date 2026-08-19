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
		var t = e.onBack, n = e.onRefresh, a = e.onRetry, i = e.queryRef, l = e.queryVersion, u = l === void 0 ? 0 : l, d = e.ref;
		_(function() {
			o("WAWebBizAILargeScreensLogEvents").logViewPurchaseInfoDrawer();
		}, []);
		var p = c.jsx("div", {
			"data-testid": "biz-ai-purchase-info-loading",
			className: "x6s0dn4 x78zum5 x98rzlu xl56j7k",
			children: c.jsx(o("WAWebSpinner.react").Spinner, {
				color: "default",
				size: 24,
				stroke: 3
			})
		});
		return c.jsxs(r("WAWebDrawer.react"), {
			ref: d,
			testid: "biz-ai-purchase-info-drawer",
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: t
			}), c.jsxs(r("WAWebDrawerBody.react"), {
				xstyle: y.body,
				children: [c.jsxs("div", {
					className: "x6s0dn4 x78zum5 xdt5ytf x12xbjc7",
					children: [
						c.jsx(r("WDSIllustrationWdsSmbPictoReceiptAndroid.react"), {}),
						c.jsx("div", {
							className: "x6s0dn4 xkh2ocl x78zum5 x8a3fw1 x1aj3ljl x16ovd2e x12xbjc7 xvtqlqk x1phvje8",
							children: c.jsx(r("WDSText.react"), {
								colorName: "contentDefault",
								type: "Headline2",
								maxLines: 1,
								children: s._(
									/*BTDS*/
									""
								)
							})
						}),
						c.jsx("div", {
							className: "x6s0dn4 xkh2ocl x78zum5 x8a3fw1 x1aj3ljl xvpt6g3 xvtqlqk x1phvje8",
							children: c.jsx(r("WDSText.react"), {
								colorName: "contentDefault",
								type: "Body1",
								children: s._(
									/*BTDS*/
									""
								)
							})
						})
					]
				}), c.jsx(r("WAWebBizAIQueryBoundary.react"), {
					boundaryName: "biz-ai-purchase-info",
					onRetry: a,
					queryVersion: u,
					testid: "biz-ai-purchase-info-error",
					children: c.jsx(m, {
						fallback: p,
						children: i != null ? c.jsx(R, {
							onRefresh: n,
							onRetry: a,
							queryRef: i
						}) : p
					})
				})]
			})]
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	var S = e !== void 0 ? e : e = n("WAWebBizAIPurchaseInfoDrawerQuery.graphql");
	function R(e) {
		var t = e.onRefresh, n = e.onRetry, a = e.queryRef, i = f(function() {
			return C();
		}, []), l = o("CometRelay").usePreloadedQuery(S, a), u = r("useWAWebBizAIQueryRefreshError")(a.source), d = f(function() {
			var e, t = {}, n = (e = l.xfb_meta_ai_biz_agent_wa_ai_home) == null ? void 0 : e.ordered_knowledge;
			if (n == null) return t;
			for (var r of n) if (r != null) {
				var o = r.knowledge_type, a = r.string_data;
				if (!(o == null || a == null)) for (var s of i) b[s.fieldKey] === o && (t[s.fieldKey] = a);
			}
			return t;
		}, [l.xfb_meta_ai_biz_agent_wa_ai_home, i]), m = h(new Set()), _ = m[0], y = m[1], v = g(new Set()), R = p(function(e) {
			var n, a = (n = d[e.fieldKey]) != null ? n : "";
			o("WAWebBizAIModal").openBizAIModal(c.jsx(r("WAWebBizAIKnowledgeEditModal.react"), {
				currentValue: a,
				exampleQuestion: e.exampleQuestion,
				fieldKey: e.fieldKey,
				fieldLabel: e.fieldLabel,
				onClose: o("WAWebModalManager").closeModalManager,
				onSaved: function() {
					o("WAWebModalManager").ModalManager.close(), t();
				},
				title: e.label
			}));
		}, [d, t]), L = p(function(e) {
			v.current.has(e.fieldKey) || (v.current.add(e.fieldKey), y(function(t) {
				var n = new Set(t);
				return n.add(e.fieldKey), n;
			}), o("WAWebBizAILargeScreensLogEvents").logClickDeleteSource(), o("WAWebBizAiExampleResponseUpdateMutation").updateKnowledge(o("WAWebBizAiKnowledgeUtils").buildKnowledgeInput(e.fieldKey, "")).then(function(e) {
				o("WAWebBizAILargeScreensLogEvents").logApiDeleteSourceResult(e.isSuccess), e.isSuccess ? (o("WAWebBizAiSaveUtils").showDeletedToast(), t()) : o("WAWebBizAiSaveUtils").showErrorToast();
			}).catch(function() {
				o("WAWebBizAILargeScreensLogEvents").logApiDeleteSourceResult(!1), o("WAWebBizAiSaveUtils").showErrorToast();
			}).finally(function() {
				v.current.delete(e.fieldKey), y(function(t) {
					var n = new Set(t);
					return n.delete(e.fieldKey), n;
				});
			}));
		}, [t]);
		return c.jsxs(c.Fragment, { children: [
			u && n != null ? c.jsx(r("WAWebBizAIQueryRefreshBanner.react"), {
				onRetry: n,
				testid: "biz-ai-purchase-info-refresh"
			}) : null,
			c.jsx("div", {
				className: "x6s0dn4 x78zum5 xvkrg5o xvtqlqk x1phvje8",
				children: c.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					type: "Body1Emphasized",
					children: s._(
						/*BTDS*/
						""
					)
				})
			}),
			i.map(function(e) {
				return c.jsx(o("WAWebBizAIFieldItem.react").WAWebBizAIFieldItem, {
					deleting: _.has(e.fieldKey),
					field: e,
					hasValue: !!d[e.fieldKey],
					value: d[e.fieldKey],
					onEdit: function() {
						return R(e);
					},
					onDelete: function() {
						return L(e);
					}
				}, e.testid);
			})
		] });
	}
	R.displayName = R.name + " [from " + i.id + "]", l.WAWebBizAIPurchaseInfoDrawer = v, l.PurchaseInfoDrawerQuery = S;
}), 226);
