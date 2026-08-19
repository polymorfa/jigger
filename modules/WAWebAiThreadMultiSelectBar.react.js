__d("WAWebAiThreadMultiSelectBar.react", [
	"fbt",
	"Promise",
	"WALogger",
	"WAWebBotGating",
	"WAWebConfirmPopup.react",
	"WAWebDeleteAiThreadsAction",
	"WAWebDeleteRefreshedIcon.react",
	"WAWebMenuBar.react",
	"WAWebModalManager",
	"WAWebPinAiThreadAction",
	"WAWebTabOrder",
	"WAWebToast.react",
	"WAWebToastManager",
	"WDSIconIcClose.react",
	"WDSIconIcPushPin.react",
	"WDSIconWdsIcPushPinSlash.react",
	"WDSPaddings.stylex",
	"react",
	"stylex",
	"useWAWebForceUpdate",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p = m || (m = o("react")), _ = { paddingBlock6: {
		paddingTop: "x1yrsyyn",
		paddingBottom: "x10b6aqq",
		$$css: !0
	} }, f = { multiControls: {
		insetInlineStart: "x1o0tod",
		zIndex: "x1yg4o9v",
		boxSizing: "x9f619",
		display: "x78zum5",
		alignItems: "x6s0dn4",
		width: "xh8yej3",
		height: "xy063j7",
		position: "x1n2onr6",
		bottom: "xgxk9ee",
		backgroundColor: "x1h3rtpe",
		borderTopWidth: "x178xt8z",
		borderTopStyle: "x13fuv20",
		borderTopColor: "xx42vgk",
		borderBottomWidth: "xso031l",
		borderBottomStyle: "x1q0q8m5",
		borderBottomColor: "x120ee7l",
		$$css: !0
	} };
	function g(t) {
		"use no forget";
		var a = t.chat, i = t.multiSelection, l = t.onCancel, m = t.ref, g = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), y = i.getSelected(), C = y.length;
		o("useWAWebListener").useListener(i, "all", g);
		var b = y, v = h(b), S = b.length > 0 && v === b.length, R = v === 0, L = b.length - v, E = R && o("WAWebPinAiThreadAction").canPinMoreThreads(a, L), k = function() {
			if (b.length !== 0) {
				var t = b.filter(function(e) {
					var t = e.pinThreadTimestamp;
					return t == null || t <= 0;
				});
				(d || (d = n("Promise"))).all(t.map(function(e) {
					return o("WAWebPinAiThreadAction").pinAiThreadAction(e, a.id);
				})).then(function() {
					l();
				}).catch(function(t) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[ai-thread-multi-select] failed to pin threads"]))).catching(t);
				});
			}
		}, I = function() {
			if (b.length !== 0) {
				var e = b.filter(function(e) {
					var t = e.pinThreadTimestamp;
					return t != null && t > 0;
				});
				(d || (d = n("Promise"))).all(e.map(function(e) {
					return o("WAWebPinAiThreadAction").unpinAiThreadAction(e, a.id);
				})).then(function() {
					l();
				}).catch(function(e) {
					o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[ai-thread-multi-select] failed to unpin threads"]))).catching(e);
				});
			}
		}, T = function() {
			var e = y.length;
			e !== 0 && o("WAWebModalManager").ModalManager.open(p.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				title: s._(
					/*BTDS*/
					"",
					[s._plural(e, "number_of_threads_to_delete")]
				),
				okText: s._(
					/*BTDS*/
					""
				),
				okButtonType: "solid-warning",
				onOK: function() {
					var t = y.map(function(e) {
						return e.id;
					});
					o("WAWebDeleteAiThreadsAction").deleteAiThreadsAction(a.id, t).then(function() {
						l(), o("WAWebModalManager").ModalManager.close(), o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, { msg: s._(
							/*BTDS*/
							"",
							[s._plural(e, "number_of_threads_deleted")]
						) }));
					});
				},
				onCancel: o("WAWebModalManager").closeModalManager,
				children: s._(
					/*BTDS*/
					""
				)
			}));
		}, D = p.jsx(o("WAWebMenuBar.react").MenuBarItem, {
			testid: "delete-selected-threads-button",
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
			icon: p.jsx(o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon, {}),
			title: s._(
				/*BTDS*/
				""
			),
			disabled: C === 0,
			onClick: T,
			showHoverTooltip: !0
		});
		return p.jsxs("div", babelHelpers.extends({ ref: m }, (c || (c = r("stylex"))).props(f.multiControls, _.paddingBlock6, o("WDSPaddings.stylex").wdsPaddings.paddingStart16, o("WDSPaddings.stylex").wdsPaddings.paddingEnd20), {
			"data-testid": "ai-thread-multi-select-bar",
			children: [
				p.jsx(o("WAWebMenuBar.react").MenuBarItem, {
					testid: "ai-thread-multi-select-bar-cancel-selection",
					tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
					icon: p.jsx(r("WDSIconIcClose.react"), {}),
					title: s._(
						/*BTDS*/
						""
					),
					onClick: l,
					showHoverTooltip: !0
				}),
				p.jsx("div", {
					className: "x1iyjqo2 xs83m0k xdl72j9 x1sa5p1d x1hm9lzh x6ikm8r x10wlt62 xlahmqy xlyipyv xuxw1ft",
					"data-testid": "ai-thread-multi-select-bar-selected-count",
					children: s._(
						/*BTDS*/
						"",
						[s._plural(C, "number_of_selected_threads")]
					)
				}),
				p.jsx(o("WAWebMenuBar.react").MenuBar, { children: p.jsxs(o("WAWebMenuBar.react").MenuBarVelocityTransitionGroup, {
					transitionName: "dropdown",
					children: [
						o("WAWebBotGating").isAiThreadPinEnabled() && E ? p.jsx(o("WAWebMenuBar.react").MenuBarItem, {
							testid: "pin-selected-threads-button",
							tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
							icon: p.jsx(r("WDSIconIcPushPin.react"), {}),
							title: s._(
								/*BTDS*/
								""
							),
							disabled: C === 0,
							onClick: k,
							showHoverTooltip: !0
						}) : null,
						o("WAWebBotGating").isAiThreadPinEnabled() && S ? p.jsx(o("WAWebMenuBar.react").MenuBarItem, {
							testid: "unpin-selected-threads-button",
							tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
							icon: p.jsx(r("WDSIconWdsIcPushPinSlash.react"), {}),
							title: s._(
								/*BTDS*/
								""
							),
							disabled: C === 0,
							onClick: I,
							showHoverTooltip: !0
						}) : null,
						D
					]
				}) }, "ai-thread-multi-select-bar-header")
			]
		}));
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = 0;
		for (var n of e) {
			var r = n.pinThreadTimestamp;
			r != null && r > 0 && t++;
		}
		return t;
	}
	l.default = g;
}), 226);
