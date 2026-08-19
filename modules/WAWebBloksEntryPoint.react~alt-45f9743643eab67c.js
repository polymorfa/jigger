__d("WAWebBloksEntryPoint.react", [
	"WAWebBloksEnvironment",
	"WAWebStopEvent",
	"WAWebUnifiedResponseLoaderTemplate",
	"WebBloksEntryPoint.react",
	"WebBloksUtils",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useMemo;
	function c(e) {
		var t = e.componentData, n = e.componentType, a = e.theme, i = e.uuid, l = o("WAWebBloksEnvironment").useWAWebBloksEnvironment({
			disableHistoryStack: !0,
			embedded: !0
		}), c = u(function() {
			var e = {
				type: n,
				data: t
			};
			return i != null && (e.uuid = i), e;
		}, [
			n,
			t,
			i
		]);
		return s.jsx("div", {
			onKeyDown: o("WAWebStopEvent").stopPropagation,
			onKeyUp: o("WAWebStopEvent").stopPropagation,
			onKeyPress: o("WAWebStopEvent").stopPropagation,
			children: s.jsx(r("WebBloksEntryPoint.react"), {
				environment: l,
				payload: o("WebBloksUtils").cast(o("WAWebUnifiedResponseLoaderTemplate").LOADER_TEMPLATE),
				initialFetchParams: {
					appId: "",
					params: c
				},
				theme: a
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
