__d("WAWebLabelEditInput.react", [
	"fbt",
	"$InternalEnum",
	"WAWebActionToast.react",
	"WAWebBizLabelEditingAction",
	"WAWebCellFrame.react",
	"WAWebL10N",
	"WAWebLabelCollection",
	"WAWebLabelColorPanel.react",
	"WAWebLabelConstants",
	"WAWebLabelErrors",
	"WAWebLabels.react",
	"WAWebListIcon.react",
	"WAWebListNameValidation",
	"WAWebListUtils",
	"WAWebListsGatingUtils",
	"WAWebListsLogging",
	"WAWebMobilePlatforms",
	"WAWebRichTextField.react",
	"WAWebTabOrder",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUnstyledButton.react",
	"WAWebWamEnumLabelOperations",
	"WAWebWamEnumListAction",
	"WAWebWamEnumListUpdateUserJourneyAction",
	"WAWebWamEnumUpdateEntryPoint",
	"WAWebWamSmbListEventReporter",
	"WDSText.react",
	"chunkArray",
	"react",
	"useWAWebDebouncedCallback",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState, p = { listIconCenter: {
		marginTop: "xav9cv8",
		$$css: !0
	} }, _ = n("$InternalEnum").Mirrored([
		"NameEmpty",
		"NameAlreadyExists",
		"SaveFailed"
	]), f = function(t) {
		var e = o("WAWebListsGatingUtils").isListsEnabled();
		switch (t) {
			case _.NameEmpty: return e ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
			case _.NameAlreadyExists: return e ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
			case _.SaveFailed: return e ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		}
	};
	function g(e) {
		var t, n, a, i, l = e.editable, c = e.entryPoint, g = e.initialColorIndex, h = e.initialName, y = e.label, C = e.listsFlow, b = e.onCancel, v = e.onSave, S = e.onTextChange, R = e.rowTheme, L = m((t = (n = y == null ? void 0 : y.name) != null ? n : h) != null ? t : ""), E = L[0], k = L[1], I = m(null), T = I[0], D = I[1], x = m(o("WAWebMobilePlatforms").isSMB() ? (a = (i = y == null ? void 0 : y.colorIndex) != null ? i : g) != null ? a : o("WAWebLabelCollection").LabelCollection.getNextAvailableColor() : null), $ = x[0], P = x[1], N = m(null), M = N[0], w = N[1], A = m(!1), F = A[0], O = A[1], B = r("useWAWebUnmountSignal")(), W = o("WAWebListsGatingUtils").isListsEnabled();
		d(function() {
			W && !C && c != null && o("WAWebListsLogging").logListUpdateUserJorney({
				listAction: o("WAWebWamEnumListAction").LIST_ACTION.CREATE,
				userJorneyAction: o("WAWebWamEnumListUpdateUserJourneyAction").LIST_UPDATE_USER_JOURNEY_ACTION.START,
				entryPoint: c
			});
		}, [
			W,
			c,
			C
		]);
		var q = r("WAWebL10N").getFullLocale(), U = r("useWAWebDebouncedCallback")(function(e) {
			var t = (y == null ? void 0 : y.name.toLocaleLowerCase(q)) === e.toLocaleLowerCase(q);
			!t && o("WAWebListNameValidation").isListNameDuplicate(e) && D(f(_.NameAlreadyExists));
		}, 300), V = function(t) {
			var e = t.trim();
			return e === "" ? (U.cancel(), D(f(_.NameEmpty)), !1) : (D(null), U(e), !0);
		}, H = function(t) {
			V(t), C === !0 && v(t, $), k(t), S == null || S(t);
		}, G = function(t) {
			w(M == null ? t.currentTarget : null);
		}, z = function(t) {
			P(t), w(null), C && v(E, t);
		}, j = async function() {
			if (v(E, $), !(W && C)) {
				O(!0);
				try {
					try {
						if (y) await o("WAWebBizLabelEditingAction").labelEditAction(y.id, E, y.predefinedId, $);
						else {
							var e = await o("WAWebBizLabelEditingAction").labelAddAction(E, $);
							W && e != null && c != null && (o("WAWebListsLogging").logListUpdate({
								listId: e,
								listAction: o("WAWebWamEnumListAction").LIST_ACTION.CREATE,
								entryPoint: c,
								chatsBeforeUpdate: [],
								addedChats: [],
								removedChats: []
							}), o("WAWebWamSmbListEventReporter").logSmbListEvent({
								labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.ADD,
								updateEntryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CREATE_CUSTOM_LIST,
								listId: e,
								customListTitle: E
							}), o("WAWebListsLogging").logListUpdateUserJorney({
								listId: "" + e,
								listAction: o("WAWebWamEnumListAction").LIST_ACTION.CREATE,
								userJorneyAction: o("WAWebWamEnumListUpdateUserJourneyAction").LIST_UPDATE_USER_JOURNEY_ACTION.CREATE_LIST,
								entryPoint: c
							}));
						}
					} catch (e) {
						throw new (o("WAWebLabelErrors")).LabelActionError();
					}
					if (W && y == null) {
						var t = o("WAWebActionToast.react").genId(), n = new (o("WAWebActionToast.react")).ActionType(s._(
							/*BTDS*/
							""
						));
						o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebActionToast.react").ActionToast, {
							id: t,
							initialAction: n,
							pendingAction: Promise.resolve(n)
						}));
					} else o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: W ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					) }));
				} catch (e) {
					e instanceof o("WAWebLabelErrors").LabelActionError && o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: f(_.SaveFailed) }));
				} finally {
					B.aborted || O(!1);
				}
			}
		}, K = R === "create-new-list-smb" || R === "create-new-list-consumer", Q = R === "create-new-list-smb", X;
		if (o("WAWebMobilePlatforms").isSMB() && $ != null) {
			var Y = r("chunkArray")(o("WAWebListUtils").getSelectableLabelColors(), 5);
			X = u.jsxs(r("WAWebUnstyledButton.react"), {
				onClick: G,
				children: [W ? u.jsx(r("WAWebListIcon.react"), {
					color: o("WAWebListUtils").colorIndexToHex($),
					size: 20,
					xstyle: p.listIconCenter
				}) : u.jsx(o("WAWebLabels.react").Label, {
					color: o("WAWebListUtils").colorIndexToHex($),
					renderAsCircle: !0,
					isListsFeatureEnabled: W
				}), M != null && u.jsx(o("WAWebLabelColorPanel.react").LabelColorPopup, {
					colors: Y,
					selectedIndex: $,
					onSelect: z,
					anchor: M,
					onClose: function() {
						return w(null);
					}
				})]
			});
		}
		var J = u.jsx(o("WAWebRichTextField.react").RichTextField, {
			placeholder: W ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			),
			value: E,
			maxLength: o("WAWebLabelConstants").LABEL_NAME_MAX_LENGTH,
			error: T,
			validate: function(t) {
				return V(t != null ? t : "");
			},
			onChange: function(t) {
				var e = t.text;
				return H(e);
			},
			onSave: j,
			onCancel: b,
			theme: "label-input",
			lineWrap: !1,
			pending: F,
			lockable: C !== !0,
			startActive: !0,
			editable: l,
			emojiBtnPosition: "side",
			hideFloatingLabel: !0,
			showRemaining: !0,
			focusOnMount: !0,
			tabOrder: K ? o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT : void 0,
			testid: "edit-label-input"
		}), Z = K ? u.jsxs("div", {
			className: "xh8yej3 x1j8ymqv x78zum5 xdt5ytf xdx6fka",
			children: [u.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					""
				)
			}), u.jsxs("div", babelHelpers.extends({}, {
				0: { className: "x6s0dn4 x78zum5 x1q0g3np xe3kor7" },
				1: { className: "x6s0dn4 x78zum5 x1q0g3np xe3kor7 x1wu0eqq xsohdcw" }
			}[!!Q << 0], { children: [u.jsx("div", {
				className: "x98rzlu",
				children: J
			}), X != null && Q ? u.jsx("div", babelHelpers.extends({}, {
				0: { className: "x6s0dn4 xkh2ocl x16pkwpw x1q0q8m5 xlxy82 x78zum5 x1r3wxaz x1h678fw" },
				1: { className: "x6s0dn4 xkh2ocl x1q0q8m5 xlxy82 x78zum5 x1r3wxaz x1h678fw x61tcke" }
			}[(T != null) << 0], { children: X })) : X] }))]
		}) : u.jsx("div", babelHelpers.extends({}, {
			0: { className: "xh8yej3 x1j8ymqv" },
			1: { className: "xh8yej3 x1j8ymqv x12w63v0" }
		}[(X == null && C !== !0) << 0], { children: J }));
		return u.jsx(r("WAWebCellFrame.react"), {
			theme: R,
			image: K ? void 0 : X,
			primary: Z
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
