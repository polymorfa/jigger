__d("WAWebBizOrderManagementFlow.react", [
	"fbt",
	"$InternalEnum",
	"WAWebBizChargesInfoBanner.react",
	"WAWebBizEntryPoint",
	"WAWebBizOpenOrderStatusDrawer.react",
	"WAWebBizOrderDetailAction",
	"WAWebBizOrderManagementPaymentMethodsSection.react",
	"WAWebBizOrderManagementSettingsSection.react",
	"WAWebBizOrderRequestManagementDrawer.react",
	"WAWebBizOrderStatusLabels",
	"WAWebBusinessProfileCollection",
	"WAWebBusinessProfileUtils",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebCurrencyUtils",
	"WAWebDetailImage.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebFlex.react",
	"WAWebFrontendMsgGetters",
	"WAWebName.react",
	"WAWebOrderDetailsActionCategory",
	"WAWebOrderDetailsActionsSmbWamEvent",
	"WAWebOrderFetcher",
	"WAWebOrderGatingUtils",
	"WAWebOrderRequestDetail.react",
	"WAWebOrderStatus",
	"WAWebOrderStatusButton",
	"WAWebPaymentsGatingUtils",
	"WAWebSpinner.react",
	"WAWebUserPrefsMeUser",
	"WAWebWamEnumOrderDetailsCreationAction",
	"WAWebWdsSmbPictoReceiptAndroidIcon.react",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebFlow",
	"useWAWebGetOrderRequests",
	"useWAWebGetOrders",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.Fragment, p = d.useRef, _ = {
		paddingBlock10: {
			paddingTop: "x889kno",
			paddingBottom: "x1a8lsjc",
			$$css: !0
		},
		paddingTop9: {
			paddingTop: "x96k8nx",
			$$css: !0
		}
	}, f = n("$InternalEnum").Mirrored(["Orders", "Requests"]), g = 65, h = {
		canceled: {
			color: "x30a034",
			$$css: !0
		},
		completed: {
			color: "x1v5yvga",
			$$css: !0
		},
		confirmed: {
			color: "x1du590y",
			$$css: !0
		},
		delivered: {
			color: "x1du590y",
			$$css: !0
		},
		infoRow: {
			color: "x1mhprgp",
			fontSize: "x1f6kntn",
			fontWeight: "xk50ysn",
			lineHeight: "xa7kkou",
			$$css: !0
		},
		orderInfo: {
			borderBottomColor: "x120ee7l",
			borderBottomStyle: "x1q0q8m5",
			borderBottomWidth: "xso031l",
			flexGrow: "x1iyjqo2",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		orderStatusLabel: {
			fontWeight: "xk50ysn",
			$$css: !0
		},
		orderSubDetails: {
			color: "x1mhprgp",
			fontSize: "x1f6kntn",
			lineHeight: "x37zpob",
			$$css: !0
		},
		seeAllButton: {
			color: "x1mc9qgo",
			$$css: !0
		},
		subTitle: {
			color: "x1mhprgp",
			$$css: !0
		},
		title: {
			color: "x6o5irq",
			fontSize: "x1jchvi3",
			justifyContent: "x1qughib",
			lineHeight: "x1evy7pa",
			$$css: !0
		}
	};
	function y(e) {
		var t = o("react-compiler-runtime").c(15), n = e.isInitialStep, a = e.ref, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }, t[0] = i) : i = t[0];
		var l = o("useWAWebFlow").useFlow(f.Orders, i), s = l[0], u = l[1];
		if (u.step == null) return null;
		var d;
		e: switch (u.step) {
			case f.Orders: {
				var m, p;
				t[1] !== u ? (m = function() {
					u.push(f.Requests);
				}, p = function() {
					return u.end();
				}, t[1] = u, t[2] = m, t[3] = p) : (m = t[2], p = t[3]);
				var _ = n != null ? n : !1, g;
				t[4] !== m || t[5] !== p || t[6] !== _ ? (g = c.jsx(I, {
					onSeeAll: m,
					onBack: p,
					isInitialStep: _
				}), t[4] = m, t[5] = p, t[6] = _, t[7] = g) : g = t[7], d = g;
				break e;
			}
			case f.Requests: {
				var h;
				t[8] !== u ? (h = c.jsx(r("WAWebBizOrderRequestManagementDrawer.react"), { onBack: function() {
					return u.pop();
				} }), t[8] = u, t[9] = h) : h = t[9], d = h;
			}
		}
		var y;
		return t[10] !== s || t[11] !== d || t[12] !== u || t[13] !== a ? (y = c.jsx(s, {
			ref: a,
			flow: u,
			children: d
		}), t[10] = s, t[11] = d, t[12] = u, t[13] = a, t[14] = y) : y = t[14], y;
	}
	function C(e) {
		switch (e) {
			case o("WAWebOrderStatus").OrderStatus.Canceled: return h.canceled;
			case o("WAWebOrderStatus").OrderStatus.Complete: return h.completed;
			case o("WAWebOrderStatus").OrderStatus.Confirmed: return h.confirmed;
			case o("WAWebOrderStatus").OrderStatus.Delivered: return h.delivered;
			case o("WAWebOrderStatus").OrderStatus.Pending:
			case o("WAWebOrderStatus").OrderStatus.Processing:
			case o("WAWebOrderStatus").OrderStatus.PartiallyShipped:
			case o("WAWebOrderStatus").OrderStatus.Shipped:
			case o("WAWebOrderStatus").OrderStatus.PaymentRequested:
			case o("WAWebOrderStatus").OrderStatus.PreparingToShip:
			case o("WAWebOrderStatus").OrderStatus.Delayed:
			case o("WAWebOrderStatus").OrderStatus.Failed:
			case o("WAWebOrderStatus").OrderStatus.OutForDelivery:
			case o("WAWebOrderStatus").OrderStatus.Refunded: return null;
		}
	}
	function b(t) {
		var n = o("react-compiler-runtime").c(9), a = t.orderStatusInfo, i;
		n[0] !== a ? (i = a === void 0 ? o("WAWebOrderStatus").getDefaultOrderStatus() : a, n[0] = a, n[1] = i) : i = n[1];
		var l = i, u;
		n[2] !== l ? (u = l === o("WAWebOrderStatus").OrderStatus.Confirmed ? s._(
			/*BTDS*/
			""
		) : o("WAWebBizOrderStatusLabels").getWAWebBizOrderStatusLabel(l), n[2] = l, n[3] = u) : u = n[3];
		var d = u, m;
		n[4] !== l ? (m = (e || (e = r("stylex"))).props(h.orderStatusLabel, C(l)), n[4] = l, n[5] = m) : m = n[5];
		var p;
		return n[6] !== d || n[7] !== m ? (p = c.jsx("span", babelHelpers.extends({}, m, { children: d })), n[6] = d, n[7] = m, n[8] = p) : p = n[8], p;
	}
	var v = [];
	function S(e) {
		var t = o("react-compiler-runtime").c(12), n = e.items, r = n === void 0 ? v : n;
		if (r.length === 0) return null;
		var a, i;
		t[0] !== r ? (a = r[0], i = babelHelpers.arrayLikeToArray(r).slice(1), t[0] = r, t[1] = a, t[2] = i) : (a = t[1], i = t[2]);
		var l;
		t[3] !== i.length ? (l = s._(
			/*BTDS*/
			"",
			[s._plural(i.length, "number_of_items")]
		), t[3] = i.length, t[4] = l) : l = t[4];
		var u = String(l), d;
		t[5] !== u || t[6] !== i[0] || t[7] !== i.length ? (d = i.length > 0 ? String(s._(
			/*BTDS*/
			""
		)) + " " + (i.length === 1 ? i[0].name : u) : "", t[5] = u, t[6] = i[0], t[7] = i.length, t[8] = d) : d = t[8];
		var m = d, p = a.name + " " + m, _;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (_ = { className: "x6ikm8r x10wlt62 xlyipyv xuxw1ft x1iyjqo2" }, t[9] = _) : _ = t[9];
		var f;
		return t[10] !== p ? (f = c.jsx("span", babelHelpers.extends({ title: p }, _, { children: p })), t[10] = p, t[11] = f) : f = t[11], f;
	}
	var R = function() {
		return c.jsxs(c.Fragment, { children: [c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(h.infoRow, o("WDSPaddings.stylex").wdsPaddings.paddingHor16, _.paddingBlock10), { children: s._(
			/*BTDS*/
			""
		) })), c.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: _.paddingTop9,
			children: [c.jsx(o("WAWebWdsSmbPictoReceiptAndroidIcon.react").WdsSmbPictoReceiptAndroidIcon, {
				height: 88,
				width: 88
			}), c.jsx("div", babelHelpers.extends({}, e.props(h.subTitle, o("WDSPaddings.stylex").wdsPaddings.padding16), { children: o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled() ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			) }))]
		})] });
	}, L = { surface: "smb-orders-hub" };
	function E(t) {
		var n = o("react-compiler-runtime").c(18), a = t.onSeeAll, i = t.scrollElementRef, l = o("useWAWebGetOrderRequests").useGetOrderRequests(i, g), u = l.isLoading, d = l.ordersInfoMap, m = l.ordersLazylist, p = d.contactAndOrderRequestInfoMap, f = k, y;
		n[0] !== u || n[1] !== m.length ? (y = (m.length > 0 || u) && c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(h.infoRow, o("WDSPaddings.stylex").wdsPaddings.paddingHor16, _.paddingBlock10), { children: s._(
			/*BTDS*/
			""
		) })), n[0] = u, n[1] = m.length, n[2] = y) : y = n[2];
		var C;
		n[3] !== u ? (C = u && c.jsx(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			xstyle: o("WDSPaddings.stylex").wdsPaddings.padding16,
			children: c.jsx(o("WAWebSpinner.react").Spinner, {
				color: "default",
				size: 24,
				stroke: 6
			})
		}), n[3] = u, n[4] = C) : C = n[4];
		var b;
		if (n[5] !== p || n[6] !== m) {
			var v;
			n[8] !== p ? (v = function(t, n) {
				return c.jsx("div", { children: c.jsx(r("WAWebOrderRequestDetail.react"), { contactAndOrderInfo: p[t] }) }, t);
			}, n[8] = p, n[9] = v) : v = n[9], b = m.slice(0, 3).map(v), n[5] = p, n[6] = m, n[7] = b;
		} else b = n[7];
		var S;
		n[10] !== a || n[11] !== m.length ? (S = m.length > 3 && c.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "end",
			children: c.jsx("button", babelHelpers.extends({}, (e || (e = r("stylex"))).props(h.seeAllButton, o("WDSPaddings.stylex").wdsPaddings.paddingHor16, _.paddingBlock10), {
				onClick: function() {
					a(), f();
				},
				children: s._(
					/*BTDS*/
					""
				)
			}))
		}), n[10] = a, n[11] = m.length, n[12] = S) : S = n[12];
		var R;
		return n[13] !== y || n[14] !== C || n[15] !== b || n[16] !== S ? (R = c.jsxs(c.Fragment, { children: [
			y,
			C,
			b,
			S
		] }), n[13] = y, n[14] = C, n[15] = b, n[16] = S, n[17] = R) : R = n[17], R;
	}
	function k() {
		new (o("WAWebOrderDetailsActionsSmbWamEvent")).OrderDetailsActionsSmbWamEvent({
			actionCategory: String(r("WAWebOrderDetailsActionCategory").ORDER_DETAILS_MANAGEMENT),
			hasCatalog: o("WAWebBusinessProfileUtils").hasCatalog(o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(o("WAWebUserPrefsMeUser").getMeUserOrThrow())),
			orderDetailEntryPoint: String(r("WAWebBizEntryPoint").ORDER_REQUEST_LIST),
			orderDetailsCreationAction: o("WAWebWamEnumOrderDetailsCreationAction").ORDER_DETAILS_CREATION_ACTION.CLICK_SEE_ALL_ORDER_REQUESTS
		}).commit();
	}
	function I(e) {
		var t = o("react-compiler-runtime").c(31), n = e.isInitialStep, a = e.onBack, i = e.onSeeAll, l = e.ref, u = n === void 0 ? !1 : n, d = p(null), _ = o("useWAWebGetOrders").useGetOrders(d, g, o("useWAWebGetOrders").OrderManagementViewType.CHARGES_HOME), f = _.isLoading, h = _.ordersInfoMap, y = _.ordersLazylist, C = h.contactAndOrderInfoMap, b = h.orderStatusInfoMap, v;
		t[0] !== u || t[1] !== a ? (v = {}, u ? v.onCancel = a : v.onBack = a, t[0] = u, t[1] = a, t[2] = v) : v = t[2];
		var S;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (S = o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled() ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[3] = S) : S = t[3];
		var k;
		t[4] !== v ? (k = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, babelHelpers.extends({
			testid: "ORDER_DRAWER_MANAGEMENT_HEADER",
			title: S,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
		}, v)), t[4] = v, t[5] = k) : k = t[5];
		var I, x, $, P;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (I = "x1280gxy x5yr21d", x = o("WAWebPaymentsGatingUtils").paymentsHomeEnabled() && c.jsx(r("WAWebBizChargesInfoBanner.react"), {}), $ = !o("WAWebPaymentsGatingUtils").paymentsHomeEnabled() && c.jsx(r("WAWebBizOrderManagementPaymentMethodsSection.react"), {}), P = c.jsx(r("WAWebBizOrderManagementSettingsSection.react"), {}), t[6] = I, t[7] = x, t[8] = $, t[9] = P) : (I = t[6], x = t[7], $ = t[8], P = t[9]);
		var N;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (N = "x1280gxy x94v8gs xw2csxc x1odjw0f", t[10] = N) : N = t[10];
		var M;
		t[11] !== i ? (M = o("WAWebOrderGatingUtils").isSellerOrderRevampEnabled() && c.jsx(E, {
			onSeeAll: i,
			scrollElementRef: d
		}), t[11] = i, t[12] = M) : M = t[12];
		var w;
		t[13] !== C || t[14] !== b || t[15] !== y ? (w = y.map(function(e, t) {
			var n, r;
			return c.jsxs(m, { children: [c.jsx(D, { date: o("WAWebOrderFetcher").getOrderDisplayDate({
				contactAndOrderInfoMap: C,
				index: t,
				orderReferenceIds: y
			}) }), c.jsx(T, {
				contactAndOrderInfo: C[e],
				orderStatusInfo: (n = (r = b[e]) == null ? void 0 : r.status) != null ? n : o("WAWebOrderStatus").getDefaultOrderStatus()
			})] }, e);
		}), t[13] = C, t[14] = b, t[15] = y, t[16] = w) : w = t[16];
		var A;
		t[17] !== f ? (A = f && c.jsx(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			xstyle: o("WDSPaddings.stylex").wdsPaddings.padding16,
			children: c.jsx(o("WAWebSpinner.react").Spinner, {
				color: "default",
				size: 24,
				stroke: 6
			})
		}), t[17] = f, t[18] = A) : A = t[18];
		var F;
		t[19] !== f || t[20] !== y.length ? (F = !f && !y.length && c.jsx(R, {}), t[19] = f, t[20] = y.length, t[21] = F) : F = t[21];
		var O;
		t[22] !== M || t[23] !== w || t[24] !== A || t[25] !== F ? (O = c.jsxs(r("WAWebDrawerBody.react"), {
			className: I,
			children: [
				x,
				$,
				P,
				c.jsxs(r("WAWebDrawerSection.react"), {
					ref: d,
					className: N,
					animation: !1,
					children: [
						M,
						w,
						A,
						F
					]
				})
			]
		}), t[22] = M, t[23] = w, t[24] = A, t[25] = F, t[26] = O) : O = t[26];
		var B;
		return t[27] !== l || t[28] !== O || t[29] !== k ? (B = c.jsxs(r("WAWebDrawer.react"), {
			ref: l,
			tsNavigationData: L,
			children: [k, O]
		}), t[27] = l, t[28] = O, t[29] = k, t[30] = B) : B = t[30], B;
	}
	function T(t) {
		var n, a = o("react-compiler-runtime").c(33), i = t.contactAndOrderInfo, l = t.orderStatusInfo, s = r("useWAWebUIM")(), u;
		a[0] !== i || a[1] !== s ? (u = function() {
			var e, t = i.interactiveMsg;
			if (t != null) {
				var n = o("WAWebFrontendMsgGetters").getChat(t.unsafe());
				o("WAWebCmd").Cmd.openChatFromUnread({
					chat: n,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.BizOrder
				});
				var a = o("WAWebOrderStatusButton").getOrderStatusButton(t);
				if ((a == null || (e = a.order) == null ? void 0 : e.order_creator_surface) === "biz_inbox") {
					o("WAWebBizOpenOrderStatusDrawer.react").openOrderStatusDrawer(a, n, t);
					return;
				}
				o("WAWebBizOrderDetailAction").openOrderDetailDrawer(t, s, r("WAWebBizEntryPoint").FROM_BUSINESS_TOOLS);
			}
		}, a[0] = i, a[1] = s, a[2] = u) : u = a[2];
		var d = u, m, p;
		a[3] === Symbol.for("react.memo_cache_sentinel") ? (m = { className: "x6s0dn4 x78zum5 xvt47uu x1yc453h xh8yej3" }, p = (e || (e = r("stylex"))).props(o("WDSPaddings.stylex").wdsPaddings.paddingVer12, o("WDSPaddings.stylex").wdsPaddings.paddingHor16), a[3] = m, a[4] = p) : (m = a[3], p = a[4]);
		var f;
		a[5] !== i.contact.id ? (f = c.jsx("div", babelHelpers.extends({}, p, { children: c.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: i.contact.id,
			size: 40
		}) })), a[5] = i.contact.id, a[6] = f) : f = a[6];
		var g;
		a[7] === Symbol.for("react.memo_cache_sentinel") ? (g = (e || (e = r("stylex"))).props(h.orderInfo, _.paddingBlock10, o("WDSPaddings.stylex").wdsPaddings.paddingEnd16), a[7] = g) : g = a[7];
		var y;
		a[8] === Symbol.for("react.memo_cache_sentinel") ? (y = "x1iyjqo2", a[8] = y) : y = a[8];
		var C;
		a[9] !== i.contact ? (C = c.jsx(o("WAWebName.react").Name, {
			titlify: !0,
			ellipsify: !0,
			className: y,
			contact: i.contact
		}), a[9] = i.contact, a[10] = C) : C = a[10];
		var v = (n = i.orderInfo.totalAmount) != null ? n : 0, R;
		a[11] !== i.orderInfo.currency || a[12] !== v ? (R = o("WAWebCurrencyUtils").formatAmount({
			amount: v,
			currency: i.orderInfo.currency
		}), a[11] = i.orderInfo.currency, a[12] = v, a[13] = R) : R = a[13];
		var L;
		a[14] !== R ? (L = c.jsx("span", { children: R }), a[14] = R, a[15] = L) : L = a[15];
		var E;
		a[16] !== L || a[17] !== C ? (E = c.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: h.title,
			children: [C, L]
		}), a[16] = L, a[17] = C, a[18] = E) : E = a[18];
		var k;
		a[19] !== i.orderInfo.items ? (k = c.jsx(S, { items: i.orderInfo.items }), a[19] = i.orderInfo.items, a[20] = k) : k = a[20];
		var I;
		a[21] !== l ? (I = c.jsx(b, { orderStatusInfo: l }), a[21] = l, a[22] = I) : I = a[22];
		var T;
		a[23] !== k || a[24] !== I ? (T = c.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: h.orderSubDetails,
			children: [k, I]
		}), a[23] = k, a[24] = I, a[25] = T) : T = a[25];
		var D;
		a[26] !== E || a[27] !== T ? (D = c.jsxs("div", babelHelpers.extends({}, g, { children: [E, T] })), a[26] = E, a[27] = T, a[28] = D) : D = a[28];
		var x;
		return a[29] !== d || a[30] !== D || a[31] !== f ? (x = c.jsxs("button", babelHelpers.extends({
			"data-testid": "order-management-order-button",
			onClick: d
		}, m, { children: [f, D] })), a[29] = d, a[30] = D, a[31] = f, a[32] = x) : x = a[32], x;
	}
	function D(t) {
		var n = o("react-compiler-runtime").c(2), a = t.date, i = a === void 0 ? "" : a, l;
		return n[0] !== i ? (l = i && c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(h.infoRow, o("WDSPaddings.stylex").wdsPaddings.paddingHor16, _.paddingBlock10), { children: i.toUpperCase() })), n[0] = i, n[1] = l) : l = n[1], l;
	}
	l.default = y;
}), 226);
