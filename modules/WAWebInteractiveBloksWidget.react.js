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
	"react-compiler-runtime",
	"useWAWebRenderCallbacks"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useMemo, p = u.useRef, _ = u.useState, f = 1e4, g = r("qpl")._(411369473, "1383"), h = "im_a2ui", y = 3e4, C = "component_type", b = "is_cached", v = !1, S = "missing_bot_attribution";
	function R(e) {
		var t, n = o("react-compiler-runtime").c(39), a = e.bloksWidget, i = e.chatJid, l = e.isBizBot1pMessage, u = e.messageId, c = l === void 0 ? !1 : l, m = o("WAWebThemeContext").useIsDarkTheme(), R = _(!1), k = R[0], I = R[1];
		a == null || a.data;
		var T = a == null ? void 0 : a.data, D;
		n[0] !== i || n[1] !== u || n[2] !== T ? (D = E(T, i, u), n[0] = i, n[1] = u, n[2] = T, n[3] = D) : D = n[3];
		var x = D, $;
		n[4] !== (a == null ? void 0 : a.data) ? ($ = function() {
			return L(a == null ? void 0 : a.data);
		}, n[4] = a == null ? void 0 : a.data, n[5] = $) : $ = n[5], a == null || a.data;
		var P;
		n[6] !== $ ? (P = $(), n[6] = $, n[7] = P) : P = n[7];
		var N = P, M = (a == null ? void 0 : a.type) === h, w;
		n[8] !== M || n[9] !== c ? (w = M && !c && o("WAWebABProps").getABPropConfigValue("im_a2ui_require_bot_attribution"), n[8] = M, n[9] = c, n[10] = w) : w = n[10];
		var A = w, F;
		n[11] !== M || n[12] !== A ? (F = M && !A && r("justknobx")._("1085"), n[11] = M, n[12] = A, n[13] = F) : F = n[13];
		var O = F, B = a == null ? void 0 : a.uuid, W = p(null), q = p(!1), U;
		n[14] === Symbol.for("react.memo_cache_sentinel") ? (U = function(t) {
			if (!q.current) {
				var e = W.current;
				e != null && (q.current = !0, e.end(t));
			}
		}, n[14] = U) : U = n[14];
		var V = U, H;
		n[15] !== N || n[16] !== O || n[17] !== B ? (H = function() {
			var e, t;
			if (O && !(B == null || !o("WAWebA2UIRenderTiming").markA2UIRenderStartedIfAbsent(B))) {
				var n = o("WAWebQplFlowWrapper").QPL.markerStart(g, {
					instanceKey: o("WAWebA2UIRenderTiming").nextA2UIRenderInstanceKey(),
					cancelOnUnload: !0,
					timeoutInMs: y
				});
				W.current = n, n.annotate({
					bool: (e = {}, e[b] = v, e),
					string: N != null ? (t = {}, t[C] = N, t) : null
				}), o("WAWebA2UIRenderTiming").registerA2UIRenderCallback(B, function() {
					V(2);
				});
			}
		}, n[15] = N, n[16] = O, n[17] = B, n[18] = H) : H = n[18];
		var G;
		n[19] !== B ? (G = function() {
			W.current != null && (B != null && o("WAWebA2UIRenderTiming").unregisterA2UIRenderCallback(B), q.current || (V(4), B != null && o("WAWebA2UIRenderTiming").clearA2UIRenderStarted(B)), W.current = null);
		}, n[19] = B, n[20] = G) : G = n[20];
		var z;
		n[21] !== G || n[22] !== H ? (z = {
			onMount: H,
			onUnmount: G
		}, n[21] = G, n[22] = H, n[23] = z) : z = n[23], r("useWAWebRenderCallbacks")(z);
		var j, K;
		n[24] === Symbol.for("react.memo_cache_sentinel") ? (j = function() {
			var e = !1, t = window.setTimeout(function() {
				e || I(!0);
			}, f);
			return o("WAWebBloksEntryPointLoadable").requireBundle().then(function() {
				if (!e) {
					var n;
					window.clearTimeout(t), (n = W.current) == null || n.addPoint("bundle_loaded");
				}
			}), (function() {
				e = !0, window.clearTimeout(t);
			});
		}, K = [], n[24] = j, n[25] = K) : (j = n[24], K = n[25]), d(j, K);
		var Q = k || A || a == null || a.uuid == null && a.data == null && a.type == null, X = p(!1), Y, J;
		if (n[26] !== a || n[27] !== A || n[28] !== O || n[29] !== Q ? (Y = function() {
			Q && !X.current && (X.current = !0, o("WAWebInteractiveBloksWidgetLogger").logInteractiveBloksWidgetFallback(a, A ? S : null), O && V(3));
		}, J = [
			Q,
			a,
			A,
			O,
			V
		], n[26] = a, n[27] = A, n[28] = O, n[29] = Q, n[30] = Y, n[31] = J) : (Y = n[30], J = n[31]), d(Y, J), Q) {
			var Z = a == null ? void 0 : a.fallback;
			if (Z != null && Z !== "") {
				var ee;
				return n[32] !== Z ? (ee = s.jsx(o("WAWebFlex.react").FlexColumn, {
					align: "center",
					justify: "center",
					children: s.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: Z
					})
				}), n[32] = Z, n[33] = ee) : ee = n[33], ee;
			}
			return null;
		}
		var te = (t = a == null ? void 0 : a.type) != null ? t : "", ne = a == null ? void 0 : a.uuid, re = m ? "dark" : "light", oe;
		return n[34] !== x || n[35] !== te || n[36] !== ne || n[37] !== re ? (oe = s.jsx(o("WAWebBloksEntryPointLoadable").WAWebBloksEntryPointLoadable, {
			componentType: te,
			componentData: x,
			uuid: ne,
			theme: re
		}), n[34] = x, n[35] = te, n[36] = ne, n[37] = re, n[38] = oe) : oe = n[38], oe;
	}
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
