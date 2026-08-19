__d("WAWebMediaLinkPreviewImageLayout.react", [
	"WAWebDisplayType",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = 90, d = 240, m = 330, p = 480, _ = .25, f = 1, g = 1, h = 1.4, y = {
		thumbnailContainer: {
			alignItems: "x6s0dn4",
			display: "x78zum5",
			justifyContent: "xl56j7k",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			position: "x1n2onr6",
			$$css: !0
		},
		highQualityLayoutThumbnailContainer: {
			width: "xh8yej3",
			$$css: !0
		},
		blurred: {
			filter: "x1df5jli",
			$$css: !0
		}
	};
	function C(e) {
		var t = e.height, n = e.highQuality, r = n === void 0 ? !1 : n, o = e.width, a = r ? [f, _] : [h, g], i = a[0], l = a[1];
		return Math.min(Math.max(t / o, l), i);
	}
	function b(e) {
		var t = e.displayType, n = e.isCompose, r = e.isLandscape;
		return n ? m : t === o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT || t === o("WAWebDisplayType").DISPLAY_TYPE.NEWSLETTER ? p : r ? m : d;
	}
	function v(e) {
		var t = e.children, n = e.displayType, r = e.galleryView, o = e.height, a = e.isComposerHightQualityLayout, i = e.isHighQualityLayout, l = e.isStatus, s = e.thumbnailJpegDirectPath, c = e.thumbnailJpegHQ, d = e.width;
		if ((s != null && s !== "" || c != null && c !== "") && o != null && d != null && !r) {
			var m = i || a ? S : R;
			return u.jsx(m, {
				height: o,
				width: d,
				displayType: n,
				isCompose: a,
				hasHqThumbnail: c != null,
				children: t
			});
		}
		return l && i ? u.jsx("div", {
			className: "x78zum5 xs83m0k x6ikm8r x10wlt62 xmqja0k xh8yej3",
			children: t
		}) : t;
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(t) {
		var n = t.children, o = t.displayType, a = t.hasHqThumbnail, i = t.height, l = t.isCompose, s = t.width, c = C({
			height: i,
			highQuality: !0,
			width: s
		}), d = c < 1, m = b({
			displayType: o,
			isCompose: l,
			isLandscape: d
		}), p = { height: m * c };
		return u.jsx("div", {
			"data-testid": "high-quality-layout",
			className: (e || (e = r("stylex")))([
				y.thumbnailContainer,
				!l && y.highQualityLayoutThumbnailContainer,
				!a && y.blurred
			]),
			style: p,
			children: n
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(t) {
		var n = t.children, o = t.displayType, a = t.hasHqThumbnail, i = t.height, l = t.isCompose, s = t.width, d = o, m = C({
			height: i,
			width: s
		}), p = c, _ = {
			width: p / m,
			minWidth: p / m
		};
		return u.jsx("div", {
			"data-testid": "standard-quality-layout",
			className: (e || (e = r("stylex")))([y.thumbnailContainer, !a && y.blurred]),
			style: _,
			children: n
		});
	}
	R.displayName = R.name + " [from " + i.id + "]", l.default = v;
}), 98);
