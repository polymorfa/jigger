__d("WAWebForwardWithCaptionPreview.react", [
	"fbt",
	"WAWebChatMsgSymbol.react",
	"WAWebChatPreferenceCollection",
	"WAWebClickable.react",
	"WAWebClock",
	"WAWebEmojiPickerPlugin",
	"WAWebEmojiText.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebFormatConfiguration",
	"WAWebFormatMsgText",
	"WAWebForwardDocCaptionGating",
	"WAWebFrontendMsgGetters",
	"WAWebImageIcon.react",
	"WAWebMediaThumbnail.react",
	"WAWebMediaUrlProvider",
	"WAWebMsgMentionMap",
	"WAWebMsgType",
	"WAWebRichTextInput.react",
	"WAWebRichTextInputPlugins.react",
	"WAWebVideoPlaceholderIcon.react",
	"WAWebVideoPreview.react",
	"WAWebWamEnumWebcRmrReasonCode",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSIconIcDescription.react",
	"WDSIconIcEditFilled.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"stylex",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useState, m = { marginBlock5: {
		marginTop: "x1ok221b",
		marginBottom: "xu06os2",
		$$css: !0
	} };
	function p(e) {
		var t = {
			video: {
				count: 0,
				representativeMsg: null
			},
			photo: {
				count: 0,
				representativeMsg: null
			},
			gif: {
				count: 0,
				representativeMsg: null
			}
		};
		for (var n of e) n.type === o("WAWebMsgType").MSG_TYPE.VIDEO && !n.isGif ? (t.video.count += 1, t.video.representativeMsg == null && (t.video.representativeMsg = n)) : n.type === o("WAWebMsgType").MSG_TYPE.IMAGE ? (t.photo.count += 1, t.photo.representativeMsg == null && (t.photo.representativeMsg = n)) : n.type === o("WAWebMsgType").MSG_TYPE.VIDEO && n.isGif && (t.gif.count += 1, t.gif.representativeMsg == null && (t.gif.representativeMsg = n));
		return t;
	}
	function _(e) {
		var t = e.gif, n = e.photo, r = e.video;
		return r.count > 0 && r.count >= n.count && r.count >= t.count ? {
			type: "video",
			info: r
		} : n.count > 0 && n.count >= t.count ? {
			type: "photo",
			info: n
		} : t.count > 0 ? {
			type: "gif",
			info: t
		} : null;
	}
	function f(e, t) {
		switch (e) {
			case "video": return s._(
				/*BTDS*/
				"",
				[s._plural(t, "number")]
			);
			case "photo": return s._(
				/*BTDS*/
				"",
				[s._plural(t, "number")]
			);
			case "gif": return s._(
				/*BTDS*/
				"",
				[s._plural(t, "number")]
			);
		}
	}
	function g(e) {
		var t = e.primaryCount, n = e.primaryType, r = e.remainingCount, o = f(n, t);
		return r > 0 ? s._(
			/*BTDS*/
			"",
			[s._plural(r, "number"), s._param("primary_type", o)]
		) : o;
	}
	function h(e) {
		var t = p(e), n = _(t);
		if (n != null) {
			var r = e.length - n.info.count;
			return {
				mediaTypeText: g({
					primaryCount: n.info.count,
					primaryType: n.type,
					remainingCount: r
				}),
				representativeMsg: n.info.representativeMsg
			};
		}
		return {
			mediaTypeText: s._(
				/*BTDS*/
				"",
				[s._plural(e.length, "number")]
			),
			representativeMsg: null
		};
	}
	var y = "xekv6nw-B", C = "0.1s", b = "0.3s", v = "cubic-bezier(0.1, 0.82, 0.25, 1)", S = "forwards", R = "hidden", L = {
		mediaForwardWrapper: {
			position: "x1n2onr6",
			height: "xcbkimw",
			width: "x3p9ev8",
			backgroundColor: "x1od0jb8",
			$$css: !0
		},
		textForwardWrapper: {
			position: "x1n2onr6",
			height: "xwzfr38",
			width: "x3p9ev8",
			backgroundColor: "x1od0jb8",
			$$css: !0
		},
		textForwardWrapperPadding: {
			paddingTop: "x1xrf6ya",
			$$css: !0
		},
		textContainer: {
			position: "x1n2onr6",
			height: "x5yr21d",
			width: "xh8yej3",
			$$css: !0
		},
		mediaForwardInputContainer: {
			position: "x1n2onr6",
			height: "x5yr21d",
			width: "x86nts4",
			backgroundColor: "x1bu39yj",
			$$css: !0
		},
		textForwardInputContainer: {
			position: "x1n2onr6",
			height: "xn3w4p2",
			width: "x3p9ev8",
			backgroundColor: "x1c7u0tx",
			$$css: !0
		},
		captionPreviewContainer: {
			display: "x78zum5",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			$$css: !0
		},
		mediaForwardComposerContainer: {
			cursor: "x1ed109x",
			opacity: "xg01cxk",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			$$css: !0
		},
		textForwardComposerContainer: {
			cursor: "x1ed109x",
			opacity: "xg01cxk",
			borderStartStartRadius: "x1ua1ujl",
			borderStartEndRadius: "xksyday",
			borderEndEndRadius: "xshg46c",
			borderEndStartRadius: "xlej2ay",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xx42vgk",
			borderInlineEndColor: "xbogo7e",
			borderBottomColor: "x120ee7l",
			borderInlineStartColor: "x1vb5itz",
			$$css: !0
		},
		composerWrapper: {
			display: "x78zum5",
			$$css: !0
		},
		mediaForwardComposerInput: {
			height: "x1plxi8p",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		textForwardComposerInput: {
			height: "x1fgtraw",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		composerFont: {
			fontSize: null,
			$$css: !0
		},
		textForwardPlaceholderColor: {
			color: "x18cpw0e",
			$$css: !0
		},
		mediaThumbContainer: {
			minWidth: "xculje8",
			height: "x5yr21d",
			$$css: !0
		},
		placeholderIcon: {
			width: "xh8yej3",
			height: "x5yr21d",
			$$css: !0
		},
		documentIcon: {
			height: "xng8ra",
			width: "x1247r65",
			$$css: !0
		},
		thumbContainer: {
			width: "x46vnbo",
			height: "x11daxxc",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xvlg9b1",
			borderInlineEndColor: "x1s150n4",
			borderBottomColor: "x3j4o63",
			borderInlineStartColor: "x9l21al",
			$$css: !0
		},
		thumb: {
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			backgroundRepeat: "xiy17q3",
			backgroundPosition: "x1xsqp64",
			backgroundSize: "x18d0r48",
			pointerEvents: "x47corl",
			$$css: !0
		},
		quotedCaption: {
			flexGrow: "x1iyjqo2",
			width: "xh8yej3",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			fontSize: "x1f6kntn",
			fontWeight: "xo1l8bm",
			position: "x1n2onr6",
			color: "xhslqc4",
			$$css: !0
		},
		captionTextContainer: {
			width: "xh8yej3",
			$$css: !0
		},
		captionTextSpacing: {
			whiteSpace: "xti2ec1",
			$$css: !0
		},
		composerContainerAnimate: {
			animationName: "x127lhb5",
			animationDuration: "x4afe7t",
			animationDelay: "x1k0bccz",
			animationTimingFunction: "x1wg5k15",
			animationFillMode: "x10e4vud",
			backfaceVisibility: "xlp1x4z",
			$$css: !0
		}
	};
	function E(t) {
		var n = t.allMsgs, a = t.captionPlaceholderText, l = t.displayCaptionText, u = t.msgs, p = t.onAppendMessage, _ = t.onEditClick, f = t.onRemoveCaptionSelect, g = t.showEditIcon, y = o("useWAWebModelValues").useModelValues(r("WAWebChatPreferenceCollection").getDefault(), [
			"spellcheck",
			"transformTextEmoji",
			"enterIsSend"
		]), C = u[0], b = u.length > 1, v = function() {
			var e = n != null ? n : u, t = e.length === 1;
			if (t) {
				var a = null, i = C.type === o("WAWebMsgType").MSG_TYPE.VIDEO && !C.isGif && Number(C.duration) > 0 ? o("WAWebClock").Clock.durationStr(Number(C.duration)) + " " : null;
				switch (C.type) {
					case o("WAWebMsgType").MSG_TYPE.IMAGE:
						a = s._(
							/*BTDS*/
							""
						);
						break;
					case o("WAWebMsgType").MSG_TYPE.VIDEO:
						C.isGif ? a = s._(
							/*BTDS*/
							""
						) : a = s._(
							/*BTDS*/
							""
						);
						break;
					case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
						a = C.filename;
						break;
				}
				var l = c.jsxs("span", {
					className: "xk50ysn",
					children: [
						" ",
						a,
						" "
					]
				}), d = c.jsx(r("WAWebChatMsgSymbol.react"), { msg: C.unsafe() }, "msg-symbol");
				return [
					i,
					l,
					d
				];
			}
			var m = h(e), p = m.mediaTypeText, _ = m.representativeMsg, f = c.jsxs("span", {
				className: "xk50ysn",
				children: [
					" ",
					p,
					" "
				]
			}), g = _ != null ? _ : C, y = c.jsx(r("WAWebChatMsgSymbol.react"), { msg: g.unsafe() }, "msg-symbol");
			return [
				null,
				f,
				y
			];
		}, S = function(t) {
			p(t.text);
		}, R = v(), E = R[0], I = R[1], T = R[2], D = b || n != null && n.length > u.length ? s._(
			/*BTDS*/
			"",
			[s._plural(u.length, "caption_count")]
		) : r("WAWebFormatMsgText")({
			msg: C.unsafe(),
			options: { unformat: !1 }
		}), x = o("WAWebFormatConfiguration").QuotedMention({
			mentions: o("WAWebMsgMentionMap").calculateMsgMentionMap(C),
			groupMentions: o("WAWebMsgMentionMap").calculateMsgGroupMentionMap(C)
		}), $ = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			className: (e || (e = r("stylex")))([L.quotedCaption, o("WDSPaddings.stylex").wdsPaddings.padding8]),
			align: "start",
			justify: "center",
			children: [c.jsxs(o("WAWebFlex.react").FlexRow, {
				columnGap: 4,
				children: [
					T,
					E,
					I
				]
			}), c.jsx(o("WAWebFlex.react").FlexRow, {
				xstyle: [m.marginBlock5, L.captionTextContainer],
				children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
					xstyle: L.captionTextSpacing,
					className: "x1evy7pa x104kibb x6ikm8r x10wlt62 xlyipyv x1h7i4cw x1ua5tub",
					direction: o("WAWebFrontendMsgGetters").getDir(C),
					text: D,
					formatters: x,
					ellipsify: !0,
					testid: "forwarded-caption"
				}, "status")
			})]
		}), P = b ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), N = l ? c.jsxs(r("WAWebFlexItem.react"), {
			grow: 1,
			xstyle: [L.mediaForwardInputContainer, L.captionPreviewContainer],
			children: [
				c.jsx("span", { className: "x2lah0s x51ohtg xn25fpx" }),
				$,
				c.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcClose.react"),
					variant: "borderless",
					size: "small",
					onPress: f,
					"aria-label": P,
					testid: "remove-caption"
				})
			]
		}) : null, M = d(), w = M[0], A = M[1], F = function() {
			w == null || w.focus();
		};
		function O(e) {
			switch (e.type) {
				case o("WAWebMsgType").MSG_TYPE.IMAGE: return o("WAWebImageIcon.react").ImageIcon;
				case o("WAWebMsgType").MSG_TYPE.VIDEO: return o("WAWebVideoPlaceholderIcon.react").VideoPlaceholderIcon;
				default: return r("WDSIconIcDescription.react");
			}
		}
		function B(e) {
			var t = O(e);
			return e.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT ? c.jsx("div", {
				className: "x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d",
				children: c.jsx(t, { iconXstyle: L.documentIcon })
			}, "default") : c.jsx("div", {
				className: "x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d",
				children: c.jsx(t, { iconXstyle: L.placeholderIcon })
			}, "default");
		}
		B.displayName = B.name + " [from " + i.id + "]";
		var W = B(C);
		function q(t) {
			switch (t.type) {
				case o("WAWebMsgType").MSG_TYPE.IMAGE: return c.jsx(r("WAWebMediaUrlProvider"), {
					mediaData: t.mediaData,
					placeholderRenderer: function() {
						return W;
					},
					downloadMedia: function() {
						return t.downloadMedia({
							downloadEvenIfExpensive: !1,
							rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.OTHER,
							isUserInitiated: !1
						});
					},
					renderProgressively: !1,
					children: function(n) {
						return c.jsx("div", {
							className: (e || (e = r("stylex")))([
								L.thumbContainer,
								L.thumb,
								o("WDSMargins.stylex").wdsMargins.marginEnd8
							]),
							style: { backgroundImage: "url(" + n + ")" }
						});
					}
				});
				case o("WAWebMsgType").MSG_TYPE.VIDEO: {
					var n = t.safe();
					return n.type === o("WAWebMsgType").MSG_TYPE.VIDEO && n.isGif !== !0 ? c.jsx("div", {
						className: "x46vnbo x11daxxc xyi3aci xwf5gio x1p453bz x1suzm8a x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xvlg9b1 x1s150n4 x3j4o63 x9l21al x6ikm8r x10wlt62 xiy17q3 x1xsqp64 x18d0r48 x47corl",
						children: c.jsx(r("WAWebVideoPreview.react"), {
							msg: n,
							mediaData: t.mediaData
						})
					}) : null;
				}
				case o("WAWebMsgType").MSG_TYPE.STICKER_PACK: return c.jsx(r("WAWebMediaThumbnail.react"), {
					msg: t,
					thumbnailPlaceholder: W,
					containerClassName: "x46vnbo x11daxxc xyi3aci xwf5gio x1p453bz x1suzm8a x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xvlg9b1 x1s150n4 x3j4o63 x9l21al"
				});
				case o("WAWebMsgType").MSG_TYPE.DOCUMENT: return o("WAWebForwardDocCaptionGating").isForwardDocCaptionEnabled() ? c.jsx(r("WAWebMediaThumbnail.react"), {
					msg: t.unsafe(),
					thumbnailPlaceholder: W,
					containerClassName: "x46vnbo x11daxxc xyi3aci xwf5gio x1p453bz x1suzm8a x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xvlg9b1 x1s150n4 x3j4o63 x9l21al",
					childClassName: "x5yr21d xh8yej3 x18d0r48 x1xsqp64 xiy17q3"
				}) : null;
				default: return null;
			}
		}
		var U = q(C), V = a != null ? a : k(), H = l ? null : c.jsx(o("WAWebClickable.react").Clickable, {
			onClick: F,
			children: c.jsx(r("WAWebFlexItem.react"), {
				grow: 1,
				xstyle: [
					U ? L.mediaForwardInputContainer : L.textForwardInputContainer,
					U ? L.mediaForwardComposerContainer : L.textForwardComposerContainer,
					L.composerContainerAnimate
				],
				children: c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSPaddings.stylex").wdsPaddings.padding12, L.composerWrapper), { children: c.jsxs(r("WAWebRichTextInput.react"), {
					ref: A,
					xstyle: U ? L.mediaForwardComposerInput : L.textForwardComposerInput,
					textXstyle: L.composerFont,
					placeholderTextXStyle: !U && L.textForwardPlaceholderColor,
					multiline: !0,
					readOnly: !1,
					placeholder: V,
					title: V,
					maxVisibleLines: U ? 3 : 1,
					onChange: S,
					testid: "append-message-compose-box",
					spellCheck: y.spellcheck,
					enterIsNewLine: !y.enterIsSend,
					children: [c.jsx(r("WAWebRichTextInputPlugins.react"), {
						transformTextEmoji: y.transformTextEmoji,
						textFormatEnabled: !0,
						bulletPointsEnabled: !0,
						numberedListEnabled: !0,
						inlineCodeEnabled: !0,
						blockQuoteEnabled: !0
					}), c.jsx(r("WAWebEmojiPickerPlugin"), {})]
				}) }))
			})
		}), G = U ? c.jsx(r("WAWebFlexItem.react"), {
			grow: 0,
			xstyle: L.mediaThumbContainer,
			children: c.jsxs("div", {
				className: "x1n2onr6",
				children: [U, g === !0 && _ != null && c.jsx(o("WAWebClickable.react").Clickable, {
					onClick: _,
					ariaLabel: s._(
						/*BTDS*/
						""
					),
					children: c.jsx("div", {
						className: "x10l6tqk xi2lk0m xz03a8w x78zum5 x6s0dn4 xl56j7k xgd8bvy x1fgtraw x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1j3esqa xamhcws x1alpsbp xlxy82 xyumdvf x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1y55ic2 x1urg34u xee4sfp x1xm068e x1ypdohk xo1mcw5",
						children: c.jsx(r("WDSIconIcEditFilled.react"), {
							width: 16,
							height: 16
						})
					})
				})]
			})
		}) : null;
		return c.jsxs(c.Fragment, { children: [c.jsx(o("WAWebFlex.react").FlexRow, {}), c.jsx("div", babelHelpers.extends({}, e.props(U ? L.mediaForwardWrapper : L.textForwardWrapper, o("WDSPaddings.stylex").wdsPaddings.padding8, !U && L.textForwardWrapperPadding), { children: c.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: L.textContainer,
			align: "center",
			justify: "start",
			children: [
				G,
				N,
				H
			]
		}) }))] });
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k() {
		return s._(
			/*BTDS*/
			""
		);
	}
	l.default = E;
}), 226);
