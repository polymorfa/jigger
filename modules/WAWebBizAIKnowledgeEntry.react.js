__d("WAWebBizAIKnowledgeEntry.react", [
	"fbt",
	"WALogger",
	"WAWebBizAiKnowledgeReviewDeleteMutation",
	"WAWebBizAiSaveUtils",
	"WAWebClickable.react",
	"WAWebDeleteRefreshedIcon.react",
	"WAWebDropdownItem.react",
	"WAWebFlex.react",
	"WAWebIcChevronDownMenuIcon.react",
	"WAWebText.react",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WDSIconIcVisibility.react",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useState, m = {
		hoverStyle: {
			":hover_backgroundColor": "x1n67ipk",
			":hover_borderStartStartRadius": "xwl5bvh",
			":hover_borderStartEndRadius": "x1fvswcl",
			":hover_borderEndEndRadius": "x1wsr4p6",
			":hover_borderEndStartRadius": "xrzgb8j",
			$$css: !0
		},
		knowledgeEntryQuestion: {
			fontFeatureSettings: "xxhqxmj",
			WebkitLineClamp: "x1h7i4cw",
			WebkitBoxOrient: "x1ua5tub",
			display: "x104kibb",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		knowledgeEntryAnswer: {
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			fontFeatureSettings: "xxhqxmj",
			textOverflow: "xlyipyv",
			letterSpacing: "x1p4m5qa",
			marginTop: "x1gslohp",
			WebkitLineClamp: "x1gzmk7r",
			WebkitBoxOrient: "x1ua5tub",
			display: "x104kibb",
			$$css: !0
		},
		dropDownMenu: {
			position: "x10l6tqk",
			insetInlineEnd: "xdg88n9",
			left: null,
			right: null,
			$$css: !0
		},
		paddingStart16: {
			paddingInlineStart: "xdx6fka",
			$$css: !0
		},
		paddingEnd24: {
			paddingInlineEnd: "xyo0t3i",
			$$css: !0
		},
		paddingTop12: {
			paddingTop: "x1xrf6ya",
			$$css: !0
		},
		paddingBottom12: {
			paddingBottom: "xscbp6u",
			$$css: !0
		}
	};
	function p(e) {
		var t = o("react-compiler-runtime").c(39), n = e.answer, a = e.id, i = e.onKnowledgeItemDeleted, l = e.onViewDetail, u = e.question, p = e.source, f = d(!1), g = f[0], h = f[1], y = d(null), C = y[0], b = y[1], v;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (v = function() {
			h(!0);
		}, t[0] = v) : v = t[0];
		var S = v, R;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (R = function() {
			h(!1);
		}, t[1] = R) : R = t[1];
		var L = R, E = function(t) {
			$ && x(!D), b(t);
		}, k = d(!1), I = k[0], T = k[1], D = I, x = T, $ = g || D, P;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (P = { className: "xh8yej3" }, t[2] = P) : P = t[2];
		var N;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (N = [
			m.paddingStart16,
			m.paddingEnd24,
			m.paddingTop12,
			m.paddingBottom12,
			m.hoverStyle
		], t[3] = N) : N = t[3];
		var M;
		t[4] !== a || t[5] !== l ? (M = function() {
			return l(a);
		}, t[4] = a, t[5] = l, t[6] = M) : M = t[6];
		var w;
		t[7] !== u ? (w = s._(
			/*BTDS*/
			"",
			[s._param("question", u)]
		), t[7] = u, t[8] = w) : w = t[8];
		var A;
		t[9] !== w ? (A = c.jsx(o("WAWebText.react").WAWebTextSmall, {
			xstyle: m.knowledgeEntryQuestion,
			children: w
		}), t[9] = w, t[10] = A) : A = t[10];
		var F;
		t[11] !== n ? (F = s._(
			/*BTDS*/
			"",
			[s._param("answer", n)]
		), t[11] = n, t[12] = F) : F = t[12];
		var O;
		t[13] !== F ? (O = c.jsx(o("WAWebText.react").WAWebTextTitle, {
			xstyle: m.knowledgeEntryAnswer,
			children: F
		}), t[13] = F, t[14] = O) : O = t[14];
		var B;
		t[15] !== O || t[16] !== M || t[17] !== A ? (B = c.jsx(o("WAWebFlex.react").FlexItem, { children: c.jsxs(o("WAWebClickable.react").Clickable, {
			onClick: M,
			children: [A, O]
		}) }), t[15] = O, t[16] = M, t[17] = A, t[18] = B) : B = t[18];
		var W = g ? 1 : 0, q;
		t[19] !== W ? (q = {
			opacity: W,
			transition: "opacity 0.2s ease-in-out"
		}, t[19] = W, t[20] = q) : q = t[20];
		var U;
		t[21] === Symbol.for("react.memo_cache_sentinel") ? (U = c.jsx(o("WAWebIcChevronDownMenuIcon.react").IcChevronDownMenuIcon, {}), t[21] = U) : U = t[21];
		var V;
		t[22] !== E ? (V = c.jsx(o("WAWebClickable.react").Clickable, {
			onClick: E,
			tabIndex: 0,
			children: U
		}), t[22] = E, t[23] = V) : V = t[23];
		var H;
		t[24] !== C || t[25] !== a || t[26] !== D || t[27] !== i || t[28] !== l || t[29] !== x || t[30] !== p ? (H = D && C != null && c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "MsgContextMenu",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: function() {
				return x(!1);
			},
			children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: {
				menu: c.jsx(_, {
					id: a,
					source: p,
					onKnowledgeItemDeleted: i,
					onViewDetail: l
				}),
				anchor: C.target
			} })
		}), t[24] = C, t[25] = a, t[26] = D, t[27] = i, t[28] = l, t[29] = x, t[30] = p, t[31] = H) : H = t[31];
		var G;
		t[32] !== q || t[33] !== V || t[34] !== H ? (G = c.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: m.dropDownMenu,
			children: c.jsxs("div", {
				style: q,
				children: [V, H]
			})
		}), t[32] = q, t[33] = V, t[34] = H, t[35] = G) : G = t[35];
		var z;
		return t[36] !== B || t[37] !== G ? (z = c.jsx("div", babelHelpers.extends({
			onMouseEnter: S,
			onMouseLeave: L
		}, P, { children: c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: N,
			children: [B, G]
		}) })), t[36] = B, t[37] = G, t[38] = z) : z = t[38], z;
	}
	function _(t) {
		var a = o("react-compiler-runtime").c(18), i = t.id, l = t.onKnowledgeItemDeleted, u = t.onViewDetail, d = t.source, m;
		a[0] !== i || a[1] !== u ? (m = function() {
			return u(i);
		}, a[0] = i, a[1] = u, a[2] = m) : m = a[2];
		var p, _;
		a[3] === Symbol.for("react.memo_cache_sentinel") ? (p = c.jsx(r("WDSIconIcVisibility.react"), {}), _ = s._(
			/*BTDS*/
			""
		), a[3] = p, a[4] = _) : (p = a[3], _ = a[4]);
		var f;
		a[5] !== m ? (f = c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
			testid: "wa-biz-ai-knowledge-view",
			action: m,
			icon: p,
			children: _
		}, "view"), a[5] = m, a[6] = f) : f = a[6];
		var g;
		a[7] !== i || a[8] !== l || a[9] !== d ? (g = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var t = yield o("WAWebBizAiKnowledgeReviewDeleteMutation").deletePendingData(i, d);
				if (!t) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["biz_ai: knowledge review delete failed"]))).sendLogs("biz-ai-knowledge-review-delete"), o("WAWebBizAiSaveUtils").showErrorToast();
					return;
				}
				l(i);
			});
			return function() {
				return t.apply(this, arguments);
			};
		})(), a[7] = i, a[8] = l, a[9] = d, a[10] = g) : g = a[10];
		var h;
		a[11] === Symbol.for("react.memo_cache_sentinel") ? (h = c.jsx(o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon, {}), a[11] = h) : h = a[11];
		var y;
		a[12] === Symbol.for("react.memo_cache_sentinel") ? (y = s._(
			/*BTDS*/
			""
		), a[12] = y) : y = a[12];
		var C;
		a[13] !== g ? (C = c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
			testid: "wa-biz-ai-knowledge-delete",
			action: g,
			icon: h,
			theme: o("WAWebDropdownItem.react").DropdownItemThemeType.Negative,
			children: y
		}, "delete"), a[13] = g, a[14] = C) : C = a[14];
		var b;
		return a[15] !== f || a[16] !== C ? (b = c.jsxs(c.Fragment, { children: [f, C] }), a[15] = f, a[16] = C, a[17] = b) : b = a[17], b;
	}
	l.default = p;
}), 226);
