__d("WAWebBizAiSmartComposerDraftCard.react", [
	"fbt",
	"WAWebBizAiSmartComposerStyles.stylex",
	"WAWebBizAiSmartComposerSuggestionStateMachine",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"react",
	"stylex",
	"useWAWebInterval",
	"useWAWebSmartComposerSuggestion"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useState, f = "x18re5ia-B", g = "x1pro8d3-B", h = 3e3, y = { replyText: {
		maxWidth: "xprqm3i",
		$$css: !0
	} };
	function C(t) {
		var n = t.chatId, a = t.onInsert, i = o("useWAWebSmartComposerSuggestion").useWAWebSmartComposerSuggestion(n), l = i.cardState, u = i.onDismiss, d = i.onTapSuggestion, f = m(function() {
			if (l.status === "success") {
				var e = o("WAWebBizAiSmartComposerSuggestionStateMachine").getSuggestionInsertText(l.suggestion);
				e !== "" && (a(e), d());
			}
		}, [
			l,
			a,
			d
		]), g = l.status === "loading", y = _(0), C = y[0], L = y[1], k = r("useWAWebInterval")(function() {
			L(function(e) {
				return e + 1;
			});
		}, h), I = k[0], T = k[1];
		p(function() {
			if (!g) {
				T();
				return;
			}
			return L(0), I(), T;
		}, [
			T,
			g,
			I
		]);
		var D = (function(e) {
			if ((typeof e == "object" && e !== null || typeof e == "function") && e.status === "hidden") return null;
			if ((typeof e == "object" && e !== null || typeof e == "function") && e.status === "loading") return c.jsx(S, {
				onDismiss: u,
				phrase: R(C)
			});
			if ((typeof e == "object" && e !== null || typeof e == "function") && e.status === "success" && "suggestion" in e) {
				var t = e.suggestion;
				return c.jsx(v, {
					onDismiss: u,
					onTap: f,
					suggestion: t
				});
			}
			if ((typeof e == "object" && e !== null || typeof e == "function") && e.status === "error") return c.jsx(E, {
				body: s._(
					/*BTDS*/
					""
				),
				onDismiss: u,
				testid: "biz_ai_smart_composer_draft_card_error",
				title: s._(
					/*BTDS*/
					""
				)
			});
			if ((typeof e == "object" && e !== null || typeof e == "function") && e.status === "quota_handoff") return c.jsx(E, {
				body: s._(
					/*BTDS*/
					""
				),
				onDismiss: u,
				testid: "biz_ai_smart_composer_draft_card_handoff",
				title: s._(
					/*BTDS*/
					""
				)
			});
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})(l);
		return c.jsxs(c.Fragment, { children: [c.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebBizAiSmartComposerStyles.stylex").smartComposerStyles.srOnly), {
			"aria-live": "polite",
			role: "status",
			children: (typeof l == "object" && l !== null || typeof l == "function") && l.status === "loading" ? s._(
				/*BTDS*/
				""
			) : (typeof l == "object" && l !== null || typeof l == "function") && l.status === "success" ? s._(
				/*BTDS*/
				""
			) : (typeof l == "object" && l !== null || typeof l == "function") && l.status === "error" ? s._(
				/*BTDS*/
				""
			) : (typeof l == "object" && l !== null || typeof l == "function") && l.status === "quota_handoff" ? s._(
				/*BTDS*/
				""
			) : null
		})), c.jsx(b, {
			content: D,
			contentKey: l.status
		})] });
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e.content, n = e.contentKey, r = t != null, o = _({
			key: "",
			node: null
		}), a = o[0], i = o[1];
		t != null && n !== a.key && i({
			key: n,
			node: t
		});
		var l = t != null ? t : a.node, s = t != null ? n : a.key;
		return c.jsx("div", babelHelpers.extends({}, {
			0: { className: "x6ikm8r x10wlt62 xftp66k x1n7q72k x9kvfbb xqtp20y xg01cxk xat24cr x47corl xlshs6z" },
			1: { className: "x6ikm8r x10wlt62 xftp66k x1n7q72k x9kvfbb xt7dq6l x1hc1fzr xefnzgg" }
		}[!!r << 0], {
			"aria-hidden": !r,
			children: c.jsx("div", {
				className: "xqcmdr3 x1aquc0h xs4xyr0 xa3vuyk x1u6ievf",
				children: l
			}, s)
		}));
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(t) {
		var n = t.onDismiss, a = t.onTap, i = t.suggestion, l = o("WAWebBizAiSmartComposerSuggestionStateMachine").getSuggestionInsertText(i);
		return c.jsxs("div", {
			className: "x1n2onr6 x1uvdrpn x14mko6t x6nvzda x4i4b9w xhl9efl xj65ea0 x1gxa6cn x1j8ymqv xa0aww2 x4tra6z x6ikm8r x10wlt62",
			"data-testid": "biz_ai_smart_composer_draft_card",
			children: [c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebBizAiSmartComposerStyles.stylex").smartComposerStyles.accentSweep), { "aria-hidden": !0 })), c.jsxs("div", {
				className: "x1n2onr6 x1vjfegm x78zum5 x1q0g3np x1cy8zhl x1s70e7g xh8yej3 x9f619 x1h3rtpe x1er58zx x1k5tofr x1xm7vl x10du0as x1xrf6ya xde1mab xscbp6u x1iw51ew",
				children: [c.jsx("div", {
					className: "x78zum5 xdt5ytf x129bwdz x1iyjqo2 xeuugli",
					children: c.jsxs("button", {
						className: "x78zum5 xdt5ytf x129bwdz x1qjc9v5 xh8yej3 xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1ejq31n x18oe1m7 x1sy0etr xstzfhl xjbqb8w x1yc453h x1ypdohk",
						"data-testid": "biz_ai_smart_composer_draft_card_insert",
						onClick: a,
						type: "button",
						children: [
							c.jsx(r("WDSText.react"), {
								type: "Body3Emphasized",
								colorName: "contentDefault",
								children: s._(
									/*BTDS*/
									""
								)
							}),
							l !== "" && c.jsx(r("WDSText.react"), {
								type: "Body2",
								colorName: "contentDefault",
								xstyle: y.replyText,
								children: l
							}),
							c.jsx(r("WDSText.react"), {
								type: "Body3",
								colorName: "contentDeemphasized",
								children: s._(
									/*BTDS*/
									""
								)
							})
						]
					})
				}), c.jsx(k, { onDismiss: n })]
			})]
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t = e.onDismiss, n = e.phrase;
		return c.jsxs("div", {
			className: "x78zum5 x1q0g3np x6s0dn4 x1s70e7g x1uvdrpn x14mko6t x1h3rtpe x6nvzda x4i4b9w xhl9efl xj65ea0 x16ovd2e x12xbjc7 x1iw51ew xde1mab",
			"data-testid": "biz_ai_smart_composer_draft_card_loading",
			children: [c.jsx("div", {
				className: "x78zum5 xdt5ytf x129bwdz x1iyjqo2 xeuugli",
				children: c.jsx("div", {
					className: "x78zum5 x1q0g3np x6s0dn4 x1s70e7g",
					children: c.jsx("div", {
						className: "xeuugli xm3nhrj x1aquc0h x18hd8ej x4hg4is xa4qsjk",
						"aria-hidden": !0,
						"data-testid": "biz_ai_smart_composer_draft_card_loading_phrase",
						children: c.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: n
						})
					})
				})
			}), c.jsx(k, { onDismiss: t })]
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t = L();
		return t[e % t.length];
	}
	function L() {
		return [
			s._(
				/*BTDS*/
				""
			),
			s._(
				/*BTDS*/
				""
			),
			s._(
				/*BTDS*/
				""
			),
			s._(
				/*BTDS*/
				""
			)
		];
	}
	function E(e) {
		var t = e.body, n = e.onDismiss, o = e.testid, a = e.title;
		return c.jsxs("div", {
			className: "x78zum5 x1q0g3np x1s70e7g x1uvdrpn x14mko6t x1h3rtpe x6nvzda x4i4b9w xhl9efl xj65ea0 x1iw51ew xde1mab x1cy8zhl x1xrf6ya xscbp6u",
			"data-testid": o,
			children: [c.jsxs("div", {
				className: "x78zum5 xdt5ytf x129bwdz x1iyjqo2 xeuugli",
				children: [c.jsx(r("WDSText.react"), {
					type: "Body2Emphasized",
					colorName: "contentDefault",
					children: a
				}), c.jsx(r("WDSText.react"), {
					type: "Body3",
					colorName: "contentDeemphasized",
					children: t
				})]
			}), c.jsx(k, { onDismiss: n })]
		});
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(e) {
		var t = e.onDismiss;
		return c.jsx("div", {
			className: "x2lah0s x1wgys3m",
			children: c.jsx(r("WDSButton.react"), {
				"aria-label": s._(
					/*BTDS*/
					""
				).toString(),
				Icon: r("WDSIconIcClose.react"),
				onPress: t,
				size: "small",
				testid: "biz_ai_smart_composer_draft_card_close",
				variant: "borderless"
			})
		});
	}
	k.displayName = k.name + " [from " + i.id + "]", l.default = C;
}), 226);
