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
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, u), i = a.onBack, l = g(null), c = l[0], m = l[1], h = g(!1), R = h[0], L = h[1], E = f(!1), k = f(!0), I = p(async function() {
			var e = await r("WAWebDebugQuickPromotions").getAllQPPromotions(), t = [].concat(e).sort(function(e, t) {
				return e.data.qpConfigPriority - t.data.qpConfigPriority;
			});
			return k.current && m(t), t;
		}, []);
		_(function() {
			return k.current = !0, I().catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[qp-manager] failed to read Quick Promotions from local cache"]))), k.current && m([]);
			}), function() {
				k.current = !1;
			};
		}, [I]);
		var T = p(function() {
			if (!E.current) {
				E.current = !0, L(!0);
				var e = o("WAWebMobilePlatforms").isSMB() ? o("WAWebFetchQuickPromotions").fetchQuickPromotions : o("WAWebConsumerFetchQuickPromotions").fetchConsumerQuickPromotions;
				e().then(async function(e) {
					var t = ["Result: " + e.type];
					if (e.type === "success") {
						var n = await I();
						n.length === 0 ? t.push("The local cache is empty after fetching.") : (t.push(n.length + " promotion(s) now in the local cache:"), n.forEach(function(e) {
							return t.push("• " + y(e) + " — " + e.id);
						})), b("Quick Promotions fetched", t);
					} else t.push(v(e.type)), b("Fetch unsuccessful", t);
				}).catch(function(e) {
					o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[qp-manager] fetch Quick Promotions failed"]))), b("Fetch failed", ["An unexpected error occurred while fetching. See console for details."]);
				}).finally(function() {
					E.current = !1, k.current && L(!1);
				});
			}
		}, [I]), D;
		return c == null ? D = d.jsx(S, { message: "Loading…" }) : c.length === 0 ? D = d.jsx(S, { message: "No Quick Promotions in the local cache." }) : D = c.map(function(e) {
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
			ref: n,
			theme: "settings",
			testid: "qp-manager-drawer",
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: "Quick Promotions Manager",
				onBack: i,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), d.jsx(r("WAWebDrawerBody.react"), { children: d.jsxs(o("WAWebMenu.react").WAWebMenu, {
				size: "medium",
				focusOnMount: !0,
				material: !0,
				children: [
					d.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
						optionId: "fetch-quick-promotions",
						testid: "li-fetch-quick-promotions",
						primary: R ? "Fetching…" : "Fetch promotions",
						onSelect: T,
						disabled: R
					}),
					d.jsx(o("WAWebMenuItems.react").MenuSeparator, {}),
					D
				]
			}) })]
		});
	}
	R.displayName = R.name + " [from " + i.id + "]", l.default = R;
}), 98);
