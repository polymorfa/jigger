__d("WAWebBizAdCreationTargetingModalInterestsComponent.react", [
	"fbt",
	"WAWebBizAdCreationInterestsCategoryView.react",
	"WAWebBizAdCreationInterestsRootBrowseView.react",
	"WAWebBizAdCreationInterestsSearchResultsView.react",
	"WAWebBizAdCreationInterestsSelectedView.react",
	"WAWebBizAdCreationInterestsSuggestedView.react",
	"WAWebBizAdCreationTargetingModalInterestsUtils",
	"WAWebBizAdCreationTargetingModalPage.react",
	"WAWebBizNativeAdsGatingUtils",
	"WAWebDivider.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebSearchInput",
	"WDSButton.react",
	"WDSIconIcArrowBack.react",
	"WDSSpinner.react",
	"WDSText.react",
	"react",
	"useWAWebBizAdCreationBrowseInterests",
	"useWAWebBizAdCreationBrowseRoots",
	"useWAWebBizAdCreationSearchInterests",
	"useWAWebBizAdCreationSuggestedInterests",
	"useWAWebTimeout"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useState, p = {
		emptyState: {
			alignItems: "x6s0dn4",
			flex: "x98rzlu",
			justifyContent: "xl56j7k",
			paddingTop: "xl7twdi",
			paddingBottom: "xvg22vi",
			$$css: !0
		},
		footerRow: {
			paddingTop: "x1p57kb1",
			$$css: !0
		}
	}, _ = [], f = ["Interests"];
	function g(e, t, n, r) {
		var o, a, i, l, u = t ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
		return e === "category" ? (o = (a = n == null || (i = n.node) == null ? void 0 : i.name) != null ? a : t ? n == null ? void 0 : n.pathName : null) != null ? o : u : e === "root" && t && (l = r == null ? void 0 : r[0]) != null ? l : u;
	}
	function h(e) {
		return e ? {
			placeholder: r("WAWebFbtCommon")("Search"),
			subtext: s._(
				/*BTDS*/
				""
			)
		} : {
			placeholder: s._(
				/*BTDS*/
				""
			),
			subtext: s._(
				/*BTDS*/
				""
			)
		};
	}
	function y(e) {
		var t, n, a = e.adAccountID, i = e.environment, l = e.initialFlexibleSpec, c = e.onBack, y = e.onNext, C = m(""), b = C[0], v = C[1], S = m(0), R = S[0], L = S[1], E = m(_), k = E[0], I = E[1], T = m(function() {
			return o("WAWebBizAdCreationTargetingModalInterestsUtils").convertFlexibleSpecToInterests(l);
		}), D = T[0], x = T[1], $ = o("WAWebBizNativeAdsGatingUtils").nativeAdsDetailedTargetingEnabled(), P = m(function() {
			return $ ? null : f;
		}), N = P[0], M = P[1], w = k.length > 0 ? k[k.length - 1] : null, A = $ && N == null, F = r("useWAWebBizAdCreationBrowseInterests")(a, i, N != null ? N : f, !A), O = F.interestTree, B = F.isLoading, W = r("useWAWebBizAdCreationBrowseRoots")(a, i, $), q = W.isLoading, U = W.rootRows, V = r("useWAWebBizAdCreationSearchInterests")(a, i), H = V.clearSearchResults, G = V.fetchSearchResults, z = V.isSearching, j = V.searchResults, K = r("useWAWebBizAdCreationSuggestedInterests")(a, i, D), Q = K.isLoadingSuggestions, X = K.suggestedInterests, Y = o("useWAWebTimeout").useManualTimeout(function() {
			G(b);
		}), J = Y[0], Z = Y[1], ee = d(function(e) {
			v(e), Z(), e.trim().length > 0 ? J(300) : H();
		}, [
			Z,
			J,
			H
		]), te = d(function(e) {
			I(function(t) {
				return $ ? [].concat(t, [e]) : [e];
			}), v(""), H();
		}, [H, $]), ne = d(function() {
			I(function(e) {
				return $ ? e.slice(0, -1) : _;
			});
		}, [$]), re = d(function(e) {
			var t = e.pathName;
			t != null && M([t]);
		}, []), oe = d(function() {
			M(null);
		}, []), ae = d(function(e) {
			x(function(t) {
				var n = t.some(function(t) {
					var n, r;
					return ((n = t.node) == null ? void 0 : n.id) === ((r = e.node) == null ? void 0 : r.id);
				});
				return n ? t.filter(function(t) {
					var n, r;
					return ((n = t.node) == null ? void 0 : n.id) !== ((r = e.node) == null ? void 0 : r.id);
				}) : [].concat(t, [e]);
			});
		}, []), ie = d(function(e) {
			return D.some(function(t) {
				var n, r;
				return ((n = t.node) == null ? void 0 : n.id) === ((r = e.node) == null ? void 0 : r.id);
			});
		}, [D]), le = b.trim().length > 0, se = w != null, ue = D.length > 0, ce = (t = O == null || (n = O.children) == null || (n = n[0]) == null ? void 0 : n.children) != null ? t : _, de = (function(e) {
			return le ? "search" : se ? "category" : ue ? "selected" : A ? "picker" : "root";
		})(!0), me = d(function() {
			if (!$ || de === "selected" || D.length === 0) {
				if (!$ && le) {
					v(""), L(function(e) {
						return e + 1;
					}), H();
					return;
				}
				var e = o("WAWebBizAdCreationTargetingModalInterestsUtils").convertInterestsToFlexibleSpec(D, l);
				y == null || y(e);
				return;
			}
			v(""), L(function(e) {
				return e + 1;
			}), H(), I(_), M(null);
		}, [
			$,
			de,
			D,
			y,
			le,
			H,
			l
		]), pe = de === "search" ? z : de === "root" ? B : de === "picker" ? q : !1, _e = de === "search" ? u.jsx(r("WAWebBizAdCreationInterestsSearchResultsView.react"), {
			isInterestSelected: ie,
			onInterestToggle: ae,
			searchResults: j,
			showTargetType: $
		}) : de === "category" ? u.jsx(r("WAWebBizAdCreationInterestsCategoryView.react"), {
			category: w,
			isInterestSelected: ie,
			onCategoryClick: te,
			onInterestToggle: ae
		}) : de === "selected" ? u.jsxs(u.Fragment, { children: [u.jsx(r("WAWebBizAdCreationInterestsSelectedView.react"), {
			onInterestToggle: ae,
			selectedInterests: D,
			showTargetType: $
		}), u.jsx(r("WAWebBizAdCreationInterestsSuggestedView.react"), {
			isInterestSelected: ie,
			isLoadingSuggestions: Q,
			onInterestToggle: ae,
			showTargetType: $,
			suggestedInterests: X
		})] }) : de === "root" ? u.jsx(r("WAWebBizAdCreationInterestsRootBrowseView.react"), {
			interests: ce,
			onCategoryClick: te
		}) : de === "picker" ? u.jsx(r("WAWebBizAdCreationInterestsRootBrowseView.react"), {
			interests: U,
			onCategoryClick: re
		}) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + de);
		})(), fe = g(de, $, w, N), ge = h($), he = (function(e) {
			return de === "category" ? ne : de === "root" && $ ? oe : c;
		})(!0);
		return u.jsxs(r("WAWebBizAdCreationTargetingModalPage.react"), {
			headerContent: u.jsxs(u.Fragment, { children: [u.jsx(r("WDSButton.react"), {
				Icon: r("WDSIconIcArrowBack.react"),
				onPress: he,
				size: "medium",
				variant: "borderless"
			}), u.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Body1",
				children: fe
			})] }),
			children: [
				de !== "category" ? u.jsxs(u.Fragment, { children: [u.jsx(o("WAWebSearchInput").SearchInput, {
					onSearch: ee,
					padding: 0,
					placeholder: ge.placeholder
				}, R), u.jsx(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					type: "Body2",
					children: ge.subtext
				})] }) : null,
				u.jsx("div", babelHelpers.extends({ "data-testid": "biz_native_ads_interest_results_container" }, {
					0: { className: "x98rzlu x1ua1l7f x6ikm8r" },
					1: { className: "x98rzlu x1ua1l7f x6ikm8r x98l61r" }
				}[(de !== "category") << 0], { children: pe ? u.jsx(o("WAWebFlex.react").FlexColumn, {
					xstyle: p.emptyState,
					children: u.jsx(r("WDSSpinner.react"), { size: 40 })
				}) : _e })),
				u.jsx(r("WAWebDivider.react"), { direction: "horizontal" }),
				u.jsx(o("WAWebFlex.react").FlexRow, {
					justify: "end",
					xstyle: p.footerRow,
					children: u.jsx(r("WDSButton.react"), {
						label: $ && (de === "selected" || D.length === 0) ? s._(
							/*BTDS*/
							""
						) : r("WAWebFbtCommon")("Next"),
						onPress: me,
						size: "medium",
						testid: "biz_native_ads_interest_next_button",
						variant: "filled"
					})
				})
			]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 226);
