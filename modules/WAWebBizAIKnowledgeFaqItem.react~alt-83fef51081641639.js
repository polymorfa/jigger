__d("WAWebBizAIKnowledgeFaqItem.react", [
	"fbt",
	"WAWebDropdownItem.react",
	"WAWebSpinner.react",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebVelocityTransitionGroup",
	"WDSButton.react",
	"WDSFocusStateStyles",
	"WDSIconIcDelete.react",
	"WDSIconIcEdit.react",
	"WDSIconIcMoreVert.react",
	"WDSText.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useRef, _ = d.useState, f = {
		row: {
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
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineEnd: "xvtqlqk",
			paddingInlineStart: "xf7dkkf",
			$$css: !0
		},
		rowHover: {
			":hover_backgroundColor": "x1ubxc9n",
			$$css: !0
		}
	};
	function g(t) {
		var n = t.answer, a = t.deleting, i = a === void 0 ? !1 : a, l = t.index, u = t.maxLines, d = u === void 0 ? 2 : u, g = t.onDelete, h = t.onEdit, y = t.question, C = _(!1), b = C[0], v = C[1], S = _(!1), R = S[0], L = S[1], E = _(null), k = E[0], I = E[1], T = p(null), D = p(null), x = (b || R || k != null) && !i, $ = m(function(e) {
			var t, n = (t = T.current) != null ? t : D.current;
			n != null && I({
				anchor: n,
				autoFocus: e,
				menu: c.jsxs(c.Fragment, { children: [c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					action: function() {
						h(), I(null);
					},
					icon: c.jsx(r("WDSIconIcEdit.react"), {}),
					testid: "knowledge-faq-item-" + l + "-edit",
					children: s._(
						/*BTDS*/
						""
					)
				}), c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					action: function() {
						g(), I(null);
					},
					icon: c.jsx(r("WDSIconIcDelete.react"), {}),
					theme: o("WAWebDropdownItem.react").DropdownItemThemeType.Negative,
					testid: "knowledge-faq-item-" + l + "-delete",
					children: s._(
						/*BTDS*/
						""
					)
				})] })
			});
		}, [
			l,
			g,
			h
		]), P = m(function(e) {
			e.stopPropagation(), $();
		}, [$]), N = m(function() {
			I(null);
		}, []);
		return c.jsxs(c.Fragment, { children: [c.jsxs("div", babelHelpers.extends({
			ref: D,
			"data-testid": "knowledge-faq-item-" + l,
			role: "button",
			tabIndex: i ? -1 : 0,
			"aria-disabled": i,
			onClick: i ? void 0 : h,
			onKeyDown: function(t) {
				i || ((t.key === "Enter" || t.key === " ") && t.currentTarget === t.target ? (t.preventDefault(), h()) : t.currentTarget === t.target && (t.key === "ContextMenu" || t.shiftKey && t.key === "F10" || t.key === "ArrowDown") && (t.preventDefault(), $(!0)));
			},
			onFocus: function() {
				return L(!0);
			},
			onBlur: function(t) {
				D.current != null && t.relatedTarget instanceof Node && D.current.contains(t.relatedTarget) || L(!1);
			},
			onMouseEnter: function() {
				return v(!0);
			},
			onMouseLeave: function() {
				return v(!1);
			}
		}, (e || (e = r("stylex"))).props(f.row, f.rowHover, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus), { children: [c.jsxs("div", {
			className: "x98rzlu xeuugli x6ikm8r x10wlt62",
			children: [c.jsx("div", {
				className: "x6ikm8r x10wlt62 xlyipyv xuxw1ft",
				children: c.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					type: "Body1",
					dir: "auto",
					children: y
				})
			}), c.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				maxLines: d,
				dir: "auto",
				children: n
			})]
		}), i ? c.jsx(o("WAWebSpinner.react").Spinner, {
			color: "default",
			size: 20,
			stroke: 4
		}) : c.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: "pop-fast-chat",
			children: x ? c.jsx("span", {
				ref: T,
				className: "x67bb7w xnpuxes",
				children: c.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcMoreVert.react"),
					onPress: P,
					variant: "borderless",
					size: "small",
					"aria-label": s._(
						/*BTDS*/
						""
					).toString(),
					testid: "knowledge-faq-item-" + l + "-menu-btn"
				})
			}, "menu-btn") : null
		})] })), k != null && c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "FaqItemContextMenu",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: N,
			children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: {
				anchor: k.anchor,
				autoFocus: k.autoFocus,
				menu: k.menu
			} })
		})] });
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
