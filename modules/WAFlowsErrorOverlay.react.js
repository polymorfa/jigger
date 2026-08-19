__d("WAFlowsErrorOverlay.react", [
	"WAFlowsActionHandlerTypes",
	"WAFlowsErrorDetails.react",
	"WAFlowsOverlay.react",
	"WAFlowsStateProvider.react",
	"WAFlowsWELJActionCreators",
	"react",
	"usePrevious"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useContext, m = u.useEffect, p = u.useRef;
	function _() {
		var e = o("WAFlowsStateProvider.react").useWAFlowsState(), t = e.internal, n = t.errorOverlayError, a = t.isErrorOverlayVisible, i = a === void 0 ? !1 : a, l = t.isOverlayVisible, u = l === void 0 ? !1 : l, _ = t.navBarConfig, f = t.status, g = d(o("WAFlowsStateProvider.react").FlowStateDispatchContext), h = u && i, y = f === o("WAFlowsStateProvider.react").flowJSONLoadState.INITIALIZING, C = p(), b = r("usePrevious")(h);
		m(function() {
			h !== b && (y || (h ? (C.current = _, g(o("WAFlowsWELJActionCreators").createConfigNavbarAction({
				title: "Error",
				backButtonAction: o("WAFlowsActionHandlerTypes").NavBarBackButtonAction.CLOSE_OVERLAY
			}))) : C.current && (g(o("WAFlowsWELJActionCreators").createConfigNavbarAction(C.current)), C.current = null)));
		}, [
			g,
			h,
			b,
			y,
			_
		]);
		var v = c(function(e) {
			e || g({ name: o("WAFlowsActionHandlerTypes").WELJActionType.HIDE_ERROR_OVERLAY });
		}, [g]);
		return y ? null : s.jsx(r("WAFlowsOverlay.react"), {
			isPanelVisible: h,
			onVisibilityChange: v,
			children: n && s.jsx(o("WAFlowsErrorDetails.react").WAFlowsErrorDetails, { error: n })
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);
