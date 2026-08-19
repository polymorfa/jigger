__d("WAWebVcardWidChoiceModal.react", [
	"fbt",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerItem.react",
	"WAWebModal.react",
	"WAWebUnstyledButton.react",
	"WAWebVcardUtils",
	"WAWebWidFactory",
	"WAWebWidFormat",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useMemo, m = {
		marginBottom10: {
			marginBottom: "xyorhqc",
			$$css: !0
		},
		paddingInline14: {
			paddingInlineStart: "x1onr9mi",
			paddingInlineEnd: "x1pic42t",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	}, p = { container: {
		backgroundColor: "x1280gxy",
		$$css: !0
	} };
	function _(t) {
		var n = o("react-compiler-runtime").c(24), a = t.onSelect, i = t.vcard, l;
		n[0] !== a ? (l = function(t) {
			a(t);
		}, n[0] = a, n[1] = l) : l = n[1];
		var u = l, d;
		n[2] !== u ? (d = function(t, n) {
			t.stopPropagation(), u(n);
		}, n[2] = u, n[3] = d) : d = n[3];
		var _ = d, g;
		if (n[4] !== i.TEL) {
			var h;
			g = (h = i.TEL) != null ? h : [], n[4] = i.TEL, n[5] = g;
		} else g = n[5];
		var y;
		if (n[6] !== _ || n[7] !== u || n[8] !== t.icon || n[9] !== g) {
			var C = g.filter(f), b;
			n[11] !== _ || n[12] !== u || n[13] !== t.icon ? (b = function(a) {
				var n = o("WAWebWidFactory").createUserWidOrThrow(a.properties.waid[0]), i = t.icon;
				return i && (i = c.jsx(r("WAWebUnstyledButton.react"), {
					onClick: function(t) {
						_(t, n);
					},
					children: i
				})), c.createElement("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(p.container, m.marginBottom10, o("WDSPaddings.stylex").wdsPaddings.paddingVer0, m.paddingInline14), { key: "vCard-" + a.value }), c.jsx(r("WAWebDrawerItem.react"), {
					title: o("WAWebWidFormat").widToFormattedUser(n),
					onClick: function() {
						return u(n);
					},
					isLastItem: !0,
					icon: i,
					children: o("WAWebVcardUtils").vcardGetType(a)
				}));
			}, n[11] = _, n[12] = u, n[13] = t.icon, n[14] = b) : b = n[14], y = C.map(b), n[6] = _, n[7] = u, n[8] = t.icon, n[9] = g, n[10] = y;
		} else y = n[10];
		var v = y, S;
		n[15] === Symbol.for("react.memo_cache_sentinel") ? (S = {
			surface: "unknown",
			viewName: "vcard-wid-choice"
		}, n[15] = S) : S = n[15];
		var R = t.onCancel, L;
		n[16] === Symbol.for("react.memo_cache_sentinel") ? (L = s._(
			/*BTDS*/
			""
		), n[16] = L) : L = n[16];
		var E;
		n[17] !== t.onCancel ? (E = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			onCancel: R,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
			title: L
		}), n[17] = t.onCancel, n[18] = E) : E = n[18];
		var k;
		n[19] !== v ? (k = c.jsx(r("WAWebDrawerBody.react"), { children: v }), n[19] = v, n[20] = k) : k = n[20];
		var I;
		return n[21] !== E || n[22] !== k ? (I = c.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Box,
			children: c.jsxs(r("WAWebDrawer.react"), {
				tsNavigationData: S,
				children: [E, k]
			})
		}), n[21] = E, n[22] = k, n[23] = I) : I = n[23], I;
	}
	function f(e) {
		return e.properties.waid;
	}
	l.default = _;
}), 226);
