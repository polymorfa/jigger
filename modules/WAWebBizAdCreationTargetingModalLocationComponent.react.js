__d("WAWebBizAdCreationTargetingModalLocationComponent.react", [
	"fbt",
	"WAWebBizAdCreationLocationMap.react",
	"WAWebBizAdCreationLocationTypeRadio.react",
	"WAWebBizAdCreationLoggerContext",
	"WAWebBizAdCreationTargetingModalLocationDisplayUtils",
	"WAWebBizAdCreationTargetingModalLocationSpecParsers",
	"WAWebBizAdCreationTargetingModalPage.react",
	"WAWebBizAdCreationTargetingSpecContext",
	"WAWebBizAdLogger",
	"WAWebCountryCenterCoordinates",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WDSButton.react",
	"WDSIconIcArrowBack.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useContext, p = c.useEffect, _ = c.useMemo, f = c.useRef, g = c.useState, h = 160, y = {
		bottomActions: {
			borderTopColor: "xx42vgk",
			borderTopStyle: "x13fuv20",
			borderTopWidth: "x178xt8z",
			display: "x78zum5",
			justifyContent: "x13a6bvl",
			paddingTop: "x1p57kb1",
			$$css: !0
		},
		locationHeading: {
			marginBottom: "x1ua1l7f",
			$$css: !0
		},
		root: {
			rowGap: "x1j3ira4",
			columnGap: "xrdqr27",
			$$css: !0
		}
	};
	function C(e) {
		var t, n, a = e.adAccountID, i = e.onBack, l = e.onEditLocalLocation, c = e.onEditRegionalLocation, h = m(r("WAWebBizAdCreationTargetingSpecContext")), C = m(r("WAWebBizAdCreationLoggerContext")), b = f(!1);
		p(function() {
			C != null && !b.current && (b.current = !0, r("WAWebBizAdLogger").log({
				adAccountID: a,
				event: "add_location_impression",
				extra: {},
				loggerContext: C
			}));
		}, [a, C]);
		var v = o("WAWebBizAdCreationTargetingModalLocationDisplayUtils").isLocalFlowSelection(h.geo_locations), S = g(v ? "local" : "regional"), R = S[0], L = S[1], E = o("WAWebBizAdCreationTargetingModalLocationDisplayUtils").formatLocationDisplay(h.geo_locations), k = v ? E : s._(
			/*BTDS*/
			""
		), I = _(function() {
			if (!v) return null;
			var e = o("WAWebBizAdCreationTargetingModalLocationSpecParsers").convertGeoLocationsToSearchResults(h.geo_locations), t = e[0];
			return t == null || t.latitude == null || t.longitude == null ? null : t;
		}, [v, h.geo_locations]), T = _(function() {
			return o("WAWebCountryCenterCoordinates").getDefaultCenter();
		}, []), D = v ? s._(
			/*BTDS*/
			""
		) : E, x = d(function() {
			C != null && r("WAWebBizAdLogger").log({
				adAccountID: a,
				event: "location_type_selected",
				extra: { location_type: R },
				loggerContext: C
			}), R === "local" ? l() : c();
		}, [
			a,
			R,
			C,
			l,
			c
		]);
		return u.jsx(r("WAWebBizAdCreationTargetingModalPage.react"), {
			headerContent: u.jsxs(u.Fragment, { children: [u.jsx(r("WDSButton.react"), {
				Icon: r("WDSIconIcArrowBack.react"),
				onPress: i,
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
			xstyle: y.root,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				grow: 1,
				children: [
					u.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Body1Emphasized",
						xstyle: y.locationHeading,
						children: s._(
							/*BTDS*/
							""
						)
					}),
					u.jsx(r("WAWebBizAdCreationLocationTypeRadio.react"), {
						checked: R === "regional",
						label: s._(
							/*BTDS*/
							""
						),
						onChange: function() {
							return L("regional");
						},
						onEditPress: c,
						secondaryLabel: D,
						testid: "biz_native_ads_location_type_regional",
						value: "regional"
					}),
					u.jsx(r("WAWebBizAdCreationLocationTypeRadio.react"), {
						checked: R === "local",
						label: s._(
							/*BTDS*/
							""
						),
						onChange: function() {
							return L("local");
						},
						onEditPress: l,
						secondaryLabel: k,
						testid: "biz_native_ads_location_type_local",
						value: "local"
					}),
					R === "local" ? u.jsx("div", {
						className: "x1ymw6g x1380le5",
						children: u.jsx(r("WAWebBizAdCreationLocationMap.react"), {
							latitude: (t = I == null ? void 0 : I.latitude) != null ? t : T.latitude,
							longitude: (n = I == null ? void 0 : I.longitude) != null ? n : T.longitude,
							radiusMeters: I == null ? void 0 : I.radiusInMeters,
							showPin: I != null,
							zoom: I == null ? 4 : void 0
						})
					}) : null,
					u.jsx("div", { className: "x98rzlu" }),
					u.jsx(o("WAWebFlex.react").FlexRow, {
						xstyle: y.bottomActions,
						children: u.jsx(r("WDSButton.react"), {
							label: r("WAWebFbtCommon")("Next"),
							onPress: x,
							size: "medium",
							testid: "biz_native_ads_location_next_button",
							variant: "filled"
						})
					})
				]
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = C;
}), 226);
