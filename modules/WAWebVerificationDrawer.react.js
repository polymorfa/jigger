__d("WAWebVerificationDrawer.react", [
	"fbt",
	"WAByteArray",
	"WAFilteredCatch",
	"WAGetUserMedia",
	"WAValidateFingerprints",
	"WAWebABProps",
	"WAWebChatContactUtils",
	"WAWebContactGetters",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebE2EChangeModal.react",
	"WAWebEmojiText.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebFrontendContactGetters",
	"WAWebGetUserMediaErrors",
	"WAWebGuidePopup.react",
	"WAWebIdentityVerificationJob",
	"WAWebLid1X1MigrationGating",
	"WAWebMediaCapture",
	"WAWebMediaCaptureStreamType",
	"WAWebMobilePlatforms",
	"WAWebModalManager",
	"WAWebName.react",
	"WAWebSendMsgToVerifyIdentityPopup.react",
	"WAWebStopEvent",
	"WAWebUserPrefsMeUser",
	"WAWebUserPrefsMultiDevice",
	"WAWebUsernameGatingUtils",
	"WAWebVerificationCircle.react",
	"WAWebVerificationDrawerHelpers",
	"WAWebVerificationNumericCode.react",
	"WAWebVerificationWebcam.react",
	"WAWebVoipGatingUtils",
	"WAWebWidFactory",
	"WDSButton.react",
	"WDSText.react",
	"nullthrows",
	"react",
	"useWAWebContactValues",
	"useWAWebTimeout",
	"useWAWebUIM",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useRef, f = d.useState, g = "x15aousm-B", h = "x1bhqxhk-B", y = 3e3, C = 5e3, b = 7e3, v = 1e3;
	function S(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.contact, l = a.isFirstLevel, u = l === void 0 ? !1 : l, d = a.lid, g = a.onClose, h = r("useWAWebUIM")(), S = r("useWAWebUnmountSignal")(), R = o("useWAWebContactValues").useContactValues(i.id, [
			o("WAWebFrontendContactGetters").getFormattedUser,
			o("WAWebFrontendContactGetters").getFormattedShortNameAndType,
			o("WAWebContactGetters").getIsMe,
			o("WAWebContactGetters").getId,
			o("WAWebContactGetters").getShowBusinessCheckmarkAsPrimary,
			o("WAWebFrontendContactGetters").getPhoneNumber,
			o("WAWebFrontendContactGetters").getShareOwnPn,
			o("WAWebFrontendContactGetters").getPnForLid,
			o("WAWebContactGetters").getIsHosted,
			o("WAWebContactGetters").getNotifyName,
			o("WAWebFrontendContactGetters").getIsGuest
		]), L = R[0], E = R[1], k = R[2], I = R[3], T = R[4], D = R[5], x = R[6], $ = R[7], P = R[8], N = R[9], M = R[10], w = o("WAWebChatContactUtils").getFormattedNotifyName(N), A = o("WAWebVoipGatingUtils").isGuestViewer() && w !== "", F = A ? w : L, O = _(null), B = _(null), W = _(null), q = f("qr"), U = q[0], V = q[1], H = f(null), G = H[0], z = H[1], j = f(null), K = j[0], Q = j[1], X = f(!1), Y = X[0], J = X[1], Z = f(null), ee = Z[0], te = Z[1], ne = f(null), re = ne[0], oe = ne[1], ae = f(o("WAWebUsernameGatingUtils").shouldDefaultToV4NumericCode()), ie = ae[0], le = ae[1], se = f(null), ue = se[0], ce = se[1], de = f(null), me = de[0], pe = de[1], _e = function() {
			o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebSendMsgToVerifyIdentityPopup.react"), {
				name: F,
				onOK: function() {
					g ? g() : h == null || h.requestDismiss();
				}
			}));
		}, fe = function() {
			var e = {
				jid: o("WAWebWidFactory").asUserWidOrThrow(I),
				isRemoteGuest: M,
				options: { shareOwnPn: x || !I.isLid() || o("WAWebUserPrefsMeUser").isMeAccount(I) }
			};
			o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() && (e.lid = d), o("WAWebIdentityVerificationJob").getIdentityVerificationDataJob(e).then(function(e) {
				S.aborted || (e ? ((!o("WAByteArray").compareArrayBuffer(ee, e.qrCodeDisplay) || !o("WAByteArray").compareArrayBuffer(re, e.qrCodeVerify) || ue !== e.numericCodeV3 || me !== e.numericCodeV4) && (ee != null && o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebE2EChangeModal.react"), { contact: i })), te(e.qrCodeDisplay), oe(e.qrCodeVerify), ce(e.numericCodeV3), pe(e.numericCodeV4)), ve()) : (Se(), _e()));
			});
		}, ge = o("useWAWebTimeout").useTimeout(m(function() {
			return z(null);
		}, [z]), C), he = ge[0], ye = function(t) {
			V("qr"), z(t), he();
		}, Ce = function() {
			K && G == null && ye(s._(
				/*BTDS*/
				""
			));
		}, be = o("useWAWebTimeout").useTimeout(fe, v), ve = be[0], Se = be[1], Re = o("useWAWebTimeout").useTimeout(m(function() {
			return V("qr");
		}, [V]), y), Le = Re[0];
		function Ee(e) {
			De(), z(null), V(e), Le();
		}
		var ke = o("useWAWebTimeout").useTimeout(Ce, b), Ie = ke[0], Te = function(t) {
			J(t);
		}, De = function() {
			z(null), Q(null), O.current = null;
		}, xe = function(t) {
			var e = o("WAWebVerificationDrawerHelpers").getErrorBannerText(t, A ? w : E.displayName);
			ye(e);
		}, $e = function(t, n) {
			var e = o("WAWebVerificationDrawerHelpers").decodeQRCode(t);
			if (!(n && !e)) {
				var a = o("WAWebVerificationDrawerHelpers").getFingerprintValidationResult(e, r("nullthrows")(re));
				if (a === o("WAValidateFingerprints").FingerprintValidationResult.SUCCESS) {
					Ee("checkmark");
					return;
				}
				if (a === o("WAValidateFingerprints").FingerprintValidationResult.LOCAL_KEYS_MISMATCH || a === o("WAValidateFingerprints").FingerprintValidationResult.REMOTE_KEYS_MISMATCH || a === o("WAValidateFingerprints").FingerprintValidationResult.LOCAL_PN_MISMATCH_PEER || a === o("WAValidateFingerprints").FingerprintValidationResult.REMOTE_HOSTED_DEVICE_MISSMATCH || a === o("WAValidateFingerprints").FingerprintValidationResult.LOCAL_HOSTED_DEVICE_MISSMATCH || a === o("WAValidateFingerprints").FingerprintValidationResult.LOCAL_USERNAME_MISMATCH_PEER) {
					Ee("error");
					return;
				}
				xe(a);
			}
		}, Pe = function(t) {
			t.stopPropagation(), Ne(t.target.files);
		}, Ne = function(t) {
			if (!(!t || !t[0])) {
				var e = t[0];
				Me(e);
				var n = B.current;
				n && n.reset();
			}
		}, Me = function(t) {
			var e = URL.createObjectURL(t), n = document.createElement("canvas"), r = n.getContext("2d"), o = new Image();
			o.src = e, o.onload = function() {
				n.width = o.width, n.height = o.height, r.drawImage(o, 0, 0);
				var t = r.getImageData(0, 0, o.width, o.height);
				$e(t, !1), window.URL.revokeObjectURL(e);
			};
		}, we = function(t) {
			ee && (t.stopPropagation(), Ne(t.dataTransfer.files));
		}, Ae = function(t) {
			V("qr"), Q(t), Ie();
		}, Fe = function(t) {
			var e = o("WAWebMediaCapture").start({
				type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA,
				featureSurface: o("WAWebGuidePopup.react").FeatureSurface.PHOTO_CAPTURE
			}), n = e.asyncStream, r = e.disposeStream;
			O.current = r, n.then(Ae).catch(o("WAFilteredCatch").filteredCatch(o("WAWebGetUserMediaErrors").NotAllowedError, function() {
				var e;
				o("WAWebModalManager").ModalManager.open(c.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
					messaging: e.Messaging.CAMERA_FAIL,
					type: e.GuidePopupType.GUIDE_UNBLOCK,
					featureSurface: e.FeatureSurface.PHOTO_CAPTURE
				}));
			})).catch(o("WAFilteredCatch").filteredCatch(o("WAWebGetUserMediaErrors").GetUserMediaError, function() {
				var e;
				o("WAWebModalManager").ModalManager.open(c.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
					messaging: e.Messaging.CAMERA_MISSING,
					type: e.GuidePopupType.GUIDE_NONE,
					featureSurface: e.FeatureSurface.PHOTO_CAPTURE
				}));
			}));
		}, Oe = function(t) {
			$e(t, !0);
		}, Be = function() {
			var e = W.current;
			e == null || e.click();
		}, We = function(t) {
			g ? g() : h == null || h.requestDismiss();
		};
		p(function() {
			return fe(), function() {
				O.current == null || O.current();
			};
		}, []);
		var qe = function() {
			le(!ie);
		}, Ue = null, Ve = null, He = null, Ge;
		if (k) Ge = s._(
			/*BTDS*/
			""
		);
		else {
			var ze = I.isLid() && D == null;
			ze ? Ge = s._(
				/*BTDS*/
				"",
				[s._param("formatted_name", A ? w : $)]
			) : Ge = s._(
				/*BTDS*/
				"",
				[s._param("contactName", A ? w : E.displayName)]
			);
		}
		var je = o("WAWebABProps").getABPropConfigValue("coex_calling_enabled");
		o("WAWebMobilePlatforms").isSMB() && o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage() === !0 ? k ? Ge = je ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) : Ge = je ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) : P === !0 && (Ge = je ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		)), ee && (o("WAGetUserMedia").getUserMedia && (Ue = c.jsx("div", {
			className: "xevwqry x2b8uid x13mwh8y x1q3qbx4 xu90me3 x78zum5 xl56j7k",
			children: K != null ? c.jsx(r("WDSButton.react"), {
				variant: "filled",
				onPress: De,
				label: s._(
					/*BTDS*/
					""
				)
			}) : c.jsx(r("WDSButton.react"), {
				variant: "filled",
				onPress: Fe,
				label: s._(
					/*BTDS*/
					""
				)
			})
		})), Ve = c.jsxs("div", {
			className: "x2b8uid x13mwh8y x1q3qbx4 xu90me3 x98l61r x78zum5 xl56j7k",
			children: [c.jsx(r("WDSButton.react"), {
				variant: "filled",
				onPress: Be,
				label: s._(
					/*BTDS*/
					""
				)
			}), Y && c.jsx("div", {
				className: "x78zum5 xl56j7k x6s0dn4 x1jchvi3 x2b8uid x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod x1417sbz",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}), He = c.jsx("form", {
			ref: B,
			method: "POST",
			children: c.jsx("input", {
				ref: W,
				accept: "image/*",
				type: "file",
				style: { display: "none" },
				onChange: Pe,
				onClick: o("WAWebStopEvent").stopPropagation
			})
		}));
		var Ke = ie ? me != null ? me : ue : ue != null ? ue : me, Qe = ue != null && me != null && c.jsx("div", {
			className: "xevwqry x2b8uid x13mwh8y x1q3qbx4 xu90me3 x78zum5 xl56j7k",
			children: c.jsx(r("WDSButton.react"), {
				variant: "outline",
				onPress: qe,
				label: ie ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				)
			})
		}), Xe = K && c.jsx(r("WAWebVerificationWebcam.react"), {
			stream: K,
			disposeStream: O.current,
			onCapture: Oe,
			onClose: De
		}), Ye, Je;
		u ? Ye = We : Je = We;
		var Ze = c.jsx(o("WAWebName.react").Name, {
			contact: i,
			showBusinessCheckmark: T,
			titlify: !0,
			ellipsify: !0,
			showMessageYourselfName: !0
		});
		return c.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			onDrop: we,
			onDragChange: Te,
			tsNavigationData: {
				surface: "unknown",
				viewName: "verification"
			},
			children: [
				c.jsxs(o("WAWebDrawerHeader.react").DrawerHeader, {
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
					onBack: Je,
					onCancel: Ye,
					children: [c.jsx(r("WDSText.react"), {
						type: "Body1",
						colorName: "contentDefault",
						children: c.jsx(o("WAWebEmojiText.react").EmojiText, { text: s._(
							/*BTDS*/
							""
						) })
					}), c.jsx("span", {
						className: "x78zum5 x6ikm8r x10wlt62 xlyipyv xuxw1ft",
						children: c.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: k ? Ze : c.jsx(o("WAWebEmojiText.react").EmojiText, {
								text: s._(
									/*BTDS*/
									"",
									[s._param("contact-name", F)]
								),
								ellipsify: !0
							})
						})
					})]
				}),
				Xe,
				G != null && c.jsx(o("WAWebVerificationCircle.react").VerificationBanner, { children: G }),
				c.jsx(r("WAWebDrawerBody.react"), { children: c.jsxs("div", {
					className: "x1c4vz4f x2lah0s xdl72j9 x1fw8uao x1fcywrv x14bs23c",
					children: [
						c.jsx("div", {
							className: "x78zum5 xl56j7k xevwqry x1bo0p19 x1jpgh95 xyt666n x7v9bd0 xu90me3",
							children: c.jsx(o("WAWebVerificationCircle.react").VerificationCircle, {
								state: U,
								binary: ee,
								contact: i
							})
						}),
						c.jsxs("div", {
							className: "xevwqry x2b8uid x13mwh8y x1q3qbx4 xu90me3",
							children: [c.jsx("div", {
								className: "x1de0gy x2b8uid",
								dir: "ltr",
								children: Ke != null && c.jsx(o("WAWebVerificationNumericCode.react").VerificationNumericCode, { string: Ke })
							}), Qe]
						}),
						c.jsx("div", {
							className: "xevwqry x2b8uid x13mwh8y x1q3qbx4 xu90me3",
							children: c.jsxs("p", {
								className: "x1f6kntn x1fc57z9 xhslqc4 x2b8uid",
								children: [c.jsxs("span", { children: [Ge, "\xA0"] }), c.jsx(o("WAWebExternalLink.react").ExternalLink, {
									href: o("WAWebFaqUrl").getE2EFaqUrl(),
									children: r("WAWebFbtCommon")("Learn more")
								})]
							})
						}),
						Ue,
						Ve,
						He
					]
				}) })
			]
		});
	}
	S.displayName = S.name + " [from " + i.id + "]", l.default = S;
}), 226);
