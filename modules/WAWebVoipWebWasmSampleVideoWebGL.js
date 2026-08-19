__d("WAWebVoipWebWasmSampleVideoWebGL", ["WALogger"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _ = 3;
	function f(e, t, n) {
		if (e) {
			var r = e.createShader(t);
			if (r != null) {
				e.shaderSource(r, n), e.compileShader(r);
				var o = e.getShaderParameter(r, e.COMPILE_STATUS);
				if (o) return r;
				e.deleteShader(r);
			}
		}
	}
	function g(e, t) {
		if (e) {
			var n = e.createProgram();
			if (n != null) return t.map(function(t) {
				return e.attachShader(n, t);
			}), e.linkProgram(n), e.useProgram(n), n;
		}
	}
	function h(e, t) {
		if (e) {
			var n = e.createBuffer();
			e.bindBuffer(e.ARRAY_BUFFER, n), e.bufferData(e.ARRAY_BUFFER, new Float32Array([
				0,
				0,
				0,
				1,
				1,
				0,
				1,
				1
			]), e.STATIC_DRAW);
			var r = e.getAttribLocation(t, "a_position");
			e.enableVertexAttribArray(r), e.vertexAttribPointer(r, 2, e.FLOAT, !1, 0, 0);
		}
	}
	function y(e, t, n, r) {
		if (e) {
			var o = e.createTexture();
			return e.bindTexture(e.TEXTURE_2D, o), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.uniform1i(e.getUniformLocation(t, r), n), o;
		}
	}
	var C = {
		preserveDrawingBuffer: !1,
		alpha: !1,
		depth: !1,
		stencil: !1,
		antialias: !1
	}, b = "\n    attribute vec2 a_position;\n    varying vec2 v_texCoord;\n    uniform mat2 u_matrix;\n    void main() {\n     gl_Position = vec4(u_matrix * ((a_position * 2.0 - 1.0) * vec2(1, -1)), 0, 1);\n     v_texCoord = a_position;\n    }\n    ", v = "\n     precision mediump float;\n     uniform sampler2D textureRGB;\n     varying vec2 v_texCoord;\n     void main() {\n      float r = texture2D(textureRGB, v_texCoord).r;\n      float g = texture2D(textureRGB, v_texCoord).g;\n      float b = texture2D(textureRGB, v_texCoord).b;\n      // I saw that [R G B] is actually laid out as [B G R] in the GPU memory\n      gl_FragColor = vec4(r, g, b, 1.0);\n     }", S = [
		1,
		0,
		0,
		1
	], R = [
		S,
		[
			0,
			1,
			-1,
			0
		],
		[
			-1,
			0,
			0,
			-1
		],
		[
			0,
			-1,
			1,
			0
		]
	], L = (function() {
		function t(t) {
			if (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[RGB24Renderer]: WebGL initializing"]))), this.gl = t.getContext("webgl", C), !this.gl) {
				o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[RGB24Renderer]: WebGL init failed"])));
				return;
			}
			o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[RGB24Renderer]: WebGL initialized"])));
			var n = this.gl;
			if (this.vertexShaderRGB24_ = f(n, n.VERTEX_SHADER, b), this.fragmentShaderRGB24_ = f(n, n.FRAGMENT_SHADER, v), this.vertexShaderRGB24_ && this.fragmentShaderRGB24_) {
				var r = g(n, [this.vertexShaderRGB24_, this.fragmentShaderRGB24_]);
				r && (this.programRGB24_ = r, h(n, r), this.textureRGB_ = y(n, r, 3, "textureRGB"), this.matrixLocationRGB24_ = n.getUniformLocation(r, "u_matrix"));
			}
		}
		var n = t.prototype;
		return n.render = function(t, n, r, a, i) {
			o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
				"[webgl]: render fmt=",
				" orient=",
				" w=",
				" h=",
				""
			])), i, a, n, r);
			var e = this.gl;
			if (!e || !e.canvas) {
				o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[webgl]: GL context or canvas is not available"])));
				return;
			}
			if (a % 2 === 0) {
				var l = Math.min((e.canvas.width - n) / 2, 0), s = Math.min((e.canvas.height - r) / 2, 0);
				e.viewport(l, s, n, r);
			} else {
				var u = Math.min((e.canvas.width - r) / 2, 0), f = Math.min((e.canvas.height - n) / 2, 0);
				e.viewport(u, f, r, n);
			}
			if (i === _) {
				e.useProgram(this.programRGB24_);
				var g;
				if (typeof t == "object" && t != null && "buffer" in t && "length" in t) g = new Uint8Array(t.buffer, 0, t.length);
				else {
					o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[webgl]: Invalid data format for RGB24 rendering"])));
					return;
				}
				e.activeTexture(e.TEXTURE3), e.bindTexture(e.TEXTURE_2D, this.textureRGB_), e.texImage2D(e.TEXTURE_2D, 0, e.RGB, n, r, 0, e.RGB, e.UNSIGNED_BYTE, g);
				var h = R[a] || S;
				e.uniformMatrix2fv(this.matrixLocationRGB24_, !1, h);
			} else {
				o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[webgl]: Invalid video format: ", ""])), i);
				return;
			}
			e.drawArrays(e.TRIANGLE_STRIP, 0, 4);
		}, t;
	})();
	l.RGB24Renderer = L;
}), 98);
