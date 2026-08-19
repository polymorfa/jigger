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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c() {
		var e = o("react-compiler-runtime").c(6), t, n, a, i;
		if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
			i = Symbol.for("react.early_return_sentinel");
			e: {
				if (t = o("WAWebSelfBusinessProfileLookup").getSelfBusinessProfile(), !(o("WAWebMobilePlatforms").isSMB() && !o("WAWebBizCatalogGatingUtils").blockCatalogCreationECommerceComplianceIndia(t) && !o("WAWebProductCatalogMetaLinkingGatingUtils").shouldDisableCatalogDueToMetaLinkingForSelf())) {
					i = null;
					break e;
				}
				n = o("WAWebProductCatalogMetaLinkingGatingUtils").shouldShowMetaLinkedDisabledCatalogTooltipForSelf(), a = o("WAWebBusinessProfileUtils").hasShop(t);
			}
			e[0] = t, e[1] = n, e[2] = a, e[3] = i;
		} else t = e[0], n = e[1], a = e[2], i = e[3];
		if (i !== Symbol.for("react.early_return_sentinel")) return i;
		var l = a, c;
		if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
			var m = function() {
				o("WAWebBusinessProfileUtils").goToCommerceManager(t), o("WAWebShopsLog").logShopsManagementEvent(o("WAWebWamEnumShopsManagementAction").SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_COMMERCE_MANAGER_IN_CATALOG_SETTING);
			};
			c = function(n) {
				if (n == null || n.preventDefault(), l) {
					var e = o("WAWebBusinessProfileUtils").isShopBanned(t);
					o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
						title: s._(
							/*BTDS*/
							""
						),
						onOK: m,
						okText: s._(
							/*BTDS*/
							""
						),
						onCancel: d,
						children: e ? s._(
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
			}, e[4] = c;
		} else c = e[4];
		var p = c, _;
		if (e[5] === Symbol.for("react.memo_cache_sentinel")) {
			var f = l ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
			_ = u.jsx(r("WDSMenuItem.react"), {
				testid: "mi-catalog menu-item",
				Icon: r("WDSIconIcGridOn.react"),
				onPress: p,
				title: f,
				disabled: n
			}), e[5] = _;
		} else _ = e[5];
		return _;
	}
	function d() {
		o("WAWebModalManager").ModalManager.close(), o("WAWebShopsLog").logShopsManagementEvent(o("WAWebWamEnumShopsManagementAction").SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_CANCEL_IN_CATALOG_SETTING);
	}
	l.default = c;
}), 226);
