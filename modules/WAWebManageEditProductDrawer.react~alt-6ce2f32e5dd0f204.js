__d("WAWebManageEditProductDrawer.react", [
	"fbt",
	"Promise",
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
	"asyncToGeneratorRuntime",
	"nullthrows",
	"react",
	"stylex",
	"useVisibility",
	"useWAWebAsync",
	"useWAWebListener",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d, m = d || (d = o("react")), p = d, _ = p.useContext, f = p.useMemo, g = p.useRef, h = p.useState, y = {
		marginTop5: {
			marginTop: "x1ok221b",
			$$css: !0
		},
		marginBottom30: {
			marginBottom: "x4n8cb0",
			$$css: !0
		}
	}, C = {
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
	function b(t) {
		var a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.catalog, d = i.newProduct, p = d === void 0 ? !1 : d, b = i.onBack, v = i.onCancel, S = i.onCreate, R = i.onDelete, L = i.onEditSuccess, E = _(o("WAWebDrawerContext").DrawerContext), k = g(null), I = o("useWAWebModelValues").useModelValues(i.catalog, ["lastUsedCountryCode"]), T = I.lastUsedCountryCode, D = o("useWAWebModelValues").useModelValues(i.product, [
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
		]), x = f(function() {
			return o("WAWebBizComplianceUtil").getCountryShortcodeByWid(l.id);
		}, [l.id]), $ = r("useVisibility")({ onVisible: function() {
			o("WAWebCatalogLogEvents").logAddEditProductDetailsViewed(p);
		} }), P = $[0], N = function(t) {
			return o("WAWebManageEditProductDrawerHelpers").canDisplayPrice(t, !0);
		}, M = o("WAWebManageEditProductDrawerHelpers").getCurrencyCountryShortcode(x), w = D.currency != null ? D.currency : o("WAWebCurrencyUtils").currencyForCountryShortcode(M != null ? M : ""), A = N(w), F = h(D.name || ""), O = F[0], B = F[1], W = h(A ? D.priceAmount1000 : null), q = W[0], U = W[1], V = h(A ? D.salePriceAmount1000 : null), H = V[0], G = V[1], z = h(D.description || ""), j = z[0], K = z[1], Q = h(D.url || ""), X = Q[0], Y = Q[1], J = h(D.retailerId || ""), Z = J[0], ee = J[1], te = h(function() {
			if (D.priceAmount1000 != null && w != null && A) {
				var e = o("WAWebCurrencyUtils").formatAmount1000ToParts(w, D.priceAmount1000);
				return "" + e.integer + e.decimal;
			}
			return "";
		}), ne = te[0], re = te[1], oe = h(function() {
			if (D.salePriceAmount1000 != null && w != null && A) {
				var e = o("WAWebCurrencyUtils").formatAmount1000ToParts(w, D.salePriceAmount1000);
				return "" + e.integer + e.decimal;
			}
			return "";
		}), ae = oe[0], ie = oe[1], le = A ? w : "", se = h(!1), ue = se[0], ce = se[1], de = h(""), me = de[0], pe = de[1], _e = h(""), fe = _e[0], ge = _e[1], he = h(""), ye = he[0], Ce = he[1], be = h(""), ve = be[0], Se = be[1], Re = h(""), Le = Re[0], Ee = Re[1], ke = h(!!D.imageCdnUrl), Ie = ke[0], Te = ke[1], De = h(!1), xe = De[0], $e = De[1], Pe = h(D.isHidden), Ne = Pe[0], Me = Pe[1], we = h(!A), Ae = we[0], Fe = we[1], Oe = h(!1), Be = Oe[0], We = Oe[1], qe = h(!1), Ue = qe[0], Ve = qe[1], He = h(void 0), Ge = He[0], ze = He[1], je = q == null;
		o("useWAWebListener").useListener(D, "change:isHidden", function() {
			Me(D.isHidden);
		});
		var Ke = "";
		ae !== "" && !o("WAWebCurrencyUtils").validatePriceString(le, ae, o("WAWebProductModel").MIN_PRICE, o("WAWebProductModel").MAX_PRICE) ? Ke = s._(
			/*BTDS*/
			""
		) : q == null && H != null ? Ke = s._(
			/*BTDS*/
			""
		) : H != null && q != null && H >= q && (Ke = s._(
			/*BTDS*/
			""
		));
		var Qe = h(), Xe = Qe[0], Ye = Qe[1];
		function Je(e, t) {
			var n = (e == null ? void 0 : e.complianceInfo) || {}, r = n.countryCodeOrigin, a = n.importerAddress, i = n.importerName, l = r === String(o("WAWebSyntheticCountryCode").SyntheticCountryCode.NotApplicable) ? s._(
				/*BTDS*/
				""
			).toString() : o("WAWebCountriesUtils").getCountryNameWithMap(r, o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.META_RECOGNIZED, t), u = o("WAWebCountriesUtils").getCountryNameWithMap(a == null ? void 0 : a.countryCode, o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.META_RECOGNIZED, t);
			We(!0);
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
				if (d === !0) Ve(d);
				else {
					var m = c.some(o("WAWebBizComplianceUtil").existsFieldIgnoreHardEnforcement);
					Ve(!m);
				}
			}
			ze({
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
		var Ze = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				if (o("WAWebBizCatalogGatingUtils").showComplianceFieldsInEditProductDrawer(l.id)) {
					var t = p ? [o("WAWebLocaleModules").getCountryData()] : [o("WAWebLocaleModules").getCountryData(), o("WAWebCatalogCollection").CatalogCollection.findProduct({
						catalogWid: l.id,
						productId: D.id.toString(),
						shouldFetchComplianceFields: !0
					})], a = yield (c || (c = n("Promise"))).all(t), i = a[0];
					if (e.aborted) return;
					if (Ye(i), p) We(!0), T != null && o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled() && ze({
						countryCodeOrigin: T,
						countryNameOrigin: o("WAWebCountriesUtils").getCountryNameWithMap(T, o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.META_RECOGNIZED, i),
						importerAddress: {}
					});
					else {
						var s = r("nullthrows")(l).productCollection.get(D.id);
						Je(s, i);
					}
				}
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})();
		r("useWAWebAsync")(Ze, []);
		var et = function(t) {
			var e;
			(e = k.current) == null || e.handleFilePick(t);
		}, tt = function(t, n) {
			$e(t);
		}, nt = function(t) {
			var e = "";
			t.length === 0 && (e = s._(
				/*BTDS*/
				""
			)), Ee(e), Te(t.length > 0), Fe(!0);
		}, rt = function(t) {
			var e = t.text;
			e !== Z && (ee(e), Se(""), Fe(!0));
		}, ot = function(t) {
			var e = t.text;
			if (e !== X) {
				var n = "";
				e !== "" && !r("WAWebURLUtils").isValid(e) && (n = s._(
					/*BTDS*/
					""
				)), Y(e), Ce(n), Fe(!0);
			}
		}, at = function(t) {
			var e = t.text;
			e !== j && (K(e), Fe(!0));
		}, it = function(t) {
			var e = t.text;
			B(e), pe(e.trim() === "" ? s._(
				/*BTDS*/
				""
			) : ""), e !== O && Fe(!0);
		}, lt = function() {
			Me(function(e) {
				return !e;
			});
		}, st = function() {
			Ve(function(e) {
				return !e;
			});
		}, ut = function() {
			X !== "" && !r("WAWebURLUtils").isHttps(X) && !r("WAWebURLUtils").isHttp(X) && Y("https://" + X);
		}, ct = function(t) {
			var e = t.text, n = "" + e;
			if (n !== ne) {
				var r = o("WAWebCurrencyUtils").valueFromString(le, e), a = "";
				e !== "" && !o("WAWebCurrencyUtils").validatePriceString(le, e, o("WAWebProductModel").MIN_PRICE, o("WAWebProductModel").MAX_PRICE) && (a = s._(
					/*BTDS*/
					""
				)), U(e === "" ? null : r), re(n), ge(a), Fe(!0);
			}
		}, dt = function(t) {
			var e = t.text, n = o("WAWebCurrencyUtils").valueFromString(le, e);
			G(e === "" ? null : n), ie("" + e), Fe(!0);
		}, mt = function(t, n, r) {
			return o("WAWebManageEditProductDrawerHelpers").getImporterAddressFieldValueOnChange(Ge, t, n, r);
		}, pt = function() {
			return o("WAWebManageEditProductDrawerHelpers").shouldShowComplianceInfoImporterAddress(Ge, Ue);
		}, _t = function() {
			return o("WAWebManageEditProductDrawerHelpers").shouldShowComplianceInfoImporterNotApplicableToggle(Ge);
		}, ft = function() {
			return o("WAWebManageEditProductDrawerHelpers").shouldComplianceBeHardEnforced(l.id);
		}, gt = function(t, n) {
			o("WAWebManageEditProductDrawerSaveHandlers").handleEditError({
				e: t,
				markerId: n,
				newProduct: p,
				product: D,
				context: E,
				setImageError: Ee,
				setRetailerIdError: Se
			});
		}, ht = function() {
			o("WAWebManageEditProductDrawerSaveHandlers").handleDeleteItem({
				catalog: l,
				product: D,
				context: E,
				onDelete: R
			});
		}, yt = function(t) {
			o("WAWebManageEditProductDrawerSaveHandlers").handleEditSuccessFn({
				localProduct: t,
				catalog: l,
				newProduct: p,
				product: D,
				context: E,
				onEditSuccess: L,
				onCreate: S
			});
		}, Ct = function() {
			return o("WAWebManageEditProductDrawerHelpers").getComplianceProductChanges(Ge, Ue, o("WAWebBizCatalogGatingUtils").showComplianceFieldsInEditProductDrawer(l.id));
		}, bt = function() {
			return new (o("WAWebProductModel")).Product({
				id: D.id,
				priceAmount1000: q,
				salePriceAmount1000: q != null ? H : null,
				currency: le,
				description: j || "",
				imageCdnUrl: D.imageCdnUrl,
				additionalImageCdnUrl: D.additionalImageCdnUrl,
				videos: D.videos,
				name: O,
				retailerId: Z,
				url: X,
				isHidden: Ne,
				complianceInfo: Ct(),
				importerInformationExempt: Ue
			});
		}, vt = function(t, n) {
			var e = mt("street1", t, n), r = mt("street2", t, n), a = mt("postalCode", t, n), i = mt("city", t, n), l = mt("region", t, n), u = mt("countryCode", t, n), c = [
				e,
				r,
				a,
				i,
				l,
				u
			].some(o("WAWebIdentityFunction").identityFunction) || ft(), d = babelHelpers.extends({}, Ge, { importerAddress: babelHelpers.extends({}, Ge == null ? void 0 : Ge.importerAddress) });
			if (t === "countryCode") {
				var m = o("WAWebCountriesUtils").getCountryNameWithMap(n, o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.META_RECOGNIZED, Xe);
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
			) : "", Fe(!0), ze(d);
		}, St = function(t, n) {
			var e, r = babelHelpers.extends({}, Ge, { importerAddress: babelHelpers.extends({}, Ge == null ? void 0 : Ge.importerAddress) });
			t === "countryCodeOrigin" && (e = n === String(o("WAWebSyntheticCountryCode").SyntheticCountryCode.NotApplicable) ? s._(
				/*BTDS*/
				""
			).toString() : o("WAWebCountriesUtils").getCountryNameWithMap(n, o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.META_RECOGNIZED, Xe), r.countryNameOrigin = e, r.countryCodeOriginError = ""), t === "importerName" && (r.importerNameError = o("WAWebBizComplianceUtil").existsField(n, o("WAWebUserPrefsMeUser").getMeUserOrThrow()) || !ft() ? "" : s._(
				/*BTDS*/
				""
			)), n == null || n === "" ? delete r[t] : r[t] = n, Fe(!0), ze(r);
		}, Rt = function() {
			var e = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), t = ft() || o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled();
			if (!t || !Be) return !1;
			var n = babelHelpers.extends({}, Ge, { importerAddress: babelHelpers.extends({}, Ge == null ? void 0 : Ge.importerAddress) });
			if (!o("WAWebBizComplianceUtil").existsField(n.countryCodeOrigin, e) || o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled() && !o("WAWebBizComplianceUtil").existsFieldIgnoreHardEnforcement(n.countryCodeOrigin)) return n.countryCodeOriginError = s._(
				/*BTDS*/
				""
			), ze(n), !0;
			if (!pt()) return !1;
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
			), c = !0), c ? (ze(n), !0) : !1;
		}, Lt = function() {
			var e = bt();
			Rt() || (!p && o("WAWebCatalogLogEvents").logSMBAddEditProductDetailsSaveClicked(), o("WAWebManageEditProductDrawerSaveHandlers").saveItem({
				newProduct: p,
				isModified: Ae,
				product: D,
				productChanges: e,
				catalog: l,
				context: E,
				imagePanelRef: k,
				setIsUpdating: ce,
				handleEditError: gt,
				handleEditSuccess: yt,
				propsProduct: i.product
			}));
		}, Et = function() {
			if (ue || O.trim() === "" || Ie === !1) return !1;
			var e = [
				me,
				fe,
				Ke,
				ye,
				ve,
				Le
			];
			return pt() && e.push(Ge == null ? void 0 : Ge.importerNameError, Ge == null ? void 0 : Ge.importerAddress.street1Error, Ge == null ? void 0 : Ge.importerAddress.cityError, Ge == null ? void 0 : Ge.importerAddress.countryCodeError), (ft() || o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled()) && e.push(Ge == null ? void 0 : Ge.countryCodeOriginError), e.every(function(e) {
				return !e;
			});
		}, kt = m.jsx(o("WAWebButton.react").Button, {
			type: "primary",
			onClick: Lt,
			disabled: !Et(),
			testid: "product-edit-drawer-save-button",
			children: p ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			)
		}), It = p ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), Tt = m.jsxs("div", {
			className: "x78zum5 x6s0dn4",
			children: [m.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
				level: "2",
				weight: "normal",
				size: "inherit",
				children: It
			}), m.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginStartAuto), { children: kt }))]
		}), Dt = p ? null : m.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props([C.deleteButtonContainer, o("WDSMargins.stylex").wdsMargins.marginVer20]), { children: m.jsx(o("WAWebButton.react").Button, {
			type: "warning",
			onClick: ht,
			testid: "product-edit-drawer-delete-button",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), xt = u(C.productWrapper, o("WDSMargins.stylex").wdsMargins.marginHorAuto, o("WDSMargins.stylex").wdsMargins.marginVer0, ue && C.isSending), $t = xe ? m.jsx(r("WAWebDragAndDropMask.react"), {}) : null, Pt = ue ? m.jsx("div", {
			className: "x10l6tqk xh0rhid xbudbmw xupqr0c x11lhmoz",
			children: m.jsx(o("WAWebSpinner.react").Spinner, {
				size: 50,
				stroke: 3
			})
		}) : null, Nt = m.jsxs("div", {
			className: "x1anpbxc",
			children: [m.jsxs("div", {
				className: "x78zum5 x1q0g3np x6s0dn4",
				children: [m.jsx(o("WAWebCheckBox.react").CheckBox, {
					id: "product-hidden-check",
					onChange: lt,
					checked: Ne,
					disabled: !1
				}), m.jsx("label", {
					className: "x1n2onr6 xnfr1j x1hm9lzh",
					htmlFor: "product-hidden-check",
					children: s._(
						/*BTDS*/
						""
					)
				})]
			}), m.jsx("div", babelHelpers.extends({}, u.props([
				C.hiddenDescr,
				y.marginTop5,
				y.marginBottom30,
				o("WDSMargins.stylex").wdsMargins.marginStart28
			]), { children: s._(
				/*BTDS*/
				""
			) }))]
		}), Mt = f(function() {
			var e = le !== "" ? o("WAWebCurrencyUtils").formatAmount1000ToParts(le, 0).symbol : "";
			return s._(
				/*BTDS*/
				"",
				[s._param("currencySymbol", e)]
			);
		}, [le]), wt = f(function() {
			var e = le !== "" ? o("WAWebCurrencyUtils").formatAmount1000ToParts(le, 0).symbol : "";
			return s._(
				/*BTDS*/
				"",
				[s._param("currencySymbol", e)]
			);
		}, [le]), At = f(function() {
			return { surface: p ? "smb-catalog-create-product" : "smb-catalog-edit-product" };
		}, [p]);
		return m.jsxs(r("WAWebDrawer.react"), {
			ref: a,
			theme: "catalog",
			onDrop: et,
			onDragChange: tt,
			tsNavigationData: At,
			children: [
				$t,
				m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					testid: "catalog-link-title",
					title: Tt,
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
					onBack: b,
					onCancel: v,
					focusBackOrCancel: !0
				}),
				m.jsx(r("WAWebDrawerBody.react"), { children: m.jsxs("div", {
					ref: P,
					className: xt,
					children: [
						Pt,
						m.jsx(r("WAWebProductCatalogProductImagesEditPanel.react"), {
							product: D,
							maxImageCount: o("WAWebProductModel").MAX_PRODUCT_IMAGES,
							onChange: nt,
							ref: k,
							error: Le
						}),
						m.jsx(o("WAWebRichTextField.react").RichTextField, {
							testid: "product-edit-drawer-name-input",
							value: O,
							placeholder: s._(
								/*BTDS*/
								""
							),
							onChange: it,
							theme: "small",
							showRemaining: !0,
							customStyleThemes: [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated],
							maxLength: 150,
							error: me,
							title: s._(
								/*BTDS*/
								""
							)
						}),
						N(le) && m.jsx(o("WAWebRichTextField.react").RichTextField, {
							testid: "product-edit-drawer-price-input",
							value: ne,
							placeholder: Mt,
							onChange: ct,
							theme: "small",
							maxLength: 30,
							customStyleThemes: [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated],
							error: fe,
							title: s._(
								/*BTDS*/
								""
							)
						}),
						N(le) && m.jsx(o("WAWebRichTextField.react").RichTextField, {
							testid: "product-edit-drawer-sale-price-input",
							readOnly: je,
							value: ae,
							placeholder: wt,
							onChange: dt,
							theme: "small",
							maxLength: 30,
							customStyleThemes: je ? [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated, o("WAWebRichTextField.react").TextInputCustomStyleThemes.DisabledLabel] : [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated],
							error: Ke,
							title: s._(
								/*BTDS*/
								""
							)
						}),
						m.jsx(o("WAWebRichTextField.react").RichTextField, {
							testid: "product-edit-drawer-description-input",
							value: j,
							placeholder: s._(
								/*BTDS*/
								""
							),
							onChange: at,
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
						m.jsx(o("WAWebRichTextField.react").RichTextField, {
							testid: "product-edit-drawer-link-input",
							value: X,
							placeholder: s._(
								/*BTDS*/
								""
							),
							onChange: ot,
							onBlur: ut,
							theme: "small",
							customStyleThemes: [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated],
							maxLength: 75,
							error: ye,
							managed: !0,
							title: s._(
								/*BTDS*/
								""
							)
						}),
						m.jsx(o("WAWebRichTextField.react").RichTextField, {
							testid: "product-edit-drawer-retailer-id-input",
							value: Z,
							placeholder: s._(
								/*BTDS*/
								""
							),
							onChange: rt,
							theme: "small",
							customStyleThemes: [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated],
							maxLength: 100,
							error: ve,
							title: s._(
								/*BTDS*/
								""
							)
						}),
						o("WAWebBizCatalogGatingUtils").showComplianceFieldsInEditProductDrawer(l.id) ? m.jsx(r("WAWebManageEditProductDrawerCompliance.react"), {
							isComplianceInfoAvailable: Be,
							showComplianceInfoImporterAddress: pt(),
							complianceInfo: Ge,
							onComplianceInfoChange: St,
							onComplianceInfoImporterAddressChange: vt,
							lastUsedCountryCode: T,
							showComplianceInfoImporterNotApplicableToggle: _t(),
							handleComplianceInfoImporterToggleChange: st,
							importerInformationNotApplicableEnabled: Ue,
							selfCountryCode: x,
							countriesMap: Xe
						}) : null,
						Nt,
						Dt
					]
				}) })
			]
		}, "catalog-link-drawer");
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = b;
}), 226);
