__d("WAWebAttachMenuPopupItemCatalog.react", [
	"WAWebAttachMenuStrings",
	"WAWebAttachProductModalLoadable",
	"WAWebAttachmentMenuLogger",
	"WAWebModalManager",
	"WAWebPrepareMessageSendingAction",
	"WAWebProductCatalogLogEvents",
	"WAWebProductCatalogSession",
	"WAWebStorefrontFilledIcon.react",
	"WAWebUtilsLogQplEvents",
	"WDSMenuItem.react",
	"react",
	"useLazyRef"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = { icon: {
		color: "x1bzzifw",
		$$css: !0
	} };
	function c(e) {
		var t = e.chat, n = e.disabled, a = e.dismissMenu, i = r("useLazyRef")(function() {
			return new (o("WAWebProductCatalogSession")).ProductCatalogSession();
		}), l = function() {
			var e = i.current.toString();
			e != null && (o("WAWebProductCatalogLogEvents").logCatalogAttachmentButtonClick(e), o("WAWebUtilsLogQplEvents").qplStartCatalogView("Attachment"), o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebAttachProductModalLoadable").AttachProductModalLoadable, {
				chat: t,
				sessionId: e,
				onSend: function() {
					o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentSend(t, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.CATALOG);
				},
				onCancel: function() {
					o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentCancel(t, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.CATALOG);
				}
			})), a(), o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(t), o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachMenuClick(t, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.CATALOG));
		}, c = function() {
			l();
		};
		return s.jsx(r("WDSMenuItem.react"), {
			testid: "mi-attach-product-catalog",
			onPress: c,
			Icon: o("WAWebStorefrontFilledIcon.react").StorefrontFilledIcon,
			iconXstyle: u.icon,
			title: o("WAWebAttachMenuStrings").CatalogText(),
			disabled: n
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
