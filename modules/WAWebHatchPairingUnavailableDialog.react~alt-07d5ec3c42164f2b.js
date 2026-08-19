__d("WAWebHatchPairingUnavailableDialog.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { title: {
		marginTop: "xw7yly9",
		marginBottom: "x1yztbdb",
		$$css: !0
	} };
	function d() {
		return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: o("WAWebModalManager").closeModalManager,
			children: [u.jsx(r("WDSText.react"), {
				type: "Headline2",
				colorName: "contentDefault",
				textAlign: "center",
				xstyle: c.title,
				children: s._(
					/*BTDS*/
					""
				)
			}), u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				textAlign: "center",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
