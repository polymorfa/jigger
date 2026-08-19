__d("WAWebNewsletterAcceptAdminInviteModal.react", [
	"fbt",
	"WAWeb-moment",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebConfirmPopup.react",
	"WAWebDetailImage.react",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebNewsletterAcceptAdminInviteAction",
	"WAWebNewsletterErrorPopups.react",
	"WAWebNewsletterModalsUtils.react",
	"WAWebNewsletterName.react",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"getErrorSafe",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback, d = {
		expirationDate: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		marginBottom12: {
			marginBottom: "xcytdqz",
			$$css: !0
		}
	}, m = async function(t) {
		o("WAWebModalManager").ModalManager.close(), await p(t);
	}, p = async function(t) {
		try {
			await o("WAWebNewsletterAcceptAdminInviteAction").acceptNewsletterAdminInviteAction(t.id), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) })), o("WAWebModalManager").ModalManager.close();
		} catch (e) {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebNewsletterErrorPopups.react").NewsletterCouldNotAcceptInvitePopup, {
				onOK: function() {
					return m(t);
				},
				error: r("getErrorSafe")(e)
			}), { transition: "modal-flow" });
		}
	};
	function _(e) {
		var t = o("react-compiler-runtime").c(20), n = e.chat, r = e.expiration, a = e.extendedNux, i;
		t[0] !== n ? (i = async function() {
			await p(n);
		}, t[0] = n, t[1] = i) : i = t[1];
		var l = i, s;
		t[2] !== n ? (s = function() {
			o("WAWebModalManager").ModalManager.close(), o("WAWebCmd").Cmd.openChatBottom({
				chat: n,
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterAdminInviteAcceptModal
			});
		}, t[2] = n, t[3] = s) : s = t[3];
		var c = s, m;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (m = h.acceptInvite(), t[4] = m) : m = t[4];
		var _;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (_ = h.closeModal(), t[5] = _) : _ = t[5];
		var y;
		t[6] !== n ? (y = u.jsx(f, { chat: n }), t[6] = n, t[7] = y) : y = t[7];
		var C;
		t[8] !== a ? (C = u.jsx(g, { extendedNux: a }), t[8] = a, t[9] = C) : C = t[9];
		var b;
		t[10] !== r ? (b = h.expiration(r), t[10] = r, t[11] = b) : b = t[11];
		var v;
		t[12] !== b ? (v = u.jsx(o("WAWebText.react").WAWebTextSmall, {
			marginTop: 20,
			xstyle: d.expirationDate,
			children: b
		}), t[12] = b, t[13] = v) : v = t[13];
		var S;
		return t[14] !== c || t[15] !== l || t[16] !== y || t[17] !== C || t[18] !== v ? (S = u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			okText: m,
			onOK: l,
			cancelText: _,
			onCancel: c,
			children: [
				y,
				C,
				v
			]
		}), t[14] = c, t[15] = l, t[16] = y, t[17] = C, t[18] = v, t[19] = S) : S = t[19], S;
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(8), n = e.chat, r;
		t[0] !== n.id ? (r = u.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: n.id,
			size: o("WAWebDetailImage.react").DetailImageSize.Medium,
			xstyle: d.marginBottom12
		}), t[0] = n.id, t[1] = r) : r = t[1];
		var a;
		t[2] !== n ? (a = u.jsx(o("WAWebText.react").WAWebTextLarge, {
			as: "h1",
			xstyle: d.marginBottom12,
			children: u.jsx(o("WAWebNewsletterName.react").NewsletterName, {
				chat: n,
				checkmarkLarge: !0
			})
		}), t[2] = n, t[3] = a) : a = t[3];
		var i;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (i = u.jsx(o("WAWebText.react").WAWebTextSmall, { children: h.subtitle() }), t[4] = i) : i = t[4];
		var l;
		return t[5] !== r || t[6] !== a ? (l = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			marginBottom: 12,
			children: [
				r,
				a,
				i
			]
		}), t[5] = r, t[6] = a, t[7] = l) : l = t[7], l;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(1), n = e.extendedNux;
		if (!n) return null;
		var r;
		return t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			children: u.jsx(o("WAWebNewsletterModalsUtils.react").BulletPointList, { bullets: o("WAWebNewsletterModalsUtils.react").ExtendedBullets })
		}), t[0] = r) : r = t[0], r;
	}
	var h = {
		acceptInvite: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		closeModal: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		expiration: function(t) {
			var e = r("WAWeb-moment").utc(t * 1e3), n = e.diff(r("WAWeb-moment")().utc(), "days");
			return n < 0 ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				"",
				[s._plural(n, "number")]
			);
		},
		subtitle: function() {
			return s._(
				/*BTDS*/
				""
			);
		}
	};
	l.default = _;
}), 226);
