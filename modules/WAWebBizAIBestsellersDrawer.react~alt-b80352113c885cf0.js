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
	"getErrorSafe",
	"react",
	"react-compiler-runtime",
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
	async function S() {
		var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(), t = await o("WAWebBizProductCatalogAction").queryCatalog(e, null, 100, 100, 100, null);
		return t.data.filter(function(e) {
			return e.name != null && e.name.length > 0;
		});
	}
	function R(e) {
		var t = o("react-compiler-runtime").c(9), n = e.children, a = e.headerAction, i = e.onBack, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
			/*BTDS*/
			""
		), t[0] = l) : l = t[0];
		var u;
		t[1] !== a || t[2] !== i ? (u = p.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: l,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: i,
			rightActionElement: a
		}), t[1] = a, t[2] = i, t[3] = u) : u = t[3];
		var c;
		t[4] !== n ? (c = p.jsx(r("WAWebDrawerBody.react"), {
			xstyle: b.body,
			children: n
		}), t[4] = n, t[5] = c) : c = t[5];
		var d;
		return t[6] !== u || t[7] !== c ? (d = p.jsxs(p.Fragment, { children: [u, c] }), t[6] = u, t[7] = c, t[8] = d) : d = t[8], d;
	}
	function L(e) {
		return p.jsx(R, {
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
	L.displayName = L.name + " [from " + i.id + "]";
	function E(e) {
		var t = o("react-compiler-runtime").c(21), n = e.onAddItems, a = e.onBack, i = e.onRetry, l = e.queryRef, s = e.queryVersion, u = e.ref, c = s === void 0 ? 0 : s, d;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (d = [], t[0] = d) : d = t[0], h(k, d);
		var m;
		t[1] !== a ? (m = function(t) {
			return p.jsx(R, {
				onBack: a,
				children: t
			});
		}, t[1] = a, t[2] = m) : m = t[2];
		var _;
		t[3] !== a ? (_ = L(a), t[3] = a, t[4] = _) : _ = t[4];
		var g;
		t[5] !== n || t[6] !== a || t[7] !== i || t[8] !== l ? (g = l != null ? p.jsx(T, {
			onAddItems: n,
			onBack: a,
			onRetry: i,
			queryRef: l
		}) : L(a), t[5] = n, t[6] = a, t[7] = i, t[8] = l, t[9] = g) : g = t[9];
		var y;
		t[10] !== _ || t[11] !== g ? (y = p.jsx(f, {
			fallback: _,
			children: g
		}), t[10] = _, t[11] = g, t[12] = y) : y = t[12];
		var C;
		t[13] !== i || t[14] !== c || t[15] !== m || t[16] !== y ? (C = p.jsx(r("WAWebBizAIQueryBoundary.react"), {
			boundaryName: "biz-ai-bestsellers",
			onRetry: i,
			queryVersion: c,
			renderErrorChrome: m,
			testid: "biz-ai-bestsellers-error",
			children: y
		}), t[13] = i, t[14] = c, t[15] = m, t[16] = y, t[17] = C) : C = t[17];
		var b;
		return t[18] !== u || t[19] !== C ? (b = p.jsx(r("WAWebDrawer.react"), {
			ref: u,
			testid: "biz-ai-bestsellers-drawer",
			children: C
		}), t[18] = u, t[19] = C, t[20] = b) : b = t[20], b;
	}
	function k() {
		o("WAWebBizAILargeScreensLogEvents").logViewBestsellersDrawer();
	}
	var I = e !== void 0 ? e : e = n("WAWebBizAIBestsellersDrawerQuery.graphql");
	function T(e) {
		var t, n = o("react-compiler-runtime").c(66), a = e.onAddItems, i = e.onBack, l = e.onRetry, m = e.queryRef, _ = o("CometRelay").usePreloadedQuery(I, m), f = r("useWAWebBizAIQueryRefreshError")(m.source), g;
		if (n[0] !== ((t = _.xfb_meta_ai_biz_agent_wa_ai_home) == null || (t = t.knowledge) == null ? void 0 : t.bestsellers)) {
			var y, L, E;
			g = ((y = (L = _.xfb_meta_ai_biz_agent_wa_ai_home) == null || (L = L.knowledge) == null ? void 0 : L.bestsellers) != null ? y : []).map($).filter(x), n[0] = (E = _.xfb_meta_ai_biz_agent_wa_ai_home) == null || (E = E.knowledge) == null ? void 0 : E.bestsellers, n[1] = g;
		} else g = n[1];
		var k = g, T;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (T = [], n[2] = T) : T = n[2];
		var P = r("useWAWebAsync")(S, T), N;
		if (n[3] !== P.value) {
			var M;
			N = (M = P.value) != null ? M : [], n[3] = P.value, n[4] = N;
		} else N = n[4];
		var w = N, A;
		n[5] !== w ? (A = new Set(w.map(D)), n[5] = w, n[6] = A) : A = n[6];
		var F = A, O;
		n[7] !== F || n[8] !== k ? (O = k.filter(function(e) {
			return F.has(e);
		}), n[7] = F, n[8] = k, n[9] = O) : O = n[9];
		var B = O, W = C(null), q = W[0], U = W[1], V = C(null), H = V[0], G = V[1], z = C(!1), j = z[0], K = z[1], Q = q != null ? q : B, X = H != null ? H : Q, Y, J;
		n[10] !== P.error ? (Y = function() {
			P.error != null && (o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["bestseller catalog fetch failed"]))).catching(r("getErrorSafe")(P.error)).sendLogs("biz-ai-bestseller-catalog-fetch"), o("WAWebBizAiSaveUtils").showErrorToast());
		}, J = [P.error], n[10] = P.error, n[11] = Y, n[12] = J) : (Y = n[11], J = n[12]), h(Y, J);
		var Z;
		n[13] !== Q ? (Z = function(t) {
			o("WAWebBizAILargeScreensLogEvents").logClickToggleBestseller(), G(function(e) {
				var n = e != null ? e : Q;
				return n.includes(t) ? n.filter(function(e) {
					return e !== t;
				}) : [].concat(n, [t]);
			});
		}, n[13] = Q, n[14] = Z) : Z = n[14];
		var ee = Z, te;
		n[15] !== Q || n[16] !== X ? (te = X.length !== Q.length || X.some(function(e) {
			return !Q.includes(e);
		}), n[15] = Q, n[16] = X, n[17] = te) : te = n[17];
		var ne = te, re;
		n[18] !== ne || n[19] !== j || n[20] !== X ? (re = function() {
			if (!(j || !ne)) {
				o("WAWebBizAILargeScreensLogEvents").logClickSaveBestsellers(), K(!0);
				var e = [].concat(X);
				o("WAWebBizAiExampleResponseUpdateMutation").updateKnowledge({ bestsellers: e }).then(function(t) {
					o("WAWebBizAILargeScreensLogEvents").logApiSaveBestsellersResult(t.isSuccess), t.isSuccess ? (U(e), G(null), o("WAWebBizAiSaveUtils").showUpdatedToast()) : o("WAWebBizAiSaveUtils").showErrorToast(), K(!1);
				}).catch(function(e) {
					o("WAWebBizAILargeScreensLogEvents").logApiSaveBestsellersResult(!1), o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["bestseller save failed"]))).catching(r("getErrorSafe")(e)).sendLogs("biz-ai-bestseller-save"), o("WAWebBizAiSaveUtils").showErrorToast(), K(!1);
				});
			}
		}, n[18] = ne, n[19] = j, n[20] = X, n[21] = re) : re = n[21];
		var oe = re;
		if (P.loading) {
			var ae;
			n[22] === Symbol.for("react.memo_cache_sentinel") ? (ae = p.jsx("div", {
				className: "x6s0dn4 x78zum5 x98rzlu xl56j7k",
				children: p.jsx(o("WAWebSpinner.react").Spinner, {
					color: "default",
					size: 24,
					stroke: 3
				})
			}), n[22] = ae) : ae = n[22];
			var ie;
			return n[23] !== i ? (ie = p.jsx(R, {
				onBack: i,
				children: ae
			}), n[23] = i, n[24] = ie) : ie = n[24], ie;
		}
		var le;
		n[25] !== w.length ? (le = w.length === 0 ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), n[25] = w.length, n[26] = le) : le = n[26];
		var se = le, ue = null;
		if (w.length === 0 && a != null) {
			var ce;
			n[27] === Symbol.for("react.memo_cache_sentinel") ? (ce = s._(
				/*BTDS*/
				""
			), n[27] = ce) : ce = n[27];
			var de;
			n[28] === Symbol.for("react.memo_cache_sentinel") ? (de = s._(
				/*BTDS*/
				""
			).toString(), n[28] = de) : de = n[28];
			var me;
			n[29] !== a || n[30] !== de ? (me = p.jsx("span", { children: p.jsx(r("WDSTooltip.react"), {
				label: ce,
				children: p.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcAdd.react"),
					onPress: a,
					variant: "borderless",
					size: "small",
					"aria-label": de,
					testid: "bestsellers-header-add-btn"
				})
			}) }), n[29] = a, n[30] = de, n[31] = me) : me = n[31], ue = me;
		} else if (w.length > 0) {
			var pe;
			n[32] === Symbol.for("react.memo_cache_sentinel") ? (pe = s._(
				/*BTDS*/
				""
			), n[32] = pe) : pe = n[32];
			var _e = !ne || j, fe;
			n[33] !== oe || n[34] !== j || n[35] !== _e ? (fe = p.jsx(r("WDSButton.react"), {
				variant: "filled",
				size: "small",
				label: pe,
				onPress: oe,
				disabled: _e,
				loading: j,
				testid: "bestsellers-save-btn"
			}), n[33] = oe, n[34] = j, n[35] = _e, n[36] = fe) : fe = n[36], ue = fe;
		}
		var ge = ue, he;
		n[37] !== f || n[38] !== l ? (he = f && l != null ? p.jsx(r("WAWebBizAIQueryRefreshBanner.react"), {
			onRetry: l,
			testid: "biz-ai-bestsellers-refresh"
		}) : null, n[37] = f, n[38] = l, n[39] = he) : he = n[39];
		var ye, Ce, be;
		n[40] === Symbol.for("react.memo_cache_sentinel") ? (ye = { className: "x6s0dn4 x78zum5 xdt5ytf x12xbjc7" }, Ce = p.jsx(r("WDSIllustrationWdsPictoAddCart.react"), {}), be = { className: "x6s0dn4 xkh2ocl x78zum5 x8a3fw1 x1aj3ljl x16ovd2e x12xbjc7 xvtqlqk x1phvje8" }, n[40] = ye, n[41] = Ce, n[42] = be) : (ye = n[40], Ce = n[41], be = n[42]);
		var ve, Se;
		n[43] === Symbol.for("react.memo_cache_sentinel") ? (ve = p.jsx("div", babelHelpers.extends({}, be, { children: p.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Headline2",
			maxLines: 1,
			children: s._(
				/*BTDS*/
				""
			)
		}) })), Se = { className: "x6s0dn4 xkh2ocl x78zum5 x8a3fw1 x1aj3ljl xvpt6g3 xvtqlqk x1phvje8" }, n[43] = ve, n[44] = Se) : (ve = n[43], Se = n[44]);
		var Re;
		n[45] !== se ? (Re = p.jsx("div", babelHelpers.extends({}, Se, { children: p.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			children: se
		}) })), n[45] = se, n[46] = Re) : Re = n[46];
		var Le;
		n[47] !== a || n[48] !== w.length ? (Le = w.length === 0 && a != null ? p.jsx("div", {
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
				onPress: a,
				testid: "bestsellers-add-items-btn"
			})
		}) : null, n[47] = a, n[48] = w.length, n[49] = Le) : Le = n[49];
		var Ee;
		n[50] !== Re || n[51] !== Le ? (Ee = p.jsxs("div", babelHelpers.extends({}, ye, { children: [
			Ce,
			ve,
			Re,
			Le
		] })), n[50] = Re, n[51] = Le, n[52] = Ee) : Ee = n[52];
		var ke;
		if (n[53] !== w || n[54] !== X || n[55] !== ee) {
			var Ie;
			n[57] !== X || n[58] !== ee ? (Ie = function(t, n) {
				var e = X.includes(t.id), a = t.image_cdn_urls.length > 0 ? t.image_cdn_urls[0].value : null;
				return p.jsxs("div", babelHelpers.extends({
					"data-testid": "bestseller-item-" + n,
					role: "button",
					tabIndex: 0,
					onClick: function() {
						return ee(t.id);
					},
					onKeyDown: function(n) {
						(n.key === "Enter" || n.key === " ") && (n.preventDefault(), ee(t.id));
					}
				}, (d || (d = r("stylex"))).props(b.productRow, b.productRowHover, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus), { children: [
					p.jsx(r("WDSBaseCheckbox.react"), {
						value: e,
						testid: "bestseller-checkbox-" + n
					}),
					a != null ? p.jsx("img", {
						className: "xyi3aci xwf5gio x1p453bz x1suzm8a x2lah0s xwzfr38 xl1xv1r x1dmp6jm",
						src: a,
						alt: t.name
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
								children: t.name
							}),
							v(t),
							t.description != null && t.description.length > 0 ? p.jsx(r("WDSText.react"), {
								colorName: "contentDeemphasized",
								type: "Body2",
								maxLines: 1,
								children: t.description
							}) : null
						]
					})
				] }), t.id);
			}, n[57] = X, n[58] = ee, n[59] = Ie) : Ie = n[59], ke = w.map(Ie), n[53] = w, n[54] = X, n[55] = ee, n[56] = ke;
		} else ke = n[56];
		var Te;
		return n[60] !== ue || n[61] !== i || n[62] !== he || n[63] !== Ee || n[64] !== ke ? (Te = p.jsxs(R, {
			headerAction: ge,
			onBack: i,
			children: [
				he,
				Ee,
				ke
			]
		}), n[60] = ue, n[61] = i, n[62] = he, n[63] = Ee, n[64] = ke, n[65] = Te) : Te = n[65], Te;
	}
	function D(e) {
		return e.id;
	}
	function x(e) {
		return e != null;
	}
	function $(e) {
		return e == null ? void 0 : e.id;
	}
	l.WAWebBizAIBestsellersDrawer = E, l.BestsellersDrawerQuery = I;
}), 226);
