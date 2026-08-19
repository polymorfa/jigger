__d("WAWebGroupMembershipApprovalRequestsFlow.react", [
	"$InternalEnum",
	"WAWebExistingGroupPermissionsDrawer.react",
	"WAWebFindChatAction",
	"WAWebGroupMembershipApprovalRequestsDrawer.react",
	"WAWebInfoFlowLoadable",
	"WAWebMembershipApprovalRequestsOrder",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = s.useState, d = n("$InternalEnum").Mirrored([
		"Requests",
		"ContactInfo",
		"GroupSettings"
	]);
	function m(t) {
		var n = o("react-compiler-runtime").c(36), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, s = l.chat, m = l.onBack, p;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (p = { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }, n[3] = p) : p = n[3];
		var _ = o("useWAWebFlow").useFlow(d.Requests, p), f = _[0], g = _[1], h = c(null), y = h[0], C = h[1], b = c(o("WAWebMembershipApprovalRequestsOrder").MembershipApprovalRequestsOrder.Source), v = b[0], S = b[1], R;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (R = function() {
			S(o("WAWebMembershipApprovalRequestsOrder").MembershipApprovalRequestsOrder.Source);
		}, n[4] = R) : R = n[4];
		var L = R, E;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (E = function() {
			S(o("WAWebMembershipApprovalRequestsOrder").MembershipApprovalRequestsOrder.Time);
		}, n[5] = E) : E = n[5];
		var k = E, I;
		n[6] !== g ? (I = async function(t) {
			var e = await o("WAWebFindChatAction").findOrCreateLatestChat(t.id, "membershipApprovalRequests"), n = e.chat;
			C(n), g.push(d.ContactInfo);
		}, n[6] = g, n[7] = I) : I = n[7];
		var T = I;
		if (!g.step) return null;
		var D;
		e: switch (g.step) {
			case d.Requests: {
				var x;
				n[8] !== g ? (x = function() {
					return g.push(d.GroupSettings);
				}, n[8] = g, n[9] = x) : x = n[9];
				var $;
				n[10] !== s || n[11] !== T || n[12] !== m || n[13] !== v || n[14] !== x ? ($ = u.jsx(r("WAWebGroupMembershipApprovalRequestsDrawer.react"), {
					chat: s,
					orderBy: v,
					onBack: m,
					onRequestClick: T,
					onSortBySource: L,
					onSortByTime: k,
					onGroupSettings: x
				}), n[10] = s, n[11] = T, n[12] = m, n[13] = v, n[14] = x, n[15] = $) : $ = n[15], D = $;
				break e;
			}
			case d.ContactInfo: {
				var P;
				n[16] !== y ? (P = r("nullthrows")(y), n[16] = y, n[17] = P) : P = n[17];
				var N;
				n[18] !== g ? (N = function() {
					return g.pop();
				}, n[18] = g, n[19] = N) : N = n[19];
				var M;
				n[20] !== P || n[21] !== N ? (M = u.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
					displayName: "MembershipApprovalRequestInfoFlow",
					chat: P,
					onEnd: N
				}), n[20] = P, n[21] = N, n[22] = M) : M = n[22], D = M;
				break e;
			}
			case d.GroupSettings: {
				var w;
				n[23] !== s.groupMetadata ? (w = r("nullthrows")(s.groupMetadata), n[23] = s.groupMetadata, n[24] = w) : w = n[24];
				var A;
				n[25] !== g ? (A = function() {
					return g.pop();
				}, n[25] = g, n[26] = A) : A = n[26];
				var F;
				n[27] !== s || n[28] !== w || n[29] !== A ? (F = u.jsx(r("WAWebExistingGroupPermissionsDrawer.react"), {
					chat: s,
					groupMetadata: w,
					onClose: A
				}), n[27] = s, n[28] = w, n[29] = A, n[30] = F) : F = n[30], D = F;
			}
		}
		var O;
		return n[31] !== f || n[32] !== D || n[33] !== g || n[34] !== i ? (O = u.jsx(f, {
			ref: i,
			displayName: "MembershipApprovalRequestsFlow",
			flow: g,
			children: D
		}), n[31] = f, n[32] = D, n[33] = g, n[34] = i, n[35] = O) : O = n[35], O;
	}
	l.default = m;
}), 98);
