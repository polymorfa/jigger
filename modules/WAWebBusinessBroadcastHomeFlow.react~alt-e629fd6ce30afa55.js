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
		var n, a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, s), l = i.entryPoint, u = i.onClose;
		_(function() {
			return o("WAWebBusinessBroadcastHomeQPLLogger").BusinessBroadcastHomeQPLLogger.start(l), o("WAWebBusinessBroadcastHomeQPLLogger").BusinessBroadcastHomeQPLLogger.pointOnce(o("WAWebBusinessBroadcastHomeQPLLogger").BusinessBroadcastHomeQPLPoints.FLOW_MOUNTED), function() {
				o("WAWebBusinessBroadcastHomeQPLLogger").BusinessBroadcastHomeQPLLogger.dropIfActive();
			};
		}, [l]), p(function() {
			o("WAWebBizBroadcastNewBroadcastFlowLoadable").prefetchNewBroadcastFlow();
		}, []);
		var d = h([]), E = d[0], k = d[1], I = h([]), T = I[0], D = I[1], x = h([]), $ = x[0], P = x[1], N = h([]), M = N[0], w = N[1], A = h(null), F = A[0], O = A[1], B = o("useWAWebFlow").useFlow(y.HOME_SCREEN, { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }), W = B[0], q = B[1], U = h(null), V = U[0], H = U[1], G = h(!1), z = G[0], j = G[1], K = h(null), Q = K[0], X = K[1], Y = h(null), J = Y[0], Z = Y[1], ee = h(null), te = ee[0], ne = ee[1], re = g(!1), oe = h(null), ae = oe[0], ie = oe[1], le = h(!1), se = le[0], ue = le[1], ce = f(function() {
			return Q == null ? null : o("WAWebChatCollection").ChatCollection.get(o("WAWebWidFactory").createWid(Q.broadcastJid));
		}, [Q]), de = m(function(e) {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.broadcastInfoDrawerOpened(l, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME), X(null), j(!1), ue(!1), H(e);
		}, [l]), me = m(function(e) {
			X(null), j(!0), H(e);
		}, []), pe = m(function(e) {
			H(null), ue(!1), X(e);
		}, []), _e = m(function() {
			H(null);
		}, []), fe = m(function() {
			X(null);
		}, []), ge = r("useWAWebDebouncedCallback")(function() {
			k(function(e) {
				var t = o("WAWebBizBroadcastsAudienceUtils").getBroadcastChatsAsAudiences();
				return R(e, t) ? e : t;
			});
		}, v);
		p(function() {
			ge();
		}, [ge]);
		var he = m(function(e) {
			o("WAWebChatGetters").getIsBroadcast(e) && ge();
		}, [ge]);
		(n = o("useWAWebListener")).useListener(o("WAWebChatCollection").ChatCollection, "add", he), n.useListener(o("WAWebChatCollection").ChatCollection, "change", he), n.useListener(r("WAWebBroadcastMetadataCollection"), "add", ge), n.useListener(r("WAWebBroadcastMetadataCollection"), "change", ge);
		var ye = m(function(e) {
			k(o("WAWebBizBroadcastsAudienceUtils").getBroadcastChatsAsAudiences());
			var t = o("WAWebChatCollection").ChatCollection.get(o("WAWebWidFactory").createWid(e.broadcastJid));
			t != null && (o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.start(o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastEntryPoint.AUDIENCE_CREATION, !0), Z(t), q.pop(), q.push(y.NEW_BROADCAST));
		}, [q]), Ce = m(function(e) {
			(async function() {
				var t = e.id;
				try {
					var n = await o("WAWebSuggestedAudienceCards").resolveCardExpression(e);
					t = n.predicateType;
					var r = await o("WAWebAudienceResolver").resolveAudienceExpression(n);
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.suggestedAudienceCardClicked(e.id, n.predicateType, r.length, l);
					var a = r.map(function(e) {
						return e.split("@")[0];
					});
					ie({
						initialRecipientIds: a,
						suggestedAudienceCardId: e.id
					}), q.push(y.CREATE_AUDIENCE);
				} catch (n) {
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.suggestedAudienceCardError(e.id, t, l, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME);
				}
			})();
		}, [l, q]), be = m(function(e) {
			o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.start(o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastEntryPoint.AUDIENCE_INFO, !0), Z(e), ne(null), q.push(y.NEW_BROADCAST);
		}, [q]), ve = m(function() {
			V == null || re.current || (re.current = !0, o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.start(o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastEntryPoint.HOME_SCREEN, !1), (async function() {
				var e = await o("WAWebBizBroadcastCampaignDataLayer").resolveAttachmentDataForCampaign(V.campaignId);
				Z(null), ne({
					attachmentData: e,
					campaignId: V.campaignId,
					ctaButtonData: V.ctaButtonData,
					isDuplicateBroadcast: !0,
					message: V.messageBody
				}), q.push(y.NEW_BROADCAST);
			})().catch(function(t) {
				o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.end(3), o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to duplicate broadcast from home"]))).catching(r("getErrorSafe")(t)).sendLogs("home-duplicate-broadcast-failed");
			}).finally(function() {
				re.current = !1;
			}));
		}, [q, V]), Se = m(function() {
			q.push(y.EDIT_AUDIENCE);
		}, [q]);
		n.useListener(o("WAWebChatCollection").ChatCollection, "remove", function() {
			ge(), Q != null && o("WAWebChatCollection").ChatCollection.get(o("WAWebWidFactory").createWid(Q.broadcastJid)) == null && X(null);
		});
		var Re = m(function(e) {
			V != null && H(babelHelpers.extends({}, V, { campaignName: e }));
		}, [V]), Le = m(function(e, t, n, r, a) {
			if (D(e), P(t), O(r != null ? r : null), n != null) {
				o("WAWebBizBroadcastsSmartCSVImportSetupFlowLoadable").openSmartCSVImportSetupFlowLoadable({
					contacts: e,
					context: n,
					entryPoint: l,
					errorList: t,
					importLoggingContext: r,
					maxContactsPerAudience: a,
					onReviewAudience: function(t, n) {
						D(t), P(n), O(r != null ? r : null), q.push(y.IMPORT_AUDIENCE);
					},
					onReviewAudiences: function(t) {
						var e = t.length === C ? t[0] : null;
						if (e != null) {
							var n;
							D(e.contacts), P((n = e.errorList) != null ? n : []), O(r != null ? r : null), q.push(y.IMPORT_AUDIENCE);
							return;
						}
						w(t), O(r != null ? r : null), q.push(y.IMPORT_AUDIENCES);
					}
				});
				return;
			}
			q.push(y.IMPORT_AUDIENCE);
		}, [l, q]), Ee = r("useWAWebBroadcastCampaigns")(), ke = Ee.campaigns, Ie = Ee.loading, Te = r("useWAWebBroadcastCampaignsCollection")(), De = Te.campaigns, xe = Te.loading, $e = o("WAWebBizBroadcastCollectionGating").shouldReadBizBroadcastCampaignsFromCollection(), Pe = f(function() {
			return $e ? De.map(o("WAWebBizBroadcastCampaignListItemDerive").deriveListItemFromModel) : null;
		}, [$e, De]), Ne = Pe != null ? Pe : ke, Me = r("useWAWebBizBroadcastResolvedCampaignSentAts")(Ne), we = h(function() {
			return Date.now();
		}), Ae = we[0], Fe = we[1];
		p(function() {
			var e = window.setInterval(function() {
				Fe(Date.now());
			}, S);
			return function() {
				return window.clearInterval(e);
			};
		}, []);
		var Oe = f(function() {
			return Ne.map(function(e) {
				var t = Me.get(e.campaignId), n = t != null ? babelHelpers.extends({}, e, { sentAt: t }) : e;
				return babelHelpers.extends({}, n, { insightStatus: o("WAWebBizBroadcastHomeInsightStatus").getBroadcastListItemInsightStatus(n, Ae) });
			});
		}, [
			Ne,
			Me,
			Ae
		]), Be = f(function() {
			return [].concat(Oe).sort(function(e, t) {
				return L(t) - L(e);
			});
		}, [Oe]), We = $e ? xe : Ie, qe = f(function() {
			if (V == null) return null;
			var e = Be.find(function(e) {
				return e.campaignId === V.campaignId;
			});
			return e == null ? V : babelHelpers.extends({}, e, { campaignName: V.campaignName });
		}, [Be, V]), Ue = g(null), Ve = c.jsx(r("WAWebBusinessBroadcastHomeAudienceTable.react"), {
			audiencesList: E,
			campaigns: Be,
			entryPoint: l,
			onAudienceSelect: pe,
			onAudienceUpdate: ge,
			scrollContainerRef: Ue
		});
		if (q.step == null) return null;
		var He = q.step === y.HOME_SCREEN ? c.jsx(r("WAWebDrawer.react"), { children: c.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: b.fullscreenRoot,
			children: [c.jsx(o("WAWebFlexBox.react").FlexColumn, {
				xstyle: b.mainContentWithHeader,
				children: c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
					name: "biz-broadcast-home-screen",
					onError: function() {
						return o("WAWebBusinessBroadcastHomeQPLLogger").BusinessBroadcastHomeQPLLogger.end(3);
					},
					children: c.jsx(r("WAWebBusinessBroadcastHomeScreen.react"), {
						audiencesCount: E.length,
						audienceTable: Ve,
						campaigns: Be,
						entryPoint: l,
						loading: We,
						nowMs: Ae,
						onBroadcastSelect: de,
						onClose: u,
						onCreateAudience: function() {
							ie(null), q.push(y.CREATE_AUDIENCE);
						},
						onCreateBroadcast: function() {
							o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.start(o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastEntryPoint.HOME_SCREEN, !1), Z(null), ne(null), q.push(y.NEW_BROADCAST);
						},
						onPreview: me,
						onSuggestedCardPress: Ce,
						onProTryNow: function() {
							return q.push(y.FINISH_PRO_SETUP);
						},
						onOpenProSettings: function() {
							H(null), X(null), ue(!0);
						},
						onUploadSuccess: Le,
						tableScrollRef: Ue
					})
				})
			}), c.jsxs(r("WAWebVelocityTransitionGroup"), {
				component: "div",
				xstyle: [b.rightDrawerWrapper, V != null || ce != null || se ? b.rightDrawerOpen : b.rightDrawerClosed],
				transitionName: "slide-left",
				children: [
					qe != null ? c.jsx("div", {
						className: "x5yr21d xh8yej3",
						children: c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
							name: "biz-broadcast-details-drawer",
							children: c.jsx(o("WAWebBusinessBroadcastDetailsDrawerLoadable").WAWebBusinessBroadcastDetailsDrawerLoadable, {
								entryPoint: l,
								initialShowPreview: z,
								item: qe,
								onClose: _e,
								onDuplicate: ve,
								onRenameSuccess: Re
							})
						})
					}, qe.campaignId) : null,
					ce != null ? c.jsx("div", {
						className: "x5yr21d xh8yej3",
						children: c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
							name: "biz-broadcast-audience-info-drawer",
							children: c.jsx(o("WAWebBroadcastInfoDrawerLoadable").WAWebBroadcastInfoDrawerLoadable, {
								chat: ce,
								entryPoint: l,
								onClose: fe,
								onCloseFullScreen: u,
								onAudienceUpdate: ge,
								onEditAudience: Se,
								onNewBroadcast: function() {
									return be(ce);
								},
								shouldUseDrawer: !1
							})
						})
					}, ce.id.toString()) : null,
					se ? c.jsx("div", {
						className: "x5yr21d xh8yej3",
						children: c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
							name: "biz-broadcast-pro-settings-panel",
							children: c.jsx(r("WAWebBizBroadcastProHomeSettingsPanel.react"), { onClose: function() {
								return ue(!1);
							} })
						})
					}, "bb-pro-settings-panel") : null
				]
			})]
		}) }) : q.step === y.FINISH_PRO_SETUP ? c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "biz-broadcast-finish-pro-setup",
			fallback: o("WAWebNullFunc").returnNull,
			children: c.jsx(r("WAWebDrawer.react"), { children: c.jsx(o("WAWebFlexBox.react").FlexColumn, {
				xstyle: b.fullscreenRoot,
				children: c.jsx(r("WAWebBizBroadcastBBProOnboardingScreen.react"), {
					entryPoint: l,
					qrDeeplink: o("WAWebBroadcastConsts").BB_PRO_ONBOARDING_DEEPLINK,
					onDowngrade: function() {
						o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.tosNuxDismissClicked(l, o("WAWebWamEnumBbTierType").BB_TIER_TYPE.PRO), o("WAWebBizBroadcastProOnboardingStatus").dismissBizBroadcastProNuxOnboarding(), q.pop();
					}
				})
			}) })
		}) : q.step === y.NEW_BROADCAST ? c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "biz-broadcast-new-broadcast",
			onError: function() {
				return o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.end(3);
			},
			children: o("WAWebBizBroadcastProOnboardingStatus").getBizBroadcastProductTier() === o("WAWebWamEnumBbTierType").BB_TIER_TYPE.PRO && o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled() ? c.jsx(r("WAWebBizBroadcastProNewBroadcastFlowTwoPhaseContainer.react"), {
				entryPoint: l,
				onBack: function() {
					return q.pop();
				},
				sourceBroadcastMessageData: te
			}) : c.jsx(o("WAWebBizBroadcastNewBroadcastFlowLoadable").WAWebBizBroadcastNewBroadcastFlowLoadable, {
				chat: J,
				entryPoint: l,
				onBack: function() {
					return q.pop();
				},
				sourceBroadcastMessageData: te
			})
		}) : q.step === y.CREATE_AUDIENCE ? c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "biz-broadcast-create-audience",
			children: c.jsx(o("WAWebBizBroadcastsUpsertAudienceScreenLoadable").WAWebBizBroadcastsUpsertAudienceScreenLoadable, {
				audienceConfig: {
					kind: "core",
					onNewAudienceSuccess: function(t) {
						q.pop(), o("WAWebBizBroadcastsAudienceUtils").showCreateAudienceSuccessToast(t, "create", ge);
					},
					onSendBroadcast: ye
				},
				chat: null,
				entryPoint: l,
				onBack: function() {
					return q.pop();
				},
				suggestedAudienceData: ae
			})
		}) : q.step === y.EDIT_AUDIENCE ? ce != null ? c.jsx(o("WAWebBizBroadcastsUpsertAudienceScreenLoadable").WAWebBizBroadcastsUpsertAudienceScreenLoadable, {
			audienceConfig: {
				kind: "core",
				onNewAudienceSuccess: function(t) {
					q.pop();
				},
				onSendBroadcast: ye,
				onUpdateAudienceSuccess: function() {
					q.pop();
				}
			},
			chat: ce,
			entryPoint: l,
			onBack: function() {
				return q.pop();
			},
			suggestedAudienceData: null
		}) : null : q.step === y.IMPORT_AUDIENCE ? c.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "biz-broadcast-import-audience",
			children: c.jsx(o("WAWebBizBroadcastsImportAudienceScreenLoadable").WAWebBizBroadcastsImportAudienceScreenLoadable, {
				onSendBroadcast: ye,
				entryPoint: l,
				onClose: function() {
					return q.pop();
				},
				ref: a,
				onCreateAudienceSuccess: function(t) {
					q.pop(), o("WAWebBizBroadcastsAudienceUtils").showCreateAudienceSuccessToast(t, "import", ge);
				},
				validContactsData: T,
				errorList: $,
				importLoggingContext: F
			})
		}) : q.step === y.IMPORT_AUDIENCES ? c.jsx(o("WAWebBizBroadcastsSmartCSVImportAudiencesScreenLoadable").WAWebBizBroadcastsSmartCSVImportAudiencesScreenLoadable, {
			audiences: M,
			entryPoint: l,
			importLoggingContext: F,
			onClose: function() {
				return q.pop();
			},
			onCreateAudiencesSuccess: function(t) {
				q.pop(), ge();
				var e = t[t.length - 1];
				e != null && o("WAWebBizBroadcastsAudienceUtils").showCreateAudienceSuccessToast(e, "import", null);
			}
		}) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + q.step);
		})();
		return c.jsx(o("WAWebBizLoggerProjectContext.react").BizLoggerProjectProvider, {
			project: "npm_web",
			children: c.jsx(r("WAWebBizBroadcastsEligibilityGate.react"), {
				entryPoint: l,
				onClose: u,
				surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME,
				children: c.jsx(W, {
					flow: q,
					ref: a,
					displayName: "BusinessBroadcastHomeFlow",
					children: He
				})
			})
		});
	}
	E.displayName = E.name + " [from " + i.id + "]", l.default = E;
}), 98);
