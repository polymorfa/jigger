__d("WAWebHatchApprovalIcon.react", [
	"fbt",
	"WAWebImg.react",
	"WDSIconIcGridView.react",
	"WDSProfilePhoto.react",
	"WDSVars.stylex",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = 1.5;
	function d(e) {
		var t = o("react-compiler-runtime").c(9), n = e.iconUrl, a = e.size, i = a === void 0 ? "small" : a, l = n != null && n !== "" ? n : null, d;
		t[0] !== l ? (d = l != null ? {
			surface: o("WDSVars.stylex").WDSVars["--WDS-persistent-always-white"],
			content: o("WDSVars.stylex").WDSVars["--WDS-content-default"]
		} : null, t[0] = l, t[1] = d) : d = t[1];
		var m;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (m = s._(
			/*BTDS*/
			""
		), t[2] = m) : m = t[2];
		var p;
		t[3] !== l ? (p = function(t) {
			var e = t.height, n = t.width;
			return l != null ? u.jsx(r("WAWebImg.react"), {
				alt: "",
				src: l,
				style: {
					height: Math.round(e * c),
					width: Math.round(n * c)
				}
			}) : u.jsx(r("WDSIconIcGridView.react"), {
				height: e,
				width: n
			});
		}, t[3] = l, t[4] = p) : p = t[4];
		var _;
		return t[5] !== i || t[6] !== d || t[7] !== p ? (_ = u.jsx(r("WDSProfilePhoto.react"), {
			customColor: d,
			isDecorative: !0,
			name: m,
			placeholderIcon: p,
			size: i,
			testid: "hatch_approval_icon",
			type: "thirdParty"
		}), t[5] = i, t[6] = d, t[7] = p, t[8] = _) : _ = t[8], _;
	}
	l.default = d;
}), 226);
