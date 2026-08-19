__d("WAWebContactInfoDrawer.react", [
	"fbt",
	"VultureJSDeadComponent.react",
	"WAFilteredCatch",
	"WALogger",
	"WATimeUtils",
	"WAWebABProps",
	"WAWebABPropsSaga",
	"WAWebAIHatchIdentitySync",
	"WAWebAuraGating",
	"WAWebAuthAgentAffiliationUtils",
	"WAWebAuthAgentConsumerJourneyLogger",
	"WAWebBackendErrors",
	"WAWebBizBotCommandsSection.react",
	"WAWebBizProfileGatingUtils",
	"WAWebBotBaseGating",
	"WAWebBotGating",
	"WAWebBotUtils",
	"WAWebBusinessAboutSection.react",
	"WAWebBusinessAccountBanner.react",
	"WAWebBusinessContactDisclosureSection.react",
	"WAWebBusinessInfo.react",
	"WAWebBusinessLogEvents",
	"WAWebBusinessProfileCollection",
	"WAWebBusinessProfileUtils",
	"WAWebBusinessTopCard.react",
	"WAWebCTWADataSharingModel",
	"WAWebCatalogCollection",
	"WAWebChatCollection",
	"WAWebChatEphemerality",
	"WAWebChatInfoChatThemeRow.react",
	"WAWebChatInfoClearChatSection.react",
	"WAWebChatInfoDrawerRow.react",
	"WAWebChatInfoDrawerSection.react",
	"WAWebChatInfoExportChatSection.react",
	"WAWebChatInfoFavoritesSection.react",
	"WAWebChatInfoListsSection.react",
	"WAWebChatInfoMediaSection.react",
	"WAWebChatInfoPhoneNumberVisibilityIndicator.react",
	"WAWebChatInfoWallpaperRow.react",
	"WAWebChatThemeGatingUtils",
	"WAWebChatThreadLogging",
	"WAWebCmd",
	"WAWebCommonCTWAConsumerTransparency",
	"WAWebContactGetters",
	"WAWebContactInfoAboutSection",
	"WAWebContactInfoBizBot1pSection.react",
	"WAWebContactInfoChatTabFull.react",
	"WAWebContactInfoCommonGroupsSection.react",
	"WAWebContactInfoCustomerDataSection.react",
	"WAWebContactInfoDeprecatedAccountSection.react",
	"WAWebContactInfoDisclosuresSectionRow.react",
	"WAWebContactInfoEncryptionSection",
	"WAWebContactInfoHatchDisconnectButton.react",
	"WAWebContactInfoIntegritySection.react",
	"WAWebContactInfoLinkedSocialAccounts.react",
	"WAWebContactInfoMessagesSection.react",
	"WAWebContactInfoPhoneNumberSection.react",
	"WAWebContactInfoSagaSection.react",
	"WAWebContactInfoTopCard.react",
	"WAWebContactInfoWaChatSecuritySection",
	"WAWebContactManagementGating",
	"WAWebContactManagerGating",
	"WAWebContactUtils",
	"WAWebDeleteIcon.react",
	"WAWebDeleteRefreshedIcon.react",
	"WAWebDrawer.react",
	"WAWebDrawerBlock.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerButton.react",
	"WAWebDrawerButtonRefreshed.react",
	"WAWebDrawerContext",
	"WAWebDrawerHeader.react",
	"WAWebDrawerManagerGlobalContext",
	"WAWebDrawerSection.react",
	"WAWebEnvironment",
	"WAWebEphemeralSettingRow.react",
	"WAWebErrorBoundary.react",
	"WAWebFindChatAction",
	"WAWebFlatListController",
	"WAWebFrontendContactGetters",
	"WAWebGoogleProfile.react",
	"WAWebGoogleReviews.react",
	"WAWebGroupInfoSeparator.react",
	"WAWebHasAcceptedBizBotTos",
	"WAWebHatchFrontendGating",
	"WAWebIcChatlistClockIcon.react",
	"WAWebInboxFiltersGatingUtils",
	"WAWebLabelsInfoDrawerLabelWell.react",
	"WAWebLimitSharingSettingRow.react",
	"WAWebLimitSharingUIUtils",
	"WAWebListsGatingUtils",
	"WAWebListsLabelGatingUtils",
	"WAWebManageE2ESessionsJob",
	"WAWebMessageLogQplEvents",
	"WAWebMmSignalSharingDisclosureRow.react",
	"WAWebMmSignalSharingGatingUtils",
	"WAWebMmSignalSharingUserDisclosedInCollectionWindow",
	"WAWebModalManager",
	"WAWebMuteRow.react",
	"WAWebMuteUtils",
	"WAWebNoop",
	"WAWebNotificationsSettingsRow.react",
	"WAWebPencilRefreshedIcon.react",
	"WAWebPerCustomerDataSharingRow.react",
	"WAWebPerCustomerDataSharingUtils",
	"WAWebPhotoViewerModal.react",
	"WAWebProductCatalogCatalogDrawerSection.react",
	"WAWebProductCatalogContext",
	"WAWebProductCatalogSession",
	"WAWebProfilePicThumbCollection",
	"WAWebPsaVerifiedBlueIcon.react",
	"WAWebScheduledMessagesGatingUtils",
	"WAWebSendMsgDatabaseJob",
	"WAWebSessionScope",
	"WAWebStateUtils",
	"WAWebStopMessagesRow.react",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUseBusinessProfile.react",
	"WAWebUserPrefsMeUser",
	"WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
	"WAWebUsernameGatingUtils",
	"WAWebUsernameTypes",
	"WAWebUsernameWorkerCompatibleGatingUtils",
	"WAWebUtilsLogQplEvents",
	"WAWebVoipGatingUtils",
	"WAWebWamEnumActionEntryPoint",
	"WAWebWamEnumCatalogEntryPoint",
	"WAWebWamEnumLandingSurface",
	"WAWebWamEnumUnlockEntryPoint",
	"WAWebWid",
	"WDSIconIcBookmark.react",
	"WDSMargins.stylex",
	"WDSMenuBarItem.react",
	"WDSPaddings.stylex",
	"WDSText.react",
	"cr:6008",
	"gkx",
	"isStringNullOrEmpty",
	"react",
	"react-compiler-runtime",
	"useLazyRef",
	"useWAWebChatLockRestriction",
	"useWAWebContactValues",
	"useWAWebListener",
	"useWAWebOnUnmount",
	"useWAWebScheduledMsgCount",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = ["ref"], d, m = d || (d = o("react")), p = d, _ = p.useContext, f = p.useEffect, g = p.useRef, h = p.useState, y = "profile", C = "chat", b = {
		businessAccount: {
			borderTopWidth: "x178xt8z",
			borderTopStyle: "x13fuv20",
			borderTopColor: "xx42vgk",
			fontSize: "x1f6kntn",
			$$css: !0
		},
		lastSectionRow: {
			marginBottom: "xefnzgg",
			$$css: !0
		}
	}, v = { surface: "contact-info-drawer" };
	function S(e) {
		var t = o("react-compiler-runtime").c(8), n = e.catalogContext, a = e.contact, i = e.onProductCatalog, l = e.onProductDetail, u;
		t[0] !== a.id ? (u = o("WAWebCatalogCollection").CatalogCollection.get(a.id), t[0] = a.id, t[1] = u) : u = t[1];
		var c = u;
		if (!c) return null;
		var d;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (d = s._(
			/*BTDS*/
			""
		), t[2] = d) : d = t[2];
		var p = d, _ = n.session;
		if (_.isAccidental()) return null;
		if (o("WAWebBusinessProfileUtils").hasShop(a.businessProfile)) {
			if (o("WAWebBusinessProfileUtils").isShopBanned(a.businessProfile)) return null;
			var f;
			return t[3] === Symbol.for("react.memo_cache_sentinel") ? (f = m.jsx(r("VultureJSDeadComponent.react"), { name: "WAWebProductCatalogShopsCatalogDrawerSection" }), t[3] = f) : f = t[3], f;
		}
		var g;
		return t[4] !== c || t[5] !== i || t[6] !== l ? (g = m.jsx(r("WAWebProductCatalogCatalogDrawerSection.react"), {
			onProductDetail: l,
			onProductCatalog: i,
			catalog: c,
			subtitle: p,
			hideIncompleteRows: !0,
			shouldLog: !0
		}), t[4] = c, t[5] = i, t[6] = l, t[7] = g) : g = t[7], g;
	}
	function R(t) {
		var a, i, l, d, p, R, k, I = t.ref, T = babelHelpers.objectWithoutPropertiesLoose(t, c), D = T.contact, x = T.onBack, $ = T.onChatThemeClick, P = T.onClose, N = T.onProductCatalog, M = T.onProductDetail, w = T.onSaveContact, A = T.onVerification, F = T.onWallpaperClick, O = r("useWAWebUIM")(), B = _(o("WAWebDrawerContext").DrawerContext), W = o("useWAWebContactValues").useContactValues(T.contact.id, [
			(R = o("WAWebContactGetters")).getId,
			(k = o("WAWebFrontendContactGetters")).getFormattedName,
			k.getFormattedUser,
			k.getFormattedShortName,
			R.getIsBusiness,
			R.getIsEnterprise,
			k.getIsMyContact,
			k.getCommonGroups,
			R.getShowBusinessCheckmarkAsPrimary,
			R.getShowBusinessCheckmarkAsSecondary,
			R.getVerifiedName,
			R.getVerifiedLevel,
			R.getName,
			R.getNotifyName,
			R.getLabels,
			k.getPhoneNumber,
			k.getIsContactBlocked
		]), q = W[0], U = W[1], V = W[2], H = W[3], G = W[4], z = W[5], j = W[6], K = W[7], Q = W[8], X = W[9], Y = W[10], J = W[11], Z = W[12], ee = W[13], te = W[14], ne = W[15], re = W[16], oe = o("useWAWebContactValues").useContactValues(T.contact.id, [
			k.getBusinessCatalog,
			R.getIsMe,
			R.getStatusMute,
			k.getDisplayName,
			k.getShareOwnPn,
			R.getRequestedPnTimestamp,
			R.getCanRequestPhoneNumber,
			R.getIsIAS,
			R.getIsCAPISupportAccount
		]), ae = oe[0], ie = oe[1], le = oe[2], se = oe[3], ue = oe[4], ce = oe[5], de = oe[6], me = oe[7], pe = oe[8], _e = r("useLazyRef")(function() {
			return new (r("WAWebFlatListController"))();
		}), fe = g(!1), ge = h(100), he = ge[0], ye = ge[1], Ce = T.showChatTabInContactInfoDrawer === !0, be = (a = T.initialContactInfoTab) != null ? a : y, ve = h(be), Se = ve[0], Re = ve[1], Le = h(be === C), Ee = Le[0], ke = Le[1], Ie = o("WAWebChatCollection").ChatCollection.get(q), Te = r("useWAWebScheduledMsgCount")((i = Ie == null ? void 0 : Ie.id) != null ? i : null), De = o("WAWebUseBusinessProfile.react").useBusinessProfile(q, [
			"isBizBot1p",
			"isBizBot3p",
			"isAuthorizedAgent",
			"obaPhoneNumber",
			"parentCompanyLogoUrl",
			"parentCompanyName",
			"stale",
			"isProfileLinked",
			"coverPhoto",
			"isCatalogDisabledDueToMetaLinking",
			"googlePlaceId",
			"showGoogleReviews",
			"showGoogleInfo",
			"googlePlace"
		]), xe = o("WAWebBotBaseGating").isBizBot3pEnabled() && (De == null ? void 0 : De.isBizBot3p) === !0, $e = o("WAWebBotBaseGating").isBizBot1pEnabled() && (De == null ? void 0 : De.isBizBot1p) === !0, Pe = o("WAWebHasAcceptedBizBotTos").useHasAcceptedBizBotTos(), Ne = ie, Me = o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(q), we = o("WAWebBotGating").isMetaAiChatInThreadsMode(q), Ae = De == null ? void 0 : De.googlePlaceId;
		f(function() {
			!o("WAWebBizProfileGatingUtils").isGoogleProfileIntegrationEnabled() || Ae == null || Ae === "" || o("WAWebBusinessProfileCollection").BusinessProfileCollection.fetchBizProfile(q).catch(r("WAWebNoop"));
		}, [q, Ae]), f(function() {
			De && !De.stale && ae && o("WAWebCatalogCollection").CatalogCollection.findCarouselCatalog(q).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(t) {
				o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[contact drawer] catalog fetch failed"])));
			})).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").CatalogUnknownError, function(e) {
				o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[contact drawer] catalog fetch failed"])));
			}));
			var t = [q, o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow()], n = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
			n != null && t.push(n), o("WAWebSendMsgDatabaseJob").getFanOutListJob(t).then(function(e) {
				o("WAWebManageE2ESessionsJob").ensureE2ESessions({
					identityChanged: !1,
					sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
					wids: e
				});
			});
			var r = o("WAWebProductCatalogContext").getProductCatalogContext(B), a = r.session;
			if (a.isAccidental()) {
				var i;
				(i = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("right")) == null || i.updateContext(o("WAWebProductCatalogContext").buildProductCatalogContext(new (o("WAWebProductCatalogSession")).ProductCatalogSession(), o("WAWebContactUtils").getMaybeBizPlatformForLogging(q.toString()), o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE));
			} else if (G) {
				var l = o("WAWebUserPrefsMeUser").isMePnUser(q), s = T.profileEntryPoint;
				!l && s && o("WAWebBusinessLogEvents").logProfileImpression(o("WAWebProductCatalogContext").getProductCatalogSessionId(B), s, !!(De != null && De.isProfileLinked), !!(De != null && De.coverPhoto));
			}
			De && o("WAWebMessageLogQplEvents").qplEndProfileView(2);
		}, []), f(function() {
			var e = o("WAWebUserPrefsMeUser").isMePnUser(q), t = o("WAWebProductCatalogContext").getProductCatalogContext(B), n = t.session;
			!n.isAccidental() && !e && Ie != null && Ie.id && o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([{
				activityType: "profileViews",
				ts: o("WATimeUtils").unixTime(),
				chatId: Ie.id
			}]);
		}, []);
		var Fe = g(null);
		r("useWAWebOnUnmount")(function() {
			var e = o("WAWebProductCatalogContext").getProductCatalogContext(B), t = e.session;
			t.isAccidental() || G && o("WAWebBusinessLogEvents").logProfileExit(o("WAWebProductCatalogContext").getProductCatalogSessionId(B), he, De == null ? void 0 : De.isProfileLinked, !!(De != null && De.coverPhoto));
		});
		var Oe = function() {
			P();
		}, Be = function() {
			x && x();
		}, We = o("useWAWebChatLockRestriction").useChatLockRestriction({
			id: "locked-chat-info-" + ((l = Ie == null ? void 0 : Ie.id.toString()) != null ? l : "unknown"),
			condition: Ie != null ? Ie : "bypass",
			onPromptFailure: x ? Be : Oe,
			entryPoint: o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT.CHAT_INFO,
			landingSurface: o("WAWebWamEnumLandingSurface").LANDING_SURFACE.CHAT_INFO,
			unlockEntryPoint: o("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT.CHAT_INFO
		});
		if (f(function() {
			if (We && Fe.current !== q.user && (De == null ? void 0 : De.isAuthorizedAgent) === !0 && (De == null ? void 0 : De.parentCompanyName) != null && (De == null ? void 0 : De.parentCompanyName) !== "") {
				var e;
				Fe.current = q.user, o("WAWebAuthAgentConsumerJourneyLogger").logProfileAffiliationImpression(q.user, De.parentCompanyName, (e = De.obaPhoneNumber) != null ? e : null);
			}
		}, [
			q,
			We,
			De == null ? void 0 : De.isAuthorizedAgent,
			De == null ? void 0 : De.parentCompanyName,
			De == null ? void 0 : De.obaPhoneNumber
		]), !We) return null;
		var qe = function() {
			A(o("WAWebStateUtils").unproxy(D));
		}, Ue = function() {
			var e = o("WAWebChatCollection").ChatCollection.assertGet(q);
			o("WAWebCmd").Cmd.deleteOrExitChatFromEntryPoint(e, 12);
		}, Ve = function(t, n) {
			var e;
			if (o("WAWebBotUtils").isManusBot(q)) {
				var a = o("WAWebBotGating").getManusBotProfileThumb();
				a !== "" && o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(q).set({
					eurl: a,
					previewEurl: a,
					tag: "man",
					stale: !1,
					timestamp: Date.now()
				});
			} else o("WAWebBotUtils").isHatchBot(q) ? o("WAWebAIHatchIdentitySync").syncHatchContactIdentity({
				contact: D,
				wid: q
			}) : o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.resyncPicturesByWid([q]);
			var i = D.getProfilePicThumb(), l = r("WAWebWid").isPSA(q) || !r("isStringNullOrEmpty")(i.imgFull);
			if (o("WAWebABProps").getABPropConfigValue("wds_web_profile_photo") ? !l : !fe.current && !r("WAWebWid").isPSA(q) || i.imgFull === void 0) {
				o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
				return;
			}
			var u = (e = n != null ? n : t == null ? void 0 : t.target) != null ? e : document.body, c = function(t) {
				t(u);
			};
			o("WAWebModalManager").ModalManager.openMedia(m.jsx(r("WAWebPhotoViewerModal.react"), {
				contact: D,
				profilePicThumb: i,
				animateBorderRadius: !0,
				getZoomNode: c
			}), {
				transition: "profile-viewer",
				uim: O
			});
		}, He = function() {
			fe.current = !0;
		}, Ge = function(t) {
			o("WAWebUtilsLogQplEvents").qplStartProductView("ContactInfo"), M(t);
		}, ze = function() {
			return !(!D || !G || !De || !ae || De.isCatalogDisabledDueToMetaLinking);
		}, je = function(t) {
			var e = Math.floor(100 * (1 + t.currentTarget.scrollTop / t.currentTarget.offsetHeight));
			e > he && ye(e);
		}, Ke = z ? null : m.jsxs(m.Fragment, { children: [m.jsx(r("WAWebContactInfoCommonGroupsSection.react"), {
			contact: D,
			onClose: Oe,
			flatListController: _e.current
		}), m.jsx(r("WAWebGroupInfoSeparator.react"), {})] }), Qe = null;
		T.onMediaGallery && Ie && !Me && (Qe = m.jsx(r("WAWebChatInfoMediaSection.react"), {
			chat: Ie,
			onMediaGallery: T.onMediaGallery,
			threadId: T.threadId
		}));
		var Xe;
		!r("gkx")("26258") && n("cr:6008") && (Xe = m.jsx(n("cr:6008"), {
			chat: Ie,
			contact: D,
			isRefresh: !0
		}));
		var Ye = null;
		ze() && (Ye = m.jsx(S, {
			contact: D,
			catalogContext: o("WAWebProductCatalogContext").getProductCatalogContext(B),
			onProductDetail: Ge,
			onProductCatalog: N
		}));
		var Je = Ie && o("WAWebMuteUtils").canMute(Ie.mute) && !Me ? m.jsx(r("WAWebMuteRow.react"), {
			chat: Ie,
			mute: Ie.mute
		}) : null, Ze = (d = Ie == null || (p = Ie.accountLid) == null ? void 0 : p.toString()) != null ? d : "", et = o("WAWebPerCustomerDataSharingUtils").isPerCustomerDataSharingFeatureEnabled(Ze, o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue()) ? m.jsx(r("WAWebPerCustomerDataSharingRow.react"), {
			accountLid: Ze,
			chat: Ie
		}) : null, tt = r("WAWebEnvironment").isWindows || o("WAWebVoipGatingUtils").isCallingEnabled() && r("WAWebAuraGating").isRingtonesBenefitActive(), nt = Ie && T.onNotificationSettings && tt ? m.jsx(r("WAWebNotificationsSettingsRow.react"), {
			onClick: T.onNotificationSettings,
			chat: Ie,
			testid: "notification-settings-row"
		}) : null, rt = G && Ie && o("WAWebMuteUtils").canMute(Ie.mute) ? m.jsx(r("WAWebStopMessagesRow.react"), {
			contact: o("WAWebStateUtils").unproxy(D),
			chat: o("WAWebStateUtils").unproxy(Ie),
			isRefresh: !0
		}) : null, ot = o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper") ? m.jsx(r("WAWebChatInfoWallpaperRow.react"), { onWallpaperClick: F }) : null, at = o("WAWebChatThemeGatingUtils").isChatThemesEnabled() ? m.jsx(r("WAWebChatInfoChatThemeRow.react"), { onClick: $ }) : null, it = pe && o("WAWebABPropsSaga").getIsSagaV1Enabled() ? m.jsx(r("WAWebContactInfoSagaSection.react"), {}) : null, lt;
		T.onStarred && !Me && (lt = m.jsx(r("WAWebContactInfoMessagesSection.react"), { onStarred: T.onStarred }));
		var st;
		if (Ie && (Ie.hasKeptMsgs() || o("WAWebChatEphemerality").isEphemeralSettingOn(Ie))) {
			var ut = m.jsx(o("WAWebText.react").WAWebTextTitle, {
				as: "span",
				children: s._(
					/*BTDS*/
					""
				)
			}), ct = m.jsx(r("WDSIconIcBookmark.react"), {}), dt = {
				testid: "block-kept-messages",
				onClick: T.onKept,
				icon: ct,
				title: ut
			};
			st = m.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
				titleTestId: "section-kept-messages",
				xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingHor0,
				children: m.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, babelHelpers.extends({}, dt))
			});
		}
		var mt = null;
		if (o("WAWebScheduledMessagesGatingUtils").isScheduledMessagesSenderEnabled() && T.onScheduledMessages != null && !Me && Te >= 1) {
			var pt = m.jsx(o("WAWebText.react").WAWebTextTitle, {
				as: "span",
				children: s._(
					/*BTDS*/
					""
				)
			});
			mt = m.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
				titleTestId: "section-scheduled-messages",
				xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingHor0,
				children: m.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
					testid: "block-scheduled-messages",
					icon: m.jsx(o("WAWebIcChatlistClockIcon.react").IcChatlistClockIcon, {}),
					onClick: T.onScheduledMessages,
					title: pt,
					side: m.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: s._(
						/*BTDS*/
						"",
						[s._param("count", Te, [0])]
					) })
				})
			});
		}
		var _t = Ie && o("WAWebChatEphemerality").shouldShowEphemeralSetting(Ie) ? m.jsx(o("WAWebEphemeralSettingRow.react").EphemeralSettingRow, {
			onClick: T.onEphemeral,
			chat: Ie,
			testid: "contact-info-dm-setting-row"
		}) : null, ft = Ie && o("WAWebLimitSharingUIUtils").isLimitSharingSettingVisible(Ie) ? m.jsx(r("WAWebLimitSharingSettingRow.react"), {
			onClick: function() {
				return T.onLimitSharing == null ? void 0 : T.onLimitSharing(Ie);
			},
			chat: Ie,
			testid: "contact-info-ls-setting-row"
		}) : null, gt = o("WAWebContactGetters").getIsAiHub(D), ht = null;
		q.isRegularUser() && !xe && !gt ? ht = m.jsx(r("WAWebContactInfoEncryptionSection"), {
			contactId: q,
			onVerificationClick: qe
		}) : r("WAWebWid").isPSA(q) && (ht = m.jsx(r("WAWebContactInfoWaChatSecuritySection"), {}));
		var yt = q.isLid() && ne == null && !o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(), Ct = D.isUsernameContact, bt = o("WAWebFrontendContactGetters").getIsMyContact(D) && !Ct, vt = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() && !q.isBot() && !gt && (G || bt), St = q.isLid() && !q.isAiHub() && (Ie == null ? void 0 : Ie.lidOriginType) !== o("WAWebUsernameTypes").LidOriginType.GENERAL && !o("WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration").hasPhoneNumberHidingThreadPromotionMigrationStarted() && !o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(), Rt = Ie && St ? m.jsx(o("WAWebChatInfoPhoneNumberVisibilityIndicator.react").PhoneNumberVisibilityIndicator1On1, { chat: Ie }) : null, Lt = G && Ie && (!o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() || !re) && o("WAWebMmSignalSharingUserDisclosedInCollectionWindow").isMmSignalSharingUserDisclosedInCollectionWindow(Ie.mmSignalSharingExpirationWindow) ? m.jsx(r("WAWebMmSignalSharingDisclosureRow.react"), {
			chat: Ie,
			isRefresh: !0
		}) : null, Et;
		$e ? Et = Pe ? m.jsx(r("WAWebContactInfoBizBot1pSection.react"), {}) : null : xe && (Et = m.jsx(r("VultureJSDeadComponent.react"), { name: "WAWebContactInfoBizBot3pSection" }));
		var kt = m.jsxs(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
			xstyle: [o("WAWebCommonCTWAConsumerTransparency").shouldShowROWConsumerDisclosure() && b.lastSectionRow, [o("WDSPaddings.stylex").wdsPaddings.paddingHor0, o("WDSMargins.stylex").wdsMargins.marginBottom0]],
			children: [
				nt || Je,
				et,
				rt,
				it,
				_t,
				ft,
				ot,
				at,
				Rt,
				Lt
			]
		}), It = Ie != null && o("WAWebCommonCTWAConsumerTransparency").shouldShowConsumerTransparencyDisclosure(Ie) && o("WAWebCommonCTWAConsumerTransparency").shouldShowROWConsumerDisclosure(), Tt = m.jsxs(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
			xstyle: [b.lastSectionRow, [o("WDSPaddings.stylex").wdsPaddings.paddingHor0, o("WDSMargins.stylex").wdsMargins.marginBottom0]],
			children: [
				ht,
				It ? m.jsx(r("WAWebContactInfoDisclosuresSectionRow.react"), {}) : null,
				Et
			]
		}), Dt = !G, xt = Dt || me || pe || q.isBot() || gt || xe ? null : m.jsx(r("WAWebBusinessAboutSection.react"), { contact: o("WAWebStateUtils").unproxy(D) }), $t = null;
		q.isBot() || gt ? $t = null : Dt && ($t = m.jsx(r("WAWebContactInfoAboutSection"), { contact: o("WAWebStateUtils").unproxy(D) }));
		var Pt = null;
		xe && De && (Pt = m.jsx(r("VultureJSDeadComponent.react"), { name: "WAWebBizBot3pInfoAboutSection" }));
		var Nt = null;
		o("WAWebBotBaseGating").isBizBot3pEnabled() && De && (Nt = m.jsx(r("WAWebBizBotCommandsSection.react"), { businessProfile: o("WAWebStateUtils").unproxy(De) }));
		var Mt = function() {
			T.onContactInfoAction == null || T.onContactInfoAction("edit_contact"), w == null || w(D);
		}, wt = G && De && !q.isBot() ? m.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "contact-info-drawer-business-top-card",
			children: m.jsx(r("WAWebBusinessTopCard.react"), {
				contact: D,
				onProfilePicLoad: He,
				onProfilePicClick: Ve,
				businessProfile: o("WAWebStateUtils").unproxy(De),
				onProductCatalog: N,
				displayRequestPhoneNumber: yt,
				onSaveContact: Mt,
				sourceChat: T.sourceGroupChatOrNewsletter,
				onOpenChatTabInContactManager: Ce ? function() {
					Re(C), ke(!0);
				} : void 0
			})
		}) : m.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "contact-info-drawer-top-card",
			children: m.jsx(r("WAWebContactInfoTopCard.react"), {
				contact: D,
				onDetailImageLoad: He,
				onDetailImageClick: Ve,
				isMessageYourselfChat: Ne,
				displayRequestPhoneNumber: yt,
				onSearchMsgs: T.onSearchMsgs,
				onContactInfoAction: T.onContactInfoAction,
				onSaveContact: Mt,
				sourceChat: T.sourceGroupChatOrNewsletter,
				onOpenChatTabInContactManager: Ce ? function() {
					Re(C), ke(!0);
				} : void 0
			})
		}), At = o("WAWebBizProfileGatingUtils").isGoogleProfileIntegrationEnabled() && o("WAWebBusinessProfileUtils").isGoogleLinked(De), Ft, Ot, Bt, Wt = null, qt = null, Ut = void 0;
		if (G && De) {
			var Vt;
			if (Wt = q.isBot() ? null : m.jsx(r("WAWebBusinessInfo.react"), {
				businessProfile: o("WAWebStateUtils").unproxy(De),
				showBusinessDetails: !gt,
				showDescription: !xe
			}), At && De.showGoogleInfo === !0 && !q.isBot() && !gt) {
				var Ht = De.googlePlace;
				qt = m.jsx(r("WAWebGoogleProfile.react"), {
					address: Ht == null ? void 0 : Ht.formattedAddress,
					weekdayHours: Ht == null ? void 0 : Ht.weekdayHours,
					latitude: Ht == null ? void 0 : Ht.latitude,
					longitude: Ht == null ? void 0 : Ht.longitude,
					website: Ht == null ? void 0 : Ht.websiteUri,
					isProfileLinked: De.isProfileLinked,
					hasCoverPhoto: !!De.coverPhoto
				});
			}
			var Gt = De.isAuthorizedAgent, zt = De.obaPhoneNumber, jt = De.parentCompanyLogoUrl, Kt = De.parentCompanyName;
			if (Ft = !me && !pe && !gt && !o("WAWebBotUtils").isBotChannelFBID(q) && Gt !== !0 ? m.jsx(r("WAWebBusinessAccountBanner.react"), { contact: D }) : null, Gt === !0 && Kt != null && Kt !== "") {
				var Qt = o("WAWebAuthAgentAffiliationUtils").getAuthAgentParentWid(zt), Xt = Qt != null ? function() {
					o("WAWebAuthAgentConsumerJourneyLogger").logProfileAffiliationTap(q.user, Kt, zt), o("WAWebFindChatAction").findOrCreateLatestChat(Qt, "agentAffiliationRow").then(function(e) {
						var t = e.chat;
						o("WAWebCmd").Cmd.chatInfoDrawer(t);
					}).catch(r("WAWebNoop"));
				} : null, Yt = m.jsxs("div", {
					className: "x78zum5 x6s0dn4 x1trrmfo",
					children: [
						jt != null && m.jsx("img", {
							className: "x1kky2od xlup9mm x1c9tyrk xeusxvb x1pahc9y x1ertn4p xl1xv1r",
							src: jt,
							alt: ""
						}),
						s._(
							/*BTDS*/
							"",
							[s._param("parentCompanyName", Kt)]
						),
						m.jsx(o("WAWebPsaVerifiedBlueIcon.react").PsaVerifiedBlueIcon, {
							width: 14,
							height: 14
						})
					]
				});
				Ot = m.jsx(r("WAWebDrawerSection.react"), {
					xstyle: b.businessAccount,
					children: m.jsx(r("WAWebDrawerBlock.react"), {
						testid: "agent-affiliation-row",
						onClick: Xt != null ? Xt : void 0,
						children: Yt
					})
				});
			}
			((Vt = te == null ? void 0 : te.length) != null ? Vt : 0) > 0 && o("WAWebListsLabelGatingUtils").canDisplayLabel() && !(o("WAWebContactManagerGating").contactManagerEnabled() && o("WAWebContactManagerGating").isEligibleForCustomerFields(D)) && (Bt = m.jsx(r("WAWebDrawerSection.react"), {
				theme: "padding",
				children: m.jsx(r("WAWebLabelsInfoDrawerLabelWell.react"), {
					labels: te,
					theme: "standalone"
				})
			})), Ut = je;
		}
		var Jt = {
			title: s._(
				/*BTDS*/
				""
			),
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			focusBackOrCancel: !0
		}, Zt;
		x ? Zt = babelHelpers.extends({ onBack: Be }, Jt) : Zt = babelHelpers.extends({ onCancel: Oe }, Jt);
		var en;
		De && De.isProfileLinked === !0 && o("WAWebBizProfileGatingUtils").bizLinkedAccountsEnabled() && o("WAWebABProps").getABPropConfigValue("web_abprop_business_profile_refresh_linked_account_enabled") && (en = m.jsx(r("WAWebContactInfoLinkedSocialAccounts.react"), {
			businessProfile: o("WAWebStateUtils").unproxy(De),
			rowTheme: "linked-account-consumer"
		}));
		var tn;
		if (o("WAWebContactUtils").canSaveAsMyContact(D.id) && (bt || Ct && o("WAWebUsernameWorkerCompatibleGatingUtils").usernameContactUIEnabled()) && o("WAWebContactManagementGating").contactManagementEnabled()) {
			var nn = s._(
				/*BTDS*/
				""
			);
			tn = m.jsx(r("WDSMenuBarItem.react"), {
				onClick: Mt,
				title: nn,
				testid: "btn-save-contact",
				icon: o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon
			});
		}
		return m.jsxs(r("WAWebDrawer.react"), {
			ref: I,
			theme: "striped",
			testid: "chat-info-drawer",
			tsNavigationData: v,
			children: [
				m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, babelHelpers.extends({}, Zt, {
					testid: "contact-info-header",
					children: tn
				})),
				Ce && m.jsxs("div", {
					className: "x78zum5 x1q0g3np xso031l x1q0q8m5 x120ee7l",
					role: "tablist",
					"data-testid": "contact-info-tab-bar",
					children: [m.jsx("button", babelHelpers.extends({}, {
						0: { className: "x1iyjqo2 xs83m0k x1r8uery x78zum5 xl56j7k x6s0dn4 x16ovd2e x12xbjc7 x1ypdohk xlxy82 x1q0q8m5 x16stqrj xjbqb8w x14e42zd x10w94by x972fbf" },
						1: { className: "x1iyjqo2 xs83m0k x1r8uery x78zum5 xl56j7k x6s0dn4 x16ovd2e x12xbjc7 x1ypdohk xlxy82 x1q0q8m5 xjbqb8w x14e42zd x10w94by x972fbf x1fftf1g" }
					}[(Se === y) << 0], {
						role: "tab",
						"aria-selected": Se === y,
						onClick: function() {
							return Re(y);
						},
						"data-testid": "contact-info-tab-profile",
						children: m.jsx(r("WDSText.react"), {
							type: Se === y ? "Body2Emphasized" : "Body2",
							colorName: Se === y ? "contentDefault" : "contentDeemphasized",
							children: s._(
								/*BTDS*/
								""
							)
						})
					})), m.jsx("button", babelHelpers.extends({}, {
						0: { className: "x1iyjqo2 xs83m0k x1r8uery x78zum5 xl56j7k x6s0dn4 x16ovd2e x12xbjc7 x1ypdohk xlxy82 x1q0q8m5 x16stqrj xjbqb8w x14e42zd x10w94by x972fbf" },
						1: { className: "x1iyjqo2 xs83m0k x1r8uery x78zum5 xl56j7k x6s0dn4 x16ovd2e x12xbjc7 x1ypdohk xlxy82 x1q0q8m5 xjbqb8w x14e42zd x10w94by x972fbf x1fftf1g" }
					}[(Se === C) << 0], {
						role: "tab",
						"aria-selected": Se === C,
						onClick: function() {
							Re(C), ke(!0);
						},
						"data-testid": "contact-info-tab-chat",
						children: m.jsx(r("WDSText.react"), {
							type: Se === C ? "Body2Emphasized" : "Body2",
							colorName: Se === C ? "contentDefault" : "contentDeemphasized",
							children: s._(
								/*BTDS*/
								""
							)
						})
					}))]
				}),
				m.jsx("div", babelHelpers.extends({}, {
					0: { className: "x78zum5 xdt5ytf x1iyjqo2 xs83m0k x1r8uery x6ikm8r x10wlt62" },
					1: { className: "xdt5ytf x1iyjqo2 xs83m0k x1r8uery x6ikm8r x10wlt62 x1s85apg" }
				}[!!(Ce && Se !== y) << 0], { children: m.jsx(r("WAWebDrawerBody.react"), {
					flatListControllers: [_e.current],
					onScroll: Ut,
					children: m.jsxs("section", {
						className: "x1c4vz4f x2lah0s xdl72j9 x1fcywrv",
						children: [
							wt,
							At ? m.jsx(r("WAWebGoogleReviews.react"), { googlePlace: De == null ? void 0 : De.googlePlace }) : Ft,
							Ot,
							Ie ? m.jsx(r("WAWebBusinessContactDisclosureSection.react"), { chat: Ie }) : null,
							Pt,
							Nt,
							Bt,
							Ye,
							Wt,
							qt,
							en,
							m.jsx(r("WAWebContactInfoCustomerDataSection.react"), { contact: D }),
							vt && !(o("WAWebContactManagerGating").contactManagerEnabled() && o("WAWebContactManagerGating").isEligibleForCustomerFields(D)) && m.jsx(r("WAWebContactInfoPhoneNumberSection.react"), { contact: D }),
							$t,
							At ? Ft : null,
							Qe && m.jsx(r("WAWebGroupInfoSeparator.react"), {}),
							Qe,
							!Me && m.jsx(r("WAWebGroupInfoSeparator.react"), {}),
							lt,
							st,
							mt,
							kt,
							Tt,
							Ie && m.jsx(r("WAWebContactInfoDeprecatedAccountSection.react"), { chat: Ie }),
							m.jsx(r("WAWebGroupInfoSeparator.react"), {}),
							xt,
							Xe,
							!Ne && Ke,
							Ie && !Me && Ie.canToggleFavorite() && o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled() && m.jsx(r("WAWebChatInfoFavoritesSection.react"), { chat: Ie }),
							Ie && !Me && o("WAWebListsGatingUtils").isListsEnabled() && m.jsx(r("WAWebChatInfoListsSection.react"), { chat: Ie }),
							Ie && !Me && m.jsx(r("WAWebChatInfoExportChatSection.react"), { chat: Ie }),
							Ie && !Me && !we && m.jsx(r("WAWebChatInfoClearChatSection.react"), { chat: Ie }),
							o("WAWebBotUtils").isHatchBot(D.id) && o("WAWebHatchFrontendGating").isHatchIntegrationEnabled() && m.jsx(r("WAWebContactInfoHatchDisconnectButton.react"), { contact: D }),
							!Ne && m.jsx(r("WAWebContactInfoIntegritySection.react"), { contact: D }),
							!Me && !we && m.jsx(E, {
								chatId: q,
								handleClick: Ue,
								isRefresh: !0
							})
						]
					})
				}) })),
				Ce && Ee && m.jsx("div", babelHelpers.extends({}, {
					0: { className: "x78zum5 xdt5ytf x1iyjqo2 xs83m0k x1r8uery x6ikm8r x10wlt62" },
					1: { className: "xdt5ytf x1iyjqo2 xs83m0k x1r8uery x6ikm8r x10wlt62 x1s85apg" }
				}[(Se !== C) << 0], { children: m.jsx(L, { chat: Ie }) }))
			]
		}, "contact-info-modal");
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t = o("react-compiler-runtime").c(4), n = e.chat;
		if (n != null) {
			var a;
			return t[0] !== n ? (a = m.jsx(r("WAWebContactInfoChatTabFull.react"), { chat: n }), t[0] = n, t[1] = a) : a = t[1], a;
		}
		var i;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (i = { className: "x78zum5 xl56j7k x6s0dn4 x1sk1jro x1ci70gm" }, t[2] = i) : i = t[2];
		var l;
		return t[3] === Symbol.for("react.memo_cache_sentinel") ? (l = m.jsx(r("WAWebDrawerBody.react"), { children: m.jsx("div", babelHelpers.extends({}, i, {
			"data-testid": "contact-info-chat-tab",
			children: m.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					""
				)
			})
		})) }), t[3] = l) : l = t[3], l;
	}
	function E(e) {
		var t = o("react-compiler-runtime").c(12), n = e.chatId, a = e.handleClick, i = e.isRefresh, l;
		t[0] !== n ? (l = function() {
			return o("WAWebChatCollection").ChatCollection.get(n) != null;
		}, t[0] = n, t[1] = l) : l = t[1];
		var u = h(l), c = u[0], d = u[1], p;
		if (t[2] !== n ? (p = function(t) {
			t.id.equals(n) && d(!1);
		}, t[2] = n, t[3] = p) : p = t[3], o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "remove", p), !c) return null;
		var _;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
			/*BTDS*/
			""
		), t[4] = _) : _ = t[4];
		var f = _;
		if (i === !0) {
			var g;
			t[5] === Symbol.for("react.memo_cache_sentinel") ? (g = { className: "x1280gxy" }, t[5] = g) : g = t[5];
			var y;
			t[6] === Symbol.for("react.memo_cache_sentinel") ? (y = m.jsx(o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon, {}), t[6] = y) : y = t[6];
			var C;
			return t[7] !== a ? (C = m.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerButtonsSection, { children: m.jsx("div", babelHelpers.extends({}, g, { children: m.jsx(r("WAWebDrawerButtonRefreshed.react"), {
				testid: "li-delete-chat",
				icon: y,
				danger: !0,
				onClick: a,
				children: f
			}) })) }), t[7] = a, t[8] = C) : C = t[8], C;
		}
		var b;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (b = m.jsx(o("WAWebDeleteIcon.react").DeleteIcon, {}), t[9] = b) : b = t[9];
		var v;
		return t[10] !== a ? (v = m.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerButtonsSection, { children: m.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
			testid: "li-delete-chat",
			icon: b,
			color: "danger",
			onClick: a,
			theme: "chat-info",
			children: f
		}) }), t[10] = a, t[11] = v) : v = t[11], v;
	}
	l.default = R;
}), 226);
