__d("WAWebGroupInviteLinkDrawer.react", [
	"fbt",
	"VultureJSDeadComponent.react",
	"WAAbortError",
	"WAFilteredCatch",
	"WALogger",
	"WAPromiseDelays",
	"WAPromiseRaceAbort",
	"WAWebBackendErrors",
	"WAWebCopyLinkButton.react",
	"WAWebCopyPasteSelectable.react",
	"WAWebDetailImage.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerButton.react",
	"WAWebDrawerHeader.react",
	"WAWebEmojiText.react",
	"WAWebEmptyState.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebFocusTracer",
	"WAWebGroupInviteAction",
	"WAWebGroupInviteRevokeModal.react",
	"WAWebGroupInviteUtils.react",
	"WAWebGroupMemberLinkMode",
	"WAWebGroupQueryJob",
	"WAWebGroupType",
	"WAWebMiscErrors",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebPendingParticipantsIcon.react",
	"WAWebRevokeIcon.react",
	"WAWebSendGroupInviteFlowLoadable",
	"WAWebSendLinkButton.react",
	"WAWebText_DONOTUSE.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUnstyledButton.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"useWAWebFocusOnMount",
	"useWAWebListener",
	"useWAWebModelValues",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = ["ref"], d, m = d || (d = o("react")), p = d, _ = p.useEffect, f = p.useState, g = { paddingInline25: {
		paddingInlineStart: "xvahy20",
		paddingInlineEnd: "x1a4sjiy",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} }, h = {
		groupInfo: {
			backgroundColor: "x1280gxy",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			$$css: !0
		},
		groupInfoAvatar: {
			minWidth: "x900493",
			$$css: !0
		},
		groupInfoName: {
			fontSize: "x1jchvi3",
			lineHeight: "x1xet1wb",
			color: "x14ug900",
			$$css: !0
		},
		groupInfoLink: {
			maxWidth: "x193iq5w",
			$$css: !0
		},
		descText: {
			fontSize: "x1f6kntn",
			lineHeight: "x37zpob",
			$$css: !0
		},
		icon: {
			color: "xhslqc4",
			$$css: !0
		},
		iconContainer: {
			minWidth: "xnei2rj",
			$$css: !0
		},
		linkButton: {
			color: "x1v5yvga",
			$$css: !0
		}
	}, y = "group-invite-link-anchor", C = {
		LOADING: 0,
		REVOKING: 1,
		SUCCESS: 2
	};
	function b(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, c), i = a.chat, l = a.isCommunity, d = a.onBack, p = a.onGroupSettings, b = f(C.LOADING), v = b[0], S = b[1], R = r("useWAWebUnmountSignal")(), L = r("useWAWebFocusOnMount")();
		o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, ["close_modal"], function() {
			return r("WAWebFocusTracer").focus(L.current);
		});
		var E = o("useWAWebModelValues").useModelValues(a.groupMetadata, [
			"inviteCode",
			"groupInviteLink",
			"groupType",
			"membershipApprovalMode",
			"participants",
			"memberLinkMode"
		]);
		l && E.groupType !== o("WAWebGroupType").GroupType.COMMUNITY && o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[GroupInviteLinkDrawer] expected community, got: ", ""])), E.groupType).sendLogs("group-invite-link-drawer-invalid-group-type");
		var k = function(t) {
			switch (t) {
				case 401: return s._(
					/*BTDS*/
					""
				);
				case 403: return s._(
					/*BTDS*/
					""
				);
				case 404: return s._(
					/*BTDS*/
					""
				);
				case 416: return s._(
					/*BTDS*/
					""
				);
				case 436: return s._(
					/*BTDS*/
					""
				);
				default: return s._(
					/*BTDS*/
					""
				);
			}
		}, I = function(t) {
			var e = k(t);
			d(), t === 436 ? (o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({ id: i.id }), o("WAWebGroupInviteUtils.react").openGrowthLockedModal(!0)) : t === 416 && o("WAWebModalManager").ModalManager.open(m.jsx(r("VultureJSDeadComponent.react"), { name: "WAWebCommunityRestrictedGroupActionModal" })), o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, { msg: e }));
		};
		_(function() {
			if (!E.participants.iAmAdmin() && E.memberLinkMode !== o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK) {
				o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["GroupInviteLinkDrawer: expected admin"]))).sendLogs("group-invite-link-drawer-user-not-admin");
				var e = 401;
				I(e, i);
				return;
			}
			r("WAPromiseRaceAbort")(o("WAWebGroupInviteAction").queryGroupInviteCode(E), R).then(function() {
				S(C.SUCCESS);
			}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
				I(e.statusCode, i);
			})).catch(o("WAAbortError").catchAbort(r("WAWebNoop")));
		}, []);
		var T = function(t) {
			var e = k(t);
			d(), o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, { msg: e }));
		}, D = function() {
			S(C.REVOKING);
			var e = o("WAWebGroupInviteAction").revokeGroupInvite(E);
			o("WAPromiseDelays").delayMs(500).then(function() {
				return e;
			}).then(function() {
				o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) })), S(C.SUCCESS);
			}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
				T(e.statusCode);
			})).catch(o("WAFilteredCatch").filteredCatch(o("WAWebMiscErrors").Unmount, r("WAWebNoop")));
		}, x = function() {
			o("WAWebModalManager").ModalManager.open(m.jsx(r("WAWebGroupInviteRevokeModal.react"), {
				chat: i,
				onConfirm: D
			}), { transition: "modal-flow" });
		}, $ = function() {
			o("WAWebModalManager").ModalManager.open(m.jsx(o("WAWebSendGroupInviteFlowLoadable").SendGroupInviteFlowLoadable, { chat: i }), { transition: "modal-flow" });
		}, P = E.groupType === o("WAWebGroupType").GroupType.COMMUNITY ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), N;
		if (v === C.LOADING) N = m.jsx(o("WAWebEmptyState.react").LoadingWithText, { text: s._(
			/*BTDS*/
			""
		) });
		else if (v === C.REVOKING) N = m.jsx(o("WAWebEmptyState.react").LoadingWithText, { text: s._(
			/*BTDS*/
			"",
			[s._param("groupName", i.contact.name)]
		) });
		else {
			var M = E.groupInviteLink, w = null;
			document.queryCommandSupported("copy") && (w = m.jsx(r("WAWebCopyLinkButton.react"), {
				elementId: y,
				divider: !1
			}));
			var A = E.groupType === o("WAWebGroupType").GroupType.COMMUNITY || E.groupType === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP, F = m.jsx(o("WAWebDetailImage.react").DetailImage, {
				id: i.id,
				size: 48,
				quality: o("WAWebDetailImage.react").DetailImageQuality.High,
				shape: A ? o("WAWebDetailImage.react").DetailImageShape.Squircle : o("WAWebDetailImage.react").DetailImageShape.Circle
			}), O = m.jsx("span", {
				className: "x1vvkbs xeaf4i8",
				children: m.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
					id: y,
					href: M,
					selectable: !0,
					children: m.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
						xstyle: !1,
						size: "13",
						color: "link",
						children: M
					})
				})
			}), B = m.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: [
					h.groupInfo,
					o("WDSMargins.stylex").wdsMargins.marginTop16,
					o("WDSMargins.stylex").wdsMargins.marginHor16,
					o("WDSPaddings.stylex").wdsPaddings.paddingVer12,
					o("WDSPaddings.stylex").wdsPaddings.paddingHor8
				],
				align: "center",
				children: [m.jsx(r("WAWebFlexItem.react"), {
					xstyle: [h.groupInfoAvatar, o("WDSPaddings.stylex").wdsPaddings.paddingHor8],
					children: F
				}), m.jsx(r("WAWebFlexItem.react"), {
					xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingHor8,
					children: m.jsxs(o("WAWebFlex.react").FlexColumn, {
						justify: "start",
						children: [m.jsx(r("WAWebFlexItem.react"), { children: m.jsx(o("WAWebEmojiText.react").EmojiText, {
							text: i.contact.name,
							direction: "auto",
							xstyle: h.groupInfoName
						}) }), m.jsx(r("WAWebFlexItem.react"), {
							xstyle: h.groupInfoLink,
							children: O
						})]
					})
				})]
			}), W, q;
			if (A) W = m.jsx("div", {
				className: "xevwqry x7vsco6 xdqhqc9 xoud76o x1f6kntn x37zpob",
				children: s._(
					/*BTDS*/
					""
				)
			});
			else {
				var U = E.participants.iAmAdmin(), V = (function(e) {
					if (Array.isArray(e) && e.length === 2 && e[0] === !0 && e[1] === !0) return s._(
						/*BTDS*/
						"",
						[s._implicitParam("=m2", m.jsx(r("WAWebUnstyledButton.react"), {
							onClick: p,
							xstyle: h.linkButton,
							children: s._(
								/*BTDS*/
								""
							)
						}))]
					);
					if (Array.isArray(e) && e.length === 2 && e[0] === !0 && e[1] === !1) return s._(
						/*BTDS*/
						""
					);
					if (Array.isArray(e) && e.length === 2 && e[0] === !1 && e[1] === !0) return s._(
						/*BTDS*/
						"",
						[s._implicitParam("=m2", m.jsx(r("WAWebUnstyledButton.react"), {
							onClick: p,
							xstyle: h.linkButton,
							children: s._(
								/*BTDS*/
								""
							)
						}))]
					);
					if (Array.isArray(e) && e.length === 2 && e[0] === !1 && e[1] === !1) return s._(
						/*BTDS*/
						""
					);
					throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
				})([E.membershipApprovalMode, U]);
				W = m.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingVer16,
					children: [m.jsx(r("WAWebFlexItem.react"), {
						xstyle: [h.iconContainer, g.paddingInline25],
						children: m.jsx(o("WAWebPendingParticipantsIcon.react").PendingParticipantsIcon, { xstyle: h.icon })
					}), m.jsx(r("WAWebFlexItem.react"), {
						xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingEnd24,
						children: m.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
							color: "dark",
							xstyle: h.descText,
							children: V
						})
					})]
				}), q = m.jsx(o("WAWebFlex.react").FlexRow, {
					xstyle: [o("WDSMargins.stylex").wdsMargins.marginVer4, o("WDSMargins.stylex").wdsMargins.marginHor24],
					children: m.jsx("div", { className: "xh8yej3 xjm9jq1 x3x0x6p" })
				});
			}
			N = m.jsxs(r("WAWebDrawerBody.react"), { children: [
				B,
				W,
				q,
				m.jsx(r("WAWebSendLinkButton.react"), {
					onClick: $,
					divider: !1
				}),
				w,
				E.participants.iAmAdmin() && m.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
					testid: "li-revoke-link",
					icon: m.jsx(o("WAWebRevokeIcon.react").RevokeIcon, { xstyle: h.icon }),
					onClick: x,
					divider: !1,
					children: s._(
						/*BTDS*/
						""
					)
				})
			] });
		}
		return m.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			theme: "invite",
			testid: "group-invite-link-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "group-invite-link"
			},
			children: [m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: P,
				onBack: a.onBack,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), m.jsx("div", {
				ref: L,
				tabIndex: -1,
				children: N
			})]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = b;
}), 226);
