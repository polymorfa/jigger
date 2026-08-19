__d("WAWebBizAILeadGenResponsesDrawer.react", [
	"fbt",
	"CometRelay",
	"WAWebBizAILargeScreensLogEvents",
	"WAWebBizAILeadGenEditFieldsModal.react",
	"WAWebBizAILeadGenResponsesDrawer_flow.graphql",
	"WAWebBizAILeadGenUtils",
	"WAWebBizAIModal",
	"WAWebBizAiLeadGenDeleteMutation",
	"WAWebBizAiLeadGenMarkAllSeenMutation",
	"WAWebDetailImage.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDropdownItem.react",
	"WAWebFrontendContactGetters",
	"WAWebModalManager",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WDSButton.react",
	"WDSIconIcCheckCircleFilled.react",
	"WDSIconIcDelete.react",
	"WDSIconIcEdit.react",
	"WDSIconIcMoreVert.react",
	"WDSText.react",
	"compactMap",
	"react",
	"useWAWebContactValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useMemo, f = d.useRef, g = d.useState, h = { body: {
		paddingInlineStart: "x1iw51ew",
		paddingInlineEnd: "xde1mab",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} };
	function y() {
		o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) }));
	}
	function C(e) {
		if (e == null) return "";
		var t = new Date(e * 1e3), n = t.toLocaleDateString(void 0, {
			day: "numeric",
			month: "long",
			year: "numeric"
		});
		return s._(
			/*BTDS*/
			"",
			[s._param("date", n)]
		);
	}
	function b(e) {
		var t, n, a, i, l = e.data, u = e.index, d = e.markedAllRead, p = e.onViewResponseDetail, f = _(function() {
			var e, t;
			return o("WAWebBizAILeadGenUtils").getConsumerWid((e = l.consumer_uid) == null ? void 0 : e.pn, (t = l.consumer_uid) == null ? void 0 : t.lid);
		}, [(t = l.consumer_uid) == null ? void 0 : t.pn, (n = l.consumer_uid) == null ? void 0 : n.lid]), g = (a = o("useWAWebContactValues").useOptionalContactValues(f, [o("WAWebFrontendContactGetters").getDisplayName])) != null ? a : [], h = g[0], y = (i = h != null ? h : f == null ? void 0 : f.user) != null ? i : s._(
			/*BTDS*/
			""
		), b = m(function() {
			p(l);
		}, [l, p]);
		return c.jsxs("div", {
			"data-testid": "lead-gen-response-item-" + u,
			role: "button",
			tabIndex: 0,
			"aria-label": s._(
				/*BTDS*/
				"",
				[s._param("name", y)]
			).toString(),
			onClick: b,
			onKeyDown: function(t) {
				(t.key === "Enter" || t.key === " ") && (t.preventDefault(), b());
			},
			className: "x6s0dn4 xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x78zum5 x8a3fw1 x1aj3ljl x16ovd2e x12xbjc7 xvtqlqk x1phvje8 x1ubxc9n",
			children: [
				f != null ? c.jsx("div", {
					className: "x2lah0s",
					children: c.jsx(o("WAWebDetailImage.react").DetailImage, {
						id: f,
						size: o("WAWebDetailImage.react").DetailImageSize.ExtraSmall
					})
				}) : null,
				c.jsxs("div", {
					className: "x1iyjqo2 xeuugli x6ikm8r x10wlt62",
					children: [c.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Body1",
						maxLines: 1,
						children: y
					}), c.jsx(r("WDSText.react"), {
						colorName: "contentDeemphasized",
						type: "Body2",
						children: C(l.creation_time)
					})]
				}),
				l.has_seen !== !0 && d !== !0 ? c.jsx("div", { className: "x1qe8gl4 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x2lah0s xdk7pt x1xc55vz" }) : null
			]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(t) {
		var a = t.flowRef, i = t.onBack, l = t.onViewResponseDetail, u = t.ref, d = o("CometRelay").useFragment(e !== void 0 ? e : e = n("WAWebBizAILeadGenResponsesDrawer_flow.graphql"), a);
		p(function() {
			o("WAWebBizAILargeScreensLogEvents").logViewLeadGenCustomerInfoList();
		}, []);
		var C = g(!1), v = C[0], S = C[1], R = g(null), L = R[0], E = R[1], k = f(null), I = f(!1), T = f(!1), D = m(function() {
			o("WAWebBizAIModal").openBizAIModal(c.jsx(r("WAWebBizAILeadGenEditFieldsModal.react"), {
				flowRef: d,
				onBack: o("WAWebModalManager").closeModalManager,
				onSaved: o("WAWebModalManager").closeModalManager
			}));
		}, [d]), x = _(function() {
			var e, t;
			return r("compactMap")((e = (t = d.lead_data) == null ? void 0 : t.edges) != null ? e : [], function(e) {
				return e == null ? void 0 : e.node;
			});
		}, [d.lead_data]), $ = d.moment_type === "READY_TO_BUY" ? s._(
			/*BTDS*/
			""
		) : d.moment_type === "NEW_CHAT_BEGINS" ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), P = !v && x.some(function(e) {
			return e.has_seen !== !0;
		}), N = m(function() {
			d.id == null || I.current || (I.current = !0, o("WAWebBizAiLeadGenMarkAllSeenMutation").markAllLeadGenDataAsSeenForFlow(d.id).then(function(e) {
				o("WAWebBizAILargeScreensLogEvents").logApiMarkAllSeenResult(e.isSuccess), e.isSuccess ? (S(!0), o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }))) : y();
			}).catch(function() {
				o("WAWebBizAILargeScreensLogEvents").logApiMarkAllSeenResult(!1), y();
			}).finally(function() {
				I.current = !1;
			}));
		}, [d.id]), M = m(function() {
			d.id == null || T.current || (T.current = !0, o("WAWebBizAiLeadGenDeleteMutation").deleteLeadGenFlow(d.id).then(function(e) {
				o("WAWebBizAILargeScreensLogEvents").logApiDeleteLeadGenFormResult(e.isSuccess), e.isSuccess ? i() : y();
			}).catch(function() {
				o("WAWebBizAILargeScreensLogEvents").logApiDeleteLeadGenFormResult(!1), y();
			}).finally(function() {
				T.current = !1;
			}));
		}, [d.id, i]), w = m(function(e) {
			var t = k.current;
			t != null && E({
				anchor: t,
				autoFocus: e,
				menu: c.jsxs(c.Fragment, { children: [
					c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
						action: function() {
							N(), E(null);
						},
						disabled: !P,
						icon: c.jsx(r("WDSIconIcCheckCircleFilled.react"), {}),
						testid: "lead-gen-mark-all-read",
						children: s._(
							/*BTDS*/
							""
						)
					}),
					c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
						action: function() {
							D(), E(null);
						},
						icon: c.jsx(r("WDSIconIcEdit.react"), {}),
						testid: "lead-gen-edit-flow",
						children: s._(
							/*BTDS*/
							""
						)
					}),
					c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
						action: function() {
							M(), E(null);
						},
						icon: c.jsx(r("WDSIconIcDelete.react"), {}),
						theme: o("WAWebDropdownItem.react").DropdownItemThemeType.Negative,
						testid: "lead-gen-delete-flow",
						children: s._(
							/*BTDS*/
							""
						)
					})
				] })
			});
		}, [
			M,
			D,
			N,
			P
		]), A = m(function() {
			w();
		}, [w]), F = m(function() {
			E(null);
		}, []);
		return c.jsxs(r("WAWebDrawer.react"), {
			ref: u,
			testid: "biz-ai-lead-gen-responses-drawer",
			children: [
				c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: $,
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
					onBack: i,
					rightActionElement: c.jsx("span", {
						ref: k,
						children: c.jsx(r("WDSButton.react"), {
							Icon: r("WDSIconIcMoreVert.react"),
							onPress: A,
							variant: "borderless",
							size: "small",
							"aria-label": s._(
								/*BTDS*/
								""
							).toString(),
							testid: "lead-gen-more-menu-btn"
						})
					})
				}),
				L != null && c.jsx(o("WAWebUimUie.react").UIE, {
					displayName: "ResponsesDrawerMenu",
					escapable: !0,
					popable: !0,
					dismissOnWindowResize: !0,
					requestDismiss: F,
					children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: {
						anchor: L.anchor,
						autoFocus: L.autoFocus,
						menu: L.menu
					} })
				}),
				c.jsxs(r("WAWebDrawerBody.react"), {
					xstyle: h.body,
					children: [
						c.jsx("div", {
							className: "x1nbhmlj x1xrf6ya x1iw51ew xde1mab",
							children: c.jsx(r("WDSText.react"), {
								colorName: "contentDefault",
								type: "Body1Emphasized",
								children: s._(
									/*BTDS*/
									""
								)
							})
						}),
						c.jsx("div", {
							className: "x12xbjc7 x1iw51ew xde1mab",
							children: c.jsx(r("WDSText.react"), {
								colorName: "contentDeemphasized",
								type: "Body3",
								children: s._(
									/*BTDS*/
									""
								)
							})
						}),
						x.length === 0 ? c.jsx("div", {
							className: "x1h678fw xv6tirj x1iw51ew xde1mab x2b8uid",
							children: c.jsx(r("WDSText.react"), {
								colorName: "contentDeemphasized",
								type: "Body2",
								children: s._(
									/*BTDS*/
									""
								)
							})
						}) : x.map(function(e, t) {
							var n;
							return c.jsx(b, {
								data: e,
								index: t,
								markedAllRead: v,
								onViewResponseDetail: l
							}, (n = e.id) != null ? n : String(t));
						})
					]
				})
			]
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = v;
}), 226);
