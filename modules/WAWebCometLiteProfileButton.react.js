__d("WAWebCometLiteProfileButton.react", [
	"fbt",
	"WAWebCometLiteContactData",
	"WAWebDetailImage.react",
	"WAWebNoop",
	"WDSProfilePhoto.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = 40;
	function d() {
		var e = o("react-compiler-runtime").c(3), t;
		if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
			var n = o("WAWebCometLiteContactData").getMeUserOrNull();
			t = n != null ? u.jsx(o("WAWebDetailImage.react").DetailImage, {
				id: n,
				size: c
			}) : u.jsx(r("WDSProfilePhoto.react"), {
				type: "person",
				name: s._(
					/*BTDS*/
					""
				),
				color: "green",
				size: "medium"
			}), e[0] = t;
		} else t = e[0];
		var a = t, i;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (i = { className: "xjyslct xexx8yu xyri2b x18d9i69 x1c1uobl x1ejq31n x18oe1m7 x1sy0etr xstzfhl xjbqb8w x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1ypdohk" }, e[1] = i) : i = e[1];
		var l;
		return e[2] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsx("button", babelHelpers.extends({ type: "button" }, i, {
			onClick: r("WAWebNoop"),
			"data-testid": "wa-web-lite-profile-button",
			"aria-label": s._(
				/*BTDS*/
				""
			),
			children: a
		})), e[2] = l) : l = e[2], l;
	}
	l.default = d;
}), 226);
