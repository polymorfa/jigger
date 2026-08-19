__d("WAWebCommerceButton.react", [
	"fbt",
	"WAWebBizCatalogGatingUtils",
	"WAWebBusinessProfileCollection",
	"WAWebBusinessProfileTypes",
	"WAWebBusinessProfileUtils",
	"WAWebDrawerManager",
	"WAWebProductCatalogContext",
	"WAWebProductCatalogSession",
	"WAWebProductDetailsFlowLoadable",
	"WAWebShopIcon.react",
	"WAWebStorefrontIcon.react",
	"WAWebTabOrder",
	"WAWebUtilsLogQplEvents",
	"WAWebWamEnumBizPlatform",
	"WAWebWamEnumCatalogEntryPoint",
	"WDSMenuBarItem.react",
	"react",
	"useWAWebModelValues",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { buttonMargin: {
		marginInlineStart: "x150mmf0",
		$$css: !0
	} };
	function d(e) {
		var t, n, a = e.chat, i = e.disabled, l = i === void 0 ? !1 : i, d = r("useWAWebUIM")(), m = a.contact, p = o("useWAWebModelValues").useModelValues(m, ["businessProfile"]), _ = p.businessProfile, f = o("useWAWebModelValues").useOptionalModelValues(_, ["profileOptions", "catalogStatus"]);
		if (o("WAWebBusinessProfileUtils").hasShop(_)) {
			if (o("WAWebBusinessProfileUtils").isShopBanned(_)) return null;
			var g = function(t) {
				t == null || t.preventDefault(), o("WAWebBusinessProfileUtils").goToShop(a.contact.businessProfile);
			}, h = u.jsx(r("WDSMenuBarItem.react"), {
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
				testid: "shop-button",
				icon: o("WAWebShopIcon.react").ShopIcon,
				title: s._(
					/*BTDS*/
					""
				),
				onClick: g,
				disabled: l,
				marginInlineXstyle: c.buttonMargin
			});
			return h;
		}
		if (_ != null && _.isCatalogDisabledDueToMetaLinking) return null;
		if ((f == null || (t = f.profileOptions) == null ? void 0 : t.commerceExperience) === o("WAWebBusinessProfileTypes").CommerceExperienceTypes.CATALOG || (f == null || (n = f.profileOptions) == null ? void 0 : n.commerceExperience) === o("WAWebBusinessProfileTypes").CommerceExperienceTypes.META_CATALOG && o("WAWebBizCatalogGatingUtils").isCatalogVariantsViewingEnabled() || (f == null ? void 0 : f.catalogStatus) === o("WAWebBusinessProfileCollection").CATALOG_EXISTS) {
			var y = function(t) {
				t == null || t.preventDefault(), o("WAWebUtilsLogQplEvents").qplStartCatalogCollectionsView("ChatHeader");
				var e = o("WAWebProductCatalogContext").buildProductCatalogContext(new (o("WAWebProductCatalogSession")).ProductCatalogSession(), o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.SMB, o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_CHAT), n = a.contact.id;
				o("WAWebDrawerManager").DrawerManager.openDrawerRight(u.jsx(o("WAWebProductDetailsFlowLoadable").ProductDetailsFlowLoadable, {
					chat: a,
					catalogOwnerJid: n.toJid()
				}), {
					transition: "slide-left",
					uim: d,
					newDrawerContext: e
				});
			}, C = u.jsx(r("WDSMenuBarItem.react"), {
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
				testid: "product_catalog-button",
				icon: o("WAWebStorefrontIcon.react").StorefrontIcon,
				title: s._(
					/*BTDS*/
					""
				),
				onClick: y,
				disabled: l,
				marginInlineXstyle: c.buttonMargin
			});
			return C;
		}
		return null;
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
