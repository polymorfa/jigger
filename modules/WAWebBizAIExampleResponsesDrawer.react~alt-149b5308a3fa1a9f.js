__d("WAWebBizAIExampleResponsesDrawer.react", [
	"fbt",
	"CometRelay",
	"WALogger",
	"WAWebBizAIExampleResponsesDrawerQuery.graphql",
	"WAWebBizAIFaqEditModal.react",
	"WAWebBizAIKnowledgeEditModal.react",
	"WAWebBizAIKnowledgeFaqItem.react",
	"WAWebBizAILargeScreensLogEvents",
	"WAWebBizAIModal",
	"WAWebBizAIOpenWebsiteEditModal",
	"WAWebBizAIQueryBoundary.react",
	"WAWebBizAIQueryRefreshBanner.react",
	"WAWebBizAiExampleResponseDeleteMutation",
	"WAWebBizAiSaveUtils",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerButton.react",
	"WAWebDrawerHeader.react",
	"WAWebGroupInfoSeparator.react",
	"WAWebModalManager",
	"WAWebSpinner.react",
	"WDSButton.react",
	"WDSIconIcAdd.react",
	"WDSIconIcDirectionsBoat.react",
	"WDSIconIcLocationOn.react",
	"WDSIconIcMail.react",
	"WDSIconIcPayments.react",
	"WDSIconIcPublic.react",
	"WDSIconIcRedeem.react",
	"WDSIconIcSchedule.react",
	"WDSIconIcShoppingCart.react",
	"WDSIconIcStore.react",
	"WDSIconIcSyncAlt.react",
	"WDSText.react",
	"WDSTooltip.react",
	"react",
	"useWAWebBizAIQueryRefreshError"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m = d || (d = o("react")), p = d, _ = p.Suspense, f = p.useCallback, g = p.useEffect, h = p.useMemo, y = p.useRef, C = p.useState, b = 2, v = [
		"description",
		"address",
		"business_hours",
		"email",
		"website"
	], S = {
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
		},
		iconContainer: {
			marginInlineEnd: "x14mko6t",
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "x1nzty39",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			$$css: !0
		},
		item: {
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "x1nzty39",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			$$css: !0
		}
	};
	function R() {
		return [
			{
				exampleQuestion: s._(
					/*BTDS*/
					""
				),
				fieldHint: s._(
					/*BTDS*/
					""
				),
				fieldKey: "description",
				fieldLabel: s._(
					/*BTDS*/
					""
				),
				icon: m.jsx(r("WDSIconIcStore.react"), { iconXstyle: S.fieldIcon }),
				knowledgeType: "DESCRIPTION",
				sampleLabel: s._(
					/*BTDS*/
					""
				)
			},
			{
				exampleQuestion: s._(
					/*BTDS*/
					""
				),
				fieldHint: s._(
					/*BTDS*/
					""
				),
				fieldKey: "address",
				fieldLabel: s._(
					/*BTDS*/
					""
				),
				icon: m.jsx(r("WDSIconIcLocationOn.react"), { iconXstyle: S.fieldIcon }),
				knowledgeType: "ADDRESS",
				sampleLabel: s._(
					/*BTDS*/
					""
				)
			},
			{
				exampleQuestion: s._(
					/*BTDS*/
					""
				),
				fieldHint: s._(
					/*BTDS*/
					""
				),
				fieldKey: "business_hours",
				fieldLabel: s._(
					/*BTDS*/
					""
				),
				icon: m.jsx(r("WDSIconIcSchedule.react"), { iconXstyle: S.fieldIcon }),
				knowledgeType: "BUSINESS_HOURS",
				sampleLabel: s._(
					/*BTDS*/
					""
				)
			},
			{
				exampleQuestion: s._(
					/*BTDS*/
					""
				),
				fieldHint: s._(
					/*BTDS*/
					""
				),
				fieldKey: "purchase_info",
				fieldLabel: s._(
					/*BTDS*/
					""
				),
				icon: m.jsx(r("WDSIconIcShoppingCart.react"), { iconXstyle: S.fieldIcon }),
				knowledgeType: "PURCHASE_INFO",
				sampleLabel: s._(
					/*BTDS*/
					""
				)
			},
			{
				exampleQuestion: s._(
					/*BTDS*/
					""
				),
				fieldHint: s._(
					/*BTDS*/
					""
				),
				fieldKey: "payment_methods",
				fieldLabel: s._(
					/*BTDS*/
					""
				),
				icon: m.jsx(r("WDSIconIcPayments.react"), { iconXstyle: S.fieldIcon }),
				knowledgeType: "PAYMENT_METHODS",
				sampleLabel: s._(
					/*BTDS*/
					""
				)
			},
			{
				exampleQuestion: s._(
					/*BTDS*/
					""
				),
				fieldHint: s._(
					/*BTDS*/
					""
				),
				fieldKey: "return_policy",
				fieldLabel: s._(
					/*BTDS*/
					""
				),
				icon: m.jsx(r("WDSIconIcSyncAlt.react"), { iconXstyle: S.fieldIcon }),
				knowledgeType: "RETURN_POLICY",
				sampleLabel: s._(
					/*BTDS*/
					""
				)
			},
			{
				exampleQuestion: s._(
					/*BTDS*/
					""
				),
				fieldHint: s._(
					/*BTDS*/
					""
				),
				fieldKey: "discount_policy",
				fieldLabel: s._(
					/*BTDS*/
					""
				),
				icon: m.jsx(r("WDSIconIcRedeem.react"), { iconXstyle: S.fieldIcon }),
				knowledgeType: "DISCOUNT_POLICY",
				sampleLabel: s._(
					/*BTDS*/
					""
				)
			},
			{
				exampleQuestion: s._(
					/*BTDS*/
					""
				),
				fieldHint: s._(
					/*BTDS*/
					""
				),
				fieldKey: "email",
				fieldLabel: s._(
					/*BTDS*/
					""
				),
				icon: m.jsx(r("WDSIconIcMail.react"), { iconXstyle: S.fieldIcon }),
				knowledgeType: "EMAIL",
				sampleLabel: s._(
					/*BTDS*/
					""
				)
			},
			{
				exampleQuestion: s._(
					/*BTDS*/
					""
				),
				fieldHint: s._(
					/*BTDS*/
					""
				),
				fieldKey: "website",
				fieldLabel: s._(
					/*BTDS*/
					""
				),
				icon: m.jsx(r("WDSIconIcPublic.react"), { iconXstyle: S.fieldIcon }),
				knowledgeType: "WEBSITE",
				sampleLabel: s._(
					/*BTDS*/
					""
				)
			},
			{
				exampleQuestion: s._(
					/*BTDS*/
					""
				),
				fieldHint: s._(
					/*BTDS*/
					""
				),
				fieldKey: "shipping_policy",
				fieldLabel: s._(
					/*BTDS*/
					""
				),
				icon: m.jsx(r("WDSIconIcDirectionsBoat.react"), { iconXstyle: S.fieldIcon }),
				knowledgeType: "SHIPPING_POLICY",
				sampleLabel: s._(
					/*BTDS*/
					""
				)
			}
		];
	}
	function L(e) {
		var t = e.addButton, n = e.children, a = e.onBack;
		return m.jsxs(m.Fragment, { children: [m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: s._(
				/*BTDS*/
				""
			),
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: a,
			rightActionElement: t
		}), m.jsxs(r("WAWebDrawerBody.react"), {
			xstyle: S.body,
			children: [m.jsx("div", {
				className: "x6s0dn4 xkh2ocl x78zum5 x8a3fw1 x1aj3ljl x16ovd2e x12xbjc7 xvtqlqk x1phvje8",
				children: m.jsx(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					type: "Body2",
					children: s._(
						/*BTDS*/
						""
					)
				})
			}), n]
		})] });
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(e) {
		return m.jsx(L, {
			onBack: e,
			children: m.jsx("div", {
				"data-testid": "biz-ai-example-responses-loading",
				className: "x6s0dn4 x78zum5 x98rzlu xl56j7k",
				children: m.jsx(o("WAWebSpinner.react").Spinner, {
					color: "default",
					size: 24,
					stroke: 3
				})
			})
		});
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(e) {
		var t = e.onBack, n = e.onOpenKnowledge, a = e.onRefresh, i = e.onRetry, l = e.queryRef, s = e.queryVersion, u = s === void 0 ? 0 : s, c = e.ref;
		return g(function() {
			o("WAWebBizAILargeScreensLogEvents").logViewExampleResponsesDrawer();
		}, []), m.jsx(r("WAWebDrawer.react"), {
			ref: c,
			testid: "biz-ai-example-responses-drawer",
			children: m.jsx(r("WAWebBizAIQueryBoundary.react"), {
				boundaryName: "biz-ai-example-responses",
				onRetry: i,
				queryVersion: u,
				renderErrorChrome: function(n) {
					return m.jsx(L, {
						onBack: t,
						children: n
					});
				},
				testid: "biz-ai-example-responses-list-error",
				children: m.jsx(_, {
					fallback: E(t),
					children: l != null ? m.jsx(T, {
						onBack: t,
						onOpenKnowledge: n,
						onRefresh: a,
						onRetry: i,
						queryRef: l
					}) : E(t)
				})
			})
		});
	}
	k.displayName = k.name + " [from " + i.id + "]";
	var I = e !== void 0 ? e : e = n("WAWebBizAIExampleResponsesDrawerQuery.graphql");
	function T(e) {
		var t = e.onBack, n = e.onOpenKnowledge, a = e.onRefresh, i = e.onRetry, l = e.queryRef, d = h(function() {
			return R();
		}, []), p = o("CometRelay").usePreloadedQuery(I, l), _ = r("useWAWebBizAIQueryRefreshError")(l.source), g = h(function() {
			var e, t = (e = p.xfb_meta_ai_biz_agent_wa_ai_home) == null ? void 0 : e.ordered_knowledge;
			if (t == null) return {
				faqs: [],
				filledTypes: []
			};
			var n = [], r = [];
			for (var o of t) if (o != null) {
				if (o.knowledge_type === "FAQ" && o.faq_data != null) {
					var a = o.faq_data, i = a.answer, l = a.id, s = a.question;
					s != null && i != null && n.push({
						answer: i,
						id: l != null ? l : null,
						question: s
					});
				}
				o.knowledge_type != null && r.push(o.knowledge_type);
			}
			return {
				faqs: n,
				filledTypes: r
			};
		}, [p.xfb_meta_ai_biz_agent_wa_ai_home]), E = g.faqs, k = g.filledTypes, T = h(function() {
			var e, t = (e = p.xfb_meta_ai_biz_agent_wa_ai_home) == null || (e = e.knowledge) == null ? void 0 : e.websites;
			if (t == null) return [];
			var n = [];
			for (var r of t) if (r != null) {
				var o, a;
				n.push({
					website_type: (o = r.website_type) != null ? o : null,
					website_url: (a = r.website_url) != null ? a : null
				});
			}
			return n;
		}, [p.xfb_meta_ai_biz_agent_wa_ai_home]), D = h(function() {
			return d.filter(function(e) {
				return !k.includes(e.knowledgeType);
			}).slice(0, b);
		}, [d, k]), x = f(function() {
			o("WAWebBizAIModal").openBizAIModal(m.jsx(r("WAWebBizAIFaqEditModal.react"), {
				faq: null,
				allFaqs: E,
				onClose: o("WAWebModalManager").closeModalManager,
				onSaved: function() {
					o("WAWebModalManager").ModalManager.close(), a();
				},
				onViewKnowledge: n
			}));
		}, [
			E,
			n,
			a
		]), $ = f(function(e) {
			o("WAWebBizAIModal").openBizAIModal(m.jsx(r("WAWebBizAIFaqEditModal.react"), {
				faq: e,
				allFaqs: E,
				onClose: o("WAWebModalManager").closeModalManager,
				onSaved: function() {
					o("WAWebModalManager").ModalManager.close(), a();
				},
				onViewKnowledge: n
			}));
		}, [
			E,
			n,
			a
		]), P = f(function(e) {
			if (e.fieldKey === "website") {
				o("WAWebBizAIOpenWebsiteEditModal").openWebsiteEditModal({
					initialWebsites: T,
					onSaved: a
				});
				return;
			}
			var t = v.includes(e.fieldKey) ? "business_info" : "purchasing_info", n = t === "business_info" ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
			o("WAWebBizAIModal").openBizAIModal(m.jsx(r("WAWebBizAIKnowledgeEditModal.react"), {
				currentValue: "",
				exampleQuestion: e.exampleQuestion,
				fieldKey: e.fieldKey,
				fieldLabel: e.fieldLabel,
				onClose: o("WAWebModalManager").closeModalManager,
				onSaved: function() {
					o("WAWebModalManager").ModalManager.close(), a();
				},
				title: n
			}));
		}, [T, a]), N = C(new Set()), M = N[0], w = N[1], A = y(new Set()), F = f(function(e) {
			var t = e.id;
			if (t != null && !A.current.has(t)) {
				A.current.add(t), w(function(e) {
					var n = new Set(e);
					return n.add(t), n;
				});
				var n = function() {
					A.current.delete(t), w(function(e) {
						var n = new Set(e);
						return n.delete(t), n;
					});
				};
				o("WAWebBizAiExampleResponseDeleteMutation").deleteKnowledgeWithIds("FAQ", [t]).then(function(e) {
					e.isSuccess ? (o("WAWebBizAiSaveUtils").showDeletedExampleResponseToast(), a()) : (o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["biz_ai: delete example response returned isSuccess=false"]))).sendLogs("biz-ai-example-response-delete-failed"), o("WAWebBizAiSaveUtils").showErrorToast());
				}).catch(function(e) {
					o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["biz_ai: delete example response failed ", ""])), e).sendLogs("biz-ai-example-response-delete-failed"), o("WAWebBizAiSaveUtils").showErrorToast();
				}).finally(n);
			}
		}, [a]), O = m.jsx("span", { children: m.jsx(r("WDSTooltip.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			children: m.jsx(r("WDSButton.react"), {
				Icon: r("WDSIconIcAdd.react"),
				onPress: x,
				variant: "borderless",
				size: "small",
				"aria-label": s._(
					/*BTDS*/
					""
				).toString(),
				testid: "example-responses-header-add-btn"
			})
		}) });
		return m.jsxs(L, {
			addButton: O,
			onBack: t,
			children: [
				_ && i != null ? m.jsx(r("WAWebBizAIQueryRefreshBanner.react"), {
					onRetry: i,
					testid: "biz-ai-example-responses-list-refresh"
				}) : null,
				D.length > 0 ? D.map(function(e) {
					return m.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
						testid: "suggestion-" + e.fieldKey,
						useRoundedStyle: !0,
						divider: !1,
						icon: e.icon,
						iconXstyle: S.iconContainer,
						xstyle: S.item,
						active: !1,
						onClick: function() {
							return P(e);
						},
						children: e.sampleLabel
					}, e.fieldKey);
				}) : null,
				m.jsx("div", {
					className: "x9f619 x78zum5 x16ovd2e x1phvje8 xcldk2z xh8yej3",
					children: m.jsx(r("WDSButton.react"), {
						variant: "outline",
						size: "medium",
						widthMode: "flexible",
						Icon: r("WDSIconIcAdd.react"),
						label: s._(
							/*BTDS*/
							""
						),
						onPress: x,
						testid: "example-responses-body-add-btn"
					})
				}),
				E.length > 0 ? m.jsxs("div", {
					"data-testid": "example-responses-section",
					children: [
						m.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 }),
						m.jsx("div", {
							className: "x6s0dn4 x78zum5 x1qughib x1nbhmlj x1xrf6ya xvtqlqk xdx6fka",
							"data-testid": "example-responses-section-header",
							children: m.jsx(r("WDSText.react"), {
								colorName: "contentDefault",
								type: "Body1Emphasized",
								children: s._(
									/*BTDS*/
									""
								)
							})
						}),
						E.map(function(e, t) {
							var n;
							return m.jsx(r("WAWebBizAIKnowledgeFaqItem.react"), {
								answer: e.answer,
								deleting: e.id != null && M.has(e.id),
								index: t,
								onDelete: function() {
									return F(e);
								},
								onEdit: function() {
									return $(e);
								},
								question: e.question
							}, (n = e.id) != null ? n : "q:" + e.question);
						})
					]
				}) : null
			]
		});
	}
	T.displayName = T.name + " [from " + i.id + "]", l.WAWebBizAIExampleResponsesDrawer = k, l.ExampleResponsesDrawerQuery = I;
}), 226);
