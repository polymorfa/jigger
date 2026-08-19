__d("WAWebProductCatalogDetailDrawerMenu.react", [
	"fbt",
	"WATypeUtils",
	"WAWebBizCatalogGatingUtils",
	"WAWebChatRefreshedIcon.react",
	"WAWebCommonCartIconMenuBarItem.react",
	"WAWebDropdown.react",
	"WAWebDropdownItem.react",
	"WAWebDropdownItemSeparator.react",
	"WAWebInfoRefreshedIcon.react",
	"WAWebMenuBar.react",
	"WDSIconIcLink.react",
	"WDSIconIcMoreVert.react",
	"WDSIconIcThumbDown.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.cartCount, n = e.catalogId, a = e.contactId, i = e.onCartClick, l = e.onProductLinkClick, c = e.onProductMoreInformation, d = e.onReportProduct, m = e.onSendProduct, p = i && n != null ? u.jsx(r("WAWebCommonCartIconMenuBarItem.react"), {
			cartCountText: o("WATypeUtils").isNumber(t) && t > 0 ? t.toString() : void 0,
			onClick: i,
			catalogOwnerJid: n
		}) : null;
		return [
			p,
			u.jsx(o("WAWebMenuBar.react").MenuBarItem, {
				testid: "menu-bar-product-link",
				icon: u.jsx(r("WDSIconIcLink.react"), { testid: "link-refreshed" }),
				title: s._(
					/*BTDS*/
					""
				),
				onClick: l
			}, "link"),
			u.jsx(o("WAWebMenuBar.react").MenuBarItem, {
				testid: "menu-bar-menu",
				icon: u.jsx(r("WDSIconIcMoreVert.react"), {}),
				title: s._(
					/*BTDS*/
					""
				),
				dropdownMenu: {
					menu: u.jsxs(u.Fragment, { children: [
						u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
							testid: "mi-send menu-item",
							action: m,
							icon: u.jsx(o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon, {}),
							children: s._(
								/*BTDS*/
								""
							)
						}),
						o("WAWebBizCatalogGatingUtils").canSeeECommerceComplianceIndiaSoftEnforcement(a) && u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
							testid: "mi-send menu-item",
							action: c,
							icon: u.jsx(o("WAWebInfoRefreshedIcon.react").InfoRefreshedIcon, {}),
							children: s._(
								/*BTDS*/
								""
							)
						}),
						u.jsx(r("WAWebDropdownItemSeparator.react"), {}),
						u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
							testid: "mi-report menu-item",
							action: d,
							icon: u.jsx(r("WDSIconIcThumbDown.react"), {}),
							children: s._(
								/*BTDS*/
								""
							)
						})
					] }),
					type: o("WAWebDropdown.react").MenuType.DropdownMenu,
					dirX: o("WAWebDropdown.react").DirX.LEFT,
					flipOnRTL: !0
				}
			}, "dropdown")
		];
	}
	l.getDetailDrawerMenu = c;
}), 226);
