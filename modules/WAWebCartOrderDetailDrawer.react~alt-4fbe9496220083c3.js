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
		var t = e.chat, n = e.onChange, a = e.onSubmit, i = e.value;
		return p.jsx("div", babelHelpers.extends({}, (d || (d = r("stylex"))).props(o("WDSPaddings.stylex").wdsPaddings.paddingVer0, h.paddingInline18), { children: p.jsx(r("WAWebOrderDetailTextComposer"), {
			chat: t,
			onChange: n,
			onSubmit: a,
			value: i,
			placeholder: s._(
				/*BTDS*/
				""
			)
		}) }));
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = e.onCreateOrderClick, n = e.onDeclineOrderClick, a = e.sellerJid, i = o("WAWebWidFactory").createUserWidOrThrow(a), l = o("WAWebUserPrefsMeUser").isMeAccount(i);
		return l ? p.jsxs(p.Fragment, { children: [p.jsx(r("WAWebDrawerSection.react"), { children: p.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
			testid: "order-create",
			color: "dark",
			onClick: t,
			children: s._(
				/*BTDS*/
				""
			)
		}) }), p.jsx(r("WAWebDrawerSection.react"), { children: p.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
			testid: "order-decline",
			color: "dark",
			onClick: n,
			children: s._(
				/*BTDS*/
				""
			)
		}) })] }) : null;
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e.cancellationMessage, n = e.chat, a = e.fetchState, i = e.flatListController, l = e.isLoading, u = e.onOrderCancel, c = e.onOrderCreate, d = e.onProductDetail, m = e.order, _ = e.ownerHasReviewed, f = e.sellerJid, g = e.sendCancelMessage, h = e.setCancellationMessage;
		if (l || m == null) return p.jsx(r("WAWebProductCatalogFetchStateTopBar.react"), { fetchState: a });
		var b = "";
		m.products.length > 0 ? b = s._(
			/*BTDS*/
			"",
			[s._plural(o("WAWebOrderGetters").getTotalItemCount(m) || 0, "count")]
		) : b = s._(
			/*BTDS*/
			""
		);
		var v = p.jsx(o("WAWebText.react").WAWebTextTitle, { children: b }), S = null, R = m.products.reduce(function(e, t) {
			return t.price == null ? e : (e || 0) + t.price * t.quantity;
		}, null), L = m.products.reduce(function(e, t) {
			return t.currency == null ? e : t.currency;
		}, null);
		R != null && L != null ? S = s._(
			/*BTDS*/
			"",
			[s._param("subtotal", o("WAWebCurrencyUtils").formatAmount1000(L, R))]
		) : S = s._(
			/*BTDS*/
			""
		);
		var E = p.jsx(o("WAWebText.react").WAWebTextSmall, {
			as: "div",
			children: S
		}), k = null;
		if (m.createdAt != null) {
			var I = o("WAWebClock").Clock.timeStr(m.createdAt);
			k = p.jsx(o("WAWebText.react").WAWebTextSmall, { children: "" + I });
		}
		return p.jsxs(p.Fragment, { children: [p.jsxs(r("WAWebDrawerSection.react"), { children: [
			p.jsx(r("WAWebProductCatalogFetchStateTopBar.react"), { fetchState: a }),
			p.jsxs("div", {
				className: "x1280gxy x109j2v6 x1x5flf6 x1hhzuzn xwn43p0",
				children: [v, E]
			}),
			p.jsx(r("WAWebOrderProductList.react"), {
				flatListController: i,
				onProductDetail: d,
				order: m,
				sellerJid: f
			}),
			p.jsx("div", {
				className: "x1280gxy x109j2v6 x1x5flf6 x1hhzuzn xwn43p0",
				children: k
			}),
			_ ? p.jsx(y, {
				chat: n,
				value: t,
				onSubmit: g,
				onChange: h
			}) : null
		] }), o("WAWebABProps").getABPropConfigValue("order_details_from_cart_enabled") && !_ ? p.jsx(C, {
			sellerJid: f,
			onCreateOrderClick: function() {
				return c(r("nullthrows")(m));
			},
			onDeclineOrderClick: u
		}) : null] });
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(t) {
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
	v.displayName = v.name + " [from " + i.id + "]", l.default = v;
}), 226);
