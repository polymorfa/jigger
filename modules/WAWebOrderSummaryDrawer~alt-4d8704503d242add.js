__d("WAWebOrderSummaryDrawer", [
	"fbt",
	"WASmaxInBizSettingsEnums",
	"WAWebABProps",
	"WAWebCTWADataSharingModel",
	"WAWebChatEphemerality",
	"WAWebClickableLink.react",
	"WAWebCommonCTWADataSharing",
	"WAWebCurrencyUtils",
	"WAWebDataSharingOptOutOrUpsell.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebFlex.react",
	"WAWebFormatUprAmount",
	"WAWebModalManager",
	"WAWebOrderDetailItems",
	"WAWebOrderDetailMath",
	"WAWebOrderDetailSectionContainer.react",
	"WAWebOrderDetailSellerProfile.react",
	"WAWebOrderDetailSharedStyles",
	"WAWebOrderEphemeralExemptionPopup.react",
	"WAWebOrderExpansionNotSupportedPopup.react",
	"WAWebOrderGatingUtils",
	"WAWebOrderStatus",
	"WAWebOrderTotalPrice",
	"WAWebOrdersExpansionUtils",
	"WAWebSmb3pdConversionSignalAction",
	"WAWebSmbMarkAsXOrderAction",
	"WAWebText_DONOTUSE.react",
	"WAWebUserPrefsKeys",
	"WAWebUserPrefsMeUser",
	"WAWebUserPrefsStore",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useState, _ = {
		orderFieldsContainer: {
			columnGap: "x1mn2tih",
			rowGap: "x121sasi",
			$$css: !0
		},
		orderItemsContainer: {
			flexShrink: "xs83m0k",
			overflowY: "x1odjw0f",
			$$css: !0
		}
	};
	function f(e) {
		var t = e.allItemsHavePrice, n = e.chat, r = e.currency, a = e.totalPrice1000;
		if (!t) return s._(
			/*BTDS*/
			""
		).toString();
		var i = o("WAWebABProps").getABPropConfigValue("order_details_total_order_minimum_value") * 1e3, l = o("WAWebOrderGatingUtils").orderDetailsTotalMaxValue(n) * 1e3;
		return a < i ? s._(
			/*BTDS*/
			"",
			[s._param("order_min_allowed_amount", o("WAWebCurrencyUtils").formatAmount1000(r, i))]
		).toString() : a > l ? s._(
			/*BTDS*/
			"",
			[s._param("order_max_allowed_amount", o("WAWebCurrencyUtils").formatAmount1000(r, l))]
		).toString() : null;
	}
	function g(t) {
		var n = t.additionalCharges, a = t.canChangeAdditionalCharges, i = t.canDisplayAdditionalCharges, l = t.currency, u = t.discount, d = t.onAdditionalCharges, m = t.shipping, p = t.subtotal, f = t.tax, g = n != null && n.discountText && n.discountType === o("WAWebOrderDetailMath").PERCENTAGE_SYMBOL ? s._(
			/*BTDS*/
			"",
			[s._param("discount_percent", n.discountText)]
		) : null, h = n != null && n.taxText && n.taxType === o("WAWebOrderDetailMath").PERCENTAGE_SYMBOL ? s._(
			/*BTDS*/
			"",
			[s._param("tax_percent", n.taxText)]
		) : null;
		return c.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: [
				_.orderFieldsContainer,
				o("WDSPaddings.stylex").wdsPaddings.paddingHor16,
				o("WDSPaddings.stylex").wdsPaddings.paddingBottom20
			],
			children: [c.jsxs(o("WAWebFlex.react").FlexRow, {
				justify: "all",
				testid: "order-details-subtotal-row",
				children: [c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
					color: "secondary",
					size: "16",
					children: s._(
						/*BTDS*/
						""
					)
				}), c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
					color: "secondary",
					size: "16",
					children: o("WAWebFormatUprAmount").formatUprAmount1000(l, p)
				})]
			}), !!i && c.jsxs(c.Fragment, { children: [
				u != null && c.jsxs(o("WAWebFlex.react").FlexRow, {
					justify: "all",
					testid: "order-details-discount-row",
					children: [c.jsxs(o("WAWebText_DONOTUSE.react").TextSpan, {
						color: "secondary",
						size: "16",
						children: [
							s._(
								/*BTDS*/
								""
							),
							" ",
							g
						]
					}), c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
						color: "secondary",
						size: "16",
						children: o("WAWebFormatUprAmount").formatUprAmount1000(l, -u)
					})]
				}),
				m != null && c.jsxs(o("WAWebFlex.react").FlexRow, {
					justify: "all",
					testid: "order-details-shipping-row",
					children: [c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
						color: "secondary",
						size: "16",
						children: s._(
							/*BTDS*/
							""
						)
					}), c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
						color: "secondary",
						size: "16",
						children: o("WAWebFormatUprAmount").formatUprAmount1000(l, m)
					})]
				}),
				f != null && c.jsxs(o("WAWebFlex.react").FlexRow, {
					justify: "all",
					testid: "order-details-tax-row",
					children: [c.jsxs(o("WAWebText_DONOTUSE.react").TextSpan, {
						color: "secondary",
						size: "16",
						children: [
							s._(
								/*BTDS*/
								""
							),
							" ",
							h
						]
					}), c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
						color: "secondary",
						size: "16",
						children: o("WAWebFormatUprAmount").formatUprAmount1000(l, f)
					})]
				}),
				!!a && c.jsx(o("WAWebFlex.react").FlexRow, {
					justify: "all",
					align: "center",
					children: c.jsx(r("WAWebClickableLink.react"), {
						onClick: function() {
							return d == null ? void 0 : d();
						},
						testid: "order-details-additional-charges-button",
						className: (e || (e = r("stylex")))(r("WAWebOrderDetailSharedStyles").clickableText, o("WDSMargins.stylex").wdsMargins.marginBottom0),
						children: c.jsx("span", { children: s._(
							/*BTDS*/
							""
						) })
					})
				})
			] })]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.chat, n = e.itemsCount, r = e.onOptOutValueToggle, a = e.optOutValue;
		if (o("WAWebCommonCTWADataSharing").shouldDisplayDataSharingOrderOptOutOrUpsell(t, "order-create", n)) return c.jsx(o("WAWebDataSharingOptOutOrUpsell.react").DataSharingOptOutOrUpsell, {
			chats: [t],
			checkboxValue: a,
			onCheckboxToggle: r,
			theme: "order-create"
		});
	}
	var y = function() {
		return o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true;
	};
	function C(e) {
		var t = e.amount, n = e.chat, a = e.currency, i = e.onSubmit, l = e.smbOptOut, s = !o("WAWebOrdersExpansionUtils").isOrderExpansionEnabled() && o("WAWebOrdersExpansionUtils").isSellerCountrySameAsBuyer(n) || o("WAWebOrdersExpansionUtils").isContactCountrySupported(n);
		if (!s) {
			o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebOrderExpansionNotSupportedPopup.react"), { chat: n }));
			return;
		}
		var u = function() {
			o("WAWebSmbMarkAsXOrderAction").markOrderAsCreatedAction(n, l), o("WAWebSmb3pdConversionSignalAction").log3pdConversionSignalForOrders({
				chat: n,
				orderStatus: o("WAWebOrderStatus").OrderStatus.Processing,
				paidData: {
					amount: String(t),
					currency: a,
					paid: !1
				},
				type: "order_created"
			}, l), i();
		};
		r("WAWebUserPrefsStore").get(o("WAWebUserPrefsKeys").KEYS.DISAPPEARING_MSG_DISCLAIMER_DIMISSED) !== !0 && o("WAWebOrderGatingUtils").inOrderMessagesEphemeralExceptionEnabled() && o("WAWebChatEphemerality").isEphemeralSettingOn(n) ? o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebOrderEphemeralExemptionPopup.react"), {
			chat: n,
			onSubmit: u
		})) : u();
	}
	function b(e) {
		var t = e.additionalCharges, n = e.chat, a = e.currency, i = e.entryPoint, l = i === void 0 ? null : i, u = e.flatAmounts, d = e.onAddItem, b = e.onAdditionalCharges, v = e.onBack, S = e.onDeclineOrder, R = S === void 0 ? null : S, L = e.onDeleteItem, E = e.onItemQuantityChange, k = e.onPriceChange, I = e.onSubmit, T = e.orderItems, D = e.orderSubtotal, x = e.priceMap, $ = p(y), P = $[0], N = $[1];
		m(function() {
			var e = function() {
				var e = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true;
				N(e);
			};
			return o("WAWebCTWADataSharingModel").CTWADataSharingModel.subscribeForUpdates(e), function() {
				o("WAWebCTWADataSharingModel").CTWADataSharingModel.unsubscribeFromUpdates(e);
			};
		}, []);
		var M = T.every(function(e) {
			var t;
			return Number.isInteger((t = e.price) != null ? t : x[e.id]);
		}), w = T.length !== 0;
		return c.jsxs(r("WAWebDrawer.react"), {
			tsNavigationData: {
				surface: "unknown",
				viewName: "order-summary"
			},
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled() ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				),
				onBack: v,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), c.jsxs(r("WAWebDrawerBody.react"), { children: [c.jsxs(r("WAWebDrawerSection.react"), {
				xstyle: [
					_.orderItemsContainer,
					o("WDSPaddings.stylex").wdsPaddings.paddingTop20,
					o("WDSMargins.stylex").wdsMargins.marginBottom0
				],
				theme: "refresh-padding-title",
				children: [c.jsxs(r("WAWebOrderDetailSectionContainer.react"), { children: [
					c.jsx(r("WAWebOrderDetailSellerProfile.react"), { sellerWid: o("WAWebUserPrefsMeUser").getMeUserOrThrow() }),
					c.jsx(r("WAWebOrderDetailItems"), {
						currency: a,
						priceMap: x,
						items: T,
						onDeleteItem: L,
						onPriceChange: k,
						onAddItem: d,
						onItemQuantityChange: E
					}),
					c.jsx(g, {
						tax: u.tax,
						discount: u.discount,
						shipping: u.shipping,
						currency: a,
						subtotal: D,
						additionalCharges: t,
						canDisplayAdditionalCharges: w,
						canChangeAdditionalCharges: w,
						onAdditionalCharges: b
					})
				] }), h({
					chat: n,
					itemsCount: T.length,
					onOptOutValueToggle: function() {
						return N(!P);
					},
					optOutValue: P
				})]
			}), c.jsx(r("WAWebDrawerSection.react"), { children: c.jsx(o("WAWebOrderTotalPrice").OrderTotalPrice, {
				xstyle: o("WDSPaddings.stylex").wdsPaddings.padding16,
				visible: w,
				disabled: !M,
				testid: "send-order-button",
				totalPrice: o("WAWebFormatUprAmount").formatUprAmount1000(a, u.total),
				title: s._(
					/*BTDS*/
					""
				),
				onConfirm: function() {
					return C({
						amount: u.total / 1e3,
						chat: n,
						currency: a,
						onSubmit: I,
						smbOptOut: P
					});
				},
				confirmTitle: o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled() ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				),
				error: f({
					allItemsHavePrice: M,
					chat: n,
					currency: a,
					totalPrice1000: u.total
				}),
				entryPoint: l,
				onDeclineOrder: R
			}) })] })]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]", l.getErrorLabel = f, l.OrderValues = g, l.getDataSharing = h, l.maybeShowDialogOnSubmit = C, l.OrderSummaryDrawer = b;
}), 226);
