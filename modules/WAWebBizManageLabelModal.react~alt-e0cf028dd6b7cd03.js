__d("WAWebBizManageLabelModal.react", [
	"fbt",
	"WAJids",
	"WALogger",
	"WASmaxInBizSettingsEnums",
	"WAWebApplyLeadStageSublistAction",
	"WAWebBizLabelEditingAction",
	"WAWebBizLabelUtils",
	"WAWebButton.react",
	"WAWebCTWAConstants",
	"WAWebCTWADataSharingModel",
	"WAWebChatCollection",
	"WAWebChatGetters",
	"WAWebChatModel",
	"WAWebChatThreadLogging",
	"WAWebCommonCTWADataSharing",
	"WAWebCtwaConversationDepthUtils",
	"WAWebCustomLabels3pdSignalUtils",
	"WAWebDataSharingOptOutOrUpsell.react",
	"WAWebDataSharingUpsellModel",
	"WAWebDrawerHeader.react",
	"WAWebFbtCommon",
	"WAWebLabelCollection",
	"WAWebLabelConstants",
	"WAWebLabelsMultiSelectLabelList.react",
	"WAWebLeadListConstants",
	"WAWebLeadStage",
	"WAWebLeadSublistGating",
	"WAWebListItemParentType",
	"WAWebListsGatingUtils",
	"WAWebListsLabelGatingUtils",
	"WAWebListsLogging",
	"WAWebListsUtil",
	"WAWebMobilePlatforms",
	"WAWebModal.react",
	"WAWebMultiSelection",
	"WAWebNoop",
	"WAWebSchemaLabel",
	"WAWebSmb3pdConversionSignalAction",
	"WAWebSmbMarkAsXLabelAction",
	"WAWebStateUtils",
	"WAWebSyncLeadStageToProfile",
	"WAWebUserPrefsGeneral",
	"WAWebWamEnumLabelOperations",
	"WAWebWamEnumLabelTargets",
	"WAWebWamEnumLastMessageDirection",
	"WAWebWamEnumListAction",
	"WAWebWamEnumSmbListFeatureNameType",
	"WAWebWamEnumSmbListSurfaceType",
	"WAWebWamEnumUpdateEntryPoint",
	"WAWebWamLabelEventReporter",
	"WAWebWamSmbListEventReporter",
	"WDSButton.react",
	"WDSButtonGroup.react",
	"compactMap",
	"getErrorSafe",
	"react",
	"useWAWebForceUpdate",
	"useWAWebLeadStageForChat"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = ["ref"], d, m = d || (d = o("react")), p = d, _ = p.useEffect, f = p.useMemo, g = p.useState, h = {
		NONE_SELECTED: 0,
		ALL_SELECTED: 1,
		PARTIALLY_SELECTED: 2
	}, y = function() {
		return o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true;
	};
	function C(e) {
		if (e != null) return e === o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CONTACT_INFO ? o("WAWebWamLabelEventReporter").LabelOperationEntryPoints.CONTACT_INFO : e === o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.GROUP_INFO ? o("WAWebWamLabelEventReporter").LabelOperationEntryPoints.GROUP_INFO : e === o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_MORE_OPTIONS ? o("WAWebWamLabelEventReporter").LabelOperationEntryPoints.CHAT_OVERFLOW : e === o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_LONG_PRESS_OPTIONS ? o("WAWebWamLabelEventReporter").LabelOperationEntryPoints.CHAT_LIST_CONTEXT_MENU : e === o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_SETTINGS ? o("WAWebWamLabelEventReporter").LabelOperationEntryPoints.LIST_SETTINGS : e === o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_NUX ? o("WAWebWamLabelEventReporter").LabelOperationEntryPoints.LIST_NUX : e === o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.BROADCAST_LIST_CHAT_INFO_OVERFLOW ? o("WAWebWamLabelEventReporter").LabelOperationEntryPoints.BROADCAST_LIST_CHAT_INFO_OVERFLOW : void 0;
	}
	function b(e) {
		var t = e.addedLabelIds, n = e.entryPointConversionSource, r = e.hasChat, a = e.labelCount, i = e.labelOpEntryPoint, l = e.removedLabelIds, s = e.threadIdHmac;
		t.length > 0 && t.forEach(function(e) {
			var t = o("WAWebLabelCollection").LabelCollection.get(e);
			if (t) {
				var r = o("WAWebLabelConstants").mapLabelNameToPredefinedId(t.name), a = r != null ? r : t.predefinedId;
				o("WAWebWamLabelEventReporter").logLabelOperationEvent(o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.ADD, void 0, o("WAWebWamEnumLabelTargets").LABEL_TARGETS.CONTACT, s != null ? s : void 0, a != null ? a : void 0, a != null ? void 0 : t.name, n, i);
			}
		}), l.length > 0 && l.forEach(function(e) {
			var t = o("WAWebLabelCollection").LabelCollection.get(e);
			if (t) {
				var r = o("WAWebLabelConstants").mapLabelNameToPredefinedId(t.name), a = r != null ? r : t.predefinedId;
				o("WAWebWamLabelEventReporter").logLabelOperationEvent(o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.DELETE, void 0, o("WAWebWamEnumLabelTargets").LABEL_TARGETS.CONTACT, s != null ? s : void 0, a != null ? a : void 0, a != null ? void 0 : t.name, n, i);
			}
		}), r && o("WAWebWamLabelEventReporter").logLabelOperationEvent(o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.UPDATE_LABEL_COUNT, a, o("WAWebWamEnumLabelTargets").LABEL_TARGETS.CONTACT, s != null ? s : void 0, void 0, void 0, n, i);
	}
	function v(t) {
		"use no forget";
		var n, a, i = t.ref, l = babelHelpers.objectWithoutPropertiesLoose(t, c), d = g(y), p = d[0], v = d[1];
		_(function() {
			return function() {
				o("WAWebDataSharingUpsellModel").enableUpsell();
			};
		}, []);
		var S = l.entryPoint, R = l.modelsToUpdate, L = l.onLabelUpdateComplete, E = o("WAWebListsGatingUtils").isListsEnabled(), k = f(function() {
			return new (r("WAWebMultiSelection"))([], function(e) {
				return e.id;
			});
		}, []), I = g([]), T = I[0], D = I[1], x = R.length === 1 && R[0] instanceof o("WAWebChatModel").Chat ? R[0] : null, $ = o("WAWebLabelCollection").LabelCollection.findFirst(function(e) {
			return e.predefinedId === o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID;
		}), P = x != null && $ != null && o("WAWebLeadSublistGating").isChatEligibleForLeadSublist(x), N = o("WAJids").unsafeCoerceToChatJid((n = (a = x != null ? x : R[0]) == null ? void 0 : a.id.toString()) != null ? n : ""), M = r("useWAWebLeadStageForChat")(N, P), w = M.isResolved, A = M.stage, F = A != null ? A : o("WAWebLeadStage").LeadStage.NONE, O = P && x != null ? o("WAWebSyncLeadStageToProfile").getLeadProfileChatJid(x) : null, B = g(null), W = B[0], q = B[1], U = W != null ? W : F, V = g(function() {
			return new Map();
		}), H = V[0], G = V[1], z = f(function() {
			return new Set(H.keys());
		}, [H]), j = function(t) {
			var e = t.predefinedId;
			G(function(n) {
				var r = new Map(n);
				return r.has(e) ? r.delete(e) : r.set(e, t), r;
			}), D(function(t) {
				return t.includes("suggestion_" + e) ? t.filter(function(t) {
					return t !== "suggestion_" + e;
				}) : [].concat(t, ["suggestion_" + e]);
			}), o("WAWebWamSmbListEventReporter").logSmbListEvent({
				labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.SUGGESTION_CLICKED,
				updateEntryPoint: S != null ? S : void 0,
				predefinedId: t.predefinedId
			});
		}, K = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), Q = f(function() {
			var e = function() {
				var e, t = {}, n = E ? (e = o("WAWebLabelCollection").LabelCollection.findFirst(function(e) {
					return e.type === o("WAWebSchemaLabel").ListType.FAVORITES;
				})) == null ? void 0 : e.id : null;
				return R.forEach(function(e) {
					var r = o("WAWebStateUtils").unproxy(e);
					r.labels && r.labels.forEach(function(e) {
						t[e] = t[e] ? ++t[e] : 1;
					}), r.isFavorite === !0 && n != null && (t[n] = t[n] ? ++t[n] : 1);
				}), t;
			}, t = e(), n = {};
			return Object.entries(t).forEach(function(e) {
				var t = e[0], r = e[1];
				if (r === R.length) n[t] = h.ALL_SELECTED;
				else if (r > 0) {
					n[t] = h.PARTIALLY_SELECTED;
					return;
				} else n[t] = h.NONE_SELECTED;
			}), n;
		}, []), X = function(t) {
			var e = k.list.findIndex(function(e) {
				return e.id === t;
			});
			return e !== -1 ? !!k.selected[e] : Q[t] === h.ALL_SELECTED;
		}, Y = $ != null && X($.id), J = W != null && Y && (!w || W !== F), Z = function(t) {
			if ($ != null) {
				var e = Y && w && U === t;
				if (e) {
					q(o("WAWebLeadStage").LeadStage.NONE), k.setVal($, !1, !1), te($.id);
					return;
				}
				q(t), Y || (k.setVal($, !0, !1), te($.id));
			}
		}, ee = P && $ != null ? {
			leadListId: $.id,
			onSelectStage: Z,
			selectedStage: Y && (w || W != null) ? U : null
		} : null, te = function(t) {
			t != null && (Q[t] === h.PARTIALLY_SELECTED ? D(function(e) {
				return [].concat(e, ["{labelId}_changed"]);
			}) : T.includes(t) ? D(function(e) {
				return e.filter(function(e) {
					return e !== t;
				});
			}) : (Q[t] == null && o("WAWebListsLabelGatingUtils").labelsEditingEnabled() && (Q[t] = h.ALL_SELECTED), D(function(e) {
				return e.includes(t) ? e : [].concat(e, [t]);
			})), K());
		}, ne = function() {
			if (!(!P || $ == null) && W != null && !(w && U === F)) {
				if (!X($.id)) {
					o("WAWebSyncLeadStageToProfile").syncLeadStageToProfile(O, o("WAWebLeadStage").LeadStage.NONE);
					return;
				}
				o("WAWebApplyLeadStageSublistAction").applyLeadStageSublist(N, U, w ? F : null).then(function() {
					return o("WAWebSyncLeadStageToProfile").syncLeadStageToProfile(O, U);
				}, function(t) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[customer_manager] lead stage write from the lists modal failed"]))).catching(r("getErrorSafe")(t)).sendLogs("lead-stage-sublist-modal-apply-fail");
				});
			}
		}, re = function() {
			o("WAWebListsUtil").logLabelOperationEventsForModels(R);
			var e = k.list, t = k.selected, n = [], a = [], i = [], l = new Map();
			if (e.forEach(function(e, r) {
				if (t[r] ? n.push(e.id) : a.push(e.id), i.push(babelHelpers.extends({
					id: e.id,
					type: t[r] ? "add" : "remove"
				}, e.type != null && { listType: e.type })), S != null && E) {
					var s = o("WAWebLabelCollection").LabelCollection.get(e.id);
					s != null && l.set(e.id, o("WAWebListsUtil").getAllChatsInList(s));
				}
			}), o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels(i, R), ne(), S != null && E) {
				var s = r("compactMap")(R, function(e) {
					return o("WAWebChatCollection").ChatCollection.get(e.id);
				});
				i.forEach(function(e) {
					var t = l.get(e.id);
					if (t != null) {
						var n, r;
						e.type === "add" ? n = s : e.type === "remove" && (r = s), o("WAWebListsLogging").logListUpdate({
							listId: Number(e.id),
							listAction: o("WAWebWamEnumListAction").LIST_ACTION.UPDATE_MEMBERS,
							entryPoint: S,
							chatsBeforeUpdate: t,
							addedChats: n,
							removedChats: r
						});
					}
				}), s.forEach(function(e) {
					var t = e.id.toString(), n = [], a = [];
					if (i.forEach(function(e) {
						var r, o = ((r = l.get(e.id)) != null ? r : []).some(function(e) {
							return e.id.toString() === t;
						});
						e.type === "add" && !o ? n.push(e.id) : e.type === "remove" && o && a.push(e.id);
					}), !(n.length === 0 && a.length === 0)) {
						var s = n.length > 0 ? n.join("+") : void 0, u = a.length > 0 ? a.join("+") : void 0, c = o("WAWebChatGetters").getIsGroup(e);
						if (c) o("WAWebWamSmbListEventReporter").logSmbListEvent({
							labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.UPDATE_MEMBERS,
							updateEntryPoint: S,
							labelTarget: o("WAWebWamEnumLabelTargets").LABEL_TARGETS.GROUP,
							bulkLabeling: R.length > 1,
							listsApplied: s,
							listsRemoved: u
						});
						else {
							var d, m = o("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(e), p = (d = e.msgs) == null ? void 0 : d.getModelsArray().at(-1), _;
							p != null && (_ = p.id.fromMe ? o("WAWebWamEnumLastMessageDirection").LAST_MESSAGE_DIRECTION.SELF_INITIATED : o("WAWebWamEnumLastMessageDirection").LAST_MESSAGE_DIRECTION.OPPOSITE_PARTY_INITIATED), o("WAWebChatThreadLogging").getChatThreadIDHMAC(t).then(function(t) {
								o("WAWebWamSmbListEventReporter").logSmbListEvent({
									labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.UPDATE_MEMBERS,
									updateEntryPoint: S,
									labelTarget: o("WAWebWamEnumLabelTargets").LABEL_TARGETS.CONTACT,
									bulkLabeling: R.length > 1,
									listsApplied: s,
									listsRemoved: u,
									threadIdHmac: t != null ? t : void 0,
									entryPointConversionSource: m != null ? "ctwa_ad" : void 0,
									messageDepth: o("WAWebCtwaConversationDepthUtils").getCtwaConversationDepth(e),
									lastMessageDirection: _
								});
							}).catch(r("WAWebNoop"));
						}
					}
				});
				var c = [];
				n.length > 0 && c.push("lists_applied"), a.length > 0 && c.push("lists_removed"), o("WAWebWamSmbListEventReporter").logSmbListEvent({
					labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.VIEW,
					updateEntryPoint: S,
					smbListSurface: o("WAWebWamEnumSmbListSurfaceType").SMB_LIST_SURFACE_TYPE.INBOX,
					smbListFeatureName: o("WAWebWamEnumSmbListFeatureNameType").SMB_LIST_FEATURE_NAME_TYPE.LIST_APPLICATION,
					userActionTarget: c.join(",") || void 0
				});
			}
			n.length > 0 && (o("WAWebSmbMarkAsXLabelAction").logLabelSignalForModels(R, n, p), o("WAWebSmb3pdConversionSignalAction").log3pdConversionSignalForChats(R, n, p), o("WAWebCustomLabels3pdSignalUtils").processCustomLabels3pdSignals(n, R, p));
			var d = C(S);
			if (R.forEach(function(e) {
				var t = o("WAWebChatCollection").ChatCollection.get(e.id), r = (t == null ? void 0 : t.labels) || [], i = r.length + n.length - a.length, l = t != null ? o("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(t) : null, s = l != null ? "ctwa_ad" : void 0;
				o("WAWebChatThreadLogging").getChatThreadIDHMAC(e.id.toString()).then(function(e) {
					b({
						addedLabelIds: n,
						entryPointConversionSource: s,
						hasChat: t != null,
						labelCount: i,
						labelOpEntryPoint: d,
						removedLabelIds: a,
						threadIdHmac: e
					});
				});
			}), H.size > 0 && E && o("WAWebMobilePlatforms").isSMB()) {
				(async function() {
					try {
						for (var e of H.values()) {
							var t, n, r = await o("WAWebBizLabelEditingAction").labelAddAction((t = (n = e.displayName) == null ? void 0 : n.toString()) != null ? t : e.name, e.colorIndex);
							if (r != null) {
								o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels([{
									id: String(r),
									type: "add"
								}], R);
								var a = [String(r)];
								o("WAWebSmbMarkAsXLabelAction").logLabelSignalForModels(R, a, p), o("WAWebSmb3pdConversionSignalAction").log3pdConversionSignalForChats(R, a, p), o("WAWebCustomLabels3pdSignalUtils").processCustomLabels3pdSignals(a, R, p);
							}
						}
					} catch (e) {
						o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Failed to create suggested list: ", ""])), e).sendLogs("suggested-list-creation-failed-labels-modal");
					} finally {
						L();
					}
				})();
				return;
			}
			L();
		}, oe = E ? m.jsx(r("WDSButton.react"), {
			type: "default",
			size: "medium",
			variant: "filled",
			onPress: re,
			testid: "popup-controls-ok",
			disabled: T.length === 0 && !J,
			label: s._(
				/*BTDS*/
				""
			)
		}) : m.jsx(o("WAWebButton.react").Button, {
			testid: "popup-controls-ok",
			type: "primary",
			disabled: T.length === 0 && !J,
			onClick: re,
			children: s._(
				/*BTDS*/
				""
			)
		}, 1), ae = E ? m.jsx(r("WDSButton.react"), {
			variant: "borderless",
			onPress: l.onCancel,
			testid: "popup-controls-cancel",
			size: "medium",
			type: "default",
			label: r("WAWebFbtCommon")("Cancel")
		}) : m.jsx(o("WAWebButton.react").Button, {
			testid: "popup-controls-cancel",
			type: "secondary",
			onClick: l.onCancel,
			children: r("WAWebFbtCommon")("Cancel")
		}, 0), ie = E ? m.jsx(r("WDSButtonGroup.react"), {
			width: "hug",
			orientation: "horizontal",
			primaryButtonProps: {
				variant: "filled",
				type: "default",
				onPress: re,
				testid: "popup-controls-ok",
				disabled: T.length === 0 && !J,
				label: s._(
					/*BTDS*/
					""
				)
			},
			tertiaryButtonProps: {
				variant: "borderless",
				type: "default",
				onPress: l.onCancel,
				testid: "popup-controls-cancel",
				label: r("WAWebFbtCommon")("Cancel")
			}
		}) : m.jsxs(o("WAWebButton.react").ButtonGroup, {
			direction: "horizontal",
			children: [ae, oe]
		}), le = E ? s._(
			/*BTDS*/
			""
		) : m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: s._(
				/*BTDS*/
				""
			),
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
			onCancel: l.onCancel
		}), se = f(function() {
			var e = [];
			return R.forEach(function(t) {
				t instanceof o("WAWebChatModel").Chat && e.push(t);
			}), e;
		}, [R]), ue = o("WAWebCommonCTWADataSharing").shouldDisplayDataSharingLabelOptOutOrUpsell(R) ? m.jsx(o("WAWebDataSharingOptOutOrUpsell.react").DataSharingOptOutOrUpsell, {
			chats: se,
			checkboxValue: p,
			onCheckboxToggle: function() {
				return v(!p);
			},
			theme: "labels-opt-out"
		}) : null, ce = f(function() {
			if (o("WAWebUserPrefsGeneral").getDetectedOutcomeOnboardingStatus() === !0 && R.length === 1) {
				var e = R[0];
				return o("WAWebLabelCollection").LabelCollection.filter(function(e) {
					return e.predefinedId === o("WAWebCTWAConstants").NEW_ORDER_PREDEFINED_ID || e.predefinedId === o("WAWebCTWAConstants").LEAD_PREDEFINED_ID;
				}).reduce(function(t, n) {
					return n.labelItemCollection.map(function(n) {
						if (n.parentType === o("WAWebListItemParentType").LabelItemParentType.Chat && n.parentId === e.id.toString() && n.detectedOutcomeOriginalLabelPredefinedId != null) {
							var r = o("WAWebBizLabelUtils").mapDOLabelPredefinedIdToManualLabelId(n.detectedOutcomeOriginalLabelPredefinedId);
							r != null && t.push(r);
						}
					}), t;
				}, []);
			}
			return [];
		}, [R]), de = E ? o("WAWebModal.react").ModalTheme.ListsAssignModal : o("WAWebModal.react").ModalTheme.LabelList;
		return m.jsxs(o("WAWebModal.react").Modal, {
			ref: i,
			type: de,
			actions: ie,
			title: le,
			testid: "choose-list-modal",
			tsNavigationData: { surface: E ? "smb-lists-picker" : "smb-labels-list" },
			children: [m.jsx(r("WAWebLabelsMultiSelectLabelList.react"), {
				autoLabeledLabelIds: ce,
				onNewLabelAdded: l.onNewLabelAdded,
				onToggleSuggestion: j,
				shouldScrollIntoViewAndSelect: l.shouldScrollIntoViewAndSelect,
				initialLabelState: Q,
				selectedLabels: k,
				selectedSuggestionIds: z,
				renderContext: "label-selection",
				onMultiSelect: te,
				entryPoint: S,
				leadSublist: ee
			}), ue]
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = v;
}), 226);
