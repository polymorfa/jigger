__d("WAWebBizAGMCatalogCta.react", [
	"WAWebBizToolsFlowLoadable",
	"WAWebBizToolsFlowSteps",
	"WAWebDrawerManager",
	"WAWebMessageBubbleActions.react",
	"WAWebProductCatalogContext",
	"WAWebProductCatalogSession",
	"WAWebProductDetailsFlowLoadable",
	"WAWebUserPrefsMeUser",
	"WAWebWamEnumBizPlatform",
	"WAWebWamEnumBusinessToolsEntryPointType",
	"WAWebWamEnumCatalogEntryPoint",
	"WAWebWidFactory",
	"WDSIconIcStore.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useCallback;
	function c(e) {
		var t = o("react-compiler-runtime").c(2), n;
		return t[0] !== e ? (n = s.jsx(r("WDSIconIcStore.react"), babelHelpers.extends({
			height: 32,
			width: 32
		}, e)), t[0] = e, t[1] = n) : n = t[1], n;
	}
	function d(e) {
		var t = o("react-compiler-runtime").c(10), n = e.businessWid, r = e.chat, a = e.ctaText, i = e.onClick, l;
		t[0] !== n ? (l = o("WAWebUserPrefsMeUser").isMeAccount(n), t[0] = n, t[1] = l) : l = t[1];
		var u = l, d;
		t[2] !== n || t[3] !== r || t[4] !== u || t[5] !== i ? (d = function() {
			if (i(), u) o("WAWebDrawerManager").DrawerManager.openDrawerLeft(s.jsx(o("WAWebBizToolsFlowLoadable").BizToolsFlowLoadable, {
				entryPoint: o("WAWebWamEnumBusinessToolsEntryPointType").BUSINESS_TOOLS_ENTRY_POINT_TYPE.ENTRY_CONVERSATIONS,
				initialStep: o("WAWebBizToolsFlowSteps").BizToolsSteps.Catalog
			}), {
				transition: "pop-drawer-fast",
				focusOnUnMount: !0
			});
			else {
				var e = o("WAWebProductCatalogContext").buildProductCatalogContext(new (o("WAWebProductCatalogSession")).ProductCatalogSession(), o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.SMB, o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_CATALOG_MESSAGE);
				o("WAWebDrawerManager").DrawerManager.openDrawerRight(s.jsx(o("WAWebProductDetailsFlowLoadable").ProductDetailsFlowLoadable, {
					chat: r,
					catalogOwnerJid: o("WAWebWidFactory").asUserWidOrThrow(n).toJid()
				}), {
					transition: "slide-left",
					newDrawerContext: e
				});
			}
		}, t[2] = n, t[3] = r, t[4] = u, t[5] = i, t[6] = d) : d = t[6];
		var m = d, p;
		return t[7] !== a || t[8] !== m ? (p = s.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, { items: [{
			label: a,
			onClick: m,
			Icon: c
		}] }), t[7] = a, t[8] = m, t[9] = p) : p = t[9], p;
	}
	l.default = d;
}), 98);
