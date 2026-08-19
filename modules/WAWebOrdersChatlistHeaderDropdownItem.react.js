__d("WAWebOrdersChatlistHeaderDropdownItem.react", [
	"fbt",
	"WAWebBizEntryPoint",
	"WAWebBusinessProfileCollection",
	"WAWebBusinessProfileUtils",
	"WAWebDrawerManager",
	"WAWebMobilePlatforms",
	"WAWebOrderDetailsActionCategory",
	"WAWebOrderDetailsActionsSmbWamEvent",
	"WAWebOrderGatingUtils",
	"WAWebOrderManagementFlowLoadable",
	"WAWebUserPrefsMeUser",
	"WAWebWamEnumOrderDetailsCreationAction",
	"WDSIconIcReceipt.react",
	"WDSMenuItem.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c() {
		var e = o("react-compiler-runtime").c(1);
		if (!(o("WAWebMobilePlatforms").isSMB() && o("WAWebOrderGatingUtils").orderManagementEnabled())) return null;
		var t = d, n;
		if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
			var a = o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled() ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
			n = u.jsx(r("WDSMenuItem.react"), {
				testid: "mi-orders menu-item",
				Icon: r("WDSIconIcReceipt.react"),
				onPress: t,
				title: a
			}), e[0] = n;
		} else n = e[0];
		return n;
	}
	function d(e) {
		e == null || e.stopPropagation();
		var t = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
		new (o("WAWebOrderDetailsActionsSmbWamEvent")).OrderDetailsActionsSmbWamEvent({
			orderDetailsCreationAction: o("WAWebWamEnumOrderDetailsCreationAction").ORDER_DETAILS_CREATION_ACTION.VIEW_ORDER_DETAILS_HUB,
			actionCategory: String(r("WAWebOrderDetailsActionCategory").ORDER_DETAILS_MANAGEMENT),
			orderDetailEntryPoint: String(r("WAWebBizEntryPoint").FROM_BUSINESS_TOOLS),
			hasCatalog: o("WAWebBusinessProfileUtils").hasCatalog(o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(t))
		}).commit(), o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(r("WAWebOrderManagementFlowLoadable"), { isInitialStep: !0 }));
	}
	l.default = c;
}), 226);
