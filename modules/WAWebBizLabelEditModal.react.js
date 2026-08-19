__d("WAWebBizLabelEditModal.react", [
	"fbt",
	"$InternalEnum",
	"Promise",
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
	"asyncToGeneratorRuntime",
	"chunkArray",
	"nullthrows",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useRef, _ = m.useState, f = n("$InternalEnum").Mirrored([
		"NameEmpty",
		"NameAlreadyExists",
		"SaveFailed"
	]), g = function(t) {
		if (o("WAWebListsGatingUtils").isListsEnabled()) switch (t) {
			case f.NameEmpty: return s._(
				/*BTDS*/
				""
			);
			case f.NameAlreadyExists: return s._(
				/*BTDS*/
				""
			);
			case f.SaveFailed: return s._(
				/*BTDS*/
				""
			);
		}
		else switch (t) {
			case f.NameEmpty: return s._(
				/*BTDS*/
				""
			);
			case f.NameAlreadyExists: return s._(
				/*BTDS*/
				""
			);
			case f.SaveFailed: return s._(
				/*BTDS*/
				""
			);
		}
	};
	function h(t) {
		var a, i, l = o("WAWebListsGatingUtils").isListsEnabled(), c = t.label, m = _((a = c == null ? void 0 : c.name) != null ? a : ""), h = m[0], y = m[1], C = _(null), b = C[0], v = C[1], S = _(o("WAWebMobilePlatforms").isSMB() ? (i = c == null ? void 0 : c.colorIndex) != null ? i : o("WAWebLabelCollection").LabelCollection.getNextAvailableColor() : null), R = S[0], L = S[1], E = _(!1), k = E[0], I = E[1], T = p(), D = r("WAWebL10N").getFullLocale(), x = function(t) {
			var e = t.trim().toLocaleLowerCase(D);
			return e === "" ? f.NameEmpty : (c == null ? void 0 : c.name.toLocaleLowerCase(D)) !== e && o("WAWebLabelCollection").LabelCollection.some(function(t) {
				return t.name.toLocaleLowerCase(D) === e;
			}) ? f.NameAlreadyExists : null;
		}, $ = function(t) {
			var e = x(t);
			y(t), v(e ? g(e) : null);
		}, P = function() {
			I(!k);
		}, N = function(t) {
			L(t), I(!1);
		}, M = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e;
				if (c) {
					e = Number(c.id);
					var t = h !== c.name, n = o("WAWebLabelConstants").mapLabelNameToPredefinedId(h);
					yield o("WAWebBizLabelEditingAction").labelEditAction(c.id, h, n, R), t && l && (o("WAWebListsLogging").logListUpdate({
						listId: e,
						listAction: o("WAWebWamEnumListAction").LIST_ACTION.RENAME,
						entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_SETTINGS
					}), o("WAWebWamSmbListEventReporter").logSmbListEvent({
						labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.RENAME,
						updateEntryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_SETTINGS,
						listId: e,
						customListTitle: h
					}));
				} else {
					var r = yield o("WAWebBizLabelEditingAction").labelAddAction(h, R);
					e = r, r != null && l && (o("WAWebListsLogging").logListUpdate({
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
						customListTitle: h
					}));
				}
				o("WAWebWamLabelEventReporter").logLabelOperationEvent(o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.EDIT, void 0, o("WAWebWamEnumLabelTargets").LABEL_TARGETS.EDIT_LABEL_DIALOG), c != null && o("WAWebWamSmbListEventReporter").logSmbListEvent({
					labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.EDIT,
					labelTarget: o("WAWebWamEnumLabelTargets").LABEL_TARGETS.LABEL,
					updateEntryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_SETTINGS,
					listId: e != null ? e : void 0
				});
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), w = function() {
			if (l && c == null) {
				var e = o("WAWebActionToast.react").genId(), t = new (o("WAWebActionToast.react")).ActionType(s._(
					/*BTDS*/
					""
				));
				o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebActionToast.react").ActionToast, {
					id: e,
					initialAction: t,
					pendingAction: (u || (u = n("Promise"))).resolve(t)
				}));
			} else o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, { msg: l ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			) }));
		}, A = function(t) {
			var e, n = (e = f.cast(t.message)) != null ? e : f.SaveFailed;
			o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, { msg: g(n) }));
		}, F = function() {
			return h !== "" && b == null;
		}, O = r("chunkArray")(o("WAWebListUtils").getSelectableLabelColors(), 5), B, W;
		return l ? (B = c ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), W = s._(
			/*BTDS*/
			""
		)) : (B = c ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), W = s._(
			/*BTDS*/
			""
		)), d.jsxs(r("WAWebSavePopup.react"), {
			title: B,
			doSave: M,
			afterSave: w,
			onError: A,
			isValid: F(),
			modalConfig: {
				type: o("WAWebModal.react").ModalTheme.LabelEdit,
				onCancel: o("WAWebModalManager").closeModalManager
			},
			tsNavigationData: { surface: "smb-labels-edit" },
			children: [d.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: [o("WDSPaddings.stylex").wdsPaddings.padding16, o("WDSPaddings.stylex").wdsPaddings.paddingTop0],
				children: [o("WAWebMobilePlatforms").isSMB() && R != null && d.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSPaddings.stylex").wdsPaddings.paddingTop8, o("WDSPaddings.stylex").wdsPaddings.paddingEnd16), { children: d.jsx(r("WAWebUnstyledButton.react"), {
					ref: T,
					onClick: P,
					children: d.jsx(o("WAWebLabels.react").Label, {
						color: o("WAWebListUtils").colorIndexToHex(R),
						renderAsCircle: !0
					})
				}) })), d.jsx("div", {
					className: "xh8yej3",
					children: d.jsx(o("WAWebRichTextField.react").RichTextField, {
						placeholder: W,
						value: h,
						maxLength: o("WAWebLabelConstants").LABEL_NAME_MAX_LENGTH,
						error: b,
						onChange: function(t) {
							var e = t.text;
							return $(e);
						},
						emojiBtnPosition: "side",
						showRemaining: !0,
						focusOnMount: !0,
						testid: "edit-label-input"
					})
				})]
			}), k && R != null && d.jsx(o("WAWebLabelColorPanel.react").LabelColorPopup, {
				colors: O,
				selectedIndex: R,
				onSelect: N,
				anchor: r("nullthrows")(T.current),
				onClose: function() {
					return I(!1);
				}
			})]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
