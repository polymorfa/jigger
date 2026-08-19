__d("WAWebDeveloperMenuQuickPromotionsManagerDrawer.react", [
	"WALogger",
	"WAWebConsumerFetchQuickPromotions",
	"WAWebDebugQuickPromotions",
	"WAWebDeveloperMenuQuickPromotionDetailsModal.react",
	"WAWebDeveloperMenuQuickPromotionFetchResultModal.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebFetchQuickPromotions",
	"WAWebFlex.react",
	"WAWebMenu.react",
	"WAWebMenuItems.react",
	"WAWebMobilePlatforms",
	"WAWebModalManager",
	"WAWebText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = ["ref"], c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useEffect, f = m.useRef, g = m.useState, h = "(untitled)";
	function y(e) {
		var t = e.data.titleElementValue;
		return t != null && t !== "" ? t : h;
	}
	function C(e) {
		o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebDeveloperMenuQuickPromotionDetailsModal.react"), { promotion: e }));
	}
	function b(e, t) {
		o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebDeveloperMenuQuickPromotionFetchResultModal.react"), {
			title: e,
			lines: t
		}));
	}
	function v(e) {
		switch (e) {
			case "not-enabled": return "QP fetch is not enabled for this client (check GK / ABProps).";
			case "timeout": return "The fetch timed out.";
			case "auth-failure": return "Authentication failed.";
			case "error": return "The fetch returned an error.";
			default: return "The fetch returned \"" + e + "\".";
		}
	}
	function S(e) {
		var t = o("react-compiler-runtime").c(2), n = e.message, r;
		return t[0] !== n ? (r = d.jsx(o("WAWebFlex.react").FlexRow, {
			margin: 16,
			shrink: 0,
			children: d.jsx(o("WAWebText.react").WAWebTextSmall, { children: n })
		}), t[0] = n, t[1] = r) : r = t[1], r;
	}
	function R(t) {
		var n = o("react-compiler-runtime").c(24), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, u), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, s = l.onBack, c = g(null), m = c[0], p = c[1], h = g(!1), C = h[0], R = h[1], I = f(!1), T = f(!0), D;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (D = async function() {
			var e = await r("WAWebDebugQuickPromotions").getAllQPPromotions(), t = [].concat(e).sort(k);
			return T.current && p(t), t;
		}, n[3] = D) : D = n[3];
		var x = D, $, P;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? ($ = function() {
			return T.current = !0, x().catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[qp-manager] failed to read Quick Promotions from local cache"]))), T.current && p([]);
			}), (function() {
				T.current = !1;
			});
		}, P = [x], n[4] = $, n[5] = P) : ($ = n[4], P = n[5]), _($, P);
		var N;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (N = function() {
			if (!I.current) {
				I.current = !0, R(!0);
				var e = o("WAWebMobilePlatforms").isSMB() ? o("WAWebFetchQuickPromotions").fetchQuickPromotions : o("WAWebConsumerFetchQuickPromotions").fetchConsumerQuickPromotions;
				e().then(async function(e) {
					var t = ["Result: " + e.type];
					if (e.type === "success") {
						var n = await x();
						n.length === 0 ? t.push("The local cache is empty after fetching.") : (t.push(n.length + " promotion(s) now in the local cache:"), n.forEach(function(e) {
							return t.push("• " + y(e) + " — " + e.id);
						})), b("Quick Promotions fetched", t);
					} else t.push(v(e.type)), b("Fetch unsuccessful", t);
				}).catch(E).finally(function() {
					I.current = !1, T.current && R(!1);
				});
			}
		}, n[6] = N) : N = n[6];
		var M = N, w;
		if (m == null) {
			var A;
			n[7] === Symbol.for("react.memo_cache_sentinel") ? (A = d.jsx(S, { message: "Loading…" }), n[7] = A) : A = n[7], w = A;
		} else if (m.length === 0) {
			var F;
			n[8] === Symbol.for("react.memo_cache_sentinel") ? (F = d.jsx(S, { message: "No Quick Promotions in the local cache." }), n[8] = F) : F = n[8], w = F;
		} else {
			var O;
			n[9] !== m ? (O = m.map(L), n[9] = m, n[10] = O) : O = n[10], w = O;
		}
		var B;
		n[11] !== s ? (B = d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: "Quick Promotions Manager",
			onBack: s,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
		}), n[11] = s, n[12] = B) : B = n[12];
		var W = C ? "Fetching…" : "Fetch promotions", q;
		n[13] !== C || n[14] !== W ? (q = d.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "fetch-quick-promotions",
			testid: "li-fetch-quick-promotions",
			primary: W,
			onSelect: M,
			disabled: C
		}), n[13] = C, n[14] = W, n[15] = q) : q = n[15];
		var U;
		n[16] === Symbol.for("react.memo_cache_sentinel") ? (U = d.jsx(o("WAWebMenuItems.react").MenuSeparator, {}), n[16] = U) : U = n[16];
		var V;
		n[17] !== w || n[18] !== q ? (V = d.jsx(r("WAWebDrawerBody.react"), { children: d.jsxs(o("WAWebMenu.react").WAWebMenu, {
			size: "medium",
			focusOnMount: !0,
			material: !0,
			children: [
				q,
				U,
				w
			]
		}) }), n[17] = w, n[18] = q, n[19] = V) : V = n[19];
		var H;
		return n[20] !== i || n[21] !== B || n[22] !== V ? (H = d.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			theme: "settings",
			testid: "qp-manager-drawer",
			children: [B, V]
		}), n[20] = i, n[21] = B, n[22] = V, n[23] = H) : H = n[23], H;
	}
	function L(e) {
		return d.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: e.id,
			testid: "li-qp-" + e.id,
			primary: y(e),
			secondary: e.id,
			onSelect: function() {
				return C(e);
			}
		}, e.id);
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(e) {
		o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[qp-manager] fetch Quick Promotions failed"]))), b("Fetch failed", ["An unexpected error occurred while fetching. See console for details."]);
	}
	function k(e, t) {
		return e.data.qpConfigPriority - t.data.qpConfigPriority;
	}
	l.default = R;
}), 98);
