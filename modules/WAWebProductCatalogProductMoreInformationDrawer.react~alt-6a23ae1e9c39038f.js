__d("WAWebProductCatalogProductMoreInformationDrawer.react", [
	"fbt",
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
	"nullthrows",
	"react",
	"useWAWebModelValues",
	"useWAWebRenderCallbacks"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = ["ref"], c, d = c || (c = o("react")), m = c.useState, p = [o("WAWebComplianceConstants").COMPLIANCE_INFO_CODES.INDIA, o("WAWebSyntheticCountryCode").SyntheticCountryCode.NotApplicable];
	function _(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, u), i = a.onBack, l = o("useWAWebModelValues").useModelValues(a.product, ["id", "catalogWid"]), c = m({}), _ = c[0], f = c[1], g = m(""), h = g[0], y = g[1], C = m(""), b = C[0], v = C[1], S = m(!0), R = S[0], L = S[1], E = function(t) {
			var e, n;
			return ((e = t.complianceInfo) == null ? void 0 : e.countryCodeOrigin) === String(o("WAWebSyntheticCountryCode").SyntheticCountryCode.NotApplicable) ? Promise.resolve(d.jsxs("div", { children: [d.jsx("div", {
				className: "xzueoph",
				children: s._(
					/*BTDS*/
					""
				)
			}), d.jsx("div", { children: s._(
				/*BTDS*/
				""
			) })] })) : o("WAWebCountriesUtils").getCountryNameFromCountryCode((n = t.complianceInfo) == null ? void 0 : n.countryCodeOrigin, o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.META_RECOGNIZED);
		};
		r("useWAWebRenderCallbacks")({ onMount: function() {
			async function t() {
				await o("WAWebCatalogCollection").CatalogCollection.findProduct({
					catalogWid: l.catalogWid,
					productId: l.id.toString(),
					productMsgMediaData: o("WAWebStateUtils").unproxy(l).productMsgMediaData,
					shouldFetchComplianceFields: !0
				});
				var t = o("WAWebCatalogCollection").CatalogCollection.get(l.catalogWid), n = r("nullthrows")(t).productCollection.get(l.id);
				if (n) {
					var a, i, s, u, c, d, m, p, _ = await E(n), g = await o("WAWebCountriesUtils").getCountryNameFromCountryCode((a = n.complianceInfo) == null || (a = a.importerAddress) == null ? void 0 : a.countryCode, o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.META_RECOGNIZED), h = {
						importerName: ((i = n.complianceInfo) == null ? void 0 : i.importerName) || "",
						countryCodeOrigin: ((s = n.complianceInfo) == null ? void 0 : s.countryCodeOrigin) || "",
						importerAddress: {
							street1: ((u = n.complianceInfo) == null || (u = u.importerAddress) == null ? void 0 : u.street1) || "",
							street2: ((c = n.complianceInfo) == null || (c = c.importerAddress) == null ? void 0 : c.street2) || "",
							city: ((d = n.complianceInfo) == null || (d = d.importerAddress) == null ? void 0 : d.city) || "",
							region: ((m = n.complianceInfo) == null || (m = m.importerAddress) == null ? void 0 : m.region) || "",
							postalCode: ((p = n.complianceInfo) == null || (p = p.importerAddress) == null ? void 0 : p.postalCode) || ""
						}
					};
					f(h), L(!1), y(_), v(g);
				} else o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Unable to fetch compliance for product: ", ""])), l.id);
			}
			t();
		} });
		var k = function() {
			return i();
		}, I = _.countryCodeOrigin, T = _.importerAddress, D = _.importerName;
		return d.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			onDrop: k,
			theme: "striped",
			tsNavigationData: {
				surface: "unknown",
				viewName: "catalog-product-more-info"
			},
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				testid: "drawer-title-profile",
				title: s._(
					/*BTDS*/
					""
				),
				onBack: k,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), d.jsx(r("WAWebDrawerBody.react"), {
				theme: R ? "center-content" : void 0,
				children: R ? d.jsx(o("WAWebComplianceInfo.react").ComplianceInfoLoading, {}) : d.jsxs(o("WAWebComplianceInfo.react").ComplianceInfoGroup, { children: [d.jsx(o("WAWebComplianceInfo.react").ComplianceInfoPrimitiveField, {
					value: h,
					label: s._(
						/*BTDS*/
						""
					)
				}), I && !p.includes(I) ? d.jsxs(d.Fragment, { children: [d.jsx(o("WAWebComplianceInfo.react").ComplianceInfoPrimitiveField, {
					value: D,
					label: s._(
						/*BTDS*/
						""
					)
				}), d.jsx(o("WAWebComplianceInfo.react").ComplianceInfoStructuralField, {
					valuesMap: babelHelpers.extends({ importerAddressCountryNameOrigin: b }, T),
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
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
