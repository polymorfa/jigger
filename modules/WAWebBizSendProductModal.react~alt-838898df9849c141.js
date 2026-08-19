__d("WAWebBizSendProductModal.react", [
	"fbt",
	"WAWebBizProductMessageSendQpl",
	"WAWebBlockContactAction",
	"WAWebChatEntryPoint",
	"WAWebChatGetters",
	"WAWebCmd",
	"WAWebDrawerManager",
	"WAWebFrontendConstants",
	"WAWebModalManager",
	"WAWebProductCatalogMessage",
	"WAWebSelectModal.react",
	"WAWebServerPropConstants",
	"WAWebUiIdleEventBus",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useEffect;
	function d(e) {
		c(function() {
			o("WAWebCmd").Cmd.closeContextMenu(), o("WAWebCmd").Cmd.closeTooltip();
		}, []);
		var t = function(n) {
			var t = e.product;
			return new Promise(function(e, r) {
				o("WAWebUiIdleEventBus").UiIdleEventBus.once("ui_idle", function() {
					o("WAWebProductCatalogMessage").sendProductMessage(n, t).then(function() {
						return e();
					}).catch(function(e) {
						return r(e);
					});
				});
			});
		}, n = function(r) {
			var n = r.selectedItems, a = n;
			o("WAWebBizProductMessageSendQpl").qplStartProductSendMessage("Forward", void 0, a.length);
			var i = a.map(async function(e) {
				return o("WAWebChatGetters").getIsUser(e) && e.contact.isContactBlocked && await o("WAWebBlockContactAction").unblockContact(e.contact), t(e);
			});
			o("WAWebBizProductMessageSendQpl").qplEndProductMessageSend(Promise.all(i)), o("WAWebModalManager").ModalManager.close(), a.length === 1 && (o("WAWebCmd").Cmd.openChatFromUnread({
				chat: a[0],
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.BizProduct
			}), window.innerWidth <= o("WAWebFrontendConstants").LAYOUT_2COLUMNS_MAX_WIDTH && o("WAWebDrawerManager").DrawerManager.closeDrawerRight()), e.onSend == null || e.onSend();
		};
		return u.jsx(o("WAWebSelectModal.react").SelectModal, {
			onConfirm: n,
			maxItems: o("WAWebServerPropConstants").MULTICAST_LIMIT_GLOBAL,
			title: s._(
				/*BTDS*/
				""
			),
			listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
			onCancel: o("WAWebModalManager").closeModalManager,
			tsNavigationData: {
				surface: "unknown",
				viewName: "send-product"
			}
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
