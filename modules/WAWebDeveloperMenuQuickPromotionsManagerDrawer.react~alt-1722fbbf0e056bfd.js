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
	"react"
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
		var t = e.message;
		return d.jsx(o("WAWebFlex.react").FlexRow, {
			margin: 16,
			shrink: 0,
			children: d.jsx(o("WAWebText.react").WAWebTextSmall, { children: t })
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(t) {
		var a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, u), l = i.onBack, c = g(null), m = c[0], h = c[1], R = g(!1), L = R[0], E = R[1], k = f(!1), I = f(!0), T = p(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield r("WAWebDebugQuickPromotions").getAllQPPromotions(), t = [].concat(e).sort(function(e, t) {
				return e.data.qpConfigPriority - t.data.qpConfigPriority;
			});
			return I.current && h(t), t;
		}), []);
		_(function() {
			return I.current = !0, T().catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[qp-manager] failed to read Quick Promotions from local cache"]))), I.current && h([]);
			}), function() {
				I.current = !1;
			};
		}, [T]);
		var D = p(function() {
			if (!k.current) {
				k.current = !0, E(!0);
				var e = o("WAWebMobilePlatforms").isSMB() ? o("WAWebFetchQuickPromotions").fetchQuickPromotions : o("WAWebConsumerFetchQuickPromotions").fetchConsumerQuickPromotions;
				e().then((function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
						var t = ["Result: " + e.type];
						if (e.type === "success") {
							var n = yield T();
							n.length === 0 ? t.push("The local cache is empty after fetching.") : (t.push(n.length + " promotion(s) now in the local cache:"), n.forEach(function(e) {
								return t.push("• " + y(e) + " — " + e.id);
							})), b("Quick Promotions fetched", t);
						} else t.push(v(e.type)), b("Fetch unsuccessful", t);
					});
					return function(t) {
						return e.apply(this, arguments);
					};
				})()).catch(function(e) {
					o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[qp-manager] fetch Quick Promotions failed"]))), b("Fetch failed", ["An unexpected error occurred while fetching. See console for details."]);
				}).finally(function() {
					k.current = !1, I.current && E(!1);
				});
			}
		}, [T]), x;
		return m == null ? x = d.jsx(S, { message: "Loading…" }) : m.length === 0 ? x = d.jsx(S, { message: "No Quick Promotions in the local cache." }) : x = m.map(function(e) {
			return d.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
				optionId: e.id,
				testid: "li-qp-" + e.id,
				primary: y(e),
				secondary: e.id,
				onSelect: function() {
					return C(e);
				}
			}, e.id);
		}), d.jsxs(r("WAWebDrawer.react"), {
			ref: a,
			theme: "settings",
			testid: "qp-manager-drawer",
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: "Quick Promotions Manager",
				onBack: l,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), d.jsx(r("WAWebDrawerBody.react"), { children: d.jsxs(o("WAWebMenu.react").WAWebMenu, {
				size: "medium",
				focusOnMount: !0,
				material: !0,
				children: [
					d.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
						optionId: "fetch-quick-promotions",
						testid: "li-fetch-quick-promotions",
						primary: L ? "Fetching…" : "Fetch promotions",
						onSelect: D,
						disabled: L
					}),
					d.jsx(o("WAWebMenuItems.react").MenuSeparator, {}),
					x
				]
			}) })]
		});
	}
	R.displayName = R.name + " [from " + i.id + "]", l.default = R;
}), 98);
