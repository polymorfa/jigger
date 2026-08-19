__d("WAWebListMsgModal.react", [
	"WALogger",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebListMsgRow.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebRound.react",
	"WAWebSendListMsgReplyChatAction",
	"WAWebVelocityTransitionGroup",
	"WAWebWdsIcSendFilledIcon.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s.useState, d = { container: {
		zIndex: "x12xzxwr",
		flex: "x1okw0bk",
		$$css: !0
	} };
	function m(e) {
		var t = o("react-compiler-runtime").c(23), n = e.msg, a = c(null), i = a[0], l = a[1], s;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (s = function(t) {
			l(t);
		}, t[0] = s) : s = t[0];
		var m = s, f = n.list;
		if (!f) return null;
		var g;
		t[1] !== n || t[2] !== i ? (g = function() {
			i && (r("WAWebSendListMsgReplyChatAction")(n, i).catch(p), o("WAWebModalManager").closeModalManager());
		}, t[1] = n, t[2] = i, t[3] = g) : g = t[3];
		var h = g, y;
		if (i) {
			var C;
			t[4] === Symbol.for("react.memo_cache_sentinel") ? (C = { className: "xfo81ep x9f619 x78zum5 x6s0dn4 xh8yej3 x1x0gksc x15fo07t x13jy36j x17t9dm2 x1280gxy" }, t[4] = C) : C = t[4];
			var b = i.title, v;
			t[5] === Symbol.for("react.memo_cache_sentinel") ? (v = { className: "x10l6tqk x145d82y x3h4tne" }, t[5] = v) : v = t[5];
			var S;
			t[6] === Symbol.for("react.memo_cache_sentinel") ? (S = u.jsx(o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon, { directional: !0 }), t[6] = S) : S = t[6];
			var R;
			t[7] !== h ? (R = u.jsx("div", babelHelpers.extends({}, v, { children: u.jsx(o("WAWebRound.react").Round, {
				large: !0,
				onClick: h,
				testid: "list-msg-modal-button",
				children: S
			}) })), t[7] = h, t[8] = R) : R = t[8];
			var L;
			t[9] !== i.title || t[10] !== R ? (L = u.jsxs("div", babelHelpers.extends({}, C, { children: [b, R] })), t[9] = i.title, t[10] = R, t[11] = L) : L = t[11], y = L;
		}
		var E;
		t[12] !== f.buttonText ? (E = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: f.buttonText,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
			onCancel: o("WAWebModalManager").closeModalManager
		}), t[12] = f.buttonText, t[13] = E) : E = t[13];
		var k;
		t[14] !== f || t[15] !== i ? (k = u.jsx(r("WAWebDrawerBody.react"), {
			theme: "padding",
			children: u.jsx(_, {
				list: f,
				onClick: m,
				selected: i
			})
		}), t[14] = f, t[15] = i, t[16] = k) : k = t[16];
		var I;
		t[17] !== y ? (I = u.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: "slide-up-down-footer",
			xstyle: d.container,
			children: y
		}), t[17] = y, t[18] = I) : I = t[18];
		var T;
		return t[19] !== E || t[20] !== k || t[21] !== I ? (T = u.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Tower,
			children: u.jsxs(r("WAWebDrawer.react"), {
				theme: "products",
				children: [
					E,
					k,
					I
				]
			})
		}), t[19] = E, t[20] = k, t[21] = I, t[22] = T) : T = t[22], T;
	}
	function p() {
		o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["ListDrawer: failed to send list message reply"]))).sendLogs("list-drawer-send-failed");
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(7), n = e.list, a = e.onClick, i = e.selected, l;
		if (t[0] !== n.sections || t[1] !== a || t[2] !== i) {
			var s;
			t[4] !== a || t[5] !== i ? (s = function(t, n) {
				return u.jsx(r("WAWebDrawerSection.react"), {
					title: t.title,
					theme: "list-section",
					children: t.rows.map(function(e, t) {
						var n = function() {
							return a(e);
						};
						return u.jsx(r("WAWebListMsgRow.react"), {
							row: e,
							onClick: n,
							selected: e === i
						}, t);
					})
				}, n);
			}, t[4] = a, t[5] = i, t[6] = s) : s = t[6], l = n.sections.map(s), t[0] = n.sections, t[1] = a, t[2] = i, t[3] = l;
		} else l = t[3];
		return l;
	}
	l.default = m;
}), 98);
