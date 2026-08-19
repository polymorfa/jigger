__d("WAWebSendLogsPopup.react", [
	"fbt",
	"WALinkify",
	"WAWebABPropsSaga",
	"WAWebConfirmPopup.react",
	"WAWebConnModel",
	"WAWebEventFiles",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebKeyboardHotKeys.react",
	"WAWebModalManager",
	"WAWebPhoneUtils",
	"WAWebRichTextField.react",
	"WAWebStopEvent",
	"WAWebSupportChatStrings",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUploadUserReport",
	"WAWebUserPrefsMeUser",
	"WAWebXAltIcon.react",
	"compactMap",
	"fbs",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useRef, p = c.useState, _ = 320, f = 50, g = 10, h = 500, y = 3, C = 10485760;
	function b() {
		return o("WAWebConnModel").Conn.isSMB ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	function v(e) {
		var t = e.onDeleteScreenshot, n = e.screenshots, a = r("compactMap")(n, function(e, n) {
			if (e.url == null) return null;
			var r = "url(" + e.url + ")", a = e.url + "-" + n;
			return u.jsx("div", {
				className: "x1n2onr6 x1faq86j x1vtj31x x1t79jtt xav9cv8 x7g7pl8 x4tpdpg x1wbi8v6 x1oreiyq x1vwr25l x18d0r48 x1e7nkc8",
				style: { backgroundImage: r },
				children: u.jsx("button", {
					className: "x10l6tqk xnfr1j x1h1655f x17t9dm2",
					onClick: function() {
						t(n);
					},
					children: u.jsx(o("WAWebXAltIcon.react").XAltIcon, {})
				})
			}, a);
		});
		return a.length !== 0 ? u.jsx("div", {
			className: "x78zum5 x1tiyuxx x1uc92m x1nbhmlj x181vq82 x1q7yeco",
			children: a
		}) : null;
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t = e.isDragging, n = e.onAttachClick, r = e.reachedMaxScreenshots;
		if (r) {
			var o = y;
			return u.jsx("div", {
				className: "x9f619 x78zum5 xdt5ytf x6s0dn4 xl56j7k xh8yej3 xlup9mm xexx8yu xyri2b x18d9i69 x1c1uobl x98l61r x1pg5gke x2b8uid xtvhhri xjbqb8w xpw2u0k xt0e3qv",
				children: s._(
					/*BTDS*/
					"",
					[s._plural(o, "number")]
				)
			});
		} else if (t) return u.jsx("div", {
			className: "x9f619 x78zum5 xdt5ytf x6s0dn4 xl56j7k xh8yej3 xlup9mm xexx8yu xyri2b x18d9i69 x1c1uobl x98l61r x1pg5gke xo1mcw5 x2b8uid xtvhhri x1ypdohk xjbqb8w",
			children: s._(
				/*BTDS*/
				""
			)
		});
		return u.jsx("div", {
			className: "x9f619 x78zum5 xdt5ytf x6s0dn4 xl56j7k xh8yej3 xlup9mm xexx8yu xyri2b x18d9i69 x1c1uobl x98l61r x1pg5gke xo1mcw5 x2b8uid xtvhhri x1ypdohk xjbqb8w",
			onClick: n,
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t, n = e.entityId, a = e.onCancel, i = e.onSend, l = e.supportTag, c = p(""), R = c[0], L = c[1], E = p(void 0), k = E[0], I = E[1], T = p(""), D = T[0], x = T[1], $ = p(void 0), P = $[0], N = $[1], M = p(b().toString()), w = M[0], A = M[1], F = p(void 0), O = F[0], B = F[1], W = p((t = e.description) != null ? t : ""), q = W[0], U = W[1], V = p(void 0), H = V[0], G = V[1], z = p([]), j = z[0], K = z[1], Q = p(!1), X = Q[0], Y = Q[1], J = p(!1), Z = J[0], ee = J[1], te = m(null), ne = m(null);
		d(function() {
			var e;
			return (e = te.current) == null || e.restoreFocus(), ee(o("WAWebABPropsSaga").getIsSagaV1Enabled()), function() {
				j.map(function(e) {
					var t = e.url;
					return URL.revokeObjectURL(t);
				});
			};
		}, []);
		var re = function(t) {
			return t.length > g;
		}, oe = function(t) {
			return R === t;
		}, ae = function() {
			return j.length >= y;
		}, ie = function() {
			a && a(), o("WAWebModalManager").ModalManager.close();
		}, le = function(t, n) {
			Y(t);
		}, se = function() {
			var e = D.trim();
			D && !oe(e) && N(s._(
				/*BTDS*/
				""
			)), x(e);
		}, ue = function() {
			var e = R.trim();
			R && !o("WALinkify").validateEmail(e) && I(s._(
				/*BTDS*/
				""
			)), L(e);
		}, ce = function(t) {
			o("WALinkify").validateEmail(t) && I(void 0), L(t);
		}, de = function() {
			q && !re(q) && G(s._(
				/*BTDS*/
				""
			));
		}, me = function(t) {
			if (!ae()) {
				var e;
				(e = ne.current) == null || e.click();
			}
		}, pe = function(t) {
			t.preventDefault(), t.stopPropagation(), !ae() && o("WAWebEventFiles").getFiles(t, "image/*").then(function(e) {
				ne.current && (ne.current.value = "");
				var t = e.filter(function(e) {
					return e.size <= C;
				});
				if (t.length < e.length && o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) })), !ae()) {
					var n = y - j.length, r = t.slice(0, n), a = r.map(function(e) {
						return {
							file: e,
							url: URL.createObjectURL(e)
						};
					});
					K(j.concat(a));
				}
			});
		}, _e = function(t) {
			x(t), oe(t) && N(void 0);
		}, fe = function(t) {
			U(t), re(t) && G(void 0);
		}, ge = function(t) {
			A(t), B(void 0);
		}, he = async function() {
			var e = 0, t = R.trim(), a = D.trim();
			if (L(t), x(a), o("WALinkify").validateEmail(t) || (I(s._(
				/*BTDS*/
				""
			)), e += 1), oe(a) || (N(s._(
				/*BTDS*/
				""
			)), e += 1), re(q) || (G(s._(
				/*BTDS*/
				""
			)), e += 1), e === 0) {
				I(void 0), N(void 0), B(void 0), G(void 0);
				var c = j.map(function(e) {
					return URL.revokeObjectURL(e.url), e.file;
				});
				K([]);
				var d = w.trim() || r("fbs")._(
					/*BTDS*/
					""
				).toString(), m = o("WAWebUserPrefsMeUser").getMaybeMePnUser(), p = m ? o("WAWebPhoneUtils").formatPhone(m.user) : void 0;
				o("WAWebUploadUserReport").uploadUserReport({
					phoneNumber: p,
					email: t,
					subject: d,
					description: q,
					screenshots: c,
					supportTag: l,
					entityId: n
				}), i && i({
					subject: d,
					description: q,
					numScreenshots: c.length
				}), o("WAWebModalManager").ModalManager.close(), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
			}
		}, ye = function(t) {
			var e = j.slice(), n = e.splice(t, 1), r = n[0];
			URL.revokeObjectURL(r.url), K(e);
		}, Ce = u.jsxs("div", { children: [
			u.jsx(v, {
				screenshots: j,
				onDeleteScreenshot: ye
			}),
			u.jsx(S, {
				reachedMaxScreenshots: ae(),
				isDragging: X,
				onAttachClick: me
			}),
			u.jsx("input", {
				className: "x1s85apg",
				accept: "image/*",
				type: "file",
				multiple: !0,
				onClick: o("WAWebStopEvent").stopPropagation,
				onChange: pe,
				ref: ne,
				disabled: ae()
			})
		] }), be = { enter: o("WAWebStopEvent").stopPropagation };
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "send-logs"
			},
			title: s._(
				/*BTDS*/
				""
			),
			okText: s._(
				/*BTDS*/
				""
			),
			onOK: he,
			onCancel: ie,
			onDrop: pe,
			onDragChange: le,
			children: u.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
				handlers: be,
				children: [
					u.jsx(o("WAWebRichTextField.react").RichTextField, {
						testid: "send-logs-email-address",
						ref: te,
						value: R,
						error: k,
						maxLength: _,
						onChange: function(t) {
							return ce(t.text);
						},
						onBlur: ue,
						placeholder: s._(
							/*BTDS*/
							""
						)
					}),
					u.jsx(o("WAWebRichTextField.react").RichTextField, {
						testid: "send-logs-email-confirm",
						editable: !0,
						value: D,
						error: P,
						maxLength: _,
						onChange: function(t) {
							return _e(t.text);
						},
						onBlur: se,
						placeholder: s._(
							/*BTDS*/
							""
						)
					}),
					u.jsx(o("WAWebRichTextField.react").RichTextField, {
						testid: "send-logs-email-subject",
						value: w,
						error: O,
						maxLength: f,
						onChange: function(t) {
							return ge(t.text);
						},
						placeholder: s._(
							/*BTDS*/
							""
						)
					}),
					u.jsx(o("WAWebRichTextField.react").RichTextField, {
						testid: "send-logs-description",
						value: q,
						error: H,
						maxLength: h,
						onChange: function(t) {
							return fe(t.text);
						},
						onBlur: de,
						placeholder: s._(
							/*BTDS*/
							""
						),
						multiline: !0
					}),
					Ce,
					Z && u.jsxs(o("WAWebText.react").WAWebTextMuted, {
						marginTop: 20,
						children: [
							o("WAWebSupportChatStrings").SupportChatDeviceInfoDisclaimer(),
							" ",
							u.jsx(o("WAWebExternalLink.react").ExternalLink, {
								href: o("WAWebFaqUrl").getSupportChatFaqUrl(),
								children: s._(
									/*BTDS*/
									""
								)
							})
						]
					})
				]
			})
		});
	}
	R.displayName = R.name + " [from " + i.id + "]", l.default = R;
}), 226);
