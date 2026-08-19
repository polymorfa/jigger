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
	"asyncToGeneratorRuntime",
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
		var a, i, l = t.ref, d = babelHelpers.objectWithoutPropertiesLoose(t, c), p = g(y), v = p[0], S = p[1];
		_(function() {
			return function() {
				o("WAWebDataSharingUpsellModel").enableUpsell();
			};
		}, []);
		var R = d.entryPoint, L = d.modelsToUpdate, E = d.onLabelUpdateComplete, k = o("WAWebListsGatingUtils").isListsEnabled(), I = f(function() {
			return new (r("WAWebMultiSelection"))([], function(e) {
				return e.id;
			});
		}, []), T = g([]), D = T[0], x = T[1], $ = L.length === 1 && L[0] instanceof o("WAWebChatModel").Chat ? L[0] : null, P = o("WAWebLabelCollection").LabelCollection.findFirst(function(e) {
			return e.predefinedId === o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID;
		}), N = $ != null && P != null && o("WAWebLeadSublistGating").isChatEligibleForLeadSublist($), M = o("WAJids").unsafeCoerceToChatJid((a = (i = $ != null ? $ : L[0]) == null ? void 0 : i.id.toString()) != null ? a : ""), w = r("useWAWebLeadStageForChat")(M, N), A = w.isResolved, F = w.stage, O = F != null ? F : o("WAWebLeadStage").LeadStage.NONE, B = N && $ != null ? o("WAWebSyncLeadStageToProfile").getLeadProfileChatJid($) : null, W = g(null), q = W[0], U = W[1], V = q != null ? q : O, H = g(function() {
			return new Map();
		}), G = H[0], z = H[1], j = f(function() {
			return new Set(G.keys());
		}, [G]), K = function(t) {
			var e = t.predefinedId;
			z(function(n) {
				var r = new Map(n);
				return r.has(e) ? r.delete(e) : r.set(e, t), r;
			}), x(function(t) {
				return t.includes("suggestion_" + e) ? t.filter(function(t) {
					return t !== "suggestion_" + e;
				}) : [].concat(t, ["suggestion_" + e]);
			}), o("WAWebWamSmbListEventReporter").logSmbListEvent({
				labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.SUGGESTION_CLICKED,
				updateEntryPoint: R != null ? R : void 0,
				predefinedId: t.predefinedId
			});
		}, Q = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), X = f(function() {
			var e = function() {
				var e, t = {}, n = k ? (e = o("WAWebLabelCollection").LabelCollection.findFirst(function(e) {
					return e.type === o("WAWebSchemaLabel").ListType.FAVORITES;
				})) == null ? void 0 : e.id : null;
				return L.forEach(function(e) {
					var r = o("WAWebStateUtils").unproxy(e);
					r.labels && r.labels.forEach(function(e) {
						t[e] = t[e] ? ++t[e] : 1;
					}), r.isFavorite === !0 && n != null && (t[n] = t[n] ? ++t[n] : 1);
				}), t;
			}, t = e(), n = {};
			return Object.entries(t).forEach(function(e) {
				var t = e[0], r = e[1];
				if (r === L.length) n[t] = h.ALL_SELECTED;
				else if (r > 0) {
					n[t] = h.PARTIALLY_SELECTED;
					return;
				} else n[t] = h.NONE_SELECTED;
			}), n;
		}, []), Y = function(t) {
			var e = I.list.findIndex(function(e) {
				return e.id === t;
			});
			return e !== -1 ? !!I.selected[e] : X[t] === h.ALL_SELECTED;
		}, J = P != null && Y(P.id), Z = q != null && J && (!A || q !== O), ee = function(t) {
			if (P != null) {
				var e = J && A && V === t;
				if (e) {
					U(o("WAWebLeadStage").LeadStage.NONE), I.setVal(P, !1, !1), ne(P.id);
					return;
				}
				U(t), J || (I.setVal(P, !0, !1), ne(P.id));
			}
		}, te = N && P != null ? {
			leadListId: P.id,
			onSelectStage: ee,
			selectedStage: J && (A || q != null) ? V : null
		} : null, ne = function(t) {
			t != null && (X[t] === h.PARTIALLY_SELECTED ? x(function(e) {
				return [].concat(e, ["{labelId}_changed"]);
			}) : D.includes(t) ? x(function(e) {
				return e.filter(function(e) {
					return e !== t;
				});
			}) : (X[t] == null && o("WAWebListsLabelGatingUtils").labelsEditingEnabled() && (X[t] = h.ALL_SELECTED), x(function(e) {
				return e.includes(t) ? e : [].concat(e, [t]);
			})), Q());
		}, re = function() {
			if (!(!N || P == null) && q != null && !(A && V === O)) {
				if (!Y(P.id)) {
					o("WAWebSyncLeadStageToProfile").syncLeadStageToProfile(B, o("WAWebLeadStage").LeadStage.NONE);
					return;
				}
				o("WAWebApplyLeadStageSublistAction").applyLeadStageSublist(M, V, A ? O : null).then(function() {
					return o("WAWebSyncLeadStageToProfile").syncLeadStageToProfile(B, V);
				}, function(t) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[customer_manager] lead stage write from the lists modal failed"]))).catching(r("getErrorSafe")(t)).sendLogs("lead-stage-sublist-modal-apply-fail");
				});
			}
		}, oe = function() {
			o("WAWebListsUtil").logLabelOperationEventsForModels(L);
			var e = I.list, t = I.selected, a = [], i = [], l = [], s = new Map();
			if (e.forEach(function(e, n) {
				if (t[n] ? a.push(e.id) : i.push(e.id), l.push(babelHelpers.extends({
					id: e.id,
					type: t[n] ? "add" : "remove"
				}, e.type != null && { listType: e.type })), R != null && k) {
					var r = o("WAWebLabelCollection").LabelCollection.get(e.id);
					r != null && s.set(e.id, o("WAWebListsUtil").getAllChatsInList(r));
				}
			}), o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels(l, L), re(), R != null && k) {
				var c = r("compactMap")(L, function(e) {
					return o("WAWebChatCollection").ChatCollection.get(e.id);
				});
				l.forEach(function(e) {
					var t = s.get(e.id);
					if (t != null) {
						var n, r;
						e.type === "add" ? n = c : e.type === "remove" && (r = c), o("WAWebListsLogging").logListUpdate({
							listId: Number(e.id),
							listAction: o("WAWebWamEnumListAction").LIST_ACTION.UPDATE_MEMBERS,
							entryPoint: R,
							chatsBeforeUpdate: t,
							addedChats: n,
							removedChats: r
						});
					}
				}), c.forEach(function(e) {
					var t = e.id.toString(), n = [], a = [];
					if (l.forEach(function(e) {
						var r, o = ((r = s.get(e.id)) != null ? r : []).some(function(e) {
							return e.id.toString() === t;
						});
						e.type === "add" && !o ? n.push(e.id) : e.type === "remove" && o && a.push(e.id);
					}), !(n.length === 0 && a.length === 0)) {
						var i = n.length > 0 ? n.join("+") : void 0, u = a.length > 0 ? a.join("+") : void 0, c = o("WAWebChatGetters").getIsGroup(e);
						if (c) o("WAWebWamSmbListEventReporter").logSmbListEvent({
							labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.UPDATE_MEMBERS,
							updateEntryPoint: R,
							labelTarget: o("WAWebWamEnumLabelTargets").LABEL_TARGETS.GROUP,
							bulkLabeling: L.length > 1,
							listsApplied: i,
							listsRemoved: u
						});
						else {
							var d, m = o("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(e), p = (d = e.msgs) == null ? void 0 : d.getModelsArray().at(-1), _;
							p != null && (_ = p.id.fromMe ? o("WAWebWamEnumLastMessageDirection").LAST_MESSAGE_DIRECTION.SELF_INITIATED : o("WAWebWamEnumLastMessageDirection").LAST_MESSAGE_DIRECTION.OPPOSITE_PARTY_INITIATED), o("WAWebChatThreadLogging").getChatThreadIDHMAC(t).then(function(t) {
								o("WAWebWamSmbListEventReporter").logSmbListEvent({
									labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.UPDATE_MEMBERS,
									updateEntryPoint: R,
									labelTarget: o("WAWebWamEnumLabelTargets").LABEL_TARGETS.CONTACT,
									bulkLabeling: L.length > 1,
									listsApplied: i,
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
				var d = [];
				a.length > 0 && d.push("lists_applied"), i.length > 0 && d.push("lists_removed"), o("WAWebWamSmbListEventReporter").logSmbListEvent({
					labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.VIEW,
					updateEntryPoint: R,
					smbListSurface: o("WAWebWamEnumSmbListSurfaceType").SMB_LIST_SURFACE_TYPE.INBOX,
					smbListFeatureName: o("WAWebWamEnumSmbListFeatureNameType").SMB_LIST_FEATURE_NAME_TYPE.LIST_APPLICATION,
					userActionTarget: d.join(",") || void 0
				});
			}
			a.length > 0 && (o("WAWebSmbMarkAsXLabelAction").logLabelSignalForModels(L, a, v), o("WAWebSmb3pdConversionSignalAction").log3pdConversionSignalForChats(L, a, v), o("WAWebCustomLabels3pdSignalUtils").processCustomLabels3pdSignals(a, L, v));
			var m = C(R);
			if (L.forEach(function(e) {
				var t = o("WAWebChatCollection").ChatCollection.get(e.id), n = (t == null ? void 0 : t.labels) || [], r = n.length + a.length - i.length, l = t != null ? o("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(t) : null, s = l != null ? "ctwa_ad" : void 0;
				o("WAWebChatThreadLogging").getChatThreadIDHMAC(e.id.toString()).then(function(e) {
					b({
						addedLabelIds: a,
						entryPointConversionSource: s,
						hasChat: t != null,
						labelCount: r,
						labelOpEntryPoint: m,
						removedLabelIds: i,
						threadIdHmac: e
					});
				});
			}), G.size > 0 && k && o("WAWebMobilePlatforms").isSMB()) {
				n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					try {
						for (var e of G.values()) {
							var t, n, r = yield o("WAWebBizLabelEditingAction").labelAddAction((t = (n = e.displayName) == null ? void 0 : n.toString()) != null ? t : e.name, e.colorIndex);
							if (r != null) {
								o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels([{
									id: String(r),
									type: "add"
								}], L);
								var a = [String(r)];
								o("WAWebSmbMarkAsXLabelAction").logLabelSignalForModels(L, a, v), o("WAWebSmb3pdConversionSignalAction").log3pdConversionSignalForChats(L, a, v), o("WAWebCustomLabels3pdSignalUtils").processCustomLabels3pdSignals(a, L, v);
							}
						}
					} catch (e) {
						o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Failed to create suggested list: ", ""])), e).sendLogs("suggested-list-creation-failed-labels-modal");
					} finally {
						E();
					}
				})();
				return;
			}
			E();
		}, ae = k ? m.jsx(r("WDSButton.react"), {
			type: "default",
			size: "medium",
			variant: "filled",
			onPress: oe,
			testid: "popup-controls-ok",
			disabled: D.length === 0 && !Z,
			label: s._(
				/*BTDS*/
				""
			)
		}) : m.jsx(o("WAWebButton.react").Button, {
			testid: "popup-controls-ok",
			type: "primary",
			disabled: D.length === 0 && !Z,
			onClick: oe,
			children: s._(
				/*BTDS*/
				""
			)
		}, 1), ie = k ? m.jsx(r("WDSButton.react"), {
			variant: "borderless",
			onPress: d.onCancel,
			testid: "popup-controls-cancel",
			size: "medium",
			type: "default",
			label: r("WAWebFbtCommon")("Cancel")
		}) : m.jsx(o("WAWebButton.react").Button, {
			testid: "popup-controls-cancel",
			type: "secondary",
			onClick: d.onCancel,
			children: r("WAWebFbtCommon")("Cancel")
		}, 0), le = k ? m.jsx(r("WDSButtonGroup.react"), {
			width: "hug",
			orientation: "horizontal",
			primaryButtonProps: {
				variant: "filled",
				type: "default",
				onPress: oe,
				testid: "popup-controls-ok",
				disabled: D.length === 0 && !Z,
				label: s._(
					/*BTDS*/
					""
				)
			},
			tertiaryButtonProps: {
				variant: "borderless",
				type: "default",
				onPress: d.onCancel,
				testid: "popup-controls-cancel",
				label: r("WAWebFbtCommon")("Cancel")
			}
		}) : m.jsxs(o("WAWebButton.react").ButtonGroup, {
			direction: "horizontal",
			children: [ie, ae]
		}), se = k ? s._(
			/*BTDS*/
			""
		) : m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: s._(
				/*BTDS*/
				""
			),
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
			onCancel: d.onCancel
		}), ue = f(function() {
			var e = [];
			return L.forEach(function(t) {
				t instanceof o("WAWebChatModel").Chat && e.push(t);
			}), e;
		}, [L]), ce = o("WAWebCommonCTWADataSharing").shouldDisplayDataSharingLabelOptOutOrUpsell(L) ? m.jsx(o("WAWebDataSharingOptOutOrUpsell.react").DataSharingOptOutOrUpsell, {
			chats: ue,
			checkboxValue: v,
			onCheckboxToggle: function() {
				return S(!v);
			},
			theme: "labels-opt-out"
		}) : null, de = f(function() {
			if (o("WAWebUserPrefsGeneral").getDetectedOutcomeOnboardingStatus() === !0 && L.length === 1) {
				var e = L[0];
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
		}, [L]), me = k ? o("WAWebModal.react").ModalTheme.ListsAssignModal : o("WAWebModal.react").ModalTheme.LabelList;
		return m.jsxs(o("WAWebModal.react").Modal, {
			ref: l,
			type: me,
			actions: le,
			title: se,
			testid: "choose-list-modal",
			tsNavigationData: { surface: k ? "smb-lists-picker" : "smb-labels-list" },
			children: [m.jsx(r("WAWebLabelsMultiSelectLabelList.react"), {
				autoLabeledLabelIds: de,
				onNewLabelAdded: d.onNewLabelAdded,
				onToggleSuggestion: K,
				shouldScrollIntoViewAndSelect: d.shouldScrollIntoViewAndSelect,
				initialLabelState: X,
				selectedLabels: I,
				selectedSuggestionIds: j,
				renderContext: "label-selection",
				onMultiSelect: ne,
				entryPoint: R,
				leadSublist: te
			}), ce]
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = v;
}), 226);
