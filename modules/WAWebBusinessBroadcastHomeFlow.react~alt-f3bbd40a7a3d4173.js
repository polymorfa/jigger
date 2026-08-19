__d("WAWebBusinessBroadcastHomeFlow.react", [
	"$InternalEnum",
	"WALogger",
	"WAWebAudienceResolver",
	"WAWebBizBroadcastBBProOnboardingScreen.react",
	"WAWebBizBroadcastCampaignDataLayer",
	"WAWebBizBroadcastCampaignListItemDerive",
	"WAWebBizBroadcastCollectionGating",
	"WAWebBizBroadcastCreationQPLLogger",
	"WAWebBizBroadcastHomeInsightStatus",
	"WAWebBizBroadcastNewBroadcastFlowLoadable",
	"WAWebBizBroadcastProHomeSettingsPanel.react",
	"WAWebBizBroadcastProNewBroadcastFlowTwoPhaseContainer.react",
	"WAWebBizBroadcastProOnboardingStatus",
	"WAWebBizBroadcastsAudienceUtils",
	"WAWebBizBroadcastsEligibilityGate.react",
	"WAWebBizBroadcastsImportAudienceScreenLoadable",
	"WAWebBizBroadcastsSmartCSVImportAudiencesScreenLoadable",
	"WAWebBizBroadcastsSmartCSVImportSetupFlowLoadable",
	"WAWebBizBroadcastsUpsertAudienceScreenLoadable",
	"WAWebBizLoggerProjectContext.react",
	"WAWebBroadcastConsts",
	"WAWebBroadcastInfoDrawerLoadable",
	"WAWebBroadcastMetadataCollection",
	"WAWebBusinessBroadcastDetailsDrawerLoadable",
	"WAWebBusinessBroadcastHomeAudienceTable.react",
	"WAWebBusinessBroadcastHomeQPLLogger",
	"WAWebBusinessBroadcastHomeScreen.react",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebBusinessBroadcastsGatingUtils",
	"WAWebChatCollection",
	"WAWebChatGetters",
	"WAWebDrawer.react",
	"WAWebErrorBoundary.react",
	"WAWebFlex.react",
	"WAWebFlexBox.react",
	"WAWebNullFunc",
	"WAWebSuggestedAudienceCards",
	"WAWebVelocityTransitionGroup",
	"WAWebWamEnumBbTierType",
	"WAWebWamEnumSurfaceType",
	"WAWebWidFactory",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"react",
	"useWAWebBizBroadcastResolvedCampaignSentAts",
	"useWAWebBroadcastCampaigns",
	"useWAWebBroadcastCampaignsCollection",
	"useWAWebDebouncedCallback",
	"useWAWebFlow",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useLayoutEffect, f = d.useMemo, g = d.useRef, h = d.useState, y = n("$InternalEnum").Mirrored([
		"HOME_SCREEN",
		"FINISH_PRO_SETUP",
		"NEW_BROADCAST",
		"CREATE_AUDIENCE",
		"EDIT_AUDIENCE",
		"IMPORT_AUDIENCE",
		"IMPORT_AUDIENCES"
	]), C = 1, b = {
		fullscreenRoot: {
			height: "x5yr21d",
			$$css: !0
		},
		mainContentWithHeader: {
			flexGrow: "xlxc79v",
			height: "x5yr21d",
			minWidth: "xeuugli",
			$$css: !0
		},
		rightDrawerClosed: {
			width: "xnalus7",
			$$css: !0
		},
		rightDrawerOpen: {
			borderInlineStartColor: "x1vb5itz",
			borderInlineStartStyle: "x1t7ytsu",
			borderInlineStartWidth: "xpilrb4",
			flexGrow: "x1ikap7u",
			maxWidth: "xfp77mx",
			minWidth: "x1fx6drf",
			$$css: !0
		},
		rightDrawerWrapper: {
			backgroundColor: "x1280gxy",
			height: "x5yr21d",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		}
	}, v = 100, S = 60 * 1e3;
	function R(e, t) {
		if (e === t) return !0;
		if (e.length !== t.length) return !1;
		for (var n = 0; n < e.length; n++) {
			var r = e[n], o = t[n];
			if (r.broadcastJid !== o.broadcastJid || r.name !== o.name || r.recipientCount !== o.recipientCount) return !1;
		}
		return !0;
	}
	function L(e) {
		return e.sentAt > 0 ? e.sentAt : e.createdTimestamp;
	}
	function E(t) {
		var a, i = t.ref, l = babelHelpers.objectWithoutPropertiesLoose(t, s), u = l.entryPoint, d = l.onClose;
		_(function() {
			return o("WAWebBusinessBroadcastHomeQPLLogger").BusinessBroadcastHomeQPLLogger.start(u), o("WAWebBusinessBroadcastHomeQPLLogger").BusinessBroadcastHomeQPLLogger.pointOnce(o("WAWebBusinessBroadcastHomeQPLLogger").BusinessBroadcastHomeQPLPoints.FLOW_MOUNTED), function() {
				o("WAWebBusinessBroadcastHomeQPLLogger").BusinessBroadcastHomeQPLLogger.dropIfActive();
			};
		}, [u]), p(function() {
			o("WAWebBizBroadcastNewBroadcastFlowLoadable").prefetchNewBroadcastFlow();
		}, []);
		var E = h([]), k = E[0], I = E[1], T = h([]), D = T[0], x = T[1], $ = h([]), P = $[0], N = $[1], M = h([]), w = M[0], A = M[1], F = h(null), O = F[0], B = F[1], W = o("useWAWebFlow").useFlow(y.HOME_SCREEN, { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }), q = W[0], U = W[1], V = h(null), H = V[0], G = V[1], z = h(!1), j = z[0], K = z[1], Q = h(null), X = Q[0], Y = Q[1], J = h(null), Z = J[0], ee = J[1], te = h(null), ne = te[0], re = te[1], oe = g(!1), ae = h(null), ie = ae[0], le = ae[1], se = h(!1), ue = se[0], ce = se[1], de = f(function() {
			return X == null ? null : o("WAWebChatCollection").ChatCollection.get(o("WAWebWidFactory").createWid(X.broadcastJid));
		}, [X]), me = m(function(e) {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.broadcastInfoDrawerOpened(u, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME), Y(null), K(!1), ce(!1), G(e);
		}, [u]), pe = m(function(e) {
			Y(null), K(!0), G(e);
		}, []), _e = m(function(e) {
			G(null), ce(!1), Y(e);
		}, []), fe = m(function() {
			G(null);
		}, []), ge = m(function() {
			Y(null);
		}, []), he = r("useWAWebDebouncedCallback")(function() {
			I(function(e) {
				var t = o("WAWebBizBroadcastsAudienceUtils").getBroadcastChatsAsAudiences();
				return R(e, t) ? e : t;
			});
		}, v);
		p(function() {
			he();
		}, [he]);
		var ye = m(function(e) {
			o("WAWebChatGetters").getIsBroadcast(e) && he();
		}, [he]);
		(a = o("useWAWebListener")).useListener(o("WAWebChatCollection").ChatCollection, "add", ye), a.useListener(o("WAWebChatCollection").ChatCollection, "change", ye), a.useListener(r("WAWebBroadcastMetadataCollection"), "add", he), a.useListener(r("WAWebBroadcastMetadataCollection"), "change", he);
		var Ce = m(function(e) {
			I(o("WAWebBizBroadcastsAudienceUtils").getBroadcastChatsAsAudiences());
			var t = o("WAWebChatCollection").ChatCollection.get(o("WAWebWidFactory").createWid(e.broadcastJid));
			t != null && (o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.start(o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastEntryPoint.AUDIENCE_CREATION, !0), ee(t), U.pop(), U.push(y.NEW_BROADCAST));
		}, [U]), be = m(function(e) {
			n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var t = e.id;
				try {
					var n = yield o("WAWebSuggestedAudienceCards").resolveCardExpression(e);
					t = n.predicateType;
					var r = yield o("WAWebAudienceResolver").resolveAudienceExpression(n);
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.suggestedAudienceCardClicked(e.id, n.predicateType, r.length, u);
					var a = r.map(function(e) {
						return e.split("@")[0];
					});
					le({
						initialRecipientIds: a,
						suggestedAudienceCardId: e.id
					}), U.push(y.CREATE_AUDIENCE);
				} catch (n) {
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.suggestedAudienceCardError(e.id, t, u, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME);
				}
			})();
		}, [u, U]), ve = m(function(e) {
			o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.start(o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastEntryPoint.AUDIENCE_INFO, !0), ee(e), re(null), U.push(y.NEW_BROADCAST);
		}, [U]), Se = m(function() {
			H == null || oe.current || (oe.current = !0, o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.start(o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastEntryPoint.HOME_SCREEN, !1), n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = yield o("WAWebBizBroadcastCampaignDataLayer").resolveAttachmentDataForCampaign(H.campaignId);
				ee(null), re({
					attachmentData: e,
					campaignId: H.campaignId,
					ctaButtonData: H.ctaButtonData,
					isDuplicateBroadcast: !0,
					message: H.messageBody
				}), U.push(y.NEW_BROADCAST);
			})().catch(function(t) {
				o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.end(3), o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to duplicate broadcast from home"]))).catching(r("getErrorSafe")(t)).sendLogs("home-duplicate-broadcast-failed");
			}).finally(function() {
				oe.current = !1;
			}));
		}, [U, H]), Re = m(function() {
			U.push(y.EDIT_AUDIENCE);
		}, [U]);
		a.useListener(o("WAWebChatCollection").ChatCollection, "remove", function() {
			he(), X != null && o("WAWebChatCollection").ChatCollection.get(o("WAWebWidFactory").createWid(X.broadcastJid)) == null && Y(null);
		});
		var Le = m(function(e) {
			H != null && G(babelHelpers.extends({}, H, { campaignName: e }));
		}, [H]), Ee = m(function(e, t, n, r, a) {
			if (x(e), N(t), B(r != null ? r : null), n != null) {
				o("WAWebBizBroadcastsSmartCSVImportSetupFlowLoadable").openSmartCSVImportSetupFlowLoadable({
					contacts: e,
					context: n,
					entryPoint: u,
					errorList: t,
					importLoggingContext: r,
					maxContactsPerAudience: a,
					onReviewAudience: function(t, n) {
						x(t), N(n), B(r != null ? r : null), U.push(y.IMPORT_AUDIENCE);
					},
					onReviewAudiences: function(t) {
						var e = t.length === C ? t[0] : null;
						if (e != null) {
							var n;
							x(e.contacts), N((n = e.errorList) != null ? n : []), B(r != null ? r : null), U.push(y.IMPORT_AUDIENCE);
							return;
						}
						A(t), B(r != null ? r : null), U.push(y.IMPORT_AUDIENCES);
					}
				});
				return;
			}
			U.push(y.IMPORT_AUDIENCE);
		}, [u, U]), ke = r("useWAWebBroadcastCampaigns")(), Ie = ke.campaigns, Te = ke.loading, De = r("useWAWebBroadcastCampaignsCollection")(), xe = De.campaigns, $e = De.loading, Pe = o("WAWebBizBroadcastCollectionGating").shouldReadBizBroadcastCampaignsFromCollection(), Ne = f(function() {
			return Pe ? xe.map(o("WAWebBizBroadcastCampaignListItemDerive").deriveListItemFromModel) : null;
		}, [Pe, xe]), Me = Ne != null ? Ne : Ie, we = r("useWAWebBizBroadcastResolvedCampaignSentAts")(Me), Ae = h(function() {
			return Date.now();
		}), Fe = Ae[0], Oe = Ae[1];
		p(function() {
			var e = window.setInterval(function() {
				Oe(Date.now());
			}, S);
			return function() {
				return window.clearInterval(e);
			};
		}, []);
		var Be = f(function() {
			return Me.map(function(e) {
				var t = we.get(e.campaignId), n = t != null ? babelHelpers.extends({}, e, { sentAt: t }) : e;
				return babelHelpers.extends({}, n, { insightStatus: o("WAWebBizBroadcastHomeInsightStatus").getBroadcastListItemInsightStatus(n, Fe) });
			});
		}, [
			Me,
			we,
			Fe
		]), We = f(function() {
			return [].concat(Be).sort(function(e, t) {
				return L(t) - L(e);
			});
		}, [Be]), qe = Pe ? $e : Te, Ue = f(function() {
			if (H == null) return null;
			var e = We.find(function(e) {
				return e.campaignId === H.campaignId;
			});
			return e == null ? H : babelHelpers.extends({}, e, { campaignName: H.campaignName });
		}, [We, H]), Ve = g(null), He = c.jsx(r("WAWebBusinessBroadcastHomeAudienceTable.react"), {
			audiencesList: k,
			campaigns: We,
			entryPoint: u,
			onAudienceSelect: _e,
			onAudienceUpdate: he,
			scrollContainerRef: Ve
		});
		if (U.step == null) return null;
		var Ge = U.step === y.HOME_SCREEN ? c.jsx(r("WAWebDrawer.react"), { children: c.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: b.fullscreenRoot,
			children: [c.jsx(o("WAWebFlexBox.react").FlexColumn, {
				xstyle: b.mainContentWithHeader,
				children: c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
					name: "biz-broadcast-home-screen",
					onError: function() {
						return o("WAWebBusinessBroadcastHomeQPLLogger").BusinessBroadcastHomeQPLLogger.end(3);
					},
					children: c.jsx(r("WAWebBusinessBroadcastHomeScreen.react"), {
						audiencesCount: k.length,
						audienceTable: He,
						campaigns: We,
						entryPoint: u,
						loading: qe,
						nowMs: Fe,
						onBroadcastSelect: me,
						onClose: d,
						onCreateAudience: function() {
							le(null), U.push(y.CREATE_AUDIENCE);
						},
						onCreateBroadcast: function() {
							o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.start(o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastEntryPoint.HOME_SCREEN, !1), ee(null), re(null), U.push(y.NEW_BROADCAST);
						},
						onPreview: pe,
						onSuggestedCardPress: be,
						onProTryNow: function() {
							return U.push(y.FINISH_PRO_SETUP);
						},
						onOpenProSettings: function() {
							G(null), Y(null), ce(!0);
						},
						onUploadSuccess: Ee,
						tableScrollRef: Ve
					})
				})
			}), c.jsxs(r("WAWebVelocityTransitionGroup"), {
				component: "div",
				xstyle: [b.rightDrawerWrapper, H != null || de != null || ue ? b.rightDrawerOpen : b.rightDrawerClosed],
				transitionName: "slide-left",
				children: [
					Ue != null ? c.jsx("div", {
						className: "x5yr21d xh8yej3",
						children: c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
							name: "biz-broadcast-details-drawer",
							children: c.jsx(o("WAWebBusinessBroadcastDetailsDrawerLoadable").WAWebBusinessBroadcastDetailsDrawerLoadable, {
								entryPoint: u,
								initialShowPreview: j,
								item: Ue,
								onClose: fe,
								onDuplicate: Se,
								onRenameSuccess: Le
							})
						})
					}, Ue.campaignId) : null,
					de != null ? c.jsx("div", {
						className: "x5yr21d xh8yej3",
						children: c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
							name: "biz-broadcast-audience-info-drawer",
							children: c.jsx(o("WAWebBroadcastInfoDrawerLoadable").WAWebBroadcastInfoDrawerLoadable, {
								chat: de,
								entryPoint: u,
								onClose: ge,
								onCloseFullScreen: d,
								onAudienceUpdate: he,
								onEditAudience: Re,
								onNewBroadcast: function() {
									return ve(de);
								},
								shouldUseDrawer: !1
							})
						})
					}, de.id.toString()) : null,
					ue ? c.jsx("div", {
						className: "x5yr21d xh8yej3",
						children: c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
							name: "biz-broadcast-pro-settings-panel",
							children: c.jsx(r("WAWebBizBroadcastProHomeSettingsPanel.react"), { onClose: function() {
								return ce(!1);
							} })
						})
					}, "bb-pro-settings-panel") : null
				]
			})]
		}) }) : U.step === y.FINISH_PRO_SETUP ? c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "biz-broadcast-finish-pro-setup",
			fallback: o("WAWebNullFunc").returnNull,
			children: c.jsx(r("WAWebDrawer.react"), { children: c.jsx(o("WAWebFlexBox.react").FlexColumn, {
				xstyle: b.fullscreenRoot,
				children: c.jsx(r("WAWebBizBroadcastBBProOnboardingScreen.react"), {
					entryPoint: u,
					qrDeeplink: o("WAWebBroadcastConsts").BB_PRO_ONBOARDING_DEEPLINK,
					onDowngrade: function() {
						o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxDismissClicked(u, o("WAWebWamEnumBbTierType").BB_TIER_TYPE.PRO), o("WAWebBizBroadcastProOnboardingStatus").dismissBizBroadcastProNuxOnboarding(), U.pop();
					}
				})
			}) })
		}) : U.step === y.NEW_BROADCAST ? c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "biz-broadcast-new-broadcast",
			onError: function() {
				return o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.end(3);
			},
			children: o("WAWebBizBroadcastProOnboardingStatus").getBizBroadcastProductTier() === o("WAWebWamEnumBbTierType").BB_TIER_TYPE.PRO && o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled() ? c.jsx(r("WAWebBizBroadcastProNewBroadcastFlowTwoPhaseContainer.react"), {
				entryPoint: u,
				onBack: function() {
					return U.pop();
				},
				sourceBroadcastMessageData: ne
			}) : c.jsx(o("WAWebBizBroadcastNewBroadcastFlowLoadable").WAWebBizBroadcastNewBroadcastFlowLoadable, {
				chat: Z,
				entryPoint: u,
				onBack: function() {
					return U.pop();
				},
				sourceBroadcastMessageData: ne
			})
		}) : U.step === y.CREATE_AUDIENCE ? c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "biz-broadcast-create-audience",
			children: c.jsx(o("WAWebBizBroadcastsUpsertAudienceScreenLoadable").WAWebBizBroadcastsUpsertAudienceScreenLoadable, {
				audienceConfig: {
					kind: "core",
					onNewAudienceSuccess: function(t) {
						U.pop(), o("WAWebBizBroadcastsAudienceUtils").showCreateAudienceSuccessToast(t, "create", he);
					},
					onSendBroadcast: Ce
				},
				chat: null,
				entryPoint: u,
				onBack: function() {
					return U.pop();
				},
				suggestedAudienceData: ie
			})
		}) : U.step === y.EDIT_AUDIENCE ? de != null ? c.jsx(o("WAWebBizBroadcastsUpsertAudienceScreenLoadable").WAWebBizBroadcastsUpsertAudienceScreenLoadable, {
			audienceConfig: {
				kind: "core",
				onNewAudienceSuccess: function(t) {
					U.pop();
				},
				onSendBroadcast: Ce,
				onUpdateAudienceSuccess: function() {
					U.pop();
				}
			},
			chat: de,
			entryPoint: u,
			onBack: function() {
				return U.pop();
			},
			suggestedAudienceData: null
		}) : null : U.step === y.IMPORT_AUDIENCE ? c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "biz-broadcast-import-audience",
			children: c.jsx(o("WAWebBizBroadcastsImportAudienceScreenLoadable").WAWebBizBroadcastsImportAudienceScreenLoadable, {
				onSendBroadcast: Ce,
				entryPoint: u,
				onClose: function() {
					return U.pop();
				},
				ref: i,
				onCreateAudienceSuccess: function(t) {
					U.pop(), o("WAWebBizBroadcastsAudienceUtils").showCreateAudienceSuccessToast(t, "import", he);
				},
				validContactsData: D,
				errorList: P,
				importLoggingContext: O
			})
		}) : U.step === y.IMPORT_AUDIENCES ? c.jsx(o("WAWebBizBroadcastsSmartCSVImportAudiencesScreenLoadable").WAWebBizBroadcastsSmartCSVImportAudiencesScreenLoadable, {
			audiences: w,
			entryPoint: u,
			importLoggingContext: O,
			onClose: function() {
				return U.pop();
			},
			onCreateAudiencesSuccess: function(t) {
				U.pop(), he();
				var e = t[t.length - 1];
				e != null && o("WAWebBizBroadcastsAudienceUtils").showCreateAudienceSuccessToast(e, "import", null);
			}
		}) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + U.step);
		})();
		return c.jsx(o("WAWebBizLoggerProjectContext.react").BizLoggerProjectProvider, {
			project: "npm_web",
			children: c.jsx(r("WAWebBizBroadcastsEligibilityGate.react"), {
				entryPoint: u,
				onClose: d,
				surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME,
				children: c.jsx(q, {
					flow: U,
					ref: i,
					displayName: "BusinessBroadcastHomeFlow",
					children: Ge
				})
			})
		});
	}
	E.displayName = E.name + " [from " + i.id + "]", l.default = E;
}), 98);
