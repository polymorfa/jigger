__d("WAWebUseBusinessProfile.react", [
	"WAWebBusinessProfileCollection",
	"WAWebContactCollection",
	"react",
	"useWAWebModelValues",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useState;
	function d(e, t) {
		var n = c(function() {
			return e ? o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(e) : null;
		}), a = n[0], i = n[1];
		a && e && !a.id.equals(e) && i(o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(e));
		var l = r("useWAWebUnmountSignal")();
		return u(function() {
			var t = async function() {
				if (!(!e || !e.isUserNotPSA() || e.isFbidBot())) {
					var t = o("WAWebContactCollection").ContactCollection.get(e);
					if (!(t && !t.isBusiness && !t.isEnterprise)) {
						var n = await o("WAWebBusinessProfileCollection").BusinessProfileCollection.find(e);
						l.aborted || i(n);
					}
				}
			};
			t();
		}, [e]), o("useWAWebModelValues").useOptionalModelValues(a, t != null ? t : []);
	}
	l.useBusinessProfile = d;
}), 98);
