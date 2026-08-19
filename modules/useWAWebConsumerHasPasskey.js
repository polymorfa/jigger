__d("useWAWebConsumerHasPasskey", [
	"WAWebMexPaymentsPasskeyHasCredentialJob",
	"react-compiler-runtime",
	"useWAWebAsync"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t, n = o("react-compiler-runtime").c(5), a = e === void 0 ? !0 : e, i;
		n[0] !== a ? (i = [a], n[0] = a, n[1] = i) : i = n[1];
		var l = r("useWAWebAsync")(s, i, a), u = a && (t = l.value) != null ? t : !1, c = a && l.loading, d;
		return n[2] !== u || n[3] !== c ? (d = {
			hasPasskey: u,
			isLoading: c
		}, n[2] = u, n[3] = c, n[4] = d) : d = n[4], d;
	}
	function s() {
		return o("WAWebMexPaymentsPasskeyHasCredentialJob").mexPaymentsPasskeyHasCredential();
	}
	l.default = e;
}), 98);
