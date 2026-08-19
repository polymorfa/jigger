__d("WAWebMenuController.react", [
	"WALogger",
	"WAWebDomScroll",
	"WAWebEventEmitter",
	"WAWebFlex.react",
	"WAWebRegister.react",
	"err",
	"react",
	"stylex",
	"useWAWebNavigatableList"
], (function(t, n, r, o, a, i, l) {
	var e, s = ["ref"], u, c, d = c || (c = o("react")), m = c, p = m.createContext, _ = m.useCallback, f = m.useContext, g = m.useEffect, h = m.useMemo, y = m.useRef, C = m.useState, b = p(null), v = o("WAWebRegister.react").createRegister(), S = v.Register, R = v.useRegister, L = v.useRegisterItem;
	function E() {
		var e = f(b);
		if (e == null) throw r("err")("[Menu] useMenu must be used in a child of a MenuList component");
		return e;
	}
	var k = {
		container: {
			display: "x78zum5",
			flexGrow: "x1iyjqo2",
			overflowX: "xw2csxc",
			overflowY: "x1odjw0f",
			$$css: !0
		},
		listContainer: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			flexGrow: "x1iyjqo2",
			flexShrink: "x2lah0s",
			flexBasis: "xdl72j9",
			overflowY: "x1odjw0f",
			width: "xh8yej3",
			$$css: !0
		},
		padding: {
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "x1nzty39",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			$$css: !0
		}
	};
	function I(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, s), i = a.allowTabNavigation, l = i === void 0 ? !1 : i, c = a.autoScroll, m = c === void 0 ? !0 : c, p = a.border, f = a.children, v = a.colorScheme, S = v === void 0 ? "lighter" : v, R = a.data, L = a.focusOnMount, E = L === void 0 ? !1 : L, I = a.forceSelection, T = a.initialActiveOptionId, D = a.material, x = D === void 0 ? !1 : D, $ = a.maxHeight, P = a.menuControllerRef, N = a.minWidth, M = a.onActiveItemChange, w = a.onHotKeysFocus, A = a.onSelect, F = a.size, O = F === void 0 ? "small" : F, B = a.useLegacyDesign, W = B === void 0 ? !1 : B, q = R, U = y(), V = C(), H = V[0], G = V[1], z = h(function() {
			return new (r("WAWebEventEmitter"))();
		}, []), j = h(function() {
			return H != null ? H : Array.from(q.keys());
		}, [H, q]), K = o("useWAWebNavigatableList").useNavigatableList(j), Q = K.NavigatableList, X = K.activeItem, Y = K.listSelection, J = async function(t) {
			await G(t);
		}, Z = function(n) {
			var t = q.get(n);
			if (t != null && t.current != null) {
				var r = t.current;
				r.onSelect == null || r.onSelect(), z.trigger("select", n, r, q), A == null || A(n, r, q);
			} else o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[Menu] Trying to handle onSelect without a valid option '", "'"])), n);
		}, ee = function(t) {
			t.stopPropagation(), t.preventDefault();
		}, te = _(function(e) {
			var t = q.get(e);
			if (U.current != null && (t == null ? void 0 : t.current) != null) {
				var n = t.current.ref.current;
				n != null && o("WAWebDomScroll").scrollIntoViewIfNeeded(n, !1, U.current);
			}
		}, [q]);
		g(function() {
			m === !0 && X != null && te(X);
		}, [
			X,
			te,
			m
		]), g(function() {
			M == null || M(X);
		}, [X, M]), g(function() {
			E === !0 && U.current != null && U.current.focus();
		}, []);
		var ne = {
			down: ee,
			up: ee,
			enter: ee
		}, re = function(t) {
			t != null ? Y.setVal(t) : Y.set(-1, !1);
		}, oe = {
			items: q,
			events: z,
			activeItemId: X,
			filteredItems: H != null ? new Set(H) : null,
			filterItems: J,
			selectItem: Z,
			activateItem: re,
			colorScheme: S,
			size: O,
			material: x,
			allowTabNavigation: l,
			border: p,
			useLegacyDesign: W
		};
		return d.jsx(b.Provider, {
			value: oe,
			children: d.jsx("div", {
				ref: n,
				role: "listbox",
				"data-testid": "dropdown",
				className: (u || (u = r("stylex")))([k.container]),
				style: {
					maxHeight: $,
					minWidth: N
				},
				children: d.jsx(Q, {
					listControllerRef: P,
					xstyle: k.listContainer,
					items: Y,
					onSelect: Z,
					handlers: ne,
					forceSelection: I,
					initialActiveItem: T,
					rotate: !0,
					onHotKeysFocus: w,
					children: d.jsx(o("WAWebFlex.react").FlexColumn, {
						align: "stretch",
						tabIndex: 0,
						"data-tab": 0,
						ref: U,
						xstyle: k.padding,
						testid: "menu-controller-focus-receiver",
						children: f
					})
				})
			})
		});
	}
	I.displayName = I.name + " [from " + i.id + "]", l.useRegisterItem = L, l.Register = S, l.useRegister = R, l.useMenu = E, l.WAWebMenuController = I;
}), 98);
