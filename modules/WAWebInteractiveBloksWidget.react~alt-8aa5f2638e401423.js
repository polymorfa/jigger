__d("WAWebInteractiveBloksWidget.react", [
	"WAWebA2UIRenderTiming",
	"WAWebABProps",
	"WAWebBloksEntryPointLoadable",
	"WAWebFlex.react",
	"WAWebInteractiveBloksWidgetLogger",
	"WAWebQplFlowWrapper",
	"WAWebThemeContext",
	"WDSText.react",
	"justknobx",
	"qpl",
	"react",
	"useWAWebRenderCallbacks"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useMemo, p = u.useRef, _ = u.useState, f = 1e4, g = r("qpl")._(411369473, "1383"), h = "im_a2ui", y = 3e4, C = "component_type", b = "is_cached", v = !1, S = "missing_bot_attribution";
	function R(e) {
		var t, n = e.bloksWidget, a = e.chatJid, i = e.isBizBot1pMessage, l = i === void 0 ? !1 : i, u = e.messageId, R = o("WAWebThemeContext").useIsDarkTheme(), k = _(!1), I = k[0], T = k[1], D = m(function() {
			return E(n == null ? void 0 : n.data, a, u);
		}, [
			n == null ? void 0 : n.data,
			a,
			u
		]), x = m(function() {
			return L(n == null ? void 0 : n.data);
		}, [n == null ? void 0 : n.data]), $ = (n == null ? void 0 : n.type) === h, P = $ && !l && o("WAWebABProps").getABPropConfigValue("im_a2ui_require_bot_attribution"), N = $ && !P && r("justknobx")._("1085"), M = n == null ? void 0 : n.uuid, w = p(null), A = p(!1), F = c(function(e) {
			if (!A.current) {
				var t = w.current;
				t != null && (A.current = !0, t.end(e));
			}
		}, []);
		r("useWAWebRenderCallbacks")({
			onMount: function() {
				var e, t;
				if (N && !(M == null || !o("WAWebA2UIRenderTiming").markA2UIRenderStartedIfAbsent(M))) {
					var n = o("WAWebQplFlowWrapper").QPL.markerStart(g, {
						instanceKey: o("WAWebA2UIRenderTiming").nextA2UIRenderInstanceKey(),
						cancelOnUnload: !0,
						timeoutInMs: y
					});
					w.current = n, n.annotate({
						bool: (e = {}, e[b] = v, e),
						string: x != null ? (t = {}, t[C] = x, t) : null
					}), o("WAWebA2UIRenderTiming").registerA2UIRenderCallback(M, function() {
						F(2);
					});
				}
			},
			onUnmount: function() {
				w.current != null && (M != null && o("WAWebA2UIRenderTiming").unregisterA2UIRenderCallback(M), A.current || (F(4), M != null && o("WAWebA2UIRenderTiming").clearA2UIRenderStarted(M)), w.current = null);
			}
		}), d(function() {
			var e = !1, t = window.setTimeout(function() {
				e || T(!0);
			}, f);
			return o("WAWebBloksEntryPointLoadable").requireBundle().then(function() {
				if (!e) {
					var n;
					window.clearTimeout(t), (n = w.current) == null || n.addPoint("bundle_loaded");
				}
			}), function() {
				e = !0, window.clearTimeout(t);
			};
		}, []);
		var O = I || P || n == null || n.uuid == null && n.data == null && n.type == null, B = p(!1);
		if (d(function() {
			O && !B.current && (B.current = !0, o("WAWebInteractiveBloksWidgetLogger").logInteractiveBloksWidgetFallback(n, P ? S : null), N && F(3));
		}, [
			O,
			n,
			P,
			N,
			F
		]), O) {
			var W = n == null ? void 0 : n.fallback;
			return W != null && W !== "" ? s.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				justify: "center",
				children: s.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					children: W
				})
			}) : null;
		}
		return s.jsx(o("WAWebBloksEntryPointLoadable").WAWebBloksEntryPointLoadable, {
			componentType: (t = n == null ? void 0 : n.type) != null ? t : "",
			componentData: D,
			uuid: n == null ? void 0 : n.uuid,
			theme: R ? "dark" : "light"
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		if (e == null || e === "") return null;
		try {
			var t = JSON.parse(e);
			if (t == null || typeof t != "object" || Array.isArray(t)) return null;
			var n = babelHelpers.extends({}, t), r = n.type;
			return typeof r == "string" && r.length > 0 ? r : null;
		} catch (e) {
			return null;
		}
	}
	function E(e, t, n) {
		if (e == null || e === "") return "";
		try {
			var r = JSON.parse(e);
			if (r == null || typeof r != "object" || Array.isArray(r)) return e;
			var a = babelHelpers.extends({}, r, { a2ui_supported_elements: o("WAWebABProps").getABPropConfigValue("a2ui_supported_elements") }), i = t != null && t !== "" && n != null && n !== "";
			return JSON.stringify(i ? babelHelpers.extends({}, a, {
				chat_jid: t,
				message_row_id: n
			}) : a);
		} catch (t) {
			return e;
		}
	}
	l.default = R;
}), 98);
