__d("WAWebPhotoPicker.react", [
	"WAWebABProps",
	"WAWebLegacyPhotoPickerImpl.react",
	"WAWebWDSPhotoPickerImpl.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(4);
		if (o("WAWebABProps").getABPropConfigValue("wds_web_profile_photo")) {
			var n;
			return t[0] !== e ? (n = s.jsx(r("WAWebWDSPhotoPickerImpl.react"), babelHelpers.extends({}, e)), t[0] = e, t[1] = n) : n = t[1], n;
		}
		var a;
		return t[2] !== e ? (a = s.jsx(r("WAWebLegacyPhotoPickerImpl.react"), babelHelpers.extends({}, e)), t[2] = e, t[3] = a) : a = t[3], a;
	}
	l.default = u;
}), 98);
