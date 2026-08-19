__d("WAWebErrorBoundary.react", [
	"fbt",
	"WALogger",
	"WAWebButton.react",
	"WAWebCmd",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUnstyledButton.react",
	"gkx",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c.PureComponent, p = { paddingBottom10: {
		paddingBottom: "x1a8lsjc",
		$$css: !0
	} }, _ = { redBox: {
		height: "x5yr21d",
		width: "xh8yej3",
		display: "x78zum5",
		justifyContent: "xl56j7k",
		alignItems: "x6s0dn4",
		textAlign: "x2b8uid",
		backgroundColor: "x76b9fu",
		color: "xfungia",
		pointerEvents: "x71s49j",
		flexDirection: "xdt5ytf",
		cursor: "x1ypdohk",
		$$css: !0
	} };
	function f(e) {
		var t = o("react-compiler-runtime").c(13), n = e.boundaryName, a = e.error, i;
		t[0] !== a ? (i = a != null ? a : {}, t[0] = a, t[1] = i) : i = t[1];
		var l = i, u = l.stack, c;
		t[2] !== u ? (c = async function() {
			u != null && (await navigator.clipboard.writeText(u), o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, { msg: "Stack copied" })));
		}, t[2] = u, t[3] = c) : c = t[3];
		var m = c, _;
		t[4] !== n ? (_ = function() {
			var e = "Uncaught render error at " + n;
			o("WAWebCmd").Cmd.trigger("trigger_bugreport_v2", { prefilledDescription: e });
		}, t[4] = n, t[5] = _) : _ = t[5];
		var f = _, g = "Error stack from " + n, h;
		t[6] !== m || t[7] !== f || t[8] !== u ? (h = u != null ? d.jsxs(d.Fragment, { children: [d.jsx("div", {
			className: "x126k92a x1hu6azw x190qgfh xqt63rz xw2csxc x1odjw0f x889kno x2vl965 x1a8lsjc xe2zdcy",
			children: d.jsx("code", { children: u })
		}), d.jsxs("div", {
			className: "x889kno x1a8lsjc",
			children: [d.jsx(o("WAWebText.react").WAWebTextSmall, {
				xstyle: p.paddingBottom10,
				children: s._(
					/*BTDS*/
					""
				)
			}), d.jsxs(o("WAWebFlex.react").FlexRow, {
				columnGap: 8,
				justify: "end",
				marginTop: 16,
				children: [d.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
					onClick: m,
					children: s._(
						/*BTDS*/
						""
					)
				}), r("gkx")("9092") ? d.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
					onClick: f,
					children: s._(
						/*BTDS*/
						""
					)
				}) : null]
			})]
		})] }) : "No error stack found, check console", t[6] = m, t[7] = f, t[8] = u, t[9] = h) : h = t[9];
		var y;
		return t[10] !== g || t[11] !== h ? (y = d.jsx(o("WAWebModal.react").Modal, {
			title: g,
			type: o("WAWebModal.react").ModalTheme.Multiline,
			children: h
		}), t[10] = g, t[11] = h, t[12] = y) : y = t[12], y;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(5), n = e.boundaryName, a = e.handleClick;
		if (!r("gkx")("26258")) {
			var i;
			t[0] !== n ? (i = s._(
				/*BTDS*/
				"",
				[s._param("boundaryName", n)]
			), t[0] = n, t[1] = i) : i = t[1];
			var l;
			return t[2] !== a || t[3] !== i ? (l = d.jsx(r("WAWebUnstyledButton.react"), {
				xstyle: _.redBox,
				onClick: a,
				testid: "redbox",
				children: i
			}), t[2] = a, t[3] = i, t[4] = l) : l = t[4], l;
		}
	}
	var h = (function(t) {
		function n() {
			for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
			return e = t.call.apply(t, [this].concat(r)) || this, e.state = { error: null }, e.$1 = function() {
				o("WAWebModalManager").ModalManager.open(d.jsx(f, {
					error: e.state.error,
					boundaryName: e.props.name
				}));
			}, babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
		}
		babelHelpers.inheritsLoose(n, t), n.getDerivedStateFromError = function(t) {
			return { error: t };
		};
		var r = n.prototype;
		return r.componentDidCatch = function(n, r) {
			var t = this.props, a = t.onError, i = t.sendLogs, l = i === void 0 ? !0 : i, s = t.type;
			if (l === !0) {
				this.props.description != null && o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
					"[ErrorBoundary][",
					"] description: ",
					""
				])), this.props.name, this.props.description);
				var c = s === "fatal" ? { sendLogsType: o("WALogger").SendLogsType.EXTREMELY_BAD_USER_EXPERIENCE_SAD } : {};
				o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
					"",
					`
`,
					`
`,
					""
				], [
					"",
					"\\n",
					"\\n",
					""
				])), n, n.stack, r.componentStack).sendLogs("[ErrorBoundary][" + this.props.name + "] " + n.message, c).tags("error-boundary");
			}
			a == null || a(n);
		}, r.render = function() {
			var e, t = this.state.error, n = this.props.fallback, r = n === void 0 ? g : n;
			return t != null ? d.jsx(r, {
				boundaryName: this.props.name,
				error: t,
				handleClick: this.$1
			}) : (e = this.props.children) != null ? e : null;
		}, n;
	})(m);
	l.ErrorBoundary = h;
}), 226);
