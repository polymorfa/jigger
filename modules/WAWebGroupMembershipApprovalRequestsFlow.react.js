__d("WAWebGroupMembershipApprovalRequestsFlow.react", [
	"$InternalEnum",
	"WAWebExistingGroupPermissionsDrawer.react",
	"WAWebFindChatAction",
	"WAWebGroupMembershipApprovalRequestsDrawer.react",
	"WAWebInfoFlowLoadable",
	"WAWebMembershipApprovalRequestsOrder",
	"asyncToGeneratorRuntime",
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
		var a = o("react-compiler-runtime").c(36), i, l;
		a[0] !== t ? (l = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), a[0] = t, a[1] = i, a[2] = l) : (i = a[1], l = a[2]);
		var s = i, m = s.chat, p = s.onBack, _;
		a[3] === Symbol.for("react.memo_cache_sentinel") ? (_ = { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }, a[3] = _) : _ = a[3];
		var f = o("useWAWebFlow").useFlow(d.Requests, _), g = f[0], h = f[1], y = c(null), C = y[0], b = y[1], v = c(o("WAWebMembershipApprovalRequestsOrder").MembershipApprovalRequestsOrder.Source), S = v[0], R = v[1], L;
		a[4] === Symbol.for("react.memo_cache_sentinel") ? (L = function() {
			R(o("WAWebMembershipApprovalRequestsOrder").MembershipApprovalRequestsOrder.Source);
		}, a[4] = L) : L = a[4];
		var E = L, k;
		a[5] === Symbol.for("react.memo_cache_sentinel") ? (k = function() {
			R(o("WAWebMembershipApprovalRequestsOrder").MembershipApprovalRequestsOrder.Time);
		}, a[5] = k) : k = a[5];
		var I = k, T;
		a[6] !== h ? (T = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = yield o("WAWebFindChatAction").findOrCreateLatestChat(e.id, "membershipApprovalRequests"), n = t.chat;
				b(n), h.push(d.ContactInfo);
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), a[6] = h, a[7] = T) : T = a[7];
		var D = T;
		if (!h.step) return null;
		var x;
		e: switch (h.step) {
			case d.Requests: {
				var $;
				a[8] !== h ? ($ = function() {
					return h.push(d.GroupSettings);
				}, a[8] = h, a[9] = $) : $ = a[9];
				var P;
				a[10] !== m || a[11] !== D || a[12] !== p || a[13] !== S || a[14] !== $ ? (P = u.jsx(r("WAWebGroupMembershipApprovalRequestsDrawer.react"), {
					chat: m,
					orderBy: S,
					onBack: p,
					onRequestClick: D,
					onSortBySource: E,
					onSortByTime: I,
					onGroupSettings: $
				}), a[10] = m, a[11] = D, a[12] = p, a[13] = S, a[14] = $, a[15] = P) : P = a[15], x = P;
				break e;
			}
			case d.ContactInfo: {
				var N;
				a[16] !== C ? (N = r("nullthrows")(C), a[16] = C, a[17] = N) : N = a[17];
				var M;
				a[18] !== h ? (M = function() {
					return h.pop();
				}, a[18] = h, a[19] = M) : M = a[19];
				var w;
				a[20] !== N || a[21] !== M ? (w = u.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
					displayName: "MembershipApprovalRequestInfoFlow",
					chat: N,
					onEnd: M
				}), a[20] = N, a[21] = M, a[22] = w) : w = a[22], x = w;
				break e;
			}
			case d.GroupSettings: {
				var A;
				a[23] !== m.groupMetadata ? (A = r("nullthrows")(m.groupMetadata), a[23] = m.groupMetadata, a[24] = A) : A = a[24];
				var F;
				a[25] !== h ? (F = function() {
					return h.pop();
				}, a[25] = h, a[26] = F) : F = a[26];
				var O;
				a[27] !== m || a[28] !== A || a[29] !== F ? (O = u.jsx(r("WAWebExistingGroupPermissionsDrawer.react"), {
					chat: m,
					groupMetadata: A,
					onClose: F
				}), a[27] = m, a[28] = A, a[29] = F, a[30] = O) : O = a[30], x = O;
			}
		}
		var B;
		return a[31] !== g || a[32] !== x || a[33] !== h || a[34] !== l ? (B = u.jsx(g, {
			ref: l,
			displayName: "MembershipApprovalRequestsFlow",
			flow: h,
			children: x
		}), a[31] = g, a[32] = x, a[33] = h, a[34] = l, a[35] = B) : B = a[35], B;
	}
	l.default = m;
}), 98);
