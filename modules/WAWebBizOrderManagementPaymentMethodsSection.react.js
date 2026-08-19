__d("WAWebBizOrderManagementPaymentMethodsSection.react", [
	"fbt",
	"WAWebBizFrontendGatingUtils",
	"WAWebBizPaymentsBrazilAddPixModal.react",
	"WAWebBrazilPixKeyFormattingUtils",
	"WAWebConfirmPopup.react",
	"WAWebCustomPaymentMethods",
	"WAWebDrawerButton.react",
	"WAWebDrawerSection.react",
	"WAWebFbtCommon",
	"WAWebModalManager",
	"WAWebPaymentOnboardingFlowLoadable",
	"WAWebPaymentsUserActionLogging",
	"WAWebPixLogoIcon.react",
	"WAWebPixPaymentRequestFeature",
	"WAWebPlusIcon.react",
	"WAWebRoundShape.react",
	"WAWebSyncdMdSyncFieldstatMeta",
	"WAWebText.react",
	"WAWebUserPrefsCustomPaymentMethods",
	"WAWebWamEnumPaymentActionTargets",
	"WDSPaddings.stylex",
	"asyncToGeneratorRuntime",
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
	} }, p = c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
		title: s._(
			/*BTDS*/
			""
		),
		tsNavigationData: {
			surface: "unknown",
			viewName: "order-payment-methods"
		},
		okText: r("WAWebFbtCommon")("OK"),
		onOK: o("WAWebModalManager").closeModalManager,
		children: c.jsx("div", { children: o("WAWebUserPrefsCustomPaymentMethods").isPIXValid() ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) })
	}), _ = (function() {
		var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled() && o("WAWebPaymentsUserActionLogging").logAddOrUpdatePixEntryPointEvent({
				actionTarget: o("WAWebUserPrefsCustomPaymentMethods").getPIX() ? o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.EDIT_BUTTON : o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.ADD_BUTTON,
				paymentsEventId: yield o("WAWebSyncdMdSyncFieldstatMeta").MdSyncFieldStatsMeta.getMdSessionId(),
				previousScreenName: "orders_home",
				referral: "orders_home",
				screen: "custom_payment_method_settings"
			}), o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled() ? o("WAWebPixPaymentRequestFeature").isPixPaymentRequestEnabled() ? o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebPaymentOnboardingFlowLoadable").PaymentOnboardingFlowLoadable, {
				previousScreen: "orders_home",
				referral: "orders_home"
			}), { transition: "modal-flow" }) : o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebBizPaymentsBrazilAddPixModal.react").WAWebBizPaymentsBrazilAddPixModal, {
				previousScreen: "orders_home",
				referral: "orders_home"
			})) : o("WAWebModalManager").ModalManager.open(p);
		});
		return function() {
			return e.apply(this, arguments);
		};
	})();
	function f() {
		if (o("WAWebUserPrefsCustomPaymentMethods").isPIXValid()) {
			var e, t, n;
			return o("WAWebBrazilPixKeyFormattingUtils").getFormattedPixKey((e = (t = o("WAWebUserPrefsCustomPaymentMethods").getPIX()) == null ? void 0 : t.key) != null ? e : "", (n = o("WAWebUserPrefsCustomPaymentMethods").getPIX()) == null ? void 0 : n.key_type);
		}
		return o("WAWebBizFrontendGatingUtils").isPixOnWebEnabled() ? null : s._(
			/*BTDS*/
			""
		);
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g() {
		"use no forget";
		var t = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
		return o("useWAWebListener").useListener(o("WAWebCustomPaymentMethods").CustomPaymentMethods, o("WAWebCustomPaymentMethods").CUSTOM_PAYMENT_METHODS_CHANGE_EVENT, t), o("WAWebBizFrontendGatingUtils").isCustomPaymentMethodsSyncEnabled() ? c.jsxs(r("WAWebDrawerSection.react"), {
			className: "x1280gxy x120ee7l x1q0q8m5",
			animation: !1,
			children: [c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.infoRow, o("WDSPaddings.stylex").wdsPaddings.paddingHor16, d.paddingBlock10), { children: s._(
				/*BTDS*/
				""
			) })), c.jsxs(o("WAWebDrawerButton.react").DrawerButtonSimple, {
				icon: c.jsx(r("WAWebRoundShape.react"), {
					disabled: !0,
					children: o("WAWebUserPrefsCustomPaymentMethods").isPIXValid() ? c.jsx(o("WAWebPixLogoIcon.react").PixLogoIcon, {
						height: 48,
						width: 48
					}) : c.jsx(o("WAWebPlusIcon.react").PlusIcon, {})
				}),
				testid: "order-payment-details",
				color: "disabled",
				onClick: _,
				children: [c.jsx(o("WAWebText.react").WAWebTextLarge, {
					color: "secondaryLighter",
					children: o("WAWebUserPrefsCustomPaymentMethods").isPIXValid() ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					)
				}), c.jsx(o("WAWebText.react").WAWebTextSmall, {
					color: "secondaryLighter",
					children: f()
				})]
			})]
		}) : null;
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
