__d("WAWebBizAIBestsellersDrawer.react", [
	"fbt",
	"CometRelay",
	"WALogger",
	"WAWebBizAIBestsellersDrawerQuery.graphql",
	"WAWebBizAILargeScreensLogEvents",
	"WAWebBizAIQueryBoundary.react",
	"WAWebBizAIQueryRefreshBanner.react",
	"WAWebBizAiExampleResponseUpdateMutation",
	"WAWebBizAiSaveUtils",
	"WAWebBizProductCatalogAction",
	"WAWebCurrencyUtils",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebSpinner.react",
	"WAWebUserPrefsMeUser",
	"WDSBaseCheckbox.react",
	"WDSButton.react",
	"WDSFocusStateStyles",
	"WDSIconIcAdd.react",
	"WDSIconIcShoppingCart.react",
	"WDSIllustrationWdsPictoAddCart.react",
	"WDSText.react",
	"WDSTooltip.react",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"react",
	"stylex",
	"useWAWebAsync",
	"useWAWebBizAIQueryRefreshError"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p = m || (m = o("react")), _ = m, f = _.Suspense, g = _.useCallback, h = _.useEffect, y = _.useMemo, C = _.useState, b = {
		body: {
			paddingInlineStart: "x1iw51ew",
			paddingInlineEnd: "xde1mab",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		productRow: {
			alignItems: "x6s0dn4",
			alignSelf: "xkh2ocl",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			cursor: "x1ypdohk",
			display: "x78zum5",
			rowGap: "x8a3fw1",
			columnGap: "x1aj3ljl",
			height: "xjp8j0k",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineEnd: "xvtqlqk",
			paddingInlineStart: "x1iw51ew",
			$$css: !0
		},
		productRowHover: {
			":hover_backgroundColor": "x1ubxc9n",
			$$css: !0
		}
	};
	function v(e) {
		var t = e.currency, n = e.price, a = e.sale_price;
		if (n == null || t == null) return null;
		var i = o("WAWebCurrencyUtils").formatAmount1000(t, Number(n));
		if (a != null) {
			var l = o("WAWebCurrencyUtils").formatAmount1000(t, Number(a));
			return p.jsxs(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				children: [
					l,
					" ",
					p.jsx("span", {
						style: { textDecoration: "line-through" },
						children: i
					})
				]
			});
		}
		return p.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			children: i
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S() {
		return R.apply(this, arguments);
	}
	function R() {
		return R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(), t = yield o("WAWebBizProductCatalogAction").queryCatalog(e, null, 100, 100, 100, null);
			return t.data.filter(function(e) {
				return e.name != null && e.name.length > 0;
			});
		}), R.apply(this, arguments);
	}
	function L(e) {
		var t = e.children, n = e.headerAction, a = e.onBack;
		return p.jsxs(p.Fragment, { children: [p.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: s._(
				/*BTDS*/
				""
			),
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: a,
			rightActionElement: n
		}), p.jsx(r("WAWebDrawerBody.react"), {
			xstyle: b.body,
			children: t
		})] });
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(e) {
		return p.jsx(L, {
			onBack: e,
			children: p.jsx("div", {
				"data-testid": "biz-ai-bestsellers-loading",
				className: "x6s0dn4 x78zum5 x98rzlu xl56j7k",
				children: p.jsx(o("WAWebSpinner.react").Spinner, {
					color: "default",
					size: 24,
					stroke: 3
				})
			})
		});
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(e) {
		var t = e.onAddItems, n = e.onBack, a = e.onRetry, i = e.queryRef, l = e.queryVersion, s = l === void 0 ? 0 : l, u = e.ref;
		return h(function() {
			o("WAWebBizAILargeScreensLogEvents").logViewBestsellersDrawer();
		}, []), p.jsx(r("WAWebDrawer.react"), {
			ref: u,
			testid: "biz-ai-bestsellers-drawer",
			children: p.jsx(r("WAWebBizAIQueryBoundary.react"), {
				boundaryName: "biz-ai-bestsellers",
				onRetry: a,
				queryVersion: s,
				renderErrorChrome: function(t) {
					return p.jsx(L, {
						onBack: n,
						children: t
					});
				},
				testid: "biz-ai-bestsellers-error",
				children: p.jsx(f, {
					fallback: E(n),
					children: i != null ? p.jsx(T, {
						onAddItems: t,
						onBack: n,
						onRetry: a,
						queryRef: i
					}) : E(n)
				})
			})
		});
	}
	k.displayName = k.name + " [from " + i.id + "]";
	var I = e !== void 0 ? e : e = n("WAWebBizAIBestsellersDrawerQuery.graphql");
	function T(e) {
		var t = e.onAddItems, n = e.onBack, a = e.onRetry, i = e.queryRef, l = o("CometRelay").usePreloadedQuery(I, i), m = r("useWAWebBizAIQueryRefreshError")(i.source), _ = y(function() {
			var e, t;
			return ((e = (t = l.xfb_meta_ai_biz_agent_wa_ai_home) == null || (t = t.knowledge) == null ? void 0 : t.bestsellers) != null ? e : []).map(function(e) {
				return e == null ? void 0 : e.id;
			}).filter(function(e) {
				return e != null;
			});
		}, [l.xfb_meta_ai_biz_agent_wa_ai_home]), f = r("useWAWebAsync")(S, []), R = y(function() {
			var e;
			return (e = f.value) != null ? e : [];
		}, [f.value]), E = y(function() {
			var e = new Set(R.map(function(e) {
				return e.id;
			}));
			return _.filter(function(t) {
				return e.has(t);
			});
		}, [R, _]), k = C(null), T = k[0], D = k[1], x = C(null), $ = x[0], P = x[1], N = C(!1), M = N[0], w = N[1], A = T != null ? T : E, F = $ != null ? $ : A;
		h(function() {
			f.error != null && (o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["bestseller catalog fetch failed"]))).catching(r("getErrorSafe")(f.error)).sendLogs("biz-ai-bestseller-catalog-fetch"), o("WAWebBizAiSaveUtils").showErrorToast());
		}, [f.error]);
		var O = g(function(e) {
			o("WAWebBizAILargeScreensLogEvents").logClickToggleBestseller(), P(function(t) {
				var n = t != null ? t : A;
				return n.includes(e) ? n.filter(function(t) {
					return t !== e;
				}) : [].concat(n, [e]);
			});
		}, [A]), B = F.length !== A.length || F.some(function(e) {
			return !A.includes(e);
		}), W = g(function() {
			if (!(M || !B)) {
				o("WAWebBizAILargeScreensLogEvents").logClickSaveBestsellers(), w(!0);
				var e = [].concat(F);
				o("WAWebBizAiExampleResponseUpdateMutation").updateKnowledge({ bestsellers: e }).then(function(t) {
					o("WAWebBizAILargeScreensLogEvents").logApiSaveBestsellersResult(t.isSuccess), t.isSuccess ? (D(e), P(null), o("WAWebBizAiSaveUtils").showUpdatedToast()) : o("WAWebBizAiSaveUtils").showErrorToast(), w(!1);
				}).catch(function(e) {
					o("WAWebBizAILargeScreensLogEvents").logApiSaveBestsellersResult(!1), o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["bestseller save failed"]))).catching(r("getErrorSafe")(e)).sendLogs("biz-ai-bestseller-save"), o("WAWebBizAiSaveUtils").showErrorToast(), w(!1);
				});
			}
		}, [
			B,
			M,
			F
		]);
		if (f.loading) return p.jsx(L, {
			onBack: n,
			children: p.jsx("div", {
				className: "x6s0dn4 x78zum5 x98rzlu xl56j7k",
				children: p.jsx(o("WAWebSpinner.react").Spinner, {
					color: "default",
					size: 24,
					stroke: 3
				})
			})
		});
		var q = R.length === 0 ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), U = null;
		return R.length === 0 && t != null ? U = p.jsx("span", { children: p.jsx(r("WDSTooltip.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			children: p.jsx(r("WDSButton.react"), {
				Icon: r("WDSIconIcAdd.react"),
				onPress: t,
				variant: "borderless",
				size: "small",
				"aria-label": s._(
					/*BTDS*/
					""
				).toString(),
				testid: "bestsellers-header-add-btn"
			})
		}) }) : R.length > 0 && (U = p.jsx(r("WDSButton.react"), {
			variant: "filled",
			size: "small",
			label: s._(
				/*BTDS*/
				""
			),
			onPress: W,
			disabled: !B || M,
			loading: M,
			testid: "bestsellers-save-btn"
		})), p.jsxs(L, {
			headerAction: U,
			onBack: n,
			children: [
				m && a != null ? p.jsx(r("WAWebBizAIQueryRefreshBanner.react"), {
					onRetry: a,
					testid: "biz-ai-bestsellers-refresh"
				}) : null,
				p.jsxs("div", {
					className: "x6s0dn4 x78zum5 xdt5ytf x12xbjc7",
					children: [
						p.jsx(r("WDSIllustrationWdsPictoAddCart.react"), {}),
						p.jsx("div", {
							className: "x6s0dn4 xkh2ocl x78zum5 x8a3fw1 x1aj3ljl x16ovd2e x12xbjc7 xvtqlqk x1phvje8",
							children: p.jsx(r("WDSText.react"), {
								colorName: "contentDefault",
								type: "Headline2",
								maxLines: 1,
								children: s._(
									/*BTDS*/
									""
								)
							})
						}),
						p.jsx("div", {
							className: "x6s0dn4 xkh2ocl x78zum5 x8a3fw1 x1aj3ljl xvpt6g3 xvtqlqk x1phvje8",
							children: p.jsx(r("WDSText.react"), {
								colorName: "contentDefault",
								type: "Body1",
								children: q
							})
						}),
						R.length === 0 && t != null ? p.jsx("div", {
							className: "x9f619 x78zum5 x16ovd2e x1phvje8 xcldk2z xh8yej3",
							children: p.jsx(r("WDSButton.react"), {
								variant: "outline",
								size: "medium",
								widthMode: "flexible",
								Icon: r("WDSIconIcAdd.react"),
								label: s._(
									/*BTDS*/
									""
								),
								onPress: t,
								testid: "bestsellers-add-items-btn"
							})
						}) : null
					]
				}),
				R.map(function(e, t) {
					var n = F.includes(e.id), a = e.image_cdn_urls.length > 0 ? e.image_cdn_urls[0].value : null;
					return p.jsxs("div", babelHelpers.extends({
						"data-testid": "bestseller-item-" + t,
						role: "button",
						tabIndex: 0,
						onClick: function() {
							return O(e.id);
						},
						onKeyDown: function(n) {
							(n.key === "Enter" || n.key === " ") && (n.preventDefault(), O(e.id));
						}
					}, (d || (d = r("stylex"))).props(b.productRow, b.productRowHover, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus), { children: [
						p.jsx(r("WDSBaseCheckbox.react"), {
							value: n,
							testid: "bestseller-checkbox-" + t
						}),
						a != null ? p.jsx("img", {
							className: "xyi3aci xwf5gio x1p453bz x1suzm8a x2lah0s xwzfr38 xl1xv1r x1dmp6jm",
							src: a,
							alt: e.name
						}) : p.jsx("div", {
							className: "x6s0dn4 x1h3rtpe xyi3aci xwf5gio x1p453bz x1suzm8a xhslqc4 x78zum5 x2lah0s xwzfr38 xl56j7k x1dmp6jm",
							children: p.jsx(r("WDSIconIcShoppingCart.react"), {})
						}),
						p.jsxs("div", {
							className: "x1iyjqo2 xeuugli x6ikm8r x10wlt62",
							children: [
								p.jsx(r("WDSText.react"), {
									colorName: "contentDefault",
									type: "Body1",
									maxLines: 1,
									children: e.name
								}),
								v(e),
								e.description != null && e.description.length > 0 ? p.jsx(r("WDSText.react"), {
									colorName: "contentDeemphasized",
									type: "Body2",
									maxLines: 1,
									children: e.description
								}) : null
							]
						})
					] }), e.id);
				})
			]
		});
	}
	T.displayName = T.name + " [from " + i.id + "]", l.WAWebBizAIBestsellersDrawer = k, l.BestsellersDrawerQuery = I;
}), 226);
