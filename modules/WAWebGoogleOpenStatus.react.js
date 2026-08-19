__d("WAWebGoogleOpenStatus.react", [
	"fbt",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(5), n = e.openNow, a = n ? "persistentAlwaysBranded" : "secondaryNegative", i;
		t[0] !== n ? (i = n ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[0] = n, t[1] = i) : i = t[1];
		var l;
		return t[2] !== a || t[3] !== i ? (l = u.jsx(r("WDSText.react"), {
			colorName: a,
			dir: "auto",
			testid: "biz_google_profile_open_status",
			type: "Body1",
			children: i
		}), t[2] = a, t[3] = i, t[4] = l) : l = t[4], l;
	}
	l.default = c;
}), 226);
