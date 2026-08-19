__d("WAWebAddCatalogItemForm.react", [
	"fbt",
	"WAWebBizCatalogGatingUtils",
	"WAWebBusinessProfileLabels",
	"WAWebCatalogItemMediaUpload.react",
	"WAWebCurrencyUtils",
	"WAWebFlex.react",
	"WAWebStopEvent",
	"WDSBaseCheckbox.react",
	"WDSText.react",
	"WDSTextField.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useMemo, m = c.useState;
	function p(e) {
		var t = o("react-compiler-runtime").c(94), n = e._countryOfOrigin, a = e._countryOfOriginError, i = e._onCountryOfOriginChange, l = e.containerRef, c = e.countriesOfOrigin, d = e.countryOfOriginName, p = e.currency, _ = e.description, f = e.descriptionError, g = e.hideItem, h = e.imageError, y = e.imagePanelRef, C = e.itemCode, b = e.itemCodeError, v = e.itemName, S = e.itemNameError, R = e.link, L = e.linkError, E = e.onDescriptionChange, k = e.onHideItemChange, I = e.onImageChange, T = e.onItemCodeChange, D = e.onItemNameChange, x = e.onLinkBlur, $ = e.onLinkChange, P = e.onPriceChange, N = e.onSalePriceChange, M = e.price, w = e.priceError, A = e.salePrice, F = e.salePriceError, O = m(""), B = O[0], W = O[1], q = m(!1), U = q[0], V = q[1], H;
		t[0] !== p ? (H = p !== "" ? o("WAWebCurrencyUtils").formatAmount1000ToParts(p, 0).symbol : "", t[0] = p, t[1] = H) : H = t[1];
		var G = H, z;
		t[2] !== G ? (z = {
			priceInputLabel: s._(
				/*BTDS*/
				"",
				[s._param("currencySymbol", G)]
			),
			salePriceInputLabel: s._(
				/*BTDS*/
				"",
				[s._param("currencySymbol", G)]
			)
		}, t[2] = G, t[3] = z) : z = t[3];
		var j = z, K = j.priceInputLabel, Q = j.salePriceInputLabel, X;
		e: {
			if (B === "") {
				X = c;
				break e;
			}
			var Y;
			if (t[4] !== c || t[5] !== B) {
				var J = B.toLowerCase();
				Y = c.filter(function(e) {
					var t = e[0], n = e[1], r = typeof n == "string" ? n : t;
					return r.toLowerCase().includes(J);
				}), t[4] = c, t[5] = B, t[6] = Y;
			} else Y = t[6];
			X = Y;
		}
		var Z = X, ee;
		t[7] !== i ? (ee = function(t) {
			i(t), V(!1), W("");
		}, t[7] = i, t[8] = ee) : ee = t[8];
		var te = ee, ne;
		t[9] !== U ? (ne = function(t) {
			W(t), U || V(!0);
		}, t[9] = U, t[10] = ne) : ne = t[10];
		var re = ne, oe;
		t[11] !== d || t[12] !== U ? (oe = function() {
			U || (W(d), V(!0));
		}, t[11] = d, t[12] = U, t[13] = oe) : oe = t[13];
		var ae = oe, ie;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (ie = function() {
			V(!1), W("");
		}, t[14] = ie) : ie = t[14];
		var le = ie, se;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (se = { className: "x78zum5 xdt5ytf x1f0uite xs2akgl x1phvje8 xcldk2z x1n2onr6" }, t[15] = se) : se = t[15];
		var ue;
		t[16] !== h || t[17] !== y || t[18] !== I ? (ue = u.jsx(r("WAWebCatalogItemMediaUpload.react"), {
			ref: y,
			error: h,
			maxImageCount: 10,
			onChange: I
		}), t[16] = h, t[17] = y, t[18] = I, t[19] = ue) : ue = t[19];
		var ce;
		t[20] === Symbol.for("react.memo_cache_sentinel") ? (ce = o("WAWebBusinessProfileLabels").getItemNameLabel(), t[20] = ce) : ce = t[20];
		var de = S != null && S !== "", me;
		t[21] !== v || t[22] !== S || t[23] !== D || t[24] !== de ? (me = u.jsx(r("WDSTextField.react"), {
			label: ce,
			value: v,
			onValueChange: D,
			error: de,
			errorText: S,
			testid: "biz_catalog_item_name_textfield"
		}), t[21] = v, t[22] = S, t[23] = D, t[24] = de, t[25] = me) : me = t[25];
		var pe = w != null && w !== "", _e;
		t[26] !== P || t[27] !== M || t[28] !== w || t[29] !== K || t[30] !== pe ? (_e = u.jsx(r("WDSTextField.react"), {
			label: K,
			value: M,
			onValueChange: P,
			error: pe,
			errorText: w,
			testid: "biz_catalog_item_price_textfield"
		}), t[26] = P, t[27] = M, t[28] = w, t[29] = K, t[30] = pe, t[31] = _e) : _e = t[31];
		var fe = F != null && F !== "", ge;
		t[32] !== N || t[33] !== A || t[34] !== F || t[35] !== Q || t[36] !== fe ? (ge = u.jsx(r("WDSTextField.react"), {
			label: Q,
			value: A,
			onValueChange: N,
			error: fe,
			errorText: F,
			testid: "biz_catalog_item_sale_price_textfield"
		}), t[32] = N, t[33] = A, t[34] = F, t[35] = Q, t[36] = fe, t[37] = ge) : ge = t[37];
		var he;
		t[38] === Symbol.for("react.memo_cache_sentinel") ? (he = o("WAWebBusinessProfileLabels").getItemDescriptionLabel(), t[38] = he) : he = t[38];
		var ye = f != null && f !== "", Ce;
		t[39] !== _ || t[40] !== f || t[41] !== E || t[42] !== ye ? (Ce = u.jsx(r("WDSTextField.react"), {
			label: he,
			value: _,
			onValueChange: E,
			error: ye,
			errorText: f,
			testid: "biz_catalog_item_description_textfield"
		}), t[39] = _, t[40] = f, t[41] = E, t[42] = ye, t[43] = Ce) : Ce = t[43];
		var be;
		t[44] === Symbol.for("react.memo_cache_sentinel") ? (be = o("WAWebBusinessProfileLabels").getItemLinkLabel(), t[44] = be) : be = t[44];
		var ve = L != null && L !== "", Se;
		t[45] !== R || t[46] !== L || t[47] !== x || t[48] !== $ || t[49] !== ve ? (Se = u.jsx(r("WDSTextField.react"), {
			label: be,
			value: R,
			onValueChange: $,
			onBlur: x,
			error: ve,
			errorText: L,
			testid: "biz_catalog_item_link_textfield"
		}), t[45] = R, t[46] = L, t[47] = x, t[48] = $, t[49] = ve, t[50] = Se) : Se = t[50];
		var Re;
		t[51] === Symbol.for("react.memo_cache_sentinel") ? (Re = o("WAWebBusinessProfileLabels").getItemCodeLabel(), t[51] = Re) : Re = t[51];
		var Le = b != null && b !== "", Ee;
		t[52] !== C || t[53] !== b || t[54] !== T || t[55] !== Le ? (Ee = u.jsx(r("WDSTextField.react"), {
			label: Re,
			value: C,
			onValueChange: T,
			error: Le,
			errorText: b,
			testid: "biz_catalog_item_code_textfield"
		}), t[52] = C, t[53] = b, t[54] = T, t[55] = Le, t[56] = Ee) : Ee = t[56];
		var ke;
		t[57] !== c || t[58] !== n || t[59] !== a || t[60] !== d || t[61] !== Z || t[62] !== te || t[63] !== ae || t[64] !== re || t[65] !== B || t[66] !== U ? (ke = o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled() && c.length > 0 && u.jsxs("div", {
			className: "x1n2onr6",
			children: [u.jsx(r("WDSTextField.react"), {
				label: o("WAWebBusinessProfileLabels").getCountryOfOriginLabel(),
				value: U ? B : d,
				onValueChange: re,
				onFocus: ae,
				onBlur: function() {
					window.setTimeout(le, 200);
				},
				error: a != null && a !== "",
				errorText: a,
				testid: "biz_catalog_item_country_of_origin_textfield"
			}), U && Z.length > 0 && u.jsx("div", {
				className: "xw6alqk xso031l x1lun4ml xpilrb4 xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1kpx6y5 xpyat2d xtijo5x x1o0tod x569fbc x1odjw0f x10l6tqk xdsb8wn xfo81ep",
				role: "listbox",
				children: Z.map(function(e) {
					var t = e[0], a = e[1];
					return u.jsx("div", {
						className: "x1ypdohk x16ovd2e x12xbjc7 x12w63v0 x1nzty39 xw6alqk xa9814a",
						onClick: function() {
							return te(t);
						},
						onMouseDown: o("WAWebStopEvent").preventDefault,
						onKeyDown: function(n) {
							(n.key === "Enter" || n.key === " ") && (n.preventDefault(), te(t));
						},
						role: "option",
						tabIndex: 0,
						"aria-selected": t === n,
						children: u.jsx(r("WDSText.react"), {
							colorName: "contentDefault",
							type: "Body2",
							children: typeof a == "string" ? a : t
						})
					}, t);
				})
			})]
		}), t[57] = c, t[58] = n, t[59] = a, t[60] = d, t[61] = Z, t[62] = te, t[63] = ae, t[64] = re, t[65] = B, t[66] = U, t[67] = ke) : ke = t[67];
		var Ie;
		t[68] === Symbol.for("react.memo_cache_sentinel") ? (Ie = { className: "x1ypdohk" }, t[68] = Ie) : Ie = t[68];
		var Te, De;
		t[69] !== g || t[70] !== k ? (Te = function() {
			return k(!g);
		}, De = function(t) {
			(t.key === "Enter" || t.key === " ") && (t.preventDefault(), k(!g));
		}, t[69] = g, t[70] = k, t[71] = Te, t[72] = De) : (Te = t[71], De = t[72]);
		var xe;
		t[73] !== g ? (xe = u.jsx(r("WDSBaseCheckbox.react"), { value: g }), t[73] = g, t[74] = xe) : xe = t[74];
		var $e;
		t[75] === Symbol.for("react.memo_cache_sentinel") ? ($e = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			children: o("WAWebBusinessProfileLabels").getHideItemLabel()
		}), t[75] = $e) : $e = t[75];
		var Pe;
		t[76] === Symbol.for("react.memo_cache_sentinel") ? (Pe = u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [$e, u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			children: o("WAWebBusinessProfileLabels").getHideItemDescriptionLabel()
		})] }), t[76] = Pe) : Pe = t[76];
		var Ne;
		t[77] !== xe ? (Ne = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 8,
			children: [xe, Pe]
		}), t[77] = xe, t[78] = Ne) : Ne = t[78];
		var Me;
		t[79] !== Te || t[80] !== De || t[81] !== Ne ? (Me = u.jsx("div", babelHelpers.extends({}, Ie, {
			onClick: Te,
			onKeyDown: De,
			role: "button",
			tabIndex: 0,
			children: Ne
		})), t[79] = Te, t[80] = De, t[81] = Ne, t[82] = Me) : Me = t[82];
		var we;
		return t[83] !== l || t[84] !== me || t[85] !== _e || t[86] !== ge || t[87] !== Ce || t[88] !== Se || t[89] !== Ee || t[90] !== ke || t[91] !== Me || t[92] !== ue ? (we = u.jsxs("div", babelHelpers.extends({ ref: l }, se, { children: [
			ue,
			me,
			_e,
			ge,
			Ce,
			Se,
			Ee,
			ke,
			Me
		] })), t[83] = l, t[84] = me, t[85] = _e, t[86] = ge, t[87] = Ce, t[88] = Se, t[89] = Ee, t[90] = ke, t[91] = Me, t[92] = ue, t[93] = we) : we = t[93], we;
	}
	l.default = p;
}), 226);
