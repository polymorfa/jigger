__d("WAWebBizToolsFlow.react", [
	"fbt",
	"WAFilteredCatch",
	"WALogger",
	"WAWebActiveAccountInfoContext.react",
	"WAWebAdsStackIcon.react",
	"WAWebAuthAgentFeatureControlGateKeeper",
	"WAWebBackendErrors",
	"WAWebBizAIDrawer.react",
	"WAWebBizAiAgentStatusUtils",
	"WAWebBizAiOnboardingQrBanner.react",
	"WAWebBizAiToolsTile.react",
	"WAWebBizBroadcastDeviceCapabilityCommon",
	"WAWebBizBroadcastsBizToolsUploadDrawerButton.react",
	"WAWebBizBroadcastsToolsEntryStrings",
	"WAWebBizNativeAdsGatingUtils",
	"WAWebBizNativeAdsWamLogger",
	"WAWebBizOrderManagementFlow.react",
	"WAWebBizPaymentsHomeManagementFlow.react",
	"WAWebBizProfileGatingUtils",
	"WAWebBizQuickRepliesDrawer.react",
	"WAWebBizToolWhatsNextSection.react",
	"WAWebBizToolsDrawerBodySection.react",
	"WAWebBizToolsFlowSteps",
	"WAWebBizToolsGatingUtils",
	"WAWebBizToolsUtils",
	"WAWebBusinessBroadcastHomeFlow.react",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebCatalogCollection",
	"WAWebCatalogManagementFlowLoadable",
	"WAWebChatAssignmentGatingUtils",
	"WAWebChatlistUtils",
	"WAWebConnModel",
	"WAWebContactCollection",
	"WAWebContactUtils",
	"WAWebDrawer.react",
	"WAWebDrawerButton.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerManager",
	"WAWebDrawerManagerGlobalContext",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFetchSubscriptionEntryPoints",
	"WAWebGetBizProfileDrawerContent",
	"WAWebKeyboardHotKeys.react",
	"WAWebKeyboardTabUtils",
	"WAWebLabelFlowLoadable",
	"WAWebLabelOutlineIcon.react",
	"WAWebListPeopleIcon.react",
	"WAWebListsGatingUtils",
	"WAWebManagedAccountBanner.react",
	"WAWebMegaphoneRefreshedIcon.react",
	"WAWebMetaVerifiedListItem.react",
	"WAWebNoop",
	"WAWebNux",
	"WAWebOpenManageAdsInLwi",
	"WAWebOrderGatingUtils",
	"WAWebPaymentsGatingUtils",
	"WAWebProductCatalogContext",
	"WAWebProductCatalogMetaLinkingGatingUtils",
	"WAWebProductCatalogSession",
	"WAWebProfileDrawer.react",
	"WAWebProfilePicThumbCollection",
	"WAWebRecUnitCarouselSection.react",
	"WAWebReceiptIcon.react",
	"WAWebShouldShowAdCreationEntryPoint",
	"WAWebStorefrontIcon.react",
	"WAWebSubscriptionsGatingUtils",
	"WAWebTextStatusCollection",
	"WAWebUseBusinessProfile.react",
	"WAWebUserPrefsMeUser",
	"WAWebUserPrefsSubscription",
	"WAWebWamEnumBusinessToolsEntryPointType",
	"WAWebWamEnumBusinessToolsItemType",
	"WAWebWamEnumCatalogEntryPoint",
	"WAWebWamEnumEntryPoint",
	"WAWebWamEnumLabelOperations",
	"WAWebWamEnumLwiEntryPoint",
	"WAWebWamEnumManageAdsEntryPoint",
	"WAWebWamEnumSmbListFeatureNameType",
	"WAWebWamEnumSmbListSurfaceType",
	"WAWebWamEnumUpdateEntryPoint",
	"WAWebWamSmbListEventReporter",
	"WAWebXWASubscriptionEntryPointTypeUtils",
	"WDSIconIcBolt.react",
	"WDSIconIcCampaignMegaphone.react",
	"WDSIconIcGridOn.react",
	"WDSIconIcHelp.react",
	"WDSIconWdsIcBroadcastMessage.react",
	"WDSIconWdsIcCurrencyReal.react",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"gkx",
	"react",
	"useWAWebAudienceImportIsFeatureSupported",
	"useWAWebFlow",
	"useWAWebFocusOnMount",
	"useWAWebNux",
	"useWAWebOnUnmount"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = ["ref"], c = ["ref"], d, m = d || (d = o("react")), p = d, _ = p.useEffect, f = p.useEffectEvent, g = p.useMemo, h = p.useRef, y = p.useState, C = function() {
		o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getFaqUrl());
	}, b = { icon: {
		color: "xhd7mum",
		$$css: !0
	} }, v = { surface: "tools-tab" }, S = r("gkx")("26258") ? s._(
		/*BTDS*/
		""
	) : s._(
		/*BTDS*/
		""
	), R = r("gkx")("26258") ? s._(
		/*BTDS*/
		""
	) : s._(
		/*BTDS*/
		""
	), L = r("gkx")("26258") ? s._(
		/*BTDS*/
		""
	) : s._(
		/*BTDS*/
		""
	), E = function(t, n, a) {
		return m.jsx(r("WAWebProfileDrawer.react"), {
			status: t,
			entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_HOME,
			profilePicThumb: n,
			contact: a,
			conn: o("WAWebConnModel").Conn,
			isInitialStep: !1
		});
	}, k = function(t) {
		o("WAWebOpenManageAdsInLwi").openManageAdsInLwi(t, "whatsapp_smb_web_manage_ads_business_tools_list_item", o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT.SMB_BUSINESS_TOOLS_MANAGE_AD);
	};
	function I(e) {
		switch (e) {
			case o("WAWebBizToolsFlowSteps").BizToolsSteps.BusinessProfile: return o("WAWebWamEnumBusinessToolsItemType").BUSINESS_TOOLS_ITEM_TYPE.PROFILE;
			case o("WAWebBizToolsFlowSteps").BizToolsSteps.BusinessAI: return o("WAWebWamEnumBusinessToolsItemType").BUSINESS_TOOLS_ITEM_TYPE.AI_FROM_META;
			case o("WAWebBizToolsFlowSteps").BizToolsSteps.Catalog: return o("WAWebWamEnumBusinessToolsItemType").BUSINESS_TOOLS_ITEM_TYPE.CATALOG;
			case o("WAWebBizToolsFlowSteps").BizToolsSteps.Orders: return o("WAWebWamEnumBusinessToolsItemType").BUSINESS_TOOLS_ITEM_TYPE.ORDERS;
			case o("WAWebBizToolsFlowSteps").BizToolsSteps.PaymentsHome: return o("WAWebWamEnumBusinessToolsItemType").BUSINESS_TOOLS_ITEM_TYPE.PAYMENTS_HOME;
			case o("WAWebBizToolsFlowSteps").BizToolsSteps.QuickReplies: return o("WAWebWamEnumBusinessToolsItemType").BUSINESS_TOOLS_ITEM_TYPE.QUICK_REPLIES;
			case o("WAWebBizToolsFlowSteps").BizToolsSteps.Labels: return o("WAWebWamEnumBusinessToolsItemType").BUSINESS_TOOLS_ITEM_TYPE.LABELS;
			case o("WAWebBizToolsFlowSteps").BizToolsSteps.ManageAds:
			case o("WAWebBizToolsFlowSteps").BizToolsSteps.Tools: return;
		}
	}
	function T(e) {
		var t = e.ref, n = babelHelpers.objectWithoutPropertiesLoose(e, u), a = n.autoSelectStep, i = n.bizAiQrHandoffQpId, l = n.initialStep, s = l === void 0 ? o("WAWebBizToolsFlowSteps").BizToolsSteps.Tools : l, c = n.entryPoint, d = y(!1), p = d[0], C = d[1], b = y(!1), v = b[0], S = b[1], R = o("useWAWebFlow").useFlow(s, { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }), L = R[0], k = R[1], T = r("useWAWebFocusOnMount")(), D = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), x = o("WAWebUseBusinessProfile.react").useBusinessProfile(o("WAWebChatAssignmentGatingUtils").isBizAiWebOnboardingHandoffEnabled() ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : null, ["isBizBot1p"]);
		_(function() {
			o("WAWebCatalogCollection").CatalogCollection.find(D).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, r("WAWebNoop"))).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").CatalogUnknownError, r("WAWebNoop"))).finally(function() {
				C(!0);
			});
		}, []), g(function() {
			var e, t = o("WAWebProductCatalogContext").buildProductCatalogContext(new (o("WAWebProductCatalogSession")).ProductCatalogSession(), o("WAWebContactUtils").getMaybeBizPlatformForLogging(D.toString()), o("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_SETTINGS);
			(e = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager("left")) == null || e.updateContext(t);
		}, [D]), _(function() {
			o("WAWebBizToolsUtils").logBizToolsEntry(c);
		}, [c]);
		var P = k.step, N = h(!1);
		r("useWAWebOnUnmount")(function() {
			N.current && (o("WAWebDrawerManager").DrawerManager.closeDrawerMid(), N.current = !1);
		});
		var M = h(null);
		_(function() {
			var e, t = M.current, n = (e = x == null ? void 0 : x.isBizBot1p) != null ? e : null;
			if (M.current = n, t !== n) {
				if (n === !0 && N.current) {
					o("WAWebDrawerManager").DrawerManager.closeDrawerMid(), N.current = !1, k.push(o("WAWebBizToolsFlowSteps").BizToolsSteps.BusinessAI);
					return;
				}
				n === !1 && k.step === o("WAWebBizToolsFlowSteps").BizToolsSteps.BusinessAI && (k.stackSize() > 1 ? k.pop() : k.push(o("WAWebBizToolsFlowSteps").BizToolsSteps.Tools, "none"));
			}
		}, [x == null ? void 0 : x.isBizBot1p, k]);
		var w = function(t) {
			return t !== o("WAWebBizToolsFlowSteps").BizToolsSteps.BusinessAI || o("WAWebBizAiAgentStatusUtils").hasOnboardedAiAgent() || !o("WAWebChatAssignmentGatingUtils").isBizAiWebOnboardingHandoffEnabled() ? !1 : (o("WAWebDrawerManager").DrawerManager.openDrawerMid(m.jsx(r("WAWebBizAiOnboardingQrBanner.react"), { qpId: i })), N.current = !0, k.step !== o("WAWebBizToolsFlowSteps").BizToolsSteps.Tools && k.pop(), !0);
		}, A = function(t, n) {
			if (N.current) {
				var e = t === o("WAWebBizToolsFlowSteps").BizToolsSteps.BusinessProfile && n;
				e || o("WAWebDrawerManager").DrawerManager.closeDrawerMid(), N.current = !1;
			}
		}, F = function(t) {
			var e = I(t);
			if (e != null && o("WAWebBizToolsUtils").logBizToolsClick(c, e), !w(t)) {
				var n = o("WAWebBizProfileGatingUtils").businessProfileRefreshEnabled();
				A(t, n), t === o("WAWebBizToolsFlowSteps").BizToolsSteps.Catalog ? (S(!0), o("WAWebCatalogManagementFlowLoadable").createCatalogManagementFlowObject(function(e, n, r) {
					S(!1), r === !0 && !n ? o("WAWebCatalogManagementFlowLoadable").showSelfCatalogLoadErrorToast() : k.push(t);
				})) : t === o("WAWebBizToolsFlowSteps").BizToolsSteps.BusinessProfile && n ? o("WAWebDrawerManager").DrawerManager.openDrawerMid(r("WAWebGetBizProfileDrawerContent")(o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_HOME, function() {
					return o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
				})) : k.push(t);
			}
		}, O = h(!1), B = f(function() {
			a != null && !O.current && (O.current = !0, F(a));
		});
		if (_(function() {
			B();
		}, []), P == null) return null;
		var W = function() {
			k.pop();
		}, q = o("WAWebTextStatusCollection").TextStatusCollection.assertGet(D), U = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.assertGet(D), V = o("WAWebContactCollection").ContactCollection.assertGet(D), H = q != null && U != null && V != null, G;
		switch (P) {
			case o("WAWebBizToolsFlowSteps").BizToolsSteps.Tools:
				G = m.jsx($, {
					isBizProfileVisible: H,
					isCatalogVisible: p && !o("WAWebProductCatalogMetaLinkingGatingUtils").shouldDisableCatalogDueToMetaLinkingForSelf(),
					isCatalogLoading: v,
					onBack: k.end,
					onSelect: F,
					entryPoint: c
				});
				break;
			case o("WAWebBizToolsFlowSteps").BizToolsSteps.BusinessProfile:
				G = E(q, U, V);
				break;
			case o("WAWebBizToolsFlowSteps").BizToolsSteps.ManageAds: break;
			case o("WAWebBizToolsFlowSteps").BizToolsSteps.Catalog:
				G = m.jsx(o("WAWebCatalogManagementFlowLoadable").CatalogManagementFlowLoadable, {
					catalogId: D,
					product: null,
					isInitialStep: !1
				});
				break;
			case o("WAWebBizToolsFlowSteps").BizToolsSteps.Orders:
				G = m.jsx(r("WAWebBizOrderManagementFlow.react"), { isInitialStep: !1 });
				break;
			case o("WAWebBizToolsFlowSteps").BizToolsSteps.PaymentsHome:
				G = m.jsx(r("WAWebBizPaymentsHomeManagementFlow.react"), { isInitialStep: !1 });
				break;
			case o("WAWebBizToolsFlowSteps").BizToolsSteps.QuickReplies:
				G = m.jsx(r("WAWebBizQuickRepliesDrawer.react"), {
					onBack: W,
					isInitialStep: !1
				});
				break;
			case o("WAWebBizToolsFlowSteps").BizToolsSteps.Labels:
				G = m.jsx(o("WAWebLabelFlowLoadable").LabelFlowLoadable, {
					isInitialStep: !1,
					entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.BIZ_TOOLS
				});
				break;
			case o("WAWebBizToolsFlowSteps").BizToolsSteps.BusinessAI:
				G = m.jsx(r("WAWebBizAIDrawer.react"), {
					entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_TOOLS,
					isInitialStep: !1,
					onBack: W
				});
				break;
		}
		return m.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			tabIndex: 0,
			ref: T,
			children: m.jsx(L, {
				ref: t,
				flow: k,
				children: G
			})
		});
	}
	T.displayName = T.name + " [from " + i.id + "]";
	function D(e) {
		var t = e.adsAccountInfo, n = e.entryPoint, a = e.refreshedIcon, i = a === void 0 ? !1 : a, l = function() {
			o("WAWebBizToolsUtils").logBizToolsClick(n, o("WAWebWamEnumBusinessToolsItemType").BUSINESS_TOOLS_ITEM_TYPE.ADVERTISE_LIST_ITEM), o("WAWebChatlistUtils").handleAdCreation({
				adCreationUrlInput: {
					activeAccountInfo: t,
					sourceAdCreation: "whatsapp_smb_web_business_tools_list_item"
				},
				lwiEntryPoint: o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT.SMB_BUSINESS_TOOLS_ADVERTISE_LIST_ITEM
			});
		};
		_(function() {
			o("WAWebBizNativeAdsWamLogger").logAdCreationImpression(o("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT.SMB_BUSINESS_TOOLS_ADVERTISE_LIST_ITEM, t !== "not-linked" && t.hasFacebookPage);
		}, [t]);
		var u = s._(
			/*BTDS*/
			""
		), c = s._(
			/*BTDS*/
			""
		);
		return m.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
			testid: "biz-tools-advertise",
			theme: "biz-tools",
			divider: !1,
			secondaryChildren: c,
			icon: i ? m.jsx(o("WAWebMegaphoneRefreshedIcon.react").MegaphoneRefreshedIcon, {
				directional: !0,
				iconXstyle: b.icon
			}) : m.jsx(r("WDSIconIcCampaignMegaphone.react"), {
				width: 26,
				height: 26,
				iconXstyle: b.icon
			}),
			active: !1,
			onClick: l,
			children: u
		});
	}
	D.displayName = D.name + " [from " + i.id + "]";
	function x(e) {
		var t = e.adsAccountInfo;
		return _(function() {
			o("WAWebBizNativeAdsWamLogger").logManageAdsEntryPointImpression(o("WAWebWamEnumManageAdsEntryPoint").MANAGE_ADS_ENTRY_POINT.SMB_BUSINESS_TOOLS_MANAGE_ADS_LIST_ITEM);
		}, [t]), t === "not-linked" || t.hasCreatedAd !== !0 ? null : m.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
			testid: "biz-tools-manage-ads",
			theme: "biz-tools",
			divider: !1,
			secondaryChildren: s._(
				/*BTDS*/
				""
			),
			icon: m.jsx(o("WAWebAdsStackIcon.react").AdsStackIcon, {
				width: 24,
				height: 24
			}),
			active: !1,
			onClick: function() {
				return k(t);
			},
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	x.displayName = x.name + " [from " + i.id + "]";
	function $(t) {
		var a = t.ref, l = babelHelpers.objectWithoutPropertiesLoose(t, c), u = l.entryPoint, d = l.isBizProfileVisible, p = l.isCatalogLoading, f = l.isCatalogVisible, g = l.onSelect, h = o("WAWebActiveAccountInfoContext.react").useActiveAccountInfo();
		_(function() {
			o("WAWebBizToolsUtils").logBizToolsImpression(u);
		}, [u]);
		var E = y(!1), k = E[0], I = E[1], T = o("useWAWebAudienceImportIsFeatureSupported").useWAWebAudienceImportIsFeatureSupported(), $ = o("WAWebBizBroadcastDeviceCapabilityCommon").isBizBroadcastEnabledAndDeviceSupported(), N = r("useWAWebNux")(o("WAWebNux").NUX.BUSINESS_BROADCAST_HOME_UPSELL), M = N[0], w = N[1];
		_(function() {
			$ && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.toolsEntryPointViewed();
		}, [$]), _(function() {
			var t = (function() {
				var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					if (o("WAWebSubscriptionsGatingUtils").isMetaVerifiedEnabled()) try {
						var t = yield o("WAWebFetchSubscriptionEntryPoints").fetchSubscriptionEntryPoints();
						if (t.type === "success") {
							var n, a, i = (n = t.subscriptionEntrypoints) == null ? void 0 : n.find(function(e) {
								return e.subscriptionType === o("WAWebXWASubscriptionEntryPointTypeUtils").SubscriptionEntryPointType.META_VERIFIED;
							}), l = !!(i != null && i.webEntryPointEligibility);
							o("WAWebUserPrefsSubscription").setShouldShowMetaVerifiedEntryPoint(l), I(l), o("WAWebUserPrefsSubscription").setMetaVerifiedEntryPointRedirectionUri((a = i == null ? void 0 : i.webEntryPointRedirectionUri) != null ? a : "");
						}
					} catch (t) {
						o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["fetchSubscriptionEntryPoints promise error"]))).sendLogs(r("getErrorSafe")(t).message);
					}
				});
				return function() {
					return t.apply(this, arguments);
				};
			})();
			t();
		}, []);
		var A = o("WAWebShouldShowAdCreationEntryPoint").computeShouldShowAdCreationEntryPoint({ activeAccountInfo: h }), F = h != null && h !== "not-linked" && h.hasCreatedAd && !o("WAWebBizNativeAdsGatingUtils").nativeAdsWebCreationRolloutEnabledNoExposure(), O = A || F || $, B;
		O && (B = m.jsxs(r("WAWebBizToolsDrawerBodySection.react"), {
			headerText: s._(
				/*BTDS*/
				""
			),
			children: [
				k && !o("WAWebAuthAgentFeatureControlGateKeeper").isFeatureDisabled("META_VERIFIED") ? m.jsx(r("WAWebMetaVerifiedListItem.react"), {}) : null,
				A && h != null ? m.jsx(D, {
					adsAccountInfo: h,
					entryPoint: u,
					refreshedIcon: !0
				}) : null,
				F && h != null && !o("WAWebAuthAgentFeatureControlGateKeeper").isFeatureDisabled("CTW_ADS") ? m.jsx(x, { adsAccountInfo: h }) : null,
				$ && !o("WAWebAuthAgentFeatureControlGateKeeper").isFeatureDisabled("BUSINESS_BROADCASTS") && m.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
					testid: "biz-tools-broadcasts-v2",
					theme: "biz-tools",
					divider: !1,
					secondaryChildren: s._(
						/*BTDS*/
						""
					),
					icon: m.jsx(r("WDSIconWdsIcBroadcastMessage.react"), { iconXstyle: b.icon }),
					detail: M ? m.jsx("div", {
						"data-testid": "biz-tools-broadcast-nux-green-dot",
						className: "x1qe8gl4 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xdk7pt xqf2s3x x1xc55vz"
					}) : null,
					active: !1,
					onClick: function() {
						M && w(), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.toolsEntryPointClicked(), P();
					},
					children: o("WAWebBizBroadcastsToolsEntryStrings").getBizBroadcastsToolsEntryPrimaryText()
				})
			]
		}));
		var W = u === o("WAWebWamEnumBusinessToolsEntryPointType").BUSINESS_TOOLS_ENTRY_POINT_TYPE.ENTRY_SETTINGS ? o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL : o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB, q = o("WAWebProductCatalogMetaLinkingGatingUtils").shouldShowMetaLinkedDisabledCatalogTooltipForSelf(), U = q || p, V = q ? s._(
			/*BTDS*/
			""
		) : null, H = s._(
			/*BTDS*/
			""
		), G = o("WAWebListsGatingUtils").isListsEnabled(), z = G ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), j = G ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), K = G ? m.jsx(o("WAWebListPeopleIcon.react").ListPeopleIcon, { iconXstyle: b.icon }) : m.jsx(o("WAWebLabelOutlineIcon.react").LabelOutlineIcon, {
			width: 24,
			height: 24,
			iconXstyle: b.icon
		});
		function Q() {
			return o("WAWebPaymentsGatingUtils").paymentsHomeEnabled() ? s._(
				/*BTDS*/
				""
			) : o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled() ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		}
		return Q.displayName = Q.name + " [from " + i.id + "]", m.jsxs(r("WAWebDrawer.react"), {
			ref: a,
			theme: "biz-tools-drawer",
			testid: "biz-tools-drawer",
			tsNavigationData: v,
			children: [
				m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: R,
					type: W,
					onBack: l.onBack
				}),
				m.jsx(r("WAWebManagedAccountBanner.react"), {}),
				o("WAWebBizToolsGatingUtils").isBizToolsTopCardEnabled() && (o("WAWebBizToolsGatingUtils").isRecCardEnabled() ? m.jsx(r("WAWebRecUnitCarouselSection.react"), {}) : m.jsx(r("WAWebBizToolWhatsNextSection.react"), {})),
				m.jsxs(r("WAWebBizToolsDrawerBodySection.react"), {
					headerText: L,
					children: [
						o("WAWebAuthAgentFeatureControlGateKeeper").isFeatureDisabled("MAIBA") ? null : m.jsx(r("WAWebBizAiToolsTile.react"), { onSelect: g }),
						d ? m.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
							testid: "biz-tools-biz-profile",
							theme: "biz-tools",
							divider: !1,
							icon: m.jsx(o("WAWebStorefrontIcon.react").StorefrontIcon, { iconXstyle: b.icon }),
							active: !1,
							secondaryChildren: s._(
								/*BTDS*/
								""
							),
							onClick: function() {
								return g(o("WAWebBizToolsFlowSteps").BizToolsSteps.BusinessProfile);
							},
							children: s._(
								/*BTDS*/
								""
							)
						}) : null,
						f && !o("WAWebAuthAgentFeatureControlGateKeeper").isFeatureDisabled("CATALOG_MANAGEMENT") ? m.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
							testid: "biz-tools-catalog",
							theme: "biz-tools",
							divider: !1,
							icon: m.jsx(r("WDSIconIcGridOn.react"), { iconXstyle: b.icon }),
							active: !1,
							disabled: U,
							tooltip: V,
							ariaLabel: V != null ? V : H,
							secondaryChildren: p ? s._(
								/*BTDS*/
								""
							) : s._(
								/*BTDS*/
								""
							),
							onClick: U ? r("WAWebNoop") : function() {
								return g(o("WAWebBizToolsFlowSteps").BizToolsSteps.Catalog);
							},
							children: H
						}) : null,
						o("WAWebOrderGatingUtils").orderManagementEnabled() && !o("WAWebAuthAgentFeatureControlGateKeeper").isFeatureDisabled("ORDERS") ? m.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
							testid: "biz-tools-orders",
							theme: "biz-tools",
							divider: !1,
							secondaryChildren: Q(),
							icon: m.jsx(o("WAWebReceiptIcon.react").ReceiptIcon, {
								width: 24,
								height: 24,
								iconXstyle: b.icon
							}),
							active: !1,
							onClick: function() {
								return g(o("WAWebBizToolsFlowSteps").BizToolsSteps.Orders);
							},
							children: o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled() ? s._(
								/*BTDS*/
								""
							) : s._(
								/*BTDS*/
								""
							)
						}) : null,
						o("WAWebPaymentsGatingUtils").paymentsHomeEnabled() ? m.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
							testid: "biz-tools-payments-home",
							theme: "biz-tools",
							divider: !1,
							secondaryChildren: s._(
								/*BTDS*/
								""
							),
							icon: m.jsx(r("WDSIconWdsIcCurrencyReal.react"), {
								width: 24,
								height: 24,
								iconXstyle: b.icon
							}),
							active: !1,
							onClick: function() {
								return g(o("WAWebBizToolsFlowSteps").BizToolsSteps.PaymentsHome);
							},
							children: s._(
								/*BTDS*/
								""
							)
						}) : null
					]
				}),
				B,
				m.jsxs(r("WAWebBizToolsDrawerBodySection.react"), {
					headerText: s._(
						/*BTDS*/
						""
					),
					children: [o("WAWebAuthAgentFeatureControlGateKeeper").isFeatureDisabled("QUICK_REPLIES") ? null : m.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
						testid: "biz-tools-quick-replies",
						theme: "biz-tools",
						divider: !1,
						secondaryChildren: s._(
							/*BTDS*/
							""
						),
						icon: m.jsx(r("WDSIconIcBolt.react"), { iconXstyle: b.icon }),
						active: !1,
						onClick: function() {
							return g(o("WAWebBizToolsFlowSteps").BizToolsSteps.QuickReplies);
						},
						children: S
					}), o("WAWebAuthAgentFeatureControlGateKeeper").isFeatureDisabled("CUSTOM_LISTS") ? null : m.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
						testid: "biz-tools-labels",
						theme: "biz-tools",
						divider: !1,
						secondaryChildren: j,
						icon: K,
						active: !1,
						onClick: function() {
							G && o("WAWebWamSmbListEventReporter").logSmbListEvent({
								labelOperation: o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS.CLICK_POSITIVE,
								smbListFeatureName: o("WAWebWamEnumSmbListFeatureNameType").SMB_LIST_FEATURE_NAME_TYPE.LISTS_CREATION,
								smbListSurface: o("WAWebWamEnumSmbListSurfaceType").SMB_LIST_SURFACE_TYPE.BIZ_TOOLS,
								updateEntryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.BIZ_TOOLS,
								userActionTarget: "biz_tools_list_row"
							}), g(o("WAWebBizToolsFlowSteps").BizToolsSteps.Labels);
						},
						children: z
					})]
				}),
				m.jsxs(r("WAWebBizToolsDrawerBodySection.react"), {
					hideDivider: !0,
					children: [T === !0 && !o("WAWebAuthAgentFeatureControlGateKeeper").isFeatureDisabled("BUSINESS_BROADCASTS") && m.jsx(r("WAWebBizBroadcastsBizToolsUploadDrawerButton.react"), {}), m.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
						testid: "biz-tools-help-center",
						theme: "biz-tools",
						divider: !1,
						secondaryChildren: s._(
							/*BTDS*/
							""
						),
						icon: m.jsx(r("WDSIconIcHelp.react"), { iconXstyle: b.icon }),
						active: !1,
						onClick: C,
						children: s._(
							/*BTDS*/
							""
						)
					})]
				})
			]
		});
	}
	$.displayName = $.name + " [from " + i.id + "]";
	function P() {
		o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(m.jsx(r("WAWebBusinessBroadcastHomeFlow.react"), {
			entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_HOME,
			onClose: function() {
				return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
			}
		}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
	}
	l.default = T;
}), 226);
