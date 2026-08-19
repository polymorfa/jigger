__d("WAWebLoadingPhotoPicker.react", [
	"VultureJSDeadComponent.react",
	"WAWebAvatarSpinner.react",
	"WAWebPhotoPickerStyle",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(9), n = e.error, a = e.svgName, i;
		t[0] !== a ? (i = a != null ? s.jsx("div", { className: o("WAWebPhotoPickerStyle").styles.svgSize }) : void 0, t[0] = a, t[1] = i) : i = t[1];
		var l = i, u;
		t[2] !== l ? (u = s.jsx("div", {
			className: o("WAWebPhotoPickerStyle").styles.imageContainer,
			children: l
		}), t[2] = l, t[3] = u) : u = t[3];
		var c;
		t[4] !== n ? (c = n ? s.jsx(r("VultureJSDeadComponent.react"), { name: "LazyLoadRetry" }) : s.jsx(r("WAWebAvatarSpinner.react"), {}), t[4] = n, t[5] = c) : c = t[5];
		var d;
		return t[6] !== u || t[7] !== c ? (d = s.jsx("div", {
			className: o("WAWebPhotoPickerStyle").styles.container,
			children: s.jsxs("div", {
				className: o("WAWebPhotoPickerStyle").styles.body,
				dir: "ltr",
				children: [u, c]
			})
		}), t[6] = u, t[7] = c, t[8] = d) : d = t[8], d;
	}
	l.default = u;
}), 98);
