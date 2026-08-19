__d("WAFlowsStateProvider.react", [
	"invariant",
	"ErrorBoundary.react",
	"WAFlowsDomainUtils",
	"WAFlowsEntryPointControllerContext.react",
	"WAFlowsLocalization",
	"WAFlowsMeta",
	"WAFlowsNativeState",
	"WAFlowsNavbar.react",
	"WAFlowsNoop",
	"WAFlowsRemoveTrailingCommas",
	"WAFlowsScreenError.react",
	"WAFlowsScrollable.react",
	"WAFlowsUseAsyncReducer",
	"WAFlowsWELJStateReducer",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.createContext, m = c.useCallback, p = c.useContext, _ = c.useMemo, f = {
		INITIALIZING: "INITIALIZING",
		LOADING: "LOADING",
		READY: "READY"
	}, g = {
		internal: {
			isDraft: !0,
			status: f.INITIALIZING,
			screenHistory: [],
			isOverlayVisible: !1,
			isNavBarContextMenuVisible: !1,
			isDatePickerPanelVisible: !1,
			navBarConfig: {},
			screenInternalData: {},
			media: {}
		},
		external: {}
	}, h = d(babelHelpers.extends({}, g)), y = d(r("WAFlowsNoop")), C = d(null);
	function b(e) {
		var t = e.bizJid, n = e.children, o = e.draft, a = e.flowId, i = e.flowJSON, l = e.isResponseFlow, s = l === void 0 ? !1 : l, c = _(function() {
			return new (r("WAFlowsMeta"))(i != null ? JSON.parse(r("WAFlowsRemoveTrailingCommas")(i)) : null, o, a, t, s);
		}, [
			i,
			o,
			a,
			t,
			s
		]);
		return u.jsx(C.Provider, {
			value: c,
			children: n
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v() {
		var e = p(C);
		return e != null || s(0, 73125), e;
	}
	function S(e) {
		var t, n = e.children, a = e.defaultValue, i = e.disableStateRestoration, l = i === void 0 ? !1 : i, c = p(C), d = (t = c == null ? void 0 : c.getIsShoppingFlow()) != null ? t : !1, _ = o("WAFlowsEntryPointControllerContext.react").useWAFlowsEntryPointController().actionOverrides;
		c != null || s(0, 72745);
		var g = r("WAFlowsUseAsyncReducer")(r("WAFlowsWELJStateReducer"), l, a, function(e) {
			return e != null ? e : c.getScreens().reduce(function(e, t) {
				return e.external[t] = {
					data: {},
					form: {},
					external_data: {}
				}, e.internal.screenInternalData[t] = {
					formInitData: {},
					formErrorMessages: {}
				}, e;
			}, {
				internal: {
					isDraft: !0,
					status: f.INITIALIZING,
					isOverlayVisible: !1,
					isNavBarContextMenuVisible: !1,
					isDatePickerPanelVisible: !1,
					screenHistory: [],
					navBarConfig: {},
					screenInternalData: {},
					media: {}
				},
				external: {}
			});
		}), b = g[0], v = g[1], S = m(function(e) {
			v(_.errorActionHandler(e));
		}, [_, v]), R = function(t) {
			var e = b.internal.isDraft && o("WAFlowsDomainUtils").isOndemandFlowsUrl() ? String(t) : o("WAFlowsLocalization").getFallbackErrorMessage();
			return u.jsxs(u.Fragment, { children: [u.jsx(r("WAFlowsNavbar.react"), {
				isLoading: b.internal.status === f.LOADING,
				isShoppingFlow: d
			}, "navbar"), u.jsx(r("WAFlowsScreenError.react"), { message: e })] });
		};
		return u.jsx(h.Provider, {
			value: b,
			children: u.jsx(y.Provider, {
				value: v,
				children: u.jsx(L, { children: u.jsx(r("WAFlowsScrollable.react"), {
					nativeDraggingControl: !0,
					nativeDraggingOnOverscroll: !0,
					children: u.jsx(r("ErrorBoundary.react"), {
						description: "Handles all errors that are happening within WELJ Flow",
						fallback: R,
						onError: S,
						children: n
					})
				}) })
			})
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R() {
		var e = p(h);
		return e != null || s(0, 75432), e;
	}
	function L(e) {
		var t = e.children, n = o("WAFlowsNativeState").useListenToNativeEventsAndReturnState(), r = _(function() {
			return { keyboardState: n.keyboardStatus };
		}, [n]);
		return u.jsx(o("WAFlowsNativeState").NativeContext.Provider, {
			value: r,
			children: t
		});
	}
	L.displayName = L.name + " [from " + i.id + "]", l.flowJSONLoadState = f, l.FlowStateContext = h, l.FlowStateDispatchContext = y, l.FlowMetaContext = C, l.WAFlowsMetaProvider = b, l.useWAFlowsMeta = v, l.WAFlowsStateProvider = S, l.useWAFlowsState = R;
}), 98);
