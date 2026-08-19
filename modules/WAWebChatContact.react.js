__d("WAWebChatContact.react", [
	"fbt",
	"$InternalEnum",
	"WAWebBoolFunc",
	"WAWebChatCell.react",
	"WAWebChatCollection",
	"WAWebChatGetters",
	"WAWebChatModel",
	"WAWebChatParticipantUtils.react",
	"WAWebChatStatus",
	"WAWebChatTextStatusWrapper",
	"WAWebClickable.react",
	"WAWebCommonNewsletterStrings",
	"WAWebContactGetters",
	"WAWebContactImage.react",
	"WAWebContactModel",
	"WAWebDomScroll",
	"WAWebEmojiText.react",
	"WAWebFocusTracer",
	"WAWebFrontendContactGetters",
	"WAWebGroupType",
	"WAWebKeyboardHotKeys.react",
	"WAWebL10N",
	"WAWebLidMigrationUtils",
	"WAWebListsLabelGatingUtils",
	"WAWebMemberLabelComponents.react",
	"WAWebMemberLabelsFrontendUtils",
	"WAWebName.react",
	"WAWebReachoutTimelockUtils",
	"WAWebStateUtils",
	"WAWebTag.react",
	"WAWebTeeLockBadge.react",
	"WAWebText.react",
	"WAWebTextStatusGatingUtils",
	"WAWebUnstyledButton.react",
	"WAWebWid",
	"WAWebXAltIcon.react",
	"WDSFocusStateStyles",
	"WDSIconIcClose.react",
	"WDSText.react",
	"WDSTooltip.react",
	"nullthrows",
	"react",
	"useMergeRefs",
	"useWAWebContactValues",
	"useWAWebForceUpdate",
	"useWAWebListener",
	"useWAWebModelValues",
	"useWAWebSearchQuery"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref", "truncateName"], u, c = u || (u = o("react")), d = u, m = d.useRef, p = d.useState, _ = {
		accountRestrictedText: {
			fontStyle: "x1k4tb9n",
			$$css: !0
		},
		chatControls: {
			flex: "x1okw0bk",
			color: "xhslqc4",
			":hover_backgroundColor": "x1ubxc9n",
			":hover_boxShadow": "xqhg8r4",
			$$css: !0
		},
		chatControlsSmall: {
			paddingTop: "x4p5aij",
			paddingInlineEnd: "x1ccui7m",
			paddingBottom: "x1j85h84",
			paddingInlineStart: "x18pi947",
			marginTop: "x1gslohp",
			marginInlineEnd: "x2fvf9",
			marginBottom: "x12nagc",
			marginInlineStart: "xdzw4kq",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			$$css: !0
		}
	};
	function f(e) {
		var t, n = e.contact, a = e.groupMetadata, i = e.hideStatus, l = e.secondaryProp;
		if (l != null) return !0;
		var s = o("WAWebReachoutTimelockUtils").isUserReachoutTimelockedAndVisible() && !n.canSendMsgWhileTimelocked;
		if (s) return !0;
		var u = (a == null ? void 0 : a.hasCapi) === !0 && n.id.toString() === (a == null || (t = a.owner) == null ? void 0 : t.toString());
		return u ? !0 : i ? !1 : !r("WAWebWid").isGroup(n.id) && o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() ? o("WAWebChatTextStatusWrapper").willTextStatusDisplayContent(n.id) : o("WAWebChatStatus").willStatusDisplayContent(n.id);
	}
	var g = n("$InternalEnum").Mirrored([
		"SMALL",
		"DEFAULT",
		"REACTION_TRAY"
	]);
	function h(t) {
		"use no forget";
		var n, a, i, l, u = t.ref, d = t.truncateName, h = babelHelpers.objectWithoutPropertiesLoose(t, e), y = o("useWAWebContactValues").useContactValues(h.contact.id, [
			(l = o("WAWebContactGetters")).getId,
			o("WAWebFrontendContactGetters").getPendingAction,
			l.getNotifyName,
			l.getName,
			l.getShowBusinessCheckmarkAsPrimary,
			l.getShowBusinessCheckmarkAsSecondary,
			l.getIsGroup,
			o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone,
			l.getVerifiedName,
			l.getVerifiedLevel
		]), C = y[0], b = y[1], v = y[2], S = y[3], R = y[4], L = y[5], E = y[6], k = y[7], I = y[8], T = y[9], D = h.admin, x = D === void 0 ? !1 : D, $ = h.chatOrigin, P = h.checked, N = h.contact, M = h.contextEnabled, w = h.contextMenu, A = h.detail, F = h.elevatedPushNamesEnabled, O = F === void 0 ? !1 : F, B = h.ephemeralIcon, W = h.hideStatus, q = W === void 0 ? !1 : W, U = h.hideYouSuffix, V = U === void 0 ? !1 : U, H = h.idle, G = h.isGroupCreationFlow, z = h.isPendingParticipant, j = z === void 0 ? !1 : z, K = h.isSearchResult, Q = K === void 0 ? !1 : K, X = h.listenForAdminChange, Y = X === void 0 ? !1 : X, J = h.loadPicture, Z = J === void 0 ? !0 : J, ee = h.nameOverride, te = h.newsletterMembershipType, ne = h.onDelete, re = h.participantCollection, oe = h.role, ae = h.searchMatch, ie = h.searchQuery, le = h.secondary, se = h.secondaryAvatar, ue = h.showInactiveFlag, ce = ue === void 0 ? !1 : ue, de = h.showMessageYourselfName, me = de === void 0 ? !1 : de, pe = h.showNotifyName, _e = h.tabIndex, fe = h.useShortName, ge = h.waitIdle, he = m(null), ye = m(null), Ce = p(!1), be = Ce[0], ve = Ce[1], Se = r("useMergeRefs")(u, ye), Re = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), Le = p(!1), Ee = Le[0], ke = Le[1], Ie = p(o("WAWebReachoutTimelockUtils").isUserReachoutTimelockedAndVisible() && !N.canSendMsgWhileTimelocked), Te = Ie[0], De = Ie[1], xe = o("useWAWebSearchQuery").useSearchText(ie), $e = ae == null || ae.results.length === 0 ? xe : ae.results.map(function(e) {
			return ae.match.substring(e.startIndex, e.startIndex + e.length);
		}).join(" "), Pe = !1;
		if (((n = h.active) == null ? void 0 : n.value) != null) {
			var Ne = h.active.value;
			Ne instanceof r("WAWebContactModel") ? Pe = Ne.id.equals(N.id) : Ne instanceof o("WAWebChatModel").Chat && o("WAWebChatGetters").getIsUser(Ne) && (Pe = Ne.contact.id.equals(N.id));
		}
		Ee !== Pe && ke(Pe);
		var Me = function(t, n) {
			if (t === "focus") {
				var e = ye.current;
				e && (r("WAWebFocusTracer").focus(e), n && o("WAWebDomScroll").scrollIntoViewIfNeeded(e));
			}
			ke(!!t);
		}, we = C.toString();
		o("useWAWebListener").useListener(h.active, we, Me), o("useWAWebListener").useListener(N, "change:canSendMsgWhileTimelocked", function() {
			De(o("WAWebReachoutTimelockUtils").isUserReachoutTimelockedAndVisible() && !N.canSendMsgWhileTimelocked);
		}), o("useWAWebListener").useListener(Y && re ? re : null, ["change:isAdmin", "change:isSuperAdmin"], function(e) {
			r("WAWebWid").equals.apply(r("WAWebWid"), o("WAWebLidMigrationUtils").toCommonAddressingMode(e.id, C)) && Re();
		});
		var Ae = Te ? null : h.onClick, Fe = h.theme;
		Te && (Fe = h.theme === "chat-checkbox-disabled" || h.theme === "chat-checkbox" ? "chat-checkbox-disabled" : "disabled");
		var Oe = function(t) {
			t.stopPropagation(), ne && ne(t, o("WAWebStateUtils").unproxy(h.contact));
		}, Be = function(t) {
			Ae && Ae(t, o("WAWebStateUtils").unproxy(N), Q, $);
		}, We = function(t) {
			t.button === 0 && Be(t);
		}, qe = function(t) {
			t.preventDefault(), t.stopPropagation(), Be(t);
		}, Ue = function(t) {
			h.onContext == null || h.onContext(t, N);
		}, Ve = function(t) {
			ve(!0), h.allowFocusEventPropagation !== !0 && t.stopPropagation(), t.preventDefault();
		}, He = h.type === g.SMALL, Ge, ze, je;
		(S == null || S === "") && (I == null || I === "" || T === 0) && pe === !0 && v != null && v !== "" && (je = O ? c.jsx("span", {
			className: "x1rg5ohu x158ke7r xdod15v",
			children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
				direction: "auto",
				text: k
			})
		}) : c.jsx("span", {
			className: "x1rg5ohu x158ke7r xdod15v xxayilr",
			children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
				direction: "auto",
				text: v
			})
		}));
		var Ke = !!(x || Y && C.isUser() && re != null && re.userIsAdmin(C)), Qe = c.jsx(o("WAWebTag.react").Tag, {
			testid: "community-admin-marker",
			children: s._(
				/*BTDS*/
				""
			)
		}), Xe = o("useWAWebModelValues").useOptionalModelValues(re == null ? void 0 : re.getGroupMetadata(), [
			"groupType",
			"owner",
			"hasCapi"
		]), Ye = (a = Xe == null ? void 0 : Xe.groupType) != null ? a : o("WAWebGroupType").GroupType.DEFAULT;
		switch (Ye) {
			case o("WAWebGroupType").GroupType.COMMUNITY: {
				var Je = !!(Y && C.isUser() && re != null && re.userIsSuperAdmin(C));
				Je ? ze = c.jsx(o("WAWebTag.react").Tag, {
					testid: "community-creator-marker",
					children: s._(
						/*BTDS*/
						""
					)
				}) : Ke && (ze = Qe);
				break;
			}
			case o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP: {
				Ke && (ze = Qe);
				break;
			}
			default: Ke && (ze = c.jsx(o("WAWebTag.react").Tag, {
				testid: "group-admin-marker",
				children: s._(
					/*BTDS*/
					""
				)
			}));
		}
		if (j && (ze = c.jsx(o("WAWebTag.react").Tag, {
			testid: "invited-marker",
			children: s._(
				/*BTDS*/
				""
			)
		})), ce && !N.isActive() && (ze = c.jsx(o("WAWebTag.react").Tag, {
			theme: o("WAWebTag.react").TagTheme.Secondary,
			children: s._(
				/*BTDS*/
				""
			)
		})), te != null) {
			var Ze = o("WAWebCommonNewsletterStrings").getNewsletterMembershipRoleTag(te);
			Ze != null && (ze = c.jsx(o("WAWebTag.react").Tag, {
				testid: o("WAWebCommonNewsletterStrings").getNewsletterRoleMarker(te),
				theme: o("WAWebTag.react").TagTheme.Primary,
				children: Ze
			}));
		}
		if (A != null) Ge = A;
		else if (ne) {
			var et = h.type === g.SMALL ? c.jsx(r("WDSIconIcClose.react"), { "aria-hidden": !0 }) : c.jsx(o("WAWebXAltIcon.react").XAltIcon, { "aria-hidden": !0 });
			G ? Ge = c.jsx(r("WAWebUnstyledButton.react"), {
				dataTab: 2,
				xstyle: [
					o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
					_.chatControls,
					He && _.chatControlsSmall
				],
				role: "button",
				onClick: Oe,
				"aria-label": s._(
					/*BTDS*/
					"",
					[s._param("contact-name", S)]
				),
				customDataAttr: "selectedContact",
				children: et
			}, "chat-controls") : Ge = c.jsx(r("WDSTooltip.react"), {
				label: s._(
					/*BTDS*/
					""
				),
				children: c.jsx(o("WAWebClickable.react").Clickable, {
					dataTestId: "chat-controls",
					className: {
						0: "x1okw0bk xhslqc4 x1ubxc9n xqhg8r4",
						1: "x1okw0bk xhslqc4 x1ubxc9n xqhg8r4 x4p5aij x1ccui7m x1j85h84 x18pi947 x1gslohp x2fvf9 x12nagc xdzw4kq x1c9tyrk xeusxvb x1pahc9y x1ertn4p"
					}[!!He << 0],
					onClick: Oe,
					ariaLabel: s._(
						/*BTDS*/
						"",
						[s._param("name", S)]
					),
					children: et
				})
			});
		}
		var tt = le, nt = null, rt = h.showMemberLabel === !0, ot = h.sourceChat, at = N.id;
		rt && ot && (nt = c.jsx(o("WAWebMemberLabelComponents.react").GroupParticipantContent, {
			chat: ot,
			member: at
		}));
		var it = (Xe == null ? void 0 : Xe.hasCapi) === !0 && N.id.toString() === (Xe == null || (i = Xe.owner) == null ? void 0 : i.toString());
		if (Te) {
			var lt = Fe === "chat-checkbox-disabled" ? "contentDefault" : "contentDisabled";
			tt = c.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: lt,
				testid: "reachout-timelock-secondary-cell-text",
				xstyle: _.accountRestrictedText,
				children: s._(
					/*BTDS*/
					""
				)
			});
		} else it ? tt = c.jsx(o("WAWebEmojiText.react").EmojiText, {
			direction: "auto",
			text: s._(
				/*BTDS*/
				""
			)
		}) : tt == null && !q && (!E && o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() ? tt = c.jsx(o("WAWebChatTextStatusWrapper").TextStatus, {
			contactId: N.id,
			waitIdle: ge
		}) : tt = c.jsx(o("WAWebChatStatus").StatusWrapper, {
			id: C,
			waitIdle: ge
		}));
		nt && (tt = c.jsxs("div", { children: [c.jsx("div", { children: nt }), tt] }));
		var st = rt && ot != null && (o("WAWebMemberLabelsFrontendUtils").memberLabelExists({
			from: "chat_and_member",
			chat: ot,
			member: N.id
		}) || o("WAWebMemberLabelsFrontendUtils").shouldShowAddMemberTagCTA(ot, N.id)), ut = st || je != null || f({
			contact: N,
			secondaryProp: le,
			groupMetadata: Xe,
			hideStatus: q
		});
		ut ? tt = c.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, { children: tt }) : tt = null;
		var ct = h.type === g.SMALL ? 26 : h.photoSize;
		Fe === "chat-info" && (ct = 49);
		var dt = function(t, n) {
			if (t && n === "left" || !t && n === "right") {
				var e;
				(e = he.current) == null || e.focusOnContextMenuButton();
			}
		}, mt = {
			enter: qe,
			space: qe,
			right: function() {
				return dt(r("WAWebL10N").isRTL(), "right");
			},
			left: function() {
				return dt(r("WAWebL10N").isRTL(), "left");
			}
		}, pt = h.mouseDownAsClick, _t = it ? R || L : R, ft = o("WAWebListsLabelGatingUtils").canDisplayLabel(), gt;
		if (ee != null) gt = c.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, { children: ee });
		else if (E) {
			var ht = r("nullthrows")(o("WAWebChatCollection").ChatCollection.get(C.toString()));
			gt = c.jsx(o("WAWebName.react").Name, {
				chat: ht,
				useShortName: fe,
				highlightText: $e,
				showBusinessCheckmark: _t,
				showLabelIcon: ft,
				titlify: !0,
				ellipsify: !0
			}), gt = c.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, { children: gt });
		} else gt = c.jsx(o("WAWebName.react").Name, {
			contact: N,
			useShortName: fe,
			highlightText: $e,
			showBusinessCheckmark: _t,
			showLabelIcon: ft,
			showNotifyName: O && pe,
			useVerifiedName: it && N.name ? !1 : O && T > 0,
			elevatedPushNamesEnabled: O,
			titlify: !0,
			ellipsify: !0,
			you: !V,
			showMessageYourselfName: !V && me,
			truncateName: d,
			unknownUserLogContext: h.unknownUserLogContext
		}), gt = c.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, { children: gt });
		var yt = Fe === "list-names" && !ne ? "list-names-no-delete" : Fe, Ct = c.jsx(r("WAWebContactImage.react"), {
			contact: N,
			size: ct,
			waitIdle: ge,
			ephemeralIcon: B,
			searchQuery: ie,
			showStatusRingAroundProfilePhoto: h.showStatusRingAroundProfilePhoto,
			loadPicture: Z,
			secondaryAvatar: se
		}), bt = h.showTeeLockBadge === !0 ? c.jsx(r("WAWebTeeLockBadge.react"), {
			size: "small",
			children: Ct
		}) : Ct, vt = function() {
			ve(!1);
		}, St = o("WAWebChatParticipantUtils.react").shouldUseTallerItemHeight({
			contact: N,
			chat: ot,
			showMemberLabel: rt,
			groupMetadata: Xe,
			secondaryProp: le,
			hideStatus: q
		}), Rt = c.jsx(r("WAWebChatCell.react"), babelHelpers.extends({
			ref: he,
			theme: yt,
			active: Ee != null ? Ee : be,
			contextEnabled: M || o("WAWebBoolFunc").returnFalse,
			contextMenu: w,
			pendingAction: b,
			detail: Ge,
			image: bt,
			primary: gt,
			primaryDetail: ze,
			secondary: tt,
			secondaryDetail: je,
			onClick: pt ? null : Be,
			onMouseDown: pt ? We : null,
			onContext: Ue,
			tabIndex: _e,
			containerRole: oe,
			role: oe,
			tallerCellWithMemberLabel: St,
			idle: H,
			truncateName: d
		}, me && {
			testid: "message-yourself-row",
			extendSecondaryEllipsis: !0
		})), Lt = babelHelpers.extends({}, Ae && (oe === "checkbox" ? {
			role: "checkbox",
			"aria-checked": P
		} : { role: "button" }));
		return G ? c.jsx("div", babelHelpers.extends({
			onBlur: vt,
			ref: Se,
			className: {
				0: "",
				1: "xjp7ctv"
			}[!!He << 0]
		}, Lt, { children: Rt })) : c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, babelHelpers.extends({
			onBlur: vt,
			ref: Se,
			handlers: mt,
			onFocus: Ve,
			className: {
				0: "",
				1: "xjp7ctv"
			}[!!He << 0]
		}, Lt, { children: Rt }));
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y() {
		return h;
	}
	var C = h;
	l.willShowSecondaryContent = f, l.ContactCellType = g, l.ContactFactory = y, l.Contact = C;
}), 226);
