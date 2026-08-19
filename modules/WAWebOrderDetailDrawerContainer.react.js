__d("WAWebOrderDetailDrawerContainer.react", [
	"fbt",
	"WAWebBizSendOrderAction",
	"WAWebBrazilPaymentsGeoGating",
	"WAWebBusinessProfileCollection",
	"WAWebBusinessProfileUtils",
	"WAWebButton.react",
	"WAWebCurrencyUtils",
	"WAWebDetailImage.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerButton.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerManager",
	"WAWebDrawerSection.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebFormatUprAmount",
	"WAWebFrontendContactGetters",
	"WAWebGetBrazilnteractiveActions",
	"WAWebMsgGetters",
	"WAWebNoop",
	"WAWebOrderDetailItems",
	"WAWebOrderDetailMath",
	"WAWebOrderDetailSectionContainer.react",
	"WAWebOrderDetailSellerProfile.react",
	"WAWebOrderDetailStatusPill.react",
	"WAWebOrderDetailsActionCategory",
	"WAWebOrderDetailsActionsSmbWamEvent",
	"WAWebOrderGatingUtils",
	"WAWebOrderPaymentStatus",
	"WAWebOrderStatus",
	"WAWebOrderStatusButton",
	"WAWebOrderSummaryDrawer",
	"WAWebOrdersExpansionCountries",
	"WAWebSpinner.react",
	"WAWebStatusClockIcon.react",
	"WAWebText.react",
	"WAWebText_DONOTUSE.react",
	"WAWebUserPrefsMeUser",
	"WAWebWamEnumOrderDetailsCreationAction",
	"WAWebWebIcCheckIcon.react",
	"WDSIconWdsIcCurrencyReal.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebOrderDetailItems",
	"useWAWebOrderPaymentStatus"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useMemo, f = { paddingBottom15: {
		paddingBottom: "xr1496l",
		$$css: !0
	} }, g = {
		buttonWrapper: {
			alignItems: "x6s0dn4",
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			$$css: !0
		},
		canceledIcon: {
			alignItems: "x6s0dn4",
			backgroundColor: "x4wrhlh",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			color: "x30a034",
			display: "x78zum5",
			height: "x90ne7k",
			justifyContent: "xl56j7k",
			marginInlineStart: "xwklpps",
			paddingTop: "x1yrsyyn",
			paddingInlineEnd: "x1icxu4v",
			paddingBottom: "x10b6aqq",
			paddingInlineStart: "x25sj25",
			width: "x1691je0",
			$$css: !0
		},
		checkIcon: {
			alignItems: "x6s0dn4",
			backgroundColor: "x1qe8gl4",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			color: "x11askks",
			display: "x78zum5",
			height: "x10w6t97",
			justifyContent: "xl56j7k",
			marginInlineStart: "xdwrcjd",
			paddingTop: "x1yrsyyn",
			paddingInlineEnd: "x1icxu4v",
			paddingBottom: "x10b6aqq",
			paddingInlineStart: "x25sj25",
			width: "x1td3qas",
			$$css: !0
		},
		paymentSentTextPadding: {
			paddingInlineStart: "xwn43p0",
			$$css: !0
		},
		pendingIcon: {
			alignItems: "x6s0dn4",
			backgroundColor: "x4wrhlh",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			color: "xhslqc4",
			display: "x78zum5",
			height: "x90ne7k",
			justifyContent: "xl56j7k",
			marginInlineStart: "xwklpps",
			paddingTop: "x1yrsyyn",
			paddingInlineEnd: "x1icxu4v",
			paddingBottom: "x10b6aqq",
			paddingInlineStart: "x25sj25",
			width: "x1691je0",
			$$css: !0
		},
		statusRowPadding: {
			paddingInlineStart: "x1mfogq2",
			paddingTop: "xz9dl7a",
			$$css: !0
		},
		statusTextPadding: {
			paddingInlineStart: "xwn43p0",
			$$css: !0
		}
	}, h = { surface: "smb-order-details" };
	function y(t) {
		var n, a = o("react-compiler-runtime").c(42), i, l;
		a[0] !== t ? (l = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), a[0] = t, a[1] = i, a[2] = l) : (i = a[1], l = a[2]);
		var s = i, u = s.chat, c = s.orderInfo, m = s.sellerWid, _ = c.referenceId, f = c.totalAmount, g = r("useWAWebOrderDetailItems")(c, m), y = g.isLoading, S = g.orderItems, R;
		a[3] !== u || a[4] !== _ ? (R = o("WAWebOrderStatus").findOrderStatus(u, _), a[3] = u, a[4] = _, a[5] = R) : R = a[5];
		var E = R, k = (n = i.onlyShowPaymentDetails) != null ? n : !1, I, T;
		a[6] !== i.entryPoint ? (I = function() {
			new (o("WAWebOrderDetailsActionsSmbWamEvent")).OrderDetailsActionsSmbWamEvent({
				actionCategory: String(r("WAWebOrderDetailsActionCategory").ORDER_DETAILS_MANAGEMENT),
				hasCatalog: o("WAWebBusinessProfileUtils").hasCatalog(o("WAWebBusinessProfileCollection").BusinessProfileCollection.getMeBusinessProfile()),
				orderDetailEntryPoint: String(i.entryPoint),
				orderDetailsCreationAction: o("WAWebWamEnumOrderDetailsCreationAction").ORDER_DETAILS_CREATION_ACTION.VIEW_ORDER_DETAILS
			}).commit();
		}, T = [i.entryPoint], a[6] = i.entryPoint, a[7] = I, a[8] = T) : (I = a[7], T = a[8]), p(I, T);
		var D = S.length > 0, x;
		a[9] !== u || a[10] !== c || a[11] !== E || a[12] !== m ? (x = function() {
			o("WAWebBizSendOrderAction").sendOrderPaymentMethodUpdate({
				chat: u,
				offset: o("WAWebOrderDetailMath").DEFAULT_OFFSET,
				orderInfo: c,
				orderNote: null,
				orderStatus: E,
				paymentMethod: o("WAWebOrderPaymentStatus").OrderPaymentMethod.Confirm,
				paymentStatus: null,
				sellerJid: m.toJid()
			}).finally(b);
		}, a[9] = u, a[10] = c, a[11] = E, a[12] = m, a[13] = x) : x = a[13];
		var $ = x, P = i.onBack, N;
		a[14] === Symbol.for("react.memo_cache_sentinel") ? (N = o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled(), a[14] = N) : N = a[14];
		var M;
		a[15] !== D || a[16] !== k ? (M = C({
			containsOrder: D,
			onlyShowPaymentDetails: k,
			optimizationEnabled: N
		}), a[15] = D, a[16] = k, a[17] = M) : M = a[17];
		var w;
		a[18] !== i.onBack || a[19] !== M ? (w = d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: M,
			onBack: i.onBack,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
		}), a[18] = i.onBack, a[19] = M, a[20] = w) : w = a[20];
		var A = y ? "center-content" : void 0, F;
		a[21] !== u || a[22] !== D || a[23] !== y || a[24] !== k || a[25] !== c || a[26] !== S || a[27] !== E || a[28] !== i.interactiveMessage || a[29] !== i.onOrderStatusUpdateClick || a[30] !== m || a[31] !== $ || a[32] !== f ? (F = y ? d.jsx(L, {}) : d.jsx(v, {
			containsOrder: D,
			onlyShowPaymentDetails: k,
			chat: u,
			interactiveMessage: i.interactiveMessage,
			onOrderStatusUpdateClick: i.onOrderStatusUpdateClick,
			orderInfo: c,
			orderItems: S,
			orderStatus: E,
			sellerWid: m,
			sendConfirmOrderInfo: $,
			totalAmount: f
		}), a[21] = u, a[22] = D, a[23] = y, a[24] = k, a[25] = c, a[26] = S, a[27] = E, a[28] = i.interactiveMessage, a[29] = i.onOrderStatusUpdateClick, a[30] = m, a[31] = $, a[32] = f, a[33] = F) : F = a[33];
		var O;
		a[34] !== F || a[35] !== A ? (O = d.jsx(r("WAWebDrawerBody.react"), {
			theme: A,
			children: F
		}), a[34] = F, a[35] = A, a[36] = O) : O = a[36];
		var B;
		return a[37] !== i.onBack || a[38] !== l || a[39] !== O || a[40] !== w ? (B = d.jsxs(r("WAWebDrawer.react"), {
			onDrop: P,
			ref: l,
			tsNavigationData: h,
			children: [w, O]
		}), a[37] = i.onBack, a[38] = l, a[39] = O, a[40] = w, a[41] = B) : B = a[41], B;
	}
	function C(e) {
		if ((typeof e == "object" && e !== null || typeof e == "function") && e.onlyShowPaymentDetails === !0 || (typeof e == "object" && e !== null || typeof e == "function") && e.containsOrder === !1) return s._(
			/*BTDS*/
			""
		);
		if ((typeof e == "object" && e !== null || typeof e == "function") && e.containsOrder === !0 && e.optimizationEnabled === !0) return s._(
			/*BTDS*/
			""
		);
		if (typeof e == "object" && e !== null || typeof e == "function") return s._(
			/*BTDS*/
			""
		);
		throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
	}
	function b() {
		o("WAWebDrawerManager").DrawerManager.closeDrawerRight(), r("WAWebNoop")();
	}
	function v(e) {
		var t = o("react-compiler-runtime").c(15), n = e.chat, r = e.containsOrder, a = e.interactiveMessage, i = e.onlyShowPaymentDetails, l = e.onOrderStatusUpdateClick, s = e.orderInfo, u = e.orderItems, c = e.orderStatus, m = e.sellerWid, p = e.sendConfirmOrderInfo, _ = e.totalAmount, f = i || !r, g;
		t[0] !== a ? (g = a != null && o("WAWebOrderStatusButton").isInboxCreatedOrder(a), t[0] = a, t[1] = g) : g = t[1];
		var h = g, y;
		return t[2] !== n || t[3] !== a || t[4] !== h || t[5] !== l || t[6] !== i || t[7] !== s || t[8] !== u || t[9] !== c || t[10] !== m || t[11] !== p || t[12] !== f || t[13] !== _ ? (y = f ? d.jsx(R, {
			chat: n,
			interactiveMessage: a,
			isInboxOrder: h,
			onlyShowPaymentDetails: i,
			onOrderStatusUpdateClick: l,
			orderInfo: s,
			orderStatus: c,
			sellerWid: m,
			totalAmount: _
		}) : d.jsx(S, {
			chat: n,
			interactiveMessage: a,
			isInboxOrder: h,
			onOrderStatusUpdateClick: l,
			orderInfo: s,
			orderItems: u,
			orderStatus: c,
			sellerWid: m,
			sendConfirmOrderInfo: p,
			totalAmount: _
		}), t[2] = n, t[3] = a, t[4] = h, t[5] = l, t[6] = i, t[7] = s, t[8] = u, t[9] = c, t[10] = m, t[11] = p, t[12] = f, t[13] = _, t[14] = y) : y = t[14], y;
	}
	function S(e) {
		var t = o("react-compiler-runtime").c(46), n = e.chat, a = e.interactiveMessage, i = e.isInboxOrder, l = e.onOrderStatusUpdateClick, c = e.orderInfo, m = e.orderItems, p = e.orderStatus, _ = e.sellerWid, h = e.sendConfirmOrderInfo, y = e.totalAmount, C = c.discount, b = c.shipping, v = c.subtotal, S = c.tax;
		if (v == null) return null;
		var R;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (R = [o("WDSPaddings.stylex").wdsPaddings.paddingTop20, f.paddingBottom15], t[0] = R) : R = t[0];
		var L;
		t[1] !== p ? (L = d.jsx(r("WAWebOrderDetailStatusPill.react"), { orderStatus: p }), t[1] = p, t[2] = L) : L = t[2];
		var E;
		t[3] !== c.referenceId || t[4] !== _ || t[5] !== L ? (E = d.jsx(r("WAWebOrderDetailSellerProfile.react"), {
			testid: "order-status-container",
			orderId: c.referenceId,
			sellerWid: _,
			orderStatus: L
		}), t[3] = c.referenceId, t[4] = _, t[5] = L, t[6] = E) : E = t[6];
		var I;
		t[7] !== c.currency || t[8] !== m ? (I = d.jsx(r("WAWebOrderDetailItems"), {
			details: !0,
			currency: c.currency,
			items: m
		}), t[7] = c.currency, t[8] = m, t[9] = I) : I = t[9];
		var T = S != null ? S * o("WAWebOrderDetailMath").DEFAULT_OFFSET : null, D = C != null ? C * o("WAWebOrderDetailMath").DEFAULT_OFFSET : null, x = b != null ? b * o("WAWebOrderDetailMath").DEFAULT_OFFSET : null, $ = v * o("WAWebOrderDetailMath").DEFAULT_OFFSET, P;
		t[10] !== c.currency || t[11] !== T || t[12] !== D || t[13] !== x || t[14] !== $ ? (P = d.jsx(o("WAWebOrderSummaryDrawer").OrderValues, {
			tax: T,
			discount: D,
			shipping: x,
			subtotal: $,
			currency: c.currency,
			canDisplayAdditionalCharges: !0
		}), t[10] = c.currency, t[11] = T, t[12] = D, t[13] = x, t[14] = $, t[15] = P) : P = t[15];
		var N;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (N = d.jsx(o("WAWebText.react").WAWebTextTitle, {
			as: "span",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[16] = N) : N = t[16];
		var M;
		t[17] !== c.currency || t[18] !== y ? (M = o("WAWebFormatUprAmount").formatUprAmount(c.currency, y), t[17] = c.currency, t[18] = y, t[19] = M) : M = t[19];
		var w;
		t[20] !== M ? (w = d.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "all",
			xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingHor16,
			testid: "order-details-total-row",
			children: [N, d.jsx(o("WAWebText.react").WAWebTextTitle, {
				as: "span",
				children: M
			})]
		}), t[20] = M, t[21] = w) : w = t[21];
		var A;
		t[22] !== w || t[23] !== E || t[24] !== I || t[25] !== P ? (A = d.jsx(r("WAWebDrawerSection.react"), {
			xstyle: R,
			children: d.jsxs(r("WAWebOrderDetailSectionContainer.react"), { children: [
				E,
				I,
				P,
				w
			] })
		}), t[22] = w, t[23] = E, t[24] = I, t[25] = P, t[26] = A) : A = t[26];
		var F;
		if (t[27] !== _) {
			var O, B;
			F = o("WAWebUserPrefsMeUser").isMeAccount(_) && ((O = (B = o("WAWebOrdersExpansionCountries").getOrdersExpansionAllowedCountries()) == null ? void 0 : B.length) != null ? O : 0) > 0 && d.jsx(r("WAWebDrawerSection.react"), { children: d.jsxs(o("WAWebDrawerButton.react").DrawerButtonSimple, {
				icon: d.jsx(o("WAWebStatusClockIcon.react").StatusClockIcon, { width: 20 }),
				testid: "order-payment-details",
				color: "dark",
				disabled: !0,
				onClick: r("WAWebNoop"),
				children: [d.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
					size: "16",
					children: s._(
						/*BTDS*/
						""
					)
				}), d.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
					className: "x1pg5gke xk4td0m",
					children: s._(
						/*BTDS*/
						""
					)
				})]
			}) }), t[27] = _, t[28] = F;
		} else F = t[28];
		var W;
		t[29] !== i || t[30] !== l || t[31] !== p || t[32] !== _ ? (W = !i && [o("WAWebOrderStatus").OrderStatus.Canceled, o("WAWebOrderStatus").OrderStatus.Complete].every(function(e) {
			return p !== e;
		}) && o("WAWebUserPrefsMeUser").isMeAccount(_) && d.jsx(r("WAWebDrawerSection.react"), { children: d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(g.buttonWrapper, o("WDSMargins.stylex").wdsMargins.marginVer16), { children: d.jsx(o("WAWebButton.react").Button, {
			testid: "order-status-update",
			type: "primary",
			onClick: function() {
				l == null || l();
			},
			children: o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled() ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			)
		}) })) }), t[29] = i, t[30] = l, t[31] = p, t[32] = _, t[33] = W) : W = t[33];
		var q;
		if (t[34] !== n || t[35] !== a || t[36] !== c || t[37] !== p || t[38] !== _ || t[39] !== h) {
			var U, V;
			q = !o("WAWebUserPrefsMeUser").isMeAccount(_) && p === o("WAWebOrderStatus").OrderStatus.Pending && ((U = (V = o("WAWebOrdersExpansionCountries").getConsumerOrdersExpansionAllowedCountries()) == null ? void 0 : V.length) != null ? U : 0) > 0 && d.jsx(r("WAWebDrawerSection.react"), { children: d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(g.buttonWrapper, o("WDSMargins.stylex").wdsMargins.marginVer16), { children: d.jsx(k, {
				sendConfirmOrderInfo: h,
				chat: n,
				orderInfo: c,
				interactiveMessage: a
			}) })) }), t[34] = n, t[35] = a, t[36] = c, t[37] = p, t[38] = _, t[39] = h, t[40] = q;
		} else q = t[40];
		var H;
		return t[41] !== A || t[42] !== F || t[43] !== W || t[44] !== q ? (H = d.jsxs(d.Fragment, { children: [
			A,
			F,
			W,
			q
		] }), t[41] = A, t[42] = F, t[43] = W, t[44] = q, t[45] = H) : H = t[45], H;
	}
	function R(e) {
		var t = o("react-compiler-runtime").c(51), n = e.chat, a = e.interactiveMessage, i = e.isInboxOrder, l = e.onlyShowPaymentDetails, c = e.onOrderStatusUpdateClick, m = e.orderInfo, p = e.orderStatus, _ = e.sellerWid, h = e.totalAmount, y = n.contact, C;
		t[0] !== y ? (C = y.verifiedName || y.name || o("WAWebFrontendContactGetters").getDisplayName(y), t[0] = y, t[1] = C) : C = t[1];
		var b = C, v = h * 1e3, S;
		t[2] !== m.currency || t[3] !== v ? (S = o("WAWebCurrencyUtils").formatAmount1000ToParts(m.currency, v), t[2] = m.currency, t[3] = v, t[4] = S) : S = t[4];
		var R = S, L = m.referenceId, k;
		t[5] !== m ? (k = o("WAWebOrderStatus").isSimplifiedOrder(m), t[5] = m, t[6] = k) : k = t[6];
		var I = o("useWAWebOrderPaymentStatus").useOrderPaymentStatus(n, L, k), T;
		t[7] !== a || t[8] !== _ ? (T = a != null ? o("WAWebMsgGetters").getIsSentByMe(a) : o("WAWebUserPrefsMeUser").isMeAccount(_), t[7] = a, t[8] = _, t[9] = T) : T = t[9];
		var D = T, x;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (x = [o("WDSPaddings.stylex").wdsPaddings.paddingTop20, f.paddingBottom15], t[10] = x) : x = t[10];
		var $;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? ($ = { className: "x6s0dn4 x78zum5 xdt5ytf x1p5oq8j xwxc41k x2b8uid" }, t[11] = $) : $ = t[11];
		var P;
		t[12] !== p ? (P = {
			0: { className: "x1heor9g x1weigxw x1s688f" },
			1: { className: "x18cpw0e x1weigxw x1s688f xmqliwb x13zicib xudwaec" }
		}[(p === o("WAWebOrderStatus").OrderStatus.Canceled) << 0], t[12] = p, t[13] = P) : P = t[13];
		var N = R.symbol + " " + R.integer + R.decimal, M;
		t[14] !== N || t[15] !== P ? (M = d.jsx(r("WAWebDrawerSection.react"), {
			testid: "order-total-amount",
			children: d.jsx("div", babelHelpers.extends({}, $, { children: d.jsx("span", babelHelpers.extends({}, P, { children: N })) }))
		}), t[14] = N, t[15] = P, t[16] = M) : M = t[16];
		var w;
		t[17] !== l || t[18] !== I ? (w = d.jsx(E, {
			currentStatus: I,
			onlyShowPaymentDetails: l
		}), t[17] = l, t[18] = I, t[19] = w) : w = t[19];
		var A;
		t[20] === Symbol.for("react.memo_cache_sentinel") ? (A = { className: "x6s0dn4 x78zum5 x1q0g3np x1mfogq2 xz9dl7a" }, t[20] = A) : A = t[20];
		var F;
		t[21] !== _ ? (F = d.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: _,
			size: 48
		}), t[21] = _, t[22] = F) : F = t[22];
		var O, B;
		t[23] === Symbol.for("react.memo_cache_sentinel") ? (O = { className: "x1cy8zhl x78zum5 xdt5ytf" }, B = { className: "xhslqc4 x1f6kntn xo1l8bm xwn43p0" }, t[23] = O, t[24] = B) : (O = t[23], B = t[24]);
		var W;
		t[25] !== D ? (W = d.jsx("span", babelHelpers.extends({}, B, { children: D ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) })), t[25] = D, t[26] = W) : W = t[26];
		var q;
		t[27] === Symbol.for("react.memo_cache_sentinel") ? (q = { className: "x1f6kntn xo1l8bm xwn43p0 x123j3cw" }, t[27] = q) : q = t[27];
		var U;
		t[28] !== b ? (U = d.jsx("span", babelHelpers.extends({}, q, { children: s._(
			/*BTDS*/
			"",
			[s._param("merchant-name", b)]
		) })), t[28] = b, t[29] = U) : U = t[29];
		var V;
		t[30] !== W || t[31] !== U ? (V = d.jsxs("div", babelHelpers.extends({}, O, { children: [W, U] })), t[30] = W, t[31] = U, t[32] = V) : V = t[32];
		var H;
		t[33] !== F || t[34] !== V ? (H = d.jsx(r("WAWebDrawerSection.react"), { children: d.jsxs("div", babelHelpers.extends({}, A, { children: [F, V] })) }), t[33] = F, t[34] = V, t[35] = H) : H = t[35];
		var G;
		t[36] !== M || t[37] !== w || t[38] !== H ? (G = d.jsxs(r("WAWebDrawerSection.react"), {
			xstyle: x,
			children: [
				M,
				w,
				H
			]
		}), t[36] = M, t[37] = w, t[38] = H, t[39] = G) : G = t[39];
		var z;
		t[40] !== n || t[41] !== i || t[42] !== c || t[43] !== l || t[44] !== m || t[45] !== p || t[46] !== _ ? (z = !l && !i && !o("WAWebOrderStatus").isPaymentRequest(n, m) && [o("WAWebOrderStatus").OrderStatus.Canceled, o("WAWebOrderStatus").OrderStatus.Complete].every(function(e) {
			return p !== e;
		}) && o("WAWebUserPrefsMeUser").isMeAccount(_) && d.jsx(r("WAWebDrawerSection.react"), { children: d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(g.buttonWrapper, o("WDSMargins.stylex").wdsMargins.marginVer16), { children: d.jsx(o("WAWebButton.react").Button, {
			testid: "order-status-update",
			type: "primary",
			onClick: function() {
				c == null || c();
			},
			children: o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled() ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			)
		}) })) }), t[40] = n, t[41] = i, t[42] = c, t[43] = l, t[44] = m, t[45] = p, t[46] = _, t[47] = z) : z = t[47];
		var j;
		return t[48] !== G || t[49] !== z ? (j = d.jsxs(d.Fragment, { children: [G, z] }), t[48] = G, t[49] = z, t[50] = j) : j = t[50], j;
	}
	function L() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = d.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			testid: "order-detail-drawer-loading",
			children: d.jsx(r("WAWebFlexItem.react"), { children: d.jsx(o("WAWebSpinner.react").Spinner, {}) })
		}), e[0] = t) : t = e[0], t;
	}
	function E(e) {
		var t = o("react-compiler-runtime").c(22), n = e.currentStatus, a = e.onlyShowPaymentDetails, i, l, u, c;
		e: {
			if (n === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Captured) {
				var m;
				t[0] === Symbol.for("react.memo_cache_sentinel") ? (m = d.jsx(o("WAWebWebIcCheckIcon.react").WebIcCheckIcon, { iconXstyle: g.checkIcon }), t[0] = m) : m = t[0], i = m, l = "contentActionEmphasized";
				var p;
				t[1] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
					/*BTDS*/
					""
				), t[1] = p) : p = t[1], u = p;
				var _;
				t[2] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
					/*BTDS*/
					""
				), t[2] = _) : _ = t[2], c = _;
				break e;
			}
			if (n === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Failed) {
				var f;
				t[3] === Symbol.for("react.memo_cache_sentinel") ? (f = d.jsx(r("WDSIconWdsIcCurrencyReal.react"), {
					width: 46,
					height: 46,
					iconXstyle: g.canceledIcon
				}), t[3] = f) : f = t[3], i = f, l = "secondaryNegative";
				var h;
				t[4] === Symbol.for("react.memo_cache_sentinel") ? (h = s._(
					/*BTDS*/
					""
				), t[4] = h) : h = t[4], u = h;
				var y;
				t[5] === Symbol.for("react.memo_cache_sentinel") ? (y = s._(
					/*BTDS*/
					""
				), t[5] = y) : y = t[5], c = y;
				break e;
			}
			if (n === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Pending || n === null || n === void 0) {
				var C;
				t[6] === Symbol.for("react.memo_cache_sentinel") ? (C = d.jsx(r("WDSIconWdsIcCurrencyReal.react"), {
					width: 46,
					height: 46,
					iconXstyle: g.pendingIcon
				}), t[6] = C) : C = t[6], i = C, l = "contentDeemphasized";
				var b;
				t[7] !== a ? (b = a ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				), t[7] = a, t[8] = b) : b = t[8], u = b;
				var v;
				t[9] !== a ? (v = a ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				), t[9] = a, t[10] = v) : v = t[10], c = v;
				break e;
			}
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + n);
		}
		var S;
		t[11] !== l || t[12] !== u ? (S = d.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			colorName: l,
			xstyle: g.statusTextPadding,
			children: u
		}), t[11] = l, t[12] = u, t[13] = S) : S = t[13];
		var R;
		t[14] !== c ? (R = d.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			xstyle: g.paymentSentTextPadding,
			children: c
		}), t[14] = c, t[15] = R) : R = t[15];
		var L;
		t[16] !== S || t[17] !== R ? (L = d.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "start",
			children: [S, R]
		}), t[16] = S, t[17] = R, t[18] = L) : L = t[18];
		var E;
		return t[19] !== i || t[20] !== L ? (E = d.jsx(r("WAWebDrawerSection.react"), { children: d.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: g.statusRowPadding,
			children: [i, L]
		}) }), t[19] = i, t[20] = L, t[21] = E) : E = t[21], E;
	}
	function k(e) {
		var t = o("react-compiler-runtime").c(13), n = e.chat, r = e.interactiveMessage, a = e.orderInfo, i = e.sendConfirmOrderInfo, l;
		t[0] !== n || t[1] !== r || t[2] !== a ? (l = I({
			chat: n,
			interactiveMessage: r,
			orderInfo: a
		}), t[0] = n, t[1] = r, t[2] = a, t[3] = l) : l = t[3];
		var u = l, c = u == null ? void 0 : u.Icon;
		if (u) {
			var m;
			t[4] !== c ? (m = c && d.jsx(c, {}), t[4] = c, t[5] = m) : m = t[5];
			var p;
			return t[6] !== u.label || t[7] !== u.onClick || t[8] !== m ? (p = d.jsxs(o("WAWebButton.react").Button, {
				testid: "order-payment-method",
				type: "primary",
				onClick: u.onClick,
				children: [m, u.label]
			}), t[6] = u.label, t[7] = u.onClick, t[8] = m, t[9] = p) : p = t[9], p;
		}
		var _;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (_ = o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled() ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[10] = _) : _ = t[10];
		var f;
		return t[11] !== i ? (f = d.jsx(o("WAWebButton.react").Button, {
			testid: "order-payment-confirm",
			type: "primary",
			onClick: i,
			children: _
		}), t[11] = i, t[12] = f) : f = t[12], f;
	}
	function I(e) {
		var t = e.chat, n = e.interactiveMessage, r = e.orderInfo;
		if (n == null) return null;
		var a = [];
		return o("WAWebGetBrazilnteractiveActions").hasValidDynamicPix(r) && a.push(o("WAWebGetBrazilnteractiveActions").getCopyPixCodeInteractiveAction(r, n)), o("WAWebBrazilPaymentsGeoGating").isPaymentLinkEnabled(t) && o("WAWebGetBrazilnteractiveActions").hasValidPaymentLink(r) && a.push(o("WAWebGetBrazilnteractiveActions").getOpenPaymentLinkInteractiveAction(r, n)), o("WAWebBrazilPaymentsGeoGating").isBoletoEnabled(t) && o("WAWebGetBrazilnteractiveActions").hasValidBoletoCode(r) && a.push(o("WAWebGetBrazilnteractiveActions").getCopyBoletoCodeInteractiveAction(r, n)), a.length >= 1 ? a[0] : null;
	}
	l.default = y;
}), 226);
