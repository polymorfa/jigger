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
		var n, a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.chat, u = i.orderInfo, c = i.sellerWid, m = u.referenceId, f = u.totalAmount, g = r("useWAWebOrderDetailItems")(u, c), y = g.isLoading, b = g.orderItems, v = _(function() {
			return o("WAWebOrderStatus").findOrderStatus(l, m);
		}, [l, m]), R = (n = i.onlyShowPaymentDetails) != null ? n : !1;
		p(function() {
			new (o("WAWebOrderDetailsActionsSmbWamEvent")).OrderDetailsActionsSmbWamEvent({
				actionCategory: String(r("WAWebOrderDetailsActionCategory").ORDER_DETAILS_MANAGEMENT),
				hasCatalog: o("WAWebBusinessProfileUtils").hasCatalog(o("WAWebBusinessProfileCollection").BusinessProfileCollection.getMeBusinessProfile()),
				orderDetailEntryPoint: String(i.entryPoint),
				orderDetailsCreationAction: o("WAWebWamEnumOrderDetailsCreationAction").ORDER_DETAILS_CREATION_ACTION.VIEW_ORDER_DETAILS
			}).commit();
		}, [i.entryPoint]);
		var L = r("WAWebNoop"), E = b.length > 0, k = function() {
			o("WAWebBizSendOrderAction").sendOrderPaymentMethodUpdate({
				chat: l,
				offset: o("WAWebOrderDetailMath").DEFAULT_OFFSET,
				orderInfo: u,
				orderNote: null,
				orderStatus: v,
				paymentMethod: o("WAWebOrderPaymentStatus").OrderPaymentMethod.Confirm,
				paymentStatus: null,
				sellerJid: c.toJid()
			}).finally(function() {
				o("WAWebDrawerManager").DrawerManager.closeDrawerRight(), L();
			});
		};
		return d.jsxs(r("WAWebDrawer.react"), {
			onDrop: i.onBack,
			ref: a,
			tsNavigationData: h,
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: (function(e) {
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
				})({
					containsOrder: E,
					onlyShowPaymentDetails: R,
					optimizationEnabled: o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled()
				}),
				onBack: i.onBack,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), d.jsx(r("WAWebDrawerBody.react"), {
				theme: y ? "center-content" : void 0,
				children: y ? d.jsx(S, {}) : d.jsx(C, {
					containsOrder: E,
					onlyShowPaymentDetails: R,
					chat: l,
					interactiveMessage: i.interactiveMessage,
					onOrderStatusUpdateClick: i.onOrderStatusUpdateClick,
					orderInfo: u,
					orderItems: b,
					orderStatus: v,
					sellerWid: c,
					sendConfirmOrderInfo: k,
					totalAmount: f
				})
			})]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = e.chat, n = e.containsOrder, r = e.interactiveMessage, a = e.onlyShowPaymentDetails, i = e.onOrderStatusUpdateClick, l = e.orderInfo, s = e.orderItems, u = e.orderStatus, c = e.sellerWid, m = e.sendConfirmOrderInfo, p = e.totalAmount, _ = a || !n, f = r != null && o("WAWebOrderStatusButton").isInboxCreatedOrder(r);
		return _ ? d.jsx(v, {
			chat: t,
			interactiveMessage: r,
			isInboxOrder: f,
			onlyShowPaymentDetails: a,
			onOrderStatusUpdateClick: i,
			orderInfo: l,
			orderStatus: u,
			sellerWid: c,
			totalAmount: p
		}) : d.jsx(b, {
			chat: t,
			interactiveMessage: r,
			isInboxOrder: f,
			onOrderStatusUpdateClick: i,
			orderInfo: l,
			orderItems: s,
			orderStatus: u,
			sellerWid: c,
			sendConfirmOrderInfo: m,
			totalAmount: p
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t, n, a, i, l = e.chat, c = e.interactiveMessage, m = e.isInboxOrder, p = e.onOrderStatusUpdateClick, _ = e.orderInfo, h = e.orderItems, y = e.orderStatus, C = e.sellerWid, b = e.sendConfirmOrderInfo, v = e.totalAmount, S = _.discount, R = _.shipping, E = _.subtotal, k = _.tax;
		return E == null ? null : d.jsxs(d.Fragment, { children: [
			d.jsx(r("WAWebDrawerSection.react"), {
				xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingTop20, f.paddingBottom15],
				children: d.jsxs(r("WAWebOrderDetailSectionContainer.react"), { children: [
					d.jsx(r("WAWebOrderDetailSellerProfile.react"), {
						testid: "order-status-container",
						orderId: _.referenceId,
						sellerWid: C,
						orderStatus: d.jsx(r("WAWebOrderDetailStatusPill.react"), { orderStatus: y })
					}),
					d.jsx(r("WAWebOrderDetailItems"), {
						details: !0,
						currency: _.currency,
						items: h
					}),
					d.jsx(o("WAWebOrderSummaryDrawer").OrderValues, {
						tax: k != null ? k * o("WAWebOrderDetailMath").DEFAULT_OFFSET : null,
						discount: S != null ? S * o("WAWebOrderDetailMath").DEFAULT_OFFSET : null,
						shipping: R != null ? R * o("WAWebOrderDetailMath").DEFAULT_OFFSET : null,
						subtotal: E * o("WAWebOrderDetailMath").DEFAULT_OFFSET,
						currency: _.currency,
						canDisplayAdditionalCharges: !0
					}),
					d.jsxs(o("WAWebFlex.react").FlexRow, {
						justify: "all",
						xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingHor16,
						testid: "order-details-total-row",
						children: [d.jsx(o("WAWebText.react").WAWebTextTitle, {
							as: "span",
							children: s._(
								/*BTDS*/
								""
							)
						}), d.jsx(o("WAWebText.react").WAWebTextTitle, {
							as: "span",
							children: o("WAWebFormatUprAmount").formatUprAmount(_.currency, v)
						})]
					})
				] })
			}),
			o("WAWebUserPrefsMeUser").isMeAccount(C) && ((t = (n = o("WAWebOrdersExpansionCountries").getOrdersExpansionAllowedCountries()) == null ? void 0 : n.length) != null ? t : 0) > 0 && d.jsx(r("WAWebDrawerSection.react"), { children: d.jsxs(o("WAWebDrawerButton.react").DrawerButtonSimple, {
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
			}) }),
			!m && [o("WAWebOrderStatus").OrderStatus.Canceled, o("WAWebOrderStatus").OrderStatus.Complete].every(function(e) {
				return y !== e;
			}) && o("WAWebUserPrefsMeUser").isMeAccount(C) && d.jsx(r("WAWebDrawerSection.react"), { children: d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(g.buttonWrapper, o("WDSMargins.stylex").wdsMargins.marginVer16), { children: d.jsx(o("WAWebButton.react").Button, {
				testid: "order-status-update",
				type: "primary",
				onClick: function() {
					p == null || p();
				},
				children: o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled() ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				)
			}) })) }),
			!o("WAWebUserPrefsMeUser").isMeAccount(C) && y === o("WAWebOrderStatus").OrderStatus.Pending && ((a = (i = o("WAWebOrdersExpansionCountries").getConsumerOrdersExpansionAllowedCountries()) == null ? void 0 : i.length) != null ? a : 0) > 0 && d.jsx(r("WAWebDrawerSection.react"), { children: d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(g.buttonWrapper, o("WDSMargins.stylex").wdsMargins.marginVer16), { children: d.jsx(L, {
				sendConfirmOrderInfo: b,
				chat: l,
				orderInfo: _,
				interactiveMessage: c
			}) })) })
		] });
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.chat, n = e.interactiveMessage, a = e.isInboxOrder, i = e.onlyShowPaymentDetails, l = e.onOrderStatusUpdateClick, c = e.orderInfo, m = e.orderStatus, p = e.sellerWid, _ = e.totalAmount, h = t.contact, y = h.verifiedName || h.name || o("WAWebFrontendContactGetters").getDisplayName(h), C = o("WAWebCurrencyUtils").formatAmount1000ToParts(c.currency, _ * 1e3), b = o("useWAWebOrderPaymentStatus").useOrderPaymentStatus(t, c.referenceId, o("WAWebOrderStatus").isSimplifiedOrder(c)), v = n != null ? o("WAWebMsgGetters").getIsSentByMe(n) : o("WAWebUserPrefsMeUser").isMeAccount(p);
		return d.jsxs(d.Fragment, { children: [d.jsxs(r("WAWebDrawerSection.react"), {
			xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingTop20, f.paddingBottom15],
			children: [
				d.jsx(r("WAWebDrawerSection.react"), {
					testid: "order-total-amount",
					children: d.jsx("div", {
						className: "x6s0dn4 x78zum5 xdt5ytf x1p5oq8j xwxc41k x2b8uid",
						children: d.jsx("span", babelHelpers.extends({}, {
							0: { className: "x1heor9g x1weigxw x1s688f" },
							1: { className: "x18cpw0e x1weigxw x1s688f xmqliwb x13zicib xudwaec" }
						}[(m === o("WAWebOrderStatus").OrderStatus.Canceled) << 0], { children: C.symbol + " " + C.integer + C.decimal }))
					})
				}),
				d.jsx(R, {
					currentStatus: b,
					onlyShowPaymentDetails: i
				}),
				d.jsx(r("WAWebDrawerSection.react"), { children: d.jsxs("div", {
					className: "x6s0dn4 x78zum5 x1q0g3np x1mfogq2 xz9dl7a",
					children: [d.jsx(o("WAWebDetailImage.react").DetailImage, {
						id: p,
						size: 48
					}), d.jsxs("div", {
						className: "x1cy8zhl x78zum5 xdt5ytf",
						children: [d.jsx("span", {
							className: "xhslqc4 x1f6kntn xo1l8bm xwn43p0",
							children: v ? s._(
								/*BTDS*/
								""
							) : s._(
								/*BTDS*/
								""
							)
						}), d.jsx("span", {
							className: "x1f6kntn xo1l8bm xwn43p0 x123j3cw",
							children: s._(
								/*BTDS*/
								"",
								[s._param("merchant-name", y)]
							)
						})]
					})]
				}) })
			]
		}), !i && !a && !o("WAWebOrderStatus").isPaymentRequest(t, c) && [o("WAWebOrderStatus").OrderStatus.Canceled, o("WAWebOrderStatus").OrderStatus.Complete].every(function(e) {
			return m !== e;
		}) && o("WAWebUserPrefsMeUser").isMeAccount(p) && d.jsx(r("WAWebDrawerSection.react"), { children: d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(g.buttonWrapper, o("WDSMargins.stylex").wdsMargins.marginVer16), { children: d.jsx(o("WAWebButton.react").Button, {
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
		}) })) })] });
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S() {
		return d.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			testid: "order-detail-drawer-loading",
			children: d.jsx(r("WAWebFlexItem.react"), { children: d.jsx(o("WAWebSpinner.react").Spinner, {}) })
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t = e.currentStatus, n = e.onlyShowPaymentDetails, a, i, l, u;
		e: {
			if (t === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Captured) {
				a = d.jsx(o("WAWebWebIcCheckIcon.react").WebIcCheckIcon, { iconXstyle: g.checkIcon }), i = "contentActionEmphasized", l = s._(
					/*BTDS*/
					""
				), u = s._(
					/*BTDS*/
					""
				);
				break e;
			}
			if (t === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Failed) {
				a = d.jsx(r("WDSIconWdsIcCurrencyReal.react"), {
					width: 46,
					height: 46,
					iconXstyle: g.canceledIcon
				}), i = "secondaryNegative", l = s._(
					/*BTDS*/
					""
				), u = s._(
					/*BTDS*/
					""
				);
				break e;
			}
			if (t === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Pending || t === null || t === void 0) {
				a = d.jsx(r("WDSIconWdsIcCurrencyReal.react"), {
					width: 46,
					height: 46,
					iconXstyle: g.pendingIcon
				}), i = "contentDeemphasized", l = n ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				), u = n ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				);
				break e;
			}
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + t);
		}
		return d.jsx(r("WAWebDrawerSection.react"), { children: d.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: g.statusRowPadding,
			children: [a, d.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "start",
				children: [d.jsx(r("WDSText.react"), {
					type: "Body2Emphasized",
					colorName: i,
					xstyle: g.statusTextPadding,
					children: l
				}), d.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDefault",
					xstyle: g.paymentSentTextPadding,
					children: u
				})]
			})]
		}) });
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t = e.chat, n = e.interactiveMessage, r = e.orderInfo, a = e.sendConfirmOrderInfo, i = E({
			chat: t,
			interactiveMessage: n,
			orderInfo: r
		}), l = i == null ? void 0 : i.Icon;
		return i ? d.jsxs(o("WAWebButton.react").Button, {
			testid: "order-payment-method",
			type: "primary",
			onClick: i.onClick,
			children: [l && d.jsx(l, {}), i.label]
		}) : d.jsx(o("WAWebButton.react").Button, {
			testid: "order-payment-confirm",
			type: "primary",
			onClick: a,
			children: o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled() ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			)
		});
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(e) {
		var t = e.chat, n = e.interactiveMessage, r = e.orderInfo;
		if (n == null) return null;
		var a = [];
		return o("WAWebGetBrazilnteractiveActions").hasValidDynamicPix(r) && a.push(o("WAWebGetBrazilnteractiveActions").getCopyPixCodeInteractiveAction(r, n)), o("WAWebBrazilPaymentsGeoGating").isPaymentLinkEnabled(t) && o("WAWebGetBrazilnteractiveActions").hasValidPaymentLink(r) && a.push(o("WAWebGetBrazilnteractiveActions").getOpenPaymentLinkInteractiveAction(r, n)), o("WAWebBrazilPaymentsGeoGating").isBoletoEnabled(t) && o("WAWebGetBrazilnteractiveActions").hasValidBoletoCode(r) && a.push(o("WAWebGetBrazilnteractiveActions").getCopyBoletoCodeInteractiveAction(r, n)), a.length >= 1 ? a[0] : null;
	}
	l.default = y;
}), 226);
