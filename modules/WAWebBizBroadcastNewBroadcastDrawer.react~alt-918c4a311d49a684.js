__d("WAWebBizBroadcastNewBroadcastDrawer.react", [
	"fbt",
	"WALogger",
	"WAWebBizBroadcastAudienceSection.react",
	"WAWebBizBroadcastBillingSummarySection.react",
	"WAWebBizBroadcastBusinessInfoContext.react",
	"WAWebBizBroadcastCTAButtonSectionStrings",
	"WAWebBizBroadcastCTAButtonUtils",
	"WAWebBizBroadcastCreationQPLLogger",
	"WAWebBizBroadcastDetailsSection.react",
	"WAWebBizBroadcastDrawerFooter.react",
	"WAWebBizBroadcastGenAIFlow.react",
	"WAWebBizBroadcastGenAIGating",
	"WAWebBizBroadcastGenAINUXModal.react",
	"WAWebBizBroadcastGenAIPacing",
	"WAWebBizBroadcastGenAIToS",
	"WAWebBizBroadcastMessageSection.react",
	"WAWebBizBroadcastPreviewSection.react",
	"WAWebBizBroadcastSendContext.react",
	"WAWebBizTwoColumnLayout.react",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebBusinessBroadcastsGatingUtils",
	"WAWebContactCollection",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebModalManager",
	"WAWebMsgType",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWidFactory",
	"WAWebWidToJid",
	"react",
	"useWAWebBizBroadcastBillingInfo",
	"useWAWebBizBroadcastCheckout",
	"useWAWebBizBroadcastDraftMessage"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m = d || (d = o("react")), p = d, _ = p.useCallback, f = p.useEffect, g = p.useMemo, h = p.useRef, y = p.useState, C = { body: {
		backgroundColor: "x1h3rtpe",
		$$css: !0
	} };
	function b(e) {
		var t, n = e.entryPoint, r = e.onBack, a = e.onOpenExistingAudiences, i = e.onOpenImportAudience, l = e.onOpenUpsertAudience, s = e.onSendSuccess, u = e.onSuggestedAudiencePress, c = e.ref, d = e.selectedCardIds, p = e.selectedChats, _ = e.setSelectedChats, f = e.sourceBroadcastMessageData, g = e.title;
		return m.jsx(o("WAWebBizBroadcastBusinessInfoContext.react").WAWebBizBroadcastBusinessInfoProvider, { children: m.jsx(v, {
			sourceBroadcastMessageData: f,
			entryPoint: n,
			innerRef: c,
			onBack: r,
			onOpenExistingAudiences: a,
			onOpenImportAudience: i,
			onOpenUpsertAudience: l,
			onSendSuccess: s,
			onSuggestedAudiencePress: u,
			selectedCardIds: d,
			selectedChats: p,
			setSelectedChats: _,
			title: g
		}, (t = f == null ? void 0 : f.campaignId) != null ? t : "new") });
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(t) {
		var n, a, i, l, d, p = t.entryPoint, b = t.innerRef, v = t.onBack, S = t.onOpenExistingAudiences, R = t.onOpenImportAudience, L = t.onOpenUpsertAudience, E = t.onSendSuccess, k = t.onSuggestedAudiencePress, I = t.selectedCardIds, T = t.selectedChats, D = t.setSelectedChats, x = t.sourceBroadcastMessageData, $ = t.title;
		f(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createBroadcastViewed(p), o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.pointOnce(o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastQPLPoints.DRAWER_MOUNTED);
		}, [p]);
		var P = r("useWAWebBizBroadcastDraftMessage")(T, x == null ? void 0 : x.message), N = P.clearDraftMessage, M = P.message, w = P.onMessageChange, A = y(function() {
			var e, t;
			if ((x == null ? void 0 : x.ctaButtonData) != null) return x.ctaButtonData;
			var n = x == null || (e = x.attachmentData) == null ? void 0 : e.catalogData;
			return (x == null || (t = x.attachmentData) == null ? void 0 : t.mediaType) === o("WAWebMsgType").MSG_TYPE.PRODUCT && (n == null ? void 0 : n.catalogWid) != null && o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastCatalogAttachmentEnabled() ? {
				businessPhoneNumber: o("WAWebWidFactory").createWid(n.catalogWid).user,
				displayText: o("WAWebBizBroadcastCTAButtonSectionStrings").getCatalogCTADisplayText(n.productId),
				type: "cta_catalog"
			} : null;
		}), F = A[0], O = A[1], B = y(x != null ? x.attachmentData : null), W = B[0], q = B[1], U = _(function(t) {
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[BizBroadcast:Drawer] handleButtonDataChange: ", ""])), JSON.stringify(t)), O(t);
		}, []), V = _(function(e) {
			q(e);
			var t = e == null ? void 0 : e.catalogData;
			if ((e == null ? void 0 : e.mediaType) === o("WAWebMsgType").MSG_TYPE.PRODUCT && (t == null ? void 0 : t.catalogWid) != null) {
				var n = o("WAWebWidFactory").createWid(t.catalogWid).user;
				O({
					businessPhoneNumber: n,
					displayText: o("WAWebBizBroadcastCTAButtonSectionStrings").getCatalogCTADisplayText(t.productId),
					type: "cta_catalog"
				});
			} else O(function(e) {
				return (e == null ? void 0 : e.type) === "cta_catalog" ? null : e;
			});
		}, []), H = (n = W == null ? void 0 : W.file) != null ? n : null, G = g(function() {
			return Array.from(T).flatMap(function(e) {
				var t, n = (t = e.broadcastMetadata) == null ? void 0 : t.recipients;
				return n ? n.toArray().map(function(e) {
					return e.id;
				}) : [];
			});
		}, [T]), z = r("useWAWebBizBroadcastCheckout")(G, {
			enabled: !0,
			skipDedupe: !0
		}), j = z.checkoutData, K = z.error, Q = z.isLoading, X = z.refetch, Y = o("WAWebBizBroadcastBusinessInfoContext.react").useWAWebBizBroadcastBusinessInfoContext(), J = Y.adAccountId, Z = j == null ? void 0 : j.costCurrency, ee = (a = j == null ? void 0 : j.costOffset) != null ? a : 1, te = j == null ? void 0 : j.costBeforeTax, ne = g(function() {
			if (!(Z == null || te == null)) return {
				amount: String(te / ee),
				currency: Z
			};
		}, [
			te,
			Z,
			ee
		]), re = o("useWAWebBizBroadcastBillingInfo").useWAWebBizBroadcastBillingInfo({
			assetId: J != null ? J : "",
			budget: ne
		}), oe = re.billingInfo, ae = re.isLoading, ie = re.refetch, le = re.requiredAction, se = h(!1), ue = h(!1);
		f(function() {
			G.length > 0 && (se.current = !0, o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.pointOnce(o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastQPLPoints.AUDIENCE_FIRST_SELECTED)), J != null && J !== "" && (ue.current = !0), se.current && !Q && o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.pointOnce(o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastQPLPoints.CHECKOUT_FETCH_END), ue.current && !ae && o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.pointOnce(o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastQPLPoints.BILLING_FETCH_END), se.current && ue.current && o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.hasFired(o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastQPLPoints.CHECKOUT_FETCH_END) && o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.hasFired(o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastQPLPoints.BILLING_FETCH_END) && o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.end(2);
		}, [
			Q,
			ae,
			G.length,
			J
		]);
		var ce = g(function() {
			return te == null || ee === 0 ? null : String(te / ee);
		}, [te, ee]), de = g(function() {
			return G.flatMap(function(e) {
				var t = o("WAWebContactCollection").ContactCollection.get(e);
				return t != null ? [t] : [];
			});
		}, [G]), me = (W == null ? void 0 : W.mediaType) === o("WAWebMsgType").MSG_TYPE.PRODUCT && o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastCatalogAttachmentEnabled() ? W == null || (i = W.catalogData) == null ? void 0 : i.catalogWid : void 0, pe = me != null ? W == null || (l = W.catalogData) == null ? void 0 : l.productId : void 0, _e = W == null || (d = W.catalogData) == null ? void 0 : d.productImageUrl, fe = g(function() {
			var e = F != null ? o("WAWebBizBroadcastCTAButtonUtils").convertButtonDataToJson(F) : null, t = H != null, n = e != null, r = me != null;
			return o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
				"[WAWebBizBroadcastNewBroadcastDrawer] messageContent media=",
				" cta=",
				" catalog=",
				""
			])), t, n, r), {
				body: M,
				catalogWid: me,
				ctaButtonJson: e != null ? e : void 0,
				mediaMimeType: H == null ? void 0 : H.type,
				productId: pe,
				productImageUrl: _e,
				selectedMediaFile: H
			};
		}, [
			F,
			me,
			M,
			pe,
			_e,
			H
		]), ge = g(function() {
			return Array.from(T).map(function(e) {
				return o("WAWebWidToJid").widToBroadcastJid(e.id);
			});
		}, [T]), he = y(!1), ye = he[0], Ce = he[1], be = y(null), ve = be[0], Se = be[1], Re = h(null), Le = _(function(e) {
			var t;
			w(e), (t = Re.current) == null || t.setTextContent(e), Se(e);
		}, [w]), Ee = _(function(e) {
			w(e), ve != null && e.length === 0 && (Se(null), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAIAiTextCleared());
		}, [ve, w]), ke = _(function() {
			o("WAWebModalManager").ModalManager.open(m.jsx(r("WAWebBizBroadcastGenAIFlow.react"), {
				broadcastJids: ge,
				draftMessage: M,
				onAuthFailure: function() {},
				onClose: o("WAWebModalManager").closeModalManager,
				onUseMessage: Le
			}));
		}, [
			ge,
			Le,
			M
		]), Ie = _(function() {
			if (o("WAWebBizBroadcastGenAIPacing").hasReachedDailyLimit()) {
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAIDailyLimitHit(o("WAWebBizBroadcastGenAIPacing").getRequestCount()), o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, {
					msg: s._(
						/*BTDS*/
						""
					),
					id: o("WAWebToast.react").genId()
				}));
				return;
			}
			ke();
		}, [ke]), Te = _(function() {
			if (o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAIEntryPointClicked(o("WAWebBizBroadcastGenAIGating").getGenAIModel(), o("WAWebBizBroadcastGenAIGating").countWords(M)), !o("WAWebBizBroadcastGenAIToS").hasAcceptedGenAIToS()) {
				Ce(!0), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAINuxModalViewed();
				return;
			}
			Ie();
		}, [M, Ie]), De = _(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAINuxAcceptClicked(), Ce(!1), Ie();
		}, [Ie]), xe = _(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.genAINuxDismissClicked(), Ce(!1);
		}, []), $e = _(function() {
			X(), ie();
		}, [ie, X]), Pe = _(function() {
			o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[WAWebBizBroadcastNewBroadcastDrawer] handleSendSuccess: campaign created +"]))), N(), E();
		}, [E, N]), Ne = g(function() {
			var e;
			return {
				aiAssistedTextDraft: ve,
				broadcastJids: ge,
				budgetAmount: ce,
				checkoutData: j,
				checkoutError: K,
				contacts: de,
				entryPoint: p,
				hasPendingBillingAction: (le == null ? void 0 : le.wizardName) != null,
				isDuplicate: (x == null ? void 0 : x.isDuplicateBroadcast) === !0,
				isLoadingCheckoutOrBilling: Q || ae,
				messageContent: fe,
				onSendSuccess: Pe,
				recipientWids: G,
				selectedChats: T,
				sourceCampaignId: (e = x == null ? void 0 : x.campaignId) != null ? e : null
			};
		}, [
			ve,
			ge,
			ce,
			j,
			K,
			de,
			p,
			Pe,
			ae,
			Q,
			fe,
			G,
			le == null ? void 0 : le.wizardName,
			T,
			x == null ? void 0 : x.campaignId,
			x == null ? void 0 : x.isDuplicateBroadcast
		]), Me = m.jsxs(m.Fragment, { children: [
			m.jsx(r("WAWebBizBroadcastAudienceSection.react"), {
				selectedChats: T,
				setSelectedChats: D,
				entryPoint: p,
				isDuplicate: (x == null ? void 0 : x.isDuplicateBroadcast) === !0,
				onOpenUpsertAudience: L,
				onExistingAudiences: S,
				onImportAudience: R,
				onSuggestedAudiencePress: k,
				selectedCardIds: I
			}),
			m.jsx(r("WAWebBizBroadcastMessageSection.react"), {
				attachmentData: W,
				buttonData: F,
				entryPoint: p,
				message: M,
				onButtonDataChange: U,
				onGenAIPress: Te,
				onMessageChange: Ee,
				richTextInputRef: Re,
				setAttachmentData: V
			}),
			m.jsx(r("WAWebBizBroadcastDetailsSection.react"), {
				budget: ne,
				entryPoint: p,
				onBillingInfoChanged: $e
			})
		] }), we = m.jsxs(m.Fragment, { children: [m.jsx(r("WAWebBizBroadcastPreviewSection.react"), {
			attachmentData: W,
			buttonData: F,
			message: M
		}), m.jsx(r("WAWebBizBroadcastBillingSummarySection.react"), {
			entryPoint: p,
			recipientCount: G.length,
			checkoutData: j,
			isLoadingCheckout: Q,
			billingInfo: oe,
			isLoadingBillingInfo: ae
		})] });
		return m.jsxs(r("WAWebDrawer.react"), {
			ref: b,
			testid: "biz-broadcast-new-broadcast-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "biz-new-broadcast"
			},
			children: [
				ye && m.jsx(r("WAWebBizBroadcastGenAINUXModal.react"), {
					onAccept: De,
					onClose: xe
				}),
				m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: $,
					onBack: v,
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
					focusBackOrCancel: !0
				}),
				m.jsx(r("WAWebDrawerBody.react"), {
					isRefresh: !0,
					xstyle: C.body,
					children: m.jsx(r("WAWebBizTwoColumnLayout.react"), {
						primaryContent: Me,
						secondaryContent: we
					})
				}),
				m.jsx(o("WAWebBizBroadcastSendContext.react").BroadcastSendContext.Provider, {
					value: Ne,
					children: m.jsx(r("WAWebBizBroadcastDrawerFooter.react"), {})
				})
			]
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = b;
}), 226);
