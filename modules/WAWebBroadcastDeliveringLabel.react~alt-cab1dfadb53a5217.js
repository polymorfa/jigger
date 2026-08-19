__d("WAWebBroadcastDeliveringLabel.react", [
	"WAWebBroadcastDeliveringLabelView.react",
	"react",
	"useWAWebBizBroadcastIsDelivering"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.light, n = e.msg, o = r("useWAWebBizBroadcastIsDelivering")(n);
		return s.jsx(r("WAWebBroadcastDeliveringLabelView.react"), {
			isDelivering: o,
			light: t
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
