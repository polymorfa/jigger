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
	"asyncToGeneratorRuntime",
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
		var a = o("react-compiler-runtime").c(24), i, l;
		a[0] !== t ? (l = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, u), a[0] = t, a[1] = i, a[2] = l) : (i = a[1], l = a[2]);
		var s = i, c = s.onBack, m = g(null), p = m[0], h = m[1], C = g(!1), R = C[0], I = C[1], T = f(!1), D = f(!0), x;
		a[3] === Symbol.for("react.memo_cache_sentinel") ? (x = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = yield r("WAWebDebugQuickPromotions").getAllQPPromotions(), t = [].concat(e).sort(k);
				return D.current && h(t), t;
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), a[3] = x) : x = a[3];
		var $ = x, P, N;
		a[4] === Symbol.for("react.memo_cache_sentinel") ? (P = function() {
			return D.current = !0, $().catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[qp-manager] failed to read Quick Promotions from local cache"]))), D.current && h([]);
			}), (function() {
				D.current = !1;
			});
		}, N = [$], a[4] = P, a[5] = N) : (P = a[4], N = a[5]), _(P, N);
		var M;
		a[6] === Symbol.for("react.memo_cache_sentinel") ? (M = function() {
			if (!T.current) {
				T.current = !0, I(!0);
				var e = o("WAWebMobilePlatforms").isSMB() ? o("WAWebFetchQuickPromotions").fetchQuickPromotions : o("WAWebConsumerFetchQuickPromotions").fetchConsumerQuickPromotions;
				e().then((function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
						var t = ["Result: " + e.type];
						if (e.type === "success") {
							var n = yield $();
							n.length === 0 ? t.push("The local cache is empty after fetching.") : (t.push(n.length + " promotion(s) now in the local cache:"), n.forEach(function(e) {
								return t.push("• " + y(e) + " — " + e.id);
							})), b("Quick Promotions fetched", t);
						} else t.push(v(e.type)), b("Fetch unsuccessful", t);
					});
					return function(t) {
						return e.apply(this, arguments);
					};
				})()).catch(E).finally(function() {
					T.current = !1, D.current && I(!1);
				});
			}
		}, a[6] = M) : M = a[6];
		var w = M, A;
		if (p == null) {
			var F;
			a[7] === Symbol.for("react.memo_cache_sentinel") ? (F = d.jsx(S, { message: "Loading…" }), a[7] = F) : F = a[7], A = F;
		} else if (p.length === 0) {
			var O;
			a[8] === Symbol.for("react.memo_cache_sentinel") ? (O = d.jsx(S, { message: "No Quick Promotions in the local cache." }), a[8] = O) : O = a[8], A = O;
		} else {
			var B;
			a[9] !== p ? (B = p.map(L), a[9] = p, a[10] = B) : B = a[10], A = B;
		}
		var W;
		a[11] !== c ? (W = d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: "Quick Promotions Manager",
			onBack: c,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
		}), a[11] = c, a[12] = W) : W = a[12];
		var q = R ? "Fetching…" : "Fetch promotions", U;
		a[13] !== R || a[14] !== q ? (U = d.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "fetch-quick-promotions",
			testid: "li-fetch-quick-promotions",
			primary: q,
			onSelect: w,
			disabled: R
		}), a[13] = R, a[14] = q, a[15] = U) : U = a[15];
		var V;
		a[16] === Symbol.for("react.memo_cache_sentinel") ? (V = d.jsx(o("WAWebMenuItems.react").MenuSeparator, {}), a[16] = V) : V = a[16];
		var H;
		a[17] !== A || a[18] !== U ? (H = d.jsx(r("WAWebDrawerBody.react"), { children: d.jsxs(o("WAWebMenu.react").WAWebMenu, {
			size: "medium",
			focusOnMount: !0,
			material: !0,
			children: [
				U,
				V,
				A
			]
		}) }), a[17] = A, a[18] = U, a[19] = H) : H = a[19];
		var G;
		return a[20] !== l || a[21] !== W || a[22] !== H ? (G = d.jsxs(r("WAWebDrawer.react"), {
			ref: l,
			theme: "settings",
			testid: "qp-manager-drawer",
			children: [W, H]
		}), a[20] = l, a[21] = W, a[22] = H, a[23] = G) : G = a[23], G;
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
