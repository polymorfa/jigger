__d("WAWebBizLabelFlow.react", [
	"$InternalEnum",
	"WAWebBizAiHandoffSettingsDrawerLoadable.react",
	"WAWebBizLabelDrawer.react",
	"WAWebBizLabelItemDrawer.react",
	"WAWebCreateOrEditListDrawer.react",
	"WAWebLabelCollection",
	"WAWebListsGatingUtils",
	"WAWebListsIntroPopupLoadable",
	"WAWebMobilePlatforms",
	"WAWebModalManager",
	"WAWebNux",
	"WAWebSMBListsIntroPopup.react",
	"WAWebSchemaLabel",
	"WAWebWamEnumUpdateEntryPoint",
	"react",
	"useWAWebFlow",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = s.useState, d = n("$InternalEnum").Mirrored([
		"Labels",
		"LabelItem",
		"CreateList",
		"EditList",
		"AiHandoffSettings"
	]);
	function m(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.entryPoint, l = a.isInitialStep, s = l === void 0 ? !1 : l, m = a.onEnd, p = a.startInReorderMode, _ = p === void 0 ? !1 : p, f = o("WAWebMobilePlatforms").isSMB() ? o("WAWebNux").NUX.SMB_LISTS_INTRO : o("WAWebNux").NUX.ADD_TO_LISTS, g = r("useWAWebNux")(f), h = g[0], y = g[1], C = o("useWAWebFlow").useFlow(d.Labels, {
			onEnd: m,
			transitions: o("useWAWebFlow").FlowTransitions.DrawerRight
		}), b = C[0], v = C[1], S = c(""), R = S[0], L = S[1];
		if (v.step == null) return null;
		var E = function() {
			return v.pop();
		}, k;
		switch (v.step) {
			case d.Labels: {
				var I = function(t) {
					var e;
					L(t);
					var n = (e = o("WAWebLabelCollection").LabelCollection.get(t)) == null ? void 0 : e.type;
					o("WAWebListsGatingUtils").isListsEnabled() ? n === o("WAWebSchemaLabel").ListType.AI_HANDOFF ? v.push(d.AiHandoffSettings) : v.push(d.EditList) : v.push(d.LabelItem);
				}, T = function() {
					if (h) {
						var e = o("WAWebMobilePlatforms").isSMB() ? o("WAWebSMBListsIntroPopup.react").SMBListsIntroPopup : o("WAWebListsIntroPopupLoadable").ListsIntroPopupLoadable;
						o("WAWebModalManager").ModalManager.open(u.jsx(e, { onContinue: function() {
							y(), v.push(d.CreateList);
						} }));
					} else v.push(d.CreateList);
				};
				k = u.jsx(r("WAWebBizLabelDrawer.react"), {
					ref: n,
					onCreateListClick: T,
					onLabelClick: I,
					onClose: E,
					isInitialStep: s,
					startInReorderMode: _,
					entryPoint: i
				});
				break;
			}
			case d.LabelItem: {
				var D = function(t, n) {
					var e = [{
						id: t,
						type: "remove"
					}];
					o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels(e, n);
				};
				k = u.jsx(r("WAWebBizLabelItemDrawer.react"), {
					labelId: R,
					onClose: E,
					onRemoveLabel: D
				});
				break;
			}
			case d.CreateList: {
				k = u.jsx(r("WAWebCreateOrEditListDrawer.react"), {
					onBack: E,
					onClose: E,
					entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_SETTINGS
				});
				break;
			}
			case d.EditList: {
				k = u.jsx(r("WAWebCreateOrEditListDrawer.react"), {
					ref: n,
					onBack: E,
					onClose: E,
					listId: R,
					entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_SETTINGS
				});
				break;
			}
			case d.AiHandoffSettings: {
				k = u.jsx(o("WAWebBizAiHandoffSettingsDrawerLoadable.react").WAWebBizAiHandoffSettingsDrawerLoadable, { onBack: E });
				break;
			}
		}
		return u.jsx(b, {
			flow: v,
			children: k
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
