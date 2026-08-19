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
		var t = e.deleting, n = t === void 0 ? !1 : t, a = e.flow, i = e.index, l = e.momentLabel, c = e.onDelete, m = e.onEdit, p = e.onViewResponses, f = e.responseCount, g = y(!1), b = g[0], v = g[1], S = y(!1), R = S[0], L = S[1], E = y(null), k = E[0], I = E[1], T = h(null), D = h(null), x = !n && (b || R || k != null), $ = _(function() {
			v(!0);
		}, []), P = _(function() {
			v(!1);
		}, []), N = _(function() {
			L(!0);
		}, []), M = _(function(e) {
			D.current != null && e.relatedTarget instanceof Node && D.current.contains(e.relatedTarget) || L(!1);
		}, []), w = _(function(e) {
			var t, n = (t = T.current) != null ? t : D.current;
			n != null && I({
				anchor: n,
				autoFocus: e,
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
		}, [
			i,
			c,
			m
		]), A = _(function(e) {
			e.stopPropagation(), w();
		}, [w]), F = _(function() {
			I(null);
		}, []);
		return d.jsxs(d.Fragment, { children: [d.jsxs("div", babelHelpers.extends({
			ref: D,
			"data-testid": "biz-ai-lead-gen-flow-item-" + i,
			role: "button",
			tabIndex: 0,
			onClick: p,
			onKeyDown: function(t) {
				(t.key === "Enter" || t.key === " ") && t.currentTarget === t.target ? (t.preventDefault(), p()) : t.currentTarget === t.target && (t.key === "ContextMenu" || t.shiftKey && t.key === "F10" || t.key === "ArrowDown") && (t.preventDefault(), w(!0));
			},
			onFocus: N,
			onBlur: M,
			onMouseEnter: $,
			onMouseLeave: P
		}, (u || (u = r("stylex"))).props(C.fieldRow, C.fieldRowHover, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus), { children: [
			d.jsxs("div", {
				className: "x98rzlu xeuugli x6ikm8r x10wlt62",
				children: [d.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					type: "Body1",
					maxLines: 1,
					children: l
				}), d.jsx(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					type: "Body2",
					children: s._(
						/*BTDS*/
						"",
						[s._plural(f, "number")]
					)
				})]
			}),
			a.has_unseen_lead_data === !0 ? d.jsx("div", {
				"aria-label": s._(
					/*BTDS*/
					""
				),
				"data-testid": "biz-ai-lead-gen-flow-unseen-dot",
				role: "img",
				className: "x1qe8gl4 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x2lah0s xdk7pt x1xc55vz"
			}) : null,
			n ? d.jsx("span", {
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
						onPress: A,
						variant: "borderless",
						size: "small",
						"aria-label": s._(
							/*BTDS*/
							""
						).toString(),
						testid: "biz-ai-lead-gen-flow-item-" + i + "-menu-btn"
					})
				}, "menu-btn") : null
			})
		] })), k != null && d.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "FlowItemContextMenu",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: F,
			children: d.jsx(r("WAWebUimUieMenu.react"), { contextMenu: {
				anchor: k.anchor,
				autoFocus: k.autoFocus,
				menu: k.menu
			} })
		})] });
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.onBack, n = e.onRefresh, a = e.onRetry, i = e.onViewResponses, l = e.queryRef, u = e.queryVersion, c = u === void 0 ? 0 : u, m = e.ref;
		f(function() {
			o("WAWebBizAILargeScreensLogEvents").logViewLeadGenList();
		}, []);
		var g = y([]), h = g[0], b = g[1], v = _(function() {
			o("WAWebBizAIModal").openBizAIModal(d.jsx(r("WAWebBizAILeadGenCreateDrawer.react"), {
				existingFlows: h,
				onBack: o("WAWebModalManager").closeModalManager,
				onSaved: function() {
					o("WAWebModalManager").ModalManager.close(), n();
				}
			}));
		}, [h, n]), R = d.jsxs(d.Fragment, { children: [d.jsx("div", {
			"data-testid": "biz-ai-lead-gen-loading-row",
			className: "x4wrhlh xyi3aci xwf5gio x1p453bz x1suzm8a x1380le5 xefnzgg xvkrg5o"
		}), d.jsx("div", {
			"aria-hidden": !0,
			className: "x4wrhlh xyi3aci xwf5gio x1p453bz x1suzm8a x1380le5 xefnzgg xvkrg5o"
		})] });
		return d.jsxs(r("WAWebDrawer.react"), {
			ref: m,
			testid: "biz-ai-lead-gen-list-drawer",
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: t,
				rightActionElement: d.jsx("span", { children: d.jsx(r("WDSTooltip.react"), {
					label: s._(
						/*BTDS*/
						""
					),
					children: d.jsx(r("WDSButton.react"), {
						Icon: r("WDSIconIcAdd.react"),
						onPress: v,
						variant: "borderless",
						size: "small",
						"aria-label": s._(
							/*BTDS*/
							""
						).toString(),
						testid: "biz-ai-lead-gen-add-btn"
					})
				}) })
			}), d.jsxs(r("WAWebDrawerBody.react"), {
				xstyle: C.body,
				children: [d.jsx("div", {
					"data-testid": "biz-ai-lead-gen-section-header",
					className: "x6s0dn4 x78zum5 xvkrg5o xvtqlqk x1phvje8",
					children: d.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Body1Emphasized",
						children: s._(
							/*BTDS*/
							""
						)
					})
				}), d.jsx(r("WAWebBizAIQueryBoundary.react"), {
					boundaryName: "biz-ai-lead-gen-list",
					onRetry: a,
					queryVersion: c,
					testid: "biz-ai-lead-gen-list-error",
					children: d.jsx(p, {
						fallback: R,
						children: l != null ? d.jsx(S, {
							onCreateFlow: v,
							onFlowsChange: b,
							onRefresh: n,
							onRetry: a,
							onViewResponses: i,
							queryRef: l
						}) : R
					})
				})]
			})]
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t = e.onCreateFlow, n = e.onFlowsChange, a = e.onRefresh, i = e.onRetry, l = e.onViewResponses, u = e.queryRef, c = o("CometRelay").usePreloadedQuery(R, u), m = r("useWAWebBizAIQueryRefreshError")(u.source), p = g(function() {
			var e;
			return (e = c.xfb_maiba_gen_lead_gen_flow) != null ? e : [];
		}, [c.xfb_maiba_gen_lead_gen_flow]);
		f(function() {
			n(p);
		}, [p, n]);
		var h = y(new Set()), C = h[0], v = h[1], S = _(function(e) {
			o("WAWebBizAIModal").openBizAIModal(d.jsx(r("WAWebBizAILeadGenEditFieldsModal.react"), {
				flowRef: e,
				onBack: o("WAWebModalManager").closeModalManager,
				onSaved: function() {
					o("WAWebModalManager").ModalManager.close(), a();
				}
			}));
		}, [a]), L = _(function(e) {
			var t = e.id;
			if (t != null) {
				v(function(e) {
					return e.has(t) ? e : new Set(e).add(t);
				});
				var n = function() {
					v(function(e) {
						if (!e.has(t)) return e;
						var n = new Set(e);
						return n.delete(t), n;
					});
				};
				o("WAWebBizAiLeadGenDeleteMutation").deleteLeadGenFlow(t).then(function(e) {
					o("WAWebBizAILargeScreensLogEvents").logApiDeleteLeadGenFormResult(e.isSuccess), e.isSuccess ? a() : o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
				}).catch(function() {
					o("WAWebBizAILargeScreensLogEvents").logApiDeleteLeadGenFormResult(!1), o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
				}).finally(n);
			}
		}, [a]), E = function(t) {
			var e, n = s._(
				/*BTDS*/
				""
			);
			return t.moment_type === "CUSTOM_MOMENT" ? (e = t.custom_moment) != null ? e : n : t.moment_type === "READY_TO_BUY" ? s._(
				/*BTDS*/
				""
			) : t.moment_type === "NEW_CHAT_BEGINS" ? s._(
				/*BTDS*/
				""
			) : n;
		}, k = function(t) {
			var e;
			return (e = t.num_of_lead_data) != null ? e : 0;
		};
		return d.jsxs(d.Fragment, { children: [
			m && i != null ? d.jsx(r("WAWebBizAIQueryRefreshBanner.react"), {
				onRetry: i,
				testid: "biz-ai-lead-gen-list-refresh"
			}) : null,
			p.length === 0 ? d.jsx("div", {
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
			}) : p.map(function(e, t) {
				var n;
				return d.jsx(b, {
					deleting: e.id != null && C.has(e.id),
					flow: e,
					index: t,
					momentLabel: E(e),
					responseCount: k(e),
					onViewResponses: function() {
						return l(e);
					},
					onEdit: function() {
						return S(e);
					},
					onDelete: function() {
						return L(e);
					}
				}, (n = e.id) != null ? n : "lead-gen-flow-" + t);
			}),
			d.jsx("div", {
				className: "x9f619 x78zum5 x16ovd2e x1phvje8 xcldk2z xh8yej3",
				children: d.jsx(r("WDSButton.react"), {
					variant: "outline",
					size: "medium",
					widthMode: "flexible",
					Icon: r("WDSIconIcAdd.react"),
					label: p.length === 0 ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					),
					onPress: t,
					testid: "biz-ai-lead-gen-ask-more-info-btn"
				})
			})
		] });
	}
	S.displayName = S.name + " [from " + i.id + "]";
	var R = e !== void 0 ? e : e = n("WAWebBizAILeadGenListDrawerQuery.graphql");
	l.WAWebBizAILeadGenListDrawer = v, l.LeadGenListDrawerQuery = R;
}), 226);
