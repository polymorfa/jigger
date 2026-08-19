__d("WAWebExistingGroupPermissionsDrawer.react", [
	"fbt",
	"WAWebABProps",
	"WAWebChatGetters",
	"WAWebChatGroupUtils",
	"WAWebChatInfoDrawerRow.react",
	"WAWebChatRefreshedIcon.react",
	"WAWebCommunityAnnouncementGroupUtils",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebEmojiText.react",
	"WAWebFaqUrl",
	"WAWebFbtIntlList",
	"WAWebGroupConstants",
	"WAWebGroupHistoryGating",
	"WAWebGroupHistoryShareMode",
	"WAWebGroupLinkResetConfirmationModal.react",
	"WAWebGroupManageAdminModal",
	"WAWebGroupMemberLinkMode",
	"WAWebGroupSettingsConfirmation",
	"WAWebGroupType",
	"WAWebMessageReportRefreshedIcon.react",
	"WAWebMiscGatingUtils",
	"WAWebModalManager",
	"WAWebParticipantListUtils",
	"WAWebPencilRefreshedIcon.react",
	"WAWebPersonClockIcon.react",
	"WAWebPersonGearIcon.react",
	"WAWebSchemaGroupMetadata",
	"WAWebSetPropertyGroupAction",
	"WAWebText.react",
	"WAWebWidFactory",
	"WDSIconIcGroupAdd.react",
	"WDSIconIcHistory.react",
	"WDSIconIcLink.react",
	"WDSPaddings.stylex",
	"WDSSwitch.react",
	"WDSTextualLink.react",
	"react",
	"react-compiler-runtime",
	"useWAWebChatValues",
	"useWAWebListener",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState;
	function d(e) {
		var t = o("react-compiler-runtime").c(33), n = e.chat, a = e.groupMetadata, i = e.icon, l = e.onConfirm, s = e.onValidateChange, d = e.secondaryTitle, m = e.settingType, p = e.title, _;
		t[0] !== a || t[1] !== m ? (_ = function() {
			switch (m) {
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.ANNOUNCEMENT: return a.announce !== !0;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.RESTRICT: return a.restrict !== !0;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED: return a.noFrequentlyForwarded !== !0;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBERSHIP_APPROVAL_MODE: return a.membershipApprovalMode === !0;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.REPORT_TO_ADMIN_MODE: return a.reportToAdminMode === !0;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_ADD_MODE: return a.memberAddMode === o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_LINK_MODE: return a.memberLinkMode === o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_SHARE_GROUP_HISTORY_MODE: return a.memberShareGroupHistoryMode === o("WAWebGroupHistoryShareMode").MemberShareGroupHistoryMode.ALL_MEMBER_SHARE;
			}
			return !1;
		}, t[0] = a, t[1] = m, t[2] = _) : _ = t[2];
		var f = _, g;
		t[3] !== f ? (g = function() {
			return f();
		}, t[3] = f, t[4] = g) : g = t[4];
		var h = c(g), y = h[0], C = h[1], b;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (b = [
			"change:restrict",
			"change:announce",
			"change:noFrequentlyForwarded",
			"change:membershipApprovalMode",
			"change:memberAddMode",
			"change:reportToAdminMode",
			"change:memberLinkMode",
			"change:memberShareGroupHistoryMode"
		], t[5] = b) : b = t[5];
		var v;
		t[6] !== f ? (v = function() {
			return C(f());
		}, t[6] = f, t[7] = v) : v = t[7], o("useWAWebListener").useListener(a, b, v);
		var S;
		t[8] !== m ? (S = function(t) {
			switch (m) {
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.ANNOUNCEMENT: return t ? 0 : 1;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.RESTRICT: return t ? 0 : 1;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED: return t ? 0 : 1;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBERSHIP_APPROVAL_MODE: return t ? 1 : 0;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.REPORT_TO_ADMIN_MODE: return t ? 1 : 0;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_ADD_MODE: return t ? 1 : 0;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_LINK_MODE: return t ? 1 : 0;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_SHARE_GROUP_HISTORY_MODE: return t ? 1 : 0;
			}
			return 0;
		}, t[8] = m, t[9] = S) : S = t[9];
		var R = S, L;
		t[10] !== n || t[11] !== R || t[12] !== s || t[13] !== m || t[14] !== y ? (L = async function() {
			var e = !y;
			(s == null || await s(e)) && await o("WAWebSetPropertyGroupAction").setGroupProperty(n, m, R(e));
		}, t[10] = n, t[11] = R, t[12] = s, t[13] = m, t[14] = y, t[15] = L) : L = t[15];
		var E = L, k;
		t[16] !== E || t[17] !== l ? (k = function() {
			l ? l(function() {
				return void E();
			}) : E();
		}, t[16] = E, t[17] = l, t[18] = k) : k = t[18];
		var I = k, T = "group_info_" + m + "_switch", D;
		t[19] !== I || t[20] !== T || t[21] !== p || t[22] !== y ? (D = u.jsx(r("WDSSwitch.react"), {
			"aria-label": p,
			value: y,
			onChange: I,
			testid: T
		}), t[19] = I, t[20] = T, t[21] = p, t[22] = y, t[23] = D) : D = t[23];
		var x = D, $;
		t[24] !== p ? ($ = u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, { children: p }), t[24] = p, t[25] = $) : $ = t[25];
		var P;
		t[26] !== d ? (P = u.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, { children: d }), t[26] = d, t[27] = P) : P = t[27];
		var N;
		return t[28] !== i || t[29] !== P || t[30] !== $ || t[31] !== x ? (N = u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
			icon: i,
			side: x,
			title: $,
			secondaryTitle: P
		}), t[28] = i, t[29] = P, t[30] = $, t[31] = x, t[32] = N) : N = t[32], N;
	}
	function m(e) {
		var t = o("react-compiler-runtime").c(3), n = e.title, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = { className: "x78zum5 x6s0dn4 x1vqgdyp x1280gxy x162tt16 x5zjp28" }, t[0] = r) : r = t[0];
		var a;
		return t[1] !== n ? (a = u.jsx("div", babelHelpers.extends({}, r, { children: u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
			color: "wdsContentDeemphasized",
			children: n
		}) })), t[1] = n, t[2] = a) : a = t[2], a;
	}
	function p(e) {
		var t = e.groupMetadata, n = c(o("WAWebParticipantListUtils").calculateAdminsList(t)), a = n[0], i = n[1];
		o("useWAWebListener").useListener(t.participants, "change:isAdmin", function() {
			return i(o("WAWebParticipantListUtils").calculateAdminsList(t));
		});
		var l = r("WAWebFbtIntlList")(a, r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA), s = u.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: l,
			ellipsify: !0
		});
		return u.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, { children: s });
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = o("react-compiler-runtime").c(77), n = e.chat, a = e.groupLinkingFlow, i = e.groupMetadata, l = e.onClose, c = e.ref, _;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (_ = [o("WAWebChatGetters").getId, o("WAWebChatGetters").getIsNewsletter], t[0] = _) : _ = t[0];
		var h = o("useWAWebChatValues").useChatValues(n.id, _), y = h[1], C;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (C = [
			"restrict",
			"announce",
			"noFrequentlyForwarded",
			"participants",
			"owner",
			"groupType",
			"isParentGroup",
			"membershipApprovalMode",
			"reportToAdminMode",
			"memberAddMode",
			"memberLinkMode",
			"membershipApprovalRequests",
			"participants",
			"hasCapi",
			"memberShareGroupHistoryMode",
			"isOpenBotGroup"
		], t[1] = C) : C = t[1];
		var b = o("useWAWebModelValues").useModelValues(i, C), v = a != null ? a : !1, S;
		t[2] !== b.membershipApprovalRequests.length || t[3] !== b.participants ? (S = async function(t) {
			var e = b.membershipApprovalRequests.length;
			if (t === !1 && e > 0) {
				if (!await o("WAWebGroupSettingsConfirmation").confirmPendingRequests()) return !1;
				var n = b.participants.length, r = o("WAWebMiscGatingUtils").getGroupSizeLimit() - n;
				if (e > r && !await o("WAWebGroupSettingsConfirmation").confirmGroupFull(r, e)) return !1;
			}
			return !0;
		}, t[2] = b.membershipApprovalRequests.length, t[3] = b.participants, t[4] = S) : S = t[4];
		var R = S, L = g, E = f, k;
		t[5] !== n || t[6] !== b.reportToAdminMode || t[7] !== y ? (k = !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(n) && !y && (b.reportToAdminMode || o("WAWebABProps").getABPropConfigValue("report_to_admin_enabled")), t[5] = n, t[6] = b.reportToAdminMode, t[7] = y, t[8] = k) : k = t[8];
		var I = k, T;
		if (t[9] !== n || t[10] !== b) {
			var D, x;
			T = !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(n) && b.memberAddMode === o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD && ((D = o("WAWebCommunityAnnouncementGroupUtils").getCommunityAnnouncementGroupMetadata((x = b.getParentGroupChat()) == null ? void 0 : x.groupMetadata)) == null ? void 0 : D.memberAddMode) !== o("WAWebSchemaGroupMetadata").MemberAddMode.ADMIN_ADD, t[9] = n, t[10] = b, t[11] = T;
		} else T = t[11];
		var $ = T, P;
		t[12] !== n.id ? (P = o("WAWebGroupHistoryGating").isGroupHistorySettingsDecoupleEnabled(o("WAWebWidFactory").asGroupWidOrThrow(n.id)), t[12] = n.id, t[13] = P) : P = t[13];
		var N = P, M;
		t[14] !== n || t[15] !== b.memberAddMode || t[16] !== N ? (M = !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(n) && o("WAWebGroupHistoryGating").isGroupHistorySettingsToggleUIEnabled(o("WAWebWidFactory").asGroupWidOrThrow(n.id)) && (N || b.memberAddMode === o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD), t[14] = n, t[15] = b.memberAddMode, t[16] = N, t[17] = M) : M = t[17];
		var w = M, A;
		t[18] !== n || t[19] !== b || t[20] !== w ? (A = w ? u.jsx(d, {
			chat: n,
			groupMetadata: b,
			settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_SHARE_GROUP_HISTORY_MODE,
			icon: u.jsx(r("WDSIconIcHistory.react"), { testid: "group_message_history_setting_icon" }),
			title: s._(
				/*BTDS*/
				""
			),
			secondaryTitle: s._(
				/*BTDS*/
				""
			)
		}) : null, t[18] = n, t[19] = b, t[20] = w, t[21] = A) : A = t[21];
		var F = A, O;
		t[22] === Symbol.for("react.memo_cache_sentinel") ? (O = {
			surface: "unknown",
			viewName: "existing-group-permissions"
		}, t[22] = O) : O = t[22];
		var B;
		t[23] === Symbol.for("react.memo_cache_sentinel") ? (B = s._(
			/*BTDS*/
			""
		), t[23] = B) : B = t[23];
		var W;
		t[24] !== l ? (W = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: B,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: l
		}), t[24] = l, t[25] = W) : W = t[25];
		var q;
		t[26] === Symbol.for("react.memo_cache_sentinel") ? (q = u.jsx(m, { title: s._(
			/*BTDS*/
			""
		) }), t[26] = q) : q = t[26];
		var U, V;
		t[27] === Symbol.for("react.memo_cache_sentinel") ? (U = u.jsx(o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon, {}), V = s._(
			/*BTDS*/
			""
		), t[27] = U, t[28] = V) : (U = t[27], V = t[28]);
		var H;
		t[29] === Symbol.for("react.memo_cache_sentinel") ? (H = u.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
			/*BTDS*/
			""
		) }), t[29] = H) : H = t[29];
		var G, z;
		t[30] !== n || t[31] !== b ? (G = u.jsx(d, {
			chat: n,
			groupMetadata: b,
			settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.RESTRICT,
			icon: U,
			title: V,
			secondaryTitle: H
		}), z = b.groupType !== o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ? u.jsx(d, {
			chat: n,
			groupMetadata: b,
			settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.ANNOUNCEMENT,
			icon: u.jsx(o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon, {}),
			title: s._(
				/*BTDS*/
				""
			)
		}) : null, t[30] = n, t[31] = b, t[32] = G, t[33] = z) : (G = t[32], z = t[33]);
		var j, K;
		t[34] === Symbol.for("react.memo_cache_sentinel") ? (j = u.jsx(r("WDSIconIcGroupAdd.react"), {}), K = s._(
			/*BTDS*/
			""
		), t[34] = j, t[35] = K) : (j = t[34], K = t[35]);
		var Q = b.memberAddMode === o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD && b.memberLinkMode === o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK ? E : void 0, X;
		t[36] !== n || t[37] !== b || t[38] !== Q ? (X = u.jsx(d, {
			chat: n,
			groupMetadata: b,
			settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_ADD_MODE,
			icon: j,
			title: K,
			onConfirm: Q
		}), t[36] = n, t[37] = b, t[38] = Q, t[39] = X) : X = t[39];
		var Y = !N && F, J;
		t[40] !== n || t[41] !== b || t[42] !== $ ? (J = $ && u.jsx(d, {
			chat: n,
			groupMetadata: b,
			icon: u.jsx(r("WDSIconIcLink.react"), { testid: "ic-link" }),
			settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_LINK_MODE,
			title: s._(
				/*BTDS*/
				""
			),
			onConfirm: b.memberLinkMode === o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK ? E : void 0
		}), t[40] = n, t[41] = b, t[42] = $, t[43] = J) : J = t[43];
		var Z = N && F, ee;
		t[44] !== n || t[45] !== b || t[46] !== v || t[47] !== I ? (ee = I && !v ? u.jsx(d, {
			chat: n,
			groupMetadata: b,
			settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.REPORT_TO_ADMIN_MODE,
			onValidateChange: L,
			icon: u.jsx(o("WAWebMessageReportRefreshedIcon.react").MessageReportRefreshedIcon, {}),
			title: s._(
				/*BTDS*/
				""
			),
			secondaryTitle: u.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m2", u.jsx(r("WDSTextualLink.react"), {
					href: o("WAWebFaqUrl").getReportToAdminFaqUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			) })
		}) : null, t[44] = n, t[45] = b, t[46] = v, t[47] = I, t[48] = ee) : ee = t[48];
		var te;
		t[49] !== G || t[50] !== z || t[51] !== X || t[52] !== Y || t[53] !== J || t[54] !== Z || t[55] !== ee ? (te = u.jsxs(r("WAWebDrawerSection.react"), {
			animation: !1,
			xstyle: o("WDSPaddings.stylex").wdsPaddings.padding0,
			theme: "refresh-new",
			children: [
				G,
				z,
				X,
				Y,
				J,
				Z,
				ee
			]
		}), t[49] = G, t[50] = z, t[51] = X, t[52] = Y, t[53] = J, t[54] = Z, t[55] = ee, t[56] = te) : te = t[56];
		var ne;
		t[57] === Symbol.for("react.memo_cache_sentinel") ? (ne = u.jsx(m, { title: s._(
			/*BTDS*/
			""
		) }), t[57] = ne) : ne = t[57];
		var re, oe;
		t[58] === Symbol.for("react.memo_cache_sentinel") ? (re = u.jsx(o("WAWebPersonClockIcon.react").PersonClockIcon, {}), oe = s._(
			/*BTDS*/
			""
		), t[58] = re, t[59] = oe) : (re = t[58], oe = t[59]);
		var ae;
		t[60] === Symbol.for("react.memo_cache_sentinel") ? (ae = u.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m2", u.jsx(r("WDSTextualLink.react"), {
				href: o("WAWebFaqUrl").getMembershipApprovalModeFaqUrl(),
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		) }), t[60] = ae) : ae = t[60];
		var ie;
		t[61] !== n || t[62] !== b || t[63] !== R ? (ie = u.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			theme: "refresh-new",
			xstyle: o("WDSPaddings.stylex").wdsPaddings.padding0,
			children: u.jsx(d, {
				chat: n,
				groupMetadata: b,
				settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBERSHIP_APPROVAL_MODE,
				onValidateChange: R,
				icon: re,
				title: oe,
				secondaryTitle: ae
			})
		}), t[61] = n, t[62] = b, t[63] = R, t[64] = ie) : ie = t[64];
		var le;
		t[65] !== n || t[66] !== b || t[67] !== v ? (le = b.groupType !== o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && !v ? (function() {
			var e = s._(
				/*BTDS*/
				""
			), t = function() {
				o("WAWebGroupManageAdminModal").openManageAdminModal(n, b);
			}, a = u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
				onClick: t,
				icon: u.jsx(o("WAWebPersonGearIcon.react").PersonGearIcon, {}),
				title: u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, { children: e }),
				secondaryTitle: u.jsx(p, { groupMetadata: b })
			});
			return u.jsxs(u.Fragment, { children: [u.jsx(m, { title: s._(
				/*BTDS*/
				""
			) }), u.jsx(r("WAWebDrawerSection.react"), {
				animation: !1,
				theme: "refresh-new",
				xstyle: o("WDSPaddings.stylex").wdsPaddings.padding0,
				children: a
			})] });
		})() : null, t[65] = n, t[66] = b, t[67] = v, t[68] = le) : le = t[68];
		var se;
		t[69] !== te || t[70] !== ie || t[71] !== le ? (se = u.jsxs(r("WAWebDrawerBody.react"), { children: [
			q,
			te,
			ne,
			ie,
			le
		] }), t[69] = te, t[70] = ie, t[71] = le, t[72] = se) : se = t[72];
		var ue;
		return t[73] !== c || t[74] !== W || t[75] !== se ? (ue = u.jsxs(r("WAWebDrawer.react"), {
			ref: c,
			theme: "striped",
			testid: "group-settings-drawer",
			tsNavigationData: O,
			children: [W, se]
		}), t[73] = c, t[74] = W, t[75] = se, t[76] = ue) : ue = t[76], ue;
	}
	function f(e) {
		o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebGroupLinkResetConfirmationModal.react"), { onConfirm: e }));
	}
	async function g(e) {
		return !(e === !1 && !await o("WAWebGroupSettingsConfirmation").confirmDeleteReportsForAdminReview());
	}
	l.default = _;
}), 226);
