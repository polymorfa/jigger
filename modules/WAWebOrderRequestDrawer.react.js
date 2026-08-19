__d("WAWebOrderRequestDrawer.react", [
	"fbt",
	"WASmaxInBizSettingsEnums",
	"WAWebBusinessProfileCollection",
	"WAWebBusinessProfileUtils",
	"WAWebCTWADataSharingModel",
	"WAWebCellFrame.react",
	"WAWebCommonQuantityControls.react",
	"WAWebConfirmPopup.react",
	"WAWebCurrencyUtils",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebNux",
	"WAWebOrderAddItem",
	"WAWebOrderCatalogProductPrice",
	"WAWebOrderDetailSectionContainer.react",
	"WAWebOrderDetailsActionCategory",
	"WAWebOrderDetailsActionsSmbWamEvent",
	"WAWebOrderIcons",
	"WAWebOrderItemGetters",
	"WAWebOrderRequestDrawerOverflowMenu.react",
	"WAWebOrderSummaryDrawer",
	"WAWebOrderTotalPrice",
	"WAWebText.react",
	"WAWebText_DONOTUSE.react",
	"WAWebUserPrefsMeUser",
	"WAWebWamEnumOrderDetailsCreationAction",
	"WAWebWdsIllOrderRequestIcon.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useState, _ = { marginBlock5: {
		marginTop: "x1ok221b",
		marginBottom: "xu06os2",
		$$css: !0
	} }, f = {
		errorLabel: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		itemSummaryContainer: {
			columnGap: "x1trrmfo",
			rowGap: "x129bwdz",
			$$css: !0
		},
		orderItemsContainer: {
			flexShrink: "xs83m0k",
			overflowY: "x1odjw0f",
			$$css: !0
		}
	};
	function g(e) {
		var t = o("react-compiler-runtime").c(19), n = e.currency, a = e.items, i = e.onItemQuantityChange, l = e.onPriceChange, s = e.priceMap, c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = {}, t[0] = c) : c = t[0];
		var d = p(c), m = d[0], g = d[1], h;
		t[1] !== s ? (h = function(t) {
			return (s == null ? void 0 : s[t.id]) != null || t.price ? o("WAWebOrderCatalogProductPrice").PriceStage.EditableFilled : o("WAWebOrderCatalogProductPrice").PriceStage.EditableBlank;
		}, t[1] = s, t[2] = h) : h = t[2];
		var y = h, C;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (C = function(t, n) {
			g(function(e) {
				var r;
				return babelHelpers.extends({}, e, (r = {}, r[n.id] = t, r));
			});
		}, t[3] = C) : C = t[3];
		var b = C, v;
		t[4] !== n || t[5] !== y || t[6] !== l || t[7] !== s || t[8] !== m ? (v = function(t) {
			var e, a;
			return u.jsx("div", {
				className: "x6s0dn4 x78zum5",
				children: u.jsx(o("WAWebOrderCatalogProductPrice").CatalogProductPrice, {
					price: (e = s == null ? void 0 : s[t.id]) != null ? e : t.price,
					priceStage: (a = m[t.id]) != null ? a : y(t),
					currency: n,
					orderItem: t,
					onPriceChange: function(n) {
						return l == null ? void 0 : l(n, t.id);
					},
					onPriceStageChange: function(n) {
						b(n, t);
					},
					onEnter: r("WAWebNoop")
				})
			});
		}, t[4] = n, t[5] = y, t[6] = l, t[7] = s, t[8] = m, t[9] = v) : v = t[9];
		var S = v, R;
		if (t[10] !== S || t[11] !== a || t[12] !== i) {
			var L;
			t[14] !== S || t[15] !== i ? (L = function(t, n) {
				var e, a = [];
				(e = t.properties) == null || e.forEach(function(e) {
					var t = e[0], n = e[1];
					a.push(u.jsxs(o("WAWebFlex.react").FlexRow, { children: [u.jsxs(o("WAWebText_DONOTUSE.react").TextSpan, { children: [t, ":\xA0"] }), u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, { children: n })] }));
				});
				var l = u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [a.length > 0 && u.jsx(o("WAWebFlex.react").FlexColumn, {
					xstyle: _.marginBlock5,
					children: a
				}), u.jsx(r("WAWebCommonQuantityControls.react"), {
					quantity: t.quantity,
					onAddOneClick: function() {
						return i == null ? void 0 : i(n, t.quantity + 1);
					},
					onRemoveOneClick: function() {
						return i == null ? void 0 : i(n, t.quantity - 1);
					}
				})] });
				return u.jsx(r("WAWebCellFrame.react"), {
					testid: "order-item-cell",
					className: {
						0: "",
						1: "xcxhlts"
					}[(n > 0) << 0],
					disabled: !0,
					image: u.jsx(o("WAWebOrderIcons").OrderItemIcon, {
						mediaData: t.thumbnailUrl ? o("WAWebOrderItemGetters").getMediaData(t) : null,
						useCustomIcon: t.isCustomItem
					}),
					primary: u.jsx("span", {
						className: "x14ug900 x6ikm8r x10wlt62 xlyipyv xuxw1ft",
						title: t.name,
						children: t.name
					}),
					secondary: l,
					theme: "add-order-item",
					detail: S(t)
				}, n);
			}, t[14] = S, t[15] = i, t[16] = L) : L = t[16], R = a.map(L), t[10] = S, t[11] = a, t[12] = i, t[13] = R;
		} else R = t[13];
		var E;
		return t[17] !== R ? (E = u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: f.orderItemsContainer,
			children: R
		}), t[17] = R, t[18] = E) : E = t[18], E;
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(13), n = e.currency, r = e.itemCount, a = e.subtotal, i;
		t[0] !== r ? (i = s._(
			/*BTDS*/
			"",
			[s._plural(r, "count")]
		), t[0] = r, t[1] = i) : i = t[1];
		var l = i, c;
		t[2] !== n || t[3] !== a ? (c = s._(
			/*BTDS*/
			"",
			[s._param("total-currency-amount", o("WAWebCurrencyUtils").formatAmount1000(n, a))]
		), t[2] = n, t[3] = a, t[4] = c) : c = t[4];
		var d = c, m;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (m = [
			f.itemSummaryContainer,
			o("WDSPaddings.stylex").wdsPaddings.paddingHor16,
			o("WDSPaddings.stylex").wdsPaddings.paddingBottom4
		], t[5] = m) : m = t[5];
		var p;
		t[6] !== l ? (p = u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
			color: "primary",
			size: "16",
			weight: "semibold",
			children: l
		}), t[6] = l, t[7] = p) : p = t[7];
		var _;
		t[8] !== d ? (_ = u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
			color: "secondary",
			size: "14",
			children: d
		}), t[8] = d, t[9] = _) : _ = t[9];
		var g;
		return t[10] !== p || t[11] !== _ ? (g = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: m,
			children: [p, _]
		}), t[10] = p, t[11] = _, t[12] = g) : g = t[12], g;
	}
	var y = function() {
		return o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true;
	};
	function C(e) {
		var t = o("react-compiler-runtime").c(9), n = e.onExit, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = s._(
			/*BTDS*/
			""
		), t[0] = r) : r = t[0];
		var a = r, i;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (i = s._(
			/*BTDS*/
			""
		), t[1] = i) : i = t[1];
		var l = i, c;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (c = s._(
			/*BTDS*/
			""
		), t[2] = c) : c = t[2];
		var d = c, m;
		t[3] !== n ? (m = function() {
			o("WAWebModalManager").ModalManager.close(), n();
		}, t[3] = n, t[4] = m) : m = t[4];
		var p = m, _;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (_ = {
			surface: "unknown",
			viewName: "order-request"
		}, t[5] = _) : _ = t[5];
		var f;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (f = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			gap: 8,
			children: [
				u.jsx(o("WAWebWdsIllOrderRequestIcon.react").WdsIllOrderRequestIcon, { height: 120 }),
				u.jsx(o("WAWebText.react").WAWebTextLarge, { children: l }),
				u.jsx(o("WAWebText.react").WAWebTextSmall, { children: d })
			]
		}), t[6] = f) : f = t[6];
		var g;
		return t[7] !== p ? (g = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: _,
			okText: a,
			onOverlayClick: p,
			onOK: p,
			children: f
		}), t[7] = p, t[8] = g) : g = t[8], g;
	}
	var b = { surface: "smb-sent-cart-details" };
	function v(e) {
		var t = o("react-compiler-runtime").c(78), n = e.additionalCharges, a = e.chat, i = e.currency, l = e.entryPoint, c = e.flatAmounts, d = e.onAddItem, _ = e.onAdditionalCharges, v = e.onBack, S = e.onDeclineOrder, R = e.onItemQuantityChange, L = e.onPriceChange, E = e.onSubmit, k = e.orderItems, I = e.orderSubtotal, T = e.priceMap, D = p(y), x = D[0], $ = D[1], P = p(!1), N = P[0], M = P[1], w = r("useWAWebNux")(o("WAWebNux").NUX.ORDER_REQUEST_EDUCATION), A = w[0], F = w[2], O, B;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (O = function() {
			var e = function() {
				var e = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true;
				$(e);
			};
			return o("WAWebCTWADataSharingModel").CTWADataSharingModel.subscribeForUpdates(e), (function() {
				o("WAWebCTWADataSharingModel").CTWADataSharingModel.unsubscribeFromUpdates(e);
			});
		}, B = [], t[0] = O, t[1] = B) : (O = t[0], B = t[1]), m(O, B);
		var W, q;
		if (t[2] !== a || t[3] !== i || t[4] !== c.total || t[5] !== k || t[6] !== T) {
			var U;
			t[9] !== T ? (U = function(t) {
				var e;
				return Number.isInteger((e = t.price) != null ? e : T[t.id]);
			}, t[9] = T, t[10] = U) : U = t[10];
			var V = k.every(U);
			W = k.length !== 0, q = o("WAWebOrderSummaryDrawer").getErrorLabel({
				allItemsHavePrice: V,
				chat: a,
				currency: i,
				totalPrice1000: c.total
			}), t[2] = a, t[3] = i, t[4] = c.total, t[5] = k, t[6] = T, t[7] = W, t[8] = q;
		} else W = t[7], q = t[8];
		var H = q, G, z;
		t[11] !== F || t[12] !== A ? (G = function() {
			A && o("WAWebModalManager").ModalManager.open(u.jsx(C, { onExit: F }));
		}, z = [A, F], t[11] = F, t[12] = A, t[13] = G, t[14] = z) : (G = t[13], z = t[14]), m(G, z);
		var j;
		t[15] !== H || t[16] !== W ? (j = JSON.stringify({ order_eligible_to_send: W && H == null }), t[15] = H, t[16] = W, t[17] = j) : j = t[17];
		var K = j, Q, X;
		t[18] !== l || t[19] !== K || t[20] !== N ? (Q = function() {
			if (!N) {
				M(!0);
				var e = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
				new (o("WAWebOrderDetailsActionsSmbWamEvent")).OrderDetailsActionsSmbWamEvent({
					actionCategory: String(r("WAWebOrderDetailsActionCategory").ORDER_DETAILS_MANAGEMENT),
					extraAttributes: K,
					hasCatalog: o("WAWebBusinessProfileUtils").hasCatalog(o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(e)),
					orderDetailEntryPoint: String(l),
					orderDetailsCreationAction: o("WAWebWamEnumOrderDetailsCreationAction").ORDER_DETAILS_CREATION_ACTION.VIEW_CREATE_ORDER
				}).commit();
			}
		}, X = [
			N,
			l,
			K
		], t[18] = l, t[19] = K, t[20] = N, t[21] = Q, t[22] = X) : (Q = t[21], X = t[22]), m(Q, X);
		var Y;
		t[23] === Symbol.for("react.memo_cache_sentinel") ? (Y = s._(
			/*BTDS*/
			""
		), t[23] = Y) : Y = t[23];
		var J;
		t[24] !== S ? (J = S != null ? u.jsx(r("WAWebOrderRequestDrawerOverflowMenu.react"), { onDecline: S }) : null, t[24] = S, t[25] = J) : J = t[25];
		var Z;
		t[26] !== v || t[27] !== J ? (Z = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: Y,
			onBack: v,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			menu: J
		}), t[26] = v, t[27] = J, t[28] = Z) : Z = t[28];
		var ee;
		t[29] === Symbol.for("react.memo_cache_sentinel") ? (ee = [
			f.orderItemsContainer,
			o("WDSPaddings.stylex").wdsPaddings.paddingTop20,
			o("WDSMargins.stylex").wdsMargins.marginBottom0
		], t[29] = ee) : ee = t[29];
		var te;
		t[30] !== W || t[31] !== d ? (te = !W && u.jsx(r("WAWebOrderAddItem"), {
			title: s._(
				/*BTDS*/
				""
			),
			onClick: function() {
				return d == null ? void 0 : d();
			}
		}), t[30] = W, t[31] = d, t[32] = te) : te = t[32];
		var ne;
		t[33] !== n || t[34] !== i || t[35] !== c.discount || t[36] !== c.shipping || t[37] !== c.tax || t[38] !== W || t[39] !== _ || t[40] !== R || t[41] !== L || t[42] !== k || t[43] !== I || t[44] !== T ? (ne = W && u.jsxs(r("WAWebOrderDetailSectionContainer.react"), { children: [
			u.jsx(h, {
				currency: i,
				itemCount: k.length,
				subtotal: I
			}),
			u.jsx(g, {
				currency: i,
				priceMap: T,
				items: k,
				onPriceChange: L,
				onItemQuantityChange: R
			}),
			u.jsx(o("WAWebOrderSummaryDrawer").OrderValues, {
				tax: c.tax,
				discount: c.discount,
				shipping: c.shipping,
				currency: i,
				subtotal: I,
				additionalCharges: n,
				canDisplayAdditionalCharges: W,
				canChangeAdditionalCharges: W,
				onAdditionalCharges: _
			})
		] }), t[33] = n, t[34] = i, t[35] = c.discount, t[36] = c.shipping, t[37] = c.tax, t[38] = W, t[39] = _, t[40] = R, t[41] = L, t[42] = k, t[43] = I, t[44] = T, t[45] = ne) : ne = t[45];
		var re;
		t[46] !== x ? (re = function() {
			return $(!x);
		}, t[46] = x, t[47] = re) : re = t[47];
		var oe;
		t[48] !== a || t[49] !== k.length || t[50] !== x || t[51] !== re ? (oe = o("WAWebOrderSummaryDrawer").getDataSharing({
			chat: a,
			itemsCount: k.length,
			onOptOutValueToggle: re,
			optOutValue: x
		}), t[48] = a, t[49] = k.length, t[50] = x, t[51] = re, t[52] = oe) : oe = t[52];
		var ae;
		t[53] !== te || t[54] !== ne || t[55] !== oe ? (ae = u.jsxs(r("WAWebDrawerSection.react"), {
			xstyle: ee,
			theme: "refresh-padding-title",
			children: [
				te,
				ne,
				oe
			]
		}), t[53] = te, t[54] = ne, t[55] = oe, t[56] = ae) : ae = t[56];
		var ie;
		t[57] !== H ? (ie = H != null && u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
			color: "danger",
			size: "16",
			xstyle: f.errorLabel,
			children: H
		}), t[57] = H, t[58] = ie) : ie = t[58];
		var le;
		t[59] === Symbol.for("react.memo_cache_sentinel") ? (le = s._(
			/*BTDS*/
			""
		), t[59] = le) : le = t[59];
		var se;
		t[60] !== a || t[61] !== i || t[62] !== c.total || t[63] !== E || t[64] !== x ? (se = function() {
			return o("WAWebOrderSummaryDrawer").maybeShowDialogOnSubmit({
				amount: c.total / 1e3,
				chat: a,
				currency: i,
				onSubmit: E,
				smbOptOut: x
			});
		}, t[60] = a, t[61] = i, t[62] = c.total, t[63] = E, t[64] = x, t[65] = se) : se = t[65];
		var ue = !W || H != null, ce;
		t[66] !== se || t[67] !== ue ? (ce = u.jsx(o("WAWebOrderTotalPrice").OrderApplyChangesButton, {
			title: le,
			onClick: se,
			disabled: ue,
			testid: "send-order-button"
		}), t[66] = se, t[67] = ue, t[68] = ce) : ce = t[68];
		var de;
		t[69] !== ie || t[70] !== ce ? (de = u.jsxs(r("WAWebDrawerSection.react"), {
			xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingBottom20,
			children: [ie, ce]
		}), t[69] = ie, t[70] = ce, t[71] = de) : de = t[71];
		var me;
		t[72] !== ae || t[73] !== de ? (me = u.jsxs(r("WAWebDrawerBody.react"), { children: [ae, de] }), t[72] = ae, t[73] = de, t[74] = me) : me = t[74];
		var pe;
		return t[75] !== Z || t[76] !== me ? (pe = u.jsxs(r("WAWebDrawer.react"), {
			tsNavigationData: b,
			children: [Z, me]
		}), t[75] = Z, t[76] = me, t[77] = pe) : pe = t[77], pe;
	}
	l.OrderRequestEducationModal = C, l.OrderRequestDrawer = v;
}), 226);
