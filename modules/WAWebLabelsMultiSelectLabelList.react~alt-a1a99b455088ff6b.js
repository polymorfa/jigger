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
	"asyncToGeneratorRuntime",
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
		var t = e.shouldScrollIntoViewAndSelect, a = e.selectedLabels, i = e.selectedSuggestionIds, l = e.onMultiSelect, c = e.onToggleSuggestion, g = e.renderContext, I = e.onLabelClick, T = e.onNewLabelAdded, D = e.initialLabelState, x = D === void 0 ? {} : D, $ = e.isReorderActive, P = $ === void 0 ? !1 : $, N = e.entryPoint, M = e.autoLabeledLabelIds, w = e.leadSublist, A = w != null, F = f(!1), O = F[0], B = F[1], W = f(function() {
			return E(g, A);
		}), q = W[0], U = W[1], V = r("useWAWebNux")(o("WAWebNux").NUX.DO_AUTOMATIC_LABEL), H = V[1], G = o("WAWebUserPrefsGeneral").getDetectedOutcomeOnboardingStatus();
		m(function() {
			G && N !== o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_SETTINGS && new (o("WAWebAutomaticEventsUserJourneyWamEvent")).AutomaticEventsUserJourneyWamEvent({
				surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.LABEL_APPLICATION,
				smbUserActionType: o("WAWebWamEnumSmbUserActionTypeEnum").SMB_USER_ACTION_TYPE_ENUM.VIEW,
				automaticEventsTargetComponent: o("WAWebWamEnumAutomaticEventsTargetComponentEnum").AUTOMATIC_EVENTS_TARGET_COMPONENT_ENUM.LEARN_MORE
			}).commit();
		}, [G, N]);
		var z = p(function() {
			return R(q, w);
		}, [q, w]), j = _(null), K = _(null), Q = d(function(e) {
			if (e.target === e.currentTarget) {
				var t = e.currentTarget;
				if (t instanceof HTMLElement) {
					var n = t.getElementsByClassName(o("WAWebKeyboardListHotKeys.react").LIST_FOCUSABLE_ITEM_CLASS_NAME);
					n.length > 0 && n[0] instanceof HTMLElement && n[0].focus();
				}
			}
		}, []), X = r("useWAWebUnmountSignal")(), Y = function(t) {
			var e = t.focus, n = t.model, r = t.selected;
			a == null || a.setVal(n, r, e), l == null || l(n.id);
		}, J = function() {
			var e = E(g, A);
			U(e);
		};
		o("useWAWebListener").useListener(o("WAWebLabelCollection").LabelCollection, "reorder", J);
		var Z = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, n, r) {
				if (!(i != null && i.size > 0) && (J(), r.add === !0 && t)) {
					var a = t(e.name), l = a.shouldScrollIntoView, s = a.shouldSelect;
					if (l) try {
						var u;
						yield o("WAPromiseDelays").delayMs(v, X), (u = j.current) == null || u.scrollIntoView({
							behavior: "smooth",
							block: "nearest"
						});
					} catch (e) {}
					s && Y({
						focus: !1,
						model: e,
						selected: !0
					});
				}
			});
			return function(n, r, o) {
				return e.apply(this, arguments);
			};
		})();
		o("useWAWebListener").useListener(o("WAWebLabelCollection").LabelCollection, "add remove", Z), o("useWAWebListener").useListener(o("WAWebLabelCollection").LabelCollection, "change:isActive", function() {
			U(E(g, A));
		});
		var ee = function(n, r) {
			return U(function(t) {
				var a = o("WAArrayMove").arrayMove(t, n, r);
				return e.onLabelOrderChange == null || e.onLabelOrderChange(a.map(function(e) {
					return Number(e.id);
				})), a;
			});
		}, te = r("WAWebNoop"), ne = function(n, i) {
			var t = i === 0;
			return o("WAWebListsGatingUtils").isLabelReorderEnabled() && P ? u.jsx(o("WAWebListDragAndDropItem.react").DragAndDropItem, {
				index: i,
				onMove: ee,
				onFinalDrop: te,
				children: u.jsx(L, {
					autoLabeledLabelIds: M,
					isFirstItem: t,
					isReorderActive: P,
					showContextActions: !P,
					detailElement: u.jsx(S, {}),
					selectedLabels: a,
					renderContext: g,
					onLabelClick: I,
					initialLabelState: x,
					onMultiSelect: function(t, n, r) {
						return Y({
							focus: r,
							model: t,
							selected: n
						});
					},
					label: n,
					selectableState: e.selectableState || new (r("WAWebSelectableState"))(!0),
					ref: function(t) {
						i === q.length - 1 && (j.current = t);
					},
					entryPoint: N
				}, n.id)
			}) : u.jsx(L, {
				autoLabeledLabelIds: M,
				isFirstItem: t,
				showContextActions: !0,
				selectedLabels: a,
				renderContext: g,
				onLabelClick: I,
				initialLabelState: x,
				onMultiSelect: function(t, n, r) {
					return Y({
						focus: r,
						model: t,
						selected: n
					});
				},
				label: n,
				selectableState: e.selectableState || new (r("WAWebSelectableState"))(!0),
				ref: function(t) {
					i === q.length - 1 && (j.current = t);
				},
				entryPoint: N
			}, n.id);
		}, re = function(t, n, a) {
			if (w == null) return ne(t, n);
			if (a == null) {
				if (t.id !== w.leadListId) return ne(t, n);
				var e = w.selectedStage === o("WAWebLeadStage").LeadStage.NONE;
				return u.jsx("div", {
					"data-testid": "label-list-item-" + t.id,
					ref: function(t) {
						n === q.length - 1 && (j.current = t);
					},
					children: u.jsxs("div", {
						"aria-checked": e,
						"data-testid": "lead_sublist_modal_row_" + String(o("WAWebLeadStage").LeadStage.NONE),
						onClick: function() {
							return w.onSelectStage(o("WAWebLeadStage").LeadStage.NONE);
						},
						onKeyDown: function(t) {
							(t.key === "Enter" || t.key === " ") && (t.preventDefault(), w.onSelectStage(o("WAWebLeadStage").LeadStage.NONE));
						},
						role: "radio",
						tabIndex: e || w.selectedStage == null ? 0 : -1,
						className: "x6s0dn4 x1ypdohk x78zum5 x1n2onr6",
						children: [u.jsx("div", {
							className: "x1t1x2f9 x1iyjqo2 xs83m0k x6ikm8r x10wlt62",
							children: u.jsx(r("WAWebLabelsLabelListItem.react"), {
								label: t.id,
								showContextActions: !1,
								entryPoint: N,
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
				checked: w.selectedStage === a,
				groupName: b,
				leadListName: t.name,
				onSelectStage: w.onSelectStage,
				stage: a
			});
		}, oe = o("WAWebListsGatingUtils").isListsEnabled() && g === "label-selection" ? C : y, ae = g === "label-list" && !P && (!o("WAWebMobilePlatforms").isSMB() || o("WAWebListsGatingUtils").isListsM2Enabled());
		return u.jsxs(r("WAWebFlatListContainer.react"), {
			flatListControllers: [h],
			children: [
				g === "label-selection" && o("WAWebListsLabelGatingUtils").labelsEditingEnabled() && u.jsx(r("WAWebLabelsLabelListNewLabel.react"), {
					onEditingChange: B,
					onNewLabelAdded: T,
					entryPoint: N
				}),
				g === "label-list" && !o("WAWebMobilePlatforms").isSMB() && !P && u.jsx(r("WAWebDrawerSection.react"), {
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
						!O && (g === "label-list" ? u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
							"data-tab": o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
							onFocus: Q,
							children: u.jsx("div", {
								ref: K,
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
										data: z,
										renderItem: function(t) {
											var e = t.leadStage, n = t.listItem, r = t.order;
											return re(n, r, e);
										},
										defaultItemHeight: oe
									})
								})
							})
						}) : u.jsx(o("WAWebFlatList.react").FlatList, {
							flatListController: h,
							direction: "vertical",
							forceConsistentRenderCount: !1,
							data: z,
							renderItem: function(t) {
								var e = t.leadStage, n = t.listItem, r = t.order;
								return re(n, r, e);
							},
							defaultItemHeight: oe
						})),
						g === "label-selection" && o("WAWebListsGatingUtils").isListsEnabled() && o("WAWebMobilePlatforms").isSMB() && !O && c != null && u.jsx(r("WAWebSuggestedLists.react"), {
							onSelect: c,
							selectedSuggestionIds: i,
							suggestedListTheme: "list-assign-modal"
						}),
						G && N !== o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_SETTINGS && u.jsx(o("WAWebFlex.react").FlexRow, {
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
												H(), o("WAWebModalManager").ModalManager.close();
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
				ae && u.jsx(k, {})
			]
		});
	}
	T.displayName = T.name + " [from " + i.id + "]", l.default = T;
}), 226);
