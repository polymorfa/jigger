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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(27), n = e.boostMenuOptionInput, a = e.canManageCatalog, i = e.onOpenCollections, l = e.onOpenMerchantDetailsForm, c = e.onOpenSettings, d = e.onSendCatalog, m = e.ref;
		if (a) {
			var p;
			t[0] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
				/*BTDS*/
				""
			), t[0] = p) : p = t[0];
			var _;
			t[1] !== d ? (_ = u.jsx(r("WDSMenuItem.react"), {
				testid: "mi-forward menu-item",
				onPress: d,
				Icon: r("WDSIconIcShare.react"),
				title: p
			}), t[1] = d, t[2] = _) : _ = t[2];
			var f;
			t[3] !== i ? (f = i && u.jsx(r("WDSMenuItem.react"), {
				testid: "mi-collections menu-item",
				onPress: i,
				Icon: o("WAWebCollectionRefreshedIcon.react").CollectionRefreshedIcon,
				title: s._(
					/*BTDS*/
					""
				)
			}), t[3] = i, t[4] = f) : f = t[4];
			var g;
			t[5] !== l ? (g = o("WAWebBizCatalogGatingUtils").canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourney(o("WAWebUserPrefsMeUser").getMeUserOrThrow()) && l && u.jsx(r("WDSMenuItem.react"), {
				testid: "merchant-details",
				onPress: l,
				Icon: o("WAWebInfoRefreshedIcon.react").InfoRefreshedIcon,
				title: s._(
					/*BTDS*/
					""
				)
			}, "merchantDetails"), t[5] = l, t[6] = g) : g = t[6];
			var h;
			t[7] !== c ? (h = c && u.jsx(r("WDSMenuItem.react"), {
				testid: "mi-settings menu-item",
				onPress: c,
				Icon: o("WAWebSettingsRefreshedIcon.react").SettingsRefreshedIcon,
				title: s._(
					/*BTDS*/
					""
				)
			}), t[7] = c, t[8] = h) : h = t[8];
			var y;
			t[9] !== n ? (y = n != null && u.jsx(r("WAWebAdCreationDropdownItem.react"), {
				adCreationUrlInput: n.adCreationUrlInput,
				lwiEntryPoint: o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT.SMB_CATALOG_LIST_ADVERTISE_MENU_ITEM
			}), t[9] = n, t[10] = y) : y = t[10];
			var C;
			t[11] !== _ || t[12] !== f || t[13] !== g || t[14] !== h || t[15] !== y ? (C = u.jsxs(u.Fragment, { children: [
				_,
				f,
				g,
				h,
				y
			] }), t[11] = _, t[12] = f, t[13] = g, t[14] = h, t[15] = y, t[16] = C) : C = t[16];
			var b = C, v;
			t[17] === Symbol.for("react.memo_cache_sentinel") ? (v = s._(
				/*BTDS*/
				""
			), t[17] = v) : v = t[17];
			var S;
			t[18] !== b ? (S = u.jsx(r("WDSMenu.react"), { children: b }), t[18] = b, t[19] = S) : S = t[19];
			var R;
			return t[20] !== m || t[21] !== S ? (R = u.jsx(r("WDSMenuBarItem.react"), {
				ref: m,
				testid: "menu-bar-menu",
				icon: r("WDSIconIcMoreVert.react"),
				title: v,
				menuAlign: "end",
				wdsMenuToRender: S
			}), t[20] = m, t[21] = S, t[22] = R) : R = t[22], R;
		}
		var L;
		t[23] === Symbol.for("react.memo_cache_sentinel") ? (L = s._(
			/*BTDS*/
			""
		), t[23] = L) : L = t[23];
		var E;
		return t[24] !== d || t[25] !== m ? (E = u.jsx(r("WDSMenuBarItem.react"), {
			ref: m,
			testid: "menu-bar-catalog-link",
			icon: r("WDSIconIcLink.react"),
			title: L,
			onClick: d,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER
		}), t[24] = d, t[25] = m, t[26] = E) : E = t[26], E;
	}
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
