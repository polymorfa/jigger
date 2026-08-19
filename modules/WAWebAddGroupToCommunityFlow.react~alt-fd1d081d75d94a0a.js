__d("WAWebAddGroupToCommunityFlow.react", [
	"$InternalEnum",
	"WAWebAddGroupToCommunityDrawer.react",
	"WAWebContactCollection",
	"WAWebExistingCommunitySelectionDrawer.react",
	"WAWebManageCommunityGroupsFlowLoadable",
	"WAWebNewCommunityInfoDrawer.react",
	"nullthrows",
	"react",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = s.useState, d = n("$InternalEnum").Mirrored([
		"COMMUNITY_SELECTION_DRAWER",
		"ADD_GROUP_TO_COMMUNITY_DRAWER",
		"NEW_COMMUNITY_FLOW",
		"LINK_GROUP_TO_COMMUNITY_FLOW"
	]), m = d.ADD_GROUP_TO_COMMUNITY_DRAWER;
	function p(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.groupToBeLinked, l = c(null), s = l[0], p = l[1], _ = o("useWAWebFlow").useFlow(m, {
			transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
			onEnd: a.onEnd
		}), f = _[0], g = _[1];
		if (g.step == null) return null;
		var h;
		switch (g.step) {
			case d.ADD_GROUP_TO_COMMUNITY_DRAWER: {
				h = u.jsx(r("WAWebAddGroupToCommunityDrawer.react"), {
					onBack: function() {
						return g.pop();
					},
					onAddGroupToExistingCommunity: function() {
						return g.push(d.COMMUNITY_SELECTION_DRAWER);
					},
					onAddGroupToNewCommunity: function() {
						return g.push(d.NEW_COMMUNITY_FLOW);
					}
				});
				break;
			}
			case d.COMMUNITY_SELECTION_DRAWER: {
				h = u.jsx(r("WAWebExistingCommunitySelectionDrawer.react"), {
					onBack: function() {
						return g.pop();
					},
					onCommunitySelected: function(t) {
						p(t), g.push(d.LINK_GROUP_TO_COMMUNITY_FLOW);
					}
				});
				break;
			}
			case d.NEW_COMMUNITY_FLOW: {
				h = u.jsx(r("WAWebNewCommunityInfoDrawer.react"), {
					existingGroups: [i],
					onBack: function() {
						return g.pop();
					}
				});
				break;
			}
			case d.LINK_GROUP_TO_COMMUNITY_FLOW: {
				var y = r("nullthrows")(s, "[AddGroupToCommunityFlow] selectedCommunity is null"), C = r("nullthrows")(o("WAWebContactCollection").ContactCollection.get(i), "[AddGroupToCommunityFlow] groupToBeLinkedContact is null");
				h = u.jsx(o("WAWebManageCommunityGroupsFlowLoadable").ManageCommunityGroupsFlowLoadable, {
					parentGroupMetadata: y,
					onBack: function() {
						return g.pop();
					},
					existingGroupsToBeLinked: [C]
				});
				break;
			}
		}
		return u.jsx(f, {
			ref: n,
			flow: g,
			children: h
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
