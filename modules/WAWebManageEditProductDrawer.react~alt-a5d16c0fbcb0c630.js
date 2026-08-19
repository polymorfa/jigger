__d("WAWebManageEditProductDrawer.react", [
	"fbt",
	"WAWebBizCatalogGatingUtils",
	"WAWebBizComplianceUtil",
	"WAWebButton.react",
	"WAWebCatalogCollection",
	"WAWebCatalogLogEvents",
	"WAWebCheckBox.react",
	"WAWebCountriesUtils",
	"WAWebCurrencyUtils",
	"WAWebDragAndDropMask.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerContext",
	"WAWebDrawerHeader.react",
	"WAWebIdentityFunction",
	"WAWebLocaleModules",
	"WAWebManageEditProductDrawerCompliance.react",
	"WAWebManageEditProductDrawerHelpers",
	"WAWebManageEditProductDrawerSaveHandlers",
	"WAWebProductCatalogProductImagesEditPanel.react",
	"WAWebProductModel",
	"WAWebRichTextField.react",
	"WAWebSpinner.react",
	"WAWebSyntheticCountryCode",
	"WAWebText_DONOTUSE.react",
	"WAWebURLUtils",
	"WAWebUserPrefsMeUser",
	"WDSMargins.stylex",
	"nullthrows",
	"react",
	"stylex",
	"useVisibility",
	"useWAWebAsync",
	"useWAWebListener",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c, p = m.useContext, _ = m.useMemo, f = m.useRef, g = m.useState, h = {
		marginTop5: {
			marginTop: "x1ok221b",
			$$css: !0
		},
		marginBottom30: {
			marginBottom: "x4n8cb0",
			$$css: !0
		}
	}, y = {
		productWrapper: {
			position: "x1n2onr6",
			width: "x1h08jmb",
			paddingTop: "x13crsa5",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x1rxj1xn",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		isSending: {
			pointerEvents: "x47corl",
			opacity: "xbyyjgo",
			$$css: !0
		},
		deleteButtonContainer: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		hiddenDescr: {
			fontSize: "x1f6kntn",
			lineHeight: "x1fc57z9",
			color: "x9bq0rd",
			$$css: !0
		}
	};
	function C(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.catalog, l = a.newProduct, c = l === void 0 ? !1 : l, m = a.onBack, C = a.onCancel, b = a.onCreate, v = a.onDelete, S = a.onEditSuccess, R = p(o("WAWebDrawerContext").DrawerContext), L = f(null), E = o("useWAWebModelValues").useModelValues(a.catalog, ["lastUsedCountryCode"]), k = E.lastUsedCountryCode, I = o("useWAWebModelValues").useModelValues(a.product, [
			"id",
			"additionalImageCdnUrl",
			"name",
			"priceAmount1000",
			"salePriceAmount1000",
			"description",
			"productImageCollection",
			"reviewStatus",
			"url",
			"imageCdnUrl",
			"retailerId",
			"currency",
			"isHidden",
			"complianceInfo",
			"videos"
		]), T = _(function() {
			return o("WAWebBizComplianceUtil").getCountryShortcodeByWid(i.id);
		}, [i.id]), D = r("useVisibility")({ onVisible: function() {
			o("WAWebCatalogLogEvents").logAddEditProductDetailsViewed(c);
		} }), x = D[0], $ = function(t) {
			return o("WAWebManageEditProductDrawerHelpers").canDisplayPrice(t, !0);
		}, P = o("WAWebManageEditProductDrawerHelpers").getCurrencyCountryShortcode(T), N = I.currency != null ? I.currency : o("WAWebCurrencyUtils").currencyForCountryShortcode(P != null ? P : ""), M = $(N), w = g(I.name || ""), A = w[0], F = w[1], O = g(M ? I.priceAmount1000 : null), B = O[0], W = O[1], q = g(M ? I.salePriceAmount1000 : null), U = q[0], V = q[1], H = g(I.description || ""), G = H[0], z = H[1], j = g(I.url || ""), K = j[0], Q = j[1], X = g(I.retailerId || ""), Y = X[0], J = X[1], Z = g(function() {
			if (I.priceAmount1000 != null && N != null && M) {
				var e = o("WAWebCurrencyUtils").formatAmount1000ToParts(N, I.priceAmount1000);
				return "" + e.integer + e.decimal;
			}
			return "";
		}), ee = Z[0], te = Z[1], ne = g(function() {
			if (I.salePriceAmount1000 != null && N != null && M) {
				var e = o("WAWebCurrencyUtils").formatAmount1000ToParts(N, I.salePriceAmount1000);
				return "" + e.integer + e.decimal;
			}
			return "";
		}), re = ne[0], oe = ne[1], ae = M ? N : "", ie = g(!1), le = ie[0], se = ie[1], ue = g(""), ce = ue[0], de = ue[1], me = g(""), pe = me[0], _e = me[1], fe = g(""), ge = fe[0], he = fe[1], ye = g(""), Ce = ye[0], be = ye[1], ve = g(""), Se = ve[0], Re = ve[1], Le = g(!!I.imageCdnUrl), Ee = Le[0], ke = Le[1], Ie = g(!1), Te = Ie[0], De = Ie[1], xe = g(I.isHidden), $e = xe[0], Pe = xe[1], Ne = g(!M), Me = Ne[0], we = Ne[1], Ae = g(!1), Fe = Ae[0], Oe = Ae[1], Be = g(!1), We = Be[0], qe = Be[1], Ue = g(void 0), Ve = Ue[0], He = Ue[1], Ge = B == null;
		o("useWAWebListener").useListener(I, "change:isHidden", function() {
			Pe(I.isHidden);
		});
		var ze = "";
		re !== "" && !o("WAWebCurrencyUtils").validatePriceString(ae, re, o("WAWebProductModel").MIN_PRICE, o("WAWebProductModel").MAX_PRICE) ? ze = s._(
			/*BTDS*/
			""
		) : B == null && U != null ? ze = s._(
			/*BTDS*/
			""
		) : U != null && B != null && U >= B && (ze = s._(
			/*BTDS*/
			""
		));
		var je = g(), Ke = je[0], Qe = je[1];
		function Xe(e, t) {
			var n = (e == null ? void 0 : e.complianceInfo) || {}, r = n.countryCodeOrigin, a = n.importerAddress, i = n.importerName, l = r === String(o("WAWebSyntheticCountryCode").SyntheticCountryCode.NotApplicable) ? s._(
				/*BTDS*/
				""
			).toString() : o("WAWebCountriesUtils").getCountryNameWithMap(r, o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.META_RECOGNIZED, t), u = o("WAWebCountriesUtils").getCountryNameWithMap(a == null ? void 0 : a.countryCode, o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.META_RECOGNIZED, t);
			Oe(!0);
			var c = [
				i,
				a == null ? void 0 : a.street1,
				a == null ? void 0 : a.street2,
				a == null ? void 0 : a.postalCode,
				a == null ? void 0 : a.city,
				a == null ? void 0 : a.region,
				a == null ? void 0 : a.countryCode
			];
			if (o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled()) {
				var d = e == null ? void 0 : e.importerInformationExempt;
				if (d === !0) qe(d);
				else {
					var m = c.some(o("WAWebBizComplianceUtil").existsFieldIgnoreHardEnforcement);
					qe(!m);
				}
			}
			He({
				countryCodeOrigin: r,
				countryNameOrigin: l,
				countryCodeOriginError: "",
				importerName: i,
				importerNameError: "",
				importerAddress: {
					street1: a == null ? void 0 : a.street1,
					street1Error: "",
					street2: a == null ? void 0 : a.street2,
					postalCode: a == null ? void 0 : a.postalCode,
					city: a == null ? void 0 : a.city,
					cityError: "",
					region: a == null ? void 0 : a.region,
					countryCode: a == null ? void 0 : a.countryCode,
					countryName: u,
					countryCodeError: ""
				}
			});
		}
		var Ye = async function(t) {
			if (o("WAWebBizCatalogGatingUtils").showComplianceFieldsInEditProductDrawer(i.id)) {
				var e = c ? [o("WAWebLocaleModules").getCountryData()] : [o("WAWebLocaleModules").getCountryData(), o("WAWebCatalogCollection").CatalogCollection.findProduct({
					catalogWid: i.id,
					productId: I.id.toString(),
					shouldFetchComplianceFields: !0
				})], n = await Promise.all(e), a = n[0];
				if (t.aborted) return;
				if (Qe(a), c) Oe(!0), k != null && o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled() && He({
					countryCodeOrigin: k,
					countryNameOrigin: o("WAWebCountriesUtils").getCountryNameWithMap(k, o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.META_RECOGNIZED, a),
					importerAddress: {}
				});
				else {
					var l = r("nullthrows")(i).productCollection.get(I.id);
					Xe(l, a);
				}
			}
		};
		r("useWAWebAsync")(Ye, []);
		var Je = function(t) {
			var e;
			(e = L.current) == null || e.handleFilePick(t);
		}, Ze = function(t, n) {
			De(t);
		}, et = function(t) {
			var e = "";
			t.length === 0 && (e = s._(
				/*BTDS*/
				""
			)), Re(e), ke(t.length > 0), we(!0);
		}, tt = function(t) {
			var e = t.text;
			e !== Y && (J(e), be(""), we(!0));
		}, nt = function(t) {
			var e = t.text;
			if (e !== K) {
				var n = "";
				e !== "" && !r("WAWebURLUtils").isValid(e) && (n = s._(
					/*BTDS*/
					""
				)), Q(e), he(n), we(!0);
			}
		}, rt = function(t) {
			var e = t.text;
			e !== G && (z(e), we(!0));
		}, ot = function(t) {
			var e = t.text;
			F(e), de(e.trim() === "" ? s._(
				/*BTDS*/
				""
			) : ""), e !== A && we(!0);
		}, at = function() {
			Pe(function(e) {
				return !e;
			});
		}, it = function() {
			qe(function(e) {
				return !e;
			});
		}, lt = function() {
			K !== "" && !r("WAWebURLUtils").isHttps(K) && !r("WAWebURLUtils").isHttp(K) && Q("https://" + K);
		}, st = function(t) {
			var e = t.text, n = "" + e;
			if (n !== ee) {
				var r = o("WAWebCurrencyUtils").valueFromString(ae, e), a = "";
				e !== "" && !o("WAWebCurrencyUtils").validatePriceString(ae, e, o("WAWebProductModel").MIN_PRICE, o("WAWebProductModel").MAX_PRICE) && (a = s._(
					/*BTDS*/
					""
				)), W(e === "" ? null : r), te(n), _e(a), we(!0);
			}
		}, ut = function(t) {
			var e = t.text, n = o("WAWebCurrencyUtils").valueFromString(ae, e);
			V(e === "" ? null : n), oe("" + e), we(!0);
		}, ct = function(t, n, r) {
			return o("WAWebManageEditProductDrawerHelpers").getImporterAddressFieldValueOnChange(Ve, t, n, r);
		}, dt = function() {
			return o("WAWebManageEditProductDrawerHelpers").shouldShowComplianceInfoImporterAddress(Ve, We);
		}, mt = function() {
			return o("WAWebManageEditProductDrawerHelpers").shouldShowComplianceInfoImporterNotApplicableToggle(Ve);
		}, pt = function() {
			return o("WAWebManageEditProductDrawerHelpers").shouldComplianceBeHardEnforced(i.id);
		}, _t = function(t, n) {
			o("WAWebManageEditProductDrawerSaveHandlers").handleEditError({
				e: t,
				markerId: n,
				newProduct: c,
				product: I,
				context: R,
				setImageError: Re,
				setRetailerIdError: be
			});
		}, ft = function() {
			o("WAWebManageEditProductDrawerSaveHandlers").handleDeleteItem({
				catalog: i,
				product: I,
				context: R,
				onDelete: v
			});
		}, gt = function(t) {
			o("WAWebManageEditProductDrawerSaveHandlers").handleEditSuccessFn({
				localProduct: t,
				catalog: i,
				newProduct: c,
				product: I,
				context: R,
				onEditSuccess: S,
				onCreate: b
			});
		}, ht = function() {
			return o("WAWebManageEditProductDrawerHelpers").getComplianceProductChanges(Ve, We, o("WAWebBizCatalogGatingUtils").showComplianceFieldsInEditProductDrawer(i.id));
		}, yt = function() {
			return new (o("WAWebProductModel")).Product({
				id: I.id,
				priceAmount1000: B,
				salePriceAmount1000: B != null ? U : null,
				currency: ae,
				description: G || "",
				imageCdnUrl: I.imageCdnUrl,
				additionalImageCdnUrl: I.additionalImageCdnUrl,
				videos: I.videos,
				name: A,
				retailerId: Y,
				url: K,
				isHidden: $e,
				complianceInfo: ht(),
				importerInformationExempt: We
			});
		}, Ct = function(t, n) {
			var e = ct("street1", t, n), r = ct("street2", t, n), a = ct("postalCode", t, n), i = ct("city", t, n), l = ct("region", t, n), u = ct("countryCode", t, n), c = [
				e,
				r,
				a,
				i,
				l,
				u
			].some(o("WAWebIdentityFunction").identityFunction) || pt(), d = babelHelpers.extends({}, Ve, { importerAddress: babelHelpers.extends({}, Ve == null ? void 0 : Ve.importerAddress) });
			if (t === "countryCode") {
				var m = o("WAWebCountriesUtils").getCountryNameWithMap(n, o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.META_RECOGNIZED, Ke);
				m == null || m === "" ? delete d.importerAddress.countryName : d.importerAddress.countryName = m;
			}
			n == null || n === "" ? delete d.importerAddress[t] : d.importerAddress[t] = n, d.importerAddress.street1Error = c && !o("WAWebBizComplianceUtil").existsFieldIgnoreHardEnforcement(e) ? s._(
				/*BTDS*/
				""
			) : "", d.importerAddress.cityError = c && !o("WAWebBizComplianceUtil").existsFieldIgnoreHardEnforcement(i) ? s._(
				/*BTDS*/
				""
			) : "", d.importerAddress.countryCodeError = c && !o("WAWebBizComplianceUtil").existsFieldIgnoreHardEnforcement(u) ? s._(
				/*BTDS*/
				""
			) : "", we(!0), He(d);
		}, bt = function(t, n) {
			var e, r = babelHelpers.extends({}, Ve, { importerAddress: babelHelpers.extends({}, Ve == null ? void 0 : Ve.importerAddress) });
			t === "countryCodeOrigin" && (e = n === String(o("WAWebSyntheticCountryCode").SyntheticCountryCode.NotApplicable) ? s._(
				/*BTDS*/
				""
			).toString() : o("WAWebCountriesUtils").getCountryNameWithMap(n, o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.META_RECOGNIZED, Ke), r.countryNameOrigin = e, r.countryCodeOriginError = ""), t === "importerName" && (r.importerNameError = o("WAWebBizComplianceUtil").existsField(n, o("WAWebUserPrefsMeUser").getMeUserOrThrow()) || !pt() ? "" : s._(
				/*BTDS*/
				""
			)), n == null || n === "" ? delete r[t] : r[t] = n, we(!0), He(r);
		}, vt = function() {
			var e = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), t = pt() || o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled();
			if (!t || !Fe) return !1;
			var n = babelHelpers.extends({}, Ve, { importerAddress: babelHelpers.extends({}, Ve == null ? void 0 : Ve.importerAddress) });
			if (!o("WAWebBizComplianceUtil").existsField(n.countryCodeOrigin, e) || o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled() && !o("WAWebBizComplianceUtil").existsFieldIgnoreHardEnforcement(n.countryCodeOrigin)) return n.countryCodeOriginError = s._(
				/*BTDS*/
				""
			), He(n), !0;
			if (!dt()) return !1;
			var r = n.importerAddress, a = r.city, i = r.countryCode, l = r.street1, u = n.importerName, c = !1;
			return o("WAWebBizComplianceUtil").existsField(u, e) || (n.importerNameError = s._(
				/*BTDS*/
				""
			), c = !0), o("WAWebBizComplianceUtil").existsFieldIgnoreHardEnforcement(l) || (n.importerAddress.street1Error = s._(
				/*BTDS*/
				""
			), c = !0), o("WAWebBizComplianceUtil").existsFieldIgnoreHardEnforcement(a) || (n.importerAddress.cityError = s._(
				/*BTDS*/
				""
			), c = !0), o("WAWebBizComplianceUtil").existsFieldIgnoreHardEnforcement(i) || (n.importerAddress.countryCodeError = s._(
				/*BTDS*/
				""
			), c = !0), c ? (He(n), !0) : !1;
		}, St = function() {
			var e = yt();
			vt() || (!c && o("WAWebCatalogLogEvents").logSMBAddEditProductDetailsSaveClicked(), o("WAWebManageEditProductDrawerSaveHandlers").saveItem({
				newProduct: c,
				isModified: Me,
				product: I,
				productChanges: e,
				catalog: i,
				context: R,
				imagePanelRef: L,
				setIsUpdating: se,
				handleEditError: _t,
				handleEditSuccess: gt,
				propsProduct: a.product
			}));
		}, Rt = function() {
			if (le || A.trim() === "" || Ee === !1) return !1;
			var e = [
				ce,
				pe,
				ze,
				ge,
				Ce,
				Se
			];
			return dt() && e.push(Ve == null ? void 0 : Ve.importerNameError, Ve == null ? void 0 : Ve.importerAddress.street1Error, Ve == null ? void 0 : Ve.importerAddress.cityError, Ve == null ? void 0 : Ve.importerAddress.countryCodeError), (pt() || o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled()) && e.push(Ve == null ? void 0 : Ve.countryCodeOriginError), e.every(function(e) {
				return !e;
			});
		}, Lt = d.jsx(o("WAWebButton.react").Button, {
			type: "primary",
			onClick: St,
			disabled: !Rt(),
			testid: "product-edit-drawer-save-button",
			children: c ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			)
		}), Et = c ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), kt = d.jsxs("div", {
			className: "x78zum5 x6s0dn4",
			children: [d.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
				level: "2",
				weight: "normal",
				size: "inherit",
				children: Et
			}), d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginStartAuto), { children: Lt }))]
		}), It = c ? null : d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props([y.deleteButtonContainer, o("WDSMargins.stylex").wdsMargins.marginVer20]), { children: d.jsx(o("WAWebButton.react").Button, {
			type: "warning",
			onClick: ft,
			testid: "product-edit-drawer-delete-button",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), Tt = u(y.productWrapper, o("WDSMargins.stylex").wdsMargins.marginHorAuto, o("WDSMargins.stylex").wdsMargins.marginVer0, le && y.isSending), Dt = Te ? d.jsx(r("WAWebDragAndDropMask.react"), {}) : null, xt = le ? d.jsx("div", {
			className: "x10l6tqk xh0rhid xbudbmw xupqr0c x11lhmoz",
			children: d.jsx(o("WAWebSpinner.react").Spinner, {
				size: 50,
				stroke: 3
			})
		}) : null, $t = d.jsxs("div", {
			className: "x1anpbxc",
			children: [d.jsxs("div", {
				className: "x78zum5 x1q0g3np x6s0dn4",
				children: [d.jsx(o("WAWebCheckBox.react").CheckBox, {
					id: "product-hidden-check",
					onChange: at,
					checked: $e,
					disabled: !1
				}), d.jsx("label", {
					className: "x1n2onr6 xnfr1j x1hm9lzh",
					htmlFor: "product-hidden-check",
					children: s._(
						/*BTDS*/
						""
					)
				})]
			}), d.jsx("div", babelHelpers.extends({}, u.props([
				y.hiddenDescr,
				h.marginTop5,
				h.marginBottom30,
				o("WDSMargins.stylex").wdsMargins.marginStart28
			]), { children: s._(
				/*BTDS*/
				""
			) }))]
		}), Pt = _(function() {
			var e = ae !== "" ? o("WAWebCurrencyUtils").formatAmount1000ToParts(ae, 0).symbol : "";
			return s._(
				/*BTDS*/
				"",
				[s._param("currencySymbol", e)]
			);
		}, [ae]), Nt = _(function() {
			var e = ae !== "" ? o("WAWebCurrencyUtils").formatAmount1000ToParts(ae, 0).symbol : "";
			return s._(
				/*BTDS*/
				"",
				[s._param("currencySymbol", e)]
			);
		}, [ae]), Mt = _(function() {
			return { surface: c ? "smb-catalog-create-product" : "smb-catalog-edit-product" };
		}, [c]);
		return d.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			theme: "catalog",
			onDrop: Je,
			onDragChange: Ze,
			tsNavigationData: Mt,
			children: [
				Dt,
				d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					testid: "catalog-link-title",
					title: kt,
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
					onBack: m,
					onCancel: C,
					focusBackOrCancel: !0
				}),
				d.jsx(r("WAWebDrawerBody.react"), { children: d.jsxs("div", {
					ref: x,
					className: Tt,
					children: [
						xt,
						d.jsx(r("WAWebProductCatalogProductImagesEditPanel.react"), {
							product: I,
							maxImageCount: o("WAWebProductModel").MAX_PRODUCT_IMAGES,
							onChange: et,
							ref: L,
							error: Se
						}),
						d.jsx(o("WAWebRichTextField.react").RichTextField, {
							testid: "product-edit-drawer-name-input",
							value: A,
							placeholder: s._(
								/*BTDS*/
								""
							),
							onChange: ot,
							theme: "small",
							showRemaining: !0,
							customStyleThemes: [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated],
							maxLength: 150,
							error: ce,
							title: s._(
								/*BTDS*/
								""
							)
						}),
						$(ae) && d.jsx(o("WAWebRichTextField.react").RichTextField, {
							testid: "product-edit-drawer-price-input",
							value: ee,
							placeholder: Pt,
							onChange: st,
							theme: "small",
							maxLength: 30,
							customStyleThemes: [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated],
							error: pe,
							title: s._(
								/*BTDS*/
								""
							)
						}),
						$(ae) && d.jsx(o("WAWebRichTextField.react").RichTextField, {
							testid: "product-edit-drawer-sale-price-input",
							readOnly: Ge,
							value: re,
							placeholder: Nt,
							onChange: ut,
							theme: "small",
							maxLength: 30,
							customStyleThemes: Ge ? [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated, o("WAWebRichTextField.react").TextInputCustomStyleThemes.DisabledLabel] : [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated],
							error: ze,
							title: s._(
								/*BTDS*/
								""
							)
						}),
						d.jsx(o("WAWebRichTextField.react").RichTextField, {
							testid: "product-edit-drawer-description-input",
							value: G,
							placeholder: s._(
								/*BTDS*/
								""
							),
							onChange: rt,
							theme: "small",
							showRemaining: !0,
							maxLength: 5e3,
							customStyleThemes: [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated],
							multiline: !0,
							title: s._(
								/*BTDS*/
								""
							)
						}),
						d.jsx(o("WAWebRichTextField.react").RichTextField, {
							testid: "product-edit-drawer-link-input",
							value: K,
							placeholder: s._(
								/*BTDS*/
								""
							),
							onChange: nt,
							onBlur: lt,
							theme: "small",
							customStyleThemes: [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated],
							maxLength: 75,
							error: ge,
							managed: !0,
							title: s._(
								/*BTDS*/
								""
							)
						}),
						d.jsx(o("WAWebRichTextField.react").RichTextField, {
							testid: "product-edit-drawer-retailer-id-input",
							value: Y,
							placeholder: s._(
								/*BTDS*/
								""
							),
							onChange: tt,
							theme: "small",
							customStyleThemes: [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated],
							maxLength: 100,
							error: Ce,
							title: s._(
								/*BTDS*/
								""
							)
						}),
						o("WAWebBizCatalogGatingUtils").showComplianceFieldsInEditProductDrawer(i.id) ? d.jsx(r("WAWebManageEditProductDrawerCompliance.react"), {
							isComplianceInfoAvailable: Fe,
							showComplianceInfoImporterAddress: dt(),
							complianceInfo: Ve,
							onComplianceInfoChange: bt,
							onComplianceInfoImporterAddressChange: Ct,
							lastUsedCountryCode: k,
							showComplianceInfoImporterNotApplicableToggle: mt(),
							handleComplianceInfoImporterToggleChange: it,
							importerInformationNotApplicableEnabled: We,
							selfCountryCode: T,
							countriesMap: Ke
						}) : null,
						$t,
						It
					]
				}) })
			]
		}, "catalog-link-drawer");
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = C;
}), 226);
