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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(92), n = e.chat, a = e.onRequestReopen, i = e.pendingNewListId, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = o("WAWebListsGatingUtils").isListsEnabled(), t[0] = l) : l = t[0];
		var u = l, d;
		t[1] !== n ? (d = o("WAWebLeadSublistGating").isChatEligibleForLeadSublist(n), t[1] = n, t[2] = d) : d = t[2];
		var m = d, _;
		if (t[3] !== m) {
			_ = o("WAWebLabelCollection").LabelCollection.filter(function(e) {
				return e.name ? u ? e.isActive !== !1 && (e.type === o("WAWebSchemaLabel").ListType.CUSTOM || e.type === o("WAWebSchemaLabel").ListType.PREDEFINED || e.type === o("WAWebSchemaLabel").ListType.LEAD && m) : !o("WAWebListUtils").isBuiltInList(e.type) : !1;
			}), o("WAWebListUtils").sortLabels(_);
			var C = _.findIndex(E);
			m && C !== -1 && _.push(_.splice(C, 1)[0]), t[3] = m, t[4] = _;
		} else _ = t[4];
		var I = _, T;
		t[5] !== n.labels ? (T = n.labels || [], t[5] = n.labels, t[6] = T) : T = t[6];
		var D;
		t[7] !== T ? (D = new Set(T), t[7] = T, t[8] = D) : D = t[8];
		var x = D, $;
		t[9] !== x || t[10] !== I ? ($ = {}, I.forEach(function(e) {
			$[e.id] = x.has(e.id);
		}), t[9] = x, t[10] = I, t[11] = $) : $ = t[11];
		var P = $, N;
		e: {
			if (i == null) {
				N = P;
				break e;
			}
			var M;
			if (t[12] !== P || t[13] !== i) {
				var w;
				M = babelHelpers.extends({}, P, (w = {}, w[i] = !0, w)), t[12] = P, t[13] = i, t[14] = M;
			} else M = t[14];
			N = M;
		}
		var A = N, F = g(A), O = F[0], B = F[1], W;
		t[15] !== I ? (W = I.find(L), t[15] = I, t[16] = W) : W = t[16];
		var q = W, U = m && q != null, V;
		t[17] !== n.id ? (V = o("WAJids").unsafeCoerceToChatJid(n.id.toString()), t[17] = n.id, t[18] = V) : V = t[18];
		var H = V, G = r("useWAWebLeadStageForChat")(H, U), z = G.isResolved, j = G.stage, K;
		t[19] !== n || t[20] !== U ? (K = U ? o("WAWebSyncLeadStageToProfile").getLeadProfileChatJid(n) : null, t[19] = n, t[20] = U, t[21] = K) : K = t[21];
		var Q = K, X = j != null ? j : o("WAWebLeadStage").LeadStage.NONE, Y = g(null), J = Y[0], Z = Y[1], ee = J != null ? J : X, te = q != null && O[q.id] === !0 ? ee : null, ne = f(null), re = f(null), oe, ae;
		t[22] !== i ? (ae = function() {
			if (i != null) {
				var e = window.requestAnimationFrame(function() {
					var e = re.current, t = ne.current;
					e != null && t != null && o("WAWebDomScroll").scrollIntoViewIfNeeded(e, !1, t);
				});
				return (function() {
					return window.cancelAnimationFrame(e);
				});
			}
		}, oe = [i], t[22] = i, t[23] = oe, t[24] = ae) : (oe = t[23], ae = t[24]), p(ae, oe);
		var ie;
		t[25] === Symbol.for("react.memo_cache_sentinel") ? (ie = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue(), t[25] = ie) : ie = t[25];
		var le = ie === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true, se, ue;
		t[26] !== n.id ? (se = function() {
			o("WAWebChatThreadLogging").getChatThreadIDHMAC(n.id.toString()).then(R);
		}, ue = [n.id], t[26] = n.id, t[27] = se, t[28] = ue) : (se = t[27], ue = t[28]), p(se, ue);
		var ce = f(P), de = f(O), me;
		t[29] !== i ? (me = i != null ? new Set([i]) : new Set(), t[29] = i, t[30] = me) : me = t[30];
		var pe = f(me), _e = q == null ? void 0 : q.id, fe;
		t[31] !== H || t[32] !== z || t[33] !== U || t[34] !== X || t[35] !== Q || t[36] !== ee || t[37] !== _e ? (fe = {
			chatJid: H,
			isStageResolved: z,
			isSublistEnabled: U,
			leadListId: _e,
			persistedStage: X,
			profileChatJid: Q,
			selectedStage: ee
		}, t[31] = H, t[32] = z, t[33] = U, t[34] = X, t[35] = Q, t[36] = ee, t[37] = _e, t[38] = fe) : fe = t[38];
		var ge = f(fe), he, ye;
		t[39] !== O ? (he = function() {
			de.current = O;
		}, ye = [O], t[39] = O, t[40] = he, t[41] = ye) : (he = t[40], ye = t[41]), p(he, ye);
		var Ce;
		t[42] !== H || t[43] !== z || t[44] !== U || t[45] !== (q == null ? void 0 : q.id) || t[46] !== X || t[47] !== Q || t[48] !== ee ? (Ce = function() {
			ge.current = {
				chatJid: H,
				isStageResolved: z,
				isSublistEnabled: U,
				leadListId: q == null ? void 0 : q.id,
				persistedStage: X,
				profileChatJid: Q,
				selectedStage: ee
			};
		}, t[42] = H, t[43] = z, t[44] = U, t[45] = q == null ? void 0 : q.id, t[46] = X, t[47] = Q, t[48] = ee, t[49] = Ce) : Ce = t[49];
		var be = q == null ? void 0 : q.id, ve;
		t[50] !== H || t[51] !== z || t[52] !== U || t[53] !== X || t[54] !== Q || t[55] !== ee || t[56] !== be ? (ve = [
			H,
			z,
			U,
			be,
			X,
			Q,
			ee
		], t[50] = H, t[51] = z, t[52] = U, t[53] = X, t[54] = Q, t[55] = ee, t[56] = be, t[57] = ve) : ve = t[57], p(Ce, ve);
		var Se, Re;
		t[58] !== n ? (Se = function() {
			var e = ce.current, t = pe.current;
			return (function() {
				var a = [], i = new Set([].concat(Object.keys(e), Object.keys(de.current)));
				if (i.forEach(function(t) {
					var n = e[t] || !1, r = de.current[t] || !1;
					n !== r && a.push({
						id: t,
						type: r ? "add" : "remove"
					});
				}), a.length > 0 && o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels(a, [n]), k(ge.current, de.current), a.length > 0) {
					var l = o("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(n), s = r("countWhere")(Object.keys(e), function(t) {
						return e[t];
					}), u = r("countWhere")(a, S), c = r("countWhere")(a, v), d = s + u - c, m = l != null ? "ctwa_ad" : void 0;
					o("WAWebChatThreadLogging").getChatThreadIDHMAC(n.id.toString()).then(function(e) {
						a.forEach(function(t) {
							var n = t.id, r = t.type, a = o("WAWebLabelCollection").LabelCollection.get(n);
							if (a) {
								var i = o("WAWebLabelConstants").mapLabelNameToPredefinedId(a.name), l = i != null ? i : a.predefinedId;
								o("WAWebWamLabelEventReporter").logLabelOperationEvent(r === "add" ? o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.ADD : o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.DELETE, void 0, o("WAWebWamEnumLabelTargets").LABEL_TARGETS.CONTACT, e != null ? e : void 0, l != null ? l : void 0, l != null ? void 0 : a.name, m, o("WAWebWamLabelEventReporter").LabelOperationEntryPoints.CHAT_HEADER);
							}
						}), o("WAWebWamLabelEventReporter").logLabelOperationEvent(o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.UPDATE_LABEL_COUNT, d, o("WAWebWamEnumLabelTargets").LABEL_TARGETS.CONTACT, e != null ? e : void 0, void 0, void 0, m, o("WAWebWamLabelEventReporter").LabelOperationEntryPoints.CHAT_HEADER);
					}), a.forEach(function(e) {
						var t, r = e.id, a = e.type, i = o("WAWebLabelCollection").LabelCollection.get(r);
						if (i != null) {
							var l = Number(r), s = String(l);
							o("WAWebListsActions").logUpdateMembersPerChat([n], {
								entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_HEADER,
								listId: l,
								customListTitle: (t = i.name) != null ? t : "",
								listsApplied: a === "add" ? s : void 0,
								listsRemoved: a === "remove" ? s : void 0
							});
						}
					});
				}
				if (t.size > 0) {
					var p = Array.from(t);
					o("WAWebSmbMarkAsXLabelAction").logLabelSignalForModels([n], p, le), o("WAWebSmb3pdConversionSignalAction").log3pdConversionSignalForChats([n], p, le), o("WAWebCustomLabels3pdSignalUtils").processCustomLabels3pdSignals(p, [n], le);
				}
			});
		}, Re = [n, le], t[58] = n, t[59] = Se, t[60] = Re) : (Se = t[59], Re = t[60]), p(Se, Re);
		var Le;
		t[61] !== n || t[62] !== O ? (Le = function(t) {
			var e = O[t] || !1, r = !e;
			B(function(e) {
				var n;
				return babelHelpers.extends({}, e, (n = {}, n[t] = r, n));
			});
			var a = [{
				id: t,
				type: r ? "add" : "remove"
			}];
			o("WAWebLabelCollection").LabelCollection.addOrRemoveLabelsMD(a, [n]), r ? pe.current.add(t) : pe.current.delete(t);
		}, t[61] = n, t[62] = O, t[63] = Le) : Le = t[63];
		var Ee = Le, ke;
		t[64] !== Ee || t[65] !== z || t[66] !== O || t[67] !== (q == null ? void 0 : q.id) || t[68] !== ee ? (ke = function(t) {
			var e = q == null ? void 0 : q.id;
			if (e != null) {
				var n = O[e] === !0;
				if (n && z && ee === t) {
					Ee(e);
					return;
				}
				Z(t), n || Ee(e);
			}
		}, t[64] = Ee, t[65] = z, t[66] = O, t[67] = q == null ? void 0 : q.id, t[68] = ee, t[69] = ke) : ke = t[69], q == null || q.id;
		var Ie = ke, Te;
		t[70] !== a ? (Te = function(t) {
			o("WAWebDrawerManager").closeDrawerLeft(), a == null || a(t);
		}, t[70] = a, t[71] = Te) : Te = t[71];
		var De = Te, xe;
		t[72] !== n || t[73] !== De ? (xe = function() {
			if (o("WAWebListUtils").isListFlowMaxListsCountReached()) {
				o("WAWebListsUtil").showMaxListsModal(u);
				return;
			}
			o("WAWebDrawerManager").DrawerManager.openDrawerLeft(c.jsx(r("WAWebCreateOrEditListDrawer.react"), {
				onBack: De,
				onClose: De,
				entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_HEADER,
				preselectedChats: [o("WAWebStateUtils").unproxy(n)]
			}));
		}, t[72] = n, t[73] = De, t[74] = xe) : xe = t[74];
		var $e = xe, Pe = b, Ne;
		t[75] !== Ee || t[76] !== Ie || t[77] !== U || t[78] !== I || t[79] !== O || t[80] !== i || t[81] !== te ? (Ne = I.flatMap(function(e) {
			var t, n = O[e.id] || !1, a = U && e.predefinedId === o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID, l = c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				testid: "label_item_" + e.id,
				action: function() {
					return a ? Ie(o("WAWebLeadStage").LeadStage.NONE) : Ee(e.id), !1;
				},
				children: c.jsxs("div", {
					ref: e.id === i ? re : void 0,
					className: "x6s0dn4 x9f619 x78zum5 x193iq5w x6ikm8r x10wlt62 x16ovd2e xde1mab x12xbjc7 x1iw51ew",
					children: [c.jsx("div", {
						className: "x2i0jwv x6ikm8r x10wlt62 x1jchvi3 xjb2p0i xo1l8bm x17mssa0 x1ic7a3i xav9cv8",
						children: c.jsx(o("WAWebLabels.react").Labels, {
							labels: [e.id],
							showName: !0,
							theme: "label-filter",
							iconXstyle: y.labelIcon,
							isListsFeatureEnabled: u
						})
					}), c.jsx("div", {
						className: "x1uvdrpn",
						children: a ? c.jsx(r("WDSBaseRadio.react"), {
							checked: te === o("WAWebLeadStage").LeadStage.NONE,
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
			return a ? [l, c.jsx(r("WAWebLeadSublistRows.react"), {
				currentStage: te,
				groupName: h,
				leadListName: (t = e.name) != null ? t : "",
				onSelectStage: Ie
			}, "lead_sublist_rows_" + e.id)] : [l];
		}), t[75] = Ee, t[76] = Ie, t[77] = U, t[78] = I, t[79] = O, t[80] = i, t[81] = te, t[82] = Ne) : Ne = t[82];
		var Me = Ne, we;
		t[83] === Symbol.for("react.memo_cache_sentinel") ? (we = { className: "xuyqlj2 x1odjw0f" }, t[83] = we) : we = t[83];
		var Ae;
		t[84] !== Me ? (Ae = c.jsx("div", babelHelpers.extends({
			ref: ne,
			"data-testid": "label-chat-header-dropdown-items"
		}, we, { children: Me })), t[84] = Me, t[85] = Ae) : Ae = t[85];
		var Fe;
		t[86] !== $e || t[87] !== I.length ? (Fe = u && c.jsxs("div", babelHelpers.extends({}, {
			0: {},
			1: { className: "x13fuv20 x178xt8z xx42vgk x1380le5 x16ovd2e" }
		}[(I.length > 0) << 0], { children: [c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
			action: $e,
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
			action: Pe,
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
		})] })), t[86] = $e, t[87] = I.length, t[88] = Fe) : Fe = t[88];
		var Oe;
		return t[89] !== Ae || t[90] !== Fe ? (Oe = c.jsxs(c.Fragment, { children: [Ae, Fe] }), t[89] = Ae, t[90] = Fe, t[91] = Oe) : Oe = t[91], Oe;
	}
	function b() {
		o("WAWebDrawerManager").DrawerManager.openDrawerLeft(c.jsx(o("WAWebLabelFlowLoadable").LabelFlowLoadable, {
			isInitialStep: !0,
			entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_HEADER
		}));
	}
	function v(e) {
		var t = e.type;
		return t === "remove";
	}
	function S(e) {
		var t = e.type;
		return t === "add";
	}
	function R(e) {
		o("WAWebWamSmbListEventReporter").logSmbListEvent({
			labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.VIEW,
			labelTarget: o("WAWebWamEnumLabelTargets").LABEL_TARGETS.LABEL_CHAT_DIALOG,
			updateEntryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_HEADER,
			threadIdHmac: e != null ? e : void 0
		});
	}
	function L(e) {
		return e.predefinedId === o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID;
	}
	function E(e) {
		return e.predefinedId === o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID;
	}
	function k(t, n) {
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
