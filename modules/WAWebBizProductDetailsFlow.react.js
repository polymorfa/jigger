__d("WAWebBizProductDetailsFlow.react", [
	"fbt",
	"$InternalEnum",
	"WATimeUtils",
	"WAWebBizEntryPoint",
	"WAWebBizLinkedCatalogErrorPopup.react",
	"WAWebBizShowCartAction",
	"WAWebBusinessProfileCollection",
	"WAWebBusinessProfileUtils",
	"WAWebCartOrderDetailDrawer.react",
	"WAWebChatThreadLogging",
	"WAWebConfirmPopup.react",
	"WAWebContactCollection",
	"WAWebDBUpdateMessageTable",
	"WAWebDrawerContext",
	"WAWebFbtCommon",
	"WAWebLidMigrationUtils",
	"WAWebModalManager",
	"WAWebMsgCollection",
	"WAWebOrderCollection",
	"WAWebOrderCreationFlowLoadable",
	"WAWebOrderDetailDrawerContainer.react",
	"WAWebOrderDetailsActionCategory",
	"WAWebOrderDetailsActionsSmbWamEvent",
	"WAWebOrderGatingUtils",
	"WAWebOrderStatusUpdateDrawer.react",
	"WAWebOrdersExpansionUtils",
	"WAWebProductCatalogCatalogLinkDrawer.react",
	"WAWebProductCatalogContext",
	"WAWebProductCatalogLogEvents",
	"WAWebProductCatalogProductDetailsDrawer.react",
	"WAWebProductCatalogProductDetailsWithDeepLink.react",
	"WAWebProductCatalogProductLinkDrawer.react",
	"WAWebProductCatalogProductListDrawer.react",
	"WAWebProductCatalogProductMessageListDrawer.react",
	"WAWebProductCatalogProductMoreInformationDrawer.react",
	"WAWebProductCollectionCatalogViewDrawer.react",
	"WAWebProductCollectionCollectionContentDrawer.react",
	"WAWebProtobufsE2E.pb",
	"WAWebSmbDataSharingOptInModalDialog",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUim",
	"WAWebUserPrefsMeUser",
	"WAWebWamEnumOrderDetailsCreationAction",
	"WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
	"WAWebWid",
	"WAWebWidFactory",
	"asyncToGeneratorRuntime",
	"err",
	"nullthrows",
	"react",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useContext, p = d.useEffect, _ = d.useState, f = function(t) {
		if (o("WAWebOrderGatingUtils").isSellerOrderRevampEnabled() && t != null) {
			var e = { status: o("WAWebProtobufsE2E.pb").Message$OrderMessage$OrderStatus.ACCEPTED };
			o("WAWebDBUpdateMessageTable").updateMessageTable(t.id, e);
			var n = o("WAWebMsgCollection").MsgCollection.get(t.id);
			n && n.set(e);
		}
	}, g = n("$InternalEnum").Mirrored([
		"Cart",
		"CartOrderDetail",
		"CatalogCollection",
		"CatalogLink",
		"CatalogView",
		"OrderCreation",
		"OrderDetail",
		"OrderStatusUpdate",
		"ProductDetails",
		"ProductDetailsFlow",
		"ProductDetailsWithDeepLink",
		"ProductLink",
		"ProductList",
		"ProductMessageList",
		"ProductMoreInformation"
	]);
	function h(t) {
		var a, i, l = t.ref, u = babelHelpers.objectWithoutPropertiesLoose(t, e), d = u.catalogOwnerJid, y = u.chat, C = u.collection, b = u.collectionId, v = u.entryPoint, S = u.interactiveMessage, R = u.isAllItems, L = u.onEnd, E = u.onlyShowPaymentDetails, k = u.orderId, I = u.orderInfo, T = u.orderMessage, D = u.product, x = u.productInfo, $ = u.productListId, P = u.refreshCarousel, N = u.sellerJid, M = u.token, w = u.userIsCartOwner, A = o("useWAWebFlow").useFlow(void 0, { onEnd: L }), F = A[0], O = A[1], B = _(), W = B[0], q = B[1], U = _(), V = U[0], H = U[1], G = _(), z = G[0], j = G[1], K = _(), Q = K[0], X = K[1], Y = _(), J = Y[0], Z = Y[1], ee = _(), te = ee[0], ne = ee[1], re = _(), oe = re[0], ae = re[1], ie = _(), le = ie[0], se = ie[1], ue = _(), ce = ue[0], de = ue[1], me = _(), pe = me[0], _e = me[1], fe = _(), ge = fe[0], he = fe[1], ye = _(), Ce = ye[0], be = ye[1], ve = _(), Se = ve[0], Re = ve[1], Le = _(0), Ee = Le[0], ke = Le[1], Ie = m(o("WAWebDrawerContext").DrawerContext), Te = function(t) {
			var e = o("WAWebContactCollection").ContactCollection.gadd(t);
			be(e), q(t), O.push(g.CatalogCollection);
		}, De = function(t, n) {
			var e = o("WAWebContactCollection").ContactCollection.gadd(n);
			be(e), q(n), Z(t), O.push(g.ProductMessageList);
		}, xe = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = o("WAWebContactCollection").ContactCollection.gadd(e), n = yield o("WAWebBusinessProfileCollection").BusinessProfileCollection.find(e);
				be(t), q(e), H(n), o("WAWebBusinessProfileUtils").hasCatalog(n) ? O.push(g.CatalogView) : O.push(g.ProductList);
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), $e = function(t, n) {
			var e = o("WAWebUserPrefsMeUser").isMeAccount(t.id);
			o("WAWebBizLinkedCatalogErrorPopup.react").showConnectedCatalogDisabledPopup(n, e, function() {
				O.end();
			});
		}, Pe = function(t, n) {
			j(t), ne(n), O.push(g.ProductDetails);
		}, Ne = function(t) {
			X(t), O.push(g.ProductDetailsWithDeepLink);
		}, Me = function(t, n) {
			n === void 0 && (n = null);
			var e = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
			new (o("WAWebOrderDetailsActionsSmbWamEvent")).OrderDetailsActionsSmbWamEvent({
				actionCategory: String(r("WAWebOrderDetailsActionCategory").RECEIVED_CART),
				hasCatalog: o("WAWebBusinessProfileUtils").hasCatalog(o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(e)),
				orderDetailEntryPoint: String(v != null ? v : r("WAWebBizEntryPoint").FROM_CART),
				orderDetailsCreationAction: o("WAWebWamEnumOrderDetailsCreationAction").ORDER_DETAILS_CREATION_ACTION.CLICK_CREATE_ORDER_DETAILS_FROM_CART
			}).commit();
			var a = function() {
				se(t), de(function() {
					return n;
				}), O.push(g.OrderCreation);
			};
			r("WAWebSmbDataSharingOptInModalDialog").maybeShowOrderDataSharingDialog(y, a, o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.CART);
		}, we = function() {
			o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
				action: {
					actionText: r("WAWebFbtCommon")("OK"),
					dismiss: !0
				},
				msg: s._(
					/*BTDS*/
					""
				),
				id: o("WAWebToast.react").genId()
			}));
		}, Ae = function(t) {
			_e(t), O.push(g.CartOrderDetail);
		}, Fe = function() {
			O.push(g.OrderDetail);
		}, Oe = function() {
			if (k != null && M != null && N != null && w != null) {
				var e = !0;
				Ae(e);
			}
			o("WAWebModalManager").ModalManager.close();
		}, Be = function() {
			o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				tsNavigationData: {
					surface: "unknown",
					viewName: "biz-product-details"
				},
				onCancel: o("WAWebModalManager").closeModalManager,
				cancelText: s._(
					/*BTDS*/
					""
				),
				onOK: Oe,
				okText: s._(
					/*BTDS*/
					""
				),
				title: s._(
					/*BTDS*/
					""
				),
				children: s._(
					/*BTDS*/
					""
				)
			}));
		};
		p(function() {
			o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([{
				activityType: "isCommerceViewed",
				chatId: y.id,
				ts: o("WATimeUtils").unixTime()
			}]);
		}, []), p(function() {
			var e = (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					var t = yield o("WAWebBusinessProfileCollection").BusinessProfileCollection.find(e);
					H(t);
				});
				return function(n) {
					return e.apply(this, arguments);
				};
			})();
			if (d != null) {
				if (V == null) {
					e(o("WAWebWidFactory").createWid(d));
					return;
				}
				if ((V == null ? void 0 : V.isCatalogDisabledDueToMetaLinking) === !0) {
					$e(V, !1);
					return;
				}
				C != null || R === !0 ? Te(o("WAWebWidFactory").createWid(d)) : $ != null ? De($, o("WAWebWidFactory").createWid(d)) : xe(o("WAWebWidFactory").createWid(d));
			} else if (D) {
				if (V == null) {
					e(D.catalogWid);
					return;
				}
				if ((V == null ? void 0 : V.isCatalogDisabledDueToMetaLinking) === !0) {
					$e(V, !0);
					return;
				}
				Pe(D, b);
			} else if (x) {
				if (V == null) {
					e(o("WAWebWidFactory").createWid(x.businessOwnerJid));
					return;
				}
				if (V != null && V.isCatalogDisabledDueToMetaLinking) {
					$e(V, !0);
					return;
				}
				Ne(x);
			} else if (k != null) {
				if (M != null && N != null && w != null) {
					var t = r("WAWebWid").equals.apply(r("WAWebWid"), o("WAWebLidMigrationUtils").toCommonAddressingMode(o("WAWebWidFactory").createUserWidOrThrow(N), o("WAWebUserPrefsMeUser").getMaybeMePnUser()));
					if (t && o("WAWebOrdersExpansionUtils").isOrderExpansionEnabled()) o("WAWebOrderCollection").OrderCollection.findOrder(k, N, M).then(function(e) {
						Me(r("nullthrows")(e), Be);
					}).catch(function() {
						we();
					});
					else {
						var a = !1;
						Ae(a);
					}
				}
			} else if (I != null && N != null) Fe();
			else throw r("err")("ProductDetailsFlow:no-product");
		}, [V]);
		var We = function(t) {
			ae(t), O.push(g.ProductDetailsFlow);
		}, qe = function() {
			var e = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
			new (o("WAWebOrderDetailsActionsSmbWamEvent")).OrderDetailsActionsSmbWamEvent({
				actionCategory: String(r("WAWebOrderDetailsActionCategory").ORDER_DETAILS_MANAGEMENT),
				hasCatalog: o("WAWebBusinessProfileUtils").hasCatalog(o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(e)),
				orderDetailEntryPoint: String(v),
				orderDetailsCreationAction: o("WAWebWamEnumOrderDetailsCreationAction").ORDER_DETAILS_CREATION_ACTION.CLICK_UPDATE_ORDER_STATUS
			}).commit(), I != null && N != null && O.push(g.OrderStatusUpdate);
		}, Ue = function(t, n) {
			Pe(t, n);
		}, Ve = function(t) {
			j(t), O.push(g.ProductMoreInformation);
		}, He = function(t) {
			Ne(t);
		}, Ge = function(t, n) {
			o("WAWebProductCatalogLogEvents").logCarouselViewMoreClick({
				catalogContext: n,
				catalogOwnerWid: t
			}), xe(t);
		}, ze = function(t) {
			j(t), O.push(g.ProductLink);
		}, je = function(t, n) {
			he(t), be(n), O.push(g.CatalogLink);
		}, Ke = function(t) {
			var e = o("WAWebProductCatalogContext").getProductCatalogContext(Ie), n = r("WAWebBizShowCartAction")(t, y, e);
			n && (Re(t), O.push(g.Cart));
		}, Qe = function() {
			O.pop();
		}, Xe = function() {
			O.end(o("WAWebUim").DismissReason.LIFECYCLE);
		};
		if (O.step == null) return null;
		var Ye;
		switch (O.step) {
			case g.Cart: {
				var Je = o("WAWebProductCatalogContext").getProductCatalogContext(Ie), Ze = r("WAWebBizShowCartAction")(r("nullthrows")(Se), y, Je);
				Ye = r("nullthrows")(Ze);
				break;
			}
			case g.CartOrderDetail:
				Ye = c.jsx(r("WAWebCartOrderDetailDrawer.react"), {
					orderId: r("nullthrows")(k),
					token: r("nullthrows")(M),
					sellerJid: r("nullthrows")(N),
					userIsCartOwner: r("nullthrows")(w),
					onProductDetail: He,
					onOrderCreate: Me,
					onOrderCancel: Be,
					ownerHasReviewed: !!pe,
					orderMessage: T,
					chat: y
				});
				break;
			case g.CatalogCollection:
				Ye = c.jsx(r("WAWebProductCollectionCollectionContentDrawer.react"), {
					contact: r("nullthrows")(Ce),
					onProductDetail: Ue,
					catalogId: r("nullthrows")(W),
					onBack: Qe,
					onCatalogLinkClick: je,
					onCartClick: Ke,
					scrollOffset: Ee,
					setScrollOffset: ke,
					collection: C
				});
				break;
			case g.CatalogLink:
				Ye = c.jsx(r("WAWebProductCatalogCatalogLinkDrawer.react"), {
					catalog: r("nullthrows")(ge),
					contact: r("nullthrows")(Ce),
					onBack: Qe
				});
				break;
			case g.CatalogView:
				Ye = c.jsx(r("WAWebProductCollectionCatalogViewDrawer.react"), {
					contact: r("nullthrows")(Ce),
					onProductDetail: Ue,
					catalogId: r("nullthrows")(W),
					onBack: Qe,
					businessProfile: V,
					scrollOffset: Ee,
					setScrollOffset: ke,
					onCatalogLinkClick: je,
					onCartClick: Ke,
					onCollectionSeeAll: We
				});
				break;
			case g.OrderCreation:
				Ye = c.jsx(r("WAWebOrderCreationFlowLoadable"), {
					entryPoint: v != null ? v : r("WAWebBizEntryPoint").FROM_CART,
					onBack: Qe,
					order: le != null ? le : void 0,
					chat: y,
					onDeclineOrder: ce,
					onSend: function() {
						return f(T);
					}
				});
				break;
			case g.OrderDetail:
				Ye = c.jsx(r("WAWebOrderDetailDrawerContainer.react"), {
					entryPoint: v,
					onlyShowPaymentDetails: E,
					onBack: Qe,
					orderInfo: r("nullthrows")(I),
					sellerWid: o("WAWebWidFactory").createWid(r("nullthrows")(N)),
					chat: y,
					onOrderStatusUpdateClick: qe,
					interactiveMessage: S
				});
				break;
			case g.OrderStatusUpdate:
				Ye = c.jsx(r("WAWebOrderStatusUpdateDrawer.react"), {
					entryPoint: v,
					chat: y,
					onBack: Qe,
					orderInfo: r("nullthrows")(I),
					sellerJid: r("nullthrows")(N)
				});
				break;
			case g.ProductDetails:
				Ye = c.jsx(r("WAWebProductCatalogProductDetailsDrawer.react"), {
					chat: y,
					product: r("nullthrows")(z),
					onEnd: Xe,
					onBack: Qe,
					onProductDetail: Ue,
					onProductCatalog: Ge,
					onProductLinkClick: ze,
					onProductMoreInformation: Ve,
					refreshCarousel: P,
					onCartClick: Ke,
					collectionId: te != null ? te : void 0
				});
				break;
			case g.ProductDetailsFlow:
				Ye = c.jsx(h, {
					chat: y,
					catalogOwnerJid: (a = (i = d != null ? d : D == null ? void 0 : D.catalogWid.toString()) != null ? i : x == null ? void 0 : x.businessOwnerJid) != null ? a : N,
					collection: oe != null ? oe : void 0,
					isAllItems: !oe,
					interactiveMessage: u.interactiveMessage
				});
				break;
			case g.ProductDetailsWithDeepLink:
				Ye = c.jsx(r("WAWebProductCatalogProductDetailsWithDeepLink.react"), {
					chat: y,
					productInfo: r("nullthrows")(Q),
					onEnd: Xe,
					onBack: Qe,
					onProductDetail: Ue,
					onProductCatalog: Ge,
					onProductLinkClick: ze,
					onProductMoreInformation: Ve,
					onCartClick: Ke
				});
				break;
			case g.ProductLink:
				Ye = c.jsx(r("WAWebProductCatalogProductLinkDrawer.react"), {
					product: r("nullthrows")(z),
					onBack: Qe
				});
				break;
			case g.ProductList:
				Ye = c.jsx(r("WAWebProductCatalogProductListDrawer.react"), {
					contact: r("nullthrows")(Ce),
					onProductDetail: Ue,
					catalogId: r("nullthrows")(W),
					onBack: Qe,
					businessProfile: V,
					setScrollOffset: ke,
					onCatalogLinkClick: je,
					onCartClick: Ke
				});
				break;
			case g.ProductMessageList:
				Ye = c.jsx(r("WAWebProductCatalogProductMessageListDrawer.react"), {
					contact: r("nullthrows")(Ce),
					productListId: r("nullthrows")(J),
					onProductDetail: Ue,
					onCartClick: Ke,
					onBack: Qe,
					setScrollOffset: ke,
					catalogWid: r("nullthrows")(W)
				});
				break;
			case g.ProductMoreInformation:
				Ye = c.jsx(r("WAWebProductCatalogProductMoreInformationDrawer.react"), {
					product: r("nullthrows")(z),
					onBack: Qe
				});
				break;
		}
		return c.jsx(F, {
			ref: l,
			flow: O,
			displayName: "ProductDetailsFlow",
			children: Ye
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
