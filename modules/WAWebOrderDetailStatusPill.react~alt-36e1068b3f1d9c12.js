__d("WAWebOrderDetailStatusPill.react", [
	"fbt",
	"WAWebAlertErrorIcon.react",
	"WAWebLocalShippingIcon.react",
	"WAWebOrderStatus",
	"WAWebStatusClockIcon.react",
	"WAWebText.react",
	"WDSIconIcCheckCircleFilled.react",
	"WDSIconWdsIcCurrencyRealFilled.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { paddingBottom7: {
		paddingBottom: "x1ykpatu",
		$$css: !0
	} }, d = {
		canceledIcon: {
			marginTop: "xs0t0u8",
			$$css: !0
		},
		container: {
			alignItems: "x6s0dn4",
			backgroundColor: "x4wrhlh",
			borderStartStartRadius: "x12ol6y4",
			borderStartEndRadius: "x180vkcf",
			borderEndEndRadius: "x1khw62d",
			borderEndStartRadius: "x709u02",
			display: "x3nfvp2",
			fontSize: "x1pg5gke",
			$$css: !0
		},
		iconCipherText: {
			marginTop: "xav9cv8",
			$$css: !0
		}
	};
	function m(e) {
		switch (e) {
			case o("WAWebOrderStatus").OrderStatus.Pending: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebOrderStatus").OrderStatus.Processing: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebOrderStatus").OrderStatus.PartiallyShipped: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebOrderStatus").OrderStatus.Shipped: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebOrderStatus").OrderStatus.Canceled: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebOrderStatus").OrderStatus.Complete: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebOrderStatus").OrderStatus.PreparingToShip: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebOrderStatus").OrderStatus.PaymentRequested: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebOrderStatus").OrderStatus.Delivered: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebOrderStatus").OrderStatus.Confirmed: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebOrderStatus").OrderStatus.Delayed: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebOrderStatus").OrderStatus.OutForDelivery: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebOrderStatus").OrderStatus.Failed: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebOrderStatus").OrderStatus.Refunded: return s._(
				/*BTDS*/
				""
			);
		}
	}
	function p(e) {
		switch (e) {
			case o("WAWebOrderStatus").OrderStatus.Pending:
			case o("WAWebOrderStatus").OrderStatus.Processing:
			case o("WAWebOrderStatus").OrderStatus.PartiallyShipped:
			case o("WAWebOrderStatus").OrderStatus.Shipped:
			case o("WAWebOrderStatus").OrderStatus.PreparingToShip:
			case o("WAWebOrderStatus").OrderStatus.PaymentRequested:
			case o("WAWebOrderStatus").OrderStatus.OutForDelivery: return;
			case o("WAWebOrderStatus").OrderStatus.Canceled:
			case o("WAWebOrderStatus").OrderStatus.Delayed:
			case o("WAWebOrderStatus").OrderStatus.Failed: return "critical";
			case o("WAWebOrderStatus").OrderStatus.Complete:
			case o("WAWebOrderStatus").OrderStatus.Confirmed:
			case o("WAWebOrderStatus").OrderStatus.Delivered:
			case o("WAWebOrderStatus").OrderStatus.Refunded: return "success";
		}
	}
	function _(e) {
		switch (e) {
			case o("WAWebOrderStatus").OrderStatus.Pending:
			case o("WAWebOrderStatus").OrderStatus.Processing:
			case o("WAWebOrderStatus").OrderStatus.PreparingToShip:
			case o("WAWebOrderStatus").OrderStatus.Delayed: return u.jsx(o("WAWebStatusClockIcon.react").StatusClockIcon, {
				width: 12,
				displayInline: !0,
				xstyle: [o("WDSMargins.stylex").wdsMargins.marginEnd4, d.iconCipherText]
			});
			case o("WAWebOrderStatus").OrderStatus.PaymentRequested: return u.jsx(r("WDSIconWdsIcCurrencyRealFilled.react"), {
				width: 18,
				displayInline: !0,
				xstyle: [o("WDSMargins.stylex").wdsMargins.marginEnd4, d.iconCipherText]
			});
			case o("WAWebOrderStatus").OrderStatus.PartiallyShipped:
			case o("WAWebOrderStatus").OrderStatus.Shipped:
			case o("WAWebOrderStatus").OrderStatus.OutForDelivery: return u.jsx(o("WAWebLocalShippingIcon.react").LocalShippingIcon, {
				width: 12,
				displayInline: !0,
				xstyle: [o("WDSMargins.stylex").wdsMargins.marginEnd4, d.iconCipherText]
			});
			case o("WAWebOrderStatus").OrderStatus.Canceled:
			case o("WAWebOrderStatus").OrderStatus.Failed: return u.jsx(o("WAWebAlertErrorIcon.react").AlertErrorIcon, {
				width: 12,
				displayInline: !0,
				xstyle: [o("WDSMargins.stylex").wdsMargins.marginEnd4, d.canceledIcon]
			});
			case o("WAWebOrderStatus").OrderStatus.Complete:
			case o("WAWebOrderStatus").OrderStatus.Delivered:
			case o("WAWebOrderStatus").OrderStatus.Confirmed:
			case o("WAWebOrderStatus").OrderStatus.Refunded: return u.jsx(r("WDSIconIcCheckCircleFilled.react"), {
				width: 12,
				displayInline: !0,
				colorName: "accent",
				xstyle: [o("WDSMargins.stylex").wdsMargins.marginEnd4, d.iconCipherText]
			});
		}
	}
	function f(e) {
		var t = e.orderStatus, n = t === void 0 ? o("WAWebOrderStatus").getDefaultOrderStatus() : t;
		return u.jsxs(o("WAWebText.react").WAWebTextSmall, {
			color: p(n),
			xstyle: [
				d.container,
				o("WDSPaddings.stylex").wdsPaddings.paddingTop8,
				c.paddingBottom7,
				o("WDSPaddings.stylex").wdsPaddings.paddingStart8,
				o("WDSPaddings.stylex").wdsPaddings.paddingEnd8
			],
			children: [_(n), m(n)]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
