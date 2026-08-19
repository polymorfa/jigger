__d("WAWebBizAIKnowledgeProductItem.react", [
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
	"WDSIconIcImage.react",
	"WDSIconIcMoreVert.react",
	"WDSText.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useRef, _ = d.useState, f = {
		imagePlaceholderIcon: {
			color: "xhslqc4",
			flexShrink: "x2lah0s",
			height: "xxk0z11",
			width: "xvy4d1p",
			$$css: !0
		},
		row: {
			alignItems: "x6s0dn4",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			cursor: "x1ypdohk",
			display: "x78zum5",
			rowGap: "x1f0uite",
			columnGap: "xs2akgl",
			paddingTop: "x889kno",
			paddingBottom: "x1a8lsjc",
			paddingInlineEnd: "xvtqlqk",
			paddingInlineStart: "xf7dkkf",
			$$css: !0
		},
		rowHover: {
			backgroundColor: "x1ubxc9n",
			$$css: !0
		}
	};
	function g(t) {
		var n, a, i, l = t.deleting, u = l === void 0 ? !1 : l, d = t.index, g = t.onDelete, h = t.onEdit, y = t.product, C = _(!1), b = C[0], v = C[1], S = _(!1), R = S[0], L = S[1], E = _(null), k = E[0], I = E[1], T = p(null), D = p(null), x = (b || R || k != null) && !u, $ = m(function(e) {
			var t, n = (t = T.current) != null ? t : D.current;
			n != null && I({
				anchor: n,
				autoFocus: e,
				menu: c.jsxs(c.Fragment, { children: [c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					action: function() {
						h(), I(null);
					},
					icon: c.jsx(r("WDSIconIcEdit.react"), {}),
					testid: "knowledge-product-item-" + d + "-edit",
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
					testid: "knowledge-product-item-" + d + "-delete",
					children: s._(
						/*BTDS*/
						""
					)
				})] })
			});
		}, [
			d,
			g,
			h
		]), P = m(function(e) {
			e.stopPropagation(), $();
		}, [$]), N = m(function() {
			I(null);
		}, []);
		return c.jsxs(c.Fragment, { children: [c.jsxs("div", babelHelpers.extends({
			ref: D,
			"data-testid": "knowledge-product-item-" + d,
			role: "button",
			tabIndex: u ? -1 : 0,
			"aria-disabled": u,
			"aria-label": (n = y.title) != null ? n : "",
			onClick: u ? void 0 : h,
			onKeyDown: function(t) {
				u || ((t.key === "Enter" || t.key === " ") && t.currentTarget === t.target ? (t.preventDefault(), h()) : t.currentTarget === t.target && (t.key === "ContextMenu" || t.shiftKey && t.key === "F10" || t.key === "ArrowDown") && (t.preventDefault(), $(!0)));
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
		}, (e || (e = r("stylex"))).props(f.row, f.rowHover, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus), { children: [
			y.images.length > 0 && y.images[0].thumbnail_url != null ? c.jsx("img", {
				src: y.images[0].thumbnail_url,
				alt: (a = y.title) != null ? a : "",
				className: "x1h3rtpe xlr9sxt xvvg52n xwd4zgb xq8v1ta x2lah0s x1peatla x19kjcj4 x1fu8urw"
			}) : c.jsx("div", {
				className: "x6s0dn4 x1h3rtpe xlr9sxt xvvg52n xwd4zgb xq8v1ta x78zum5 x2lah0s x1peatla xl56j7k x1fu8urw",
				children: c.jsx(r("WDSIconIcImage.react"), { iconXstyle: f.imagePlaceholderIcon })
			}),
			c.jsxs("div", {
				className: "x1iyjqo2 xeuugli x6ikm8r x10wlt62",
				children: [c.jsx("div", {
					className: "x6ikm8r x10wlt62 xlyipyv xuxw1ft",
					children: c.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Body1",
						maxLines: 1,
						children: (i = y.title) != null ? i : ""
					})
				}), y.price != null ? c.jsx("div", {
					className: "x6s0dn4 xkh2ocl x78zum5 x129bwdz x1trrmfo x1gxa6cn xa0aww2",
					children: c.jsx(r("WDSText.react"), {
						colorName: "contentDeemphasized",
						type: "Body2",
						children: y.price
					})
				}) : null]
			}),
			c.jsx("div", {
				className: "xamitd3",
				children: u ? c.jsx(o("WAWebSpinner.react").Spinner, {
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
							testid: "knowledge-product-item-" + d + "-menu-btn"
						})
					}, "menu-btn") : null
				})
			})
		] })), k != null && c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "ProductItemContextMenu",
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
