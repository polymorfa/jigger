__d("WAWebAttachMenuPopupItemOrders.react", [
	"WAWebAttachMenuStrings",
	"WAWebAttachmentMenuLogger",
	"WAWebBizEntryPoint",
	"WAWebBusinessProfileCollection",
	"WAWebBusinessProfileUtils",
	"WAWebDrawerManager",
	"WAWebModalManager",
	"WAWebOrderCreationFlowLoadable",
	"WAWebOrderDetailsActionCategory",
	"WAWebOrderDetailsActionsSmbWamEvent",
	"WAWebOrderExpansionNotSupportedPopup.react",
	"WAWebOrdersExpansionUtils",
	"WAWebReceiptRefreshedFilledIcon.react",
	"WAWebSmbDataSharingOptInModalDialog",
	"WAWebUserPrefsMeUser",
	"WAWebWamEnumOrderDetailsCreationAction",
	"WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
	"WDSMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		icon: {
			color: "x1ydg37e",
			$$css: !0
		},
		opacityOverride: {
			opacity: "xuzhngd",
			$$css: !0
		}
	};
	function c(e) {
		var t = e.chat, n = e.dismissMenu, a = function() {
			new (o("WAWebOrderDetailsActionsSmbWamEvent")).OrderDetailsActionsSmbWamEvent({
				orderDetailsCreationAction: o("WAWebWamEnumOrderDetailsCreationAction").ORDER_DETAILS_CREATION_ACTION.CLICK_ORDER_FROM_ICON_MENU,
				actionCategory: String(r("WAWebOrderDetailsActionCategory").ORDER_DETAILS_CREATION),
				orderDetailEntryPoint: String(r("WAWebBizEntryPoint").MERCHANT_INITIATED),
				hasCatalog: o("WAWebBusinessProfileUtils").hasCatalog(o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(o("WAWebUserPrefsMeUser").getMeUserOrThrow()))
			}).commit();
			var e = function() {
				o("WAWebDrawerManager").DrawerManager.openDrawerRight(s.jsx(r("WAWebOrderCreationFlowLoadable"), {
					entryPoint: r("WAWebBizEntryPoint").MERCHANT_INITIATED,
					chat: t,
					onSend: function() {
						o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentSend(t, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.ORDER);
					},
					onCancel: function() {
						o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachmentCancel(t, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.ORDER);
					}
				}), { transition: "slide-left" }), o("WAWebAttachmentMenuLogger").AttachmentMenuLogger.logAttachMenuClick(t, o("WAWebAttachmentMenuLogger").AttachmentMenuTarget.ORDER);
			};
			r("WAWebSmbDataSharingOptInModalDialog").maybeShowOrderDataSharingDialog(t, e, o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.NEW_ORDER);
		}, i = function() {
			o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebOrderExpansionNotSupportedPopup.react"), { chat: t }));
		}, l = !o("WAWebOrdersExpansionUtils").isOrderExpansionEnabled() && o("WAWebOrdersExpansionUtils").isSellerCountrySameAsBuyer(t) || o("WAWebOrdersExpansionUtils").isContactCountrySupported(t), c = function() {
			l ? a() : i(), n();
		}, d = [u.icon, !l && u.opacityOverride];
		return s.jsx(r("WDSMenuItem.react"), {
			testid: "mi-attach-order",
			onPress: c,
			Icon: o("WAWebReceiptRefreshedFilledIcon.react").ReceiptRefreshedFilledIcon,
			iconXstyle: d,
			title: o("WAWebAttachMenuStrings").OrderText()
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
