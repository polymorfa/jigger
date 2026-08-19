__d("WAWebPaymentOnboardingFlow.react", [
	"$InternalEnum",
	"WAWebBizPaymentsBrazilAddPixModalRefreshed.react",
	"WAWebUserPrefsCustomPaymentMethods",
	"react",
	"react-compiler-runtime",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = n("$InternalEnum").Mirrored(["AddEditCredential"]);
	function c(e) {
		var t = o("react-compiler-runtime").c(15), n = e.onSuccess, a = e.previousScreen, i = e.referral, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = o("WAWebUserPrefsCustomPaymentMethods").getPIX(), t[0] = l) : l = t[0];
		var c = l, d = o("useWAWebFlow").useFlow(u.AddEditCredential), m = d[0], p = d[1];
		if (p.step == null) return null;
		var _;
		switch (p.step) {
			case u.AddEditCredential: {
				var f;
				t[1] !== p ? (f = function() {
					p.end();
				}, t[1] = p, t[2] = f) : f = t[2];
				var g;
				t[3] !== p || t[4] !== n ? (g = function() {
					p.end(), n == null || n();
				}, t[3] = p, t[4] = n, t[5] = g) : g = t[5];
				var h;
				t[6] !== a || t[7] !== i || t[8] !== f || t[9] !== g ? (h = s.jsx(r("WAWebBizPaymentsBrazilAddPixModalRefreshed.react"), {
					onClose: f,
					pixData: c,
					previousScreen: a,
					referral: i,
					onSuccess: g
				}), t[6] = a, t[7] = i, t[8] = f, t[9] = g, t[10] = h) : h = t[10], _ = h;
			}
		}
		var y;
		return t[11] !== m || t[12] !== _ || t[13] !== p ? (y = s.jsx(m, {
			flow: p,
			children: _
		}), t[11] = m, t[12] = _, t[13] = p, t[14] = y) : y = t[14], y;
	}
	l.default = c;
}), 98);
