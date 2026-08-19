__d("MAWVisibilityGapBanner.react", [
	"fbt",
	"MAWEncryptedBackupsRestoreDialog.entrypoint",
	"MWChatEncryptedBackupsQPLSource.enum",
	"MWXLink.react",
	"MWXRow.react",
	"MWXRowItem.react",
	"MWXText.react",
	"react",
	"react-compiler-runtime",
	"useMWXEntryPointDialog"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = { banner: {
		backgroundColor: "xlhe6ec",
		borderStartStartRadius: "x1obq294",
		borderStartEndRadius: "x5a5i1n",
		borderEndEndRadius: "xde0f50",
		borderEndStartRadius: "x15x8krk",
		overflowX: "x6ikm8r",
		overflowY: "x10wlt62",
		paddingTop: "xyamay9",
		paddingBottom: "x1l90r2v",
		paddingInlineStart: "x1mfogq2",
		paddingInlineEnd: "xsfy40s",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(11), n = e.missingMessageCount, a = r("MWChatEncryptedBackupsQPLSource.enum").IN_THREAD_GAP_UI, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = {}, t[0] = i) : i = t[0];
		var l = r("useMWXEntryPointDialog")(r("MAWEncryptedBackupsRestoreDialog.entrypoint"), i), d = l[0];
		if (n <= 0) return null;
		var m;
		t[1] !== n ? (m = n === 1 ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			"",
			[s._param("count", n, [0])]
		), t[1] = n, t[2] = m) : m = t[2];
		var p;
		t[3] !== d ? (p = function() {
			d({ source: a });
		}, t[3] = d, t[4] = p) : p = t[4];
		var _;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
			/*BTDS*/
			""
		), t[5] = _) : _ = t[5];
		var f;
		t[6] !== p ? (f = u.jsx(r("MWXText.react"), {
			color: "blueLink",
			type: "bodyLink4",
			children: u.jsx(r("MWXLink.react"), {
				onClick: p,
				target: "_blank",
				testid: void 0,
				children: _
			})
		}), t[6] = p, t[7] = f) : f = t[7];
		var g;
		return t[8] !== m || t[9] !== f ? (g = u.jsx(r("MWXRow.react"), {
			align: "center",
			paddingHorizontal: 16,
			paddingVertical: 4,
			spacing: 0,
			children: u.jsx(r("MWXRowItem.react"), {
				xstyle: c.banner,
				children: u.jsx(r("MWXText.react"), {
					align: "center",
					color: "secondary",
					type: "body4",
					children: u.jsxs(u.Fragment, { children: [
						m,
						" ",
						f
					] })
				})
			})
		}), t[8] = m, t[9] = f, t[10] = g) : g = t[10], g;
	}
	l.default = d;
}), 226);
