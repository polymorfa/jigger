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
		var t = e.msg, n = e.musicMetadata, a = e.playing, i = e.tappable, l = i === void 0 ? !0 : i, s = e.xstyle, u = o("useWAWebCanPlaybackAudio").useCanDisplayMusicAttribution(t), d = o("useWAWebCanPlaybackAudio").useCanPlaybackAudio(t);
		if (!u) return c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 4,
			testid: "music-attribution-song-not-available",
			xstyle: s,
			children: [
				c.jsx(o("WAWebFlex.react").FlexItem, {
					shrink: 0,
					children: c.jsx(y, {})
				}),
				c.jsx(o("WAWebFlex.react").FlexItem, {
					className: "xlyipyv x6ikm8r x10wlt62 xuxw1ft xeuugli x17t9dm2",
					children: b.songUnavailable()
				}),
				l && c.jsx(o("WAWebFlex.react").FlexItem, {
					shrink: 0,
					children: c.jsx(C, {})
				})
			]
		});
		var m = n.isExplicit ? c.jsx(r("WDSIconIcExplicitFilled.react"), {
			height: 16,
			width: 16,
			"aria-label": b.explicitContent(),
			iconXstyle: _.explicitIcon
		}) : null, p = c.jsx("strong", { children: n.author }, "author"), f = r("WAWebL10N").isRTL() ? [n.title, p] : [p, n.title], g = f[0], h = f[1];
		return c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 4,
			xstyle: s,
			children: [
				d ? c.jsx(o("WAWebFlex.react").FlexItem, {
					shrink: 0,
					xstyle: _.animationWrapper,
					children: c.jsx(r("WAWebMusicSoundAnimation.react"), { play: a })
				}) : c.jsx(o("WAWebFlex.react").FlexItem, {
					shrink: 0,
					children: c.jsx(y, {})
				}),
				c.jsxs(o("WAWebFlex.react").FlexItem, {
					testid: "music-attribution-song-metadata",
					className: "xlyipyv x6ikm8r x10wlt62 xuxw1ft xeuugli x17t9dm2",
					children: [
						g,
						" ",
						h
					]
				}),
				c.jsx(o("WAWebFlex.react").FlexItem, {
					shrink: 0,
					children: m
				}),
				c.jsx(o("WAWebFlex.react").FlexItem, {
					shrink: 0,
					children: c.jsx(C, {})
				})
			]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
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
		return c.jsx(r("WDSIconIcMusicNote.react"), {
			iconXstyle: _.noteIcon,
			height: 18,
			viewBox: {
				x: 6,
				y: 0,
				height: 24,
				width: 14
			}
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C() {
		return c.jsx(r("WDSIconIcChevronRight.react"), {
			iconXstyle: _.chevronIcon,
			height: 20,
			width: 24
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
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
