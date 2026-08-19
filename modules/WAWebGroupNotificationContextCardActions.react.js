__d("WAWebGroupNotificationContextCardActions.react", [
	"fbt",
	"WAWebButton.react",
	"WAWebCommunitySubgroupInviteLinkRestriction",
	"WAWebGroupGatingUtils",
	"WAWebGroupMemberLinkMode",
	"WAWebGroupMemberTagUpdateLogger",
	"WAWebGroupNotificationContextCardActionsUtils",
	"WAWebIcAddCircleIcon.react",
	"WAWebMemberLabelCreateUpdateModalLoadable.react",
	"WAWebMemberLabelGating",
	"WAWebMemberLabelHooks",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebPencilIcon.react",
	"WAWebWamEnumTsSurface",
	"WDSButtonGroup.react",
	"WDSIconIcInfo.react",
	"WDSIconIcLink.react",
	"WDSIconIcPersonAdd.react",
	"react",
	"react-compiler-runtime",
	"useWAWebIAmGroupMember"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback;
	function d(e) {
		var t = o("react-compiler-runtime").c(3), n;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = {
			x: 0,
			y: 0,
			width: 24,
			height: 24
		}, t[0] = n) : n = t[0];
		var r;
		return t[1] !== e ? (r = u.jsx(o("WAWebIcAddCircleIcon.react").IcAddCircleIcon, babelHelpers.extends({ viewBox: n }, e)), t[1] = e, t[2] = r) : r = t[2], r;
	}
	var m = { buttonGroupContainer: {
		minWidth: "x5w4yej",
		columnGap: "xfex06f",
		rowGap: "x3pnbk8",
		$$css: !0
	} };
	function p(e) {
		var t = o("react-compiler-runtime").c(41), n = e.canAddParticipants, a = e.chat, i = e.groupMetadata, l = e.isUnnamed, c = e.onAddGroupMembersClick, p = e.onAddNameClick, f = e.onGroupInfoClick, g = e.onInviteViaLinkClick, h;
		t[0] !== a ? (h = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebMemberLabelCreateUpdateModalLoadable.react").MemberLabelCreateUpdateModalLoadable, {
				chat: a,
				entryPoint: o("WAWebGroupMemberTagUpdateLogger").GroupMemberTagUpdateLogger.ENTRY_POINT.NEW_MEMBER_PROMPT,
				uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD
			}));
		}, t[0] = a, t[1] = h) : h = t[1];
		var y = h, C = r("useWAWebIAmGroupMember")(i), b = o("WAWebMemberLabelHooks").useHasSelfMemberLabelForChat(a), v;
		t[2] !== b || t[3] !== C ? (v = C && !b && o("WAWebMemberLabelGating").isMemberLabelSenderEnabled(), t[2] = b, t[3] = C, t[4] = v) : v = t[4];
		var S = v, R;
		t[5] !== i ? (R = o("WAWebCommunitySubgroupInviteLinkRestriction").isSubgroupInviteLinkRestrictedByParentCommunity(i), t[5] = i, t[6] = R) : R = t[6];
		var L = R, E = n && !i.support, k;
		t[7] !== i || t[8] !== l ? (k = i.canSetSubject() && l, t[7] = i, t[8] = l, t[9] = k) : k = t[9];
		var I = k, T;
		t[10] !== i.memberLinkMode ? (T = i.memberLinkMode === o("WAWebGroupMemberLinkMode").MemberLinkMode.ALL_MEMBER_LINK && o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsM2Enabled(), t[10] = i.memberLinkMode, t[11] = T) : T = t[11];
		var D = T, x = C && D && !L, $, P, N, M, w, A, F, O, B, W;
		if (t[12] !== I || t[13] !== y || t[14] !== E || t[15] !== c || t[16] !== p || t[17] !== f || t[18] !== g || t[19] !== S || t[20] !== x) {
			A = Symbol.for("react.early_return_sentinel");
			e: {
				var q = {
					name: {
						available: I,
						onPress: p,
						icon: o("WAWebPencilIcon.react").PencilIcon,
						testid: "group-notification-context-card-add-name-button",
						label: s._(
							/*BTDS*/
							""
						),
						shadowOnHover: !1
					},
					addMembers: {
						available: E,
						onPress: c,
						icon: r("WDSIconIcPersonAdd.react"),
						testid: "group-notification-context-card-add-members-button",
						label: s._(
							/*BTDS*/
							""
						)
					},
					memberTag: {
						available: S,
						onPress: y,
						icon: d,
						testid: "group-notification-context-card-add-member-tag-button",
						label: s._(
							/*BTDS*/
							""
						),
						useVerticalLayout: !0
					},
					groupInfo: {
						available: !0,
						onPress: f,
						icon: r("WDSIconIcInfo.react"),
						testid: "group-notification-context-card-group-info-button",
						label: s._(
							/*BTDS*/
							""
						)
					},
					inviteViaLink: {
						available: x,
						onPress: g != null ? g : r("WAWebNoop"),
						icon: r("WDSIconIcLink.react"),
						testid: "group-notification-context-card-invite-via-link-button",
						label: s._(
							/*BTDS*/
							""
						),
						useVerticalLayout: !0
					}
				}, U = o("WAWebGroupNotificationContextCardActionsUtils").getGroupNotificationButtonConfig(q), V = U.firstConfig, H = U.secondConfig, G = U.useVerticalLayout;
				if (H != null) {
					var z = V != null ? V : H, j = {
						variant: "outline",
						type: "default"
					}, K = G ? [z, H] : [H, z], Q = K[0], X = K[1];
					A = u.jsx("div", babelHelpers.extends({}, {
						0: { className: "x78zum5 x1q0g3np x1qjc9v5 xl56j7k x1a02dak xyamay9 x5w4yej xfex06f x3pnbk8" },
						1: { className: "x78zum5 xdt5ytf x6s0dn4 xl56j7k xyamay9 x5w4yej x3pnbk8 xh8yej3" }
					}[!!G << 0], { children: u.jsx(r("WDSButtonGroup.react"), {
						width: G ? "fill" : "hug",
						orientation: G ? "stacked" : "horizontal",
						primaryButtonProps: babelHelpers.extends({}, j, {
							onPress: Q.onPress,
							Icon: Q.icon,
							testid: Q.testid,
							label: Q.label
						}),
						secondaryButtonProps: babelHelpers.extends({}, j, {
							onPress: X.onPress,
							Icon: X.icon,
							testid: X.testid,
							label: X.label
						})
					}) }));
					break e;
				}
				var Y = _;
				$ = o("WAWebButton.react").ButtonGroup, F = G ? "vertical" : "horizontal", O = "stretch", B = "center", W = "wrap", P = 16, N = m.buttonGroupContainer, M = Y(V), w = Y(H);
			}
			t[12] = I, t[13] = y, t[14] = E, t[15] = c, t[16] = p, t[17] = f, t[18] = g, t[19] = S, t[20] = x, t[21] = $, t[22] = P, t[23] = N, t[24] = M, t[25] = w, t[26] = A, t[27] = F, t[28] = O, t[29] = B, t[30] = W;
		} else $ = t[21], P = t[22], N = t[23], M = t[24], w = t[25], A = t[26], F = t[27], O = t[28], B = t[29], W = t[30];
		if (A !== Symbol.for("react.early_return_sentinel")) return A;
		var J;
		return t[31] !== $ || t[32] !== P || t[33] !== N || t[34] !== M || t[35] !== w || t[36] !== F || t[37] !== O || t[38] !== B || t[39] !== W ? (J = u.jsxs($, {
			direction: F,
			align: O,
			justify: B,
			wrap: W,
			paddingTop: P,
			xstyle: N,
			children: [M, w]
		}), t[31] = $, t[32] = P, t[33] = N, t[34] = M, t[35] = w, t[36] = F, t[37] = O, t[38] = B, t[39] = W, t[40] = J) : J = t[40], J;
	}
	function _(e) {
		return e != null && u.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
			onClick: e.onPress,
			icon: e.icon,
			shadowOnHover: e.shadowOnHover,
			testid: e.testid,
			children: e.label
		});
	}
	l.GroupNotificationContextCardActions = p;
}), 226);
