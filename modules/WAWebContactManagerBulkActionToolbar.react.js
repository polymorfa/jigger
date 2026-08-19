__d("WAWebContactManagerBulkActionToolbar.react", [
	"fbt",
	"WAWebAccessibility.react",
	"WAWebClickable.react",
	"WAWebContactManagerListViewColumnWidths",
	"WAWebLabelCollection",
	"WAWebLabelGetters",
	"WAWebLeadStage",
	"WAWebLeadStageNames",
	"WAWebSchemaLabel",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSMenu.react",
	"WDSMenuBarItem.react",
	"WDSMenuItem.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useMemo, p = d.useRef, _ = {
		alignItems: "x6s0dn4",
		display: "x78zum5",
		flexShrink: "x2lah0s",
		justifyContent: "xl56j7k",
		$$css: !0
	}, f = {
		closeSlot: function(t) {
			return [
				_,
				{
					width: t != null ? "x5lhr3w" : t,
					$$css: !0
				},
				{ "--x-width": (function(e) {
					return typeof e == "number" ? e + "px" : e != null ? e : void 0;
				})(t) }
			];
		},
		colorDot: {
			width: "x1dmbnle",
			height: "xkb9736",
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		addToListMenuItem: {
			alignItems: "x6s0dn4",
			borderStartStartRadius: "xlr9sxt",
			borderStartEndRadius: "xvvg52n",
			borderEndEndRadius: "xwd4zgb",
			borderEndStartRadius: "xq8v1ta",
			columnGap: "x1s70e7g",
			cursor: "x1ypdohk",
			display: "x78zum5",
			flexDirection: "x1q0g3np",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			":hover_backgroundColor": "x1ubxc9n",
			$$css: !0
		}
	}, g = { bgColor: function(t) {
		return [{
			backgroundColor: t != null ? "xl8spv7" : t,
			$$css: !0
		}, { "--x-backgroundColor": t != null ? t : void 0 }];
	} };
	function h(t) {
		var n = o("react-compiler-runtime").c(43), a = t.onAddToList, i = t.onExit, l = t.onSetStage, u = t.selectedCount, d = p(null), m = p(null), _;
		n[0] !== l ? (_ = o("WAWebLeadStage").LEAD_STAGE_ORDER.map(function(e) {
			return c.jsx(r("WDSMenuItem.react"), {
				onPress: function() {
					return l(e);
				},
				testid: "customer_manager_bulk_set_stage_option_" + e,
				title: o("WAWebLeadStageNames").getLeadStageName(e)
			}, e);
		}), n[0] = l, n[1] = _) : _ = n[1];
		var h;
		n[2] !== _ ? (h = c.jsx(r("WDSMenu.react"), { children: _ }), n[2] = _, n[3] = h) : h = n[3];
		var C = h, b;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (b = o("WAWebLabelCollection").LabelCollection.getActiveLists().filter(y), n[4] = b) : b = n[4];
		var v = b, S;
		n[5] !== a ? (S = v.map(function(t) {
			var n = o("WAWebLabelGetters").getHexColor(t);
			return c.jsxs(o("WAWebClickable.react").Clickable, {
				dataTestId: "customer_manager_bulk_add_to_list_option_" + t.id,
				onClick: function() {
					return a(t.id);
				},
				role: "menuitem",
				xstyle: f.addToListMenuItem,
				children: [n != null && c.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(f.colorDot, g.bgColor(n)), {
					"aria-hidden": !0,
					"data-color": n,
					"data-testid": "customer_manager_bulk_add_to_list_color_" + t.id
				})), c.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDefault",
					maxLines: 1,
					children: t.name
				})]
			}, t.id);
		}), n[5] = a, n[6] = S) : S = n[6];
		var R;
		n[7] !== S ? (R = c.jsx(r("WDSMenu.react"), { children: S }), n[7] = S, n[8] = R) : R = n[8];
		var L = R, E;
		n[9] !== C ? (E = {
			targetRef: d,
			menu: C
		}, n[9] = C, n[10] = E) : E = n[10];
		var k = r("useWDSMenu")(E), I = k.closeMenu, T = k.isMenuOpen, D = k.menuPortal, x = k.openMenu, $;
		n[11] !== L ? ($ = {
			targetRef: m,
			menu: L
		}, n[11] = L, n[12] = $) : $ = n[12];
		var P = r("useWDSMenu")($), N = P.closeMenu, M = P.isMenuOpen, w = P.menuPortal, A = P.openMenu, F;
		n[13] === Symbol.for("react.memo_cache_sentinel") ? (F = s._(
			/*BTDS*/
			""
		), n[13] = F) : F = n[13];
		var O = F, B;
		n[14] !== I || n[15] !== T || n[16] !== x ? (B = function() {
			T ? I() : x();
		}, n[14] = I, n[15] = T, n[16] = x, n[17] = B) : B = n[17];
		var W = B, q;
		n[18] !== N || n[19] !== M || n[20] !== A ? (q = function() {
			M ? N() : A();
		}, n[18] = N, n[19] = M, n[20] = A, n[21] = q) : q = n[21];
		var U = q, V;
		n[22] === Symbol.for("react.memo_cache_sentinel") ? (V = { className: "x6s0dn4 x1h3rtpe x1s70e7g x78zum5 x2lah0s x1qughib x16ovd2e x12xbjc7 xvtqlqk x12w63v0" }, n[22] = V) : V = n[22];
		var H, G;
		n[23] === Symbol.for("react.memo_cache_sentinel") ? (H = c.jsx(o("WAWebAccessibility.react").InvisibleAnnouncement, { text: O }), G = (e || (e = r("stylex"))).props(f.closeSlot(o("WAWebContactManagerListViewColumnWidths").SELECT_COLUMN_WIDTH_PX)), n[23] = H, n[24] = G) : (H = n[23], G = n[24]);
		var z;
		n[25] === Symbol.for("react.memo_cache_sentinel") ? (z = s._(
			/*BTDS*/
			""
		), n[25] = z) : z = n[25];
		var j;
		n[26] !== i ? (j = c.jsx("div", babelHelpers.extends({}, G, { children: c.jsx(r("WDSMenuBarItem.react"), {
			testid: "customer_manager_bulk_action_close",
			icon: r("WDSIconIcClose.react"),
			title: z,
			onClick: i
		}) })), n[26] = i, n[27] = j) : j = n[27];
		var K;
		n[28] === Symbol.for("react.memo_cache_sentinel") ? (K = { className: "x1iyjqo2" }, n[28] = K) : K = n[28];
		var Q;
		n[29] !== u ? (Q = c.jsx("span", babelHelpers.extends({
			role: "status",
			"aria-live": "polite",
			"aria-atomic": "true"
		}, K, { children: c.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			colorName: "contentDefault",
			children: s._(
				/*BTDS*/
				"",
				[s._plural(u, "number")]
			)
		}) })), n[29] = u, n[30] = Q) : Q = n[30];
		var X;
		n[31] !== w || n[32] !== U || n[33] !== W || n[34] !== M || n[35] !== T || n[36] !== D || n[37] !== u ? (X = u > 0 && c.jsxs("div", {
			className: "x6s0dn4 x1s70e7g x78zum5",
			"data-testid": "customer_manager_bulk_action_group",
			children: [c.jsxs("div", {
				className: "x6s0dn4 x78zum5",
				children: [c.jsx(r("WDSButton.react"), {
					"aria-expanded": M,
					"aria-haspopup": "menu",
					disabled: v.length === 0,
					label: s._(
						/*BTDS*/
						""
					),
					onPress: U,
					ref: m,
					size: "small",
					testid: "customer_manager_bulk_action_add_to_list",
					type: "default",
					variant: "tonal"
				}), w]
			}), c.jsxs("div", {
				className: "x6s0dn4 x78zum5",
				children: [c.jsx(r("WDSButton.react"), {
					"aria-expanded": T,
					"aria-haspopup": "menu",
					label: s._(
						/*BTDS*/
						""
					),
					onPress: W,
					ref: d,
					size: "small",
					testid: "customer_manager_bulk_action_set_stage",
					type: "default",
					variant: "tonal"
				}), D]
			})]
		}), n[31] = w, n[32] = U, n[33] = W, n[34] = M, n[35] = T, n[36] = D, n[37] = u, n[38] = X) : X = n[38];
		var Y;
		return n[39] !== j || n[40] !== Q || n[41] !== X ? (Y = c.jsxs("div", babelHelpers.extends({}, V, {
			"data-testid": "customer_manager_bulk_action_toolbar",
			children: [
				H,
				j,
				Q,
				X
			]
		})), n[39] = j, n[40] = Q, n[41] = X, n[42] = Y) : Y = n[42], Y;
	}
	function y(e) {
		return e.type === o("WAWebSchemaLabel").ListType.CUSTOM;
	}
	l.default = h;
}), 226);
