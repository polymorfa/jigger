__d("WAWebBizAIDrawer.react", [
	"fbt",
	"CometRelay",
	"WAWebBizAIAbilityStatus.react",
	"WAWebBizAIBestsellersDrawer.react",
	"WAWebBizAIBusinessInfoDrawer.react",
	"WAWebBizAIDownloadDataPopup.react",
	"WAWebBizAIDrawerStep",
	"WAWebBizAIExampleResponsesDrawer.react",
	"WAWebBizAIInstructionsDrawer.react",
	"WAWebBizAIIntegrationHubDrawer.react",
	"WAWebBizAIKnowledgeDrawer.react",
	"WAWebBizAIKnowledgeUploadButton.react",
	"WAWebBizAILargeScreensLogEvents",
	"WAWebBizAILeadGenListDrawer.react",
	"WAWebBizAILeadGenResponseDetailDrawer.react",
	"WAWebBizAILeadGenResponsesDrawer.react",
	"WAWebBizAIPurchaseInfoDrawer.react",
	"WAWebBizAIRelayBoundary.react",
	"WAWebBizAIResponseSettingsDrawer.react",
	"WAWebBizAiAgentGating",
	"WAWebBizAiPluginsForSurfaceQuery",
	"WAWebBizImpressionLoggingWrapper.react",
	"WAWebBizToolsDrawerBodySection.react",
	"WAWebCatalogManagementFlowLoadable",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerButton.react",
	"WAWebDrawerHeader.react",
	"WAWebGroupInfoSeparator.react",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebUserPrefsMeUser",
	"WAWebWamEnumEntryPoint",
	"WDSIconIcChecklist.react",
	"WDSIconIcDownload.react",
	"WDSIconIcFormatListBulleted.react",
	"WDSIconIcSchedule.react",
	"WDSIconIcSchool.react",
	"WDSIconIcShoppingBag.react",
	"WDSIconIcShoppingCart.react",
	"WDSIconIcStore.react",
	"WDSIconWdsIcAccountsCenter.react",
	"WDSIconWdsIcChat.react",
	"WDSText.react",
	"react",
	"useWAWebBizAIGoogleDriveFiles",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u = ["ref"], c = ["ref"], d, m = d || (d = o("react")), p = d, _ = p.useCallback, f = p.useEffect, g = p.useMemo, h = p.useState, y = p.useTransition, C = {
		body: {
			paddingInlineStart: "x1iw51ew",
			paddingInlineEnd: "xde1mab",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		icon: {
			color: "xhslqc4",
			$$css: !0
		},
		iconContainer: {
			marginInlineEnd: "x14mko6t",
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "x1nzty39",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			$$css: !0
		},
		item: {
			height: "xt7dq6l",
			minHeight: "xvkrg5o",
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "x1nzty39",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			$$css: !0
		}
	};
	function b(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.entryPoint, l = i === void 0 ? o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_TOOLS : i, u = a.initialStep, c = a.isInitialStep, d = c === void 0 ? !1 : c, p = a.onBack;
		return m.jsx(r("WAWebBizAIRelayBoundary.react"), {
			unavailableFallback: m.jsx(r("WAWebDrawer.react"), {
				testid: "biz-ai-drawer",
				children: m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: s._(
						/*BTDS*/
						""
					),
					type: d ? o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB : o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
					onBack: p
				})
			}),
			children: m.jsx(v, {
				entryPoint: l,
				initialStep: u,
				isInitialStep: d,
				onBack: p,
				ref: n
			})
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.ref, n = babelHelpers.objectWithoutPropertiesLoose(e, u), a = n.entryPoint, i = a === void 0 ? o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_TOOLS : a, l = n.initialStep, c = n.isInitialStep, d = c === void 0 ? !1 : c, p = n.onBack, g = o("useWAWebFlow").useFlow(l != null ? l : o("WAWebBizAIDrawerStep").BizAIStep.Home, { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }), C = g[0], b = g[1], v = _(function() {
			b.pop();
		}, [b]), R = _(function() {
			o("WAWebBizAILargeScreensLogEvents").logClickAIHomeSection("instructions"), b.push(o("WAWebBizAIDrawerStep").BizAIStep.Instructions);
		}, [b]), L = o("CometRelay").useQueryLoader(o("WAWebBizAIResponseSettingsDrawer.react").ResponseSettingsDrawerQuery), E = L[0], k = L[1], I = h(0), T = I[0], D = I[1], x = _(function() {
			o("WAWebBizAILargeScreensLogEvents").logClickAIHomeSection("response_settings"), D(function(e) {
				return e + 1;
			}), k({}, { fetchPolicy: "store-and-network" }), b.push(o("WAWebBizAIDrawerStep").BizAIStep.ResponseSettings);
		}, [b, k]), $ = _(function() {
			D(function(e) {
				return e + 1;
			}), k({}, { fetchPolicy: "network-only" });
		}, [k]), P = o("CometRelay").useQueryLoader(o("WAWebBizAIExampleResponsesDrawer.react").ExampleResponsesDrawerQuery), N = P[0], M = P[1], w = h(0), A = w[0], F = w[1], O = y(), B = O[1], W = _(function() {
			o("WAWebBizAILargeScreensLogEvents").logClickAIHomeSection("example_responses"), F(function(e) {
				return e + 1;
			}), M({}, { fetchPolicy: "store-and-network" }), b.push(o("WAWebBizAIDrawerStep").BizAIStep.ExampleResponses);
		}, [b, M]), q = _(function() {
			B(function() {
				M({}, { fetchPolicy: "network-only" });
			});
		}, [M]), U = _(function() {
			F(function(e) {
				return e + 1;
			}), M({}, { fetchPolicy: "network-only" });
		}, [M]), V = o("CometRelay").useQueryLoader(o("WAWebBizAIBusinessInfoDrawer.react").BusinessInfoDrawerQuery), H = V[0], G = V[1], z = h(0), j = z[0], K = z[1], Q = y(), X = Q[1], Y = _(function() {
			o("WAWebBizAILargeScreensLogEvents").logClickAIHomeSection("business_info"), K(function(e) {
				return e + 1;
			}), G({}, { fetchPolicy: "store-and-network" }), b.push(o("WAWebBizAIDrawerStep").BizAIStep.BusinessInfo);
		}, [b, G]), J = _(function() {
			X(function() {
				G({}, { fetchPolicy: "network-only" });
			});
		}, [G]), Z = _(function() {
			K(function(e) {
				return e + 1;
			}), G({}, { fetchPolicy: "network-only" });
		}, [G]), ee = o("CometRelay").useQueryLoader(o("WAWebBizAIPurchaseInfoDrawer.react").PurchaseInfoDrawerQuery), te = ee[0], ne = ee[1], re = h(0), oe = re[0], ae = re[1], ie = y(), le = ie[1], se = _(function() {
			o("WAWebBizAILargeScreensLogEvents").logClickAIHomeSection("purchase_info"), ae(function(e) {
				return e + 1;
			}), ne({}, { fetchPolicy: "store-and-network" }), b.push(o("WAWebBizAIDrawerStep").BizAIStep.PurchaseInfo);
		}, [b, ne]), ue = _(function() {
			le(function() {
				ne({}, { fetchPolicy: "network-only" });
			});
		}, [ne]), ce = _(function() {
			ae(function(e) {
				return e + 1;
			}), ne({}, { fetchPolicy: "network-only" });
		}, [ne]), de = o("CometRelay").useQueryLoader(o("WAWebBizAIBestsellersDrawer.react").BestsellersDrawerQuery), me = de[0], pe = de[1], _e = h(0), fe = _e[0], ge = _e[1], he = _(function() {
			o("WAWebBizAILargeScreensLogEvents").logClickAIHomeSection("bestsellers"), ge(function(e) {
				return e + 1;
			}), pe({}, { fetchPolicy: "store-and-network" }), b.push(o("WAWebBizAIDrawerStep").BizAIStep.Bestsellers);
		}, [b, pe]), ye = _(function() {
			ge(function(e) {
				return e + 1;
			}), pe({}, { fetchPolicy: "network-only" });
		}, [pe]), Ce = h(null), be = Ce[0], ve = Ce[1], Se = _(function() {
			ve(o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE()), b.push(o("WAWebBizAIDrawerStep").BizAIStep.CatalogManagement);
		}, [b]), Re = o("CometRelay").useQueryLoader(o("WAWebBizAIKnowledgeDrawer.react").KnowledgeQuery), Le = Re[0], Ee = Re[1], ke = h(0), Ie = ke[0], Te = ke[1], De = y(), xe = De[1], $e = r("useWAWebBizAIGoogleDriveFiles")(), Pe = $e.deleteFile, Ne = $e.enabled, Me = $e.error, we = $e.files, Ae = $e.loaded, Fe = $e.loadFiles, Oe = $e.loading, Be = _(function() {
			xe(function() {
				Ee({}, { fetchPolicy: "network-only" });
			});
		}, [Ee]), We = _(function() {
			o("WAWebBizAILargeScreensLogEvents").logClickAIHomeSection("knowledge"), Te(function(e) {
				return e + 1;
			}), Ee({}, { fetchPolicy: "store-and-network" }), Fe(), b.push(o("WAWebBizAIDrawerStep").BizAIStep.Knowledge);
		}, [
			b,
			Ee,
			Fe
		]), qe = _(function() {
			Te(function(e) {
				return e + 1;
			}), Ee({}, { fetchPolicy: "network-only" });
		}, [Ee]), Ue = _(function() {
			o("WAWebBizAILargeScreensLogEvents").logClickAIHomeSection("download_data"), o("WAWebModalManager").ModalManager.open(m.jsx(r("WAWebBizAIDownloadDataPopup.react"), {}));
		}, []), Ve = o("CometRelay").useQueryLoader(o("WAWebBizAiPluginsForSurfaceQuery").PLUGINS_QUERY), He = Ve[0], Ge = Ve[1], ze = h(0), je = ze[0], Ke = ze[1], Qe = _(function() {
			o("WAWebBizAILargeScreensLogEvents").logClickConnectionsEntryPoint(), Ke(function(e) {
				return e + 1;
			}), Ge({}, { fetchPolicy: "store-and-network" }), b.push(o("WAWebBizAIDrawerStep").BizAIStep.IntegrationHub);
		}, [b, Ge]), Xe = _(function() {
			Ke(function(e) {
				return e + 1;
			}), Ge({}, { fetchPolicy: "network-only" });
		}, [Ge]), Ye = h(null), Je = Ye[0], Ze = Ye[1], et = h(null), tt = et[0], nt = et[1], rt = b.step, ot = o("CometRelay").useQueryLoader(o("WAWebBizAILeadGenListDrawer.react").LeadGenListDrawerQuery), at = ot[0], it = ot[1], lt = h(0), st = lt[0], ut = lt[1], ct = y(), dt = ct[1], mt = _(function() {
			o("WAWebBizAILargeScreensLogEvents").logClickAIHomeSection("lead_gen"), ut(function(e) {
				return e + 1;
			}), it({}, { fetchPolicy: "store-and-network" }), b.push(o("WAWebBizAIDrawerStep").BizAIStep.LeadGenList);
		}, [b, it]), pt = _(function() {
			dt(function() {
				it({}, { fetchPolicy: "network-only" });
			});
		}, [it]), _t = _(function() {
			ut(function(e) {
				return e + 1;
			}), it({}, { fetchPolicy: "network-only" });
		}, [it]), ft = _(function(e) {
			Ze(e), b.push(o("WAWebBizAIDrawerStep").BizAIStep.LeadGenResponses);
		}, [b]), gt = _(function(e) {
			nt(e), b.push(o("WAWebBizAIDrawerStep").BizAIStep.LeadGenResponseDetail);
		}, [b]);
		if (f(function() {
			if (l != null) switch (l) {
				case o("WAWebBizAIDrawerStep").BizAIStep.ResponseSettings:
					k({}, { fetchPolicy: "store-and-network" });
					break;
				case o("WAWebBizAIDrawerStep").BizAIStep.ExampleResponses:
					M({}, { fetchPolicy: "store-and-network" });
					break;
				case o("WAWebBizAIDrawerStep").BizAIStep.BusinessInfo:
					G({}, { fetchPolicy: "store-and-network" });
					break;
				case o("WAWebBizAIDrawerStep").BizAIStep.PurchaseInfo:
					ne({}, { fetchPolicy: "store-and-network" });
					break;
				case o("WAWebBizAIDrawerStep").BizAIStep.Bestsellers:
					pe({}, { fetchPolicy: "store-and-network" });
					break;
				case o("WAWebBizAIDrawerStep").BizAIStep.LeadGenList:
					it({}, { fetchPolicy: "store-and-network" });
					break;
				case o("WAWebBizAIDrawerStep").BizAIStep.Knowledge:
					Ee({}, { fetchPolicy: "store-and-network" }), Fe();
					break;
				case o("WAWebBizAIDrawerStep").BizAIStep.Home:
				case o("WAWebBizAIDrawerStep").BizAIStep.Instructions:
				case o("WAWebBizAIDrawerStep").BizAIStep.CatalogManagement:
				case o("WAWebBizAIDrawerStep").BizAIStep.IntegrationHub:
				case o("WAWebBizAIDrawerStep").BizAIStep.LeadGenResponses:
				case o("WAWebBizAIDrawerStep").BizAIStep.LeadGenResponseDetail: break;
			}
		}, [
			l,
			k,
			M,
			G,
			ne,
			pe,
			it,
			Ee,
			Fe
		]), rt == null) return null;
		var ht;
		switch (rt) {
			case o("WAWebBizAIDrawerStep").BizAIStep.Home:
				ht = m.jsx(S, {
					entryPoint: i,
					isInitialStep: d,
					onBack: p,
					onInstructions: R,
					onResponseSettings: x,
					onExampleResponses: W,
					onBusinessInfo: Y,
					onPurchaseInfo: se,
					onBestsellers: he,
					onLeadGen: mt,
					onKnowledge: We,
					onDownloadData: Ue,
					onIntegrationHub: Qe
				});
				break;
			case o("WAWebBizAIDrawerStep").BizAIStep.Instructions:
				ht = m.jsx(r("WAWebBizAIInstructionsDrawer.react"), { onBack: v });
				break;
			case o("WAWebBizAIDrawerStep").BizAIStep.ResponseSettings:
				ht = m.jsx(o("WAWebBizAIResponseSettingsDrawer.react").WAWebBizAIResponseSettingsDrawer, {
					onBack: v,
					onRetry: $,
					queryRef: E,
					queryVersion: T
				});
				break;
			case o("WAWebBizAIDrawerStep").BizAIStep.ExampleResponses:
				ht = m.jsx(o("WAWebBizAIExampleResponsesDrawer.react").WAWebBizAIExampleResponsesDrawer, {
					onBack: v,
					onOpenKnowledge: We,
					onRefresh: q,
					onRetry: U,
					queryRef: N,
					queryVersion: A
				});
				break;
			case o("WAWebBizAIDrawerStep").BizAIStep.BusinessInfo:
				ht = m.jsx(o("WAWebBizAIBusinessInfoDrawer.react").WAWebBizAIBusinessInfoDrawer, {
					onBack: v,
					onRefresh: J,
					onRetry: Z,
					queryRef: H,
					queryVersion: j
				});
				break;
			case o("WAWebBizAIDrawerStep").BizAIStep.PurchaseInfo:
				ht = m.jsx(o("WAWebBizAIPurchaseInfoDrawer.react").WAWebBizAIPurchaseInfoDrawer, {
					onBack: v,
					onRefresh: ue,
					onRetry: ce,
					queryRef: te,
					queryVersion: oe
				});
				break;
			case o("WAWebBizAIDrawerStep").BizAIStep.Bestsellers:
				ht = m.jsx(o("WAWebBizAIBestsellersDrawer.react").WAWebBizAIBestsellersDrawer, {
					onAddItems: Se,
					onBack: v,
					onRetry: ye,
					queryRef: me,
					queryVersion: fe
				});
				break;
			case o("WAWebBizAIDrawerStep").BizAIStep.CatalogManagement:
				ht = be != null ? m.jsxs(r("WAWebDrawer.react"), {
					testid: "biz-ai-catalog-management",
					children: [m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
						title: s._(
							/*BTDS*/
							""
						),
						type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
						onBack: v
					}), m.jsx(o("WAWebCatalogManagementFlowLoadable").CatalogManagementFlowLoadable, {
						catalogId: be,
						isInitialStep: !1,
						product: null
					})]
				}) : null;
				break;
			case o("WAWebBizAIDrawerStep").BizAIStep.LeadGenList:
				ht = m.jsx(o("WAWebBizAILeadGenListDrawer.react").WAWebBizAILeadGenListDrawer, {
					onBack: v,
					onRefresh: pt,
					onRetry: _t,
					onViewResponses: ft,
					queryRef: at,
					queryVersion: st
				});
				break;
			case o("WAWebBizAIDrawerStep").BizAIStep.LeadGenResponses:
				ht = Je != null ? m.jsx(r("WAWebBizAILeadGenResponsesDrawer.react"), {
					flowRef: Je,
					onBack: v,
					onViewResponseDetail: gt
				}) : null;
				break;
			case o("WAWebBizAIDrawerStep").BizAIStep.LeadGenResponseDetail:
				ht = tt != null ? m.jsx(r("WAWebBizAILeadGenResponseDetailDrawer.react"), {
					onBack: v,
					responseRef: tt
				}) : null;
				break;
			case o("WAWebBizAIDrawerStep").BizAIStep.Knowledge:
				ht = m.jsx(o("WAWebBizAIKnowledgeDrawer.react").WAWebBizAIKnowledgeDrawer, {
					deleteGoogleDriveFile: Pe,
					googleDriveEnabled: Ne,
					googleDriveFiles: we,
					googleDriveFilesError: Me,
					googleDriveFilesLoaded: Ae,
					googleDriveFilesLoading: Oe,
					onBack: v,
					onRefresh: Be,
					onRetry: qe,
					queryRef: Le,
					queryVersion: Ie
				});
				break;
			case o("WAWebBizAIDrawerStep").BizAIStep.IntegrationHub:
				ht = m.jsx(r("WAWebBizAIIntegrationHubDrawer.react"), {
					onBack: v,
					onRetry: Xe,
					queryRef: He,
					queryVersion: je
				});
				break;
		}
		return m.jsx(C, {
			ref: t,
			flow: b,
			children: ht
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t = e.ref, n = babelHelpers.objectWithoutPropertiesLoose(e, c), a = n.entryPoint, i = n.isInitialStep, l = n.onBack, u = n.onBestsellers, d = n.onBusinessInfo, p = n.onDownloadData, _ = n.onExampleResponses, h = n.onInstructions, y = n.onIntegrationHub, b = n.onKnowledge, v = n.onLeadGen, S = n.onPurchaseInfo, R = n.onResponseSettings;
		f(function() {
			o("WAWebBizAILargeScreensLogEvents").logViewAIHome(a);
		}, [a]);
		var L = g(function() {
			return [
				{
					abilityType: "SHARE_BUSINESS_INFORMATION",
					icon: m.jsx(r("WDSIconIcStore.react"), { iconXstyle: C.icon }),
					label: s._(
						/*BTDS*/
						""
					),
					onClick: d,
					testid: "biz-ai-add-business-info"
				},
				{
					abilityType: "SHARE_PRODUCT_INFORMATION",
					icon: m.jsx(r("WDSIconIcShoppingBag.react"), { iconXstyle: C.icon }),
					label: s._(
						/*BTDS*/
						""
					),
					onClick: u,
					testid: "biz-ai-recommend-bestsellers"
				},
				{
					abilityType: "SHARE_PURCHASING_INFORMATION",
					icon: m.jsx(r("WDSIconIcShoppingCart.react"), { iconXstyle: C.icon }),
					label: s._(
						/*BTDS*/
						""
					),
					onClick: S,
					testid: "biz-ai-add-purchase-info"
				},
				{
					abilityType: null,
					icon: m.jsx(r("WDSIconWdsIcChat.react"), {
						directional: !0,
						iconXstyle: C.icon
					}),
					label: s._(
						/*BTDS*/
						""
					),
					onClick: _,
					testid: "biz-ai-add-example-responses"
				}
			];
		}, [
			u,
			d,
			_,
			S
		]), E = g(function() {
			return [{
				icon: m.jsx(r("WDSIconIcFormatListBulleted.react"), {
					directional: !0,
					iconXstyle: C.icon
				}),
				label: s._(
					/*BTDS*/
					""
				),
				onClick: v,
				testid: "biz-ai-ask-customer-info"
			}];
		}, [v]), k = o("WAWebBizAiAgentGating").isIntegrationHubEnabled(), I = g(function() {
			var e = [{
				icon: m.jsx(r("WDSIconIcSchedule.react"), { iconXstyle: C.icon }),
				label: s._(
					/*BTDS*/
					""
				),
				onClick: R,
				secondary: m.jsx(o("WAWebBizAIResponseSettingsDrawer.react").WAWebBizAIResponseSettingsSummary, {}),
				testid: "biz-ai-response-settings"
			}, {
				icon: m.jsx(r("WDSIconIcSchool.react"), { iconXstyle: C.icon }),
				label: s._(
					/*BTDS*/
					""
				),
				onClick: b,
				secondary: s._(
					/*BTDS*/
					""
				),
				testid: "biz-ai-knowledge"
			}];
			return k && e.push({
				icon: m.jsx(r("WDSIconWdsIcAccountsCenter.react"), { iconXstyle: C.icon }),
				label: s._(
					/*BTDS*/
					""
				),
				onClick: y,
				onImpression: o("WAWebBizAILargeScreensLogEvents").logViewConnectionsEntryPoint,
				secondary: s._(
					/*BTDS*/
					""
				),
				testid: "biz-ai-integration-hub"
			}), e.push({
				icon: m.jsx(r("WDSIconIcChecklist.react"), {
					directional: !0,
					iconXstyle: C.icon
				}),
				label: s._(
					/*BTDS*/
					""
				),
				onClick: h,
				secondary: s._(
					/*BTDS*/
					""
				),
				testid: "biz-ai-instructions"
			}), e;
		}, [
			k,
			h,
			y,
			b,
			R
		]), T = g(function() {
			return [{
				icon: m.jsx(r("WDSIconIcDownload.react"), { iconXstyle: C.icon }),
				label: s._(
					/*BTDS*/
					""
				),
				onClick: p,
				testid: "biz-ai-download-data"
			}];
		}, [p]);
		return m.jsxs(r("WAWebDrawer.react"), {
			ref: t,
			testid: "biz-ai-drawer",
			children: [m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: i ? o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB : o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: l,
				rightActionElement: m.jsx(r("WAWebBizAIKnowledgeUploadButton.react"), { testidPrefix: "biz-ai-home" })
			}), m.jsxs(r("WAWebDrawerBody.react"), {
				xstyle: C.body,
				children: [m.jsx(r("WAWebBizToolsDrawerBodySection.react"), {
					hideDivider: !0,
					theme: "biz-ai-home",
					headerText: s._(
						/*BTDS*/
						""
					),
					children: L.map(function(e) {
						return m.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
							testid: e.testid,
							useRoundedStyle: !0,
							theme: "biz-tools",
							divider: !1,
							icon: e.icon,
							iconXstyle: C.iconContainer,
							xstyle: C.item,
							active: !1,
							onClick: e.onClick,
							detail: e.abilityType != null ? m.jsx(r("WAWebBizAIAbilityStatus.react"), { abilityType: e.abilityType }) : void 0,
							children: e.label
						}, e.testid);
					})
				}), [
					{
						headerText: s._(
							/*BTDS*/
							""
						),
						items: E
					},
					{
						headerText: s._(
							/*BTDS*/
							""
						),
						items: I
					},
					{
						headerText: s._(
							/*BTDS*/
							""
						),
						items: T
					}
				].map(function(e, t) {
					return m.jsxs(m.Fragment, { children: [m.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 }), m.jsx(r("WAWebBizToolsDrawerBodySection.react"), {
						hideDivider: !0,
						theme: "biz-ai-home",
						headerText: e.headerText,
						children: e.items.map(function(e) {
							var t, n = m.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
								testid: e.testid,
								useRoundedStyle: !0,
								theme: "biz-tools",
								divider: !1,
								icon: e.icon,
								iconXstyle: C.iconContainer,
								xstyle: C.item,
								active: !1,
								onClick: (t = e.onClick) != null ? t : r("WAWebNoop"),
								children: e.secondary != null ? m.jsxs("span", {
									className: "x78zum5 xdt5ytf",
									children: [m.jsx("span", { children: e.label }), m.jsx(r("WDSText.react"), {
										colorName: "contentDeemphasized",
										type: "Body3",
										children: m.jsx("span", {
											className: "xeaf4i8",
											children: e.secondary
										})
									})]
								}) : e.label
							});
							return e.onImpression != null ? m.jsx(r("WAWebBizImpressionLoggingWrapper.react"), {
								onImpression: e.onImpression,
								children: n
							}, e.testid) : m.jsx(m.Fragment, { children: n }, e.testid);
						})
					})] }, t);
				})]
			})]
		});
	}
	S.displayName = S.name + " [from " + i.id + "]", l.default = b;
}), 226);
