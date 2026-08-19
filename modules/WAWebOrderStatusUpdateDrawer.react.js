__d("WAWebOrderStatusUpdateDrawer.react", [
	"fbt",
	"WALogger",
	"WASmaxInBizSettingsEnums",
	"WAWebBizOrderStatusLabels",
	"WAWebBizSendOrderAction",
	"WAWebBusinessProfileCollection",
	"WAWebBusinessProfileUtils",
	"WAWebButton.react",
	"WAWebCTWADataSharingModel",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebCommonCTWADataSharing",
	"WAWebConfirmPopup.react",
	"WAWebDataSharingOptOutOrUpsell.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerManager",
	"WAWebDrawerSection.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebOrderConstants",
	"WAWebOrderDetailMath",
	"WAWebOrderDetailRadioButton.react",
	"WAWebOrderDetailsActionCategory",
	"WAWebOrderDetailsActionsSmbWamEvent",
	"WAWebOrderGatingUtils",
	"WAWebOrderPaymentStatus",
	"WAWebOrderStatus",
	"WAWebOrdersExpansionUtils",
	"WAWebRichTextField.react",
	"WAWebSmb3pdConversionSignalAction",
	"WAWebSmbMarkAsXOrderAction",
	"WAWebUserPrefsMeUser",
	"WAWebWamEnumOrderDetailsCreationAction",
	"WDSSwitch.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = ["ref"], d, m, p = m || (m = o("react")), _ = m, f = _.useEffect, g = _.useMemo, h = _.useState, y = o("WAWebOrderGatingUtils").isOrderStatusM1Enabled() ? [
		o("WAWebOrderStatus").OrderStatus.PaymentRequested,
		o("WAWebOrderStatus").OrderStatus.PreparingToShip,
		o("WAWebOrderStatus").OrderStatus.Shipped,
		o("WAWebOrderStatus").OrderStatus.Delivered,
		o("WAWebOrderStatus").OrderStatus.Canceled
	] : [
		o("WAWebOrderStatus").OrderStatus.Processing,
		o("WAWebOrderStatus").OrderStatus.Shipped,
		o("WAWebOrderStatus").OrderStatus.Complete,
		o("WAWebOrderStatus").OrderStatus.Canceled
	], C = {
		checkboxContainer: {
			rowGap: "x1na6gtj",
			columnGap: "x1qgv0r9",
			$$css: !0
		},
		marginBottom16: {
			marginBottom: "x1ua1l7f",
			$$css: !0
		},
		marginBottom24: {
			marginBottom: "x14mdic9",
			$$css: !0
		},
		marginTop16: {
			marginTop: "x98l61r",
			$$css: !0
		},
		marginTop8: {
			marginTop: "x1380le5",
			$$css: !0
		},
		paddingEnd24: {
			paddingInlineEnd: "xyo0t3i",
			$$css: !0
		},
		paddingHoriz16: {
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		paddingTop16: {
			paddingTop: "x1p57kb1",
			$$css: !0
		},
		spacer: {
			borderTopColor: "xx42vgk",
			borderTopStyle: "x13fuv20",
			borderTopWidth: "x178xt8z",
			height: "xqtp20y",
			$$css: !0
		}
	};
	function b(e) {
		var t = o("react-compiler-runtime").c(4), n = e.xstyle, a;
		t[0] !== n ? (a = (d || (d = r("stylex"))).props(C.spacer, C.marginTop16, n), t[0] = n, t[1] = a) : a = t[1];
		var i;
		return t[2] !== a ? (i = p.jsx("div", babelHelpers.extends({}, a)), t[2] = a, t[3] = i) : i = t[3], i;
	}
	var v = function(t) {
		var e = t.chat, n = t.eventDataSharingEnabled, r = t.itemsCount, a = t.setEventDataSharingEnabled;
		if (o("WAWebCommonCTWADataSharing").shouldDisplayDataSharingOrderOptOutOrUpsell(e, "order-update", r)) return p.jsx(o("WAWebDataSharingOptOutOrUpsell.react").DataSharingOptOutOrUpsell, {
			chats: [e],
			theme: "order-update",
			onCheckboxToggle: function() {
				return a(!n);
			},
			checkboxValue: n
		});
	}, S = function() {
		return o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true;
	};
	function R(e) {
		var t = o("react-compiler-runtime").c(74), n, a;
		t[0] !== e ? (a = e.ref, n = babelHelpers.objectWithoutPropertiesLoose(e, c), t[0] = e, t[1] = n, t[2] = a) : (n = t[1], a = t[2]);
		var i = h(S), l = i[0], u = i[1], d = h(""), m = d[0], _ = d[1], g;
		t[3] !== n.chat || t[4] !== n.orderInfo.referenceId ? (g = o("WAWebOrderStatus").findOrderStatus(n.chat, n.orderInfo.referenceId), t[3] = n.chat, t[4] = n.orderInfo.referenceId, t[5] = g) : g = t[5];
		var R = g, k;
		t[6] !== n.chat || t[7] !== n.orderInfo.referenceId ? (k = o("WAWebOrderPaymentStatus").findLastOrderPaymentStatusInfo(n.chat, n.orderInfo.referenceId), t[6] = n.chat, t[7] = n.orderInfo.referenceId, t[8] = k) : k = t[8];
		var I = k, T = h(R), D = T[0], x = T[1], $ = h((I == null ? void 0 : I.paymentStatus) === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Captured), P = $[0], N = $[1], M, w;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (M = function() {
			var e = function(t) {
				return u(t === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true);
			};
			return o("WAWebCTWADataSharingModel").CTWADataSharingModel.subscribeForUpdates(e), (function() {
				o("WAWebCTWADataSharingModel").CTWADataSharingModel.unsubscribeFromUpdates(e);
			});
		}, w = [], t[9] = M, t[10] = w) : (M = t[9], w = t[10]), f(M, w);
		var A = n, F = A.chat, O = A.orderInfo, B = A.sellerJid, W;
		t[11] !== m || t[12] !== O.externalPaymentConfigurations || t[13] !== n.entryPoint ? (W = function() {
			var e, t, a = (e = (t = O.externalPaymentConfigurations) == null || (t = t.at(0)) == null ? void 0 : t.type) != null ? e : "no_method_confirmed";
			new (o("WAWebOrderDetailsActionsSmbWamEvent")).OrderDetailsActionsSmbWamEvent({
				actionCategory: String(r("WAWebOrderDetailsActionCategory").ORDER_DETAILS_MANAGEMENT),
				hasNote: !!m,
				orderDetailEntryPoint: String(n.entryPoint),
				orderDetailsCreationAction: o("WAWebWamEnumOrderDetailsCreationAction").ORDER_DETAILS_CREATION_ACTION.SEND_MARK_AS_PAID,
				paymentStatus: !0,
				paymentType: a
			}).commit();
		}, t[11] = m, t[12] = O.externalPaymentConfigurations, t[13] = n.entryPoint, t[14] = W) : W = t[14];
		var q = W, U;
		if (t[15] !== F || t[16] !== l || t[17] !== P || t[18] !== q || t[19] !== m || t[20] !== O || t[21] !== D || t[22] !== n.entryPoint || t[23] !== B) {
			var V = function(t, a) {
				var e = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), i = o("WAWebBusinessProfileUtils").hasCatalog(o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(e));
				new (o("WAWebOrderDetailsActionsSmbWamEvent")).OrderDetailsActionsSmbWamEvent({
					actionCategory: String(r("WAWebOrderDetailsActionCategory").ORDER_DETAILS_MANAGEMENT),
					hasCatalog: i,
					hasNote: !!m,
					orderDetailEntryPoint: String(n.entryPoint),
					orderDetailsCreationAction: o("WAWebWamEnumOrderDetailsCreationAction").ORDER_DETAILS_CREATION_ACTION.SEND_ORDER_STATUS
				}).commit(), o("WAWebBizSendOrderAction").sendOrderStatusMessageAsMerchant({
					chat: F,
					offset: o("WAWebOrderDetailMath").DEFAULT_OFFSET,
					orderInfo: O,
					orderNote: m,
					orderStatus: t,
					paymentMethod: null,
					paymentStatus: a ? o("WAWebOrderPaymentStatus").OrderPaymentStatus.Captured : o("WAWebOrderPaymentStatus").OrderPaymentStatus.Pending,
					sellerJid: B
				}).catch(E), o("WAWebSmbMarkAsXOrderAction").markOrderAsUpdatedStatusAction(F, l, D, P), o("WAWebSmb3pdConversionSignalAction").log3pdConversionSignalForOrders({
					chat: F,
					orderStatus: D,
					paidData: {
						amount: String(O.totalAmount),
						currency: O.currency,
						paid: P
					},
					type: "order_updated"
				}, l), o("WAWebCmd").Cmd.openChatFromUnread({
					chat: F,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.BizOrder
				}).catch(L);
			}, H = function(t) {
				var e = t.nextOrderStatus, n = t.nextPaymentState, r = t.shouldIncludeNote;
				o("WAWebBizSendOrderAction").sendOrderPaymentStatusMessageAsMerchant({
					chat: F,
					offset: o("WAWebOrderDetailMath").DEFAULT_OFFSET,
					orderInfo: O,
					orderNote: r ? m : null,
					orderStatus: e,
					paymentMethod: null,
					paymentStatus: n ? o("WAWebOrderPaymentStatus").OrderPaymentStatus.Captured : o("WAWebOrderPaymentStatus").OrderPaymentStatus.Pending,
					sellerJid: B
				}).finally(function() {
					q();
				});
			};
			U = function(t, n, r, a) {
				o("WAWebDrawerManager").DrawerManager.closeDrawerRight(), t && (H({
					nextOrderStatus: r,
					nextPaymentState: a,
					shouldIncludeNote: !n
				}), o("WAWebSmb3pdConversionSignalAction").log3pdConversionSignalForOrders({
					chat: F,
					isPaidStateChanged: !0,
					orderStatus: D,
					paidData: {
						amount: String(O.totalAmount),
						currency: O.currency,
						paid: P
					},
					type: "order_updated"
				}, l)), n && V(r, a);
			}, t[15] = F, t[16] = l, t[17] = P, t[18] = q, t[19] = m, t[20] = O, t[21] = D, t[22] = n.entryPoint, t[23] = B, t[24] = U;
		} else U = t[24];
		var G;
		t[25] === Symbol.for("react.memo_cache_sentinel") ? (G = function(t) {
			return y.findIndex(function(e) {
				return e === t;
			});
		}, t[25] = G) : G = t[25];
		var z = G, j;
		t[26] !== P || t[27] !== D || t[28] !== (I == null ? void 0 : I.paymentStatus) || t[29] !== R || t[30] !== U ? (j = function() {
			var e = z(D), t = z(R), n = (I == null ? void 0 : I.paymentStatus) === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Captured, a = e !== t, i = n !== P, l = !a && !i, u = e < t, c = D, d = P;
			o("WAWebOrderGatingUtils").isOrderStatusM1Enabled() && (i && (P ? D === o("WAWebOrderStatus").OrderStatus.PaymentRequested && (c = o("WAWebOrderStatus").OrderStatus.PreparingToShip) : D === o("WAWebOrderStatus").OrderStatus.PreparingToShip && (c = o("WAWebOrderStatus").OrderStatus.PaymentRequested)), a && P && D === o("WAWebOrderStatus").OrderStatus.PaymentRequested && (d = !1)), l ? o("WAWebModalManager").ModalManager.open(p.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				title: s._(
					/*BTDS*/
					""
				),
				okText: r("WAWebFbtCommon")("OK"),
				onOK: o("WAWebModalManager").closeModalManager,
				tsNavigationData: {
					surface: "unknown",
					viewName: "order-status-update"
				},
				children: o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled() ? s._(
					/*BTDS*/
					"",
					[s._param("originalOrderStatus", o("WAWebBizOrderStatusLabels").getWAWebBizOrderStatusLabel(R))]
				) : s._(
					/*BTDS*/
					"",
					[s._param("originalOrderStatus", o("WAWebBizOrderStatusLabels").getWAWebBizOrderStatusLabel(R))]
				)
			})) : u ? o("WAWebModalManager").ModalManager.open(p.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				title: s._(
					/*BTDS*/
					""
				),
				okText: s._(
					/*BTDS*/
					""
				),
				tsNavigationData: {
					surface: "unknown",
					viewName: "order-status-update"
				},
				onOK: function() {
					U(i, a, c, d), o("WAWebModalManager").closeModalManager();
				},
				cancelText: s._(
					/*BTDS*/
					""
				),
				onCancel: o("WAWebModalManager").closeModalManager,
				children: o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled() ? s._(
					/*BTDS*/
					"",
					[s._param("originalOrderStatus", o("WAWebBizOrderStatusLabels").getWAWebBizOrderStatusLabel(R)), s._param("orderStatus", o("WAWebBizOrderStatusLabels").getWAWebBizOrderStatusLabel(D))]
				) : s._(
					/*BTDS*/
					"",
					[s._param("originalOrderStatus", o("WAWebBizOrderStatusLabels").getWAWebBizOrderStatusLabel(R)), s._param("orderStatus", o("WAWebBizOrderStatusLabels").getWAWebBizOrderStatusLabel(D))]
				)
			})) : U(i, a, c, d);
		}, t[26] = P, t[27] = D, t[28] = I == null ? void 0 : I.paymentStatus, t[29] = R, t[30] = U, t[31] = j) : j = t[31];
		var K = j, Q;
		t[32] === Symbol.for("react.memo_cache_sentinel") ? (Q = s._(
			/*BTDS*/
			""
		), t[32] = Q) : Q = t[32];
		var X = Q, Y;
		t[33] !== P || t[34] !== D ? (Y = function() {
			var e = !P;
			N(e), e && D === o("WAWebOrderStatus").OrderStatus.PaymentRequested && x(o("WAWebOrderStatus").OrderStatus.PreparingToShip);
		}, t[33] = P, t[34] = D, t[35] = Y) : Y = t[35];
		var J = Y, Z = n.onBack, ee;
		t[36] === Symbol.for("react.memo_cache_sentinel") ? (ee = {
			surface: "unknown",
			viewName: "order-status-update"
		}, t[36] = ee) : ee = t[36];
		var te;
		t[37] === Symbol.for("react.memo_cache_sentinel") ? (te = o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled() ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[37] = te) : te = t[37];
		var ne;
		t[38] !== n.onBack ? (ne = p.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: te,
			onBack: n.onBack,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
		}), t[38] = n.onBack, t[39] = ne) : ne = t[39];
		var re;
		t[40] !== P || t[41] !== J ? (re = o("WAWebOrdersExpansionUtils").isOrderExpansionEnabled() && p.jsxs(p.Fragment, { children: [p.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: [C.paddingTop16, C.paddingHoriz16],
			children: [p.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: C.paddingEnd24,
				children: p.jsx(r("WDSSwitch.react"), {
					value: P,
					onChange: J,
					testid: "order-mark-as-paid-switch"
				})
			}), p.jsx("div", { children: s._(
				/*BTDS*/
				""
			) })]
		}), p.jsx(b, { xstyle: C.marginBottom16 })] }), t[40] = P, t[41] = J, t[42] = re) : re = t[42];
		var oe;
		t[43] === Symbol.for("react.memo_cache_sentinel") ? (oe = { className: "x1tiyuxx x1nbhmlj xdx6fka xvtqlqk" }, t[43] = oe) : oe = t[43];
		var ae;
		t[44] !== P || t[45] !== D ? (ae = y.map(function(e) {
			return p.jsx(r("WAWebOrderDetailRadioButton.react"), {
				testid: "order-status-select-option-" + e,
				label: o("WAWebBizOrderStatusLabels").getWAWebBizOrderStatusLabel(e),
				isCanceled: e === o("WAWebOrderStatus").OrderStatus.Canceled,
				checked: D === e,
				onClick: function() {
					x(e), e === o("WAWebOrderStatus").OrderStatus.PaymentRequested && P && N(!1);
				}
			}, e);
		}), t[44] = P, t[45] = D, t[46] = ae) : ae = t[46];
		var ie;
		t[47] !== ae ? (ie = p.jsx("div", babelHelpers.extends({}, oe, { children: p.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: C.checkboxContainer,
			children: ae
		}) })), t[47] = ae, t[48] = ie) : ie = t[48];
		var le, se;
		t[49] === Symbol.for("react.memo_cache_sentinel") ? (le = p.jsx(b, {}), se = { className: "xdylf7x x5s3kwk" }, t[49] = le, t[50] = se) : (le = t[49], se = t[50]);
		var ue;
		t[51] === Symbol.for("react.memo_cache_sentinel") ? (ue = function(t) {
			return _(t.text);
		}, t[51] = ue) : ue = t[51];
		var ce;
		t[52] !== K || t[53] !== m ? (ce = p.jsx("div", babelHelpers.extends({}, se, { children: p.jsx(o("WAWebRichTextField.react").RichTextField, {
			maxLength: o("WAWebOrderConstants").MAX_CART_MESSAGE_LENGTH,
			placeholder: X,
			value: m,
			testid: "order-status-note-text-field",
			multiline: !0,
			showRemaining: !0,
			spellCheck: !0,
			emojiBtnPosition: "side",
			textFormatEnabled: !0,
			onEnter: K,
			onChange: ue
		}) })), t[52] = K, t[53] = m, t[54] = ce) : ce = t[54];
		var de;
		t[55] !== l || t[56] !== O.items.length || t[57] !== n.chat ? (de = v({
			chat: n.chat,
			eventDataSharingEnabled: l,
			itemsCount: O.items.length,
			setEventDataSharingEnabled: u
		}), t[55] = l, t[56] = O.items.length, t[57] = n.chat, t[58] = de) : de = t[58];
		var me;
		t[59] === Symbol.for("react.memo_cache_sentinel") ? (me = [
			C.paddingHoriz16,
			C.marginTop8,
			C.marginBottom24
		], t[59] = me) : me = t[59];
		var pe;
		t[60] === Symbol.for("react.memo_cache_sentinel") ? (pe = s._(
			/*BTDS*/
			""
		), t[60] = pe) : pe = t[60];
		var _e;
		t[61] !== K ? (_e = p.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: me,
			children: p.jsx(o("WAWebButton.react").Button, {
				testid: "order-status-update-button",
				type: "primary",
				onClick: K,
				children: pe
			})
		}), t[61] = K, t[62] = _e) : _e = t[62];
		var fe;
		t[63] !== re || t[64] !== ie || t[65] !== ce || t[66] !== de || t[67] !== _e ? (fe = p.jsx(r("WAWebDrawerBody.react"), { children: p.jsxs(r("WAWebDrawerSection.react"), { children: [
			re,
			ie,
			le,
			ce,
			de,
			_e
		] }) }), t[63] = re, t[64] = ie, t[65] = ce, t[66] = de, t[67] = _e, t[68] = fe) : fe = t[68];
		var ge;
		return t[69] !== n.onBack || t[70] !== a || t[71] !== ne || t[72] !== fe ? (ge = p.jsxs(r("WAWebDrawer.react"), {
			onDrop: Z,
			ref: a,
			tsNavigationData: ee,
			children: [ne, fe]
		}), t[69] = n.onBack, t[70] = a, t[71] = ne, t[72] = fe, t[73] = ge) : ge = t[73], ge;
	}
	function L(t) {
		o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Error opening chat"]))).verbose();
	}
	function E(e) {
		o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Error sending order status in chat"]))).verbose();
	}
	l.default = R;
}), 226);
