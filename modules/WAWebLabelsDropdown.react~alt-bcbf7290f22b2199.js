__d("WAWebLabelsDropdown.react", [
	"fbt",
	"WAJids",
	"WALogger",
	"WASmaxInBizSettingsEnums",
	"WAWebApplyLeadStageSublistAction",
	"WAWebCTWADataSharingModel",
	"WAWebChatThreadLogging",
	"WAWebCheckBox.react",
	"WAWebCommonCTWADataSharing",
	"WAWebCreateOrEditListDrawer.react",
	"WAWebCustomLabels3pdSignalUtils",
	"WAWebDomScroll",
	"WAWebDrawerManager",
	"WAWebDropdownItem.react",
	"WAWebLabelCollection",
	"WAWebLabelConstants",
	"WAWebLabelFlowLoadable",
	"WAWebLabels.react",
	"WAWebLeadListConstants",
	"WAWebLeadStage",
	"WAWebLeadSublistGating",
	"WAWebLeadSublistRows.react",
	"WAWebListPeopleIcon.react",
	"WAWebListUtils",
	"WAWebListsActions",
	"WAWebListsGatingUtils",
	"WAWebListsUtil",
	"WAWebNoop",
	"WAWebSchemaLabel",
	"WAWebSmb3pdConversionSignalAction",
	"WAWebSmbMarkAsXLabelAction",
	"WAWebStateUtils",
	"WAWebSyncLeadStageToProfile",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWamEnumLabelOperations",
	"WAWebWamEnumLabelTargets",
	"WAWebWamEnumUpdateEntryPoint",
	"WAWebWamLabelEventReporter",
	"WAWebWamSmbListEventReporter",
	"WDSBaseRadio.react",
	"WDSIconIcAdd.react",
	"countWhere",
	"getErrorSafe",
	"react",
	"useWAWebLeadStageForChat"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useMemo, f = d.useRef, g = d.useState, h = "lead-sublist-stage", y = {
		labelIcon: {
			height: "xxk0z11",
			width: "xvy4d1p",
			marginTop: "xav9cv8",
			$$css: !0
		},
		footerIconSize: {
			height: "xmix8c7",
			width: "x1xp8n7a",
			$$css: !0
		}
	};
	function C(e) {
		var t = e.chat, n = e.onRequestReopen, a = e.pendingNewListId, i = o("WAWebListsGatingUtils").isListsEnabled(), l = o("WAWebLeadSublistGating").isChatEligibleForLeadSublist(t), u = _(function() {
			var e = o("WAWebLabelCollection").LabelCollection.filter(function(e) {
				return e.name ? i ? e.isActive !== !1 && (e.type === o("WAWebSchemaLabel").ListType.CUSTOM || e.type === o("WAWebSchemaLabel").ListType.PREDEFINED || e.type === o("WAWebSchemaLabel").ListType.LEAD && l) : !o("WAWebListUtils").isBuiltInList(e.type) : !1;
			});
			o("WAWebListUtils").sortLabels(e);
			var t = e.findIndex(function(e) {
				return e.predefinedId === o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID;
			});
			return l && t !== -1 && e.push(e.splice(t, 1)[0]), e;
		}, [l, i]), d = _(function() {
			var e = new Set(t.labels || []), n = {};
			return u.forEach(function(t) {
				n[t.id] = e.has(t.id);
			}), n;
		}, [t.labels, u]), C = _(function() {
			var e;
			return a == null ? d : babelHelpers.extends({}, d, (e = {}, e[a] = !0, e));
		}, [d, a]), v = g(C), S = v[0], R = v[1], L = _(function() {
			return u.find(function(e) {
				return e.predefinedId === o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID;
			});
		}, [u]), E = l && L != null, k = o("WAJids").unsafeCoerceToChatJid(t.id.toString()), I = r("useWAWebLeadStageForChat")(k, E), T = I.isResolved, D = I.stage, x = E ? o("WAWebSyncLeadStageToProfile").getLeadProfileChatJid(t) : null, $ = D != null ? D : o("WAWebLeadStage").LeadStage.NONE, P = g(null), N = P[0], M = P[1], w = N != null ? N : $, A = L != null && S[L.id] === !0 ? w : null, F = f(null), O = f(null);
		p(function() {
			if (a != null) {
				var e = window.requestAnimationFrame(function() {
					var e = O.current, t = F.current;
					e != null && t != null && o("WAWebDomScroll").scrollIntoViewIfNeeded(e, !1, t);
				});
				return function() {
					return window.cancelAnimationFrame(e);
				};
			}
		}, [a]);
		var B = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true;
		p(function() {
			o("WAWebChatThreadLogging").getChatThreadIDHMAC(t.id.toString()).then(function(e) {
				o("WAWebWamSmbListEventReporter").logSmbListEvent({
					labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.VIEW,
					labelTarget: o("WAWebWamEnumLabelTargets").LABEL_TARGETS.LABEL_CHAT_DIALOG,
					updateEntryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_HEADER,
					threadIdHmac: e != null ? e : void 0
				});
			});
		}, [t.id]);
		var W = f(d), q = f(S), U = f(a != null ? new Set([a]) : new Set()), V = f({
			chatJid: k,
			isStageResolved: T,
			isSublistEnabled: E,
			leadListId: L == null ? void 0 : L.id,
			persistedStage: $,
			profileChatJid: x,
			selectedStage: w
		});
		p(function() {
			q.current = S;
		}, [S]), p(function() {
			V.current = {
				chatJid: k,
				isStageResolved: T,
				isSublistEnabled: E,
				leadListId: L == null ? void 0 : L.id,
				persistedStage: $,
				profileChatJid: x,
				selectedStage: w
			};
		}, [
			k,
			T,
			E,
			L == null ? void 0 : L.id,
			$,
			x,
			w
		]), p(function() {
			var e = W.current, n = U.current;
			return function() {
				var a = [], i = new Set([].concat(Object.keys(e), Object.keys(q.current)));
				if (i.forEach(function(t) {
					var n = e[t] || !1, r = q.current[t] || !1;
					n !== r && a.push({
						id: t,
						type: r ? "add" : "remove"
					});
				}), a.length > 0 && o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels(a, [t]), b(V.current, q.current), a.length > 0) {
					var l = o("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(t), s = r("countWhere")(Object.keys(e), function(t) {
						return e[t];
					}), u = r("countWhere")(a, function(e) {
						var t = e.type;
						return t === "add";
					}), c = r("countWhere")(a, function(e) {
						var t = e.type;
						return t === "remove";
					}), d = s + u - c, m = l != null ? "ctwa_ad" : void 0;
					o("WAWebChatThreadLogging").getChatThreadIDHMAC(t.id.toString()).then(function(e) {
						a.forEach(function(t) {
							var n = t.id, r = t.type, a = o("WAWebLabelCollection").LabelCollection.get(n);
							if (a) {
								var i = o("WAWebLabelConstants").mapLabelNameToPredefinedId(a.name), l = i != null ? i : a.predefinedId;
								o("WAWebWamLabelEventReporter").logLabelOperationEvent(r === "add" ? o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.ADD : o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.DELETE, void 0, o("WAWebWamEnumLabelTargets").LABEL_TARGETS.CONTACT, e != null ? e : void 0, l != null ? l : void 0, l != null ? void 0 : a.name, m, o("WAWebWamLabelEventReporter").LabelOperationEntryPoints.CHAT_HEADER);
							}
						}), o("WAWebWamLabelEventReporter").logLabelOperationEvent(o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.UPDATE_LABEL_COUNT, d, o("WAWebWamEnumLabelTargets").LABEL_TARGETS.CONTACT, e != null ? e : void 0, void 0, void 0, m, o("WAWebWamLabelEventReporter").LabelOperationEntryPoints.CHAT_HEADER);
					}), a.forEach(function(e) {
						var n, r = e.id, a = e.type, i = o("WAWebLabelCollection").LabelCollection.get(r);
						if (i != null) {
							var l = Number(r), s = String(l);
							o("WAWebListsActions").logUpdateMembersPerChat([t], {
								entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_HEADER,
								listId: l,
								customListTitle: (n = i.name) != null ? n : "",
								listsApplied: a === "add" ? s : void 0,
								listsRemoved: a === "remove" ? s : void 0
							});
						}
					});
				}
				if (n.size > 0) {
					var p = Array.from(n);
					o("WAWebSmbMarkAsXLabelAction").logLabelSignalForModels([t], p, B), o("WAWebSmb3pdConversionSignalAction").log3pdConversionSignalForChats([t], p, B), o("WAWebCustomLabels3pdSignalUtils").processCustomLabels3pdSignals(p, [t], B);
				}
			};
		}, [t, B]);
		var H = m(function(e) {
			var n = S[e] || !1, r = !n;
			R(function(t) {
				var n;
				return babelHelpers.extends({}, t, (n = {}, n[e] = r, n));
			});
			var a = [{
				id: e,
				type: r ? "add" : "remove"
			}];
			o("WAWebLabelCollection").LabelCollection.addOrRemoveLabelsMD(a, [t]), r ? U.current.add(e) : U.current.delete(e);
		}, [S, t]), G = m(function(e) {
			var t = L == null ? void 0 : L.id;
			if (t != null) {
				var n = S[t] === !0;
				if (n && T && w === e) {
					H(t);
					return;
				}
				M(e), n || H(t);
			}
		}, [
			H,
			T,
			S,
			L == null ? void 0 : L.id,
			w
		]), z = m(function(e) {
			o("WAWebDrawerManager").closeDrawerLeft(), n == null || n(e);
		}, [n]), j = m(function() {
			if (o("WAWebListUtils").isListFlowMaxListsCountReached()) {
				o("WAWebListsUtil").showMaxListsModal(i);
				return;
			}
			o("WAWebDrawerManager").DrawerManager.openDrawerLeft(c.jsx(r("WAWebCreateOrEditListDrawer.react"), {
				onBack: z,
				onClose: z,
				entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_HEADER,
				preselectedChats: [o("WAWebStateUtils").unproxy(t)]
			}));
		}, [
			t,
			i,
			z
		]), K = m(function() {
			o("WAWebDrawerManager").DrawerManager.openDrawerLeft(c.jsx(o("WAWebLabelFlowLoadable").LabelFlowLoadable, {
				isInitialStep: !0,
				entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_HEADER
			}));
		}, []), Q = u.flatMap(function(e) {
			var t, n = S[e.id] || !1, l = E && e.predefinedId === o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID, s = c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				testid: "label_item_" + e.id,
				action: function() {
					return l ? G(o("WAWebLeadStage").LeadStage.NONE) : H(e.id), !1;
				},
				children: c.jsxs("div", {
					ref: e.id === a ? O : void 0,
					className: "x6s0dn4 x9f619 x78zum5 x193iq5w x6ikm8r x10wlt62 x16ovd2e xde1mab x12xbjc7 x1iw51ew",
					children: [c.jsx("div", {
						className: "x2i0jwv x6ikm8r x10wlt62 x1jchvi3 xjb2p0i xo1l8bm x17mssa0 x1ic7a3i xav9cv8",
						children: c.jsx(o("WAWebLabels.react").Labels, {
							labels: [e.id],
							showName: !0,
							theme: "label-filter",
							iconXstyle: y.labelIcon,
							isListsFeatureEnabled: i
						})
					}), c.jsx("div", {
						className: "x1uvdrpn",
						children: l ? c.jsx(r("WDSBaseRadio.react"), {
							checked: A === o("WAWebLeadStage").LeadStage.NONE,
							name: h,
							onChange: r("WAWebNoop"),
							testid: "lead_sublist_radio_" + String(o("WAWebLeadStage").LeadStage.NONE),
							value: o("WAWebLeadStage").LeadStage.NONE
						}) : c.jsx(o("WAWebCheckBox.react").CheckBox, {
							checked: n,
							onChange: r("WAWebNoop")
						})
					})]
				})
			}, "label_item_" + e.id);
			return l ? [s, c.jsx(r("WAWebLeadSublistRows.react"), {
				currentStage: A,
				groupName: h,
				leadListName: (t = e.name) != null ? t : "",
				onSelectStage: G
			}, "lead_sublist_rows_" + e.id)] : [s];
		});
		return c.jsxs(c.Fragment, { children: [c.jsx("div", {
			ref: F,
			"data-testid": "label-chat-header-dropdown-items",
			className: "xuyqlj2 x1odjw0f",
			children: Q
		}), i && c.jsxs("div", babelHelpers.extends({}, {
			0: {},
			1: { className: "x13fuv20 x178xt8z xx42vgk x1380le5 x16ovd2e" }
		}[(u.length > 0) << 0], { children: [c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
			action: j,
			testid: "labels-dropdown-new-list",
			children: c.jsxs("div", {
				className: "x6s0dn4 x9f619 x78zum5 x193iq5w x6ikm8r x10wlt62 x16ovd2e xde1mab x12xbjc7 x1iw51ew",
				children: [c.jsx("div", {
					className: "x14ug900 x78zum5 x6s0dn4 xl56j7k xvy4d1p xxk0z11 x2lah0s x1sbwfh8 x16q7b9a",
					children: c.jsx(r("WDSIconIcAdd.react"), { iconXstyle: y.footerIconSize })
				}), c.jsx("span", {
					className: "x1f6kntn xggjnk3 x14ug900 x1wbi8v6",
					children: s._(
						/*BTDS*/
						""
					)
				})]
			})
		}), c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
			action: K,
			testid: "labels-dropdown-manage-lists",
			children: c.jsxs("div", {
				className: "x6s0dn4 x9f619 x78zum5 x193iq5w x6ikm8r x10wlt62 x16ovd2e xde1mab x12xbjc7 x1iw51ew",
				children: [c.jsx("div", {
					className: "x14ug900 x78zum5 x6s0dn4 xl56j7k xvy4d1p xxk0z11 x2lah0s x1sbwfh8 x16q7b9a",
					children: c.jsx(o("WAWebListPeopleIcon.react").ListPeopleIcon, { iconXstyle: y.footerIconSize })
				}), c.jsx("span", {
					className: "x1f6kntn xggjnk3 x14ug900 x1wbi8v6",
					children: s._(
						/*BTDS*/
						""
					)
				})]
			})
		})] }))] });
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(t, n) {
		var a = t.chatJid, i = t.isStageResolved, l = t.isSublistEnabled, u = t.leadListId, d = t.persistedStage, m = t.profileChatJid, p = t.selectedStage;
		if (!(!l || u == null) && !(i && p === d)) {
			if (n[u] !== !0) {
				o("WAWebSyncLeadStageToProfile").syncLeadStageToProfile(m, o("WAWebLeadStage").LeadStage.NONE);
				return;
			}
			o("WAWebApplyLeadStageSublistAction").applyLeadStageSublist(a, p, i ? d : null).then(function() {
				return o("WAWebSyncLeadStageToProfile").syncLeadStageToProfile(m, p);
			}, function(t) {
				o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) })), o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[customer_manager] lead stage sub-list write failed"]))).catching(r("getErrorSafe")(t)).sendLogs("lead-stage-sublist-apply-fail");
			});
		}
	}
	l.default = C;
}), 226);
