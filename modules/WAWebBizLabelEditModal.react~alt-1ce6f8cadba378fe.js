__d("WAWebBizLabelEditModal.react", [
	"fbt",
	"$InternalEnum",
	"WAWebActionToast.react",
	"WAWebBizLabelEditingAction",
	"WAWebFlex.react",
	"WAWebL10N",
	"WAWebLabelCollection",
	"WAWebLabelColorPanel.react",
	"WAWebLabelConstants",
	"WAWebLabels.react",
	"WAWebListUtils",
	"WAWebListsGatingUtils",
	"WAWebListsLogging",
	"WAWebMobilePlatforms",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebRichTextField.react",
	"WAWebSavePopup.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUnstyledButton.react",
	"WAWebWamEnumLabelOperations",
	"WAWebWamEnumLabelTargets",
	"WAWebWamEnumListAction",
	"WAWebWamEnumUpdateEntryPoint",
	"WAWebWamLabelEventReporter",
	"WAWebWamSmbListEventReporter",
	"WDSPaddings.stylex",
	"chunkArray",
	"nullthrows",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useRef, p = d.useState, _ = n("$InternalEnum").Mirrored([
		"NameEmpty",
		"NameAlreadyExists",
		"SaveFailed"
	]), f = function(t) {
		if (o("WAWebListsGatingUtils").isListsEnabled()) switch (t) {
			case _.NameEmpty: return s._(
				/*BTDS*/
				""
			);
			case _.NameAlreadyExists: return s._(
				/*BTDS*/
				""
			);
			case _.SaveFailed: return s._(
				/*BTDS*/
				""
			);
		}
		else switch (t) {
			case _.NameEmpty: return s._(
				/*BTDS*/
				""
			);
			case _.NameAlreadyExists: return s._(
				/*BTDS*/
				""
			);
			case _.SaveFailed: return s._(
				/*BTDS*/
				""
			);
		}
	};
	function g(t) {
		var n, a, i = o("WAWebListsGatingUtils").isListsEnabled(), l = t.label, u = p((n = l == null ? void 0 : l.name) != null ? n : ""), d = u[0], g = u[1], h = p(null), y = h[0], C = h[1], b = p(o("WAWebMobilePlatforms").isSMB() ? (a = l == null ? void 0 : l.colorIndex) != null ? a : o("WAWebLabelCollection").LabelCollection.getNextAvailableColor() : null), v = b[0], S = b[1], R = p(!1), L = R[0], E = R[1], k = m(), I = r("WAWebL10N").getFullLocale(), T = function(t) {
			var e = t.trim().toLocaleLowerCase(I);
			return e === "" ? _.NameEmpty : (l == null ? void 0 : l.name.toLocaleLowerCase(I)) !== e && o("WAWebLabelCollection").LabelCollection.some(function(t) {
				return t.name.toLocaleLowerCase(I) === e;
			}) ? _.NameAlreadyExists : null;
		}, D = function(t) {
			var e = T(t);
			g(t), C(e ? f(e) : null);
		}, x = function() {
			E(!L);
		}, $ = function(t) {
			S(t), E(!1);
		}, P = async function() {
			var e;
			if (l) {
				e = Number(l.id);
				var t = d !== l.name, n = o("WAWebLabelConstants").mapLabelNameToPredefinedId(d);
				await o("WAWebBizLabelEditingAction").labelEditAction(l.id, d, n, v), t && i && (o("WAWebListsLogging").logListUpdate({
					listId: e,
					listAction: o("WAWebWamEnumListAction").LIST_ACTION.RENAME,
					entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_SETTINGS
				}), o("WAWebWamSmbListEventReporter").logSmbListEvent({
					labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.RENAME,
					updateEntryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_SETTINGS,
					listId: e,
					customListTitle: d
				}));
			} else {
				var r = await o("WAWebBizLabelEditingAction").labelAddAction(d, v);
				e = r, r != null && i && (o("WAWebListsLogging").logListUpdate({
					listId: r,
					listAction: o("WAWebWamEnumListAction").LIST_ACTION.CREATE,
					entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_SETTINGS,
					chatsBeforeUpdate: [],
					addedChats: [],
					removedChats: []
				}), o("WAWebWamSmbListEventReporter").logSmbListEvent({
					labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.ADD,
					updateEntryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_SETTINGS,
					listId: r,
					customListTitle: d
				}));
			}
			o("WAWebWamLabelEventReporter").logLabelOperationEvent(o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.EDIT, void 0, o("WAWebWamEnumLabelTargets").LABEL_TARGETS.EDIT_LABEL_DIALOG), l != null && o("WAWebWamSmbListEventReporter").logSmbListEvent({
				labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.EDIT,
				labelTarget: o("WAWebWamEnumLabelTargets").LABEL_TARGETS.LABEL,
				updateEntryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_SETTINGS,
				listId: e != null ? e : void 0
			});
		}, N = function() {
			if (i && l == null) {
				var e = o("WAWebActionToast.react").genId(), t = new (o("WAWebActionToast.react")).ActionType(s._(
					/*BTDS*/
					""
				));
				o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebActionToast.react").ActionToast, {
					id: e,
					initialAction: t,
					pendingAction: Promise.resolve(t)
				}));
			} else o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: i ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			) }));
		}, M = function(t) {
			var e, n = (e = _.cast(t.message)) != null ? e : _.SaveFailed;
			o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: f(n) }));
		}, w = function() {
			return d !== "" && y == null;
		}, A = r("chunkArray")(o("WAWebListUtils").getSelectableLabelColors(), 5), F, O;
		return i ? (F = l ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), O = s._(
			/*BTDS*/
			""
		)) : (F = l ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), O = s._(
			/*BTDS*/
			""
		)), c.jsxs(r("WAWebSavePopup.react"), {
			title: F,
			doSave: P,
			afterSave: N,
			onError: M,
			isValid: w(),
			modalConfig: {
				type: o("WAWebModal.react").ModalTheme.LabelEdit,
				onCancel: o("WAWebModalManager").closeModalManager
			},
			tsNavigationData: { surface: "smb-labels-edit" },
			children: [c.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: [o("WDSPaddings.stylex").wdsPaddings.padding16, o("WDSPaddings.stylex").wdsPaddings.paddingTop0],
				children: [o("WAWebMobilePlatforms").isSMB() && v != null && c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSPaddings.stylex").wdsPaddings.paddingTop8, o("WDSPaddings.stylex").wdsPaddings.paddingEnd16), { children: c.jsx(r("WAWebUnstyledButton.react"), {
					ref: k,
					onClick: x,
					children: c.jsx(o("WAWebLabels.react").Label, {
						color: o("WAWebListUtils").colorIndexToHex(v),
						renderAsCircle: !0
					})
				}) })), c.jsx("div", {
					className: "xh8yej3",
					children: c.jsx(o("WAWebRichTextField.react").RichTextField, {
						placeholder: O,
						value: d,
						maxLength: o("WAWebLabelConstants").LABEL_NAME_MAX_LENGTH,
						error: y,
						onChange: function(t) {
							var e = t.text;
							return D(e);
						},
						emojiBtnPosition: "side",
						showRemaining: !0,
						focusOnMount: !0,
						testid: "edit-label-input"
					})
				})]
			}), L && v != null && c.jsx(o("WAWebLabelColorPanel.react").LabelColorPopup, {
				colors: A,
				selectedIndex: v,
				onSelect: $,
				anchor: r("nullthrows")(k.current),
				onClose: function() {
					return E(!1);
				}
			})]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
