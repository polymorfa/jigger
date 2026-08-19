__d("WAWebProductCatalogCatalogDrawerMenu.react", [
	"fbt",
	"WATypeUtils",
	"WAWebAdCreationDropdownItem.react",
	"WAWebBizCatalogGatingUtils",
	"WAWebCollectionRefreshedIcon.react",
	"WAWebCommonCartIconMenuBarItem.react",
	"WAWebInfoRefreshedIcon.react",
	"WAWebSettingsRefreshedIcon.react",
	"WAWebTabOrder",
	"WAWebUserPrefsMeUser",
	"WAWebWamEnumLwiEntryPoint",
	"WAWebWidFactory",
	"WDSIconIcLink.react",
	"WDSIconIcMoreVert.react",
	"WDSIconIcShare.react",
	"WDSMenu.react",
	"WDSMenuBarItem.react",
	"WDSMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.boostMenuOptionInput, n = e.canManageCatalog, a = e.onOpenCollections, i = e.onOpenMerchantDetailsForm, l = e.onOpenSettings, c = e.onSendCatalog, d = e.ref;
		if (n) {
			var m = u.jsxs(u.Fragment, { children: [
				u.jsx(r("WDSMenuItem.react"), {
					testid: "mi-forward menu-item",
					onPress: c,
					Icon: r("WDSIconIcShare.react"),
					title: s._(
						/*BTDS*/
						""
					)
				}),
				a && u.jsx(r("WDSMenuItem.react"), {
					testid: "mi-collections menu-item",
					onPress: a,
					Icon: o("WAWebCollectionRefreshedIcon.react").CollectionRefreshedIcon,
					title: s._(
						/*BTDS*/
						""
					)
				}),
				o("WAWebBizCatalogGatingUtils").canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourney(o("WAWebUserPrefsMeUser").getMeUserOrThrow()) && i && u.jsx(r("WDSMenuItem.react"), {
					testid: "merchant-details",
					onPress: i,
					Icon: o("WAWebInfoRefreshedIcon.react").InfoRefreshedIcon,
					title: s._(
						/*BTDS*/
						""
					)
				}, "merchantDetails"),
				l && u.jsx(r("WDSMenuItem.react"), {
					testid: "mi-settings menu-item",
					onPress: l,
					Icon: o("WAWebSettingsRefreshedIcon.react").SettingsRefreshedIcon,
					title: s._(
						/*BTDS*/
						""
					)
				}),
				t != null && u.jsx(r("WAWebAdCreationDropdownItem.react"), {
					adCreationUrlInput: t.adCreationUrlInput,
					lwiEntryPoint: o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT.SMB_CATALOG_LIST_ADVERTISE_MENU_ITEM
				})
			] });
			return u.jsx(r("WDSMenuBarItem.react"), {
				ref: d,
				testid: "menu-bar-menu",
				icon: r("WDSIconIcMoreVert.react"),
				title: s._(
					/*BTDS*/
					""
				),
				menuAlign: "end",
				wdsMenuToRender: u.jsx(r("WDSMenu.react"), { children: m })
			});
		}
		return u.jsx(r("WDSMenuBarItem.react"), {
			ref: d,
			testid: "menu-bar-catalog-link",
			icon: r("WDSIconIcLink.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onClick: c,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		var t = e.boostMenuOptionInput, n = e.canManageCatalog, a = e.cartCount, i = e.catalogId, l = e.onCartClick, s = e.onOpenCollections, d = e.onOpenMerchantDetailsForm, m = e.onOpenSettings, p = e.onSendCatalog, _;
		if (i != null) {
			var f, g = o("WAWebWidFactory").createWid(i), h = ((f = o("WAWebUserPrefsMeUser").getMeUserOrThrow()) == null ? void 0 : f.equals(g)) === !0;
			_ = !h && l ? u.jsx(r("WAWebCommonCartIconMenuBarItem.react"), {
				cartCountText: o("WATypeUtils").isNumber(a) && a > 0 ? a.toString() : void 0,
				onClick: l,
				catalogOwnerJid: i
			}) : null;
		}
		var y = u.jsx(c, {
			canManageCatalog: n,
			onSendCatalog: p,
			onOpenCollections: s,
			onOpenMerchantDetailsForm: d,
			onOpenSettings: m,
			boostMenuOptionInput: t
		});
		return [_, y];
	}
	l.getCatalogDrawerMenu = d;
}), 226);
