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
	"asyncToGeneratorRuntime",
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
		var t, a = e.detailElement, i = e.entryPoint, l = e.isFirstItem, c = l === void 0 ? !1 : l, p = e.isReorderActive, g = e.label, h = e.onClick, y = e.shouldDisplayAutoLabeledText, C = e.showContextActions, b = e.theme, v = d(null), S = d(null), R = d(null), L = r("useWAWebContextMenuSafeClick")(h), E = L[0], k = L[1], I = o("WAWebListsGatingUtils").isListsEnabled(), T = m(!1), D = T[0], x = T[1], $ = r("WAWebL10N").isRTL() ? "left" : "right", P = (t = {}, t[$] = function() {
			var e;
			(e = S.current) == null || e.focusOnContextMenuButton();
		}, t.enter = function(t) {
			h == null || h(t);
		}, t.space = function(t) {
			t.preventDefault(), h == null || h(t);
		}, t), N = function(t) {
			x(!0);
		}, M = function(t) {
			x(!1);
		}, w = o("WAWebLabelCollection").LabelCollection.get(g), A = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), F = function() {
			A();
		};
		o("useWAWebListener").useListener(o("WAWebLabelCollection").LabelCollection, "label_updated_" + g, F), o("useWAWebListener").useListener(o("WAWebFavoriteCollection").FavoriteCollection, "add remove change", F);
		var O = o("WAWebListUtils").isAiList(w == null ? void 0 : w.type);
		o("useWAWebListener").useListener(O ? o("WAWebBizAiHandoffRemovalTimingModel").BizAiHandoffRemovalTimingEventBus : null, "updated", F);
		var B = r("useWAWebEventTargetValue")([o("WAWebChatCollection").ChatCollection, o("WAWebFavoriteCollection").FavoriteCollection], O ? "add remove change:archive change:isLocked change:capiThreadControl change:isAiHandoff change:msgsChanged change:pendingDeleteForMeCount change:aiHandoffRemovalExpiry" : "add remove change:archive change:isLocked change:unreadCount", function() {
			return w != null && (o("WAWebListUtils").isBuiltInList(w.type) || O) ? o("WAWebListsUtil").getAllChatsInList(w).length : 0;
		}), W = function() {
			w != null && (I && h != null ? h() : o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebBizLabelEditModal.react"), { label: w })));
		}, q = function() {
			w != null && o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebBizLabelChooseColorModal.react"), { label: w }));
		}, U = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				if (w != null) try {
					try {
						yield o("WAWebBizLabelEditingAction").labelDeleteAction({
							color: w.colorIndex,
							labelId: g,
							name: w.name
						}), i != null && I && (o("WAWebListsLogging").logListUpdate({
							listId: Number(g),
							listAction: o("WAWebWamEnumListAction").LIST_ACTION.DELETE,
							entryPoint: i
						}), o("WAWebWamSmbListEventReporter").logSmbListEvent({
							labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.DELETE,
							updateEntryPoint: i,
							listId: Number(g),
							customListTitle: w.name
						}));
					} catch (e) {
						throw new (o("WAWebLabelErrors")).LabelActionError();
					}
					o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: I ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					) }));
				} catch (e) {
					e instanceof o("WAWebLabelErrors").LabelActionError && o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: I ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					) }));
				} finally {
					e();
				}
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), V = function() {
			if (w != null) {
				var e = o("WAWebListUtils").getListDisplayName(w.name, w.type), t = I ? s._(
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
					description: I ? s._(
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
						U(o("WDSDialogBridge").closeWDSDialog);
					},
					onDismiss: o("WDSDialogBridge").closeWDSDialog,
					open: !0
				}));
			}
		}, H = u.jsxs(r("WDSMenu.react"), { children: [
			u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcEdit.react"),
				title: s._(
					/*BTDS*/
					""
				),
				onPress: W,
				testid: "mi-edit-label"
			}, "mi-edit-label"),
			w != null && o("WAWebListUtils").isDisableablePresetList(w.type) && u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcVisibilityOff.react"),
				title: s._(
					/*BTDS*/
					""
				),
				destructive: !0,
				onPress: function() {
					w != null && o("WAWebListsActions").deactivatePresetList(w);
				},
				testid: "mi-disable-list"
			}, "mi-disable-list"),
			o("WAWebMobilePlatforms").isSMB() && !o("WAWebListUtils").isAiList(w == null ? void 0 : w.type) && u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcPalette.react"),
				title: s._(
					/*BTDS*/
					""
				),
				onPress: q,
				testid: "mi-choose-label-color"
			}, "mi-choose-label-color"),
			w != null && !o("WAWebListUtils").isBuiltInList(w.type) && !o("WAWebListUtils").isAiList(w.type) && u.jsxs(u.Fragment, { children: [u.jsx(r("WDSMenuItem.react"), { type: "separator" }), u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcDelete.react"),
				title: s._(
					/*BTDS*/
					""
				),
				onPress: V,
				destructive: !0,
				testid: "mi-delete-label"
			}, "mi-delete-label")] })
		] }), G = r("useWDSMenu")({
			targetRef: R,
			menu: H,
			enableUIM: !1
		}), z = G.isMenuOpen, j = G.menuPortal, K = G.openMenu;
		if (!w || !w.name) return null;
		var Q = o("WAWebLabelGetters").getHexColor(w);
		if (b === "label-list") {
			var X = function(t) {
				var e;
				k(), t.anchor instanceof HTMLElement ? (R.current = t.anchor, K()) : ((e = t.event) == null ? void 0 : e.currentTarget) instanceof HTMLElement && (R.current = t.event.currentTarget, K());
			}, Y;
			o("WAWebListsLabelGatingUtils").canDisplayLabel() && (I ? Y = f(Q, p, w.type) : Y = u.jsx(o("WAWebLabels.react").Labels, {
				renderAsCircle: !0,
				theme: "label-list",
				labels: [g]
			}));
			var J = o("WAWebListUtils").getListDisplayName(w.name, w.type), Z = u.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: J,
				ellipsify: !0,
				titlify: !0,
				preformatted: !0
			});
			return u.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
				ref: v,
				tabIndex: c ? 0 : -1,
				className: o("WAWebKeyboardListHotKeys.react").LIST_FOCUSABLE_ITEM_CLASS_NAME + " x1n2onr6",
				role: "listitem",
				handlers: P,
				onFocus: N,
				onBlur: M,
				children: [
					D && u.jsx("div", { className: "x10l6tqk xs7f9wi x1c7jfne x1r4y97 x9q68il xamhcws x1alpsbp xlxy82 xyumdvf x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xlze6vy x47fsot x1rrvw3c x18djku1 xlr9sxt xvvg52n xwd4zgb xq8v1ta x47corl x1vjfegm" }),
					u.jsx(r("WAWebChatCell.react"), {
						ref: S,
						theme: o("WAWebListsLabelGatingUtils").labelsEditingEnabled() ? "label-list-no-border" : "label-list",
						image: Y,
						primary: Z,
						secondary: p === !0 ? null : s._(
							/*BTDS*/
							"",
							[s._plural(o("WAWebListUtils").isBuiltInList(w.type) || o("WAWebListUtils").isAiList(w.type) ? B : w.chatCount, "count")]
						),
						detail: a,
						active: z,
						contextMenu: z,
						onClick: E,
						onContext: X,
						contextEnabled: function() {
							return o("WAWebListsLabelGatingUtils").labelsEditingEnabled() && C && w.isImmutable !== !0;
						},
						contextMenuControlled: !0
					}),
					j
				]
			});
		}
		var ee = null;
		if (I) {
			var te = o("WAWebMobilePlatforms").isSMB() ? u.jsx("div", {
				className: "x78zum5 xl56j7k x6s0dn4 xvy4d1p xxk0z11",
				children: u.jsx(r("WAWebListIcon.react"), { color: Q })
			}) : u.jsx(o("WAWebListPeopleIcon.react").ListPeopleIcon, {
				iconXstyle: _.color,
				viewBox: {
					x: 2,
					y: 2,
					height: 20,
					width: 20
				}
			});
			ee = u.jsx("div", {
				className: "x78zum5 x1okw0bk x6s0dn4 x13jy36j xsfy40s",
				children: w.type === o("WAWebSchemaLabel").ListType.FAVORITES ? u.jsx(r("WDSIconIcFavorite.react"), {
					iconXstyle: _.color,
					viewBox: {
						x: 2,
						y: 2,
						height: 20,
						width: 20
					}
				}) : te
			});
		} else o("WAWebListsLabelGatingUtils").canDisplayLabel() && (ee = o("WAWebListsLabelGatingUtils").labelsEditingEnabled() ? u.jsx(o("WAWebLabels.react").Labels, {
			renderAsCircle: !0,
			theme: "label-list",
			labels: [g]
		}) : u.jsx(o("WAWebIcLabelFilledIcon.react").IcLabelFilledIcon, { style: Q != null && Q !== "" ? { color: Q } : {} }));
		var ne = o("WAWebListUtils").getListDisplayName(w.name, w.type), re = u.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: ne,
			ellipsify: !0,
			titlify: !0
		}), oe = null;
		y && (oe = I ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		));
		var ae = "label-selection";
		return I ? ae = "lists-assign-modal" : o("WAWebListsLabelGatingUtils").labelsEditingEnabled() && (ae = "label-selection-redesigned"), u.jsx(r("WAWebCellFrame.react"), {
			theme: ae,
			image: ee,
			customImage: I,
			primary: re,
			secondary: oe,
			onClick: h
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
