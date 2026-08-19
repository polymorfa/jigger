__d("WAWebAddGroupToCommunityFlow.react", [
	"$InternalEnum",
	"WAWebAddGroupToCommunityDrawer.react",
	"WAWebContactCollection",
	"WAWebExistingCommunitySelectionDrawer.react",
	"WAWebManageCommunityGroupsFlowLoadable",
	"WAWebNewCommunityInfoDrawer.react",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = s.useState, d = n("$InternalEnum").Mirrored([
		"COMMUNITY_SELECTION_DRAWER",
		"ADD_GROUP_TO_COMMUNITY_DRAWER",
		"NEW_COMMUNITY_FLOW",
		"LINK_GROUP_TO_COMMUNITY_FLOW"
	]), m = d.ADD_GROUP_TO_COMMUNITY_DRAWER;
	function p(t) {
		var n = o("react-compiler-runtime").c(33), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, s = l.groupToBeLinked, p = c(null), _ = p[0], f = p[1], g;
		n[3] !== a.onEnd ? (g = {
			transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
			onEnd: a.onEnd
		}, n[3] = a.onEnd, n[4] = g) : g = n[4];
		var h = o("useWAWebFlow").useFlow(m, g), y = h[0], C = h[1];
		if (C.step == null) return null;
		var b;
		e: switch (C.step) {
			case d.ADD_GROUP_TO_COMMUNITY_DRAWER: {
				var v;
				n[5] !== C ? (v = u.jsx(r("WAWebAddGroupToCommunityDrawer.react"), {
					onBack: function() {
						return C.pop();
					},
					onAddGroupToExistingCommunity: function() {
						return C.push(d.COMMUNITY_SELECTION_DRAWER);
					},
					onAddGroupToNewCommunity: function() {
						return C.push(d.NEW_COMMUNITY_FLOW);
					}
				}), n[5] = C, n[6] = v) : v = n[6], b = v;
				break e;
			}
			case d.COMMUNITY_SELECTION_DRAWER: {
				var S;
				n[7] !== C ? (S = u.jsx(r("WAWebExistingCommunitySelectionDrawer.react"), {
					onBack: function() {
						return C.pop();
					},
					onCommunitySelected: function(t) {
						f(t), C.push(d.LINK_GROUP_TO_COMMUNITY_FLOW);
					}
				}), n[7] = C, n[8] = S) : S = n[8], b = S;
				break e;
			}
			case d.NEW_COMMUNITY_FLOW: {
				var R;
				n[9] !== s ? (R = [s], n[9] = s, n[10] = R) : R = n[10];
				var L;
				n[11] !== C ? (L = function() {
					return C.pop();
				}, n[11] = C, n[12] = L) : L = n[12];
				var E;
				n[13] !== R || n[14] !== L ? (E = u.jsx(r("WAWebNewCommunityInfoDrawer.react"), {
					existingGroups: R,
					onBack: L
				}), n[13] = R, n[14] = L, n[15] = E) : E = n[15], b = E;
				break e;
			}
			case d.LINK_GROUP_TO_COMMUNITY_FLOW: {
				var k;
				n[16] !== _ ? (k = r("nullthrows")(_, "[AddGroupToCommunityFlow] selectedCommunity is null"), n[16] = _, n[17] = k) : k = n[17];
				var I = k, T;
				n[18] !== s ? (T = r("nullthrows")(o("WAWebContactCollection").ContactCollection.get(s), "[AddGroupToCommunityFlow] groupToBeLinkedContact is null"), n[18] = s, n[19] = T) : T = n[19];
				var D = T, x;
				n[20] !== C ? (x = function() {
					return C.pop();
				}, n[20] = C, n[21] = x) : x = n[21];
				var $;
				n[22] !== D ? ($ = [D], n[22] = D, n[23] = $) : $ = n[23];
				var P;
				n[24] !== I || n[25] !== x || n[26] !== $ ? (P = u.jsx(o("WAWebManageCommunityGroupsFlowLoadable").ManageCommunityGroupsFlowLoadable, {
					parentGroupMetadata: I,
					onBack: x,
					existingGroupsToBeLinked: $
				}), n[24] = I, n[25] = x, n[26] = $, n[27] = P) : P = n[27], b = P;
			}
		}
		var N;
		return n[28] !== y || n[29] !== b || n[30] !== C || n[31] !== i ? (N = u.jsx(y, {
			ref: i,
			flow: C,
			children: b
		}), n[28] = y, n[29] = b, n[30] = C, n[31] = i, n[32] = N) : N = n[32], N;
	}
	l.default = p;
}), 98);
