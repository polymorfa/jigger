__d("WAWebCommunityInfoMembersSection.react", [
	"fbt",
	"WAWebCellFrame.react",
	"WAWebChatCommunityUtils",
	"WAWebChatContact.react",
	"WAWebChatInfoDrawerSection.react",
	"WAWebChatInfoExpandButton.react",
	"WAWebCommunityAnnouncementGroupUtils",
	"WAWebCommunityMembersFlow.react",
	"WAWebDomScroll",
	"WAWebDrawerSection.react",
	"WAWebFrontendContactGetters",
	"WAWebListButton.react",
	"WAWebModalManager",
	"WAWebNavigableFlatList.react",
	"WAWebRoundShape.react",
	"WAWebSchemaGroupMetadata",
	"WAWebSearchIcon.react",
	"WAWebSingleSelection",
	"WAWebText.react",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebUserPrefsMeUser",
	"WAWebViewCommunityMembersModal.react",
	"WAWebWid",
	"WDSIconIcPersonAddFilled.react",
	"WDSMargins.stylex",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"useWAWebEventTargetValue",
	"useWAWebSplitCommunityParticipants"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useMemo, p = c.useRef, _ = c.useState, f = { marginInline30: {
		marginInlineStart: "xymharo",
		marginInlineEnd: "x2pibh5",
		marginLeft: null,
		marginRight: null,
		$$css: !0
	} }, g = { secondaryColor: {
		color: "xhslqc4",
		$$css: !0
	} }, h = o("WAWebChatContact.react").ContactFactory();
	function y(e) {
		var t = m(function() {
			return new (r("WAWebSingleSelection"))([], function(e) {
				return e.id.toString();
			});
		}, []), n = e.parentChat, a = e.members, i = a === void 0 ? [] : a, l = e.announcementGroupParticipants, c = e.parentGroupParticipants, h = e.onAddMembersClick, y = e.scrollToMemberList, v = _(), S = v[0], R = v[1], L = !!(c != null && c.iAmAdmin()), E = r("useWAWebSplitCommunityParticipants")(L, l, i), k = E.members, I = E.membersNotInCAG, T = {
			parentChat: n,
			announcementGroupParticipants: l,
			parentGroupParticipants: c,
			loading: e.loading,
			onInviteMembersClick: e.onInviteMembersClick
		}, D = p();
		d(function() {
			y && D.current && o("WAWebDomScroll").scrollIntoViewIfNeeded(D.current, !1);
		}, [y]);
		var x = function() {
			n && o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebCommunityMembersFlow.react"), babelHelpers.extends({
				members: k,
				membersNotInCAG: I
			}, T)));
		}, $ = function() {
			n && o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebViewCommunityMembersModal.react").CommunityMembersSearch, babelHelpers.extends({
				members: I,
				theme: o("WAWebViewCommunityMembersModal.react").CommunityMembersSearchTheme.MembersNotInAnnouncements
			}, T)));
		}, P = function(t, r) {
			var e = o("WAWebViewCommunityMembersModal.react").getMemberContextMenuItems({
				parentChat: n,
				parentGroupParticipants: c,
				announcementGroupParticipants: l,
				contact: r,
				origin: "communityParticipantSearch"
			});
			!e || e.length === 0 || R({
				contactId: r.id,
				menu: e,
				anchor: t.anchor,
				event: t.event
			});
		}, N = m(function() {
			var e = k;
			return b(k) && (e = e.slice(0, o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS)), t.init(e), e.map(function(e) {
				return {
					itemKey: e.id.toString(),
					contact: e,
					height: 68
				};
			});
		}, [k]), M, w;
		if (b(k)) {
			var A = k.length - o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS;
			M = u.jsx(r("WAWebChatInfoExpandButton.react"), {
				numMore: A,
				onClick: x,
				viewAll: !0
			});
		} else L && I.length ? M = u.jsx(o("WAWebListButton.react").ListButton, {
			onClick: $,
			children: s._(
				/*BTDS*/
				""
			)
		}) : L || (w = u.jsx(r("WAWebDrawerSection.react"), {
			theme: "transparent",
			xstyle: [o("WDSMargins.stylex").wdsMargins.marginVer20, f.marginInline30],
			children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
				as: "p",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}));
		var F = function() {
			R(null);
		}, O;
		S && (O = u.jsx(o("WAWebUimUie.react").UIE, {
			dismissOnWindowResize: !0,
			displayName: "ChatContextMenu",
			escapable: !0,
			popable: !0,
			requestDismiss: F,
			children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: S })
		}));
		var B = s._(
			/*BTDS*/
			"",
			[s._plural(i.length, "group-participants")]
		), W = s._(
			/*BTDS*/
			""
		), q = o("WAWebCommunityAnnouncementGroupUtils").getCommunityAnnouncementGroupMetadata(n.groupMetadata), U = r("useWAWebEventTargetValue")(q, ["change:memberAddMode"], function() {
			if (o("WAWebChatCommunityUtils").isSuspendedCommunity(n)) return !1;
			if (L) return !0;
			var e = o("WAWebCommunityAnnouncementGroupUtils").getCommunityAnnouncementGroupMetadata(n.groupMetadata);
			return (e == null ? void 0 : e.memberAddMode) === o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD;
		}), V = U ? u.jsx(r("WAWebCellFrame.react"), {
			ariaLabel: W,
			focusable: !0,
			image: u.jsx(r("WAWebRoundShape.react"), {
				theme: "compact",
				children: u.jsx(r("WDSIconIcPersonAddFilled.react"), { directional: !0 })
			}),
			onClick: h,
			primary: W,
			theme: "chat-info"
		}) : null, H = k.length ? u.jsxs(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerListSection, {
			ref: D,
			testid: "community-info-members-section",
			title: L ? s._(
				/*BTDS*/
				"",
				[s._plural(k.length, "number")]
			) : s._(
				/*BTDS*/
				""
			),
			titleOnClick: x,
			subtitle: u.jsx(o("WAWebSearchIcon.react").SearchIcon, { iconXstyle: g.secondaryColor }),
			children: [
				V,
				u.jsx(r("WAWebNavigableFlatList.react"), {
					ariaLabel: B,
					listData: N,
					onRenderItem: function(n) {
						return u.jsx(C, {
							active: t,
							contextMenu: S,
							data: n,
							onOpenMemberMenu: P,
							participantCollection: c
						});
					},
					rotateList: !0,
					selection: t
				}),
				M
			]
		}) : null;
		return u.jsxs(u.Fragment, { children: [
			H,
			O,
			w
		] });
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = o("react-compiler-runtime").c(20), n = e.active, a = e.contextMenu, i = e.data, l = e.onOpenMemberMenu, s = e.participantCollection, c = i.contact, d;
		t[0] !== c.id || t[1] !== a ? (d = !!a && r("WAWebWid").equals(c.id, a.contactId), t[0] = c.id, t[1] = a, t[2] = d) : d = t[2];
		var m = d, p;
		t[3] !== c || t[4] !== l ? (p = function(t) {
			return l(t, c);
		}, t[3] = c, t[4] = l, t[5] = p) : p = t[5];
		var _ = p, f;
		t[6] !== c.id ? (f = function() {
			return !o("WAWebUserPrefsMeUser").isMeAccount(c.id);
		}, t[6] = c.id, t[7] = f) : f = t[7];
		var g;
		t[8] !== c ? (g = o("WAWebFrontendContactGetters").getIsMyContact(c), t[8] = c, t[9] = g) : g = t[9];
		var y;
		t[10] !== s ? (y = r("nullthrows")(s), t[10] = s, t[11] = y) : y = t[11];
		var C;
		return t[12] !== n || t[13] !== c || t[14] !== m || t[15] !== _ || t[16] !== f || t[17] !== g || t[18] !== y ? (C = u.jsx(h, {
			active: n,
			contact: c,
			contextEnabled: f,
			contextMenu: m,
			elevatedPushNamesEnabled: !0,
			listenForAdminChange: !0,
			loadPicture: g,
			onContext: _,
			participantCollection: y,
			showNotifyName: !0,
			showStatusRingAroundProfilePhoto: !0,
			theme: "chat-info",
			waitIdle: !0
		}), t[12] = n, t[13] = c, t[14] = m, t[15] = _, t[16] = f, t[17] = g, t[18] = y, t[19] = C) : C = t[19], C;
	}
	function b(e) {
		return e.length > o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS;
	}
	l.default = y;
}), 226);
