__d("WAWebNewsletterAiContentInfoModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebNewsletterAiContentInfoModalTypes",
	"WDSIconIcInfo.react",
	"WDSIconWdsIcAiContent.react",
	"WDSIllustrationWdsIllAiImage.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		bulletIcon: {
			color: "xhslqc4",
			$$css: !0
		},
		bulletIconContainer: {
			width: "xvy4d1p",
			$$css: !0
		}
	};
	function d(e) {
		var t, n = o("react-compiler-runtime").c(35), a = e.onCancel, i = e.onClose, l = e.onConfirm, d = e.variant, _ = d === (t = o("WAWebNewsletterAiContentInfoModalTypes")).AiContentModalVariant.VIEWER_INFO, f = d === t.AiContentModalVariant.ADMIN_CONFIRMATION, g = d === t.AiContentModalVariant.ADMIN_NUX, h = d === t.AiContentModalVariant.ADMIN_INFO, y;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsx(r("WDSTextualLink.react"), {
			onClick: p,
			testid: "ai-content-learn-more-link",
			children: s._(
				/*BTDS*/
				""
			)
		}), n[0] = y) : y = n[0];
		var C = y, b, v;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (b = s._(
			/*BTDS*/
			""
		), v = u.jsx(r("WDSIconWdsIcAiContent.react"), {
			width: 24,
			height: 24,
			xstyle: c.bulletIcon
		}), n[1] = b, n[2] = v) : (b = n[1], v = n[2]);
		var S;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (S = {
			body: b,
			icon: v,
			testid: "ai-content-what-is-section",
			title: s._(
				/*BTDS*/
				""
			)
		}, n[3] = S) : S = n[3];
		var R;
		if (n[4] !== h || n[5] !== g) {
			if (R = [S], g) {
				var L, E;
				n[7] === Symbol.for("react.memo_cache_sentinel") ? (L = s._(
					/*BTDS*/
					""
				), E = u.jsx(r("WDSIconIcInfo.react"), {
					width: 24,
					height: 24,
					xstyle: c.bulletIcon
				}), n[7] = L, n[8] = E) : (L = n[7], E = n[8]);
				var k;
				n[9] === Symbol.for("react.memo_cache_sentinel") ? (k = {
					body: L,
					icon: E,
					testid: "ai-content-how-to-label-section",
					title: s._(
						/*BTDS*/
						""
					)
				}, n[9] = k) : k = n[9], R.push(k);
			}
			if (h) {
				var I, T;
				n[10] === Symbol.for("react.memo_cache_sentinel") ? (I = s._(
					/*BTDS*/
					""
				), T = u.jsx(r("WDSIconIcInfo.react"), {
					width: 24,
					height: 24,
					xstyle: c.bulletIcon
				}), n[10] = I, n[11] = T) : (I = n[10], T = n[11]);
				var D;
				n[12] === Symbol.for("react.memo_cache_sentinel") ? (D = {
					body: I,
					icon: T,
					testid: "ai-content-how-labeled-section",
					title: s._(
						/*BTDS*/
						""
					)
				}, n[12] = D) : D = n[12], R.push(D);
			}
			n[4] = h, n[5] = g, n[6] = R;
		} else R = n[6];
		var x, $;
		n[13] === Symbol.for("react.memo_cache_sentinel") ? (x = s._(
			/*BTDS*/
			""
		), $ = {
			surface: "unknown",
			viewName: "ai-content-info"
		}, n[13] = x, n[14] = $) : (x = n[13], $ = n[14]);
		var P;
		n[15] !== f ? (P = f ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), n[15] = f, n[16] = P) : P = n[16];
		var N = f ? l : i, M;
		n[17] !== f ? (M = f ? s._(
			/*BTDS*/
			""
		) : void 0, n[17] = f, n[18] = M) : M = n[18];
		var w = f ? a : void 0, A;
		n[19] === Symbol.for("react.memo_cache_sentinel") ? (A = u.jsx(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			paddingBottom: 16,
			children: u.jsx(r("WDSIllustrationWdsIllAiImage.react"), {})
		}), n[19] = A) : A = n[19];
		var F;
		n[20] === Symbol.for("react.memo_cache_sentinel") ? (F = u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			paddingBottom: 16,
			children: u.jsx(r("WDSText.react"), {
				type: "Headline2",
				colorName: "contentDefault",
				textAlign: "center",
				isPrimaryHeading: !0,
				testid: "ai-content-title",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), n[20] = F) : F = n[20];
		var O;
		n[21] !== _ ? (O = u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			paddingBottom: 16,
			children: u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				textAlign: "center",
				testid: "ai-content-notice",
				children: _ ? s._(
					/*BTDS*/
					"",
					[s._param("learn more link", C)]
				) : s._(
					/*BTDS*/
					"",
					[s._param("learn more link", C)]
				)
			})
		}), n[21] = _, n[22] = O) : O = n[22];
		var B;
		n[23] !== R ? (B = u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "start",
			justify: "start",
			grow: 1,
			children: R.map(m)
		}), n[23] = R, n[24] = B) : B = n[24];
		var W;
		n[25] !== f ? (W = f && u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			paddingTop: 8,
			children: u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				textAlign: "center",
				testid: "ai-content-caption",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), n[25] = f, n[26] = W) : W = n[26];
		var q;
		return n[27] !== w || n[28] !== O || n[29] !== B || n[30] !== W || n[31] !== P || n[32] !== N || n[33] !== M ? (q = u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			type: o("WAWebModal.react").ModalTheme.AiContentInfo,
			testid: "ai-content-info-modal",
			ariaLabel: x,
			tsNavigationData: $,
			okText: P,
			onOK: N,
			cancelText: M,
			onCancel: w,
			children: [
				A,
				F,
				O,
				B,
				W
			]
		}), n[27] = w, n[28] = O, n[29] = B, n[30] = W, n[31] = P, n[32] = N, n[33] = M, n[34] = q) : q = n[34], q;
	}
	function m(e) {
		var t = e.body, n = e.icon, a = e.testid, i = e.title;
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			testid: a,
			paddingTop: 4,
			paddingBottom: 4,
			marginBottom: 8,
			columnGap: 24,
			align: "center",
			children: [u.jsx(o("WAWebFlex.react").FlexColumn, {
				justify: "center",
				align: "center",
				shrink: 0,
				xstyle: c.bulletIconContainer,
				children: n
			}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "start",
				grow: 1,
				shrink: 1,
				children: [u.jsx(r("WDSText.react"), {
					type: "Body1",
					colorName: "contentDefault",
					isSemanticHeading: !0,
					children: i
				}), u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					children: t
				})]
			})]
		}, a);
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p() {
		return o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getNewsletterAiContentFaqUrl());
	}
	l.default = d;
}), 226);
