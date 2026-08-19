__d("WAWebCommunityInfoSection.react", [
	"fbt",
	"WAWebChatCommunityUtils",
	"WAWebChatInfoDrawerSection.react",
	"WAWebCommunityCells.react",
	"WAWebCommunityHomeActionsSection.react",
	"WAWebCommunityHomeDescriptionSection.react",
	"WAWebCommunityInfoMembersSection.react",
	"WAWebCommunitySubgroupSwitcher.react",
	"WAWebGroupInfoCreatedBySection.react",
	"WAWebModalManager",
	"WAWebPeopleIcon.react",
	"WAWebSettingsIcon.react",
	"WDSIconIcGroupAdd.react",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"useWAWebCommunitySubgroups"
], (function(t, n, r, o, a, i, l, s) {
	var e = [
		"callbacks",
		"isAdmin",
		"onAddMembersClick",
		"parentChat",
		"scrollToMemberList",
		"showFullDescription"
	], u, c = u || (u = o("react")), d = { marginBlock10: {
		marginTop: "x1anpbxc",
		marginBottom: "xyorhqc",
		$$css: !0
	} };
	function m(t) {
		var n = o("react-compiler-runtime").c(47), a, i, l, u, m, p, _;
		n[0] !== t ? (a = t.callbacks, l = t.isAdmin, u = t.onAddMembersClick, m = t.parentChat, p = t.scrollToMemberList, _ = t.showFullDescription, i = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = u, n[5] = m, n[6] = p, n[7] = _) : (a = n[1], i = n[2], l = n[3], u = n[4], m = n[5], p = n[6], _ = n[7]);
		var f = r("useWAWebCommunitySubgroups")(m.groupMetadata), g = f.subgroupCount, h;
		n[8] !== m || n[9] !== _ ? (h = m ? c.jsx(r("WAWebCommunityHomeDescriptionSection.react"), {
			chat: m,
			showFullDescription: _
		}) : null, n[8] = m, n[9] = _, n[10] = h) : h = n[10];
		var y = h, C, b;
		if (!o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(m)) {
			if (!o("WAWebChatCommunityUtils").isSuspendedCommunity(m) && l) {
				var v;
				n[11] === Symbol.for("react.memo_cache_sentinel") ? (v = [d.marginBlock10, o("WDSPaddings.stylex").wdsPaddings.padding0], n[11] = v) : v = n[11];
				var S;
				n[12] === Symbol.for("react.memo_cache_sentinel") ? (S = s._(
					/*BTDS*/
					""
				), n[12] = S) : S = n[12];
				var R;
				n[13] !== a.onManageCommunityGroupsClick ? (R = c.jsx(o("WAWebCommunityCells.react").CommunityMenuButton, {
					testid: "row-manage-groups",
					Icon: r("WDSIconIcGroupAdd.react"),
					onClick: a.onManageCommunityGroupsClick,
					title: S
				}), n[13] = a.onManageCommunityGroupsClick, n[14] = R) : R = n[14];
				var L;
				n[15] === Symbol.for("react.memo_cache_sentinel") ? (L = s._(
					/*BTDS*/
					""
				), n[15] = L) : L = n[15];
				var E;
				n[16] !== a.onCommunitySettingsClick ? (E = c.jsx(o("WAWebCommunityCells.react").CommunityMenuButton, {
					testid: "row-community-settings",
					Icon: o("WAWebSettingsIcon.react").SettingsIcon,
					iconHeight: 20,
					onClick: a.onCommunitySettingsClick,
					title: L
				}), n[16] = a.onCommunitySettingsClick, n[17] = E) : E = n[17];
				var k;
				n[18] !== R || n[19] !== E ? (k = c.jsxs(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
					testid: "section-menu",
					xstyle: v,
					children: [R, E]
				}), n[18] = R, n[19] = E, n[20] = k) : k = n[20], C = k;
			}
			var I;
			n[21] === Symbol.for("react.memo_cache_sentinel") ? (I = [d.marginBlock10, o("WDSPaddings.stylex").wdsPaddings.padding0], n[21] = I) : I = n[21];
			var T;
			n[22] !== m ? (T = function() {
				o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebCommunitySubgroupSwitcher.react"), { parentChat: m }));
			}, n[22] = m, n[23] = T) : T = n[23];
			var D;
			n[24] !== g ? (D = s._(
				/*BTDS*/
				"",
				[s._param("subgroup-count", g, [0])]
			), n[24] = g, n[25] = D) : D = n[25];
			var x;
			n[26] !== T || n[27] !== D ? (x = c.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
				testid: "section-menu",
				xstyle: I,
				children: c.jsx(o("WAWebCommunityCells.react").CommunityMenuButton, {
					testid: "row-view-groups",
					Icon: o("WAWebPeopleIcon.react").PeopleIcon,
					onClick: T,
					title: D
				})
			}), n[26] = T, n[27] = D, n[28] = x) : x = n[28], b = x;
		}
		var $;
		n[29] !== a || n[30] !== i || n[31] !== u || n[32] !== m || n[33] !== p ? ($ = o("WAWebChatCommunityUtils").isSuspendedCommunity(m) ? null : c.jsx(r("WAWebCommunityInfoMembersSection.react"), babelHelpers.extends({
			parentChat: m,
			onInviteMembersClick: a.onInviteMembersClick,
			onAddMembersClick: u,
			scrollToMemberList: p
		}, i)), n[29] = a, n[30] = i, n[31] = u, n[32] = m, n[33] = p, n[34] = $) : $ = n[34];
		var P = $, N;
		n[35] !== a || n[36] !== m ? (N = m ? c.jsx(r("WAWebCommunityHomeActionsSection.react"), {
			chat: m,
			onBack: a.onBack,
			onDeactivateCommunity: a.onDeactivateCommunity,
			onTransferOwnership: a.onTransferOwnership
		}) : null, n[35] = a, n[36] = m, n[37] = N) : N = n[37];
		var M = N, w;
		n[38] !== m ? (w = c.jsx(r("WAWebGroupInfoCreatedBySection.react"), { chat: m }), n[38] = m, n[39] = w) : w = n[39];
		var A;
		return n[40] !== M || n[41] !== y || n[42] !== P || n[43] !== C || n[44] !== w || n[45] !== b ? (A = c.jsxs(c.Fragment, { children: [
			y,
			C,
			b,
			P,
			M,
			w
		] }), n[40] = M, n[41] = y, n[42] = P, n[43] = C, n[44] = w, n[45] = b, n[46] = A) : A = n[46], A;
	}
	l.default = m;
}), 226);
