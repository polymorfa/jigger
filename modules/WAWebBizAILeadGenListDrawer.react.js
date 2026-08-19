__d("WAWebBizAILeadGenListDrawer.react", [
	"fbt",
	"CometRelay",
	"WAWebBizAILargeScreensLogEvents",
	"WAWebBizAILeadGenCreateDrawer.react",
	"WAWebBizAILeadGenEditFieldsModal.react",
	"WAWebBizAILeadGenListDrawerQuery.graphql",
	"WAWebBizAIModal",
	"WAWebBizAIQueryBoundary.react",
	"WAWebBizAIQueryRefreshBanner.react",
	"WAWebBizAiLeadGenDeleteMutation",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDropdownItem.react",
	"WAWebModalManager",
	"WAWebSpinner.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebVelocityTransitionGroup",
	"WDSButton.react",
	"WDSFocusStateStyles",
	"WDSIconIcAdd.react",
	"WDSIconIcDelete.react",
	"WDSIconIcEdit.react",
	"WDSIconIcMoreVert.react",
	"WDSText.react",
	"WDSTooltip.react",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebBizAIQueryRefreshError"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c, p = m.Suspense, _ = m.useCallback, f = m.useEffect, g = m.useMemo, h = m.useRef, y = m.useState, C = {
		body: {
			paddingInlineStart: "x1iw51ew",
			paddingInlineEnd: "xde1mab",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		fieldRow: {
			alignItems: "x6s0dn4",
			alignSelf: "xkh2ocl",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			cursor: "x1ypdohk",
			display: "x78zum5",
			rowGap: "x8a3fw1",
			columnGap: "x1aj3ljl",
			minHeight: "xvkrg5o",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineEnd: "xvtqlqk",
			paddingInlineStart: "x1phvje8",
			$$css: !0
		},
		fieldRowHover: {
			":hover_backgroundColor": "x1ubxc9n",
			$$css: !0
		}
	};
	function b(e) {
		var t = o("react-compiler-runtime").c(42), n = e.deleting, a = e.flow, i = e.index, l = e.momentLabel, c = e.onDelete, m = e.onEdit, p = e.onViewResponses, _ = e.responseCount, f = n === void 0 ? !1 : n, g = y(!1), b = g[0], v = g[1], S = y(!1), R = S[0], L = S[1], E = y(null), k = E[0], I = E[1], T = h(null), D = h(null), x = !f && (b || R || k != null), $;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? ($ = function() {
			v(!0);
		}, t[0] = $) : $ = t[0];
		var P = $, N;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (N = function() {
			v(!1);
		}, t[1] = N) : N = t[1];
		var M = N, w;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (w = function() {
			L(!0);
		}, t[2] = w) : w = t[2];
		var A = w, F;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (F = function(t) {
			D.current != null && t.relatedTarget instanceof Node && D.current.contains(t.relatedTarget) || L(!1);
		}, t[3] = F) : F = t[3];
		var O = F, B;
		t[4] !== i || t[5] !== c || t[6] !== m ? (B = function(t) {
			var e, n = (e = T.current) != null ? e : D.current;
			n != null && I({
				anchor: n,
				autoFocus: t,
				menu: d.jsxs(d.Fragment, { children: [d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					action: function() {
						m(), I(null);
					},
					icon: d.jsx(r("WDSIconIcEdit.react"), {}),
					testid: "biz-ai-lead-gen-flow-item-" + i + "-edit",
					children: s._(
						/*BTDS*/
						""
					)
				}), d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					action: function() {
						c(), I(null);
					},
					icon: d.jsx(r("WDSIconIcDelete.react"), {}),
					theme: o("WAWebDropdownItem.react").DropdownItemThemeType.Negative,
					testid: "biz-ai-lead-gen-flow-item-" + i + "-delete",
					children: s._(
						/*BTDS*/
						""
					)
				})] })
			});
		}, t[4] = i, t[5] = c, t[6] = m, t[7] = B) : B = t[7];
		var W = B, q;
		t[8] !== W ? (q = function(t) {
			t.stopPropagation(), W();
		}, t[8] = W, t[9] = q) : q = t[9];
		var U = q, V;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (V = function() {
			I(null);
		}, t[10] = V) : V = t[10];
		var H = V, G = "biz-ai-lead-gen-flow-item-" + i, z;
		t[11] !== p || t[12] !== W ? (z = function(t) {
			(t.key === "Enter" || t.key === " ") && t.currentTarget === t.target ? (t.preventDefault(), p()) : t.currentTarget === t.target && (t.key === "ContextMenu" || t.shiftKey && t.key === "F10" || t.key === "ArrowDown") && (t.preventDefault(), W(!0));
		}, t[11] = p, t[12] = W, t[13] = z) : z = t[13];
		var j, K;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (j = (u || (u = r("stylex"))).props(C.fieldRow, C.fieldRowHover, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus), K = { className: "x98rzlu xeuugli x6ikm8r x10wlt62" }, t[14] = j, t[15] = K) : (j = t[14], K = t[15]);
		var Q;
		t[16] !== l ? (Q = d.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			maxLines: 1,
			children: l
		}), t[16] = l, t[17] = Q) : Q = t[17];
		var X;
		t[18] !== _ ? (X = d.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			children: s._(
				/*BTDS*/
				"",
				[s._plural(_, "number")]
			)
		}), t[18] = _, t[19] = X) : X = t[19];
		var Y;
		t[20] !== Q || t[21] !== X ? (Y = d.jsxs("div", babelHelpers.extends({}, K, { children: [Q, X] })), t[20] = Q, t[21] = X, t[22] = Y) : Y = t[22];
		var J;
		t[23] !== a.has_unseen_lead_data ? (J = a.has_unseen_lead_data === !0 ? d.jsx("div", {
			"aria-label": s._(
				/*BTDS*/
				""
			),
			"data-testid": "biz-ai-lead-gen-flow-unseen-dot",
			role: "img",
			className: "x1qe8gl4 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x2lah0s xdk7pt x1xc55vz"
		}) : null, t[23] = a.has_unseen_lead_data, t[24] = J) : J = t[24];
		var Z;
		t[25] !== f || t[26] !== U || t[27] !== i || t[28] !== x ? (Z = f ? d.jsx("span", {
			"data-testid": "biz-ai-lead-gen-flow-item-" + i + "-deleting",
			className: "x67bb7w xnpuxes",
			children: d.jsx(o("WAWebSpinner.react").Spinner, {
				color: "default",
				size: 18,
				stroke: 2
			})
		}) : d.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: "pop-fast-chat",
			children: x ? d.jsx("span", {
				ref: T,
				className: "x67bb7w xnpuxes",
				children: d.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcMoreVert.react"),
					onPress: U,
					variant: "borderless",
					size: "small",
					"aria-label": s._(
						/*BTDS*/
						""
					).toString(),
					testid: "biz-ai-lead-gen-flow-item-" + i + "-menu-btn"
				})
			}, "menu-btn") : null
		}), t[25] = f, t[26] = U, t[27] = i, t[28] = x, t[29] = Z) : Z = t[29];
		var ee;
		t[30] !== p || t[31] !== z || t[32] !== Y || t[33] !== J || t[34] !== Z || t[35] !== G ? (ee = d.jsxs("div", babelHelpers.extends({
			ref: D,
			"data-testid": G,
			role: "button",
			tabIndex: 0,
			onClick: p,
			onKeyDown: z,
			onFocus: A,
			onBlur: O,
			onMouseEnter: P,
			onMouseLeave: M
		}, j, { children: [
			Y,
			J,
			Z
		] })), t[30] = p, t[31] = z, t[32] = Y, t[33] = J, t[34] = Z, t[35] = G, t[36] = ee) : ee = t[36];
		var te;
		t[37] !== k ? (te = k != null && d.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "FlowItemContextMenu",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: H,
			children: d.jsx(r("WAWebUimUieMenu.react"), { contextMenu: {
				anchor: k.anchor,
				autoFocus: k.autoFocus,
				menu: k.menu
			} })
		}), t[37] = k, t[38] = te) : te = t[38];
		var ne;
		return t[39] !== ee || t[40] !== te ? (ne = d.jsxs(d.Fragment, { children: [ee, te] }), t[39] = ee, t[40] = te, t[41] = ne) : ne = t[41], ne;
	}
	function v(e) {
		var t = o("react-compiler-runtime").c(31), n = e.onBack, a = e.onRefresh, i = e.onRetry, l = e.onViewResponses, u = e.queryRef, c = e.queryVersion, m = e.ref, _ = c === void 0 ? 0 : c, g;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (g = [], t[0] = g) : g = t[0], f(S, g);
		var h;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (h = [], t[1] = h) : h = t[1];
		var b = y(h), v = b[0], L = b[1], E;
		t[2] !== v || t[3] !== a ? (E = function() {
			o("WAWebBizAIModal").openBizAIModal(d.jsx(r("WAWebBizAILeadGenCreateDrawer.react"), {
				existingFlows: v,
				onBack: o("WAWebModalManager").closeModalManager,
				onSaved: function() {
					o("WAWebModalManager").ModalManager.close(), a();
				}
			}));
		}, t[2] = v, t[3] = a, t[4] = E) : E = t[4];
		var k = E, I;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (I = d.jsx("div", {
			"data-testid": "biz-ai-lead-gen-loading-row",
			className: "x4wrhlh xyi3aci xwf5gio x1p453bz x1suzm8a x1380le5 xefnzgg xvkrg5o"
		}), t[5] = I) : I = t[5];
		var T;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (T = d.jsxs(d.Fragment, { children: [I, d.jsx("div", {
			"aria-hidden": !0,
			className: "x4wrhlh xyi3aci xwf5gio x1p453bz x1suzm8a x1380le5 xefnzgg xvkrg5o"
		})] }), t[6] = T) : T = t[6];
		var D = T, x;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (x = s._(
			/*BTDS*/
			""
		), t[7] = x) : x = t[7];
		var $;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? ($ = s._(
			/*BTDS*/
			""
		), t[8] = $) : $ = t[8];
		var P;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (P = s._(
			/*BTDS*/
			""
		).toString(), t[9] = P) : P = t[9];
		var N;
		t[10] !== k ? (N = d.jsx("span", { children: d.jsx(r("WDSTooltip.react"), {
			label: $,
			children: d.jsx(r("WDSButton.react"), {
				Icon: r("WDSIconIcAdd.react"),
				onPress: k,
				variant: "borderless",
				size: "small",
				"aria-label": P,
				testid: "biz-ai-lead-gen-add-btn"
			})
		}) }), t[10] = k, t[11] = N) : N = t[11];
		var M;
		t[12] !== n || t[13] !== N ? (M = d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: x,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: n,
			rightActionElement: N
		}), t[12] = n, t[13] = N, t[14] = M) : M = t[14];
		var w;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (w = { className: "x6s0dn4 x78zum5 xvkrg5o xvtqlqk x1phvje8" }, t[15] = w) : w = t[15];
		var A;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (A = d.jsx("div", babelHelpers.extends({ "data-testid": "biz-ai-lead-gen-section-header" }, w, { children: d.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1Emphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), t[16] = A) : A = t[16];
		var F;
		t[17] !== k || t[18] !== a || t[19] !== i || t[20] !== l || t[21] !== u ? (F = d.jsx(p, {
			fallback: D,
			children: u != null ? d.jsx(R, {
				onCreateFlow: k,
				onFlowsChange: L,
				onRefresh: a,
				onRetry: i,
				onViewResponses: l,
				queryRef: u
			}) : D
		}), t[17] = k, t[18] = a, t[19] = i, t[20] = l, t[21] = u, t[22] = F) : F = t[22];
		var O;
		t[23] !== i || t[24] !== _ || t[25] !== F ? (O = d.jsxs(r("WAWebDrawerBody.react"), {
			xstyle: C.body,
			children: [A, d.jsx(r("WAWebBizAIQueryBoundary.react"), {
				boundaryName: "biz-ai-lead-gen-list",
				onRetry: i,
				queryVersion: _,
				testid: "biz-ai-lead-gen-list-error",
				children: F
			})]
		}), t[23] = i, t[24] = _, t[25] = F, t[26] = O) : O = t[26];
		var B;
		return t[27] !== m || t[28] !== M || t[29] !== O ? (B = d.jsxs(r("WAWebDrawer.react"), {
			ref: m,
			testid: "biz-ai-lead-gen-list-drawer",
			children: [M, O]
		}), t[27] = m, t[28] = M, t[29] = O, t[30] = B) : B = t[30], B;
	}
	function S() {
		o("WAWebBizAILargeScreensLogEvents").logViewLeadGenList();
	}
	function R(e) {
		var t = o("react-compiler-runtime").c(30), n = e.onCreateFlow, a = e.onFlowsChange, i = e.onRefresh, l = e.onRetry, u = e.onViewResponses, c = e.queryRef, m = o("CometRelay").usePreloadedQuery(I, c), p = r("useWAWebBizAIQueryRefreshError")(c.source), _;
		if (t[0] !== m.xfb_maiba_gen_lead_gen_flow) {
			var g;
			_ = (g = m.xfb_maiba_gen_lead_gen_flow) != null ? g : [], t[0] = m.xfb_maiba_gen_lead_gen_flow, t[1] = _;
		} else _ = t[1];
		var h = _, C, v;
		t[2] !== h || t[3] !== a ? (C = function() {
			a(h);
		}, v = [h, a], t[2] = h, t[3] = a, t[4] = C, t[5] = v) : (C = t[4], v = t[5]), f(C, v);
		var S;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (S = new Set(), t[6] = S) : S = t[6];
		var R = y(S), T = R[0], D = R[1], x;
		t[7] !== i ? (x = function(t) {
			o("WAWebBizAIModal").openBizAIModal(d.jsx(r("WAWebBizAILeadGenEditFieldsModal.react"), {
				flowRef: t,
				onBack: o("WAWebModalManager").closeModalManager,
				onSaved: function() {
					o("WAWebModalManager").ModalManager.close(), i();
				}
			}));
		}, t[7] = i, t[8] = x) : x = t[8];
		var $ = x, P;
		t[9] !== i ? (P = function(t) {
			var e = t.id;
			if (e != null) {
				D(function(t) {
					return t.has(e) ? t : new Set(t).add(e);
				});
				var n = function() {
					D(function(t) {
						if (!t.has(e)) return t;
						var n = new Set(t);
						return n.delete(e), n;
					});
				};
				o("WAWebBizAiLeadGenDeleteMutation").deleteLeadGenFlow(e).then(function(e) {
					o("WAWebBizAILargeScreensLogEvents").logApiDeleteLeadGenFormResult(e.isSuccess), e.isSuccess ? i() : o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
				}).catch(k).finally(n);
			}
		}, t[9] = i, t[10] = P) : P = t[10];
		var N = P, M = E, w = L, A;
		t[11] !== p || t[12] !== l ? (A = p && l != null ? d.jsx(r("WAWebBizAIQueryRefreshBanner.react"), {
			onRetry: l,
			testid: "biz-ai-lead-gen-list-refresh"
		}) : null, t[11] = p, t[12] = l, t[13] = A) : A = t[13];
		var F;
		t[14] !== T || t[15] !== h || t[16] !== N || t[17] !== $ || t[18] !== u ? (F = h.length === 0 ? d.jsx("div", {
			"data-testid": "biz-ai-lead-gen-list-empty",
			className: "x16ovd2e x12xbjc7 xvtqlqk x1phvje8",
			children: d.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}) : h.map(function(e, t) {
			var n;
			return d.jsx(b, {
				deleting: e.id != null && T.has(e.id),
				flow: e,
				index: t,
				momentLabel: M(e),
				responseCount: w(e),
				onViewResponses: function() {
					return u(e);
				},
				onEdit: function() {
					return $(e);
				},
				onDelete: function() {
					return N(e);
				}
			}, (n = e.id) != null ? n : "lead-gen-flow-" + t);
		}), t[14] = T, t[15] = h, t[16] = N, t[17] = $, t[18] = u, t[19] = F) : F = t[19];
		var O;
		t[20] === Symbol.for("react.memo_cache_sentinel") ? (O = { className: "x9f619 x78zum5 x16ovd2e x1phvje8 xcldk2z xh8yej3" }, t[20] = O) : O = t[20];
		var B;
		t[21] !== h.length ? (B = h.length === 0 ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[21] = h.length, t[22] = B) : B = t[22];
		var W;
		t[23] !== n || t[24] !== B ? (W = d.jsx("div", babelHelpers.extends({}, O, { children: d.jsx(r("WDSButton.react"), {
			variant: "outline",
			size: "medium",
			widthMode: "flexible",
			Icon: r("WDSIconIcAdd.react"),
			label: B,
			onPress: n,
			testid: "biz-ai-lead-gen-ask-more-info-btn"
		}) })), t[23] = n, t[24] = B, t[25] = W) : W = t[25];
		var q;
		return t[26] !== W || t[27] !== A || t[28] !== F ? (q = d.jsxs(d.Fragment, { children: [
			A,
			F,
			W
		] }), t[26] = W, t[27] = A, t[28] = F, t[29] = q) : q = t[29], q;
	}
	function L(e) {
		var t;
		return (t = e.num_of_lead_data) != null ? t : 0;
	}
	function E(e) {
		var t, n = s._(
			/*BTDS*/
			""
		);
		return e.moment_type === "CUSTOM_MOMENT" ? (t = e.custom_moment) != null ? t : n : e.moment_type === "READY_TO_BUY" ? s._(
			/*BTDS*/
			""
		) : e.moment_type === "NEW_CHAT_BEGINS" ? s._(
			/*BTDS*/
			""
		) : n;
	}
	function k() {
		o("WAWebBizAILargeScreensLogEvents").logApiDeleteLeadGenFormResult(!1), o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) }));
	}
	var I = e !== void 0 ? e : e = n("WAWebBizAILeadGenListDrawerQuery.graphql");
	l.WAWebBizAILeadGenListDrawer = v, l.LeadGenListDrawerQuery = I;
}), 226);
