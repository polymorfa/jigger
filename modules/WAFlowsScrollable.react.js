__d("WAFlowsScrollable.react", [
	"WAFlowsEntryPointControllerContext.react",
	"WAFlowsEnvContext.react",
	"WAFlowsInstanceIdContext.react",
	"WAFlowsNativeDraggingController",
	"WAFlowsStateProvider.react",
	"WAFlowsWELJActionCreators",
	"WAFlowsWebNativeBridgeClientABPropsContext.react",
	"WDSNativeScrollable.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useContext;
	function c(e) {
		var t, n = e.ref, a = e["aria-hidden"], i = e.children, l = e.id, c = e.isScrollDisabled, d = c === void 0 ? !1 : c, m = e.nativeDraggingControl, p = e.nativeDraggingOnOverscroll, _ = e.onScrollBottom, f = e.xstyle, g = o("WAFlowsEnvContext.react").useWAFlowsEnv(), h = g.env.platform, y = o("WAFlowsInstanceIdContext.react").useWAFlowsInstance(), C = y.flowInstanceId, b = o("WAFlowsStateProvider.react").useWAFlowsState(), v = b.internal.isNavBarContextMenuVisible, S = o("WAFlowsEntryPointControllerContext.react").useWAFlowsEntryPointController().invoke, R = u(o("WAFlowsStateProvider.react").FlowStateDispatchContext), L = o("WAFlowsWebNativeBridgeClientABPropsContext.react").useFetchClientABProps();
		return s.jsx(o("WDSNativeScrollable.react").WDSNativeScrollable, {
			id: C(l),
			xstyle: f,
			ref: n,
			nativeDraggingControl: m && (h === "android" || (L == null || (t = L.extensions_webview_full_screen_drag_dismiss_enabled) == null ? void 0 : t.boolValue) === !0),
			isScrollDisabled: d,
			onScrollBottom: _,
			onScrollEnd: function(t) {
				R(o("WAFlowsWELJActionCreators").createIsScrollingAction(!1, t));
			},
			onScrollStart: function() {
				v != null && v && R(o("WAFlowsWELJActionCreators").createToggleNavBarContextMenuAction(!1));
			},
			onScroll: function(t) {
				R(o("WAFlowsWELJActionCreators").createIsScrollingAction(!0, t));
			},
			onDisableNativeDragging: function() {
				return r("WAFlowsNativeDraggingController").disableNativeDragging(S);
			},
			onEnableNativeDragging: function() {
				return r("WAFlowsNativeDraggingController").enableNativeDragging(S);
			},
			nativeDraggingOnOverscroll: p,
			"aria-hidden": a,
			children: i
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
