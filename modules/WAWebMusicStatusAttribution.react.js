__d("WAWebMusicStatusAttribution.react", [
	"fbt",
	"WALogger",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebL10N",
	"WAWebMediaDownloadMmsMusicArtwork",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebMusicArtwork.react",
	"WAWebMusicSoundAnimation.react",
	"WAWebText.react",
	"WDSIconIcChevronRight.react",
	"WDSIconIcExplicitFilled.react",
	"WDSIconIcMusicNote.react",
	"react",
	"react-compiler-runtime",
	"useWAWebCanPlaybackAudio",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useRef, _ = {
		explicitIcon: {
			color: "x17t9dm2",
			$$css: !0
		},
		noteIcon: {
			color: "x17t9dm2",
			$$css: !0
		},
		chevronIcon: {
			color: "x17t9dm2",
			marginInlineStart: "x1qfufaz",
			$$css: !0
		},
		animationWrapper: {
			width: "x1kky2od",
			height: "xlup9mm",
			$$css: !0
		}
	};
	function f(e) {
		var t = o("react-compiler-runtime").c(29), n = e.msg, a = e.musicMetadata, i = e.playing, l = e.tappable, s = e.xstyle, u = l === void 0 ? !0 : l, d = o("useWAWebCanPlaybackAudio").useCanDisplayMusicAttribution(n), m = o("useWAWebCanPlaybackAudio").useCanPlaybackAudio(n);
		if (!d) {
			var p;
			t[0] === Symbol.for("react.memo_cache_sentinel") ? (p = c.jsx(o("WAWebFlex.react").FlexItem, {
				shrink: 0,
				children: c.jsx(y, {})
			}), t[0] = p) : p = t[0];
			var f;
			t[1] === Symbol.for("react.memo_cache_sentinel") ? (f = c.jsx(o("WAWebFlex.react").FlexItem, {
				className: "xlyipyv x6ikm8r x10wlt62 xuxw1ft xeuugli x17t9dm2",
				children: b.songUnavailable()
			}), t[1] = f) : f = t[1];
			var g;
			t[2] !== u ? (g = u && c.jsx(o("WAWebFlex.react").FlexItem, {
				shrink: 0,
				children: c.jsx(C, {})
			}), t[2] = u, t[3] = g) : g = t[3];
			var h;
			return t[4] !== g || t[5] !== s ? (h = c.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				gap: 4,
				testid: "music-attribution-song-not-available",
				xstyle: s,
				children: [
					p,
					f,
					g
				]
			}), t[4] = g, t[5] = s, t[6] = h) : h = t[6], h;
		}
		var v;
		t[7] !== a.isExplicit ? (v = a.isExplicit ? c.jsx(r("WDSIconIcExplicitFilled.react"), {
			height: 16,
			width: 16,
			"aria-label": b.explicitContent(),
			iconXstyle: _.explicitIcon
		}) : null, t[7] = a.isExplicit, t[8] = v) : v = t[8];
		var S = v, R;
		t[9] !== a.author ? (R = c.jsx("strong", { children: a.author }, "author"), t[9] = a.author, t[10] = R) : R = t[10];
		var L = R, E;
		t[11] !== L || t[12] !== a.title ? (E = r("WAWebL10N").isRTL() ? [a.title, L] : [L, a.title], t[11] = L, t[12] = a.title, t[13] = E) : E = t[13];
		var k = E, I = k[0], T = k[1], D;
		t[14] !== m || t[15] !== i ? (D = m ? c.jsx(o("WAWebFlex.react").FlexItem, {
			shrink: 0,
			xstyle: _.animationWrapper,
			children: c.jsx(r("WAWebMusicSoundAnimation.react"), { play: i })
		}) : c.jsx(o("WAWebFlex.react").FlexItem, {
			shrink: 0,
			children: c.jsx(y, {})
		}), t[14] = m, t[15] = i, t[16] = D) : D = t[16];
		var x;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (x = "xlyipyv x6ikm8r x10wlt62 xuxw1ft xeuugli x17t9dm2", t[17] = x) : x = t[17];
		var $;
		t[18] !== I || t[19] !== T ? ($ = c.jsxs(o("WAWebFlex.react").FlexItem, {
			testid: "music-attribution-song-metadata",
			className: x,
			children: [
				I,
				" ",
				T
			]
		}), t[18] = I, t[19] = T, t[20] = $) : $ = t[20];
		var P;
		t[21] !== S ? (P = c.jsx(o("WAWebFlex.react").FlexItem, {
			shrink: 0,
			children: S
		}), t[21] = S, t[22] = P) : P = t[22];
		var N;
		t[23] === Symbol.for("react.memo_cache_sentinel") ? (N = c.jsx(o("WAWebFlex.react").FlexItem, {
			shrink: 0,
			children: c.jsx(C, {})
		}), t[23] = N) : N = t[23];
		var M;
		return t[24] !== D || t[25] !== $ || t[26] !== P || t[27] !== s ? (M = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 4,
			xstyle: s,
			children: [
				D,
				$,
				P,
				N
			]
		}), t[24] = D, t[25] = $, t[26] = P, t[27] = s, t[28] = M) : M = t[28], M;
	}
	function g(t) {
		var n = t.mediaController, a = t.msg, i = t.musicMetadata, l = t.onClose, s = t.openedViaModalManager, u = i.artistAttribution, d = o("useWAWebCanPlaybackAudio").useCanDisplayMusicAttribution(a), _ = p(!1);
		m(function() {
			d && o("WAWebMediaDownloadMmsMusicArtwork").downloadMusicArtwork({
				musicMetadata: i,
				msg: a
			}).catch(function() {
				o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["music: failed to download music artwork"])));
			});
		}, [
			i,
			a,
			d
		]), o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_modal", function() {
			s && (_.current || n == null || n.play());
		});
		var f = d ? c.jsxs(c.Fragment, { children: [
			c.jsx(r("WAWebMusicArtwork.react"), {
				msg: a,
				musicMetadata: i
			}),
			c.jsx(o("WAWebText.react").WAWebTextLarge, {
				marginBottom: 12,
				marginTop: 16,
				children: i.title
			}),
			c.jsx(o("WAWebText.react").WAWebTextTitle, {
				marginBottom: 12,
				children: i.author
			}),
			u != null && c.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: u,
				children: b.artistLinkText()
			})
		] }) : c.jsx("span", { children: b.songUnavailableModal() }), g = function() {
			_.current = !0, l(), n == null || n.play();
		};
		return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			type: o("WAWebModal.react").ModalTheme.MusicAttribution,
			tsNavigationData: {
				surface: "unknown",
				viewName: "music-status-attribution"
			},
			onCancel: g,
			cancelText: d ? r("WAWebFbtCommon")("Close") : r("WAWebFbtCommon")("OK"),
			children: c.jsx(o("WAWebFlex.react").FlexColumn, {
				align: d ? "center" : "start",
				justify: "center",
				paddingTop: 20,
				children: f
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.closeModal, n = e.isFullscreen, r = e.msg, a = e.musicMetadata, i = e.renderModal, l = e.statusMediaController;
		if (l == null || l.pause(), n === !0 && i != null && t != null) {
			i(c.jsx(g, {
				msg: r,
				musicMetadata: a,
				mediaController: l,
				onClose: t,
				openedViaModalManager: !1
			}));
			return;
		}
		return o("WAWebModalManager").ModalManager.open(c.jsx(g, {
			msg: r,
			musicMetadata: a,
			mediaController: l,
			onClose: o("WAWebModalManager").closeModalManager,
			openedViaModalManager: !0
		}));
	}
	function y() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = c.jsx(r("WDSIconIcMusicNote.react"), {
			iconXstyle: _.noteIcon,
			height: 18,
			viewBox: {
				x: 6,
				y: 0,
				height: 24,
				width: 14
			}
		}), e[0] = t) : t = e[0], t;
	}
	function C() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = c.jsx(r("WDSIconIcChevronRight.react"), {
			iconXstyle: _.chevronIcon,
			height: 20,
			width: 24
		}), e[0] = t) : t = e[0], t;
	}
	var b = {
		songUnavailable: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		songUnavailableModal: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		artistLinkText: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		explicitContent: function() {
			return s._(
				/*BTDS*/
				""
			);
		}
	};
	l.MusicAttribution = f, l.showMusicStatusAttributionModal = h;
}), 226);
