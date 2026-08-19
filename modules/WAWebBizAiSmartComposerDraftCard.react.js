__d("WAWebBizAiSmartComposerDraftCard.react", [
	"fbt",
	"WAWebBizAiSmartComposerStyles.stylex",
	"WAWebBizAiSmartComposerSuggestionStateMachine",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebInterval",
	"useWAWebSmartComposerSuggestion"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useState, f = "x18re5ia-B", g = "x1pro8d3-B", h = 3e3, y = { replyText: {
		maxWidth: "xprqm3i",
		$$css: !0
	} };
	function C(t) {
		var n = o("react-compiler-runtime").c(29), a = t.chatId, i = t.onInsert, l = o("useWAWebSmartComposerSuggestion").useWAWebSmartComposerSuggestion(a), u = l.cardState, d = l.onDismiss, m = l.onTapSuggestion, f;
		n[0] !== u.status || n[1] !== u.suggestion || n[2] !== i || n[3] !== m ? (f = function() {
			if (u.status === "success") {
				var e = o("WAWebBizAiSmartComposerSuggestionStateMachine").getSuggestionInsertText(u.suggestion);
				e !== "" && (i(e), m());
			}
		}, n[0] = u.status, n[1] = u.suggestion, n[2] = i, n[3] = m, n[4] = f) : f = n[4];
		var g = f, y = u.status === "loading", C = _(0), E = C[0], I = C[1], T;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (T = function() {
			I(b);
		}, n[5] = T) : T = n[5];
		var D = r("useWAWebInterval")(T, h), x = D[0], $ = D[1], P, N;
		n[6] !== $ || n[7] !== y || n[8] !== x ? (P = function() {
			if (!y) {
				$();
				return;
			}
			return I(0), x(), $;
		}, N = [
			$,
			y,
			x
		], n[6] = $, n[7] = y, n[8] = x, n[9] = P, n[10] = N) : (P = n[9], N = n[10]), p(P, N);
		var M;
		n[11] !== g || n[12] !== d || n[13] !== E ? (M = function(t) {
			if ((typeof t == "object" && t !== null || typeof t == "function") && t.status === "hidden") return null;
			if ((typeof t == "object" && t !== null || typeof t == "function") && t.status === "loading") return c.jsx(R, {
				onDismiss: d,
				phrase: L(E)
			});
			if ((typeof t == "object" && t !== null || typeof t == "function") && t.status === "success" && "suggestion" in t) {
				var e = t.suggestion;
				return c.jsx(S, {
					onDismiss: d,
					onTap: g,
					suggestion: e
				});
			}
			if ((typeof t == "object" && t !== null || typeof t == "function") && t.status === "error") return c.jsx(k, {
				body: s._(
					/*BTDS*/
					""
				),
				onDismiss: d,
				testid: "biz_ai_smart_composer_draft_card_error",
				title: s._(
					/*BTDS*/
					""
				)
			});
			if ((typeof t == "object" && t !== null || typeof t == "function") && t.status === "quota_handoff") return c.jsx(k, {
				body: s._(
					/*BTDS*/
					""
				),
				onDismiss: d,
				testid: "biz_ai_smart_composer_draft_card_handoff",
				title: s._(
					/*BTDS*/
					""
				)
			});
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + t);
		}, n[11] = g, n[12] = d, n[13] = E, n[14] = M) : M = n[14];
		var w;
		n[15] !== u || n[16] !== M ? (w = M(u), n[15] = u, n[16] = M, n[17] = w) : w = n[17];
		var A = w, F;
		n[18] === Symbol.for("react.memo_cache_sentinel") ? (F = (e || (e = r("stylex"))).props(o("WAWebBizAiSmartComposerStyles.stylex").smartComposerStyles.srOnly), n[18] = F) : F = n[18];
		var O;
		n[19] !== u ? (O = (typeof u == "object" && u !== null || typeof u == "function") && u.status === "loading" ? s._(
			/*BTDS*/
			""
		) : (typeof u == "object" && u !== null || typeof u == "function") && u.status === "success" ? s._(
			/*BTDS*/
			""
		) : (typeof u == "object" && u !== null || typeof u == "function") && u.status === "error" ? s._(
			/*BTDS*/
			""
		) : (typeof u == "object" && u !== null || typeof u == "function") && u.status === "quota_handoff" ? s._(
			/*BTDS*/
			""
		) : null, n[19] = u, n[20] = O) : O = n[20];
		var B;
		n[21] !== O ? (B = c.jsx("span", babelHelpers.extends({}, F, {
			"aria-live": "polite",
			role: "status",
			children: O
		})), n[21] = O, n[22] = B) : B = n[22];
		var W;
		n[23] !== u.status || n[24] !== A ? (W = c.jsx(v, {
			content: A,
			contentKey: u.status
		}), n[23] = u.status, n[24] = A, n[25] = W) : W = n[25];
		var q;
		return n[26] !== W || n[27] !== B ? (q = c.jsxs(c.Fragment, { children: [B, W] }), n[26] = W, n[27] = B, n[28] = q) : q = n[28], q;
	}
	function b(e) {
		return e + 1;
	}
	function v(e) {
		var t = o("react-compiler-runtime").c(11), n = e.content, r = e.contentKey, a = n != null, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = {
			key: "",
			node: null
		}, t[0] = i) : i = t[0];
		var l = _(i), s = l[0], u = l[1];
		n != null && r !== s.key && u({
			key: r,
			node: n
		});
		var d = n != null ? n : s.node, m = n != null ? r : s.key, p;
		t[1] !== a ? (p = {
			0: { className: "x6ikm8r x10wlt62 xftp66k x1n7q72k x9kvfbb xqtp20y xg01cxk xat24cr x47corl xlshs6z" },
			1: { className: "x6ikm8r x10wlt62 xftp66k x1n7q72k x9kvfbb xt7dq6l x1hc1fzr xefnzgg" }
		}[!!a << 0], t[1] = a, t[2] = p) : p = t[2];
		var f = !a, g;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (g = { className: "xqcmdr3 x1aquc0h xs4xyr0 xa3vuyk x1u6ievf" }, t[3] = g) : g = t[3];
		var h;
		t[4] !== d || t[5] !== m ? (h = c.jsx("div", babelHelpers.extends({}, g, { children: d }), m), t[4] = d, t[5] = m, t[6] = h) : h = t[6];
		var y;
		return t[7] !== p || t[8] !== f || t[9] !== h ? (y = c.jsx("div", babelHelpers.extends({}, p, {
			"aria-hidden": f,
			children: h
		})), t[7] = p, t[8] = f, t[9] = h, t[10] = y) : y = t[10], y;
	}
	function S(t) {
		var n = o("react-compiler-runtime").c(19), a = t.onDismiss, i = t.onTap, l = t.suggestion, u;
		n[0] !== l ? (u = o("WAWebBizAiSmartComposerSuggestionStateMachine").getSuggestionInsertText(l), n[0] = l, n[1] = u) : u = n[1];
		var d = u, m;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (m = { className: "x1n2onr6 x1uvdrpn x14mko6t x6nvzda x4i4b9w xhl9efl xj65ea0 x1gxa6cn x1j8ymqv xa0aww2 x4tra6z x6ikm8r x10wlt62" }, n[2] = m) : m = n[2];
		var p, _, f, g;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (p = c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebBizAiSmartComposerStyles.stylex").smartComposerStyles.accentSweep), { "aria-hidden": !0 })), _ = { className: "x1n2onr6 x1vjfegm x78zum5 x1q0g3np x1cy8zhl x1s70e7g xh8yej3 x9f619 x1h3rtpe x1er58zx x1k5tofr x1xm7vl x10du0as x1xrf6ya xde1mab xscbp6u x1iw51ew" }, f = { className: "x78zum5 xdt5ytf x129bwdz x1iyjqo2 xeuugli" }, g = { className: "x78zum5 xdt5ytf x129bwdz x1qjc9v5 xh8yej3 xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x1ejq31n x18oe1m7 x1sy0etr xstzfhl xjbqb8w x1yc453h x1ypdohk" }, n[3] = p, n[4] = _, n[5] = f, n[6] = g) : (p = n[3], _ = n[4], f = n[5], g = n[6]);
		var h;
		n[7] === Symbol.for("react.memo_cache_sentinel") ? (h = c.jsx(r("WDSText.react"), {
			type: "Body3Emphasized",
			colorName: "contentDefault",
			children: s._(
				/*BTDS*/
				""
			)
		}), n[7] = h) : h = n[7];
		var C;
		n[8] !== d ? (C = d !== "" && c.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			xstyle: y.replyText,
			children: d
		}), n[8] = d, n[9] = C) : C = n[9];
		var b;
		n[10] === Symbol.for("react.memo_cache_sentinel") ? (b = c.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}), n[10] = b) : b = n[10];
		var v;
		n[11] !== i || n[12] !== C ? (v = c.jsx("div", babelHelpers.extends({}, f, { children: c.jsxs("button", babelHelpers.extends({}, g, {
			"data-testid": "biz_ai_smart_composer_draft_card_insert",
			onClick: i,
			type: "button",
			children: [
				h,
				C,
				b
			]
		})) })), n[11] = i, n[12] = C, n[13] = v) : v = n[13];
		var S;
		n[14] !== a ? (S = c.jsx(I, { onDismiss: a }), n[14] = a, n[15] = S) : S = n[15];
		var R;
		return n[16] !== v || n[17] !== S ? (R = c.jsxs("div", babelHelpers.extends({}, m, {
			"data-testid": "biz_ai_smart_composer_draft_card",
			children: [p, c.jsxs("div", babelHelpers.extends({}, _, { children: [v, S] }))]
		})), n[16] = v, n[17] = S, n[18] = R) : R = n[18], R;
	}
	function R(e) {
		var t = o("react-compiler-runtime").c(11), n = e.onDismiss, a = e.phrase, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = { className: "x78zum5 x1q0g3np x6s0dn4 x1s70e7g x1uvdrpn x14mko6t x1h3rtpe x6nvzda x4i4b9w xhl9efl xj65ea0 x16ovd2e x12xbjc7 x1iw51ew xde1mab" }, t[0] = i) : i = t[0];
		var l, s, u;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = { className: "x78zum5 xdt5ytf x129bwdz x1iyjqo2 xeuugli" }, s = { className: "x78zum5 x1q0g3np x6s0dn4 x1s70e7g" }, u = { className: "xeuugli xm3nhrj x1aquc0h x18hd8ej x4hg4is xa4qsjk" }, t[1] = l, t[2] = s, t[3] = u) : (l = t[1], s = t[2], u = t[3]);
		var d;
		t[4] !== a ? (d = c.jsx("div", babelHelpers.extends({}, l, { children: c.jsx("div", babelHelpers.extends({}, s, { children: c.jsx("div", babelHelpers.extends({}, u, {
			"aria-hidden": !0,
			"data-testid": "biz_ai_smart_composer_draft_card_loading_phrase",
			children: c.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: a
			})
		})) })) })), t[4] = a, t[5] = d) : d = t[5];
		var m;
		t[6] !== n ? (m = c.jsx(I, { onDismiss: n }), t[6] = n, t[7] = m) : m = t[7];
		var p;
		return t[8] !== d || t[9] !== m ? (p = c.jsxs("div", babelHelpers.extends({}, i, {
			"data-testid": "biz_ai_smart_composer_draft_card_loading",
			children: [d, m]
		})), t[8] = d, t[9] = m, t[10] = p) : p = t[10], p;
	}
	function L(e) {
		var t = E();
		return t[e % t.length];
	}
	function E() {
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
	function k(e) {
		var t = o("react-compiler-runtime").c(15), n = e.body, a = e.onDismiss, i = e.testid, l = e.title, s;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (s = { className: "x78zum5 x1q0g3np x1s70e7g x1uvdrpn x14mko6t x1h3rtpe x6nvzda x4i4b9w xhl9efl xj65ea0 x1iw51ew xde1mab x1cy8zhl x1xrf6ya xscbp6u" }, t[0] = s) : s = t[0];
		var u;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (u = { className: "x78zum5 xdt5ytf x129bwdz x1iyjqo2 xeuugli" }, t[1] = u) : u = t[1];
		var d;
		t[2] !== l ? (d = c.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			colorName: "contentDefault",
			children: l
		}), t[2] = l, t[3] = d) : d = t[3];
		var m;
		t[4] !== n ? (m = c.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			children: n
		}), t[4] = n, t[5] = m) : m = t[5];
		var p;
		t[6] !== d || t[7] !== m ? (p = c.jsxs("div", babelHelpers.extends({}, u, { children: [d, m] })), t[6] = d, t[7] = m, t[8] = p) : p = t[8];
		var _;
		t[9] !== a ? (_ = c.jsx(I, { onDismiss: a }), t[9] = a, t[10] = _) : _ = t[10];
		var f;
		return t[11] !== p || t[12] !== _ || t[13] !== i ? (f = c.jsxs("div", babelHelpers.extends({}, s, {
			"data-testid": i,
			children: [p, _]
		})), t[11] = p, t[12] = _, t[13] = i, t[14] = f) : f = t[14], f;
	}
	function I(e) {
		var t = o("react-compiler-runtime").c(4), n = e.onDismiss, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = { className: "x2lah0s x1wgys3m" }, t[0] = a) : a = t[0];
		var i;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (i = s._(
			/*BTDS*/
			""
		).toString(), t[1] = i) : i = t[1];
		var l;
		return t[2] !== n ? (l = c.jsx("div", babelHelpers.extends({}, a, { children: c.jsx(r("WDSButton.react"), {
			"aria-label": i,
			Icon: r("WDSIconIcClose.react"),
			onPress: n,
			size: "small",
			testid: "biz_ai_smart_composer_draft_card_close",
			variant: "borderless"
		}) })), t[2] = n, t[3] = l) : l = t[3], l;
	}
	l.default = C;
}), 226);
