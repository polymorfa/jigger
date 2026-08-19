__d("WAWebName.react", [
	"fbt",
	"WAArrayMoveToFirst",
	"WALogger",
	"WAReplaceRepeatingWhitespace",
	"WAWebBroadcastName.react",
	"WAWebBusinessProfileTypes",
	"WAWebChatContactUtils",
	"WAWebChatGetters",
	"WAWebClassnames",
	"WAWebContactGetters",
	"WAWebContactSearchGatingUtils",
	"WAWebElevatedPushNamesFlag",
	"WAWebEmojiText.react",
	"WAWebErrorBoundary.react",
	"WAWebFormatConfiguration",
	"WAWebFrontendChatGetters",
	"WAWebFrontendContactGetters",
	"WAWebGroupMetadataCollection",
	"WAWebGroupType",
	"WAWebGuestNameFormat",
	"WAWebLabels.react",
	"WAWebLidMigrationUtils",
	"WAWebListsGatingUtils",
	"WAWebMiscGatingUtils",
	"WAWebNewsletterName.react",
	"WAWebParticipantListUtils",
	"WAWebPsaVerifiedBlueIcon.react",
	"WAWebPsaVerifiedIcon.react",
	"WAWebUserPrefsMeUser",
	"WAWebWamEnumOppositeVisibleIdentificationType",
	"WDSButton.react",
	"WDSIconWdsIcTransferOwnership.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"cr:17281",
	"react",
	"stylex",
	"useWAWebChatValues",
	"useWAWebContactValues",
	"useWAWebForceUpdate",
	"useWAWebListener",
	"useWAWebLogUnknownUserDisplayed",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["chat", "selectable"], u = ["chat", "selectable"], c = ["chat"], d = ["contact"], m, p, _, f = _ || (_ = o("react")), g = {
		marginTop1: {
			marginTop: "xvijh9v",
			$$css: !0
		},
		marginInlineStart3: {
			marginInlineStart: "x7phf20",
			$$css: !0
		}
	}, h = {
		spaceBefore: {
			"::before_content": "xjuopq5",
			"::before_whiteSpace": "xulcptl",
			$$css: !0
		},
		chatAssignmentIconAssignedToYou: {
			color: "x3j997e",
			$$css: !0
		},
		chatAssignmentIconAssignedToOthers: {
			color: "xms21op",
			$$css: !0
		},
		icon: {
			display: "x78zum5",
			flex: "x3psx0u",
			verticalAlign: "x16dsc37",
			$$css: !0
		},
		smallCheckmarkButton: {
			width: "x1kky2od",
			height: "xlup9mm",
			$$css: !0
		},
		largeCheckmarkButton: {
			width: "xvy4d1p",
			height: "xxk0z11",
			$$css: !0
		},
		hasLabels: {
			display: "x1jfb8zj",
			overflowX: "xuce83p",
			overflowY: "x1bft6iq",
			textOverflow: "x1i7k8ik",
			whiteSpace: "xq9mrsl",
			marginInlineEnd: "x11t971q",
			$$css: !0
		},
		nameContainer: {
			display: "x78zum5",
			$$css: !0
		}
	}, y = function(t) {
		var e = t.contact, n = t.elevatedPushNamesEnabled, r = t.isMyContact, a = t.showMessageYourselfName, i = t.showNotifyName, l = t.useDisplayName, u = t.useLiftMeUp, c = t.useShortName, d = t.useVerifiedName, m = t.you, p = n && o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(e);
		if (a && o("WAWebContactGetters").getIsMe(e)) {
			var _;
			return {
				displayName: s._(
					/*BTDS*/
					"",
					[s._param("nameOrPhoneNumber", d ? e.verifiedName : (_ = e.name) != null ? _ : o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(e))]
				),
				isUnknownUser: !1
			};
		}
		if (e.id.isAiHub()) return {
			displayName: s._(
				/*BTDS*/
				""
			),
			isUnknownUser: !1
		};
		var f = o("WAWebFrontendContactGetters").getDisplayName(e), g = o("WAWebContactGetters").getPushname(e);
		if (l && f) {
			var h = o("WAWebFrontendContactGetters").getDisplayNameType(e);
			return h === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER && u && g != null ? {
				displayName: "~" + g,
				isUnknownUser: !1
			} : {
				displayName: f,
				isUnknownUser: h === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PLACEHOLDER
			};
		}
		if (c && !p) {
			var y = o("WAWebFrontendContactGetters").getFormattedShortName(e);
			if (y) return {
				displayName: y,
				isUnknownUser: !1
			};
		}
		if (d && e.verifiedName) return {
			displayName: e.verifiedName,
			isUnknownUser: !1
		};
		if (m && o("WAWebContactGetters").getIsMe(e)) return {
			displayName: o("WAWebFrontendContactGetters").getFormattedName(e),
			isUnknownUser: !1
		};
		if (n && g && !r) return {
			displayName: "~" + g,
			isUnknownUser: !1
		};
		if (i && p) {
			var C = o("WAWebContactGetters").getNotifyName(e);
			if (C != null) return {
				displayName: n ? o("WAWebChatContactUtils").getFormattedNotifyName(C) : "~" + C,
				displayNameAriaLabel: o("WAWebChatContactUtils").getAccessibleNotifyName(C),
				isUnknownUser: !1
			};
		}
		if (!u) {
			var b = o("WAWebFrontendContactGetters").getFormattedUserAndType(e), v = b.displayName, S = b.type;
			return {
				displayName: v,
				isUnknownUser: S === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PLACEHOLDER
			};
		}
		var R = o("WAWebFrontendContactGetters").getFormattedUserAndType(e).type;
		return R === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER && g != null ? {
			displayName: e.verifiedName,
			isUnknownUser: !1
		} : o("WAWebContactGetters").getIsBusiness(e) && e.verifiedLevel === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH ? {
			displayName: e.verifiedName,
			isUnknownUser: !1
		} : {
			displayName: "~" + g,
			isUnknownUser: !1
		};
	}, C = function(t) {
		var e = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().getDeviceId(), n;
		if (t.some(function(t) {
			return t.deviceId === e;
		})) {
			var a = s._(
				/*BTDS*/
				""
			);
			n = f.jsx("span", {
				title: a,
				children: f.jsx(r("WDSIconWdsIcTransferOwnership.react"), {
					width: 18,
					height: 18,
					xstyle: [o("WDSMargins.stylex").wdsMargins.marginEnd4, h.chatAssignmentIconAssignedToYou],
					"aria-label": a,
					testid: "chat-assignment"
				})
			});
		} else if (t.length > 0) {
			var i = s._(
				/*BTDS*/
				"",
				[s._param("agentName", t[0].name)]
			);
			n = f.jsx("span", {
				title: i,
				children: f.jsx(r("WDSIconWdsIcTransferOwnership.react"), {
					width: 18,
					height: 18,
					xstyle: [o("WDSMargins.stylex").wdsMargins.marginEnd4, h.chatAssignmentIconAssignedToOthers],
					"aria-label": i,
					testid: "chat-assignment"
				})
			});
		} else n = null;
		return n;
	};
	function b(e) {
		var t, a = e.contact, i = e.element, l = i === void 0 ? "span" : i, u = e.highlightText, c = e.titlify, d = e.ellipsify, _ = e.breakWord, b = e.you, v = b === void 0 ? !1 : b, S = e.selectable, R = e.useShortName, L = R === void 0 ? !1 : R, E = e.useDisplayName, k = E === void 0 ? !1 : E, I = e.onClick, T = e.showLabelIcon, D = T === void 0 ? !1 : T, x = e.showBusinessCheckmark, $ = e.showNotifyName, P = $ === void 0 ? !1 : $, N = e.elevatedPushNamesEnabled, M = N === void 0 ? !1 : N, w = e.useLiftMeUp, A = w === void 0 ? !1 : w, F = e.useVerifiedName, O = F === void 0 ? !1 : F, B = e.firstLabel, W = e.xstyle, q = e.showChatAssignmentIcon, U = q === void 0 ? !1 : q, V = e.assignedAgents, H = V === void 0 ? [] : V, G = e.skipCheckMark, z = G === void 0 ? !1 : G, j = e.showMessageYourselfName, K = j === void 0 ? !1 : j, Q = e.testid, X = e.isVerifiedNewsletter, Y = e.makeCheckmarkClickable, J = Y === void 0 ? !1 : Y, Z = e.checkmarkLarge, ee = Z === void 0 ? !1 : Z, te = e.truncateName, ne = e.emojiXstyle, re = e.containerXstyle, oe = e.tabIndex, ae = e.unknownUserLogContext, ie = o("useWAWebContactValues").useOptionalContactValues(a == null ? void 0 : a.id, [
			o("WAWebContactGetters").getIsPSA,
			o("WAWebContactGetters").getIsIAS,
			o("WAWebContactGetters").getIsCAPISupportAccount,
			o("WAWebFrontendContactGetters").getFormattedUser,
			o("WAWebFrontendContactGetters").getFormattedName,
			o("WAWebFrontendContactGetters").getFormattedShortName,
			o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone,
			o("WAWebFrontendContactGetters").getDisplayName,
			o("WAWebContactGetters").getLabels,
			o("WAWebContactGetters").getName,
			o("WAWebContactGetters").getNotifyName,
			o("WAWebContactGetters").getIsMe,
			o("WAWebContactGetters").getVerifiedName,
			o("WAWebContactGetters").getId,
			o("WAWebFrontendContactGetters").getIsGuest
		]), le = (t = o("useWAWebContactValues").useOptionalContactValues(a == null ? void 0 : a.id, [o("WAWebFrontendContactGetters").getIsMyContact])) != null ? t : [], se = le[0], ue = a != null && ie != null ? y({
			contact: a,
			showNotifyName: P,
			elevatedPushNamesEnabled: M,
			useLiftMeUp: A,
			useDisplayName: k,
			useShortName: L,
			useVerifiedName: O,
			you: v,
			showMessageYourselfName: K,
			isMyContact: se
		}) : null;
		if (o("useWAWebLogUnknownUserDisplayed").useLogUnknownUserDisplayed(ae, a, (ue == null ? void 0 : ue.isUnknownUser) === !0), a == null || ie == null || ue == null) return "";
		var ce = ie[0], de = ie[1], me = ie[2], pe = ie[3], _e = ie[4], fe = ie[5], ge = ie[6], he = ie[7], ye = ie[8], Ce = ie[9], be = ie[10], ve = ie[11], Se = ie[12], Re = ie[13], Le = ie[14], Ee;
		if (u != null && u !== "") {
			var ke = o("WAWebContactSearchGatingUtils").isTokenizedSearchEnabled() ? u.split(/\s+/).filter(Boolean) : [u];
			Ee = o("WAWebFormatConfiguration").SearchName({ terms: ke });
		}
		var Ie = ue.displayName, Te = ue.displayNameAriaLabel;
		if (!Ie) return o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
			"displayName:",
			",\n               formattedName:",
			",\n               name:",
			",\n               formattedShortName:",
			",\n               formattedUser:",
			""
		])), Ie, _e, Ce, fe, pe).sendLogs("display name is null or undefined"), "";
		var De = o("WAWebGuestNameFormat").maybeGetNameWithGuestLabel(Ie, Le), xe = Te != null ? o("WAWebGuestNameFormat").maybeGetNameWithGuestLabel(Te, Le) : null, $e = o("WAWebLidMigrationUtils").getShouldShowLidDebugUI(Re) && n("cr:17281"), Pe = r("WAReplaceRepeatingWhitespace")(De.toString()), Ne = f.jsxs("div", babelHelpers.extends({}, {
			0: { className: "x78zum5" },
			1: { className: "xuxw1ft x6ikm8r x10wlt62 xlyipyv x78zum5" }
		}[!!te << 0], { children: [
			f.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: Pe,
				ariaLabel: xe != null ? r("WAReplaceRepeatingWhitespace")(xe.toString()) : void 0,
				element: l,
				className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(null, e.className),
				formatters: Ee,
				titlify: c,
				ellipsify: d,
				breakWord: _,
				tabIndex: oe,
				direction: "auto",
				selectable: S,
				inlineblock: !0,
				onClick: I,
				role: I != null ? "link" : void 0,
				xstyle: W,
				testid: Q,
				emojiXstyle: ne
			}),
			K && f.jsx(o("WAWebEmojiText.react").EmojiText, {
				emojiXstyle: ne,
				testid: "you-label",
				text: s._(
					/*BTDS*/
					""
				),
				xstyle: h.spaceBefore
			}),
			$e && n("cr:17281") && f.jsx(n("cr:17281"), {})
		] })), Me = e.labels || ye;
		Me != null && Me.length && B != null && r("WAArrayMoveToFirst")(Me, B);
		var we = o("WAWebListsGatingUtils").isListsEnabled(), Ae = D === !0 && Me != null && Me.length ? f.jsx(o("WAWebLabels.react").Labels, {
			labels: Me,
			showName: !1,
			iconXstyle: o("WDSPaddings.stylex").wdsPaddings.paddingStart4,
			isListsFeatureEnabled: we
		}) : null, Fe = !z && (ce || de || me || !!x || X), Oe = U ? C(H) : null;
		if (Fe === !0) {
			var Be;
			if (o("WAWebMiscGatingUtils").isBlueEnabled()) {
				var We = ee ? 24 : 16;
				Be = J && I ? f.jsx(r("WDSButton.react"), {
					Icon: o("WAWebPsaVerifiedBlueIcon.react").PsaVerifiedBlueIcon,
					"aria-label": s._(
						/*BTDS*/
						""
					),
					onPress: I,
					variant: "borderless",
					xstyle: ee ? h.largeCheckmarkButton : h.smallCheckmarkButton
				}) : f.jsx(o("WAWebPsaVerifiedBlueIcon.react").PsaVerifiedBlueIcon, {
					height: We,
					width: We
				});
			} else Be = f.jsx(o("WAWebPsaVerifiedIcon.react").PsaVerifiedIcon, {});
			return f.jsxs("div", babelHelpers.extends({}, (p || (p = r("stylex"))).props(o("WAWebNewsletterName.react").styles.verified, te && h.nameContainer), { children: [
				Ne,
				f.jsx("div", babelHelpers.extends({}, p.props(X === !0 ? o("WAWebNewsletterName.react").styles.newsletterIcon : [
					h.icon,
					g.marginTop1,
					g.marginInlineStart3
				]), { children: Be })),
				f.jsxs("div", {
					className: "x3nfvp2 x6s0dn4 x5yr21d x1eqw3am x16dsc37",
					children: [Oe, Ae]
				})
			] }));
		}
		return Oe || Ae ? f.jsxs("div", babelHelpers.extends({}, (p || (p = r("stylex"))).props(o("WAWebNewsletterName.react").styles.verified, te && h.nameContainer), { children: [Ne, f.jsxs("div", {
			className: "x3nfvp2 x6s0dn4 x5yr21d x1eqw3am x16dsc37",
			children: [Oe, Ae]
		})] })) : f.jsx("div", babelHelpers.extends({}, (p || (p = r("stylex"))).props(o("WAWebNewsletterName.react").styles.verified, te && h.nameContainer, re), { children: Ne }));
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		"use no forget";
		var t, a = e.chat, i = e.element, l = e.highlightText, u = e.titlify, c = e.ellipsify, d = e.breakWord, m = e.onClick, _ = e.showLabelIcon, g = e.firstLabel, y = e.className, b = e.xstyle, v = e.showChatAssignmentIcon, S = v === void 0 ? !1 : v, R = e.assignedAgents, L = R === void 0 ? [] : R, E = e.testid, k = e.overrideCommunityAnnouncementGroupName, I = k === void 0 ? !1 : k, T = e.checkmarkLarge, D = T === void 0 ? !1 : T, x = e.truncateName, $, P = o("useWAWebChatValues").useChatValues(e.chat.id, [o("WAWebFrontendChatGetters").getFormattedTitle, o("WAWebChatGetters").getLabels]), N = P[0], M = P[1], w = o("useWAWebModelValues").useModelValues(e.groupMetadata, [
			"support",
			"isUnnamed",
			"participants",
			"groupType",
			"isLidAddressingMode",
			"isCag",
			"parentGroup"
		]), A = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
		if (o("useWAWebListener").useListener(w.participants, "bulk_add bulk_remove reset sort change:isAdmin change:isSuperAdmin remove add", A), l != null && l !== "") {
			var F = o("WAWebContactSearchGatingUtils").isTokenizedSearchEnabled() ? l.split(/\s+/).filter(Boolean) : [l];
			$ = o("WAWebFormatConfiguration").SearchName({ terms: F });
		}
		var O = e.labels || M;
		O != null && O.length && g != null && r("WAArrayMoveToFirst")(O, g);
		var B = o("WAWebListsGatingUtils").isListsEnabled(), W = _ === !0 && O != null && O.length ? f.jsx(o("WAWebLabels.react").Labels, {
			labels: O,
			showName: !1,
			iconXstyle: o("WDSPaddings.stylex").wdsPaddings.paddingStart4,
			isListsFeatureEnabled: B
		}) : null, q = I && w.groupType === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ? s._(
			/*BTDS*/
			""
		) : r("WAReplaceRepeatingWhitespace")(w != null && w.isUnnamed ? o("WAWebParticipantListUtils").calculateUnnamedGroupFullParticipantsList(w, !0) : a.title()), U = o("WAWebLidMigrationUtils").getShouldShowLidDebugUIForGroups(w.isLidAddressingMode), V = w.parentGroup, H = V ? ((t = r("WAWebGroupMetadataCollection").get(V)) == null ? void 0 : t.isLidAddressingMode) === !0 : !1, G = o("WAWebLidMigrationUtils").getShouldShowLidDebugUIForGroups(H), z = f.jsxs(f.Fragment, { children: [
			f.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: q,
				element: i,
				className: y,
				xstyle: b,
				formatters: $,
				titlify: u,
				ellipsify: c,
				breakWord: d,
				direction: "auto",
				inlineblock: !0,
				onClick: m,
				testid: E
			}),
			U && n("cr:17281") && f.jsx(n("cr:17281"), { isCAG: w.isCag }),
			G && n("cr:17281") && f.jsx(n("cr:17281"), { isParentGroup: !0 })
		] }), j = w.support;
		if (j) {
			var K = D ? 24 : 20;
			return f.jsxs("div", babelHelpers.extends({}, (p || (p = r("stylex"))).props(o("WAWebNewsletterName.react").styles.verified, x && h.nameContainer, !!W && h.hasLabels), { children: [
				z,
				f.jsx("div", {
					className: "x78zum5 x3psx0u x16dsc37 xvijh9v x7phf20",
					children: o("WAWebMiscGatingUtils").isBlueEnabled() ? f.jsx(o("WAWebPsaVerifiedBlueIcon.react").PsaVerifiedBlueIcon, {
						width: K,
						height: K
					}) : f.jsx(o("WAWebPsaVerifiedIcon.react").PsaVerifiedIcon, {})
				}),
				f.jsx("div", {
					className: "x3nfvp2 x6s0dn4 x5yr21d x1eqw3am x16dsc37",
					children: W
				})
			] }));
		}
		var Q = S ? C(L) : null;
		return Q || W ? f.jsxs("div", babelHelpers.extends({}, (p || (p = r("stylex"))).props(o("WAWebNewsletterName.react").styles.verified, x && h.nameContainer, h.hasLabels), { children: [z, f.jsxs("div", {
			className: "x3nfvp2 x6s0dn4 x5yr21d x1eqw3am x16dsc37",
			children: [Q, W]
		})] })) : z;
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(t) {
		var n, r, a = (n = o("useWAWebChatValues").useOptionalChatValues((r = t.chat) == null ? void 0 : r.id, [
			o("WAWebChatGetters").getIsUser,
			o("WAWebChatGetters").getIsNewsletter,
			o("WAWebChatGetters").getIsBroadcast,
			o("WAWebFrontendChatGetters").getGroupMetadata,
			o("WAWebFrontendChatGetters").getFormattedTitle
		])) != null ? n : [
			!1,
			!1,
			!1,
			null,
			null
		], i = a[0], l = a[1], s = a[2], m = a[3], p = a[4];
		if (t.chat && m != null && !i && !l && !s) {
			var _ = t.chat, g = t.selectable, h = babelHelpers.objectWithoutPropertiesLoose(t, e);
			return f.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
				name: "group-name",
				fallback: function() {
					return f.jsx("span", { children: p });
				},
				children: f.jsx(v, babelHelpers.extends({
					chat: _,
					groupMetadata: m
				}, h))
			});
		}
		if (t.chat && !i && l) {
			var y = t.chat, C = t.selectable, S = babelHelpers.objectWithoutPropertiesLoose(t, u);
			return f.jsx(o("WAWebNewsletterName.react").NewsletterName, babelHelpers.extends({
				chat: y,
				selectable: C
			}, S));
		}
		if (t.chat && s) {
			var R = t.breakWord, L = t.chat, E = t.className, k = t.element, I = t.ellipsify, T = t.firstLabel, D = t.highlightText, x = t.labels, $ = t.onClick, P = t.selectable, N = t.showLabelIcon, M = t.testid, w = t.titlify, A = t.xstyle;
			return f.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
				name: "broadcast-name",
				fallback: function() {
					return f.jsx("span", { children: p });
				},
				children: f.jsx(o("WAWebBroadcastName.react").BroadcastName, {
					chat: L,
					breakWord: R,
					className: E,
					element: k,
					ellipsify: I,
					firstLabel: T,
					highlightText: D,
					labels: x,
					onClick: $,
					selectable: P,
					showLabelIcon: N,
					testid: M,
					titlify: w,
					xstyle: A
				})
			});
		}
		var F, O;
		if (t.chat) {
			var B = t.chat, W = babelHelpers.objectWithoutPropertiesLoose(t, c);
			F = B.contact, O = W;
		} else {
			var q = t.contact, U = babelHelpers.objectWithoutPropertiesLoose(t, d);
			F = q, O = U;
		}
		return f.jsx(b, babelHelpers.extends({ contact: F }, O));
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t = e.chat, n = e.contact, o = e.xstyle;
		return f.jsxs("span", babelHelpers.extends({}, (p || (p = r("stylex"))).props(o), { children: [
			f.jsx(S, {
				contact: n,
				useShortName: !!n.shortName,
				showNotifyName: !0,
				elevatedPushNamesEnabled: !0,
				useLiftMeUp: !0
			}),
			f.jsx("span", { children: "\xA0•\xA0" }),
			t.groupMetadata && f.jsx(v, {
				chat: t,
				groupMetadata: t.groupMetadata
			})
		] }));
	}
	R.displayName = R.name + " [from " + i.id + "]", l.ContactName = b, l.GroupName = v, l.Name = S, l.ContactAndGroupName = R;
}), 226);
