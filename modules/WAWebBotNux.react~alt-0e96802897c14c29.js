__d("WAWebBotNux.react", [
	"fbt",
	"WAWebBotTos",
	"WAWebBotTosIds",
	"WAWebBox.react",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebImg.react",
	"WAWebLockIcon.react",
	"WAWebMetaAiRingAssetResolver",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebText.react",
	"WAWebWdsIcAiFilledIcon.react",
	"WAWebWdsIcPhotoAiIcon.react",
	"WAWebWdsIllAiChatsIcon.react",
	"WDSIconWdsIcAiChat.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebDisclosureShownTracking",
	"useWAWebFocusOnMount"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useState, _ = {
		headerText: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		icon: {
			color: "xhslqc4",
			$$css: !0
		},
		sectionIcon: {
			width: "xvy4d1p",
			$$css: !0
		},
		sectionTitle: {
			width: "x1cvmir6",
			lineHeight: "x1o2sk6j",
			$$css: !0
		},
		divider: {
			width: "xw90zxv",
			height: "xjm9jq1",
			backgroundColor: "x3x0x6p",
			$$css: !0
		}
	};
	function f() {
		return {
			headerText: s._(
				/*BTDS*/
				""
			),
			sections: [{
				icon: c.jsx(r("WDSIconWdsIcAiChat.react"), {
					width: 24,
					height: 24,
					iconXstyle: _.icon
				}),
				title: s._(
					/*BTDS*/
					""
				),
				subtitle: s._(
					/*BTDS*/
					""
				)
			}, {
				icon: c.jsx(o("WAWebLockIcon.react").LockIcon, {
					width: 24,
					height: 24,
					iconXstyle: _.icon
				}),
				title: s._(
					/*BTDS*/
					""
				),
				subtitle: s._(
					/*BTDS*/
					""
				)
			}]
		};
	}
	function g() {
		return {
			headerText: s._(
				/*BTDS*/
				""
			),
			sections: [{
				icon: c.jsx(r("WDSIconWdsIcAiChat.react"), {
					width: 24,
					height: 24,
					iconXstyle: _.icon
				}),
				title: s._(
					/*BTDS*/
					""
				),
				subtitle: s._(
					/*BTDS*/
					""
				)
			}, {
				icon: c.jsx(o("WAWebLockIcon.react").LockIcon, {
					width: 24,
					height: 24,
					iconXstyle: _.icon
				}),
				title: s._(
					/*BTDS*/
					""
				),
				subtitle: s._(
					/*BTDS*/
					""
				)
			}]
		};
	}
	function h() {
		return {
			headerText: s._(
				/*BTDS*/
				""
			),
			sections: [
				{
					icon: c.jsx(o("WAWebWdsIcAiFilledIcon.react").WdsIcAiFilledIcon, {
						width: 24,
						height: 24,
						iconXstyle: _.icon
					}),
					title: s._(
						/*BTDS*/
						""
					),
					subtitle: s._(
						/*BTDS*/
						""
					)
				},
				{
					icon: c.jsx(o("WAWebWdsIcPhotoAiIcon.react").WdsIcPhotoAiIcon, {
						width: 24,
						height: 24,
						iconXstyle: _.icon
					}),
					title: s._(
						/*BTDS*/
						""
					),
					subtitle: s._(
						/*BTDS*/
						""
					)
				},
				{
					icon: c.jsx(o("WAWebLockIcon.react").LockIcon, {
						width: 24,
						height: 24,
						iconXstyle: _.icon
					}),
					title: s._(
						/*BTDS*/
						""
					),
					subtitle: s._(
						/*BTDS*/
						""
					)
				}
			]
		};
	}
	function y(e) {
		switch (e) {
			case "agent": return o("WAWebBotTosIds").getBotAgentTosId();
			case "invoke": return o("WAWebBotTosIds").getBotInvokeTosId();
			case "shortcut": return o("WAWebBotTosIds").getBotShortcutTosId();
		}
	}
	function C(t) {
		var n = o("react-compiler-runtime").c(68), a = t.onCancel, i = t.onOK, l = t.origin, u = p(!1), d = u[0], C = u[1], S;
		n[0] !== l ? (S = y(l), n[0] = l, n[1] = S) : S = n[1];
		var R;
		n[2] !== S ? (R = { noticeId: S }, n[2] = S, n[3] = R) : R = n[3];
		var L = r("useWAWebDisclosureShownTracking")(R), E = v, k;
		n[4] !== i || n[5] !== l ? (k = async function() {
			o("WAWebBotTos").hasSeenBotTos() || (C(!0), await E(l), C(!1)), o("WAWebModalManager").ModalManager.close(), i == null || i();
		}, n[4] = i, n[5] = l, n[6] = k) : k = n[6];
		var I = k, T;
		n[7] !== a ? (T = function() {
			o("WAWebModalManager").ModalManager.close(), a == null || a();
		}, n[7] = a, n[8] = T) : T = n[8];
		var D = T, x = r("useWAWebFocusOnMount")(), $, P;
		n[9] !== l ? ($ = function() {
			o("WAWebBotTos").hasSeenBotTos() && E(l);
		}, P = [l], n[9] = l, n[10] = $, n[11] = P) : ($ = n[10], P = n[11]), m($, P);
		var N;
		n[12] !== l ? (N = c.jsx(o("WAWebFlex.react").FlexItem, { children: l === "agent" ? c.jsx(o("WAWebWdsIllAiChatsIcon.react").WdsIllAiChatsIcon, {
			width: 168,
			height: 128
		}) : c.jsx(r("WAWebImg.react"), {
			src: o("WAWebMetaAiRingAssetResolver").getBotAssistantURL(),
			style: {
				width: 168,
				height: 168
			}
		}) }), n[12] = l, n[13] = N) : N = n[13];
		var M = N, w, A, F, O, B, W, q, U, V, H, G, z, j, K, Q, X;
		if (n[14] !== D || n[15] !== I || n[16] !== M || n[17] !== d || n[18] !== l || n[19] !== x || n[20] !== L) {
			var Y;
			e: switch (l) {
				case "invoke": {
					Y = f();
					break e;
				}
				case "shortcut": {
					Y = h();
					break e;
				}
				default: Y = g();
			}
			var J = Y, Z = J.headerText, ee = J.sections, te;
			n[37] !== l ? (te = l === "agent" ? s._(
				/*BTDS*/
				"",
				[
					s._implicitParam("=m2", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: o("WAWebFaqUrl").getBotPrivacyPolicyUrl(),
						children: s._(
							/*BTDS*/
							""
						)
					})),
					s._implicitParam("=m5", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: o("WAWebFaqUrl").getBotTermsUrl(),
						children: s._(
							/*BTDS*/
							""
						)
					})),
					s._implicitParam("=m8", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: o("WAWebFaqUrl").getBotLearnMoreUrl(),
						children: s._(
							/*BTDS*/
							""
						)
					}))
				]
			) : s._(
				/*BTDS*/
				"",
				[
					s._implicitParam("=m2", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: o("WAWebFaqUrl").getBotPrivacyPolicyUrl(),
						children: s._(
							/*BTDS*/
							""
						)
					})),
					s._implicitParam("=m5", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: o("WAWebFaqUrl").getBotTermsUrl(),
						children: s._(
							/*BTDS*/
							""
						)
					})),
					s._implicitParam("=m8", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: o("WAWebFaqUrl").getBotLearnMoreUrl(),
						children: s._(
							/*BTDS*/
							""
						)
					}))
				]
			), n[37] = l, n[38] = te) : te = n[38], F = te, j = L, A = o("WAWebConfirmPopup.react").ConfirmPopup, W = x, q = o("WAWebModal.react").ModalTheme.BotNut, n[39] === Symbol.for("react.memo_cache_sentinel") ? (U = s._(
				/*BTDS*/
				""
			), n[39] = U) : U = n[39], V = I, H = d === !0, n[40] === Symbol.for("react.memo_cache_sentinel") ? (G = s._(
				/*BTDS*/
				""
			), n[40] = G) : G = n[40], z = D, w = o("WAWebFlex.react").FlexColumn, K = "center", n[41] === Symbol.for("react.memo_cache_sentinel") ? (Q = [o("WDSMargins.stylex").wdsMargins.marginVerAuto, o("WDSPaddings.stylex").wdsPaddings.paddingBottom16], n[41] = Q) : Q = n[41], X = M;
			var ne;
			n[42] === Symbol.for("react.memo_cache_sentinel") ? (ne = [
				_.headerText,
				o("WDSMargins.stylex").wdsMargins.marginHor8,
				o("WDSMargins.stylex").wdsMargins.marginTop16,
				o("WDSMargins.stylex").wdsMargins.marginBottom8
			], n[42] = ne) : ne = n[42], O = c.jsx(r("WAWebBox.react"), {
				xstyle: ne,
				children: c.jsx(o("WAWebText.react").WAWebTextLarge, {
					weight: "bold",
					children: Z
				})
			}), B = ee.map(b), n[14] = D, n[15] = I, n[16] = M, n[17] = d, n[18] = l, n[19] = x, n[20] = L, n[21] = w, n[22] = A, n[23] = F, n[24] = O, n[25] = B, n[26] = W, n[27] = q, n[28] = U, n[29] = V, n[30] = H, n[31] = G, n[32] = z, n[33] = j, n[34] = K, n[35] = Q, n[36] = X;
		} else w = n[21], A = n[22], F = n[23], O = n[24], B = n[25], W = n[26], q = n[27], U = n[28], V = n[29], H = n[30], G = n[31], z = n[32], j = n[33], K = n[34], Q = n[35], X = n[36];
		var re;
		n[43] === Symbol.for("react.memo_cache_sentinel") ? (re = c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(_.divider, o("WDSMargins.stylex").wdsMargins.marginVer16))), n[43] = re) : re = n[43];
		var oe;
		n[44] === Symbol.for("react.memo_cache_sentinel") ? (oe = [o("WDSMargins.stylex").wdsMargins.marginHor8, o("WDSMargins.stylex").wdsMargins.marginVer8], n[44] = oe) : oe = n[44];
		var ae;
		n[45] !== F ? (ae = c.jsx(r("WAWebBox.react"), {
			xstyle: oe,
			children: c.jsx(o("WAWebText.react").WAWebTextMuted, { children: F })
		}), n[45] = F, n[46] = ae) : ae = n[46];
		var ie;
		n[47] !== w || n[48] !== O || n[49] !== B || n[50] !== ae || n[51] !== K || n[52] !== Q || n[53] !== X ? (ie = c.jsxs(w, {
			align: K,
			xstyle: Q,
			children: [
				X,
				O,
				B,
				re,
				ae
			]
		}), n[47] = w, n[48] = O, n[49] = B, n[50] = ae, n[51] = K, n[52] = Q, n[53] = X, n[54] = ie) : ie = n[54];
		var le;
		n[55] !== A || n[56] !== W || n[57] !== q || n[58] !== U || n[59] !== V || n[60] !== H || n[61] !== G || n[62] !== z || n[63] !== ie ? (le = c.jsx(A, {
			ref: W,
			type: q,
			okText: U,
			onOK: V,
			okSpinner: H,
			cancelText: G,
			onCancel: z,
			children: ie
		}), n[55] = A, n[56] = W, n[57] = q, n[58] = U, n[59] = V, n[60] = H, n[61] = G, n[62] = z, n[63] = ie, n[64] = le) : le = n[64];
		var se;
		return n[65] !== j || n[66] !== le ? (se = c.jsx("div", {
			ref: j,
			children: le
		}), n[65] = j, n[66] = le, n[67] = se) : se = n[67], se;
	}
	function b(t, n) {
		var a = t.icon, i = t.subtitle, l = t.title;
		return c.jsxs(o("WAWebFlex.react").FlexRow, {
			className: (e || (e = r("stylex")))(o("WDSMargins.stylex").wdsMargins.marginHor8, o("WDSMargins.stylex").wdsMargins.marginVer16),
			children: [c.jsx(o("WAWebFlex.react").FlexItem, {
				xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingHor8, _.sectionIcon],
				children: a
			}), c.jsxs(o("WAWebFlex.react").FlexItem, {
				xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingHor8, _.sectionTitle],
				children: [c.jsx(o("WAWebText.react").WAWebTextTitle, { children: l }), c.jsx(o("WAWebText.react").WAWebTextMuted, { children: i })]
			})]
		}, n);
	}
	b.displayName = b.name + " [from " + i.id + "]";
	async function v(e) {
		e: switch (e) {
			case "agent": {
				await o("WAWebBotTos").markSeenAgentTos();
				break e;
			}
			case "invoke": {
				await o("WAWebBotTos").markSeenInvokeTos();
				break e;
			}
			case "shortcut": await o("WAWebBotTos").markSeenShortcutTos();
		}
	}
	l.default = C;
}), 226);
