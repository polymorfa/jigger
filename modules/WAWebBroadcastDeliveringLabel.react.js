__d("WAWebBroadcastDeliveringLabel.react", [
	"WAWebBroadcastDeliveringLabelView.react",
	"react",
	"react-compiler-runtime",
	"useWAWebBizBroadcastIsDelivering"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(3), n = e.light, a = e.msg, i = r("useWAWebBizBroadcastIsDelivering")(a), l;
		return t[0] !== i || t[1] !== n ? (l = s.jsx(r("WAWebBroadcastDeliveringLabelView.react"), {
			isDelivering: i,
			light: n
		}), t[0] = i, t[1] = n, t[2] = l) : l = t[2], l;
	}
	l.default = u;
}), 98);
