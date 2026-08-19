__d("WAWebTakePhotoMenuItem.react", [
	"fbt",
	"WAWebDropdownItem.react",
	"WAWebEditCaptureFlowLoadable",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebProfileCropTool.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(10), n = e.action, r = e.disabled, a = e.editCropShape, i = e.icon, l = e.modalTheme, c = e.onImageTake, d;
		t[0] !== n || t[1] !== a || t[2] !== l || t[3] !== c ? (d = function(t) {
			n != null && n(t), o("WAWebModalManager").ModalManager.openAlert(u.jsx(o("WAWebEditCaptureFlowLoadable").EditCaptureFlowLoadable, {
				onFinished: c,
				editCropShape: a || o("WAWebProfileCropTool.react").CropShapeType.CIRCLE,
				modalTheme: l || o("WAWebModal.react").ModalTheme.Box
			}));
		}, t[0] = n, t[1] = a, t[2] = l, t[3] = c, t[4] = d) : d = t[4];
		var m = d, p;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), t[5] = p) : p = t[5];
		var _;
		return t[6] !== r || t[7] !== m || t[8] !== i ? (_ = u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
			action: m,
			testid: "mi-take-photo",
			disabled: r,
			icon: i,
			children: p
		}), t[6] = r, t[7] = m, t[8] = i, t[9] = _) : _ = t[9], _;
	}
	l.default = c;
}), 226);
