__d("WAWebCometLiteProfileButton.react", [
	"fbt",
	"WAWebCometLiteContactData",
	"WAWebDetailImage.react",
	"WAWebNoop",
	"WDSProfilePhoto.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = 40;
	function d() {
		var e = o("WAWebCometLiteContactData").getMeUserOrNull(), t = e != null ? u.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: e,
			size: c
		}) : u.jsx(r("WDSProfilePhoto.react"), {
			type: "person",
			name: s._(
				/*BTDS*/
				""
			),
			color: "green",
			size: "medium"
		});
		return u.jsx("button", {
			type: "button",
			className: "xjyslct xexx8yu xyri2b x18d9i69 x1c1uobl x1ejq31n x18oe1m7 x1sy0etr xstzfhl xjbqb8w x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1ypdohk",
			onClick: r("WAWebNoop"),
			"data-testid": "wa-web-lite-profile-button",
			"aria-label": s._(
				/*BTDS*/
				""
			),
			children: t
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
