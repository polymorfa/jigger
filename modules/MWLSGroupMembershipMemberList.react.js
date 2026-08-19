__d("MWLSGroupMembershipMemberList.react", [
	"fbt",
	"I64",
	"LSGroupParticipantJoinState",
	"LSIntEnum",
	"LSMessagingThreadTypeUtil",
	"MDSInfiniteScrollList.react",
	"MWDialogTextPairing.react",
	"MWGroupMembershipListItem",
	"MWLSGroupMembershipMemberCell.react",
	"MWMemberListGlimmer.react",
	"MWPActor.react",
	"emptyFunction",
	"react",
	"react-compiler-runtime",
	"react-strict-dom",
	"useMAWGetGroupSuperAdmin"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = e || (e = o("react")), m = e, p = m.useCallback, _ = m.useState, f = { noHosts: {
		alignItems: "x6s0dn4",
		alignSelf: "xamitd3",
		display: "x78zum5",
		flexGrow: "x1iyjqo2",
		height: "x1egiwwb",
		justifyContent: "xl56j7k",
		width: "xdzyupr",
		$$css: !0
	} };
	function g(e) {
		var t = o("react-compiler-runtime").c(28), n = e.disableScroll, a = e.doSortParticipants, i = e.folder, l = e.hasMore, c = e.isLoading, m = e.onClose, p = e.onLoadMore, g = e.participantsAndContacts, v = e.showAdmodIndicator, S = e.showAdmodsOnly, R = e.showHostsOnly, L = e.showInvitedByViewerOnly, E = e.thread, k = n === void 0 ? !1 : n, I = a === void 0 ? !0 : a, T = l === void 0 ? !1 : l, D = c === void 0 ? !1 : c, x = m === void 0 ? r("emptyFunction") : m, $ = p === void 0 ? r("emptyFunction") : p, P = _(r("emptyFunction")), N = P[0], M = P[1], w;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (w = o("MWPActor.react").isAPPlus(), t[0] = w) : w = t[0];
		var A = w, F;
		t[1] !== g || t[2] !== S || t[3] !== R || t[4] !== L ? (F = S ? g.filter(b) : L ? g.filter(C) : R ? g.filter(y) : g, t[1] = g, t[2] = S, t[3] = R, t[4] = L, t[5] = F) : F = t[5];
		var O = F, B;
		t[6] !== I || t[7] !== O ? (B = I ? O.slice(0).sort(h) : O, t[6] = I, t[7] = O, t[8] = B) : B = t[8];
		var W = B, q;
		t[9] !== E.threadType ? (q = o("LSMessagingThreadTypeUtil").isArmadilloSecure(E.threadType), t[9] = E.threadType, t[10] = q) : q = t[10];
		var U = q;
		r("useMAWGetGroupSuperAdmin")(E.threadKey, U, M);
		var V;
		t[11] !== i || t[12] !== U || t[13] !== x || t[14] !== v || t[15] !== L || t[16] !== N || t[17] !== E ? (V = function(t) {
			var e = o("MWGroupMembershipListItem").contactId(t);
			return d.jsx(r("MWLSGroupMembershipMemberCell.react"), {
				canMessageUser: !A,
				folder: i,
				isMAWParticipantSuperAdmin: U && N != null ? N === (u || (u = o("I64"))).to_string(e) : !1,
				isSecure: U,
				membershipListItem: t,
				onClose: x,
				showAdminIndicator: v,
				showHostIndicator: v,
				showInvitedByViewerOnly: L,
				showModeratorIndicator: v,
				thread: E
			}, (u || (u = o("I64"))).to_string(e));
		}, t[11] = i, t[12] = U, t[13] = x, t[14] = v, t[15] = L, t[16] = N, t[17] = E, t[18] = V) : V = t[18];
		var H = V;
		if (W.length === 0 && R && D === !1 && T === !1) {
			var G;
			t[19] === Symbol.for("react.memo_cache_sentinel") ? (G = s._(
				/*BTDS*/
				""
			), t[19] = G) : G = t[19];
			var z;
			return t[20] === Symbol.for("react.memo_cache_sentinel") ? (z = d.jsx(o("react-strict-dom").html.div, {
				style: f.noHosts,
				children: d.jsx(r("MWDialogTextPairing.react"), {
					body: G,
					bodyColor: "secondary",
					headline: s._(
						/*BTDS*/
						""
					),
					textAlign: "center"
				})
			}), t[20] = z) : z = t[20], z;
		}
		var j;
		return t[21] !== k || t[22] !== T || t[23] !== D || t[24] !== $ || t[25] !== H || t[26] !== W ? (j = k ? W.map(H) : d.jsx(r("MDSInfiniteScrollList.react"), {
			hasMore: T,
			isLoading: D,
			items: W,
			loadingIndicator: d.jsx(r("MWMemberListGlimmer.react"), {}),
			onLoadMore: $,
			renderItem: H
		}), t[21] = k, t[22] = T, t[23] = D, t[24] = $, t[25] = H, t[26] = W, t[27] = j) : j = t[27], j;
	}
	function h(e, t) {
		return e.type === o("MWGroupMembershipListItem").MWGroupMembershipMemberTypes.ParticipantAndContact && t.type === o("MWGroupMembershipListItem").MWGroupMembershipMemberTypes.ParticipantAndContact ? e.contact.name.localeCompare(t.contact.name) : e.type === o("MWGroupMembershipListItem").MWGroupMembershipMemberTypes.CommunityMember && t.type === o("MWGroupMembershipListItem").MWGroupMembershipMemberTypes.CommunityMember ? e.communityMember.name.localeCompare(t.communityMember.name) : e.type === o("MWGroupMembershipListItem").MWGroupMembershipMemberTypes.ServerSearchResult && t.type === o("MWGroupMembershipListItem").MWGroupMembershipMemberTypes.ServerSearchResult ? e.serverSearchResult.displayName.localeCompare(t.serverSearchResult.displayName) : 0;
	}
	function y(e) {
		var t;
		return (t = o("MWGroupMembershipListItem").isHost(e)) != null ? t : !1;
	}
	function C(e) {
		var t = e.type === o("MWGroupMembershipListItem").MWGroupMembershipMemberTypes.ParticipantAndContact ? e.participant.groupParticipantJoinState : (c || (c = o("LSIntEnum"))).ofNumber(r("LSGroupParticipantJoinState").MEMBER);
		return (u || (u = o("I64"))).equal(t, (c || (c = o("LSIntEnum"))).ofNumber(r("LSGroupParticipantJoinState").INVITED));
	}
	function b(e) {
		var t, n, r = (t = o("MWGroupMembershipListItem").isAdmin(e)) != null ? t : !1, a = (n = o("MWGroupMembershipListItem").isModerator(e)) != null ? n : !1;
		return r || a;
	}
	l.default = g;
}), 226);
