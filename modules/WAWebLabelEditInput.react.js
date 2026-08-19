__d("WAWebLabelEditInput.react", [
	"fbt",
	"$InternalEnum",
	"Promise",
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
	"asyncToGeneratorRuntime",
	"chunkArray",
	"react",
	"useWAWebDebouncedCallback",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useState, _ = { listIconCenter: {
		marginTop: "xav9cv8",
		$$css: !0
	} }, f = n("$InternalEnum").Mirrored([
		"NameEmpty",
		"NameAlreadyExists",
		"SaveFailed"
	]), g = function(t) {
		var e = o("WAWebListsGatingUtils").isListsEnabled();
		switch (t) {
			case f.NameEmpty: return e ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
			case f.NameAlreadyExists: return e ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
			case f.SaveFailed: return e ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		}
	};
	function h(t) {
		var a, i, l, u, d = t.editable, h = t.entryPoint, y = t.initialColorIndex, C = t.initialName, b = t.label, v = t.listsFlow, S = t.onCancel, R = t.onSave, L = t.onTextChange, E = t.rowTheme, k = p((a = (i = b == null ? void 0 : b.name) != null ? i : C) != null ? a : ""), I = k[0], T = k[1], D = p(null), x = D[0], $ = D[1], P = p(o("WAWebMobilePlatforms").isSMB() ? (l = (u = b == null ? void 0 : b.colorIndex) != null ? u : y) != null ? l : o("WAWebLabelCollection").LabelCollection.getNextAvailableColor() : null), N = P[0], M = P[1], w = p(null), A = w[0], F = w[1], O = p(!1), B = O[0], W = O[1], q = r("useWAWebUnmountSignal")(), U = o("WAWebListsGatingUtils").isListsEnabled();
		m(function() {
			U && !v && h != null && o("WAWebListsLogging").logListUpdateUserJorney({
				listAction: o("WAWebWamEnumListAction").LIST_ACTION.CREATE,
				userJorneyAction: o("WAWebWamEnumListUpdateUserJourneyAction").LIST_UPDATE_USER_JOURNEY_ACTION.START,
				entryPoint: h
			});
		}, [
			U,
			h,
			v
		]);
		var V = r("WAWebL10N").getFullLocale(), H = r("useWAWebDebouncedCallback")(function(e) {
			var t = (b == null ? void 0 : b.name.toLocaleLowerCase(V)) === e.toLocaleLowerCase(V);
			!t && o("WAWebListNameValidation").isListNameDuplicate(e) && $(g(f.NameAlreadyExists));
		}, 300), G = function(t) {
			var e = t.trim();
			return e === "" ? (H.cancel(), $(g(f.NameEmpty)), !1) : ($(null), H(e), !0);
		}, z = function(t) {
			G(t), v === !0 && R(t, N), T(t), L == null || L(t);
		}, j = function(t) {
			F(A == null ? t.currentTarget : null);
		}, K = function(t) {
			M(t), F(null), v && R(I, t);
		}, Q = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (R(I, N), !(U && v)) {
					W(!0);
					try {
						try {
							if (b) yield o("WAWebBizLabelEditingAction").labelEditAction(b.id, I, b.predefinedId, N);
							else {
								var t = yield o("WAWebBizLabelEditingAction").labelAddAction(I, N);
								U && t != null && h != null && (o("WAWebListsLogging").logListUpdate({
									listId: t,
									listAction: o("WAWebWamEnumListAction").LIST_ACTION.CREATE,
									entryPoint: h,
									chatsBeforeUpdate: [],
									addedChats: [],
									removedChats: []
								}), o("WAWebWamSmbListEventReporter").logSmbListEvent({
									labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.ADD,
									updateEntryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CREATE_CUSTOM_LIST,
									listId: t,
									customListTitle: I
								}), o("WAWebListsLogging").logListUpdateUserJorney({
									listId: "" + t,
									listAction: o("WAWebWamEnumListAction").LIST_ACTION.CREATE,
									userJorneyAction: o("WAWebWamEnumListUpdateUserJourneyAction").LIST_UPDATE_USER_JOURNEY_ACTION.CREATE_LIST,
									entryPoint: h
								}));
							}
						} catch (e) {
							throw new (o("WAWebLabelErrors")).LabelActionError();
						}
						if (U && b == null) {
							var r = o("WAWebActionToast.react").genId(), a = new (o("WAWebActionToast.react")).ActionType(s._(
								/*BTDS*/
								""
							));
							o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebActionToast.react").ActionToast, {
								id: r,
								initialAction: a,
								pendingAction: (e || (e = n("Promise"))).resolve(a)
							}));
						} else o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: U ? s._(
							/*BTDS*/
							""
						) : s._(
							/*BTDS*/
							""
						) }));
					} catch (e) {
						e instanceof o("WAWebLabelErrors").LabelActionError && o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: g(f.SaveFailed) }));
					} finally {
						q.aborted || W(!1);
					}
				}
			});
			return function() {
				return t.apply(this, arguments);
			};
		})(), X = E === "create-new-list-smb" || E === "create-new-list-consumer", Y = E === "create-new-list-smb", J;
		if (o("WAWebMobilePlatforms").isSMB() && N != null) {
			var Z = r("chunkArray")(o("WAWebListUtils").getSelectableLabelColors(), 5);
			J = c.jsxs(r("WAWebUnstyledButton.react"), {
				onClick: j,
				children: [U ? c.jsx(r("WAWebListIcon.react"), {
					color: o("WAWebListUtils").colorIndexToHex(N),
					size: 20,
					xstyle: _.listIconCenter
				}) : c.jsx(o("WAWebLabels.react").Label, {
					color: o("WAWebListUtils").colorIndexToHex(N),
					renderAsCircle: !0,
					isListsFeatureEnabled: U
				}), A != null && c.jsx(o("WAWebLabelColorPanel.react").LabelColorPopup, {
					colors: Z,
					selectedIndex: N,
					onSelect: K,
					anchor: A,
					onClose: function() {
						return F(null);
					}
				})]
			});
		}
		var ee = c.jsx(o("WAWebRichTextField.react").RichTextField, {
			placeholder: U ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			),
			value: I,
			maxLength: o("WAWebLabelConstants").LABEL_NAME_MAX_LENGTH,
			error: x,
			validate: function(t) {
				return G(t != null ? t : "");
			},
			onChange: function(t) {
				var e = t.text;
				return z(e);
			},
			onSave: Q,
			onCancel: S,
			theme: "label-input",
			lineWrap: !1,
			pending: B,
			lockable: v !== !0,
			startActive: !0,
			editable: d,
			emojiBtnPosition: "side",
			hideFloatingLabel: !0,
			showRemaining: !0,
			focusOnMount: !0,
			tabOrder: X ? o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT : void 0,
			testid: "edit-label-input"
		}), te = X ? c.jsxs("div", {
			className: "xh8yej3 x1j8ymqv x78zum5 xdt5ytf xdx6fka",
			children: [c.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					""
				)
			}), c.jsxs("div", babelHelpers.extends({}, {
				0: { className: "x6s0dn4 x78zum5 x1q0g3np xe3kor7" },
				1: { className: "x6s0dn4 x78zum5 x1q0g3np xe3kor7 x1wu0eqq xsohdcw" }
			}[!!Y << 0], { children: [c.jsx("div", {
				className: "x98rzlu",
				children: ee
			}), J != null && Y ? c.jsx("div", babelHelpers.extends({}, {
				0: { className: "x6s0dn4 xkh2ocl x16pkwpw x1q0q8m5 xlxy82 x78zum5 x1r3wxaz x1h678fw" },
				1: { className: "x6s0dn4 xkh2ocl x1q0q8m5 xlxy82 x78zum5 x1r3wxaz x1h678fw x61tcke" }
			}[(x != null) << 0], { children: J })) : J] }))]
		}) : c.jsx("div", babelHelpers.extends({}, {
			0: { className: "xh8yej3 x1j8ymqv" },
			1: { className: "xh8yej3 x1j8ymqv x12w63v0" }
		}[(J == null && v !== !0) << 0], { children: ee }));
		return c.jsx(r("WAWebCellFrame.react"), {
			theme: E,
			image: X ? void 0 : J,
			primary: te
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
