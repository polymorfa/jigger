__d("WAWebViewCommunityMembersModal.react", [
	"fbt",
	"invariant",
	"$InternalEnum",
	"WALogger",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebBoolFunc",
	"WAWebChatCollection",
	"WAWebChatEntryPoint",
	"WAWebChatRefreshedIcon.react",
	"WAWebCmd",
	"WAWebCommunityAnnouncementGroupUtils",
	"WAWebCommunityMembersFlow.react",
	"WAWebCommunityTransferOwnershipFlowLoadable.react",
	"WAWebContactsModal.react",
	"WAWebDrawerButton.react",
	"WAWebDrawerManager",
	"WAWebDropdownItem.react",
	"WAWebEmojiText.react",
	"WAWebFindChatAction",
	"WAWebFrontendContactGetters",
	"WAWebInfoFlowLoadable",
	"WAWebKeyboardTabUtils",
	"WAWebLid1X1MigrationGating",
	"WAWebLidMigrationUtils",
	"WAWebModalManager",
	"WAWebNumbersIcon.react",
	"WAWebOpenAddParticipantModalFlow",
	"WAWebOpenChatWithContactAction",
	"WAWebOpenCommunityParticipantDemoteConfirmation",
	"WAWebOpenCommunityParticipantPromoteConfirmation",
	"WAWebPersonArrowIcon.react",
	"WAWebPersonShieldCheckIcon.react",
	"WAWebPersonShieldRemoveIcon.react",
	"WAWebRemoveFromCommunityConfirmationPopup.react",
	"WAWebRoundShape.react",
	"WAWebStateUtils",
	"WAWebText_DONOTUSE.react",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebUserPrefsMeUser",
	"WAWebVerificationDrawerLoadable",
	"WAWebWid",
	"WDSIconIcCancel.react",
	"WDSIconIcLink.react",
	"WDSIconIcPerson.react",
	"WDSIconIcPersonAddFilled.react",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"useWAWebAddParticipantsSelectedContacts",
	"useWAWebCommunityMembers",
	"useWAWebSplitCommunityParticipants"
], (function(t, n, r, o, a, i, l, s, u) {
	var e, c = ["ref"], d, m = d || (d = o("react")), p = d, _ = p.useMemo, f = p.useState, g = {
		disclaimer: {
			paddingTop: "x1p57kb1",
			paddingInlineEnd: "xvtqlqk",
			paddingInlineStart: "xdx6fka",
			paddingBottom: "xvg22vi",
			textAlign: "x2b8uid",
			$$css: !0
		},
		dropdownText: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			$$css: !0
		}
	}, h = n("$InternalEnum").Mirrored(["Members", "MembersNotInAnnouncements"]);
	function y(e) {
		var t, n = e.announcementGroupParticipants, a = e.contact, i = e.origin, l = e.parentChat, u = e.parentGroupParticipants, c = (t = u == null ? void 0 : u.get(a.id)) != null ? t : n == null ? void 0 : n.get(a.id), d = [], p = function() {
			o("WAWebOpenChatWithContactAction").openChatWithContact(a.id, i, o("WAWebChatEntryPoint").ChatEntryPoint.CommunityMember, { onOpened: o("WAWebModalManager").closeModalManager });
		}, _ = function() {
			o("WAWebFindChatAction").findOrCreateLatestChat(a.id, i).then(function(e) {
				var t = e.chat;
				o("WAWebModalManager").ModalManager.close(), o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
					descriptorType: "info_flow",
					chat: o("WAWebStateUtils").unproxy(t)
				} : m.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, { chat: o("WAWebStateUtils").unproxy(t) }, "info-" + t.id.toString()), {
					transition: "slide-left",
					focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
				});
			});
		};
		if (!o("WAWebUserPrefsMeUser").isMeAccount(a.id)) {
			var f = s._(
				/*BTDS*/
				"",
				[s._param("name", o("WAWebFrontendContactGetters").getFormattedShortName(a))]
			);
			if (d.push(m.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				testid: "message-community-participant",
				action: p,
				ariaLabel: f,
				addSpacing: !0,
				icon: m.jsx(o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon, {}),
				children: m.jsx(o("WAWebEmojiText.react").EmojiText, {
					text: f,
					xstyle: g.dropdownText
				})
			}, "message-community-participant")), o("WAWebFrontendContactGetters").getIsMyContact(a)) {
				var h = s._(
					/*BTDS*/
					"",
					[s._param("name", o("WAWebFrontendContactGetters").getFormattedShortName(a))]
				);
				d.push(m.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "view-community-participant",
					action: _,
					ariaLabel: h,
					addSpacing: !0,
					icon: m.jsx(r("WDSIconIcPerson.react"), {}),
					children: m.jsx(o("WAWebEmojiText.react").EmojiText, {
						text: h,
						xstyle: g.dropdownText
					})
				}, "view-community-participant"));
			}
			var y = function() {
				var e = o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated(), t = !0, n = e ? o("WAWebLidMigrationUtils").toUserLid(a.id) : void 0;
				o("WAWebModalManager").ModalManager.close(), o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
					descriptorType: "verification",
					lid: n,
					contact: a,
					isFirstLevel: t
				} : m.jsx(r("WAWebVerificationDrawerLoadable").VerificationDrawerLoadable, {
					lid: n,
					contact: a,
					isFirstLevel: t
				}), { transition: "slide-left" });
			}, C = s._(
				/*BTDS*/
				""
			);
			d.push(m.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				testid: "community-verify-identity",
				ariaLabel: C,
				action: y,
				icon: m.jsx(o("WAWebNumbersIcon.react").NumbersIcon, {}),
				children: C
			}, "verify-identity"));
		}
		if (c) {
			if (u != null && u.canTransferOwnership(c)) {
				var b = s._(
					/*BTDS*/
					""
				);
				d.push(m.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "transfer-ownership-item",
					ariaLabel: b,
					action: function() {
						o("WAWebModalManager").ModalManager.close(), o("WAWebDrawerManager").DrawerManager.openDrawerRight(m.jsx(o("WAWebCommunityTransferOwnershipFlowLoadable.react").CommunityTransferOwnershipFlowLoadable, {
							parentGroupChat: l,
							onEnd: function() {
								return o("WAWebCmd").Cmd.openCommunityTabbedInfo(l.id, void 0, void 0, !0);
							},
							contactSelected: c.contact
						}), {
							transition: "flow-transition-drawer-push",
							focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
						});
					},
					icon: m.jsx(o("WAWebPersonArrowIcon.react").PersonArrowIcon, {}),
					children: b
				}, "transfer-ownership-item"));
			}
			if (u != null && u.canPromote(c)) {
				var v = s._(
					/*BTDS*/
					""
				);
				d.push(m.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "promote-community-admin",
					ariaLabel: v,
					action: function() {
						return o("WAWebOpenCommunityParticipantPromoteConfirmation").openCommunityParticipantPromoteConfirmation({
							announcementGroupParticipants: n,
							parentChat: l,
							participant: c
						});
					},
					icon: m.jsx(o("WAWebPersonShieldCheckIcon.react").PersonShieldCheckIcon, {}),
					children: v
				}, "promote-community-admin"));
			} else if (u != null && u.canDemote(c)) {
				var S = s._(
					/*BTDS*/
					""
				);
				d.push(m.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "demote-community-admin",
					ariaLabel: S,
					action: function() {
						return o("WAWebOpenCommunityParticipantDemoteConfirmation").openCommunityParticipantDemoteConfirmation(c, l);
					},
					icon: m.jsx(o("WAWebPersonShieldRemoveIcon.react").PersonShieldRemoveIcon, {}),
					children: S
				}, "demote-community-admin"));
			}
			if (u != null && u.canRemove(c) && !c.isSuperAdmin) {
				var R = function() {
					o("WAWebModalManager").ModalManager.close(), o("WAWebModalManager").ModalManager.open(m.jsx(r("WAWebRemoveFromCommunityConfirmationPopup.react"), {
						contact: a,
						parentGroupChat: l
					}));
				}, L = s._(
					/*BTDS*/
					""
				);
				d.push(m.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "remove-from-community-identity",
					ariaLabel: L,
					action: R,
					icon: m.jsx(r("WDSIconIcCancel.react"), {}),
					children: L
				}, "remove-from-community"));
			}
		}
		return d;
	}
	function C(e) {
		var t = o("react-compiler-runtime").c(14), n = e.onInviteMembersClick, a = e.parentChat, i;
		t[0] !== a.groupMetadata ? (i = o("WAWebCommunityAnnouncementGroupUtils").getCommunityAnnouncementGroup(a.groupMetadata), t[0] = a.groupMetadata, t[1] = i) : i = t[1];
		var l = i, s = o("useWAWebCommunityMembers").useCommunityMembers(a, l), u = s.announcementGroupParticipants, c = s.loading, d = s.members, p = s.parentGroupParticipants, _;
		t[2] !== p ? (_ = p == null ? void 0 : p.iAmAdmin(), t[2] = p, t[3] = _) : _ = t[3];
		var f = !!_, g = r("useWAWebSplitCommunityParticipants")(f, u, d), h = g.members, y = g.membersNotInCAG, C;
		t[4] !== u || t[5] !== c || t[6] !== n || t[7] !== a || t[8] !== p ? (C = {
			parentChat: a,
			announcementGroupParticipants: u,
			parentGroupParticipants: p,
			loading: c,
			onInviteMembersClick: n
		}, t[4] = u, t[5] = c, t[6] = n, t[7] = a, t[8] = p, t[9] = C) : C = t[9];
		var b = C, v;
		return t[10] !== h || t[11] !== y || t[12] !== b ? (v = m.jsx(r("WAWebCommunityMembersFlow.react"), babelHelpers.extends({
			members: h,
			membersNotInCAG: y
		}, b)), t[10] = h, t[11] = y, t[12] = b, t[13] = v) : v = t[13], v;
	}
	function b(t) {
		var n = o("react-compiler-runtime").c(68), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, c), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, d = l.parentChat, p = l.onInviteMembersClick, _ = l.onMembersNotInAnnouncementsClick, b = l.members, v = l.announcementGroupParticipants, S = l.parentGroupParticipants, R = l.theme, L = l.loading, E = l.onBack, k = R === void 0 ? h.Members : R, I = r("useWAWebAddParticipantsSelectedContacts")(), T = I.handleClearSelectedContacts, D = I.selectedContactsMap, x = I.updateSelectedContactsState, $ = f(), P = $[0], N = $[1], M;
		n[3] !== S ? (M = S == null ? void 0 : S.iAmAdmin(), n[3] = S, n[4] = M) : M = n[4];
		var w = !!M, A;
		n[5] !== v || n[6] !== d || n[7] !== S ? (A = function(t, n) {
			var e = y({
				parentChat: d,
				parentGroupParticipants: S,
				announcementGroupParticipants: v,
				contact: n,
				origin: "communityParticipantSearch"
			}), r = t.type === "click" ? void 0 : t.target;
			N({
				contactId: n.id,
				menu: e,
				anchor: r,
				event: t.anchor ? void 0 : t
			});
		}, n[5] = v, n[6] = d, n[7] = S, n[8] = A) : A = n[8];
		var F = A, O;
		n[9] !== T || n[10] !== p || n[11] !== d || n[12] !== D || n[13] !== x ? (O = function() {
			var t, n = (t = o("WAWebCommunityAnnouncementGroupUtils").getCommunityAnnouncementGroup(d.groupMetadata)) == null ? void 0 : t.id;
			if (n == null) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Community add participants clicked but no CAG found"])));
				return;
			}
			var a = o("WAWebStateUtils").unproxy(o("WAWebChatCollection").ChatCollection.assertGet(n)), i = function() {
				o("WAWebModalManager").ModalManager.open(m.jsx(C, {
					parentChat: d,
					onInviteMembersClick: p
				}));
			};
			o("WAWebOpenAddParticipantModalFlow").openAddParticipantModalFlow({
				groupMetadata: r("nullthrows")(a.groupMetadata),
				chat: a,
				onBack: i,
				selectedContactsMap: D,
				updateSelectedContactsState: x,
				reopenAddGroupFlowCallback: O,
				handleClearSelectedContacts: T
			});
		}, n[9] = T, n[10] = p, n[11] = d, n[12] = D, n[13] = x, n[14] = O) : O = n[14];
		var B;
		n[15] !== P ? (B = function(t) {
			return !!P && r("WAWebWid").equals(t, P.contactId);
		}, n[15] = P, n[16] = B) : B = n[16];
		var W = B, q;
		n[17] === Symbol.for("react.memo_cache_sentinel") ? (q = function() {
			N(null);
		}, n[17] = q) : q = n[17];
		var U = q, V;
		if (P) {
			var H;
			n[18] !== P ? (H = m.jsx(o("WAWebUimUie.react").UIE, {
				displayName: "ChatContextMenu",
				escapable: !0,
				popable: !0,
				dismissOnWindowResize: !0,
				requestDismiss: U,
				children: m.jsx(r("WAWebUimUieMenu.react"), { contextMenu: P })
			}), n[18] = P, n[19] = H) : H = n[19], V = H;
		}
		var G;
		n[20] !== S ? (G = S == null ? void 0 : S.iAmAdmin(), n[20] = S, n[21] = G) : G = n[21];
		var z = !!G, j, K, Q, X, Y;
		e: switch (k) {
			case h.Members: {
				if (!z) {
					var J;
					n[22] === Symbol.for("react.memo_cache_sentinel") ? (J = s._(
						/*BTDS*/
						""
					), n[22] = J) : J = n[22], j = J;
				}
				var Z;
				n[23] === Symbol.for("react.memo_cache_sentinel") ? (Z = s._(
					/*BTDS*/
					""
				), n[23] = Z) : Z = n[23];
				var ee = Z, te;
				n[24] !== z || n[25] !== b ? (te = z && b ? s._(
					/*BTDS*/
					"",
					[s._param("number_of_participants", b.length)]
				) : ee, n[24] = z, n[25] = b, n[26] = te) : te = n[26];
				var ne = te;
				K = L ? ee : ne;
				var re;
				n[27] === Symbol.for("react.memo_cache_sentinel") ? (re = s._(
					/*BTDS*/
					""
				), n[27] = re) : re = n[27];
				var oe = re, ae;
				n[28] !== w || n[29] !== p ? (ae = w ? m.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
					testid: "invite-to-community-row",
					className: "x1qafhyn x178xt8z x13fuv20 xx42vgk",
					icon: m.jsx(r("WAWebRoundShape.react"), {
						theme: "group-modal",
						children: m.jsx(r("WDSIconIcLink.react"), { testid: "ic-link" })
					}),
					ariaLabel: oe,
					onClick: function() {
						o("WAWebModalManager").ModalManager.close(), p();
					},
					children: m.jsx(o("WAWebText_DONOTUSE.react").Text, {
						as: "span",
						color: "dark",
						size: "16",
						children: oe
					})
				}) : null, n[28] = w, n[29] = p, n[30] = ae) : ae = n[30], Q = ae;
				var ie;
				n[31] === Symbol.for("react.memo_cache_sentinel") ? (ie = s._(
					/*BTDS*/
					""
				), n[31] = ie) : ie = n[31];
				var le = ie, se;
				n[32] !== O || n[33] !== w ? (se = w ? m.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
					testid: "add-to-community-row",
					className: "x1qafhyn x178xt8z x13fuv20 xx42vgk",
					icon: m.jsx(r("WAWebRoundShape.react"), {
						theme: "group-modal",
						children: m.jsx(r("WDSIconIcPersonAddFilled.react"), { directional: !0 })
					}),
					ariaLabel: le,
					onClick: O,
					children: m.jsx(o("WAWebText_DONOTUSE.react").Text, {
						as: "span",
						color: "dark",
						size: "16",
						children: le
					})
				}) : null, n[32] = O, n[33] = w, n[34] = se) : se = n[34], X = se;
				var ue;
				n[35] === Symbol.for("react.memo_cache_sentinel") ? (ue = s._(
					/*BTDS*/
					""
				), n[35] = ue) : ue = n[35], Y = ue;
				break e;
			}
			case h.MembersNotInAnnouncements: {
				var ce;
				n[36] === Symbol.for("react.memo_cache_sentinel") ? (ce = s._(
					/*BTDS*/
					""
				), n[36] = ce) : ce = n[36], j = ce;
				var de;
				n[37] === Symbol.for("react.memo_cache_sentinel") ? (de = s._(
					/*BTDS*/
					""
				), n[37] = de) : de = n[37], K = de;
				var me;
				n[38] === Symbol.for("react.memo_cache_sentinel") ? (me = s._(
					/*BTDS*/
					""
				), n[38] = me) : me = n[38], Y = me;
			}
		}
		var pe;
		if (_ && w) {
			var _e;
			n[39] === Symbol.for("react.memo_cache_sentinel") ? (_e = s._(
				/*BTDS*/
				""
			), n[39] = _e) : _e = n[39];
			var fe;
			n[40] !== _ ? (fe = {
				text: _e,
				onClick: _
			}, n[40] = _, n[41] = fe) : fe = n[41], pe = fe;
		}
		var ge;
		n[42] !== j ? (ge = m.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
			xstyle: g.disclaimer,
			size: "14",
			color: "secondary",
			children: j
		}), n[42] = j, n[43] = ge) : ge = n[43];
		var he = ge;
		K != null || u(0, 72429);
		var ye;
		n[44] !== b ? (ye = b != null ? b : [], n[44] = b, n[45] = ye) : ye = n[45];
		var Ce = K, be = E ? void 0 : o("WAWebModalManager").closeModalManager, ve;
		n[46] !== S ? (ve = r("nullthrows")(S), n[46] = S, n[47] = ve) : ve = n[47];
		var Se;
		n[48] !== X || n[49] !== Q ? (Se = [Q, X], n[48] = X, n[49] = Q, n[50] = Se) : Se = n[50];
		var Re;
		n[51] !== he || n[52] !== W || n[53] !== F || n[54] !== L || n[55] !== pe || n[56] !== K || n[57] !== E || n[58] !== Y || n[59] !== be || n[60] !== ve || n[61] !== Se || n[62] !== ye ? (Re = m.jsx(r("WAWebContactsModal.react"), {
			contacts: ye,
			title: Ce,
			onCancel: be,
			onBack: E,
			participantCollection: ve,
			listenForAdminChange: !0,
			isParentGroup: !0,
			showNotifyName: !0,
			elevatedPushNamesEnabled: !0,
			onContext: F,
			contextMenu: W,
			contextEnabled: o("WAWebBoolFunc").returnFalse,
			openContextOnClick: !0,
			firstRows: Se,
			lastRow: he,
			button: pe,
			searchPlaceholder: Y,
			spinnerInHeader: L,
			loadOnlyContactPictures: !0
		}), n[51] = he, n[52] = W, n[53] = F, n[54] = L, n[55] = pe, n[56] = K, n[57] = E, n[58] = Y, n[59] = be, n[60] = ve, n[61] = Se, n[62] = ye, n[63] = Re) : Re = n[63];
		var Le;
		return n[64] !== i || n[65] !== Re || n[66] !== V ? (Le = m.jsxs("div", {
			ref: i,
			children: [Re, V]
		}), n[64] = i, n[65] = Re, n[66] = V, n[67] = Le) : Le = n[67], Le;
	}
	l.CommunityMembersSearchTheme = h, l.getMemberContextMenuItems = y, l.ViewCommunityMembersModal = C, l.CommunityMembersSearch = b;
}), 226);
