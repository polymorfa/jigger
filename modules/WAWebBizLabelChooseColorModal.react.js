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
	"asyncToGeneratorRuntime",
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
		var t = o("react-compiler-runtime").c(17), a = e.label, i;
		if (t[0] !== a.colorIndex) {
			var l;
			i = (l = a == null ? void 0 : a.colorIndex) != null ? l : o("WAWebLabelCollection").LabelCollection.getNextAvailableColor(), t[0] = a.colorIndex, t[1] = i;
		} else i = t[1];
		var d = c(i), m = d[0], _ = d[1], h;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (h = function(t) {
			_(t);
		}, t[2] = h) : h = t[2];
		var y = h, C;
		t[3] !== m || t[4] !== a.colorIndex || t[5] !== a.id || t[6] !== a.name || t[7] !== a.predefinedId ? (C = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = m !== a.colorIndex;
				yield o("WAWebBizLabelEditingAction").labelEditAction(a.id, a.name, a.predefinedId, m), e && o("WAWebWamSmbListEventReporter").logSmbListEvent({
					labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.UPDATED_COLOR,
					updateEntryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_DETAIL_VIEW,
					listId: Number(a.id)
				});
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), t[3] = m, t[4] = a.colorIndex, t[5] = a.id, t[6] = a.name, t[7] = a.predefinedId, t[8] = C) : C = t[8];
		var b = C, v = g, S = f, R;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (R = r("chunkArray")(o("WAWebListUtils").getSelectableLabelColors(), 5), t[9] = R) : R = t[9];
		var L = R, E;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (E = s._(
			/*BTDS*/
			""
		), t[10] = E) : E = t[10];
		var k;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (k = {
			type: o("WAWebModal.react").ModalTheme.LabelChooseColor,
			onCancel: o("WAWebModalManager").closeModalManager
		}, t[11] = k) : k = t[11];
		var I;
		t[12] !== m ? (I = u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			children: u.jsx(o("WAWebLabelColorPanel.react").LabelColorPicker, {
				colors: L,
				selectedIndex: m,
				onSelect: y
			})
		}), t[12] = m, t[13] = I) : I = t[13];
		var T;
		return t[14] !== b || t[15] !== I ? (T = u.jsx(r("WAWebSavePopup.react"), {
			title: E,
			doSave: b,
			afterSave: v,
			onError: S,
			isValid: !0,
			modalConfig: k,
			tsNavigationData: p,
			children: I
		}), t[14] = b, t[15] = I, t[16] = T) : T = t[16], T;
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
