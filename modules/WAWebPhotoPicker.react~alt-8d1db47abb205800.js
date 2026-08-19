__d("WAWebPhotoPicker.react", [
	"WAWebABProps",
	"WAWebLegacyPhotoPickerImpl.react",
	"WAWebWDSPhotoPickerImpl.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		return o("WAWebABProps").getABPropConfigValue("wds_web_profile_photo") ? s.jsx(r("WAWebWDSPhotoPickerImpl.react"), babelHelpers.extends({}, e)) : s.jsx(r("WAWebLegacyPhotoPickerImpl.react"), babelHelpers.extends({}, e));
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
