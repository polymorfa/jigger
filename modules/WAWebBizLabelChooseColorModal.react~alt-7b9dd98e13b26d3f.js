__d("WAWebBizLabelChooseColorModal.react", [
	"fbt",
	"$InternalEnum",
	"WAWebBizLabelEditingAction",
	"WAWebFlex.react",
	"WAWebLabelCollection",
	"WAWebLabelColorPanel.react",
	"WAWebListUtils",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebSavePopup.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWamEnumLabelOperations",
	"WAWebWamEnumUpdateEntryPoint",
	"WAWebWamSmbListEventReporter",
	"chunkArray",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState, d = n("$InternalEnum").Mirrored(["SaveFailed"]), m = function(t) {
		switch (t) {
			case d.SaveFailed: return s._(
				/*BTDS*/
				""
			);
		}
	}, p = { surface: "smb-label-edit-color" };
	function _(e) {
		var t, n = e.label, a = c((t = n == null ? void 0 : n.colorIndex) != null ? t : o("WAWebLabelCollection").LabelCollection.getNextAvailableColor()), i = a[0], l = a[1], _ = function(t) {
			l(t);
		}, f = async function() {
			var e = i !== n.colorIndex;
			await o("WAWebBizLabelEditingAction").labelEditAction(n.id, n.name, n.predefinedId, i), e && o("WAWebWamSmbListEventReporter").logSmbListEvent({
				labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.UPDATED_COLOR,
				updateEntryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_DETAIL_VIEW,
				listId: Number(n.id)
			});
		}, g = function() {
			o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) }));
		}, h = function() {
			var e = d.SaveFailed;
			o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: m(e) }));
		}, y = r("chunkArray")(o("WAWebListUtils").getSelectableLabelColors(), 5);
		return u.jsx(r("WAWebSavePopup.react"), {
			title: s._(
				/*BTDS*/
				""
			),
			doSave: f,
			afterSave: g,
			onError: h,
			isValid: !0,
			modalConfig: {
				type: o("WAWebModal.react").ModalTheme.LabelChooseColor,
				onCancel: o("WAWebModalManager").closeModalManager
			},
			tsNavigationData: p,
			children: u.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				children: u.jsx(o("WAWebLabelColorPanel.react").LabelColorPicker, {
					colors: y,
					selectedIndex: i,
					onSelect: _
				})
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
