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
	"react-compiler-runtime",
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
		var a = o("react-compiler-runtime").c(253), i, l;
		a[0] !== t ? (l = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), a[0] = t, a[1] = i, a[2] = l) : (i = a[1], l = a[2]);
		var d = i, p = d.catalog, f = d.newProduct, b = d.onBack, E = d.onCancel, k = d.onCreate, I = d.onDelete, T = d.onEditSuccess, D = f === void 0 ? !1 : f, x = _(o("WAWebDrawerContext").DrawerContext), $ = g(null), P;
		a[3] === Symbol.for("react.memo_cache_sentinel") ? (P = ["lastUsedCountryCode"], a[3] = P) : P = a[3];
		var N = o("useWAWebModelValues").useModelValues(i.catalog, P), M = N.lastUsedCountryCode, w;
		a[4] === Symbol.for("react.memo_cache_sentinel") ? (w = [
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
		], a[4] = w) : w = a[4];
		var A = o("useWAWebModelValues").useModelValues(i.product, w), F;
		a[5] !== p.id ? (F = o("WAWebBizComplianceUtil").getCountryShortcodeByWid(p.id), a[5] = p.id, a[6] = F) : F = a[6];
		var O = F, B;
		a[7] !== D ? (B = { onVisible: function() {
			o("WAWebCatalogLogEvents").logAddEditProductDetailsViewed(D);
		} }, a[7] = D, a[8] = B) : B = a[8];
		var W = r("useVisibility")(B), q = W[0], U = L, V;
		if (a[9] !== A.currency || a[10] !== O) {
			var H = o("WAWebManageEditProductDrawerHelpers").getCurrencyCountryShortcode(O);
			V = A.currency != null ? A.currency : o("WAWebCurrencyUtils").currencyForCountryShortcode(H != null ? H : ""), a[9] = A.currency, a[10] = O, a[11] = V;
		} else V = a[11];
		var G = V, z;
		a[12] !== G ? (z = U(G), a[12] = G, a[13] = z) : z = a[13];
		var j = z, K = h(A.name || ""), Q = K[0], X = K[1], Y = h(j ? A.priceAmount1000 : null), J = Y[0], Z = Y[1], ee = h(j ? A.salePriceAmount1000 : null), te = ee[0], ne = ee[1], re = h(A.description || ""), oe = re[0], ae = re[1], ie = h(A.url || ""), le = ie[0], se = ie[1], ue = h(A.retailerId || ""), ce = ue[0], de = ue[1], me;
		a[14] !== A.priceAmount1000 || a[15] !== G || a[16] !== j ? (me = function() {
			if (A.priceAmount1000 != null && G != null && j) {
				var e = o("WAWebCurrencyUtils").formatAmount1000ToParts(G, A.priceAmount1000);
				return "" + e.integer + e.decimal;
			}
			return "";
		}, a[14] = A.priceAmount1000, a[15] = G, a[16] = j, a[17] = me) : me = a[17];
		var pe = h(me), _e = pe[0], fe = pe[1], ge;
		a[18] !== A.salePriceAmount1000 || a[19] !== G || a[20] !== j ? (ge = function() {
			if (A.salePriceAmount1000 != null && G != null && j) {
				var e = o("WAWebCurrencyUtils").formatAmount1000ToParts(G, A.salePriceAmount1000);
				return "" + e.integer + e.decimal;
			}
			return "";
		}, a[18] = A.salePriceAmount1000, a[19] = G, a[20] = j, a[21] = ge) : ge = a[21];
		var he = h(ge), ye = he[0], Ce = he[1], be = j ? G : "", ve = h(!1), Se = ve[0], Re = ve[1], Le = h(""), Ee = Le[0], ke = Le[1], Ie = h(""), Te = Ie[0], De = Ie[1], xe = h(""), $e = xe[0], Pe = xe[1], Ne = h(""), Me = Ne[0], we = Ne[1], Ae = h(""), Fe = Ae[0], Oe = Ae[1], Be = h(!!A.imageCdnUrl), We = Be[0], qe = Be[1], Ue = h(!1), Ve = Ue[0], He = Ue[1], Ge = h(A.isHidden), ze = Ge[0], je = Ge[1], Ke = h(!j), Qe = Ke[0], Xe = Ke[1], Ye = h(!1), Je = Ye[0], Ze = Ye[1], et = h(!1), tt = et[0], nt = et[1], rt = h(void 0), ot = rt[0], at = rt[1], it = J == null, lt;
		a[22] !== A.isHidden ? (lt = function() {
			je(A.isHidden);
		}, a[22] = A.isHidden, a[23] = lt) : lt = a[23], o("useWAWebListener").useListener(A, "change:isHidden", lt);
		var st = "";
		ye !== "" && !o("WAWebCurrencyUtils").validatePriceString(be, ye, o("WAWebProductModel").MIN_PRICE, o("WAWebProductModel").MAX_PRICE) ? st = s._(
			/*BTDS*/
			""
		) : J == null && te != null ? st = s._(
			/*BTDS*/
			""
		) : te != null && J != null && te >= J && (st = s._(
			/*BTDS*/
			""
		));
		var ut = h(), ct = ut[0], dt = ut[1], mt;
		a[24] === Symbol.for("react.memo_cache_sentinel") ? (mt = function(t, n) {
			var e = (t == null ? void 0 : t.complianceInfo) || {}, r = e.countryCodeOrigin, a = e.importerAddress, i = e.importerName, l = r === String(o("WAWebSyntheticCountryCode").SyntheticCountryCode.NotApplicable) ? s._(
				/*BTDS*/
				""
			).toString() : o("WAWebCountriesUtils").getCountryNameWithMap(r, o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.META_RECOGNIZED, n), u = o("WAWebCountriesUtils").getCountryNameWithMap(a == null ? void 0 : a.countryCode, o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.META_RECOGNIZED, n);
			Ze(!0);
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
				if (d === !0) nt(d);
				else {
					var m = c.some(o("WAWebBizComplianceUtil").existsFieldIgnoreHardEnforcement);
					nt(!m);
				}
			}
			at({
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
		}, a[24] = mt) : mt = a[24];
		var pt = mt, _t;
		a[25] !== p || a[26] !== M || a[27] !== D || a[28] !== A.id ? (_t = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				if (o("WAWebBizCatalogGatingUtils").showComplianceFieldsInEditProductDrawer(p.id)) {
					var t = D ? [o("WAWebLocaleModules").getCountryData()] : [o("WAWebLocaleModules").getCountryData(), o("WAWebCatalogCollection").CatalogCollection.findProduct({
						catalogWid: p.id,
						productId: A.id.toString(),
						shouldFetchComplianceFields: !0
					})], a = yield (c || (c = n("Promise"))).all(t), i = a[0];
					if (e.aborted) return;
					if (dt(i), D) Ze(!0), M != null && o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled() && at({
						countryCodeOrigin: M,
						countryNameOrigin: o("WAWebCountriesUtils").getCountryNameWithMap(M, o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.META_RECOGNIZED, i),
						importerAddress: {}
					});
					else {
						var l = r("nullthrows")(p).productCollection.get(A.id);
						pt(l, i);
					}
				}
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), a[25] = p, a[26] = M, a[27] = D, a[28] = A.id, a[29] = _t) : _t = a[29];
		var ft = _t, gt;
		a[30] === Symbol.for("react.memo_cache_sentinel") ? (gt = [], a[30] = gt) : gt = a[30], r("useWAWebAsync")(ft, gt);
		var ht;
		a[31] === Symbol.for("react.memo_cache_sentinel") ? (ht = function(t) {
			var e;
			(e = $.current) == null || e.handleFilePick(t);
		}, a[31] = ht) : ht = a[31];
		var yt = ht, Ct;
		a[32] === Symbol.for("react.memo_cache_sentinel") ? (Ct = function(t, n) {
			He(t);
		}, a[32] = Ct) : Ct = a[32];
		var bt = Ct, vt;
		a[33] === Symbol.for("react.memo_cache_sentinel") ? (vt = function(t) {
			var e = "";
			t.length === 0 && (e = s._(
				/*BTDS*/
				""
			)), Oe(e), qe(t.length > 0), Xe(!0);
		}, a[33] = vt) : vt = a[33];
		var St = vt, Rt;
		a[34] !== ce ? (Rt = function(t) {
			var e = t.text;
			e !== ce && (de(e), we(""), Xe(!0));
		}, a[34] = ce, a[35] = Rt) : Rt = a[35];
		var Lt = Rt, Et;
		a[36] !== le ? (Et = function(t) {
			var e = t.text;
			if (e !== le) {
				var n = "";
				e !== "" && !r("WAWebURLUtils").isValid(e) && (n = s._(
					/*BTDS*/
					""
				)), se(e), Pe(n), Xe(!0);
			}
		}, a[36] = le, a[37] = Et) : Et = a[37];
		var kt = Et, It;
		a[38] !== oe ? (It = function(t) {
			var e = t.text;
			e !== oe && (ae(e), Xe(!0));
		}, a[38] = oe, a[39] = It) : It = a[39];
		var Tt = It, Dt;
		a[40] !== Q ? (Dt = function(t) {
			var e = t.text;
			X(e), ke(e.trim() === "" ? s._(
				/*BTDS*/
				""
			) : ""), e !== Q && Xe(!0);
		}, a[40] = Q, a[41] = Dt) : Dt = a[41];
		var xt = Dt, $t;
		a[42] === Symbol.for("react.memo_cache_sentinel") ? ($t = function() {
			je(R);
		}, a[42] = $t) : $t = a[42];
		var Pt = $t, Nt;
		a[43] === Symbol.for("react.memo_cache_sentinel") ? (Nt = function() {
			nt(S);
		}, a[43] = Nt) : Nt = a[43];
		var Mt = Nt, wt;
		a[44] !== le ? (wt = function() {
			le !== "" && !r("WAWebURLUtils").isHttps(le) && !r("WAWebURLUtils").isHttp(le) && se("https://" + le);
		}, a[44] = le, a[45] = wt) : wt = a[45];
		var At = wt, Ft;
		a[46] !== be || a[47] !== _e ? (Ft = function(t) {
			var e = t.text, n = "" + e;
			if (n !== _e) {
				var r = o("WAWebCurrencyUtils").valueFromString(be, e), a = "";
				e !== "" && !o("WAWebCurrencyUtils").validatePriceString(be, e, o("WAWebProductModel").MIN_PRICE, o("WAWebProductModel").MAX_PRICE) && (a = s._(
					/*BTDS*/
					""
				)), Z(e === "" ? null : r), fe(n), De(a), Xe(!0);
			}
		}, a[46] = be, a[47] = _e, a[48] = Ft) : Ft = a[48];
		var Ot = Ft, Bt;
		a[49] !== be ? (Bt = function(t) {
			var e = t.text, n = o("WAWebCurrencyUtils").valueFromString(be, e);
			ne(e === "" ? null : n), Ce("" + e), Xe(!0);
		}, a[49] = be, a[50] = Bt) : Bt = a[50];
		var Wt = Bt, qt;
		a[51] !== ot ? (qt = function(t, n, r) {
			return o("WAWebManageEditProductDrawerHelpers").getImporterAddressFieldValueOnChange(ot, t, n, r);
		}, a[51] = ot, a[52] = qt) : qt = a[52];
		var Ut = qt, Vt;
		a[53] !== ot || a[54] !== tt ? (Vt = function() {
			return o("WAWebManageEditProductDrawerHelpers").shouldShowComplianceInfoImporterAddress(ot, tt);
		}, a[53] = ot, a[54] = tt, a[55] = Vt) : Vt = a[55];
		var Ht = Vt, Gt;
		a[56] !== ot ? (Gt = function() {
			return o("WAWebManageEditProductDrawerHelpers").shouldShowComplianceInfoImporterNotApplicableToggle(ot);
		}, a[56] = ot, a[57] = Gt) : Gt = a[57];
		var zt = Gt, jt;
		a[58] !== p.id ? (jt = function() {
			return o("WAWebManageEditProductDrawerHelpers").shouldComplianceBeHardEnforced(p.id);
		}, a[58] = p.id, a[59] = jt) : jt = a[59];
		var Kt = jt, Qt;
		a[60] !== x || a[61] !== D || a[62] !== A ? (Qt = function(t, n) {
			o("WAWebManageEditProductDrawerSaveHandlers").handleEditError({
				e: t,
				markerId: n,
				newProduct: D,
				product: A,
				context: x,
				setImageError: Oe,
				setRetailerIdError: we
			});
		}, a[60] = x, a[61] = D, a[62] = A, a[63] = Qt) : Qt = a[63];
		var Xt = Qt, Yt;
		a[64] !== p || a[65] !== x || a[66] !== I || a[67] !== A ? (Yt = function() {
			o("WAWebManageEditProductDrawerSaveHandlers").handleDeleteItem({
				catalog: p,
				product: A,
				context: x,
				onDelete: I
			});
		}, a[64] = p, a[65] = x, a[66] = I, a[67] = A, a[68] = Yt) : Yt = a[68];
		var Jt = Yt, Zt;
		a[69] !== p || a[70] !== x || a[71] !== D || a[72] !== k || a[73] !== T || a[74] !== A ? (Zt = function(t) {
			o("WAWebManageEditProductDrawerSaveHandlers").handleEditSuccessFn({
				localProduct: t,
				catalog: p,
				newProduct: D,
				product: A,
				context: x,
				onEditSuccess: T,
				onCreate: k
			});
		}, a[69] = p, a[70] = x, a[71] = D, a[72] = k, a[73] = T, a[74] = A, a[75] = Zt) : Zt = a[75];
		var en = Zt, tn;
		a[76] !== p.id || a[77] !== ot || a[78] !== tt ? (tn = function() {
			return o("WAWebManageEditProductDrawerHelpers").getComplianceProductChanges(ot, tt, o("WAWebBizCatalogGatingUtils").showComplianceFieldsInEditProductDrawer(p.id));
		}, a[76] = p.id, a[77] = ot, a[78] = tt, a[79] = tn) : tn = a[79];
		var nn = tn, rn;
		a[80] !== be || a[81] !== oe || a[82] !== nn || a[83] !== tt || a[84] !== ze || a[85] !== Q || a[86] !== J || a[87] !== A.additionalImageCdnUrl || a[88] !== A.id || a[89] !== A.imageCdnUrl || a[90] !== A.videos || a[91] !== ce || a[92] !== te || a[93] !== le ? (rn = function() {
			return new (o("WAWebProductModel")).Product({
				id: A.id,
				priceAmount1000: J,
				salePriceAmount1000: J != null ? te : null,
				currency: be,
				description: oe || "",
				imageCdnUrl: A.imageCdnUrl,
				additionalImageCdnUrl: A.additionalImageCdnUrl,
				videos: A.videos,
				name: Q,
				retailerId: ce,
				url: le,
				isHidden: ze,
				complianceInfo: nn(),
				importerInformationExempt: tt
			});
		}, a[80] = be, a[81] = oe, a[82] = nn, a[83] = tt, a[84] = ze, a[85] = Q, a[86] = J, a[87] = A.additionalImageCdnUrl, a[88] = A.id, a[89] = A.imageCdnUrl, a[90] = A.videos, a[91] = ce, a[92] = te, a[93] = le, a[94] = rn) : rn = a[94];
		var on = rn, an;
		a[95] !== ot || a[96] !== ct || a[97] !== Ut || a[98] !== Kt ? (an = function(t, n) {
			var e = Ut("street1", t, n), r = Ut("street2", t, n), a = Ut("postalCode", t, n), i = Ut("city", t, n), l = Ut("region", t, n), u = Ut("countryCode", t, n), c = [
				e,
				r,
				a,
				i,
				l,
				u
			].some(o("WAWebIdentityFunction").identityFunction) || Kt(), d = babelHelpers.extends({}, ot, { importerAddress: babelHelpers.extends({}, ot == null ? void 0 : ot.importerAddress) });
			if (t === "countryCode") {
				var m = o("WAWebCountriesUtils").getCountryNameWithMap(n, o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.META_RECOGNIZED, ct);
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
			) : "", Xe(!0), at(d);
		}, a[95] = ot, a[96] = ct, a[97] = Ut, a[98] = Kt, a[99] = an) : an = a[99];
		var ln = an, sn;
		a[100] !== ot || a[101] !== ct || a[102] !== Kt ? (sn = function(t, n) {
			var e, r = babelHelpers.extends({}, ot, { importerAddress: babelHelpers.extends({}, ot == null ? void 0 : ot.importerAddress) });
			t === "countryCodeOrigin" && (e = n === String(o("WAWebSyntheticCountryCode").SyntheticCountryCode.NotApplicable) ? s._(
				/*BTDS*/
				""
			).toString() : o("WAWebCountriesUtils").getCountryNameWithMap(n, o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.META_RECOGNIZED, ct), r.countryNameOrigin = e, r.countryCodeOriginError = ""), t === "importerName" && (r.importerNameError = o("WAWebBizComplianceUtil").existsField(n, o("WAWebUserPrefsMeUser").getMeUserOrThrow()) || !Kt() ? "" : s._(
				/*BTDS*/
				""
			)), n == null || n === "" ? delete r[t] : r[t] = n, Xe(!0), at(r);
		}, a[100] = ot, a[101] = ct, a[102] = Kt, a[103] = sn) : sn = a[103];
		var un = sn, cn;
		a[104] !== ot || a[105] !== Je || a[106] !== Kt || a[107] !== Ht ? (cn = function() {
			var e = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), t = Kt() || o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled();
			if (!t || !Je) return !1;
			var n = babelHelpers.extends({}, ot, { importerAddress: babelHelpers.extends({}, ot == null ? void 0 : ot.importerAddress) });
			if (!o("WAWebBizComplianceUtil").existsField(n.countryCodeOrigin, e) || o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled() && !o("WAWebBizComplianceUtil").existsFieldIgnoreHardEnforcement(n.countryCodeOrigin)) return n.countryCodeOriginError = s._(
				/*BTDS*/
				""
			), at(n), !0;
			if (!Ht()) return !1;
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
			), c = !0), c ? (at(n), !0) : !1;
		}, a[104] = ot, a[105] = Je, a[106] = Kt, a[107] = Ht, a[108] = cn) : cn = a[108];
		var dn = cn, mn;
		a[109] !== p || a[110] !== x || a[111] !== dn || a[112] !== on || a[113] !== Xt || a[114] !== en || a[115] !== Qe || a[116] !== D || a[117] !== A || a[118] !== i.product ? (mn = function() {
			var e = on();
			dn() || (!D && o("WAWebCatalogLogEvents").logSMBAddEditProductDetailsSaveClicked(), o("WAWebManageEditProductDrawerSaveHandlers").saveItem({
				newProduct: D,
				isModified: Qe,
				product: A,
				productChanges: e,
				catalog: p,
				context: x,
				imagePanelRef: $,
				setIsUpdating: Re,
				handleEditError: Xt,
				handleEditSuccess: en,
				propsProduct: i.product
			}));
		}, a[109] = p, a[110] = x, a[111] = dn, a[112] = on, a[113] = Xt, a[114] = en, a[115] = Qe, a[116] = D, a[117] = A, a[118] = i.product, a[119] = mn) : mn = a[119];
		var pn = mn, _n = function() {
			if (Se || Q.trim() === "" || We === !1) return !1;
			var e = [
				Ee,
				Te,
				st,
				$e,
				Me,
				Fe
			];
			return Ht() && e.push(ot == null ? void 0 : ot.importerNameError, ot == null ? void 0 : ot.importerAddress.street1Error, ot == null ? void 0 : ot.importerAddress.cityError, ot == null ? void 0 : ot.importerAddress.countryCodeError), (Kt() || o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled()) && e.push(ot == null ? void 0 : ot.countryCodeOriginError), e.every(v);
		}, fn = o("WAWebButton.react").Button, gn = "primary", hn = !_n(), yn;
		a[120] !== D ? (yn = D ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), a[120] = D, a[121] = yn) : yn = a[121];
		var Cn;
		a[122] !== fn || a[123] !== pn || a[124] !== hn || a[125] !== yn ? (Cn = m.jsx(fn, {
			type: gn,
			onClick: pn,
			disabled: hn,
			testid: "product-edit-drawer-save-button",
			children: yn
		}), a[122] = fn, a[123] = pn, a[124] = hn, a[125] = yn, a[126] = Cn) : Cn = a[126];
		var bn = Cn, vn;
		a[127] !== D ? (vn = D ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), a[127] = D, a[128] = vn) : vn = a[128];
		var Sn = vn, Rn;
		a[129] === Symbol.for("react.memo_cache_sentinel") ? (Rn = { className: "x78zum5 x6s0dn4" }, a[129] = Rn) : Rn = a[129];
		var Ln;
		a[130] !== Sn ? (Ln = m.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
			level: "2",
			weight: "normal",
			size: "inherit",
			children: Sn
		}), a[130] = Sn, a[131] = Ln) : Ln = a[131];
		var En;
		a[132] === Symbol.for("react.memo_cache_sentinel") ? (En = (u || (u = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginStartAuto), a[132] = En) : En = a[132];
		var kn;
		a[133] !== bn ? (kn = m.jsx("div", babelHelpers.extends({}, En, { children: bn })), a[133] = bn, a[134] = kn) : kn = a[134];
		var In;
		a[135] !== Ln || a[136] !== kn ? (In = m.jsxs("div", babelHelpers.extends({}, Rn, { children: [Ln, kn] })), a[135] = Ln, a[136] = kn, a[137] = In) : In = a[137];
		var Tn = In, Dn;
		a[138] !== Jt || a[139] !== D ? (Dn = D ? null : m.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props([C.deleteButtonContainer, o("WDSMargins.stylex").wdsMargins.marginVer20]), { children: m.jsx(o("WAWebButton.react").Button, {
			type: "warning",
			onClick: Jt,
			testid: "product-edit-drawer-delete-button",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), a[138] = Jt, a[139] = D, a[140] = Dn) : Dn = a[140];
		var xn = Dn, $n;
		a[141] !== Se ? ($n = (u || (u = r("stylex")))(C.productWrapper, o("WDSMargins.stylex").wdsMargins.marginHorAuto, o("WDSMargins.stylex").wdsMargins.marginVer0, Se && C.isSending), a[141] = Se, a[142] = $n) : $n = a[142];
		var Pn = $n, Nn;
		a[143] !== Ve ? (Nn = Ve ? m.jsx(r("WAWebDragAndDropMask.react"), {}) : null, a[143] = Ve, a[144] = Nn) : Nn = a[144];
		var Mn = Nn, wn;
		a[145] !== Se ? (wn = Se ? m.jsx("div", {
			className: "x10l6tqk xh0rhid xbudbmw xupqr0c x11lhmoz",
			children: m.jsx(o("WAWebSpinner.react").Spinner, {
				size: 50,
				stroke: 3
			})
		}) : null, a[145] = Se, a[146] = wn) : wn = a[146];
		var An = wn, Fn, On;
		a[147] === Symbol.for("react.memo_cache_sentinel") ? (Fn = { className: "x1anpbxc" }, On = { className: "x78zum5 x1q0g3np x6s0dn4" }, a[147] = Fn, a[148] = On) : (Fn = a[147], On = a[148]);
		var Bn;
		a[149] !== Pt || a[150] !== ze ? (Bn = m.jsx(o("WAWebCheckBox.react").CheckBox, {
			id: "product-hidden-check",
			onChange: Pt,
			checked: ze,
			disabled: !1
		}), a[149] = Pt, a[150] = ze, a[151] = Bn) : Bn = a[151];
		var Wn;
		a[152] === Symbol.for("react.memo_cache_sentinel") ? (Wn = { className: "x1n2onr6 xnfr1j x1hm9lzh" }, a[152] = Wn) : Wn = a[152];
		var qn;
		a[153] === Symbol.for("react.memo_cache_sentinel") ? (qn = m.jsx("label", babelHelpers.extends({}, Wn, {
			htmlFor: "product-hidden-check",
			children: s._(
				/*BTDS*/
				""
			)
		})), a[153] = qn) : qn = a[153];
		var Un;
		a[154] !== Bn ? (Un = m.jsxs("div", babelHelpers.extends({}, On, { children: [Bn, qn] })), a[154] = Bn, a[155] = Un) : Un = a[155];
		var Vn;
		a[156] === Symbol.for("react.memo_cache_sentinel") ? (Vn = m.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props([
			C.hiddenDescr,
			y.marginTop5,
			y.marginBottom30,
			o("WDSMargins.stylex").wdsMargins.marginStart28
		]), { children: s._(
			/*BTDS*/
			""
		) })), a[156] = Vn) : Vn = a[156];
		var Hn;
		a[157] !== Un ? (Hn = m.jsxs("div", babelHelpers.extends({}, Fn, { children: [Un, Vn] })), a[157] = Un, a[158] = Hn) : Hn = a[158];
		var Gn = Hn, zn;
		a[159] !== be ? (zn = be !== "" ? o("WAWebCurrencyUtils").formatAmount1000ToParts(be, 0).symbol : "", a[159] = be, a[160] = zn) : zn = a[160];
		var jn = zn, Kn;
		a[161] !== jn ? (Kn = s._(
			/*BTDS*/
			"",
			[s._param("currencySymbol", jn)]
		), a[161] = jn, a[162] = Kn) : Kn = a[162];
		var Qn = Kn, Xn;
		a[163] !== be ? (Xn = be !== "" ? o("WAWebCurrencyUtils").formatAmount1000ToParts(be, 0).symbol : "", a[163] = be, a[164] = Xn) : Xn = a[164];
		var Yn = Xn, Jn;
		a[165] !== Yn ? (Jn = s._(
			/*BTDS*/
			"",
			[s._param("currencySymbol", Yn)]
		), a[165] = Yn, a[166] = Jn) : Jn = a[166];
		var Zn = Jn, er = D ? "smb-catalog-create-product" : "smb-catalog-edit-product", tr;
		a[167] !== er ? (tr = { surface: er }, a[167] = er, a[168] = tr) : tr = a[168];
		var nr = tr, rr;
		a[169] !== b || a[170] !== E || a[171] !== Tn ? (rr = m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			testid: "catalog-link-title",
			title: Tn,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: b,
			onCancel: E,
			focusBackOrCancel: !0
		}), a[169] = b, a[170] = E, a[171] = Tn, a[172] = rr) : rr = a[172];
		var or;
		a[173] !== St || a[174] !== Fe || a[175] !== A ? (or = m.jsx(r("WAWebProductCatalogProductImagesEditPanel.react"), {
			product: A,
			maxImageCount: o("WAWebProductModel").MAX_PRODUCT_IMAGES,
			onChange: St,
			ref: $,
			error: Fe
		}), a[173] = St, a[174] = Fe, a[175] = A, a[176] = or) : or = a[176];
		var ar;
		a[177] === Symbol.for("react.memo_cache_sentinel") ? (ar = s._(
			/*BTDS*/
			""
		), a[177] = ar) : ar = a[177];
		var ir;
		a[178] === Symbol.for("react.memo_cache_sentinel") ? (ir = [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated], a[178] = ir) : ir = a[178];
		var lr;
		a[179] === Symbol.for("react.memo_cache_sentinel") ? (lr = s._(
			/*BTDS*/
			""
		), a[179] = lr) : lr = a[179];
		var sr;
		a[180] !== xt || a[181] !== Q || a[182] !== Ee ? (sr = m.jsx(o("WAWebRichTextField.react").RichTextField, {
			testid: "product-edit-drawer-name-input",
			value: Q,
			placeholder: ar,
			onChange: xt,
			theme: "small",
			showRemaining: !0,
			customStyleThemes: ir,
			maxLength: 150,
			error: Ee,
			title: lr
		}), a[180] = xt, a[181] = Q, a[182] = Ee, a[183] = sr) : sr = a[183];
		var ur;
		a[184] !== be || a[185] !== Ot || a[186] !== Te || a[187] !== Qn || a[188] !== _e ? (ur = U(be) && m.jsx(o("WAWebRichTextField.react").RichTextField, {
			testid: "product-edit-drawer-price-input",
			value: _e,
			placeholder: Qn,
			onChange: Ot,
			theme: "small",
			maxLength: 30,
			customStyleThemes: [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated],
			error: Te,
			title: s._(
				/*BTDS*/
				""
			)
		}), a[184] = be, a[185] = Ot, a[186] = Te, a[187] = Qn, a[188] = _e, a[189] = ur) : ur = a[189];
		var cr;
		a[190] !== be || a[191] !== Wt || a[192] !== it || a[193] !== st || a[194] !== Zn || a[195] !== ye ? (cr = U(be) && m.jsx(o("WAWebRichTextField.react").RichTextField, {
			testid: "product-edit-drawer-sale-price-input",
			readOnly: it,
			value: ye,
			placeholder: Zn,
			onChange: Wt,
			theme: "small",
			maxLength: 30,
			customStyleThemes: it ? [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated, o("WAWebRichTextField.react").TextInputCustomStyleThemes.DisabledLabel] : [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated],
			error: st,
			title: s._(
				/*BTDS*/
				""
			)
		}), a[190] = be, a[191] = Wt, a[192] = it, a[193] = st, a[194] = Zn, a[195] = ye, a[196] = cr) : cr = a[196];
		var dr;
		a[197] === Symbol.for("react.memo_cache_sentinel") ? (dr = s._(
			/*BTDS*/
			""
		), a[197] = dr) : dr = a[197];
		var mr;
		a[198] === Symbol.for("react.memo_cache_sentinel") ? (mr = [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated], a[198] = mr) : mr = a[198];
		var pr;
		a[199] === Symbol.for("react.memo_cache_sentinel") ? (pr = s._(
			/*BTDS*/
			""
		), a[199] = pr) : pr = a[199];
		var _r;
		a[200] !== oe || a[201] !== Tt ? (_r = m.jsx(o("WAWebRichTextField.react").RichTextField, {
			testid: "product-edit-drawer-description-input",
			value: oe,
			placeholder: dr,
			onChange: Tt,
			theme: "small",
			showRemaining: !0,
			maxLength: 5e3,
			customStyleThemes: mr,
			multiline: !0,
			title: pr
		}), a[200] = oe, a[201] = Tt, a[202] = _r) : _r = a[202];
		var fr;
		a[203] === Symbol.for("react.memo_cache_sentinel") ? (fr = s._(
			/*BTDS*/
			""
		), a[203] = fr) : fr = a[203];
		var gr;
		a[204] === Symbol.for("react.memo_cache_sentinel") ? (gr = [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated], a[204] = gr) : gr = a[204];
		var hr;
		a[205] === Symbol.for("react.memo_cache_sentinel") ? (hr = s._(
			/*BTDS*/
			""
		), a[205] = hr) : hr = a[205];
		var yr;
		a[206] !== At || a[207] !== kt || a[208] !== le || a[209] !== $e ? (yr = m.jsx(o("WAWebRichTextField.react").RichTextField, {
			testid: "product-edit-drawer-link-input",
			value: le,
			placeholder: fr,
			onChange: kt,
			onBlur: At,
			theme: "small",
			customStyleThemes: gr,
			maxLength: 75,
			error: $e,
			managed: !0,
			title: hr
		}), a[206] = At, a[207] = kt, a[208] = le, a[209] = $e, a[210] = yr) : yr = a[210];
		var Cr;
		a[211] === Symbol.for("react.memo_cache_sentinel") ? (Cr = s._(
			/*BTDS*/
			""
		), a[211] = Cr) : Cr = a[211];
		var br;
		a[212] === Symbol.for("react.memo_cache_sentinel") ? (br = [o("WAWebRichTextField.react").TextInputCustomStyleThemes.Desaturated], a[212] = br) : br = a[212];
		var vr;
		a[213] === Symbol.for("react.memo_cache_sentinel") ? (vr = s._(
			/*BTDS*/
			""
		), a[213] = vr) : vr = a[213];
		var Sr;
		a[214] !== Lt || a[215] !== ce || a[216] !== Me ? (Sr = m.jsx(o("WAWebRichTextField.react").RichTextField, {
			testid: "product-edit-drawer-retailer-id-input",
			value: ce,
			placeholder: Cr,
			onChange: Lt,
			theme: "small",
			customStyleThemes: br,
			maxLength: 100,
			error: Me,
			title: vr
		}), a[214] = Lt, a[215] = ce, a[216] = Me, a[217] = Sr) : Sr = a[217];
		var Rr;
		a[218] !== p.id || a[219] !== ot || a[220] !== ct || a[221] !== un || a[222] !== ln || a[223] !== Mt || a[224] !== tt || a[225] !== Je || a[226] !== M || a[227] !== O || a[228] !== Ht || a[229] !== zt ? (Rr = o("WAWebBizCatalogGatingUtils").showComplianceFieldsInEditProductDrawer(p.id) ? m.jsx(r("WAWebManageEditProductDrawerCompliance.react"), {
			isComplianceInfoAvailable: Je,
			showComplianceInfoImporterAddress: Ht(),
			complianceInfo: ot,
			onComplianceInfoChange: un,
			onComplianceInfoImporterAddressChange: ln,
			lastUsedCountryCode: M,
			showComplianceInfoImporterNotApplicableToggle: zt(),
			handleComplianceInfoImporterToggleChange: Mt,
			importerInformationNotApplicableEnabled: tt,
			selfCountryCode: O,
			countriesMap: ct
		}) : null, a[218] = p.id, a[219] = ot, a[220] = ct, a[221] = un, a[222] = ln, a[223] = Mt, a[224] = tt, a[225] = Je, a[226] = M, a[227] = O, a[228] = Ht, a[229] = zt, a[230] = Rr) : Rr = a[230];
		var Lr;
		a[231] !== xn || a[232] !== q || a[233] !== An || a[234] !== or || a[235] !== sr || a[236] !== ur || a[237] !== cr || a[238] !== _r || a[239] !== yr || a[240] !== Sr || a[241] !== Rr || a[242] !== Gn || a[243] !== Pn ? (Lr = m.jsx(r("WAWebDrawerBody.react"), { children: m.jsxs("div", {
			ref: q,
			className: Pn,
			children: [
				An,
				or,
				sr,
				ur,
				cr,
				_r,
				yr,
				Sr,
				Rr,
				Gn,
				xn
			]
		}) }), a[231] = xn, a[232] = q, a[233] = An, a[234] = or, a[235] = sr, a[236] = ur, a[237] = cr, a[238] = _r, a[239] = yr, a[240] = Sr, a[241] = Rr, a[242] = Gn, a[243] = Pn, a[244] = Lr) : Lr = a[244];
		var Er;
		return a[245] !== Mn || a[246] !== bt || a[247] !== yt || a[248] !== l || a[249] !== rr || a[250] !== Lr || a[251] !== nr ? (Er = m.jsxs(r("WAWebDrawer.react"), {
			ref: l,
			theme: "catalog",
			onDrop: yt,
			onDragChange: bt,
			tsNavigationData: nr,
			children: [
				Mn,
				rr,
				Lr
			]
		}, "catalog-link-drawer"), a[245] = Mn, a[246] = bt, a[247] = yt, a[248] = l, a[249] = rr, a[250] = Lr, a[251] = nr, a[252] = Er) : Er = a[252], Er;
	}
	function v(e) {
		return !e;
	}
	function S(e) {
		return !e;
	}
	function R(e) {
		return !e;
	}
	function L(e) {
		return o("WAWebManageEditProductDrawerHelpers").canDisplayPrice(e, !0);
	}
	l.default = b;
}), 226);
