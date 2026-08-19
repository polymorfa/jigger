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
		var n, a = t.accentColor, i = t.adaptToTileSize, l = i === void 0 ? !1 : i, s = t.animateInDelay, c = s === void 0 ? 0 : s, g = t.audioLevelType, y = t.callStateText, C = t.compact, b = C === void 0 ? !1 : C, v = t.imageSize, S = v === void 0 ? "small" : v, R = t.nameColorName, L = R === void 0 ? "contentDefault" : R, E = t.nameOverride, k = t.participantWids, I = t.shouldAnimateIn, T = I === void 0 ? !1 : I, D = t.showAudioWaveform, x = D === void 0 ? !1 : D, $ = t.showCallStateTextOnly, P = $ === void 0 ? !1 : $, N = t.showTextInfo, M = N === void 0 ? !0 : N, w = t.stateColorName, A = w === void 0 ? "contentDeemphasized" : w, F = t.suppressPhoneNumberSecondary, O = F === void 0 ? !1 : F, B = t.textAlign, W = B === void 0 ? "center" : B, q = t.unknownUserLogContext, U = t.userId, V = t.waveformBarCount, H = V === void 0 ? 7 : V, G = t.xstyle, z = d(r("WAWebVoipUiContext")), j = z.uiHeight, K = r("useWAWebVoipAudioLevel")(g != null ? g : "peer", U), Q = W === "start" ? h.textAlignStart : W === "center" ? h.textAlignCenter : W === "end" ? h.textAlignEnd : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + W);
		})(), X = U != null ? o("WAWebContactCollection").ContactCollection.get(U) : null, Y = (n = o("useWAWebContactValues").useOptionalContactValues(U, [o("WAWebFrontendContactGetters").getFormattedUsernameOrPhoneAndType])) == null ? void 0 : n[0], J = Y == null ? void 0 : Y.displayName, Z = !o("WAWebVoipGatingUtils").isGuestViewer() && E == null && o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(X) && !O;
		o("useWAWebLogUnknownUserDisplayed").useLogUnknownUserDisplayed(q, X, Z && (Y == null ? void 0 : Y.type) === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PLACEHOLDER);
		var ee = S === "small" ? 1 : S === "auto" ? 1.25 : S === "large" ? 2 : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + S);
		})(), te = p(null);
		m(function() {
			if (T && te.current) {
				var e = te.current;
				e.style.opacity = "0", e.style.transform = "scale(" + f + ")", window.requestAnimationFrame(function() {
					r("WAWebVelocityAnimate")(e, {
						opacity: [1, 0],
						scale: [1, f]
					}, {
						duration: _,
						easing: "easeOutQuart",
						delay: c
					});
				});
			}
		}, [T, c]);
		var ne = S === "small" ? 48 : S === "large" ? 110 : S === "auto" ? null : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + S);
		})(), re = S === "small" ? o("WAWebDetailImage.react").DetailImageQuality.Low : S === "large" || S === "auto" ? o("WAWebDetailImage.react").DetailImageQuality.High : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + S);
		})(), oe = (function() {
			if (P) return null;
			if (k != null && k.length > 0) {
				var e = S === "small" ? 48 : S === "large" ? 110 : S === "auto" ? 120 : (function() {
					throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + S);
				})();
				return u.jsx(r("WAWebMultiParticipantCallImage.react"), {
					participantWids: k,
					size: e
				});
			}
			return U != null ? u.jsx(o("WAWebDetailImage.react").DetailImage, {
				id: U,
				size: ne,
				quality: re,
				customDimensionsStyle: S === "auto",
				waitIdle: !0,
				xstyle: S === "auto" && h.sizeAuto(j)
			}) : null;
		})(), ae = M && (X != null || P || E != null || k != null && k.length > 0), ie = a != null ? "Body1Emphasized" : "Body1", le = l ? h.hideTextOnSmallTile : null, se = function(n) {
			if (E != null) return u.jsx(o("WAWebFlex.react").FlexItem, {
				xstyle: [n, le],
				testid: "voip-call-participant-info-name",
				children: u.jsx(r("WDSText.react"), {
					type: ie,
					colorName: L,
					selectable: !1,
					maxLines: 1,
					children: a != null ? u.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(h.nameAccentColor(a)), { children: E })) : E
				})
			});
			if (X != null) {
				var t = o("WAWebContactGetters").getShowBusinessCheckmarkAsPrimary(X);
				return u.jsx(o("WAWebFlex.react").FlexItem, {
					xstyle: [n, le],
					testid: "voip-call-participant-info-name",
					children: u.jsx(r("WDSText.react"), {
						type: ie,
						colorName: L,
						selectable: !1,
						maxLines: 1,
						children: a != null ? u.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(h.nameAccentColor(a)), { children: u.jsx(o("WAWebName.react").Name, {
							contact: X,
							showBusinessCheckmark: t,
							showNotifyName: !0,
							elevatedPushNamesEnabled: !0,
							unknownUserLogContext: q
						}) })) : u.jsx(o("WAWebName.react").Name, {
							contact: X,
							showBusinessCheckmark: t,
							showNotifyName: !0,
							elevatedPushNamesEnabled: !0,
							unknownUserLogContext: q
						})
					})
				});
			}
			return null;
		}, ue = function(t) {
			return Z && J != null ? u.jsx(o("WAWebFlex.react").FlexItem, {
				xstyle: [t, le],
				children: u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					selectable: !1,
					maxLines: 1,
					children: J
				})
			}) : null;
		}, ce = b ? u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: [h.compactContainer, G],
			children: [u.jsxs(o("WAWebFlex.react").FlexItem, {
				xstyle: h.profilePicContainer,
				children: [oe, x && u.jsx(o("WAWebFlex.react").FlexItem, {
					xstyle: h.waveformOverlay,
					children: u.jsx(r("WAWebVoipAudioWaveform.react"), {
						accentColor: a,
						audioLevel: K,
						barCount: H,
						isActive: !0,
						scale: ee
					})
				})]
			}), ae && u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "start",
				justify: "center",
				grow: 1,
				shrink: 1,
				basis: 0,
				xstyle: [h.nameContainer, h.nameContainerTruncate],
				children: [
					se(h.textAlignStart),
					ue(h.textAlignStart),
					y && u.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: h.textAlignStart,
						children: u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: A,
							selectable: !1,
							maxLines: 1,
							children: u.jsx("span", {
								"data-testid": "voip-call-participant-info-call-state-text",
								children: y
							})
						})
					})
				]
			})]
		}) : u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: G,
			children: [u.jsxs(o("WAWebFlex.react").FlexItem, {
				xstyle: h.profilePicContainer,
				children: [oe, x && u.jsx(o("WAWebFlex.react").FlexItem, {
					xstyle: h.waveformOverlay,
					children: u.jsx(r("WAWebVoipAudioWaveform.react"), {
						accentColor: a,
						audioLevel: K,
						barCount: H,
						isActive: !0,
						scale: ee
					})
				})]
			}), ae && u.jsxs(u.Fragment, { children: [
				se([
					h.nameSpacing,
					h.nameContainer,
					Q
				]),
				ue(Q),
				y && u.jsx(o("WAWebFlex.react").FlexItem, {
					xstyle: Q,
					children: u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: A,
						selectable: !1,
						children: u.jsx("span", {
							"data-testid": "voip-call-participant-info-call-state-text",
							children: y
						})
					})
				})
			] })]
		});
		return u.jsx("div", {
			ref: te,
			className: "xh8yej3",
			children: ce
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 98);
