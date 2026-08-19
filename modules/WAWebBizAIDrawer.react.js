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
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(16), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, u = l.entryPoint, c = l.initialStep, d = l.isInitialStep, p = l.onBack, _ = u === void 0 ? o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_TOOLS : u, f = d === void 0 ? !1 : d, g;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (g = s._(
			/*BTDS*/
			""
		), n[3] = g) : g = n[3];
		var h = f ? o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB : o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL, y;
		n[4] !== p || n[5] !== h ? (y = m.jsx(r("WAWebDrawer.react"), {
			testid: "biz-ai-drawer",
			children: m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: g,
				type: h,
				onBack: p
			})
		}), n[4] = p, n[5] = h, n[6] = y) : y = n[6];
		var C;
		n[7] !== _ || n[8] !== c || n[9] !== f || n[10] !== p || n[11] !== i ? (C = m.jsx(v, {
			entryPoint: _,
			initialStep: c,
			isInitialStep: f,
			onBack: p,
			ref: i
		}), n[7] = _, n[8] = c, n[9] = f, n[10] = p, n[11] = i, n[12] = C) : C = n[12];
		var b;
		return n[13] !== y || n[14] !== C ? (b = m.jsx(r("WAWebBizAIRelayBoundary.react"), {
			unavailableFallback: y,
			children: C
		}), n[13] = y, n[14] = C, n[15] = b) : b = n[15], b;
	}
	function v(e) {
		var t = o("react-compiler-runtime").c(160), n, a;
		t[0] !== e ? (a = e.ref, n = babelHelpers.objectWithoutPropertiesLoose(e, u), t[0] = e, t[1] = n, t[2] = a) : (n = t[1], a = t[2]);
		var i = n, l = i.entryPoint, c = i.initialStep, d = i.isInitialStep, p = i.onBack, _ = l === void 0 ? o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_TOOLS : l, g = d === void 0 ? !1 : d, C;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (C = { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }, t[3] = C) : C = t[3];
		var b = o("useWAWebFlow").useFlow(c != null ? c : o("WAWebBizAIDrawerStep").BizAIStep.Home, C), v = b[0], W = b[1], q;
		t[4] !== W ? (q = function() {
			W.pop();
		}, t[4] = W, t[5] = q) : q = t[5];
		var U = q, V;
		t[6] !== W ? (V = function() {
			o("WAWebBizAILargeScreensLogEvents").logClickAIHomeSection("instructions"), W.push(o("WAWebBizAIDrawerStep").BizAIStep.Instructions);
		}, t[6] = W, t[7] = V) : V = t[7];
		var H = V, G = o("CometRelay").useQueryLoader(o("WAWebBizAIResponseSettingsDrawer.react").ResponseSettingsDrawerQuery), z = G[0], j = G[1], K = h(0), Q = K[0], X = K[1], Y;
		t[8] !== W || t[9] !== j ? (Y = function() {
			o("WAWebBizAILargeScreensLogEvents").logClickAIHomeSection("response_settings"), X(O), j({}, { fetchPolicy: "store-and-network" }), W.push(o("WAWebBizAIDrawerStep").BizAIStep.ResponseSettings);
		}, t[8] = W, t[9] = j, t[10] = Y) : Y = t[10];
		var J = Y, Z;
		t[11] !== j ? (Z = function() {
			X(F), j({}, { fetchPolicy: "network-only" });
		}, t[11] = j, t[12] = Z) : Z = t[12];
		var ee = Z, te = o("CometRelay").useQueryLoader(o("WAWebBizAIExampleResponsesDrawer.react").ExampleResponsesDrawerQuery), ne = te[0], re = te[1], oe = h(0), ae = oe[0], ie = oe[1], le = y(), se = le[1], ue;
		t[13] !== W || t[14] !== re ? (ue = function() {
			o("WAWebBizAILargeScreensLogEvents").logClickAIHomeSection("example_responses"), ie(A), re({}, { fetchPolicy: "store-and-network" }), W.push(o("WAWebBizAIDrawerStep").BizAIStep.ExampleResponses);
		}, t[13] = W, t[14] = re, t[15] = ue) : ue = t[15];
		var ce = ue, de;
		t[16] !== re ? (de = function() {
			se(function() {
				re({}, { fetchPolicy: "network-only" });
			});
		}, t[16] = re, t[17] = de) : de = t[17];
		var me = de, pe;
		t[18] !== re ? (pe = function() {
			ie(w), re({}, { fetchPolicy: "network-only" });
		}, t[18] = re, t[19] = pe) : pe = t[19];
		var _e = pe, fe = o("CometRelay").useQueryLoader(o("WAWebBizAIBusinessInfoDrawer.react").BusinessInfoDrawerQuery), ge = fe[0], he = fe[1], ye = h(0), Ce = ye[0], be = ye[1], ve = y(), Se = ve[1], Re;
		t[20] !== W || t[21] !== he ? (Re = function() {
			o("WAWebBizAILargeScreensLogEvents").logClickAIHomeSection("business_info"), be(M), he({}, { fetchPolicy: "store-and-network" }), W.push(o("WAWebBizAIDrawerStep").BizAIStep.BusinessInfo);
		}, t[20] = W, t[21] = he, t[22] = Re) : Re = t[22];
		var Le = Re, Ee;
		t[23] !== he ? (Ee = function() {
			Se(function() {
				he({}, { fetchPolicy: "network-only" });
			});
		}, t[23] = he, t[24] = Ee) : Ee = t[24];
		var ke = Ee, Ie;
		t[25] !== he ? (Ie = function() {
			be(N), he({}, { fetchPolicy: "network-only" });
		}, t[25] = he, t[26] = Ie) : Ie = t[26];
		var Te = Ie, De = o("CometRelay").useQueryLoader(o("WAWebBizAIPurchaseInfoDrawer.react").PurchaseInfoDrawerQuery), xe = De[0], $e = De[1], Pe = h(0), Ne = Pe[0], Me = Pe[1], we = y(), Ae = we[1], Fe;
		t[27] !== W || t[28] !== $e ? (Fe = function() {
			o("WAWebBizAILargeScreensLogEvents").logClickAIHomeSection("purchase_info"), Me(P), $e({}, { fetchPolicy: "store-and-network" }), W.push(o("WAWebBizAIDrawerStep").BizAIStep.PurchaseInfo);
		}, t[27] = W, t[28] = $e, t[29] = Fe) : Fe = t[29];
		var Oe = Fe, Be;
		t[30] !== $e ? (Be = function() {
			Ae(function() {
				$e({}, { fetchPolicy: "network-only" });
			});
		}, t[30] = $e, t[31] = Be) : Be = t[31];
		var We = Be, qe;
		t[32] !== $e ? (qe = function() {
			Me($), $e({}, { fetchPolicy: "network-only" });
		}, t[32] = $e, t[33] = qe) : qe = t[33];
		var Ue = qe, Ve = o("CometRelay").useQueryLoader(o("WAWebBizAIBestsellersDrawer.react").BestsellersDrawerQuery), He = Ve[0], Ge = Ve[1], ze = h(0), je = ze[0], Ke = ze[1], Qe;
		t[34] !== W || t[35] !== Ge ? (Qe = function() {
			o("WAWebBizAILargeScreensLogEvents").logClickAIHomeSection("bestsellers"), Ke(x), Ge({}, { fetchPolicy: "store-and-network" }), W.push(o("WAWebBizAIDrawerStep").BizAIStep.Bestsellers);
		}, t[34] = W, t[35] = Ge, t[36] = Qe) : Qe = t[36];
		var Xe = Qe, Ye;
		t[37] !== Ge ? (Ye = function() {
			Ke(D), Ge({}, { fetchPolicy: "network-only" });
		}, t[37] = Ge, t[38] = Ye) : Ye = t[38];
		var Je = Ye, Ze = h(null), et = Ze[0], tt = Ze[1], nt;
		t[39] !== W ? (nt = function() {
			tt(o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE()), W.push(o("WAWebBizAIDrawerStep").BizAIStep.CatalogManagement);
		}, t[39] = W, t[40] = nt) : nt = t[40];
		var rt = nt, ot = o("CometRelay").useQueryLoader(o("WAWebBizAIKnowledgeDrawer.react").KnowledgeQuery), at = ot[0], it = ot[1], lt = h(0), st = lt[0], ut = lt[1], ct = y(), dt = ct[1], mt = r("useWAWebBizAIGoogleDriveFiles")(), pt = mt.deleteFile, _t = mt.enabled, ft = mt.error, gt = mt.files, ht = mt.loaded, yt = mt.loadFiles, Ct = mt.loading, bt;
		t[41] !== it ? (bt = function() {
			dt(function() {
				it({}, { fetchPolicy: "network-only" });
			});
		}, t[41] = it, t[42] = bt) : bt = t[42];
		var vt = bt, St;
		t[43] !== W || t[44] !== yt || t[45] !== it ? (St = function() {
			o("WAWebBizAILargeScreensLogEvents").logClickAIHomeSection("knowledge"), ut(T), it({}, { fetchPolicy: "store-and-network" }), yt(), W.push(o("WAWebBizAIDrawerStep").BizAIStep.Knowledge);
		}, t[43] = W, t[44] = yt, t[45] = it, t[46] = St) : St = t[46];
		var Rt = St, Lt;
		t[47] !== it ? (Lt = function() {
			ut(I), it({}, { fetchPolicy: "network-only" });
		}, t[47] = it, t[48] = Lt) : Lt = t[48];
		var Et = Lt, kt = k, It = o("CometRelay").useQueryLoader(o("WAWebBizAiPluginsForSurfaceQuery").PLUGINS_QUERY), Tt = It[0], Dt = It[1], xt = h(0), $t = xt[0], Pt = xt[1], Nt;
		t[49] !== W || t[50] !== Dt ? (Nt = function() {
			o("WAWebBizAILargeScreensLogEvents").logClickConnectionsEntryPoint(), Pt(E), Dt({}, { fetchPolicy: "store-and-network" }), W.push(o("WAWebBizAIDrawerStep").BizAIStep.IntegrationHub);
		}, t[49] = W, t[50] = Dt, t[51] = Nt) : Nt = t[51];
		var Mt = Nt, wt;
		t[52] !== Dt ? (wt = function() {
			Pt(L), Dt({}, { fetchPolicy: "network-only" });
		}, t[52] = Dt, t[53] = wt) : wt = t[53];
		var At = wt, Ft = h(null), Ot = Ft[0], Bt = Ft[1], Wt = h(null), qt = Wt[0], Ut = Wt[1], Vt = W.step, Ht = o("CometRelay").useQueryLoader(o("WAWebBizAILeadGenListDrawer.react").LeadGenListDrawerQuery), Gt = Ht[0], zt = Ht[1], jt = h(0), Kt = jt[0], Qt = jt[1], Xt = y(), Yt = Xt[1], Jt;
		t[54] !== W || t[55] !== zt ? (Jt = function() {
			o("WAWebBizAILargeScreensLogEvents").logClickAIHomeSection("lead_gen"), Qt(R), zt({}, { fetchPolicy: "store-and-network" }), W.push(o("WAWebBizAIDrawerStep").BizAIStep.LeadGenList);
		}, t[54] = W, t[55] = zt, t[56] = Jt) : Jt = t[56];
		var Zt = Jt, en;
		t[57] !== zt ? (en = function() {
			Yt(function() {
				zt({}, { fetchPolicy: "network-only" });
			});
		}, t[57] = zt, t[58] = en) : en = t[58];
		var tn = en, nn;
		t[59] !== zt ? (nn = function() {
			Qt(S), zt({}, { fetchPolicy: "network-only" });
		}, t[59] = zt, t[60] = nn) : nn = t[60];
		var rn = nn, on;
		t[61] !== W ? (on = function(t) {
			Bt(t), W.push(o("WAWebBizAIDrawerStep").BizAIStep.LeadGenResponses);
		}, t[61] = W, t[62] = on) : on = t[62];
		var an = on, ln;
		t[63] !== W ? (ln = function(t) {
			Ut(t), W.push(o("WAWebBizAIDrawerStep").BizAIStep.LeadGenResponseDetail);
		}, t[63] = W, t[64] = ln) : ln = t[64];
		var sn = ln, un, cn;
		if (t[65] !== c || t[66] !== Ge || t[67] !== he || t[68] !== re || t[69] !== yt || t[70] !== it || t[71] !== zt || t[72] !== $e || t[73] !== j ? (un = function() {
			if (c != null) e: switch (c) {
				case o("WAWebBizAIDrawerStep").BizAIStep.ResponseSettings: {
					j({}, { fetchPolicy: "store-and-network" });
					break e;
				}
				case o("WAWebBizAIDrawerStep").BizAIStep.ExampleResponses: {
					re({}, { fetchPolicy: "store-and-network" });
					break e;
				}
				case o("WAWebBizAIDrawerStep").BizAIStep.BusinessInfo: {
					he({}, { fetchPolicy: "store-and-network" });
					break e;
				}
				case o("WAWebBizAIDrawerStep").BizAIStep.PurchaseInfo: {
					$e({}, { fetchPolicy: "store-and-network" });
					break e;
				}
				case o("WAWebBizAIDrawerStep").BizAIStep.Bestsellers: {
					Ge({}, { fetchPolicy: "store-and-network" });
					break e;
				}
				case o("WAWebBizAIDrawerStep").BizAIStep.LeadGenList: {
					zt({}, { fetchPolicy: "store-and-network" });
					break e;
				}
				case o("WAWebBizAIDrawerStep").BizAIStep.Knowledge: {
					it({}, { fetchPolicy: "store-and-network" }), yt();
					break e;
				}
				case o("WAWebBizAIDrawerStep").BizAIStep.Home:
				case o("WAWebBizAIDrawerStep").BizAIStep.Instructions:
				case o("WAWebBizAIDrawerStep").BizAIStep.CatalogManagement:
				case o("WAWebBizAIDrawerStep").BizAIStep.IntegrationHub:
				case o("WAWebBizAIDrawerStep").BizAIStep.LeadGenResponses:
				case o("WAWebBizAIDrawerStep").BizAIStep.LeadGenResponseDetail:
			}
		}, cn = [
			c,
			j,
			re,
			he,
			$e,
			Ge,
			zt,
			it,
			yt
		], t[65] = c, t[66] = Ge, t[67] = he, t[68] = re, t[69] = yt, t[70] = it, t[71] = zt, t[72] = $e, t[73] = j, t[74] = un, t[75] = cn) : (un = t[74], cn = t[75]), f(un, cn), Vt == null) return null;
		var dn;
		e: switch (Vt) {
			case o("WAWebBizAIDrawerStep").BizAIStep.Home: {
				var mn;
				t[76] !== _ || t[77] !== g || t[78] !== p || t[79] !== Xe || t[80] !== Le || t[81] !== ce || t[82] !== H || t[83] !== Mt || t[84] !== Rt || t[85] !== Zt || t[86] !== Oe || t[87] !== J ? (mn = m.jsx(B, {
					entryPoint: _,
					isInitialStep: g,
					onBack: p,
					onInstructions: H,
					onResponseSettings: J,
					onExampleResponses: ce,
					onBusinessInfo: Le,
					onPurchaseInfo: Oe,
					onBestsellers: Xe,
					onLeadGen: Zt,
					onKnowledge: Rt,
					onDownloadData: kt,
					onIntegrationHub: Mt
				}), t[76] = _, t[77] = g, t[78] = p, t[79] = Xe, t[80] = Le, t[81] = ce, t[82] = H, t[83] = Mt, t[84] = Rt, t[85] = Zt, t[86] = Oe, t[87] = J, t[88] = mn) : mn = t[88], dn = mn;
				break e;
			}
			case o("WAWebBizAIDrawerStep").BizAIStep.Instructions: {
				var pn;
				t[89] !== U ? (pn = m.jsx(r("WAWebBizAIInstructionsDrawer.react"), { onBack: U }), t[89] = U, t[90] = pn) : pn = t[90], dn = pn;
				break e;
			}
			case o("WAWebBizAIDrawerStep").BizAIStep.ResponseSettings: {
				var _n;
				t[91] !== U || t[92] !== z || t[93] !== Q || t[94] !== ee ? (_n = m.jsx(o("WAWebBizAIResponseSettingsDrawer.react").WAWebBizAIResponseSettingsDrawer, {
					onBack: U,
					onRetry: ee,
					queryRef: z,
					queryVersion: Q
				}), t[91] = U, t[92] = z, t[93] = Q, t[94] = ee, t[95] = _n) : _n = t[95], dn = _n;
				break e;
			}
			case o("WAWebBizAIDrawerStep").BizAIStep.ExampleResponses: {
				var fn;
				t[96] !== ne || t[97] !== ae || t[98] !== Rt || t[99] !== U || t[100] !== me || t[101] !== _e ? (fn = m.jsx(o("WAWebBizAIExampleResponsesDrawer.react").WAWebBizAIExampleResponsesDrawer, {
					onBack: U,
					onOpenKnowledge: Rt,
					onRefresh: me,
					onRetry: _e,
					queryRef: ne,
					queryVersion: ae
				}), t[96] = ne, t[97] = ae, t[98] = Rt, t[99] = U, t[100] = me, t[101] = _e, t[102] = fn) : fn = t[102], dn = fn;
				break e;
			}
			case o("WAWebBizAIDrawerStep").BizAIStep.BusinessInfo: {
				var gn;
				t[103] !== ge || t[104] !== Ce || t[105] !== U || t[106] !== ke || t[107] !== Te ? (gn = m.jsx(o("WAWebBizAIBusinessInfoDrawer.react").WAWebBizAIBusinessInfoDrawer, {
					onBack: U,
					onRefresh: ke,
					onRetry: Te,
					queryRef: ge,
					queryVersion: Ce
				}), t[103] = ge, t[104] = Ce, t[105] = U, t[106] = ke, t[107] = Te, t[108] = gn) : gn = t[108], dn = gn;
				break e;
			}
			case o("WAWebBizAIDrawerStep").BizAIStep.PurchaseInfo: {
				var hn;
				t[109] !== U || t[110] !== xe || t[111] !== Ne || t[112] !== We || t[113] !== Ue ? (hn = m.jsx(o("WAWebBizAIPurchaseInfoDrawer.react").WAWebBizAIPurchaseInfoDrawer, {
					onBack: U,
					onRefresh: We,
					onRetry: Ue,
					queryRef: xe,
					queryVersion: Ne
				}), t[109] = U, t[110] = xe, t[111] = Ne, t[112] = We, t[113] = Ue, t[114] = hn) : hn = t[114], dn = hn;
				break e;
			}
			case o("WAWebBizAIDrawerStep").BizAIStep.Bestsellers: {
				var yn;
				t[115] !== He || t[116] !== je || t[117] !== rt || t[118] !== U || t[119] !== Je ? (yn = m.jsx(o("WAWebBizAIBestsellersDrawer.react").WAWebBizAIBestsellersDrawer, {
					onAddItems: rt,
					onBack: U,
					onRetry: Je,
					queryRef: He,
					queryVersion: je
				}), t[115] = He, t[116] = je, t[117] = rt, t[118] = U, t[119] = Je, t[120] = yn) : yn = t[120], dn = yn;
				break e;
			}
			case o("WAWebBizAIDrawerStep").BizAIStep.CatalogManagement: {
				var Cn;
				t[121] !== et || t[122] !== U ? (Cn = et != null ? m.jsxs(r("WAWebDrawer.react"), {
					testid: "biz-ai-catalog-management",
					children: [m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
						title: s._(
							/*BTDS*/
							""
						),
						type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
						onBack: U
					}), m.jsx(o("WAWebCatalogManagementFlowLoadable").CatalogManagementFlowLoadable, {
						catalogId: et,
						isInitialStep: !1,
						product: null
					})]
				}) : null, t[121] = et, t[122] = U, t[123] = Cn) : Cn = t[123], dn = Cn;
				break e;
			}
			case o("WAWebBizAIDrawerStep").BizAIStep.LeadGenList: {
				var bn;
				t[124] !== Gt || t[125] !== Kt || t[126] !== an || t[127] !== U || t[128] !== tn || t[129] !== rn ? (bn = m.jsx(o("WAWebBizAILeadGenListDrawer.react").WAWebBizAILeadGenListDrawer, {
					onBack: U,
					onRefresh: tn,
					onRetry: rn,
					onViewResponses: an,
					queryRef: Gt,
					queryVersion: Kt
				}), t[124] = Gt, t[125] = Kt, t[126] = an, t[127] = U, t[128] = tn, t[129] = rn, t[130] = bn) : bn = t[130], dn = bn;
				break e;
			}
			case o("WAWebBizAIDrawerStep").BizAIStep.LeadGenResponses: {
				var vn;
				t[131] !== sn || t[132] !== U || t[133] !== Ot ? (vn = Ot != null ? m.jsx(r("WAWebBizAILeadGenResponsesDrawer.react"), {
					flowRef: Ot,
					onBack: U,
					onViewResponseDetail: sn
				}) : null, t[131] = sn, t[132] = U, t[133] = Ot, t[134] = vn) : vn = t[134], dn = vn;
				break e;
			}
			case o("WAWebBizAIDrawerStep").BizAIStep.LeadGenResponseDetail: {
				var Sn;
				t[135] !== U || t[136] !== qt ? (Sn = qt != null ? m.jsx(r("WAWebBizAILeadGenResponseDetailDrawer.react"), {
					onBack: U,
					responseRef: qt
				}) : null, t[135] = U, t[136] = qt, t[137] = Sn) : Sn = t[137], dn = Sn;
				break e;
			}
			case o("WAWebBizAIDrawerStep").BizAIStep.Knowledge: {
				var Rn;
				t[138] !== pt || t[139] !== _t || t[140] !== gt || t[141] !== ft || t[142] !== ht || t[143] !== Ct || t[144] !== at || t[145] !== st || t[146] !== U || t[147] !== vt || t[148] !== Et ? (Rn = m.jsx(o("WAWebBizAIKnowledgeDrawer.react").WAWebBizAIKnowledgeDrawer, {
					deleteGoogleDriveFile: pt,
					googleDriveEnabled: _t,
					googleDriveFiles: gt,
					googleDriveFilesError: ft,
					googleDriveFilesLoaded: ht,
					googleDriveFilesLoading: Ct,
					onBack: U,
					onRefresh: vt,
					onRetry: Et,
					queryRef: at,
					queryVersion: st
				}), t[138] = pt, t[139] = _t, t[140] = gt, t[141] = ft, t[142] = ht, t[143] = Ct, t[144] = at, t[145] = st, t[146] = U, t[147] = vt, t[148] = Et, t[149] = Rn) : Rn = t[149], dn = Rn;
				break e;
			}
			case o("WAWebBizAIDrawerStep").BizAIStep.IntegrationHub: {
				var Ln;
				t[150] !== Tt || t[151] !== $t || t[152] !== U || t[153] !== At ? (Ln = m.jsx(r("WAWebBizAIIntegrationHubDrawer.react"), {
					onBack: U,
					onRetry: At,
					queryRef: Tt,
					queryVersion: $t
				}), t[150] = Tt, t[151] = $t, t[152] = U, t[153] = At, t[154] = Ln) : Ln = t[154], dn = Ln;
			}
		}
		var En;
		return t[155] !== v || t[156] !== dn || t[157] !== W || t[158] !== a ? (En = m.jsx(v, {
			ref: a,
			flow: W,
			children: dn
		}), t[155] = v, t[156] = dn, t[157] = W, t[158] = a, t[159] = En) : En = t[159], En;
	}
	function S(e) {
		return e + 1;
	}
	function R(e) {
		return e + 1;
	}
	function L(e) {
		return e + 1;
	}
	function E(e) {
		return e + 1;
	}
	function k() {
		o("WAWebBizAILargeScreensLogEvents").logClickAIHomeSection("download_data"), o("WAWebModalManager").ModalManager.open(m.jsx(r("WAWebBizAIDownloadDataPopup.react"), {}));
	}
	function I(e) {
		return e + 1;
	}
	function T(e) {
		return e + 1;
	}
	function D(e) {
		return e + 1;
	}
	function x(e) {
		return e + 1;
	}
	function $(e) {
		return e + 1;
	}
	function P(e) {
		return e + 1;
	}
	function N(e) {
		return e + 1;
	}
	function M(e) {
		return e + 1;
	}
	function w(e) {
		return e + 1;
	}
	function A(e) {
		return e + 1;
	}
	function F(e) {
		return e + 1;
	}
	function O(e) {
		return e + 1;
	}
	function B(e) {
		var t = o("react-compiler-runtime").c(81), n, a;
		t[0] !== e ? (a = e.ref, n = babelHelpers.objectWithoutPropertiesLoose(e, c), t[0] = e, t[1] = n, t[2] = a) : (n = t[1], a = t[2]);
		var i = n, l = i.entryPoint, u = i.isInitialStep, d = i.onBack, p = i.onBestsellers, _ = i.onBusinessInfo, g = i.onDownloadData, h = i.onExampleResponses, y = i.onInstructions, b = i.onIntegrationHub, v = i.onKnowledge, S = i.onLeadGen, R = i.onPurchaseInfo, L = i.onResponseSettings, E, k;
		t[3] !== l ? (E = function() {
			o("WAWebBizAILargeScreensLogEvents").logViewAIHome(l);
		}, k = [l], t[3] = l, t[4] = E, t[5] = k) : (E = t[4], k = t[5]), f(E, k);
		var I, T;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (I = m.jsx(r("WDSIconIcStore.react"), { iconXstyle: C.icon }), T = s._(
			/*BTDS*/
			""
		), t[6] = I, t[7] = T) : (I = t[6], T = t[7]);
		var D;
		t[8] !== _ ? (D = {
			abilityType: "SHARE_BUSINESS_INFORMATION",
			icon: I,
			label: T,
			onClick: _,
			testid: "biz-ai-add-business-info"
		}, t[8] = _, t[9] = D) : D = t[9];
		var x, $;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (x = m.jsx(r("WDSIconIcShoppingBag.react"), { iconXstyle: C.icon }), $ = s._(
			/*BTDS*/
			""
		), t[10] = x, t[11] = $) : (x = t[10], $ = t[11]);
		var P;
		t[12] !== p ? (P = {
			abilityType: "SHARE_PRODUCT_INFORMATION",
			icon: x,
			label: $,
			onClick: p,
			testid: "biz-ai-recommend-bestsellers"
		}, t[12] = p, t[13] = P) : P = t[13];
		var N, M;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (M = m.jsx(r("WDSIconIcShoppingCart.react"), { iconXstyle: C.icon }), N = s._(
			/*BTDS*/
			""
		), t[14] = N, t[15] = M) : (N = t[14], M = t[15]);
		var w;
		t[16] !== R ? (w = {
			abilityType: "SHARE_PURCHASING_INFORMATION",
			icon: M,
			label: N,
			onClick: R,
			testid: "biz-ai-add-purchase-info"
		}, t[16] = R, t[17] = w) : w = t[17];
		var A, F;
		t[18] === Symbol.for("react.memo_cache_sentinel") ? (A = m.jsx(r("WDSIconWdsIcChat.react"), {
			directional: !0,
			iconXstyle: C.icon
		}), F = s._(
			/*BTDS*/
			""
		), t[18] = A, t[19] = F) : (A = t[18], F = t[19]);
		var O;
		t[20] !== h ? (O = {
			abilityType: null,
			icon: A,
			label: F,
			onClick: h,
			testid: "biz-ai-add-example-responses"
		}, t[20] = h, t[21] = O) : O = t[21];
		var B;
		t[22] !== w || t[23] !== O || t[24] !== D || t[25] !== P ? (B = [
			D,
			P,
			w,
			O
		], t[22] = w, t[23] = O, t[24] = D, t[25] = P, t[26] = B) : B = t[26];
		var q = B, V, H;
		t[27] === Symbol.for("react.memo_cache_sentinel") ? (V = m.jsx(r("WDSIconIcFormatListBulleted.react"), {
			directional: !0,
			iconXstyle: C.icon
		}), H = s._(
			/*BTDS*/
			""
		), t[27] = V, t[28] = H) : (V = t[27], H = t[28]);
		var G;
		t[29] !== S ? (G = [{
			icon: V,
			label: H,
			onClick: S,
			testid: "biz-ai-ask-customer-info"
		}], t[29] = S, t[30] = G) : G = t[30];
		var z = G, j;
		t[31] === Symbol.for("react.memo_cache_sentinel") ? (j = o("WAWebBizAiAgentGating").isIntegrationHubEnabled(), t[31] = j) : j = t[31];
		var K = j, Q, X;
		t[32] === Symbol.for("react.memo_cache_sentinel") ? (Q = m.jsx(r("WDSIconIcSchedule.react"), { iconXstyle: C.icon }), X = s._(
			/*BTDS*/
			""
		), t[32] = Q, t[33] = X) : (Q = t[32], X = t[33]);
		var Y;
		t[34] === Symbol.for("react.memo_cache_sentinel") ? (Y = m.jsx(o("WAWebBizAIResponseSettingsDrawer.react").WAWebBizAIResponseSettingsSummary, {}), t[34] = Y) : Y = t[34];
		var J;
		t[35] !== L ? (J = {
			icon: Q,
			label: X,
			onClick: L,
			secondary: Y,
			testid: "biz-ai-response-settings"
		}, t[35] = L, t[36] = J) : J = t[36];
		var Z, ee;
		t[37] === Symbol.for("react.memo_cache_sentinel") ? (Z = m.jsx(r("WDSIconIcSchool.react"), { iconXstyle: C.icon }), ee = s._(
			/*BTDS*/
			""
		), t[37] = Z, t[38] = ee) : (Z = t[37], ee = t[38]);
		var te;
		t[39] === Symbol.for("react.memo_cache_sentinel") ? (te = s._(
			/*BTDS*/
			""
		), t[39] = te) : te = t[39];
		var ne;
		t[40] !== v ? (ne = {
			icon: Z,
			label: ee,
			onClick: v,
			secondary: te,
			testid: "biz-ai-knowledge"
		}, t[40] = v, t[41] = ne) : ne = t[41];
		var re;
		if (t[42] !== y || t[43] !== b || t[44] !== J || t[45] !== ne) {
			if (re = [J, ne], K) {
				var oe, ae;
				t[47] === Symbol.for("react.memo_cache_sentinel") ? (oe = m.jsx(r("WDSIconWdsIcAccountsCenter.react"), { iconXstyle: C.icon }), ae = s._(
					/*BTDS*/
					""
				), t[47] = oe, t[48] = ae) : (oe = t[47], ae = t[48]);
				var ie;
				t[49] === Symbol.for("react.memo_cache_sentinel") ? (ie = s._(
					/*BTDS*/
					""
				), t[49] = ie) : ie = t[49];
				var le;
				t[50] !== b ? (le = {
					icon: oe,
					label: ae,
					onClick: b,
					onImpression: o("WAWebBizAILargeScreensLogEvents").logViewConnectionsEntryPoint,
					secondary: ie,
					testid: "biz-ai-integration-hub"
				}, t[50] = b, t[51] = le) : le = t[51], re.push(le);
			}
			var se, ue;
			t[52] === Symbol.for("react.memo_cache_sentinel") ? (se = m.jsx(r("WDSIconIcChecklist.react"), {
				directional: !0,
				iconXstyle: C.icon
			}), ue = s._(
				/*BTDS*/
				""
			), t[52] = se, t[53] = ue) : (se = t[52], ue = t[53]);
			var ce;
			t[54] === Symbol.for("react.memo_cache_sentinel") ? (ce = s._(
				/*BTDS*/
				""
			), t[54] = ce) : ce = t[54];
			var de;
			t[55] !== y ? (de = {
				icon: se,
				label: ue,
				onClick: y,
				secondary: ce,
				testid: "biz-ai-instructions"
			}, t[55] = y, t[56] = de) : de = t[56], re.push(de), t[42] = y, t[43] = b, t[44] = J, t[45] = ne, t[46] = re;
		} else re = t[46];
		var me = re, pe, _e;
		t[57] === Symbol.for("react.memo_cache_sentinel") ? (pe = m.jsx(r("WDSIconIcDownload.react"), { iconXstyle: C.icon }), _e = s._(
			/*BTDS*/
			""
		), t[57] = pe, t[58] = _e) : (pe = t[57], _e = t[58]);
		var fe;
		t[59] !== g ? (fe = [{
			icon: pe,
			label: _e,
			onClick: g,
			testid: "biz-ai-download-data"
		}], t[59] = g, t[60] = fe) : fe = t[60];
		var ge = fe, he;
		t[61] === Symbol.for("react.memo_cache_sentinel") ? (he = s._(
			/*BTDS*/
			""
		), t[61] = he) : he = t[61];
		var ye = u ? o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB : o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL, Ce;
		t[62] === Symbol.for("react.memo_cache_sentinel") ? (Ce = m.jsx(r("WAWebBizAIKnowledgeUploadButton.react"), { testidPrefix: "biz-ai-home" }), t[62] = Ce) : Ce = t[62];
		var be;
		t[63] !== d || t[64] !== ye ? (be = m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: he,
			type: ye,
			onBack: d,
			rightActionElement: Ce
		}), t[63] = d, t[64] = ye, t[65] = be) : be = t[65];
		var ve;
		t[66] === Symbol.for("react.memo_cache_sentinel") ? (ve = s._(
			/*BTDS*/
			""
		), t[66] = ve) : ve = t[66];
		var Se;
		t[67] !== q ? (Se = m.jsx(r("WAWebBizToolsDrawerBodySection.react"), {
			hideDivider: !0,
			theme: "biz-ai-home",
			headerText: ve,
			children: q.map(U)
		}), t[67] = q, t[68] = Se) : Se = t[68];
		var Re;
		t[69] === Symbol.for("react.memo_cache_sentinel") ? (Re = s._(
			/*BTDS*/
			""
		), t[69] = Re) : Re = t[69];
		var Le;
		t[70] !== z || t[71] !== me || t[72] !== ge ? (Le = [
			{
				headerText: Re,
				items: z
			},
			{
				headerText: s._(
					/*BTDS*/
					""
				),
				items: me
			},
			{
				headerText: s._(
					/*BTDS*/
					""
				),
				items: ge
			}
		].map(W), t[70] = z, t[71] = me, t[72] = ge, t[73] = Le) : Le = t[73];
		var Ee;
		t[74] !== Se || t[75] !== Le ? (Ee = m.jsxs(r("WAWebDrawerBody.react"), {
			xstyle: C.body,
			children: [Se, Le]
		}), t[74] = Se, t[75] = Le, t[76] = Ee) : Ee = t[76];
		var ke;
		return t[77] !== a || t[78] !== be || t[79] !== Ee ? (ke = m.jsxs(r("WAWebDrawer.react"), {
			ref: a,
			testid: "biz-ai-drawer",
			children: [be, Ee]
		}), t[77] = a, t[78] = be, t[79] = Ee, t[80] = ke) : ke = t[80], ke;
	}
	function W(e, t) {
		return m.jsxs(m.Fragment, { children: [m.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 }), m.jsx(r("WAWebBizToolsDrawerBodySection.react"), {
			hideDivider: !0,
			theme: "biz-ai-home",
			headerText: e.headerText,
			children: e.items.map(q)
		})] }, t);
	}
	W.displayName = W.name + " [from " + i.id + "]";
	function q(e) {
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
	}
	function U(e) {
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
	}
	U.displayName = U.name + " [from " + i.id + "]", l.default = b;
}), 226);
