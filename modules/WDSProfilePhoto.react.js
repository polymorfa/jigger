__d("WDSProfilePhoto.react", [
	"BaseImage.react",
	"BaseProfilePhoto.react",
	"WDSFocusStateStyles",
	"WDSIconIcAddAPhoto.react",
	"WDSIconWdsIcVerifiedFilled.react",
	"WDSPressMotionStyles",
	"WDSProfilePhotoRenderingMode",
	"WDSProfilePhotoSegmentedRing.react",
	"WDSProfilePhotoUtils",
	"WDSSpinner.react",
	"WDSTooltip.react",
	"WDSVars.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useId, p = c.useState, _ = {
		image: {
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			display: "x1lliihq",
			$$css: !0
		},
		outline: {
			"::after_borderTopColor": "x1f65lpj",
			"::after_borderInlineEndColor": "x1dp6k3u",
			"::after_borderBottomColor": "x15j2znp",
			"::after_borderInlineStartColor": "xwr2rdz",
			"::after_borderStartStartRadius": "xrw4ojt",
			"::after_borderStartEndRadius": "xg6frx5",
			"::after_borderEndEndRadius": "xw872ko",
			"::after_borderEndStartRadius": "xhgbb2x",
			"::after_borderTopStyle": "xynf4tj",
			"::after_borderInlineEndStyle": "xdjs2zz",
			"::after_borderBottomStyle": "x1r9ni5o",
			"::after_borderInlineStartStyle": "xvsnedh",
			"::after_borderTopWidth": "x1g7kj8l",
			"::after_borderInlineEndWidth": "xqo1zpi",
			"::after_borderBottomWidth": "x2qsnth",
			"::after_borderInlineStartWidth": "xh2ebzn",
			"::after_boxSizing": "xx38sju",
			"::after_content": "x1s928wv",
			"::after_top": "x1m1drc7",
			"::after_insetInlineEnd": "x1unh1gc",
			"::after_bottom": "x1xrz1ek",
			"::after_insetInlineStart": "x1iygr5g",
			"::after_pointerEvents": "x2q1x1w",
			"::after_position": "x1j6awrg",
			$$css: !0
		}
	}, f = {
		alignItems: "x6s0dn4",
		display: "x78zum5",
		justifyContent: "xl56j7k",
		lineHeight: "x14ju556",
		$$css: !0
	}, g = {
		borderStartStartRadius: "xykpoxv",
		borderStartEndRadius: "xsejb3s",
		borderEndEndRadius: "x1swlh40",
		borderEndStartRadius: "x1mjayxm",
		$$css: !0
	}, h = {
		container: function(t) {
			return [
				f,
				{
					height: t != null ? "x16ye13r" : t,
					width: t != null ? "x5lhr3w" : t,
					$$css: !0
				},
				{
					"--x-height": (function(e) {
						return typeof e == "number" ? e + "px" : e != null ? e : void 0;
					})(t),
					"--x-width": (function(e) {
						return typeof e == "number" ? e + "px" : e != null ? e : void 0;
					})(t)
				}
			];
		},
		position: {
			bottom: "x1ey2m1c",
			insetInlineEnd: "xtijo5x",
			position: "x10l6tqk",
			$$css: !0
		},
		rounded: function(t) {
			return [g, { "--x-borderRadius": (function(e) {
				return typeof e == "number" ? e + "px" : e != null ? e : void 0;
			})(t / 2) }];
		},
		surface: function(t) {
			return [{
				backgroundColor: t != null ? "xl8spv7" : t,
				$$css: !0
			}, { "--x-backgroundColor": t != null ? t : void 0 }];
		},
		content: function(t) {
			return [{
				color: t != null ? "x14rh7hd" : t,
				$$css: !0
			}, { "--x-color": t != null ? t : void 0 }];
		}
	}, y = {
		base: {
			display: "x3nfvp2",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		size: function(t) {
			return [{
				height: t != null ? "x16ye13r" : t,
				width: t != null ? "x5lhr3w" : t,
				$$css: !0
			}, {
				"--x-height": (function(e) {
					return typeof e == "number" ? e + "px" : e != null ? e : void 0;
				})(t),
				"--x-width": (function(e) {
					return typeof e == "number" ? e + "px" : e != null ? e : void 0;
				})(t)
			}];
		},
		positioned: {
			overflowX: "x1plvlek",
			overflowY: "xryxfnj",
			position: "x1n2onr6",
			$$css: !0
		},
		starburstMask: function(t) {
			return [{
				mask: t != null ? "x1hw4fh5" : t,
				$$css: !0
			}, { "--x-mask": t != null ? t : void 0 }];
		}
	}, C = {
		fontWeight: "xfjzk2p",
		lineHeight: "xo5v014",
		textTransform: "xtvhhri",
		userSelect: "x87ps6o",
		$$css: !0
	}, b = {
		lineHeight: "x14ju556",
		$$css: !0
	}, v = {
		container: {
			alignItems: "x6s0dn4",
			display: "x78zum5",
			height: "x5yr21d",
			justifyContent: "xl56j7k",
			width: "xh8yej3",
			$$css: !0
		},
		initials: function(t, n) {
			return [
				C,
				{
					color: t != null ? "x14rh7hd" : t,
					fontSize: n != null ? "xdmh292" : n,
					$$css: !0
				},
				{
					"--x-color": t != null ? t : void 0,
					"--x-fontSize": (function(e) {
						return typeof e == "number" ? e + "px" : e != null ? e : void 0;
					})(n)
				}
			];
		},
		icon: function(t) {
			return [
				b,
				{
					color: t != null ? "x14rh7hd" : t,
					$$css: !0
				},
				{ "--x-color": t != null ? t : void 0 }
			];
		}
	}, S = {
		alignItems: "x6s0dn4",
		display: "x78zum5",
		justifyContent: "xl56j7k",
		overflowX: "x6ikm8r",
		overflowY: "x10wlt62",
		position: "x10l6tqk",
		$$css: !0
	}, R = {
		pressableWrapper: {
			backgroundColor: "xjbqb8w",
			borderTopStyle: "x1ejq31n",
			borderInlineEndStyle: "x18oe1m7",
			borderBottomStyle: "x1sy0etr",
			borderInlineStartStyle: "xstzfhl",
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			cursor: "x1ypdohk",
			display: "x3nfvp2",
			flexShrink: "x2lah0s",
			overflowX: "x1plvlek",
			overflowY: "xryxfnj",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			position: "x1n2onr6",
			$$css: !0
		},
		circle: {
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			$$css: !0
		},
		squircle: {
			borderStartStartRadius: "x1xstdij",
			borderStartEndRadius: "x1hpb3w5",
			borderEndEndRadius: "xyd612o",
			borderEndStartRadius: "x1pvccs7",
			$$css: !0
		},
		iconOverlay: function(t) {
			return [
				S,
				{
					top: t != null ? "x16zzebs" : t,
					insetInlineEnd: t != null ? "x1m2rwpn" : t,
					bottom: t != null ? "xfk5h6u" : t,
					insetInlineStart: t != null ? "x1em17wz" : t,
					$$css: !0
				},
				{ "--x-inset": (function(e) {
					return typeof e == "number" ? e + "px" : e != null ? e : void 0;
				})(t) }
			];
		},
		circleClip: {
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			$$css: !0
		},
		squircleClip: {
			borderStartStartRadius: "x1xstdij",
			borderStartEndRadius: "x1hpb3w5",
			borderEndEndRadius: "xyd612o",
			borderEndStartRadius: "x1pvccs7",
			$$css: !0
		},
		iconContainer: {
			lineHeight: "x14ju556",
			transform: "x3oybdh xcum6zn",
			transitionProperty: "x11xpdln",
			transitionDuration: "xx6bhzk",
			transitionTimingFunction: "x9lcvmn",
			$$css: !0
		},
		iconColor: function(t) {
			return [{
				color: t != null ? "x14rh7hd" : t,
				$$css: !0
			}, { "--x-color": t != null ? t : void 0 }];
		},
		hoverFade: {
			opacity: "xg01cxk x1o7uuvo",
			transitionProperty: "x19991ni",
			transitionDuration: "xx6bhzk",
			transitionTimingFunction: "x9lcvmn",
			$$css: !0
		}
	};
	function L(t) {
		var n, a, i, l, s, c, f, g, C = t.addOns, b = t.badge, S = t.color, L = S === void 0 ? "green" : S, E = t.customColor, k = t.cutouts, I = t.initials, T = t.interaction, D = t.isDecorative, x = D === void 0 ? !1 : D, $ = t.loading, P = $ === void 0 ? !1 : $, N = t.name, M = t.placeholderIcon, w = t.size, A = w === void 0 ? "medium" : w, F = t.src, O = t.statusRing, B = t.testid, W = t.tooltipDisabled, q = W === void 0 ? !1 : W, U = t.type, V = t.videoSrc, H = m(), G = p(!1), z = G[0], j = G[1], K = p(null), Q = K[0], X = K[1], Y = V != null && Q === V, J = d(function() {
			X(V != null ? V : null);
		}, [V]), Z = o("WDSProfilePhotoUtils").SIZE_TO_PX[A], ee = U === "community" || U === "announcement", te = !P && (T == null ? void 0 : T.type) === "edit" && Z >= 36, ne = !P && T != null && (te || T.type !== "edit" && Z >= 24), re = b != null ? o("WDSProfilePhotoUtils").BADGE_SIZE_MAP[Z] : void 0, oe = re != null ? o("WDSProfilePhotoUtils").BADGE_CUTOUT_SPEC[Z] : null, ae = (function(t) {
			if (b == null || re == null) return null;
			var n = o("WDSProfilePhotoUtils").BADGE_COLORS[b.type], a = n.content, i = n.surface, l = o("WDSProfilePhotoUtils").BADGE_ICON_SIZE[re], s = re;
			l != null && (s = i != null ? l.withSurface : l.noSurface);
			var c = b.type === "verified" ? r("WDSIconWdsIcVerifiedFilled.react") : (t = b.Icon) != null ? t : o("WDSProfilePhotoUtils").DEFAULT_BADGE_ICON[b.type];
			return u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(h.position, h.container(re), i != null && h.rounded(re), i != null && h.surface(i), h.content(a)), { children: u.jsx(c, {
				height: s,
				width: s
			}) }));
		})(), ie = (b == null ? void 0 : b.type) === "verified", le = (function() {
			if (b == null || re == null || ie || oe == null) return k;
			var e = U !== "community" && U !== "announcement", t = Math.round(e ? Z * .1465 - re / 2 : -re / 2), n = {
				type: "addOnCircle",
				position: "bottom-end",
				radius: oe.maskSize / 2,
				offsetX: t,
				offsetY: t
			};
			return k != null ? [n].concat(k) : [n];
		})(), se = U === "community" || U === "announcement" ? o("WDSProfilePhotoUtils").SQUIRCLE_SHAPE : "circle", ue = E != null ? E : o("WDSProfilePhotoUtils").colorTokenMap[L], ce = (n = o("WDSProfilePhotoUtils").ICON_SIZE_MAP[Z]) != null ? n : Math.round(Z * .45), de = (a = o("WDSProfilePhotoUtils").INITIALS_FONT_SIZE_MAP[Z]) != null ? a : Math.round(Z * .41), me = o("WDSProfilePhotoUtils").STATUS_RING_SPEC[Z], pe = O != null && O.totalCount >= 1 && U !== "community" && U !== "announcement" && o("WDSProfilePhotoUtils").RING_SUPPORTED_SIZES[A] === !0 && me != null ? O : void 0, _e = F != null && F !== "", fe = o("WDSProfilePhotoRenderingMode").getWDSProfilePhotoRenderingMode() === "maybe-BaseImage" && _e && !P && (V == null || V === "") && U !== "community" && U !== "announcement" && b == null && pe == null && !(C != null && C.length) && !(k != null && k.length) && !ne;
		if (fe && F != null) return u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(y.base, y.size(Z), y.positioned, _.outline), { children: u.jsx(r("BaseImage.react"), {
			alt: x ? void 0 : N,
			draggable: !1,
			height: Z,
			isDecorative: x,
			objectFit: "cover",
			src: F,
			testid: void 0,
			width: Z,
			xstyle: _.image
		}) }));
		var ge = (i = pe == null ? void 0 : pe.totalCount) != null ? i : 0, he = (l = pe == null ? void 0 : pe.viewedCount) != null ? l : 0, ye = pe != null && ge > 1, Ce = (s = pe == null ? void 0 : pe.variant) != null ? s : "default", be = Ce === "closeFriends" ? he < ge ? o("WDSProfilePhotoUtils").UNVIEWED_CLOSE_FRIENDS_COLOR : o("WDSProfilePhotoUtils").VIEWED_COLOR : he < ge ? o("WDSProfilePhotoUtils").UNVIEWED_COLOR : o("WDSProfilePhotoUtils").VIEWED_COLOR, ve = (function() {
			if (!(pe == null || me == null)) return ye ? {
				color: "transparent",
				gap: me.gap + me.strokeWidth,
				thickness: 0
			} : {
				color: be,
				gap: me.gap,
				thickness: me.strokeWidth
			};
		})(), Se = ((c = ve == null ? void 0 : ve.gap) != null ? c : 0) + ((f = ve == null ? void 0 : ve.thickness) != null ? f : 0), Re = Se, Le = Se, Ee = Z - 2 * Se, ke = (function() {
			if (P) return u.jsx("foreignObject", {
				x: Re,
				y: Le,
				width: Ee,
				height: Ee,
				children: u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(v.container, v.icon(ue.content)), { children: u.jsx(r("WDSSpinner.react"), { size: ce }) }))
			});
			if (F != null && F !== "") return null;
			if (M != null) return u.jsx("foreignObject", {
				x: Re,
				y: Le,
				width: Ee,
				height: Ee,
				children: u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(v.container, v.icon(ue.content)), { children: M({
					height: ce,
					width: ce
				}) }))
			});
			if (U === "person" && I != null && I !== "") return u.jsx("foreignObject", {
				x: Re,
				y: Le,
				width: Ee,
				height: Ee,
				children: u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(v.container, v.initials(ue.content, de)), { children: I }))
			});
			var t = o("WDSProfilePhotoUtils").getPlaceholderIcon(U, ce);
			return t == null ? null : u.jsx("foreignObject", {
				x: Re,
				y: Le,
				width: Ee,
				height: Ee,
				children: u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(v.container, v.icon(ue.content)), { children: t }))
			});
		})(), Ie = _e && !P ? void 0 : ue.surface, Te = V != null && V !== "" && !Y ? u.jsx("foreignObject", {
			x: Re,
			y: Le,
			width: Ee,
			height: Ee,
			children: u.jsx("video", {
				className: "x1lliihq x5yr21d xl1xv1r xh8yej3",
				"aria-hidden": !0,
				autoPlay: !0,
				disablePictureInPicture: !0,
				loop: !0,
				muted: !0,
				onError: J,
				playsInline: !0,
				poster: _e ? F : void 0,
				src: V
			})
		}) : null, De = ye && me != null ? u.jsx(r("WDSProfilePhotoSegmentedRing.react"), {
			badgeMaskCx: re != null && !ie ? Z - re / 2 : void 0,
			badgeMaskCy: re != null && !ie ? Z - re / 2 : void 0,
			badgeMaskId: re != null && oe != null && !ie ? H + "-ring" : void 0,
			badgeMaskR: oe != null && !ie ? oe.maskSize / 2 : void 0,
			sizePx: Z,
			strokeWidth: me.strokeWidth,
			totalCount: ge,
			variant: Ce,
			viewedCount: he
		}) : null, xe = U === "community" || U === "announcement" ? u.jsxs("svg", {
			"aria-hidden": !0,
			height: Z,
			className: "x13vifvy x1o0tod x47corl x10l6tqk",
			viewBox: "0 0 200 200",
			width: Z,
			children: [re != null && oe != null && !ie && u.jsx("defs", { children: u.jsxs("mask", {
				id: H + "-squircle",
				children: [u.jsx("rect", {
					fill: "white",
					height: "200",
					width: "200"
				}), u.jsx("circle", {
					cx: 200 - re / 2 * (200 / Z),
					cy: 200 - re / 2 * (200 / Z),
					fill: "black",
					r: oe.maskSize / 2 * (200 / Z)
				})]
			}) }), u.jsx("path", {
				d: o("WDSProfilePhotoUtils").SQUIRCLE_PATH,
				fill: "none",
				mask: re != null && oe != null && !ie ? "url(#" + H + "-squircle)" : void 0,
				stroke: o("WDSProfilePhotoUtils").DECORATIVE_OUTLINE.color,
				strokeWidth: o("WDSProfilePhotoUtils").DECORATIVE_OUTLINE.thickness,
				vectorEffect: "non-scaling-stroke"
			})]
		}) : null, $e = H + "-starburst", Pe = (function() {
			return !ie || re == null || oe == null ? null : {
				scale: re / 24,
				strokeW: oe.offset * 2 * 24 / re,
				tx: Z - re,
				ty: Z - re
			};
		})(), Ne = pe != null || ae != null || xe != null, Me = u.jsxs(u.Fragment, { children: [
			u.jsx(r("BaseProfilePhoto.react"), {
				addOns: C,
				alt: x ? void 0 : N,
				backgroundFill: Ie,
				cutouts: le,
				imageUri: !P && F != null && F !== "" ? F : void 0,
				isDecorative: x,
				maskedChildren: te ? null : Te != null ? Te : ke,
				outline: o("WDSProfilePhotoUtils").DECORATIVE_OUTLINE,
				ring: ve,
				shape: se,
				size: Z,
				testid: void 0
			}),
			De,
			xe
		] }), we = u.jsxs(u.Fragment, { children: [Pe != null && u.jsx("svg", {
			"aria-hidden": !0,
			height: 0,
			className: "x10l6tqk",
			width: 0,
			children: u.jsx("defs", { children: u.jsxs("mask", {
				height: Z,
				id: $e,
				maskUnits: "userSpaceOnUse",
				width: Z,
				x: "0",
				y: "0",
				children: [u.jsx("rect", {
					fill: "white",
					height: Z,
					width: Z
				}), u.jsx("g", {
					transform: "translate(" + Pe.tx + "," + Pe.ty + ") scale(" + Pe.scale + ")",
					children: u.jsx("path", {
						d: o("WDSProfilePhotoUtils").VERIFIED_STARBURST_PATH,
						fill: "black",
						stroke: "black",
						strokeLinejoin: "round",
						strokeWidth: Pe.strokeW
					})
				})]
			}) })
		}), Pe != null ? u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(y.size(Z), y.starburstMask("url(#" + $e + ")")), { children: Me })) : Me] }), Ae = u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(y.base, y.size(Z), Ne && y.positioned), { children: [we, ae] }));
		if (!ne || T == null) return Ae;
		var Fe = _e ? o("WDSVars.stylex").WDSColors["--WDS-persistent-always-white"] : ue.content, Oe = (g = T.tooltipLabel) != null ? g : T.label, Be = Z <= 40 ? o("WDSPressMotionStyles").WDSPressMotionStyles.compact : o("WDSPressMotionStyles").WDSPressMotionStyles.small;
		return u.jsx("div", babelHelpers.extends({}, e.props(y.base, y.size(Z)), { children: u.jsx(r("WDSTooltip.react"), {
			disabled: q,
			label: Oe,
			children: u.jsxs("button", babelHelpers.extends({
				"aria-label": T.label,
				onClick: T.onPress,
				type: "button"
			}, e.props(R.pressableWrapper, R.circle, ee && R.squircle, o("WDSPressMotionStyles").WDSPressMotionStyles.pressable, z && Be, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, y.size(Z)), {
				onPointerCancel: function() {
					return j(!1);
				},
				onPointerDown: function() {
					return j(!0);
				},
				onPointerLeave: function() {
					return j(!1);
				},
				onPointerUp: function() {
					return j(!1);
				},
				children: [
					we,
					te && u.jsxs("div", babelHelpers.extends({ "aria-hidden": !0 }, (e || (e = r("stylex"))).props(R.iconOverlay(Se), ee ? R.squircleClip : R.circleClip, _e && R.hoverFade), { children: [_e && u.jsxs("svg", {
						"aria-hidden": !0,
						height: "100%",
						className: "x13vifvy x1o0tod x47corl x10l6tqk",
						viewBox: ee ? "0 0 200 200" : "0 0 " + Z + " " + Z,
						width: "100%",
						children: [re != null && oe != null && !ie && u.jsx("defs", { children: u.jsx("mask", {
							id: H + "-dimmer",
							children: ee ? u.jsxs(u.Fragment, { children: [u.jsx("rect", {
								fill: "white",
								height: "200",
								width: "200"
							}), u.jsx("circle", {
								cx: 200 - re / 2 * (200 / Z),
								cy: 200 - re / 2 * (200 / Z),
								fill: "black",
								r: oe.maskSize / 2 * (200 / Z)
							})] }) : u.jsxs(u.Fragment, { children: [u.jsx("rect", {
								fill: "white",
								height: Z,
								width: Z
							}), u.jsx("circle", {
								cx: Z - re / 2,
								cy: Z - re / 2,
								fill: "black",
								r: oe.maskSize / 2
							})] })
						}) }), ee ? u.jsx("path", {
							d: o("WDSProfilePhotoUtils").SQUIRCLE_PATH,
							fill: o("WDSVars.stylex").WDSVars["--WDS-background-dimmer"],
							mask: re != null && oe != null && !ie ? "url(#" + H + "-dimmer)" : void 0
						}) : u.jsx("circle", {
							cx: Z / 2,
							cy: Z / 2,
							fill: o("WDSVars.stylex").WDSVars["--WDS-background-dimmer"],
							mask: re != null && oe != null && !ie ? "url(#" + H + "-dimmer)" : void 0,
							r: Z / 2
						})]
					}), u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(R.iconContainer, R.iconColor(Fe)), { children: u.jsx(r("WDSIconIcAddAPhoto.react"), {
						height: ce,
						width: ce
					}) }))] })),
					ae
				]
			}))
		}) }));
	}
	L.displayName = L.name + " [from " + i.id + "]", l.default = L;
}), 98);
