__d("WAWebInfoFlow.react", [
	"fbt",
	"WAAbortError",
	"WAJids",
	"WALogger",
	"WAPromiseRaceAbort",
	"WAWebABProps",
	"WAWebBizBroadcastCreationQPLLogger",
	"WAWebBizBroadcastNewBroadcastFlowLoadable",
	"WAWebBizBroadcastsUpsertAudienceScreenLoadable",
	"WAWebBizShowCartAction",
	"WAWebBroadcastInfoDrawer.react",
	"WAWebChatGetters",
	"WAWebChatGroupUtils",
	"WAWebChatNotificationSettingsDrawer.react",
	"WAWebChatSearchDrawer.react",
	"WAWebChatThemeDrawer.react",
	"WAWebCmd",
	"WAWebCommunityFlowLoadable",
	"WAWebCommunityFlowStep",
	"WAWebCommunityHomeWrapper.react",
	"WAWebCommunityTabbedInfoDrawer.react",
	"WAWebConfirmPopup.react",
	"WAWebContactEditDrawer.react",
	"WAWebContactInfoDrawer.react",
	"WAWebContactLogging",
	"WAWebContactUtils",
	"WAWebDefaultEphemeralityDrawer.react",
	"WAWebDrawerContext",
	"WAWebDrawerManager",
	"WAWebDrawerManagerGlobalContext",
	"WAWebEnvironment",
	"WAWebEphemeralDrawer.react",
	"WAWebEphemeralKicNux.react",
	"WAWebEventInfoFlowLoadable",
	"WAWebEventsInChatDrawer.react",
	"WAWebExistingGroupPermissionsDrawer.react",
	"WAWebFbtCommon",
	"WAWebFrontendChatGetters",
	"WAWebGroupInfoDrawer.react",
	"WAWebGroupInviteLinkDrawerLoadable",
	"WAWebGroupInviteUtils.react",
	"WAWebGroupMemberUpdatesLogger",
	"WAWebGroupMemberUpdatesPanel.react",
	"WAWebGroupMembershipApprovalRequestsFlow.react",
	"WAWebGroupQueryJob",
	"WAWebInfoFlowStep",
	"WAWebKeptDrawer.react",
	"WAWebLimitSharingDrawer.react",
	"WAWebMediaGalleryDrawer.react",
	"WAWebModalManager",
	"WAWebNameGroupModal.react",
	"WAWebNativeContactsNuxPopup.react",
	"WAWebNewsletterAdminFunnelLogging",
	"WAWebNewsletterAdminNotificationsDrawerLoadable",
	"WAWebNewsletterCommonGatingUtils",
	"WAWebNewsletterDeleteDrawer.react",
	"WAWebNewsletterEnforcementAlertFlowLoadable",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterInfoDrawer.react",
	"WAWebNewsletterInsightsDrawerLoadable",
	"WAWebNewsletterLinkDrawer.react",
	"WAWebNewsletterProducerInsightsLogger",
	"WAWebNewsletterSettingsDrawer.react",
	"WAWebNewsletterTransferOwnershipDrawer.react",
	"WAWebNewsletterTransferOwnershipSelectionDrawer.react",
	"WAWebNoop",
	"WAWebNotifyForDrawerLoadable",
	"WAWebNux",
	"WAWebProductCatalogCatalogLinkDrawer.react",
	"WAWebProductCatalogContext",
	"WAWebProductCatalogLogEvents",
	"WAWebProductCatalogProductDetailsDrawer.react",
	"WAWebProductCatalogProductLinkDrawer.react",
	"WAWebProductCatalogProductListDrawer.react",
	"WAWebProductCatalogProductMoreInformationDrawer.react",
	"WAWebProductCatalogSession",
	"WAWebProductCollectionCatalogViewDrawer.react",
	"WAWebProductCollectionCollectionContentDrawer.react",
	"WAWebQueryAndUpdateNewslettersMetadataAction",
	"WAWebScheduledMessagesListLoadable",
	"WAWebSentForAdminReviewFlow.react",
	"WAWebSetSubjectGroupAction",
	"WAWebStarredDrawerLoadable",
	"WAWebStarredMsgsUtils",
	"WAWebStateUtils",
	"WAWebUim",
	"WAWebUnscheduleMsgAction",
	"WAWebUserPrefsNuxPreferences",
	"WAWebUtilsLogQplEvents",
	"WAWebVerificationDrawerLoadable",
	"WAWebWallpaperDrawer.react",
	"WAWebWamEnumAdminFlowType",
	"WAWebWamEnumCatalogEntryPoint",
	"WAWebWamEnumChannelLinkShareEntryPoint",
	"WAWebWamEnumDisappearingModeEntryPointType",
	"WAWebWamEnumEntryPoint",
	"WAWebWamEnumEphemeralSettingEntryPointType",
	"WAWebWamEnumGroupMemberUpdatesActionName",
	"err",
	"nullthrows",
	"react",
	"useWAWebChatValues",
	"useWAWebFlow",
	"useWAWebStableCallback",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = ["ref"], c, d = c || (c = o("react")), m = c, p = m.useContext, _ = m.useEffect, f = m.useMemo, g = m.useRef, h = m.useState, y = function(t) {
		var e;
		if (o("WAWebChatGetters").getIsGroup(t)) return o("WAWebInfoFlowStep").InfoFlowStep.GroupInfo;
		if (o("WAWebChatGetters").getIsBroadcast(t)) return o("WAWebInfoFlowStep").InfoFlowStep.BroadcastInfo;
		if (o("WAWebChatGetters").getIsUser(t)) return o("WAWebInfoFlowStep").InfoFlowStep.ContactInfo;
		if (o("WAWebChatGetters").getIsNewsletter(t)) return o("WAWebInfoFlowStep").InfoFlowStep.NewsletterInfo;
		var n = (e = o("WAWebFrontendChatGetters").getKind(t)) != null ? e : "undefined";
		throw r("err")("Invalid chat provided of kind " + n);
	};
	function C(t) {
		var n, a, i, l, c, m, C = t.ref, b = babelHelpers.objectWithoutPropertiesLoose(t, u), v = b.chat, S = b.initialStep, R = S === void 0 ? y(v) : S, L = b.initialSubStep, E = b.showFullGroupDescription, k = b.scrollToParticipantList, I = b.profileEntryPoint, T = b.onBack, D = b.onEnd, x = b.displayName, $ = b.sourceGroupChatOrNewsletter, P = b.focusNewsletterDescriptionOnMount, N = b.focusGroupSubjectOnMount, M = b.focusGroupDescriptionOnMount, w = b.newsletterLinkShareScreenEntryPoint, A = b.threadId, F = b.contactProp, O = b.showChatTabInContactInfoDrawer, B = b.initialContactInfoTab, W = g(0), q = r("useWAWebStableCallback")(function(e) {
			W.current = e;
		}), U = g(void 0), V = p(o("WAWebDrawerContext").DrawerContext), H = f(function() {
			return new (o("WAWebNewsletterProducerInsightsLogger")).NewsletterProducerInsightsLogger({ wid: v.id });
		}, [v.id]), G = o("useWAWebFlow").useFlow(R, {
			transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
			onEnd: D,
			initialStack: L != null ? [R, L] : void 0
		}), z = G[0], j = G[1], K = f(function() {
			return new (o("WAWebNewsletterAdminFunnelLogging")).NewsletterAdminFunnelLogger(o("WAWebWamEnumAdminFlowType").ADMIN_FLOW_TYPE.EDIT);
		}, []), Q = g(w), X = g("reach"), Y = g(null), J = g(null), Z = h(null), ee = Z[0], te = Z[1], ne = h(void 0), re = ne[0], oe = ne[1], ae = h(null), ie = ae[0], le = ae[1], se = h(null), ue = se[0], ce = se[1], de = h(F != null ? F : null), me = de[0], pe = de[1], _e = h(null), fe = _e[0], ge = _e[1], he = h(null), ye = he[0], Ce = he[1], be = h(null), ve = be[0], Se = be[1], Re = h(null), Le = Re[0], Ee = Re[1], ke = h(null), Ie = ke[0], Te = ke[1], De = g(), xe = h(!1), $e = xe[0], Pe = xe[1], Ne = o("useWAWebChatValues").useChatValues(v.id, [o("WAWebChatGetters").getIsUser]), Me = Ne[0];
		_(function() {
			var e;
			if (o("WAWebChatGetters").getIsGroup(v) && (e = v.groupMetadata) != null && e.hasJoined()) o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
				id: v.id,
				request: "enter_group_info"
			});
			else if (Me) {
				if (v.contact.isBusiness) {
					var t;
					(t = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("right")) == null || t.updateContext(o("WAWebProductCatalogContext").buildProductCatalogContext(new (o("WAWebProductCatalogSession")).ProductCatalogSession(), o("WAWebContactUtils").getMaybeBizPlatformForLogging(v.contact.id.toString()), o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE));
				}
			} else if (o("WAWebChatGetters").getIsNewsletter(v)) {
				var n;
				o("WAWebQueryAndUpdateNewslettersMetadataAction").queryAndUpdateNewsletterMetadataAction(o("WAJids").toNewsletterJid(v.id.toString()), { fields: babelHelpers.extends({
					name: !0,
					picture: !0,
					description: !0,
					inviteLink: !0,
					handle: !0,
					subscribers: !0,
					privacy: !0,
					verification: !0,
					state: !0
				}, !((n = v.newsletterMetadata) != null && n.isPreview) && {
					muted: !0,
					membership: !0
				}) });
			}
		}, []);
		var we = function(t, n) {
			te(t), oe(n), j.push(o("WAWebInfoFlowStep").InfoFlowStep.ProductDetail);
		}, Ae = function(t) {
			le(t), j.push(o("WAWebInfoFlowStep").InfoFlowStep.ProductCollection);
		}, Fe = function(t) {
			te(t), j.push(o("WAWebInfoFlowStep").InfoFlowStep.ProductLink);
		}, Oe = function(t) {
			te(t), j.push(o("WAWebInfoFlowStep").InfoFlowStep.ProductInfo);
		}, Be = function(t, n) {
			ce(t), pe(n), j.push(o("WAWebInfoFlowStep").InfoFlowStep.CatalogLink);
		}, We = function(t) {
			var e = o("WAWebProductCatalogContext").getProductCatalogContext(V), n = r("WAWebBizShowCartAction")(t, v, e);
			n && (ge(t), j.push(o("WAWebInfoFlowStep").InfoFlowStep.Cart));
		}, qe = function(t, n) {
			var e, r = (e = me == null ? void 0 : me.id) != null ? e : v.id;
			o("WAWebUtilsLogQplEvents").qplStartCatalogCollectionsView(n), o("WAWebProductCatalogLogEvents").logCarouselViewMoreClick({
				catalogOwnerWid: r,
				catalogContext: t
			}), j.push(o("WAWebInfoFlowStep").InfoFlowStep.Catalog);
		}, Ue = function() {
			o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				tsNavigationData: {
					surface: "unknown",
					viewName: "info-flow"
				},
				onOK: o("WAWebModalManager").closeModalManager,
				okText: r("WAWebFbtCommon")("OK"),
				children: s._(
					/*BTDS*/
					""
				)
			}));
		}, Ve = r("useWAWebUnmountSignal")(), He = async function(n, a) {
			var t = n;
			await r("WAPromiseRaceAbort")(o("WAWebSetSubjectGroupAction").setGroupSubject(b.chat, t), Ve).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch(function(t) {
				o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["name_group_modal:onSetSubject failed"])));
			}), o("WAWebModalManager").ModalManager.close(), j.push(o("WAWebInfoFlowStep").InfoFlowStep.GroupInviteLink);
		}, Ge = function() {
			var e;
			if (o("WAWebChatGroupUtils").isInviteGrowthLockedGroup(v)) {
				var t, n, a = !!((t = v.groupMetadata) != null && t.participants.iAmAdmin()), i = (n = v.groupMetadata) == null ? void 0 : n.memberLinkMode;
				o("WAWebGroupInviteUtils.react").openGrowthLockedModal(a, !0, i);
				return;
			}
			if ((e = v.groupMetadata) != null && e.isUnnamed) {
				var l, u, c = s._(
					/*BTDS*/
					""
				);
				o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebNameGroupModal.react"), {
					chat: v,
					subtext: c,
					onCancel: o("WAWebModalManager").closeModalManager,
					onOK: He,
					editable: (l = v.groupMetadata) == null ? void 0 : l.canSetSubject(),
					editRestrictionInfo: (u = v.groupMetadata) != null && u.restrict ? Ue : void 0
				}));
			} else j.push(o("WAWebInfoFlowStep").InfoFlowStep.GroupInviteLink);
		}, ze = function(t) {
			var e = t || v.contact;
			e.id.isRegularUser() && (pe(e), j.push(o("WAWebInfoFlowStep").InfoFlowStep.Verification));
		}, je = function(t) {
			Pe(!1), pe(t), j.push(o("WAWebInfoFlowStep").InfoFlowStep.ContactInfo);
		}, Ke = function(t) {
			o("WAWebGroupMemberUpdatesLogger").GroupMemberUpdatesLogger.logOnContactInfoScreen(o("WAWebWamEnumGroupMemberUpdatesActionName").GROUP_MEMBER_UPDATES_ACTION_NAME.CLICK_INFO_OPTION), Pe(!0), pe(t), j.push(o("WAWebInfoFlowStep").InfoFlowStep.ContactInfo);
		}, Qe = function(t) {
			pe(t), j.push(o("WAWebInfoFlowStep").InfoFlowStep.NewsletterContactInfo);
		}, Xe = function(t, n) {
			Se(n), Ce(t), j.push(o("WAWebInfoFlowStep").InfoFlowStep.DefaultEphemerality);
		}, Ye = function() {
			o("WAWebUserPrefsNuxPreferences").shouldShowNUX(o("WAWebNux").NUX.EPHEMERAL) ? o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebEphemeralKicNux.react"), {
				chat: v,
				fromMe: !0,
				onOk: function() {
					return j.push(o("WAWebInfoFlowStep").InfoFlowStep.Ephemeral);
				}
			})) : j.push(o("WAWebInfoFlowStep").InfoFlowStep.Ephemeral);
		}, Je = function(t) {
			Te(t), j.push(o("WAWebInfoFlowStep").InfoFlowStep.LimitSharing);
		}, Ze = function() {
			j.push(o("WAWebInfoFlowStep").InfoFlowStep.Notifications);
		}, et = function() {
			var e, t = (e = v.groupMetadata) == null ? void 0 : e.parentGroup;
			t && o("WAWebCmd").Cmd.openCommunityHome(t, !0);
		}, tt = function(t) {
			Ee(t), j.push(o("WAWebInfoFlowStep").InfoFlowStep.EventInfo);
		}, nt = function() {
			j.push(o("WAWebInfoFlowStep").InfoFlowStep.AllEvents);
		}, rt = function() {
			j.push(o("WAWebInfoFlowStep").InfoFlowStep.Search);
		}, ot = function() {
			j.push(o("WAWebInfoFlowStep").InfoFlowStep.ScheduledMessages);
		}, at = function() {
			j.end(o("WAWebUim").DismissReason.LIFECYCLE);
		}, it = function() {
			U.current = void 0, W.current = 0, j.push(o("WAWebInfoFlowStep").InfoFlowStep.MediaGallery);
		}, lt = function() {
			U.current = o("WAWebMediaGalleryDrawer.react").GalleryDrawerTabs.PRODUCTS, j.pop();
		}, st = function(t) {
			pe(t), j.push(o("WAWebInfoFlowStep").InfoFlowStep.NewsletterTransferOwnership);
		}, ut = r("useWAWebStableCallback")(function(e) {
			if (o("WAWebContactUtils").shouldShowNativeContactsNux()) {
				var t = !!me;
				o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebNativeContactsNuxPopup.react"), { source: t ? o("WAWebContactLogging").ContactSourceType.GroupMemberInfo : o("WAWebContactLogging").ContactSourceType.ContactInfo }));
				return;
			}
			J.current = o("WAWebContactUtils").getContactDataFromContactModel(e), j.push(o("WAWebInfoFlowStep").InfoFlowStep.SaveContactFlow);
		}), ct = r("useWAWebStableCallback")(function(e) {
			if (o("WAWebContactUtils").shouldShowNativeContactsNux()) {
				o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebNativeContactsNuxPopup.react"), { source: o("WAWebContactLogging").ContactSourceType.VCard }));
				return;
			}
			J.current = e, j.push(o("WAWebInfoFlowStep").InfoFlowStep.SaveContactFlow);
		}), dt = function() {
			if (j.step === o("WAWebInfoFlowStep").InfoFlowStep.SaveContactFlow) {
				var e;
				(e = De.current) == null || e.handleDismiss();
			}
			j.pop();
		};
		if (!j.step) return null;
		var mt = $ != null ? $ : v, pt;
		switch (j.step) {
			case o("WAWebInfoFlowStep").InfoFlowStep.GroupInfo:
				if (o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(mt) && !o("WAWebChatGroupUtils").isDeactivatedCommunityAnnouncementGroup(mt) && (n = mt.groupMetadata) != null && n.participants.iAmMember()) {
					var _t, ft = (_t = mt.groupMetadata) == null ? void 0 : _t.parentGroup;
					pt = d.jsx(o("WAWebCommunityFlowLoadable").CommunityFlowLoadable, {
						homeTheme: o("WAWebCommunityHomeWrapper.react").CommunityHomeTheme.TabbedInfo,
						initialStep: o("WAWebCommunityFlowStep").CommunityFlowStep.CommunityHome,
						initialTab: k || E ? o("WAWebCommunityTabbedInfoDrawer.react").CommunityInfoTabs.Community : o("WAWebCommunityTabbedInfoDrawer.react").CommunityInfoTabs.Announcements,
						jid: ft,
						onBack: function() {
							return j.pop();
						},
						scrollToMemberList: k
					});
				} else pt = d.jsx(r("WAWebGroupInfoDrawer.react"), {
					chat: mt,
					focusGroupSubjectOnMount: N,
					showFullGroupDescription: E,
					focusGroupDescriptionOnMount: M,
					scrollToParticipantList: k,
					groupMetadata: mt.groupMetadata,
					contact: mt.contact,
					onVerification: ze,
					onContactInfo: je,
					onStarred: function() {
						return j.push(o("WAWebInfoFlowStep").InfoFlowStep.Starred);
					},
					onKept: function() {
						return j.push(o("WAWebInfoFlowStep").InfoFlowStep.Kept);
					},
					onScheduledMessages: ot,
					onWallpaperClick: function() {
						return j.push(o("WAWebInfoFlowStep").InfoFlowStep.Wallpaper);
					},
					onChatThemeClick: function() {
						return j.push(o("WAWebInfoFlowStep").InfoFlowStep.ChatTheme);
					},
					onSentForAdminReview: function() {
						return j.push(o("WAWebInfoFlowStep").InfoFlowStep.SentForAdminReview);
					},
					onNotificationSettings: Ze,
					onMediaGallery: it,
					onAdminSetting: function() {
						return j.push(o("WAWebInfoFlowStep").InfoFlowStep.GroupSettings);
					},
					onGroupInviteLink: Ge,
					onPendingParticipants: function() {
						return j.push(o("WAWebInfoFlowStep").InfoFlowStep.PendingParticipants);
					},
					onMemberUpdates: function() {
						return j.push(o("WAWebInfoFlowStep").InfoFlowStep.MemberUpdates);
					},
					onEphemeral: Ye,
					onLimitSharing: Je,
					onCommunityClick: et,
					onEventInfo: tt,
					onAllEvents: nt,
					onSearchMsgs: rt,
					onBack: T,
					onClose: function() {
						$ ? j.end() : j.pop();
					}
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.SentForAdminReview:
				pt = d.jsx(r("WAWebSentForAdminReviewFlow.react"), {
					chat: v,
					ref: C,
					onClose: function() {
						return j.pop();
					}
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.BroadcastInfo:
				pt = d.jsx(r("WAWebBroadcastInfoDrawer.react"), {
					chat: v,
					entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
					onClose: function() {
						return j.pop();
					},
					onEditAudience: function() {
						o("WAWebDrawerManager").DrawerManager.closeDrawerRight(), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(d.jsx(o("WAWebBizBroadcastsUpsertAudienceScreenLoadable").WAWebBizBroadcastsUpsertAudienceScreenLoadable, {
							audienceConfig: {
								kind: "core",
								onNewAudienceSuccess: function() {
									o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
								},
								onSendBroadcast: function() {
									o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
								},
								onUpdateAudienceSuccess: function() {
									o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
								}
							},
							chat: v,
							entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
							onBack: function() {
								return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
							},
							suggestedAudienceData: null
						}));
					},
					onNewBroadcast: function() {
						o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.start(o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastEntryPoint.BB_THREAD_INFO_DRAWER, !0), o("WAWebDrawerManager").DrawerManager.closeDrawerRight(), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(d.jsx(o("WAWebBizBroadcastNewBroadcastFlowLoadable").WAWebBizBroadcastNewBroadcastFlowLoadable, {
							chat: v,
							entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
							onBack: function() {
								return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
							}
						}));
					}
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.ContactInfo: {
				var gt = $e ? function(e) {
					var t, n = {
						message: (t = o("WAWebWamEnumGroupMemberUpdatesActionName")).GROUP_MEMBER_UPDATES_ACTION_NAME.CLICK_MESSAGE_OPTION,
						audio_call: t.GROUP_MEMBER_UPDATES_ACTION_NAME.CLICK_AUDIO_OPTION,
						video_call: t.GROUP_MEMBER_UPDATES_ACTION_NAME.CLICK_VIDEO_OPTION,
						edit_contact: t.GROUP_MEMBER_UPDATES_ACTION_NAME.CLICK_EDIT_CONTACT_INFO
					};
					o("WAWebGroupMemberUpdatesLogger").GroupMemberUpdatesLogger.logOnContactInfoScreen(n[e]);
				} : void 0;
				pt = d.jsx(r("WAWebContactInfoDrawer.react"), {
					contact: me || v.contact,
					onVerification: ze,
					onStarred: function() {
						return j.push(o("WAWebInfoFlowStep").InfoFlowStep.Starred);
					},
					onKept: function() {
						return j.push(o("WAWebInfoFlowStep").InfoFlowStep.Kept);
					},
					onScheduledMessages: ot,
					onWallpaperClick: function() {
						return j.push(o("WAWebInfoFlowStep").InfoFlowStep.Wallpaper);
					},
					onChatThemeClick: function() {
						return j.push(o("WAWebInfoFlowStep").InfoFlowStep.ChatTheme);
					},
					onMediaGallery: it,
					onProductCatalog: qe,
					onProductDetail: we,
					onEphemeral: Ye,
					onLimitSharing: Je,
					onSaveContact: ut,
					onSearchMsgs: rt,
					onClose: function() {
						return j.pop();
					},
					profileEntryPoint: I,
					onNotificationSettings: Ze,
					onContactInfoAction: gt,
					onBack: $ ? function() {
						o("WAWebChatGetters").getIsNewsletter($) ? j.push(o("WAWebInfoFlowStep").InfoFlowStep.NewsletterInfo) : j.push(o("WAWebInfoFlowStep").InfoFlowStep.GroupInfo);
					} : T,
					sourceGroupChatOrNewsletter: $,
					threadId: A,
					showChatTabInContactInfoDrawer: O,
					initialContactInfoTab: B
				});
				break;
			}
			case o("WAWebInfoFlowStep").InfoFlowStep.NewsletterInfo:
				o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() && (pt = d.jsx(r("WAWebNewsletterInfoDrawer.react"), {
					chat: mt,
					newsletterMetadata: mt.newsletterMetadata,
					adminFunnelLogger: K,
					onClose: function() {
						j.end();
					},
					onTransferNewsletterOwnership: function() {
						return j.push(o("WAWebInfoFlowStep").InfoFlowStep.NewsletterTransferOwnershipSelection);
					},
					onTransferOwnershipSelection: st,
					onDeleteNewsletter: function() {
						return j.push(o("WAWebInfoFlowStep").InfoFlowStep.DeleteNewsletter);
					},
					onAdminCenter: function() {
						return j.push(o("WAWebInfoFlowStep").InfoFlowStep.NewsletterAdminCenter);
					},
					onSettings: function() {
						return j.push(o("WAWebInfoFlowStep").InfoFlowStep.NewsletterSettings);
					},
					onNotificationSettings: Ze,
					onShareLink: function() {
						Q.current = o("WAWebWamEnumChannelLinkShareEntryPoint").CHANNEL_LINK_SHARE_ENTRY_POINT.CHANNEL_INFO_PAGE, j.push(o("WAWebInfoFlowStep").InfoFlowStep.NewsletterLink);
					},
					onContactInfo: Qe,
					onVerification: ze,
					onViewInsights: function(t, n) {
						X.current = t, Y.current = n, j.push(o("WAWebInfoFlowStep").InfoFlowStep.NewsletterInsights);
					},
					focusDescriptionOnMount: P
				}));
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.NewsletterContactInfo:
				pt = d.jsx(r("WAWebContactInfoDrawer.react"), {
					contact: me || v.contact,
					onVerification: ze,
					onStarred: function() {
						return j.push(o("WAWebInfoFlowStep").InfoFlowStep.Starred);
					},
					onKept: function() {
						return j.push(o("WAWebInfoFlowStep").InfoFlowStep.Kept);
					},
					onScheduledMessages: ot,
					onWallpaperClick: function() {
						return j.push(o("WAWebInfoFlowStep").InfoFlowStep.Wallpaper);
					},
					onChatThemeClick: function() {
						return j.push(o("WAWebInfoFlowStep").InfoFlowStep.ChatTheme);
					},
					onMediaGallery: it,
					onProductCatalog: qe,
					onProductDetail: we,
					onEphemeral: Ye,
					onLimitSharing: Je,
					onSaveContact: ut,
					onSearchMsgs: rt,
					onClose: function() {
						return j.pop();
					},
					profileEntryPoint: I,
					onNotificationSettings: Ze,
					onBack: function() {
						return j.push(o("WAWebInfoFlowStep").InfoFlowStep.NewsletterInfo);
					},
					sourceGroupChatOrNewsletter: mt
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.NewsletterSettings:
				o("WAWebNewsletterGatingUtils").isNewsletterReactionSettingsEnabled() && (pt = d.jsx(r("WAWebNewsletterSettingsDrawer.react"), {
					isFirstLevel: R === o("WAWebInfoFlowStep").InfoFlowStep.NewsletterSettings,
					onBack: function() {
						return j.pop();
					},
					newsletter: mt,
					adminFunnelLogger: K
				}));
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.NewsletterLink:
				(a = (i = v.newsletterMetadata) == null ? void 0 : i.iAmAdminOrOwner()) != null && a && (pt = d.jsx(r("WAWebNewsletterLinkDrawer.react"), {
					entryPoint: Q.current,
					onClose: function() {
						j.end();
					},
					onBack: j.previousStep === o("WAWebInfoFlowStep").InfoFlowStep.NewsletterInfo ? function() {
						return j.pop();
					} : null,
					newsletter: v
				}));
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.NewsletterTransferOwnershipSelection:
				pt = d.jsx(r("WAWebNewsletterTransferOwnershipSelectionDrawer.react"), {
					chat: mt,
					onBack: function() {
						return j.pop();
					},
					onTransferOwnershipSelection: st
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.NewsletterTransferOwnership:
				pt = d.jsx(r("WAWebNewsletterTransferOwnershipDrawer.react"), {
					contact: me,
					chat: mt,
					onBack: function() {
						return j.pop();
					},
					onTransferCompletion: function() {
						j.push(o("WAWebInfoFlowStep").InfoFlowStep.NewsletterInfo);
					}
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.DeleteNewsletter:
				pt = d.jsx(r("WAWebNewsletterDeleteDrawer.react"), {
					chat: mt,
					onBack: function() {
						return j.pop();
					},
					onCancel: function() {
						return j.pop();
					}
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.NewsletterAdminCenter:
				pt = d.jsx(o("WAWebNewsletterEnforcementAlertFlowLoadable").WAWebNewsletterEnforcementAlertFlowLoadable, {
					chat: mt,
					onClose: function() {
						return j.pop();
					}
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.NewsletterInsights:
				pt = d.jsx(o("WAWebNewsletterInsightsDrawerLoadable").NewsletterInsightsDrawerLoadable, {
					entryPoint: Y.current,
					onBack: function() {
						return j.pop();
					},
					chat: v,
					selectedTab: X.current
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.ProductDetail:
				pt = d.jsx(r("WAWebProductCatalogProductDetailsDrawer.react"), {
					chat: v,
					collectionId: re,
					product: r("nullthrows")(ee),
					onEnd: at,
					onBack: lt,
					refreshCarousel: !1,
					onProductLinkClick: Fe,
					onProductMoreInformation: Oe,
					onCartClick: We
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.ProductCollection: {
				var ht;
				pt = d.jsx(r("WAWebProductCollectionCollectionContentDrawer.react"), {
					contact: me != null ? me : v.contact,
					onProductDetail: we,
					catalogId: (ht = me == null ? void 0 : me.id) != null ? ht : v.id,
					onBack: function() {
						return j.pop();
					},
					onCatalogLinkClick: Be,
					onCartClick: We,
					collection: ie != null ? ie : void 0
				});
				break;
			}
			case o("WAWebInfoFlowStep").InfoFlowStep.ProductLink:
				pt = d.jsx(r("WAWebProductCatalogProductLinkDrawer.react"), {
					product: r("nullthrows")(ee),
					onBack: function() {
						return j.pop();
					}
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.ProductInfo:
				pt = d.jsx(r("WAWebProductCatalogProductMoreInformationDrawer.react"), {
					product: r("nullthrows")(ee),
					onBack: lt
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.CatalogLink:
				pt = d.jsx(r("WAWebProductCatalogCatalogLinkDrawer.react"), {
					catalog: r("nullthrows")(ue),
					contact: r("nullthrows")(me),
					onBack: function() {
						return j.pop();
					}
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.Cart: {
				var yt = o("WAWebProductCatalogContext").getProductCatalogContext(V), Ct = r("WAWebBizShowCartAction")(r("nullthrows")(fe), v, yt);
				pt = r("nullthrows")(Ct);
				break;
			}
			case o("WAWebInfoFlowStep").InfoFlowStep.Catalog:
				pt = d.jsx(r("WAWebProductCollectionCatalogViewDrawer.react"), {
					contact: me != null ? me : v.contact,
					onProductDetail: we,
					catalogId: (l = me == null ? void 0 : me.id) != null ? l : v.id,
					onBack: function() {
						return j.pop();
					},
					businessProfile: v.contact.businessProfile,
					onCatalogLinkClick: Be,
					onCartClick: We,
					onCollectionSeeAll: Ae
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.ProductList:
				pt = d.jsx(r("WAWebProductCatalogProductListDrawer.react"), {
					contact: me != null ? me : v.contact,
					onProductDetail: we,
					catalogId: (c = me == null ? void 0 : me.id) != null ? c : v.id,
					onBack: function() {
						return j.pop();
					},
					businessProfile: (m = me == null ? void 0 : me.businessProfile) != null ? m : v.contact.businessProfile,
					onCatalogLinkClick: Be,
					onCartClick: We
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.Starred:
				pt = d.jsx(o("WAWebStarredDrawerLoadable").StarredDrawerLoadable, {
					chat: v,
					starredMsgs: o("WAWebStarredMsgsUtils").getStarredMsgs(v),
					onClose: function() {
						return j.pop();
					},
					onSaveContact: ct,
					threadId: A
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.Wallpaper:
				pt = d.jsx(r("WAWebWallpaperDrawer.react"), {
					chat: v,
					onClose: function() {
						return j.pop();
					}
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.ChatTheme:
				pt = d.jsx(r("WAWebChatThemeDrawer.react"), {
					chat: v,
					onClose: function() {
						return j.pop();
					}
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.Kept:
				pt = d.jsx(r("WAWebKeptDrawer.react"), {
					chat: v,
					keptMsgs: v.getKeptMsgs(),
					onClose: function() {
						return j.pop();
					}
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.ScheduledMessages:
				pt = d.jsx(o("WAWebScheduledMessagesListLoadable").WAWebScheduledMessagesListLoadable, {
					chatId: o("WAJids").unsafeCoerceToChatJid(v.id.toJid()),
					onBack: function() {
						return j.pop();
					},
					onDeleteMessage: async function(t) {
						await o("WAWebUnscheduleMsgAction").unscheduleMsgAction(o("WAJids").unsafeCoerceToChatJid(v.id.toJid()), t);
					}
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.GroupSettings:
				pt = d.jsx(r("WAWebExistingGroupPermissionsDrawer.react"), {
					chat: v,
					groupMetadata: v.groupMetadata,
					onClose: function() {
						return j.pop();
					}
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.MediaGallery:
				pt = d.jsx(o("WAWebMediaGalleryDrawer.react").MediaGalleryDrawer, {
					chat: v,
					onBack: function() {
						return j.pop();
					},
					onProductDetail: we,
					setProductsScrollOffset: q,
					initialTab: U.current,
					productsScrollOffset: W.current,
					threadId: A
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.GroupInviteLink:
				pt = d.jsx(o("WAWebGroupInviteLinkDrawerLoadable").GroupInviteLinkDrawerLoadable, {
					chat: v,
					groupMetadata: r("nullthrows")(v.groupMetadata),
					onBack: function() {
						return j.pop();
					},
					onGroupSettings: function() {
						return j.push(o("WAWebInfoFlowStep").InfoFlowStep.GroupSettings);
					}
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.PendingParticipants:
				pt = d.jsx(r("WAWebGroupMembershipApprovalRequestsFlow.react"), {
					chat: v,
					onBack: function() {
						return j.pop();
					}
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.Verification: {
				var bt = r("nullthrows")(me), vt = bt.id, St = vt.isLid() ? vt : v.accountLid;
				pt = d.jsx(r("WAWebVerificationDrawerLoadable").VerificationDrawerLoadable, {
					lid: St,
					contact: r("nullthrows")(me),
					onClose: function() {
						return j.pop();
					},
					isFirstLevel: !1
				});
				break;
			}
			case o("WAWebInfoFlowStep").InfoFlowStep.DefaultEphemerality:
				pt = d.jsx(r("WAWebDefaultEphemeralityDrawer.react"), {
					onClose: function() {
						return j.pop();
					},
					entryPoint: r("nullthrows")(ye)
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.Ephemeral: {
				var Rt = o("WAWebChatGetters").getIsGroup(v) ? o("WAWebWamEnumDisappearingModeEntryPointType").DISAPPEARING_MODE_ENTRY_POINT_TYPE.GROUP_CHAT_DISAPPEARING_MESSAGES_SETTING : o("WAWebWamEnumDisappearingModeEntryPointType").DISAPPEARING_MODE_ENTRY_POINT_TYPE.INDIVIDUAL_CHAT_DISAPPEARING_MESSAGES_SETTING;
				pt = d.jsx(r("WAWebEphemeralDrawer.react"), {
					chat: v,
					showNux: o("WAWebUserPrefsNuxPreferences").shouldShowNUX(o("WAWebNux").NUX.EPHEMERAL),
					entryPoint: o("WAWebWamEnumEphemeralSettingEntryPointType").EPHEMERAL_SETTING_ENTRY_POINT_TYPE.CHAT_INFO,
					onClose: function() {
						Se(null), j.pop();
					},
					onDDMSettingsClick: function(t) {
						return Xe(Rt, t);
					},
					pendingDuration: ve
				});
				break;
			}
			case o("WAWebInfoFlowStep").InfoFlowStep.SaveContactFlow: {
				var Lt, Et = !!me, kt = (Lt = J.current) != null ? Lt : o("WAWebContactUtils").getContactDataFromContactModel(v.contact), It = function() {
					J.current = null, j.pop();
				};
				pt = d.jsx(r("WAWebContactEditDrawer.react"), {
					ref: De,
					origin: Et ? o("WAWebContactLogging").ContactSourceType.GroupMemberInfo : o("WAWebContactLogging").ContactSourceType.ContactInfo,
					contactData: kt,
					onSave: It,
					onBack: It
				});
				break;
			}
			case o("WAWebInfoFlowStep").InfoFlowStep.EventInfo: {
				Le && (pt = d.jsx(o("WAWebEventInfoFlowLoadable").EventInfoFlowLoadable, {
					chat: v,
					msg: Le,
					onBack: function() {
						return j.pop();
					}
				}, "event-info-drawer-" + Le.id.toString()));
				break;
			}
			case o("WAWebInfoFlowStep").InfoFlowStep.AllEvents: {
				pt = d.jsx(r("WAWebEventsInChatDrawer.react"), {
					chat: v,
					onEventClick: tt,
					onBack: function() {
						return j.pop();
					}
				}, "all-events-drawer-" + v.id.toString());
				break;
			}
			case o("WAWebInfoFlowStep").InfoFlowStep.LimitSharing: {
				pt = d.jsx(r("WAWebLimitSharingDrawer.react"), {
					chat: Ie != null ? Ie : v,
					onClose: function() {
						Te(null), j.pop();
					}
				});
				break;
			}
			case o("WAWebInfoFlowStep").InfoFlowStep.Notifications: {
				var Tt = o("WAWebChatGetters").getIsNewsletter(v), Dt = !Tt && (r("WAWebEnvironment").isWindows || o("WAWebABProps").getABPropConfigValue("wa_web_group_info_notification_row") || o("WAWebABProps").getABPropConfigValue("enable_mention_everyone_receiver_web"));
				Dt ? pt = d.jsx(r("WAWebChatNotificationSettingsDrawer.react"), {
					chat: v,
					onClose: function() {
						return j.pop();
					},
					onNotifyForClick: function() {
						return j.push(o("WAWebInfoFlowStep").InfoFlowStep.NotifyFor);
					}
				}) : Tt && (pt = d.jsx(o("WAWebNewsletterAdminNotificationsDrawerLoadable").NewsletterAdminNotificationsDrawerLoadable, {
					onBack: function() {
						return j.pop();
					},
					chat: v
				}));
				break;
			}
			case o("WAWebInfoFlowStep").InfoFlowStep.NotifyFor: {
				pt = d.jsx(o("WAWebNotifyForDrawerLoadable").NotifyForDrawerLoadable, {
					chat: v,
					onClose: function() {
						return j.pop();
					}
				});
				break;
			}
			case o("WAWebInfoFlowStep").InfoFlowStep.Search: {
				pt = d.jsx(r("WAWebChatSearchDrawer.react"), {
					chat: o("WAWebStateUtils").unproxy(v),
					isInFlow: !0
				}, "chat-search-" + v.id.toString());
				break;
			}
			case o("WAWebInfoFlowStep").InfoFlowStep.MemberUpdates:
				pt = d.jsx(r("WAWebGroupMemberUpdatesPanel.react"), {
					chat: v,
					onBack: function() {
						return j.pop();
					},
					onContactInfo: Ke
				});
				break;
		}
		return d.jsx(o("WAWebNewsletterProducerInsightsLogger").NewsletterProducerInsightsLoggerContext.Provider, {
			value: H,
			children: d.jsx(z, {
				ref: C,
				flow: j,
				displayName: x,
				requestDismiss: dt,
				children: pt
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.InfoFlow = C;
}), 226);
