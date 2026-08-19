__d("MAWEndToEndEncryptionKeysIdentityKeyTextArea.react", [
	"MWXCard.react",
	"MWXText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.identityKey;
		return s.jsx(r("MWXCard.react"), {
			background: "base-wash",
			children: s.jsx("div", {
				className: "x1t2155t xyamay9 xv54qhq x1l90r2v xf7dkkf",
				children: s.jsx(r("MWXText.react"), {
					color: "secondary",
					numberOfLines: 2,
					type: "body3",
					children: t
				})
			})
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
