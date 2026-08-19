__d("WAWebMetaBotNavBarItem.react", [
	"fbt",
	"WALogger",
	"WAWebAppRootInteractionContext.react",
	"WAWebBotBaseGating",
	"WAWebBotFrontendUtils",
	"WAWebBotGating",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebDrawerManager",
	"WAWebInteractionTracePolicy",
	"WAWebMetaAIIcon.react",
	"WAWebNavBarLogEvents",
	"WAWebNavBarTypes",
	"WAWebOpenMetaAIHomeAction",
	"WAWebThreadJourneyLogger",
	"WAWebWamEnumMetaAiActionEntryPoint",
	"WAWebWamEnumWebcNavbarItemLabel",
	"WDSMenuBarItem.react",
	"asyncToGeneratorRuntime",
	"react",
	"useWAWebEventTargetValue"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p, _, f = _ || (_ = o("react")), g = _, h = g.useEffect, y = g.useRef;
	function C(t) {
		var a = t.activeNavBarItem, i = t.updateActiveNavBarItem, l = b(), _ = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext({
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_METABOT
		}), g = _.startInteraction, C = y(a);
		h(function() {
			C.current = a;
		}, [a]);
		var v = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (o("WAWebBotBaseGating").isMetaAIHomeEnabled()) {
					if (a === o("WAWebNavBarTypes").NavBarItems.MetaAI) return;
					g();
					var t = yield o("WAWebDrawerManager").DrawerManager.closeDrawerLeftAsync();
					if (!t) return;
					i(o("WAWebNavBarTypes").NavBarItems.MetaAI), o("WAWebBotGating").isAiChatThreadsEnabled() ? o("WAWebBotFrontendUtils").getMetaAiChat().then(function(e) {
						return o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(e, { type: "MetaAiNavigationBar" });
					}).catch(function(t) {
						o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[MetaBotNavBarItem] getMetaAiChat failed"])));
					}) : o("WAWebOpenMetaAIHomeAction").openMetaAIHome();
					return;
				}
				var n = o("WAWebBotGating").isAiChatThreadsEnabled();
				if (o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[MetaBotNavBarItem] handleMetaBotClick threadsEnabled=", ""])), String(n)), n) g(), o("WAWebBotFrontendUtils").getMetaAiChat().then(function(e) {
					var t = C.current;
					if (t !== o("WAWebNavBarTypes").NavBarItems.MetaAI && t !== a) {
						o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[MetaBotNavBarItem] flow aborted: user navigated to ", ""])), t);
						return;
					}
					o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[MetaBotNavBarItem] getMetaAiChat -> runMetaAiThreadsFlow"]))), o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(e, { type: "MetaAiNavigationBar" });
				}).catch(function(e) {
					o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[MetaBotNavBarItem] getMetaAiChat failed"])));
				}), o("WAWebThreadJourneyLogger").ThreadJourneyLogger.logNewChatClick(o("WAWebWamEnumMetaAiActionEntryPoint").META_AI_ACTION_ENTRY_POINT.NAVIGATION_BAR_BUTTON);
				else {
					o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[MetaBotNavBarItem] using legacy openMetaBotChat flow"]))), g(), o("WAWebBotFrontendUtils").openMetaBotChat(o("WAWebChatEntryPoint").ChatEntryPoint.BotChatListShortcut);
					var r = yield o("WAWebDrawerManager").DrawerManager.closeDrawerLeftAsync();
					r && (i(o("WAWebNavBarTypes").NavBarItems.Chats), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.CHATS));
				}
			});
			return function() {
				return t.apply(this, arguments);
			};
		})(), S = a === o("WAWebNavBarTypes").NavBarItems.MetaAI, R = f.jsx(r("WAWebMetaAIIcon.react"), {}), L = s._(
			/*BTDS*/
			""
		);
		return l && f.jsx(r("WDSMenuBarItem.react"), {
			customIcon: R,
			title: L,
			testid: "navbar-item-metabot",
			isActive: S,
			onClick: v,
			delayTooltipMs: 0,
			tabOrder: -1,
			tooltipPosition: "end"
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b() {
		return r("useWAWebEventTargetValue")(o("WAWebCmd").Cmd, "on_ab_props_update_from_bridge", function() {
			return o("WAWebBotGating").isBotShortcutEntryPointEnabled();
		});
	}
	l.MetaBotNavBarItem = C;
}), 226);
