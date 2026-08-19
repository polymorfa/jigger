__d("WAWebMessageEditMsgPreview.react", [
	"WAWebChatPreferenceCollection",
	"WAWebDisplayType",
	"WAWebFrontendMsgGetters",
	"WAWebMessagePosition",
	"WAWebMessageWrapper.react",
	"WAWebMsgPreview.react",
	"WAWebWrapperDisplayTypeContext",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = 100, c = 70, d = c - u / 2, m = "x7xn9x5-B", p = "xjqn293-B", _ = {
		previewContainer: {
			maxHeight: "x7ab17h",
			$$css: !0
		},
		previewBody: {
			animationDuration: "xw8ag78",
			animationFillMode: "x10e4vud",
			animationTimingFunction: null,
			$$css: !0
		},
		pushUp: {
			animationName: "x1uej8s0",
			paddingTop: "x1yfp7c2",
			paddingBottom: "xo5ses6",
			marginBottom: "xat24cr",
			$$css: !0
		},
		pushDown: {
			animationName: "x131uzpj",
			paddingTop: "x1cnzs8",
			paddingBottom: "xx6bls6",
			marginBottom: "xiv7p99",
			$$css: !0
		},
		paddingHoriz28: {
			paddingInlineStart: "xdylf7x",
			paddingInlineEnd: "x5s3kwk",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	};
	function f(e) {
		var t = o("react-compiler-runtime").c(13), n = e.linkPreviewVisible, a = e.msg, i, l;
		if (t[0] !== a) {
			var u, c = o("WAWebFrontendMsgGetters").getChat(a.unsafe());
			i = r("WAWebMsgPreview.react"), l = (u = r("WAWebChatPreferenceCollection").get(c.id)) != null ? u : r("WAWebChatPreferenceCollection").assertGet("defaultPreference"), t[0] = a, t[1] = i, t[2] = l;
		} else i = t[1], l = t[2];
		var d = n && _.pushUp, m = !n && _.pushDown, p;
		t[3] !== d || t[4] !== m ? (p = [
			_.previewBody,
			_.paddingHoriz28,
			d,
			m
		], t[3] = d, t[4] = m, t[5] = p) : p = t[5];
		var f;
		t[6] !== a ? (f = s.jsx("div", {
			"data-nohandle": !0,
			"data-testid": "edit-message-preview",
			children: s.jsx(r("WAWebWrapperDisplayTypeContext").Provider, {
				value: o("WAWebDisplayType").DISPLAY_TYPE.EDITING,
				children: s.jsx(r("WAWebMessageWrapper.react"), {
					msg: a,
					displayType: o("WAWebDisplayType").DISPLAY_TYPE.EDITING,
					position: o("WAWebMessagePosition").MsgPosition.END,
					showProfilePicture: !1,
					errorBoundaryName: "edit-message-preview"
				})
			})
		}), t[6] = a, t[7] = f) : f = t[7];
		var g;
		return t[8] !== i || t[9] !== l || t[10] !== p || t[11] !== f ? (g = s.jsx(i, {
			chatPreference: l,
			containerXstyle: _.previewContainer,
			bodyXstyle: p,
			children: f
		}), t[8] = i, t[9] = l, t[10] = p, t[11] = f, t[12] = g) : g = t[12], g;
	}
	l.default = f;
}), 98);
