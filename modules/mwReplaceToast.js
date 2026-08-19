__d("mwReplaceToast", [
	"BaseToasterStateManager",
	"MWXToast.react",
	"err",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = r("BaseToasterStateManager").getInstance();
	function c(e) {
		var t = e.body, n = e.icon, o = e.startAddOn, a = o === void 0 ? null : o, i = e.supressCloseButton, l = i === void 0 ? !1 : i, c = e.title, d = e.toastId;
		if (d == null) {
			r("err")("toastId or toasterStateManager is not provided");
			return;
		}
		u.replace(d, s.jsx(r("MWXToast.react"), {
			body: t,
			icon: n,
			onDismiss: function() {
				return u.expire(d);
			},
			startAddOn: a,
			supressCloseButton: l,
			title: c
		}));
	}
	l.mwReplaceToast = c;
}), 98);
