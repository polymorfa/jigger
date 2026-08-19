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
		var n, a, i = t.ref, l = babelHelpers.objectWithoutPropertiesLoose(t, e), u = l.catalogOwnerJid, d = l.chat, y = l.collection, C = l.collectionId, b = l.entryPoint, v = l.interactiveMessage, S = l.isAllItems, R = l.onEnd, L = l.onlyShowPaymentDetails, E = l.orderId, k = l.orderInfo, I = l.orderMessage, T = l.product, D = l.productInfo, x = l.productListId, $ = l.refreshCarousel, P = l.sellerJid, N = l.token, M = l.userIsCartOwner, w = o("useWAWebFlow").useFlow(void 0, { onEnd: R }), A = w[0], F = w[1], O = _(), B = O[0], W = O[1], q = _(), U = q[0], V = q[1], H = _(), G = H[0], z = H[1], j = _(), K = j[0], Q = j[1], X = _(), Y = X[0], J = X[1], Z = _(), ee = Z[0], te = Z[1], ne = _(), re = ne[0], oe = ne[1], ae = _(), ie = ae[0], le = ae[1], se = _(), ue = se[0], ce = se[1], de = _(), me = de[0], pe = de[1], _e = _(), fe = _e[0], ge = _e[1], he = _(), ye = he[0], Ce = he[1], be = _(), ve = be[0], Se = be[1], Re = _(0), Le = Re[0], Ee = Re[1], ke = m(o("WAWebDrawerContext").DrawerContext), Ie = function(t) {
			var e = o("WAWebContactCollection").ContactCollection.gadd(t);
			Ce(e), W(t), F.push(g.CatalogCollection);
		}, Te = function(t, n) {
			var e = o("WAWebContactCollection").ContactCollection.gadd(n);
			Ce(e), W(n), J(t), F.push(g.ProductMessageList);
		}, De = async function(t) {
			var e = o("WAWebContactCollection").ContactCollection.gadd(t), n = await o("WAWebBusinessProfileCollection").BusinessProfileCollection.find(t);
			Ce(e), W(t), V(n), o("WAWebBusinessProfileUtils").hasCatalog(n) ? F.push(g.CatalogView) : F.push(g.ProductList);
		}, xe = function(t, n) {
			var e = o("WAWebUserPrefsMeUser").isMeAccount(t.id);
			o("WAWebBizLinkedCatalogErrorPopup.react").showConnectedCatalogDisabledPopup(n, e, function() {
				F.end();
			});
		}, $e = function(t, n) {
			z(t), te(n), F.push(g.ProductDetails);
		}, Pe = function(t) {
			Q(t), F.push(g.ProductDetailsWithDeepLink);
		}, Ne = function(t, n) {
			n === void 0 && (n = null);
			var e = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
			new (o("WAWebOrderDetailsActionsSmbWamEvent")).OrderDetailsActionsSmbWamEvent({
				actionCategory: String(r("WAWebOrderDetailsActionCategory").RECEIVED_CART),
				hasCatalog: o("WAWebBusinessProfileUtils").hasCatalog(o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(e)),
				orderDetailEntryPoint: String(b != null ? b : r("WAWebBizEntryPoint").FROM_CART),
				orderDetailsCreationAction: o("WAWebWamEnumOrderDetailsCreationAction").ORDER_DETAILS_CREATION_ACTION.CLICK_CREATE_ORDER_DETAILS_FROM_CART
			}).commit();
			var a = function() {
				le(t), ce(function() {
					return n;
				}), F.push(g.OrderCreation);
			};
			r("WAWebSmbDataSharingOptInModalDialog").maybeShowOrderDataSharingDialog(d, a, o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.CART);
		}, Me = function() {
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
		}, we = function(t) {
			pe(t), F.push(g.CartOrderDetail);
		}, Ae = function() {
			F.push(g.OrderDetail);
		}, Fe = function() {
			if (E != null && N != null && P != null && M != null) {
				var e = !0;
				we(e);
			}
			o("WAWebModalManager").ModalManager.close();
		}, Oe = function() {
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
				onOK: Fe,
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
				chatId: d.id,
				ts: o("WATimeUtils").unixTime()
			}]);
		}, []), p(function() {
			var e = async function(t) {
				var e = await o("WAWebBusinessProfileCollection").BusinessProfileCollection.find(t);
				V(e);
			};
			if (u != null) {
				if (U == null) {
					e(o("WAWebWidFactory").createWid(u));
					return;
				}
				if ((U == null ? void 0 : U.isCatalogDisabledDueToMetaLinking) === !0) {
					xe(U, !1);
					return;
				}
				y != null || S === !0 ? Ie(o("WAWebWidFactory").createWid(u)) : x != null ? Te(x, o("WAWebWidFactory").createWid(u)) : De(o("WAWebWidFactory").createWid(u));
			} else if (T) {
				if (U == null) {
					e(T.catalogWid);
					return;
				}
				if ((U == null ? void 0 : U.isCatalogDisabledDueToMetaLinking) === !0) {
					xe(U, !0);
					return;
				}
				$e(T, C);
			} else if (D) {
				if (U == null) {
					e(o("WAWebWidFactory").createWid(D.businessOwnerJid));
					return;
				}
				if (U != null && U.isCatalogDisabledDueToMetaLinking) {
					xe(U, !0);
					return;
				}
				Pe(D);
			} else if (E != null) {
				if (N != null && P != null && M != null) {
					var t = r("WAWebWid").equals.apply(r("WAWebWid"), o("WAWebLidMigrationUtils").toCommonAddressingMode(o("WAWebWidFactory").createUserWidOrThrow(P), o("WAWebUserPrefsMeUser").getMaybeMePnUser()));
					if (t && o("WAWebOrdersExpansionUtils").isOrderExpansionEnabled()) o("WAWebOrderCollection").OrderCollection.findOrder(E, P, N).then(function(e) {
						Ne(r("nullthrows")(e), Oe);
					}).catch(function() {
						Me();
					});
					else {
						var n = !1;
						we(n);
					}
				}
			} else if (k != null && P != null) Ae();
			else throw r("err")("ProductDetailsFlow:no-product");
		}, [U]);
		var Be = function(t) {
			oe(t), F.push(g.ProductDetailsFlow);
		}, We = function() {
			var e = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
			new (o("WAWebOrderDetailsActionsSmbWamEvent")).OrderDetailsActionsSmbWamEvent({
				actionCategory: String(r("WAWebOrderDetailsActionCategory").ORDER_DETAILS_MANAGEMENT),
				hasCatalog: o("WAWebBusinessProfileUtils").hasCatalog(o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(e)),
				orderDetailEntryPoint: String(b),
				orderDetailsCreationAction: o("WAWebWamEnumOrderDetailsCreationAction").ORDER_DETAILS_CREATION_ACTION.CLICK_UPDATE_ORDER_STATUS
			}).commit(), k != null && P != null && F.push(g.OrderStatusUpdate);
		}, qe = function(t, n) {
			$e(t, n);
		}, Ue = function(t) {
			z(t), F.push(g.ProductMoreInformation);
		}, Ve = function(t) {
			Pe(t);
		}, He = function(t, n) {
			o("WAWebProductCatalogLogEvents").logCarouselViewMoreClick({
				catalogContext: n,
				catalogOwnerWid: t
			}), De(t);
		}, Ge = function(t) {
			z(t), F.push(g.ProductLink);
		}, ze = function(t, n) {
			ge(t), Ce(n), F.push(g.CatalogLink);
		}, je = function(t) {
			var e = o("WAWebProductCatalogContext").getProductCatalogContext(ke), n = r("WAWebBizShowCartAction")(t, d, e);
			n && (Se(t), F.push(g.Cart));
		}, Ke = function() {
			F.pop();
		}, Qe = function() {
			F.end(o("WAWebUim").DismissReason.LIFECYCLE);
		};
		if (F.step == null) return null;
		var Xe;
		switch (F.step) {
			case g.Cart: {
				var Ye = o("WAWebProductCatalogContext").getProductCatalogContext(ke), Je = r("WAWebBizShowCartAction")(r("nullthrows")(ve), d, Ye);
				Xe = r("nullthrows")(Je);
				break;
			}
			case g.CartOrderDetail:
				Xe = c.jsx(r("WAWebCartOrderDetailDrawer.react"), {
					orderId: r("nullthrows")(E),
					token: r("nullthrows")(N),
					sellerJid: r("nullthrows")(P),
					userIsCartOwner: r("nullthrows")(M),
					onProductDetail: Ve,
					onOrderCreate: Ne,
					onOrderCancel: Oe,
					ownerHasReviewed: !!me,
					orderMessage: I,
					chat: d
				});
				break;
			case g.CatalogCollection:
				Xe = c.jsx(r("WAWebProductCollectionCollectionContentDrawer.react"), {
					contact: r("nullthrows")(ye),
					onProductDetail: qe,
					catalogId: r("nullthrows")(B),
					onBack: Ke,
					onCatalogLinkClick: ze,
					onCartClick: je,
					scrollOffset: Le,
					setScrollOffset: Ee,
					collection: y
				});
				break;
			case g.CatalogLink:
				Xe = c.jsx(r("WAWebProductCatalogCatalogLinkDrawer.react"), {
					catalog: r("nullthrows")(fe),
					contact: r("nullthrows")(ye),
					onBack: Ke
				});
				break;
			case g.CatalogView:
				Xe = c.jsx(r("WAWebProductCollectionCatalogViewDrawer.react"), {
					contact: r("nullthrows")(ye),
					onProductDetail: qe,
					catalogId: r("nullthrows")(B),
					onBack: Ke,
					businessProfile: U,
					scrollOffset: Le,
					setScrollOffset: Ee,
					onCatalogLinkClick: ze,
					onCartClick: je,
					onCollectionSeeAll: Be
				});
				break;
			case g.OrderCreation:
				Xe = c.jsx(r("WAWebOrderCreationFlowLoadable"), {
					entryPoint: b != null ? b : r("WAWebBizEntryPoint").FROM_CART,
					onBack: Ke,
					order: ie != null ? ie : void 0,
					chat: d,
					onDeclineOrder: ue,
					onSend: function() {
						return f(I);
					}
				});
				break;
			case g.OrderDetail:
				Xe = c.jsx(r("WAWebOrderDetailDrawerContainer.react"), {
					entryPoint: b,
					onlyShowPaymentDetails: L,
					onBack: Ke,
					orderInfo: r("nullthrows")(k),
					sellerWid: o("WAWebWidFactory").createWid(r("nullthrows")(P)),
					chat: d,
					onOrderStatusUpdateClick: We,
					interactiveMessage: v
				});
				break;
			case g.OrderStatusUpdate:
				Xe = c.jsx(r("WAWebOrderStatusUpdateDrawer.react"), {
					entryPoint: b,
					chat: d,
					onBack: Ke,
					orderInfo: r("nullthrows")(k),
					sellerJid: r("nullthrows")(P)
				});
				break;
			case g.ProductDetails:
				Xe = c.jsx(r("WAWebProductCatalogProductDetailsDrawer.react"), {
					chat: d,
					product: r("nullthrows")(G),
					onEnd: Qe,
					onBack: Ke,
					onProductDetail: qe,
					onProductCatalog: He,
					onProductLinkClick: Ge,
					onProductMoreInformation: Ue,
					refreshCarousel: $,
					onCartClick: je,
					collectionId: ee != null ? ee : void 0
				});
				break;
			case g.ProductDetailsFlow:
				Xe = c.jsx(h, {
					chat: d,
					catalogOwnerJid: (n = (a = u != null ? u : T == null ? void 0 : T.catalogWid.toString()) != null ? a : D == null ? void 0 : D.businessOwnerJid) != null ? n : P,
					collection: re != null ? re : void 0,
					isAllItems: !re,
					interactiveMessage: l.interactiveMessage
				});
				break;
			case g.ProductDetailsWithDeepLink:
				Xe = c.jsx(r("WAWebProductCatalogProductDetailsWithDeepLink.react"), {
					chat: d,
					productInfo: r("nullthrows")(K),
					onEnd: Qe,
					onBack: Ke,
					onProductDetail: qe,
					onProductCatalog: He,
					onProductLinkClick: Ge,
					onProductMoreInformation: Ue,
					onCartClick: je
				});
				break;
			case g.ProductLink:
				Xe = c.jsx(r("WAWebProductCatalogProductLinkDrawer.react"), {
					product: r("nullthrows")(G),
					onBack: Ke
				});
				break;
			case g.ProductList:
				Xe = c.jsx(r("WAWebProductCatalogProductListDrawer.react"), {
					contact: r("nullthrows")(ye),
					onProductDetail: qe,
					catalogId: r("nullthrows")(B),
					onBack: Ke,
					businessProfile: U,
					setScrollOffset: Ee,
					onCatalogLinkClick: ze,
					onCartClick: je
				});
				break;
			case g.ProductMessageList:
				Xe = c.jsx(r("WAWebProductCatalogProductMessageListDrawer.react"), {
					contact: r("nullthrows")(ye),
					productListId: r("nullthrows")(Y),
					onProductDetail: qe,
					onCartClick: je,
					onBack: Ke,
					setScrollOffset: Ee,
					catalogWid: r("nullthrows")(B)
				});
				break;
			case g.ProductMoreInformation:
				Xe = c.jsx(r("WAWebProductCatalogProductMoreInformationDrawer.react"), {
					product: r("nullthrows")(G),
					onBack: Ke
				});
				break;
		}
		return c.jsx(A, {
			ref: i,
			flow: F,
			displayName: "ProductDetailsFlow",
			children: Xe
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
