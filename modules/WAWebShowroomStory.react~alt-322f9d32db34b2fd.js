__d("WAWebShowroomStory.react", [
	"$InternalEnum",
	"WAWebErrorBoundary.react",
	"WAWebExternalLink.react",
	"WAWebShowroomStoryExample.react",
	"WAWebShowroomUtils",
	"err",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = { titleExtrasLink: {
		color: "x14ug900",
		$$css: !0
	} }, c = n("$InternalEnum").Mirrored([
		"ATOM",
		"MOLECULE",
		"UTIL",
		"OTHER"
	]);
	function d(e) {
		var t, n, a = e.story, i = a.storyName, l, c;
		i && (l = s.jsxs(s.Fragment, { children: [s.jsxs(o("WAWebExternalLink.react").ExternalLink, {
			href: m(String(i) + ".react.js"),
			xstyle: u.titleExtrasLink,
			children: [i, ".react.js"]
		}), "\xA0 · \xA0"] }), c = s.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: m(String(i) + ".story.js"),
			xstyle: u.titleExtrasLink,
			children: "Story source"
		}));
		var d = [];
		a.examples.length > 0 && (d = a.examples.map(function(e, t) {
			var n;
			if (typeof e == "object" && e.example != null) n = s.jsx(r("WAWebShowroomStoryExample.react"), { example: e }, a.storyName + "-" + t);
			else if (typeof e == "function") {
				var o = e;
				n = s.jsx(o, {});
			} else throw r("err")("Invalid example provided for: " + (i != null ? i : "unknown") + " ");
			return s.jsx("div", { children: n }, t);
		}));
		var p = typeof a.description == "string" ? o("WAWebShowroomUtils").formatText(a.description) : (t = a.description) != null ? t : "";
		return s.jsxs("div", {
			className: "x78zum5 xdt5ytf x5yr21d",
			"data-testid": "showroom-story",
			children: [s.jsx("div", {
				className: "x1c4vz4f x2lah0s xdl72j9 x1p5oq8j xwxc41k xf7qf19 xjfo4ez xso031l x1q0q8m5 x120ee7l",
				children: s.jsxs("div", {
					className: "x78zum5 x1pha0wt xod5an3",
					children: [s.jsx("span", {
						className: "xbmvrgn x1q74xe4 xk50ysn x14ug900 x1yrajzq",
						"data-testid": "showroom-story-title",
						children: i
					}), s.jsxs("span", {
						className: "x1pg5gke xhslqc4 x11njtxf",
						children: [l, c]
					})]
				})
			}), s.jsxs("div", {
				className: "x1iyjqo2 xs83m0k xdl72j9 x1p5oq8j xf7qf19 xjfo4ez x1g2khh7 x1odjw0f",
				children: [s.jsx("div", {
					className: "x78zum5 xdt5ytf xp1r0qw x1ap80js x1iymm2a x6prxxf x37zpob",
					children: p
				}), s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
					name: "showroom-story",
					sendLogs: !1,
					children: s.jsx("div", {
						className: "x78zum5 xdt5ytf x7oemit",
						children: d
					})
				}, (n = a.storyName) != null ? n : "missing-name")]
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = "tbgfl " + e;
		return "https://www.internalfb.com/intern/bunny/?q=" + encodeURIComponent(t);
	}
	l.StorySectionType = c, l.Story = d;
}), 98);
