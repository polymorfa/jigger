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
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(17), n = e.label, a;
		if (t[0] !== n.colorIndex) {
			var i;
			a = (i = n == null ? void 0 : n.colorIndex) != null ? i : o("WAWebLabelCollection").LabelCollection.getNextAvailableColor(), t[0] = n.colorIndex, t[1] = a;
		} else a = t[1];
		var l = c(a), d = l[0], m = l[1], _;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (_ = function(t) {
			m(t);
		}, t[2] = _) : _ = t[2];
		var h = _, y;
		t[3] !== d || t[4] !== n.colorIndex || t[5] !== n.id || t[6] !== n.name || t[7] !== n.predefinedId ? (y = async function() {
			var e = d !== n.colorIndex;
			await o("WAWebBizLabelEditingAction").labelEditAction(n.id, n.name, n.predefinedId, d), e && o("WAWebWamSmbListEventReporter").logSmbListEvent({
				labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.UPDATED_COLOR,
				updateEntryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_DETAIL_VIEW,
				listId: Number(n.id)
			});
		}, t[3] = d, t[4] = n.colorIndex, t[5] = n.id, t[6] = n.name, t[7] = n.predefinedId, t[8] = y) : y = t[8];
		var C = y, b = g, v = f, S;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (S = r("chunkArray")(o("WAWebListUtils").getSelectableLabelColors(), 5), t[9] = S) : S = t[9];
		var R = S, L;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (L = s._(
			/*BTDS*/
			""
		), t[10] = L) : L = t[10];
		var E;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (E = {
			type: o("WAWebModal.react").ModalTheme.LabelChooseColor,
			onCancel: o("WAWebModalManager").closeModalManager
		}, t[11] = E) : E = t[11];
		var k;
		t[12] !== d ? (k = u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			children: u.jsx(o("WAWebLabelColorPanel.react").LabelColorPicker, {
				colors: R,
				selectedIndex: d,
				onSelect: h
			})
		}), t[12] = d, t[13] = k) : k = t[13];
		var I;
		return t[14] !== C || t[15] !== k ? (I = u.jsx(r("WAWebSavePopup.react"), {
			title: L,
			doSave: C,
			afterSave: b,
			onError: v,
			isValid: !0,
			modalConfig: E,
			tsNavigationData: p,
			children: k
		}), t[14] = C, t[15] = k, t[16] = I) : I = t[16], I;
	}
	function f() {
		var e = d.SaveFailed;
		o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: m(e) }));
	}
	function g() {
		o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) }));
	}
	l.default = _;
}), 226);
