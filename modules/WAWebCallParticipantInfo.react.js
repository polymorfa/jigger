__d("WAWebCallParticipantInfo.react", [
	"WAWebContactCollection",
	"WAWebContactGetters",
	"WAWebDetailImage.react",
	"WAWebElevatedPushNamesFlag",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebMultiParticipantCallImage.react",
	"WAWebName.react",
	"WAWebVelocityAnimate",
	"WAWebVoipAudioWaveform.react",
	"WAWebVoipGatingUtils",
	"WAWebVoipUiContext",
	"WAWebWamEnumOppositeVisibleIdentificationType",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebContactValues",
	"useWAWebLogUnknownUserDisplayed",
	"useWAWebVoipAudioLevel"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useContext, m = c.useEffect, p = c.useRef, _ = 250, f = .8, g = {
		width: "x5lhr3w",
		height: "x16ye13r",
		$$css: !0
	}, h = {
		compactContainer: {
			alignItems: "x6s0dn4",
			rowGap: "x1f0uite",
			columnGap: "xs2akgl",
			width: "xh8yej3",
			$$css: !0
		},
		nameSpacing: {
			marginTop: "x1de0gy",
			$$css: !0
		},
		hideTextOnSmallTile: {
			display: "xff16ch",
			$$css: !0
		},
		nameContainer: {
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			minWidth: "xeuugli",
			maxWidth: "x193iq5w",
			width: "xh8yej3",
			paddingInlineStart: "x12w63v0",
			paddingInlineEnd: "x1nzty39",
			paddingLeft: null,
			paddingRight: null,
			boxSizing: "x9f619",
			$$css: !0
		},
		nameContainerTruncate: {
			textOverflow: "xlyipyv",
			whiteSpace: "xuxw1ft",
			$$css: !0
		},
		textAlignStart: {
			textAlign: "x1yc453h",
			$$css: !0
		},
		textAlignCenter: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		textAlignEnd: {
			textAlign: "xp4054r",
			$$css: !0
		},
		profilePicContainer: {
			position: "x1n2onr6",
			$$css: !0
		},
		waveformOverlay: {
			position: "x10l6tqk",
			bottom: "x134aglq",
			left: "x1nrll8i",
			insetInlineStart: null,
			insetInlineEnd: null,
			transform: "xuuh30",
			zIndex: "x1vjfegm",
			$$css: !0
		},
		sizeAuto: function(t) {
			return [g, {
				"--x-width": (function(e) {
					return typeof e == "number" ? e + "px" : e != null ? e : void 0;
				})("min(120px, max(32px, " + (t != null ? "min(" + t * .2 + "px, 40cqmin)" : "40cqmin") + "))"),
				"--x-height": (function(e) {
					return typeof e == "number" ? e + "px" : e != null ? e : void 0;
				})("min(120px, max(32px, " + (t != null ? "min(" + t * .2 + "px, 40cqmin)" : "40cqmin") + "))")
			}];
		},
		nameAccentColor: function(t) {
			return [{
				color: t != null ? "x14rh7hd" : t,
				$$css: !0
			}, { "--x-color": t != null ? t : void 0 }];
		}
	};
	function y(t) {
		var n, a = o("react-compiler-runtime").c(39), i = t.accentColor, l = t.adaptToTileSize, s = t.animateInDelay, c = t.audioLevelType, g = t.callStateText, y = t.compact, C = t.imageSize, b = t.nameColorName, v = t.nameOverride, S = t.participantWids, R = t.shouldAnimateIn, L = t.showAudioWaveform, E = t.showCallStateTextOnly, k = t.showTextInfo, I = t.stateColorName, T = t.suppressPhoneNumberSecondary, D = t.textAlign, x = t.unknownUserLogContext, $ = t.userId, P = t.waveformBarCount, N = t.xstyle, M = l === void 0 ? !1 : l, w = s === void 0 ? 0 : s, A = y === void 0 ? !1 : y, F = C === void 0 ? "small" : C, O = b === void 0 ? "contentDefault" : b, B = R === void 0 ? !1 : R, W = L === void 0 ? !1 : L, q = E === void 0 ? !1 : E, U = k === void 0 ? !0 : k, V = I === void 0 ? "contentDeemphasized" : I, H = T === void 0 ? !1 : T, G = D === void 0 ? "center" : D, z = P === void 0 ? 7 : P, j = d(r("WAWebVoipUiContext")), K = j.uiHeight, Q = r("useWAWebVoipAudioLevel")(c != null ? c : "peer", $), X = G === "start" ? h.textAlignStart : G === "center" ? h.textAlignCenter : G === "end" ? h.textAlignEnd : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + G);
		})(), Y = $ != null ? o("WAWebContactCollection").ContactCollection.get($) : null, J = (n = o("useWAWebContactValues").useOptionalContactValues($, [o("WAWebFrontendContactGetters").getFormattedUsernameOrPhoneAndType])) == null ? void 0 : n[0], Z = J == null ? void 0 : J.displayName, ee = !o("WAWebVoipGatingUtils").isGuestViewer() && v == null && o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(Y) && !H;
		o("useWAWebLogUnknownUserDisplayed").useLogUnknownUserDisplayed(x, Y, ee && (J == null ? void 0 : J.type) === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PLACEHOLDER);
		var te;
		a[0] !== F ? (te = F === "small" ? 1 : F === "auto" ? 1.25 : F === "large" ? 2 : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + F);
		})(), a[0] = F, a[1] = te) : te = a[1];
		var ne = te, re = p(null), oe, ae;
		a[2] !== w || a[3] !== B ? (oe = function() {
			if (B && re.current) {
				var e = re.current;
				e.style.opacity = "0", e.style.transform = "scale(" + f + ")", window.requestAnimationFrame(function() {
					r("WAWebVelocityAnimate")(e, {
						opacity: [1, 0],
						scale: [1, f]
					}, {
						duration: _,
						easing: "easeOutQuart",
						delay: w
					});
				});
			}
		}, ae = [B, w], a[2] = w, a[3] = B, a[4] = oe, a[5] = ae) : (oe = a[4], ae = a[5]), m(oe, ae);
		var ie;
		a[6] !== F ? (ie = F === "small" ? 48 : F === "large" ? 110 : F === "auto" ? null : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + F);
		})(), a[6] = F, a[7] = ie) : ie = a[7];
		var le = ie, se;
		a[8] !== F ? (se = F === "small" ? o("WAWebDetailImage.react").DetailImageQuality.Low : F === "large" || F === "auto" ? o("WAWebDetailImage.react").DetailImageQuality.High : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + F);
		})(), a[8] = F, a[9] = se) : se = a[9];
		var ue = se, ce;
		e: {
			if (q) {
				ce = null;
				break e;
			}
			if (S != null && S.length > 0) {
				var de;
				a[10] !== F ? (de = F === "small" ? 48 : F === "large" ? 110 : F === "auto" ? 120 : (function() {
					throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + F);
				})(), a[10] = F, a[11] = de) : de = a[11];
				var me = de, pe;
				a[12] !== me || a[13] !== S ? (pe = u.jsx(r("WAWebMultiParticipantCallImage.react"), {
					participantWids: S,
					size: me
				}), a[12] = me, a[13] = S, a[14] = pe) : pe = a[14], ce = pe;
				break e;
			}
			if ($ != null) {
				var _e = F === "auto", fe;
				a[15] !== F || a[16] !== K ? (fe = F === "auto" && h.sizeAuto(K), a[15] = F, a[16] = K, a[17] = fe) : fe = a[17];
				var ge;
				a[18] !== le || a[19] !== ue || a[20] !== _e || a[21] !== fe || a[22] !== $ ? (ge = u.jsx(o("WAWebDetailImage.react").DetailImage, {
					id: $,
					size: le,
					quality: ue,
					customDimensionsStyle: _e,
					waitIdle: !0,
					xstyle: fe
				}), a[18] = le, a[19] = ue, a[20] = _e, a[21] = fe, a[22] = $, a[23] = ge) : ge = a[23], ce = ge;
				break e;
			}
			ce = null;
		}
		var he = ce, ye = U && (Y != null || q || v != null || S != null && S.length > 0), Ce = i != null ? "Body1Emphasized" : "Body1", be = M ? h.hideTextOnSmallTile : null, ve;
		a[24] !== i || a[25] !== be || a[26] !== Y || a[27] !== O || a[28] !== v || a[29] !== Ce || a[30] !== x ? (ve = function(n) {
			if (v != null) return u.jsx(o("WAWebFlex.react").FlexItem, {
				xstyle: [n, be],
				testid: "voip-call-participant-info-name",
				children: u.jsx(r("WDSText.react"), {
					type: Ce,
					colorName: O,
					selectable: !1,
					maxLines: 1,
					children: i != null ? u.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(h.nameAccentColor(i)), { children: v })) : v
				})
			});
			if (Y != null) {
				var t = o("WAWebContactGetters").getShowBusinessCheckmarkAsPrimary(Y);
				return u.jsx(o("WAWebFlex.react").FlexItem, {
					xstyle: [n, be],
					testid: "voip-call-participant-info-name",
					children: u.jsx(r("WDSText.react"), {
						type: Ce,
						colorName: O,
						selectable: !1,
						maxLines: 1,
						children: i != null ? u.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(h.nameAccentColor(i)), { children: u.jsx(o("WAWebName.react").Name, {
							contact: Y,
							showBusinessCheckmark: t,
							showNotifyName: !0,
							elevatedPushNamesEnabled: !0,
							unknownUserLogContext: x
						}) })) : u.jsx(o("WAWebName.react").Name, {
							contact: Y,
							showBusinessCheckmark: t,
							showNotifyName: !0,
							elevatedPushNamesEnabled: !0,
							unknownUserLogContext: x
						})
					})
				});
			}
			return null;
		}, a[24] = i, a[25] = be, a[26] = Y, a[27] = O, a[28] = v, a[29] = Ce, a[30] = x, a[31] = ve) : ve = a[31];
		var Se = ve, Re;
		a[32] !== be || a[33] !== Z || a[34] !== ee ? (Re = function(t) {
			return ee && Z != null ? u.jsx(o("WAWebFlex.react").FlexItem, {
				xstyle: [t, be],
				children: u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					selectable: !1,
					maxLines: 1,
					children: Z
				})
			}) : null;
		}, a[32] = be, a[33] = Z, a[34] = ee, a[35] = Re) : Re = a[35];
		var Le = Re, Ee = A ? u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: [h.compactContainer, N],
			children: [u.jsxs(o("WAWebFlex.react").FlexItem, {
				xstyle: h.profilePicContainer,
				children: [he, W && u.jsx(o("WAWebFlex.react").FlexItem, {
					xstyle: h.waveformOverlay,
					children: u.jsx(r("WAWebVoipAudioWaveform.react"), {
						accentColor: i,
						audioLevel: Q,
						barCount: z,
						isActive: !0,
						scale: ne
					})
				})]
			}), ye && u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "start",
				justify: "center",
				grow: 1,
				shrink: 1,
				basis: 0,
				xstyle: [h.nameContainer, h.nameContainerTruncate],
				children: [
					Se(h.textAlignStart),
					Le(h.textAlignStart),
					g && u.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: h.textAlignStart,
						children: u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: V,
							selectable: !1,
							maxLines: 1,
							children: u.jsx("span", {
								"data-testid": "voip-call-participant-info-call-state-text",
								children: g
							})
						})
					})
				]
			})]
		}) : u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: N,
			children: [u.jsxs(o("WAWebFlex.react").FlexItem, {
				xstyle: h.profilePicContainer,
				children: [he, W && u.jsx(o("WAWebFlex.react").FlexItem, {
					xstyle: h.waveformOverlay,
					children: u.jsx(r("WAWebVoipAudioWaveform.react"), {
						accentColor: i,
						audioLevel: Q,
						barCount: z,
						isActive: !0,
						scale: ne
					})
				})]
			}), ye && u.jsxs(u.Fragment, { children: [
				Se([
					h.nameSpacing,
					h.nameContainer,
					X
				]),
				Le(X),
				g && u.jsx(o("WAWebFlex.react").FlexItem, {
					xstyle: X,
					children: u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: V,
						selectable: !1,
						children: u.jsx("span", {
							"data-testid": "voip-call-participant-info-call-state-text",
							children: g
						})
					})
				})
			] })]
		}), ke;
		a[36] === Symbol.for("react.memo_cache_sentinel") ? (ke = { className: "xh8yej3" }, a[36] = ke) : ke = a[36];
		var Ie;
		return a[37] !== Ee ? (Ie = u.jsx("div", babelHelpers.extends({ ref: re }, ke, { children: Ee })), a[37] = Ee, a[38] = Ie) : Ie = a[38], Ie;
	}
	l.default = y;
}), 98);
