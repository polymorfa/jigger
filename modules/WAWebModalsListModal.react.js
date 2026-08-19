__d("WAWebModalsListModal.react", [
	"WALogger",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebFlatList.react",
	"WAWebFlatListController",
	"WAWebFocusTracer",
	"WAWebKeyboardHotKeys.react",
	"WAWebL10NFbtTypeUtils",
	"WAWebModal.react",
	"WDSFlex.stylex",
	"WDSSearchBar.react",
	"react",
	"stylex",
	"useLazyRef"
], (function(t, n, r, o, a, i, l) {
	var e, s = ["ref"], u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useRef, f = m.useState, g = {
		newsletterBackgroundColor: {
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		wdsSearchBarContainer: {
			paddingInlineStart: "x1phvje8",
			paddingInlineEnd: "xcldk2z",
			paddingLeft: null,
			paddingRight: null,
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			$$css: !0
		}
	};
	function h(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, s), i = a.data, l = a.emptyState, c = a.firstRows, m = a.isNewsletter, h = m === void 0 ? !1 : m, y = a.lastRow, C = a.onBack, b = a.onCancel, v = a.onSearch, S = a.onSelect, R = a.renderItem, L = a.rotateList, E = L === void 0 ? !1 : L, k = a.scrollToInitialSelection, I = a.searchPlaceholder, T = a.selection, D = a.spinnerInHeader, x = D === void 0 ? !1 : D, $ = a.testid, P = a.title, N = a.tsNavigationData, M = r("useLazyRef")(function() {
			return new (r("WAWebFlatListController"))();
		}), w = _(), A = _(null), F = f(""), O = F[0], B = F[1], W = function() {
			if (w.current) {
				var t = T == null ? void 0 : T.value;
				if (t == null || typeof t != "object") return;
				var n = t.itemKey;
				if (n == null) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["ListModalImpl: scrollToInitialSelection missing itemKey"]))).sendLogs("ListModalImpl-missing-itemKey");
					return;
				}
				var r = i.findIndex(function(e) {
					return e.itemKey === n;
				});
				if (r !== -1) {
					var a;
					w == null || (a = w.current) == null || a.scrollIntoViewIfNeeded(r, 100);
				}
			}
		};
		p(function() {
			k === !0 && W();
		}, []);
		var q = function(t) {
			t.preventDefault(), t.stopPropagation(), T && T.setNext(!0, E);
		}, U = function(t) {
			if (T) {
				t.preventDefault(), t.stopPropagation();
				var e = T.prev(E);
				e > -1 ? T.setPrev(!0, E) : A.current && (T.unset(), r("WAWebFocusTracer").focus(A.current));
			}
		}, V = function(t) {
			t == null || t.preventDefault(), t == null || t.stopPropagation();
			var e = i[0];
			e && (S == null || S(t, e));
		}, H = function() {
			V();
		}, G = function(t) {
			var e = t.relatedTarget;
			return e instanceof HTMLElement && t.currentTarget instanceof HTMLElement && !t.currentTarget.contains(e);
		}, z = function(t) {
			G(t) && (T == null || T.setFirst(!0));
		}, j = function(t) {
			G(t) && (T == null || T.unset());
		}, K = {
			down: q,
			up: U
		}, Q;
		v && (Q = d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexGrow0, g.wdsSearchBarContainer), { children: d.jsx(r("WDSSearchBar.react"), {
			hintText: I != null ? I : "",
			onValueChange: function(t) {
				B(t), v == null || v(t);
			},
			onEnter: H,
			value: O,
			testid: "list_modal_search_bar"
		}) })));
		var X = i.length ? d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			handlers: K,
			onFocus: z,
			onBlur: j,
			tabIndex: 0,
			children: d.jsx(o("WAWebFlatList.react").FlatList, {
				data: i,
				ref: w,
				flatListController: M.current,
				direction: "vertical",
				renderItem: R
			})
		}) : l, Y = o("WAWebL10NFbtTypeUtils").isStringOrFbt(P) ? P : void 0;
		return d.jsx(o("WAWebModal.react").Modal, {
			ariaLabel: Y,
			type: o("WAWebModal.react").ModalTheme.Tower,
			ref: n,
			tsNavigationData: N,
			children: d.jsxs(r("WAWebDrawer.react"), {
				testid: $,
				xstyle: h ? g.newsletterBackgroundColor : void 0,
				children: [
					d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
						title: P,
						type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
						onBack: C,
						onCancel: b,
						spinner: x
					}),
					Q,
					d.jsxs(r("WAWebDrawerBody.react"), {
						flatListControllers: [M.current],
						backgroundColor: "default",
						children: [
							c,
							X,
							y
						]
					})
				]
			}, "contact-modal")
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y() {
		return h;
	}
	l.ListModalFactory = y;
}), 98);
