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
		var t = e.currency, n = e.details, a = e.items, i = e.onItemQuantityChange, l = e.onPriceChange, s = e.priceMap, c = p({}), m = c[0], g = c[1], h = d(function(e) {
			return (s == null ? void 0 : s[e.id]) != null || e.price ? o("WAWebOrderCatalogProductPrice").PriceStage.EditableFilled : o("WAWebOrderCatalogProductPrice").PriceStage.EditableBlank;
		}, [s]), y = d(function(e, t) {
			g(function(n) {
				var r;
				return babelHelpers.extends({}, n, (r = {}, r[t.id] = e, r));
			});
		}, []), C = function(n) {
			var e, a;
			return u.jsx("div", {
				className: "x6s0dn4 x78zum5",
				children: u.jsx(o("WAWebOrderCatalogProductPrice").CatalogProductPrice, {
					price: (e = s == null ? void 0 : s[n.id]) != null ? e : n.price,
					priceStage: (a = m[n.id]) != null ? a : h(n),
					currency: t,
					orderItem: n,
					onPriceChange: function(t) {
						return l == null ? void 0 : l(t, n.id);
					},
					onPriceStageChange: function(t) {
						y(t, n);
					},
					onEnter: r("WAWebNoop")
				})
			});
		};
		return u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: f.orderItemsContainer,
			children: a.map(function(e, t) {
				var n, a = [];
				(n = e.properties) == null || n.forEach(function(e) {
					var t = e[0], n = e[1];
					a.push(u.jsxs(o("WAWebFlex.react").FlexRow, { children: [u.jsxs(o("WAWebText_DONOTUSE.react").TextSpan, { children: [t, ":\xA0"] }), u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, { children: n })] }));
				});
				var l = u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [a.length > 0 && u.jsx(o("WAWebFlex.react").FlexColumn, {
					xstyle: _.marginBlock5,
					children: a
				}), u.jsx(r("WAWebCommonQuantityControls.react"), {
					quantity: e.quantity,
					onAddOneClick: function() {
						return i == null ? void 0 : i(t, e.quantity + 1);
					},
					onRemoveOneClick: function() {
						return i == null ? void 0 : i(t, e.quantity - 1);
					}
				})] });
				return u.jsx(r("WAWebCellFrame.react"), {
					testid: "order-item-cell",
					className: {
						0: "",
						1: "xcxhlts"
					}[(t > 0) << 0],
					disabled: !0,
					image: u.jsx(o("WAWebOrderIcons").OrderItemIcon, {
						mediaData: e.thumbnailUrl ? o("WAWebOrderItemGetters").getMediaData(e) : null,
						useCustomIcon: e.isCustomItem
					}),
					primary: u.jsx("span", {
						className: "x14ug900 x6ikm8r x10wlt62 xlyipyv xuxw1ft",
						title: e.name,
						children: e.name
					}),
					secondary: l,
					theme: "add-order-item",
					detail: C(e)
				}, t);
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.currency, n = e.itemCount, r = e.subtotal, a = s._(
			/*BTDS*/
			"",
			[s._plural(n, "count")]
		), i = s._(
			/*BTDS*/
			"",
			[s._param("total-currency-amount", o("WAWebCurrencyUtils").formatAmount1000(t, r))]
		);
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: [
				f.itemSummaryContainer,
				o("WDSPaddings.stylex").wdsPaddings.paddingHor16,
				o("WDSPaddings.stylex").wdsPaddings.paddingBottom4
			],
			children: [u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
				color: "primary",
				size: "16",
				weight: "semibold",
				children: a
			}), u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
				color: "secondary",
				size: "14",
				children: i
			})]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	var y = function() {
		return o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true;
	};
	function C(e) {
		var t = e.onExit, n = s._(
			/*BTDS*/
			""
		), r = s._(
			/*BTDS*/
			""
		), a = s._(
			/*BTDS*/
			""
		), i = function() {
			o("WAWebModalManager").ModalManager.close(), t();
		};
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "order-request"
			},
			okText: n,
			onOverlayClick: i,
			onOK: i,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				gap: 8,
				children: [
					u.jsx(o("WAWebWdsIllOrderRequestIcon.react").WdsIllOrderRequestIcon, { height: 120 }),
					u.jsx(o("WAWebText.react").WAWebTextLarge, { children: r }),
					u.jsx(o("WAWebText.react").WAWebTextSmall, { children: a })
				]
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	var b = { surface: "smb-sent-cart-details" };
	function v(e) {
		var t = e.additionalCharges, n = e.chat, a = e.currency, i = e.entryPoint, l = e.flatAmounts, c = e.onAddItem, d = e.onAdditionalCharges, _ = e.onBack, v = e.onDeclineOrder, S = e.onItemQuantityChange, R = e.onPriceChange, L = e.onSubmit, E = e.orderItems, k = e.orderSubtotal, I = e.priceMap, T = p(y), D = T[0], x = T[1], $ = p(!1), P = $[0], N = $[1], M = r("useWAWebNux")(o("WAWebNux").NUX.ORDER_REQUEST_EDUCATION), w = M[0], A = M[1], F = M[2];
		m(function() {
			var e = function() {
				var e = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true;
				x(e);
			};
			return o("WAWebCTWADataSharingModel").CTWADataSharingModel.subscribeForUpdates(e), function() {
				o("WAWebCTWADataSharingModel").CTWADataSharingModel.unsubscribeFromUpdates(e);
			};
		}, []);
		var O = E.every(function(e) {
			var t;
			return Number.isInteger((t = e.price) != null ? t : I[e.id]);
		}), B = E.length !== 0, W = o("WAWebOrderSummaryDrawer").getErrorLabel({
			allItemsHavePrice: O,
			chat: n,
			currency: a,
			totalPrice1000: l.total
		});
		m(function() {
			w && o("WAWebModalManager").ModalManager.open(u.jsx(C, { onExit: F }));
		}, [w, F]);
		var q = JSON.stringify({ order_eligible_to_send: B && W == null });
		return m(function() {
			if (!P) {
				N(!0);
				var e = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
				new (o("WAWebOrderDetailsActionsSmbWamEvent")).OrderDetailsActionsSmbWamEvent({
					actionCategory: String(r("WAWebOrderDetailsActionCategory").ORDER_DETAILS_MANAGEMENT),
					extraAttributes: q,
					hasCatalog: o("WAWebBusinessProfileUtils").hasCatalog(o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(e)),
					orderDetailEntryPoint: String(i),
					orderDetailsCreationAction: o("WAWebWamEnumOrderDetailsCreationAction").ORDER_DETAILS_CREATION_ACTION.VIEW_CREATE_ORDER
				}).commit();
			}
		}, [
			P,
			i,
			q
		]), u.jsxs(r("WAWebDrawer.react"), {
			tsNavigationData: b,
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				onBack: _,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				menu: v != null ? u.jsx(r("WAWebOrderRequestDrawerOverflowMenu.react"), { onDecline: v }) : null
			}), u.jsxs(r("WAWebDrawerBody.react"), { children: [u.jsxs(r("WAWebDrawerSection.react"), {
				xstyle: [
					f.orderItemsContainer,
					o("WDSPaddings.stylex").wdsPaddings.paddingTop20,
					o("WDSMargins.stylex").wdsMargins.marginBottom0
				],
				theme: "refresh-padding-title",
				children: [
					!B && u.jsx(r("WAWebOrderAddItem"), {
						title: s._(
							/*BTDS*/
							""
						),
						onClick: function() {
							return c == null ? void 0 : c();
						}
					}),
					B && u.jsxs(r("WAWebOrderDetailSectionContainer.react"), { children: [
						u.jsx(h, {
							currency: a,
							itemCount: E.length,
							subtotal: k
						}),
						u.jsx(g, {
							currency: a,
							priceMap: I,
							items: E,
							onPriceChange: R,
							onItemQuantityChange: S
						}),
						u.jsx(o("WAWebOrderSummaryDrawer").OrderValues, {
							tax: l.tax,
							discount: l.discount,
							shipping: l.shipping,
							currency: a,
							subtotal: k,
							additionalCharges: t,
							canDisplayAdditionalCharges: B,
							canChangeAdditionalCharges: B,
							onAdditionalCharges: d
						})
					] }),
					o("WAWebOrderSummaryDrawer").getDataSharing({
						chat: n,
						itemsCount: E.length,
						onOptOutValueToggle: function() {
							return x(!D);
						},
						optOutValue: D
					})
				]
			}), u.jsxs(r("WAWebDrawerSection.react"), {
				xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingBottom20,
				children: [W != null && u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
					color: "danger",
					size: "16",
					xstyle: f.errorLabel,
					children: W
				}), u.jsx(o("WAWebOrderTotalPrice").OrderApplyChangesButton, {
					title: s._(
						/*BTDS*/
						""
					),
					onClick: function() {
						return o("WAWebOrderSummaryDrawer").maybeShowDialogOnSubmit({
							amount: l.total / 1e3,
							chat: n,
							currency: a,
							onSubmit: L,
							smbOptOut: D
						});
					},
					disabled: !B || W != null,
					testid: "send-order-button"
				})]
			})] })]
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.OrderRequestEducationModal = C, l.OrderRequestDrawer = v;
}), 226);
