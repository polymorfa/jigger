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
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(13), n = e.orderStatus, r;
		t[0] !== n ? (r = n === void 0 ? o("WAWebOrderStatus").getDefaultOrderStatus() : n, t[0] = n, t[1] = r) : r = t[1];
		var a = r, i;
		t[2] !== a ? (i = p(a), t[2] = a, t[3] = i) : i = t[3];
		var l;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (l = [
			d.container,
			o("WDSPaddings.stylex").wdsPaddings.paddingTop8,
			c.paddingBottom7,
			o("WDSPaddings.stylex").wdsPaddings.paddingStart8,
			o("WDSPaddings.stylex").wdsPaddings.paddingEnd8
		], t[4] = l) : l = t[4];
		var s;
		t[5] !== a ? (s = _(a), t[5] = a, t[6] = s) : s = t[6];
		var f;
		t[7] !== a ? (f = m(a), t[7] = a, t[8] = f) : f = t[8];
		var g;
		return t[9] !== i || t[10] !== s || t[11] !== f ? (g = u.jsxs(o("WAWebText.react").WAWebTextSmall, {
			color: i,
			xstyle: l,
			children: [s, f]
		}), t[9] = i, t[10] = s, t[11] = f, t[12] = g) : g = t[12], g;
	}
	l.default = f;
}), 226);
