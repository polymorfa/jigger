__d("WAWebBusinessProductsAndServicesView.react", [
	"fbt",
	"WAWebBusinessProfileLabels",
	"WAWebFlex.react",
	"WAWebPlusIcon.react",
	"WAWebProductCollection",
	"WDSButton.react",
	"WDSIconIcGridOn.react",
	"WDSIconIcSchedule.react",
	"WDSText.react",
	"react",
	"useWAWebAddItemModal",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useRef, d = "128px", m = "131px", p = "biz-profile-add-catalog-item-button", _ = { contentContainer: {
		alignSelf: "xkh2ocl",
		paddingBottom: "x12xbjc7",
		paddingInlineEnd: "xvtqlqk",
		paddingInlineStart: "x12w63v0",
		paddingTop: "x16ovd2e",
		$$css: !0
	} };
	function f(e) {
		var t = e.catalog, n = e.fetchProducts, a = e.hasProducts, i = e.products, l = c(null), d = r("useWAWebAddItemModal")(t, n), m = d.menu, f = d.renderModal, g = r("useWDSMenu")({
			align: "end",
			position: "below",
			menu: m,
			targetRef: l
		}), h = g.isMenuOpen, y = g.menuPortal, C = g.openMenu;
		return a ? u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "start",
			gap: 12,
			xstyle: _.contentContainer,
			children: [
				u.jsx("div", {
					className: "xhslqc4 x1nqnulx x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x1xvr5cs",
					children: u.jsx(r("WDSIconIcGridOn.react"), {})
				}),
				u.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "start",
					gap: 8,
					children: [u.jsx(r("WDSText.react"), {
						type: "Body3",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							""
						)
					}), u.jsxs("div", {
						className: "x78zum5 x1a02dak x1qvou4u x1s70e7g",
						children: [i.slice(0, 6).map(function(e) {
							var t = e.imageCdnUrl, n = e.reviewStatus, a = n === o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.NO_REVIEW || n === o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.OUTDATED || n === o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.PENDING;
							return u.jsxs("div", {
								className: "xnj1f2r x2uibgs xkveyfu x12llq9 xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 xdt5ytf x1vlo0dj x1qughib x6ikm8r x10wlt62 x1n2onr6 x2pejg6",
								children: [t != null && t !== "" && u.jsx("img", {
									alt: e.name,
									src: t,
									className: "x5yr21d xl1xv1r xh8yej3"
								}), a && u.jsx("div", {
									className: "x1280gxy x1c9tyrk xeusxvb x1pahc9y x1ertn4p xhslqc4 x1gzglq8 x1tiyuxx x1uc92m x1nbhmlj x181vq82 x10l6tqk x1ngp85i",
									role: "img",
									"aria-label": s._(
										/*BTDS*/
										""
									),
									children: u.jsx(r("WDSIconIcSchedule.react"), {
										width: 16,
										height: 16
									})
								})]
							}, e.id.toString());
						}), u.jsxs("div", {
							className: "x6s0dn4 x1abdmlv xbrszos xea3l6g x18isctg x2q3nzr x78zum5 x1vlo0dj xl56j7k x2pejg6",
							children: [u.jsx(r("WDSButton.react"), {
								ref: l,
								label: o("WAWebBusinessProfileLabels").getAddCatalogButtonLabel(),
								variant: "borderless",
								size: "large",
								Icon: o("WAWebPlusIcon.react").PlusIcon,
								showEndDropdownIcon: !1,
								"aria-expanded": h,
								"aria-haspopup": "menu",
								onPress: C,
								testid: p
							}), y]
						})]
					})]
				}),
				f([].concat(i))
			]
		}) : u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 12,
			xstyle: _.contentContainer,
			children: [
				u.jsx("div", {
					className: "xhslqc4 x1nqnulx x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x1xvr5cs",
					children: u.jsx(r("WDSIconIcGridOn.react"), {})
				}),
				u.jsx(r("WDSButton.react"), {
					ref: l,
					label: o("WAWebBusinessProfileLabels").getAddCatalogButtonLabel(),
					variant: "tonal",
					Icon: o("WAWebPlusIcon.react").PlusIcon,
					showEndDropdownIcon: !1,
					"aria-expanded": h,
					"aria-haspopup": "menu",
					onPress: C,
					testid: p
				}),
				y,
				f([].concat(i))
			]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
