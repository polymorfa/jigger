__d("WAWebEditImageDrawer.react", [
	"fbt",
	"WARandomHex",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebEditedMedia",
	"WAWebExternalLink.react",
	"WAWebMediaEditCanvas.react",
	"WAWebMediaEditControllerGetters",
	"WAWebMediaEditControllerModel",
	"WAWebObjectFit.react",
	"WAWebProfileCropTool.react",
	"WAWebReturnIcon.react",
	"WAWebTosUrl",
	"WAWebURLUtils",
	"WAWebUnstyledButton.react",
	"WAWebVelocityTransitionGroup",
	"WDSButton.react",
	"WDSFocusStateStyles",
	"WDSIconIcCheck.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"stylex",
	"useLazyRef",
	"useWAWebMediaEditControllerValues"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c, p = m.useRef, _ = m.useState, f = { paddingBottom6: {
		paddingBottom: "x10b6aqq",
		$$css: !0
	} }, g = 361, h = 500, y = {
		NONE: "none",
		RETAKE: "retake",
		RESTART: "restart"
	}, C = {
		submitButton: {
			backgroundColor: "xyp3urf",
			color: "x17t9dm2",
			$$css: !0
		},
		retake: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			color: "x1heor9g",
			cursor: "x1ypdohk",
			$$css: !0
		},
		retakeIcon: {
			flex: "x1okw0bk",
			color: "x17t9dm2",
			$$css: !0
		},
		footer: {
			position: "x1n2onr6",
			zIndex: "xzkaem6",
			boxSizing: "x9f619",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			minHeight: "x5sx7kw",
			$$css: !0
		}
	};
	function b(t) {
		var n, a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.attributionUrl, c = i.cropShape, m = i.onFinished, b = i.onRetake, v = i.retryText, S = p(), R = p(null), L = r("useLazyRef")(function() {
			return new (r("WAWebMediaEditControllerModel"))({ id: o("WARandomHex").randomHex(8) });
		}), E = o("useWAWebMediaEditControllerValues").useMediaEditControllerValues(L.current, [o("WAWebMediaEditControllerGetters").getIsInitialized]), k = E[0], I = _(!1), T = I[0], D = I[1], x = _({
			width: h,
			height: g
		}), $ = x[0], P = x[1], N = _(function() {
			return new (r("WAWebEditedMedia"))({ media: i.img });
		}), M = N[0], w = function() {
			var e;
			(e = S.current) == null || e.saveCanvas();
		}, A = function() {
			var e;
			w(), (e = R.current) == null || e.crop().then(function(e) {
				var t = e.full, n = e.thumb;
				m(n, t), M.cleanUp();
			});
		}, F = function(t) {
			t == null || !(t instanceof HTMLElement) || ($ && ($.width !== t.clientWidth || $.height !== t.clientHeight) && P({
				width: t.clientWidth,
				height: t.clientHeight
			}), T || D(!0));
		}, O = function(t, n) {
			var e;
			(e = S.current) == null || e.drawCanvas(t, n);
		}, B = T ? d.jsx("div", {
			className: "x10l6tqk x13vifvy x1g9hn12 xhi6v0a xhtitgo xzbmw64",
			children: d.jsx(r("WDSButton.react"), {
				Icon: r("WDSIconIcCheck.react"),
				variant: "filled",
				size: "large",
				onPress: A,
				xstyle: C.submitButton,
				testid: "checkmark-large",
				"aria-label": s._(
					/*BTDS*/
					""
				)
			})
		}, "btn-send") : null, W;
		k && (W = d.jsx(o("WAWebProfileCropTool.react").WrappedProfileCropTool, {
			editedMedia: M,
			cropOverlay: L.current.cropOverlay,
			drawCanvas: O,
			ref: R,
			cropShape: c || o("WAWebProfileCropTool.react").CropShapeType.CIRCLE
		}));
		var q = d.jsx(r("WAWebMediaEditCanvas.react"), {
			className: "x78zum5 x6s0dn4 xl56j7k xiy17q3 xztyhrg x1tbiz1a x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod",
			editedMedia: M,
			mediaEditController: L.current,
			fitType: "cover",
			ref: S
		}), U;
		if (b) {
			var V;
			switch (v) {
				case y.NONE:
					V = null;
					break;
				case y.RETAKE:
					V = s._(
						/*BTDS*/
						""
					);
					break;
				case y.RESTART:
				default: V = s._(
					/*BTDS*/
					""
				);
			}
			U = d.jsxs(r("WAWebUnstyledButton.react"), {
				xstyle: [C.retake, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus],
				onClick: b,
				title: V != null ? V.toString() : "",
				children: [d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(C.retakeIcon, o("WDSMargins.stylex").wdsMargins.marginEnd4), { children: d.jsx(o("WAWebReturnIcon.react").ReturnIcon, {}) })), V]
			});
		}
		var H = l ? d.jsxs("div", {
			className: "x78zum5 xdt5ytf x6s0dn4 x1wb0a4p x6ikm8r x10wlt62 x1nxh6w3 x17fgdl5 x2b8uid x1k70j0n",
			children: [d.jsx(o("WAWebExternalLink.react").ExternalLink, {
				className: "x1okw0bk x1jkqq1h x6ikm8r x10wlt62 xlyipyv xuxw1ft",
				href: l,
				children: r("WAWebURLUtils").hostname(l)
			}), d.jsxs("span", { children: [s._(
				/*BTDS*/
				""
			), d.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: o("WAWebTosUrl").getTosUrl(),
				children: s._(
					/*BTDS*/
					""
				)
			})] })]
		}) : null, G = c === o("WAWebProfileCropTool.react").CropShapeType.RECT ? d.jsx("div", {
			className: "x98rzlu x1yc453h",
			children: s._(
				/*BTDS*/
				""
			)
		}) : void 0, z = d.jsxs("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(C.footer, o("WDSPaddings.stylex").wdsPaddings.paddingTop0, f.paddingBottom6, o("WDSPaddings.stylex").wdsPaddings.paddingHor20), { children: [
			d.jsx(r("WAWebVelocityTransitionGroup"), {
				transitionName: "btn",
				children: B
			}),
			H,
			G
		] })), j = (n = i.imageSize) != null ? n : {
			width: h,
			height: g
		};
		return d.jsxs(r("WAWebDrawer.react"), {
			ref: a,
			theme: "edit",
			tsNavigationData: {
				surface: "unknown",
				viewName: "edit-image"
			},
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: "offset",
				onCancel: i.onCancel,
				focusBackOrCancel: !0,
				children: U
			}), d.jsxs(r("WAWebDrawerBody.react"), {
				overflow: "hidden",
				children: [d.jsxs("div", {
					className: "x1n2onr6 x78zum5 x98rzlu x6s0dn4 xl56j7k xh8yej3",
					children: [W, d.jsx("div", {
						className: "x10l6tqk x13vifvy x1o0tod x78zum5 xdt5ytf xuk3077 xl56j7k xh8yej3 x5yr21d x1m8r95a",
						children: d.jsx(r("WAWebVelocityTransitionGroup"), {
							transitionName: "capture",
							children: d.jsx(r("WAWebObjectFit.react"), {
								type: "cover",
								size: j,
								onObjectLoad: F,
								children: q
							})
						})
					})]
				}), z]
			})]
		}, "attach-edit-modal");
	}
	b.displayName = b.name + " [from " + i.id + "]", l.RETRY_OPTIONS = y, l.EditImageDrawer = b;
}), 226);
