__d("WAWebBizAdCreationTargetingModalEditLocalLocationComponent.react", [
	"fbt",
	"WAWebBizAdCreationLocationMap.react",
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdCreationTargetingModalLocationItem.react",
	"WAWebBizAdCreationTargetingModalLocationRadiusUtils",
	"WAWebBizAdCreationTargetingModalPage.react",
	"WAWebBizAdLogger",
	"WAWebCountryCenterCoordinates",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebSearchInput",
	"WDSButton.react",
	"WDSIconIcArrowBack.react",
	"WDSSlider.react",
	"WDSSpinner.react",
	"WDSText.react",
	"react",
	"useWAWebBizAdCreationSearchLocalLocations",
	"useWAWebTimeout"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useContext, p = c.useMemo, _ = c.useState, f = { bottomActions: {
		borderTopColor: "xx42vgk",
		borderTopStyle: "x13fuv20",
		borderTopWidth: "x178xt8z",
		display: "x78zum5",
		justifyContent: "x13a6bvl",
		paddingTop: "x1p57kb1",
		$$css: !0
	} };
	function g(e, t) {
		return e.length <= t ? e : e.substring(0, t) + "…";
	}
	function h(e) {
		var t, n, a = e.adAccountID, i = e.environment, l = e.initialLocation, c = e.onBack, h = e.onNext, y = _(""), C = y[0], b = y[1], v = _(0), S = v[0], R = v[1], L = _(l != null ? l : null), E = L[0], k = L[1], I = _(function() {
			return (l == null ? void 0 : l.radiusInMeters) != null ? o("WAWebBizAdCreationTargetingModalLocationRadiusUtils").convertMetersToRadiusStep(l.radiusInMeters, l.type, o("WAWebBizAdCreationTargetingModalLocationRadiusUtils").usesImperialUnits(l.countryCode)) : 3;
		}), T = I[0], D = I[1], x = m(r("WAWebBizAdCreationLoggerContext")), $ = d(function() {
			x != null && r("WAWebBizAdLogger").log({
				adAccountID: a,
				event: "location_selection_error",
				extra: { location_type: "local" },
				loggerContext: x
			});
		}, [a, x]), P = r("useWAWebBizAdCreationSearchLocalLocations")(i, $), N = P.clearLocations, M = P.fetchLocations, w = P.isLoading, A = P.locations, F = p(function() {
			return o("WAWebBizAdCreationTargetingModalLocationRadiusUtils").usesImperialUnits(E == null ? void 0 : E.countryCode);
		}, [E]), O = p(function() {
			return o("WAWebBizAdCreationTargetingModalLocationRadiusUtils").formatRadiusLabel(T, E == null ? void 0 : E.type, F);
		}, [
			T,
			E,
			F
		]), B = E != null && E.latitude != null && E.longitude != null, W = p(function() {
			return o("WAWebCountryCenterCoordinates").getDefaultCenter();
		}, []), q = p(function() {
			if (E != null) return o("WAWebBizAdCreationTargetingModalLocationRadiusUtils").convertRadiusStepToMeters(T, E.type, F);
		}, [
			T,
			E,
			F
		]), U = C.trim().length > 0, V = d(function(e, t) {
			if (t) {
				var n = A.find(function(t) {
					return t.key === e;
				});
				n != null && (k(n), b(""), R(function(e) {
					return e + 1;
				}), N());
			} else k(null);
		}, [A, N]), H = d(function(e) {
			D(e[0]);
		}, []), G = d(function() {
			if (U) {
				b(""), R(function(e) {
					return e + 1;
				}), N();
				return;
			}
			E != null && h(E, o("WAWebBizAdCreationTargetingModalLocationRadiusUtils").convertRadiusStepToMeters(T, E.type, F));
		}, [
			E,
			T,
			F,
			h,
			U,
			N
		]), z = o("useWAWebTimeout").useManualTimeout(function() {
			M(C);
		}), j = z[0], K = z[1], Q = d(function(e) {
			b(e), K(), j(300);
		}, [K, j]), X = w ? u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			children: u.jsx(r("WDSSpinner.react"), { size: 40 })
		}) : null, Y = !w && U && A.length > 0 && A.map(function(e) {
			return u.jsx(r("WAWebBizAdCreationTargetingModalLocationItem.react"), {
				isSelected: !1,
				location: e,
				onToggle: V,
				showSubtitle: !0
			}, e.key);
		}), J = function() {
			return u.jsxs(u.Fragment, { children: [X, Y] });
		};
		return u.jsxs(r("WAWebBizAdCreationTargetingModalPage.react"), {
			headerContent: u.jsxs(u.Fragment, { children: [u.jsx(r("WDSButton.react"), {
				Icon: r("WDSIconIcArrowBack.react"),
				onPress: c,
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
					onSearch: Q,
					padding: 0,
					placeholder: (E == null ? void 0 : E.name) != null ? g(E.name, 45) : s._(
						/*BTDS*/
						""
					)
				}, S),
				U ? u.jsx("div", {
					className: "x78zum5 x98rzlu xdt5ytf x1ua1l7f x98l61r x1odjw0f x1b73lln",
					children: J()
				}) : null,
				U ? null : u.jsx("div", {
					className: "x98rzlu x1ua1l7f x1380le5 x2lwn1j",
					children: u.jsx(r("WAWebBizAdCreationLocationMap.react"), {
						latitude: (t = E == null ? void 0 : E.latitude) != null ? t : W.latitude,
						longitude: (n = E == null ? void 0 : E.longitude) != null ? n : W.longitude,
						radiusMeters: B ? q : void 0,
						showPin: B,
						zoom: B ? void 0 : 4
					})
				}),
				!w && !U && E != null ? u.jsx("div", {
					className: "x1ua1l7f",
					children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
						align: "stretch",
						gap: 8,
						children: [u.jsxs(o("WAWebFlex.react").FlexRow, {
							align: "center",
							gap: 8,
							children: [u.jsx(r("WDSText.react"), {
								colorName: "contentDeemphasized",
								type: "Body2",
								children: s._(
									/*BTDS*/
									""
								)
							}), u.jsx(r("WDSText.react"), {
								colorName: "contentDefault",
								type: "Body2",
								children: O
							})]
						}), u.jsx(r("WDSSlider.react"), {
							displayValueText: function(t) {
								return o("WAWebBizAdCreationTargetingModalLocationRadiusUtils").formatRadiusLabel(t, E == null ? void 0 : E.type, F);
							},
							max: 7,
							min: 0,
							onChangeSettled: H,
							startEndLabels: "minMax",
							step: 1,
							values: [T]
						})]
					})
				}) : null,
				u.jsxs(o("WAWebFlex.react").FlexRow, {
					gap: 8,
					xstyle: f.bottomActions,
					children: [u.jsx(r("WDSButton.react"), {
						label: r("WAWebFbtCommon")("Cancel"),
						onPress: c,
						size: "medium",
						variant: "outline"
					}), u.jsx(r("WDSButton.react"), {
						disabled: E == null,
						label: r("WAWebFbtCommon")("Next"),
						onPress: G,
						size: "medium",
						variant: "filled"
					})]
				})
			]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
