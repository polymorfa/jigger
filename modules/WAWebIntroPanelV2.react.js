__d("WAWebIntroPanelV2.react", [
	"fbt",
	"WALogger",
	"WAWebBotBaseGating",
	"WAWebBotFrontendUtils",
	"WAWebBotGating",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebContactEditUtils",
	"WAWebContactLogging",
	"WAWebDesktopUpsellAnimationDataV2",
	"WAWebDesktopUpsellCommonStrings",
	"WAWebDesktopUpsellPlatformAwareHooks",
	"WAWebDesktopUpsellStoreOpener",
	"WAWebEmptyStateModule.react",
	"WAWebIntroPanelStartCallEmptyState.react",
	"WAWebLottieAnimationLoadable",
	"WAWebMimeTypes",
	"WAWebModalManager",
	"WAWebNavBarTypes",
	"WAWebSelectModal.react",
	"WAWebSendFilesToChats",
	"WAWebServerPropConstants",
	"WAWebVoipCallsTabNavigateTo",
	"WAWebVoipGatingUtils",
	"WAWebWamEnumWebcNativeUpsellCtaSourceType",
	"WDSIconIcDescription.react",
	"WDSIconIcPersonAdd.react",
	"WDSIconWdsIcLogoMetaAiColor.react",
	"WDSSpinner.react",
	"gkx",
	"react",
	"stylex",
	"useWAWebExternalBetaOptIn"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p, _ = p || (p = o("react")), f = p.Suspense, g = _.lazy(function() {
		return o("WAWebLottieAnimationLoadable").requireBundle().then(function(e) {
			return { default: e };
		});
	}), h = r("WAWebDesktopUpsellAnimationDataV2")(), y = {
		boxSizing: "x9f619",
		display: "x78zum5",
		alignItems: "x6s0dn4",
		justifyContent: "xl56j7k",
		flexShrink: "x2lah0s",
		$$css: !0
	}, C = { heroMediaBox: function(t, n) {
		return [
			y,
			{
				width: t != null ? "x5lhr3w" : t,
				height: n != null ? "x16ye13r" : n,
				$$css: !0
			},
			{
				"--x-width": (function(e) {
					return typeof e == "number" ? e + "px" : e != null ? e : void 0;
				})(t),
				"--x-height": (function(e) {
					return typeof e == "number" ? e + "px" : e != null ? e : void 0;
				})(n)
			}
		];
	} }, b = r("gkx")("24693") ? _.jsx(f, {
		fallback: _.jsx(r("WDSSpinner.react"), {
			size: 50,
			stroke: 4
		}),
		children: _.jsx(g, {
			loop: !1,
			autoplay: !0,
			data: h
		})
	}) : _.jsx(o("WAWebLottieAnimationLoadable").LottieAnimation, {
		loop: !1,
		autoplay: !0,
		data: h
	}), v = r("gkx")("15714") ? _.jsx("div", babelHelpers.extends({ "data-testid": "intro_panel_hero_media_box" }, (m || (m = r("stylex"))).props(C.heroMediaBox(h.w, h.h)), { children: b })) : b;
	function S() {
		var t = o("WAWebBotBaseGating").isBotEnabled(), n = o("useWAWebExternalBetaOptIn").useMacBetaUpsellOnWeb(), a = o("WAWebDesktopUpsellPlatformAwareHooks").useWAWebDesktopUpsellPlatformCheck(), i = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn(), l = i[0], m = o("WAWebVoipGatingUtils").isWebIntroPanelCallingChangeEnabled();
		function p() {
			o("WAWebDesktopUpsellStoreOpener").openExternalWhatsAppDesktopDownloadUrl({
				ctaSource: o("WAWebWamEnumWebcNativeUpsellCtaSourceType").WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.INTRO_PANEL,
				isBetaUpsell: n,
				isBetaUser: l
			});
		}
		function f(e) {
			var t;
			e.stopPropagation();
			var n = Array.from((t = e.target.files) != null ? t : []);
			n.length && o("WAWebModalManager").ModalManager.open(_.jsx(o("WAWebSelectModal.react").SelectModal, {
				title: s._(
					/*BTDS*/
					""
				),
				listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
				onConfirm: function(t) {
					var e = t.selectedItems;
					return r("WAWebSendFilesToChats")(e, n);
				},
				maxItems: o("WAWebServerPropConstants").MULTICAST_LIMIT_GLOBAL,
				tsNavigationData: {
					surface: "unknown",
					viewName: "select-chats-intro"
				}
			}));
		}
		function g() {
			o("WAWebContactEditUtils").openContactEditDrawer(null, o("WAWebContactLogging").ContactSourceType.NewChat);
		}
		function h() {
			var t = o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIIntroPanel, n = o("WAWebBotGating").isAiChatThreadsEnabled();
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[WAWebIntroPanelV2] handleAskMetaAIBtnClick threads=", ""])), String(n)), n ? o("WAWebBotFrontendUtils").getMetaAiChat().then(function(e) {
				o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[WAWebIntroPanelV2] getMetaAiChat+ runMetaAiThreadsFlow"]))), o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(e, { type: "MetaAiIntroPanel" });
			}).catch(function(e) {
				o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[WAWebIntroPanelV2] getMetaAiChat failed"])));
			}) : (o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[WAWebIntroPanelV2] using legacy openMetaBotChat flow"]))), o("WAWebBotFrontendUtils").openMetaBotChat(t));
		}
		function y() {
			o("WAWebCmd").Cmd.setActiveNavBarItem(o("WAWebNavBarTypes").NavBarItems.Calls), o("WAWebVoipCallsTabNavigateTo").navigateToVoipCallsTab({});
		}
		var C = {
			animation: v,
			title: s._(
				/*BTDS*/
				""
			),
			description: s._(
				/*BTDS*/
				""
			),
			actionButtonLabel: s._(
				/*BTDS*/
				""
			),
			actionButtonClickHandler: y
		}, b = {
			animation: v,
			title: o("WAWebDesktopUpsellCommonStrings").getDesktopUpsellDownloadWhatsAppTitle(n),
			description: o("WAWebDesktopUpsellCommonStrings").getDesktopUpsellIntroPanelText(n),
			actionButtonLabel: o("WAWebDesktopUpsellCommonStrings").getDesktopAppDownloadFromStoreBtnLabel(n),
			actionButtonClickHandler: p
		}, S;
		m ? S = C : a === !0 && (S = b);
		var R = [{
			title: s._(
				/*BTDS*/
				""
			),
			Icon: r("WDSIconIcDescription.react"),
			filePicker: {
				mimes: o("WAWebMimeTypes").DOC_MIMES,
				onChange: f,
				multiple: !0
			},
			testid: "send-document-tile",
			actionId: "send_document"
		}, {
			title: s._(
				/*BTDS*/
				""
			),
			Icon: r("WDSIconIcPersonAdd.react"),
			clickHandler: g,
			testid: "add-contact-tile",
			actionId: "add_contact"
		}], L = t ? {
			title: s._(
				/*BTDS*/
				""
			),
			Icon: r("WDSIconWdsIcLogoMetaAiColor.react"),
			clickHandler: h,
			testid: "meta-ai-tile",
			actionId: "ask_meta_ai"
		} : null;
		return m ? _.jsx(r("WAWebIntroPanelStartCallEmptyState.react"), {
			baseActions: R,
			metaAiTile: L,
			titleCard: S
		}) : _.jsx(r("WAWebEmptyStateModule.react"), {
			titleCard: S,
			wdsActions: L != null ? [].concat(R, [L]) : R
		});
	}
	S.displayName = S.name + " [from " + i.id + "]", l.default = S;
}), 226);
