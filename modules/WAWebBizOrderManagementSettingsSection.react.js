__d("WAWebBizOrderManagementSettingsSection.react", [
	"fbt",
	"WAWebBizFrontendGatingUtils",
	"WAWebConfirmPopup.react",
	"WAWebDrawerButton.react",
	"WAWebDrawerSection.react",
	"WAWebFbtCommon",
	"WAWebModalManager",
	"WAWebOrderGatingUtils",
	"WAWebPaymentInfo",
	"WAWebPlusIcon.react",
	"WAWebRoundShape.react",
	"WAWebText.react",
	"WAWebUserPrefsPaymentInfo",
	"WDSPaddings.stylex",
	"react",
	"stylex",
	"useWAWebForceUpdate",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = { paddingBlock10: {
		paddingTop: "x889kno",
		paddingBottom: "x1a8lsjc",
		$$css: !0
	} }, m = { infoRow: {
		color: "x1mhprgp",
		fontSize: "x1f6kntn",
		fontWeight: "xk50ysn",
		lineHeight: "xa7kkou",
		$$css: !0
	} };
	function p() {
		"use no forget";
		var t = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
		if (o("useWAWebListener").useListener(o("WAWebPaymentInfo").PaymentInfo, o("WAWebPaymentInfo").CPI_INFO_CHANGE_EVENT, t), !o("WAWebBizFrontendGatingUtils").isOrderDetailsPaymentInstructionsSyncEnabled()) return null;
		var n = function() {
			o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				tsNavigationData: {
					surface: "unknown",
					viewName: "order-management-settings"
				},
				title: s._(
					/*BTDS*/
					""
				),
				okText: r("WAWebFbtCommon")("OK"),
				onOK: o("WAWebModalManager").closeModalManager,
				children: c.jsx("div", { children: o("WAWebUserPrefsPaymentInfo").isCPIInfoValid() ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				) })
			}));
		};
		return c.jsxs(r("WAWebDrawerSection.react"), {
			className: "x1280gxy x120ee7l x1q0q8m5 xu75nwu",
			animation: !1,
			children: [c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.infoRow, o("WDSPaddings.stylex").wdsPaddings.paddingHor16, d.paddingBlock10), { children: o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled() ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			) })), c.jsxs(o("WAWebDrawerButton.react").DrawerButtonSimple, {
				icon: c.jsx(r("WAWebRoundShape.react"), {
					disabled: !0,
					children: c.jsx(o("WAWebPlusIcon.react").PlusIcon, {})
				}),
				testid: "order-payment-details",
				color: "disabled",
				onClick: n,
				children: [c.jsx(o("WAWebText.react").WAWebTextLarge, {
					color: "secondaryLighter",
					children: s._(
						/*BTDS*/
						""
					)
				}), c.jsx(o("WAWebText.react").WAWebTextSmall, {
					color: "secondaryLighter",
					children: o("WAWebUserPrefsPaymentInfo").isCPIInfoValid() ? o("WAWebUserPrefsPaymentInfo").getCPIInfo() : s._(
						/*BTDS*/
						""
					)
				})]
			})]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
