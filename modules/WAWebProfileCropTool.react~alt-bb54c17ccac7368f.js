__d("WAWebProfileCropTool.react", [
	"fbt",
	"$InternalEnum",
	"WAWeb-easeljs",
	"WAWebAccessibility.react",
	"WAWebImageUtils",
	"WAWebKeyboardHotKeys.react",
	"WAWebMinusIcon.react",
	"WAWebPlusIcon.react",
	"WAWebProfileCropConstants",
	"WAWebUnstyledButton.react",
	"WDSFocusStateStyles",
	"err",
	"intlNumUtils",
	"isStringNullOrEmpty",
	"react",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useImperativeHandle, _ = d.useRef, f = d.useState, g = { scalerButton: {
		color: "xhslqc4",
		cursor: "x1ypdohk",
		width: "xgd8bvy",
		height: "x1fgtraw",
		display: "x78zum5",
		alignItems: "x6s0dn4",
		justifyContent: "xl56j7k",
		$$css: !0
	} }, h = "rgba(0, 0, 0, 0.5)", y = 1.1, C = 1.02, b = 361, v = 500, S = 9 / 16, R = 2 + S, L = "M90 0C0 0 0 0 0 90s0 90 90 90 90 0 90-90 0-90-90-90Z", E = n("$InternalEnum").Mirrored([
		"CIRCLE",
		"RECT",
		"SQUIRCLE"
	]), k = n("$InternalEnum").Mirrored(["ENLARGE", "REDUCE"]), I = n("$InternalEnum").Mirrored([
		"DOWN",
		"LEFT",
		"RIGHT",
		"UP"
	]);
	function T(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.cropOverlay, l = a.drawCanvas, u = a.editedMedia, d = _(0), T = f(""), D = T[0], x = T[1], $ = f(null), P = $[0], N = $[1], M = function(t, n) {
			var e = u.editData, r = d.current * R, o = (t - e.width / 2) * e.scale, a = (t + e.width / 2) * e.scale, i = (n + e.height / 2) * e.scale, l = (n - e.height / 2) * e.scale, s = r / 2, c = r / 2 * S;
			return {
				overlapLeft: Math.min(0, -s - o) / e.scale,
				overlapRight: Math.min(0, a - s) / e.scale,
				overlapTop: Math.min(0, -c - l) / e.scale,
				overlapBottom: Math.min(0, i - c) / e.scale,
				x: o < -s && a > s,
				y: l < -c && i > c
			};
		}, w = function(t, n) {
			var e = u.editData, r = d.current, o = (t - e.width / 2) * e.scale, a = (t + e.width / 2) * e.scale, i = (n + e.height / 2) * e.scale, l = (n - e.height / 2) * e.scale;
			return {
				x: o < -r && a > r,
				y: l < -r && i > r
			};
		}, A = function(t, n) {
			var e = u.editData, r = e.offsetX + t / e.scale, o = e.offsetY + n / e.scale, i = a.cropShape === E.RECT ? M(r, o) : w(r, o);
			i.x && (e.offsetX = r), i.y && (e.offsetY = o), l(), K(t, n, i);
		}, F = function(t, n) {
			var e = t.stageX - n.x, r = t.stageY - n.y;
			A(e, r), n.x = t.stageX, n.y = t.stageY;
		}, O = function(t) {
			var e = d.current, n = u.editData, r = e * R, o = Math.max(t, r / n.width), a = Math.max(t, o);
			n.scale = a;
			var i = M(n.offsetX, n.offsetY);
			return {
				scale: n.scale,
				offsetX: n.offsetX + i.overlapLeft - i.overlapRight,
				offsetY: n.offsetY + i.overlapTop - i.overlapBottom
			};
		}, B = function(t) {
			var e = d.current, n = u.editData, r = Math.max(2 * e / n.width, 2 * e / n.height), o = Math.max(t, r);
			if (n.width * t < e || n.height * t < e) return !1;
			var a = -e / o + n.width / 2, i = e / o - n.width / 2, l = -e / o + n.height / 2, s = e / o - n.height / 2;
			return {
				scale: o,
				offsetX: Math.min(Math.max(n.offsetX, i), a),
				offsetY: Math.min(Math.max(n.offsetY, s), l)
			};
		}, W = function(t) {
			return a.cropShape === E.RECT ? O(t) : B(t);
		}, q = function(t) {
			t === void 0 && (t = y);
			var e = u.editData, n = t !== 0 ? t : y, r = W(e.scale * n);
			r && (e.scale = r.scale, e.offsetX = r.offsetX, e.offsetY = r.offsetY, l()), j(t, k.ENLARGE);
		}, U = function(t) {
			t === void 0 && (t = y);
			var e = u.editData, n = t !== 0 ? t : y, r = W(e.scale / n);
			r && (e.scale = r.scale, e.offsetX = r.offsetX, e.offsetY = r.offsetY, l()), j(t, k.REDUCE);
		};
		o("useWAWebListener").useListener(i.canvas, "mousewheel", function(e) {
			e.deltaY > 0 ? q(C) : U(C);
		}), m(function() {
			u.saveEdits();
			var e = u.editData, t = i.canvas, n;
			e.baseItem ? n = e.baseItem.getBounds() : n = {
				width: 0,
				height: 0
			}, t.style.display = "block", t.width = n.width, t.height = n.height;
			var r = new (o("WAWeb-easeljs")).Easel.Shape();
			r.graphics.beginFill("rgba(0, 0, 0, 0.1)"), r.graphics.drawRect(0, 0, n.width, n.height), r.regX = n.width / 2, r.regY = n.height / 2, r.x = n.width / 2, r.y = n.height / 2, r.on("mousedown", function(e) {
				var t = {
					x: e.stageX,
					y: e.stageY
				}, n = r.on("pressmove", F, null, !1, t);
				r.on("pressup", function() {
					r.off("pressmove", n);
				}, null, !0);
			}), r.cursor = "move";
			var l = t.getContext("2d"), s = t.width, c = t.height, m = s / c > v / b ? c / b : s / v;
			d.current = Math.min(b, v) / 2 * .9 * m;
			var p = d.current, _;
			if (l.fillStyle = h, l.fillRect(0, 0, s, c), l.globalCompositeOperation = "destination-out", l.beginPath(), a.cropShape === E.CIRCLE) l.arc(s / 2, c / 2, p, 0, 2 * Math.PI, !0);
			else if (a.cropShape === E.RECT) {
				var f = p * R, g = p * R * S;
				l.fillRect(s / 2 - f / 2, c / 2 - g / 2, f, g);
			} else if (a.cropShape === E.SQUIRCLE) {
				_ = new Path2D(L), l.translate(s / 2 - p, c / 2 - p);
				var y = m * 2 * .9;
				l.scale(y, y);
			}
			l.fillStyle = "#ffffff", _ ? l.fill(_) : l.fill(), i.addChild(r), i.update();
		}, []);
		var V = async function() {
			var e, t = u.editData, n = (e = u.editedImage) == null ? void 0 : e.src, a = d.current;
			if (r("isStringNullOrEmpty")(n)) throw r("err")("empty image");
			var i = a * 2, l = i;
			i > o("WAWebProfileCropConstants").PROF_PIC_MAX_SIDE ? l = o("WAWebProfileCropConstants").PROF_PIC_MAX_SIDE : i < o("WAWebProfileCropConstants").PROF_PIC_MIN_SIDE && (l = o("WAWebProfileCropConstants").PROF_PIC_MIN_SIDE);
			var s = a * R, c = a * R * S, m = await o("WAWebImageUtils").crop({
				dHeight: l * S,
				dWidth: l,
				outputType: o("WAWebImageUtils").DATA_URL | o("WAWebImageUtils").CANVAS,
				sHeight: c,
				src: n,
				sWidth: s,
				sX: t.width / 2 - s / 2,
				sY: t.height / 2 - c / 2
			}), p = m, _ = m.images.dataUrl;
			return {
				thumb: p.images.dataUrl,
				full: _
			};
		}, H = async function() {
			var e, t = u.editData, n = (e = u.editedImage) == null ? void 0 : e.src, a = d.current;
			if (r("isStringNullOrEmpty")(n)) throw r("err")("empty image");
			var i = a * 2, l = i;
			i > o("WAWebProfileCropConstants").PROF_PIC_MAX_SIDE ? l = o("WAWebProfileCropConstants").PROF_PIC_MAX_SIDE : i < o("WAWebProfileCropConstants").PROF_PIC_MIN_SIDE && (l = o("WAWebProfileCropConstants").PROF_PIC_MIN_SIDE);
			var s = await o("WAWebImageUtils").crop({
				dHeight: l,
				dWidth: l,
				outputType: o("WAWebImageUtils").DATA_URL | o("WAWebImageUtils").CANVAS,
				sHeight: i,
				src: n,
				sWidth: i,
				sX: (t.width - i) / 2,
				sY: (t.height - i) / 2
			}), c = await o("WAWebImageUtils").crop({
				sHeight: o("WAWebProfileCropConstants").PROF_PIC_THUMB_SIDE,
				src: s.images.canvas,
				sWidth: o("WAWebProfileCropConstants").PROF_PIC_THUMB_SIDE,
				sX: 0,
				sY: 0
			}), m = s.images.dataUrl;
			return {
				thumb: c.images.dataUrl,
				full: m
			};
		}, G = function() {
			return a.cropShape === E.RECT ? V() : H();
		};
		p(n, function() {
			return { crop: G };
		});
		var z = _(null);
		function j(e, t) {
			var n = 1 - e, r = P != null ? P : 1;
			t === k.ENLARGE ? r += n : r -= n, N(r), X(r, t);
		}
		function K(e, t, n) {
			e < 0 ? Q(I.RIGHT, n) : e > 0 ? Q(I.LEFT, n) : t < 0 ? Q(I.DOWN, n) : t > 0 && Q(I.UP, n);
		}
		function Q(e, t) {
			switch (e) {
				case I.DOWN:
					if (!t.y) {
						x(s._(
							/*BTDS*/
							""
						));
						return;
					}
					x(s._(
						/*BTDS*/
						""
					));
					break;
				case I.LEFT:
					if (!t.x) {
						x(s._(
							/*BTDS*/
							""
						));
						return;
					}
					x(s._(
						/*BTDS*/
						""
					));
					break;
				case I.RIGHT:
					if (!t.x) {
						x(s._(
							/*BTDS*/
							""
						));
						return;
					}
					x(s._(
						/*BTDS*/
						""
					));
					break;
				case I.UP:
					if (!t.y) {
						x(s._(
							/*BTDS*/
							""
						));
						return;
					}
					x(s._(
						/*BTDS*/
						""
					));
					break;
			}
		}
		function X(e, t) {
			var n = Math.round(Math.abs(e) * 100);
			t === k.ENLARGE ? x(s._(
				/*BTDS*/
				"",
				[s._param("zoom_percentage", o("intlNumUtils").formatNumber(n))]
			)) : x(s._(
				/*BTDS*/
				"",
				[s._param("zoom_percentage", o("intlNumUtils").formatNumber(n))]
			));
		}
		var Y = function(t) {
			if (z.current) {
				var e = t ? t.target : document.activeElement;
				z.current;
			}
		}, J = {
			pageup: function() {
				return q();
			},
			pagedown: function() {
				return U();
			},
			down: function() {
				return A(0, -10);
			},
			up: function() {
				return A(0, 10);
			},
			left: function() {
				return A(10, 0);
			},
			right: function() {
				return A(-10, 0);
			}
		};
		return c.jsxs("div", {
			className: "x10l6tqk x1inkcgm xoegz02 xgd8bvy x14ju556 x1280gxy xadg8h5 xjlgbav x22tq4u x1taic9k x1ctnl55",
			children: [
				c.jsx(o("WAWebAccessibility.react").InvisibleAnnouncement, {
					assertive: !0,
					text: D,
					startWithText: !0
				}),
				c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
					component: "button",
					handlers: J,
					onFocus: Y,
					ref: z,
					"aria-label": s._(
						/*BTDS*/
						""
					),
					tabIndex: 0
				}),
				c.jsx(r("WAWebUnstyledButton.react"), {
					xstyle: [g.scalerButton, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus],
					onClick: function() {
						return q();
					},
					"aria-label": s._(
						/*BTDS*/
						""
					),
					testid: "crop-tool-zoom-in",
					children: c.jsx(o("WAWebPlusIcon.react").PlusIcon, {})
				}),
				c.jsx(r("WAWebUnstyledButton.react"), {
					xstyle: [g.scalerButton, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus],
					onClick: function() {
						return U();
					},
					"aria-label": s._(
						/*BTDS*/
						""
					),
					testid: "crop-tool-zoom-out",
					children: c.jsx(o("WAWebMinusIcon.react").MinusIcon, {})
				})
			]
		});
	}
	T.displayName = T.name + " [from " + i.id + "]";
	var D = T;
	l.CropShapeType = E, l.WrappedProfileCropTool = D;
}), 226);
