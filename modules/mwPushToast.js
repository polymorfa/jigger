__d("mwPushToast", [
	"ix",
	"BaseToasterStateManager",
	"FDSIcon.react",
	"MWXToast.react",
	"fbicon",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = r("BaseToasterStateManager").getInstance();
	function d(e, t) {
		var n = e.announcementType, o = e.assertive, a = e.body, i = e.icon, l = e.impressionLoggingRef, s = e.onDismiss, d = e.startAddOn, m = d === void 0 ? null : d, p = e.supressCloseButton, _ = p === void 0 ? !1 : p, f = e.testid, g = e.title;
		t === void 0 && (t = 2750);
		var h = c.push(u.jsx(r("MWXToast.react"), {
			announcementType: n,
			assertive: o,
			body: a,
			icon: i,
			impressionLoggingRef: l,
			onDismiss: function() {
				c.expire(h), s == null || s();
			},
			startAddOn: m,
			supressCloseButton: _,
			testid: void 0,
			title: g
		}), t);
		return h;
	}
	function m(e, t) {
		var n = e.body, a = e.onDismiss, i = e.title;
		t === void 0 && (t = 2750);
		var l = u.jsx(r("FDSIcon.react"), {
			color: "warning",
			icon: o("fbicon")._(s("502062"), 20)
		});
		return d({
			announcementType: "warning",
			assertive: !0,
			body: n,
			icon: { comet: l },
			onDismiss: a,
			title: i
		}, t);
	}
	l.mwPushToast = d, l.mwPushErrorToast = m;
}), 98);
