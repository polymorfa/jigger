__d("WAWebTPEditPdfSendBar.react", [
	"fbt",
	"WALogger",
	"WAWebExpressionsPanelPicker.react",
	"WAWebFlex.react",
	"WAWebMediaOpaqueData",
	"WAWebMsgType",
	"WAWebNullFunc",
	"WAWebPrepRawMedia",
	"WAWebTPEditPdfInWhatsappContext.react",
	"WAWebTPFetchAnnotatedPdfBuffer",
	"WAWebTPLoggingUtils",
	"WAWebUnstyledButton.react",
	"WAWebWdsIcSendFilledIcon.react",
	"WDSText.react",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m = d || (d = o("react")), p = d, _ = p.useEffect, f = p.useRef, g = p.useState, h = {
		container: {
			position: "xixxii4",
			bottom: "x1ey2m1c",
			insetInlineStart: "x1o0tod",
			insetInlineEnd: "xtijo5x",
			left: null,
			right: null,
			height: "x14baz6b",
			backgroundColor: "x1h3rtpe",
			borderTopColor: "xx42vgk",
			borderTopWidth: "x178xt8z",
			borderTopStyle: "x13fuv20",
			zIndex: "x28dyy9",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			justifyContent: "x1qughib",
			$$css: !0
		},
		sendButton: {
			width: "x100vrsf",
			height: "x1vqgdyp",
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			backgroundColor: "xfn3atn",
			color: "x1pse0pq",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			flexShrink: "x2lah0s",
			cursor: "x1ypdohk",
			$$css: !0
		},
		sendButtonDisabled: {
			opacity: "xbyyjgo",
			cursor: "xt0e3qv",
			pointerEvents: "x47corl",
			$$css: !0
		},
		inputWrapper: {
			width: "xh8yej3",
			maxWidth: "x27kpxv",
			height: "xdd8jsf",
			boxSizing: "x9f619",
			backgroundColor: "x1280gxy",
			borderTopColor: "xnj1f2r",
			borderInlineEndColor: "x2uibgs",
			borderBottomColor: "xkveyfu",
			borderInlineStartColor: "x12llq9",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			paddingInlineStart: "x1g0dm76",
			paddingInlineEnd: "xpdmqnj",
			paddingLeft: null,
			paddingRight: null,
			marginInlineStart: "x150mmf0",
			marginInlineEnd: "xqf2s3x",
			marginLeft: null,
			marginRight: null,
			$$css: !0
		},
		destinationPill: {
			height: "x10w6t97",
			boxSizing: "x9f619",
			paddingInlineStart: "x12w63v0",
			paddingInlineEnd: "x1nzty39",
			paddingLeft: null,
			paddingRight: null,
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xnj1f2r",
			borderInlineEndColor: "x2uibgs",
			borderBottomColor: "xkveyfu",
			borderInlineStartColor: "x12llq9",
			maxWidth: "x1e4dklr",
			flexShrink: "x2lah0s",
			marginInlineEnd: "xqf2s3x",
			$$css: !0
		},
		destinationPillName: {
			minWidth: "xeuugli",
			$$css: !0
		}
	};
	function y(e) {
		var t = o("react-compiler-runtime").c(14), n = e.inputRef, r = e.onEmoji, a, i;
		t[0] !== n ? (a = function() {
			var e;
			(e = n.current) == null || e.focus();
		}, i = [n], t[0] = n, t[1] = a, t[2] = i) : (a = t[1], i = t[2]), _(a, i);
		var l;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (l = { className: "xqf2s3x" }, t[3] = l) : l = t[3];
		var u;
		t[4] !== r ? (u = m.jsx("div", babelHelpers.extends({}, l, { children: m.jsx(o("WAWebExpressionsPanelPicker.react").ExpressionsPanelPicker, {
			getComposeBoxEditorRef: o("WAWebNullFunc").returnNull,
			onEmoji: r,
			onGif: null,
			onSticker: null
		}) })), t[4] = r, t[5] = u) : u = t[5];
		var c, d, p;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (c = { className: "x1iyjqo2 xs83m0k x1t1x2f9 xeuugli x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1a2a7pz xjbqb8w xjb2p0i x1f6kntn xo1l8bm x8r4c90 x12xpedu x14ug900 x1hcheoe" }, d = s._(
			/*BTDS*/
			""
		), p = s._(
			/*BTDS*/
			""
		), t[6] = c, t[7] = d, t[8] = p) : (c = t[6], d = t[7], p = t[8]);
		var f;
		t[9] !== n ? (f = m.jsx("input", babelHelpers.extends({ ref: n }, c, {
			placeholder: d,
			"aria-label": p
		})), t[9] = n, t[10] = f) : f = t[10];
		var g;
		return t[11] !== u || t[12] !== f ? (g = m.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: h.inputWrapper,
			children: [u, f]
		}), t[11] = u, t[12] = f, t[13] = g) : g = t[13], g;
	}
	function C(e) {
		var t = o("react-compiler-runtime").c(2), n = e.chat, a;
		return t[0] !== n.formattedTitle ? (a = m.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: h.destinationPill,
			children: m.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				maxLines: 1,
				xstyle: h.destinationPillName,
				children: n.formattedTitle
			})
		}), t[0] = n.formattedTitle, t[1] = a) : a = t[1], a;
	}
	function b(t) {
		var a = t.chat, i = t.filename, l = t.mimetype, d = t.onSent, p = o("WAWebTPEditPdfInWhatsappContext.react").useWAWebTPEditPdfInWhatsappContext(), b = p.filehash, v = p.undoRedoState, S = f(null), R = g(!1), L = R[0], E = R[1], k = f(null);
		function I(e) {
			var t, n, r = S.current;
			if (r != null) {
				var o = (t = r.selectionStart) != null ? t : r.value.length, a = (n = r.selectionEnd) != null ? n : r.value.length;
				r.value = r.value.slice(0, o) + e + r.value.slice(a);
				var i = o + e.length;
				r.selectionStart = i, r.selectionEnd = i, r.focus();
			}
		}
		function T() {
			if (k.current != null) return k.current;
			var e = o("WAWebTPFetchAnnotatedPdfBuffer").fetchAnnotatedPdfBuffer().then(function(e) {
				return e == null && (k.current = null), e;
			});
			return k.current = e, e;
		}
		_(function() {
			T();
		}, []);
		function D() {
			return x.apply(this, arguments);
		}
		function x() {
			return x = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var t, n;
				if (!L) {
					o("WAWebTPLoggingUtils").logAnnotatedSendEvent(v.hasUndo, b), E(!0);
					var s = (t = (n = S.current) == null ? void 0 : n.value) != null ? t : "";
					try {
						var m = yield T();
						if (m == null) {
							o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Received null buffer when requesting updated PDF"]))).sendLogs("edit-pdf-null-buffer");
							return;
						}
						var p = yield r("WAWebMediaOpaqueData").createFromData(m, l), _ = o("WAWebPrepRawMedia").prepRawMedia(p, {
							asDocument: !0,
							filename: i
						});
						_.sendToChat({
							chat: a,
							options: {
								type: o("WAWebMsgType").MSG_TYPE.DOCUMENT,
								caption: s || void 0,
								addEvenWhilePreparing: !0,
								placeholderProps: { filename: i }
							}
						}).catch(function(e) {
							o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Failed to send edited PDF"]))).catching(r("getErrorSafe")(e)).sendLogs("edit-pdf-send-fail");
						}), d();
					} catch (e) {
						o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Failed to send edited PDF"]))).catching(r("getErrorSafe")(e)).sendLogs("edit-pdf-send-fail");
					} finally {
						E(!1);
					}
				}
			}), x.apply(this, arguments);
		}
		return m.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: h.container,
			children: [
				m.jsx(C, { chat: a }),
				m.jsx(y, {
					inputRef: S,
					onEmoji: I
				}),
				m.jsx(r("WAWebUnstyledButton.react"), {
					xstyle: [h.sendButton, L && h.sendButtonDisabled],
					disabled: L,
					onClick: D,
					"aria-label": s._(
						/*BTDS*/
						""
					),
					children: m.jsx(o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon, {
						directional: !0,
						width: 24,
						height: 24
					})
				})
			]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = b;
}), 226);
