__d("WAWebMessageHoverBarProvider.react", [
	"fbt",
	"ReactDOM",
	"WALogger",
	"WAWebMessageHoverBarContainer.react",
	"WAWebMessageHoverBarContext",
	"WAWebNoop",
	"WAWebReactionGatingUtils",
	"WAWebReactionUserJourneyLogger",
	"WAWebReactionsBEUtils",
	"WAWebSendReactionMsgAction",
	"getErrorSafe",
	"react",
	"useWAWebOnUnmount",
	"useWAWebReactionEmojiPickerMenu",
	"useWAWebStableCallback",
	"useWAWebTimeout",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useMemo, f = d.useRef, g = d.useState, h = 50, y = .45, C = .4, b = .2, v = .4, S = 90, R = 500, L = 200, E = {
		canReact: !0,
		hasReply: !0,
		hasEdit: !1
	}, k = "xlcm4rn-B", I = "x17qceat-B";
	function T(t) {
		var n, a, i, l = t.children, u = g(null), d = u[0], k = u[1], I = g(!1), T = I[0], x = I[1], $ = g(null), P = $[0], N = $[1], M = g(E), w = M[0], A = M[1], F = g(!1), O = F[0], B = F[1], W = g(null), q = W[0], U = W[1], V = g(!1), H = V[0], G = V[1], z = f(null), j = f(null), K = f(null), Q = f(null), X = f(!1), Y = f(!1), J = f(null), Z = f(r("WAWebNoop")), ee = f(!1), te = f(null), ne = f(null), re = m(function() {
			J.current = null, k(null), N(null), A(E), B(!1), U(null), G(!1), ee.current = !1, z.current = null, j.current = null, X.current = !1;
		}, []), oe = (i = o("useWAWebTimeout")).useManualTimeout(function() {
			ee.current && re();
		}), ae = oe[0], ie = oe[1], le = m(function() {
			if (!ee.current) {
				var e = o("WAWebReactionGatingUtils").isReactionsMotionV2Enabled() && J.current != null;
				if (!e) {
					ie(), re();
					return;
				}
				ee.current = !0, G(!0), ae(L);
			}
		}, [
			ie,
			re,
			ae
		]);
		p(function() {
			if (d != null) {
				var e = z.current, t = e == null ? void 0 : e.closest("[data-testid=\"conversation-panel-messages\"]");
				if (!(e == null || t == null)) {
					var n = new IntersectionObserver(function(e) {
						var t = e[0];
						t != null && t.intersectionRatio === 0 && !Y.current && le();
					}, { root: t });
					return n.observe(e), function() {
						n.disconnect();
					};
				}
			}
		}, [d, le]);
		var se = i.useManualTimeout(function() {
			Y.current || le();
		}), ue = se[0], ce = se[1], de = i.useManualTimeout(function() {
			X.current = !1;
		}), me = de[0], pe = m(function(e, t, n, r) {
			ce(), ee.current && (ie(), ee.current = !1, G(!1));
			var o = t.id.toString();
			if (!(J.current !== o && (Y.current || X.current))) {
				if (J.current === o) {
					z.current = e, j.current = r;
					return;
				}
				J.current = o, z.current = e, j.current = r, U(e), k(t), x(n), N(r.menuContent), A(D(r)), B(!1);
			}
		}, [ce, ie]), _e = r("useWAWebStableCallback")(function() {
			var e = te.current, t = ne.current;
			t != null && (document.removeEventListener("mousemove", t, !0), ne.current = null), te.current = null, e != null && pe(e.bubbleEl, e.msg, e.isSentByMe, e.actions);
		}), fe = i.useManualTimeout(function() {
			_e();
		}), ge = fe[0], he = fe[1], ye = m(function() {
			var e = ne.current;
			e != null && (document.removeEventListener("mousemove", e, !0), ne.current = null), he(), te.current = null;
		}, [he]), Ce = m(function(e) {
			ye(), te.current = e;
			var t = {
				emaVelocity: -1,
				lastT: 0,
				lastX: 0,
				lastY: 0,
				peakVelocity: 0
			}, n = function(n) {
				ge(S);
				var e = n.timeStamp;
				if (t.lastT === 0) {
					t.lastT = e, t.lastX = n.clientX, t.lastY = n.clientY;
					return;
				}
				var r = e - t.lastT;
				if (!(r <= 0)) {
					var o = Math.hypot(n.clientX - t.lastX, n.clientY - t.lastY), a = o / r;
					t.lastT = e, t.lastX = n.clientX, t.lastY = n.clientY, t.emaVelocity = t.emaVelocity < 0 ? a : v * a + (1 - v) * t.emaVelocity, t.emaVelocity > t.peakVelocity && (t.peakVelocity = t.emaVelocity), t.peakVelocity >= C && t.emaVelocity < t.peakVelocity * y && t.emaVelocity < b && (he(), _e());
				}
			};
			ne.current = n, document.addEventListener("mousemove", n, {
				capture: !0,
				passive: !0
			}), ge(S);
		}, [
			_e,
			he,
			ye,
			ge
		]), be = m(function(e, t, n, r) {
			var o, a = t.id.toString();
			if (J.current === a) {
				pe(e, t, n, r);
				return;
			}
			if (((o = te.current) == null ? void 0 : o.msg.id.toString()) === a) {
				te.current = {
					actions: r,
					bubbleEl: e,
					isSentByMe: n,
					msg: t
				};
				return;
			}
			Ce({
				actions: r,
				bubbleEl: e,
				isSentByMe: n,
				msg: t
			});
		}, [pe, Ce]);
		r("useWAWebOnUnmount")(ye);
		var ve = m(function() {
			ye(), ue(h);
		}, [ye, ue]), Se = m(function() {
			Y.current || X.current || ue(h);
		}, [ue]), Re = m(function(t) {
			d != null && o("WAWebSendReactionMsgAction").sendReactionToMsg(d, t).then(function() {
				t === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT ? o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.reactionUnselect() : o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.reactionSelect(t);
			}).catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to send reaction from hover bar"]))).catching(r("getErrorSafe")(t)).sendLogs("hover-bar-send-reaction-failed");
			});
		}, [d]), Le = m(function() {
			ce();
		}, [ce]), Ee = m(function() {
			ce();
		}, [ce]), ke = m(function(e) {
			var t = e.relatedTarget, n = K.current;
			t instanceof Node && (n == null ? void 0 : n.contains(t)) === !0 || Se();
		}, [Se]), Ie = m(function(e) {
			e.target === e.currentTarget && ee.current && (ie(), re());
		}, [ie, re]), Te = m(function() {
			var e;
			ee.current || ((e = j.current) == null || e.onReply == null || e.onReply(), le());
		}, [le]), De = m(function() {
			var e;
			ee.current || ((e = j.current) == null || e.onEdit == null || e.onEdit(), le());
		}, [le]), xe = m(function() {
			var e;
			(e = j.current) == null || e.returnFocusToMessage == null || e.returnFocusToMessage();
		}, []), $e = m(function(e) {
			ee.current || (Re(e), re(), Z.current());
		}, [re, Re]), Pe = P, Ne = r("useWAWebReactionEmojiPickerMenu")({
			targetRef: K,
			msgId: (n = d == null ? void 0 : d.id.toString()) != null ? n : null,
			onSelection: $e,
			align: "start",
			onClose: function() {
				if (d == null) le();
				else {
					var e;
					(e = Q.current) == null || e.focus();
				}
			}
		}), Me = Ne.closeMenu, we = Ne.isMenuOpen, Ae = Ne.menuPortal, Fe = Ne.openMenu;
		p(function() {
			Z.current = Me;
		}, [Me]);
		var Oe = r("useWDSMenu")({
			targetRef: K,
			menu: Pe,
			position: "below",
			align: "end",
			enableUIM: !0,
			onClose: function() {
				d == null && le();
			}
		}), Be = Oe.isMenuOpen, We = Oe.menuPortal, qe = Oe.openMenu, Ue = we || Be, Ve = m(function() {
			var e, t;
			ee.current || (N((e = (t = j.current) == null ? void 0 : t.menuContent) != null ? e : null), ce(), X.current = !0, me(R), qe());
		}, [
			ce,
			me,
			qe
		]);
		p(function() {
			Y.current = Ue, Ue && (X.current = !1);
		}, [Ue]);
		var He = m(function() {
			ee.current || (ce(), X.current = !0, me(R), Fe());
		}, [
			ce,
			me,
			Fe
		]), Ge = m(function(e) {
			ee.current || (Re(e), re(), we && Me());
		}, [
			re,
			Re,
			we,
			Me
		]), ze = d != null || Ue, je = m(function(e) {
			K.current = e;
			var t = z.current;
			e == null || t == null || B(e.offsetWidth > t.offsetWidth);
		}, []), Ke = (a = d == null ? void 0 : d.id.toString()) != null ? a : null, Qe = m(function(e) {
			return Ke === e && O;
		}, [Ke, O]), Xe = _(function() {
			return {
				onHoverStart: be,
				onHoverEnd: ve,
				onFocusStart: pe,
				onFocusEnd: Se,
				cancelDismiss: ce,
				isBridgeActiveForMsg: Qe
			};
		}, [
			be,
			pe,
			ve,
			Se,
			ce,
			Qe
		]), Ye = T ? !O : O, Je = o("WAWebReactionGatingUtils").isReactionsMotionV2Enabled();
		return c.jsxs(r("WAWebMessageHoverBarContext").Provider, {
			value: Xe,
			children: [
				l,
				ze && d != null && q != null && o("ReactDOM").createPortal(c.jsx("div", babelHelpers.extends({ ref: je }, {
					0: { className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x67bb7w x87ps6o xtijo5x" },
					8: { className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x67bb7w x87ps6o x1o0tod" },
					4: { className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x67bb7w x87ps6o xtijo5x xvma63k xtsvl71 x9urbn7 x1n6iynp x1u6ievf x1larqbn" },
					12: { className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x67bb7w x87ps6o x1o0tod xvma63k xtsvl71 x9urbn7 x1n6iynp x1u6ievf x1larqbn" },
					2: { className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x87ps6o xtijo5x x47corl" },
					10: { className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x87ps6o x1o0tod x47corl" },
					6: { className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x87ps6o xtijo5x xvma63k xtsvl71 x9urbn7 x1n6iynp x1u6ievf x1larqbn x47corl" },
					14: { className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x87ps6o x1o0tod xvma63k xtsvl71 x9urbn7 x1n6iynp x1u6ievf x1larqbn x47corl" },
					1: { className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x67bb7w x87ps6o xtijo5x x1eyc3vh xfbpl4g x9urbn7 xoad59s x1u6ievf xhmqdbg x1q1rmc8" },
					9: { className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x67bb7w x87ps6o x1o0tod x1eyc3vh xfbpl4g x9urbn7 xoad59s x1u6ievf xhmqdbg x1q1rmc8" },
					5: { className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x67bb7w x87ps6o xtijo5x x1eyc3vh xfbpl4g x9urbn7 xoad59s x1u6ievf xhmqdbg x1q1rmc8" },
					13: { className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x67bb7w x87ps6o x1o0tod x1eyc3vh xfbpl4g x9urbn7 xoad59s x1u6ievf xhmqdbg x1q1rmc8" },
					3: { className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x87ps6o xtijo5x x47corl x1eyc3vh xfbpl4g x9urbn7 xoad59s x1u6ievf xhmqdbg x1q1rmc8" },
					11: { className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x87ps6o x1o0tod x47corl x1eyc3vh xfbpl4g x9urbn7 xoad59s x1u6ievf xhmqdbg x1q1rmc8" },
					7: { className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x87ps6o xtijo5x x47corl x1eyc3vh xfbpl4g x9urbn7 xoad59s x1u6ievf xhmqdbg x1q1rmc8" },
					15: { className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x87ps6o x1o0tod x47corl x1eyc3vh xfbpl4g x9urbn7 xoad59s x1u6ievf xhmqdbg x1q1rmc8" }
				}[!!Ye << 3 | !!(Je && H) << 2 | !!H << 1 | !!(Je && !H) << 0], {
					"data-testid": "reactions_hover_bar_content",
					role: "group",
					"aria-label": s._(
						/*BTDS*/
						""
					),
					onAnimationEnd: Je ? Ie : void 0,
					onFocus: Ee,
					onBlur: ke,
					onMouseEnter: Le,
					onMouseLeave: ve,
					children: c.jsx(r("WAWebMessageHoverBarContainer.react"), {
						msg: d,
						canReact: w.canReact,
						onReaction: Ge,
						onOpenEmojiPicker: He,
						onReply: w.hasReply ? Te : null,
						onEdit: w.hasEdit ? De : null,
						onMoreOptions: Ve,
						onEscape: xe,
						onMouseEnter: Le,
						toggleButtonRef: Q
					})
				}), d.id.toString()), q),
				Ae,
				We
			]
		});
	}
	T.displayName = T.name + " [from " + i.id + "]";
	function D(e) {
		return {
			canReact: e.canReact !== !1,
			hasReply: e.onReply != null,
			hasEdit: e.onEdit != null
		};
	}
	l.default = T;
}), 226);
