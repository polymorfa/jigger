__d("WAWebCameraCaptureRefreshDrawer.react", [
	"fbt",
	"WAWebComposeBoxUtils",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebFlex.react",
	"WAWebMediaEditorCaptionInput.react",
	"WAWebMediaEditorEnumsThemes",
	"WAWebMediaEditorForChatLoadable.react",
	"WAWebNoop",
	"WAWebObjectFit.react",
	"WAWebSpinner.react",
	"WAWebUnstyledButton.react",
	"WAWebVelocityTransitionGroup",
	"WAWebVideo.react",
	"WAWebWdsIcSendFilledIcon.react",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSIconIcDelete.react",
	"WDSIconIcDownload.react",
	"WDSIconIcPhotoCameraFilled.react",
	"WDSMenuBarItem.react",
	"WDSText.react",
	"nullthrows",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useRef, p = c.useState;
	function _() {
		var e = o("react-compiler-runtime").c(3), t = p(null), n = t[0], r = t[1], a;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (a = function(t) {
			r(t);
		}, e[0] = a) : a = e[0];
		var i = a, l;
		return e[1] !== n ? (l = [n, i], e[1] = n, e[2] = l) : l = e[2], l;
	}
	var f = "x18re5ia-B", g = {
		modeBtn: {
			width: "xpmtt7c",
			height: "x1vqgdyp",
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			cursor: "x1ypdohk",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			backgroundColor: "xjbqb8w",
			$$css: !0
		},
		modeBtnActive: {
			backgroundColor: "x4wrhlh",
			$$css: !0
		},
		modeBtnHover: {
			":hover_backgroundColor": "x1ubxc9n",
			$$css: !0
		},
		deleteBtn: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			width: "x15yg21f",
			height: "xnnlda6",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			backgroundColor: "x1p8t8ri",
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
			color: "xuwfzo9",
			cursor: "x1ypdohk",
			$$css: !0
		},
		container: {
			position: "x1n2onr6",
			width: "xh8yej3",
			height: "x5yr21d",
			$$css: !0
		},
		body: {
			position: "x10l6tqk",
			top: "x13vifvy",
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			width: "xh8yej3",
			height: "x5yr21d",
			$$css: !0
		},
		videoContainer: {
			zIndex: "xhtitgo",
			width: "xh8yej3",
			height: "x5yr21d",
			$$css: !0
		},
		bodyContent: {
			width: "xh8yej3",
			height: "x5yr21d",
			paddingTop: "xnk5j39",
			paddingBottom: "xn4wywj",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			boxSizing: "x9f619",
			$$css: !0
		},
		cameraContainer: {
			position: "x1n2onr6",
			$$css: !0
		},
		feedWrapper: {
			paddingBottom: "xgb8hzy",
			$$css: !0
		},
		cameraArea: {
			height: "x5yr21d",
			maxWidth: "x193iq5w",
			alignSelf: "xamitd3",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			position: "x1n2onr6",
			$$css: !0
		},
		cameraAreaBorder: {
			borderStartStartRadius: "xlr9sxt",
			borderStartEndRadius: "xvvg52n",
			borderEndEndRadius: "xwd4zgb",
			borderEndStartRadius: "xq8v1ta",
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
		cameraAreaSpacing: {
			marginBottom: "xcytdqz",
			$$css: !0
		},
		captureFooterActions: {
			width: "xh8yej3",
			height: "x14baz6b",
			paddingInlineStart: "x1iw51ew",
			paddingInlineEnd: "xde1mab",
			boxSizing: "x9f619",
			$$css: !0
		},
		captionInputRow: {
			minWidth: "xeuugli",
			height: "x14baz6b",
			paddingInlineStart: "x1iw51ew",
			paddingInlineEnd: "xde1mab",
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			boxSizing: "x9f619",
			$$css: !0
		},
		sendBtn: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			width: "xvni27",
			height: "xdd8jsf",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			backgroundColor: "xfn3atn",
			color: "x17t9dm2",
			cursor: "x1ypdohk",
			$$css: !0
		}
	}, h = { surface: "camera" };
	function y(e) {
		var t = o("react-compiler-runtime").c(13), n = e.onClose, a = e.onDownload, i = e.toolbarRef, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = { className: "x9f619 x78zum5 x1okw0bk x6s0dn4 x1qughib x1peatla x1280gxy x1iw51ew xde1mab" }, t[0] = l) : l = t[0];
		var c;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (c = s._(
			/*BTDS*/
			""
		), t[1] = c) : c = t[1];
		var d;
		t[2] !== n ? (d = u.jsx(r("WDSMenuBarItem.react"), {
			icon: r("WDSIconIcClose.react"),
			testid: "btn-closer-drawer",
			onClick: n,
			title: c
		}), t[2] = n, t[3] = d) : d = t[3];
		var m;
		t[4] !== i ? (m = i != null ? u.jsx("div", {
			ref: i,
			className: "x78zum5 xl56j7k x1iyjqo2"
		}) : null, t[4] = i, t[5] = m) : m = t[5];
		var p;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), t[6] = p) : p = t[6];
		var _;
		t[7] !== a ? (_ = u.jsx(r("WDSMenuBarItem.react"), {
			icon: r("WDSIconIcDownload.react"),
			testid: "btn-download",
			onClick: a,
			title: p
		}), t[7] = a, t[8] = _) : _ = t[8];
		var f;
		return t[9] !== d || t[10] !== m || t[11] !== _ ? (f = u.jsxs("header", babelHelpers.extends({}, l, { children: [
			d,
			m,
			_
		] })), t[9] = d, t[10] = m, t[11] = _, t[12] = f) : f = t[12], f;
	}
	function C(e) {
		var t = o("react-compiler-runtime").c(5), n = e.onClick, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = { className: "x10l6tqk x1ey2m1c xbudbmw xuuh30 xzkaem6 x15yg21f xnnlda6 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x6ikm8r x10wlt62 xapdjt xr6f91l x5rv0tg x1akc3lz xikp0eg x1xl5mkn x1mfml39 x1l5mzlr xgmdoj8 x1f1wgk5 x1x3ic1u x1vwxpen" }, t[0] = a) : a = t[0];
		var i;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (i = s._(
			/*BTDS*/
			""
		), t[1] = i) : i = t[1];
		var l;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsx(r("WDSIconIcDelete.react"), { "aria-hidden": !0 }), t[2] = l) : l = t[2];
		var c;
		return t[3] !== n ? (c = u.jsx("div", babelHelpers.extends({}, a, { children: u.jsx(r("WAWebUnstyledButton.react"), {
			xstyle: g.deleteBtn,
			testid: "btn-delete-capture",
			"aria-label": i,
			onClick: n,
			children: l
		}) })), t[3] = n, t[4] = c) : c = t[4], c;
	}
	function b(e) {
		var t = o("react-compiler-runtime").c(8), n = e.isActive, a = e.label, i = n ? g.modeBtnActive : g.modeBtnHover, l;
		t[0] !== i ? (l = [g.modeBtn, i], t[0] = i, t[1] = l) : l = t[1];
		var s = n ? "contentDefault" : "contentActionDefault", c;
		t[2] !== a || t[3] !== s ? (c = u.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			colorName: s,
			children: a
		}), t[2] = a, t[3] = s, t[4] = c) : c = t[4];
		var d;
		return t[5] !== l || t[6] !== c ? (d = u.jsx(r("WAWebUnstyledButton.react"), {
			xstyle: l,
			children: c
		}), t[5] = l, t[6] = c, t[7] = d) : d = t[7], d;
	}
	function v(e) {
		var t = e.chat, n = e.drawerTitle, a = e.img, i = e.onCapture, l = e.onSendMedia, c = e.onVideoLoaded, d = e.questionType, f = e.state, v = e.stream, S = e.urlRef, R = e.videoRef, L = e.videoSize, E = _(), k = E[0], I = E[1], T = m(), D = p(!1), x = D[0], $ = D[1], P = function() {
			var e, t, n = (e = (t = T.current) == null ? void 0 : t.toggleViewOnce()) != null ? e : !1;
			$(n);
		}, N = function(t) {
			var e;
			(e = T.current) == null || e.updateCaption(t);
		}, M = function() {
			var e;
			(e = T.current) == null || e.send();
		}, w = null, A = null, F = "cover";
		if (f === "LOADING" || f === "ANIMATING" || f === "RECORDING") {
			var O = {
				0: "xh8yej3 x5yr21d x1hc1fzr x19991ni x1d8287x xrix70t xpk2tj9 x1bndym7",
				1: "xh8yej3 x5yr21d x19991ni x1d8287x xrix70t xpk2tj9 x1bndym7 xg01cxk"
			}[!!(v && f === "LOADING") << 0], B = v ? u.jsx(r("WAWebVideo.react"), {
				autoPlay: !0,
				ref: R,
				onPlaying: c,
				src: S.current != null ? S.current : void 0,
				srcObject: S.current != null ? void 0 : v
			}) : null;
			A = v ? u.jsx("div", {
				className: "xh8yej3 x5yr21d",
				children: u.jsx(r("WAWebObjectFit.react"), {
					type: F,
					size: L,
					children: u.jsx("div", {
						className: O,
						"data-animage-capture-webcam": !0,
						children: B
					})
				})
			}, "webcam") : null, w = f === "RECORDING" ? u.jsx("div", {
				className: "x10l6tqk x1ey2m1c xbudbmw xuuh30 xzkaem6",
				children: u.jsx(r("WDSButton.react"), {
					size: "large",
					variant: "filled",
					Icon: r("WDSIconIcPhotoCameraFilled.react"),
					"aria-label": n,
					onPress: i
				})
			}, "btn-capture") : null;
		} else if (f === "SENDING" && (w = u.jsx(C, { onClick: e.onRetake }), A = u.jsx(r("WAWebObjectFit.react"), {
			type: F,
			size: L,
			children: u.jsx("img", {
				alt: "",
				className: "x10l6tqk xh8yej3 x5yr21d xqcmdr3 xxkxylk",
				"data-animate-capture-snapshot": !0,
				src: a
			})
		}), t)) {
			var W = r("nullthrows")(t.attachMediaContents);
			A = u.jsx(o("WAWebMediaEditorForChatLoadable.react").MediaEditorForChatLoadable, {
				ref: T,
				theme: o("WAWebMediaEditorEnumsThemes").MediaTheme.CAPTURE,
				chat: t,
				initCaption: null,
				mediaCollection: W,
				onDropText: r("WAWebNoop"),
				onSendMedia: l,
				placeholderText: o("WAWebComposeBoxUtils").getComposeBoxPlaceholderText({
					chat: t,
					questionType: d
				}),
				toolbarContainer: k,
				hideFooter: !0,
				hideCanvasShadow: !0
			});
		}
		return u.jsxs(r("WAWebDrawer.react"), {
			theme: e.theme,
			tsNavigationData: h,
			children: [u.jsx(y, {
				onClose: e.onBack,
				onDownload: r("WAWebNoop"),
				toolbarRef: f === "SENDING" ? I : void 0
			}), u.jsx(r("WAWebDrawerBody.react"), {
				overflow: "hidden",
				children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "center",
					justify: "center",
					xstyle: g.bodyContent,
					children: [
						u.jsxs(o("WAWebFlex.react").FlexColumn, {
							grow: 1,
							align: "stretch",
							alignSelf: "stretch",
							xstyle: [g.cameraContainer, g.cameraAreaSpacing],
							children: [u.jsx(o("WAWebFlex.react").FlexColumn, {
								grow: 1,
								shrink: 0,
								align: "stretch",
								xstyle: g.feedWrapper,
								children: u.jsx(o("WAWebFlex.react").FlexRow, {
									grow: 1,
									shrink: 0,
									align: "stretch",
									xstyle: [g.cameraArea, f !== "LOADING" && f !== "ANIMATING" && g.cameraAreaBorder],
									style: L != null ? { aspectRatio: L.width + " / " + L.height } : void 0,
									children: u.jsxs(o("WAWebFlex.react").FlexRow, {
										align: "center",
										justify: "center",
										grow: 1,
										xstyle: g.container,
										children: [f === "LOADING" || f === "ANIMATING" ? u.jsx(o("WAWebSpinner.react").Spinner, {
											stroke: 4,
											size: 50
										}) : null, u.jsx(o("WAWebFlex.react").FlexColumn, {
											align: "stretch",
											xstyle: g.body,
											children: u.jsx(r("WAWebVelocityTransitionGroup"), {
												transitionName: "capture",
												xstyle: g.videoContainer,
												children: A
											})
										})]
									})
								})
							}), w]
						}),
						u.jsxs(o("WAWebFlex.react").FlexRow, {
							align: "center",
							justify: "center",
							gap: 4,
							children: [
								u.jsx(b, {
									label: s._(
										/*BTDS*/
										""
									),
									isActive: !1
								}),
								u.jsx(b, {
									label: s._(
										/*BTDS*/
										""
									),
									isActive: !0
								}),
								u.jsx(b, {
									label: s._(
										/*BTDS*/
										""
									),
									isActive: !1
								})
							]
						}),
						f === "SENDING" && t ? u.jsxs(o("WAWebFlex.react").FlexRow, {
							align: "center",
							xstyle: g.captureFooterActions,
							children: [
								u.jsx("div", { className: "xvni27 xdd8jsf x2lah0s" }),
								u.jsx(o("WAWebFlex.react").FlexRow, {
									grow: 1,
									shrink: 1,
									align: "stretch",
									xstyle: g.captionInputRow,
									children: u.jsx(r("WAWebMediaEditorCaptionInput.react"), {
										chat: t,
										initialText: null,
										viewOnce: x,
										viewOnceDisabled: !1,
										msgType: "image",
										onChange: N,
										onToggleViewOnce: P,
										onEnter: M,
										onFiles: r("WAWebNoop"),
										setCaptionInputRef: r("WAWebNoop"),
										theme: "image",
										containerClassName: "x1iyjqo2 xs83m0k xeuugli xdd8jsf xdj266r xat24cr x1lziwak x14z9mp x1x1rfll xkh2ocl",
										placeholderText: o("WAWebComposeBoxUtils").getComposeBoxPlaceholderText({
											chat: t,
											questionType: d
										})
									})
								}),
								u.jsx("div", {
									className: "x2lah0s xamitd3",
									children: u.jsx(r("WAWebUnstyledButton.react"), {
										testid: "camera_capture_send_btn",
										xstyle: g.sendBtn,
										"aria-label": s._(
											/*BTDS*/
											""
										),
										onClick: M,
										children: u.jsx(o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon, {
											directional: !0,
											width: 24,
											height: 24
										})
									})
								})
							]
						}) : null
					]
				})
			})]
		}, "attach-capture-modal");
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = v;
}), 226);
