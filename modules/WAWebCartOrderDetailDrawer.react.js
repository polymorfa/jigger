__d("WAWebCartOrderDetailDrawer.react", [
	"fbt",
	"WAFilteredCatch",
	"WALogger",
	"WAWebABProps",
	"WAWebBackendErrors",
	"WAWebBizEntryPoint",
	"WAWebBusinessProfileCollection",
	"WAWebBusinessProfileUtils",
	"WAWebChatEntryPoint",
	"WAWebClock",
	"WAWebCmd",
	"WAWebConfirmPopup.react",
	"WAWebCurrencyUtils",
	"WAWebDBUpdateMessageTable",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerButton.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerManager",
	"WAWebDrawerSection.react",
	"WAWebFbtCommon",
	"WAWebFlatListController",
	"WAWebModalManager",
	"WAWebMsgCollection",
	"WAWebMsgModel",
	"WAWebOrderCollection",
	"WAWebOrderDetailTextComposer",
	"WAWebOrderDetailsActionCategory",
	"WAWebOrderDetailsActionsSmbWamEvent",
	"WAWebOrderGatingUtils",
	"WAWebOrderGetters",
	"WAWebOrderProductList.react",
	"WAWebProductCatalogFetchStateTopBar.react",
	"WAWebProtobufsE2E.pb",
	"WAWebSendTextMsgChatAction",
	"WAWebText.react",
	"WAWebUserPrefsMeUser",
	"WAWebUtilsLogQplEvents",
	"WAWebWamEnumOrderDetailsCreationAction",
	"WAWebWidFactory",
	"WDSPaddings.stylex",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useLazyRef"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = ["ref"], d, m, p = m || (m = o("react")), _ = m, f = _.useEffect, g = _.useState, h = { paddingInline18: {
		paddingInlineStart: "xwn43p0",
		paddingInlineEnd: "x1x5flf6",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} };
	function y(e) {
		var t = o("react-compiler-runtime").c(7), n = e.chat, a = e.onChange, i = e.onSubmit, l = e.value, u;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (u = (d || (d = r("stylex"))).props(o("WDSPaddings.stylex").wdsPaddings.paddingVer0, h.paddingInline18), t[0] = u) : u = t[0];
		var c;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (c = s._(
			/*BTDS*/
			""
		), t[1] = c) : c = t[1];
		var m;
		return t[2] !== n || t[3] !== a || t[4] !== i || t[5] !== l ? (m = p.jsx("div", babelHelpers.extends({}, u, { children: p.jsx(r("WAWebOrderDetailTextComposer"), {
			chat: n,
			onChange: a,
			onSubmit: i,
			value: l,
			placeholder: c
		}) })), t[2] = n, t[3] = a, t[4] = i, t[5] = l, t[6] = m) : m = t[6], m;
	}
	function C(e) {
		var t = o("react-compiler-runtime").c(9), n = e.onCreateOrderClick, a = e.onDeclineOrderClick, i = e.sellerJid, l = o("WAWebWidFactory").createUserWidOrThrow(i), u = o("WAWebUserPrefsMeUser").isMeAccount(l);
		if (!u) return null;
		var c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = s._(
			/*BTDS*/
			""
		), t[0] = c) : c = t[0];
		var d;
		t[1] !== n ? (d = p.jsx(r("WAWebDrawerSection.react"), { children: p.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
			testid: "order-create",
			color: "dark",
			onClick: n,
			children: c
		}) }), t[1] = n, t[2] = d) : d = t[2];
		var m;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (m = s._(
			/*BTDS*/
			""
		), t[3] = m) : m = t[3];
		var _;
		t[4] !== a ? (_ = p.jsx(r("WAWebDrawerSection.react"), { children: p.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
			testid: "order-decline",
			color: "dark",
			onClick: a,
			children: m
		}) }), t[4] = a, t[5] = _) : _ = t[5];
		var f;
		return t[6] !== d || t[7] !== _ ? (f = p.jsxs(p.Fragment, { children: [d, _] }), t[6] = d, t[7] = _, t[8] = f) : f = t[8], f;
	}
	function b(e) {
		var t = o("react-compiler-runtime").c(51), n = e.cancellationMessage, a = e.chat, i = e.fetchState, l = e.flatListController, u = e.isLoading, c = e.onOrderCancel, d = e.onOrderCreate, m = e.onProductDetail, _ = e.order, f = e.ownerHasReviewed, g = e.sellerJid, h = e.sendCancelMessage, b = e.setCancellationMessage;
		if (u || _ == null) {
			var R;
			return t[0] !== i ? (R = p.jsx(r("WAWebProductCatalogFetchStateTopBar.react"), { fetchState: i }), t[0] = i, t[1] = R) : R = t[1], R;
		}
		var L;
		if (_.products.length > 0) {
			var E;
			t[2] !== _ ? (E = s._(
				/*BTDS*/
				"",
				[s._plural(o("WAWebOrderGetters").getTotalItemCount(_) || 0, "count")]
			), t[2] = _, t[3] = E) : E = t[3], L = E;
		} else {
			var k;
			t[4] === Symbol.for("react.memo_cache_sentinel") ? (k = s._(
				/*BTDS*/
				""
			), t[4] = k) : k = t[4], L = k;
		}
		var I;
		t[5] !== L ? (I = p.jsx(o("WAWebText.react").WAWebTextTitle, { children: L }), t[5] = L, t[6] = I) : I = t[6];
		var T = I, D;
		if (t[7] !== _.products) {
			var x = _.products.reduce(S, null), $ = _.products.reduce(v, null);
			if (x != null && $ != null) D = s._(
				/*BTDS*/
				"",
				[s._param("subtotal", o("WAWebCurrencyUtils").formatAmount1000($, x))]
			);
			else {
				var P;
				t[9] === Symbol.for("react.memo_cache_sentinel") ? (P = s._(
					/*BTDS*/
					""
				), t[9] = P) : P = t[9], D = P;
			}
			t[7] = _.products, t[8] = D;
		} else D = t[8];
		var N;
		t[10] !== D ? (N = p.jsx(o("WAWebText.react").WAWebTextSmall, {
			as: "div",
			children: D
		}), t[10] = D, t[11] = N) : N = t[11];
		var M = N, w = null;
		if (_.createdAt != null) {
			var A;
			t[12] !== _.createdAt ? (A = o("WAWebClock").Clock.timeStr(_.createdAt), t[12] = _.createdAt, t[13] = A) : A = t[13];
			var F = A, O = "" + F, B;
			t[14] !== O ? (B = p.jsx(o("WAWebText.react").WAWebTextSmall, { children: O }), t[14] = O, t[15] = B) : B = t[15], w = B;
		}
		var W;
		t[16] !== i ? (W = p.jsx(r("WAWebProductCatalogFetchStateTopBar.react"), { fetchState: i }), t[16] = i, t[17] = W) : W = t[17];
		var q;
		t[18] === Symbol.for("react.memo_cache_sentinel") ? (q = { className: "x1280gxy x109j2v6 x1x5flf6 x1hhzuzn xwn43p0" }, t[18] = q) : q = t[18];
		var U;
		t[19] !== T || t[20] !== M ? (U = p.jsxs("div", babelHelpers.extends({}, q, { children: [T, M] })), t[19] = T, t[20] = M, t[21] = U) : U = t[21];
		var V;
		t[22] !== l || t[23] !== m || t[24] !== _ || t[25] !== g ? (V = p.jsx(r("WAWebOrderProductList.react"), {
			flatListController: l,
			onProductDetail: m,
			order: _,
			sellerJid: g
		}), t[22] = l, t[23] = m, t[24] = _, t[25] = g, t[26] = V) : V = t[26];
		var H;
		t[27] === Symbol.for("react.memo_cache_sentinel") ? (H = { className: "x1280gxy x109j2v6 x1x5flf6 x1hhzuzn xwn43p0" }, t[27] = H) : H = t[27];
		var G;
		t[28] !== w ? (G = p.jsx("div", babelHelpers.extends({}, H, { children: w })), t[28] = w, t[29] = G) : G = t[29];
		var z;
		t[30] !== n || t[31] !== a || t[32] !== f || t[33] !== h || t[34] !== b ? (z = f ? p.jsx(y, {
			chat: a,
			value: n,
			onSubmit: h,
			onChange: b
		}) : null, t[30] = n, t[31] = a, t[32] = f, t[33] = h, t[34] = b, t[35] = z) : z = t[35];
		var j;
		t[36] !== W || t[37] !== U || t[38] !== V || t[39] !== G || t[40] !== z ? (j = p.jsxs(r("WAWebDrawerSection.react"), { children: [
			W,
			U,
			V,
			G,
			z
		] }), t[36] = W, t[37] = U, t[38] = V, t[39] = G, t[40] = z, t[41] = j) : j = t[41];
		var K;
		t[42] !== c || t[43] !== d || t[44] !== _ || t[45] !== f || t[46] !== g ? (K = o("WAWebABProps").getABPropConfigValue("order_details_from_cart_enabled") && !f ? p.jsx(C, {
			sellerJid: g,
			onCreateOrderClick: function() {
				return d(r("nullthrows")(_));
			},
			onDeclineOrderClick: c
		}) : null, t[42] = c, t[43] = d, t[44] = _, t[45] = f, t[46] = g, t[47] = K) : K = t[47];
		var Q;
		return t[48] !== j || t[49] !== K ? (Q = p.jsxs(p.Fragment, { children: [j, K] }), t[48] = j, t[49] = K, t[50] = Q) : Q = t[50], Q;
	}
	function v(e, t) {
		return t.currency == null ? e : t.currency;
	}
	function S(e, t) {
		return t.price == null ? e : (e || 0) + t.price * t.quantity;
	}
	function R(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, c), i = a.chat, l = a.onOrderCancel, d = a.onOrderCreate, m = a.onProductDetail, _ = a.orderId, h = a.orderMessage, y = a.ownerHasReviewed, C = a.sellerJid, v = a.token, S = a.userIsCartOwner, R = g(!0), L = R[0], E = R[1], k = g("PENDING"), I = k[0], T = k[1], D = g(null), x = D[0], $ = D[1], P = g(""), N = P[0], M = P[1], w = r("useLazyRef")(function() {
			return new (r("WAWebFlatListController"))();
		}), A = function() {
			o("WAWebModalManager").ModalManager.open(p.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				onOK: o("WAWebModalManager").closeModalManager,
				okText: r("WAWebFbtCommon")("OK"),
				tsNavigationData: {
					surface: "unknown",
					viewName: "cart-order-error"
				},
				children: s._(
					/*BTDS*/
					""
				)
			}));
		};
		f(function() {
			o("WAWebOrderCollection").OrderCollection.findOrder(_, C, v).then(function(e) {
				E(!1), T("SUCCESS"), $(e), o("WAWebUtilsLogQplEvents").qplAnnotateOrderView((e == null ? void 0 : e.products.length) || 0), o("WAWebUtilsLogQplEvents").qplEndOrderView(2);
			}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").E404, function() {
				A(), E(!1), T("ERROR"), o("WAWebUtilsLogQplEvents").qplDropOrderView();
			})).catch(function(t) {
				E(!1), T("ERROR"), o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Catalog Order Display failed"]))).verbose().sendLogs("OrderDetails: failed to display"), o("WAWebUtilsLogQplEvents").qplEndOrderView(3);
			});
		}, []);
		var F = function() {
			if (o("WAWebDrawerManager").closeDrawerRight(), h != null) {
				var e = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), t = o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(e), n = o("WAWebBusinessProfileUtils").hasCatalog(t);
				new (o("WAWebOrderDetailsActionsSmbWamEvent")).OrderDetailsActionsSmbWamEvent({
					actionCategory: String(r("WAWebOrderDetailsActionCategory").RECEIVED_CART),
					hasCatalog: n,
					hasNote: !!N,
					orderDetailEntryPoint: String(r("WAWebBizEntryPoint").FROM_CART),
					orderDetailsCreationAction: o("WAWebWamEnumOrderDetailsCreationAction").ORDER_DETAILS_CREATION_ACTION.SEND_DECLINE_CART
				}).commit();
				var a = s._(
					/*BTDS*/
					""
				).toString() + "\n" + N;
				if (o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["sendCancelMessage inside WAWebCartOrderDetailDrawer"]))), o("WAWebSendTextMsgChatAction").sendTextMsgToChat(i, a, { quotedMsg: new (o("WAWebMsgModel")).Msg(h) }), !o("WAWebOrderGatingUtils").isSellerOrderRevampEnabled()) return;
				if (h != null) {
					var l = { status: o("WAWebProtobufsE2E.pb").Message$OrderMessage$OrderStatus.DECLINED };
					o("WAWebDBUpdateMessageTable").updateMessageTable(h.id, l);
					var c = o("WAWebMsgCollection").MsgCollection.get(h.id);
					c && c.set(l);
				}
			}
			o("WAWebCmd").Cmd.openChatFromUnread({
				chat: i,
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.BizOrder
			});
		}, O = o("WAWebOrderGatingUtils").isBuyerOrderRequestVariantEnabled() ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), B = o("WAWebOrderGatingUtils").isSellerOrderRevampEnabled() ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
		return p.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			theme: "striped",
			onDrop: o("WAWebDrawerManager").closeDrawerRight,
			tsNavigationData: {
				surface: "unknown",
				viewName: "cart-order-detail"
			},
			children: [p.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: S ? O : B,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: o("WAWebDrawerManager").closeDrawerRight
			}), p.jsx(r("WAWebDrawerBody.react"), { children: p.jsx(b, {
				cancellationMessage: N,
				chat: i,
				fetchState: I,
				flatListController: w.current,
				isLoading: L,
				onOrderCancel: l,
				onOrderCreate: d,
				onProductDetail: m,
				ownerHasReviewed: y,
				order: x,
				sellerJid: C,
				sendCancelMessage: F,
				setCancellationMessage: M
			}) })]
		});
	}
	R.displayName = R.name + " [from " + i.id + "]", l.default = R;
}), 226);
