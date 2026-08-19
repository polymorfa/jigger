__d("WAWebLabelsMultiSelectLabelList.react", [
	"fbt",
	"WAArrayMove",
	"WAPromiseDelays",
	"WAWebAutomaticEventsUserJourneyWamEvent",
	"WAWebChatCheckboxWrapper.react",
	"WAWebChatListAiStatusFilterPills",
	"WAWebClickableLink.react",
	"WAWebDOIntroPopup.react",
	"WAWebDraggableItemIcon.react",
	"WAWebDrawerSection.react",
	"WAWebFbtCommon",
	"WAWebFlatList.react",
	"WAWebFlatListContainer.react",
	"WAWebFlatListController",
	"WAWebFlex.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebKeyboardListHotKeys.react",
	"WAWebLabelCollection",
	"WAWebLabelsLabelListItem.react",
	"WAWebLabelsLabelListNewLabel.react",
	"WAWebLeadListConstants",
	"WAWebLeadStage",
	"WAWebLeadSublistModalRow.react",
	"WAWebListDragAndDropItem.react",
	"WAWebListUtils",
	"WAWebListsActions",
	"WAWebListsGatingUtils",
	"WAWebListsLabelGatingUtils",
	"WAWebMobilePlatforms",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebNux",
	"WAWebSchemaLabel",
	"WAWebSelectableState",
	"WAWebSuggestedLists.react",
	"WAWebTabOrder",
	"WAWebText.react",
	"WAWebUserPrefsGeneral",
	"WAWebWamEnumAutomaticEventsTargetComponentEnum",
	"WAWebWamEnumSmbUserActionTypeEnum",
	"WAWebWamEnumSurfaceType",
	"WAWebWamEnumUpdateEntryPoint",
	"WDSBaseRadio.react",
	"WDSButton.react",
	"WDSIconIcAdd.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"WDSTooltip.react",
	"react",
	"useWAWebListener",
	"useWAWebNux",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useMemo, _ = c.useRef, f = c.useState, g = { margin6: {
		marginTop: "x1k70j0n",
		marginInlineEnd: "xbelrpt",
		marginBottom: "xzueoph",
		marginInlineStart: "xdzw4kq",
		$$css: !0
	} }, h = new (r("WAWebFlatListController"))(), y = 72, C = 56, b = "lead-sublist-modal-stage", v = 0;
	function S() {
		return u.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: [g.margin6, o("WDSMargins.stylex").wdsMargins.marginEnd16],
			justify: "center",
			align: "center",
			children: u.jsx(o("WAWebDraggableItemIcon.react").DraggableItemIcon, {
				width: 18,
				height: 18
			})
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	var R = function(t, n) {
		var e = [];
		return t.forEach(function(t) {
			e.push({
				itemKey: t.id,
				listItem: t,
				order: e.length
			}), !(n == null || t.id !== n.leadListId) && o("WAWebLeadStage").LEAD_STAGE_ORDER.forEach(function(n) {
				e.push({
					itemKey: "lead_sublist_" + String(n),
					leadStage: n,
					listItem: t,
					order: e.length
				});
			});
		}), e;
	};
	function L(e) {
		var t = e.autoLabeledLabelIds, n = e.detailElement, a = e.entryPoint, i = e.initialLabelState, l = e.isFirstItem, s = e.isReorderActive, c = e.label, d = e.onLabelClick, m = e.onMultiSelect, p = e.ref, _ = e.renderContext, f = e.selectableState, g = e.selectedLabels, h = e.showContextActions;
		if (!c.name) return null;
		var y = o("WAWebLabelCollection").LabelCollection.assertGet(c.id), C = d ? function() {
			d(c.id);
		} : void 0, b = t.includes(c.id), v = _ === "label-selection" ? u.jsx(r("WAWebChatCheckboxWrapper.react"), {
			theme: o("WAWebListsLabelGatingUtils").labelsEditingEnabled() ? "label-selection-redesigned" : "label-selection",
			model: y,
			initialSelection: i[c.id] || 0,
			multiSelection: g,
			selectableState: f,
			onSelect: m,
			children: u.jsx(r("WAWebLabelsLabelListItem.react"), {
				label: c.id,
				onClick: C,
				showContextActions: h,
				entryPoint: a,
				shouldDisplayAutoLabeledText: b
			})
		}) : u.jsx(r("WAWebLabelsLabelListItem.react"), {
			label: c.id,
			detailElement: n,
			isFirstItem: l,
			isReorderActive: s,
			theme: _,
			onClick: C,
			showContextActions: h,
			entryPoint: a,
			shouldDisplayAutoLabeledText: b
		});
		return u.jsx("div", {
			ref: p,
			"data-testid": "label-list-item-" + c.id,
			children: v
		}, "label_item_" + c.id);
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(e, t) {
		t === void 0 && (t = !1);
		var n = o("WAWebListsGatingUtils").isListsEnabled() && o("WAWebMobilePlatforms").isSMB() && e === "label-list" && o("WAWebListsGatingUtils").isListsM2Enabled() && o("WAWebChatListAiStatusFilterPills").getAiStatusFilterPills().length > 0, r = o("WAWebLabelCollection").LabelCollection.filter(function(r) {
			if (!r.name) return !1;
			if (o("WAWebListsGatingUtils").isListsEnabled()) {
				if (r.isActive === !1) return !1;
				if (o("WAWebMobilePlatforms").isSMB()) {
					if (e === "label-list") return r.type === o("WAWebSchemaLabel").ListType.CUSTOM || r.type === o("WAWebSchemaLabel").ListType.PREDEFINED || o("WAWebListsGatingUtils").isListsM2Enabled() && o("WAWebListUtils").isBuiltInList(r.type) || n && o("WAWebListUtils").isAiList(r.type);
					if (e === "label-selection") return r.type === o("WAWebSchemaLabel").ListType.CUSTOM || r.type === o("WAWebSchemaLabel").ListType.PREDEFINED || r.type === o("WAWebSchemaLabel").ListType.FAVORITES || r.type === o("WAWebSchemaLabel").ListType.LEAD && t;
				}
				return !(e === "label-selection" && o("WAWebListUtils").isBuiltInList(r.type));
			}
			return !o("WAWebListUtils").isBuiltInList(r.type);
		});
		if (o("WAWebListUtils").sortLabels(r), t) {
			var a = r.findIndex(function(e) {
				return e.predefinedId === o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID;
			});
			a !== -1 && r.push(r.splice(a, 1)[0]);
		}
		return r;
	}
	function k() {
		var e = f(o("WAWebLabelCollection").LabelCollection.getInactivePresetLists()), t = e[0], n = e[1];
		o("useWAWebListener").useListener(o("WAWebLabelCollection").LabelCollection, "change:isActive", function() {
			n(o("WAWebLabelCollection").LabelCollection.getInactivePresetLists());
		});
		var a = d(function(e) {
			if (e.target === e.currentTarget) {
				var t = e.currentTarget;
				if (t instanceof HTMLElement) {
					var n = t.querySelector("button");
					n instanceof HTMLElement && n.focus();
				}
			}
		}, []);
		return t.length === 0 ? null : u.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
			"data-tab": o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
			"data-testid": "available-lists-section",
			onFocus: a,
			role: "list",
			"aria-label": s._(
				/*BTDS*/
				""
			),
			children: [u.jsx(r("WAWebDrawerSection.react"), {
				title: s._(
					/*BTDS*/
					""
				),
				theme: "list-section",
				animation: !1
			}), t.map(function(e) {
				return u.jsx(I, { label: e }, e.id);
			})]
		});
	}
	k.displayName = k.name + " [from " + i.id + "]";
	function I(e) {
		var t = e.label, n = function() {
			o("WAWebListsActions").activatePresetList(t);
		};
		return u.jsxs("div", {
			className: "x78zum5 x6s0dn4 xnnlda6 x13jy36j x64bnmy",
			"data-testid": "inactive-preset-list-item",
			children: [u.jsx("span", {
				className: "x1iyjqo2 xs83m0k xdl72j9 x6ikm8r x10wlt62 xlyipyv xuxw1ft",
				children: o("WAWebListUtils").getListDisplayName(t.name, t.type)
			}), u.jsx(r("WDSTooltip.react"), {
				label: s._(
					/*BTDS*/
					""
				),
				children: u.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcAdd.react"),
					variant: "borderless",
					size: "small",
					type: "default",
					onPress: n,
					"aria-label": s._(
						/*BTDS*/
						""
					),
					testid: "enable-preset-list-button"
				})
			})]
		});
	}
	I.displayName = I.name + " [from " + i.id + "]";
	function T(e) {
		var t = e.shouldScrollIntoViewAndSelect, n = e.selectedLabels, a = e.selectedSuggestionIds, i = e.onMultiSelect, l = e.onToggleSuggestion, c = e.renderContext, g = e.onLabelClick, I = e.onNewLabelAdded, T = e.initialLabelState, D = T === void 0 ? {} : T, x = e.isReorderActive, $ = x === void 0 ? !1 : x, P = e.entryPoint, N = e.autoLabeledLabelIds, M = e.leadSublist, w = M != null, A = f(!1), F = A[0], O = A[1], B = f(function() {
			return E(c, w);
		}), W = B[0], q = B[1], U = r("useWAWebNux")(o("WAWebNux").NUX.DO_AUTOMATIC_LABEL), V = U[1], H = o("WAWebUserPrefsGeneral").getDetectedOutcomeOnboardingStatus();
		m(function() {
			H && P !== o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_SETTINGS && new (o("WAWebAutomaticEventsUserJourneyWamEvent")).AutomaticEventsUserJourneyWamEvent({
				surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.LABEL_APPLICATION,
				smbUserActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW,
				automaticEventsTargetComponent: o("WAWebWamEnumAutomaticEventsTargetComponentEnum").AUTOMATIC_EVENTS_TARGET_COMPONENT_ENUM.LEARN_MORE
			}).commit();
		}, [H, P]);
		var G = p(function() {
			return R(W, M);
		}, [W, M]), z = _(null), j = _(null), K = d(function(e) {
			if (e.target === e.currentTarget) {
				var t = e.currentTarget;
				if (t instanceof HTMLElement) {
					var n = t.getElementsByClassName(o("WAWebKeyboardListHotKeys.react").LIST_FOCUSABLE_ITEM_CLASS_NAME);
					n.length > 0 && n[0] instanceof HTMLElement && n[0].focus();
				}
			}
		}, []), Q = r("useWAWebUnmountSignal")(), X = function(t) {
			var e = t.focus, r = t.model, o = t.selected;
			n == null || n.setVal(r, o, e), i == null || i(r.id);
		}, Y = function() {
			var e = E(c, w);
			q(e);
		};
		o("useWAWebListener").useListener(o("WAWebLabelCollection").LabelCollection, "reorder", Y);
		var J = async function(n, r, i) {
			if (!(a != null && a.size > 0) && (Y(), i.add === !0 && t)) {
				var e = t(n.name), l = e.shouldScrollIntoView, s = e.shouldSelect;
				if (l) try {
					var u;
					await o("WAPromiseDelays").delayMs(v, Q), (u = z.current) == null || u.scrollIntoView({
						behavior: "smooth",
						block: "nearest"
					});
				} catch (e) {}
				s && X({
					focus: !1,
					model: n,
					selected: !0
				});
			}
		};
		o("useWAWebListener").useListener(o("WAWebLabelCollection").LabelCollection, "add remove", J), o("useWAWebListener").useListener(o("WAWebLabelCollection").LabelCollection, "change:isActive", function() {
			q(E(c, w));
		});
		var Z = function(n, r) {
			return q(function(t) {
				var a = o("WAArrayMove").arrayMove(t, n, r);
				return e.onLabelOrderChange == null || e.onLabelOrderChange(a.map(function(e) {
					return Number(e.id);
				})), a;
			});
		}, ee = r("WAWebNoop"), te = function(a, i) {
			var t = i === 0;
			return o("WAWebListsGatingUtils").isLabelReorderEnabled() && $ ? u.jsx(o("WAWebListDragAndDropItem.react").DragAndDropItem, {
				index: i,
				onMove: Z,
				onFinalDrop: ee,
				children: u.jsx(L, {
					autoLabeledLabelIds: N,
					isFirstItem: t,
					isReorderActive: $,
					showContextActions: !$,
					detailElement: u.jsx(S, {}),
					selectedLabels: n,
					renderContext: c,
					onLabelClick: g,
					initialLabelState: D,
					onMultiSelect: function(t, n, r) {
						return X({
							focus: r,
							model: t,
							selected: n
						});
					},
					label: a,
					selectableState: e.selectableState || new (r("WAWebSelectableState"))(!0),
					ref: function(t) {
						i === W.length - 1 && (z.current = t);
					},
					entryPoint: P
				}, a.id)
			}) : u.jsx(L, {
				autoLabeledLabelIds: N,
				isFirstItem: t,
				showContextActions: !0,
				selectedLabels: n,
				renderContext: c,
				onLabelClick: g,
				initialLabelState: D,
				onMultiSelect: function(t, n, r) {
					return X({
						focus: r,
						model: t,
						selected: n
					});
				},
				label: a,
				selectableState: e.selectableState || new (r("WAWebSelectableState"))(!0),
				ref: function(t) {
					i === W.length - 1 && (z.current = t);
				},
				entryPoint: P
			}, a.id);
		}, ne = function(t, n, a) {
			if (M == null) return te(t, n);
			if (a == null) {
				if (t.id !== M.leadListId) return te(t, n);
				var e = M.selectedStage === o("WAWebLeadStage").LeadStage.NONE;
				return u.jsx("div", {
					"data-testid": "label-list-item-" + t.id,
					ref: function(t) {
						n === W.length - 1 && (z.current = t);
					},
					children: u.jsxs("div", {
						"aria-checked": e,
						"data-testid": "lead_sublist_modal_row_" + String(o("WAWebLeadStage").LeadStage.NONE),
						onClick: function() {
							return M.onSelectStage(o("WAWebLeadStage").LeadStage.NONE);
						},
						onKeyDown: function(t) {
							(t.key === "Enter" || t.key === " ") && (t.preventDefault(), M.onSelectStage(o("WAWebLeadStage").LeadStage.NONE));
						},
						role: "radio",
						tabIndex: e || M.selectedStage == null ? 0 : -1,
						className: "x6s0dn4 x1ypdohk x78zum5 x1n2onr6",
						children: [u.jsx("div", {
							className: "x1t1x2f9 x1iyjqo2 xs83m0k x6ikm8r x10wlt62",
							children: u.jsx(r("WAWebLabelsLabelListItem.react"), {
								label: t.id,
								showContextActions: !1,
								entryPoint: P,
								shouldDisplayAutoLabeledText: !1
							})
						}), u.jsx("span", {
							"aria-hidden": !0,
							className: "x6s0dn4 x78zum5 xdg88n9 x10l6tqk",
							children: u.jsx(r("WDSBaseRadio.react"), {
								checked: e,
								name: b,
								onChange: r("WAWebNoop"),
								tabIndex: -1,
								testid: "lead_sublist_modal_radio_" + String(o("WAWebLeadStage").LeadStage.NONE),
								value: o("WAWebLeadStage").LeadStage.NONE
							})
						})]
					})
				});
			}
			return u.jsx(r("WAWebLeadSublistModalRow.react"), {
				checked: M.selectedStage === a,
				groupName: b,
				leadListName: t.name,
				onSelectStage: M.onSelectStage,
				stage: a
			});
		}, re = o("WAWebListsGatingUtils").isListsEnabled() && c === "label-selection" ? C : y, oe = c === "label-list" && !$ && (!o("WAWebMobilePlatforms").isSMB() || o("WAWebListsGatingUtils").isListsM2Enabled());
		return u.jsxs(r("WAWebFlatListContainer.react"), {
			flatListControllers: [h],
			children: [
				c === "label-selection" && o("WAWebListsLabelGatingUtils").labelsEditingEnabled() && u.jsx(r("WAWebLabelsLabelListNewLabel.react"), {
					onEditingChange: O,
					onNewLabelAdded: I,
					entryPoint: P
				}),
				c === "label-list" && !o("WAWebMobilePlatforms").isSMB() && !$ && u.jsx(r("WAWebDrawerSection.react"), {
					title: s._(
						/*BTDS*/
						""
					),
					theme: "list-section",
					animation: !1
				}),
				u.jsxs(o("WAWebListDragAndDropItem.react").DragAndDropWrapper, {
					containerRef: null,
					children: [
						!F && (c === "label-list" ? u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
							"data-tab": o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
							onFocus: K,
							children: u.jsx("div", {
								ref: j,
								tabIndex: -1,
								children: u.jsx(o("WAWebKeyboardListHotKeys.react").ListHotKeys, {
									tabIndex: -1,
									className: "x1a2a7pz",
									role: "list",
									"aria-label": s._(
										/*BTDS*/
										""
									),
									handlers: { home: function(t) {
										t.preventDefault();
										var e = t.currentTarget;
										if (e instanceof HTMLElement) {
											var n = e.getElementsByClassName(o("WAWebKeyboardListHotKeys.react").LIST_FOCUSABLE_ITEM_CLASS_NAME);
											n.length > 0 && n[0] instanceof HTMLElement && n[0].focus();
										}
									} },
									children: u.jsx(o("WAWebFlatList.react").FlatList, {
										flatListController: h,
										direction: "vertical",
										forceConsistentRenderCount: !1,
										data: G,
										renderItem: function(t) {
											var e = t.leadStage, n = t.listItem, r = t.order;
											return ne(n, r, e);
										},
										defaultItemHeight: re
									})
								})
							})
						}) : u.jsx(o("WAWebFlatList.react").FlatList, {
							flatListController: h,
							direction: "vertical",
							forceConsistentRenderCount: !1,
							data: G,
							renderItem: function(t) {
								var e = t.leadStage, n = t.listItem, r = t.order;
								return ne(n, r, e);
							},
							defaultItemHeight: re
						})),
						c === "label-selection" && o("WAWebListsGatingUtils").isListsEnabled() && o("WAWebMobilePlatforms").isSMB() && !F && l != null && u.jsx(r("WAWebSuggestedLists.react"), {
							onSelect: l,
							selectedSuggestionIds: a,
							suggestedListTheme: "list-assign-modal"
						}),
						H && P !== o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_SETTINGS && u.jsx(o("WAWebFlex.react").FlexRow, {
							align: "center",
							justify: "center",
							xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingVer16, o("WDSPaddings.stylex").wdsPaddings.paddingHor24],
							children: u.jsxs(o("WAWebText.react").WAWebTextMuted, { children: [
								o("WAWebListsGatingUtils").isListsEnabled() ? s._(
									/*BTDS*/
									""
								) : s._(
									/*BTDS*/
									""
								),
								" ",
								u.jsx(r("WAWebClickableLink.react"), {
									onClick: function() {
										o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebDOIntroPopup.react"), {
											onContinue: function() {
												V(), o("WAWebModalManager").ModalManager.close();
											},
											surfaceType: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.LABEL_APPLICATION
										})), new (o("WAWebAutomaticEventsUserJourneyWamEvent")).AutomaticEventsUserJourneyWamEvent({
											surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.LABEL_APPLICATION,
											smbUserActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.CLICK,
											automaticEventsTargetComponent: o("WAWebWamEnumAutomaticEventsTargetComponentEnum").AUTOMATIC_EVENTS_TARGET_COMPONENT_ENUM.LEARN_MORE
										}).commit();
									},
									children: r("WAWebFbtCommon")("Learn more")
								})
							] })
						})
					]
				}),
				oe && u.jsx(k, {})
			]
		});
	}
	T.displayName = T.name + " [from " + i.id + "]", l.default = T;
}), 226);
