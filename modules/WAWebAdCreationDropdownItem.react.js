__d("WAWebAdCreationDropdownItem.react", [
	"fbt",
	"WALogger",
	"WAWebBizNativeAdsWamLogger",
	"WAWebChatlistUtils",
	"WAWebMegaphoneRefreshedIcon.react",
	"WDSMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useEffect;
	function m(t) {
		var n = t.adCreationUrlInput, a = t.lwiEntryPoint, i = n.activeAccountInfo;
		d(function() {
			o("WAWebBizNativeAdsWamLogger").logAdCreationImpression(a, i !== "not-linked" && i.hasFacebookPage);
		}, [i, a]);
		var l = function(t) {
			t == null || t.preventDefault(), o("WAWebChatlistUtils").handleAdCreation({
				adCreationUrlInput: n,
				lwiEntryPoint: a
			});
		}, u;
		switch (n.sourceAdCreation) {
			case "whatsapp_smb_web_ad_creation_home_menu_item":
				u = s._(
					/*BTDS*/
					""
				);
				break;
			case "whatsapp_smb_web_catalog":
				u = s._(
					/*BTDS*/
					""
				);
				break;
			default: return n.sourceAdCreation, o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[AdCreationDropdownItem] missing CTA for source ", ""])), n.sourceAdCreation), null;
		}
		var m = "ad-creation-menu-item";
		return c.jsx(r("WDSMenuItem.react"), {
			Icon: o("WAWebMegaphoneRefreshedIcon.react").MegaphoneRefreshedIcon,
			onPress: l,
			testid: m,
			title: u
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
