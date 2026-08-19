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
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(253), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, c = l.catalog, m = l.newProduct, _ = l.onBack, C = l.onCancel, L = l.onCreate, E = l.onDelete, k = l.onEditSuccess, I = m === void 0 ? !1 : m, T = p(o("WAWebDrawerContext").DrawerContext), D = f(null), x;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (x = ["lastUsedCountryCode"], n[3] = x) : x = n[3];
		var $ = o("useWAWebModelValues").useModelValues(a.catalog, x), P = $.lastUsedCountryCode, N;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (N = [
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
		], n[4] = N) : N = n[4];
		var M = o("useWAWebModelValues").useModelValues(a.product, N), w;
		n[5] !== c.id ? (w = o("WAWebBizComplianceUtil").getCountryShortcodeByWid(c.id), n[5] = c.id, n[6] = w) : w = n[6];
		var A = w, F;
		n[7] !== I ? (F = { onVisible: function() {
			o("WAWebCatalogLogEvents").logAddEditProductDetailsViewed(I);
		} }, n[7] = I, n[8] = F) : F = n[8];
		var O = r("useVisibility")(F), B = O[0], W = R, q;
		if (n[9] !== M.currency || n[10] !== A) {
			var U = o("WAWebManageEditProductDrawerHelpers").getCurrencyCountryShortcode(A);
			q = M.currency != null ? M.currency : o("WAWebCurrencyUtils").currencyForCountryShortcode(U != null ? U : ""), n[9] = M.currency, n[10] = A, n[11] = q;
		} else q = n[11];
		var V = q, H;
		n[12] !== V ? (H = W(V), n[12] = V, n[13] = H) : H = n[13];
		var G = H, z = g(M.name || ""), j = z[0], K = z[1], Q = g(G ? M.priceAmount1000 : null), X = Q[0], Y = Q[1], J = g(G ? M.salePriceAmount1000 : null), Z = J[0], ee = J[1], te = g(M.description || ""), ne = te[0], re = te[1], oe = g(M.url || ""), ae = oe[0], ie = oe[1], le = g(M.retailerId || ""), se = le[0], ue = le[1], ce;
		n[14] !== M.priceAmount1000 || n[15] !== V || n[16] !== G ? (ce = function() {
			if (M.priceAmount1000 != null && V != null && G) {
				var e = o("WAWebCurrencyUtils").formatAmount1000ToParts(V, M.priceAmount1000);
				return "" + e.integer + e.decimal;
			}
			return "";
		}, n[14] = M.priceAmount1000, n[15] = V, n[16] = G, n[17] = ce) : ce = n[17];
		var de = g(ce), me = de[0], pe = de[1], _e;
		n[18] !== M.salePriceAmount1000 || n[19] !== V || n[20] !== G ? (_e = function() {
			if (M.salePriceAmount1000 != null && V != null && G) {
				var e = o("WAWebCurrencyUtils").formatAmount1000ToParts(V, M.salePriceAmount1000);
				return "" + e.integer + e.decimal;
			}
			return "";
		}, n[18] = M.salePriceAmount1000, n[19] = V, n[20] = G, n[21] = _e) : _e = n[21];
		var fe = g(_e), ge = fe[0], he = fe[1], ye = G ? V : "", Ce = g(!1), be = Ce[0], ve = Ce[1], Se = g(""), Re = Se[0], Le = Se[1], Ee = g(""), ke = Ee[0], Ie = Ee[1], Te = g(""), De = Te[0], xe = Te[1], $e = g(""), Pe = $e[0], Ne = $e[1], Me = g(""), we = Me[0], Ae = Me[1], Fe = g(!!M.imageCdnUrl), Oe = Fe[0], Be = Fe[1], We = g(!1), qe = We[0], Ue = We[1], Ve = g(M.isHidden), He = Ve[0], Ge = Ve[1], ze = g(!G), je = ze[0], Ke = ze[1], Qe = g(!1), Xe = Qe[0], Ye = Qe[1], Je = g(!1), Ze = Je[0], et = Je[1], tt = g(void 0), nt = tt[0], rt = tt[1], ot = X == null, at;
		n[22] !== M.isHidden ? (at = function() {
			Ge(M.isHidden);
		}, n[22] = M.isHidden, n[23] = at) : at = n[23], o("useWAWebListener").useListener(M, "change:isHidden", at);
		var it = "";
		ge !== "" && !o("WAWebCurrencyUtils").validatePriceString(ye, ge, o("WAWebProductModel").MIN_PRICE, o("WAWebProductModel").MAX_PRICE) ? it = s._(
			/*BTDS*/
			""
		) : X == null && Z != null ? it = s._(
			/*BTDS*/
			""
		) : Z != null && X != null && Z >= X && (it = s._(
			/*BTDS*/
			""
		));
		var lt = g(), st = lt[0], ut = lt[1], ct;
		n[24] === Symbol.for("react.memo_cache_sentinel") ? (ct = function(t, n) {
			var e = (t == null ? void 0 : t.complianceInfo) || {}, r = e.countryCodeOrigin, a = e.importerAddress, i = e.importerName, l = r === String(o("WAWebSyntheticCountryCode").SyntheticCountryCode.NotApplicable) ? s._(
				/*BTDS*/
				""
			).toString() : o("WAWebCountriesUtils").getCountryNameWithMap(r, o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.META_RECOGNIZED, n), u = o("WAWebCountriesUtils").getCountryNameWithMap(a == null ? void 0 : a.countryCode, o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.META_RECOGNIZED, n);
			Ye(!0);
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
				var d = t == null ? void 0 : t.importerInformationExempt;
				if (d === !0) et(d);
				else {
					var m = c.some(o("WAWebBizComplianceUtil").existsFieldIgnoreHardEnforcement);
					et(!m);
				}
			}
			rt({
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
		}, n[24] = ct) : ct = n[24];
		var dt = ct, mt;
		n[25] !== c || n[26] !== P || n[27] !== I || n[28] !== M.id ? (mt = async function(t) {
			if (o("WAWebBizCatalogGatingUtils").showComplianceFieldsInEditProductDrawer(c.id)) {
				var e = I ? [o("WAWebLocaleModules").getCountryData()] : [o("WAWebLocaleModules").getCountryData(), o("WAWebCatalogCollection").CatalogCollection.findProduct({
					catalogWid: c.id,
					productId: M.id.toString(),
					shouldFetchComplianceFields: !0
				})], n = await Promise.all(e), a = n[0];
				if (t.aborted) return;
				if (ut(a), I) Ye(!0), P != null && o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled() && rt({
					countryCodeOrigin: P,
					countryNameOrigin: o("WAWebCountriesUtils").getCountryNameWithMap(P, o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.META_RECOGNIZED, a),
					importerAddress: {}
				});
				else {
					var i = r("nullthrows")(c).productCollection.get(M.id);
					dt(i, a);
				}
			}
		}, n[25] = c, n[26] = P, n[27] = I, n[28] = M.id, n[29] = mt) : mt = n[29];
		var pt = mt, _t;
		n[30] === Symbol.for("react.memo_cache_sentinel") ? (_t = [], n[30] = _t) : _t = n[30], r("useWAWebAsync")(pt, _t);
		var ft;
		n[31] === Symbol.for("react.memo_cache_sentinel") ? (ft = function(t) {
			var e;
			(e = D.current) == null || e.handleFilePick(t);
		}, n[31] = ft) : ft = n[31];
		var gt = ft, ht;
		n[32] === Symbol.for("react.memo_cache_sentinel") ? (ht = function(t, n) {
			Ue(t);
		}, n[32] = ht) : ht = n[32];
		var yt = ht, Ct;
		n[33] === Symbol.for("react.memo_cache_sentinel") ? (Ct = function(t) {
			var e = "";
			t.length === 0 && (e = s._(
				/*BTDS*/
				""
			)), Ae(e), Be(t.length > 0), Ke(!0);
		}, n[33] = Ct) : Ct = n[33];
		var bt = Ct, vt;
		n[34] !== se ? (vt = function(t) {
			var e = t.text;
			e !== se && (ue(e), Ne(""), Ke(!0));
		}, n[34] = se, n[35] = vt) : vt = n[35];
		var St = vt, Rt;
		n[36] !== ae ? (Rt = function(t) {
			var e = t.text;
			if (e !== ae) {
				var n = "";
				e !== "" && !r("WAWebURLUtils").isValid(e) && (n = s._(
					/*BTDS*/
					""
				)), ie(e), xe(n), Ke(!0);
			}
		}, n[36] = ae, n[37] = Rt) : Rt = n[37];
		var Lt = Rt, Et;
		n[38] !== ne ? (Et = function(t) {
			var e = t.text;
			e !== ne && (re(e), Ke(!0));
		}, n[38] = ne, n[39] = Et) : Et = n[39];
		var kt = Et, It;
		n[40] !== j ? (It = function(t) {
			var e = t.text;
			K(e), Le(e.trim() === "" ? s._(
				/*BTDS*/
				""
			) : ""), e !== j && Ke(!0);
		}, n[40] = j, n[41] = It) : It = n[41];
		var Tt = It, Dt;
		n[42] === Symbol.for("react.memo_cache_sentinel") ? (Dt = function() {
			Ge(S);
		}, n[42] = Dt) : Dt = n[42];
		var xt = Dt, $t;
		n[43] === Symbol.for("react.memo_cache_sentinel") ? ($t = function() {
			et(v);
		}, n[43] = $t) : $t = n[43];
		var Pt = $t, Nt;
		n[44] !== ae ? (Nt = function() {
			ae !== "" && !r("WAWebURLUtils").isHttps(ae) && !r("WAWebURLUtils").isHttp(ae) && ie("https://" + ae);
		}, n[44] = ae, n[45] = Nt) : Nt = n[45];
		var Mt = Nt, wt;
		n[46] !== ye || n[47] !== me ? (wt = function(t) {
			var e = t.text, n = "" + e;
			if (n !== me) {
				var r = o("WAWebCurrencyUtils").valueFromString(ye, e), a = "";
				e !== "" && !o("WAWebCurrencyUtils").validatePriceString(ye, e, o("WAWebProductModel").MIN_PRICE, o("WAWebProductModel").MAX_PRICE) && (a = s._(
					/*BTDS*/
					""
				)), Y(e === "" ? null : r), pe(n), Ie(a), Ke(!0);
			}
		}, n[46] = ye, n[47] = me, n[48] = wt) : wt = n[48];
		var At = wt, Ft;
		n[49] !== ye ? (Ft = function(t) {
			var e = t.text, n = o("WAWebCurrencyUtils").valueFromString(ye, e);
			ee(e === "" ? null : n), he("" + e), Ke(!0);
		}, n[49] = ye, n[50] = Ft) : Ft = n[50];
		var Ot = Ft, Bt;
		n[51] !== nt ? (Bt = function(t, n, r) {
			return o("WAWebManageEditProductDrawerHelpers").getImporterAddressFieldValueOnChange(nt, t, n, r);
		}, n[51] = nt, n[52] = Bt) : Bt = n[52];
		var Wt = Bt, qt;
		n[53] !== nt || n[54] !== Ze ? (qt = function() {
			return o("WAWebManageEditProductDrawerHelpers").shouldShowComplianceInfoImporterAddress(nt, Ze);
		}, n[53] = nt, n[54] = Ze, n[55] = qt) : qt = n[55];
		var Ut = qt, Vt;
		n[56] !== nt ? (Vt = function() {
			return o("WAWebManageEditProductDrawerHelpers").shouldShowComplianceInfoImporterNotApplicableToggle(nt);
		}, n[56] = nt, n[57] = Vt) : Vt = n[57];
		var Ht = Vt, Gt;
		n[58] !== c.id ? (Gt = function() {
			return o("WAWebManageEditProductDrawerHelpers").shouldComplianceBeHardEnforced(c.id);
		}, n[58] = c.id, n[59] = Gt) : Gt = n[59];
		var zt = Gt, jt;
		n[60] !== T || n[61] !== I || n[62] !== M ? (jt = function(t, n) {
			o("WAWebManageEditProductDrawerSaveHandlers").handleEditError({
				e: t,
				markerId: n,
				newProduct: I,
				product: M,
				context: T,
				setImageError: Ae,
				setRetailerIdError: Ne
			});
		}, n[60] = T, n[61] = I, n[62] = M, n[63] = jt) : jt = n[63];
		var Kt = jt, Qt;
		n[64] !== c || n[65] !== T || n[66] !== E || n[67] !== M ? (Qt = function() {
			o("WAWebManageEditProductDrawerSaveHandlers").handleDeleteItem({
				catalog: c,
				product: M,
				context: T,
				onDelete: E
			});
		}, n[64] = c, n[65] = T, n[66] = E, n[67] = M, n[68] = Qt) : Qt = n[68];
		var Xt = Qt, Yt;
		n[69] !== c || n[70] !== T || n[71] !== I || n[72] !== L || n[73] !== k || n[74] !== M ? (Yt = function(t) {
			o("WAWebManageEditProductDrawerSaveHandlers").handleEditSuccessFn({
				localProduct: t,
				catalog: c,
				newProduct: I,
				product: M,
				context: T,
				onEditSuccess: k,
				onCreate: L
			});
		}, n[69] = c, n[70] = T, n[71] = I, n[72] = L, n[73] = k, n[74] = M, n[75] = Yt) : Yt = n[75];
		var Jt = Yt, Zt;
		n[76] !== c.id || n[77] !== nt || n[78] !== Ze ? (Zt = function() {
			return o("WAWebManageEditProductDrawerHelpers").getComplianceProductChanges(nt, Ze, o("WAWebBizCatalogGatingUtils").showComplianceFieldsInEditProductDrawer(c.id));
		}, n[76] = c.id, n[77] = nt, n[78] = Ze, n[79] = Zt) : Zt = n[79];
		var en = Zt, tn;
		n[80] !== ye || n[81] !== ne || n[82] !== en || n[83] !== Ze || n[84] !== He || n[85] !== j || n[86] !== X || n[87] !== M.additionalImageCdnUrl || n[88] !== M.id || n[89] !== M.imageCdnUrl || n[90] !== M.videos || n[91] !== se || n[92] !== Z || n[93] !== ae ? (tn = function() {
			return new (o("WAWebProductModel")).Product({
				id: M.id,
				priceAmount1000: X,
				salePriceAmount1000: X != null ? Z : null,
				currency: ye,
				description: ne || "",
				imageCdnUrl: M.imageCdnUrl,
				additionalImageCdnUrl: M.additionalImageCdnUrl,
				videos: M.videos,
				name: j,
				retailerId: se,
				url: ae,
				isHidden: He,
				complianceInfo: en(),
				importerInformationExempt: Ze
			});
		}, n[80] = ye, n[81] = ne, n[82] = en, n[83] = Ze, n[84] = He, n[85] = j, n[86] = X, n[87] = M.additionalImageCdnUrl, n[88] = M.id, n[89] = M.imageCdnUrl, n[90] = M.videos, n[91] = se, n[92] = Z, n[93] = ae, n[94] = tn) : tn = n[94];
		var nn = tn, rn;
		n[95] !== nt || n[96] !== st || n[97] !== Wt || n[98] !== zt ? (rn = function(t, n) {
			var e = Wt("street1", t, n), r = Wt("street2", t, n), a = Wt("postalCode", t, n), i = Wt("city", t, n), l = Wt("region", t, n), u = Wt("countryCode", t, n), c = [
				e,
				r,
				a,
				i,
				l,
				u
			].some(o("WAWebIdentityFunction").identityFunction) || zt(), d = babelHelpers.extends({}, nt, { importerAddress: babelHelpers.extends({}, nt == null ? void 0 : nt.importerAddress) });
			if (t === "countryCode") {
				var m = o("WAWebCountriesUtils").getCountryNameWithMap(n, o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.META_RECOGNIZED, st);
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
			) : "", Ke(!0), rt(d);
		}, n[95] = nt, n[96] = st, n[97] = Wt, n[98] = zt, n[99] = rn) : rn = n[99];
		var on = rn, an;
		n[100] !== nt || n[101] !== st || n[102] !== zt ? (an = function(t, n) {
			var e, r = babelHelpers.extends({}, nt, { importerAddress: babelHelpers.extends({}, nt == null ? void 0 : nt.importerAddress) });
			t === "countryCodeOrigin" && (e = n === String(o("WAWebSyntheticCountryCode").SyntheticCountryCode.NotApplicable) ? s._(
				/*BTDS*/
				""
			).toString() : o("WAWebCountriesUtils").getCountryNameWithMap(n, o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.META_RECOGNIZED, st), r.countryNameOrigin = e, r.countryCodeOriginError = ""), t === "importerName" && (r.importerNameError = o("WAWebBizComplianceUtil").existsField(n, o("WAWebUserPrefsMeUser").getMeUserOrThrow()) || !zt() ? "" : s._(
				/*BTDS*/
				""
			)), n == null || n === "" ? delete r[t] : r[t] = n, Ke(!0), rt(r);
		}, n[100] = nt, n[101] = st, n[102] = zt, n[103] = an) : an = n[103];
		var ln = an, sn;
		n[104] !== nt || n[105] !== Xe || n[106] !== zt || n[107] !== Ut ? (sn = function() {
			var e = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), t = zt() || o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled();
			if (!t || !Xe) return !1;
			var n = babelHelpers.extends({}, nt, { importerAddress: babelHelpers.extends({}, nt == null ? void 0 : nt.importerAddress) });
			if (!o("WAWebBizComplianceUtil").existsField(n.countryCodeOrigin, e) || o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled() && !o("WAWebBizComplianceUtil").existsFieldIgnoreHardEnforcement(n.countryCodeOrigin)) return n.countryCodeOriginError = s._(
				/*BTDS*/
				""
			), rt(n), !0;
			if (!Ut()) return !1;
			var r = n.importerAddress, a = n.importerName, i = r.city, l = r.countryCode, u = r.street1, c = !1;
			return o("WAWebBizComplianceUtil").existsField(a, e) || (n.importerNameError = s._(
				/*BTDS*/
				""
			), c = !0), o("WAWebBizComplianceUtil").existsFieldIgnoreHardEnforcement(u) || (n.importerAddress.street1Error = s._(
				/*BTDS*/
				""
			), c = !0), o("WAWebBizComplianceUtil").existsFieldIgnoreHardEnforcement(i) || (n.importerAddress.cityError = s._(
				/*BTDS*/
				""
			), c = !0), o("WAWebBizComplianceUtil").existsFieldIgnoreHardEnforcement(l) || (n.importerAddress.countryCodeError = s._(
				/*BTDS*/
				""
			), c = !0), c ? (rt(n), !0) : !1;
		}, n[104] = nt, n[105] = Xe, n[106] = zt, n[107] = Ut, n[108] = sn) : sn = n[108];
		var un = sn, cn;
		n[109] !== c || n[110] !== T || n[111] !== un || n[112] !== nn || n[113] !== Kt || n[114] !== Jt || n[115] !== je || n[116] !== I || n[117] !== M || n[118] !== a.product ? (cn = function() {
			var e = nn();
			un() || (!I && o("WAWebCatalogLogEvents").logSMBAddEditProductDetailsSaveClicked(), o("WAWebManageEditProductDrawerSaveHandlers").saveItem({
				newProduct: I,
				isModified: je,
				product: M,
				productChanges: e,
				catalog: c,
				context: T,
				imagePanelRef: D,
				setIsUpdating: ve,
				handleEditError: Kt,
				handleEditSuccess: Jt,
				propsProduct: a.product
			}));
		}, n[109] = c, n[110] = T, n[111] = un, n[112] = nn, n[113] = Kt, n[114] = Jt, n[115] = je, n[116] = I, n[117] = M, n[118] = a.product, n[119] = cn) : cn = n[119];
		var dn = cn, mn = function() {
			if (be || j.trim() === "" || Oe === !1) return !1;
			var e = [
				Re,
				ke,
				it,
				De,
				Pe,
				we
			];
			return Ut() && e.push(nt == null ? void 0 : nt.importerNameError, nt == null ? void 0 : nt.importerAddress.street1Error, nt == null ? void 0 : nt.importerAddress.cityError, nt == null ? void 0 : nt.importerAddress.countryCodeError), (zt() || o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled()) && e.push(nt == null ? void 0 : nt.countryCodeOriginError), e.every(b);
		}, pn = o("WAWebButton.react").Button, _n = "primary", fn = !mn(), gn;
		n[120] !== I ? (gn = I ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), n[120] = I, n[121] = gn) : gn = n[121];
		var hn;
		n[122] !== pn || n[123] !== dn || n[124] !== fn || n[125] !== gn ? (hn = d.jsx(pn, {
			type: _n,
			onClick: dn,
			disabled: fn,
			testid: "product-edit-drawer-save-button",
			children: gn
		}), n[122] = pn, n[123] = dn, n[124] = fn, n[125] = gn, n[126] = hn) : hn = n[126];
		var yn = hn, Cn;
		n[127] !== I ? (Cn = I ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), n[127] = I, n[128] = Cn) : Cn = n[128];
		var bn = Cn, vn;
		n[129] === Symbol.for("react.memo_cache_sentinel") ? (vn = { className: "x78zum5 x6s0dn4" }, n[129] = vn) : vn = n[129];
		var Sn;
		n[130] !== bn ? (Sn = d.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
			level: "2",
			weight: "normal",
			size: "inherit",
			children: bn
		}), n[130] = bn, n[131] = Sn) : Sn = n[131];
		var Rn;
		n[132] === Symbol.for("react.memo_cache_sentinel") ? (Rn = (u || (u = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginStartAuto), n[132] = Rn) : Rn = n[132];
		var Ln;
		n[133] !== yn ? (Ln = d.jsx("div", babelHelpers.extends({}, Rn, { children: yn })), n[133] = yn, n[134] = Ln) : Ln = n[134];
		var En;
		n[135] !== Sn || n[136] !== Ln ? (En = d.jsxs("div", babelHelpers.extends({}, vn, { children: [Sn, Ln] })), n[135] = Sn, n[136] = Ln, n[137] = En) : En = n[137];
		var kn = En, In;
		n[138] !== Xt || n[139] !== I ? (In = I ? null : d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props([y.deleteButtonContainer, o("WDSMargins.stylex").wdsMargins.marginVer20]), { children: d.jsx(o("WAWebButton.react").Button, {
			type: "warning",
			onClick: Xt,
			testid: "product-edit-drawer-delete-button",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), n[138] = Xt, n[139] = I, n[140] = In) : In = n[140];
		var Tn = In, Dn;
		n[141] !== be ? (Dn = (u || (u = r("stylex")))(y.productWrapper, o("WDSMargins.stylex").wdsMargins.marginHorAuto, o("WDSMargins.stylex").wdsMargins.marginVer0, be && y.isSending), n[141] = be, n[142] = Dn) : Dn = n[142];
		var xn = Dn, $n;
		n[143] !== qe ? ($n = qe ? d.jsx(r("WAWebDragAndDropMask.react"), {}) : null, n[143] = qe, n[144] = $n) : $n = n[144];
		var Pn = $n, Nn;
		n[145] !== be ? (Nn = be ? d.jsx("div", {
			className: "x10l6tqk xh0rhid xbudbmw xupqr0c x11lhmoz",
			children: d.jsx(o("WAWebSpinner.react").Spinner, {
				size: 50,
				stroke: 3
			})
		}) : null, n[145] = be, n[146] = Nn) : Nn = n[146];
		var Mn = Nn, wn, An;
		n[147] === Symbol.for("react.memo_cache_sentinel") ? (wn = { className: "x1anpbxc" }, An = { className: "x78zum5 x1q0g3np x6s0dn4" }, n[147] = wn, n[148] = An) : (wn = n[147], An = n[148]);
		var Fn;
		n[149] !== xt || n[150] !== He ? (Fn = d.jsx(o("WAWebCheckBox.react").CheckBox, {
			id: "product-hidden-check",
			onChange: xt,
			checked: He,
			disabled: !1
		}), n[149] = xt, n[150] = He, n[151] = Fn) : Fn = n[151];
		var On;
		n[152] === Symbol.for("react.memo_cache_sentinel") ? (On = { className: "x1n2onr6 xnfr1j x1hm9lzh" }, n[152] = On) : On = n[152];
		var Bn;
		n[153] === Symbol.for("react.memo_cache_sentinel") ? (Bn = d.jsx("label", babelHelpers.extends({}, On, {
			htmlFor: "product-hidden-check",
			children: s._(
				/*BTDS*/
				""
			)
		})), n[153] = Bn) : Bn = n[153];
		var Wn;
		n[154] !== Fn ? (Wn = d.jsxs("div", babelHelpers.extends({}, An, { children: [Fn, Bn] })), n[154] = Fn, n[155] = Wn) : Wn = n[155];
		var qn;
		n[156] === Symbol.for("react.memo_cache_sentinel") ? (qn = d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props([
			y.hiddenDescr,
			h.marginTop5,
			h.marginBottom30,
			o("WDSMargins.stylex").wdsMargins.marginStart28
		]), { children: s._(
			/*BTDS*/
			""
		) })), n[156] = qn) : qn = n[156];
		var Un;
		n[157] !== Wn ? (Un = d.jsxs("div", babelHelpers.extends({}, wn, { children: [Wn, qn] })), n[157] = Wn, n[158] = Un) : Un = n[158];
		var Vn = Un, Hn;
		n[159] !== ye ? (Hn = ye !== "" ? o("WAWebCurrencyUtils").formatAmount1000ToParts(ye, 0).symbol : "", n[159] = ye, n[160] = Hn) : Hn = n[160];
		var Gn = Hn, zn;
		n[161] !== Gn ? (zn = s._(
			/*BTDS*/
			"",
			[s._param("currencySymbol", Gn)]
		), n[161] = Gn, n[162] = zn) : zn = n[162];
		var jn = zn, Kn;
		n[163] !== ye ? (Kn = ye !== "" ? o("WAWebCurrencyUtils").formatAmount1000ToParts(ye, 0).symbol : "", n[163] = ye, n[164] = Kn) : Kn = n[164];
		var Qn = Kn, Xn;
		n[165] !== Qn ? (Xn = s._(
			/*BTDS*/
			"",
			[s._param("currencySymbol", Qn)]
		), n[165] = Qn, n[166] = Xn) : Xn = n[166];
		var Yn = Xn, Jn = I ? "smb-catalog-create-product" : "smb-catalog-edit-product", Zn;
		n[167] !== Jn ? (Zn = { surface: Jn }, n[167] = Jn, n[168] = Zn) : Zn = n[168];
		var er = Zn, tr;
		n[169] !== _ || n[170] !== C || n[171] !== kn ? (tr = d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			testid: "catalog-link-title",
			title: kn,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: _,
			onCancel: C,
			focusBackOrCancel: !0
		}), n[169] = _, n[170] = C, n[171] = kn, n[172] = tr) : tr = n[172];
		var nr;
		n[173] !== bt || n[174] !== we || n[175] !== M ? (nr = d.jsx(r("WAWebProductCatalogProductImagesEditPanel.react"), {
			product: M,
			maxImageCount: o("WAWebProductModel").MAX_PRODUCT_IMAGES,
			onChange: bt,
			ref: D,
			error: we
		}), n[173] = bt, n[174] = we, n[175] = M, n[176] = nr) : nr = n[176];
		var rr;
		n[177] === Symbol.for("react.memo_cache_sentinel") ? (rr = s._(
			/*BTDS*/
			""
		), n[177] = rr) : rr = n[177];
		var or;
		n[178] === Symbol.for("react.memo_cache_sentinel") ? (or = [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated], n[178] = or) : or = n[178];
		var ar;
		n[179] === Symbol.for("react.memo_cache_sentinel") ? (ar = s._(
			/*BTDS*/
			""
		), n[179] = ar) : ar = n[179];
		var ir;
		n[180] !== Tt || n[181] !== j || n[182] !== Re ? (ir = d.jsx(o("WAWebRichTextField.react").RichTextField, {
			testid: "product-edit-drawer-name-input",
			value: j,
			placeholder: rr,
			onChange: Tt,
			theme: "small",
			showRemaining: !0,
			customStyleThemes: or,
			maxLength: 150,
			error: Re,
			title: ar
		}), n[180] = Tt, n[181] = j, n[182] = Re, n[183] = ir) : ir = n[183];
		var lr;
		n[184] !== ye || n[185] !== At || n[186] !== ke || n[187] !== jn || n[188] !== me ? (lr = W(ye) && d.jsx(o("WAWebRichTextField.react").RichTextField, {
			testid: "product-edit-drawer-price-input",
			value: me,
			placeholder: jn,
			onChange: At,
			theme: "small",
			maxLength: 30,
			customStyleThemes: [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated],
			error: ke,
			title: s._(
				/*BTDS*/
				""
			)
		}), n[184] = ye, n[185] = At, n[186] = ke, n[187] = jn, n[188] = me, n[189] = lr) : lr = n[189];
		var sr;
		n[190] !== ye || n[191] !== Ot || n[192] !== ot || n[193] !== it || n[194] !== Yn || n[195] !== ge ? (sr = W(ye) && d.jsx(o("WAWebRichTextField.react").RichTextField, {
			testid: "product-edit-drawer-sale-price-input",
			readOnly: ot,
			value: ge,
			placeholder: Yn,
			onChange: Ot,
			theme: "small",
			maxLength: 30,
			customStyleThemes: ot ? [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated, o("WAWebRichTextField.react").TextInputCustomStyleThemes.DisabledLabel] : [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated],
			error: it,
			title: s._(
				/*BTDS*/
				""
			)
		}), n[190] = ye, n[191] = Ot, n[192] = ot, n[193] = it, n[194] = Yn, n[195] = ge, n[196] = sr) : sr = n[196];
		var ur;
		n[197] === Symbol.for("react.memo_cache_sentinel") ? (ur = s._(
			/*BTDS*/
			""
		), n[197] = ur) : ur = n[197];
		var cr;
		n[198] === Symbol.for("react.memo_cache_sentinel") ? (cr = [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated], n[198] = cr) : cr = n[198];
		var dr;
		n[199] === Symbol.for("react.memo_cache_sentinel") ? (dr = s._(
			/*BTDS*/
			""
		), n[199] = dr) : dr = n[199];
		var mr;
		n[200] !== ne || n[201] !== kt ? (mr = d.jsx(o("WAWebRichTextField.react").RichTextField, {
			testid: "product-edit-drawer-description-input",
			value: ne,
			placeholder: ur,
			onChange: kt,
			theme: "small",
			showRemaining: !0,
			maxLength: 5e3,
			customStyleThemes: cr,
			multiline: !0,
			title: dr
		}), n[200] = ne, n[201] = kt, n[202] = mr) : mr = n[202];
		var pr;
		n[203] === Symbol.for("react.memo_cache_sentinel") ? (pr = s._(
			/*BTDS*/
			""
		), n[203] = pr) : pr = n[203];
		var _r;
		n[204] === Symbol.for("react.memo_cache_sentinel") ? (_r = [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated], n[204] = _r) : _r = n[204];
		var fr;
		n[205] === Symbol.for("react.memo_cache_sentinel") ? (fr = s._(
			/*BTDS*/
			""
		), n[205] = fr) : fr = n[205];
		var gr;
		n[206] !== Mt || n[207] !== Lt || n[208] !== ae || n[209] !== De ? (gr = d.jsx(o("WAWebRichTextField.react").RichTextField, {
			testid: "product-edit-drawer-link-input",
			value: ae,
			placeholder: pr,
			onChange: Lt,
			onBlur: Mt,
			theme: "small",
			customStyleThemes: _r,
			maxLength: 75,
			error: De,
			managed: !0,
			title: fr
		}), n[206] = Mt, n[207] = Lt, n[208] = ae, n[209] = De, n[210] = gr) : gr = n[210];
		var hr;
		n[211] === Symbol.for("react.memo_cache_sentinel") ? (hr = s._(
			/*BTDS*/
			""
		), n[211] = hr) : hr = n[211];
		var yr;
		n[212] === Symbol.for("react.memo_cache_sentinel") ? (yr = [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated], n[212] = yr) : yr = n[212];
		var Cr;
		n[213] === Symbol.for("react.memo_cache_sentinel") ? (Cr = s._(
			/*BTDS*/
			""
		), n[213] = Cr) : Cr = n[213];
		var br;
		n[214] !== St || n[215] !== se || n[216] !== Pe ? (br = d.jsx(o("WAWebRichTextField.react").RichTextField, {
			testid: "product-edit-drawer-retailer-id-input",
			value: se,
			placeholder: hr,
			onChange: St,
			theme: "small",
			customStyleThemes: yr,
			maxLength: 100,
			error: Pe,
			title: Cr
		}), n[214] = St, n[215] = se, n[216] = Pe, n[217] = br) : br = n[217];
		var vr;
		n[218] !== c.id || n[219] !== nt || n[220] !== st || n[221] !== ln || n[222] !== on || n[223] !== Pt || n[224] !== Ze || n[225] !== Xe || n[226] !== P || n[227] !== A || n[228] !== Ut || n[229] !== Ht ? (vr = o("WAWebBizCatalogGatingUtils").showComplianceFieldsInEditProductDrawer(c.id) ? d.jsx(r("WAWebManageEditProductDrawerCompliance.react"), {
			isComplianceInfoAvailable: Xe,
			showComplianceInfoImporterAddress: Ut(),
			complianceInfo: nt,
			onComplianceInfoChange: ln,
			onComplianceInfoImporterAddressChange: on,
			lastUsedCountryCode: P,
			showComplianceInfoImporterNotApplicableToggle: Ht(),
			handleComplianceInfoImporterToggleChange: Pt,
			importerInformationNotApplicableEnabled: Ze,
			selfCountryCode: A,
			countriesMap: st
		}) : null, n[218] = c.id, n[219] = nt, n[220] = st, n[221] = ln, n[222] = on, n[223] = Pt, n[224] = Ze, n[225] = Xe, n[226] = P, n[227] = A, n[228] = Ut, n[229] = Ht, n[230] = vr) : vr = n[230];
		var Sr;
		n[231] !== Tn || n[232] !== B || n[233] !== Mn || n[234] !== nr || n[235] !== ir || n[236] !== lr || n[237] !== sr || n[238] !== mr || n[239] !== gr || n[240] !== br || n[241] !== vr || n[242] !== Vn || n[243] !== xn ? (Sr = d.jsx(r("WAWebDrawerBody.react"), { children: d.jsxs("div", {
			ref: B,
			className: xn,
			children: [
				Mn,
				nr,
				ir,
				lr,
				sr,
				mr,
				gr,
				br,
				vr,
				Vn,
				Tn
			]
		}) }), n[231] = Tn, n[232] = B, n[233] = Mn, n[234] = nr, n[235] = ir, n[236] = lr, n[237] = sr, n[238] = mr, n[239] = gr, n[240] = br, n[241] = vr, n[242] = Vn, n[243] = xn, n[244] = Sr) : Sr = n[244];
		var Rr;
		return n[245] !== Pn || n[246] !== yt || n[247] !== gt || n[248] !== i || n[249] !== tr || n[250] !== Sr || n[251] !== er ? (Rr = d.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			theme: "catalog",
			onDrop: gt,
			onDragChange: yt,
			tsNavigationData: er,
			children: [
				Pn,
				tr,
				Sr
			]
		}, "catalog-link-drawer"), n[245] = Pn, n[246] = yt, n[247] = gt, n[248] = i, n[249] = tr, n[250] = Sr, n[251] = er, n[252] = Rr) : Rr = n[252], Rr;
	}
	function b(e) {
		return !e;
	}
	function v(e) {
		return !e;
	}
	function S(e) {
		return !e;
	}
	function R(e) {
		return o("WAWebManageEditProductDrawerHelpers").canDisplayPrice(e, !0);
	}
	l.default = C;
}), 226);
