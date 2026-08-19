__d("WAWebPhotoViewerModal.react", [
	"WAWebABProps",
	"WAWebCellFrame.react",
	"WAWebContactGetters",
	"WAWebDetailImage.react",
	"WAWebEnvironment",
	"WAWebFbtCommon",
	"WAWebFrontendContactGetters",
	"WAWebImg.react",
	"WAWebModalManager",
	"WAWebName.react",
	"WAWebObjectFit.react",
	"WAWebProfilePicThumbCollection",
	"WAWebTimeSpentLoggingNavigation",
	"WAWebUimUie.react",
	"WAWebVelocityAnimate",
	"WAWebWaChatPsaIcon.react",
	"WAWebWid",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSPaddings.stylex",
	"WDSProfilePhoto.react",
	"WDSTooltip.react",
	"nullthrows",
	"react",
	"stylex",
	"useWAWebContactValues",
	"useWAWebDefaultProfileColors",
	"useWAWebModelValues",
	"useWAWebSaveableProfilePicUrl",
	"useWAWebStableCallback",
	"useWAWebVideoAvatarUrl"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useRef, p = c.useState, _ = { paddingBlock10: {
		paddingTop: "x889kno",
		paddingBottom: "x1a8lsjc",
		$$css: !0
	} }, f = 500, g = 40, h = 640, y = 641, C = "x18re5ia-B", b = {
		avatarDefaultPSASmall: {
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			width: "x100vrsf",
			height: "x1vqgdyp",
			$$css: !0
		},
		avatarDefaultPSALarge: {
			width: "x11i3ho8",
			height: "xzpm71n",
			$$css: !0
		},
		profileContainer: {
			boxSizing: "x9f619",
			display: "x78zum5",
			flex: "xc8qplx",
			flexDirection: "x1q0g3np",
			alignItems: "x6s0dn4",
			justifyContent: "x1qughib",
			height: "x4t50tc",
			$$css: !0
		}
	};
	function v(t) {
		var n = t.animateBorderRadius, a = t.animateSquircle, i = a === void 0 ? !1 : a, l = t.contact, s = t.getZoomNode, c = o("useWAWebContactValues").useContactValues(t.contact.id, [o("WAWebFrontendContactGetters").getFormattedUser, o("WAWebContactGetters").getId]), C = c[0], v = c[1], S = o("useWAWebModelValues").useModelValues(t.profilePicThumb, ["imgFull"]), R = S.imgFull, L = o("WAWebABProps").getABPropConfigValue("wds_web_profile_photo"), E = L ? o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(v) : null, k = o("useWAWebModelValues").useOptionalModelValues(E, ["img"]), I = p(R), T = I[0], D = I[1];
		R != null && T !== R && D(R);
		var x = m(null), $ = r("useWAWebVideoAvatarUrl")(v), P = p(null), N = P[0], M = P[1], w = $ != null && $ !== "" && N !== $, A = function() {
			x.current = null, M($);
		}, F = r("useWAWebSaveableProfilePicUrl")(w ? null : T), O = p(function() {
			return r("WAWebWid").isPSA(t.contact.id) ? {
				visibility: "visible",
				transform: "translateX(0px) translateY(0px) scale(1)",
				borderRadius: "0%",
				transition: "transform " + f + "ms cubic-bezier(.1,.82,.25,1),\n                  border-radius " + f + "ms cubic-bezier(.1,.82,.25,1)"
			} : { visibility: "hidden" };
		}), B = O[0], W = O[1], q = p(function() {
			return r("WAWebWid").isPSA(t.contact.id) ? {
				width: h,
				height: y
			} : null;
		}), U = q[0], V = q[1], H = m(!1), G = m(), z = m();
		d(function() {
			var e = z.current;
			z.current = null, e == null || e();
		}, void 0), o("WAWebTimeSpentLoggingNavigation").useTsNavigation({ surface: "profile-picture-preview" });
		var j = function(t, r, o) {
			V({
				width: r,
				height: o
			}), x.current !== T && (x.current = T, z.current = function() {
				return s(function(e) {
					var r = t.getBoundingClientRect(), o = e.getBoundingClientRect(), a = o.top - r.top, i = o.left - r.left, l = e.clientWidth / t.clientWidth, s = {
						visibility: "hidden",
						transform: "translateX(" + i + "px) translateY(" + a + "px) scale(" + l + ")",
						transition: "transform 0s",
						borderRadius: void 0
					};
					n && (s.borderRadius = "50%"), W(s), z.current = function() {
						var e = {
							transform: "translateX(0px) translateY(0px) scale(1)",
							transition: "transform " + f + "ms cubic-bezier(.1,.82,.25,1)"
						};
						n && (e = {
							transform: "translateX(0px) translateY(0px) scale(1)",
							borderRadius: "0%",
							transition: "transform " + f + "ms cubic-bezier(.1,.82,.25,1),\n                                       border-radius " + f + "ms cubic-bezier(.1,.82,.25,1)"
						}), W(e);
					};
				});
			});
		}, K = function(t) {
			var e = t.currentTarget;
			j(e, e.naturalWidth, e.naturalHeight);
		}, Q = function(t) {
			var e = t.currentTarget;
			j(e, e.videoWidth, e.videoHeight);
		}, X = r("useWAWebStableCallback")(function() {
			if (!H.current) {
				H.current = !0;
				var e;
				if (s(function(t) {
					e = t;
				}), !e) return o("WAWebModalManager").ModalManager.closeMedia();
				var t = G.current;
				if (t) {
					(n || i) && (t.style.transition = (i ? "clip-path" : "border-radius") + " " + f + "ms cubic-bezier(.1,.82,.25,1)", i ? t.style.clipPath = "var(--squircle-polygon)" : t.style.borderRadius = "50%");
					var a = r("nullthrows")(e), l = t.getBoundingClientRect(), u = a.getBoundingClientRect(), c = u.top - l.top, d = u.left - l.left, m = a.clientWidth / t.clientWidth;
					r("WAWebVelocityAnimate")(t, {
						translateX: [d, 0],
						translateY: [c, 0],
						scale: [m, 1]
					}, {
						duration: 200,
						easing: [
							.1,
							.82,
							.25,
							1
						]
					}).then(function() {
						o("WAWebModalManager").ModalManager.closeMedia();
					});
				}
			}
		});
		d(function() {
			(R == null || R === "") && !r("WAWebWid").isPSA(v) && X();
		}, [
			R,
			X,
			v
		]);
		var Y = function(t) {
			Math.abs(t.deltaY) > 3 && X();
		}, J, Z;
		if (r("WAWebWid").isPSA(v)) J = u.jsx(o("WAWebWaChatPsaIcon.react").WaChatPsaIcon, { iconXstyle: b.avatarDefaultPSALarge }), Z = u.jsx(o("WAWebWaChatPsaIcon.react").WaChatPsaIcon, { iconXstyle: b.avatarDefaultPSASmall });
		else if (T) {
			var ee;
			J = w ? u.jsx("video", {
				"aria-hidden": "true",
				autoPlay: !0,
				className: "xhtitgo xh8yej3 x5yr21d x19kjcj4",
				"data-testid": "profile_photo_viewer_video_avatar",
				disablePictureInPicture: !0,
				loop: !0,
				muted: !0,
				onError: A,
				onLoadedData: Q,
				playsInline: !0,
				poster: T,
				src: $
			}) : u.jsx(r("WAWebImg.react"), {
				src: F != null ? F : T,
				hasPrivacyChecks: !0,
				onLoad: K,
				crossOrigin: !1,
				className: "xhtitgo xh8yej3 x5yr21d"
			}), Z = L ? u.jsx(r("WDSProfilePhoto.react"), {
				type: i ? "community" : o("useWAWebDefaultProfileColors").getWDSProfilePhotoType(v),
				name: o("WAWebFrontendContactGetters").getFormattedUser(l),
				src: (ee = k == null ? void 0 : k.img) != null ? ee : T,
				videoSrc: w ? $ : null,
				size: "small",
				color: o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(v),
				customColor: o("useWAWebDefaultProfileColors").getWDSProfilePhotoCustomColor(v),
				placeholderIcon: o("useWAWebDefaultProfileColors").getProfilePhotoPlaceholderIcon(v),
				isDecorative: !0
			}) : u.jsx(o("WAWebDetailImage.react").DetailImage, {
				id: v,
				size: g,
				shape: i ? o("WAWebDetailImage.react").DetailImageShape.Squircle : null,
				videoUrl: w ? $ : null
			});
		}
		return u.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "PhotoViewer",
			escapable: !0,
			requestDismiss: X,
			children: u.jsxs("div", babelHelpers.extends({}, {
				0: { className: "x9f619 x5yr21d xu96u03 xixxii4 x13vifvy xh8yej3 x1pb5qga x78zum5 xdt5ytf x1akjpcp xqcmdr3 xfbpl4g xu90me3" },
				1: { className: "x9f619 x5yr21d xu96u03 xixxii4 xh8yej3 x1pb5qga x78zum5 xdt5ytf x1akjpcp xqcmdr3 xfbpl4g xu90me3 x9ri80z" }
			}[!!r("WAWebEnvironment").isWindows << 0], {
				onWheel: Y,
				onClick: X,
				children: [u.jsxs("div", {
					className: "x78zum5 x3psx0u x15zctf7 x6s0dn4 xng8ra x1280gxy xpbwgaa",
					children: [u.jsx("div", {
						className: "x98rzlu x14yy4lh x1sqbtui xnkmj2t",
						children: u.jsx(r("WAWebCellFrame.react"), {
							image: Z,
							theme: r("WAWebEnvironment").isWindows ? "label-selection" : "plain",
							primary: u.jsx(o("WAWebName.react").Name, {
								contact: l,
								selectable: !0
							})
						})
					}), u.jsx("div", {
						className: "x9ek82g x14iifvp",
						children: u.jsx(r("WDSTooltip.react"), {
							label: r("WAWebFbtCommon")("Close"),
							children: u.jsx(r("WDSButton.react"), {
								variant: "borderless",
								type: "default",
								size: "medium",
								onPress: X,
								Icon: r("WDSIconIcClose.react"),
								testid: "btn-close",
								"aria-label": r("WAWebFbtCommon")("Close")
							})
						})
					})]
				}), u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(b.profileContainer, _.paddingBlock10, o("WDSPaddings.stylex").wdsPaddings.paddingHor0), {
					dir: "ltr",
					children: u.jsx("div", {
						className: "x1n2onr6 x78zum5 x6s0dn4 xl56j7k xh8yej3 xeuugli x5yr21d",
						children: u.jsx(r("WAWebObjectFit.react"), {
							type: "scaleDown",
							size: U,
							children: u.jsx("div", {
								className: "xh8yej3 x5yr21d x6ikm8r x10wlt62 xiy17q3 x1lvsgvq x1tbiz1a xyyilfv",
								ref: G,
								style: B,
								children: J
							})
						})
					})
				}))]
			}))
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = v;
}), 98);
