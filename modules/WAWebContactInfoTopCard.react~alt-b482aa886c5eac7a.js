__d("WAWebContactInfoTopCard.react", [
	"fbt",
	"WALogger",
	"WAWebABProps",
	"WAWebApiContact",
	"WAWebBizAiAgentStatusUtils",
	"WAWebBizCoexGatingUtils",
	"WAWebBotFrontendUtils",
	"WAWebBotGating",
	"WAWebBotGroupGatingUtils",
	"WAWebBotUtils",
	"WAWebCallCollection",
	"WAWebChatCollection",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebComposeBoxActions",
	"WAWebContactCollection",
	"WAWebContactGetters",
	"WAWebContactInfoNotes.react",
	"WAWebContactInfoPhoneNumberHidden.react",
	"WAWebContactManagementGating",
	"WAWebContactManagerGating",
	"WAWebContactUtils",
	"WAWebCopyPasteSelectable.react",
	"WAWebDetailImage.react",
	"WAWebDrawerSection.react",
	"WAWebEnvironment",
	"WAWebFbtCommon",
	"WAWebFindChatAction",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebInitialsFromNameUtils",
	"WAWebLabelsInfoDrawerLabelWell.react",
	"WAWebLidMigrationUtils",
	"WAWebListsLabelGatingUtils",
	"WAWebMemberLabelContactInfo.react",
	"WAWebModalManager",
	"WAWebName.react",
	"WAWebNotesUtils",
	"WAWebProfilePicThumbCollection",
	"WAWebRequestPhoneNumberModal.react",
	"WAWebStatusCollection",
	"WAWebStatusGatingUtils",
	"WAWebStatusImageRing.react",
	"WAWebStatusQuotedFlowLoadable",
	"WAWebStreamModel",
	"WAWebTeeLockBadge.react",
	"WAWebText.react",
	"WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
	"WAWebUsernameExposedWamEvent",
	"WAWebUsernameGatingUtils",
	"WAWebUsernameTypes",
	"WAWebUsernameWorkerCompatibleGatingUtils",
	"WAWebVoipStartCall",
	"WAWebWamEnumCallFromUi",
	"WAWebWamEnumLobbyEntryPointType",
	"WAWebWamEnumOppositeVisibleIdentificationType",
	"WAWebWamEnumPnhEntryPointType",
	"WAWebWamEnumStatusRowSection",
	"WAWebWid",
	"WAWebWidFactory",
	"WAWebWidFormat",
	"WDSActionTile.react",
	"WDSActionTileGroup.react",
	"WDSFocusStateStyles",
	"WDSIconIcCall.react",
	"WDSIconIcDialpad.react",
	"WDSIconIcPersonAdd.react",
	"WDSIconIcSearch.react",
	"WDSIconIcVideocam.react",
	"WDSIconWdsIcChat.react",
	"WDSMargins.stylex",
	"WDSProfilePhoto.react",
	"WDSTooltip.react",
	"asyncToGeneratorRuntime",
	"isStringNullOrEmpty",
	"react",
	"useWAWebContactValues",
	"useWAWebDefaultProfileColors",
	"useWAWebEventTargetValue",
	"useWAWebListener",
	"useWAWebModelValues",
	"useWAWebVideoAvatarUrl",
	"useWAWebVoipIsCallingEnabledAndInited"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useRef, f = m.useState;
	function g(e) {
		var t = e.contact, n = e.displayRequestPhoneNumber, a = e.isMessageYourselfChat, i = e.onContactInfoAction, l = e.onDetailImageClick, u = e.onDetailImageLoad, c = e.onOpenChatTabInContactManager, m = e.onSaveContact, _ = e.onSearchMsgs, g = e.sourceChat, y = r("useWAWebVideoAvatarUrl")(t.id), C = o("useWAWebContactValues").useContactValues(t.id, [o("WAWebFrontendContactGetters").getPhoneNumber, o("WAWebContactGetters").getShowBusinessCheckmarkAsPrimary]), S = C[0], R = C[1], L = S != null ? o("WAWebContactCollection").ContactCollection.get(S) : null, E = v({
			contact: t,
			phoneNumberContact: L
		}), k = E.title, I = E.type, T = o("WAWebContactGetters").getIsAiHub(t);
		p(function() {
			!T && k != null && I === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.USERNAME && new (o("WAWebUsernameExposedWamEvent")).UsernameExposedWamEvent({ usernameExposureContext: "contact_info_subtitle" }).commit();
		}, [
			T,
			k,
			I
		]);
		var D = o("WAWebNotesUtils").shouldEnableNotesForWid(t == null ? void 0 : t.id) && !(o("WAWebContactManagerGating").contactManagerEnabled() && o("WAWebContactManagerGating").isEligibleForCustomerFields(t)) ? d.jsx(r("WAWebContactInfoNotes.react"), { contact: t }) : null, x = o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled() && o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(t.id), $ = t.id.isUser(), P = o("useWAWebContactValues").useContactValues(t.id, [o("WAWebContactGetters").getCalculatedStatusMute]), N = P[0], M = function() {
			if (!$ || x || !o("WAWebStatusGatingUtils").isStatusRingOutsideChatlistEnabled()) return null;
			var e = o("WAWebStatusCollection").StatusCollection.get(t.id);
			if (e != null) return e;
			if (t.id.isRegularUser()) {
				var n = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(t.id));
				if (n != null) {
					var r;
					return (r = o("WAWebStatusCollection").StatusCollection.get(n)) != null ? r : null;
				}
			}
			return null;
		}, w = f(M), A = w[0], F = w[1];
		o("useWAWebListener").useListener($ && !x ? o("WAWebStatusCollection").StatusCollection : null, [
			"add",
			"remove",
			"change:msgsChanged"
		], function() {
			return F(M());
		});
		var O = A != null && !N, B = d.jsx(o("WAWebName.react").Name, {
			testid: "contact-info-subtitle",
			contact: t,
			showBusinessCheckmark: R,
			showMessageYourselfName: a,
			useLiftMeUp: !1,
			selectable: !0,
			breakWord: !0,
			checkmarkLarge: !0,
			unknownUserLogContext: "contact_info"
		}), W = s._(
			/*BTDS*/
			""
		), q = T ? o("WAWebBizAiAgentStatusUtils").getAiHubSubtitle() : k, U = o("WAWebABProps").getABPropConfigValue("wds_web_profile_photo"), V;
		U ? V = d.jsx(h, {
			contact: t,
			isMetaAiTEEBot: x,
			isStatusHidden: N,
			onDetailImageClick: l,
			userStatus: A,
			videoSrc: y,
			viewPhotoLabel: W
		}) : V = d.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: t.id,
			size: o("WAWebDetailImage.react").DetailImageSize.Refresh,
			loader: !0,
			onLoad: u,
			onClick: x ? void 0 : l,
			quality: o("WAWebDetailImage.react").DetailImageQuality.High,
			tabIndex: x ? void 0 : 0,
			xstyle: x ? void 0 : o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
			ariaLabel: x ? void 0 : W,
			videoUrl: y
		});
		var H = n && !T && !o("WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration").hasPhoneNumberHidingThreadPromotionMigrationStarted(), G = !x && !U ? d.jsx(r("WDSTooltip.react"), {
			label: W,
			children: V
		}) : V, z = function() {
			return x ? d.jsx(r("WAWebTeeLockBadge.react"), {
				size: "large",
				children: G
			}) : O && !U ? d.jsxs("div", {
				className: "x1n2onr6 x1rg5ohu",
				children: [d.jsx("div", {
					className: "x10l6tqk x47corl x1fur4o1 xanzm1z",
					children: d.jsx(o("WAWebStatusImageRing.react").StatusImageRing, {
						id: t.id,
						size: 148,
						stroke: 4,
						theme: o("WAWebStatusImageRing.react").RingTheme.UpdatesTab,
						respectAppTheme: !0,
						breakRing: !1,
						hideWhenNoUnreadStatuses: !1
					})
				}), G]
			}) : G;
		};
		return d.jsxs(r("WAWebDrawerSection.react"), {
			theme: "refresh-new",
			children: [
				d.jsx("div", {
					className: "x78zum5 xl56j7k xyorhqc",
					children: z()
				}),
				d.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "center",
					children: [
						d.jsx(o("WAWebText.react").WAWebTextLargeRefreshed, { children: B }),
						!t.id.isBot() && q != null && d.jsx("div", {
							className: "x1evy7pa x1anpbxc",
							children: d.jsx(o("WAWebCopyPasteSelectable.react").SelectableSpan, {
								dir: "auto",
								selectable: !0,
								children: d.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
									color: "wdsContentDeemphasized",
									children: q
								})
							})
						}),
						d.jsx(o("WAWebMemberLabelContactInfo.react").MemberLabelContactInfo, {
							contact: t,
							chat: g
						})
					]
				}),
				H && d.jsx(r("WAWebContactInfoPhoneNumberHidden.react"), {}),
				!a && !o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(t.id) && d.jsx(b, {
					contact: t,
					displayRequestPnButton: H,
					onContactInfoAction: i,
					onSaveContact: m,
					onSearchMsgs: _,
					onOpenChatTabInContactManager: c
				}),
				o("WAWebListsLabelGatingUtils").canDisplayLabel() && !(o("WAWebContactManagerGating").contactManagerEnabled() && o("WAWebContactManagerGating").isEligibleForCustomerFields(t)) && d.jsx(r("WAWebLabelsInfoDrawerLabelWell.react"), { labels: t.labels }),
				D
			]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t, n, a = e.contact, i = e.isMetaAiTEEBot, l = e.isStatusHidden, u = e.onDetailImageClick, c = e.userStatus, m = e.videoSrc, p = e.viewPhotoLabel, f = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(a.id), g = o("useWAWebModelValues").useOptionalModelValues(f, ["img", "imgFull"]), h = g == null ? void 0 : g.imgFull, y = h != null ? h : g == null ? void 0 : g.img, C = r("WAWebWid").isPSA(a.id), b = !i && (C || !r("isStringNullOrEmpty")(h)), v = c != null && !l, S = (t = c == null ? void 0 : c.unreadCount) != null ? t : 0, R = (n = c == null ? void 0 : c.totalCount) != null ? n : 0, L = v && R > 0 ? {
			totalCount: R,
			viewedCount: R - S
		} : void 0, E = o("WAWebInitialsFromNameUtils").getInitialsFromContact(a), k = [E.firstInitial, E.secondInitial].filter(Boolean).join(""), I = _(null), T = s._(
			/*BTDS*/
			""
		), D;
		return L != null && c != null ? D = {
			label: T,
			onPress: function() {
				o("WAWebModalManager").ModalManager.openMedia(d.jsx(o("WAWebStatusQuotedFlowLoadable").StatusQuotedFlowLoadable, {
					status: c,
					onClose: function() {
						return o("WAWebModalManager").ModalManager.closeMedia();
					},
					rowSection: o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.CHAT_TOP_BAR,
					rowIndex: 0
				}), { transition: "status-modal" });
			},
			type: "viewStatus"
		} : b && (D = {
			label: p,
			onPress: function() {
				return u(void 0, I.current);
			},
			type: "viewPhoto"
		}), d.jsx("div", {
			ref: I,
			children: d.jsx(r("WDSProfilePhoto.react"), {
				type: "person",
				name: o("WAWebFrontendContactGetters").getFormattedName(a),
				src: y,
				videoSrc: m,
				size: "xxLarge",
				color: o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(a.id),
				customColor: o("useWAWebDefaultProfileColors").getWDSProfilePhotoCustomColor(a.id),
				placeholderIcon: o("useWAWebDefaultProfileColors").getProfilePhotoPlaceholderIcon(a.id),
				isDecorative: !0,
				initials: k,
				interaction: D,
				statusRing: L
			})
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		return C.apply(this, arguments);
	}
	function C() {
		return C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			try {
				var t = yield o("WAWebFindChatAction").findOrCreateLatestChat(e, "chatInfoTopCard"), n = t.chat;
				if (o("WAWebBotUtils").isMetaAiBot(e) && o("WAWebBotGating").isAiChatThreadsEnabled()) o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(n, { type: "MetaAiContactInfo" });
				else {
					var r = yield o("WAWebCmd").Cmd.openChatFromUnread({
						chat: n,
						chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.ContactInfo
					});
					r && o("WAWebComposeBoxActions").ComposeBoxActions.focus(n);
				}
			} catch (e) {
				e instanceof Error && o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Failed to open chat from contact info"]))).catching(e).sendLogs("contact-info-start-chat-fail");
			}
		}), C.apply(this, arguments);
	}
	function b(t) {
		var n = t.contact, a = t.displayRequestPnButton, i = t.onContactInfoAction, l = t.onOpenChatTabInContactManager, u = t.onSaveContact, c = t.onSearchMsgs, m = o("useWAWebVoipIsCallingEnabledAndInited").useWAWebVoipIsCallingEnabledAndInited(), p = m.inited, _ = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), "change:activeCall", function() {
			return r("WAWebCallCollection").activeCall != null;
		}), f = function() {
			if (l != null) {
				l();
				return;
			}
			i == null || i("message"), y(n.id);
		}, g = [], h = o("WAWebContactGetters").getIsAiHub(n), C = o("WAWebChatCollection").ChatCollection.getActive(), b = !h && (l != null || !(C != null && C.id.equals(n.id)));
		b && g.push({
			wdsIcon: r("WDSIconWdsIcChat.react"),
			onClick: f,
			testid: "chat_info_message_action_tile",
			title: s._(
				/*BTDS*/
				""
			),
			disabled: !1
		});
		var v = (r("WAWebEnvironment").isWindows || p) && !o("WAWebFrontendContactGetters").getIsContactBlocked(n) && !n.id.isBot() && !h && !r("WAWebWid").isPSA(n.id) && o("WAWebStreamModel").Stream.displayInfo === o("WAWebStreamModel").StreamInfo.NORMAL && !o("WAWebBizCoexGatingUtils").isCallingDisabledOnAuthAgentSoftOffboarded();
		if (v) {
			var S = s._(
				/*BTDS*/
				""
			), R = s._(
				/*BTDS*/
				""
			), L = _ ? s._(
				/*BTDS*/
				""
			) : void 0, E = function(r) {
				i == null || i(r ? "video_call" : "audio_call"), o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: contact info: start 1:1 call, isVideo: ", ""])), r), o("WAWebVoipStartCall").startWAWebVoipCall(n.id, r, o("WAWebWamEnumCallFromUi").CALL_FROM_UI.CONTACT_INFO, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED);
			};
			g.push({
				wdsIcon: r("WDSIconIcCall.react"),
				onClick: function() {
					return E(!1);
				},
				testid: "chat_info_voice_call_action_tile",
				title: S,
				disabled: _,
				tooltip: L
			}), g.push({
				wdsIcon: r("WDSIconIcVideocam.react"),
				onClick: function() {
					return E(!0);
				},
				testid: "chat_info_video_call_action_tile",
				title: R,
				disabled: _,
				tooltip: L
			});
		}
		if (a) {
			var k = s._(
				/*BTDS*/
				""
			), I = s._(
				/*BTDS*/
				""
			), T = o("WAWebContactGetters").getCanRequestPhoneNumber(n) ? k : I;
			g.push({
				wdsIcon: r("WDSIconIcDialpad.react"),
				onClick: function() {
					o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebRequestPhoneNumberModal.react"), { entryPoint: o("WAWebWamEnumPnhEntryPointType").PNH_ENTRY_POINT_TYPE.CHAT_INFO_REQUEST }));
				},
				testid: "chat_info_request_phone_number_action_tile",
				title: T,
				disabled: !o("WAWebContactGetters").getCanRequestPhoneNumber(n)
			});
		}
		var D = o("WAWebLidMigrationUtils").toPn(n.id) != null, x = o("WAWebLidMigrationUtils").toLid(n.id) != null && o("WAWebUsernameTypes").isPresentUsername(n.username), $ = o("WAWebContactUtils").canSaveAsMyContact(n.id) && !o("WAWebFrontendContactGetters").getIsMyContact(n) && (D || x && o("WAWebUsernameWorkerCompatibleGatingUtils").usernameContactUIEnabled()) && o("WAWebContactManagementGating").contactManagementEnabled();
		$ && g.push({
			wdsIcon: r("WDSIconIcPersonAdd.react"),
			onClick: u,
			testid: "chat_info_add_contact_action_tile",
			title: r("WAWebFbtCommon")("Add"),
			ariaLabel: s._(
				/*BTDS*/
				""
			),
			disabled: !1
		}), b || g.push({
			wdsIcon: r("WDSIconIcSearch.react"),
			onClick: c,
			title: s._(
				/*BTDS*/
				""
			),
			testid: "chat_info_search_action_tile"
		});
		var P, N = g.map(function(e, t) {
			var n = e.disabled, o = e.onClick, a = e.testid, i = e.title, l = e.tooltip, s = e.wdsIcon;
			return d.jsx(r("WDSActionTile.react"), {
				Icon: s,
				onPress: o,
				label: i,
				testid: a,
				disabled: n,
				tooltip: l
			}, t);
		});
		return g.length >= 2 && g.length <= 5 ? P = d.jsx(r("WDSActionTileGroup.react"), { children: N }) : P = d.jsx("div", {
			className: "x78zum5 xh8yej3 x9f619 xl56j7k x1s70e7g xdx6fka xvtqlqk",
			children: N
		}), d.jsx(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			xstyle: [o("WDSMargins.stylex").wdsMargins.marginTop8, o("WDSMargins.stylex").wdsMargins.marginBottom4],
			children: P
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.contact, n = e.phoneNumberContact;
		if (r("WAWebWid").isPSA(t.id)) {
			var a = s._(
				/*BTDS*/
				""
			);
			return {
				title: a,
				type: o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.VERIFIED_BUSINESS_NAME
			};
		}
		if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
			var i = o("WAWebFrontendContactGetters").getFormattedUserAndType(t);
			e: {
				if (i.type === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER || i.type === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.MASKED_PHONE_NUMBER || i.type === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.USERNAME) break e;
				{
					var l = o("WAWebFrontendContactGetters").getFormattedUsernameOrPhoneAndType(t), u = l.displayName, c = l.type;
					return u === t.name ? {
						title: null,
						type: null
					} : {
						title: u,
						type: c
					};
				}
			}
		} else {
			if (!t.id.isLid() && o("WAWebFrontendContactGetters").getIsMyContact(t)) return {
				title: o("WAWebWidFormat").widToFormattedUser(t.id),
				type: o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER
			};
			if (t.id.isLid() && n != null && o("WAWebFrontendContactGetters").getIsMyContact(n)) return {
				title: o("WAWebWidFormat").widToFormattedUser(n.id),
				type: o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER
			};
		}
		var d = o("WAWebContactGetters").getNotifyName(t);
		return d != null ? {
			title: "~" + d,
			type: o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PUSHNAME
		} : {
			title: null,
			type: null
		};
	}
	l.default = g;
}), 226);
