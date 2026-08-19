__d("WAWebPaymentOnboardingFlow.react", [
	"$InternalEnum",
	"WAWebBizPaymentsBrazilAddPixModalRefreshed.react",
	"WAWebUserPrefsCustomPaymentMethods",
	"react",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = n("$InternalEnum").Mirrored(["AddEditCredential"]);
	function c(e) {
		var t = e.onSuccess, n = e.previousScreen, a = e.referral, i = o("WAWebUserPrefsCustomPaymentMethods").getPIX(), l = o("useWAWebFlow").useFlow(u.AddEditCredential), c = l[0], d = l[1];
		if (d.step == null) return null;
		var m;
		switch (d.step) {
			case u.AddEditCredential: {
				m = s.jsx(r("WAWebBizPaymentsBrazilAddPixModalRefreshed.react"), {
					onClose: function() {
						d.end();
					},
					pixData: i,
					previousScreen: n,
					referral: a,
					onSuccess: function() {
						d.end(), t == null || t();
					}
				});
				break;
			}
		}
		return s.jsx(c, {
			flow: d,
			children: m
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
