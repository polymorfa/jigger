__d("WAWebChatlistUtils", [
	"fbt",
	"WALogger",
	"WAWebAdCreationLogger",
	"WAWebBizAdCreationEntryPointModal.react",
	"WAWebBizNativeAdsEntryTapLogger",
	"WAWebBizNativeAdsGatingUtils",
	"WAWebBotFrontendUtils",
	"WAWebBotGating",
	"WAWebBotUtils",
	"WAWebBusinessAdCreationUtils",
	"WAWebChatCollection",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebComposeBoxActions",
	"WAWebExternalLink.react",
	"WAWebFbtCommon",
	"WAWebFindChatAction",
	"WAWebModalManager",
	"WAWebOpenBizNativeAdsFlow",
	"WAWebOpenManageAdsInLwi",
	"WAWebPonyfillsCryptoRandomUUID",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUserPrefsCTWA",
	"WAWebWamEnumLwiScreenAction",
	"WAWebWamEnumWebFlowType",
	"gkx",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react"));
	function d(e, t, n) {
		return p(o("WAWebFindChatAction").findExistingChat, e, t, n);
	}
	function m(e, t) {
		return p(function(e, t, n) {
			return o("WAWebFindChatAction").findOrCreateLatestChat(e, t, n).then(function(e) {
				var t = e.chat;
				return t;
			});
		}, e, t);
	}
	function p(t, n, a, i) {
		return t(n, "chatListUtils").then(function(t) {
			return r("gkx")("26258") || (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["window.chat set to"]))), window.chat = t), o("WAWebBotUtils").isMetaAiBot(n) && o("WAWebBotGating").isAiChatThreadsEnabled() ? (a != null && a.msg ? o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(t, {
				type: "MessageSearch",
				msg: a.msg
			}) : o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(t, { type: "MetaAiChat" }), t) : a ? o("WAWebCmd").Cmd.openChatAt({
				chat: t,
				msgContext: a,
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Chatlist,
				onSuccess: { mediaMsgToOpenInMediaViewer: i }
			}).then(function(e) {
				return e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(t), t;
			}) : t !== o("WAWebChatCollection").ChatCollection.getActive() ? o("WAWebCmd").Cmd.openChatFromUnread({
				chat: t,
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.Chatlist
			}).then(function(e) {
				return e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(t), t;
			}) : (o("WAWebComposeBoxActions").ComposeBoxActions.focus(t), t);
		});
	}
	var _ = function() {
		var e = r("WAWebFbtCommon")("OK");
		o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
			action: {
				dismiss: !0,
				actionText: e
			},
			msg: s._(
				/*BTDS*/
				""
			),
			id: o("WAWebToast.react").genId()
		}));
	};
	function f(e) {
		return e.sourceAdCreation === "whatsapp_smb_web_catalog" || e.sourceAdCreation === "whatsapp_smb_web_catalog_product" ? e.productId : null;
	}
	function g(e) {
		var t = e.adCreationUrlInput, n = e.lwiEntryPoint, a = e.waCampaignId, i = t.activeAccountInfo, l = t.sourceAdCreation, s = i !== "not-linked" && i.hasFacebookPage, u = l === "whatsapp_smb_web_catalog" || l === "whatsapp_smb_web_catalog_product", d = (o("WAWebBizNativeAdsGatingUtils").nativeAdsDogfoodEnabled() || o("WAWebBizNativeAdsGatingUtils").nativeAdsWebCreationEnabled()) && (!u || o("WAWebBizNativeAdsGatingUtils").nativeAdsCatalogBoostEnabled()), m;
		if (d ? m = r("WAWebPonyfillsCryptoRandomUUID")() : (o("WAWebUserPrefsCTWA").resetAdCreationSequenceNumber(), m = o("WAWebUserPrefsCTWA").generateAdCreationFlowId()), o("WAWebBizNativeAdsEntryTapLogger").logEntryTap({
			lwiEntryPoint: n,
			lwiExtras: JSON.stringify({ uses_native_ads: d }),
			lwiFlowId: m,
			userHasLinkedFbPage: s,
			waCampaignId: a,
			webFlowType: d ? o("WAWebWamEnumWebFlowType").WEB_FLOW_TYPE.NATIVE_WEB : o("WAWebWamEnumWebFlowType").WEB_FLOW_TYPE.EXTERNAL_WEB
		}), o("WAWebBizNativeAdsEntryTapLogger").logRoutingDecision({
			lwiEntryPoint: n,
			lwiFlowId: m,
			usesNativeAds: d,
			hasFacebookPage: s,
			activeAccountInfoType: i === "not-linked" ? "not-linked" : i.type,
			hasCreatedAd: i !== "not-linked" && i.hasCreatedAd,
			sourceAdCreation: l
		}), d) {
			r("WAWebOpenBizNativeAdsFlow")(l, m, f(t));
			return;
		}
		var p = i !== "not-linked" && i.type === "whatsapp", g = o("WAWebAdCreationLogger").getLwiAdsIdentityTypeFromActiveAccountInfo(i);
		o("WAWebAdCreationLogger").logLwiAdCreationNuxScreen(o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_VIEW, g, s);
		var h = async function() {
			o("WAWebAdCreationLogger").logLwiAdCreationNuxScreen(o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_NUX_CONTINUE_TAPPED, g, s);
			try {
				var e = await o("WAWebBusinessAdCreationUtils").getWhatsappAdCreationUrl(babelHelpers.extends({}, t, { flowId: m }));
				o("WAWebExternalLink.react").openExternalLink(e, { allowReferrer: !0 });
			} catch (e) {
				_();
			}
		};
		o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebBizAdCreationEntryPointModal.react"), {
			onOK: h,
			onClose: function() {
				return o("WAWebAdCreationLogger").logLwiAdCreationNuxScreen(o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_CANCEL_DIALOG_BUTTON_TAPPED, g, s);
			},
			onLearnMore: function() {
				return o("WAWebAdCreationLogger").logLwiAdCreationNuxScreen(o("WAWebWamEnumLwiScreenAction").LWI_SCREEN_ACTION.LWI_ACTION_LEARN_MORE_TAPPED, g, s);
			},
			isPagelessAd: p
		}));
	}
	function h(e) {
		var t = e.activeAccountInfo, n = e.entryPoint, r = e.sourceManageAdsType;
		o("WAWebOpenManageAdsInLwi").openManageAdsInLwi(t, r, n);
	}
	l.openExistingChat = d, l.openOrCreateLatestChat = m, l.handleAdCreation = g, l.handleManageAds = h;
}), 226);
