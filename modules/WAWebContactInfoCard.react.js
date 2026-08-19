__d("WAWebContactInfoCard.react", [
	"fbt",
	"Promise",
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
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
	"requireDeferred",
	"useWAWebAsync",
	"useWAWebChatValues",
	"useWAWebContactValues",
	"useWAWebEventTargetValue"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useMemo, f = r("requireDeferred")("WAWebContactEditUtils").__setRef("WAWebContactInfoCard.react"), g = r("requireDeferred")("WAWebContactLogging").__setRef("WAWebContactInfoCard.react"), h = r("requireDeferred")("WAWebContactUtils").__setRef("WAWebContactInfoCard.react"), y = 50, C = { container: {
		maxWidth: "xlnrm6",
		width: "xh8yej3",
		boxSizing: "x9f619",
		$$css: !0
	} };
	function b(e) {
		var t = o("react-compiler-runtime").c(5), n = e.chat, r = n.contact, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = [
			o("WAWebFrontendContactGetters").getIsMyContact,
			o("WAWebContactGetters").getShortName,
			o("WAWebFrontendContactGetters").getFormattedUserAndType
		], t[0] = a) : a = t[0];
		var i = o("useWAWebContactValues").useContactValues(r.id, a), l = i[0], s = i[1], u = i[2];
		if (l) {
			var d = s != null && s !== "" ? s : u.displayName, m;
			return t[1] !== d ? (m = c.jsx(v, { contactName: d }), t[1] = d, t[2] = m) : m = t[2], m;
		}
		var p;
		return t[3] !== n ? (p = c.jsx(S, { chat: n }), t[3] = n, t[4] = p) : p = t[4], p;
	}
	function v(e) {
		var t = o("react-compiler-runtime").c(2), n = e.contactName, a;
		return t[0] !== n ? (a = c.jsx(r("WDSText.react"), {
			colorName: "systemsBubbleContentDeemphasized",
			testid: "fmx-card-contact-system-message",
			type: "Body3",
			children: s._(
				/*BTDS*/
				"",
				[s._param("contact", n)]
			)
		}), t[0] = n, t[1] = a) : a = t[1], a;
	}
	function S(t) {
		var a, i, l, u, d, b, v = t.chat, S = v.contact, R = o("useWAWebChatValues").useChatValues(v.id, [o("WAWebFrontendChatGetters").getTrusted]), L = R[0], E = function() {
			o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
				descriptorType: "info_flow",
				chat: o("WAWebStateUtils").unproxy(v)
			} : c.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, { chat: o("WAWebStateUtils").unproxy(v) }, "info-" + v.id.toString()));
		}, k = o("useWAWebContactValues").useContactValues(S.id, [
			(b = o("WAWebContactGetters")).getId,
			b.getNotifyName,
			o("WAWebFrontendContactGetters").getIsContactBlocked,
			b.getIsSmb,
			o("WAWebFrontendContactGetters").getCommonGroups,
			o("WAWebFrontendContactGetters").getIsMyContact,
			b.getIsEnterprise,
			b.getBusinessProfile
		]), I = k[0], T = k[1], D = k[2], x = k[3], $ = k[4], P = k[5], N = k[6], M = k[7], w = o("WAWebUseBusinessProfile.react").useBusinessProfile(S.id, [
			"isAuthorizedAgent",
			"parentCompanyName",
			"obaPhoneNumber"
		]), A = (w == null ? void 0 : w.isAuthorizedAgent) === !0, F = w == null ? void 0 : w.parentCompanyName, O = (a = w == null ? void 0 : w.obaPhoneNumber) != null ? a : null, B = A && F != null && F !== "", W = o("WAWebAuthAgentAffiliationUtils").getAuthAgentParentWid(O), q = m(function() {
			F == null || W == null || (o("WAWebAuthAgentConsumerJourneyLogger").logFmxCardAffiliationTap(I.user, F, O), o("WAWebFindChatAction").findOrCreateLatestChat(W, "agentAffiliationRow").then(function(e) {
				var t = e.chat;
				o("WAWebCmd").Cmd.chatInfoDrawer(t);
			}).catch(r("WAWebNoop")));
		}, [
			I.user,
			F,
			O,
			W
		]), U = B && F != null && W != null ? q : null, V = S.id, H = o("WAWebContactManagementGating").shouldShowAddContactButton(V, P, o("WAWebContactManagementGating").addContactFMXCardEnabled()), G = r("useWAWebAsync")(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			return o("WAWebFMXTrustSignals").getCountryCodeTrustSignal(S);
		}), [S]), z = G.value, j = r("useWAWebAsync")(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			if (!x) return o("WAWebGetPrioritizedCommonGroupsAction").getPrioritizedCommonGroups(S);
		}), [S, x]), K = j.value, Q = (i = K == null ? void 0 : K.commonGroups.length) != null ? i : 0, X = K == null || (l = K.priority) == null ? void 0 : l.wamEnum, Y = o("WAWebFMXTrustSignals").getContactTrustSignal(S), J = o("WAWebFMXTrustSignals").getNewAccountTrustSignal(v), Z = m(function(e) {
			new (o("WAWebPsFmxActionWamEvent")).PsFmxActionWamEvent({
				fmxEvent: e,
				fmxEntryPoint: o("WAWebWamEnumFmxEntryPoint").FMX_ENTRY_POINT.FMX_CARD,
				commonGroupNum: Q,
				countryShown: !!z,
				notAContactShown: !!Y,
				isSenderSmb: x
			}).commit();
		}, [
			Q,
			z,
			Y,
			x
		]);
		p(function() {
			new (o("WAWebPsFmxActionWamEvent")).PsFmxActionWamEvent({
				fmxEvent: o("WAWebWamEnumFmxEvent").FMX_EVENT.HIGHLIGHT_GROUP_NAME,
				fmxEntryPoint: o("WAWebWamEnumFmxEntryPoint").FMX_ENTRY_POINT.FMX_CARD,
				highlightGroupType: X
			}).commit();
		}, [X]), p(function() {
			B && F != null && o("WAWebAuthAgentConsumerJourneyLogger").logFmxCardAffiliationImpression(I.user, F, O);
		}, [
			I,
			B,
			F,
			O
		]);
		var ee = function() {
			Z(o("WAWebWamEnumFmxEvent").FMX_EVENT.SAFETY_TOOLS), o("WAWebSafetyToolsModal.react").displaySafetyToolsModal(S, v);
		}, te = function() {
			Z(o("WAWebWamEnumFmxEvent").FMX_EVENT.CONTACT_INFO), E();
		}, ne, re = Q > 0, oe = _(function() {
			return o("WAWebBizCtwaAGMUtils").isCtWAInitiatedChat(v);
		}, [v]), ae = r("useWAWebEventTargetValue")(o("WAWebSignupLoadingState").getSignupLoadingEmitter(), o("WAWebSignupLoadingState").SIGNUP_LOADING_CHANGE_EVENT, function() {
			return o("WAWebSignupLoadingState").isSignupLoading(v.id.toString());
		}), ie = _(function() {
			if (!o("WAWebSignupGating").isSignupAGMEnabled()) return !1;
			if (ae) return !0;
			var e = v.msgs.getModelsArray();
			return e.slice(-y).some(function(e) {
				return e.subtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Signup;
			});
		}, [v.msgs, ae]);
		if (K != null) if (!re) ne = s._(
			/*BTDS*/
			""
		);
		else {
			var le, se = function() {
				Z(o("WAWebWamEnumFmxEvent").FMX_EVENT.COMMON_GROUPS), E();
			}, ue = K == null || (le = K.priority) == null ? void 0 : le.group;
			if (ue != null) if (Q > 1) {
				var ce;
				ne = (ce = s._plural(Q, "number_common_groups"), s._(
					/*BTDS*/
					"",
					[ce, s._implicitParam("=m2", c.jsx(o("WAWebText.react").WAWebClickableText, {
						color: "teal",
						dataTab: o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD,
						onClick: se,
						children: s._(
							/*BTDS*/
							"",
							[ce, s._param("group-name", ue.name)]
						)
					}))]
				));
			} else ne = s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", c.jsx(o("WAWebText.react").WAWebClickableText, {
					color: "teal",
					dataTab: o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD,
					onClick: se,
					children: s._(
						/*BTDS*/
						"",
						[s._param("group-name", ue.name)]
					)
				}))]
			);
			else ne = c.jsx(o("WAWebText.react").WAWebClickableText, {
				color: "teal",
				dataTab: o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD,
				onClick: se,
				children: s._(
					/*BTDS*/
					"",
					[s._plural(Q, "number_common_groups")]
				)
			});
		}
		var de = o("WAWebSubscriptionsGatingUtils").isMetaVerifiedContextCardEnabled() && o("WAWebContactGetters").getShowAsMetaVerified(S), me = o("WAWebFrontendContactGetters").getFormattedUserAndType(S), pe = me.type === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.VERIFIED_BUSINESS_NAME, _e = re || x || de || ie, fe = !0, ge, he = function() {
			if (!o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) return null;
			var e = o("WAWebFrontendContactGetters").getFormattedUsernameOrPhoneAndType(S), t = e.displayName;
			return t === S.name ? null : t;
		}, ye, Ce, be, ve = _(function() {
			var e, t, n = new Map();
			return (M == null || (e = M.fbPage) == null ? void 0 : e.likes) != null && M.fbPage.likes > 0 && n.set(o("WAWebSocialMediaTrustSignals.react").SocialMediaTrustSignalSource.FACEBOOK, r("WAWebL10N").n(M.fbPage.likes)), (M == null || (t = M.igProfessional) == null ? void 0 : t.followers) != null && M.igProfessional.followers > 0 && n.set(o("WAWebSocialMediaTrustSignals.react").SocialMediaTrustSignalSource.INSTAGRAM, r("WAWebL10N").n(M.igProfessional.followers)), n;
		}, [M == null || (u = M.fbPage) == null ? void 0 : u.likes, M == null || (d = M.igProfessional) == null ? void 0 : d.followers]);
		(M == null ? void 0 : M.memberSinceText) != null && (be = M == null ? void 0 : M.memberSinceText);
		var Se = s._(
			/*BTDS*/
			""
		), Re = B ? s._(
			/*BTDS*/
			"",
			[s._param("company", c.jsxs("span", {
				className: "x3nfvp2 x6s0dn4 x1trrmfo x117nqv4",
				children: [F, c.jsx(o("WAWebPsaVerifiedBlueIcon.react").PsaVerifiedBlueIcon, {
					width: 14,
					height: 14
				})]
			}))]
		) : null;
		if (de) {
			o("WAWebMiscGatingUtils").isBlueEducationEnabled() && (ye = function() {
				o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebCheckmarkInfoModal.react"), {}));
			});
			var Le = s._(
				/*BTDS*/
				""
			), Ee = o("WAWebMiscGatingUtils").isBlueEducationEnabled() ? c.jsx(o("WAWebText.react").WAWebClickableText, {
				color: "primary",
				onClick: ye,
				children: Le
			}) : c.jsx("span", {
				className: "xk50ysn xt0psk2",
				children: c.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDefault",
					children: Le
				})
			}), ke = he();
			ke == null && T != null && (ke = T), ke != null && (ge = c.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: ke
			})), fe = !1, Ce = [
				Ee,
				Se,
				be
			].filter(Boolean);
		} else if (x || N || pe) {
			var Ie = he();
			Ie != null && (ge = c.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: Ie
			}), fe = !1), Ce = x || N ? [Se, be].filter(Boolean) : [
				z,
				J,
				Y,
				ne
			].filter(Boolean);
		} else Ce = [
			z,
			J,
			Y,
			ne
		].filter(Boolean);
		var Te = !L && !D && v.isSenderSuspicious === !0 && !x && !N && o("WAWebFMXGatingUtils").isSuspiciousFmxEnabled();
		if (Te) return c.jsx(r("WAWebSuspiciousConsumerCard.react"), {
			chat: v,
			trustSignals: Ce
		});
		var De = function() {
			var t = c.jsx(o("WAWebButton.react").WAWebButtonSecondaryDestructive, {
				onClick: function() {
					o("WAWebBlockContactUtils").handleBlock(v, v.trusted ? o("WAWebBlockContants").BlockEntryPoint.ChatFmxCardBlock : o("WAWebBlockContants").BlockEntryPoint.ChatFmxCardBlockSuspicious), Z(o("WAWebWamEnumFmxEvent").FMX_EVENT.BLOCK);
				},
				icon: o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD,
				testid: "fmx-card-block-btn",
				children: r("WAWebFbtCommon")("Block")
			}), a = H ? c.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD,
				onClick: function() {
					n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
						var t = yield (e || (e = n("Promise"))).all([
							f.load(),
							h.load(),
							g.load()
						]), r = t[0].openContactEditDrawer, o = t[1].getContactDataFromContactModel, a = t[2].ContactSourceType;
						r(o(S), a.FMXCard);
					})(), Z(o("WAWebWamEnumFmxEvent").FMX_EVENT.ADD_CONTACT);
				},
				icon: r("WDSIconIcPersonAdd.react"),
				testid: "fmx-card-add-contact-btn",
				children: o("WAWebAddContactLabel").getAddToContactsLabel()
			}) : null;
			return ie ? null : (x || N) && oe ? a : N ? c.jsxs(c.Fragment, { children: [c.jsx(r("WDSButtonGroup.react"), {
				width: "hug",
				orientation: "horizontal",
				secondaryButtonProps: {
					variant: "outline",
					type: "destructive",
					onPress: function() {
						o("WAWebBlockContactUtils").handleBlock(v, v.trusted ? o("WAWebBlockContants").BlockEntryPoint.ChatFmxCardBlock : o("WAWebBlockContants").BlockEntryPoint.ChatFmxCardBlockSuspicious), Z(o("WAWebWamEnumFmxEvent").FMX_EVENT.BLOCK);
					},
					Icon: o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon,
					tabOrder: o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD,
					testid: "fmx-card-block-btn",
					label: r("WAWebFbtCommon")("Block")
				},
				primaryButtonProps: {
					variant: "outline",
					type: "default",
					onPress: te,
					Icon: r("WDSIconIcStore.react"),
					tabOrder: o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD,
					testid: "fmx-card-profile-btn",
					label: s._(
						/*BTDS*/
						""
					)
				}
			}), a] }) : c.jsxs(o("WAWebButton.react").ButtonGroup, {
				direction: "vertical",
				align: "center",
				children: [t, a]
			});
		}, xe = De();
		return c.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			padding: [24, 12],
			xstyle: C.container,
			children: [c.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				children: [
					c.jsx(o("WAWebDetailImage.react").DetailImage, {
						id: I,
						size: o("WAWebDetailImage.react").DetailImageSize.Medium,
						quality: o("WAWebDetailImage.react").DetailImageQuality.High,
						onClick: te,
						tabIndex: 0,
						ariaLabel: s._(
							/*BTDS*/
							""
						)
					}),
					c.jsx("div", {
						className: "x1y1aw1k",
						children: c.jsx(r("WDSText.react"), {
							type: "Headline2",
							colorName: "contentDefault",
							children: c.jsx(o("WAWebName.react").Name, {
								contact: S,
								onClick: ye,
								showBusinessCheckmark: de,
								makeCheckmarkClickable: de
							})
						})
					}),
					ge,
					fe && T != null && c.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: "~" + T
					}),
					c.jsx("div", {
						className: "x1y1aw1k",
						"data-testid": "fmx-card-trust-signals",
						children: c.jsxs(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: [Ce.map(function(e, t) {
								return c.jsxs("span", { children: [e, t < Ce.length - 1 && c.jsx(c.Fragment, { children: " • " })] }, t);
							}), Re != null && c.jsxs("span", {
								className: "x1lliihq",
								children: [Ce.length > 0 && c.jsx(c.Fragment, { children: "• " }), U != null ? c.jsx(o("WAWebText.react").WAWebClickableText, {
									color: "teal",
									onClick: U,
									children: Re
								}) : Re]
							})]
						})
					}),
					ve.size > 0 && c.jsx(o("WAWebSocialMediaTrustSignals.react").WAWebSocialMediaTrustSignals, { socialMediaSignals: ve })
				]
			}), c.jsxs(o("WAWebButton.react").ButtonGroup, {
				direction: "vertical",
				align: "center",
				paddingTop: 16,
				style: { minWidth: 160 },
				children: [!_e && c.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
					onClick: ee,
					icon: o("WAWebInfoShieldIcon.react").InfoShieldIcon,
					tabOrder: o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD,
					testid: "fmx-card-safety-tools-btn",
					children: s._(
						/*BTDS*/
						""
					)
				}), D ? c.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
					onClick: function() {
						o("WAWebBlockContactUtils").handleUnblock(v.contact, v.trusted ? o("WAWebBlockContants").BlockEntryPoint.ChatFmxCardBlock : o("WAWebBlockContants").BlockEntryPoint.ChatFmxCardBlockSuspicious), Z(o("WAWebWamEnumFmxEvent").FMX_EVENT.BLOCK);
					},
					tabOrder: o("WAWebTabOrder").TAB_ORDER.CONTEXT_CARD,
					testid: "fmx-card-unblock-btn",
					children: r("WAWebFbtCommon")("Unblock")
				}) : xe]
			})]
		});
	}
	S.displayName = S.name + " [from " + i.id + "]", l.default = b;
}), 226);
