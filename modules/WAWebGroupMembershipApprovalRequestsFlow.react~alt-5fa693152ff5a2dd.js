__d("WAWebGroupMembershipApprovalRequestsFlow.react", [
	"$InternalEnum",
	"WAWebExistingGroupPermissionsDrawer.react",
	"WAWebFindChatAction",
	"WAWebGroupMembershipApprovalRequestsDrawer.react",
	"WAWebInfoFlowLoadable",
	"WAWebMembershipApprovalRequestsOrder",
	"nullthrows",
	"react",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = s.useState, d = n("$InternalEnum").Mirrored([
		"Requests",
		"ContactInfo",
		"GroupSettings"
	]);
	function m(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.chat, l = a.onBack, s = o("useWAWebFlow").useFlow(d.Requests, { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }), m = s[0], p = s[1], _ = c(null), f = _[0], g = _[1], h = c(o("WAWebMembershipApprovalRequestsOrder").MembershipApprovalRequestsOrder.Source), y = h[0], C = h[1], b = function() {
			C(o("WAWebMembershipApprovalRequestsOrder").MembershipApprovalRequestsOrder.Source);
		}, v = function() {
			C(o("WAWebMembershipApprovalRequestsOrder").MembershipApprovalRequestsOrder.Time);
		}, S = async function(t) {
			var e = await o("WAWebFindChatAction").findOrCreateLatestChat(t.id, "membershipApprovalRequests"), n = e.chat;
			g(n), p.push(d.ContactInfo);
		};
		if (!p.step) return null;
		var R;
		switch (p.step) {
			case d.Requests:
				R = u.jsx(r("WAWebGroupMembershipApprovalRequestsDrawer.react"), {
					chat: i,
					orderBy: y,
					onBack: l,
					onRequestClick: S,
					onSortBySource: b,
					onSortByTime: v,
					onGroupSettings: function() {
						return p.push(d.GroupSettings);
					}
				});
				break;
			case d.ContactInfo: {
				R = u.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
					displayName: "MembershipApprovalRequestInfoFlow",
					chat: r("nullthrows")(f),
					onEnd: function() {
						return p.pop();
					}
				});
				break;
			}
			case d.GroupSettings: R = u.jsx(r("WAWebExistingGroupPermissionsDrawer.react"), {
				chat: i,
				groupMetadata: r("nullthrows")(i.groupMetadata),
				onClose: function() {
					return p.pop();
				}
			});
		}
		return u.jsx(m, {
			ref: n,
			displayName: "MembershipApprovalRequestsFlow",
			flow: p,
			children: R
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
