__d("WAWebMessageEditMsgPreview.react", [
	"WAWebChatPreferenceCollection",
	"WAWebDisplayType",
	"WAWebFrontendMsgGetters",
	"WAWebMessagePosition",
	"WAWebMessageWrapper.react",
	"WAWebMsgPreview.react",
	"WAWebWrapperDisplayTypeContext",
	"react"
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
		var t, n = e.linkPreviewVisible, a = e.msg, i = o("WAWebFrontendMsgGetters").getChat(a.unsafe());
		return s.jsx(r("WAWebMsgPreview.react"), {
			chatPreference: (t = r("WAWebChatPreferenceCollection").get(i.id)) != null ? t : r("WAWebChatPreferenceCollection").assertGet("defaultPreference"),
			containerXstyle: _.previewContainer,
			bodyXstyle: [
				_.previewBody,
				_.paddingHoriz28,
				n && _.pushUp,
				!n && _.pushDown
			],
			children: s.jsx("div", {
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
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 98);
