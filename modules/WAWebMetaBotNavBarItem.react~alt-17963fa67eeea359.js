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
	"react",
	"useWAWebEventTargetValue"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p, _, f = _ || (_ = o("react")), g = _, h = g.useEffect, y = g.useRef;
	function C(t) {
		var n = t.activeNavBarItem, a = t.updateActiveNavBarItem, i = b(), l = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext({
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_METABOT
		}), _ = l.startInteraction, g = y(n);
		h(function() {
			g.current = n;
		}, [n]);
		var C = async function() {
			if (o("WAWebBotBaseGating").isMetaAIHomeEnabled()) {
				if (n === o("WAWebNavBarTypes").NavBarItems.MetaAI) return;
				_();
				var t = await o("WAWebDrawerManager").DrawerManager.closeDrawerLeftAsync();
				if (!t) return;
				a(o("WAWebNavBarTypes").NavBarItems.MetaAI), o("WAWebBotGating").isAiChatThreadsEnabled() ? o("WAWebBotFrontendUtils").getMetaAiChat().then(function(e) {
					return o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(e, { type: "MetaAiNavigationBar" });
				}).catch(function(t) {
					o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[MetaBotNavBarItem] getMetaAiChat failed"])));
				}) : o("WAWebOpenMetaAIHomeAction").openMetaAIHome();
				return;
			}
			var r = o("WAWebBotGating").isAiChatThreadsEnabled();
			if (o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[MetaBotNavBarItem] handleMetaBotClick threadsEnabled=", ""])), String(r)), r) _(), o("WAWebBotFrontendUtils").getMetaAiChat().then(function(e) {
				var t = g.current;
				if (t !== o("WAWebNavBarTypes").NavBarItems.MetaAI && t !== n) {
					o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[MetaBotNavBarItem] flow aborted: user navigated to ", ""])), t);
					return;
				}
				o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[MetaBotNavBarItem] getMetaAiChat -> runMetaAiThreadsFlow"]))), o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(e, { type: "MetaAiNavigationBar" });
			}).catch(function(e) {
				o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[MetaBotNavBarItem] getMetaAiChat failed"])));
			}), o("WAWebThreadJourneyLogger").ThreadJourneyLogger.logNewChatClick(o("WAWebWamEnumMetaAiActionEntryPoint").META_AI_ACTION_ENTRY_POINT.NAVIGATION_BAR_BUTTON);
			else {
				o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[MetaBotNavBarItem] using legacy openMetaBotChat flow"]))), _(), o("WAWebBotFrontendUtils").openMetaBotChat(o("WAWebChatEntryPoint").ChatEntryPoint.BotChatListShortcut);
				var i = await o("WAWebDrawerManager").DrawerManager.closeDrawerLeftAsync();
				i && (a(o("WAWebNavBarTypes").NavBarItems.Chats), o("WAWebNavBarLogEvents").logNavBarEvent(o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL.CHATS));
			}
		}, v = n === o("WAWebNavBarTypes").NavBarItems.MetaAI, S = f.jsx(r("WAWebMetaAIIcon.react"), {}), R = s._(
			/*BTDS*/
			""
		);
		return i && f.jsx(r("WDSMenuBarItem.react"), {
			customIcon: S,
			title: R,
			testid: "navbar-item-metabot",
			isActive: v,
			onClick: C,
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
