__d("WAWebTakePhotoMenuItem.react", [
	"fbt",
	"WAWebDropdownItem.react",
	"WAWebEditCaptureFlowLoadable",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebProfileCropTool.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.action, n = e.disabled, r = e.editCropShape, a = e.icon, i = e.modalTheme, l = e.onImageTake, c = function(n) {
			t != null && t(n), o("WAWebModalManager").ModalManager.openAlert(u.jsx(o("WAWebEditCaptureFlowLoadable").EditCaptureFlowLoadable, {
				onFinished: l,
				editCropShape: r || o("WAWebProfileCropTool.react").CropShapeType.CIRCLE,
				modalTheme: i || o("WAWebModal.react").ModalTheme.Box
			}));
		};
		return u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
			action: c,
			testid: "mi-take-photo",
			disabled: n,
			icon: a,
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
