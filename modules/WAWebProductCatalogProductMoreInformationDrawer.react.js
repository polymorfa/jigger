__d("WAWebProductCatalogProductMoreInformationDrawer.react", [
	"fbt",
	"Promise",
	"WALogger",
	"WAWebCatalogCollection",
	"WAWebComplianceConstants",
	"WAWebComplianceInfo.react",
	"WAWebCountriesUtils",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebStateUtils",
	"WAWebSyntheticCountryCode",
	"asyncToGeneratorRuntime",
	"nullthrows",
	"react",
	"useWAWebModelValues",
	"useWAWebRenderCallbacks"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = ["ref"], c, d, m = d || (d = o("react")), p = d.useState, _ = [o("WAWebComplianceConstants").COMPLIANCE_INFO_CODES.INDIA, o("WAWebSyntheticCountryCode").SyntheticCountryCode.NotApplicable];
	function f(t) {
		var a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, u), l = i.onBack, d = o("useWAWebModelValues").useModelValues(i.product, ["id", "catalogWid"]), f = p({}), g = f[0], h = f[1], y = p(""), C = y[0], b = y[1], v = p(""), S = v[0], R = v[1], L = p(!0), E = L[0], k = L[1], I = function(t) {
			var e, r;
			return ((e = t.complianceInfo) == null ? void 0 : e.countryCodeOrigin) === String(o("WAWebSyntheticCountryCode").SyntheticCountryCode.NotApplicable) ? (c || (c = n("Promise"))).resolve(m.jsxs("div", { children: [m.jsx("div", {
				className: "xzueoph",
				children: s._(
					/*BTDS*/
					""
				)
			}), m.jsx("div", { children: s._(
				/*BTDS*/
				""
			) })] })) : o("WAWebCountriesUtils").getCountryNameFromCountryCode((r = t.complianceInfo) == null ? void 0 : r.countryCodeOrigin, o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.META_RECOGNIZED);
		};
		r("useWAWebRenderCallbacks")({ onMount: function() {
			function t() {
				return a.apply(this, arguments);
			}
			function a() {
				return a = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					yield o("WAWebCatalogCollection").CatalogCollection.findProduct({
						catalogWid: d.catalogWid,
						productId: d.id.toString(),
						productMsgMediaData: o("WAWebStateUtils").unproxy(d).productMsgMediaData,
						shouldFetchComplianceFields: !0
					});
					var t = o("WAWebCatalogCollection").CatalogCollection.get(d.catalogWid), n = r("nullthrows")(t).productCollection.get(d.id);
					if (n) {
						var a, i, l, s, u, c, m, p, _ = yield I(n), f = yield o("WAWebCountriesUtils").getCountryNameFromCountryCode((a = n.complianceInfo) == null || (a = a.importerAddress) == null ? void 0 : a.countryCode, o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.META_RECOGNIZED), g = {
							importerName: ((i = n.complianceInfo) == null ? void 0 : i.importerName) || "",
							countryCodeOrigin: ((l = n.complianceInfo) == null ? void 0 : l.countryCodeOrigin) || "",
							importerAddress: {
								street1: ((s = n.complianceInfo) == null || (s = s.importerAddress) == null ? void 0 : s.street1) || "",
								street2: ((u = n.complianceInfo) == null || (u = u.importerAddress) == null ? void 0 : u.street2) || "",
								city: ((c = n.complianceInfo) == null || (c = c.importerAddress) == null ? void 0 : c.city) || "",
								region: ((m = n.complianceInfo) == null || (m = m.importerAddress) == null ? void 0 : m.region) || "",
								postalCode: ((p = n.complianceInfo) == null || (p = p.importerAddress) == null ? void 0 : p.postalCode) || ""
							}
						};
						h(g), k(!1), b(_), R(f);
					} else o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Unable to fetch compliance for product: ", ""])), d.id);
				}), a.apply(this, arguments);
			}
			t();
		} });
		var T = function() {
			return l();
		}, D = g.countryCodeOrigin, x = g.importerAddress, $ = g.importerName;
		return m.jsxs(r("WAWebDrawer.react"), {
			ref: a,
			onDrop: T,
			theme: "striped",
			tsNavigationData: {
				surface: "unknown",
				viewName: "catalog-product-more-info"
			},
			children: [m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				testid: "drawer-title-profile",
				title: s._(
					/*BTDS*/
					""
				),
				onBack: T,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), m.jsx(r("WAWebDrawerBody.react"), {
				theme: E ? "center-content" : void 0,
				children: E ? m.jsx(o("WAWebComplianceInfo.react").ComplianceInfoLoading, {}) : m.jsxs(o("WAWebComplianceInfo.react").ComplianceInfoGroup, { children: [m.jsx(o("WAWebComplianceInfo.react").ComplianceInfoPrimitiveField, {
					value: C,
					label: s._(
						/*BTDS*/
						""
					)
				}), D && !_.includes(D) ? m.jsxs(m.Fragment, { children: [m.jsx(o("WAWebComplianceInfo.react").ComplianceInfoPrimitiveField, {
					value: $,
					label: s._(
						/*BTDS*/
						""
					)
				}), m.jsx(o("WAWebComplianceInfo.react").ComplianceInfoStructuralField, {
					valuesMap: babelHelpers.extends({ importerAddressCountryNameOrigin: S }, x),
					keys: [
						"street1",
						"street2",
						"city",
						"region",
						"postalCode",
						"importerAddressCountryNameOrigin"
					],
					label: s._(
						/*BTDS*/
						""
					)
				})] }) : null] })
			})]
		}, "product-details-drawer");
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
