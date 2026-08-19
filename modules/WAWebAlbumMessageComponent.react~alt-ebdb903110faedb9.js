__d("WAWebAlbumMessageComponent.react", [
	"WAWebDisplayType",
	"WAWebElevatedPushNamesFlag",
	"WAWebFlex.react",
	"WAWebFrontendMsgGetters",
	"WAWebMediaAlbumGrid.react",
	"WAWebMediaAlbumGridConstants",
	"WAWebMessageAuthor.react",
	"WAWebMessageCaption.react",
	"WAWebMessageForwardedIndicator.react",
	"WAWebMessageListAlbums",
	"WAWebMessageMeta.react",
	"WAWebMsgModelPropUtils",
	"WAWebMsgSelectors",
	"WAWebTypesMedia",
	"WDSPaddings.stylex",
	"compactMap",
	"react",
	"stylex",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s.useMemo, d = {
		paddingTop3: {
			paddingTop: "xyqdw3p",
			$$css: !0
		},
		paddingBottom5: {
			paddingBottom: "xs9asl8",
			$$css: !0
		},
		paddingInlineStart6: {
			paddingInlineStart: "x25sj25",
			$$css: !0
		},
		paddingBlock3: {
			paddingTop: "xyqdw3p",
			paddingBottom: "xg8j3zb",
			$$css: !0
		},
		paddingInline3: {
			paddingInlineStart: "x1djpfga",
			paddingInlineEnd: "x1im30kd",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	}, m = { metaWithCaption: {
		bottom: "xy1j3rs",
		position: "x10l6tqk",
		insetInlineEnd: "x11dcrhx",
		left: null,
		right: null,
		zIndex: "xhtitgo",
		$$css: !0
	} };
	function p(t) {
		var n = t.associatedMessages, a = t.chat, i = t.displayAuthor, l = t.displayType, s = t.isMsgVisible, p = t.msg, _ = t.quotedMsg, f = t.trusted, g = o("useWAWebMsgValues").useMsgValues(p.id, [o("WAWebFrontendMsgGetters").getSenderObj]), h = g[0], y = o("WAWebMsgSelectors").showForwarded(p), C = i ? u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.paddingTop3, d.paddingBottom5, d.paddingInlineStart6, y && o("WDSPaddings.stylex").wdsPaddings.paddingBottom0, o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(a) && o("WDSPaddings.stylex").wdsPaddings.paddingEnd4), { children: u.jsx(r("WAWebMessageAuthor.react"), {
			msg: p,
			contact: h,
			displayType: l
		}) })) : null, b = y ? u.jsx(r("WAWebMessageForwardedIndicator.react"), {
			msg: p.unsafe(),
			xstyle: [
				d.paddingBlock3,
				o("WDSPaddings.stylex").wdsPaddings.paddingEnd0,
				d.paddingInlineStart6,
				i && o("WDSPaddings.stylex").wdsPaddings.paddingTop0
			]
		}) : null, v = o("WAWebDisplayType").isWideDisplay(l), S = c(function() {
			return r("compactMap")(n, function(e) {
				return o("WAWebFrontendMsgGetters").getAsAlbumAsset(e.unsafe());
			});
		}, [n]), R = S.find(function(e) {
			var t = e.caption;
			return t != null;
		}), L = R != null ? u.jsx("div", babelHelpers.extends({}, {
			0: { className: "x9f619 x1xtabgy xm7lytj x1icxu4v xs9asl8 x25sj25" },
			1: { className: "x9f619 xm7lytj x1icxu4v xs9asl8 x25sj25 xno0opx" }
		}[!!v << 0], { children: u.jsx(r("WAWebMessageCaption.react"), {
			msg: R.unsafe(),
			trusted: f && o("WAWebMsgModelPropUtils").isTrusted(R.unsafe()),
			spacer: !0,
			testId: "album-caption"
		}) })) : null, E = S.length > o("WAWebMessageListAlbums").ALBUM_MIN_SIZE ? S.length - o("WAWebMessageListAlbums").ALBUM_MIN_SIZE + 1 : null, k = S.length > o("WAWebMessageListAlbums").ALBUM_MIN_SIZE ? S[0] : null, I = _ ? u.jsx("div", {
			className: "xahult9",
			children: _
		}) : null;
		return u.jsxs("div", babelHelpers.extends({}, {
			0: { className: "xyqdw3p x1im30kd xg8j3zb x1djpfga xgf70vc" },
			1: { className: "xyqdw3p x1im30kd xg8j3zb x1djpfga xm28ga1" }
		}[!!v << 0], {
			"data-testid": "media-album",
			children: [
				C,
				b,
				I,
				u.jsx("div", babelHelpers.extends({}, {
					0: { className: "xgf70vc x1k3r3g5 x6ikm8r x10wlt62 xrvj5dj xn2kgx5" },
					1: { className: "x6ikm8r x10wlt62 xrvj5dj xn2kgx5 xm28ga1 x1uaihgu" }
				}[!!v << 0], { children: S.slice(0, o("WAWebMediaAlbumGridConstants").ALBUM_GRID_MAX_THUMBNAIL).map(function(e, t) {
					var n = t === o("WAWebMediaAlbumGridConstants").ALBUM_GRID_MAX_THUMBNAIL - 1 ? {
						numAdditionalMedia: E,
						zoomMsg: k
					} : null;
					return u.jsx(r("WAWebMediaAlbumGrid.react"), babelHelpers.extends({
						msg: e,
						albumMsgs: S,
						currentAlbumMessageIndex: t,
						albumPosition: o("WAWebMediaAlbumGridConstants").ALBUM_GRID_POSITIONS[t % o("WAWebMediaAlbumGridConstants").ALBUM_GRID_MAX_THUMBNAIL],
						isMsgVisible: s,
						displayType: l,
						albumTheme: o("WAWebTypesMedia").DisplayTheme.AlbumV2
					}, n), e.id.toString());
				}) })),
				L,
				u.jsx(o("WAWebFlex.react").FlexRow, {
					justify: "end",
					xstyle: [L && m.metaWithCaption, !L && [d.paddingInline3, d.paddingTop3]],
					children: u.jsx(o("WAWebMessageMeta.react").Meta, {
						msg: p,
						associatedMessages: n
					})
				})
			]
		}));
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
