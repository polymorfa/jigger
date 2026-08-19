__d("WAWebBizAIBusinessInfoDrawer.react", [
	"fbt",
	"CometRelay",
	"WAWebBizAIBusinessInfoDrawerQuery.graphql",
	"WAWebBizAIFieldItem.react",
	"WAWebBizAIKnowledgeEditModal.react",
	"WAWebBizAILargeScreensLogEvents",
	"WAWebBizAIModal",
	"WAWebBizAIOpenWebsiteEditModal",
	"WAWebBizAIQueryBoundary.react",
	"WAWebBizAIQueryRefreshBanner.react",
	"WAWebBizAiAgentGating",
	"WAWebBizAiExampleResponseUpdateMutation",
	"WAWebBizAiKnowledgeUtils",
	"WAWebBizAiSaveUtils",
	"WAWebCompactMapString",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebGroupInfoSeparator.react",
	"WAWebModalManager",
	"WAWebSpinner.react",
	"WDSIconIcLocationOn.react",
	"WDSIconIcMail.react",
	"WDSIconIcPublic.react",
	"WDSIconIcSchedule.react",
	"WDSIconIcStore.react",
	"WDSIllustrationWdsPictoBusiness.react",
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
				fieldKey: "description",
				fieldLabel: s._(
					/*BTDS*/
					""
				),
				hint: s._(
					/*BTDS*/
					""
				),
				icon: c.jsx(r("WDSIconIcStore.react"), { iconXstyle: y.fieldIcon }),
				label: s._(
					/*BTDS*/
					""
				),
				maxLines: 1,
				testid: "biz-info-description"
			},
			{
				exampleQuestion: s._(
					/*BTDS*/
					""
				),
				fieldKey: "business_hours",
				fieldLabel: s._(
					/*BTDS*/
					""
				),
				hint: s._(
					/*BTDS*/
					""
				),
				icon: c.jsx(r("WDSIconIcSchedule.react"), { iconXstyle: y.fieldIcon }),
				label: s._(
					/*BTDS*/
					""
				),
				maxLines: 3,
				testid: "biz-info-hours"
			},
			{
				exampleQuestion: s._(
					/*BTDS*/
					""
				),
				fieldKey: "address",
				fieldLabel: s._(
					/*BTDS*/
					""
				),
				hint: s._(
					/*BTDS*/
					""
				),
				icon: c.jsx(r("WDSIconIcLocationOn.react"), { iconXstyle: y.fieldIcon }),
				label: s._(
					/*BTDS*/
					""
				),
				maxLines: 1,
				testid: "biz-info-address"
			}
		];
	}
	function b(e) {
		return [{
			exampleQuestion: s._(
				/*BTDS*/
				""
			),
			fieldKey: "email",
			fieldLabel: s._(
				/*BTDS*/
				""
			),
			hint: s._(
				/*BTDS*/
				""
			),
			icon: c.jsx(r("WDSIconIcMail.react"), { iconXstyle: y.fieldIcon }),
			label: s._(
				/*BTDS*/
				""
			),
			maxLines: 1,
			modalRows: 1,
			testid: "biz-info-email"
		}, {
			exampleQuestion: e ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			),
			fieldKey: "website",
			fieldLabel: e ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			),
			hint: e ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			),
			icon: c.jsx(r("WDSIconIcPublic.react"), { iconXstyle: y.fieldIcon }),
			label: e ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			),
			maxLines: 1,
			modalRows: 1,
			testid: "biz-info-website"
		}];
	}
	var v = {
		address: "ADDRESS",
		business_hours: "BUSINESS_HOURS",
		description: "DESCRIPTION",
		email: "EMAIL",
		website: "WEBSITE"
	};
	function S(e) {
		var t = e.allRequiredFilled, n = t === void 0 ? !1 : t, a = e.children, i = e.onBack;
		return c.jsxs(c.Fragment, { children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: c.jsxs("div", {
				className: "x1cy8zhl x78zum5 xdt5ytf",
				children: [c.jsx("span", { children: s._(
					/*BTDS*/
					""
				) }), c.jsx(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					type: "Body3",
					maxLines: 1,
					children: n ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					)
				})]
			}),
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: i
		}), c.jsxs(r("WAWebDrawerBody.react"), {
			xstyle: y.body,
			children: [c.jsxs("div", {
				className: "x6s0dn4 x78zum5 xdt5ytf x12xbjc7",
				children: [
					c.jsx(r("WDSIllustrationWdsPictoBusiness.react"), {}),
					c.jsx("div", {
						className: "x6s0dn4 xkh2ocl x78zum5 x8a3fw1 x1aj3ljl xl56j7k x16ovd2e x12xbjc7 xvtqlqk x1phvje8 x2b8uid",
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
						className: "x6s0dn4 xkh2ocl x78zum5 x8a3fw1 x1aj3ljl xl56j7k xvpt6g3 xvtqlqk x1phvje8 x2b8uid",
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
			}), a]
		})] });
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		return c.jsx(S, {
			onBack: e,
			children: c.jsx("div", {
				"data-testid": "biz-ai-business-info-loading",
				className: "x6s0dn4 x78zum5 x98rzlu xl56j7k",
				children: c.jsx(o("WAWebSpinner.react").Spinner, {
					color: "default",
					size: 24,
					stroke: 3
				})
			})
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t = e.onBack, n = e.onRefresh, a = e.onRetry, i = e.queryRef, l = e.queryVersion, s = l === void 0 ? 0 : l, u = e.ref;
		return _(function() {
			o("WAWebBizAILargeScreensLogEvents").logViewBusinessInfoDrawer();
		}, []), c.jsx(r("WAWebDrawer.react"), {
			ref: u,
			testid: "biz-ai-business-info-drawer",
			children: c.jsx(r("WAWebBizAIQueryBoundary.react"), {
				boundaryName: "biz-ai-business-info",
				onRetry: a,
				queryVersion: s,
				renderErrorChrome: function(n) {
					return c.jsx(S, {
						onBack: t,
						children: n
					});
				},
				testid: "biz-ai-business-info-error",
				children: c.jsx(m, {
					fallback: R(t),
					children: i != null ? c.jsx(k, {
						onBack: t,
						onRefresh: n,
						onRetry: a,
						queryRef: i
					}) : R(t)
				})
			})
		});
	}
	L.displayName = L.name + " [from " + i.id + "]";
	var E = e !== void 0 ? e : e = n("WAWebBizAIBusinessInfoDrawerQuery.graphql");
	function k(e) {
		var t = e.onBack, n = e.onRefresh, a = e.onRetry, i = e.queryRef, l = f(function() {
			return o("WAWebBizAiAgentGating").isMultiWebsiteEnabled();
		}, []), u = f(function() {
			return C();
		}, []), d = f(function() {
			return b(l);
		}, [l]), m = o("CometRelay").usePreloadedQuery(E, i), _ = r("useWAWebBizAIQueryRefreshError")(i.source), y = f(function() {
			var e, t = (e = m.xfb_meta_ai_biz_agent_wa_ai_home) == null || (e = e.knowledge) == null ? void 0 : e.websites;
			if (t == null) return [];
			var n = [];
			for (var r of t) {
				var o, a;
				if (r != null) {
					var i = (o = r.website_url) != null ? o : "";
					i.length !== 0 && n.push({
						website_type: (a = r.website_type) != null ? a : null,
						website_url: i
					});
				}
			}
			return n;
		}, [m.xfb_meta_ai_biz_agent_wa_ai_home]), R = f(function() {
			var e, t = {}, n = m.xfb_meta_ai_biz_agent_wa_ai_home, o = n == null ? void 0 : n.ordered_knowledge, a = [].concat(u, d);
			if (o != null) {
				for (var i of o) if (i != null) {
					var l = i.knowledge_type, s = i.string_data;
					if (!(l == null || s == null)) for (var c of a) v[c.fieldKey] === l && (t[c.fieldKey] = s);
				}
			}
			var p = n == null || (e = n.knowledge) == null ? void 0 : e.websites;
			if (p != null && p.length > 0) {
				var _ = r("WAWebCompactMapString")(p, function(e) {
					return e == null ? void 0 : e.website_url;
				}).join("\n");
				_.length > 0 && (t.website = _);
			}
			return t;
		}, [
			m.xfb_meta_ai_biz_agent_wa_ai_home,
			u,
			d
		]), L = f(function() {
			return u.every(function(e) {
				return !!R[e.fieldKey];
			});
		}, [u, R]), k = h(new Set()), I = k[0], T = k[1], D = g(new Set()), x = p(function(e) {
			var t;
			if (e.fieldKey === "website") {
				o("WAWebBizAIOpenWebsiteEditModal").openWebsiteEditModal({
					initialWebsites: y,
					onSaved: n
				});
				return;
			}
			var a = (t = R[e.fieldKey]) != null ? t : "";
			o("WAWebBizAIModal").openBizAIModal(c.jsx(r("WAWebBizAIKnowledgeEditModal.react"), {
				currentValue: a,
				exampleQuestion: e.exampleQuestion,
				fieldKey: e.fieldKey,
				fieldLabel: e.fieldLabel,
				onClose: o("WAWebModalManager").closeModalManager,
				onSaved: function() {
					o("WAWebModalManager").ModalManager.close(), n();
				},
				rows: e.modalRows,
				title: e.label
			}));
		}, [
			y,
			R,
			n
		]), $ = p(function(e) {
			D.current.has(e.fieldKey) || (D.current.add(e.fieldKey), T(function(t) {
				var n = new Set(t);
				return n.add(e.fieldKey), n;
			}), o("WAWebBizAILargeScreensLogEvents").logClickDeleteSource(), o("WAWebBizAiExampleResponseUpdateMutation").updateKnowledge(o("WAWebBizAiKnowledgeUtils").buildKnowledgeInput(e.fieldKey, "")).then(function(e) {
				o("WAWebBizAILargeScreensLogEvents").logApiDeleteSourceResult(e.isSuccess), e.isSuccess ? (o("WAWebBizAiSaveUtils").showDeletedToast(), n()) : o("WAWebBizAiSaveUtils").showErrorToast();
			}).catch(function() {
				o("WAWebBizAILargeScreensLogEvents").logApiDeleteSourceResult(!1), o("WAWebBizAiSaveUtils").showErrorToast();
			}).finally(function() {
				D.current.delete(e.fieldKey), T(function(t) {
					var n = new Set(t);
					return n.delete(e.fieldKey), n;
				});
			}));
		}, [n]);
		return c.jsxs(S, {
			allRequiredFilled: L,
			onBack: t,
			children: [
				_ && a != null ? c.jsx(r("WAWebBizAIQueryRefreshBanner.react"), {
					onRetry: a,
					testid: "biz-ai-business-info-refresh"
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
				u.map(function(e) {
					return c.jsx(o("WAWebBizAIFieldItem.react").WAWebBizAIFieldItem, {
						deleting: I.has(e.fieldKey),
						field: e,
						hasValue: !!R[e.fieldKey],
						value: R[e.fieldKey],
						onEdit: function() {
							return x(e);
						},
						onDelete: function() {
							return $(e);
						}
					}, e.testid);
				}),
				c.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 }),
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
				d.map(function(e) {
					var t = e.fieldKey === "website" && y.length > 1 ? babelHelpers.extends({}, e, { maxLines: y.length }) : e;
					return c.jsx(o("WAWebBizAIFieldItem.react").WAWebBizAIFieldItem, {
						deleting: I.has(e.fieldKey),
						field: t,
						hasValue: !!R[e.fieldKey],
						value: R[e.fieldKey],
						onEdit: function() {
							return x(e);
						},
						onDelete: function() {
							return $(e);
						}
					}, e.testid);
				})
			]
		});
	}
	k.displayName = k.name + " [from " + i.id + "]", l.WAWebBizAIBusinessInfoDrawer = L, l.BusinessInfoDrawerQuery = E;
}), 226);
