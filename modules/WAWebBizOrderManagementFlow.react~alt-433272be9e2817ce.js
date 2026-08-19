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
		var t = e.isInitialStep, n = e.ref, a = o("useWAWebFlow").useFlow(f.Orders, { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }), i = a[0], l = a[1];
		if (l.step == null) return null;
		var s;
		switch (l.step) {
			case f.Orders:
				s = c.jsx(k, {
					onSeeAll: function() {
						l.push(f.Requests);
					},
					onBack: function() {
						return l.end();
					},
					isInitialStep: t != null ? t : !1
				});
				break;
			case f.Requests:
				s = c.jsx(r("WAWebBizOrderRequestManagementDrawer.react"), { onBack: function() {
					return l.pop();
				} });
				break;
		}
		return c.jsx(i, {
			ref: n,
			flow: l,
			children: s
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
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
		var n = t.orderStatusInfo, a = n === void 0 ? o("WAWebOrderStatus").getDefaultOrderStatus() : n, i = a === o("WAWebOrderStatus").OrderStatus.Confirmed ? s._(
			/*BTDS*/
			""
		) : o("WAWebBizOrderStatusLabels").getWAWebBizOrderStatusLabel(a);
		return c.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(h.orderStatusLabel, C(a)), { children: i }));
	}
	b.displayName = b.name + " [from " + i.id + "]";
	var v = [];
	function S(e) {
		var t = e.items, n = t === void 0 ? v : t;
		if (n.length === 0) return null;
		var r = n[0], o = babelHelpers.arrayLikeToArray(n).slice(1), a = String(s._(
			/*BTDS*/
			"",
			[s._plural(o.length, "number_of_items")]
		)), i = o.length > 0 ? String(s._(
			/*BTDS*/
			""
		)) + " " + (o.length === 1 ? o[0].name : a) : "", l = r.name + " " + i;
		return c.jsx("span", {
			title: l,
			className: "x6ikm8r x10wlt62 xlyipyv xuxw1ft x1iyjqo2",
			children: l
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
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
		var n = t.onSeeAll, a = t.scrollElementRef, i = o("useWAWebGetOrderRequests").useGetOrderRequests(a, g), l = i.isLoading, u = i.ordersInfoMap.contactAndOrderRequestInfoMap, d = i.ordersLazylist, m = function() {
			new (o("WAWebOrderDetailsActionsSmbWamEvent")).OrderDetailsActionsSmbWamEvent({
				actionCategory: String(r("WAWebOrderDetailsActionCategory").ORDER_DETAILS_MANAGEMENT),
				hasCatalog: o("WAWebBusinessProfileUtils").hasCatalog(o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(o("WAWebUserPrefsMeUser").getMeUserOrThrow())),
				orderDetailEntryPoint: String(r("WAWebBizEntryPoint").ORDER_REQUEST_LIST),
				orderDetailsCreationAction: o("WAWebWamEnumOrderDetailsCreationAction").ORDER_DETAILS_CREATION_ACTION.CLICK_SEE_ALL_ORDER_REQUESTS
			}).commit();
		};
		return c.jsxs(c.Fragment, { children: [
			(d.length > 0 || l) && c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(h.infoRow, o("WDSPaddings.stylex").wdsPaddings.paddingHor16, _.paddingBlock10), { children: s._(
				/*BTDS*/
				""
			) })),
			l && c.jsx(o("WAWebFlex.react").FlexRow, {
				justify: "center",
				xstyle: o("WDSPaddings.stylex").wdsPaddings.padding16,
				children: c.jsx(o("WAWebSpinner.react").Spinner, {
					color: "default",
					size: 24,
					stroke: 6
				})
			}),
			d.slice(0, 3).map(function(e, t) {
				return c.jsx("div", { children: c.jsx(r("WAWebOrderRequestDetail.react"), { contactAndOrderInfo: u[e] }) }, e);
			}),
			d.length > 3 && c.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "end",
				children: c.jsx("button", babelHelpers.extends({}, (e || (e = r("stylex"))).props(h.seeAllButton, o("WDSPaddings.stylex").wdsPaddings.paddingHor16, _.paddingBlock10), {
					onClick: function() {
						n(), m();
					},
					children: s._(
						/*BTDS*/
						""
					)
				}))
			})
		] });
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(e) {
		var t = e.isInitialStep, n = t === void 0 ? !1 : t, a = e.onBack, i = e.onSeeAll, l = e.ref, u = p(null), d = o("useWAWebGetOrders").useGetOrders(u, g, o("useWAWebGetOrders").OrderManagementViewType.CHARGES_HOME), _ = d.isLoading, f = d.ordersInfoMap, h = f.contactAndOrderInfoMap, y = f.orderStatusInfoMap, C = d.ordersLazylist, b = {};
		return n ? b.onCancel = a : b.onBack = a, c.jsxs(r("WAWebDrawer.react"), {
			ref: l,
			tsNavigationData: L,
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, babelHelpers.extends({
				testid: "ORDER_DRAWER_MANAGEMENT_HEADER",
				title: o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled() ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}, b)), c.jsxs(r("WAWebDrawerBody.react"), {
				className: "x1280gxy x5yr21d",
				children: [
					o("WAWebPaymentsGatingUtils").paymentsHomeEnabled() && c.jsx(r("WAWebBizChargesInfoBanner.react"), {}),
					!o("WAWebPaymentsGatingUtils").paymentsHomeEnabled() && c.jsx(r("WAWebBizOrderManagementPaymentMethodsSection.react"), {}),
					c.jsx(r("WAWebBizOrderManagementSettingsSection.react"), {}),
					c.jsxs(r("WAWebDrawerSection.react"), {
						ref: u,
						className: "x1280gxy x94v8gs xw2csxc x1odjw0f",
						animation: !1,
						children: [
							o("WAWebOrderGatingUtils").isSellerOrderRevampEnabled() && c.jsx(E, {
								onSeeAll: i,
								scrollElementRef: u
							}),
							C.map(function(e, t) {
								var n, r;
								return c.jsxs(m, { children: [c.jsx(T, { date: o("WAWebOrderFetcher").getOrderDisplayDate({
									contactAndOrderInfoMap: h,
									index: t,
									orderReferenceIds: C
								}) }), c.jsx(I, {
									contactAndOrderInfo: h[e],
									orderStatusInfo: (n = (r = y[e]) == null ? void 0 : r.status) != null ? n : o("WAWebOrderStatus").getDefaultOrderStatus()
								})] }, e);
							}),
							_ && c.jsx(o("WAWebFlex.react").FlexRow, {
								justify: "center",
								xstyle: o("WDSPaddings.stylex").wdsPaddings.padding16,
								children: c.jsx(o("WAWebSpinner.react").Spinner, {
									color: "default",
									size: 24,
									stroke: 6
								})
							}),
							!_ && !C.length && c.jsx(R, {})
						]
					})
				]
			})]
		});
	}
	k.displayName = k.name + " [from " + i.id + "]";
	function I(t) {
		var n, a = t.contactAndOrderInfo, i = t.orderStatusInfo, l = r("useWAWebUIM")(), s = function() {
			var e, t = a.interactiveMsg;
			if (t != null) {
				var n = o("WAWebFrontendMsgGetters").getChat(t.unsafe());
				o("WAWebCmd").Cmd.openChatFromUnread({
					chat: n,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.BizOrder
				});
				var i = o("WAWebOrderStatusButton").getOrderStatusButton(t);
				if ((i == null || (e = i.order) == null ? void 0 : e.order_creator_surface) === "biz_inbox") {
					o("WAWebBizOpenOrderStatusDrawer.react").openOrderStatusDrawer(i, n, t);
					return;
				}
				o("WAWebBizOrderDetailAction").openOrderDetailDrawer(t, l, r("WAWebBizEntryPoint").FROM_BUSINESS_TOOLS);
			}
		};
		return c.jsxs("button", {
			"data-testid": "order-management-order-button",
			onClick: s,
			className: "x6s0dn4 x78zum5 xvt47uu x1yc453h xh8yej3",
			children: [c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSPaddings.stylex").wdsPaddings.paddingVer12, o("WDSPaddings.stylex").wdsPaddings.paddingHor16), { children: c.jsx(o("WAWebDetailImage.react").DetailImage, {
				id: a.contact.id,
				size: 40
			}) })), c.jsxs("div", babelHelpers.extends({}, e.props(h.orderInfo, _.paddingBlock10, o("WDSPaddings.stylex").wdsPaddings.paddingEnd16), { children: [c.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: h.title,
				children: [c.jsx(o("WAWebName.react").Name, {
					titlify: !0,
					ellipsify: !0,
					className: "x1iyjqo2",
					contact: a.contact
				}), c.jsx("span", { children: o("WAWebCurrencyUtils").formatAmount({
					amount: (n = a.orderInfo.totalAmount) != null ? n : 0,
					currency: a.orderInfo.currency
				}) })]
			}), c.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: h.orderSubDetails,
				children: [c.jsx(S, { items: a.orderInfo.items }), c.jsx(b, { orderStatusInfo: i })]
			})] }))]
		});
	}
	I.displayName = I.name + " [from " + i.id + "]";
	function T(t) {
		var n = t.date, a = n === void 0 ? "" : n;
		return a && c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(h.infoRow, o("WDSPaddings.stylex").wdsPaddings.paddingHor16, _.paddingBlock10), { children: a.toUpperCase() }));
	}
	T.displayName = T.name + " [from " + i.id + "]", l.default = y;
}), 226);
