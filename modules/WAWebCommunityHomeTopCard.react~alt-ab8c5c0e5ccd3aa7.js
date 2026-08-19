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
		var t = e.chat, n = e.isAdmin, a = babelHelpers.objectWithoutPropertiesLoose(e, c), i = o("useWAWebModelValues").useModelValues(t, [
			"groupMetadata",
			"contact",
			"id"
		]), l = r("useWAWebCommunitySubgroups")(i.groupMetadata), u = l.subgroupCount, d = o("WAWebChatCommunityUtils").isSuspendedCommunity(i) || o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(i), m = s._(
			/*BTDS*/
			""
		), _ = p.jsxs(p.Fragment, { children: [m, d ? null : p.jsxs(p.Fragment, { children: [r("WAWebL10N").isRTL() ? " - " : " · ", s._(
			/*BTDS*/
			"",
			[s._plural(u, "count")]
		)] })] });
		return p.jsx(r("WAWebDrawerSectionRefreshed.react"), {
			theme: "padding-large",
			children: p.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				children: [
					p.jsx(C, {
						chat: i,
						xstyle: f.marginBottom6,
						isCommunitySuspended: d
					}),
					p.jsx(b, { chat: i }),
					p.jsx("div", {
						className: "x1mzt3pk x1anpbxc",
						children: p.jsx(o("WAWebCopyPasteSelectable.react").SelectableSpan, {
							dir: "auto",
							selectable: !0,
							children: p.jsx(r("WDSText.react"), {
								type: "Body1",
								colorName: "contentDeemphasized",
								children: _
							})
						})
					}),
					p.jsx(y, babelHelpers.extends({
						chat: i,
						adminMode: n && d !== !0
					}, a))
				]
			})
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.adminMode, n = e.chat, a = e.onAddMembersClick, i = e.onInviteMembersClick, l = e.onManageCommunityGroupsClick, u = r("useWAWebEventTargetValue")(n == null ? void 0 : n.groupMetadata, ["change:allowNonAdminSubGroupCreation"], function() {
			return o("WAWebChatCommunityUtils").canAddGroupToCommunity(n);
		}), c = o("WAWebCommunityAnnouncementGroupUtils").getCommunityAnnouncementGroupMetadata(n == null ? void 0 : n.groupMetadata), d = r("useWAWebEventTargetValue")(c, ["change:memberAddMode"], function() {
			var e, t = n == null ? void 0 : n.groupMetadata;
			if (t == null || t.isSuspendedOrTerminated() === !0) return !1;
			if (((e = t.participants) == null ? void 0 : e.iAmAdmin()) === !0) return !0;
			var r = o("WAWebCommunityAnnouncementGroupUtils").getCommunityAnnouncementGroupMetadata(t);
			return (r == null ? void 0 : r.memberAddMode) === o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD;
		});
		return t ? p.jsx("div", {
			className: "xh8yej3 x1de0gy",
			children: p.jsxs(r("WDSActionTileGroup.react"), { children: [
				p.jsx(r("WDSActionTile.react"), {
					label: s._(
						/*BTDS*/
						""
					),
					Icon: r("WDSIconIcLink.react"),
					onPress: i,
					testid: "community_home_invite_action_tile"
				}),
				p.jsx(r("WDSActionTile.react"), {
					label: s._(
						/*BTDS*/
						""
					),
					Icon: r("WDSIconIcPersonAdd.react"),
					onPress: a,
					testid: "community_home_add_members_action_tile"
				}),
				p.jsx(r("WDSActionTile.react"), {
					label: s._(
						/*BTDS*/
						""
					),
					Icon: r("WDSIconIcGroupAdd.react"),
					onPress: l,
					testid: "community_home_add_groups_action_tile"
				})
			] })
		}) : p.jsx("div", {
			className: "xh8yej3 x1de0gy",
			children: p.jsxs(r("WDSActionTileGroup.react"), { children: [p.jsx(r("WDSActionTile.react"), {
				label: s._(
					/*BTDS*/
					""
				),
				Icon: r("WDSIconIcPersonAdd.react"),
				onPress: a,
				tooltip: d ? null : s._(
					/*BTDS*/
					""
				),
				disabled: !d,
				testid: "community_home_add_members_action_tile"
			}), p.jsx(r("WDSActionTile.react"), {
				label: s._(
					/*BTDS*/
					""
				),
				Icon: r("WDSIconIcGroupAdd.react"),
				onPress: l,
				disabled: !u,
				tooltip: u ? null : s._(
					/*BTDS*/
					""
				),
				testid: "community_home_add_groups_action_tile"
			})] })
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(t) {
		var n, a = t.chat, i = t.isCommunitySuspended, l = t.xstyle, s = o("useWAWebModelValues").useModelValues(a, [
			"isReadOnly",
			"groupMetadata",
			"contact"
		]), u = o("useWAWebModelValues").useModelValues(s.contact, ["id", "profilePicThumb"]);
		u.getProfilePicThumb();
		var c = o("useWAWebModelValues").useModelValues(u.profilePicThumb, ["imgFull"]), m = _(!1), f = m[0], h = m[1], y = _(!1), C = y[0], b = y[1], v = r("useWAWebUnmountSignal")(), S = function(n, a) {
			b(!0);
			var t;
			n != null && a != null ? t = o("WAWebProfilePicThumbAction").setProfilePic(c, n, a) : t = o("WAWebProfilePicThumbAction").deleteProfilePic(c), r("WAPromiseRaceAbort")(t, v).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch(o("WAFilteredCatch").filteredCatch(o("WAWebMiscErrors").ActionError, function(t) {
				o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["CommunityInfoDrawer: failed to set/delete community image"]))), h(!f);
			})).finally(function() {
				b(!1);
			});
		}, R = s.isReadOnly || !c.canDelete() && !c.canSet() || i || !((n = s.groupMetadata) != null && n.participants.iAmAdmin()), L = o("WAWebABProps").getABPropConfigValue("wds_web_profile_photo");
		return p.jsx("div", babelHelpers.extends({}, (d || (d = r("stylex"))).props(L && g.photoWrapper, l), { children: p.jsx(o("WAWebPhotoPickerLoadable.react").PhotoPickerLoadable, {
			type: o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY,
			id: u.id,
			attachToChat: !0,
			pending: C,
			startImage: c.imgFull,
			readOnly: R,
			onImageSet: S,
			dimmed: i,
			size: 128
		}, String(f)) }));
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e.chat, n = o("useWAWebModelValues").useModelValues(t.contact, ["name"]), a = o("useWAWebModelValues").useModelValues(r("nullthrows")(t.groupMetadata), ["creation", "restrict"]), i = r("useWAWebUnmountSignal")(), l = _(!1), c = l[0], d = l[1], m = r("useWAWebShowCommunitySubjectSyncIssue")(t), f = async function(a) {
			var e = a;
			e.trim() !== n.name && await r("WAPromiseRaceAbort")(o("WAWebSetSubjectGroupAction").setGroupSubject(t, e), i).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch(function(e) {
				o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["community_home:onSetSubject failed"])));
			});
		}, h = function() {
			o("WAWebModalManager").ModalManager.open(p.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				onOK: o("WAWebModalManager").closeModalManager,
				okText: r("WAWebFbtCommon")("OK"),
				children: s._(
					/*BTDS*/
					""
				)
			}));
		}, y = function() {
			o("WAWebModalManager").ModalManager.open(p.jsx(o("WAWebCommunitySubjectChangePopups.react").CommunitySubjectSyncingIssuePopup, {
				parentChat: t,
				onOK: function() {
					return d(!0);
				}
			}));
		};
		return p.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: g.subjectInputFlex,
			children: [p.jsx(r("WAWebGroupInfoSubjectInput.react"), {
				testid: "community-home-subject-input",
				subject: n.name,
				onSave: f,
				editable: m && !c ? !1 : a.canSetSubject(),
				editRestrictionInfo: a.restrict ? h : void 0
			}), m && !c ? p.jsx(r("WAWebUnstyledButton.react"), {
				onClick: y,
				xstyle: [g.icon, o("WDSMargins.stylex").wdsMargins.marginTop8],
				"aria-label": o("WAWebCommunitySubjectChangePopups.react").getCommunitySubjectSyncingIssueTitle(),
				children: p.jsx(o("WAWebAlertErrorIcon.react").AlertErrorIcon, { width: 20 })
			}) : null]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = h;
}), 226);
