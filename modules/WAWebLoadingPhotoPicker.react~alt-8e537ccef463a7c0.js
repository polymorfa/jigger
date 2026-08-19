__d("WAWebLoadingPhotoPicker.react", [
	"VultureJSDeadComponent.react",
	"WAWebAvatarSpinner.react",
	"WAWebPhotoPickerStyle",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.error, n = e.svgName, a = n != null ? s.jsx("div", { className: o("WAWebPhotoPickerStyle").styles.svgSize }) : void 0;
		return s.jsx("div", {
			className: o("WAWebPhotoPickerStyle").styles.container,
			children: s.jsxs("div", {
				className: o("WAWebPhotoPickerStyle").styles.body,
				dir: "ltr",
				children: [s.jsx("div", {
					className: o("WAWebPhotoPickerStyle").styles.imageContainer,
					children: a
				}), t ? s.jsx(r("VultureJSDeadComponent.react"), { name: "LazyLoadRetry" }) : s.jsx(r("WAWebAvatarSpinner.react"), {})]
			})
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
