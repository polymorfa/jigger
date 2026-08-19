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
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(36), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, s = l.entryPoint, m = l.isInitialStep, _ = l.onEnd, f = l.startInReorderMode, g = m === void 0 ? !1 : m, h = f === void 0 ? !1 : f, y = o("WAWebMobilePlatforms").isSMB() ? o("WAWebNux").NUX.SMB_LISTS_INTRO : o("WAWebNux").NUX.ADD_TO_LISTS, C = r("useWAWebNux")(y), b = C[0], v = C[1], S;
		n[3] !== _ ? (S = {
			onEnd: _,
			transitions: o("useWAWebFlow").FlowTransitions.DrawerRight
		}, n[3] = _, n[4] = S) : S = n[4];
		var R = o("useWAWebFlow").useFlow(d.Labels, S), L = R[0], E = R[1], k = c(""), I = k[0], T = k[1];
		if (E.step == null) return null;
		var D;
		n[5] !== E ? (D = function() {
			return E.pop();
		}, n[5] = E, n[6] = D) : D = n[6];
		var x = D, $;
		e: switch (E.step) {
			case d.Labels: {
				var P;
				n[7] !== E ? (P = function(t) {
					var e;
					T(t);
					var n = (e = o("WAWebLabelCollection").LabelCollection.get(t)) == null ? void 0 : e.type;
					o("WAWebListsGatingUtils").isListsEnabled() ? n === o("WAWebSchemaLabel").ListType.AI_HANDOFF ? E.push(d.AiHandoffSettings) : E.push(d.EditList) : E.push(d.LabelItem);
				}, n[7] = E, n[8] = P) : P = n[8];
				var N = P, M;
				n[9] !== E || n[10] !== b || n[11] !== v ? (M = function() {
					if (b) {
						var e = o("WAWebMobilePlatforms").isSMB() ? o("WAWebSMBListsIntroPopup.react").SMBListsIntroPopup : o("WAWebListsIntroPopupLoadable").ListsIntroPopupLoadable;
						o("WAWebModalManager").ModalManager.open(u.jsx(e, { onContinue: function() {
							v(), E.push(d.CreateList);
						} }));
					} else E.push(d.CreateList);
				}, n[9] = E, n[10] = b, n[11] = v, n[12] = M) : M = n[12];
				var w = M, A;
				n[13] !== s || n[14] !== w || n[15] !== N || n[16] !== g || n[17] !== x || n[18] !== i || n[19] !== h ? (A = u.jsx(r("WAWebBizLabelDrawer.react"), {
					ref: i,
					onCreateListClick: w,
					onLabelClick: N,
					onClose: x,
					isInitialStep: g,
					startInReorderMode: h,
					entryPoint: s
				}), n[13] = s, n[14] = w, n[15] = N, n[16] = g, n[17] = x, n[18] = i, n[19] = h, n[20] = A) : A = n[20], $ = A;
				break e;
			}
			case d.LabelItem: {
				var F = p, O;
				n[21] !== I || n[22] !== x ? (O = u.jsx(r("WAWebBizLabelItemDrawer.react"), {
					labelId: I,
					onClose: x,
					onRemoveLabel: F
				}), n[21] = I, n[22] = x, n[23] = O) : O = n[23], $ = O;
				break e;
			}
			case d.CreateList: {
				var B;
				n[24] !== x ? (B = u.jsx(r("WAWebCreateOrEditListDrawer.react"), {
					onBack: x,
					onClose: x,
					entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_SETTINGS
				}), n[24] = x, n[25] = B) : B = n[25], $ = B;
				break e;
			}
			case d.EditList: {
				var W;
				n[26] !== I || n[27] !== x || n[28] !== i ? (W = u.jsx(r("WAWebCreateOrEditListDrawer.react"), {
					ref: i,
					onBack: x,
					onClose: x,
					listId: I,
					entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_SETTINGS
				}), n[26] = I, n[27] = x, n[28] = i, n[29] = W) : W = n[29], $ = W;
				break e;
			}
			case d.AiHandoffSettings: {
				var q;
				n[30] !== x ? (q = u.jsx(o("WAWebBizAiHandoffSettingsDrawerLoadable.react").WAWebBizAiHandoffSettingsDrawerLoadable, { onBack: x }), n[30] = x, n[31] = q) : q = n[31], $ = q;
			}
		}
		var U;
		return n[32] !== L || n[33] !== $ || n[34] !== E ? (U = u.jsx(L, {
			flow: E,
			children: $
		}), n[32] = L, n[33] = $, n[34] = E, n[35] = U) : U = n[35], U;
	}
	function p(e, t) {
		var n = [{
			id: e,
			type: "remove"
		}];
		o("WAWebLabelCollection").LabelCollection.addOrRemoveLabels(n, t);
	}
	l.default = m;
}), 98);
