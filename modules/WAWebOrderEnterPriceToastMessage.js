__d("WAWebOrderEnterPriceToastMessage", [
	"fbt",
	"WAWebToast.react",
	"WAWebToastManager",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.length;
		return t === 0 ? "" : t === 1 ? s._(
			/*BTDS*/
			"",
			[s._param("first-product-name", e[0])]
		) : t === 2 ? s._(
			/*BTDS*/
			"",
			[s._param("first-product-name", e[0]), s._param("second-product-name", e[1])]
		) : s._(
			/*BTDS*/
			"",
			[
				s._plural(t - 2, "other-items"),
				s._param("first-product-name", e[0]),
				s._param("second-product-name", e[1])
			]
		);
	}
	function d(e, t) {
		var n = e.reduce(function(e, n) {
			var r, o = (r = n.price) != null ? r : t[n.id];
			return Number.isInteger(o) || e.push(n.name || ""), e;
		}, []), r = c(n);
		r && o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
			duration: 1e4,
			msg: r,
			action: {
				actionText: s._(
					/*BTDS*/
					""
				),
				dismiss: !0,
				theme: "success"
			}
		}));
	}
	l.getErrorMsgFromProducts = c, l.notifyIfAnyProductMissesPrice = d;
}), 226);
