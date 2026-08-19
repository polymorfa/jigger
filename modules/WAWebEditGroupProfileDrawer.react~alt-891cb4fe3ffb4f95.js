__d("WAWebEditGroupProfileDrawer.react", [
	"fbt",
	"$InternalEnum",
	"ReactKonva",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebEditGroupProfileDrawerColorPanel.react",
	"WAWebEditGroupProfileDrawerEmojiStickerPanelPopup.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebIconTabs.react",
	"WAWebMediaEditorUtilsCreateCanvasAndImage",
	"WAWebNoop",
	"WAWebProfileCropConstants",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUtilsGetColor",
	"WAWebUtilsSharpenFilter",
	"WDSButton.react",
	"WDSIconIcCheck.react",
	"WDSIconIcMood.react",
	"WDSIconWdsIcSticker.react",
	"err",
	"nullthrows",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useRef, _ = d.useState, f = 64, g = n("$InternalEnum").Mirrored(["EMOJI", "STICKER"]), h = {
		body: {
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		footer: {
			display: "x78zum5",
			position: "x1n2onr6",
			width: "xh8yej3",
			height: "xwvwv9b",
			zIndex: "xhtitgo",
			alignItems: "x7a106z",
			justifyContent: "xl56j7k",
			backgroundColor: "x1bu39yj",
			$$css: !0
		},
		submitButtonDisabledLook: {
			color: "xhslqc4",
			cursor: "x1h6gzvc",
			backgroundColor: "x3qdkio",
			boxShadow: "x1gnnqk1",
			":active_color": "x8idqv2",
			":active_cursor": "x4xbgct",
			":active_backgroundColor": "x71m2qp",
			":active_boxShadow": "xpk4wdd",
			$$css: !0
		}
	}, y = {
		emojiIcon: {
			width: "x17z2i9w",
			height: "x17rw0jw",
			$$css: !0
		},
		stickerIcon: {
			width: "x1ig0tib",
			height: "x1pwvq5b",
			$$css: !0
		}
	}, C = [[
		"purple",
		"sky-blue",
		"green",
		"yellow",
		"orange",
		"pink"
	], [
		"cool-gray",
		"cobalt",
		"teal",
		"red",
		"sand"
	]], b = (e = []).concat.apply(e, C), v = 160, S = 104, R = {
		width: 90,
		height: 48
	}, L = 770;
	function E(e) {
		for (var t = [], n = e.split(" "), r = 0; r < n.length; r++) n[r].length > 0 && t.push(n[r]);
		return t;
	}
	function k(e, t) {
		for (var n = "", r = 0; r < t.length; r++) n += (r === 0 ? "" : " ") + t[r].text;
		var o = E(n);
		if (e.length !== o.length) return !0;
		for (var a = 0; a < e.length; a++) if (e[a] !== o[a]) return !0;
		return !1;
	}
	function I(e) {
		switch (e) {
			case "purple": return s._(
				/*BTDS*/
				""
			);
			case "sky-blue": return s._(
				/*BTDS*/
				""
			);
			case "green": return s._(
				/*BTDS*/
				""
			);
			case "yellow": return s._(
				/*BTDS*/
				""
			);
			case "orange": return s._(
				/*BTDS*/
				""
			);
			case "pink": return s._(
				/*BTDS*/
				""
			);
			case "cool-gray": return s._(
				/*BTDS*/
				""
			);
			case "cobalt": return s._(
				/*BTDS*/
				""
			);
			case "teal": return s._(
				/*BTDS*/
				""
			);
			case "red": return s._(
				/*BTDS*/
				""
			);
			case "sand": return s._(
				/*BTDS*/
				""
			);
		}
	}
	function T(e) {
		var t, n, a, i, l = e.onCancel, u = e.onFinished, d = e.sendEmojiStickerPanelOpenLoggingEvent, T = e.title, D = _(null), x = D[0], $ = D[1], P = _(null), N = P[0], M = P[1], w = _(null), A = w[0], F = w[1], O = _(0), B = O[0], W = O[1], q = _(null), U = q[0], V = q[1], H = _([]), G = H[0], z = H[1], j = p(null), K = p(null), Q = p(!1), X = {
			EMOJI: 0,
			STICKER: 1
		}, Y = p((t = {}, t[X.EMOJI] = r("WAWebNoop"), t[X.STICKER] = r("WAWebNoop"), t)), J = p([]), Z = p(null), ee = s._(
			/*BTDS*/
			""
		);
		m(function() {
			var e;
			(e = K.current) == null || e.cache();
		}, [x]), m(function() {
			var e = Z.current;
			if (e != null) for (var t = E(ee.toString()), n = k(t, e.textArr); e.getHeight() > R.height || n;) e.fontSize(e.fontSize() - 1), n = k(t, e.textArr);
		}, [ee]);
		var te = c.jsx(o("ReactKonva").Stage, {
			width: v,
			height: v,
			className: "xqui205 xpwdb9g x1hq5gj4 xefazk8 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x6ikm8r x10wlt62 xc8icb0",
			ref: j,
			onClick: function() {
				x == null && A == null && F(0);
			},
			children: c.jsxs(o("ReactKonva").Layer, { children: [c.jsx(o("ReactKonva").Rect, {
				width: v,
				height: v,
				fill: r("WAWebUtilsGetColor")(b[B], 200)
			}), x == null ? c.jsx(o("ReactKonva").Text, {
				ref: Z,
				x: v / 2,
				y: v / 2,
				width: R.width,
				height: R.height,
				offset: {
					x: R.width / 2,
					y: R.height / 2
				},
				lineHeight: 1.14,
				align: "center",
				verticalAlign: "middle",
				text: ee.toString(),
				fontSize: 14,
				fontFamily: "\"SF Pro Text\", \"SF Pro Icons\", system, -apple-system, system-ui, \"system-ui\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", \"Kohinoor Devanagari\", sans-serif",
				fill: r("WAWebUtilsGetColor")("cool-gray-alpha", 50)
			}) : c.jsx(o("ReactKonva").Image, {
				ref: K,
				width: S,
				height: S,
				offset: {
					x: S / 2,
					y: S / 2
				},
				x: v / 2,
				y: v / 2,
				image: x,
				filters: N === g.EMOJI && Q.current ? [r("WAWebUtilsSharpenFilter")] : []
			})] })
		});
		Object.values(X).forEach(function(e) {
			typeof e == "number" && (Y.current[e] = function() {
				A === e && F(null);
			});
		});
		var ne = function(t) {
			d != null && d(t);
		}, re = function(t, n) {
			var e = async function() {
				try {
					var e = window.innerHeight < L;
					if (t != null) z(null), V(t);
					else if (n != null) {
						var a;
						V(null), z((a = n == null ? void 0 : n.mediaData.emojis) != null ? a : []);
					}
					if (t != null) {
						var i = await o("WAWebMediaEditorUtilsCreateCanvasAndImage").createImageFromEmoji(t);
						i && ($(i), Q.current = i.naturalWidth <= f && i.naturalHeight <= f, M(g.EMOJI), e && Y.current[X.EMOJI]());
					} else if (n != null) {
						var l = await o("WAWebMediaEditorUtilsCreateCanvasAndImage").createImageFromSticker(n);
						$(l), M(g.STICKER), e && Y.current[X.STICKER]();
					} else throw r("err")("Neither emoji nor sticker is provided in handleEmojiStickerSelect()");
				} catch (e) {
					o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
				}
			};
			e();
		}, oe = function() {
			if (x == null) o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
				msg: s._(
					/*BTDS*/
					""
				),
				id: "ChooseAnEmojiOrStickerToContinueToast"
			}), o("WAWebToastManager").ToastPosition.CENTER);
			else {
				var e, t, n, a, i = (e = (t = j.current) == null ? void 0 : t.toDataURL({
					mimeType: "image/jpeg",
					pixelRatio: o("WAWebProfileCropConstants").PROF_PIC_THUMB_SIDE / v,
					quality: 0,
					width: v,
					height: v
				})) != null ? e : "", l = (n = (a = j.current) == null ? void 0 : a.toDataURL({
					mimeType: "image/jpeg",
					pixelRatio: o("WAWebProfileCropConstants").PROF_PIC_MIN_SIDE * 2 / v,
					quality: 1,
					width: v,
					height: v
				})) != null ? n : "";
				u(i, l, r("nullthrows")(N));
			}
		}, ae = c.jsx("div", {
			className: "x1cb1t30",
			children: c.jsx(r("WDSButton.react"), {
				Icon: r("WDSIconIcCheck.react"),
				variant: "filled",
				size: "large",
				onPress: oe,
				xstyle: x == null ? h.submitButtonDisabledLook : void 0,
				testid: "checkmark-large",
				"aria-disabled": x == null,
				"aria-label": s._(
					/*BTDS*/
					""
				)
			})
		}, "btn-submit"), ie = U != null ? s._(
			/*BTDS*/
			"",
			[s._param("emoji name", U), s._param("color name", I(b[B]))]
		) : null, le = null;
		if (Array.isArray(G)) if (G.length > 0) {
			var se;
			le = s._(
				/*BTDS*/
				"",
				[
					s._plural((se = G == null ? void 0 : G.length) != null ? se : 0),
					s._param("emoji name", G == null ? void 0 : G.join(" ")),
					s._param("color name", I(b[B]))
				]
			);
		} else le = s._(
			/*BTDS*/
			"",
			[s._param("color name", I(b[B]))]
		);
		var ue = (n = ie != null ? ie : le) != null ? n : ee;
		return c.jsxs(r("WAWebDrawer.react"), {
			theme: "products",
			tsNavigationData: {
				surface: "unknown",
				viewName: "edit-group-profile"
			},
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: T,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
				onCancel: l
			}), c.jsxs(r("WAWebDrawerBody.react"), {
				overflow: "hidden",
				children: [
					c.jsxs(o("WAWebFlex.react").FlexColumn, {
						className: "x16w0wmm x1n2onr6 xh8yej3 x5yr21d",
						align: "center",
						justify: "center",
						children: [c.jsx(r("WAWebFlexItem.react"), {
							grow: 1,
							xstyle: h.body,
							children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
								align: "center",
								children: [
									c.jsx(r("WAWebFlexItem.react"), {
										role: "img",
										"aria-label": ue,
										children: te
									}),
									c.jsx(r("WAWebFlexItem.react"), { children: c.jsx(r("WAWebIconTabs.react"), {
										refs: J.current,
										selectedIndex: A,
										onSelect: function(t) {
											t !== A && (F(t), ne(t === X.EMOJI ? g.EMOJI : g.STICKER));
										},
										tabConfigs: [{
											Icon: r("WDSIconIcMood.react"),
											iconStyle: y.emojiIcon,
											ariaLabel: s._(
												/*BTDS*/
												""
											)
										}, {
											Icon: r("WDSIconWdsIcSticker.react"),
											iconStyle: y.stickerIcon,
											ariaLabel: s._(
												/*BTDS*/
												""
											)
										}],
										popupAtLaunch: !0
									}) }),
									c.jsx(r("WAWebFlexItem.react"), { children: c.jsx(r("WAWebEditGroupProfileDrawerColorPanel.react"), {
										className: "x1yl842u",
										colors: C,
										selectedIndex: B,
										onSelect: W
									}) })
								]
							})
						}), c.jsx(r("WAWebFlexItem.react"), {
							grow: 0,
							xstyle: h.footer,
							children: ae
						})]
					}),
					A === X.EMOJI && c.jsx(o("WAWebEditGroupProfileDrawerEmojiStickerPanelPopup.react").EmojiPanelPopup, {
						anchor: r("nullthrows")((a = J.current[X.EMOJI]) == null ? void 0 : a.current),
						onSelect: re,
						onClose: function() {
							return Y.current[X.EMOJI]();
						}
					}),
					A === X.STICKER && c.jsx(o("WAWebEditGroupProfileDrawerEmojiStickerPanelPopup.react").StickerPanelPopup, {
						anchor: r("nullthrows")((i = J.current[X.STICKER]) == null ? void 0 : i.current),
						onSelect: function(t) {
							return re(null, t);
						},
						onClose: function() {
							return Y.current[X.STICKER]();
						}
					})
				]
			})]
		}, "attach-edit-group-profile-modal");
	}
	T.displayName = T.name + " [from " + i.id + "]", l.EMOJI_IMAGE_SHARPEN_SIZE_THRESHOLD = f, l.ImageType = g, l.COLOR_OPTIONS = b, l.PHOTO_SIZE = v, l.IMAGE_SIZE = S, l.getFbtColorString = I, l.EditGroupProfileDrawer = T;
}), 226);
