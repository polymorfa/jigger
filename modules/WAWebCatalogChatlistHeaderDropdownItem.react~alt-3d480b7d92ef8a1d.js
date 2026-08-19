__d("WAWebCatalogChatlistHeaderDropdownItem.react", [
	"fbt",
	"WAWebBizCatalogGatingUtils",
	"WAWebBusinessProfileUtils",
	"WAWebCatalogManagementFlowLoadable",
	"WAWebChatlistHeaderDropdownLogEvents",
	"WAWebConfirmPopup.react",
	"WAWebMobilePlatforms",
	"WAWebModalManager",
	"WAWebProductCatalogMetaLinkingGatingUtils",
	"WAWebSelfBusinessProfileLookup",
	"WAWebShopsLog",
	"WAWebUtilsLogQplEvents",
	"WAWebWamEnumCatalogEntryPoint",
	"WAWebWamEnumShopsManagementAction",
	"WAWebWamEnumWebcMenuItemLabel",
	"WDSIconIcGridOn.react",
	"WDSMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c() {
		var e = o("WAWebSelfBusinessProfileLookup").getSelfBusinessProfile();
		if (!(o("WAWebMobilePlatforms").isSMB() && !o("WAWebBizCatalogGatingUtils").blockCatalogCreationECommerceComplianceIndia(e) && !o("WAWebProductCatalogMetaLinkingGatingUtils").shouldDisableCatalogDueToMetaLinkingForSelf())) return null;
		var t = o("WAWebProductCatalogMetaLinkingGatingUtils").shouldShowMetaLinkedDisabledCatalogTooltipForSelf(), n = o("WAWebBusinessProfileUtils").hasShop(e), a = function() {
			o("WAWebBusinessProfileUtils").goToCommerceManager(e), o("WAWebShopsLog").logShopsManagementEvent(o("WAWebWamEnumShopsManagementAction").SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_COMMERCE_MANAGER_IN_CATALOG_SETTING);
		}, i = function(r) {
			if (r == null || r.preventDefault(), n) {
				var t = o("WAWebBusinessProfileUtils").isShopBanned(e);
				o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
					title: s._(
						/*BTDS*/
						""
					),
					onOK: a,
					okText: s._(
						/*BTDS*/
						""
					),
					onCancel: function() {
						o("WAWebModalManager").ModalManager.close(), o("WAWebShopsLog").logShopsManagementEvent(o("WAWebWamEnumShopsManagementAction").SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_CANCEL_IN_CATALOG_SETTING);
					},
					children: t ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					)
				})), o("WAWebShopsLog").logShopsManagementEvent(o("WAWebWamEnumShopsManagementAction").SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_CATALOG_SETTING);
			} else o("WAWebUtilsLogQplEvents").qplStartCatalogCollectionsView("ToolsMenu"), o("WAWebCatalogManagementFlowLoadable").openCatalogManagementFlow({
				entryPoint: o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_SETTINGS,
				isInitialStep: !0
			}), o("WAWebChatlistHeaderDropdownLogEvents").logMenuEvent(o("WAWebWamEnumWebcMenuItemLabel").WEBC_MENU_ITEM_LABEL.CATALOG);
		}, l = n ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), c = "mi-catalog menu-item";
		return u.jsx(r("WDSMenuItem.react"), {
			testid: c,
			Icon: r("WDSIconIcGridOn.react"),
			onPress: i,
			title: l,
			disabled: t
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
