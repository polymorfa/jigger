__d("WAWebStickerPackInfoDetailsDrawerModal.react", [
	"fbt",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebEmojiText.react",
	"WAWebForwardMessageFlowLoadable",
	"WAWebL10nFilesize",
	"WAWebModalManager",
	"WAWebStateUtils",
	"WAWebStickerPackDrawerButton.react",
	"WAWebStickerPanelContentStickerItem.react",
	"WAWebText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		title: {
			flexGrow: "x1c4vz4f",
			$$css: !0
		},
		titleContainer: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		marginBottom8: {
			marginBottom: "xefnzgg",
			$$css: !0
		}
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(38), n = e.msg, a = e.onClose, i = e.onStickerClick, l = e.ref, d = e.stickers, m;
		t[0] !== n ? (m = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebForwardMessageFlowLoadable").ForwardMessageFlowLoadable, {
				msgs: [o("WAWebStateUtils").unproxy(n.unsafe())],
				onClose: o("WAWebModalManager").closeModalManager
			}), { transition: "modal-flow" });
		}, t[0] = n, t[1] = m) : m = t[1];
		var p = m, _;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (_ = {
			surface: "unknown",
			viewName: "sticker-pack-info"
		}, t[2] = _) : _ = t[2];
		var f;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
			/*BTDS*/
			""
		), t[3] = f) : f = t[3];
		var g;
		t[4] !== a ? (g = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: f,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onCancel: a,
			focusBackOrCancel: !0
		}), t[4] = a, t[5] = g) : g = t[5];
		var h;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (h = [c.titleContainer, c.marginBottom8], t[6] = h) : h = t[6];
		var y;
		t[7] !== n.filename ? (y = u.jsx(o("WAWebText.react").WAWebTextTitle, {
			xstyle: h,
			children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
				xstyle: c.title,
				text: n.filename,
				ellipsify: !0,
				titlify: !0
			})
		}), t[7] = n.filename, t[8] = y) : y = t[8];
		var C;
		t[9] !== n.description ? (C = n.description != null && u.jsx(o("WAWebText.react").WAWebTextMuted, {
			marginBottom: 16,
			children: u.jsx(o("WAWebEmojiText.react").EmojiText, { text: n.description })
		}), t[9] = n.description, t[10] = C) : C = t[10];
		var b;
		t[11] !== n.stickerPackPublisher || t[12] !== n.stickerPackSize ? (b = n.stickerPackPublisher != null && u.jsxs(o("WAWebText.react").WAWebTextMuted, {
			marginBottom: 16,
			children: [
				u.jsx(o("WAWebEmojiText.react").EmojiText, { text: s._(
					/*BTDS*/
					"",
					[s._param("name", n.stickerPackPublisher)]
				) }),
				" ∙ ",
				u.jsx("span", {
					dir: "ltr",
					children: o("WAWebL10nFilesize").getL10nFilesize(n.stickerPackSize)
				})
			]
		}), t[11] = n.stickerPackPublisher, t[12] = n.stickerPackSize, t[13] = b) : b = t[13];
		var v;
		t[14] !== n.description ? (v = n.description != null && u.jsx(o("WAWebText.react").WAWebTextMuted, {
			marginBottom: 16,
			children: u.jsx(o("WAWebEmojiText.react").EmojiText, { text: n.description })
		}), t[14] = n.description, t[15] = v) : v = t[15];
		var S;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (S = { className: "xrvj5dj x1xfd4i4 x40hh3e xi32cqo x1qughib xh8yej3 x5yr21d" }, t[16] = S) : S = t[16];
		var R;
		if (t[17] !== i || t[18] !== d) {
			var L;
			t[20] !== i ? (L = function(t) {
				return u.jsx(r("WAWebStickerPanelContentStickerItem.react"), {
					sticker: t,
					theme: "stickerStore",
					dontShowViewPack: !0,
					onClick: i,
					onEnter: i
				}, t.id);
			}, t[20] = i, t[21] = L) : L = t[21], R = d.map(L), t[17] = i, t[18] = d, t[19] = R;
		} else R = t[19];
		var E;
		t[22] !== R ? (E = u.jsx("div", babelHelpers.extends({}, S, { children: R })), t[22] = R, t[23] = E) : E = t[23];
		var k;
		t[24] !== E || t[25] !== y || t[26] !== C || t[27] !== b || t[28] !== v ? (k = u.jsx(r("WAWebDrawerBody.react"), { children: u.jsxs(r("WAWebDrawerSection.react"), {
			animation: !1,
			theme: "padding-no-margin",
			children: [
				y,
				C,
				b,
				v,
				E
			]
		}) }), t[24] = E, t[25] = y, t[26] = C, t[27] = b, t[28] = v, t[29] = k) : k = t[29];
		var I;
		t[30] === Symbol.for("react.memo_cache_sentinel") ? (I = { className: "x1280gxy x1ey2m1c x78zum5 xl56j7k x7wzq59 xh8yej3 x16ovd2e x12xbjc7" }, t[30] = I) : I = t[30];
		var T;
		t[31] !== p ? (T = u.jsx("div", babelHelpers.extends({}, I, { children: u.jsx(r("WAWebStickerPackDrawerButton.react"), { handleClick: p }) })), t[31] = p, t[32] = T) : T = t[32];
		var D;
		return t[33] !== l || t[34] !== k || t[35] !== T || t[36] !== g ? (D = u.jsxs(r("WAWebDrawer.react"), {
			theme: "sticker-store",
			ref: l,
			tsNavigationData: _,
			children: [
				g,
				k,
				T
			]
		}, "sticker-pack-details-modal"), t[33] = l, t[34] = k, t[35] = T, t[36] = g, t[37] = D) : D = t[37], D;
	}
	l.StickerPackInfoDetailsDrawerModal = d;
}), 226);
