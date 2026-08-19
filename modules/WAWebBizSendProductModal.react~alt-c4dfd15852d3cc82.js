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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useEffect;
	function d(e) {
		var t = o("react-compiler-runtime").c(10), n;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = [], t[0] = n) : n = t[0], c(m, n);
		var r;
		t[1] !== e ? (r = function(n) {
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
		}, t[1] = e, t[2] = r) : r = t[2];
		var a = r, i;
		t[3] !== e || t[4] !== a ? (i = function(n) {
			var t = n.selectedItems, r = t;
			o("WAWebBizProductMessageSendQpl").qplStartProductSendMessage("Forward", void 0, r.length);
			var i = r.map(async function(e) {
				return o("WAWebChatGetters").getIsUser(e) && e.contact.isContactBlocked && await o("WAWebBlockContactAction").unblockContact(e.contact), a(e);
			});
			o("WAWebBizProductMessageSendQpl").qplEndProductMessageSend(Promise.all(i)), o("WAWebModalManager").ModalManager.close(), r.length === 1 && (o("WAWebCmd").Cmd.openChatFromUnread({
				chat: r[0],
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.BizProduct
			}), window.innerWidth <= o("WAWebFrontendConstants").LAYOUT_2COLUMNS_MAX_WIDTH && o("WAWebDrawerManager").DrawerManager.closeDrawerRight()), e.onSend == null || e.onSend();
		}, t[3] = e, t[4] = a, t[5] = i) : i = t[5];
		var l = i, d;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (d = s._(
			/*BTDS*/
			""
		), t[6] = d) : d = t[6];
		var p;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (p = {
			surface: "unknown",
			viewName: "send-product"
		}, t[7] = p) : p = t[7];
		var _;
		return t[8] !== l ? (_ = u.jsx(o("WAWebSelectModal.react").SelectModal, {
			onConfirm: l,
			maxItems: o("WAWebServerPropConstants").MULTICAST_LIMIT_GLOBAL,
			title: d,
			listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
			onCancel: o("WAWebModalManager").closeModalManager,
			tsNavigationData: p
		}), t[8] = l, t[9] = _) : _ = t[9], _;
	}
	function m() {
		o("WAWebCmd").Cmd.closeContextMenu(), o("WAWebCmd").Cmd.closeTooltip();
	}
	l.default = d;
}), 226);
