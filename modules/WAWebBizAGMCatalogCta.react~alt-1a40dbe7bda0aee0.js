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
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useCallback;
	function c(e) {
		return s.jsx(r("WDSIconIcStore.react"), babelHelpers.extends({
			height: 32,
			width: 32
		}, e));
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		var t = e.businessWid, n = e.chat, r = e.ctaText, a = e.onClick, i = o("WAWebUserPrefsMeUser").isMeAccount(t), l = u(function() {
			if (a(), i) o("WAWebDrawerManager").DrawerManager.openDrawerLeft(s.jsx(o("WAWebBizToolsFlowLoadable").BizToolsFlowLoadable, {
				entryPoint: o("WAWebWamEnumBusinessToolsEntryPointType").BUSINESS_TOOLS_ENTRY_POINT_TYPE.ENTRY_CONVERSATIONS,
				initialStep: o("WAWebBizToolsFlowSteps").BizToolsSteps.Catalog
			}), {
				transition: "pop-drawer-fast",
				focusOnUnMount: !0
			});
			else {
				var e = o("WAWebProductCatalogContext").buildProductCatalogContext(new (o("WAWebProductCatalogSession")).ProductCatalogSession(), o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.SMB, o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_CATALOG_MESSAGE);
				o("WAWebDrawerManager").DrawerManager.openDrawerRight(s.jsx(o("WAWebProductDetailsFlowLoadable").ProductDetailsFlowLoadable, {
					chat: n,
					catalogOwnerJid: o("WAWebWidFactory").asUserWidOrThrow(t).toJid()
				}), {
					transition: "slide-left",
					newDrawerContext: e
				});
			}
		}, [
			t,
			n,
			i,
			a
		]);
		return s.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, { items: [{
			label: r,
			onClick: l,
			Icon: c
		}] });
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
