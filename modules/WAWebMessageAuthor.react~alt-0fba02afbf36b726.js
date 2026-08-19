__d("WAWebMessageAuthor.react", [
	"fbt",
	"WALogger",
	"WAWebChatCollection",
	"WAWebChatGetters",
	"WAWebChatGroupUtils",
	"WAWebChatParticipantColor",
	"WAWebCmd",
	"WAWebConnModel",
	"WAWebContactGetters",
	"WAWebDisplayType",
	"WAWebDrawerManager",
	"WAWebElevatedPushNamesFlag",
	"WAWebEmojiText.react",
	"WAWebFindChatAction",
	"WAWebFrontendContactGetters",
	"WAWebFrontendMsgGetters",
	"WAWebGroupChatProfilePicture.react",
	"WAWebGroupHoverCardGatingUtils",
	"WAWebGroupHoverCardLoadable",
	"WAWebKeyboardIsKeyActivation",
	"WAWebLidMigrationUtils",
	"WAWebMemberLabelRenderer.react",
	"WAWebMemberLabelsFrontendUtils",
	"WAWebMessageUiUtils",
	"WAWebMiscGatingUtils",
	"WAWebMsgGetters",
	"WAWebMsgType",
	"WAWebNewsletterAdminProfileDetailsDrawer.react",
	"WAWebNewsletterAdminProfilePicture.react",
	"WAWebNewsletterGatingUtils",
	"WAWebPopover.react",
	"WAWebPsaVerifiedBlueIcon.react",
	"WAWebPsaVerifiedIcon.react",
	"WAWebQuotedMessageUserJourneyLogger",
	"WAWebSimpleSignalPNToFBIDMigration",
	"WAWebStylesEnv",
	"WAWebUnknownUserDisplayEnricher",
	"WAWebWamEnumOppositeVisibleIdentificationType",
	"WAWebWid",
	"WDSFocusStateStyles",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"fbs",
	"isStringNullOrEmpty",
	"nullthrows",
	"react",
	"stylex",
	"useWAWebContactFormattedUsernameOrPhoneByChat",
	"useWAWebContactValues",
	"useWAWebDefaultProfileColors",
	"useWAWebGroupColors",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c.useRef, p = { marginBlock3: {
		marginTop: "x7r5mf7",
		marginBottom: "xahult9",
		$$css: !0
	} };
	function _(e) {
		var t = e.groupWid, n = e.isStatus, r = e.msg, a = e.name;
		if (o("WAWebMsgGetters").getIsBotFutureproofPlaceholder(r)) return s._(
			/*BTDS*/
			""
		).toString();
		if (n) return a + " · " + s._(
			/*BTDS*/
			""
		).toString();
		if (t) {
			var i = o("WAWebChatCollection").ChatCollection.get(t), l = i ? i.formattedTitle : s._(
				/*BTDS*/
				""
			).toString();
			return l ? a + " · " + l : a;
		}
		return a;
	}
	var f = {
		author: {
			display: "x3nfvp2",
			maxWidth: "x193iq5w",
			fontSize: "xj9w6cj",
			lineHeight: "x19v9tvf",
			fontWeight: "xk50ysn",
			$$css: !0
		},
		name: {
			flex: "xkz0k9k",
			paddingInlineStart: "xyiysdx",
			marginInlineStart: "xe9ewy2",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			textOverflow: "xlyipyv",
			whiteSpace: "xuxw1ft",
			$$css: !0
		},
		psaName: {
			color: "x1v5yvga",
			$$css: !0
		},
		number: {
			flex: "x3psx0u",
			direction: "xzt5al7",
			$$css: !0
		},
		screenName: {
			marginInlineStart: "x13fj5qh",
			fontWeight: "x1fcty0u",
			color: "xhslqc4",
			"::before_content": "x1knvif",
			$$css: !0
		},
		screenNameMac: {
			WebkitFontSmoothing: "xvmahel",
			MozOsxFontSmoothing: "xlh3980",
			$$css: !0
		},
		screenNameElevatedPushNames: {
			display: "x1lliihq",
			minWidth: "x12tqqkd",
			paddingInlineEnd: "x11lfxj5",
			flex: "x98rzlu",
			textOverflow: "xlyipyv",
			whiteSpace: "xuxw1ft",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			"::before_content": "x7edwua",
			textDecoration: "xt0b8zv",
			$$css: !0
		},
		numberElevatedPushNames: {
			fontSize: "x1ncwhqj",
			display: "x1lliihq",
			whiteSpace: "xuxw1ft",
			marginInlineEnd: "x11t971q",
			flex: "x1okw0bk",
			fontWeight: "x1fcty0u",
			color: "xhslqc4",
			$$css: !0
		},
		numberElevatedPushNamesMac: {
			WebkitFontSmoothing: "xvmahel",
			MozOsxFontSmoothing: "xlh3980",
			$$css: !0
		},
		picInBubble: {
			position: "x1n2onr6",
			$$css: !0
		},
		authorElevatedPushNames: {
			display: "x78zum5",
			$$css: !0
		},
		authorLabel: {
			lineHeight: "x1fc57z9",
			$$css: !0
		},
		label: {
			color: "x1bvqhpb",
			lineHeight: "x1d3mw78",
			fontWeight: "x1fcty0u",
			$$css: !0
		},
		groupHistoryMessage: {
			filter: "x1olsc1v",
			$$css: !0
		},
		hoverableUnderline: {
			textDecoration: "xt0b8zv",
			$$css: !0
		},
		focusableRounding: {
			borderStartStartRadius: "xbrszos",
			borderStartEndRadius: "xea3l6g",
			borderEndEndRadius: "x18isctg",
			borderEndStartRadius: "x2q3nzr",
			$$css: !0
		}
	}, g = { verticalAlignTop: {
		verticalAlign: "x16dsc37",
		$$css: !0
	} };
	function h(t) {
		var n, a, i, l, c = t.albumId, h = t.chat, b = t.disableClick, v = t.displayType, S = t.msg, R = t.quotedRemoteJid, L = t.senderNameColorOverride, E = t.showMemberLabel, k = E === void 0 ? !0 : E, I = t.stopClickPropagation, T = I === void 0 ? !1 : I, D = o("useWAWebMsgValues").useMsgValues(t.msg.id, [
			o("WAWebMsgGetters").getSender,
			o("WAWebMsgGetters").getType,
			o("WAWebMsgGetters").getIsLive,
			o("WAWebMsgGetters").getIsStatus,
			o("WAWebMsgGetters").getId,
			o("WAWebMsgGetters").getQuotedMsg,
			o("WAWebFrontendMsgGetters").getShouldDisplaySelf,
			o("WAWebMsgGetters").getIsGroupHistoryMessageInOwnChat,
			o("WAWebMsgGetters").getNewsletterAdminProfile
		]), x = D[0], $ = D[1], P = D[2], N = D[3], M = D[4], w = D[5], A = D[6], F = D[7], O = D[8], B = x == null ? x : (n = o("WAWebSimpleSignalPNToFBIDMigration").getDeprecatedPnChatForFbidInvoke(x)) != null ? n : x, W = o("WAWebFrontendMsgGetters").getMaybeChat(t.msg.unsafe()), q = (a = o("WAWebSimpleSignalPNToFBIDMigration").getDeprecatedPnChatForFbidInvoke(t.contact.id)) != null ? a : t.contact.id, U = o("useWAWebContactValues").useContactValues(q, [
			o("WAWebContactGetters").getId,
			o("WAWebFrontendContactGetters").getFormattedNameAndType,
			o("WAWebContactGetters").getIsSupportAccount,
			o("WAWebContactGetters").getName,
			o("WAWebContactGetters").getNotifyName,
			o("WAWebContactGetters").getPushname,
			o("WAWebContactGetters").getVerifiedLevel,
			o("WAWebContactGetters").getVerifiedName
		]), V = U[0], H = U[1], G = U[2], z = U[3], j = U[4], K = U[5], Q = U[6], X = U[7], Y = r("useWAWebContactFormattedUsernameOrPhoneByChat")(W, t.contact), J = Y.formattedUsernameOrPhone, Z = Y.isPhoneNumberForceMasked, ee = Y.type, te = H.displayName, ne = W != null && o("WAWebChatGetters").getIsGroup(W), re = function() {
			ne && ee === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PLACEHOLDER && o("WAWebUnknownUserDisplayEnricher").logUnknownUserDisplayed("group_message", t.contact.id);
		}, oe = !!b || Z === !0, ae = m(null), ie = m(null), le = o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(W), se = v === o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT || v === o("WAWebDisplayType").DISPLAY_TYPE.BOT_INVOKE_RESPONSE || C(O), ue = function(t) {
			var e = B;
			e != null && (W != null && o("WAWebChatGetters").getIsGroup(W) && (e = o("WAWebChatGroupUtils").getOneToOneContactFromGroupContact(e, "message_author_handle_click")), e != null && (T && t.stopPropagation(), o("WAWebFindChatAction").findOrCreateLatestChat(e, "messageAuthor").then(function(e) {
				var t = e.chat, n = W != null && (o("WAWebChatGetters").getIsGroup(W) || o("WAWebChatGetters").getIsNewsletter(W)) ? W : void 0;
				o("WAWebCmd").Cmd.chatInfoDrawer(t, { sourceGroupChatOrNewsletter: n });
			})));
		}, ce = h || W;
		ce || o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Assertion failed!"]))).sendLogs("author-with-no-chat");
		var de = oe || o("WAWebMsgGetters").getIsBotFutureproofPlaceholder(S) ? null : ue, me = function(t) {
			de != null && r("WAWebKeyboardIsKeyActivation")(t) && (t.preventDefault(), de(t));
		}, pe = de != null, _e = pe ? "0" : void 0, fe = pe ? "button" : void 0, ge = o("WAWebGroupHoverCardGatingUtils").isGroupHoverCardEnabled(), he = ge && de != null && !A && !se && W != null && o("WAWebChatGetters").getIsGroup(W), ye = o("WAWebPopover.react").usePopoverElement({
			target: ie,
			hoverTarget: ae,
			position: o("WAWebPopover.react").PopoverPosition.Top,
			alignment: o("WAWebPopover.react").PopoverAlignment.Start,
			initHandling: he ? "hover-popover" : "controllable",
			openingDelay: 300,
			transitionName: "fade-fast",
			element: he ? d.jsx(o("WAWebGroupHoverCardLoadable").GroupHoverCardLoadable, {
				contact: t.contact,
				chatWid: ce == null ? void 0 : ce.id,
				source: "messageAuthor"
			}) : d.jsx("div", {}),
			name: "MessageAuthorHoverCard",
			dismissable: !1
		}), Ce = ye.popover, be = k && o("WAWebMemberLabelsFrontendUtils").shouldShowMemberLabelForMsg(S) ? d.jsx(r("WAWebMemberLabelRenderer.react"), {
			memberLabelArgs: {
				from: "message",
				message: S
			},
			onClick: ue
		}) : null, ve = ce && B && !o("useWAWebDefaultProfileColors").isDefaultProfileColorsEnabledForWid(B) ? o("WAWebChatParticipantColor").getAssignedColor(ce, B, "WAWebMessageAuthor-" + ((i = o("WAWebQuotedMessageUserJourneyLogger").getChatType(ce.id)) != null ? i : "")) : 1, Se = o("useWAWebDefaultProfileColors").useDefaultProfileColors(B, O == null ? void 0 : O.name), Re = Se.foreground, Le = o("useWAWebGroupColors").useGroupsColorStyle(ve, "color"), Ee = (u || (u = r("stylex")))(f.author, le && f.authorElevatedPushNames, ($ === o("WAWebMsgType").MSG_TYPE.POLL_CREATION || $ === o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT || $ === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION) && o("WDSPaddings.stylex").wdsPaddings.paddingStart4, se && f.picInBubble, (l = L != null ? L : Re) != null ? l : Le, F && f.groupHistoryMessage, t.rootXstyle), ke;
		if (A) ke = d.jsx(o("WAWebEmojiText.react").EmojiText, { text: _({
			groupWid: R,
			isStatus: N,
			msg: S,
			name: r("fbs")._(
				/*BTDS*/
				""
			).toString()
		}) });
		else if (C(O)) ke = d.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: _({
				groupWid: R,
				isStatus: N,
				msg: S,
				name: O == null ? void 0 : O.name
			}),
			className: (u || (u = r("stylex")))(o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, f.focusableRounding),
			role: "button",
			onClick: function() {
				return o("WAWebDrawerManager").DrawerManager.openDrawerRight(d.jsx(r("WAWebNewsletterAdminProfileDetailsDrawer.react"), {
					newsletterAdminProfile: O,
					onClose: o("WAWebDrawerManager").closeDrawerRight
				}));
			},
			tabIndex: "0"
		});
		else if (z || o("WAWebMsgGetters").getIsGroupStatus(S) || X && Q !== 0 || G) {
			var Ie = o("WAWebLidMigrationUtils").getShouldShowLidDebugUI(V), Te = z != null ? z : X;
			o("WAWebMsgGetters").getIsGroupStatus(S) && (Te = K), Te = Ie ? Te + " [LID]" : Te, ke = [d.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: _({
					groupWid: R,
					isStatus: N,
					msg: S,
					name: G ? te : Te
				}),
				className: (u || (u = r("stylex")))(f.name, de != null && f.hoverableUnderline, de != null && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, de != null && f.focusableRounding),
				emojiXstyle: g.verticalAlignTop,
				testid: "author",
				onClick: de,
				tabIndex: _e,
				role: fe
			}, "author")];
		} else if (r("WAWebWid").isPSA(V)) {
			var De = (u || (u = r("stylex")))(f.name, f.psaName, de != null && f.hoverableUnderline, de != null && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, de != null && f.focusableRounding), xe = o("WAWebConnModel").Conn.isSMB ? "WhatsApp Business" : "WhatsApp";
			ke = [d.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: _({
					groupWid: R,
					isStatus: N,
					msg: S,
					name: xe
				}),
				className: De,
				emojiXstyle: g.verticalAlignTop,
				testid: "author",
				onClick: de,
				tabIndex: _e,
				role: fe
			}, "author"), d.jsx("div", {
				className: "x1rg5ohu x3psx0u xwklpps xvijh9v xxymvpz",
				children: o("WAWebMiscGatingUtils").isBlueEnabled() ? d.jsx(o("WAWebPsaVerifiedBlueIcon.react").PsaVerifiedBlueIcon, {}) : d.jsx(o("WAWebPsaVerifiedIcon.react").PsaVerifiedIcon, {})
			}, "authorCheckMark")];
		} else if (le) {
			ke = [];
			var $e = (V == null ? void 0 : V.isBot()) === !0 ? s._(
				/*BTDS*/
				""
			).toString() : j != null ? j : K, Pe = !N && !r("isStringNullOrEmpty")($e), Ne = y({
				handleKeyDown: me,
				nameRendered: Pe,
				onClick: de,
				tabbable: pe
			}), Me = Ne.phoneInteractiveProps, we = Ne.phoneIsTheControl;
			if (Pe) {
				var Ae = r("isStringNullOrEmpty")(c) ? M.toString() + "-push-name" : c + "-push-name";
				ke = [d.jsx(o("WAWebEmojiText.react").EmojiText, {
					className: (u || (u = r("stylex")))(f.screenNameElevatedPushNames, de != null && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, de != null && f.focusableRounding),
					testid: "author",
					onClick: de,
					tabIndex: _e,
					role: fe,
					direction: "auto",
					ellipsify: !0,
					text: $e,
					ariaLabel: o("WAWebMessageUiUtils").getAriaLabelForMaybeName($e)
				}, Ae)];
			}
			var Fe = V != null && V.isLid() ? J : _({
				groupWid: R,
				isStatus: N,
				msg: S,
				name: J
			});
			re();
			var Oe = d.jsx("span", babelHelpers.extends({
				className: (u || (u = r("stylex")))(f.numberElevatedPushNames, o("WAWebStylesEnv").isOSMac && f.numberElevatedPushNamesMac, de != null && f.hoverableUnderline, we && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, we && f.focusableRounding),
				"data-testid": "author"
			}, Me, { children: Fe }), M.toString() + "-number");
			ke.push(Oe);
		} else {
			var Be = V != null && V.isLid() ? J : _({
				groupWid: R,
				isStatus: N,
				msg: S,
				name: J
			});
			re();
			var We = null;
			N || ((V == null ? void 0 : V.isBot()) === !0 ? We = s._(
				/*BTDS*/
				""
			).toString() : r("isStringNullOrEmpty")(j) ? We = K : We = j);
			var qe = !r("isStringNullOrEmpty")(We), Ue = y({
				handleKeyDown: me,
				nameRendered: qe,
				onClick: de,
				tabbable: pe
			}), Ve = Ue.phoneInteractiveProps, He = Ue.phoneIsTheControl;
			ke = [d.jsx("span", babelHelpers.extends({
				className: (u || (u = r("stylex")))(f.number, de != null && f.hoverableUnderline, He && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, He && f.focusableRounding),
				"data-testid": "author"
			}, Ve, { children: Be }), M.toString() + "-number")];
			var Ge = ke;
			if (qe) {
				var ze = r("isStringNullOrEmpty")(c) ? M.toString() + "-push-name" : c + "-push-name";
				Ge.push(d.jsx(o("WAWebEmojiText.react").EmojiText, {
					className: (u || (u = r("stylex")))(f.screenName, o("WAWebStylesEnv").isOSMac && f.screenNameMac, de != null && f.hoverableUnderline, de != null && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, de != null && f.focusableRounding),
					testid: "author",
					onClick: de,
					tabIndex: _e,
					role: fe,
					direction: "auto",
					ellipsify: !0,
					text: We
				}, ze));
			}
		}
		if (se) {
			var je, Ke, Qe = v === o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT && B != null && !!(!(ce == null || (je = ce.groupMetadata) == null || (je = je.participants) == null || (je = je.get(B)) == null) && je.isAdmin);
			return Qe && (Ke = s._(
				/*BTDS*/
				""
			)), d.jsxs("div", {
				className: Ee,
				role: t.role || "",
				children: [d.jsx("div", babelHelpers.extends({}, {
					0: { className: "x19dbzi3" },
					1: { className: "x19dbzi3 x1k70j0n xzueoph" }
				}[!!(Qe || C(O)) << 0], { children: C(O) ? d.jsx(o("WAWebNewsletterAdminProfilePicture.react").WAWebNewsletterAdminProfilePicture, { newsletterAdminProfile: O }) : d.jsx(r("WAWebGroupChatProfilePicture.react"), {
					userContact: t.contact,
					chatWid: r("nullthrows")(ce).id,
					disableClick: oe,
					usePicInBubbleLayout: !0
				}) })), d.jsxs("div", {
					className: "x78zum5 xdt5ytf x1cy8zhl xl56j7k x6ikm8r x10wlt62",
					children: [
						d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(f.authorLabel, le && f.authorElevatedPushNames, C(O) ? p.marginBlock3 : o("WDSMargins.stylex").wdsMargins.marginTop4, !C(O) && o("WDSMargins.stylex").wdsMargins.marginBottom2), { children: ke })),
						Ke && d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(f.label, o("WDSMargins.stylex").wdsMargins.marginTop2, o("WDSMargins.stylex").wdsMargins.marginBottom4), { children: Ke })),
						be
					]
				})]
			});
		}
		return d.jsxs(d.Fragment, { children: [
			he && d.jsx("div", {
				ref: ie,
				className: "xk2xgvr x16hy4bp xifccgj xeawwkn xqtp20y x6ikm8r x10wlt62"
			}),
			d.jsx("div", {
				className: Ee,
				role: t.role || "",
				children: he ? d.jsx("span", {
					ref: ae,
					className: "x78zum5 x98rzlu xeuugli",
					children: ke
				}) : ke
			}),
			d.jsx("div", { children: be }),
			he && Ce
		] });
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.handleKeyDown, n = e.nameRendered, r = e.onClick, o = e.tabbable, a = o && !n, i = r != null ? {
			onClick: r,
			onKeyDown: a ? t : void 0,
			role: a ? "button" : void 0,
			tabIndex: a ? 0 : void 0
		} : {};
		return {
			phoneInteractiveProps: i,
			phoneIsTheControl: a
		};
	}
	function C(e) {
		return e != null && o("WAWebNewsletterGatingUtils").isNewsletterAdminProfilesReceiverEnabled();
	}
	l.default = h;
}), 226);
