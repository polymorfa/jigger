__d("MWChatStateV2.react", [
	"CometRelayEnvironmentFactory",
	"FBLogger",
	"I64",
	"MWChatInteraction",
	"MWChatStateV2IsClosed",
	"MWChatStateV2IsOpen",
	"MWChatStateV2Types",
	"MWV2CookieReader",
	"MessengerWebPresenceCookieData",
	"createCometRelayBaseEntryPointEnvironmentProvider",
	"emptyObject",
	"err",
	"justknobx",
	"loadChatTabEntryPoint",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = e || (e = o("react")), c = e, d = c.createContext, m = c.useContext;
	function p(e, t) {
		var n;
		return (n = Array.from(e.tabs.values()).find(function(e) {
			var n = e.tabType;
			return n.type === o("MWChatStateV2Types").MWChatStateTabType.ComposeTab ? t.type === o("MWChatStateV2Types").MWChatStateTabType.ComposeTab : t.type === o("MWChatStateV2Types").MWChatStateTabType.ComposeTab ? !1 : (s || (s = o("I64"))).equal(n.threadKeyDescriptor.threadKey, t.threadKeyDescriptor.threadKey);
		})) == null ? void 0 : n.tabId;
	}
	function _(e, t) {
		var n = Array.from(e.tabs.values()).find(function(e) {
			var n = e.tabType;
			return n.type === o("MWChatStateV2Types").MWChatStateTabType.ComposeTab ? t == null : t != null ? (s || (s = o("I64"))).equal(n.threadKeyDescriptor.threadKey, t) : !1;
		});
		if (n != null) return n.tabId;
	}
	function f(e, t, n) {
		if (n) return o("MWChatStateV2IsOpen").isOpen(void 0, t) ? t.tabId : void 0;
		var r = e.focusedTabId;
		if (!(r != null && r === t.tabId && !o("MWChatStateV2IsOpen").isOpen(void 0, t))) return e.focusedTabId;
	}
	function g(e, t) {
		var n, r = o("MWChatStateV2IsOpen").isOpen(void 0, t) && !o("MWChatStateV2IsOpen").isOpen(void 0, e) ? t : e;
		return babelHelpers.extends({}, e, {
			clientForcedMinimizeWatermark: r.clientForcedMinimizeWatermark,
			closeWatermark: r.closeWatermark,
			minimizeWatermark: r.minimizeWatermark,
			openFlyoutWatermark: r.openFlyoutWatermark,
			openWatermark: r.openWatermark,
			tabRootEntryPointRef: (n = e.tabRootEntryPointRef) != null ? n : t.tabRootEntryPointRef
		});
	}
	function h(e, t) {
		return t.reduce(function(e, t) {
			for (var n = t;;) {
				var a = n;
				switch (a.type) {
					case o("MWChatStateV2Types").MWChatStateActionsType.SetBroadcast: return babelHelpers.extends({}, e, { shouldBroadcastUpdates: a.shouldBroadcast });
					case o("MWChatStateV2Types").MWChatStateActionsType.UpdateState: return a.state(e);
					case o("MWChatStateV2Types").MWChatStateActionsType.UpdateTab: {
						var i, l = a.tabId;
						if (l == null) return e;
						var u = e.tabs.get(l);
						if (u == null) return e;
						var c = a.updater(u);
						if (c === u) return e;
						var d = new Map(e.tabs), m = null;
						if (a.tabConfig.shouldClearOldHiddenTab === !0) {
							var h = p(e, c.tabType);
							if (h != null && h !== l) {
								var y = d.get(h), C = r("justknobx")._("3757");
								C ? y != null && o("MWChatStateV2IsClosed").isClosed(y) && d.delete(h) : y != null && (c = g(c, y), d.delete(h), m = h);
							}
						}
						var b = m != null && e.focusedTabId === m ? l : f(e, c, ((i = t.tabConfig) == null ? void 0 : i.shouldFocus) || !1);
						return R(b, e.mediaViewerOpenWatermark, e.nextTabId, new Map(d).set(l, c));
					}
					case o("MWChatStateV2Types").MWChatStateActionsType.UpdateTabByThreadKey: {
						var v = _(e, t.threadKey);
						if (v == null || t.tabConfig == null || t.updater == null) return e;
						n = {
							tabConfig: t.tabConfig,
							tabId: v,
							type: o("MWChatStateV2Types").MWChatStateActionsType.UpdateTab,
							updater: t.updater
						};
						continue;
					}
					case o("MWChatStateV2Types").MWChatStateActionsType.UpsertTab: {
						var S, L = t.inserter, E = t.tabConfig, k = t.tabType;
						if (k == null) throw r("err")("tabType for MWChatStateActionsType.UpsertTab should always exist");
						if (L == null) throw r("err")("inserter for MWChatStateActionsType.UpsertTab should always exist");
						var I = k.type === o("MWChatStateV2Types").MWChatStateTabType.ChatTab ? o("MWChatInteraction").getInteractionTraceForThreadKey((s || (s = o("I64"))).to_string(k.threadKeyDescriptor.threadKey)) : null;
						I == null || I.addMarkerPoint("MWChatStateUpdateOpenTab", "AppTiming");
						var T = p(e, k);
						if (T != null && E != null && t.updater != null) {
							I == null || I.addAnnotationBoolean("is_new_tab", !1), n = {
								tabConfig: E,
								tabId: T,
								type: o("MWChatStateV2Types").MWChatStateActionsType.UpdateTab,
								updater: t.updater
							};
							continue;
						}
						var D = {
							clientForcedMinimizeWatermark: 0,
							closeWatermark: 0,
							minimizeWatermark: 0,
							openFlyoutWatermark: 0,
							openWatermark: 0,
							tabId: e.nextTabId,
							tabType: k
						}, x = L(D), $ = f(e, x, (S = E == null ? void 0 : E.shouldFocus) != null ? S : !1);
						return I == null || I.addAnnotationBoolean("is_new_tab", !0), R($, e.mediaViewerOpenWatermark, e.nextTabId + 1, new Map(e.tabs).set(x.tabId, x));
					}
				}
			}
			return e;
		}, e);
	}
	function y() {
		var e = r("createCometRelayBaseEntryPointEnvironmentProvider")(o("CometRelayEnvironmentFactory").CometRelayEnvironmentFactory);
		return r("loadChatTabEntryPoint")(e);
	}
	function C() {
		return o("MWV2CookieReader").read(r("MessengerWebPresenceCookieData").cookie, y);
	}
	var b = d();
	function v() {
		var e = m(b);
		return e != null ? e : S;
	}
	function S() {
		r("FBLogger")("messenger_web").warn("Tried to open a chat tab on Comet under the new chat state system, MWChatStateV2. But no MWChatStateV2 was found in react context. Wrap your component in MWChatStateV2? You are likely also be part of Blue on Comet. If so do ping our oncall");
	}
	function R(e, t, n, o) {
		return babelHelpers.extends({}, e != null ? { focusedTabId: e } : r("emptyObject"), {
			mediaViewerOpenWatermark: t,
			nextTabId: n,
			tabs: o
		});
	}
	l.getTabIdFromThreadKey = _, l.reducer = h, l.initReducer = C, l.dispatchContext = b, l.useDispatch = v;
}), 98);
