__d("WAWebBizAIFieldItem.react", [
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
		fieldRow: {
			alignItems: "x6s0dn4",
			alignSelf: "xkh2ocl",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			cursor: "x1ypdohk",
			display: "x78zum5",
			flexShrink: "x2lah0s",
			rowGap: "x8a3fw1",
			columnGap: "x1aj3ljl",
			minHeight: "xvkrg5o",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineEnd: "xvtqlqk",
			paddingInlineStart: "x12w63v0",
			$$css: !0
		},
		fieldRowHover: {
			":hover_backgroundColor": "x1ubxc9n",
			$$css: !0
		}
	};
	function g(t) {
		var n = t.deleting, a = t.field, i = t.hasValue, l = t.onDelete, u = t.onEdit, d = t.value, g = _(!1), h = g[0], y = g[1], C = _(null), b = C[0], v = C[1], S = p(null), R = p(null), L = _(!1), E = L[0], k = L[1], I = i && (h || E || b != null) && !n, T = m(function() {
			y(!0);
		}, []), D = m(function() {
			y(!1);
		}, []), x = m(function() {
			k(!0);
		}, []), $ = m(function(e) {
			R.current != null && e.relatedTarget instanceof Node && R.current.contains(e.relatedTarget) || k(!1);
		}, []), P = m(function(e) {
			var t, n = (t = S.current) != null ? t : R.current;
			n != null && v({
				anchor: n,
				autoFocus: e,
				menu: c.jsxs(c.Fragment, { children: [c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					action: function() {
						u(), v(null);
					},
					icon: c.jsx(r("WDSIconIcEdit.react"), {}),
					testid: a.testid + "-edit",
					children: s._(
						/*BTDS*/
						""
					)
				}), c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					action: function() {
						l(), v(null);
					},
					icon: c.jsx(r("WDSIconIcDelete.react"), {}),
					theme: o("WAWebDropdownItem.react").DropdownItemThemeType.Negative,
					testid: a.testid + "-delete",
					children: s._(
						/*BTDS*/
						""
					)
				})] })
			});
		}, [
			a.testid,
			l,
			u
		]), N = m(function(e) {
			e.stopPropagation(), P();
		}, [P]), M = m(function() {
			v(null);
		}, []), w = null;
		return n ? w = c.jsx(o("WAWebSpinner.react").Spinner, {
			color: "default",
			size: 20,
			stroke: 4
		}) : i && (w = c.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: "pop-fast-chat",
			children: I ? c.jsx("span", {
				ref: S,
				className: "x67bb7w xnpuxes",
				children: c.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcMoreVert.react"),
					onPress: N,
					variant: "borderless",
					size: "small",
					"aria-label": s._(
						/*BTDS*/
						""
					).toString(),
					testid: a.testid + "-menu-btn"
				})
			}, "menu-btn") : null
		})), c.jsxs(c.Fragment, { children: [c.jsxs("div", babelHelpers.extends({
			ref: R,
			"data-testid": a.testid,
			role: "button",
			tabIndex: n ? -1 : 0,
			"aria-disabled": n,
			onClick: n ? void 0 : u,
			onKeyDown: function(t) {
				n || ((t.key === "Enter" || t.key === " ") && t.currentTarget === t.target ? (t.preventDefault(), u()) : i && t.currentTarget === t.target && (t.key === "ContextMenu" || t.shiftKey && t.key === "F10" || t.key === "ArrowDown") && (t.preventDefault(), P(!0)));
			},
			onFocus: x,
			onBlur: $,
			onMouseEnter: T,
			onMouseLeave: D
		}, (e || (e = r("stylex"))).props(f.fieldRow, f.fieldRowHover, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus), { children: [
			c.jsx("div", {
				className: "x6s0dn4 x78zum5 x2lah0s xsdox4t xl56j7k x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x100vrsf",
				children: a.icon
			}),
			c.jsxs("div", {
				className: "x98rzlu xeuugli x6ikm8r x10wlt62",
				children: [c.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					type: "Body1",
					children: a.label
				}), c.jsx(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					type: "Body2",
					maxLines: a.maxLines,
					children: i ? d : a.hint
				})]
			}),
			w
		] })), b != null && c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "FieldContextMenu",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: M,
			children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: {
				anchor: b.anchor,
				autoFocus: b.autoFocus,
				menu: b.menu
			} })
		})] });
	}
	g.displayName = g.name + " [from " + i.id + "]", l.WAWebBizAIFieldItem = g;
}), 226);
