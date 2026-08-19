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
	"react-compiler-runtime",
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
		var e = o("react-compiler-runtime").c(2), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = [g.margin6, o("WDSMargins.stylex").wdsMargins.marginEnd16], e[0] = t) : t = e[0];
		var n;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = u.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: t,
			justify: "center",
			align: "center",
			children: u.jsx(o("WAWebDraggableItemIcon.react").DraggableItemIcon, {
				width: 18,
				height: 18
			})
		}), e[1] = n) : n = e[1], n;
	}
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
		var t = o("react-compiler-runtime").c(28), n = e.autoLabeledLabelIds, a = e.detailElement, i = e.entryPoint, l = e.initialLabelState, s = e.isFirstItem, c = e.isReorderActive, d = e.label, m = e.onLabelClick, p = e.onMultiSelect, _ = e.ref, f = e.renderContext, g = e.selectableState, h = e.selectedLabels, y = e.showContextActions;
		if (!d.name) return null;
		var C;
		t[0] !== d.id ? (C = o("WAWebLabelCollection").LabelCollection.assertGet(d.id), t[0] = d.id, t[1] = C) : C = t[1];
		var b = C, v;
		t[2] !== d.id || t[3] !== m ? (v = m ? function() {
			m(d.id);
		} : void 0, t[2] = d.id, t[3] = m, t[4] = v) : v = t[4];
		var S = v, R;
		t[5] !== n || t[6] !== d.id ? (R = n.includes(d.id), t[5] = n, t[6] = d.id, t[7] = R) : R = t[7];
		var L = R, E;
		t[8] !== b || t[9] !== a || t[10] !== i || t[11] !== S || t[12] !== l || t[13] !== s || t[14] !== c || t[15] !== d.id || t[16] !== p || t[17] !== f || t[18] !== g || t[19] !== h || t[20] !== L || t[21] !== y ? (E = f === "label-selection" ? u.jsx(r("WAWebChatCheckboxWrapper.react"), {
			theme: o("WAWebListsLabelGatingUtils").labelsEditingEnabled() ? "label-selection-redesigned" : "label-selection",
			model: b,
			initialSelection: l[d.id] || 0,
			multiSelection: h,
			selectableState: g,
			onSelect: p,
			children: u.jsx(r("WAWebLabelsLabelListItem.react"), {
				label: d.id,
				onClick: S,
				showContextActions: y,
				entryPoint: i,
				shouldDisplayAutoLabeledText: L
			})
		}) : u.jsx(r("WAWebLabelsLabelListItem.react"), {
			label: d.id,
			detailElement: a,
			isFirstItem: s,
			isReorderActive: c,
			theme: f,
			onClick: S,
			showContextActions: y,
			entryPoint: i,
			shouldDisplayAutoLabeledText: L
		}), t[8] = b, t[9] = a, t[10] = i, t[11] = S, t[12] = l, t[13] = s, t[14] = c, t[15] = d.id, t[16] = p, t[17] = f, t[18] = g, t[19] = h, t[20] = L, t[21] = y, t[22] = E) : E = t[22];
		var k = E, I = "label_item_" + d.id, T = "label-list-item-" + d.id, D;
		return t[23] !== k || t[24] !== _ || t[25] !== I || t[26] !== T ? (D = u.jsx("div", {
			ref: _,
			"data-testid": T,
			children: k
		}, I), t[23] = k, t[24] = _, t[25] = I, t[26] = T, t[27] = D) : D = t[27], D;
	}
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
		var e = o("react-compiler-runtime").c(8), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = o("WAWebLabelCollection").LabelCollection.getInactivePresetLists(), e[0] = t) : t = e[0];
		var n = f(t), a = n[0], i = n[1], l;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (l = function() {
			i(o("WAWebLabelCollection").LabelCollection.getInactivePresetLists());
		}, e[1] = l) : l = e[1], o("useWAWebListener").useListener(o("WAWebLabelCollection").LabelCollection, "change:isActive", l);
		var c = T;
		if (a.length === 0) return null;
		var d;
		e[2] === Symbol.for("react.memo_cache_sentinel") ? (d = s._(
			/*BTDS*/
			""
		), e[2] = d) : d = e[2];
		var m;
		e[3] === Symbol.for("react.memo_cache_sentinel") ? (m = u.jsx(r("WAWebDrawerSection.react"), {
			title: s._(
				/*BTDS*/
				""
			),
			theme: "list-section",
			animation: !1
		}), e[3] = m) : m = e[3];
		var p;
		e[4] !== a ? (p = a.map(I), e[4] = a, e[5] = p) : p = e[5];
		var _;
		return e[6] !== p ? (_ = u.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
			"data-tab": o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
			"data-testid": "available-lists-section",
			onFocus: c,
			role: "list",
			"aria-label": d,
			children: [m, p]
		}), e[6] = p, e[7] = _) : _ = e[7], _;
	}
	function I(e) {
		return u.jsx(D, { label: e }, e.id);
	}
	I.displayName = I.name + " [from " + i.id + "]";
	function T(e) {
		if (e.target === e.currentTarget) {
			var t = e.currentTarget;
			if (t instanceof HTMLElement) {
				var n = t.querySelector("button");
				n instanceof HTMLElement && n.focus();
			}
		}
	}
	function D(e) {
		var t = o("react-compiler-runtime").c(16), n = e.label, a;
		t[0] !== n ? (a = function() {
			o("WAWebListsActions").activatePresetList(n);
		}, t[0] = n, t[1] = a) : a = t[1];
		var i = a, l;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (l = { className: "x78zum5 x6s0dn4 xnnlda6 x13jy36j x64bnmy" }, t[2] = l) : l = t[2];
		var c;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (c = { className: "x1iyjqo2 xs83m0k xdl72j9 x6ikm8r x10wlt62 xlyipyv xuxw1ft" }, t[3] = c) : c = t[3];
		var d;
		t[4] !== n.name || t[5] !== n.type ? (d = o("WAWebListUtils").getListDisplayName(n.name, n.type), t[4] = n.name, t[5] = n.type, t[6] = d) : d = t[6];
		var m;
		t[7] !== d ? (m = u.jsx("span", babelHelpers.extends({}, c, { children: d })), t[7] = d, t[8] = m) : m = t[8];
		var p;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), t[9] = p) : p = t[9];
		var _;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
			/*BTDS*/
			""
		), t[10] = _) : _ = t[10];
		var f;
		t[11] !== i ? (f = u.jsx(r("WDSTooltip.react"), {
			label: p,
			children: u.jsx(r("WDSButton.react"), {
				Icon: r("WDSIconIcAdd.react"),
				variant: "borderless",
				size: "small",
				type: "default",
				onPress: i,
				"aria-label": _,
				testid: "enable-preset-list-button"
			})
		}), t[11] = i, t[12] = f) : f = t[12];
		var g;
		return t[13] !== m || t[14] !== f ? (g = u.jsxs("div", babelHelpers.extends({}, l, {
			"data-testid": "inactive-preset-list-item",
			children: [m, f]
		})), t[13] = m, t[14] = f, t[15] = g) : g = t[15], g;
	}
	function x(e) {
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
	x.displayName = x.name + " [from " + i.id + "]", l.default = x;
}), 226);
