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
	"asyncToGeneratorRuntime",
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
		var a, i, l, c, m, C, b = t.ref, v = babelHelpers.objectWithoutPropertiesLoose(t, u), S = v.chat, R = v.initialStep, L = R === void 0 ? y(S) : R, E = v.initialSubStep, k = v.showFullGroupDescription, I = v.scrollToParticipantList, T = v.profileEntryPoint, D = v.onBack, x = v.onEnd, $ = v.displayName, P = v.sourceGroupChatOrNewsletter, N = v.focusNewsletterDescriptionOnMount, M = v.focusGroupSubjectOnMount, w = v.focusGroupDescriptionOnMount, A = v.newsletterLinkShareScreenEntryPoint, F = v.threadId, O = v.contactProp, B = v.showChatTabInContactInfoDrawer, W = v.initialContactInfoTab, q = g(0), U = r("useWAWebStableCallback")(function(e) {
			q.current = e;
		}), V = g(void 0), H = p(o("WAWebDrawerContext").DrawerContext), G = f(function() {
			return new (o("WAWebNewsletterProducerInsightsLogger")).NewsletterProducerInsightsLogger({ wid: S.id });
		}, [S.id]), z = o("useWAWebFlow").useFlow(L, {
			transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
			onEnd: x,
			initialStack: E != null ? [L, E] : void 0
		}), j = z[0], K = z[1], Q = f(function() {
			return new (o("WAWebNewsletterAdminFunnelLogging")).NewsletterAdminFunnelLogger(o("WAWebWamEnumAdminFlowType").ADMIN_FLOW_TYPE.EDIT);
		}, []), X = g(A), Y = g("reach"), J = g(null), Z = g(null), ee = h(null), te = ee[0], ne = ee[1], re = h(void 0), oe = re[0], ae = re[1], ie = h(null), le = ie[0], se = ie[1], ue = h(null), ce = ue[0], de = ue[1], me = h(O != null ? O : null), pe = me[0], _e = me[1], fe = h(null), ge = fe[0], he = fe[1], ye = h(null), Ce = ye[0], be = ye[1], ve = h(null), Se = ve[0], Re = ve[1], Le = h(null), Ee = Le[0], ke = Le[1], Ie = h(null), Te = Ie[0], De = Ie[1], xe = g(), $e = h(!1), Pe = $e[0], Ne = $e[1], Me = o("useWAWebChatValues").useChatValues(S.id, [o("WAWebChatGetters").getIsUser]), we = Me[0];
		_(function() {
			var e;
			if (o("WAWebChatGetters").getIsGroup(S) && (e = S.groupMetadata) != null && e.hasJoined()) o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
				id: S.id,
				request: "enter_group_info"
			});
			else if (we) {
				if (S.contact.isBusiness) {
					var t;
					(t = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("right")) == null || t.updateContext(o("WAWebProductCatalogContext").buildProductCatalogContext(new (o("WAWebProductCatalogSession")).ProductCatalogSession(), o("WAWebContactUtils").getMaybeBizPlatformForLogging(S.contact.id.toString()), o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE));
				}
			} else if (o("WAWebChatGetters").getIsNewsletter(S)) {
				var n;
				o("WAWebQueryAndUpdateNewslettersMetadataAction").queryAndUpdateNewsletterMetadataAction(o("WAJids").toNewsletterJid(S.id.toString()), { fields: babelHelpers.extends({
					name: !0,
					picture: !0,
					description: !0,
					inviteLink: !0,
					handle: !0,
					subscribers: !0,
					privacy: !0,
					verification: !0,
					state: !0
				}, !((n = S.newsletterMetadata) != null && n.isPreview) && {
					muted: !0,
					membership: !0
				}) });
			}
		}, []);
		var Ae = function(t, n) {
			ne(t), ae(n), K.push(o("WAWebInfoFlowStep").InfoFlowStep.ProductDetail);
		}, Fe = function(t) {
			se(t), K.push(o("WAWebInfoFlowStep").InfoFlowStep.ProductCollection);
		}, Oe = function(t) {
			ne(t), K.push(o("WAWebInfoFlowStep").InfoFlowStep.ProductLink);
		}, Be = function(t) {
			ne(t), K.push(o("WAWebInfoFlowStep").InfoFlowStep.ProductInfo);
		}, We = function(t, n) {
			de(t), _e(n), K.push(o("WAWebInfoFlowStep").InfoFlowStep.CatalogLink);
		}, qe = function(t) {
			var e = o("WAWebProductCatalogContext").getProductCatalogContext(H), n = r("WAWebBizShowCartAction")(t, S, e);
			n && (he(t), K.push(o("WAWebInfoFlowStep").InfoFlowStep.Cart));
		}, Ue = function(t, n) {
			var e, r = (e = pe == null ? void 0 : pe.id) != null ? e : S.id;
			o("WAWebUtilsLogQplEvents").qplStartCatalogCollectionsView(n), o("WAWebProductCatalogLogEvents").logCarouselViewMoreClick({
				catalogOwnerWid: r,
				catalogContext: t
			}), K.push(o("WAWebInfoFlowStep").InfoFlowStep.Catalog);
		}, Ve = function() {
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
		}, He = r("useWAWebUnmountSignal")(), Ge = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
				var a = t;
				yield r("WAPromiseRaceAbort")(o("WAWebSetSubjectGroupAction").setGroupSubject(v.chat, a), He).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch(function(t) {
					o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["name_group_modal:onSetSubject failed"])));
				}), o("WAWebModalManager").ModalManager.close(), K.push(o("WAWebInfoFlowStep").InfoFlowStep.GroupInviteLink);
			});
			return function(n, r) {
				return t.apply(this, arguments);
			};
		})(), ze = function() {
			var e;
			if (o("WAWebChatGroupUtils").isInviteGrowthLockedGroup(S)) {
				var t, n, a = !!((t = S.groupMetadata) != null && t.participants.iAmAdmin()), i = (n = S.groupMetadata) == null ? void 0 : n.memberLinkMode;
				o("WAWebGroupInviteUtils.react").openGrowthLockedModal(a, !0, i);
				return;
			}
			if ((e = S.groupMetadata) != null && e.isUnnamed) {
				var l, u, c = s._(
					/*BTDS*/
					""
				);
				o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebNameGroupModal.react"), {
					chat: S,
					subtext: c,
					onCancel: o("WAWebModalManager").closeModalManager,
					onOK: Ge,
					editable: (l = S.groupMetadata) == null ? void 0 : l.canSetSubject(),
					editRestrictionInfo: (u = S.groupMetadata) != null && u.restrict ? Ve : void 0
				}));
			} else K.push(o("WAWebInfoFlowStep").InfoFlowStep.GroupInviteLink);
		}, je = function(t) {
			var e = t || S.contact;
			e.id.isRegularUser() && (_e(e), K.push(o("WAWebInfoFlowStep").InfoFlowStep.Verification));
		}, Ke = function(t) {
			Ne(!1), _e(t), K.push(o("WAWebInfoFlowStep").InfoFlowStep.ContactInfo);
		}, Qe = function(t) {
			o("WAWebGroupMemberUpdatesLogger").GroupMemberUpdatesLogger.logOnContactInfoScreen(o("WAWebWamEnumGroupMemberUpdatesActionName").GROUP_MEMBER_UPDATES_ACTION_NAME.CLICK_INFO_OPTION), Ne(!0), _e(t), K.push(o("WAWebInfoFlowStep").InfoFlowStep.ContactInfo);
		}, Xe = function(t) {
			_e(t), K.push(o("WAWebInfoFlowStep").InfoFlowStep.NewsletterContactInfo);
		}, Ye = function(t, n) {
			Re(n), be(t), K.push(o("WAWebInfoFlowStep").InfoFlowStep.DefaultEphemerality);
		}, Je = function() {
			o("WAWebUserPrefsNuxPreferences").shouldShowNUX(o("WAWebNux").NUX.EPHEMERAL) ? o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebEphemeralKicNux.react"), {
				chat: S,
				fromMe: !0,
				onOk: function() {
					return K.push(o("WAWebInfoFlowStep").InfoFlowStep.Ephemeral);
				}
			})) : K.push(o("WAWebInfoFlowStep").InfoFlowStep.Ephemeral);
		}, Ze = function(t) {
			De(t), K.push(o("WAWebInfoFlowStep").InfoFlowStep.LimitSharing);
		}, et = function() {
			K.push(o("WAWebInfoFlowStep").InfoFlowStep.Notifications);
		}, tt = function() {
			var e, t = (e = S.groupMetadata) == null ? void 0 : e.parentGroup;
			t && o("WAWebCmd").Cmd.openCommunityHome(t, !0);
		}, nt = function(t) {
			ke(t), K.push(o("WAWebInfoFlowStep").InfoFlowStep.EventInfo);
		}, rt = function() {
			K.push(o("WAWebInfoFlowStep").InfoFlowStep.AllEvents);
		}, ot = function() {
			K.push(o("WAWebInfoFlowStep").InfoFlowStep.Search);
		}, at = function() {
			K.push(o("WAWebInfoFlowStep").InfoFlowStep.ScheduledMessages);
		}, it = function() {
			K.end(o("WAWebUim").DismissReason.LIFECYCLE);
		}, lt = function() {
			V.current = void 0, q.current = 0, K.push(o("WAWebInfoFlowStep").InfoFlowStep.MediaGallery);
		}, st = function() {
			V.current = o("WAWebMediaGalleryDrawer.react").GalleryDrawerTabs.PRODUCTS, K.pop();
		}, ut = function(t) {
			_e(t), K.push(o("WAWebInfoFlowStep").InfoFlowStep.NewsletterTransferOwnership);
		}, ct = r("useWAWebStableCallback")(function(e) {
			if (o("WAWebContactUtils").shouldShowNativeContactsNux()) {
				var t = !!pe;
				o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebNativeContactsNuxPopup.react"), { source: t ? o("WAWebContactLogging").ContactSourceType.GroupMemberInfo : o("WAWebContactLogging").ContactSourceType.ContactInfo }));
				return;
			}
			Z.current = o("WAWebContactUtils").getContactDataFromContactModel(e), K.push(o("WAWebInfoFlowStep").InfoFlowStep.SaveContactFlow);
		}), dt = r("useWAWebStableCallback")(function(e) {
			if (o("WAWebContactUtils").shouldShowNativeContactsNux()) {
				o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebNativeContactsNuxPopup.react"), { source: o("WAWebContactLogging").ContactSourceType.VCard }));
				return;
			}
			Z.current = e, K.push(o("WAWebInfoFlowStep").InfoFlowStep.SaveContactFlow);
		}), mt = function() {
			if (K.step === o("WAWebInfoFlowStep").InfoFlowStep.SaveContactFlow) {
				var e;
				(e = xe.current) == null || e.handleDismiss();
			}
			K.pop();
		};
		if (!K.step) return null;
		var pt = P != null ? P : S, _t;
		switch (K.step) {
			case o("WAWebInfoFlowStep").InfoFlowStep.GroupInfo:
				if (o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(pt) && !o("WAWebChatGroupUtils").isDeactivatedCommunityAnnouncementGroup(pt) && (a = pt.groupMetadata) != null && a.participants.iAmMember()) {
					var ft, gt = (ft = pt.groupMetadata) == null ? void 0 : ft.parentGroup;
					_t = d.jsx(o("WAWebCommunityFlowLoadable").CommunityFlowLoadable, {
						homeTheme: o("WAWebCommunityHomeWrapper.react").CommunityHomeTheme.TabbedInfo,
						initialStep: o("WAWebCommunityFlowStep").CommunityFlowStep.CommunityHome,
						initialTab: I || k ? o("WAWebCommunityTabbedInfoDrawer.react").CommunityInfoTabs.Community : o("WAWebCommunityTabbedInfoDrawer.react").CommunityInfoTabs.Announcements,
						jid: gt,
						onBack: function() {
							return K.pop();
						},
						scrollToMemberList: I
					});
				} else _t = d.jsx(r("WAWebGroupInfoDrawer.react"), {
					chat: pt,
					focusGroupSubjectOnMount: M,
					showFullGroupDescription: k,
					focusGroupDescriptionOnMount: w,
					scrollToParticipantList: I,
					groupMetadata: pt.groupMetadata,
					contact: pt.contact,
					onVerification: je,
					onContactInfo: Ke,
					onStarred: function() {
						return K.push(o("WAWebInfoFlowStep").InfoFlowStep.Starred);
					},
					onKept: function() {
						return K.push(o("WAWebInfoFlowStep").InfoFlowStep.Kept);
					},
					onScheduledMessages: at,
					onWallpaperClick: function() {
						return K.push(o("WAWebInfoFlowStep").InfoFlowStep.Wallpaper);
					},
					onChatThemeClick: function() {
						return K.push(o("WAWebInfoFlowStep").InfoFlowStep.ChatTheme);
					},
					onSentForAdminReview: function() {
						return K.push(o("WAWebInfoFlowStep").InfoFlowStep.SentForAdminReview);
					},
					onNotificationSettings: et,
					onMediaGallery: lt,
					onAdminSetting: function() {
						return K.push(o("WAWebInfoFlowStep").InfoFlowStep.GroupSettings);
					},
					onGroupInviteLink: ze,
					onPendingParticipants: function() {
						return K.push(o("WAWebInfoFlowStep").InfoFlowStep.PendingParticipants);
					},
					onMemberUpdates: function() {
						return K.push(o("WAWebInfoFlowStep").InfoFlowStep.MemberUpdates);
					},
					onEphemeral: Je,
					onLimitSharing: Ze,
					onCommunityClick: tt,
					onEventInfo: nt,
					onAllEvents: rt,
					onSearchMsgs: ot,
					onBack: D,
					onClose: function() {
						P ? K.end() : K.pop();
					}
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.SentForAdminReview:
				_t = d.jsx(r("WAWebSentForAdminReviewFlow.react"), {
					chat: S,
					ref: b,
					onClose: function() {
						return K.pop();
					}
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.BroadcastInfo:
				_t = d.jsx(r("WAWebBroadcastInfoDrawer.react"), {
					chat: S,
					entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
					onClose: function() {
						return K.pop();
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
							chat: S,
							entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
							onBack: function() {
								return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
							},
							suggestedAudienceData: null
						}));
					},
					onNewBroadcast: function() {
						o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.start(o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastEntryPoint.BB_THREAD_INFO_DRAWER, !0), o("WAWebDrawerManager").DrawerManager.closeDrawerRight(), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(d.jsx(o("WAWebBizBroadcastNewBroadcastFlowLoadable").WAWebBizBroadcastNewBroadcastFlowLoadable, {
							chat: S,
							entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
							onBack: function() {
								return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
							}
						}));
					}
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.ContactInfo: {
				var ht = Pe ? function(e) {
					var t, n = {
						message: (t = o("WAWebWamEnumGroupMemberUpdatesActionName")).GROUP_MEMBER_UPDATES_ACTION_NAME.CLICK_MESSAGE_OPTION,
						audio_call: t.GROUP_MEMBER_UPDATES_ACTION_NAME.CLICK_AUDIO_OPTION,
						video_call: t.GROUP_MEMBER_UPDATES_ACTION_NAME.CLICK_VIDEO_OPTION,
						edit_contact: t.GROUP_MEMBER_UPDATES_ACTION_NAME.CLICK_EDIT_CONTACT_INFO
					};
					o("WAWebGroupMemberUpdatesLogger").GroupMemberUpdatesLogger.logOnContactInfoScreen(n[e]);
				} : void 0;
				_t = d.jsx(r("WAWebContactInfoDrawer.react"), {
					contact: pe || S.contact,
					onVerification: je,
					onStarred: function() {
						return K.push(o("WAWebInfoFlowStep").InfoFlowStep.Starred);
					},
					onKept: function() {
						return K.push(o("WAWebInfoFlowStep").InfoFlowStep.Kept);
					},
					onScheduledMessages: at,
					onWallpaperClick: function() {
						return K.push(o("WAWebInfoFlowStep").InfoFlowStep.Wallpaper);
					},
					onChatThemeClick: function() {
						return K.push(o("WAWebInfoFlowStep").InfoFlowStep.ChatTheme);
					},
					onMediaGallery: lt,
					onProductCatalog: Ue,
					onProductDetail: Ae,
					onEphemeral: Je,
					onLimitSharing: Ze,
					onSaveContact: ct,
					onSearchMsgs: ot,
					onClose: function() {
						return K.pop();
					},
					profileEntryPoint: T,
					onNotificationSettings: et,
					onContactInfoAction: ht,
					onBack: P ? function() {
						o("WAWebChatGetters").getIsNewsletter(P) ? K.push(o("WAWebInfoFlowStep").InfoFlowStep.NewsletterInfo) : K.push(o("WAWebInfoFlowStep").InfoFlowStep.GroupInfo);
					} : D,
					sourceGroupChatOrNewsletter: P,
					threadId: F,
					showChatTabInContactInfoDrawer: B,
					initialContactInfoTab: W
				});
				break;
			}
			case o("WAWebInfoFlowStep").InfoFlowStep.NewsletterInfo:
				o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() && (_t = d.jsx(r("WAWebNewsletterInfoDrawer.react"), {
					chat: pt,
					newsletterMetadata: pt.newsletterMetadata,
					adminFunnelLogger: Q,
					onClose: function() {
						K.end();
					},
					onTransferNewsletterOwnership: function() {
						return K.push(o("WAWebInfoFlowStep").InfoFlowStep.NewsletterTransferOwnershipSelection);
					},
					onTransferOwnershipSelection: ut,
					onDeleteNewsletter: function() {
						return K.push(o("WAWebInfoFlowStep").InfoFlowStep.DeleteNewsletter);
					},
					onAdminCenter: function() {
						return K.push(o("WAWebInfoFlowStep").InfoFlowStep.NewsletterAdminCenter);
					},
					onSettings: function() {
						return K.push(o("WAWebInfoFlowStep").InfoFlowStep.NewsletterSettings);
					},
					onNotificationSettings: et,
					onShareLink: function() {
						X.current = o("WAWebWamEnumChannelLinkShareEntryPoint").CHANNEL_LINK_SHARE_ENTRY_POINT.CHANNEL_INFO_PAGE, K.push(o("WAWebInfoFlowStep").InfoFlowStep.NewsletterLink);
					},
					onContactInfo: Xe,
					onVerification: je,
					onViewInsights: function(t, n) {
						Y.current = t, J.current = n, K.push(o("WAWebInfoFlowStep").InfoFlowStep.NewsletterInsights);
					},
					focusDescriptionOnMount: N
				}));
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.NewsletterContactInfo:
				_t = d.jsx(r("WAWebContactInfoDrawer.react"), {
					contact: pe || S.contact,
					onVerification: je,
					onStarred: function() {
						return K.push(o("WAWebInfoFlowStep").InfoFlowStep.Starred);
					},
					onKept: function() {
						return K.push(o("WAWebInfoFlowStep").InfoFlowStep.Kept);
					},
					onScheduledMessages: at,
					onWallpaperClick: function() {
						return K.push(o("WAWebInfoFlowStep").InfoFlowStep.Wallpaper);
					},
					onChatThemeClick: function() {
						return K.push(o("WAWebInfoFlowStep").InfoFlowStep.ChatTheme);
					},
					onMediaGallery: lt,
					onProductCatalog: Ue,
					onProductDetail: Ae,
					onEphemeral: Je,
					onLimitSharing: Ze,
					onSaveContact: ct,
					onSearchMsgs: ot,
					onClose: function() {
						return K.pop();
					},
					profileEntryPoint: T,
					onNotificationSettings: et,
					onBack: function() {
						return K.push(o("WAWebInfoFlowStep").InfoFlowStep.NewsletterInfo);
					},
					sourceGroupChatOrNewsletter: pt
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.NewsletterSettings:
				o("WAWebNewsletterGatingUtils").isNewsletterReactionSettingsEnabled() && (_t = d.jsx(r("WAWebNewsletterSettingsDrawer.react"), {
					isFirstLevel: L === o("WAWebInfoFlowStep").InfoFlowStep.NewsletterSettings,
					onBack: function() {
						return K.pop();
					},
					newsletter: pt,
					adminFunnelLogger: Q
				}));
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.NewsletterLink:
				(i = (l = S.newsletterMetadata) == null ? void 0 : l.iAmAdminOrOwner()) != null && i && (_t = d.jsx(r("WAWebNewsletterLinkDrawer.react"), {
					entryPoint: X.current,
					onClose: function() {
						K.end();
					},
					onBack: K.previousStep === o("WAWebInfoFlowStep").InfoFlowStep.NewsletterInfo ? function() {
						return K.pop();
					} : null,
					newsletter: S
				}));
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.NewsletterTransferOwnershipSelection:
				_t = d.jsx(r("WAWebNewsletterTransferOwnershipSelectionDrawer.react"), {
					chat: pt,
					onBack: function() {
						return K.pop();
					},
					onTransferOwnershipSelection: ut
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.NewsletterTransferOwnership:
				_t = d.jsx(r("WAWebNewsletterTransferOwnershipDrawer.react"), {
					contact: pe,
					chat: pt,
					onBack: function() {
						return K.pop();
					},
					onTransferCompletion: function() {
						K.push(o("WAWebInfoFlowStep").InfoFlowStep.NewsletterInfo);
					}
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.DeleteNewsletter:
				_t = d.jsx(r("WAWebNewsletterDeleteDrawer.react"), {
					chat: pt,
					onBack: function() {
						return K.pop();
					},
					onCancel: function() {
						return K.pop();
					}
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.NewsletterAdminCenter:
				_t = d.jsx(o("WAWebNewsletterEnforcementAlertFlowLoadable").WAWebNewsletterEnforcementAlertFlowLoadable, {
					chat: pt,
					onClose: function() {
						return K.pop();
					}
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.NewsletterInsights:
				_t = d.jsx(o("WAWebNewsletterInsightsDrawerLoadable").NewsletterInsightsDrawerLoadable, {
					entryPoint: J.current,
					onBack: function() {
						return K.pop();
					},
					chat: S,
					selectedTab: Y.current
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.ProductDetail:
				_t = d.jsx(r("WAWebProductCatalogProductDetailsDrawer.react"), {
					chat: S,
					collectionId: oe,
					product: r("nullthrows")(te),
					onEnd: it,
					onBack: st,
					refreshCarousel: !1,
					onProductLinkClick: Oe,
					onProductMoreInformation: Be,
					onCartClick: qe
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.ProductCollection: {
				var yt;
				_t = d.jsx(r("WAWebProductCollectionCollectionContentDrawer.react"), {
					contact: pe != null ? pe : S.contact,
					onProductDetail: Ae,
					catalogId: (yt = pe == null ? void 0 : pe.id) != null ? yt : S.id,
					onBack: function() {
						return K.pop();
					},
					onCatalogLinkClick: We,
					onCartClick: qe,
					collection: le != null ? le : void 0
				});
				break;
			}
			case o("WAWebInfoFlowStep").InfoFlowStep.ProductLink:
				_t = d.jsx(r("WAWebProductCatalogProductLinkDrawer.react"), {
					product: r("nullthrows")(te),
					onBack: function() {
						return K.pop();
					}
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.ProductInfo:
				_t = d.jsx(r("WAWebProductCatalogProductMoreInformationDrawer.react"), {
					product: r("nullthrows")(te),
					onBack: st
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.CatalogLink:
				_t = d.jsx(r("WAWebProductCatalogCatalogLinkDrawer.react"), {
					catalog: r("nullthrows")(ce),
					contact: r("nullthrows")(pe),
					onBack: function() {
						return K.pop();
					}
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.Cart: {
				var Ct = o("WAWebProductCatalogContext").getProductCatalogContext(H), bt = r("WAWebBizShowCartAction")(r("nullthrows")(ge), S, Ct);
				_t = r("nullthrows")(bt);
				break;
			}
			case o("WAWebInfoFlowStep").InfoFlowStep.Catalog:
				_t = d.jsx(r("WAWebProductCollectionCatalogViewDrawer.react"), {
					contact: pe != null ? pe : S.contact,
					onProductDetail: Ae,
					catalogId: (c = pe == null ? void 0 : pe.id) != null ? c : S.id,
					onBack: function() {
						return K.pop();
					},
					businessProfile: S.contact.businessProfile,
					onCatalogLinkClick: We,
					onCartClick: qe,
					onCollectionSeeAll: Fe
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.ProductList:
				_t = d.jsx(r("WAWebProductCatalogProductListDrawer.react"), {
					contact: pe != null ? pe : S.contact,
					onProductDetail: Ae,
					catalogId: (m = pe == null ? void 0 : pe.id) != null ? m : S.id,
					onBack: function() {
						return K.pop();
					},
					businessProfile: (C = pe == null ? void 0 : pe.businessProfile) != null ? C : S.contact.businessProfile,
					onCatalogLinkClick: We,
					onCartClick: qe
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.Starred:
				_t = d.jsx(o("WAWebStarredDrawerLoadable").StarredDrawerLoadable, {
					chat: S,
					starredMsgs: o("WAWebStarredMsgsUtils").getStarredMsgs(S),
					onClose: function() {
						return K.pop();
					},
					onSaveContact: dt,
					threadId: F
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.Wallpaper:
				_t = d.jsx(r("WAWebWallpaperDrawer.react"), {
					chat: S,
					onClose: function() {
						return K.pop();
					}
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.ChatTheme:
				_t = d.jsx(r("WAWebChatThemeDrawer.react"), {
					chat: S,
					onClose: function() {
						return K.pop();
					}
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.Kept:
				_t = d.jsx(r("WAWebKeptDrawer.react"), {
					chat: S,
					keptMsgs: S.getKeptMsgs(),
					onClose: function() {
						return K.pop();
					}
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.ScheduledMessages:
				_t = d.jsx(o("WAWebScheduledMessagesListLoadable").WAWebScheduledMessagesListLoadable, {
					chatId: o("WAJids").unsafeCoerceToChatJid(S.id.toJid()),
					onBack: function() {
						return K.pop();
					},
					onDeleteMessage: (function() {
						var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
							yield o("WAWebUnscheduleMsgAction").unscheduleMsgAction(o("WAJids").unsafeCoerceToChatJid(S.id.toJid()), e);
						});
						return function(t) {
							return e.apply(this, arguments);
						};
					})()
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.GroupSettings:
				_t = d.jsx(r("WAWebExistingGroupPermissionsDrawer.react"), {
					chat: S,
					groupMetadata: S.groupMetadata,
					onClose: function() {
						return K.pop();
					}
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.MediaGallery:
				_t = d.jsx(o("WAWebMediaGalleryDrawer.react").MediaGalleryDrawer, {
					chat: S,
					onBack: function() {
						return K.pop();
					},
					onProductDetail: Ae,
					setProductsScrollOffset: U,
					initialTab: V.current,
					productsScrollOffset: q.current,
					threadId: F
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.GroupInviteLink:
				_t = d.jsx(o("WAWebGroupInviteLinkDrawerLoadable").GroupInviteLinkDrawerLoadable, {
					chat: S,
					groupMetadata: r("nullthrows")(S.groupMetadata),
					onBack: function() {
						return K.pop();
					},
					onGroupSettings: function() {
						return K.push(o("WAWebInfoFlowStep").InfoFlowStep.GroupSettings);
					}
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.PendingParticipants:
				_t = d.jsx(r("WAWebGroupMembershipApprovalRequestsFlow.react"), {
					chat: S,
					onBack: function() {
						return K.pop();
					}
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.Verification: {
				var vt = r("nullthrows")(pe), St = vt.id, Rt = St.isLid() ? St : S.accountLid;
				_t = d.jsx(r("WAWebVerificationDrawerLoadable").VerificationDrawerLoadable, {
					lid: Rt,
					contact: r("nullthrows")(pe),
					onClose: function() {
						return K.pop();
					},
					isFirstLevel: !1
				});
				break;
			}
			case o("WAWebInfoFlowStep").InfoFlowStep.DefaultEphemerality:
				_t = d.jsx(r("WAWebDefaultEphemeralityDrawer.react"), {
					onClose: function() {
						return K.pop();
					},
					entryPoint: r("nullthrows")(Ce)
				});
				break;
			case o("WAWebInfoFlowStep").InfoFlowStep.Ephemeral: {
				var Lt = o("WAWebChatGetters").getIsGroup(S) ? o("WAWebWamEnumDisappearingModeEntryPointType").DISAPPEARING_MODE_ENTRY_POINT_TYPE.GROUP_CHAT_DISAPPEARING_MESSAGES_SETTING : o("WAWebWamEnumDisappearingModeEntryPointType").DISAPPEARING_MODE_ENTRY_POINT_TYPE.INDIVIDUAL_CHAT_DISAPPEARING_MESSAGES_SETTING;
				_t = d.jsx(r("WAWebEphemeralDrawer.react"), {
					chat: S,
					showNux: o("WAWebUserPrefsNuxPreferences").shouldShowNUX(o("WAWebNux").NUX.EPHEMERAL),
					entryPoint: o("WAWebWamEnumEphemeralSettingEntryPointType").EPHEMERAL_SETTING_ENTRY_POINT_TYPE.CHAT_INFO,
					onClose: function() {
						Re(null), K.pop();
					},
					onDDMSettingsClick: function(t) {
						return Ye(Lt, t);
					},
					pendingDuration: Se
				});
				break;
			}
			case o("WAWebInfoFlowStep").InfoFlowStep.SaveContactFlow: {
				var Et, kt = !!pe, It = (Et = Z.current) != null ? Et : o("WAWebContactUtils").getContactDataFromContactModel(S.contact), Tt = function() {
					Z.current = null, K.pop();
				};
				_t = d.jsx(r("WAWebContactEditDrawer.react"), {
					ref: xe,
					origin: kt ? o("WAWebContactLogging").ContactSourceType.GroupMemberInfo : o("WAWebContactLogging").ContactSourceType.ContactInfo,
					contactData: It,
					onSave: Tt,
					onBack: Tt
				});
				break;
			}
			case o("WAWebInfoFlowStep").InfoFlowStep.EventInfo: {
				Ee && (_t = d.jsx(o("WAWebEventInfoFlowLoadable").EventInfoFlowLoadable, {
					chat: S,
					msg: Ee,
					onBack: function() {
						return K.pop();
					}
				}, "event-info-drawer-" + Ee.id.toString()));
				break;
			}
			case o("WAWebInfoFlowStep").InfoFlowStep.AllEvents: {
				_t = d.jsx(r("WAWebEventsInChatDrawer.react"), {
					chat: S,
					onEventClick: nt,
					onBack: function() {
						return K.pop();
					}
				}, "all-events-drawer-" + S.id.toString());
				break;
			}
			case o("WAWebInfoFlowStep").InfoFlowStep.LimitSharing: {
				_t = d.jsx(r("WAWebLimitSharingDrawer.react"), {
					chat: Te != null ? Te : S,
					onClose: function() {
						De(null), K.pop();
					}
				});
				break;
			}
			case o("WAWebInfoFlowStep").InfoFlowStep.Notifications: {
				var Dt = o("WAWebChatGetters").getIsNewsletter(S), xt = !Dt && (r("WAWebEnvironment").isWindows || o("WAWebABProps").getABPropConfigValue("wa_web_group_info_notification_row") || o("WAWebABProps").getABPropConfigValue("enable_mention_everyone_receiver_web"));
				xt ? _t = d.jsx(r("WAWebChatNotificationSettingsDrawer.react"), {
					chat: S,
					onClose: function() {
						return K.pop();
					},
					onNotifyForClick: function() {
						return K.push(o("WAWebInfoFlowStep").InfoFlowStep.NotifyFor);
					}
				}) : Dt && (_t = d.jsx(o("WAWebNewsletterAdminNotificationsDrawerLoadable").NewsletterAdminNotificationsDrawerLoadable, {
					onBack: function() {
						return K.pop();
					},
					chat: S
				}));
				break;
			}
			case o("WAWebInfoFlowStep").InfoFlowStep.NotifyFor: {
				_t = d.jsx(o("WAWebNotifyForDrawerLoadable").NotifyForDrawerLoadable, {
					chat: S,
					onClose: function() {
						return K.pop();
					}
				});
				break;
			}
			case o("WAWebInfoFlowStep").InfoFlowStep.Search: {
				_t = d.jsx(r("WAWebChatSearchDrawer.react"), {
					chat: o("WAWebStateUtils").unproxy(S),
					isInFlow: !0
				}, "chat-search-" + S.id.toString());
				break;
			}
			case o("WAWebInfoFlowStep").InfoFlowStep.MemberUpdates:
				_t = d.jsx(r("WAWebGroupMemberUpdatesPanel.react"), {
					chat: S,
					onBack: function() {
						return K.pop();
					},
					onContactInfo: Qe
				});
				break;
		}
		return d.jsx(o("WAWebNewsletterProducerInsightsLogger").NewsletterProducerInsightsLoggerContext.Provider, {
			value: G,
			children: d.jsx(j, {
				ref: b,
				flow: K,
				displayName: $,
				requestDismiss: mt,
				children: _t
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.InfoFlow = C;
}), 226);
