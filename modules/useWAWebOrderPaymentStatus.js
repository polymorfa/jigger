__d("useWAWebOrderPaymentStatus", [
	"WAWebInteractiveMessagesNativeFlowName",
	"WAWebOrderPaymentStatus",
	"WAWebOrderStatus",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useState;
	function d(e, t, n) {
		var a = o("react-compiler-runtime").c(9), i = n === void 0 ? !1 : n, l;
		a[0] !== e || a[1] !== i || a[2] !== t ? (l = function() {
			return e == null || t == null ? null : o("WAWebOrderStatus").findOrderPaymentStatus(e, t, i);
		}, a[0] = e, a[1] = i, a[2] = t, a[3] = l) : l = a[3];
		var s = c(l), d = s[0], m = s[1], p, _;
		return a[4] !== e || a[5] !== i || a[6] !== t ? (p = function() {
			if (!(e == null || t == null)) {
				var n = function() {
					var n = o("WAWebOrderStatus").findOrderPaymentStatus(e, t, i);
					m(n);
				}, a = function(a) {
					if (a.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS) {
						var e;
						((e = o("WAWebOrderStatus").getOrderStatusInfo(a)) == null ? void 0 : e.refId) === t && n();
					} else if (a.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS) {
						var i;
						((i = o("WAWebOrderPaymentStatus").getOrderPaymentStatusInfoFromNativeFlow(a)) == null ? void 0 : i.refId) === t && n();
					}
				}, l = e.msgs;
				return l.on("add", a), l.on("change", n), l.on("remove", n), n(), (function() {
					l.off("add", a), l.off("change", n), l.off("remove", n);
				});
			}
		}, _ = [
			e,
			t,
			i
		], a[4] = e, a[5] = i, a[6] = t, a[7] = p, a[8] = _) : (p = a[7], _ = a[8]), u(p, _), d;
	}
	l.useOrderPaymentStatus = d;
}), 98);
