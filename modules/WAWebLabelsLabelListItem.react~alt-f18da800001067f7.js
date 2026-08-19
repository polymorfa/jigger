__d("WAWebLabelsLabelListItem.react", [
	"fbt",
	"WAWebBizAiHandoffRemovalTimingModel",
	"WAWebBizLabelChooseColorModal.react",
	"WAWebBizLabelEditModal.react",
	"WAWebBizLabelEditingAction",
	"WAWebCellFrame.react",
	"WAWebChatCell.react",
	"WAWebChatCollection",
	"WAWebChatListAiStatusFilterPills.stylex",
	"WAWebEmojiText.react",
	"WAWebFavoriteCollection",
	"WAWebIcLabelFilledIcon.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebKeyboardListHotKeys.react",
	"WAWebL10N",
	"WAWebLabelCollection",
	"WAWebLabelErrors",
	"WAWebLabelGetters",
	"WAWebLabels.react",
	"WAWebListIcon.react",
	"WAWebListPeopleIcon.react",
	"WAWebListUtils",
	"WAWebListsActions",
	"WAWebListsGatingUtils",
	"WAWebListsLabelGatingUtils",
	"WAWebListsLogging",
	"WAWebListsUtil",
	"WAWebMobilePlatforms",
	"WAWebModalManager",
	"WAWebSchemaLabel",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWamEnumLabelOperations",
	"WAWebWamEnumListAction",
	"WAWebWamSmbListEventReporter",
	"WDSConfirmDialog.react",
	"WDSDialogBridge",
	"WDSIconIcDelete.react",
	"WDSIconIcEdit.react",
	"WDSIconIcFavorite.react",
	"WDSIconIcGroup.react",
	"WDSIconIcPalette.react",
	"WDSIconIcUnread.react",
	"WDSIconIcVisibilityOff.react",
	"WDSIconWdsIcCommunities.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"react",
	"useWAWebContextMenuSafeClick",
	"useWAWebEventTargetValue",
	"useWAWebForceUpdate",
	"useWAWebListener",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useRef, m = c.useState, p = 18, _ = {
		color: {
			color: "xhslqc4",
			$$css: !0
		},
		iconAlignTop: {
			alignSelf: "xqcrz7y",
			marginTop: "x1f94qq7",
			$$css: !0
		},
		inlineName: {
			display: "xt0psk2",
			$$css: !0
		}
	};
	function f(e, t, n) {
		var a = n === o("WAWebSchemaLabel").ListType.AI_HANDOFF ? o("WAWebChatListAiStatusFilterPills.stylex").aiStatusFilterDotStyles.ai_handoff : n === o("WAWebSchemaLabel").ListType.AI_RESPONDING ? o("WAWebChatListAiStatusFilterPills.stylex").aiStatusFilterDotStyles.ai_responding : null;
		if (a != null) return u.jsx("div", babelHelpers.extends({ "data-testid": "preset-list-icon" }, {
			0: { className: "x78zum5 x6s0dn4 xl56j7k x2lah0s x18faa90 x4h0osi" },
			1: { className: "x78zum5 x6s0dn4 xl56j7k x2lah0s x18faa90 x4h0osi xqcrz7y xhrpt6u" }
		}[(t !== !0) << 0], { children: u.jsx(r("WAWebListIcon.react"), { xstyle: a }) }));
		var i = g(n);
		return i != null ? u.jsx("div", babelHelpers.extends({ "data-testid": "preset-list-icon" }, {
			0: { className: "x78zum5 x6s0dn4 xl56j7k x2lah0s x18faa90 x4h0osi" },
			1: { className: "x78zum5 x6s0dn4 xl56j7k x2lah0s x18faa90 x4h0osi xqcrz7y xhrpt6u" }
		}[(t !== !0) << 0], { children: u.jsx(i, {
			height: p,
			width: p
		}) })) : u.jsx(r("WAWebListIcon.react"), {
			color: e,
			xstyle: t !== !0 && _.iconAlignTop
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		return e === o("WAWebSchemaLabel").ListType.FAVORITES ? r("WDSIconIcFavorite.react") : e === o("WAWebSchemaLabel").ListType.GROUPS ? r("WDSIconIcGroup.react") : e === o("WAWebSchemaLabel").ListType.UNREAD ? r("WDSIconIcUnread.react") : e === o("WAWebSchemaLabel").ListType.COMMUNITY ? r("WDSIconWdsIcCommunities.react") : null;
	}
	function h(e) {
		"use no forget";
		var t, n = e.detailElement, a = e.entryPoint, i = e.isFirstItem, l = i === void 0 ? !1 : i, c = e.isReorderActive, p = e.label, g = e.onClick, h = e.shouldDisplayAutoLabeledText, y = e.showContextActions, C = e.theme, b = d(null), v = d(null), S = d(null), R = r("useWAWebContextMenuSafeClick")(g), L = R[0], E = R[1], k = o("WAWebListsGatingUtils").isListsEnabled(), I = m(!1), T = I[0], D = I[1], x = r("WAWebL10N").isRTL() ? "left" : "right", $ = (t = {}, t[x] = function() {
			var e;
			(e = v.current) == null || e.focusOnContextMenuButton();
		}, t.enter = function(t) {
			g == null || g(t);
		}, t.space = function(t) {
			t.preventDefault(), g == null || g(t);
		}, t), P = function(t) {
			D(!0);
		}, N = function(t) {
			D(!1);
		}, M = o("WAWebLabelCollection").LabelCollection.get(p), w = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), A = function() {
			w();
		};
		o("useWAWebListener").useListener(o("WAWebLabelCollection").LabelCollection, "label_updated_" + p, A), o("useWAWebListener").useListener(o("WAWebFavoriteCollection").FavoriteCollection, "add remove change", A);
		var F = o("WAWebListUtils").isAiList(M == null ? void 0 : M.type);
		o("useWAWebListener").useListener(F ? o("WAWebBizAiHandoffRemovalTimingModel").BizAiHandoffRemovalTimingEventBus : null, "updated", A);
		var O = r("useWAWebEventTargetValue")([o("WAWebChatCollection").ChatCollection, o("WAWebFavoriteCollection").FavoriteCollection], F ? "add remove change:archive change:isLocked change:capiThreadControl change:isAiHandoff change:msgsChanged change:pendingDeleteForMeCount change:aiHandoffRemovalExpiry" : "add remove change:archive change:isLocked change:unreadCount", function() {
			return M != null && (o("WAWebListUtils").isBuiltInList(M.type) || F) ? o("WAWebListsUtil").getAllChatsInList(M).length : 0;
		}), B = function() {
			M != null && (k && g != null ? g() : o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebBizLabelEditModal.react"), { label: M })));
		}, W = function() {
			M != null && o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebBizLabelChooseColorModal.react"), { label: M }));
		}, q = async function(t) {
			if (M != null) try {
				try {
					await o("WAWebBizLabelEditingAction").labelDeleteAction({
						color: M.colorIndex,
						labelId: p,
						name: M.name
					}), a != null && k && (o("WAWebListsLogging").logListUpdate({
						listId: Number(p),
						listAction: o("WAWebWamEnumListAction").LIST_ACTION.DELETE,
						entryPoint: a
					}), o("WAWebWamSmbListEventReporter").logSmbListEvent({
						labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.DELETE,
						updateEntryPoint: a,
						listId: Number(p),
						customListTitle: M.name
					}));
				} catch (e) {
					throw new (o("WAWebLabelErrors")).LabelActionError();
				}
				o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: k ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				) }));
			} catch (e) {
				e instanceof o("WAWebLabelErrors").LabelActionError && o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: k ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				) }));
			} finally {
				t();
			}
		}, U = function() {
			if (M != null) {
				var e = o("WAWebListUtils").getListDisplayName(M.name, M.type), t = k ? s._(
					/*BTDS*/
					"",
					[s._param("list_name", u.jsx(o("WAWebEmojiText.react").EmojiText, {
						text: e,
						titlify: !0,
						xstyle: _.inlineName
					}))]
				) : s._(
					/*BTDS*/
					"",
					[s._param("label_name", u.jsx(o("WAWebEmojiText.react").EmojiText, {
						text: e,
						titlify: !0,
						xstyle: _.inlineName
					}))]
				);
				o("WDSDialogBridge").openWDSDialog(u.jsx(r("WDSConfirmDialog.react"), {
					title: t,
					description: k ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					),
					confirmLabel: s._(
						/*BTDS*/
						""
					),
					destructive: !0,
					onConfirm: function() {
						q(o("WDSDialogBridge").closeWDSDialog);
					},
					onDismiss: o("WDSDialogBridge").closeWDSDialog,
					open: !0
				}));
			}
		}, V = u.jsxs(r("WDSMenu.react"), { children: [
			u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcEdit.react"),
				title: s._(
					/*BTDS*/
					""
				),
				onPress: B,
				testid: "mi-edit-label"
			}, "mi-edit-label"),
			M != null && o("WAWebListUtils").isDisableablePresetList(M.type) && u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcVisibilityOff.react"),
				title: s._(
					/*BTDS*/
					""
				),
				destructive: !0,
				onPress: function() {
					M != null && o("WAWebListsActions").deactivatePresetList(M);
				},
				testid: "mi-disable-list"
			}, "mi-disable-list"),
			o("WAWebMobilePlatforms").isSMB() && !o("WAWebListUtils").isAiList(M == null ? void 0 : M.type) && u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcPalette.react"),
				title: s._(
					/*BTDS*/
					""
				),
				onPress: W,
				testid: "mi-choose-label-color"
			}, "mi-choose-label-color"),
			M != null && !o("WAWebListUtils").isBuiltInList(M.type) && !o("WAWebListUtils").isAiList(M.type) && u.jsxs(u.Fragment, { children: [u.jsx(r("WDSMenuItem.react"), { type: "separator" }), u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcDelete.react"),
				title: s._(
					/*BTDS*/
					""
				),
				onPress: U,
				destructive: !0,
				testid: "mi-delete-label"
			}, "mi-delete-label")] })
		] }), H = r("useWDSMenu")({
			targetRef: S,
			menu: V,
			enableUIM: !1
		}), G = H.isMenuOpen, z = H.menuPortal, j = H.openMenu;
		if (!M || !M.name) return null;
		var K = o("WAWebLabelGetters").getHexColor(M);
		if (C === "label-list") {
			var Q = function(t) {
				var e;
				E(), t.anchor instanceof HTMLElement ? (S.current = t.anchor, j()) : ((e = t.event) == null ? void 0 : e.currentTarget) instanceof HTMLElement && (S.current = t.event.currentTarget, j());
			}, X;
			o("WAWebListsLabelGatingUtils").canDisplayLabel() && (k ? X = f(K, c, M.type) : X = u.jsx(o("WAWebLabels.react").Labels, {
				renderAsCircle: !0,
				theme: "label-list",
				labels: [p]
			}));
			var Y = o("WAWebListUtils").getListDisplayName(M.name, M.type), J = u.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: Y,
				ellipsify: !0,
				titlify: !0,
				preformatted: !0
			});
			return u.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
				ref: b,
				tabIndex: l ? 0 : -1,
				className: o("WAWebKeyboardListHotKeys.react").LIST_FOCUSABLE_ITEM_CLASS_NAME + " x1n2onr6",
				role: "listitem",
				handlers: $,
				onFocus: P,
				onBlur: N,
				children: [
					T && u.jsx("div", { className: "x10l6tqk xs7f9wi x1c7jfne x1r4y97 x9q68il xamhcws x1alpsbp xlxy82 xyumdvf x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xlze6vy x47fsot x1rrvw3c x18djku1 xlr9sxt xvvg52n xwd4zgb xq8v1ta x47corl x1vjfegm" }),
					u.jsx(r("WAWebChatCell.react"), {
						ref: v,
						theme: o("WAWebListsLabelGatingUtils").labelsEditingEnabled() ? "label-list-no-border" : "label-list",
						image: X,
						primary: J,
						secondary: c === !0 ? null : s._(
							/*BTDS*/
							"",
							[s._plural(o("WAWebListUtils").isBuiltInList(M.type) || o("WAWebListUtils").isAiList(M.type) ? O : M.chatCount, "count")]
						),
						detail: n,
						active: G,
						contextMenu: G,
						onClick: L,
						onContext: Q,
						contextEnabled: function() {
							return o("WAWebListsLabelGatingUtils").labelsEditingEnabled() && y && M.isImmutable !== !0;
						},
						contextMenuControlled: !0
					}),
					z
				]
			});
		}
		var Z = null;
		if (k) {
			var ee = o("WAWebMobilePlatforms").isSMB() ? u.jsx("div", {
				className: "x78zum5 xl56j7k x6s0dn4 xvy4d1p xxk0z11",
				children: u.jsx(r("WAWebListIcon.react"), { color: K })
			}) : u.jsx(o("WAWebListPeopleIcon.react").ListPeopleIcon, {
				iconXstyle: _.color,
				viewBox: {
					x: 2,
					y: 2,
					height: 20,
					width: 20
				}
			});
			Z = u.jsx("div", {
				className: "x78zum5 x1okw0bk x6s0dn4 x13jy36j xsfy40s",
				children: M.type === o("WAWebSchemaLabel").ListType.FAVORITES ? u.jsx(r("WDSIconIcFavorite.react"), {
					iconXstyle: _.color,
					viewBox: {
						x: 2,
						y: 2,
						height: 20,
						width: 20
					}
				}) : ee
			});
		} else o("WAWebListsLabelGatingUtils").canDisplayLabel() && (Z = o("WAWebListsLabelGatingUtils").labelsEditingEnabled() ? u.jsx(o("WAWebLabels.react").Labels, {
			renderAsCircle: !0,
			theme: "label-list",
			labels: [p]
		}) : u.jsx(o("WAWebIcLabelFilledIcon.react").IcLabelFilledIcon, { style: K != null && K !== "" ? { color: K } : {} }));
		var te = o("WAWebListUtils").getListDisplayName(M.name, M.type), ne = u.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: te,
			ellipsify: !0,
			titlify: !0
		}), re = null;
		h && (re = k ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		));
		var oe = "label-selection";
		return k ? oe = "lists-assign-modal" : o("WAWebListsLabelGatingUtils").labelsEditingEnabled() && (oe = "label-selection-redesigned"), u.jsx(r("WAWebCellFrame.react"), {
			theme: oe,
			image: Z,
			customImage: k,
			primary: ne,
			secondary: re,
			onClick: g
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
