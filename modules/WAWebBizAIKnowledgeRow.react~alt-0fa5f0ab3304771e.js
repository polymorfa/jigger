__d("WAWebBizAIKnowledgeRow.react", [
	"fbt",
	"WAWebDropdownItem.react",
	"WAWebSpinner.react",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebVelocityTransitionGroup",
	"WDSButton.react",
	"WDSFocusStateStyles",
	"WDSIconIcDelete.react",
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
			display: "x78zum5",
			rowGap: "x1f0uite",
			columnGap: "xs2akgl",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineEnd: "xvtqlqk",
			paddingInlineStart: "xf7dkkf",
			$$css: !0
		},
		rowHover: {
			":hover_backgroundColor": "x1ubxc9n",
			$$css: !0
		},
		rowInteractive: {
			cursor: "x1ypdohk",
			$$css: !0
		}
	};
	function g(t) {
		var n = t.alt, a = t.deleting, i = a === void 0 ? !1 : a, l = t.fallbackIcon, u = t.index, d = t.label, g = t.onDelete, h = t.secondaryLine, y = t.testidPrefix, C = t.thumbnailUrl, b = _(null), v = b[0], S = b[1], R = _(!1), L = R[0], E = R[1], k = _(!1), I = k[0], T = k[1], D = _(null), x = D[0], $ = D[1], P = p(null), N = p(null), M = m(function() {
			var e, t = (e = P.current) != null ? e : N.current;
			t != null && $({
				anchor: t,
				menu: c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					action: function() {
						g == null || g(), $(null);
					},
					icon: c.jsx(r("WDSIconIcDelete.react"), {}),
					theme: o("WAWebDropdownItem.react").DropdownItemThemeType.Negative,
					testid: y + "-" + u + "-delete",
					children: s._(
						/*BTDS*/
						""
					)
				})
			});
		}, [
			u,
			g,
			y
		]), w = m(function(e) {
			e.stopPropagation(), M();
		}, [M]), A = m(function() {
			$(null);
		}, []), F = C != null && C !== v, O = F ? c.jsx("img", {
			src: C,
			alt: n,
			onError: function() {
				return S(C);
			},
			"data-testid": y + "-" + u + "-thumbnail",
			className: "x1h3rtpe xlr9sxt xvvg52n xwd4zgb xq8v1ta x2lah0s x1peatla x19kjcj4 x1fu8urw"
		}) : c.jsx("div", {
			"data-testid": y + "-" + u + "-icon-placeholder",
			className: "x6s0dn4 x1h3rtpe xlr9sxt xvvg52n xwd4zgb xq8v1ta x78zum5 x2lah0s x1peatla xl56j7k x1fu8urw",
			children: l
		}), B = c.jsxs("div", {
			className: "x98rzlu xeuugli x6ikm8r x10wlt62",
			children: [c.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Body1",
				maxLines: 1,
				children: d
			}), h != null ? c.jsx(r("WDSText.react"), {
				colorName: h.isError ? "secondaryNegative" : "contentDeemphasized",
				type: "Body3",
				maxLines: h.isError ? 2 : 1,
				children: h.node
			}) : null]
		});
		if (g == null) return c.jsxs("div", {
			"data-testid": y + "-" + u,
			className: "x6s0dn4 xkh2ocl xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 x1f0uite xs2akgl x16ovd2e x12xbjc7 xvtqlqk xf7dkkf x1ubxc9n",
			children: [O, B]
		});
		var W = (L || I || x != null) && !i;
		return c.jsxs(c.Fragment, { children: [c.jsxs("div", babelHelpers.extends({
			ref: N,
			"data-testid": y + "-" + u,
			role: "button",
			tabIndex: 0,
			onKeyDown: function(t) {
				t.currentTarget === t.target && (t.key === "ContextMenu" || t.shiftKey && t.key === "F10" || t.key === "ArrowDown") && (t.preventDefault(), M());
			},
			onFocus: function() {
				return T(!0);
			},
			onBlur: function(t) {
				N.current != null && t.relatedTarget instanceof Node && N.current.contains(t.relatedTarget) || T(!1);
			},
			onMouseEnter: function() {
				return E(!0);
			},
			onMouseLeave: function() {
				return E(!1);
			}
		}, (e || (e = r("stylex"))).props(f.row, f.rowInteractive, f.rowHover, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus), { children: [
			O,
			B,
			i ? c.jsx(o("WAWebSpinner.react").Spinner, {
				color: "default",
				size: 20,
				stroke: 4,
				testid: y + "-" + u + "-deleting-spinner"
			}) : c.jsx(r("WAWebVelocityTransitionGroup"), {
				transitionName: "pop-fast-chat",
				children: W ? c.jsx("span", {
					ref: P,
					className: "x67bb7w xnpuxes",
					children: c.jsx(r("WDSButton.react"), {
						Icon: r("WDSIconIcMoreVert.react"),
						onPress: w,
						variant: "borderless",
						size: "small",
						"aria-label": s._(
							/*BTDS*/
							""
						).toString(),
						testid: y + "-" + u + "-menu-btn"
					})
				}, "menu-btn") : null
			})
		] })), x != null && c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "KnowledgeItemContextMenu",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: A,
			children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: {
				anchor: x.anchor,
				menu: x.menu
			} })
		})] });
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
