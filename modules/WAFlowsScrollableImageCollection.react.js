__d("WAFlowsScrollableImageCollection.react", [
	"WAFlowsActionHandlerTypes",
	"WAFlowsImage.react",
	"WAFlowsImageThumbnail.react",
	"WAFlowsOverlay.react",
	"WAFlowsScrollable.react",
	"WAFlowsStateProvider.react",
	"WAFlowsSwipeable.react",
	"WAFlowsWELJActionCreators",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useContext, d = u.useEffect, m = u.useState, p = { scrollableContainer: {
		overflowX: "x14aock7",
		overflowY: "x1rife3k",
		scrollSnapType: "xhfbhpw",
		"::-webkit-scrollbar_display": "xfk6m8",
		$$css: !0
	} };
	function _(e) {
		var t = e.dataTestId, n = e.images, a = m(!1), i = a[0], l = a[1], u = m(null), _ = u[0], f = u[1], g = c(o("WAFlowsStateProvider.react").FlowStateDispatchContext);
		return d(function() {
			g(o("WAFlowsWELJActionCreators").createConfigNavbarAction({
				title: void 0,
				backButtonAction: i ? o("WAFlowsActionHandlerTypes").NavBarBackButtonAction.CLOSE_OVERLAY : void 0
			}));
		}, [g, i]), s.jsx("section", {
			"data-testid": void 0,
			children: s.jsx(r("WAFlowsSwipeable.react"), { children: s.jsx(r("WAFlowsScrollable.react"), {
				xstyle: p.scrollableContainer,
				nativeDraggingControl: !0,
				nativeDraggingOnOverscroll: !1,
				children: s.jsx("div", {
					"data-testid": void 0,
					className: "xuxw1ft xh8yej3 x1plog1 xt0psk2",
					children: n.map(function(e) {
						return s.jsxs("div", {
							className: "x1rg5ohu x1tbvfm1 xowauwy x1hpqcdg x1j9pc4w",
							children: [s.jsx(r("WAFlowsImageThumbnail.react"), {
								id: e.id,
								src: e.src,
								isImageZoomedIn: !1,
								onClick: function() {
									f(e.src), l(!i);
								}
							}), s.jsx(r("WAFlowsOverlay.react"), {
								isPanelVisible: i,
								onVisibilityChange: l,
								children: s.jsx("div", {
									className: "xh8yej3 x5yr21d x6s0dn4",
									children: s.jsx(o("WAFlowsImage.react").WAFlowsImage, {
										src: _ != null ? _ : "",
										altText: "Image",
										scaleType: "contain"
									})
								})
							})]
						}, e.id);
					})
				})
			}) })
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);
