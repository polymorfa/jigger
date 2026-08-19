__d("WAWebBizAdCreationTargetingModalEditRegionalLocationComponent.react", [
	"fbt",
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdCreationTargetingModalLocationConflictUtils",
	"WAWebBizAdCreationTargetingModalLocationDisplayUtils",
	"WAWebBizAdCreationTargetingModalLocationItem.react",
	"WAWebBizAdCreationTargetingModalLocationSpecParsers",
	"WAWebBizAdCreationTargetingModalPage.react",
	"WAWebBizAdCreationTargetingSpecContext",
	"WAWebBizAdLogger",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebSearchInput",
	"WDSButton.react",
	"WDSIconIcArrowBack.react",
	"WDSSpinner.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebBizAdCreationSearchRegionalLocations",
	"useWAWebTimeout"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useContext, p = c.useState, _ = {
		bottomActions: {
			borderTopColor: "xx42vgk",
			borderTopStyle: "x13fuv20",
			borderTopWidth: "x178xt8z",
			display: "x78zum5",
			justifyContent: "x13a6bvl",
			paddingTop: "x1p57kb1",
			$$css: !0
		},
		emptyStateText: {
			marginBottom: "x1ua1l7f",
			$$css: !0
		},
		sectionHeader: {
			marginBottom: "xefnzgg",
			$$css: !0
		},
		sectionsContainer: {
			rowGap: "x1f0uite",
			$$css: !0
		}
	};
	function f(e) {
		var t = o("react-compiler-runtime").c(12), n = e.header, a = e.locations, i = e.onToggle, l = e.showSubtitle;
		if (a.length === 0) return null;
		var s;
		t[0] !== n ? (s = u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2Emphasized",
			xstyle: _.sectionHeader,
			children: n
		}), t[0] = n, t[1] = s) : s = t[1];
		var c;
		if (t[2] !== a || t[3] !== i || t[4] !== l) {
			var d;
			t[6] !== i || t[7] !== l ? (d = function(t) {
				var e = typeof l == "function" ? l(t) : l;
				return u.jsx(r("WAWebBizAdCreationTargetingModalLocationItem.react"), {
					isSelected: !0,
					location: t,
					onToggle: i,
					showSubtitle: e
				}, t.key);
			}, t[6] = i, t[7] = l, t[8] = d) : d = t[8], c = a.map(d), t[2] = a, t[3] = i, t[4] = l, t[5] = c;
		} else c = t[5];
		var m;
		return t[9] !== s || t[10] !== c ? (m = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			children: [s, c]
		}), t[9] = s, t[10] = c, t[11] = m) : m = t[11], m;
	}
	function g(e) {
		var t = e.adAccountID, n = e.environment, a = e.onBack, i = e.onNext, l = m(r("WAWebBizAdCreationTargetingSpecContext")), c = p(""), g = c[0], y = c[1], C = p(0), b = C[0], v = C[1], S = m(r("WAWebBizAdCreationLoggerContext")), R = d(function() {
			S != null && r("WAWebBizAdLogger").log({
				adAccountID: t,
				event: "location_selection_error",
				extra: { location_type: "regional" },
				loggerContext: S
			});
		}, [t, S]), L = r("useWAWebBizAdCreationSearchRegionalLocations")(n, R), E = L.fetchLocations, k = L.isLoading, I = L.locations, T = o("WAWebBizAdCreationTargetingModalLocationDisplayUtils").isLocalFlowSelection(l.geo_locations), D = T ? [] : o("WAWebBizAdCreationTargetingModalLocationSpecParsers").convertGeoLocationsToSearchResults(l.geo_locations), x = p(D), $ = x[0], P = x[1], N = g.trim().length > 0, M = d(function(e, t) {
			if (t) {
				var n = I.find(function(t) {
					return t.key === e;
				});
				if (n != null) {
					var r = o("WAWebBizAdCreationTargetingModalLocationConflictUtils").findConflictingLocations($, n);
					P(function(e) {
						var t = e.filter(function(e) {
							return !r.some(function(t) {
								return t.key === e.key;
							});
						});
						return [].concat(t, [n]);
					});
				}
			} else P(function(t) {
				return t.filter(function(t) {
					return t.key !== e;
				});
			});
		}, [I, $]), w = d(function() {
			if (N) {
				y(""), v(function(e) {
					return e + 1;
				});
				return;
			}
			i($);
		}, [
			i,
			$,
			N
		]), A = o("useWAWebTimeout").useManualTimeout(function() {
			E(g);
		}), F = A[0], O = A[1], B = d(function(e) {
			y(e), O(), F(300);
		}, [O, F]), W = d(function(e) {
			return $.some(function(t) {
				return t.key === e.key;
			});
		}, [$]), q = $.filter(function(e) {
			return e.type === "ZIP";
		}), U = $.filter(function(e) {
			return e.type === "COUNTRY_GROUP";
		}), V = $.filter(function(e) {
			return e.type === "COUNTRY" || e.type === "REGION";
		}), H = $.filter(function(e) {
			return e.type === "NEIGHBORHOOD";
		}), G = $.filter(function(e) {
			return e.type === "CITY" || e.type === "PLACE" || e.type === "SUBCITY";
		}), z = $.filter(function(e) {
			return e.type === "CUSTOM_LOCATION";
		}), j = k ? u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			children: u.jsx(r("WDSSpinner.react"), { size: 40 })
		}) : null, K = !k && !N ? u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			testid: "biz_native_ads_selected_locations_view",
			children: [u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				xstyle: _.emptyStateText,
				children: s._(
					/*BTDS*/
					""
				)
			}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				xstyle: _.sectionsContainer,
				children: [
					u.jsx(f, {
						header: s._(
							/*BTDS*/
							""
						),
						locations: U,
						onToggle: M,
						showSubtitle: !1
					}),
					u.jsx(f, {
						header: s._(
							/*BTDS*/
							""
						),
						locations: q,
						onToggle: M,
						showSubtitle: !0
					}),
					u.jsx(f, {
						header: s._(
							/*BTDS*/
							""
						),
						locations: V,
						onToggle: M,
						showSubtitle: h
					}),
					u.jsx(f, {
						header: s._(
							/*BTDS*/
							""
						),
						locations: H,
						onToggle: M,
						showSubtitle: !0
					}),
					u.jsx(f, {
						header: s._(
							/*BTDS*/
							""
						),
						locations: G,
						onToggle: M,
						showSubtitle: !0
					}),
					u.jsx(f, {
						header: s._(
							/*BTDS*/
							""
						),
						locations: z,
						onToggle: M,
						showSubtitle: !1
					})
				]
			})]
		}) : null, Q = !k && N && I.length > 0 ? I.map(function(e) {
			var t = e.type === "CITY" || e.type === "REGION" || e.type === "SUBCITY";
			return u.jsx(r("WAWebBizAdCreationTargetingModalLocationItem.react"), {
				isSelected: W(e),
				location: e,
				onToggle: M,
				showSubtitle: t
			}, e.key);
		}) : null, X = function() {
			return u.jsxs(u.Fragment, { children: [
				j,
				K,
				Q
			] });
		};
		return u.jsxs(r("WAWebBizAdCreationTargetingModalPage.react"), {
			headerContent: u.jsxs(u.Fragment, { children: [u.jsx(r("WDSButton.react"), {
				Icon: r("WDSIconIcArrowBack.react"),
				onPress: a,
				size: "medium",
				variant: "borderless"
			}), u.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Body1",
				children: s._(
					/*BTDS*/
					""
				)
			})] }),
			children: [
				u.jsx(o("WAWebSearchInput").SearchInput, {
					onSearch: B,
					padding: 0,
					placeholder: s._(
						/*BTDS*/
						""
					)
				}, b),
				u.jsx("div", {
					className: "x98rzlu x1ua1l7f x98l61r x6ikm8r",
					children: X()
				}),
				u.jsx(o("WAWebFlex.react").FlexRow, {
					xstyle: _.bottomActions,
					children: u.jsx(r("WDSButton.react"), {
						disabled: $.length === 0,
						label: r("WAWebFbtCommon")("Next"),
						onPress: w,
						size: "medium",
						testid: "biz_native_ads_regional_location_next_button",
						variant: "filled"
					})
				})
			]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		return e.type === "REGION";
	}
	l.default = g;
}), 226);
