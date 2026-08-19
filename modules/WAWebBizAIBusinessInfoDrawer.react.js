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
		var t = o("react-compiler-runtime").c(18), n = e.allRequiredFilled, a = e.children, i = e.onBack, l = n === void 0 ? !1 : n, u, d;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (u = { className: "x1cy8zhl x78zum5 xdt5ytf" }, d = c.jsx("span", { children: s._(
			/*BTDS*/
			""
		) }), t[0] = u, t[1] = d) : (u = t[0], d = t[1]);
		var m;
		t[2] !== l ? (m = c.jsxs("div", babelHelpers.extends({}, u, { children: [d, c.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body3",
			maxLines: 1,
			children: l ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			)
		})] })), t[2] = l, t[3] = m) : m = t[3];
		var p;
		t[4] !== i || t[5] !== m ? (p = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: m,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: i
		}), t[4] = i, t[5] = m, t[6] = p) : p = t[6];
		var _, f, g;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (_ = { className: "x6s0dn4 x78zum5 xdt5ytf x12xbjc7" }, f = c.jsx(r("WDSIllustrationWdsPictoBusiness.react"), {}), g = { className: "x6s0dn4 xkh2ocl x78zum5 x8a3fw1 x1aj3ljl xl56j7k x16ovd2e x12xbjc7 xvtqlqk x1phvje8 x2b8uid" }, t[7] = _, t[8] = f, t[9] = g) : (_ = t[7], f = t[8], g = t[9]);
		var h, C;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (C = c.jsx("div", babelHelpers.extends({}, g, { children: c.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Headline2",
			maxLines: 1,
			children: s._(
				/*BTDS*/
				""
			)
		}) })), h = { className: "x6s0dn4 xkh2ocl x78zum5 x8a3fw1 x1aj3ljl xl56j7k xvpt6g3 xvtqlqk x1phvje8 x2b8uid" }, t[10] = h, t[11] = C) : (h = t[10], C = t[11]);
		var b;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (b = c.jsxs("div", babelHelpers.extends({}, _, { children: [
			f,
			C,
			c.jsx("div", babelHelpers.extends({}, h, { children: c.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Body1",
				children: s._(
					/*BTDS*/
					""
				)
			}) }))
		] })), t[12] = b) : b = t[12];
		var v;
		t[13] !== a ? (v = c.jsxs(r("WAWebDrawerBody.react"), {
			xstyle: y.body,
			children: [b, a]
		}), t[13] = a, t[14] = v) : v = t[14];
		var S;
		return t[15] !== v || t[16] !== p ? (S = c.jsxs(c.Fragment, { children: [p, v] }), t[15] = v, t[16] = p, t[17] = S) : S = t[17], S;
	}
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
		var t = o("react-compiler-runtime").c(21), n = e.onBack, a = e.onRefresh, i = e.onRetry, l = e.queryRef, s = e.queryVersion, u = e.ref, d = s === void 0 ? 0 : s, p;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (p = [], t[0] = p) : p = t[0], _(E, p);
		var f;
		t[1] !== n ? (f = function(t) {
			return c.jsx(S, {
				onBack: n,
				children: t
			});
		}, t[1] = n, t[2] = f) : f = t[2];
		var g;
		t[3] !== n ? (g = R(n), t[3] = n, t[4] = g) : g = t[4];
		var h;
		t[5] !== n || t[6] !== a || t[7] !== i || t[8] !== l ? (h = l != null ? c.jsx(I, {
			onBack: n,
			onRefresh: a,
			onRetry: i,
			queryRef: l
		}) : R(n), t[5] = n, t[6] = a, t[7] = i, t[8] = l, t[9] = h) : h = t[9];
		var y;
		t[10] !== g || t[11] !== h ? (y = c.jsx(m, {
			fallback: g,
			children: h
		}), t[10] = g, t[11] = h, t[12] = y) : y = t[12];
		var C;
		t[13] !== i || t[14] !== d || t[15] !== f || t[16] !== y ? (C = c.jsx(r("WAWebBizAIQueryBoundary.react"), {
			boundaryName: "biz-ai-business-info",
			onRetry: i,
			queryVersion: d,
			renderErrorChrome: f,
			testid: "biz-ai-business-info-error",
			children: y
		}), t[13] = i, t[14] = d, t[15] = f, t[16] = y, t[17] = C) : C = t[17];
		var b;
		return t[18] !== u || t[19] !== C ? (b = c.jsx(r("WAWebDrawer.react"), {
			ref: u,
			testid: "biz-ai-business-info-drawer",
			children: C
		}), t[18] = u, t[19] = C, t[20] = b) : b = t[20], b;
	}
	function E() {
		o("WAWebBizAILargeScreensLogEvents").logViewBusinessInfoDrawer();
	}
	var k = e !== void 0 ? e : e = n("WAWebBizAIBusinessInfoDrawerQuery.graphql");
	function I(e) {
		var t = e.onBack, n = e.onRefresh, a = e.onRetry, i = e.queryRef, l = f(function() {
			return o("WAWebBizAiAgentGating").isMultiWebsiteEnabled();
		}, []), u = f(function() {
			return C();
		}, []), d = f(function() {
			return b(l);
		}, [l]), m = o("CometRelay").usePreloadedQuery(k, i), _ = r("useWAWebBizAIQueryRefreshError")(i.source), y = f(function() {
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
		}, [u, R]), E = h(new Set()), I = E[0], T = E[1], D = g(new Set()), x = p(function(e) {
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
	I.displayName = I.name + " [from " + i.id + "]", l.WAWebBizAIBusinessInfoDrawer = L, l.BusinessInfoDrawerQuery = k;
}), 226);
