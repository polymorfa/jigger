__d("WAWebNewsletterStatusSelectorDrawer.react", [
	"fbt",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebModal.react",
	"WAWebNewsletterStatusPostingUtils",
	"WAWebPrivacyVisibilityOption.react",
	"WAWebWidFactory",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(43), n = e.onClose, a = e.onNewsletterSelected, i = e.selectedNewsletterWid, l, c, d, m, p, _, f, g, h, y, C;
		if (t[0] !== n || t[1] !== a || t[2] !== i) {
			var b = o("WAWebNewsletterStatusPostingUtils").getStatusPostableNewsletters(), v;
			t[14] !== n || t[15] !== a ? (v = function(t) {
				a(t), n();
			}, t[14] = n, t[15] = a, t[16] = v) : v = t[16];
			var S = v;
			m = o("WAWebModal.react").Modal, C = o("WAWebModal.react").ModalTheme.Tower, d = r("WAWebDrawer.react"), h = "newsletter-status-selector-drawer";
			var R;
			t[17] === Symbol.for("react.memo_cache_sentinel") ? (R = s._(
				/*BTDS*/
				""
			), t[17] = R) : R = t[17], t[18] !== n ? (y = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				testid: "drawer-title",
				title: R,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
				focusBackOrCancel: !0,
				onCancel: n
			}), t[18] = n, t[19] = y) : y = t[19], c = r("WAWebDrawerBody.react"), l = r("WAWebDrawerSection.react"), f = "padding-no-vertical", g = !1, p = "radiogroup";
			var L;
			t[20] !== S || t[21] !== i ? (L = function(t) {
				var e, n, a = o("WAWebWidFactory").asNewsletterWidOrThrow(t.id), l = (e = (n = t.newsletterMetadata) == null ? void 0 : n.name) != null ? e : t.formattedTitle;
				return u.jsx(r("WAWebPrivacyVisibilityOption.react"), {
					text: l,
					selected: a.equals(i),
					testid: "newsletter-option",
					onClick: function() {
						return S(a);
					}
				}, a.toString());
			}, t[20] = S, t[21] = i, t[22] = L) : L = t[22], _ = b.map(L), t[0] = n, t[1] = a, t[2] = i, t[3] = l, t[4] = c, t[5] = d, t[6] = m, t[7] = p, t[8] = _, t[9] = f, t[10] = g, t[11] = h, t[12] = y, t[13] = C;
		} else l = t[3], c = t[4], d = t[5], m = t[6], p = t[7], _ = t[8], f = t[9], g = t[10], h = t[11], y = t[12], C = t[13];
		var E;
		t[23] !== p || t[24] !== _ ? (E = u.jsx("div", {
			role: p,
			children: _
		}), t[23] = p, t[24] = _, t[25] = E) : E = t[25];
		var k;
		t[26] !== l || t[27] !== f || t[28] !== g || t[29] !== E ? (k = u.jsx(l, {
			theme: f,
			animation: g,
			children: E
		}), t[26] = l, t[27] = f, t[28] = g, t[29] = E, t[30] = k) : k = t[30];
		var I;
		t[31] !== c || t[32] !== k ? (I = u.jsx(c, { children: k }), t[31] = c, t[32] = k, t[33] = I) : I = t[33];
		var T;
		t[34] !== d || t[35] !== h || t[36] !== y || t[37] !== I ? (T = u.jsxs(d, {
			testid: h,
			children: [y, I]
		}), t[34] = d, t[35] = h, t[36] = y, t[37] = I, t[38] = T) : T = t[38];
		var D;
		return t[39] !== m || t[40] !== T || t[41] !== C ? (D = u.jsx(m, {
			type: C,
			children: T
		}), t[39] = m, t[40] = T, t[41] = C, t[42] = D) : D = t[42], D;
	}
	l.default = c;
}), 226);
