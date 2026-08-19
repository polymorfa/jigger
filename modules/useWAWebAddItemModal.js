__d("useWAWebAddItemModal", [
	"fbt",
	"Promise",
	"WAWebAddCatalogItemForm.react",
	"WAWebBizCatalogGatingUtils",
	"WAWebBizProductCatalogBridge",
	"WAWebBusinessProfileLabels",
	"WAWebCatalogCollection",
	"WAWebCatalogItemFormUtils",
	"WAWebComplianceConstants",
	"WAWebConfirmPopup.react",
	"WAWebCountriesUtils",
	"WAWebCurrencyUtils",
	"WAWebDrawerHeader.react",
	"WAWebEditFormTypes",
	"WAWebFrontendCountriesUtils",
	"WAWebL10NCountryCodes",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebProductCatalogItemValidationUtils",
	"WAWebProductModel",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUserPrefsMeUser",
	"WDSIconIcAdd.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"WDSText.react",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
	"useWAWebAsync"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useMemo, p = d.useRef, _ = d.useState;
	function f(t, a) {
		var i = o("react-compiler-runtime").c(61), l = _(!1), u = l[0], d = l[1], m = _(o("WAWebEditFormTypes").EditType.EDITING), f = m[0], h = m[1], y = _(""), C = y[0], b = y[1], v = _(""), S = v[0], R = v[1], L = _(""), E = L[0], k = L[1], I = _(""), T = I[0], D = I[1], x = _(""), $ = x[0], P = x[1], N = _(""), M = N[0], w = N[1], A = _(""), F = A[0], O = A[1], B = _(""), W = B[0], q = B[1], U = _(!1), V = U[0], H = U[1], G;
		i[0] === Symbol.for("react.memo_cache_sentinel") ? (G = [], i[0] = G) : G = i[0];
		var z = _(G), j = z[0], K = z[1], Q = _(null), X = Q[0], Y = Q[1], J;
		i[1] === Symbol.for("react.memo_cache_sentinel") ? (J = [], i[1] = J) : J = i[1];
		var Z = _(J), ee = Z[0], te = Z[1], ne = p(null), re = p(null), oe = _(""), ae = oe[0], ie = oe[1], le = _(""), se = le[0], ue = le[1], ce = _(""), de = ce[0], me = ce[1], pe = _(""), _e = pe[0], fe = pe[1], ge = _(""), he = ge[0], ye = ge[1], Ce;
		i[2] === Symbol.for("react.memo_cache_sentinel") ? (Ce = o("WAWebCurrencyUtils").currencyForCountryShortcode(o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE().user)), i[2] = Ce) : Ce = i[2];
		var be = Ce, ve;
		i[3] !== t ? (ve = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				if (o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled() && t != null && t.id) {
					var n = yield o("WAWebCountriesUtils").getCountries({ filter: o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.META_RECOGNIZED });
					if (e.aborted) return;
					te(n);
					var r = t.lastUsedCountryCode;
					if (r != null) {
						O(r);
						var a = n.find(function(e) {
							var t = e[0];
							return t === r;
						});
						a && q(String(a[1]));
					}
				}
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), i[3] = t, i[4] = ve) : ve = i[4];
		var Se = ve, Re = t == null ? void 0 : t.id, Le;
		i[5] !== Re ? (Le = [Re], i[5] = Re, i[6] = Le) : Le = i[6], r("useWAWebAsync")(Se, Le);
		var Ee;
		e: {
			if (ee.length === 0) {
				var ke;
				i[7] === Symbol.for("react.memo_cache_sentinel") ? (ke = [], i[7] = ke) : ke = i[7], Ee = ke;
				break e;
			}
			var Ie;
			if (i[8] !== ee || i[9] !== F) {
				var Te = [];
				F !== "" ? Te.push(F) : Te.push(o("WAWebComplianceConstants").COMPLIANCE_INFO_CODES.INDIA), Ie = o("WAWebFrontendCountriesUtils").bubbleCountryOnListOfCountries(ee, Te), i[8] = ee, i[9] = F, i[10] = Ie;
			} else Ie = i[10];
			Ee = Ie;
		}
		var De = Ee, xe;
		i[11] === Symbol.for("react.memo_cache_sentinel") ? (xe = function(t) {
			b(t);
			var e = o("WAWebProductCatalogItemValidationUtils").validateItemName(t);
			ie(e.error);
		}, i[11] = xe) : xe = i[11];
		var $e = xe, Pe;
		i[12] === Symbol.for("react.memo_cache_sentinel") ? (Pe = function(t) {
			R(t);
			var e = o("WAWebProductCatalogItemValidationUtils").validateItemPrice(be, t);
			ue(e.error);
		}, i[12] = Pe) : Pe = i[12];
		var Ne = Pe, Me;
		i[13] !== S ? (Me = function(t) {
			k(t);
			var e = o("WAWebProductCatalogItemValidationUtils").validateItemSalePrice(be, t, S);
			me(e.error);
		}, i[13] = S, i[14] = Me) : Me = i[14];
		var we = Me, Ae;
		i[15] === Symbol.for("react.memo_cache_sentinel") ? (Ae = function(t) {
			P(t);
			var e = o("WAWebProductCatalogItemValidationUtils").validateItemLink(t);
			fe(e.error);
		}, i[15] = Ae) : Ae = i[15];
		var Fe = Ae, Oe;
		i[16] === Symbol.for("react.memo_cache_sentinel") ? (Oe = function() {
			P(g);
		}, i[16] = Oe) : Oe = i[16];
		var Be = Oe, We;
		i[17] !== ee ? (We = function(t) {
			O(t), ye("");
			var e = ee.find(function(e) {
				var n = e[0];
				return n === t;
			});
			e && q(String(e[1]));
		}, i[17] = ee, i[18] = We) : We = i[18];
		var qe = We, Ue;
		i[19] === Symbol.for("react.memo_cache_sentinel") ? (Ue = function(t) {
			K(t);
			var e = o("WAWebProductCatalogItemValidationUtils").validateItemImages(t);
			Y(e.isValid ? null : e.error);
		}, i[19] = Ue) : Ue = i[19];
		var Ve = Ue, He;
		i[20] === Symbol.for("react.memo_cache_sentinel") ? (He = function() {
			b(""), R(""), k(""), D(""), P(""), w(""), O(""), ye(""), H(!1), K([]), Y(null), h(o("WAWebEditFormTypes").EditType.EDITING), d(!0);
		}, i[20] = He) : He = i[20];
		var Ge = He, ze;
		i[21] === Symbol.for("react.memo_cache_sentinel") ? (ze = function() {
			o("WAWebModalManager").ModalManager.close(), d(!1);
		}, i[21] = ze) : ze = i[21];
		var je = ze, Ke;
		i[22] !== t || i[23] !== De || i[24] !== F || i[25] !== T || i[26] !== V || i[27] !== j || i[28] !== M || i[29] !== C || i[30] !== $ || i[31] !== _e || i[32] !== a || i[33] !== S || i[34] !== se || i[35] !== E || i[36] !== de ? (Ke = function() {
			var r = o("WAWebProductCatalogItemValidationUtils").validateCatalogItemForSave({
				countryOfOrigin: F,
				images: j,
				isCountryOfOriginRequired: o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled() && De.length > 0,
				itemName: C
			}), i = r.errors, l = r.hasBlockingError;
			ie(i.nameError), Y(i.imageError), ye(i.countryOfOriginError);
			var u = l || se !== "" || de !== "" || _e !== "";
			if (u) {
				window.requestAnimationFrame(function() {
					var e = o("WAWebCatalogItemFormUtils").focusFirstInvalidField(re.current);
					if (!e && i.imageError != null) {
						var t;
						(t = ne.current) == null || t.focus();
					}
				});
				return;
			}
			var d = ne.current;
			if (d == null) {
				o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
				return;
			}
			h(o("WAWebEditFormTypes").EditType.PENDING);
			var m = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(), p = t != null ? (e || (e = n("Promise"))).resolve(t) : o("WAWebBizProductCatalogBridge").createCatalog().then(function() {
				return o("WAWebCatalogCollection").CatalogCollection.find(m);
			});
			p.then(function(e) {
				return d.uploadImages().then(function(t) {
					var n = S !== "" ? o("WAWebCurrencyUtils").valueFromString(be, S) : null, r = E !== "" ? o("WAWebCurrencyUtils").valueFromString(be, E) : null, a = new (o("WAWebProductModel")).Product({
						additionalImageCdnUrl: t.slice(1),
						complianceInfo: F !== "" ? { countryCodeOrigin: F } : null,
						currency: be,
						description: T || "",
						imageCdnUrl: t[0],
						isHidden: V,
						name: C,
						priceAmount1000: n,
						retailerId: M || "",
						salePriceAmount1000: n != null ? r : null,
						url: $ || ""
					});
					return e.addProduct(a);
				});
			}).then(function() {
				o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) })), h(o("WAWebEditFormTypes").EditType.DONE), je(), a && a();
			}).catch(function() {
				o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) })), h(o("WAWebEditFormTypes").EditType.EDITING);
			});
		}, i[22] = t, i[23] = De, i[24] = F, i[25] = T, i[26] = V, i[27] = j, i[28] = M, i[29] = C, i[30] = $, i[31] = _e, i[32] = a, i[33] = S, i[34] = se, i[35] = E, i[36] = de, i[37] = Ke) : Ke = i[37];
		var Qe = Ke, Xe;
		i[38] === Symbol.for("react.memo_cache_sentinel") ? (Xe = c.jsx(r("WDSMenu.react"), { children: c.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcAdd.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onPress: Ge,
			testid: "add-item"
		}) }), i[38] = Xe) : Xe = i[38];
		var Ye = Xe, Je;
		if (i[39] !== De || i[40] !== F || i[41] !== he || i[42] !== W || i[43] !== T || i[44] !== f || i[45] !== qe || i[46] !== Qe || i[47] !== we || i[48] !== V || i[49] !== X || i[50] !== M || i[51] !== C || i[52] !== $ || i[53] !== _e || i[54] !== ae || i[55] !== S || i[56] !== se || i[57] !== E || i[58] !== de || i[59] !== u) {
			var Ze = function(t) {
				if (u) {
					var e, n = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
						title: (e = o("WAWebBusinessProfileLabels")).getAddItemModalTitle(),
						type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
						onCancel: je
					});
					return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
						okText: e.getAddToCatalogButtonLabel(),
						cancelText: e.getCancelButtonLabel(),
						type: o("WAWebModal.react").ModalTheme.BusinessProfile,
						onOK: Qe,
						onCancel: je,
						okSpinner: f === o("WAWebEditFormTypes").EditType.PENDING,
						okDisabled: f === o("WAWebEditFormTypes").EditType.PENDING,
						title: n,
						children: [c.jsx("div", {
							className: "x1aj3ljl xvpt6g3 x1phvje8 xcldk2z",
							children: c.jsx(r("WDSText.react"), {
								type: "Body2",
								colorName: "contentDeemphasized",
								children: e.getAddItemModalDescription()
							})
						}), c.jsx(r("WAWebAddCatalogItemForm.react"), {
							containerRef: re,
							currency: be,
							itemName: C,
							itemNameError: ae,
							onItemNameChange: $e,
							price: S,
							priceError: se,
							onPriceChange: Ne,
							salePrice: E,
							salePriceError: de,
							onSalePriceChange: we,
							description: T,
							onDescriptionChange: D,
							link: $,
							linkError: _e,
							onLinkChange: Fe,
							onLinkBlur: Be,
							itemCode: M,
							onItemCodeChange: w,
							_countryOfOrigin: F,
							_countryOfOriginError: he,
							_onCountryOfOriginChange: qe,
							countryOfOriginName: W,
							countriesOfOrigin: De,
							hideItem: V,
							onHideItemChange: H,
							onImageChange: Ve,
							imagePanelRef: ne,
							imageError: X
						})]
					});
				}
				return null;
			};
			Je = {
				handleAddItem: Ge,
				menu: Ye,
				renderModal: Ze
			}, i[39] = De, i[40] = F, i[41] = he, i[42] = W, i[43] = T, i[44] = f, i[45] = qe, i[46] = Qe, i[47] = we, i[48] = V, i[49] = X, i[50] = M, i[51] = C, i[52] = $, i[53] = _e, i[54] = ae, i[55] = S, i[56] = se, i[57] = E, i[58] = de, i[59] = u, i[60] = Je;
		} else Je = i[60];
		return Je;
	}
	function g(e) {
		return o("WAWebProductCatalogItemValidationUtils").autoPrefixLinkWithHttps(e);
	}
	l.default = f;
}), 226);
