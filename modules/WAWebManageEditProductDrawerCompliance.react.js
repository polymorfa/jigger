__d("WAWebManageEditProductDrawerCompliance.react", [
	"fbt",
	"WAWebBizCatalogGatingUtils",
	"WAWebCatalogLogEvents",
	"WAWebCheckBox.react",
	"WAWebClickableLink.react",
	"WAWebCmd",
	"WAWebComplianceConstants",
	"WAWebComplianceInfo.react",
	"WAWebCountriesUtils",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebFrontendCountriesUtils",
	"WAWebNoop",
	"WAWebRichTextField.react",
	"WAWebSpinner.react",
	"WAWebUserPrefsMeUser",
	"WAWebWamEnumSurfaceType",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"fbs",
	"isStringNullOrEmpty",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useMemo, _ = d.useState, f = {
		marginTop5: {
			marginTop: "x1ok221b",
			$$css: !0
		},
		marginBottom30: {
			marginBottom: "x4n8cb0",
			$$css: !0
		}
	}, g = { notApplicableDescr: {
		fontSize: "x1f6kntn",
		lineHeight: "x1fc57z9",
		color: "x9bq0rd",
		$$css: !0
	} };
	function h(t) {
		var n = o("react-compiler-runtime").c(9), a = t.handleComplianceInfoImporterToggleChange, i = t.importerInformationNotApplicableEnabled, l;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (l = (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginTop40), n[0] = l) : l = n[0];
		var u;
		n[1] !== a || n[2] !== i ? (u = c.jsx(o("WAWebCheckBox.react").CheckBox, {
			id: "importer-information-not-applicable-check",
			onChange: a,
			checked: i,
			testid: "importer-information-not-applicable-check"
		}), n[1] = a, n[2] = i, n[3] = u) : u = n[3];
		var d;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (d = { className: "x1n2onr6 xnfr1j x1hm9lzh" }, n[4] = d) : d = n[4];
		var m, p;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (m = c.jsx("label", babelHelpers.extends({}, d, {
			htmlFor: "importer-information-not-applicable-check",
			children: s._(
				/*BTDS*/
				""
			)
		})), p = c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([
			g.notApplicableDescr,
			f.marginTop5,
			f.marginBottom30,
			o("WDSMargins.stylex").wdsMargins.marginStart28
		]), { children: s._(
			/*BTDS*/
			""
		) })), n[5] = m, n[6] = p) : (m = n[5], p = n[6]);
		var _;
		return n[7] !== u ? (_ = c.jsxs("div", babelHelpers.extends({}, l, { children: [
			u,
			m,
			p
		] })), n[7] = u, n[8] = _) : _ = n[8], _;
	}
	function y(e) {
		var t = e.complianceInfo, n = e.countriesMap, a = e.handleComplianceInfoImporterToggleChange, i = e.importerInformationNotApplicableEnabled, l = e.isComplianceInfoAvailable, u = e.lastUsedCountryCode, d = e.onComplianceInfoChange, f = e.onComplianceInfoImporterAddressChange, g = e.selfCountryCode, y = e.showComplianceInfoImporterAddress, b = e.showComplianceInfoImporterNotApplicableToggle, v = _([]), S = v[0], R = v[1], L = p(function() {
			var e = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
			if (o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled() && S.length > 0) {
				var n = [];
				return (t == null ? void 0 : t.countryCodeOrigin) != null && n.push(t.countryCodeOrigin), o("WAWebFrontendCountriesUtils").bubbleCountryOnListOfCountries(S, n);
			} else if (S.length > 0 && o("WAWebBizCatalogGatingUtils").canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourney(e)) return o("WAWebFrontendCountriesUtils").bubbleCountryOnListOfCountries(S, [o("WAWebComplianceConstants").COMPLIANCE_INFO_CODES.INDIA]);
			return S;
		}, [S, t]), E = p(function() {
			return o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled() && u != null && u !== g && u !== (t == null ? void 0 : t.countryCodeOrigin) ? u : null;
		}, [
			t,
			u,
			g
		]), k = p(function() {
			var e = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
			if (S.length > 0) {
				if (o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled()) {
					var n = new Set();
					return r("isStringNullOrEmpty")(t == null ? void 0 : t.countryCodeOrigin) || n.add(t.countryCodeOrigin), E != null && n.add(E), g != null && n.add(g), o("WAWebFrontendCountriesUtils").bubbleCountryOnListOfCountries(S, Array.from(n));
				} else if (o("WAWebBizCatalogGatingUtils").canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourney(e)) {
					var a = [], i = o("WAWebComplianceConstants").COMPLIANCE_INFO_CODES.INDIA;
					return r("isStringNullOrEmpty")(t == null ? void 0 : t.countryCodeOrigin) || (i = t.countryCodeOrigin), a.push(i), o("WAWebFrontendCountriesUtils").formatCountriesOfOrigin(S, a);
				}
			}
			return S;
		}, [
			S,
			t == null ? void 0 : t.countryCodeOrigin,
			E,
			g
		]), I = function(t) {
			return t.toString() + " (" + s._(
				/*BTDS*/
				""
			).toString() + ")";
		}, T = function(n) {
			var e = !t || Object.values(t.importerAddress).every(function(e) {
				return !e;
			});
			return e ? I(n) : n;
		};
		if (m(function() {
			var e = !0, t = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
			if (o("WAWebBizCatalogGatingUtils").showComplianceFieldsInEditProductDrawer(t)) {
				var r = o("WAWebCountriesUtils").getCountriesWithMap({
					filter: o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.META_RECOGNIZED,
					countriesMap: n
				});
				e && R(r);
			}
			return function() {
				e = !1;
			};
		}, [n]), !l || !S.length) return c.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			children: c.jsx(r("WAWebFlexItem.react"), { children: c.jsx(o("WAWebSpinner.react").Spinner, {}) })
		});
		var D;
		return o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled() && (D = s._(
			/*BTDS*/
			"",
			[s._param("commerce_policy_link", c.jsx(r("WAWebClickableLink.react"), {
				href: o("WAWebFaqUrl").getWhatsappBusinessCommercePolicyUrl(),
				onClick: C,
				children: r("fbs")._(
					/*BTDS*/
					""
				)
			}))]
		)), c.jsxs("div", {
			"data-testid": "product-edit-drawer-compliance",
			children: [
				c.jsx(o("WAWebRichTextField.react").RichTextField, {
					testid: "product-edit-drawer-compliance-country-of-origin-input",
					value: t == null ? void 0 : t.countryNameOrigin,
					placeholder: s._(
						/*BTDS*/
						""
					),
					onChange: r("WAWebNoop"),
					theme: "small",
					customStyleThemes: [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated],
					managed: !0,
					onFocus: function() {
						o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled() && o("WAWebCatalogLogEvents").logAddEditCountryOfOriginViewed(), o("WAWebCmd").Cmd.showCountrySelector(s._(
							/*BTDS*/
							""
						), D, t == null ? void 0 : t.countryCodeOrigin, E, k, function(e) {
							d("countryCodeOrigin", e);
						}, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.ORIGIN_COUNTRY);
					},
					error: t == null ? void 0 : t.countryCodeOriginError
				}),
				b && c.jsx(h, {
					handleComplianceInfoImporterToggleChange: a,
					importerInformationNotApplicableEnabled: i
				}),
				y && c.jsxs(c.Fragment, { children: [
					c.jsx(o("WAWebRichTextField.react").RichTextField, {
						testid: "product-edit-drawer-compliance-importer-name-input",
						value: t == null ? void 0 : t.importerName,
						placeholder: T(s._(
							/*BTDS*/
							""
						)),
						onChange: function(t) {
							d("importerName", t.text);
						},
						theme: "small",
						customStyleThemes: [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated],
						maxLength: o("WAWebComplianceConstants").COMPLIANCE_INFO_LENGTH.IMPORTER_NAME,
						error: t == null ? void 0 : t.importerNameError
					}),
					c.jsx(o("WAWebRichTextField.react").RichTextField, {
						testid: "product-edit-drawer-compliance-importer-address-street-1-input",
						value: t == null ? void 0 : t.importerAddress.street1,
						placeholder: T(s._(
							/*BTDS*/
							""
						)),
						onChange: function(t) {
							f("street1", t.text);
						},
						theme: "small",
						customStyleThemes: [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated],
						maxLength: o("WAWebComplianceConstants").COMPLIANCE_INFO_LENGTH.STREET1,
						error: t == null ? void 0 : t.importerAddress.street1Error
					}),
					c.jsx(o("WAWebRichTextField.react").RichTextField, {
						testid: "product-edit-drawer-compliance-importer-address-street-2-input",
						value: t == null ? void 0 : t.importerAddress.street2,
						placeholder: I(s._(
							/*BTDS*/
							""
						)),
						onChange: function(t) {
							f("street2", t.text);
						},
						theme: "small",
						customStyleThemes: [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated],
						maxLength: o("WAWebComplianceConstants").COMPLIANCE_INFO_LENGTH.STREET2
					}),
					c.jsx(o("WAWebRichTextField.react").RichTextField, {
						testid: "product-edit-drawer-compliance-importer-address-city-input",
						value: t == null ? void 0 : t.importerAddress.city,
						placeholder: T(s._(
							/*BTDS*/
							""
						)),
						onChange: function(t) {
							f("city", t.text);
						},
						theme: "small",
						customStyleThemes: [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated],
						maxLength: o("WAWebComplianceConstants").COMPLIANCE_INFO_LENGTH.CITY,
						error: t == null ? void 0 : t.importerAddress.cityError
					}),
					c.jsx(o("WAWebRichTextField.react").RichTextField, {
						testid: "product-edit-drawer-compliance-importer-address-region-input",
						value: t == null ? void 0 : t.importerAddress.region,
						placeholder: I(s._(
							/*BTDS*/
							""
						)),
						onChange: function(t) {
							f("region", t.text);
						},
						theme: "small",
						customStyleThemes: [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated],
						maxLength: o("WAWebComplianceConstants").COMPLIANCE_INFO_LENGTH.REGION
					}),
					c.jsx(o("WAWebRichTextField.react").RichTextField, {
						testid: "product-edit-drawer-compliance-importer-address-country-code-input",
						value: t == null ? void 0 : t.importerAddress.countryName,
						placeholder: T(s._(
							/*BTDS*/
							""
						)),
						onChange: r("WAWebNoop"),
						theme: "small",
						customStyleThemes: [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated],
						managed: !0,
						onFocus: function() {
							o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled() && o("WAWebCatalogLogEvents").logAddEditImporterCountryListViewed(), o("WAWebCmd").Cmd.showCountrySelector(s._(
								/*BTDS*/
								""
							), void 0, t == null ? void 0 : t.importerAddress.countryCode, null, L, function(e) {
								f("countryCode", e);
							}, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.IMPORTER_COUNTRY);
						},
						error: t == null ? void 0 : t.importerAddress.countryCodeError
					}),
					c.jsx(o("WAWebRichTextField.react").RichTextField, {
						testid: "product-edit-drawer-compliance-importer-address-postal-code-input",
						value: t == null ? void 0 : t.importerAddress.postalCode,
						placeholder: I(s._(
							/*BTDS*/
							""
						)),
						onChange: function(t) {
							f("postalCode", t.text);
						},
						theme: "small",
						customStyleThemes: [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated],
						maxLength: o("WAWebComplianceConstants").COMPLIANCE_INFO_LENGTH.POSTAL_CODE
					}),
					c.jsx(o("WAWebComplianceInfo.react").ComplianceInfoHelpCenterBanner, { xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingTop20, o("WDSPaddings.stylex").wdsPaddings.paddingBottom40] })
				] })
			]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		e.preventDefault(), o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getWhatsappBusinessCommercePolicyUrl());
	}
	l.default = y;
}), 226);
