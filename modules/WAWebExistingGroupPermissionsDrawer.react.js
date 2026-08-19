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
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
	"useWAWebChatValues",
	"useWAWebListener",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState;
	function d(e) {
		var t = o("react-compiler-runtime").c(33), a = e.chat, i = e.groupMetadata, l = e.icon, s = e.onConfirm, d = e.onValidateChange, m = e.secondaryTitle, p = e.settingType, _ = e.title, f;
		t[0] !== i || t[1] !== p ? (f = function() {
			switch (p) {
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.ANNOUNCEMENT: return i.announce !== !0;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.RESTRICT: return i.restrict !== !0;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED: return i.noFrequentlyForwarded !== !0;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBERSHIP_APPROVAL_MODE: return i.membershipApprovalMode === !0;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.REPORT_TO_ADMIN_MODE: return i.reportToAdminMode === !0;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_ADD_MODE: return i.memberAddMode === o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_LINK_MODE: return i.memberLinkMode === o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK;
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_SHARE_GROUP_HISTORY_MODE: return i.memberShareGroupHistoryMode === o("WAWebGroupHistoryShareMode").MemberShareGroupHistoryMode.ALL_MEMBER_SHARE;
			}
			return !1;
		}, t[0] = i, t[1] = p, t[2] = f) : f = t[2];
		var g = f, h;
		t[3] !== g ? (h = function() {
			return g();
		}, t[3] = g, t[4] = h) : h = t[4];
		var y = c(h), C = y[0], b = y[1], v;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (v = [
			"change:restrict",
			"change:announce",
			"change:noFrequentlyForwarded",
			"change:membershipApprovalMode",
			"change:memberAddMode",
			"change:reportToAdminMode",
			"change:memberLinkMode",
			"change:memberShareGroupHistoryMode"
		], t[5] = v) : v = t[5];
		var S;
		t[6] !== g ? (S = function() {
			return b(g());
		}, t[6] = g, t[7] = S) : S = t[7], o("useWAWebListener").useListener(i, v, S);
		var R;
		t[8] !== p ? (R = function(t) {
			switch (p) {
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
		}, t[8] = p, t[9] = R) : R = t[9];
		var L = R, E;
		t[10] !== a || t[11] !== L || t[12] !== d || t[13] !== p || t[14] !== C ? (E = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = !C;
				(d == null || (yield d(e))) && (yield o("WAWebSetPropertyGroupAction").setGroupProperty(a, p, L(e)));
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), t[10] = a, t[11] = L, t[12] = d, t[13] = p, t[14] = C, t[15] = E) : E = t[15];
		var k = E, I;
		t[16] !== k || t[17] !== s ? (I = function() {
			s ? s(function() {
				return void k();
			}) : k();
		}, t[16] = k, t[17] = s, t[18] = I) : I = t[18];
		var T = I, D = "group_info_" + p + "_switch", x;
		t[19] !== T || t[20] !== D || t[21] !== _ || t[22] !== C ? (x = u.jsx(r("WDSSwitch.react"), {
			"aria-label": _,
			value: C,
			onChange: T,
			testid: D
		}), t[19] = T, t[20] = D, t[21] = _, t[22] = C, t[23] = x) : x = t[23];
		var $ = x, P;
		t[24] !== _ ? (P = u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, { children: _ }), t[24] = _, t[25] = P) : P = t[25];
		var N;
		t[26] !== m ? (N = u.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, { children: m }), t[26] = m, t[27] = N) : N = t[27];
		var M;
		return t[28] !== l || t[29] !== N || t[30] !== P || t[31] !== $ ? (M = u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
			icon: l,
			side: $,
			title: P,
			secondaryTitle: N
		}), t[28] = l, t[29] = N, t[30] = P, t[31] = $, t[32] = M) : M = t[32], M;
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
		var t = o("react-compiler-runtime").c(77), a = e.chat, i = e.groupLinkingFlow, l = e.groupMetadata, c = e.onClose, _ = e.ref, h;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (h = [o("WAWebChatGetters").getId, o("WAWebChatGetters").getIsNewsletter], t[0] = h) : h = t[0];
		var y = o("useWAWebChatValues").useChatValues(a.id, h), C = y[1], b;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (b = [
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
		], t[1] = b) : b = t[1];
		var v = o("useWAWebModelValues").useModelValues(l, b), S = i != null ? i : !1, R;
		t[2] !== v.membershipApprovalRequests.length || t[3] !== v.participants ? (R = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = v.membershipApprovalRequests.length;
				if (e === !1 && t > 0) {
					if (!(yield o("WAWebGroupSettingsConfirmation").confirmPendingRequests())) return !1;
					var n = v.participants.length, r = o("WAWebMiscGatingUtils").getGroupSizeLimit() - n;
					if (t > r && !(yield o("WAWebGroupSettingsConfirmation").confirmGroupFull(r, t))) return !1;
				}
				return !0;
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), t[2] = v.membershipApprovalRequests.length, t[3] = v.participants, t[4] = R) : R = t[4];
		var L = R, E = g, k = f, I;
		t[5] !== a || t[6] !== v.reportToAdminMode || t[7] !== C ? (I = !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(a) && !C && (v.reportToAdminMode || o("WAWebABProps").getABPropConfigValue("report_to_admin_enabled")), t[5] = a, t[6] = v.reportToAdminMode, t[7] = C, t[8] = I) : I = t[8];
		var T = I, D;
		if (t[9] !== a || t[10] !== v) {
			var x, $;
			D = !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(a) && v.memberAddMode === o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD && ((x = o("WAWebCommunityAnnouncementGroupUtils").getCommunityAnnouncementGroupMetadata(($ = v.getParentGroupChat()) == null ? void 0 : $.groupMetadata)) == null ? void 0 : x.memberAddMode) !== o("WAWebSchemaGroupMetadata").MemberAddMode.ADMIN_ADD, t[9] = a, t[10] = v, t[11] = D;
		} else D = t[11];
		var P = D, N;
		t[12] !== a.id ? (N = o("WAWebGroupHistoryGating").isGroupHistorySettingsDecoupleEnabled(o("WAWebWidFactory").asGroupWidOrThrow(a.id)), t[12] = a.id, t[13] = N) : N = t[13];
		var M = N, w;
		t[14] !== a || t[15] !== v.memberAddMode || t[16] !== M ? (w = !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(a) && o("WAWebGroupHistoryGating").isGroupHistorySettingsToggleUIEnabled(o("WAWebWidFactory").asGroupWidOrThrow(a.id)) && (M || v.memberAddMode === o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD), t[14] = a, t[15] = v.memberAddMode, t[16] = M, t[17] = w) : w = t[17];
		var A = w, F;
		t[18] !== a || t[19] !== v || t[20] !== A ? (F = A ? u.jsx(d, {
			chat: a,
			groupMetadata: v,
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
		}) : null, t[18] = a, t[19] = v, t[20] = A, t[21] = F) : F = t[21];
		var O = F, B;
		t[22] === Symbol.for("react.memo_cache_sentinel") ? (B = {
			surface: "unknown",
			viewName: "existing-group-permissions"
		}, t[22] = B) : B = t[22];
		var W;
		t[23] === Symbol.for("react.memo_cache_sentinel") ? (W = s._(
			/*BTDS*/
			""
		), t[23] = W) : W = t[23];
		var q;
		t[24] !== c ? (q = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: W,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: c
		}), t[24] = c, t[25] = q) : q = t[25];
		var U;
		t[26] === Symbol.for("react.memo_cache_sentinel") ? (U = u.jsx(m, { title: s._(
			/*BTDS*/
			""
		) }), t[26] = U) : U = t[26];
		var V, H;
		t[27] === Symbol.for("react.memo_cache_sentinel") ? (V = u.jsx(o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon, {}), H = s._(
			/*BTDS*/
			""
		), t[27] = V, t[28] = H) : (V = t[27], H = t[28]);
		var G;
		t[29] === Symbol.for("react.memo_cache_sentinel") ? (G = u.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
			/*BTDS*/
			""
		) }), t[29] = G) : G = t[29];
		var z, j;
		t[30] !== a || t[31] !== v ? (z = u.jsx(d, {
			chat: a,
			groupMetadata: v,
			settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.RESTRICT,
			icon: V,
			title: H,
			secondaryTitle: G
		}), j = v.groupType !== o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ? u.jsx(d, {
			chat: a,
			groupMetadata: v,
			settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.ANNOUNCEMENT,
			icon: u.jsx(o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon, {}),
			title: s._(
				/*BTDS*/
				""
			)
		}) : null, t[30] = a, t[31] = v, t[32] = z, t[33] = j) : (z = t[32], j = t[33]);
		var K, Q;
		t[34] === Symbol.for("react.memo_cache_sentinel") ? (K = u.jsx(r("WDSIconIcGroupAdd.react"), {}), Q = s._(
			/*BTDS*/
			""
		), t[34] = K, t[35] = Q) : (K = t[34], Q = t[35]);
		var X = v.memberAddMode === o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD && v.memberLinkMode === o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK ? k : void 0, Y;
		t[36] !== a || t[37] !== v || t[38] !== X ? (Y = u.jsx(d, {
			chat: a,
			groupMetadata: v,
			settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_ADD_MODE,
			icon: K,
			title: Q,
			onConfirm: X
		}), t[36] = a, t[37] = v, t[38] = X, t[39] = Y) : Y = t[39];
		var J = !M && O, Z;
		t[40] !== a || t[41] !== v || t[42] !== P ? (Z = P && u.jsx(d, {
			chat: a,
			groupMetadata: v,
			icon: u.jsx(r("WDSIconIcLink.react"), { testid: "ic-link" }),
			settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBER_LINK_MODE,
			title: s._(
				/*BTDS*/
				""
			),
			onConfirm: v.memberLinkMode === o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK ? k : void 0
		}), t[40] = a, t[41] = v, t[42] = P, t[43] = Z) : Z = t[43];
		var ee = M && O, te;
		t[44] !== a || t[45] !== v || t[46] !== S || t[47] !== T ? (te = T && !S ? u.jsx(d, {
			chat: a,
			groupMetadata: v,
			settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.REPORT_TO_ADMIN_MODE,
			onValidateChange: E,
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
		}) : null, t[44] = a, t[45] = v, t[46] = S, t[47] = T, t[48] = te) : te = t[48];
		var ne;
		t[49] !== z || t[50] !== j || t[51] !== Y || t[52] !== J || t[53] !== Z || t[54] !== ee || t[55] !== te ? (ne = u.jsxs(r("WAWebDrawerSection.react"), {
			animation: !1,
			xstyle: o("WDSPaddings.stylex").wdsPaddings.padding0,
			theme: "refresh-new",
			children: [
				z,
				j,
				Y,
				J,
				Z,
				ee,
				te
			]
		}), t[49] = z, t[50] = j, t[51] = Y, t[52] = J, t[53] = Z, t[54] = ee, t[55] = te, t[56] = ne) : ne = t[56];
		var re;
		t[57] === Symbol.for("react.memo_cache_sentinel") ? (re = u.jsx(m, { title: s._(
			/*BTDS*/
			""
		) }), t[57] = re) : re = t[57];
		var oe, ae;
		t[58] === Symbol.for("react.memo_cache_sentinel") ? (oe = u.jsx(o("WAWebPersonClockIcon.react").PersonClockIcon, {}), ae = s._(
			/*BTDS*/
			""
		), t[58] = oe, t[59] = ae) : (oe = t[58], ae = t[59]);
		var ie;
		t[60] === Symbol.for("react.memo_cache_sentinel") ? (ie = u.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m2", u.jsx(r("WDSTextualLink.react"), {
				href: o("WAWebFaqUrl").getMembershipApprovalModeFaqUrl(),
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		) }), t[60] = ie) : ie = t[60];
		var le;
		t[61] !== a || t[62] !== v || t[63] !== L ? (le = u.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			theme: "refresh-new",
			xstyle: o("WDSPaddings.stylex").wdsPaddings.padding0,
			children: u.jsx(d, {
				chat: a,
				groupMetadata: v,
				settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.MEMBERSHIP_APPROVAL_MODE,
				onValidateChange: L,
				icon: oe,
				title: ae,
				secondaryTitle: ie
			})
		}), t[61] = a, t[62] = v, t[63] = L, t[64] = le) : le = t[64];
		var se;
		t[65] !== a || t[66] !== v || t[67] !== S ? (se = v.groupType !== o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && !S ? (function() {
			var e = s._(
				/*BTDS*/
				""
			), t = function() {
				o("WAWebGroupManageAdminModal").openManageAdminModal(a, v);
			}, n = u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
				onClick: t,
				icon: u.jsx(o("WAWebPersonGearIcon.react").PersonGearIcon, {}),
				title: u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, { children: e }),
				secondaryTitle: u.jsx(p, { groupMetadata: v })
			});
			return u.jsxs(u.Fragment, { children: [u.jsx(m, { title: s._(
				/*BTDS*/
				""
			) }), u.jsx(r("WAWebDrawerSection.react"), {
				animation: !1,
				theme: "refresh-new",
				xstyle: o("WDSPaddings.stylex").wdsPaddings.padding0,
				children: n
			})] });
		})() : null, t[65] = a, t[66] = v, t[67] = S, t[68] = se) : se = t[68];
		var ue;
		t[69] !== ne || t[70] !== le || t[71] !== se ? (ue = u.jsxs(r("WAWebDrawerBody.react"), { children: [
			U,
			ne,
			re,
			le,
			se
		] }), t[69] = ne, t[70] = le, t[71] = se, t[72] = ue) : ue = t[72];
		var ce;
		return t[73] !== _ || t[74] !== q || t[75] !== ue ? (ce = u.jsxs(r("WAWebDrawer.react"), {
			ref: _,
			theme: "striped",
			testid: "group-settings-drawer",
			tsNavigationData: B,
			children: [q, ue]
		}), t[73] = _, t[74] = q, t[75] = ue, t[76] = ce) : ce = t[76], ce;
	}
	function f(e) {
		o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebGroupLinkResetConfirmationModal.react"), { onConfirm: e }));
	}
	function g(e) {
		return h.apply(this, arguments);
	}
	function h() {
		return h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			return !(e === !1 && !(yield o("WAWebGroupSettingsConfirmation").confirmDeleteReportsForAdminReview()));
		}), h.apply(this, arguments);
	}
	l.default = _;
}), 226);
