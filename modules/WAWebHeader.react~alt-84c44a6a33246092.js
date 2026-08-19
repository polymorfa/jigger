__d("WAWebHeader.react", [
	"fbt",
	"WAWebABProps",
	"WAWebAdaptiveLayoutContext.react",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebBlockContactUtils",
	"WAWebBlockContants",
	"WAWebBotUtils",
	"WAWebBroadcastMenuDropdown.react",
	"WAWebBroadcastSubtitle.react",
	"WAWebCallButtonsSurface",
	"WAWebChatAssignmentNux.react",
	"WAWebChatAssignmentUtils",
	"WAWebChatGetters",
	"WAWebChatGroupUtils",
	"WAWebChatHeaderTextStatusBubble.react",
	"WAWebChatSearchDrawer.react",
	"WAWebCmd",
	"WAWebCommerceButton.react",
	"WAWebConnModel",
	"WAWebContactGetters",
	"WAWebContactMenuDropdown.react",
	"WAWebConversationMenus",
	"WAWebConversationPanelStyleUtils",
	"WAWebDetailImage.react",
	"WAWebDrawerManager",
	"WAWebDrawerManagerContext",
	"WAWebErrorBoundary.react",
	"WAWebFrontendChatGetters",
	"WAWebFrontendContactGetters",
	"WAWebGroupChatImage.react",
	"WAWebGroupMenuDropdown.react",
	"WAWebGroupSubtitle.react",
	"WAWebHatchFrontendGating",
	"WAWebHeaderBusinessState.react",
	"WAWebHeaderInfoPanelActions",
	"WAWebHeaderLabelRendering",
	"WAWebHeaderStatus.react",
	"WAWebHeaderSubtitlePlaceholder",
	"WAWebInitialsFromNameUtils",
	"WAWebKeyboardTabUtils",
	"WAWebMenuBar.react",
	"WAWebMmSignalSharingGatingUtils",
	"WAWebMmSignalSharingTos",
	"WAWebMmSignalSharingUserDisclosedInCollectionWindow",
	"WAWebMobilePlatforms",
	"WAWebNewBroadcastHeaderButton.react",
	"WAWebNewsletterChatHeaderSubtitle.react",
	"WAWebNewsletterChatMenuDropdown.react",
	"WAWebNewsletterCommonGatingUtils",
	"WAWebNewsletterGatingUtils",
	"WAWebPrivacyBlurWrapper.react",
	"WAWebProfilePicThumbCollection",
	"WAWebShouldShowCallButtons",
	"WAWebSingleChevronInCircleIcon.react",
	"WAWebStackedCirclesImage.react",
	"WAWebStateUtils",
	"WAWebStatusImageRing.react",
	"WAWebStatusLoadingRingOverlay.react",
	"WAWebStylesEnv",
	"WAWebSubgroupSwitcherButton.react",
	"WAWebTabOrder",
	"WAWebThemeContext",
	"WAWebTos",
	"WAWebVoipCallButtonsLoadable",
	"WAWebWamEnumCallFromUi",
	"WAWebWamEnumLobbyEntryPointType",
	"WAWebWamEnumProfileEntryPoint",
	"WDSFocusStateStyles",
	"WDSIconIcArrowBack.react",
	"WDSIconIcMoreVert.react",
	"WDSIconIcSearch.react",
	"WDSMenuBarItem.react",
	"WDSPaddings.stylex",
	"WDSProfilePhoto.react",
	"cr:7940",
	"justknobx",
	"nullthrows",
	"react",
	"stylex",
	"useWAWebChatValues",
	"useWAWebContactValues",
	"useWAWebDefaultProfileColors",
	"useWAWebForceUpdate",
	"useWAWebIsKeyboardUser",
	"useWAWebListener",
	"useWAWebModelValues",
	"useWAWebStaticButtonA11y",
	"useWAWebUIM",
	"useWAWebVideoAvatarUrl"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useContext, p = d.useEffect, _ = d.useRef, f = d.useState, g = { paddingBlock10: {
		paddingTop: "x889kno",
		paddingBottom: "x1a8lsjc",
		$$css: !0
	} }, h = {
		buttonMargin: {
			marginInlineStart: "x150mmf0",
			$$css: !0
		},
		backButtonMargin: {
			marginInlineEnd: "xqf2s3x",
			$$css: !0
		},
		chatHeader: {
			position: "x1n2onr6",
			boxSizing: "x9f619",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			width: "xh8yej3",
			height: "x185czh",
			backgroundColor: "x1h3rtpe",
			"::after_position": "x1j6awrg",
			"::after_bottom": "x1te75w5",
			"::after_insetInlineStart": "x1iygr5g",
			"::after_width": "x4eaejv",
			"::after_height": "xcock1l",
			"::after_content": "x1s928wv",
			"::after_backgroundColor": "xl9llhp",
			"::after_borderBottomWidth": "x1qj619r",
			"::after_borderBottomStyle": "x1r9ni5o",
			"::after_borderBottomColor": "xb1pvdl",
			$$css: !0
		},
		chatHeaderDarkOverride: {
			boxShadow: "xu306ak",
			"::after_display": "x1h1zc6f",
			$$css: !0
		},
		chatHeaderStylesOverride: {
			backgroundColor: "x1280gxy",
			borderInlineStartStyle: "xstzfhl",
			$$css: !0
		},
		chatHeaderMaterial: {
			"::after_content": "x1s928wv",
			"::after_display": "x1h1zc6f",
			$$css: !0
		},
		chatBody: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			flexGrow: "x1iyjqo2",
			justifyContent: "xl56j7k",
			minWidth: "xeuugli",
			$$css: !0
		},
		chevronInCircleIcon: {
			position: "x10l6tqk",
			insetInlineEnd: "xo2ifbc",
			left: null,
			right: null,
			bottom: "x1o583il",
			backgroundColor: "x1280gxy",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			cursor: "x1ypdohk",
			$$css: !0
		}
	}, y = {
		shouldDisableStartCall: !0,
		shouldShow: !1
	};
	function C(e, t) {
		return e ? "channel" : t ? "group" : "person";
	}
	var b = 40, v = 2;
	function S(e) {
		var t = e.badge, n = e.chatAvatarType, a = e.colorId, i = e.initials, l = e.name, s = e.placeholderIcon, u = e.statusId, d = e.statusInteraction, m = e.statusRing, p = e.videoUrl, _ = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(a), f = o("useWAWebModelValues").useOptionalModelValues(_, ["img"]), g = i === "" ? void 0 : i, h = {};
		g != null && (h.initials = g), t != null && (h.badge = t), m != null && (h.statusRing = m), d != null && (h.interaction = d);
		var y = c.jsx(r("WDSProfilePhoto.react"), babelHelpers.extends({
			type: n,
			name: l,
			src: f == null ? void 0 : f.img,
			videoSrc: p,
			size: "small",
			color: o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(a),
			customColor: o("useWAWebDefaultProfileColors").getWDSProfilePhotoCustomColor(a),
			placeholderIcon: s,
			isDecorative: !0
		}, h));
		return m == null || u == null ? y : c.jsx(r("WAWebStatusLoadingRingOverlay.react"), {
			id: u,
			size: b,
			stroke: v,
			children: y
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(t) {
		"use no forget";
		var a, i, l, u = t.chat, d = t.onSelectMessages, b = t.selectable, v = t.threadId, R = r("useWAWebUIM")(), L = r("useWAWebVideoAvatarUrl")(u.id), E = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), k = m(r("WAWebAdaptiveLayoutContext.react")), I = k.isNarrow, T = _(null), D = _(null), x = _(null), $ = u.contact, P = f(function() {
			return o("WAWebMmSignalSharingTos").isMmSignalSharingDisclosureTosAccepted();
		}), N = P[0], M = P[1];
		o("useWAWebListener").useListener(o("WAWebTos").TosManager, "change", function() {
			if (o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingDisclosureEnabled()) {
				var e = o("WAWebMmSignalSharingTos").isMmSignalSharingDisclosureTosAccepted();
				N !== e && M(e);
			}
		});
		var w = o("useWAWebChatValues").useChatValues(u.id, [
			(i = o("WAWebChatGetters")).getId,
			(l = o("WAWebFrontendChatGetters")).getFormattedTitle,
			l.getPresence,
			i.getIsUser,
			i.getIsNewsletter,
			i.getIsGroup,
			i.getIsBroadcast,
			l.getGroupMetadata,
			i.getIsPSA,
			l.getContact,
			i.getName,
			l.getAssignedAgent,
			l.getIsAssignedToMe,
			l.getNewsletterMetadata,
			l.getMmSignalSharingExpirationWindow,
			i.getCapiThreadControl,
			l.getAttachMediaContents,
			l.getIsCameraCaptureDrawerOpen
		]), A = w[0], F = w[1], O = w[2], B = w[3], W = w[4], q = w[5], U = w[6], V = w[7], H = w[8], G = w[9], z = w[10], j = w[11], K = w[12], Q = w[13], X = w[14], Y = w[15], J = w[16], Z = w[17], ee = W && o("WAWebNewsletterGatingUtils").isNewsletterStatusThreadRingEnabled() && (Q == null ? void 0 : Q.suspended) !== !0, te = q && r("justknobx")._("550"), ne = r("useWAWebIsKeyboardUser")(), re = ne.isKeyboardUser, oe = o("WAWebThemeContext").useIsDarkTheme(), ae = o("useWAWebModelValues").useModelValues(O.chatstate, ["type"]), ie = (a = o("useWAWebContactValues").useOptionalContactValues($ == null ? void 0 : $.id, [
			o("WAWebContactGetters").getIsMe,
			o("WAWebFrontendContactGetters").getIsContactBlocked,
			o("WAWebContactGetters").getCalculatedStatusMute
		])) != null ? a : [
			!1,
			!1,
			!1
		], le = ie[0], se = ie[1], ue = ie[2], ce = s._(
			/*BTDS*/
			""
		), de = function() {
			o("WAWebHeaderInfoPanelActions").openInfoPanel({
				chat: u,
				profileEntryPoint: o("WAWebWamEnumProfileEntryPoint").PROFILE_ENTRY_POINT.CHAT_HEADER,
				threadId: v,
				uim: R
			});
		}, me = o("WAWebABProps").getABPropConfigValue("wds_web_profile_photo"), pe = o("WAWebHeaderStatus.react").useWAWebConversationHeaderStatus(u, te, ee, ue, B, me, de), _e = pe.activeStatusId, fe = pe.chatStatusRing, ge = pe.handleAvatarClick, he = pe.handleLegacyAvatarClick, ye = pe.newsletterStatus, Ce = pe.shouldUseStatusAvatarInteraction, be = pe.statusInteraction, ve = pe.userStatus, Se = o("useWAWebModelValues").useOptionalModelValues(Q, [
			"membershipType",
			"suspended",
			"terminated",
			"isSuspendedOrTerminated"
		]), Re = (V == null ? void 0 : V.hiddenSubgroup) === !0, Le = C(W, q), Ee = Le === "person" && $ != null ? o("WAWebInitialsFromNameUtils").getInitialsFromContact($) : {
			firstInitial: void 0,
			secondInitial: void 0
		}, ke = Ee.firstInitial, Ie = Ee.secondInitial, Te = Le === "person" ? [ke, Ie].filter(Boolean).join("") : void 0, De = o("WAWebHeaderBusinessState.react").useWAWebConversationHeaderBadge(u, Re), xe = o("useWAWebDefaultProfileColors").getProfilePhotoPlaceholderIcon(A), $e = _(null), Pe = f(!0), Ne = Pe[0], Me = Pe[1], we = o("WAWebDrawerManagerContext").useDrawerManagerContext("mid"), Ae = function(t) {
			var e = we.existsDrawer();
			e && (t == null || t.preventDefault());
		}, Fe = function(t) {
			t == null || t.preventDefault();
			var e = we.existsDrawer();
			e || o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
				descriptorType: "chat_search",
				chat: o("WAWebStateUtils").unproxy(u),
				threadId: v
			} : c.jsx(r("WAWebChatSearchDrawer.react"), {
				chat: o("WAWebStateUtils").unproxy(u),
				threadId: v
			}, "chat-search-" + A.toString()), {
				transition: "slide-left",
				uim: R,
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
			});
		}, Oe = function(t) {
			var e;
			t((e = T.current) == null ? void 0 : e.getBoundingClientRect());
		}, Be = r("useWAWebStaticButtonA11y")(de), We = Be[0], qe = Be[1];
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "get_conversation_header_offset", Oe), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "update_chatlist_selection", function() {
			return o("WAWebHeaderInfoPanelActions").closeInfoPanel();
		}), o("useWAWebListener").useListener(me ? u : null, "change:ephemeralDuration", E), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_current_chat_info", function() {
			o("WAWebHeaderInfoPanelActions").openInfoPanel({
				chat: u,
				profileEntryPoint: o("WAWebWamEnumProfileEntryPoint").PROFILE_ENTRY_POINT.CHAT_HEADER,
				threadId: v,
				uim: R
			});
		}), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "block_current_chat", function() {
			o("WAWebBlockContactUtils").handleBlock(u, o("WAWebBlockContants").BlockEntryPoint.OverflowMenuBlock);
		}), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "clear_current_chat_conversation_history", function() {
			o("WAWebCmd").Cmd.clearChat(u);
		}), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "exit_current_group", function() {
			q && o("WAWebConversationMenus").handleDeleteOrExitChat(u);
		});
		var Ue = !!J || Z, Ve = o("useWAWebModelValues").useModelValues(o("WAWebConnModel").Conn, ["pushname"]), He = Ve.pushname, Ge = f(null), ze = Ge[0], je = Ge[1];
		p(function() {
			if (o("WAWebChatAssignmentUtils").canAssignChat(u) && j != null) {
				var e = K ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					"",
					[s._param("agentName", j.name)]
				);
				je(e);
			} else je(null);
		}, [
			He,
			u,
			j,
			K,
			Y
		]);
		var Ke, Qe;
		if (B) Ke = c.jsx(r("WAWebContactMenuDropdown.react"), {
			chat: u,
			onSearchChat: Fe,
			onSelectMessages: d,
			enableChatThreadLogging: !0,
			threadId: v
		}), Qe = $ != null ? c.jsx(o("WAWebHeaderBusinessState.react").WAWebHeaderUserSubtitle, {
			assignmentSubtitle: ze,
			chatId: A,
			chatstate: O.chatstate,
			contact: $,
			location: "title",
			presence: O,
			threadId: v
		}) : null;
		else if (U) Ke = c.jsx(r("WAWebBroadcastMenuDropdown.react"), { chat: o("WAWebStateUtils").unproxy(u) }), Qe = c.jsx(r("WAWebBroadcastSubtitle.react"), { chat: u });
		else if (q) {
			var Xe = r("nullthrows")(V);
			Ke = c.jsx(r("WAWebGroupMenuDropdown.react"), {
				chat: o("WAWebStateUtils").unproxy(u),
				onSearchChat: Fe,
				onSelectMessages: d
			}), Xe.isSuspendedOrTerminated() ? Qe = null : !Xe.isUnnamed || ae.type === "typing" ? Qe = c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
				name: "group-subtitle",
				children: c.jsx(r("WAWebGroupSubtitle.react"), {
					chatstate: O.chatstate,
					groupMetadata: Xe,
					presence: O,
					placeholder: o("WAWebHeaderSubtitlePlaceholder").getSubtitlePlaceholder(u),
					location: "title",
					assignmentSubtitle: ze,
					chatId: A
				})
			}) : Qe = null;
		} else W && (Ke = c.jsx(r("WAWebNewsletterChatMenuDropdown.react"), {
			chat: u,
			onSelectMessages: d
		}), Qe = (Se == null ? void 0 : Se.suspended) === !0 ? null : c.jsx(r("WAWebNewsletterChatHeaderSubtitle.react"), { newsletterMetadata: Se }));
		var Ye = null, Je = $ != null ? o("WAWebShouldShowCallButtons").getCallButtonsState(u) : y, Ze = Je.shouldDisableStartCall, et = Je.shouldShow;
		et && (Ye = c.jsx(o("WAWebVoipCallButtonsLoadable").WAWebCallButtonsLoadable, {
			callFromUI: q ? o("WAWebWamEnumCallFromUi").CALL_FROM_UI.GROUP_CHAT_DIRECT : o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CONVERSATION,
			lobbyEntryPoint: o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED,
			surface: o("WAWebCallButtonsSurface").WAWebCallButtonsSurface.ChatHeader,
			chat: u,
			isStartCallDisabled: Ze || Z
		}));
		var tt = (V == null ? void 0 : V.parentGroup) != null && V.participants.iAmMember(), nt = tt ? c.jsx(r("WAWebSubgroupSwitcherButton.react"), { chat: u }) : null, rt;
		W === !1 && o("WAWebChatGroupUtils").isSuspendedGroup(u) === !1 && (rt = c.jsx(r("WDSMenuBarItem.react"), {
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
			testid: "search-button",
			icon: r("WDSIconIcSearch.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onClick: Fe,
			marginInlineXstyle: h.buttonMargin,
			disabled: Ue
		})), H && (Qe = $ != null ? c.jsx(o("WAWebHeaderBusinessState.react").WAWebHeaderUserSubtitle, {
			chatId: A,
			chatstate: O.chatstate,
			contact: $,
			location: "title",
			presence: O
		}) : null);
		var ot;
		Ne && (ot = c.jsx(r("WAWebChatAssignmentNux.react"), {
			targetRef: x,
			chat: u
		}));
		var at = c.jsx(r("WDSMenuBarItem.react"), {
			ref: x,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
			icon: r("WDSIconIcMoreVert.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onClick: function(t) {
				Me(!1), Ae(t);
			},
			testid: "conversation-menu-button",
			wdsMenuToRender: Ke,
			menuAlign: "end",
			disabled: Ue
		}), it = (!o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() || !se) && o("WAWebMmSignalSharingUserDisclosedInCollectionWindow").isMmSignalSharingUserDisclosedInCollectionWindow(X) ? c.jsx(o("WAWebSingleChevronInCircleIcon.react").SingleChevronInCircleIcon, { iconXstyle: h.chevronInCircleIcon }) : null;
		return c.jsxs("header", babelHelpers.extends({ ref: T }, (e || (e = r("stylex"))).props(h.chatHeader, r("WAWebConversationPanelStyleUtils").sharedLayer, g.paddingBlock10, o("WDSPaddings.stylex").wdsPaddings.paddingHor16, oe && h.chatHeaderDarkOverride, h.chatHeaderMaterial, h.chatHeaderStylesOverride, r("WAWebConversationPanelStyleUtils").sharedShadow), {
			"data-testid": "conversation-header",
			children: [
				c.jsx(o("WAWebHeaderBusinessState.react").WAWebHeaderBusinessProfileSync, { contact: $ }),
				I && c.jsx(o("WAWebMenuBar.react").MenuBar, { children: c.jsx(r("WDSMenuBarItem.react"), {
					tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
					testid: "conversation-back-button",
					icon: r("WDSIconIcArrowBack.react"),
					title: s._(
						/*BTDS*/
						""
					),
					onClick: function() {
						return o("WAWebCmd").Cmd.closeActiveChat();
					},
					marginInlineXstyle: h.backButtonMargin
				}) }, "conversation-header-back"),
				c.jsx(r("WAWebPrivacyBlurWrapper.react"), {
					containerRef: D,
					children: c.jsxs("div", {
						ref: D,
						className: "x78zum5 x6s0dn4 x1iyjqo2 x1r8uery xeuugli x101abm8 x1s73dr8 xbzw7fd",
						children: [me ? c.jsx("div", {
							className: "x1n2onr6 x1c4vz4f x2lah0s xdl72j9 x1n1b19v x78zum5 xdj266r",
							"aria-label": Ce ? void 0 : ce,
							onClick: Ce ? void 0 : ge,
							title: Ce ? void 0 : ce,
							role: Ce || H ? null : "button",
							children: c.jsx(r("WAWebGroupChatImage.react"), {
								chat: u,
								theme: o("WAWebStackedCirclesImage.react").SubgroupImageTheme.CHAT_HEADER,
								regularChatImage: c.jsxs(c.Fragment, { children: [c.jsx(S, {
									badge: De,
									chatAvatarType: Le,
									colorId: A,
									initials: Te,
									name: Le === "person" && $ != null ? o("WAWebFrontendContactGetters").getFormattedName($) : F,
									placeholderIcon: xe,
									statusId: _e,
									statusInteraction: be,
									statusRing: fe,
									videoUrl: L
								}), it] }),
								showCommunityInfo: !0
							})
						}) : c.jsx("div", {
							className: "x1n2onr6 x1c4vz4f x2lah0s xdl72j9 x1n1b19v x1y332i5",
							onClick: he,
							title: s._(
								/*BTDS*/
								""
							),
							role: H ? null : "button",
							children: c.jsx(r("WAWebGroupChatImage.react"), {
								chat: u,
								theme: o("WAWebStackedCirclesImage.react").SubgroupImageTheme.CHAT_HEADER,
								regularChatImage: c.jsxs(c.Fragment, { children: [
									!ue && (ye != null || ve != null) && c.jsx(o("WAWebStatusImageRing.react").StatusImageRing, {
										id: ve != null ? ve.id : u.id,
										size: 48,
										stroke: 4,
										theme: o("WAWebStatusImageRing.react").RingTheme.StatusPanel,
										respectAppTheme: !0,
										breakRing: !1,
										hideWhenNoUnreadStatuses: !1
									}),
									c.jsx(o("WAWebDetailImage.react").DetailImage, {
										id: A,
										size: 40,
										ephemeralIcon: "conversation-header",
										hiddenSubgroupIcon: "conversation-header",
										aiGroupIcon: "conversation-header",
										enableAdsDataSharingIcon: !0,
										enableBizAiDataSharingIcon: !0,
										videoUrl: L
									}),
									it
								] }),
								showCommunityInfo: !0
							})
						}), c.jsxs("div", babelHelpers.extends({}, e.props(h.chatBody, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus), qe, {
							ref: We,
							"data-testid": "conversation-info-header",
							"data-tab": o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
							children: [c.jsx("div", {
								className: "x78zum5 x1cy8zhl x1y332i5 xggjnk3 x1yc453h",
								children: c.jsx("div", babelHelpers.extends({}, {
									0: { className: "x78zum5 x1q0g3np x1iyjqo2 x6ikm8r x10wlt62 x1jchvi3 x1fcty0u xdod15v x14ug900 x1yc453h xlyipyv xuxw1ft xh8yej3" },
									2: { className: "x78zum5 x1q0g3np x1iyjqo2 x6ikm8r x10wlt62 x1jchvi3 xdod15v x14ug900 x1yc453h xlyipyv xuxw1ft xh8yej3 x1s688f" },
									1: { className: "x78zum5 x1q0g3np x6ikm8r x10wlt62 x1jchvi3 x1fcty0u xdod15v x14ug900 x1yc453h xlyipyv xuxw1ft xh8yej3 x1c4vz4f x2lah0s xdl72j9" },
									3: { className: "x78zum5 x1q0g3np x6ikm8r x10wlt62 x1jchvi3 xdod15v x14ug900 x1yc453h xlyipyv xuxw1ft xh8yej3 x1s688f x1c4vz4f x2lah0s xdl72j9" }
								}[!!oe << 1 | !!o("WAWebStylesEnv").hasEmoji << 0], { children: c.jsx(o("WAWebHeaderBusinessState.react").WAWebHeaderChatTitle, { chat: u }) }))
							}), Qe]
						}))]
					})
				}),
				c.jsx("div", {
					className: "x1c4vz4f x2lah0s xdl72j9 xeuugli x6ikm8r x10wlt62 xlese2p",
					children: c.jsxs(o("WAWebMenuBar.react").MenuBar, { children: [
						nt,
						!o("WAWebMobilePlatforms").isSMB() && Ye,
						$ != null && c.jsx(r("WAWebCommerceButton.react"), {
							chat: u,
							disabled: Ue
						}),
						o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() && c.jsx(n("cr:7940"), { chat: u }),
						c.jsx(o("WAWebHeaderLabelRendering").WAWebHeaderLabelButton, { chat: u }),
						U && c.jsx(r("WAWebNewBroadcastHeaderButton.react"), { chat: u }),
						o("WAWebMobilePlatforms").isSMB() && Ye,
						rt,
						Ke != null && c.jsx("div", {
							className: "x1n2onr6 x150mmf0",
							ref: $e,
							children: at
						})
					] }, "conversation-header")
				}),
				ot,
				(B && !le || o("WAWebBotUtils").isHatchBot(A) && o("WAWebHatchFrontendGating").isHatchIntegrationEnabled()) && c.jsx(r("WAWebChatHeaderTextStatusBubble.react"), {
					chat: u,
					contactId: A,
					selectable: b
				})
			]
		}));
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t = e.boundaryName, n = e.error, r = e.handleClick;
		return c.jsx("div", {
			className: "xh8yej3 x185czh x2lah0s",
			"data-testid": "conversation-header-error-fallback"
		});
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(e) {
		var t = e.chat, n = e.onSelectMessages, r = e.selectable, a = e.threadId, i = o("useWAWebChatValues").useChatValues(t.id, [o("WAWebFrontendChatGetters").getContact]), l = i[0];
		return c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "conversation-header",
			fallback: L,
			description: "ConversationHeader render error — possibly a transiently-null chat.contact during LID migration (T275446469)",
			children: c.jsx(R, {
				chat: t,
				onSelectMessages: n,
				selectable: r,
				threadId: a
			})
		}, l != null ? "has-contact" : "no-contact");
	}
	E.displayName = E.name + " [from " + i.id + "]", l.createLabelsDropdownMenu = o("WAWebHeaderLabelRendering").createLabelsDropdownMenu, l.isCommunityRelatedChat = o("WAWebHeaderLabelRendering").isCommunityRelatedChat, l.openInfoPanel = o("WAWebHeaderInfoPanelActions").openInfoPanel, l.ConversationHeader = R, l.ConversationHeaderWithErrorBoundary = E;
}), 226);
