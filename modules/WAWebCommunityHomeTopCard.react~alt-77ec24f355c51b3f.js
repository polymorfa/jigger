__d("WAWebCommunityHomeTopCard.react", [
	"fbt",
	"WAAbortError",
	"WAFilteredCatch",
	"WALogger",
	"WAPromiseRaceAbort",
	"WAWebABProps",
	"WAWebAlertErrorIcon.react",
	"WAWebChatCommunityUtils",
	"WAWebCommunityAnnouncementGroupUtils",
	"WAWebCommunitySubjectChangePopups.react",
	"WAWebConfirmPopup.react",
	"WAWebCopyPasteSelectable.react",
	"WAWebDrawerSectionRefreshed.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebGroupInfoSubjectInput.react",
	"WAWebL10N",
	"WAWebMiscErrors",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebPhotoPickerConstants",
	"WAWebPhotoPickerLoadable.react",
	"WAWebProfilePicThumbAction",
	"WAWebSchemaGroupMetadata",
	"WAWebSetSubjectGroupAction",
	"WAWebUnstyledButton.react",
	"WDSActionTile.react",
	"WDSActionTileGroup.react",
	"WDSIconIcGroupAdd.react",
	"WDSIconIcLink.react",
	"WDSIconIcPersonAdd.react",
	"WDSMargins.stylex",
	"WDSText.react",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebCommunitySubgroups",
	"useWAWebEventTargetValue",
	"useWAWebModelValues",
	"useWAWebShowCommunitySubjectSyncIssue",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = ["chat", "isAdmin"], d, m, p = m || (m = o("react")), _ = m.useState, f = { marginBottom6: {
		marginBottom: "xzueoph",
		$$css: !0
	} }, g = {
		icon: {
			zIndex: "xzkaem6",
			$$css: !0
		},
		photoWrapper: {
			display: "x78zum5",
			justifyContent: "xl56j7k",
			width: "xh8yej3",
			$$css: !0
		},
		subjectInputFlex: {
			justifyContent: "xl56j7k",
			width: "xh8yej3",
			$$css: !0
		}
	};
	function h(e) {
		var t = o("react-compiler-runtime").c(30), n, a, i;
		t[0] !== e ? (n = e.chat, i = e.isAdmin, a = babelHelpers.objectWithoutPropertiesLoose(e, c), t[0] = e, t[1] = n, t[2] = a, t[3] = i) : (n = t[1], a = t[2], i = t[3]);
		var l;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (l = [
			"groupMetadata",
			"contact",
			"id"
		], t[4] = l) : l = t[4];
		var u = o("useWAWebModelValues").useModelValues(n, l), d = r("useWAWebCommunitySubgroups")(u.groupMetadata), m = d.subgroupCount, _;
		t[5] !== u ? (_ = o("WAWebChatCommunityUtils").isSuspendedCommunity(u) || o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(u), t[5] = u, t[6] = _) : _ = t[6];
		var g = _, h;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (h = s._(
			/*BTDS*/
			""
		), t[7] = h) : h = t[7];
		var v = h, S;
		t[8] !== g || t[9] !== m ? (S = g ? null : p.jsxs(p.Fragment, { children: [r("WAWebL10N").isRTL() ? " - " : " · ", s._(
			/*BTDS*/
			"",
			[s._plural(m, "count")]
		)] }), t[8] = g, t[9] = m, t[10] = S) : S = t[10];
		var R;
		t[11] !== S ? (R = p.jsxs(p.Fragment, { children: [v, S] }), t[11] = S, t[12] = R) : R = t[12];
		var L = R, E;
		t[13] !== u || t[14] !== g ? (E = p.jsx(C, {
			chat: u,
			xstyle: f.marginBottom6,
			isCommunitySuspended: g
		}), t[13] = u, t[14] = g, t[15] = E) : E = t[15];
		var k;
		t[16] !== u ? (k = p.jsx(b, { chat: u }), t[16] = u, t[17] = k) : k = t[17];
		var I;
		t[18] === Symbol.for("react.memo_cache_sentinel") ? (I = { className: "x1mzt3pk x1anpbxc" }, t[18] = I) : I = t[18];
		var T;
		t[19] !== L ? (T = p.jsx("div", babelHelpers.extends({}, I, { children: p.jsx(o("WAWebCopyPasteSelectable.react").SelectableSpan, {
			dir: "auto",
			selectable: !0,
			children: p.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDeemphasized",
				children: L
			})
		}) })), t[19] = L, t[20] = T) : T = t[20];
		var D = i && g !== !0, x;
		t[21] !== u || t[22] !== a || t[23] !== D ? (x = p.jsx(y, babelHelpers.extends({
			chat: u,
			adminMode: D
		}, a)), t[21] = u, t[22] = a, t[23] = D, t[24] = x) : x = t[24];
		var $;
		return t[25] !== x || t[26] !== E || t[27] !== k || t[28] !== T ? ($ = p.jsx(r("WAWebDrawerSectionRefreshed.react"), {
			theme: "padding-large",
			children: p.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				children: [
					E,
					k,
					T,
					x
				]
			})
		}), t[25] = x, t[26] = E, t[27] = k, t[28] = T, t[29] = $) : $ = t[29], $;
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(40), n = e.adminMode, a = e.chat, i = e.onAddMembersClick, l = e.onInviteMembersClick, u = e.onManageCommunityGroupsClick, c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = ["change:allowNonAdminSubGroupCreation"], t[0] = c) : c = t[0];
		var d;
		t[1] !== a ? (d = function() {
			return o("WAWebChatCommunityUtils").canAddGroupToCommunity(a);
		}, t[1] = a, t[2] = d) : d = t[2];
		var m = r("useWAWebEventTargetValue")(a == null ? void 0 : a.groupMetadata, c, d), _ = a == null ? void 0 : a.groupMetadata, f;
		t[3] !== _ ? (f = o("WAWebCommunityAnnouncementGroupUtils").getCommunityAnnouncementGroupMetadata(_), t[3] = _, t[4] = f) : f = t[4];
		var g = f, h;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (h = ["change:memberAddMode"], t[5] = h) : h = t[5];
		var y;
		t[6] !== (a == null ? void 0 : a.groupMetadata) ? (y = function() {
			var e, t = a == null ? void 0 : a.groupMetadata;
			if (t == null || t.isSuspendedOrTerminated() === !0) return !1;
			if (((e = t.participants) == null ? void 0 : e.iAmAdmin()) === !0) return !0;
			var n = o("WAWebCommunityAnnouncementGroupUtils").getCommunityAnnouncementGroupMetadata(t);
			return (n == null ? void 0 : n.memberAddMode) === o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD;
		}, t[6] = a == null ? void 0 : a.groupMetadata, t[7] = y) : y = t[7];
		var C = r("useWAWebEventTargetValue")(g, h, y);
		if (!n) {
			var b;
			t[8] === Symbol.for("react.memo_cache_sentinel") ? (b = { className: "xh8yej3 x1de0gy" }, t[8] = b) : b = t[8];
			var v;
			t[9] === Symbol.for("react.memo_cache_sentinel") ? (v = s._(
				/*BTDS*/
				""
			), t[9] = v) : v = t[9];
			var S;
			t[10] !== C ? (S = C ? null : s._(
				/*BTDS*/
				""
			), t[10] = C, t[11] = S) : S = t[11];
			var R = !C, L;
			t[12] !== i || t[13] !== R || t[14] !== S ? (L = p.jsx(r("WDSActionTile.react"), {
				label: v,
				Icon: r("WDSIconIcPersonAdd.react"),
				onPress: i,
				tooltip: S,
				disabled: R,
				testid: "community_home_add_members_action_tile"
			}), t[12] = i, t[13] = R, t[14] = S, t[15] = L) : L = t[15];
			var E;
			t[16] === Symbol.for("react.memo_cache_sentinel") ? (E = s._(
				/*BTDS*/
				""
			), t[16] = E) : E = t[16];
			var k = !m, I;
			t[17] !== m ? (I = m ? null : s._(
				/*BTDS*/
				""
			), t[17] = m, t[18] = I) : I = t[18];
			var T;
			t[19] !== u || t[20] !== k || t[21] !== I ? (T = p.jsx(r("WDSActionTile.react"), {
				label: E,
				Icon: r("WDSIconIcGroupAdd.react"),
				onPress: u,
				disabled: k,
				tooltip: I,
				testid: "community_home_add_groups_action_tile"
			}), t[19] = u, t[20] = k, t[21] = I, t[22] = T) : T = t[22];
			var D;
			return t[23] !== L || t[24] !== T ? (D = p.jsx("div", babelHelpers.extends({}, b, { children: p.jsxs(r("WDSActionTileGroup.react"), { children: [L, T] }) })), t[23] = L, t[24] = T, t[25] = D) : D = t[25], D;
		}
		var x;
		t[26] === Symbol.for("react.memo_cache_sentinel") ? (x = { className: "xh8yej3 x1de0gy" }, t[26] = x) : x = t[26];
		var $;
		t[27] === Symbol.for("react.memo_cache_sentinel") ? ($ = s._(
			/*BTDS*/
			""
		), t[27] = $) : $ = t[27];
		var P;
		t[28] !== l ? (P = p.jsx(r("WDSActionTile.react"), {
			label: $,
			Icon: r("WDSIconIcLink.react"),
			onPress: l,
			testid: "community_home_invite_action_tile"
		}), t[28] = l, t[29] = P) : P = t[29];
		var N;
		t[30] === Symbol.for("react.memo_cache_sentinel") ? (N = s._(
			/*BTDS*/
			""
		), t[30] = N) : N = t[30];
		var M;
		t[31] !== i ? (M = p.jsx(r("WDSActionTile.react"), {
			label: N,
			Icon: r("WDSIconIcPersonAdd.react"),
			onPress: i,
			testid: "community_home_add_members_action_tile"
		}), t[31] = i, t[32] = M) : M = t[32];
		var w;
		t[33] === Symbol.for("react.memo_cache_sentinel") ? (w = s._(
			/*BTDS*/
			""
		), t[33] = w) : w = t[33];
		var A;
		t[34] !== u ? (A = p.jsx(r("WDSActionTile.react"), {
			label: w,
			Icon: r("WDSIconIcGroupAdd.react"),
			onPress: u,
			testid: "community_home_add_groups_action_tile"
		}), t[34] = u, t[35] = A) : A = t[35];
		var F;
		return t[36] !== M || t[37] !== A || t[38] !== P ? (F = p.jsx("div", babelHelpers.extends({}, x, { children: p.jsxs(r("WDSActionTileGroup.react"), { children: [
			P,
			M,
			A
		] }) })), t[36] = M, t[37] = A, t[38] = P, t[39] = F) : F = t[39], F;
	}
	function C(t) {
		var n, a = o("react-compiler-runtime").c(25), i = t.chat, l = t.isCommunitySuspended, s = t.xstyle, u;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (u = [
			"isReadOnly",
			"groupMetadata",
			"contact"
		], a[0] = u) : u = a[0];
		var c = o("useWAWebModelValues").useModelValues(i, u), m;
		a[1] === Symbol.for("react.memo_cache_sentinel") ? (m = ["id", "profilePicThumb"], a[1] = m) : m = a[1];
		var f = o("useWAWebModelValues").useModelValues(c.contact, m);
		f.getProfilePicThumb();
		var h;
		a[2] === Symbol.for("react.memo_cache_sentinel") ? (h = ["imgFull"], a[2] = h) : h = a[2];
		var y = o("useWAWebModelValues").useModelValues(f.profilePicThumb, h), C = _(!1), b = C[0], v = C[1], S = _(!1), R = S[0], L = S[1], E = r("useWAWebUnmountSignal")(), k;
		a[3] !== b || a[4] !== y || a[5] !== E ? (k = function(n, a) {
			L(!0);
			var t;
			n != null && a != null ? t = o("WAWebProfilePicThumbAction").setProfilePic(y, n, a) : t = o("WAWebProfilePicThumbAction").deleteProfilePic(y), r("WAPromiseRaceAbort")(t, E).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch(o("WAFilteredCatch").filteredCatch(o("WAWebMiscErrors").ActionError, function(t) {
				o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["CommunityInfoDrawer: failed to set/delete community image"]))), v(!b);
			})).finally(function() {
				L(!1);
			});
		}, a[3] = b, a[4] = y, a[5] = E, a[6] = k) : k = a[6];
		var I = k, T;
		if (a[7] !== ((n = c.groupMetadata) == null ? void 0 : n.participants) || a[8] !== c.isReadOnly || a[9] !== l || a[10] !== y) {
			var D, x;
			T = c.isReadOnly || !y.canDelete() && !y.canSet() || l || !((D = c.groupMetadata) != null && D.participants.iAmAdmin()), a[7] = (x = c.groupMetadata) == null ? void 0 : x.participants, a[8] = c.isReadOnly, a[9] = l, a[10] = y, a[11] = T;
		} else T = a[11];
		var $ = T, P;
		if (a[12] !== s) {
			var N = o("WAWebABProps").getABPropConfigValue("wds_web_profile_photo");
			P = (d || (d = r("stylex"))).props(N && g.photoWrapper, s), a[12] = s, a[13] = P;
		} else P = a[13];
		var M = String(b), w;
		a[14] !== f.id || a[15] !== I || a[16] !== l || a[17] !== R || a[18] !== y.imgFull || a[19] !== $ || a[20] !== M ? (w = p.jsx(o("WAWebPhotoPickerLoadable.react").PhotoPickerLoadable, {
			type: o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY,
			id: f.id,
			attachToChat: !0,
			pending: R,
			startImage: y.imgFull,
			readOnly: $,
			onImageSet: I,
			dimmed: l,
			size: 128
		}, M), a[14] = f.id, a[15] = I, a[16] = l, a[17] = R, a[18] = y.imgFull, a[19] = $, a[20] = M, a[21] = w) : w = a[21];
		var A;
		return a[22] !== P || a[23] !== w ? (A = p.jsx("div", babelHelpers.extends({}, P, { children: w })), a[22] = P, a[23] = w, a[24] = A) : A = a[24], A;
	}
	function b(e) {
		var t = o("react-compiler-runtime").c(26), n = e.chat, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = ["name"], t[0] = a) : a = t[0];
		var i = o("useWAWebModelValues").useModelValues(n.contact, a), l;
		t[1] !== n.groupMetadata ? (l = r("nullthrows")(n.groupMetadata), t[1] = n.groupMetadata, t[2] = l) : l = t[2];
		var s;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (s = ["creation", "restrict"], t[3] = s) : s = t[3];
		var u = o("useWAWebModelValues").useModelValues(l, s), c = r("useWAWebUnmountSignal")(), d = _(!1), m = d[0], f = d[1], h = r("useWAWebShowCommunitySubjectSyncIssue")(n), y;
		t[4] !== n || t[5] !== i.name || t[6] !== c ? (y = async function(t) {
			var e = t;
			e.trim() !== i.name && await r("WAPromiseRaceAbort")(o("WAWebSetSubjectGroupAction").setGroupSubject(n, e), c).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch(S);
		}, t[4] = n, t[5] = i.name, t[6] = c, t[7] = y) : y = t[7];
		var C = y, b = v, R;
		t[8] !== n ? (R = function() {
			o("WAWebModalManager").ModalManager.open(p.jsx(o("WAWebCommunitySubjectChangePopups.react").CommunitySubjectSyncingIssuePopup, {
				parentChat: n,
				onOK: function() {
					return f(!0);
				}
			}));
		}, t[8] = n, t[9] = R) : R = t[9];
		var L = R, E;
		t[10] !== m || t[11] !== u || t[12] !== h ? (E = h && !m ? !1 : u.canSetSubject(), t[10] = m, t[11] = u, t[12] = h, t[13] = E) : E = t[13];
		var k = u.restrict ? b : void 0, I;
		t[14] !== i.name || t[15] !== C || t[16] !== E || t[17] !== k ? (I = p.jsx(r("WAWebGroupInfoSubjectInput.react"), {
			testid: "community-home-subject-input",
			subject: i.name,
			onSave: C,
			editable: E,
			editRestrictionInfo: k
		}), t[14] = i.name, t[15] = C, t[16] = E, t[17] = k, t[18] = I) : I = t[18];
		var T;
		t[19] !== m || t[20] !== L || t[21] !== h ? (T = h && !m ? p.jsx(r("WAWebUnstyledButton.react"), {
			onClick: L,
			xstyle: [g.icon, o("WDSMargins.stylex").wdsMargins.marginTop8],
			"aria-label": o("WAWebCommunitySubjectChangePopups.react").getCommunitySubjectSyncingIssueTitle(),
			children: p.jsx(o("WAWebAlertErrorIcon.react").AlertErrorIcon, { width: 20 })
		}) : null, t[19] = m, t[20] = L, t[21] = h, t[22] = T) : T = t[22];
		var D;
		return t[23] !== I || t[24] !== T ? (D = p.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: g.subjectInputFlex,
			children: [I, T]
		}), t[23] = I, t[24] = T, t[25] = D) : D = t[25], D;
	}
	function v() {
		o("WAWebModalManager").ModalManager.open(p.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: o("WAWebModalManager").closeModalManager,
			okText: r("WAWebFbtCommon")("OK"),
			children: s._(
				/*BTDS*/
				""
			)
		}));
	}
	function S(e) {
		o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["community_home:onSetSubject failed"])));
	}
	l.default = h;
}), 226);
