__d("WAWebExpressionsPanelPicker.react", [
	"fbt",
	"$InternalEnum",
	"ReactDOM",
	"WAWebCmd",
	"WAWebComposeBoxPanelTypes",
	"WAWebDrawerManagerContext",
	"WAWebDropdown.react",
	"WAWebEmojiPanel.react",
	"WAWebFlex.react",
	"WAWebGetExpressionsPanelOffset",
	"WAWebGifPanel.react",
	"WAWebIcMoodIcon.react",
	"WAWebIconTabs.react",
	"WAWebL10N",
	"WAWebModalManager",
	"WAWebPanelsDisplayLocation",
	"WAWebPortalThemeWrapper.react",
	"WAWebStickerPanel.react",
	"WAWebTabOrder",
	"WAWebUimUie.react",
	"WAWebUserPrefsGeneral",
	"WAWebVelocityTransitionGroup",
	"WAWebWdsIcStickerIcon.react",
	"WDSGlobalContext",
	"WDSIconIcGif.react",
	"WDSIconWdsIcStickerSmiley.react",
	"WDSMenu.react",
	"WDSMenuBarItem.react",
	"asyncToGeneratorRuntime",
	"compactMap",
	"nullthrows",
	"react",
	"stylex",
	"useWAWebABPropConfigValue",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useContext, p = d.useImperativeHandle, _ = d.useRef, f = d.useState, g = { marginInlineEnd6: {
		marginInlineEnd: "xbelrpt",
		$$css: !0
	} }, h = 168, y = 560, C = {
		tabsContainer: {
			borderTopWidth: "x178xt8z",
			borderTopStyle: "x13fuv20",
			borderTopColor: "x5qw0y4",
			height: "xsdox4t",
			$$css: !0
		},
		tab: {
			width: "x1ig0tib",
			height: "x1pwvq5b",
			$$css: !0
		},
		expressionsPanelPickerWrapper: {
			display: "x78zum5",
			flex: "x98rzlu",
			alignItems: "xuk3077",
			alignSelf: "xpvyfi4",
			$$css: !0
		},
		expressionsPanelPickerWrapperRefresh: {
			minWidth: "x1fns5xo",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			$$css: !0
		}
	}, b = n("$InternalEnum").Mirrored(["SMALL", "LARGE"]);
	function v(t) {
		var a = t.getComposeBoxEditorRef, i = t.iconWidth, l = t.onClose, u = t.onEmoji, d = t.onGif, y = t.onSticker, b = t.onStickerFromStore, v = t.onToggleActive, S = t.ref, R = t.size, L = t.wrapperRef, E = f(!1), k = E[0], I = E[1], T = f(o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI), D = T[0], x = T[1], $ = m(o("WDSGlobalContext").WDSContext), P = $.closeAllMenus, N = [
			o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI,
			d ? o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.GIF : null,
			y ? o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER : null
		].filter(Boolean), M = function(t) {
			return N.includes(t);
		}, w = _(null), A = _(null), F = _(null), O = f(""), B = O[0], W = O[1], q = f(null), U = q[0], V = q[1], H = o("WAWebDrawerManagerContext").useMiddleDrawerManagerContext(), G = (H == null ? void 0 : H.drawer) != null, z = r("WAWebL10N").isRTL(), j = function(t) {
			I(t), v == null || v(t);
		}, K = function(t) {
			W(t);
		}, Q = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				k || (yield o("WAWebModalManager").ModalManager.existsAsync()) || (x(e), j(!0));
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), X = function() {
			W(""), j(!1), l == null || l();
		}, Y = function() {
			if (k) j(!1);
			else {
				var e = o("WAWebUserPrefsGeneral").getLastComposeBoxExpressionPanel();
				x(e != null && M(e) ? e : o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI), j(!0);
			}
		}, J = r("compactMap")(N, function(e) {
			if (e === o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI) return {
				Icon: o("WAWebIcMoodIcon.react").IcMoodIcon,
				iconStyle: C.tab,
				testid: "expressions-btn-emoji",
				ariaLabel: s._(
					/*BTDS*/
					""
				)
			};
			if (e === o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.GIF) return {
				Icon: r("WDSIconIcGif.react"),
				iconStyle: C.tab,
				testid: "expressions-btn-gif",
				ariaLabel: s._(
					/*BTDS*/
					""
				)
			};
			if (e === o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER) return M(o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER) ? {
				Icon: o("WAWebWdsIcStickerIcon.react").WdsIcStickerIcon,
				iconStyle: C.tab,
				testid: "expressions-btn-sticker",
				ariaLabel: s._(
					/*BTDS*/
					""
				)
			} : null;
		}), Z = function() {
			return x(N[(N.indexOf(D) - 1 + N.length) % N.length]);
		}, ee = function() {
			return x(N[(N.indexOf(D) + 1) % N.length]);
		}, te;
		switch (D) {
			case o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.EMOJI:
				te = c.jsx(r("WAWebEmojiPanel.react"), {
					defaultSearchText: B,
					displayCache: w.current,
					displayLocation: o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel,
					onChange: K,
					onEmoji: u,
					onFocusPrev: Z,
					onFocusNext: ee,
					size: R
				});
				break;
			case o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.GIF:
				te = c.jsx(r("WAWebGifPanel.react"), {
					defaultSearchText: B,
					displayCache: A.current,
					displayLocation: o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel,
					onChange: K,
					onDisplayCache: function(t) {
						A.current = t;
					},
					onFocusPrev: Z,
					onFocusNext: ee,
					onGif: function(t, n, r) {
						d == null || d(t, n, r), P();
					},
					size: R
				});
				break;
			case o("WAWebComposeBoxPanelTypes").ComposeBoxExpressionPanel.STICKER:
				te = c.jsx(r("WAWebStickerPanel.react"), {
					defaultSearchText: B,
					displayCache: F.current,
					displayLocation: o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel,
					onChange: K,
					onDisplayCache: function(t) {
						F.current = t;
					},
					onFocusPrev: Z,
					onFocusNext: ee,
					onSticker: function(t, n, r) {
						y == null || y(t, n, r), P();
					},
					onStickerFromStore: b
				});
				break;
		}
		p(S, function() {
			return { close: function() {
				X();
			} };
		}), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_compose_box_panel", Q), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "close_expression_panels", X);
		var ne = function(t, n) {
			var e, r = (e = a()) == null || (e = e.editor) == null ? void 0 : e.getRootElement();
			r != null && r.contains(n == null ? void 0 : n.srcElement) || X();
		}, re = function() {
			if (U) {
				var e = U.getBoundingClientRect(), t = o("WAWebGetExpressionsPanelOffset").getExpressionsPanelOffset(e, {
					height: document.body.clientHeight,
					width: document.body.clientWidth
				}), n = t.horizontal, r = t.vertical, a = z ? { right: n + "px" } : { left: n + "px" };
				return babelHelpers.extends({}, a, { bottom: r + "px" });
			}
			return {};
		}, oe = c.jsx(r("WAWebVelocityTransitionGroup"), { transitionName: "dropdown" }), ae = c.jsxs(r("WAWebPortalThemeWrapper.react"), { children: [te, c.jsx(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			align: "center",
			xstyle: C.tabsContainer,
			children: c.jsx(r("WAWebIconTabs.react"), {
				selectedIndex: N.indexOf(D),
				onSelect: function(t) {
					var e = N[t];
					e !== D && (x(e), o("WAWebUserPrefsGeneral").setLastComposeBoxExpressionPanel(e));
				},
				tabConfigs: J,
				theme: "expression-panels"
			})
		})] });
		if (k && !G) {
			var ie;
			oe = c.jsx(r("WAWebVelocityTransitionGroup"), {
				transitionName: "dropdown",
				children: c.jsx(o("WAWebUimUie.react").UIE, {
					displayName: "MenuBarMenuItem",
					escapable: !0,
					popable: !0,
					dismissOnWindowResize: !0,
					requestDismiss: ne,
					children: c.jsx((ie = o("WAWebDropdown.react")).Dropdown, {
						type: ie.MenuType.ExpressionsPanel,
						style: re(),
						flipOnRTL: !0,
						dirX: ie.DirX.CENTER,
						dirY: ie.DirY.TOP,
						testid: "expressions-panel",
						children: ae
					})
				})
			});
		}
		var le = r("nullthrows")(document.querySelector("#expressions-panel-container"));
		oe = o("ReactDOM").createPortal(oe, le);
		var se = c.jsx(r("WDSMenu.react"), {
			useMaxWidth: !1,
			minWidth: o("WAWebDropdown.react").EMOJI_PICKER_WIDTH,
			minHeight: h,
			children: c.jsx("div", {
				className: "xewp6mh x27kpxv x6ikm8r x10wlt62 x6nvzda x4i4b9w xhl9efl xj65ea0",
				children: ae
			})
		}), ue = o("useWAWebABPropConfigValue").useABPropConfigValue("wds_web_expressions_panel"), ce;
		ue ? ce = c.jsx(r("WDSMenuBarItem.react"), {
			icon: r("WDSIconWdsIcStickerSmiley.react"),
			testid: "expressions",
			tabOrder: o("WAWebTabOrder").TAB_ORDER.COMPOSE_BOX_EXPRESSION_PICKER,
			title: s._(
				/*BTDS*/
				""
			),
			ref: V,
			wdsMenuToRender: se,
			menuAlign: "middle",
			menuEnableUim: !0,
			menuIsContainer: !0
		}) : ce = c.jsx(r("WDSMenuBarItem.react"), {
			icon: r("WDSIconWdsIcStickerSmiley.react"),
			testid: "expressions",
			tabOrder: o("WAWebTabOrder").TAB_ORDER.COMPOSE_BOX_EXPRESSION_PICKER,
			ref: V,
			onClick: Y,
			title: s._(
				/*BTDS*/
				""
			)
		});
		var de = [C.expressionsPanelPickerWrapper];
		return de.push(C.expressionsPanelPickerWrapperRefresh, g.marginInlineEnd6), c.jsxs(c.Fragment, { children: [c.jsx("div", babelHelpers.extends({ ref: L }, (e || (e = r("stylex"))).props(de), { children: ce })), oe] });
	}
	v.displayName = v.name + " [from " + i.id + "]", l.ExpressionsPanelSize = b, l.ExpressionsPanelPicker = v;
}), 226);
