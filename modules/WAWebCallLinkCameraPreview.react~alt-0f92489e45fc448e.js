__d("WAWebCallLinkCameraPreview.react", [
	"fbt",
	"WALogger",
	"WAWebDefaultUserColorIcon.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useEffect, f = m.useRef, g = m.useState, h = {
		defaultAvatar: {
			color: "x1164gpu",
			$$css: !0
		},
		youLabel: {
			color: "x17t9dm2",
			fontSize: "x1jchvi3",
			fontWeight: "xk50ysn",
			lineHeight: "x1o2sk6j",
			letterSpacing: "x1p4m5qa",
			marginTop: "x1xmf6yo",
			$$css: !0
		},
		youLabelAccentColor: function(t) {
			return [{
				color: t != null ? "x14rh7hd" : t,
				$$css: !0
			}, { "--x-color": t != null ? t : void 0 }];
		}
	};
	function y(t) {
		var n = t.accentColor, a = t.deferMedia, i = a === void 0 ? !1 : a, l = t.deviceId, c = t.displayName, m = t.isMicMuted, y = t.isVideoMuted, b = t.profilePicUrl, v = t.stopStreamRef, S = f(null), R = f(null), L = navigator.mediaDevices != null, E = g(!0), k = E[0], I = E[1], T = g(!1), D = T[0], x = T[1], $ = p(function() {
			R.current != null && (R.current.getTracks().forEach(function(e) {
				return e.stop();
			}), R.current = null);
		}, []), P = p(function(e) {
			S.current = e, e != null && R.current != null && (e.srcObject = R.current);
		}, []);
		if (_(function() {
			return v != null && (v.current = $), function() {
				v != null && (v.current = null);
			};
		}, [$, v]), _(function() {
			if (i || y === !0 || !L) {
				$();
				return;
			}
			var t = navigator.mediaDevices;
			if (t != null) {
				var n = !0, r = { video: l != null ? { deviceId: { exact: l } } : !0 };
				return t.getUserMedia(r).catch(function(n) {
					if (l != null) return o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[camera-preview] device ", " unavailable, fallback"])), l), t.getUserMedia({ video: !0 });
					throw n;
				}).then(function(e) {
					if (!n) {
						e.getTracks().forEach(function(e) {
							return e.stop();
						});
						return;
					}
					$(), R.current = e, S.current != null && (S.current.srcObject = e), I(!0);
				}).catch(function() {
					n && I(!1);
				}), function() {
					n = !1, $();
				};
			}
		}, [
			i,
			l,
			L,
			y,
			$
		]), y === !0 || !L || !k) {
			var N = b != null && b !== "" && !D;
			return d.jsxs("div", {
				className: "x1n2onr6 xh8yej3 x1dltgaz xlr9sxt xvvg52n xwd4zgb xq8v1ta x6ikm8r x10wlt62 x1e6sl3u x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn",
				children: [d.jsxs("div", {
					className: "xh8yej3 x5yr21d x78zum5 xdt5ytf x6s0dn4 xl56j7k x1e6sl3u",
					children: [N ? d.jsx("img", {
						alt: c != null ? c : "",
						src: b,
						onError: function() {
							return x(!0);
						},
						className: "x1fu8urw x1peatla x1c9tyrk xeusxvb x1pahc9y x1ertn4p x12xlgek x78zum5 x6s0dn4 xl56j7k xl1xv1r"
					}) : d.jsx(o("WAWebDefaultUserColorIcon.react").DefaultUserColorIcon, {
						height: 80,
						width: 80,
						iconXstyle: h.defaultAvatar
					}), d.jsx("span", babelHelpers.extends({}, (u || (u = r("stylex"))).props(h.youLabel, n != null && h.youLabelAccentColor(n)), { children: s._(
						/*BTDS*/
						""
					) }))]
				}), m === !0 && d.jsx("div", {
					className: "x10l6tqk xfr5jun xrotz4w xgd8bvy x1fgtraw x1c9tyrk xeusxvb x1pahc9y x1ertn4p xcpsgoo x78zum5 x6s0dn4 xl56j7k",
					children: d.jsx(C, {})
				})]
			});
		}
		return d.jsxs("div", {
			className: "x1n2onr6 xh8yej3 x1dltgaz xlr9sxt xvvg52n xwd4zgb xq8v1ta x6ikm8r x10wlt62 x1e6sl3u x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn",
			children: [d.jsx("video", {
				ref: P,
				autoPlay: !0,
				playsInline: !0,
				muted: !0,
				className: "xh8yej3 x5yr21d xl1xv1r xpk2tj9"
			}), m === !0 && d.jsx("div", {
				className: "x10l6tqk xfr5jun xrotz4w xgd8bvy x1fgtraw x1c9tyrk xeusxvb x1pahc9y x1ertn4p xcpsgoo x78zum5 x6s0dn4 xl56j7k",
				children: d.jsx(C, {})
			})]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C() {
		return d.jsxs("svg", {
			viewBox: "0 0 24 24",
			fill: "#fff",
			width: "16",
			height: "16",
			children: [d.jsx("title", { children: s._(
				/*BTDS*/
				""
			) }), d.jsx("path", { d: "M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28ZM14.98 11.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99ZM4.27 3 3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3Z" })]
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = y;
}), 226);
