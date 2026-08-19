__d("WAWebContactInfoCard.react", [
	"fbt",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebAddContactLabel",
	"WAWebAuthAgentAffiliationUtils",
	"WAWebAuthAgentConsumerJourneyLogger",
	"WAWebBizCtwaAGMUtils",
	"WAWebBlockContactUtils",
	"WAWebBlockContants",
	"WAWebButton.react",
	"WAWebCheckmarkInfoModal.react",
	"WAWebCmd",
	"WAWebCommonMsgSubtypeTypes",
	"WAWebContactGetters",
	"WAWebContactManagementGating",
	"WAWebDetailImage.react",
	"WAWebDrawerManager",
	"WAWebFMXGatingUtils",
	"WAWebFMXTrustSignals",
	"WAWebFbtCommon",
	"WAWebFindChatAction",
	"WAWebFlex.react",
	"WAWebFrontendChatGetters",
	"WAWebFrontendContactGetters",
	"WAWebGetPrioritizedCommonGroupsAction",
	"WAWebInfoFlowLoadable",
	"WAWebInfoShieldIcon.react",
	"WAWebL10N",
	"WAWebMiscGatingUtils",
	"WAWebModalManager",
	"WAWebName.react",
	"WAWebNoop",
	"WAWebPsFmxActionWamEvent",
	"WAWebPsaVerifiedBlueIcon.react",
	"WAWebSafetyToolsModal.react",
	"WAWebSettingsBlockedIcon.react",
	"WAWebSignupGating",
	"WAWebSignupLoadingState",
	"WAWebSocialMediaTrustSignals.react",
	"WAWebStateUtils",
	"WAWebSubscriptionsGatingUtils",
	"WAWebSuspiciousConsumerCard.react",
	"WAWebTabOrder",
	"WAWebText.react",
	"WAWebUseBusinessProfile.react",
	"WAWebUsernameGatingUtils",
	"WAWebWamEnumFmxEntryPoint",
	"WAWebWamEnumFmxEvent",
	"WAWebWamEnumOppositeVisibleIdentificationType",
	"WDSButtonGroup.react",
	"WDSIconIcPersonAdd.react",
	"WDSIconIcStore.react",
	"WDSText.react",
	"react",
	"requireDeferred",
	"useWAWebAsync",
	"useWAWebChatValues",
	"useWAWebContactValues",
	"useWAWebEventTargetValue"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useMemo, _ = r("requireDeferred")("WAWebContactEditUtils").__setRef("WAWebContactInfoCard.react"), f = r("requireDeferred")("WAWebContactLogging").__setRef("WAWebContactInfoCard.react"), g = r("requireDeferred")("WAWebContactUtils").__setRef("WAWebContactInfoCard.react"), h = 50, y = { container: {
		maxWidth: "xlnrm6",
		width: "xh8yej3",
		boxSizing: "x9f619",
		$$css: !0
	} };
	function C(e) {
		var t = e.chat, n = t.contact, r = o("useWAWebContactValues").useContactValues(n.id, [
			o("WAWebFrontendContactGetters").getIsMyContact,
			o("WAWebContactGetters").getShortName,
			o("WAWebFrontendContactGetters").getFormattedUserAndType
		]), a = r[0], i = r[1], l = r[2];
		if (a) {
			var s = i != null && i !== "" ? i : l.displayName;
			return u.jsx(b, { contactName: s });
		}
		return u.jsx(v, { chat: t });
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e.contactName;
		return u.jsx(r("WDSText.react"), {
			colorName: "systemsBubbleContentDeemphasized",
			testid: "fmx-card-contact-system-message",
			type: "Body3",
			children: s._(
				/*BTDS*/
				"",
				[s._param("contact", t)]
			)
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t, n, a, i, l, c, C = e.chat, b = C.contact, v = o("useWAWebChatValues").useChatValues(C.id, [o("WAWebFrontendChatGetters").getTrusted]), S = v[0], R = function() {
			o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
				descriptorType: "info_flow",
				chat: o("WAWebStateUtils").unproxy(C)
			} : u.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, { chat: o("WAWebStateUtils").unproxy(C) }, "info-" + C.id.toString()));
		}, L = o("useWAWebContactValues").useContactValues(b.id, [
			(c = o("WAWebContactGetters")).getId,
			c.getNotifyName,
			o("WAWebFrontendContactGetters").getIsContactBlocked,
			c.getIsSmb,
			o("WAWebFrontendContactGetters").getCommonGroups,
			o("WAWebFrontendContactGetters").getIsMyContact,
			c.getIsEnterprise,
			c.getBusinessProfile
		]), E = L[0], k = L[1], I = L[2], T = L[3], D = L[4], x = L[5], $ = L[6], P = L[7], N = o("WAWebUseBusinessProfile.react").useBusinessProfile(b.id, [
			"isAuthorizedAgent",
			"parentCompanyName",
			"obaPhoneNumber"
		]), M = (N == null ? void 0 : N.isAuthorizedAgent) === !0, w = N == null ? void 0 : N.parentCompanyName, A = (t = N == null ? void 0 : N.obaPhoneNumber) != null ? t : null, F = M && w != null && w !== "", O = o("WAWebAuthAgentAffiliationUtils").getAuthAgentParentWid(A), B = d(function() {
			w == null || O == null || (o("WAWebAuthAgentConsumerJourneyLogger").logFmxCardAffiliationTap(E.user, w, A), o("WAWebFindChatAction").findOrCreateLatestChat(O, "agentAffiliationRow").then(function(e) {
				var t = e.chat;
				o("WAWebCmd").Cmd.chatInfoDrawer(t);
			}).catch(r("WAWebNoop")));
		}, [
			E.user,
			w,
			A,
			O
		]), W = F && w != null && O != null ? B : null, q = b.id, U = o("WAWebContactManagementGating").shouldShowAddContactButton(q, x, o("WAWebContactManagementGating").addContactFMXCardEnabled()), V = r("useWAWebAsync")(async function() {
			return o("WAWebFMXTrustSignals").getCountryCodeTrustSignal(b);
		}, [b]), H = V.value, G = r("useWAWebAsync")(async function() {
			if (!T) return o("WAWebGetPrioritizedCommonGroupsAction").getPrioritizedCommonGroups(b);
		}, [b, T]), z = G.value, j = (n = z == null ? void 0 : z.commonGroups.length) != null ? n : 0, K = z == null || (a = z.priority) == null ? void 0 : a.wamEnum, Q = o("WAWebFMXTrustSignals").getContactTrustSignal(b), X = o("WAWebFMXTrustSignals").getNewAccountTrustSignal(C), Y = d(function(e) {
			new (o("WAWebPsFmxActionWamEvent")).PsFmxActionWamEvent({
				fmxEvent: e,
				fmxEntryPoint: o("WAWebWamEnumFmxEntryPoint").FMX_ENTRY_POINT.FMX_CARD,
				commonGroupNum: j,
				countryShown: !!H,
				notAContactShown: !!Q,
				isSenderSmb: T
			}).commit();
		}, [
			j,
			H,
			Q,
			T
		]);
		m(function() {
			new (o("WAWebPsFmxActionWamEvent")).PsFmxActionWamEvent({
				fmxEvent: o("WAWebWamEnumFmxEvent").FMX_EVENT.HIGHLIGHT_GROUP_NAME,
				fmxEntryPoint: o("WAWebWamEnumFmxEntryPoint").FMX_ENTRY_POINT.FMX_CARD,
				highlightGroupType: K
			}).commit();
		}, [K]), m(function() {
			F && w != null && o("WAWebAuthAgentConsumerJourneyLogger").logFmxCardAffiliationImpression(E.user, w, A);
		}, [
			E,
			F,
			w,
			A
		]);
		var J = function() {
			Y(o("WAWebWamEnumFmxEvent").FMX_EVENT.SAFETY_TOOLS), o("WAWebSafetyToolsModal.react").displaySafetyToolsModal(b, C);
		}, Z = function() {
			Y(o("WAWebWamEnumFmxEvent").FMX_EVENT.CONTACT_INFO), R();
		}, ee, te = j > 0, ne = p(function() {
			return o("WAWebBizCtwaAGMUtils").isCtWAInitiatedChat(C);
		}, [C]), re = r("useWAWebEventTargetValue")(o("WAWebSignupLoadingState").getSignupLoadingEmitter(), o("WAWebSignupLoadingState").SIGNUP_LOADING_CHANGE_EVENT, function() {
			return o("WAWebSignupLoadingState").isSignupLoading(C.id.toString());
		}), oe = p(function() {
			if (!o("WAWebSignupGating").isSignupAGMEnabled()) return !1;
			if (re) return !0;
			var e = C.msgs.getModelsArray();
			return e.slice(-h).some(function(e) {
				return e.subtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Signup;
			});
		}, [C.msgs, re]);
		if (z != null) if (!te) ee = s._(
			/*BTDS*/
			""
		);
		else {
			var ae, ie = function() {
				Y(o("WAWebWamEnumFmxEvent").FMX_EVENT.COMMON_GROUPS), R();
			}, le = z == null || (ae = z.priority) == null ? void 0 : ae.group;
			if (le != null) if (j > 1) {
				var se;
				ee = (se = s._plural(j, "number_common_groups"), s._(
					/*BTDS*/
					"",
					[se, s._implicitParam("=m2", u.jsx(o("WAWebText.react").WAWebClickableText, {
						color: "teal",
						dataTab: o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD,
						onClick: ie,
						children: s._(
							/*BTDS*/
							"",
							[se, s._param("group-name", le.name)]
						)
					}))]
				));
			} else ee = s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(o("WAWebText.react").WAWebClickableText, {
					color: "teal",
					dataTab: o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD,
					onClick: ie,
					children: s._(
						/*BTDS*/
						"",
						[s._param("group-name", le.name)]
					)
				}))]
			);
			else ee = u.jsx(o("WAWebText.react").WAWebClickableText, {
				color: "teal",
				dataTab: o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD,
				onClick: ie,
				children: s._(
					/*BTDS*/
					"",
					[s._plural(j, "number_common_groups")]
				)
			});
		}
		var ue = o("WAWebSubscriptionsGatingUtils").isMetaVerifiedContextCardEnabled() && o("WAWebContactGetters").getShowAsMetaVerified(b), ce = o("WAWebFrontendContactGetters").getFormattedUserAndType(b), de = ce.type === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.VERIFIED_BUSINESS_NAME, me = te || T || ue || oe, pe = !0, _e, fe = function() {
			if (!o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) return null;
			var e = o("WAWebFrontendContactGetters").getFormattedUsernameOrPhoneAndType(b), t = e.displayName;
			return t === b.name ? null : t;
		}, ge, he, ye, Ce = p(function() {
			var e, t, n = new Map();
			return (P == null || (e = P.fbPage) == null ? void 0 : e.likes) != null && P.fbPage.likes > 0 && n.set(o("WAWebSocialMediaTrustSignals.react").SocialMediaTrustSignalSource.FACEBOOK, r("WAWebL10N").n(P.fbPage.likes)), (P == null || (t = P.igProfessional) == null ? void 0 : t.followers) != null && P.igProfessional.followers > 0 && n.set(o("WAWebSocialMediaTrustSignals.react").SocialMediaTrustSignalSource.INSTAGRAM, r("WAWebL10N").n(P.igProfessional.followers)), n;
		}, [P == null || (i = P.fbPage) == null ? void 0 : i.likes, P == null || (l = P.igProfessional) == null ? void 0 : l.followers]);
		(P == null ? void 0 : P.memberSinceText) != null && (ye = P == null ? void 0 : P.memberSinceText);
		var be = s._(
			/*BTDS*/
			""
		), ve = F ? s._(
			/*BTDS*/
			"",
			[s._param("company", u.jsxs("span", {
				className: "x3nfvp2 x6s0dn4 x1trrmfo x117nqv4",
				children: [w, u.jsx(o("WAWebPsaVerifiedBlueIcon.react").PsaVerifiedBlueIcon, {
					width: 14,
					height: 14
				})]
			}))]
		) : null;
		if (ue) {
			o("WAWebMiscGatingUtils").isBlueEducationEnabled() && (ge = function() {
				o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebCheckmarkInfoModal.react"), {}));
			});
			var Se = s._(
				/*BTDS*/
				""
			), Re = o("WAWebMiscGatingUtils").isBlueEducationEnabled() ? u.jsx(o("WAWebText.react").WAWebClickableText, {
				color: "primary",
				onClick: ge,
				children: Se
			}) : u.jsx("span", {
				className: "xk50ysn xt0psk2",
				children: u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDefault",
					children: Se
				})
			}), Le = fe();
			Le == null && k != null && (Le = k), Le != null && (_e = u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: Le
			})), pe = !1, he = [
				Re,
				be,
				ye
			].filter(Boolean);
		} else if (T || $ || de) {
			var Ee = fe();
			Ee != null && (_e = u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: Ee
			}), pe = !1), he = T || $ ? [be, ye].filter(Boolean) : [
				H,
				X,
				Q,
				ee
			].filter(Boolean);
		} else he = [
			H,
			X,
			Q,
			ee
		].filter(Boolean);
		var ke = !S && !I && C.isSenderSuspicious === !0 && !T && !$ && o("WAWebFMXGatingUtils").isSuspiciousFmxEnabled();
		if (ke) return u.jsx(r("WAWebSuspiciousConsumerCard.react"), {
			chat: C,
			trustSignals: he
		});
		var Ie = function() {
			var e = u.jsx(o("WAWebButton.react").WAWebButtonSecondaryDestructive, {
				onClick: function() {
					o("WAWebBlockContactUtils").handleBlock(C, C.trusted ? o("WAWebBlockContants").BlockEntryPoint.ChatFmxCardBlock : o("WAWebBlockContants").BlockEntryPoint.ChatFmxCardBlockSuspicious), Y(o("WAWebWamEnumFmxEvent").FMX_EVENT.BLOCK);
				},
				icon: o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD,
				testid: "fmx-card-block-btn",
				children: r("WAWebFbtCommon")("Block")
			}), t = U ? u.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD,
				onClick: function() {
					(async function() {
						var e = await Promise.all([
							_.load(),
							g.load(),
							f.load()
						]), t = e[0].openContactEditDrawer, n = e[1].getContactDataFromContactModel, r = e[2].ContactSourceType;
						t(n(b), r.FMXCard);
					})(), Y(o("WAWebWamEnumFmxEvent").FMX_EVENT.ADD_CONTACT);
				},
				icon: r("WDSIconIcPersonAdd.react"),
				testid: "fmx-card-add-contact-btn",
				children: o("WAWebAddContactLabel").getAddToContactsLabel()
			}) : null;
			return oe ? null : (T || $) && ne ? t : $ ? u.jsxs(u.Fragment, { children: [u.jsx(r("WDSButtonGroup.react"), {
				width: "hug",
				orientation: "horizontal",
				secondaryButtonProps: {
					variant: "outline",
					type: "destructive",
					onPress: function() {
						o("WAWebBlockContactUtils").handleBlock(C, C.trusted ? o("WAWebBlockContants").BlockEntryPoint.ChatFmxCardBlock : o("WAWebBlockContants").BlockEntryPoint.ChatFmxCardBlockSuspicious), Y(o("WAWebWamEnumFmxEvent").FMX_EVENT.BLOCK);
					},
					Icon: o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon,
					tabOrder: o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD,
					testid: "fmx-card-block-btn",
					label: r("WAWebFbtCommon")("Block")
				},
				primaryButtonProps: {
					variant: "outline",
					type: "default",
					onPress: Z,
					Icon: r("WDSIconIcStore.react"),
					tabOrder: o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD,
					testid: "fmx-card-profile-btn",
					label: s._(
						/*BTDS*/
						""
					)
				}
			}), t] }) : u.jsxs(o("WAWebButton.react").ButtonGroup, {
				direction: "vertical",
				align: "center",
				children: [e, t]
			});
		}, Te = Ie();
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			padding: [24, 12],
			xstyle: y.container,
			children: [u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				children: [
					u.jsx(o("WAWebDetailImage.react").DetailImage, {
						id: E,
						size: o("WAWebDetailImage.react").DetailImageSize.Medium,
						quality: o("WAWebDetailImage.react").DetailImageQuality.High,
						onClick: Z,
						tabIndex: 0,
						ariaLabel: s._(
							/*BTDS*/
							""
						)
					}),
					u.jsx("div", {
						className: "x1y1aw1k",
						children: u.jsx(r("WDSText.react"), {
							type: "Headline2",
							colorName: "contentDefault",
							children: u.jsx(o("WAWebName.react").Name, {
								contact: b,
								onClick: ge,
								showBusinessCheckmark: ue,
								makeCheckmarkClickable: ue
							})
						})
					}),
					_e,
					pe && k != null && u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: "~" + k
					}),
					u.jsx("div", {
						className: "x1y1aw1k",
						"data-testid": "fmx-card-trust-signals",
						children: u.jsxs(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: [he.map(function(e, t) {
								return u.jsxs("span", { children: [e, t < he.length - 1 && u.jsx(u.Fragment, { children: " • " })] }, t);
							}), ve != null && u.jsxs("span", {
								className: "x1lliihq",
								children: [he.length > 0 && u.jsx(u.Fragment, { children: "• " }), W != null ? u.jsx(o("WAWebText.react").WAWebClickableText, {
									color: "teal",
									onClick: W,
									children: ve
								}) : ve]
							})]
						})
					}),
					Ce.size > 0 && u.jsx(o("WAWebSocialMediaTrustSignals.react").WAWebSocialMediaTrustSignals, { socialMediaSignals: Ce })
				]
			}), u.jsxs(o("WAWebButton.react").ButtonGroup, {
				direction: "vertical",
				align: "center",
				paddingTop: 16,
				style: { minWidth: 160 },
				children: [!me && u.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
					onClick: J,
					icon: o("WAWebInfoShieldIcon.react").InfoShieldIcon,
					tabOrder: o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD,
					testid: "fmx-card-safety-tools-btn",
					children: s._(
						/*BTDS*/
						""
					)
				}), I ? u.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
					onClick: function() {
						o("WAWebBlockContactUtils").handleUnblock(C.contact, C.trusted ? o("WAWebBlockContants").BlockEntryPoint.ChatFmxCardBlock : o("WAWebBlockContants").BlockEntryPoint.ChatFmxCardBlockSuspicious), Y(o("WAWebWamEnumFmxEvent").FMX_EVENT.BLOCK);
					},
					tabOrder: o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD,
					testid: "fmx-card-unblock-btn",
					children: r("WAWebFbtCommon")("Unblock")
				}) : Te]
			})]
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = C;
}), 226);
