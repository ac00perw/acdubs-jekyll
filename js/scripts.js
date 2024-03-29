!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a);
    } : b(a);
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = a.document, m = "2.1.4", n = function(a, b) {
        return new n.fn.init(a, b);
    }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function(a, b) {
        return b.toUpperCase();
    };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this);
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b;
        },
        each: function(a, b) {
            return n.each(this, a, b);
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [ this[c] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), 
        h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], 
        d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, 
        f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g;
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a);
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window;
        },
        isNumeric: function(a) {
            return !n.isArray(a) && a - parseFloat(a) + 1 >= 0;
        },
        isPlainObject: function(a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0;
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a;
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), 
            b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a));
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r);
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function(a, b, c) {
            var d, e = 0, f = a.length, g = s(a);
            if (c) {
                if (g) {
                    for (;f > e; e++) if (d = b.apply(a[e], c), d === !1) break;
                } else for (e in a) if (d = b.apply(a[e], c), d === !1) break;
            } else if (g) {
                for (;f > e; e++) if (d = b.call(a[e], e, a[e]), d === !1) break;
            } else for (e in a) if (d = b.call(a[e], e, a[e]), d === !1) break;
            return a;
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "");
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [ a ] : a) : f.call(c, a)), 
            c;
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : g.call(b, a, c);
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e;
        },
        map: function(a, b, c) {
            var d, f = 0, g = a.length, h = s(a), i = [];
            if (h) for (;g > f; f++) d = b(a[f], f, c), null != d && i.push(d); else for (f in a) d = b(a[f], f, c), 
            null != d && i.push(d);
            return e.apply([], i);
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), 
            f = function() {
                return a.apply(b || this, e.concat(d.call(arguments)));
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
        },
        now: Date.now,
        support: k
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase();
    });
    function s(a) {
        var b = "length" in a && a.length, c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date(), v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function(a, b) {
            return a === b && (l = !0), 0;
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
            return -1;
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"), O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", Q = new RegExp(L + "+", "g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + O),
            PSEUDO: new RegExp("^" + P),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, aa = /[+~]/, ba = /'|\\/g, ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), da = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        }, ea = function() {
            m();
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
        } catch (fa) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b));
                } : function(a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]) ;
                    a.length = c - 1;
                }
            };
        }
        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, 
            "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a))) if (j = f[1]) {
                    if (9 === k) {
                        if (h = b.getElementById(j), !h || !h.parentNode) return d;
                        if (h.id === j) return d.push(h), d;
                    } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), 
                    d;
                } else {
                    if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                    if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), 
                    d;
                }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), 
                        s = "[id='" + s + "'] ", l = o.length;
                        while (l--) o[l] = s + ra(o[l]);
                        w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",");
                    }
                    if (x) try {
                        return H.apply(d, w.querySelectorAll(x)), d;
                    } catch (y) {} finally {
                        r || b.removeAttribute("id");
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e);
        }
        function ha() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
            }
            return b;
        }
        function ia(a) {
            return a[u] = !0, a;
        }
        function ja(a) {
            var b = n.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function ka(a, b) {
            var c = a.split("|"), e = a.length;
            while (e--) d.attrHandle[c[e]] = b;
        }
        function la(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c) while (c = c.nextSibling) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function na(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function oa(a) {
            return ia(function(b) {
                return b = +b, ia(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function pa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }
        c = ga.support = {}, f = ga.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1;
        }, m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, 
            e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), 
            p = !f(g), c.attributes = ja(function(a) {
                return a.className = "i", !a.getAttribute("className");
            }), c.getElementsByTagName = ja(function(a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length;
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function(a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length;
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [ c ] : [];
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ca, da);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ca, da);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return p ? b.getElementsByClassName(a) : void 0;
            }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", 
                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), 
                a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), 
                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), 
                a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
            }), ja(function(a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), 
                a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), 
                q.push(",.*:");
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P);
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), 
            b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) while (b = b.parentNode) if (b === a) return !0;
                return !1;
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 
                1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, h = [ a ], i = [ b ];
                if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++;
                return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
            }, g) : n;
        }, ga.matches = function(a, b) {
            return ga(a, null, null, b);
        }, ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}
            return ga(b, n, null, [ a ]).length > 0;
        }, ga.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b);
        }, ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        }, ga.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, ga.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1);
            }
            return k = null, a;
        }, e = ga.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
                } else if (3 === f || 4 === f) return a.nodeValue;
            } else while (b = a[d++]) c += e(b);
            return c;
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), 
                    "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), 
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), 
                    a;
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), 
                    a[2] = c.slice(0, b)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ca, da).toLowerCase();
                    return "*" === a ? function() {
                        return !0;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], 
                                l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [ w, n, m ];
                                    break;
                                }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [ w, m ]), 
                            l === b)) break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [ a, a, "", b ], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g]);
                    }) : function(a) {
                        return e(a, 0, c);
                    }) : e;
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = [], c = [], d = h(a.replace(R, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
                    };
                }),
                has: ia(function(a) {
                    return function(b) {
                        return ga(a, b).length > 0;
                    };
                }),
                contains: ia(function(a) {
                    return a = a.replace(ca, da), function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                    };
                }),
                lang: ia(function(a) {
                    return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), 
                    function(b) {
                        var c;
                        do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), 
                        c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === o;
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function(a) {
                    return a.disabled === !1;
                },
                disabled: function(a) {
                    return a.disabled === !0;
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !d.pseudos.empty(a);
                },
                header: function(a) {
                    return Z.test(a.nodeName);
                },
                input: function(a) {
                    return Y.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                },
                first: oa(function() {
                    return [ 0 ];
                }),
                last: oa(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: oa(function(a, b, c) {
                    return [ 0 > c ? c + b : c ];
                }),
                even: oa(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a;
                }),
                odd: oa(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a;
                }),
                lt: oa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                    return a;
                }),
                gt: oa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                    return a;
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) d.pseudos[b] = ma(b);
        for (b in {
            submit: !0,
            reset: !0
        }) d.pseudos[b] = na(b);
        function qa() {}
        qa.prototype = d.filters = d.pseudos, d.setFilters = new qa(), g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), 
                c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), 
                f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break;
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
        };
        function ra(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d;
        }
        function sa(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f);
            } : function(b, c, g) {
                var h, i, j = [ w, f ];
                if (g) {
                    while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                } else while (b = b[d]) if (1 === b.nodeType || e) {
                    if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g)) return !0;
                }
            };
        }
        function ta(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--) if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
            return c;
        }
        function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), 
            j && b.push(h));
            return g;
        }
        function wa(a, b, c, d, e, f) {
            return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ua(b || "*", h.nodeType ? [ h ] : h, []), q = !a || !f && b ? p : va(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = va(r, n), d(j, [], h, i), k = j.length;
                    while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--) (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i);
                        }
                        k = r.length;
                        while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                    }
                } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
            });
        }
        function xa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function(a) {
                return a === b;
            }, h, !0), l = sa(function(a) {
                return J(b, a) > -1;
            }, h, !0), m = [ function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e;
            } ]; f > i; i++) if (c = d.relative[a[i].type]) m = [ sa(ta(m), c) ]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
                    return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
                        value: " " === a[i - 2].type ? "*" : ""
                    })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a));
                }
                m.push(c);
            }
            return ta(m);
        }
        function ya(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function(f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++]) if (o(l, g, h)) {
                            i.push(l);
                            break;
                        }
                        k && (w = v);
                    }
                    c && ((l = !o && l) && p--, f && r.push(l));
                }
                if (p += q, c && q !== p) {
                    m = 0;
                    while (o = b[m++]) o(r, s, g, h);
                    if (f) {
                        if (p > 0) while (q--) r[q] || s[q] || (s[q] = F.call(i));
                        s = va(s);
                    }
                    H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
                }
                return k && (w = v, j = t), r;
            };
            return c ? ia(f) : f;
        }
        return h = ga.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, ya(e, d)), f.selector = a;
            }
            return f;
        }, i = ga.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length);
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;
                        break;
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e;
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, 
        m(), c.sortDetached = ja(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"));
        }), ja(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || ka("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), c.attributes && ja(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || ka("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), ja(function(a) {
            return null == a.getAttribute("disabled");
        }) || ka(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), ga;
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, 
    n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;
    function x(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c;
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c;
        });
        if ("string" == typeof b) {
            if (w.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a);
        }
        return n.grep(a, function(a) {
            return g.call(b, a) >= 0 !== c;
        });
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [ d ] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType;
        }));
    }, n.fn.extend({
        find: function(a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
            }));
            for (b = 0; c > b; b++) n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, 
            d;
        },
        filter: function(a) {
            return this.pushStack(x(this, a || [], !1));
        },
        not: function(a) {
            return this.pushStack(x(this, a || [], !0));
        },
        is: function(a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length;
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function(a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [ null, a, null ] : z.exec(a), 
            !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), 
                v.test(c[1]) && n.isPlainObject(b)) for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this;
            }
            return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), 
            this.context = l, this.selector = a, this;
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, 
        this.context = a.context), n.makeArray(a, this));
    };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/, C = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    n.extend({
        dir: function(a, b, c) {
            var d = [], e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
                if (e && n(a).is(c)) break;
                d.push(a);
            }
            return d;
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c;
        }
    }), n.fn.extend({
        has: function(a) {
            var b = n(a, this), c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
            });
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                f.push(c);
                break;
            }
            return this.pushStack(f.length > 1 ? n.unique(f) : f);
        },
        index: function(a) {
            return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    });
    function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType) ;
        return a;
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return n.dir(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return n.dir(a, "parentNode", c);
        },
        next: function(a) {
            return D(a, "nextSibling");
        },
        prev: function(a) {
            return D(a, "previousSibling");
        },
        nextAll: function(a) {
            return n.dir(a, "nextSibling");
        },
        prevAll: function(a) {
            return n.dir(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return n.dir(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return n.dir(a, "previousSibling", c);
        },
        siblings: function(a) {
            return n.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return n.sibling(a.firstChild);
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes);
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), 
            this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e);
        };
    });
    var E = /\S+/g, F = {};
    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function(a, c) {
            b[c] = !0;
        }), b;
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function(l) {
            for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                b = !1;
                break;
            }
            d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable());
        }, k = {
            add: function() {
                if (h) {
                    var c = h.length;
                    !function g(b) {
                        n.each(b, function(b, c) {
                            var d = n.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c);
                        });
                    }(arguments), d ? f = h.length : b && (e = c, j(b));
                }
                return this;
            },
            remove: function() {
                return h && n.each(arguments, function(a, b) {
                    var c;
                    while ((c = n.inArray(b, h, c)) > -1) h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
                }), this;
            },
            has: function(a) {
                return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
            },
            empty: function() {
                return h = [], f = 0, this;
            },
            disable: function() {
                return h = i = b = void 0, this;
            },
            disabled: function() {
                return !h;
            },
            lock: function() {
                return i = void 0, b || k.disable(), this;
            },
            locked: function() {
                return !i;
            },
            fireWith: function(a, b) {
                return !h || c && !i || (b = b || [], b = [ a, b.slice ? b.slice() : b ], d ? i.push(b) : j(b)), 
                this;
            },
            fire: function() {
                return k.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!c;
            }
        };
        return k;
    }, n.extend({
        Deferred: function(a) {
            var b = [ [ "resolve", "done", n.Callbacks("once memory"), "resolved" ], [ "reject", "fail", n.Callbacks("once memory"), "rejected" ], [ "notify", "progress", n.Callbacks("memory") ] ], c = "pending", d = {
                state: function() {
                    return c;
                },
                always: function() {
                    return e.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var a = arguments;
                    return n.Deferred(function(c) {
                        n.each(b, function(b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [ a ] : arguments);
                            });
                        }), a = null;
                    }).promise();
                },
                promise: function(a) {
                    return null != a ? n.extend(a, d) : d;
                }
            }, e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this;
                }, e[f[0] + "With"] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        },
        when: function(a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0, g = 1 === f ? a : n.Deferred(), h = function(a, b, c) {
                return function(e) {
                    b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
                };
            }, i, j, k;
            if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise();
        }
    });
    var H;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this;
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0);
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [ n ]), 
            n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))));
        }
    });
    function I() {
        l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), 
        n.ready();
    }
    n.ready.promise = function(b) {
        return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), 
        a.addEventListener("load", I, !1))), H.promise(b);
    }, n.ready.promise();
    var J = n.access = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c) n.access(a, b, h, c[h], !0, f, g);
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), 
        b = null) : (j = b, b = function(a, b, c) {
            return j.call(n(a), c);
        })), b)) for (;i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    };
    n.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {};
            }
        }), this.expando = n.expando + K.uid++;
    }
    K.uid = 1, K.accepts = n.acceptData, K.prototype = {
        key: function(a) {
            if (!K.accepts(a)) return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b);
                } catch (d) {
                    b[this.expando] = c, n.extend(a, b);
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c;
        },
        set: function(a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b) f[b] = c; else if (n.isEmptyObject(f)) n.extend(this.cache[e], b); else for (d in b) f[d] = b[d];
            return f;
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b];
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), 
            void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b) this.cache[f] = {}; else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [ b, e ] : (d = e, 
                d = d in g ? [ d ] : d.match(E) || [])), c = d.length;
                while (c--) delete g[d[c]];
            }
        },
        hasData: function(a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {});
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]];
        }
    };
    var L = new K(), M = new K(), N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;
    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(O, "-$1").toLowerCase(), 
        c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
            } catch (e) {}
            M.set(a, b, c);
        } else c = void 0;
        return c;
    }
    n.extend({
        hasData: function(a) {
            return M.hasData(a) || L.hasData(a);
        },
        data: function(a, b, c) {
            return M.access(a, b, c);
        },
        removeData: function(a, b) {
            M.remove(a, b);
        },
        _data: function(a, b, c) {
            return L.access(a, b, c);
        },
        _removeData: function(a, b) {
            L.remove(a, b);
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), 
                    P(f, d, e[d])));
                    L.set(f, "hasDataAttrs", !0);
                }
                return e;
            }
            return "object" == typeof a ? this.each(function() {
                M.set(this, a);
            }) : J(this, function(b) {
                var c, d = n.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a), void 0 !== c) return c;
                    if (c = M.get(f, d), void 0 !== c) return c;
                    if (c = P(f, d, void 0), void 0 !== c) return c;
                } else this.each(function() {
                    var c = M.get(this, d);
                    M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b);
                });
            }, null, b, arguments.length > 1, null, !0);
        },
        removeData: function(a) {
            return this.each(function() {
                M.remove(this, a);
            });
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), 
            d || []) : void 0;
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function() {
                n.dequeue(a, b);
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), 
            delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    L.remove(a, [ b + "queue", c ]);
                })
            });
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a);
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [ f ]);
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b);
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = [ "Top", "Right", "Bottom", "Left" ], S = function(a, b) {
        return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
    }, T = /^(?:checkbox|radio)$/i;
    !function() {
        var a = l.createDocumentFragment(), b = a.appendChild(l.createElement("div")), c = l.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), 
        b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin" in a;
    var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/, Y = /^([^.]*)(?:\.(.+)|)$/;
    function Z() {
        return !0;
    }
    function $() {
        return !1;
    }
    function _() {
        try {
            return l.activeElement;
        } catch (a) {}
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), 
                (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                    return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
                }), b = (b || "").match(E) || [ "" ], j = b.length;
                while (j--) h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), 
                o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, 
                l = n.event.special[o] || {}, k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), 
                l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), 
                n.event.global[o] = !0);
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(E) || [ "" ], j = b.length;
                while (j--) if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), 
                o) {
                    l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], 
                    h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                    while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), 
                    k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), 
                    delete i[o]);
                } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, m, o, p = [ d || l ], q = j.call(b, "type") ? b.type : b, r = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), 
            q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), 
            b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            b.result = void 0, b.target || (b.target = d), c = null == c ? [ b ] : n.makeArray(c, [ b ]), 
            o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), 
                    h = g;
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a);
                }
                f = 0;
                while ((g = p[f++]) && !b.isPropagationStopped()) b.type = f > 1 ? i : o.bindType || q, 
                m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), 
                m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], 
                h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), 
                b.result;
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, 
                    a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), 
                    void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) for (;i !== this; i = i.parentNode || this) if (i.disabled !== !0 || "click" !== a.type) {
                for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [ i ]).length), 
                d[e] && d.push(f);
                d.length && g.push({
                    elem: i,
                    handlers: d
                });
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), 
                a;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, 
                d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), 
                a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), 
                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
            }
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), 
            d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), 
            g.filter ? g.filter(a, f) : a;
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), 
                    !1) : void 0;
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = n.extend(new n.Event(), c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        }
    }, n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, 
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, 
        b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
    }, n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault();
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), 
                a.type = b), c;
            }
        };
    }), k.focusinBubbles || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0);
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this, e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
            },
            teardown: function() {
                var d = this.ownerDocument || this, e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b));
            }
        };
    }), n.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this;
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, 
            c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $; else if (!d) return this;
            return 1 === e && (f = d, d = function(a) {
                return n().off(a), f.apply(this, arguments);
            }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function() {
                n.event.add(this, a, d, c, b);
            });
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1);
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), 
            this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this;
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), 
            this.each(function() {
                n.event.remove(this, a, c, b);
            });
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0;
        }
    });
    var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ba = /<([\w:]+)/, ca = /<|&#?\w+;/, da = /<(?:script|style|link)/i, ea = /checked\s*(?:[^=]|=\s*.checked.)/i, fa = /^$|\/(?:java|ecma)script/i, ga = /^true\/(.*)/, ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ia = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, 
    ia.th = ia.td;
    function ja(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function ka(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }
    function la(a) {
        var b = ga.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function ma(a, b) {
        for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
    }
    function na(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
            }
            M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i));
        }
    }
    function oa(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([ a ], c) : c;
    }
    function pa(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
    }
    n.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = oa(h), 
            f = oa(a), d = 0, e = f.length; e > d; d++) pa(f[d], g[d]);
            if (b) if (c) for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) na(f[d], g[d]); else na(a, h);
            return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h;
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++) if (e = a[m], 
            e || 0 === e) if ("object" === n.type(e)) n.merge(l, e.nodeType ? [ e ] : e); else if (ca.test(e)) {
                f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || [ "", "" ])[1].toLowerCase(), 
                h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], 
                j = h[0];
                while (j--) f = f.lastChild;
                n.merge(l, f.childNodes), f = k.firstChild, f.textContent = "";
            } else l.push(b.createTextNode(e));
            k.textContent = "", m = 0;
            while (e = l[m++]) if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), 
            f = oa(k.appendChild(e), "script"), i && ma(f), c)) {
                j = 0;
                while (e = f[j++]) fa.test(e.type || "") && c.push(e);
            }
            return k;
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                    if (b.events) for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e];
                }
                delete M.cache[c[M.expando]];
            }
        }
    }), n.fn.extend({
        text: function(a) {
            return J(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
                });
            }, null, a, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        remove: function(a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(oa(c)), 
            c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));
            return this;
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(oa(a, !1)), 
            a.textContent = "");
            return this;
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b);
            });
        },
        html: function(a) {
            return J(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || [ "", "" ])[1].toLowerCase()]) {
                    a = a.replace(aa, "<$1></$2>");
                    try {
                        for (;d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), 
                        b.innerHTML = a);
                        b = 0;
                    } catch (e) {}
                }
                b && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this);
            }), a && (a.length || a.nodeType) ? this : this.remove();
        },
        detach: function(a) {
            return this.remove(a, !0);
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each(function(c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
            });
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 
            1 === c.childNodes.length && (c = d), d)) {
                for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), 
                g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);
                if (g) for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++) h = f[j], 
                fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")));
            }
            return this;
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), 
            n(e[h])[b](c), f.apply(d, c.get());
            return this.pushStack(d);
        };
    });
    var qa, ra = {};
    function sa(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
        return e.detach(), f;
    }
    function ta(a) {
        var b = l, c = ra[a];
        return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), 
        b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), 
        c;
    }
    var ua = /^margin/, va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"), wa = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
    };
    function xa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), 
        va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, 
        g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
    }
    function ya(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            }
        };
    }
    !function() {
        var b, c, d = l.documentElement, e = l.createElement("div"), f = l.createElement("div");
        if (f.style) {
            f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", 
            k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", 
            e.appendChild(f);
            function g() {
                f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", 
                f.innerHTML = "", d.appendChild(e);
                var g = a.getComputedStyle(f, null);
                b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e);
            }
            a.getComputedStyle && n.extend(k, {
                pixelPosition: function() {
                    return g(), b;
                },
                boxSizingReliable: function() {
                    return null == c && g(), c;
                },
                reliableMarginRight: function() {
                    var b, c = f.appendChild(l.createElement("div"));
                    return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
                    c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), 
                    b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), 
                    b;
                }
            });
        }
    }(), n.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e;
    };
    var za = /^(none|table(?!-c[ea]).+)/, Aa = new RegExp("^(" + Q + ")(.*)$", "i"), Ba = new RegExp("^([+-])=(" + Q + ")", "i"), Ca = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Da = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Ea = [ "Webkit", "O", "Moz", "ms" ];
    function Fa(a, b) {
        if (b in a) return b;
        var c = b[0].toUpperCase() + b.slice(1), d = b, e = Ea.length;
        while (e--) if (b = Ea[e] + c, b in a) return b;
        return d;
    }
    function Ga(a, b, c) {
        var d = Aa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function Ha(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), 
        d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), 
        "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
        return g;
    }
    function Ia(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = wa(a), g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
        }
        return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    function Ja(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), 
        c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), 
        "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a;
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = xa(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], 
                void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, 
                "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), 
                f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), 
                k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), 
                g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], 
            g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), 
            "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e;
        }
    }), n.each([ "height", "width" ], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function() {
                    return Ia(a, b, d);
                }) : Ia(a, b, d) : void 0;
            },
            set: function(a, c, d) {
                var e = d && wa(a);
                return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0);
            }
        };
    }), n.cssHooks.marginRight = ya(k.reliableMarginRight, function(a, b) {
        return b ? n.swap(a, {
            display: "inline-block"
        }, xa, [ a, "marginRight" ]) : void 0;
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [ c ]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, ua.test(a) || (n.cssHooks[a + b].set = Ga);
    }), n.fn.extend({
        css: function(a, b) {
            return J(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = wa(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f;
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
            }, a, b, arguments.length > 1);
        },
        show: function() {
            return Ja(this, !0);
        },
        hide: function() {
            return Ja(this);
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                S(this) ? n(this).show() : n(this).hide();
            });
        }
    });
    function Ka(a, b, c, d, e) {
        return new Ka.prototype.init(a, b, c, d, e);
    }
    n.Tween = Ka, Ka.prototype = {
        constructor: Ka,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), 
            this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = Ka.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ka.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = Ka.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, 
            this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this;
        }
    }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), 
                b && "auto" !== b ? b : 0) : a.elem[a.prop];
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
            }
        }
    }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, n.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        }
    }, n.fx = Ka.prototype.init, n.fx.step = {};
    var La, Ma, Na = /^(?:toggle|show|hide)$/, Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"), Pa = /queueHooks$/, Qa = [ Va ], Ra = {
        "*": [ function(a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = Oa.exec(b), f = e && e[3] || (n.cssNumber[a] ? "" : "px"), g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;
                do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i);
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), 
            c;
        } ]
    };
    function Sa() {
        return setTimeout(function() {
            La = void 0;
        }), La = n.now();
    }
    function Ta(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e;
    }
    function Ua(a, b, c) {
        for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
    }
    function Va(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, 
        h.empty.fire = function() {
            h.unqueued || i();
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
            });
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [ o.overflow, o.overflowX, o.overflowY ], 
        j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, 
        "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), 
        c.overflow && (o.overflow = "hidden", l.always(function() {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
        }));
        for (d in b) if (e = b[d], Na.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                if ("show" !== e || !q || void 0 === q[d]) continue;
                p = !0;
            }
            m[d] = q && q[d] || n.style(a, d);
        } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j); else {
            q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), 
            p ? n(a).show() : l.done(function() {
                n(a).hide();
            }), l.done(function() {
                var b;
                L.remove(a, "fxshow");
                for (b in m) n.style(a, b, m[b]);
            });
            for (d in m) g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, 
            g.start = "width" === d || "height" === d ? 1 : 0));
        }
    }
    function Wa(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], 
        f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
    }
    function Xa(a, b, c) {
        var d, e, f = 0, g = Qa.length, h = n.Deferred().always(function() {
            delete i.elem;
        }), i = function() {
            if (e) return !1;
            for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [ j, f, c ]), 1 > f && i ? c : (h.resolveWith(a, [ j ]), 
            !1);
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: La || Sa(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [ j, b ]) : h.rejectWith(a, [ j, b ]), this;
            }
        }), k = j.props;
        for (Wa(k, j.opts.specialEasing); g > f; f++) if (d = Qa[f].call(j, a, k, j.opts)) return d;
        return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    n.Animation = n.extend(Xa, {
        tweener: function(a, b) {
            n.isFunction(a) ? (b = a, a = [ "*" ]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b);
        },
        prefilter: function(a, b) {
            b ? Qa.unshift(a) : Qa.push(a);
        }
    }), n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, 
        (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
        }, d;
    }, n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(S).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function() {
                var b = Xa(this, n.extend({}, a), f);
                (e || L.get(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c);
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), 
            this.each(function() {
                var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = L.get(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && Pa.test(e) && d(g[e]);
                for (e = f.length; e--; ) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), 
                b = !1, f.splice(e, 1));
                (b || !c) && n.dequeue(this, a);
            });
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), 
                b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), n.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e);
        };
    }), n.each({
        slideDown: Ta("show"),
        slideUp: Ta("hide"),
        slideToggle: Ta("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), n.timers = [], n.fx.tick = function() {
        var a, b = 0, c = n.timers;
        for (La = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(), La = void 0;
    }, n.fx.timer = function(a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }, n.fx.interval = 13, n.fx.start = function() {
        Ma || (Ma = setInterval(n.fx.tick, n.fx.interval));
    }, n.fx.stop = function() {
        clearInterval(Ma), Ma = null;
    }, n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, n.fn.delay = function(a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d);
            };
        });
    }, function() {
        var a = l.createElement("input"), b = l.createElement("select"), c = b.appendChild(l.createElement("option"));
        a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, 
        k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", 
        k.radioValue = "t" === a.value;
    }();
    var Ya, Za, $a = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return J(this, n.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a);
            });
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), 
            d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), 
            null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), 
            c) : void n.removeAttr(a, b));
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), 
            a.removeAttribute(c);
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        }
    }), Za = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = $a[b] || n.find.attr;
        $a[b] = function(a, b, d) {
            var e, f;
            return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, 
            $a[b] = f), e;
        };
    });
    var _a = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return J(this, n.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a];
            });
        }
    }), n.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, 
            e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1;
                }
            }
        }
    }), k.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
        }
    }), n.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        n.propFix[this.toLowerCase()] = this;
    });
    var ab = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, this.className));
            });
            if (h) for (b = (a || "").match(E) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
                f = 0;
                while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = n.trim(d), c.className !== g && (c.className = g);
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, this.className));
            });
            if (h) for (b = (a || "").match(E) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
                f = 0;
                while (e = b[f++]) while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                g = a ? n.trim(d) : "", c.className !== g && (c.className = g);
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b);
            } : function() {
                if ("string" === c) {
                    var b, d = 0, e = n(this), f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                } else (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), 
                this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "");
            });
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;
            return !1;
        }
    });
    var bb = /\r/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + "";
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, 
                "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c);
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a));
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], 
                    !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                        if (b = n(c).val(), f) return b;
                        g.push(b);
                    }
                    return g;
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--) d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f;
                }
            }
        }
    }), n.each([ "radio", "checkbox" ], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0;
            }
        }, k.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        }
    });
    var cb = n.now(), db = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "");
    }, n.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser(), b = c.parseFromString(a, "text/xml");
        } catch (d) {
            b = void 0;
        }
        return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), 
        b;
    };
    var eb = /#.*$/, fb = /([?&])_=[^&]*/, gb = /^(.*?):[ \t]*([^\r\n]*)$/gm, hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, ib = /^(?:GET|HEAD)$/, jb = /^\/\//, kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, lb = {}, mb = {}, nb = "*/".concat("*"), ob = a.location.href, pb = kb.exec(ob.toLowerCase()) || [];
    function qb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function rb(a, b, c, d) {
        var e = {}, f = a === mb;
        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), 
                g(j), !1);
            }), i;
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*");
    }
    function sb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a;
    }
    function tb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break;
        }
        if (i[0] in c) f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break;
                }
                g || (g = e);
            }
            f = f || g;
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function ub(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), 
        i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break;
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b);
            } catch (l) {
                return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                };
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ob,
            type: "GET",
            isLocal: hb.test(pb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": nb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a);
        },
        ajaxPrefilter: qb(lb),
        ajaxTransport: qb(mb),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(), p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!f) {
                            f = {};
                            while (b = gb.exec(e)) f[b[1].toLowerCase()] = b[2];
                        }
                        b = f[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? e : null;
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this;
                },
                overrideMimeType: function(a) {
                    return t || (k.mimeType = a), this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > t) for (b in a) q[b] = [ q[b], a[b] ]; else v.always(a[v.status]);
                    return this;
                },
                abort: function(a) {
                    var b = a || u;
                    return c && c.abort(b), x(0, b), this;
                }
            };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), 
            k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [ "" ], 
            null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), 
            k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), 
            rb(lb, k, b, v), 2 === t) return v;
            i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), 
            k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, 
            delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), 
            k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), 
            n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), 
            v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (j in {
                success: 1,
                error: 1,
                complete: 1
            }) v[j](k[j]);
            if (c = rb(mb, k, b, v)) {
                v.readyState = 1, i && m.trigger("ajaxSend", [ v, k ]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout");
                }, k.timeout));
                try {
                    t = 1, c.send(r, x);
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w);
                }
            } else x(-1, "No Transport");
            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, 
                j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), 
                j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), 
                w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, 
                r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), 
                v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [ r, x, v ]) : o.rejectWith(l, [ v, x, s ]), 
                v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [ v, k, j ? r : s ]), 
                p.fireWith(l, [ v, x ]), i && (m.trigger("ajaxComplete", [ v, k ]), --n.active || n.event.trigger("ajaxStop")));
            }
            return v;
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json");
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script");
        }
    }), n.each([ "get", "post" ], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            });
        };
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        });
    }, n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b));
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), 
            b.map(function() {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a;
            }).append(this)), this);
        },
        wrapInner: function(a) {
            return this.each(n.isFunction(a) ? function(b) {
                n(this).wrapInner(a.call(this, b));
            } : function() {
                var b = n(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
            }).end();
        }
    }), n.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a);
    };
    var vb = /%20/g, wb = /\[\]$/, xb = /\r?\n/g, yb = /^(?:submit|button|image|reset|file)$/i, zb = /^(?:input|select|textarea|keygen)/i;
    function Ab(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
        }); else if (c || "object" !== n.type(b)) d(a, b); else for (e in b) Ab(a + "[" + e + "]", b[e], c, d);
    }
    n.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value);
        }); else for (c in a) Ab(c, a[c], b, e);
        return d.join("&").replace(vb, "+");
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a));
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(xb, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(xb, "\r\n")
                };
            }).get();
        }
    }), n.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest();
        } catch (a) {}
    };
    var Bb = 0, Cb = {}, Db = {
        0: 200,
        1223: 204
    }, Eb = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Cb) Cb[a]();
    }), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function(a) {
        var b;
        return k.cors || Eb && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(), g = ++Bb;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Cb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()));
                    };
                }, f.onload = b(), f.onerror = b("error"), b = Cb[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null);
                } catch (h) {
                    if (b) throw h;
                }
            },
            abort: function() {
                b && b();
            }
        } : void 0;
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a;
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = n("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type);
                    }), l.head.appendChild(b[0]);
                },
                abort: function() {
                    c && c();
                }
            };
        }
    });
    var Fb = [], Gb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Fb.pop() || n.expando + "_" + cb++;
            return this[a] = !0, a;
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, 
        h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), 
        b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments;
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), 
            g = f = void 0;
        }), "script") : void 0;
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || l;
        var d = v.exec(a), e = !c && [];
        return d ? [ b.createElement(d[1]) ] : (d = n.buildFragment([ a ], b, e), e && e.length && n(e).remove(), 
        n.merge([], d.childNodes));
    };
    var Hb = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Hb) return Hb.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, 
        b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
        }).complete(c && function(a, b) {
            g.each(c, f || [ a.responseText, b, a ]);
        }), this;
    }, n.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem;
        }).length;
    };
    var Ib = a.document.documentElement;
    function Jb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), 
            i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, 
            j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), 
            n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), 
            null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b);
            });
            var b, c, d = this[0], e = {
                top: 0,
                left: 0
            }, f = d && d.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), 
            c = Jb(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e;
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), 
                b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), 
                d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || Ib;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Ib;
            });
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function(e) {
            return J(this, function(b, e, f) {
                var g = Jb(b);
                return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
            }, b, e, arguments.length, null);
        };
    }), n.each([ "top", "left" ], function(a, b) {
        n.cssHooks[b] = ya(k.pixelPosition, function(a, c) {
            return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0;
        });
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return J(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, 
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
                }, b, f ? d : void 0, f, null);
            };
        });
    }), n.fn.size = function() {
        return this.length;
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n;
    });
    var Kb = a.jQuery, Lb = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n;
    }, typeof b === U && (a.jQuery = a.$ = n), n;
});

!function($) {
    "use strict";
    var FOUNDATION_VERSION = "6.1.1";
    var Foundation = {
        version: FOUNDATION_VERSION,
        _plugins: {},
        _uuids: [],
        _activePlugins: {},
        rtl: function() {
            return $("html").attr("dir") === "rtl";
        },
        plugin: function(plugin, name) {
            var className = name || functionName(plugin);
            var attrName = hyphenate(className);
            this._plugins[attrName] = this[className] = plugin;
        },
        registerPlugin: function(plugin, name) {
            var pluginName = name ? hyphenate(name) : functionName(plugin.constructor).toLowerCase();
            plugin.uuid = this.GetYoDigits(6, pluginName);
            if (!plugin.$element.attr("data-" + pluginName)) {
                plugin.$element.attr("data-" + pluginName, plugin.uuid);
            }
            if (!plugin.$element.data("zfPlugin")) {
                plugin.$element.data("zfPlugin", plugin);
            }
            plugin.$element.trigger("init.zf." + pluginName);
            this._uuids.push(plugin.uuid);
            return;
        },
        unregisterPlugin: function(plugin) {
            var pluginName = hyphenate(functionName(plugin.$element.data("zfPlugin").constructor));
            this._uuids.splice(this._uuids.indexOf(plugin.uuid), 1);
            plugin.$element.removeAttr("data-" + pluginName).removeData("zfPlugin").trigger("destroyed.zf." + pluginName);
            for (var prop in plugin) {
                plugin[prop] = null;
            }
            return;
        },
        reInit: function(plugins) {
            var isJQ = plugins instanceof $;
            try {
                if (isJQ) {
                    plugins.each(function() {
                        $(this).data("zfPlugin")._init();
                    });
                } else {
                    var type = typeof plugins, _this = this, fns = {
                        object: function(plgs) {
                            plgs.forEach(function(p) {
                                $("[data-" + p + "]").foundation("_init");
                            });
                        },
                        string: function() {
                            $("[data-" + plugins + "]").foundation("_init");
                        },
                        undefined: function() {
                            this["object"](Object.keys(_this._plugins));
                        }
                    };
                    fns[type](plugins);
                }
            } catch (err) {
                console.error(err);
            } finally {
                return plugins;
            }
        },
        GetYoDigits: function(length, namespace) {
            length = length || 6;
            return Math.round(Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)).toString(36).slice(1) + (namespace ? "-" + namespace : "");
        },
        reflow: function(elem, plugins) {
            if (typeof plugins === "undefined") {
                plugins = Object.keys(this._plugins);
            } else if (typeof plugins === "string") {
                plugins = [ plugins ];
            }
            var _this = this;
            $.each(plugins, function(i, name) {
                var plugin = _this._plugins[name];
                var $elem = $(elem).find("[data-" + name + "]").addBack("[data-" + name + "]");
                $elem.each(function() {
                    var $el = $(this), opts = {};
                    if ($el.data("zfPlugin")) {
                        console.warn("Tried to initialize " + name + " on an element that already has a Foundation plugin.");
                        return;
                    }
                    if ($el.attr("data-options")) {
                        var thing = $el.attr("data-options").split(";").forEach(function(e, i) {
                            var opt = e.split(":").map(function(el) {
                                return el.trim();
                            });
                            if (opt[0]) opts[opt[0]] = parseValue(opt[1]);
                        });
                    }
                    try {
                        $el.data("zfPlugin", new plugin($(this), opts));
                    } catch (er) {
                        console.error(er);
                    } finally {
                        return;
                    }
                });
            });
        },
        getFnName: functionName,
        transitionend: function($elem) {
            var transitions = {
                transition: "transitionend",
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend"
            };
            var elem = document.createElement("div"), end;
            for (var t in transitions) {
                if (typeof elem.style[t] !== "undefined") {
                    end = transitions[t];
                }
            }
            if (end) {
                return end;
            } else {
                end = setTimeout(function() {
                    $elem.triggerHandler("transitionend", [ $elem ]);
                }, 1);
                return "transitionend";
            }
        }
    };
    Foundation.util = {
        throttle: function(func, delay) {
            var timer = null;
            return function() {
                var context = this, args = arguments;
                if (timer === null) {
                    timer = setTimeout(function() {
                        func.apply(context, args);
                        timer = null;
                    }, delay);
                }
            };
        }
    };
    var foundation = function(method) {
        var type = typeof method, $meta = $("meta.foundation-mq"), $noJS = $(".no-js");
        if (!$meta.length) {
            $('<meta class="foundation-mq">').appendTo(document.head);
        }
        if ($noJS.length) {
            $noJS.removeClass("no-js");
        }
        if (type === "undefined") {
            Foundation.MediaQuery._init();
            Foundation.reflow(this);
        } else if (type === "string") {
            var args = Array.prototype.slice.call(arguments, 1);
            var plugClass = this.data("zfPlugin");
            if (plugClass !== undefined && plugClass[method] !== undefined) {
                if (this.length === 1) {
                    plugClass[method].apply(plugClass, args);
                } else {
                    this.each(function(i, el) {
                        plugClass[method].apply($(el).data("zfPlugin"), args);
                    });
                }
            } else {
                throw new ReferenceError("We're sorry, '" + method + "' is not an available method for " + (plugClass ? functionName(plugClass) : "this element") + ".");
            }
        } else {
            throw new TypeError("We're sorry, '" + type + "' is not a valid parameter. You must use a string representing the method you wish to invoke.");
        }
        return this;
    };
    window.Foundation = Foundation;
    $.fn.foundation = foundation;
    (function() {
        if (!Date.now || !window.Date.now) window.Date.now = Date.now = function() {
            return new Date().getTime();
        };
        var vendors = [ "webkit", "moz" ];
        for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
            var vp = vendors[i];
            window.requestAnimationFrame = window[vp + "RequestAnimationFrame"];
            window.cancelAnimationFrame = window[vp + "CancelAnimationFrame"] || window[vp + "CancelRequestAnimationFrame"];
        }
        if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
            var lastTime = 0;
            window.requestAnimationFrame = function(callback) {
                var now = Date.now();
                var nextTime = Math.max(lastTime + 16, now);
                return setTimeout(function() {
                    callback(lastTime = nextTime);
                }, nextTime - now);
            };
            window.cancelAnimationFrame = clearTimeout;
        }
        if (!window.performance || !window.performance.now) {
            window.performance = {
                start: Date.now(),
                now: function() {
                    return Date.now() - this.start;
                }
            };
        }
    })();
    if (!Function.prototype.bind) {
        Function.prototype.bind = function(oThis) {
            if (typeof this !== "function") {
                throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            }
            var aArgs = Array.prototype.slice.call(arguments, 1), fToBind = this, fNOP = function() {}, fBound = function() {
                return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
            };
            if (this.prototype) {
                fNOP.prototype = this.prototype;
            }
            fBound.prototype = new fNOP();
            return fBound;
        };
    }
    function functionName(fn) {
        if (Function.prototype.name === undefined) {
            var funcNameRegex = /function\s([^(]{1,})\(/;
            var results = funcNameRegex.exec(fn.toString());
            return results && results.length > 1 ? results[1].trim() : "";
        } else if (fn.prototype === undefined) {
            return fn.constructor.name;
        } else {
            return fn.prototype.constructor.name;
        }
    }
    function parseValue(str) {
        if (/true/.test(str)) return true; else if (/false/.test(str)) return false; else if (!isNaN(str * 1)) return parseFloat(str);
        return str;
    }
    function hyphenate(str) {
        return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    }
}(jQuery);

!function(Foundation, window) {
    var ImNotTouchingYou = function(element, parent, lrOnly, tbOnly) {
        var eleDims = GetDimensions(element), top, bottom, left, right;
        if (parent) {
            var parDims = GetDimensions(parent);
            bottom = eleDims.offset.top + eleDims.height <= parDims.height + parDims.offset.top;
            top = eleDims.offset.top >= parDims.offset.top;
            left = eleDims.offset.left >= parDims.offset.left;
            right = eleDims.offset.left + eleDims.width <= parDims.width;
        } else {
            bottom = eleDims.offset.top + eleDims.height <= eleDims.windowDims.height + eleDims.windowDims.offset.top;
            top = eleDims.offset.top >= eleDims.windowDims.offset.top;
            left = eleDims.offset.left >= eleDims.windowDims.offset.left;
            right = eleDims.offset.left + eleDims.width <= eleDims.windowDims.width;
        }
        var allDirs = [ bottom, top, left, right ];
        if (lrOnly) {
            return left === right === true;
        }
        if (tbOnly) {
            return top === bottom === true;
        }
        return allDirs.indexOf(false) === -1;
    };
    var GetDimensions = function(elem, test) {
        elem = elem.length ? elem[0] : elem;
        if (elem === window || elem === document) {
            throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
        }
        var rect = elem.getBoundingClientRect(), parRect = elem.parentNode.getBoundingClientRect(), winRect = document.body.getBoundingClientRect(), winY = window.pageYOffset, winX = window.pageXOffset;
        return {
            width: rect.width,
            height: rect.height,
            offset: {
                top: rect.top + winY,
                left: rect.left + winX
            },
            parentDims: {
                width: parRect.width,
                height: parRect.height,
                offset: {
                    top: parRect.top + winY,
                    left: parRect.left + winX
                }
            },
            windowDims: {
                width: winRect.width,
                height: winRect.height,
                offset: {
                    top: winY,
                    left: winX
                }
            }
        };
    };
    var GetOffsets = function(element, anchor, position, vOffset, hOffset, isOverflow) {
        var $eleDims = GetDimensions(element), $anchorDims = anchor ? GetDimensions(anchor) : null;
        switch (position) {
          case "top":
            return {
                left: $anchorDims.offset.left,
                top: $anchorDims.offset.top - ($eleDims.height + vOffset)
            };
            break;

          case "left":
            return {
                left: $anchorDims.offset.left - ($eleDims.width + hOffset),
                top: $anchorDims.offset.top
            };
            break;

          case "right":
            return {
                left: $anchorDims.offset.left + $anchorDims.width + hOffset,
                top: $anchorDims.offset.top
            };
            break;

          case "center top":
            return {
                left: $anchorDims.offset.left + $anchorDims.width / 2 - $eleDims.width / 2,
                top: $anchorDims.offset.top - ($eleDims.height + vOffset)
            };
            break;

          case "center bottom":
            return {
                left: isOverflow ? hOffset : $anchorDims.offset.left + $anchorDims.width / 2 - $eleDims.width / 2,
                top: $anchorDims.offset.top + $anchorDims.height + vOffset
            };
            break;

          case "center left":
            return {
                left: $anchorDims.offset.left - ($eleDims.width + hOffset),
                top: $anchorDims.offset.top + $anchorDims.height / 2 - $eleDims.height / 2
            };
            break;

          case "center right":
            return {
                left: $anchorDims.offset.left + $anchorDims.width + hOffset + 1,
                top: $anchorDims.offset.top + $anchorDims.height / 2 - $eleDims.height / 2
            };
            break;

          case "center":
            return {
                left: $eleDims.windowDims.offset.left + $eleDims.windowDims.width / 2 - $eleDims.width / 2,
                top: $eleDims.windowDims.offset.top + $eleDims.windowDims.height / 2 - $eleDims.height / 2
            };
            break;

          case "reveal":
            return {
                left: ($eleDims.windowDims.width - $eleDims.width) / 2,
                top: $eleDims.windowDims.offset.top + vOffset
            };

          case "reveal full":
            return {
                left: $eleDims.windowDims.offset.left,
                top: $eleDims.windowDims.offset.top
            };
            break;

          default:
            return {
                left: $anchorDims.offset.left,
                top: $anchorDims.offset.top + $anchorDims.height + vOffset
            };
        }
    };
    Foundation.Box = {
        ImNotTouchingYou: ImNotTouchingYou,
        GetDimensions: GetDimensions,
        GetOffsets: GetOffsets
    };
}(window.Foundation, window);

!function($, Foundation) {
    "use strict";
    Foundation.Keyboard = {};
    var keyCodes = {
        9: "TAB",
        13: "ENTER",
        27: "ESCAPE",
        32: "SPACE",
        37: "ARROW_LEFT",
        38: "ARROW_UP",
        39: "ARROW_RIGHT",
        40: "ARROW_DOWN"
    };
    var keys = function(kcs) {
        var k = {};
        for (var kc in kcs) k[kcs[kc]] = kcs[kc];
        return k;
    }(keyCodes);
    Foundation.Keyboard.keys = keys;
    var parseKey = function(event) {
        var key = keyCodes[event.which || event.keyCode] || String.fromCharCode(event.which).toUpperCase();
        if (event.shiftKey) key = "SHIFT_" + key;
        if (event.ctrlKey) key = "CTRL_" + key;
        if (event.altKey) key = "ALT_" + key;
        return key;
    };
    Foundation.Keyboard.parseKey = parseKey;
    var commands = {};
    var handleKey = function(event, component, functions) {
        var commandList = commands[component], keyCode = parseKey(event), cmds, command, fn;
        if (!commandList) return console.warn("Component not defined!");
        if (typeof commandList.ltr === "undefined") {
            cmds = commandList;
        } else {
            if (Foundation.rtl()) cmds = $.extend({}, commandList.ltr, commandList.rtl); else cmds = $.extend({}, commandList.rtl, commandList.ltr);
        }
        command = cmds[keyCode];
        fn = functions[command];
        if (fn && typeof fn === "function") {
            fn.apply();
            if (functions.handled || typeof functions.handled === "function") {
                functions.handled.apply();
            }
        } else {
            if (functions.unhandled || typeof functions.unhandled === "function") {
                functions.unhandled.apply();
            }
        }
    };
    Foundation.Keyboard.handleKey = handleKey;
    var findFocusable = function($element) {
        return $element.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function() {
            if (!$(this).is(":visible") || $(this).attr("tabindex") < 0) {
                return false;
            }
            return true;
        });
    };
    Foundation.Keyboard.findFocusable = findFocusable;
    var register = function(componentName, cmds) {
        commands[componentName] = cmds;
    };
    Foundation.Keyboard.register = register;
}(jQuery, window.Foundation);

!function($, Foundation) {
    var defaultQueries = {
        "default": "only screen",
        landscape: "only screen and (orientation: landscape)",
        portrait: "only screen and (orientation: portrait)",
        retina: "only screen and (-webkit-min-device-pixel-ratio: 2)," + "only screen and (min--moz-device-pixel-ratio: 2)," + "only screen and (-o-min-device-pixel-ratio: 2/1)," + "only screen and (min-device-pixel-ratio: 2)," + "only screen and (min-resolution: 192dpi)," + "only screen and (min-resolution: 2dppx)"
    };
    var MediaQuery = {
        queries: [],
        current: "",
        atLeast: function(size) {
            var query = this.get(size);
            if (query) {
                return window.matchMedia(query).matches;
            }
            return false;
        },
        get: function(size) {
            for (var i in this.queries) {
                var query = this.queries[i];
                if (size === query.name) return query.value;
            }
            return null;
        },
        _init: function() {
            var self = this;
            var extractedStyles = $(".foundation-mq").css("font-family");
            var namedQueries;
            namedQueries = parseStyleToObject(extractedStyles);
            for (var key in namedQueries) {
                self.queries.push({
                    name: key,
                    value: "only screen and (min-width: " + namedQueries[key] + ")"
                });
            }
            this.current = this._getCurrentSize();
            this._watcher();
        },
        _getCurrentSize: function() {
            var matched;
            for (var i in this.queries) {
                var query = this.queries[i];
                if (window.matchMedia(query.value).matches) {
                    matched = query;
                }
            }
            if (typeof matched === "object") {
                return matched.name;
            } else {
                return matched;
            }
        },
        _watcher: function() {
            var _this = this;
            $(window).on("resize.zf.mediaquery", function() {
                var newSize = _this._getCurrentSize();
                if (newSize !== _this.current) {
                    $(window).trigger("changed.zf.mediaquery", [ newSize, _this.current ]);
                    _this.current = newSize;
                }
            });
        }
    };
    Foundation.MediaQuery = MediaQuery;
    window.matchMedia || (window.matchMedia = function() {
        "use strict";
        var styleMedia = window.styleMedia || window.media;
        if (!styleMedia) {
            var style = document.createElement("style"), script = document.getElementsByTagName("script")[0], info = null;
            style.type = "text/css";
            style.id = "matchmediajs-test";
            script.parentNode.insertBefore(style, script);
            info = "getComputedStyle" in window && window.getComputedStyle(style, null) || style.currentStyle;
            styleMedia = {
                matchMedium: function(media) {
                    var text = "@media " + media + "{ #matchmediajs-test { width: 1px; } }";
                    if (style.styleSheet) {
                        style.styleSheet.cssText = text;
                    } else {
                        style.textContent = text;
                    }
                    return info.width === "1px";
                }
            };
        }
        return function(media) {
            return {
                matches: styleMedia.matchMedium(media || "all"),
                media: media || "all"
            };
        };
    }());
    function parseStyleToObject(str) {
        var styleObject = {};
        if (typeof str !== "string") {
            return styleObject;
        }
        str = str.trim().slice(1, -1);
        if (!str) {
            return styleObject;
        }
        styleObject = str.split("&").reduce(function(ret, param) {
            var parts = param.replace(/\+/g, " ").split("=");
            var key = parts[0];
            var val = parts[1];
            key = decodeURIComponent(key);
            val = val === undefined ? null : decodeURIComponent(val);
            if (!ret.hasOwnProperty(key)) {
                ret[key] = val;
            } else if (Array.isArray(ret[key])) {
                ret[key].push(val);
            } else {
                ret[key] = [ ret[key], val ];
            }
            return ret;
        }, {});
        return styleObject;
    }
}(jQuery, Foundation);

!function($, Foundation) {
    var initClasses = [ "mui-enter", "mui-leave" ];
    var activeClasses = [ "mui-enter-active", "mui-leave-active" ];
    function animate(isIn, element, animation, cb) {
        element = $(element).eq(0);
        if (!element.length) return;
        var initClass = isIn ? initClasses[0] : initClasses[1];
        var activeClass = isIn ? activeClasses[0] : activeClasses[1];
        reset();
        element.addClass(animation).css("transition", "none");
        requestAnimationFrame(function() {
            element.addClass(initClass);
            if (isIn) element.show();
        });
        requestAnimationFrame(function() {
            element[0].offsetWidth;
            element.css("transition", "");
            element.addClass(activeClass);
        });
        element.one(Foundation.transitionend(element), finish);
        function finish() {
            if (!isIn) element.hide();
            reset();
            if (cb) cb.apply(element);
        }
        function reset() {
            element[0].style.transitionDuration = 0;
            element.removeClass(initClass + " " + activeClass + " " + animation);
        }
    }
    var Motion = {
        animateIn: function(element, animation, cb) {
            animate(true, element, animation, cb);
        },
        animateOut: function(element, animation, cb) {
            animate(false, element, animation, cb);
        }
    };
    var Move = function(duration, elem, fn) {
        var anim, prog, start = null;
        function move(ts) {
            if (!start) start = window.performance.now();
            prog = ts - start;
            fn.apply(elem);
            if (prog < duration) {
                anim = window.requestAnimationFrame(move, elem);
            } else {
                window.cancelAnimationFrame(anim);
                elem.trigger("finished.zf.animate", [ elem ]).triggerHandler("finished.zf.animate", [ elem ]);
            }
        }
        anim = window.requestAnimationFrame(move);
    };
    Foundation.Move = Move;
    Foundation.Motion = Motion;
}(jQuery, Foundation);

!function($, Foundation) {
    "use strict";
    Foundation.Nest = {
        Feather: function(menu, type) {
            menu.attr("role", "menubar");
            type = type || "zf";
            var items = menu.find("li").attr({
                role: "menuitem"
            }), subMenuClass = "is-" + type + "-submenu", subItemClass = subMenuClass + "-item", hasSubClass = "is-" + type + "-submenu-parent";
            menu.find("a:first").attr("tabindex", 0);
            items.each(function() {
                var $item = $(this), $sub = $item.children("ul");
                if ($sub.length) {
                    $item.addClass("has-submenu " + hasSubClass).attr({
                        "aria-haspopup": true,
                        "aria-selected": false,
                        "aria-expanded": false,
                        "aria-label": $item.children("a:first").text()
                    });
                    $sub.addClass("submenu " + subMenuClass).attr({
                        "data-submenu": "",
                        "aria-hidden": true,
                        role: "menu"
                    });
                }
                if ($item.parent("[data-submenu]").length) {
                    $item.addClass("is-submenu-item " + subItemClass);
                }
            });
            return;
        },
        Burn: function(menu, type) {
            var items = menu.find("li").removeAttr("tabindex"), subMenuClass = "is-" + type + "-submenu", subItemClass = subMenuClass + "-item", hasSubClass = "is-" + type + "-submenu-parent";
            menu.find("*").removeClass(subMenuClass + " " + subItemClass + " " + hasSubClass + " has-submenu is-submenu-item submenu is-active").removeAttr("data-submenu").css("display", "");
        }
    };
}(jQuery, window.Foundation);

!function($, Foundation) {
    "use strict";
    var Timer = function(elem, options, cb) {
        var _this = this, duration = options.duration, nameSpace = Object.keys(elem.data())[0] || "timer", remain = -1, start, timer;
        this.restart = function() {
            remain = -1;
            clearTimeout(timer);
            this.start();
        };
        this.start = function() {
            clearTimeout(timer);
            remain = remain <= 0 ? duration : remain;
            elem.data("paused", false);
            start = Date.now();
            timer = setTimeout(function() {
                if (options.infinite) {
                    _this.restart();
                }
                cb();
            }, remain);
            elem.trigger("timerstart.zf." + nameSpace);
        };
        this.pause = function() {
            clearTimeout(timer);
            elem.data("paused", true);
            var end = Date.now();
            remain = remain - (end - start);
            elem.trigger("timerpaused.zf." + nameSpace);
        };
    };
    var onImagesLoaded = function(images, callback) {
        var self = this, unloaded = images.length;
        if (unloaded === 0) {
            callback();
        }
        var singleImageLoaded = function() {
            unloaded--;
            if (unloaded === 0) {
                callback();
            }
        };
        images.each(function() {
            if (this.complete) {
                singleImageLoaded();
            } else if (typeof this.naturalWidth !== "undefined" && this.naturalWidth > 0) {
                singleImageLoaded();
            } else {
                $(this).one("load", function() {
                    singleImageLoaded();
                });
            }
        });
    };
    Foundation.Timer = Timer;
    Foundation.onImagesLoaded = onImagesLoaded;
}(jQuery, window.Foundation);

(function($) {
    $.spotSwipe = {
        version: "1.0.0",
        enabled: "ontouchstart" in document.documentElement,
        preventDefault: false,
        moveThreshold: 75,
        timeThreshold: 200
    };
    var startPosX, startPosY, startTime, elapsedTime, isMoving = false;
    function onTouchEnd() {
        this.removeEventListener("touchmove", onTouchMove);
        this.removeEventListener("touchend", onTouchEnd);
        isMoving = false;
    }
    function onTouchMove(e) {
        if ($.spotSwipe.preventDefault) {
            e.preventDefault();
        }
        if (isMoving) {
            var x = e.touches[0].pageX;
            var y = e.touches[0].pageY;
            var dx = startPosX - x;
            var dy = startPosY - y;
            var dir;
            elapsedTime = new Date().getTime() - startTime;
            if (Math.abs(dx) >= $.spotSwipe.moveThreshold && elapsedTime <= $.spotSwipe.timeThreshold) {
                dir = dx > 0 ? "left" : "right";
            }
            if (dir) {
                e.preventDefault();
                onTouchEnd.call(this);
                $(this).trigger("swipe", dir).trigger("swipe" + dir);
            }
        }
    }
    function onTouchStart(e) {
        if (e.touches.length == 1) {
            startPosX = e.touches[0].pageX;
            startPosY = e.touches[0].pageY;
            isMoving = true;
            startTime = new Date().getTime();
            this.addEventListener("touchmove", onTouchMove, false);
            this.addEventListener("touchend", onTouchEnd, false);
        }
    }
    function init() {
        this.addEventListener && this.addEventListener("touchstart", onTouchStart, false);
    }
    function teardown() {
        this.removeEventListener("touchstart", onTouchStart);
    }
    $.event.special.swipe = {
        setup: init
    };
    $.each([ "left", "up", "down", "right" ], function() {
        $.event.special["swipe" + this] = {
            setup: function() {
                $(this).on("swipe", $.noop);
            }
        };
    });
})(jQuery);

!function($) {
    $.fn.addTouch = function() {
        this.each(function(i, el) {
            $(el).bind("touchstart touchmove touchend touchcancel", function() {
                handleTouch(event);
            });
        });
        var handleTouch = function(event) {
            var touches = event.changedTouches, first = touches[0], eventTypes = {
                touchstart: "mousedown",
                touchmove: "mousemove",
                touchend: "mouseup"
            }, type = eventTypes[event.type];
            var simulatedEvent = document.createEvent("MouseEvent");
            simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0, null);
            first.target.dispatchEvent(simulatedEvent);
        };
    };
}(jQuery);

!function(Foundation, $) {
    "use strict";
    $(document).on("click.zf.trigger", "[data-open]", function() {
        var id = $(this).data("open");
        $("#" + id).triggerHandler("open.zf.trigger", [ $(this) ]);
    });
    $(document).on("click.zf.trigger", "[data-close]", function() {
        var id = $(this).data("close");
        if (id) {
            $("#" + id).triggerHandler("close.zf.trigger", [ $(this) ]);
        } else {
            $(this).trigger("close.zf.trigger");
        }
    });
    $(document).on("click.zf.trigger", "[data-toggle]", function() {
        var id = $(this).data("toggle");
        $("#" + id).triggerHandler("toggle.zf.trigger", [ $(this) ]);
    });
    $(document).on("close.zf.trigger", "[data-closable]", function() {
        var animation = $(this).data("closable") || "fade-out";
        if (Foundation.Motion) {
            Foundation.Motion.animateOut($(this), animation, function() {
                $(this).trigger("closed.zf");
            });
        } else {
            $(this).fadeOut().trigger("closed.zf");
        }
    });
    var MutationObserver = function() {
        var prefixes = [ "WebKit", "Moz", "O", "Ms", "" ];
        for (var i = 0; i < prefixes.length; i++) {
            if (prefixes[i] + "MutationObserver" in window) {
                return window[prefixes[i] + "MutationObserver"];
            }
        }
        return false;
    }();
    var checkListeners = function() {
        eventsListener();
        resizeListener();
        scrollListener();
        closemeListener();
    };
    $(window).load(function() {
        checkListeners();
    });
    var closemeListener = function(pluginName) {
        var yetiBoxes = $("[data-yeti-box]"), plugNames = [ "dropdown", "tooltip", "reveal" ];
        if (pluginName) {
            if (typeof pluginName === "string") {
                plugNames.push(pluginName);
            } else if (typeof pluginName === "object" && typeof pluginName[0] === "string") {
                plugNames.concat(pluginName);
            } else {
                console.error("Plugin names must be strings");
            }
        }
        if (yetiBoxes.length) {
            var listeners = plugNames.map(function(name) {
                return "closeme.zf." + name;
            }).join(" ");
            $(window).off(listeners).on(listeners, function(e, pluginId) {
                var plugin = e.namespace.split(".")[0];
                var plugins = $("[data-" + plugin + "]").not('[data-yeti-box="' + pluginId + '"]');
                plugins.each(function() {
                    var _this = $(this);
                    _this.triggerHandler("close.zf.trigger", [ _this ]);
                });
            });
        }
    };
    var resizeListener = function(debounce) {
        var timer, $nodes = $("[data-resize]");
        if ($nodes.length) {
            $(window).off("resize.zf.trigger").on("resize.zf.trigger", function(e) {
                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(function() {
                    if (!MutationObserver) {
                        $nodes.each(function() {
                            $(this).triggerHandler("resizeme.zf.trigger");
                        });
                    }
                    $nodes.attr("data-events", "resize");
                }, debounce || 10);
            });
        }
    };
    var scrollListener = function(debounce) {
        var timer, $nodes = $("[data-scroll]");
        if ($nodes.length) {
            $(window).off("scroll.zf.trigger").on("scroll.zf.trigger", function(e) {
                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(function() {
                    if (!MutationObserver) {
                        $nodes.each(function() {
                            $(this).triggerHandler("scrollme.zf.trigger");
                        });
                    }
                    $nodes.attr("data-events", "scroll");
                }, debounce || 10);
            });
        }
    };
    var eventsListener = function() {
        if (!MutationObserver) {
            return false;
        }
        var nodes = document.querySelectorAll("[data-resize], [data-scroll], [data-mutate]");
        var listeningElementsMutation = function(mutationRecordsList) {
            var $target = $(mutationRecordsList[0].target);
            switch ($target.attr("data-events")) {
              case "resize":
                $target.triggerHandler("resizeme.zf.trigger", [ $target ]);
                break;

              case "scroll":
                $target.triggerHandler("scrollme.zf.trigger", [ $target, window.pageYOffset ]);
                break;

              default:
                return false;
            }
        };
        if (nodes.length) {
            for (var i = 0; i <= nodes.length - 1; i++) {
                var elementObserver = new MutationObserver(listeningElementsMutation);
                elementObserver.observe(nodes[i], {
                    attributes: true,
                    childList: false,
                    characterData: false,
                    subtree: false,
                    attributeFilter: [ "data-events" ]
                });
            }
        }
    };
    Foundation.IHearYou = checkListeners;
}(window.Foundation, window.jQuery);

!function(Foundation, $) {
    "use strict";
    function Abide(element, options) {
        this.$element = element;
        this.options = $.extend({}, Abide.defaults, this.$element.data(), options);
        this._init();
        Foundation.registerPlugin(this, "Abide");
    }
    Abide.defaults = {
        validateOn: "fieldChange",
        labelErrorClass: "is-invalid-label",
        inputErrorClass: "is-invalid-input",
        formErrorSelector: ".form-error",
        formErrorClass: "is-visible",
        liveValidate: false,
        patterns: {
            alpha: /^[a-zA-Z]+$/,
            alpha_numeric: /^[a-zA-Z0-9]+$/,
            integer: /^[-+]?\d+$/,
            number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
            card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
            cvv: /^([0-9]){3,4}$/,
            email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
            url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
            domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
            datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
            date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
            time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
            dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
            month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
            day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
            color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
        },
        validators: {
            equalTo: function(el, required, parent) {
                return $("#" + el.attr("data-equalto")).val() === el.val();
            }
        }
    };
    Abide.prototype._init = function() {
        this.$inputs = this.$element.find("input, textarea, select").not("[data-abide-ignore]");
        this._events();
    };
    Abide.prototype._events = function() {
        var _this = this;
        this.$element.off(".abide").on("reset.zf.abide", function(e) {
            _this.resetForm();
        }).on("submit.zf.abide", function(e) {
            return _this.validateForm();
        });
        if (this.options.validateOn === "fieldChange") {
            this.$inputs.off("change.zf.abide").on("change.zf.abide", function(e) {
                _this.validateInput($(this));
            });
        }
        if (this.options.liveValidate) {
            this.$inputs.off("input.zf.abide").on("input.zf.abide", function(e) {
                _this.validateInput($(this));
            });
        }
    }, Abide.prototype._reflow = function() {
        this._init();
    };
    Abide.prototype.requiredCheck = function($el) {
        if (!$el.attr("required")) return true;
        var isGood = true;
        switch ($el[0].type) {
          case "checkbox":
          case "radio":
            isGood = $el[0].checked;
            break;

          case "select":
          case "select-one":
          case "select-multiple":
            var opt = $el.find("option:selected");
            if (!opt.length || !opt.val()) isGood = false;
            break;

          default:
            if (!$el.val() || !$el.val().length) isGood = false;
        }
        return isGood;
    };
    Abide.prototype.findFormError = function($el) {
        var $error = $el.siblings(this.options.formErrorSelector);
        if (!$error.length) {
            $error = $el.parent().find(this.options.formErrorSelector);
        }
        return $error;
    };
    Abide.prototype.findLabel = function($el) {
        var $label = this.$element.find('label[for="' + $el[0].id + '"]');
        if (!$label.length) {
            return $el.closest("label");
        }
        return $label;
    };
    Abide.prototype.addErrorClasses = function($el) {
        var $label = this.findLabel($el), $formError = this.findFormError($el);
        if ($label.length) {
            $label.addClass(this.options.labelErrorClass);
        }
        if ($formError.length) {
            $formError.addClass(this.options.formErrorClass);
        }
        $el.addClass(this.options.inputErrorClass).attr("data-invalid", "");
    };
    Abide.prototype.removeErrorClasses = function($el) {
        var $label = this.findLabel($el), $formError = this.findFormError($el);
        if ($label.length) {
            $label.removeClass(this.options.labelErrorClass);
        }
        if ($formError.length) {
            $formError.removeClass(this.options.formErrorClass);
        }
        $el.removeClass(this.options.inputErrorClass).removeAttr("data-invalid");
    };
    Abide.prototype.validateInput = function($el) {
        var clearRequire = this.requiredCheck($el), validated = false, customValidator = true, validator = $el.attr("data-validator"), equalTo = true;
        switch ($el[0].type) {
          case "radio":
            validated = this.validateRadio($el.attr("name"));
            break;

          case "checkbox":
            validated = clearRequire;
            break;

          case "select":
          case "select-one":
          case "select-multiple":
            validated = clearRequire;
            break;

          default:
            validated = this.validateText($el);
        }
        if (validator) {
            customValidator = this.matchValidation($el, validator, $el.attr("required"));
        }
        if ($el.attr("data-equalto")) {
            equalTo = this.options.validators.equalTo($el);
        }
        var goodToGo = [ clearRequire, validated, customValidator, equalTo ].indexOf(false) === -1, message = (goodToGo ? "valid" : "invalid") + ".zf.abide";
        this[goodToGo ? "removeErrorClasses" : "addErrorClasses"]($el);
        $el.trigger(message, $el[0]);
        return goodToGo;
    };
    Abide.prototype.validateForm = function() {
        var acc = [], _this = this;
        this.$inputs.each(function() {
            acc.push(_this.validateInput($(this)));
        });
        var noError = acc.indexOf(false) === -1;
        this.$element.find("[data-abide-error]").css("display", noError ? "none" : "block");
        this.$element.trigger((noError ? "formvalid" : "forminvalid") + ".zf.abide", [ this.$element ]);
        return noError;
    };
    Abide.prototype.validateText = function($el, pattern) {
        pattern = pattern || $el.attr("pattern") || $el.attr("type");
        var inputText = $el.val();
        return inputText.length ? this.options.patterns.hasOwnProperty(pattern) ? this.options.patterns[pattern].test(inputText) : pattern && pattern !== $el.attr("type") ? new RegExp(pattern).test(inputText) : true : true;
    };
    Abide.prototype.validateRadio = function(groupName) {
        var $group = this.$element.find(':radio[name="' + groupName + '"]'), counter = [], _this = this;
        $group.each(function() {
            var rdio = $(this), clear = _this.requiredCheck(rdio);
            counter.push(clear);
            if (clear) _this.removeErrorClasses(rdio);
        });
        return counter.indexOf(false) === -1;
    };
    Abide.prototype.matchValidation = function($el, validators, required) {
        var _this = this;
        required = required ? true : false;
        var clear = validators.split(" ").map(function(v) {
            return _this.options.validators[v]($el, required, $el.parent());
        });
        return clear.indexOf(false) === -1;
    };
    Abide.prototype.resetForm = function() {
        var $form = this.$element, opts = this.options;
        $("." + opts.labelErrorClass, $form).not("small").removeClass(opts.labelErrorClass);
        $("." + opts.inputErrorClass, $form).not("small").removeClass(opts.inputErrorClass);
        $(opts.formErrorSelector + "." + opts.formErrorClass).removeClass(opts.formErrorClass);
        $form.find("[data-abide-error]").css("display", "none");
        $(":input", $form).not(":button, :submit, :reset, :hidden, [data-abide-ignore]").val("").removeAttr("data-invalid");
        $form.trigger("formreset.zf.abide", [ $form ]);
    };
    Abide.prototype.destroy = function() {
        var _this = this;
        this.$element.off(".abide").find("[data-abide-error]").css("display", "none");
        this.$inputs.off(".abide").each(function() {
            _this.removeErrorClasses($(this));
        });
        Foundation.unregisterPlugin(this);
    };
    Foundation.plugin(Abide, "Abide");
    if (typeof module !== "undefined" && typeof module.exports !== "undefined") module.exports = Abide;
    if (typeof define === "function") define([ "foundation" ], function() {
        return Abide;
    });
}(Foundation, jQuery);

!function($, Foundation) {
    "use strict";
    function Accordion(element, options) {
        this.$element = element;
        this.options = $.extend({}, Accordion.defaults, this.$element.data(), options);
        this._init();
        Foundation.registerPlugin(this, "Accordion");
        Foundation.Keyboard.register("Accordion", {
            ENTER: "toggle",
            SPACE: "toggle",
            ARROW_DOWN: "next",
            ARROW_UP: "previous"
        });
    }
    Accordion.defaults = {
        slideSpeed: 250,
        multiExpand: false,
        allowAllClosed: false
    };
    Accordion.prototype._init = function() {
        this.$element.attr("role", "tablist");
        this.$tabs = this.$element.children("li");
        if (this.$tabs.length == 0) {
            this.$tabs = this.$element.children("[data-accordion-item]");
        }
        this.$tabs.each(function(idx, el) {
            var $el = $(el), $content = $el.find("[data-tab-content]"), id = $content[0].id || Foundation.GetYoDigits(6, "accordion"), linkId = el.id || id + "-label";
            $el.find("a:first").attr({
                "aria-controls": id,
                role: "tab",
                id: linkId,
                "aria-expanded": false,
                "aria-selected": false
            });
            $content.attr({
                role: "tabpanel",
                "aria-labelledby": linkId,
                "aria-hidden": true,
                id: id
            });
        });
        var $initActive = this.$element.find(".is-active").children("[data-tab-content]");
        if ($initActive.length) {
            this.down($initActive, true);
        }
        this._events();
    };
    Accordion.prototype._events = function() {
        var _this = this;
        this.$tabs.each(function() {
            var $elem = $(this);
            var $tabContent = $elem.children("[data-tab-content]");
            if ($tabContent.length) {
                $elem.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion", function(e) {
                    e.preventDefault();
                    if ($elem.hasClass("is-active")) {
                        if (_this.options.allowAllClosed || $elem.siblings().hasClass("is-active")) {
                            _this.up($tabContent);
                        }
                    } else {
                        _this.down($tabContent);
                    }
                }).on("keydown.zf.accordion", function(e) {
                    Foundation.Keyboard.handleKey(e, "Accordion", {
                        toggle: function() {
                            _this.toggle($tabContent);
                        },
                        next: function() {
                            $elem.next().find("a").focus().trigger("click.zf.accordion");
                        },
                        previous: function() {
                            $elem.prev().find("a").focus().trigger("click.zf.accordion");
                        },
                        handled: function() {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    });
                });
            }
        });
    };
    Accordion.prototype.toggle = function($target) {
        if ($target.parent().hasClass("is-active")) {
            if (this.options.allowAllClosed || $target.parent().siblings().hasClass("is-active")) {
                this.up($target);
            } else {
                return;
            }
        } else {
            this.down($target);
        }
    };
    Accordion.prototype.down = function($target, firstTime) {
        var _this = this;
        if (!this.options.multiExpand && !firstTime) {
            var $currentActive = this.$element.find(".is-active").children("[data-tab-content]");
            if ($currentActive.length) {
                this.up($currentActive);
            }
        }
        $target.attr("aria-hidden", false).parent("[data-tab-content]").addBack().parent().addClass("is-active");
        $target.slideDown(_this.options.slideSpeed);
        $("#" + $target.attr("aria-labelledby")).attr({
            "aria-expanded": true,
            "aria-selected": true
        });
        this.$element.trigger("down.zf.accordion", [ $target ]);
    };
    Accordion.prototype.up = function($target) {
        var $aunts = $target.parent().siblings(), _this = this;
        var canClose = this.options.multiExpand ? $aunts.hasClass("is-active") : $target.parent().hasClass("is-active");
        if (!this.options.allowAllClosed && !canClose) {
            return;
        }
        $target.slideUp(_this.options.slideSpeed);
        $target.attr("aria-hidden", true).parent().removeClass("is-active");
        $("#" + $target.attr("aria-labelledby")).attr({
            "aria-expanded": false,
            "aria-selected": false
        });
        this.$element.trigger("up.zf.accordion", [ $target ]);
    };
    Accordion.prototype.destroy = function() {
        this.$element.find("[data-tab-content]").slideUp(0).css("display", "");
        this.$element.find("a").off(".zf.accordion");
        Foundation.unregisterPlugin(this);
    };
    Foundation.plugin(Accordion, "Accordion");
}(jQuery, window.Foundation);

!function($) {
    "use strict";
    function AccordionMenu(element, options) {
        this.$element = element;
        this.options = $.extend({}, AccordionMenu.defaults, this.$element.data(), options);
        Foundation.Nest.Feather(this.$element, "accordion");
        this._init();
        Foundation.registerPlugin(this, "AccordionMenu");
        Foundation.Keyboard.register("AccordionMenu", {
            ENTER: "toggle",
            SPACE: "toggle",
            ARROW_RIGHT: "open",
            ARROW_UP: "up",
            ARROW_DOWN: "down",
            ARROW_LEFT: "close",
            ESCAPE: "closeAll",
            TAB: "down",
            SHIFT_TAB: "up"
        });
    }
    AccordionMenu.defaults = {
        slideSpeed: 250,
        multiOpen: true
    };
    AccordionMenu.prototype._init = function() {
        this.$element.find("[data-submenu]").not(".is-active").slideUp(0);
        this.$element.attr({
            role: "tablist",
            "aria-multiselectable": this.options.multiOpen
        });
        this.$menuLinks = this.$element.find(".has-submenu");
        this.$menuLinks.each(function() {
            var linkId = this.id || Foundation.GetYoDigits(6, "acc-menu-link"), $elem = $(this), $sub = $elem.children("[data-submenu]"), subId = $sub[0].id || Foundation.GetYoDigits(6, "acc-menu"), isActive = $sub.hasClass("is-active");
            $elem.attr({
                "aria-controls": subId,
                "aria-expanded": isActive,
                "aria-selected": false,
                role: "tab",
                id: linkId
            });
            $sub.attr({
                "aria-labelledby": linkId,
                "aria-hidden": !isActive,
                role: "tabpanel",
                id: subId
            });
        });
        var initPanes = this.$element.find(".is-active");
        if (initPanes.length) {
            var _this = this;
            initPanes.each(function() {
                _this.down($(this));
            });
        }
        this._events();
    };
    AccordionMenu.prototype._events = function() {
        var _this = this;
        this.$element.find("li").each(function() {
            var $submenu = $(this).children("[data-submenu]");
            if ($submenu.length) {
                $(this).children("a").off("click.zf.accordionmenu").on("click.zf.accordionmenu", function(e) {
                    e.preventDefault();
                    _this.toggle($submenu);
                });
            }
        }).on("keydown.zf.accordionmenu", function(e) {
            var $element = $(this), $elements = $element.parent("ul").children("li"), $prevElement, $nextElement, $target = $element.children("[data-submenu]");
            $elements.each(function(i) {
                if ($(this).is($element)) {
                    $prevElement = $elements.eq(Math.max(0, i - 1));
                    $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1));
                    if ($(this).children("[data-submenu]:visible").length) {
                        $nextElement = $element.find("li:first-child");
                    }
                    if ($(this).is(":first-child")) {
                        $prevElement = $element.parents("li").first();
                    } else if ($prevElement.children("[data-submenu]:visible").length) {
                        $prevElement = $prevElement.find("li:last-child");
                    }
                    if ($(this).is(":last-child")) {
                        $nextElement = $element.parents("li").first().next("li");
                    }
                    return;
                }
            });
            Foundation.Keyboard.handleKey(e, "AccordionMenu", {
                open: function() {
                    if ($target.is(":hidden")) {
                        _this.down($target);
                        $target.find("li").first().focus();
                    }
                },
                close: function() {
                    if ($target.length && !$target.is(":hidden")) {
                        _this.up($target);
                    } else if ($element.parent("[data-submenu]").length) {
                        _this.up($element.parent("[data-submenu]"));
                        $element.parents("li").first().focus();
                    }
                },
                up: function() {
                    $prevElement.focus();
                },
                down: function() {
                    $nextElement.focus();
                },
                toggle: function() {
                    if ($element.children("[data-submenu]").length) {
                        _this.toggle($element.children("[data-submenu]"));
                    }
                },
                closeAll: function() {
                    _this.hideAll();
                },
                handled: function() {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                }
            });
        });
    };
    AccordionMenu.prototype.hideAll = function() {
        this.$element.find("[data-submenu]").slideUp(this.options.slideSpeed);
    };
    AccordionMenu.prototype.toggle = function($target) {
        if (!$target.is(":animated")) {
            if (!$target.is(":hidden")) {
                this.up($target);
            } else {
                this.down($target);
            }
        }
    };
    AccordionMenu.prototype.down = function($target) {
        var _this = this;
        if (!this.options.multiOpen) {
            this.up(this.$element.find(".is-active").not($target.parentsUntil(this.$element).add($target)));
        }
        $target.addClass("is-active").attr({
            "aria-hidden": false
        }).parent(".has-submenu").attr({
            "aria-expanded": true,
            "aria-selected": true
        });
        Foundation.Move(this.options.slideSpeed, $target, function() {
            $target.slideDown(_this.options.slideSpeed);
        });
        this.$element.trigger("down.zf.accordionMenu", [ $target ]);
    };
    AccordionMenu.prototype.up = function($target) {
        var _this = this;
        Foundation.Move(this.options.slideSpeed, $target, function() {
            $target.slideUp(_this.options.slideSpeed);
        });
        $target.attr("aria-hidden", true).find("[data-submenu]").slideUp(0).attr("aria-hidden", true).end().parent(".has-submenu").attr({
            "aria-expanded": false,
            "aria-selected": false
        });
        this.$element.trigger("up.zf.accordionMenu", [ $target ]);
    };
    AccordionMenu.prototype.destroy = function() {
        this.$element.find("[data-submenu]").slideDown(0).css("display", "");
        this.$element.find("a").off("click.zf.accordionMenu");
        Foundation.Nest.Burn(this.$element, "accordion");
        Foundation.unregisterPlugin(this);
    };
    Foundation.plugin(AccordionMenu, "AccordionMenu");
}(jQuery, window.Foundation);

!function($, Foundation) {
    "use strict";
    function Drilldown(element, options) {
        this.$element = element;
        this.options = $.extend({}, Drilldown.defaults, this.$element.data(), options);
        Foundation.Nest.Feather(this.$element, "drilldown");
        this._init();
        Foundation.registerPlugin(this, "Drilldown");
        Foundation.Keyboard.register("Drilldown", {
            ENTER: "open",
            SPACE: "open",
            ARROW_RIGHT: "next",
            ARROW_UP: "up",
            ARROW_DOWN: "down",
            ARROW_LEFT: "previous",
            ESCAPE: "close",
            TAB: "down",
            SHIFT_TAB: "up"
        });
    }
    Drilldown.defaults = {
        backButton: '<li class="js-drilldown-back"><a>Back</a></li>',
        wrapper: "<div></div>",
        closeOnClick: false
    };
    Drilldown.prototype._init = function() {
        this.$submenuAnchors = this.$element.find("li.has-submenu");
        this.$submenus = this.$submenuAnchors.children("[data-submenu]");
        this.$menuItems = this.$element.find("li").not(".js-drilldown-back").attr("role", "menuitem");
        this._prepareMenu();
        this._keyboardEvents();
    };
    Drilldown.prototype._prepareMenu = function() {
        var _this = this;
        this.$submenuAnchors.each(function() {
            var $sub = $(this);
            var $link = $sub.find("a:first");
            $link.data("savedHref", $link.attr("href")).removeAttr("href");
            $sub.children("[data-submenu]").attr({
                "aria-hidden": true,
                tabindex: 0,
                role: "menu"
            });
            _this._events($sub);
        });
        this.$submenus.each(function() {
            var $menu = $(this), $back = $menu.find(".js-drilldown-back");
            if (!$back.length) {
                $menu.prepend(_this.options.backButton);
            }
            _this._back($menu);
        });
        if (!this.$element.parent().hasClass("is-drilldown")) {
            this.$wrapper = $(this.options.wrapper).addClass("is-drilldown").css(this._getMaxDims());
            this.$element.wrap(this.$wrapper);
        }
    };
    Drilldown.prototype._events = function($elem) {
        var _this = this;
        $elem.off("click.zf.drilldown").on("click.zf.drilldown", function(e) {
            if ($(e.target).parentsUntil("ul", "li").hasClass("is-drilldown-submenu-parent")) {
                e.stopImmediatePropagation();
                e.preventDefault();
            }
            _this._show($elem);
            if (_this.options.closeOnClick) {
                var $body = $("body").not(_this.$wrapper);
                $body.off(".zf.drilldown").on("click.zf.drilldown", function(e) {
                    e.preventDefault();
                    _this._hideAll();
                    $body.off(".zf.drilldown");
                });
            }
        });
    };
    Drilldown.prototype._keyboardEvents = function() {
        var _this = this;
        this.$menuItems.add(this.$element.find(".js-drilldown-back")).on("keydown.zf.drilldown", function(e) {
            var $element = $(this), $elements = $element.parent("ul").children("li"), $prevElement, $nextElement;
            $elements.each(function(i) {
                if ($(this).is($element)) {
                    $prevElement = $elements.eq(Math.max(0, i - 1));
                    $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1));
                    return;
                }
            });
            Foundation.Keyboard.handleKey(e, "Drilldown", {
                next: function() {
                    if ($element.is(_this.$submenuAnchors)) {
                        _this._show($element);
                        $element.on(Foundation.transitionend($element), function() {
                            $element.find("ul li").filter(_this.$menuItems).first().focus();
                        });
                    }
                },
                previous: function() {
                    _this._hide($element.parent("ul"));
                    $element.parent("ul").on(Foundation.transitionend($element), function() {
                        setTimeout(function() {
                            $element.parent("ul").parent("li").focus();
                        }, 1);
                    });
                },
                up: function() {
                    $prevElement.focus();
                },
                down: function() {
                    $nextElement.focus();
                },
                close: function() {
                    _this._back();
                },
                open: function() {
                    if (!$element.is(_this.$menuItems)) {
                        _this._hide($element.parent("ul"));
                        setTimeout(function() {
                            $element.parent("ul").parent("li").focus();
                        }, 1);
                    } else if ($element.is(_this.$submenuAnchors)) {
                        _this._show($element);
                        setTimeout(function() {
                            $element.find("ul li").filter(_this.$menuItems).first().focus();
                        }, 1);
                    }
                },
                handled: function() {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                }
            });
        });
    };
    Drilldown.prototype._hideAll = function() {
        var $elem = this.$element.find(".is-drilldown-sub.is-active").addClass("is-closing");
        $elem.one(Foundation.transitionend($elem), function(e) {
            $elem.removeClass("is-active is-closing");
        });
        this.$element.trigger("closed.zf.drilldown");
    };
    Drilldown.prototype._back = function($elem) {
        var _this = this;
        $elem.off("click.zf.drilldown");
        $elem.children(".js-drilldown-back").on("click.zf.drilldown", function(e) {
            e.stopImmediatePropagation();
            _this._hide($elem);
        });
    };
    Drilldown.prototype._menuLinkEvents = function() {
        var _this = this;
        this.$menuItems.not(".has-submenu").off("click.zf.drilldown").on("click.zf.drilldown", function(e) {
            setTimeout(function() {
                _this._hideAll();
            }, 0);
        });
    };
    Drilldown.prototype._show = function($elem) {
        $elem.children("[data-submenu]").addClass("is-active");
        this.$element.trigger("open.zf.drilldown", [ $elem ]);
    };
    Drilldown.prototype._hide = function($elem) {
        var _this = this;
        $elem.addClass("is-closing").one(Foundation.transitionend($elem), function() {
            $elem.removeClass("is-active is-closing");
        });
        $elem.trigger("hide.zf.drilldown", [ $elem ]);
    };
    Drilldown.prototype._getMaxDims = function() {
        var max = 0, result = {};
        this.$submenus.add(this.$element).each(function() {
            var numOfElems = $(this).children("li").length;
            max = numOfElems > max ? numOfElems : max;
        });
        result.height = max * this.$menuItems[0].getBoundingClientRect().height + "px";
        result.width = this.$element[0].getBoundingClientRect().width + "px";
        return result;
    };
    Drilldown.prototype.destroy = function() {
        this._hideAll();
        Foundation.Nest.Burn(this.$element, "drilldown");
        this.$element.unwrap().find(".js-drilldown-back").remove().end().find(".is-active, .is-closing, .is-drilldown-sub").removeClass("is-active is-closing is-drilldown-sub").end().find("[data-submenu]").removeAttr("aria-hidden tabindex role").off(".zf.drilldown").end().off("zf.drilldown");
        this.$element.find("a").each(function() {
            var $link = $(this);
            if ($link.data("savedHref")) {
                $link.attr("href", $link.data("savedHref")).removeData("savedHref");
            } else {
                return;
            }
        });
        Foundation.unregisterPlugin(this);
    };
    Foundation.plugin(Drilldown, "Drilldown");
}(jQuery, window.Foundation);

!function($, Foundation) {
    "use strict";
    function Dropdown(element, options) {
        this.$element = element;
        this.options = $.extend({}, Dropdown.defaults, this.$element.data(), options);
        this._init();
        Foundation.registerPlugin(this, "Dropdown");
        Foundation.Keyboard.register("Dropdown", {
            ENTER: "open",
            SPACE: "open",
            ESCAPE: "close",
            TAB: "tab_forward",
            SHIFT_TAB: "tab_backward"
        });
    }
    Dropdown.defaults = {
        hoverDelay: 250,
        hover: false,
        hoverPane: false,
        vOffset: 1,
        hOffset: 1,
        positionClass: "",
        trapFocus: false,
        autoFocus: false,
        closeOnClick: false
    };
    Dropdown.prototype._init = function() {
        var $id = this.$element.attr("id");
        this.$anchor = $('[data-toggle="' + $id + '"]') || $('[data-open="' + $id + '"]');
        this.$anchor.attr({
            "aria-controls": $id,
            "data-is-focus": false,
            "data-yeti-box": $id,
            "aria-haspopup": true,
            "aria-expanded": false
        });
        this.options.positionClass = this.getPositionClass();
        this.counter = 4;
        this.usedPositions = [];
        this.$element.attr({
            "aria-hidden": "true",
            "data-yeti-box": $id,
            "data-resize": $id,
            "aria-labelledby": this.$anchor[0].id || Foundation.GetYoDigits(6, "dd-anchor")
        });
        this._events();
    };
    Dropdown.prototype.getPositionClass = function() {
        var position = this.$element[0].className.match(/(top|left|right)/g);
        position = position ? position[0] : "";
        return position;
    };
    Dropdown.prototype._reposition = function(position) {
        this.usedPositions.push(position ? position : "bottom");
        if (!position && this.usedPositions.indexOf("top") < 0) {
            this.$element.addClass("top");
        } else if (position === "top" && this.usedPositions.indexOf("bottom") < 0) {
            this.$element.removeClass(position);
        } else if (position === "left" && this.usedPositions.indexOf("right") < 0) {
            this.$element.removeClass(position).addClass("right");
        } else if (position === "right" && this.usedPositions.indexOf("left") < 0) {
            this.$element.removeClass(position).addClass("left");
        } else if (!position && this.usedPositions.indexOf("top") > -1 && this.usedPositions.indexOf("left") < 0) {
            this.$element.addClass("left");
        } else if (position === "top" && this.usedPositions.indexOf("bottom") > -1 && this.usedPositions.indexOf("left") < 0) {
            this.$element.removeClass(position).addClass("left");
        } else if (position === "left" && this.usedPositions.indexOf("right") > -1 && this.usedPositions.indexOf("bottom") < 0) {
            this.$element.removeClass(position);
        } else if (position === "right" && this.usedPositions.indexOf("left") > -1 && this.usedPositions.indexOf("bottom") < 0) {
            this.$element.removeClass(position);
        } else {
            this.$element.removeClass(position);
        }
        this.classChanged = true;
        this.counter--;
    };
    Dropdown.prototype._setPosition = function() {
        if (this.$anchor.attr("aria-expanded") === "false") {
            return false;
        }
        var position = this.getPositionClass(), $eleDims = Foundation.Box.GetDimensions(this.$element), $anchorDims = Foundation.Box.GetDimensions(this.$anchor), _this = this, direction = position === "left" ? "left" : position === "right" ? "left" : "top", param = direction === "top" ? "height" : "width", offset = param === "height" ? this.options.vOffset : this.options.hOffset;
        if ($eleDims.width >= $eleDims.windowDims.width || !this.counter && !Foundation.Box.ImNotTouchingYou(this.$element)) {
            this.$element.offset(Foundation.Box.GetOffsets(this.$element, this.$anchor, "center bottom", this.options.vOffset, this.options.hOffset, true)).css({
                width: $eleDims.windowDims.width - this.options.hOffset * 2,
                height: "auto"
            });
            this.classChanged = true;
            return false;
        }
        this.$element.offset(Foundation.Box.GetOffsets(this.$element, this.$anchor, position, this.options.vOffset, this.options.hOffset));
        while (!Foundation.Box.ImNotTouchingYou(this.$element) && this.counter) {
            this._reposition(position);
            this._setPosition();
        }
    };
    Dropdown.prototype._events = function() {
        var _this = this;
        this.$element.on({
            "open.zf.trigger": this.open.bind(this),
            "close.zf.trigger": this.close.bind(this),
            "toggle.zf.trigger": this.toggle.bind(this),
            "resizeme.zf.trigger": this._setPosition.bind(this)
        });
        if (this.options.hover) {
            this.$anchor.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function() {
                clearTimeout(_this.timeout);
                _this.timeout = setTimeout(function() {
                    _this.open();
                    _this.$anchor.data("hover", true);
                }, _this.options.hoverDelay);
            }).on("mouseleave.zf.dropdown", function() {
                clearTimeout(_this.timeout);
                _this.timeout = setTimeout(function() {
                    _this.close();
                    _this.$anchor.data("hover", false);
                }, _this.options.hoverDelay);
            });
            if (this.options.hoverPane) {
                this.$element.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function() {
                    clearTimeout(_this.timeout);
                }).on("mouseleave.zf.dropdown", function() {
                    clearTimeout(_this.timeout);
                    _this.timeout = setTimeout(function() {
                        _this.close();
                        _this.$anchor.data("hover", false);
                    }, _this.options.hoverDelay);
                });
            }
        }
        this.$anchor.add(this.$element).on("keydown.zf.dropdown", function(e) {
            var $target = $(this), visibleFocusableElements = Foundation.Keyboard.findFocusable(_this.$element);
            Foundation.Keyboard.handleKey(e, "Dropdown", {
                tab_forward: function() {
                    if (_this.$element.find(":focus").is(visibleFocusableElements.eq(-1))) {
                        if (_this.options.trapFocus) {
                            visibleFocusableElements.eq(0).focus();
                            e.preventDefault();
                        } else {
                            _this.close();
                        }
                    }
                },
                tab_backward: function() {
                    if (_this.$element.find(":focus").is(visibleFocusableElements.eq(0)) || _this.$element.is(":focus")) {
                        if (_this.options.trapFocus) {
                            visibleFocusableElements.eq(-1).focus();
                            e.preventDefault();
                        } else {
                            _this.close();
                        }
                    }
                },
                open: function() {
                    if ($target.is(_this.$anchor)) {
                        _this.open();
                        _this.$element.attr("tabindex", -1).focus();
                        e.preventDefault();
                    }
                },
                close: function() {
                    _this.close();
                    _this.$anchor.focus();
                }
            });
        });
    };
    Dropdown.prototype._addBodyHandler = function() {
        var $body = $(document.body).not(this.$element), _this = this;
        $body.off("click.zf.dropdown").on("click.zf.dropdown", function(e) {
            if (_this.$anchor.is(e.target) || _this.$anchor.find(e.target).length) {
                return;
            }
            if (_this.$element.find(e.target).length) {
                return;
            }
            _this.close();
            $body.off("click.zf.dropdown");
        });
    };
    Dropdown.prototype.open = function() {
        this.$element.trigger("closeme.zf.dropdown", this.$element.attr("id"));
        this.$anchor.addClass("hover").attr({
            "aria-expanded": true
        });
        this._setPosition();
        this.$element.addClass("is-open").attr({
            "aria-hidden": false
        });
        if (this.options.autoFocus) {
            var $focusable = Foundation.Keyboard.findFocusable(this.$element);
            if ($focusable.length) {
                $focusable.eq(0).focus();
            }
        }
        if (this.options.closeOnClick) {
            this._addBodyHandler();
        }
        this.$element.trigger("show.zf.dropdown", [ this.$element ]);
    };
    Dropdown.prototype.close = function() {
        if (!this.$element.hasClass("is-open")) {
            return false;
        }
        this.$element.removeClass("is-open").attr({
            "aria-hidden": true
        });
        this.$anchor.removeClass("hover").attr("aria-expanded", false);
        if (this.classChanged) {
            var curPositionClass = this.getPositionClass();
            if (curPositionClass) {
                this.$element.removeClass(curPositionClass);
            }
            this.$element.addClass(this.options.positionClass).css({
                height: "",
                width: ""
            });
            this.classChanged = false;
            this.counter = 4;
            this.usedPositions.length = 0;
        }
        this.$element.trigger("hide.zf.dropdown", [ this.$element ]);
    };
    Dropdown.prototype.toggle = function() {
        if (this.$element.hasClass("is-open")) {
            if (this.$anchor.data("hover")) return;
            this.close();
        } else {
            this.open();
        }
    };
    Dropdown.prototype.destroy = function() {
        this.$element.off(".zf.trigger").hide();
        this.$anchor.off(".zf.dropdown");
        Foundation.unregisterPlugin(this);
    };
    Foundation.plugin(Dropdown, "Dropdown");
}(jQuery, window.Foundation);

!function($, Foundation) {
    "use strict";
    function DropdownMenu(element, options) {
        this.$element = element;
        this.options = $.extend({}, DropdownMenu.defaults, this.$element.data(), options);
        Foundation.Nest.Feather(this.$element, "dropdown");
        this._init();
        Foundation.registerPlugin(this, "DropdownMenu");
        Foundation.Keyboard.register("DropdownMenu", {
            ENTER: "open",
            SPACE: "open",
            ARROW_RIGHT: "next",
            ARROW_UP: "up",
            ARROW_DOWN: "down",
            ARROW_LEFT: "previous",
            ESCAPE: "close"
        });
    }
    DropdownMenu.defaults = {
        disableHover: false,
        autoclose: true,
        hoverDelay: 50,
        clickOpen: false,
        closingTime: 500,
        alignment: "left",
        closeOnClick: true,
        verticalClass: "vertical",
        rightClass: "align-right",
        forceFollow: true
    };
    DropdownMenu.prototype._init = function() {
        var subs = this.$element.find("li.is-dropdown-submenu-parent");
        this.$element.children(".is-dropdown-submenu-parent").children(".is-dropdown-submenu").addClass("first-sub");
        this.$menuItems = this.$element.find('[role="menuitem"]');
        this.$tabs = this.$element.children('[role="menuitem"]');
        this.isVert = this.$element.hasClass(this.options.verticalClass);
        this.$tabs.find("ul.is-dropdown-submenu").addClass(this.options.verticalClass);
        if (this.$element.hasClass(this.options.rightClass) || this.options.alignment === "right") {
            this.options.alignment = "right";
            subs.addClass("is-left-arrow opens-left");
        } else {
            subs.addClass("is-right-arrow opens-right");
        }
        if (!this.isVert) {
            this.$tabs.filter(".is-dropdown-submenu-parent").removeClass("is-right-arrow is-left-arrow opens-right opens-left").addClass("is-down-arrow");
        }
        this.changed = false;
        this._events();
    };
    DropdownMenu.prototype._events = function() {
        var _this = this, hasTouch = "ontouchstart" in window || typeof window.ontouchstart !== "undefined", parClass = "is-dropdown-submenu-parent", delay;
        if (this.options.clickOpen || hasTouch) {
            this.$menuItems.on("click.zf.dropdownmenu touchstart.zf.dropdownmenu", function(e) {
                var $elem = $(e.target).parentsUntil("ul", "." + parClass), hasSub = $elem.hasClass(parClass), hasClicked = $elem.attr("data-is-click") === "true", $sub = $elem.children(".is-dropdown-submenu");
                if (hasSub) {
                    if (hasClicked) {
                        if (!_this.options.closeOnClick || !_this.options.clickOpen && !hasTouch || _this.options.forceFollow && hasTouch) {
                            return;
                        } else {
                            e.stopImmediatePropagation();
                            e.preventDefault();
                            _this._hide($elem);
                        }
                    } else {
                        e.preventDefault();
                        e.stopImmediatePropagation();
                        _this._show($elem.children(".is-dropdown-submenu"));
                        $elem.add($elem.parentsUntil(_this.$element, "." + parClass)).attr("data-is-click", true);
                    }
                } else {
                    return;
                }
            });
        }
        if (!this.options.disableHover) {
            this.$menuItems.on("mouseenter.zf.dropdownmenu", function(e) {
                e.stopImmediatePropagation();
                var $elem = $(this), hasSub = $elem.hasClass(parClass);
                if (hasSub) {
                    clearTimeout(delay);
                    delay = setTimeout(function() {
                        _this._show($elem.children(".is-dropdown-submenu"));
                    }, _this.options.hoverDelay);
                }
            }).on("mouseleave.zf.dropdownmenu", function(e) {
                var $elem = $(this), hasSub = $elem.hasClass(parClass);
                if (hasSub && _this.options.autoclose) {
                    if ($elem.attr("data-is-click") === "true" && _this.options.clickOpen) {
                        return false;
                    }
                    delay = setTimeout(function() {
                        _this._hide($elem);
                    }, _this.options.closingTime);
                }
            });
        }
        this.$menuItems.on("keydown.zf.dropdownmenu", function(e) {
            var $element = $(e.target).parentsUntil("ul", '[role="menuitem"]'), isTab = _this.$tabs.index($element) > -1, $elements = isTab ? _this.$tabs : $element.siblings("li").add($element), $prevElement, $nextElement;
            $elements.each(function(i) {
                if ($(this).is($element)) {
                    $prevElement = $elements.eq(i - 1);
                    $nextElement = $elements.eq(i + 1);
                    return;
                }
            });
            var nextSibling = function() {
                if (!$element.is(":last-child")) $nextElement.children("a:first").focus();
            }, prevSibling = function() {
                $prevElement.children("a:first").focus();
            }, openSub = function() {
                var $sub = $element.children("ul.is-dropdown-submenu");
                if ($sub.length) {
                    _this._show($sub);
                    $element.find("li > a:first").focus();
                } else {
                    return;
                }
            }, closeSub = function() {
                var close = $element.parent("ul").parent("li");
                close.children("a:first").focus();
                _this._hide(close);
            };
            var functions = {
                open: openSub,
                close: function() {
                    _this._hide(_this.$element);
                    _this.$menuItems.find("a:first").focus();
                },
                handled: function() {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                }
            };
            if (isTab) {
                if (_this.vertical) {
                    if (_this.options.alignment === "left") {
                        $.extend(functions, {
                            down: nextSibling,
                            up: prevSibling,
                            next: openSub,
                            previous: closeSub
                        });
                    } else {
                        $.extend(functions, {
                            down: nextSibling,
                            up: prevSibling,
                            next: closeSub,
                            previous: openSub
                        });
                    }
                } else {
                    $.extend(functions, {
                        next: nextSibling,
                        previous: prevSibling,
                        down: openSub,
                        up: closeSub
                    });
                }
            } else {
                if (_this.options.alignment === "left") {
                    $.extend(functions, {
                        next: openSub,
                        previous: closeSub,
                        down: nextSibling,
                        up: prevSibling
                    });
                } else {
                    $.extend(functions, {
                        next: closeSub,
                        previous: openSub,
                        down: nextSibling,
                        up: prevSibling
                    });
                }
            }
            Foundation.Keyboard.handleKey(e, "DropdownMenu", functions);
        });
    };
    DropdownMenu.prototype._addBodyHandler = function() {
        var $body = $(document.body), _this = this;
        $body.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu").on("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu", function(e) {
            var $link = _this.$element.find(e.target);
            if ($link.length) {
                return;
            }
            _this._hide();
            $body.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu");
        });
    };
    DropdownMenu.prototype._show = function($sub) {
        var idx = this.$tabs.index(this.$tabs.filter(function(i, el) {
            return $(el).find($sub).length > 0;
        }));
        var $sibs = $sub.parent("li.is-dropdown-submenu-parent").siblings("li.is-dropdown-submenu-parent");
        this._hide($sibs, idx);
        $sub.css("visibility", "hidden").addClass("js-dropdown-active").attr({
            "aria-hidden": false
        }).parent("li.is-dropdown-submenu-parent").addClass("is-active").attr({
            "aria-selected": true,
            "aria-expanded": true
        });
        var clear = Foundation.Box.ImNotTouchingYou($sub, null, true);
        if (!clear) {
            var oldClass = this.options.alignment === "left" ? "-right" : "-left", $parentLi = $sub.parent(".is-dropdown-submenu-parent");
            $parentLi.removeClass("opens" + oldClass).addClass("opens-" + this.options.alignment);
            clear = Foundation.Box.ImNotTouchingYou($sub, null, true);
            if (!clear) {
                $parentLi.removeClass("opens-" + this.options.alignment).addClass("opens-inner");
            }
            this.changed = true;
        }
        $sub.css("visibility", "");
        if (this.options.closeOnClick) {
            this._addBodyHandler();
        }
        this.$element.trigger("show.zf.dropdownmenu", [ $sub ]);
    };
    DropdownMenu.prototype._hide = function($elem, idx) {
        var $toClose;
        if ($elem && $elem.length) {
            $toClose = $elem;
        } else if (idx !== undefined) {
            $toClose = this.$tabs.not(function(i, el) {
                return i === idx;
            });
        } else {
            $toClose = this.$element;
        }
        var somethingToClose = $toClose.hasClass("is-active") || $toClose.find(".is-active").length > 0;
        if (somethingToClose) {
            $toClose.find("li.is-active").add($toClose).attr({
                "aria-selected": false,
                "aria-expanded": false,
                "data-is-click": false
            }).removeClass("is-active");
            $toClose.find("ul.js-dropdown-active").attr({
                "aria-hidden": true
            }).removeClass("js-dropdown-active");
            if (this.changed || $toClose.find("opens-inner").length) {
                var oldClass = this.options.alignment === "left" ? "right" : "left";
                $toClose.find("li.is-dropdown-submenu-parent").add($toClose).removeClass("opens-inner opens-" + this.options.alignment).addClass("opens-" + oldClass);
                this.changed = false;
            }
            this.$element.trigger("hide.zf.dropdownmenu", [ $toClose ]);
        }
    };
    DropdownMenu.prototype.destroy = function() {
        this.$menuItems.off(".zf.dropdownmenu").removeAttr("data-is-click").removeClass("is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner");
        Foundation.Nest.Burn(this.$element, "dropdown");
        Foundation.unregisterPlugin(this);
    };
    Foundation.plugin(DropdownMenu, "DropdownMenu");
}(jQuery, window.Foundation);

!function(Foundation, $) {
    "use strict";
    function Equalizer(element, options) {
        this.$element = element;
        this.options = $.extend({}, Equalizer.defaults, this.$element.data(), options);
        this._init();
        Foundation.registerPlugin(this, "Equalizer");
    }
    Equalizer.defaults = {
        equalizeOnStack: true,
        equalizeByRow: false,
        equalizeOn: ""
    };
    Equalizer.prototype._init = function() {
        var eqId = this.$element.attr("data-equalizer") || "";
        var $watched = this.$element.find('[data-equalizer-watch="' + eqId + '"]');
        this.$watched = $watched.length ? $watched : this.$element.find("[data-equalizer-watch]");
        this.$element.attr("data-resize", eqId || Foundation.GetYoDigits(6, "eq"));
        this.hasNested = this.$element.find("[data-equalizer]").length > 0;
        this.isNested = this.$element.parentsUntil(document.body, "[data-equalizer]").length > 0;
        this.isOn = false;
        var imgs = this.$element.find("img");
        var tooSmall;
        if (this.options.equalizeOn) {
            tooSmall = this._checkMQ();
            $(window).on("changed.zf.mediaquery", this._checkMQ.bind(this));
        } else {
            this._events();
        }
        if (tooSmall !== undefined && tooSmall === false || tooSmall === undefined) {
            if (imgs.length) {
                Foundation.onImagesLoaded(imgs, this._reflow.bind(this));
            } else {
                this._reflow();
            }
        }
    };
    Equalizer.prototype._pauseEvents = function() {
        this.isOn = false;
        this.$element.off(".zf.equalizer resizeme.zf.trigger");
    };
    Equalizer.prototype._events = function() {
        var _this = this;
        this._pauseEvents();
        if (this.hasNested) {
            this.$element.on("postequalized.zf.equalizer", function(e) {
                if (e.target !== _this.$element[0]) {
                    _this._reflow();
                }
            });
        } else {
            this.$element.on("resizeme.zf.trigger", this._reflow.bind(this));
        }
        this.isOn = true;
    };
    Equalizer.prototype._checkMQ = function() {
        var tooSmall = !Foundation.MediaQuery.atLeast(this.options.equalizeOn);
        if (tooSmall) {
            if (this.isOn) {
                this._pauseEvents();
                this.$watched.css("height", "auto");
            }
        } else {
            if (!this.isOn) {
                this._events();
            }
        }
        return tooSmall;
    };
    Equalizer.prototype._killswitch = function() {
        return;
    };
    Equalizer.prototype._reflow = function() {
        if (!this.options.equalizeOnStack) {
            if (this._isStacked()) {
                this.$watched.css("height", "auto");
                return false;
            }
        }
        if (this.options.equalizeByRow) {
            this.getHeightsByRow(this.applyHeightByRow.bind(this));
        } else {
            this.getHeights(this.applyHeight.bind(this));
        }
    };
    Equalizer.prototype._isStacked = function() {
        return this.$watched[0].offsetTop !== this.$watched[1].offsetTop;
    };
    Equalizer.prototype.getHeights = function(cb) {
        var heights = [];
        for (var i = 0, len = this.$watched.length; i < len; i++) {
            this.$watched[i].style.height = "auto";
            heights.push(this.$watched[i].offsetHeight);
        }
        cb(heights);
    };
    Equalizer.prototype.getHeightsByRow = function(cb) {
        var lastElTopOffset = this.$watched.first().offset().top, groups = [], group = 0;
        groups[group] = [];
        for (var i = 0, len = this.$watched.length; i < len; i++) {
            this.$watched[i].style.height = "auto";
            var elOffsetTop = $(this.$watched[i]).offset().top;
            if (elOffsetTop != lastElTopOffset) {
                group++;
                groups[group] = [];
                lastElTopOffset = elOffsetTop;
            }
            groups[group].push([ this.$watched[i], this.$watched[i].offsetHeight ]);
        }
        for (var i = 0, len = groups.length; i < len; i++) {
            var heights = $(groups[i]).map(function() {
                return this[1];
            }).get();
            var max = Math.max.apply(null, heights);
            groups[i].push(max);
        }
        cb(groups);
    };
    Equalizer.prototype.applyHeight = function(heights) {
        var max = Math.max.apply(null, heights);
        this.$element.trigger("preequalized.zf.equalizer");
        this.$watched.css("height", max);
        this.$element.trigger("postequalized.zf.equalizer");
    };
    Equalizer.prototype.applyHeightByRow = function(groups) {
        this.$element.trigger("preequalized.zf.equalizer");
        for (var i = 0, len = groups.length; i < len; i++) {
            var groupsILength = groups[i].length, max = groups[i][groupsILength - 1];
            if (groupsILength <= 2) {
                $(groups[i][0][0]).css({
                    height: "auto"
                });
                continue;
            }
            this.$element.trigger("preequalizedrow.zf.equalizer");
            for (var j = 0, lenJ = groupsILength - 1; j < lenJ; j++) {
                $(groups[i][j][0]).css({
                    height: max
                });
            }
            this.$element.trigger("postequalizedrow.zf.equalizer");
        }
        this.$element.trigger("postequalized.zf.equalizer");
    };
    Equalizer.prototype.destroy = function() {
        this._pauseEvents();
        this.$watched.css("height", "auto");
        Foundation.unregisterPlugin(this);
    };
    Foundation.plugin(Equalizer, "Equalizer");
    if (typeof module !== "undefined" && typeof module.exports !== "undefined") module.exports = Equalizer;
    if (typeof define === "function") define([ "foundation" ], function() {
        return Equalizer;
    });
}(Foundation, jQuery);

!function(Foundation, $) {
    "use strict";
    function Interchange(element, options) {
        this.$element = element;
        this.options = $.extend({}, Interchange.defaults, options);
        this.rules = [];
        this.currentPath = "";
        this._init();
        this._events();
        Foundation.registerPlugin(this, "Interchange");
    }
    Interchange.defaults = {
        rules: null
    };
    Interchange.SPECIAL_QUERIES = {
        landscape: "screen and (orientation: landscape)",
        portrait: "screen and (orientation: portrait)",
        retina: "only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)"
    };
    Interchange.prototype._init = function() {
        this._addBreakpoints();
        this._generateRules();
        this._reflow();
    };
    Interchange.prototype._events = function() {
        $(window).on("resize.zf.interchange", Foundation.util.throttle(this._reflow.bind(this), 50));
    };
    Interchange.prototype._reflow = function() {
        var match;
        for (var i in this.rules) {
            var rule = this.rules[i];
            if (window.matchMedia(rule.query).matches) {
                match = rule;
            }
        }
        if (match) {
            this.replace(match.path);
        }
    };
    Interchange.prototype._addBreakpoints = function() {
        for (var i in Foundation.MediaQuery.queries) {
            var query = Foundation.MediaQuery.queries[i];
            Interchange.SPECIAL_QUERIES[query.name] = query.value;
        }
    };
    Interchange.prototype._generateRules = function() {
        var rulesList = [];
        var rules;
        if (this.options.rules) {
            rules = this.options.rules;
        } else {
            rules = this.$element.data("interchange").match(/\[.*?\]/g);
        }
        for (var i in rules) {
            var rule = rules[i].slice(1, -1).split(", ");
            var path = rule.slice(0, -1).join("");
            var query = rule[rule.length - 1];
            if (Interchange.SPECIAL_QUERIES[query]) {
                query = Interchange.SPECIAL_QUERIES[query];
            }
            rulesList.push({
                path: path,
                query: query
            });
        }
        this.rules = rulesList;
    };
    Interchange.prototype.replace = function(path) {
        if (this.currentPath === path) return;
        var _this = this;
        if (this.$element[0].nodeName === "IMG") {
            this.$element.attr("src", path).load(function() {
                _this.currentPath = path;
            });
        } else if (path.match(/\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i)) {
            this.$element.css({
                "background-image": "url(" + path + ")"
            });
        } else {
            $.get(path, function(response) {
                _this.$element.html(response);
                $(response).foundation();
                _this.currentPath = path;
            });
        }
        this.$element.trigger("replaced.zf.interchange");
    };
    Interchange.prototype.destroy = function() {};
    Foundation.plugin(Interchange, "Interchange");
    if (typeof module !== "undefined" && typeof module.exports !== "undefined") module.exports = Interchange;
    if (typeof define === "function") define([ "foundation" ], function() {
        return Interchange;
    });
}(Foundation, jQuery);

!function(Foundation, $) {
    "use strict";
    function Magellan(element, options) {
        this.$element = element;
        this.options = $.extend({}, Magellan.defaults, this.$element.data(), options);
        this._init();
        Foundation.registerPlugin(this, "Magellan");
    }
    Magellan.defaults = {
        animationDuration: 500,
        animationEasing: "linear",
        threshold: 50,
        activeClass: "active",
        deepLinking: false,
        barOffset: 0
    };
    Magellan.prototype._init = function() {
        var id = this.$element[0].id || Foundation.GetYoDigits(6, "magellan"), _this = this;
        this.$targets = $("[data-magellan-target]");
        this.$links = this.$element.find("a");
        this.$element.attr({
            "data-resize": id,
            "data-scroll": id,
            id: id
        });
        this.$active = $();
        this.scrollPos = parseInt(window.pageYOffset, 10);
        this._events();
    };
    Magellan.prototype.calcPoints = function() {
        var _this = this, body = document.body, html = document.documentElement;
        this.points = [];
        this.winHeight = Math.round(Math.max(window.innerHeight, html.clientHeight));
        this.docHeight = Math.round(Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight));
        this.$targets.each(function() {
            var $tar = $(this), pt = Math.round($tar.offset().top - _this.options.threshold);
            $tar.targetPoint = pt;
            _this.points.push(pt);
        });
    };
    Magellan.prototype._events = function() {
        var _this = this, $body = $("html, body"), opts = {
            duration: _this.options.animationDuration,
            easing: _this.options.animationEasing
        };
        $(window).one("load", function() {
            _this.calcPoints();
            _this._updateActive();
        });
        this.$element.on({
            "resizeme.zf.trigger": this.reflow.bind(this),
            "scrollme.zf.trigger": this._updateActive.bind(this)
        }).on("click.zf.magellan", 'a[href^="#"]', function(e) {
            e.preventDefault();
            var arrival = this.getAttribute("href"), scrollPos = $(arrival).offset().top - _this.options.threshold / 2 - _this.options.barOffset;
            $body.stop(true).animate({
                scrollTop: scrollPos
            }, opts);
        });
    };
    Magellan.prototype.reflow = function() {
        this.calcPoints();
        this._updateActive();
    };
    Magellan.prototype._updateActive = function() {
        var winPos = parseInt(window.pageYOffset, 10), curIdx;
        if (winPos + this.winHeight === this.docHeight) {
            curIdx = this.points.length - 1;
        } else if (winPos < this.points[0]) {
            curIdx = 0;
        } else {
            var isDown = this.scrollPos < winPos, _this = this, curVisible = this.points.filter(function(p, i) {
                return isDown ? p <= winPos : p - _this.options.threshold <= winPos;
            });
            curIdx = curVisible.length ? curVisible.length - 1 : 0;
        }
        this.$active.removeClass(this.options.activeClass);
        this.$active = this.$links.eq(curIdx).addClass(this.options.activeClass);
        if (this.options.deepLinking) {
            var hash = this.$active[0].getAttribute("href");
            if (window.history.pushState) {
                window.history.pushState(null, null, hash);
            } else {
                window.location.hash = hash;
            }
        }
        this.scrollPos = winPos;
        this.$element.trigger("update.zf.magellan", [ this.$active ]);
    };
    Magellan.prototype.destroy = function() {
        this.$element.off(".zf.trigger .zf.magellan").find("." + this.options.activeClass).removeClass(this.options.activeClass);
        if (this.options.deepLinking) {
            var hash = this.$active[0].getAttribute("href");
            window.location.hash.replace(hash, "");
        }
        Foundation.unregisterPlugin(this);
    };
    Foundation.plugin(Magellan, "Magellan");
    if (typeof module !== "undefined" && typeof module.exports !== "undefined") module.exports = Magellan;
    if (typeof define === "function") define([ "foundation" ], function() {
        return Magellan;
    });
}(Foundation, jQuery);

!function($, Foundation) {
    "use strict";
    function OffCanvas(element, options) {
        this.$element = element;
        this.options = $.extend({}, OffCanvas.defaults, this.$element.data(), options);
        this.$lastTrigger = $();
        this._init();
        this._events();
        Foundation.registerPlugin(this, "OffCanvas");
    }
    OffCanvas.defaults = {
        closeOnClick: true,
        transitionTime: 0,
        position: "left",
        forceTop: true,
        isRevealed: false,
        revealOn: null,
        autoFocus: true,
        revealClass: "reveal-for-",
        trapFocus: false
    };
    OffCanvas.prototype._init = function() {
        var id = this.$element.attr("id");
        this.$element.attr("aria-hidden", "true");
        $(document).find('[data-open="' + id + '"], [data-close="' + id + '"], [data-toggle="' + id + '"]').attr("aria-expanded", "false").attr("aria-controls", id);
        if (this.options.closeOnClick) {
            if ($(".js-off-canvas-exit").length) {
                this.$exiter = $(".js-off-canvas-exit");
            } else {
                var exiter = document.createElement("div");
                exiter.setAttribute("class", "js-off-canvas-exit");
                $("[data-off-canvas-content]").append(exiter);
                this.$exiter = $(exiter);
            }
        }
        this.options.isRevealed = this.options.isRevealed || new RegExp(this.options.revealClass, "g").test(this.$element[0].className);
        if (this.options.isRevealed) {
            this.options.revealOn = this.options.revealOn || this.$element[0].className.match(/(reveal-for-medium|reveal-for-large)/g)[0].split("-")[2];
            this._setMQChecker();
        }
        if (!this.options.transitionTime) {
            this.options.transitionTime = parseFloat(window.getComputedStyle($("[data-off-canvas-wrapper]")[0]).transitionDuration) * 1e3;
        }
    };
    OffCanvas.prototype._events = function() {
        this.$element.off(".zf.trigger .zf.offcanvas").on({
            "open.zf.trigger": this.open.bind(this),
            "close.zf.trigger": this.close.bind(this),
            "toggle.zf.trigger": this.toggle.bind(this),
            "keydown.zf.offcanvas": this._handleKeyboard.bind(this)
        });
        if (this.$exiter.length) {
            var _this = this;
            this.$exiter.on({
                "click.zf.offcanvas": this.close.bind(this)
            });
        }
    };
    OffCanvas.prototype._setMQChecker = function() {
        var _this = this;
        $(window).on("changed.zf.mediaquery", function() {
            if (Foundation.MediaQuery.atLeast(_this.options.revealOn)) {
                _this.reveal(true);
            } else {
                _this.reveal(false);
            }
        }).one("load.zf.offcanvas", function() {
            if (Foundation.MediaQuery.atLeast(_this.options.revealOn)) {
                _this.reveal(true);
            }
        });
    };
    OffCanvas.prototype.reveal = function(isRevealed) {
        var $closer = this.$element.find("[data-close]");
        if (isRevealed) {
            this.close();
            this.isRevealed = true;
            this.$element.off("open.zf.trigger toggle.zf.trigger");
            if ($closer.length) {
                $closer.hide();
            }
        } else {
            this.isRevealed = false;
            this.$element.on({
                "open.zf.trigger": this.open.bind(this),
                "toggle.zf.trigger": this.toggle.bind(this)
            });
            if ($closer.length) {
                $closer.show();
            }
        }
    };
    OffCanvas.prototype.open = function(event, trigger) {
        if (this.$element.hasClass("is-open") || this.isRevealed) {
            return;
        }
        var _this = this, $body = $(document.body);
        $("body").scrollTop(0);
        Foundation.Move(this.options.transitionTime, this.$element, function() {
            $("[data-off-canvas-wrapper]").addClass("is-off-canvas-open is-open-" + _this.options.position);
            _this.$element.addClass("is-open");
        });
        this.$element.attr("aria-hidden", "false").trigger("opened.zf.offcanvas");
        if (trigger) {
            this.$lastTrigger = trigger.attr("aria-expanded", "true");
        }
        if (this.options.autoFocus) {
            this.$element.one("finished.zf.animate", function() {
                _this.$element.find("a, button").eq(0).focus();
            });
        }
        if (this.options.trapFocus) {
            $("[data-off-canvas-content]").attr("tabindex", "-1");
            this._trapFocus();
        }
    };
    OffCanvas.prototype._trapFocus = function() {
        var focusable = Foundation.Keyboard.findFocusable(this.$element), first = focusable.eq(0), last = focusable.eq(-1);
        focusable.off(".zf.offcanvas").on("keydown.zf.offcanvas", function(e) {
            if (e.which === 9 || e.keycode === 9) {
                if (e.target === last[0] && !e.shiftKey) {
                    e.preventDefault();
                    first.focus();
                }
                if (e.target === first[0] && e.shiftKey) {
                    e.preventDefault();
                    last.focus();
                }
            }
        });
    };
    OffCanvas.prototype.close = function(cb) {
        if (!this.$element.hasClass("is-open") || this.isRevealed) {
            return;
        }
        var _this = this;
        $("[data-off-canvas-wrapper]").removeClass("is-off-canvas-open is-open-" + _this.options.position);
        _this.$element.removeClass("is-open");
        this.$element.attr("aria-hidden", "true").trigger("closed.zf.offcanvas");
        this.$lastTrigger.attr("aria-expanded", "false");
        if (this.options.trapFocus) {
            $("[data-off-canvas-content]").removeAttr("tabindex");
        }
    };
    OffCanvas.prototype.toggle = function(event, trigger) {
        if (this.$element.hasClass("is-open")) {
            this.close(event, trigger);
        } else {
            this.open(event, trigger);
        }
    };
    OffCanvas.prototype._handleKeyboard = function(event) {
        if (event.which !== 27) return;
        event.stopPropagation();
        event.preventDefault();
        this.close();
        this.$lastTrigger.focus();
    };
    OffCanvas.prototype.destroy = function() {
        this.close();
        this.$element.off(".zf.trigger .zf.offcanvas");
        this.$exiter.off(".zf.offcanvas");
        Foundation.unregisterPlugin(this);
    };
    Foundation.plugin(OffCanvas, "OffCanvas");
}(jQuery, Foundation);

!function($, Foundation) {
    "use strict";
    function Orbit(element, options) {
        this.$element = element;
        this.options = $.extend({}, Orbit.defaults, this.$element.data(), options);
        this._init();
        Foundation.registerPlugin(this, "Orbit");
        Foundation.Keyboard.register("Orbit", {
            ltr: {
                ARROW_RIGHT: "next",
                ARROW_LEFT: "previous"
            },
            rtl: {
                ARROW_LEFT: "next",
                ARROW_RIGHT: "previous"
            }
        });
    }
    Orbit.defaults = {
        bullets: true,
        navButtons: true,
        animInFromRight: "slide-in-right",
        animOutToRight: "slide-out-right",
        animInFromLeft: "slide-in-left",
        animOutToLeft: "slide-out-left",
        autoPlay: true,
        timerDelay: 5e3,
        infiniteWrap: true,
        swipe: true,
        pauseOnHover: true,
        accessible: true,
        containerClass: "orbit-container",
        slideClass: "orbit-slide",
        boxOfBullets: "orbit-bullets",
        nextClass: "orbit-next",
        prevClass: "orbit-previous",
        useMUI: true
    };
    Orbit.prototype._init = function() {
        this.$wrapper = this.$element.find("." + this.options.containerClass);
        this.$slides = this.$element.find("." + this.options.slideClass);
        var $images = this.$element.find("img"), initActive = this.$slides.filter(".is-active");
        if (!initActive.length) {
            this.$slides.eq(0).addClass("is-active");
        }
        if (!this.options.useMUI) {
            this.$slides.addClass("no-motionui");
        }
        if ($images.length) {
            Foundation.onImagesLoaded($images, this._prepareForOrbit.bind(this));
        } else {
            this._prepareForOrbit();
        }
        if (this.options.bullets) {
            this._loadBullets();
        }
        this._events();
        if (this.options.autoPlay) {
            this.geoSync();
        }
        if (this.options.accessible) {
            this.$wrapper.attr("tabindex", 0);
        }
    };
    Orbit.prototype._loadBullets = function() {
        this.$bullets = this.$element.find("." + this.options.boxOfBullets).find("button");
    };
    Orbit.prototype.geoSync = function() {
        var _this = this;
        this.timer = new Foundation.Timer(this.$element, {
            duration: this.options.timerDelay,
            infinite: false
        }, function() {
            _this.changeSlide(true);
        });
        this.timer.start();
    };
    Orbit.prototype._prepareForOrbit = function() {
        var _this = this;
        this._setWrapperHeight(function(max) {
            _this._setSlideHeight(max);
        });
    };
    Orbit.prototype._setWrapperHeight = function(cb) {
        var max = 0, temp, counter = 0;
        this.$slides.each(function() {
            temp = this.getBoundingClientRect().height;
            $(this).attr("data-slide", counter);
            if (counter) {
                $(this).css({
                    position: "relative",
                    display: "none"
                });
            }
            max = temp > max ? temp : max;
            counter++;
        });
        if (counter === this.$slides.length) {
            this.$wrapper.css({
                height: max
            });
            cb(max);
        }
    };
    Orbit.prototype._setSlideHeight = function(height) {
        this.$slides.each(function() {
            $(this).css("max-height", height);
        });
    };
    Orbit.prototype._events = function() {
        var _this = this;
        if (this.options.swipe) {
            this.$slides.off("swipeleft.zf.orbit swiperight.zf.orbit").on("swipeleft.zf.orbit", function(e) {
                e.preventDefault();
                _this.changeSlide(true);
            }).on("swiperight.zf.orbit", function(e) {
                e.preventDefault();
                _this.changeSlide(false);
            });
        }
        if (this.options.autoPlay) {
            this.$slides.on("click.zf.orbit", function() {
                _this.$element.data("clickedOn", _this.$element.data("clickedOn") ? false : true);
                _this.timer[_this.$element.data("clickedOn") ? "pause" : "start"]();
            });
            if (this.options.pauseOnHover) {
                this.$element.on("mouseenter.zf.orbit", function() {
                    _this.timer.pause();
                }).on("mouseleave.zf.orbit", function() {
                    if (!_this.$element.data("clickedOn")) {
                        _this.timer.start();
                    }
                });
            }
        }
        if (this.options.navButtons) {
            var $controls = this.$element.find("." + this.options.nextClass + ", ." + this.options.prevClass);
            $controls.attr("tabindex", 0).on("click.zf.orbit touchend.zf.orbit", function() {
                _this.changeSlide($(this).hasClass(_this.options.nextClass));
            });
        }
        if (this.options.bullets) {
            this.$bullets.on("click.zf.orbit touchend.zf.orbit", function() {
                if (/is-active/g.test(this.className)) {
                    return false;
                }
                var idx = $(this).data("slide"), ltr = idx > _this.$slides.filter(".is-active").data("slide"), $slide = _this.$slides.eq(idx);
                _this.changeSlide(ltr, $slide, idx);
            });
        }
        this.$wrapper.add(this.$bullets).on("keydown.zf.orbit", function(e) {
            Foundation.Keyboard.handleKey(e, "Orbit", {
                next: function() {
                    _this.changeSlide(true);
                },
                previous: function() {
                    _this.changeSlide(false);
                },
                handled: function() {
                    if ($(e.target).is(_this.$bullets)) {
                        _this.$bullets.filter(".is-active").focus();
                    }
                }
            });
        });
    };
    Orbit.prototype.changeSlide = function(isLTR, chosenSlide, idx) {
        var $curSlide = this.$slides.filter(".is-active").eq(0);
        if (/mui/g.test($curSlide[0].className)) {
            return false;
        }
        var $firstSlide = this.$slides.first(), $lastSlide = this.$slides.last(), dirIn = isLTR ? "Right" : "Left", dirOut = isLTR ? "Left" : "Right", _this = this, $newSlide;
        if (!chosenSlide) {
            $newSlide = isLTR ? this.options.infiniteWrap ? $curSlide.next("." + this.options.slideClass).length ? $curSlide.next("." + this.options.slideClass) : $firstSlide : $curSlide.next("." + this.options.slideClass) : this.options.infiniteWrap ? $curSlide.prev("." + this.options.slideClass).length ? $curSlide.prev("." + this.options.slideClass) : $lastSlide : $curSlide.prev("." + this.options.slideClass);
        } else {
            $newSlide = chosenSlide;
        }
        if ($newSlide.length) {
            if (this.options.bullets) {
                idx = idx || this.$slides.index($newSlide);
                this._updateBullets(idx);
            }
            if (this.options.useMUI) {
                Foundation.Motion.animateIn($newSlide.addClass("is-active").css({
                    position: "absolute",
                    top: 0
                }), this.options["animInFrom" + dirIn], function() {
                    $newSlide.css({
                        position: "relative",
                        display: "block"
                    }).attr("aria-live", "polite");
                });
                Foundation.Motion.animateOut($curSlide.removeClass("is-active"), this.options["animOutTo" + dirOut], function() {
                    $curSlide.removeAttr("aria-live");
                    if (_this.options.autoPlay) {
                        _this.timer.restart();
                    }
                });
            } else {
                $curSlide.removeClass("is-active is-in").removeAttr("aria-live").hide();
                $newSlide.addClass("is-active is-in").attr("aria-live", "polite").show();
                if (this.options.autoPlay) {
                    this.timer.restart();
                }
            }
            this.$element.trigger("slidechange.zf.orbit", [ $newSlide ]);
        }
    };
    Orbit.prototype._updateBullets = function(idx) {
        var $oldBullet = this.$element.find("." + this.options.boxOfBullets).find(".is-active").removeClass("is-active").blur(), span = $oldBullet.find("span:last").detach(), $newBullet = this.$bullets.eq(idx).addClass("is-active").append(span);
    };
    Orbit.prototype.destroy = function() {
        delete this.timer;
        this.$element.off(".zf.orbit").find("*").off(".zf.orbit").end().hide();
        Foundation.unregisterPlugin(this);
    };
    Foundation.plugin(Orbit, "Orbit");
}(jQuery, window.Foundation);

!function(Foundation, $) {
    "use strict";
    var MenuPlugins = {
        dropdown: {
            cssClass: "dropdown",
            plugin: Foundation._plugins["dropdown-menu"] || null
        },
        drilldown: {
            cssClass: "drilldown",
            plugin: Foundation._plugins["drilldown"] || null
        },
        accordion: {
            cssClass: "accordion-menu",
            plugin: Foundation._plugins["accordion-menu"] || null
        }
    };
    var phMedia = {
        small: "(min-width: 0px)",
        medium: "(min-width: 640px)"
    };
    function ResponsiveMenu(element) {
        this.$element = $(element);
        this.rules = this.$element.data("responsive-menu");
        this.currentMq = null;
        this.currentPlugin = null;
        this._init();
        this._events();
        Foundation.registerPlugin(this, "ResponsiveMenu");
    }
    ResponsiveMenu.defaults = {};
    ResponsiveMenu.prototype._init = function() {
        var rulesTree = {};
        var rules = this.rules.split(" ");
        for (var i = 0; i < rules.length; i++) {
            var rule = rules[i].split("-");
            var ruleSize = rule.length > 1 ? rule[0] : "small";
            var rulePlugin = rule.length > 1 ? rule[1] : rule[0];
            if (MenuPlugins[rulePlugin] !== null) {
                rulesTree[ruleSize] = MenuPlugins[rulePlugin];
            }
        }
        this.rules = rulesTree;
        if (!$.isEmptyObject(rulesTree)) {
            this._checkMediaQueries();
        }
    };
    ResponsiveMenu.prototype._events = function() {
        var _this = this;
        $(window).on("changed.zf.mediaquery", function() {
            _this._checkMediaQueries();
        });
    };
    ResponsiveMenu.prototype._checkMediaQueries = function() {
        var matchedMq, _this = this;
        $.each(this.rules, function(key) {
            if (Foundation.MediaQuery.atLeast(key)) {
                matchedMq = key;
            }
        });
        if (!matchedMq) return;
        if (this.currentPlugin instanceof this.rules[matchedMq].plugin) return;
        $.each(MenuPlugins, function(key, value) {
            _this.$element.removeClass(value.cssClass);
        });
        this.$element.addClass(this.rules[matchedMq].cssClass);
        if (this.currentPlugin) this.currentPlugin.destroy();
        this.currentPlugin = new this.rules[matchedMq].plugin(this.$element, {});
    };
    ResponsiveMenu.prototype.destroy = function() {
        this.currentPlugin.destroy();
        $(window).off(".zf.ResponsiveMenu");
        Foundation.unregisterPlugin(this);
    };
    Foundation.plugin(ResponsiveMenu, "ResponsiveMenu");
}(Foundation, jQuery);

!function($, Foundation) {
    "use strict";
    function ResponsiveToggle(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, ResponsiveToggle.defaults, this.$element.data(), options);
        this._init();
        this._events();
        Foundation.registerPlugin(this, "ResponsiveToggle");
    }
    ResponsiveToggle.defaults = {
        hideFor: "medium"
    };
    ResponsiveToggle.prototype._init = function() {
        var targetID = this.$element.data("responsive-toggle");
        if (!targetID) {
            console.error("Your tab bar needs an ID of a Menu as the value of data-tab-bar.");
        }
        this.$targetMenu = $("#" + targetID);
        this.$toggler = this.$element.find("[data-toggle]");
        this._update();
    };
    ResponsiveToggle.prototype._events = function() {
        var _this = this;
        $(window).on("changed.zf.mediaquery", this._update.bind(this));
        this.$toggler.on("click.zf.responsiveToggle", this.toggleMenu.bind(this));
    };
    ResponsiveToggle.prototype._update = function() {
        if (!Foundation.MediaQuery.atLeast(this.options.hideFor)) {
            this.$element.show();
            this.$targetMenu.hide();
        } else {
            this.$element.hide();
            this.$targetMenu.show();
        }
    };
    ResponsiveToggle.prototype.toggleMenu = function() {
        if (!Foundation.MediaQuery.atLeast(this.options.hideFor)) {
            this.$targetMenu.toggle(0);
            this.$element.trigger("toggled.zf.responsiveToggle");
        }
    };
    ResponsiveToggle.prototype.destroy = function() {};
    Foundation.plugin(ResponsiveToggle, "ResponsiveToggle");
}(jQuery, Foundation);

!function(Foundation, $) {
    "use strict";
    function Reveal(element, options) {
        this.$element = element;
        this.options = $.extend({}, Reveal.defaults, this.$element.data(), options);
        this._init();
        Foundation.registerPlugin(this, "Reveal");
        Foundation.Keyboard.register("Reveal", {
            ENTER: "open",
            SPACE: "open",
            ESCAPE: "close",
            TAB: "tab_forward",
            SHIFT_TAB: "tab_backward"
        });
    }
    Reveal.defaults = {
        animationIn: "",
        animationOut: "",
        showDelay: 0,
        hideDelay: 0,
        closeOnClick: true,
        closeOnEsc: true,
        multipleOpened: false,
        vOffset: 100,
        hOffset: 0,
        fullScreen: false,
        btmOffsetPct: 10,
        overlay: true,
        resetOnClose: false
    };
    Reveal.prototype._init = function() {
        this.id = this.$element.attr("id");
        this.isActive = false;
        this.$anchor = $('[data-open="' + this.id + '"]').length ? $('[data-open="' + this.id + '"]') : $('[data-toggle="' + this.id + '"]');
        if (this.$anchor.length) {
            var anchorId = this.$anchor[0].id || Foundation.GetYoDigits(6, "reveal");
            this.$anchor.attr({
                "aria-controls": this.id,
                id: anchorId,
                "aria-haspopup": true,
                tabindex: 0
            });
            this.$element.attr({
                "aria-labelledby": anchorId
            });
        }
        if (this.options.fullScreen || this.$element.hasClass("full")) {
            this.options.fullScreen = true;
            this.options.overlay = false;
        }
        if (this.options.overlay && !this.$overlay) {
            this.$overlay = this._makeOverlay(this.id);
        }
        this.$element.attr({
            role: "dialog",
            "aria-hidden": true,
            "data-yeti-box": this.id,
            "data-resize": this.id
        });
        this._events();
    };
    Reveal.prototype._makeOverlay = function(id) {
        var $overlay = $("<div></div>").addClass("reveal-overlay").attr({
            tabindex: -1,
            "aria-hidden": true
        }).appendTo("body");
        if (this.options.closeOnClick) {
            $overlay.attr({
                "data-close": id
            });
        }
        return $overlay;
    };
    Reveal.prototype._events = function() {
        var _this = this;
        this.$element.on({
            "open.zf.trigger": this.open.bind(this),
            "close.zf.trigger": this.close.bind(this),
            "toggle.zf.trigger": this.toggle.bind(this),
            "resizeme.zf.trigger": function() {
                if (_this.$element.is(":visible")) {
                    _this._setPosition(function() {});
                }
            }
        });
        if (this.$anchor.length) {
            this.$anchor.on("keydown.zf.reveal", function(e) {
                if (e.which === 13 || e.which === 32) {
                    e.stopPropagation();
                    e.preventDefault();
                    _this.open();
                }
            });
        }
        if (this.options.closeOnClick && this.options.overlay) {
            this.$overlay.off(".zf.reveal").on("click.zf.reveal", this.close.bind(this));
        }
    };
    Reveal.prototype._setPosition = function(cb) {
        var eleDims = Foundation.Box.GetDimensions(this.$element);
        var elePos = this.options.fullScreen ? "reveal full" : eleDims.height >= .5 * eleDims.windowDims.height ? "reveal" : "center";
        if (elePos === "reveal full") {
            this.$element.offset(Foundation.Box.GetOffsets(this.$element, null, elePos, this.options.vOffset)).css({
                height: eleDims.windowDims.height,
                width: eleDims.windowDims.width
            });
        } else if (!Foundation.MediaQuery.atLeast("medium") || !Foundation.Box.ImNotTouchingYou(this.$element, null, true, false)) {
            this.$element.css({
                width: eleDims.windowDims.width - this.options.hOffset * 2
            }).offset(Foundation.Box.GetOffsets(this.$element, null, "center", this.options.vOffset, this.options.hOffset));
            this.changedSize = true;
        } else {
            this.$element.css({
                "max-height": eleDims.windowDims.height - this.options.vOffset * (this.options.btmOffsetPct / 100 + 1),
                width: ""
            }).offset(Foundation.Box.GetOffsets(this.$element, null, elePos, this.options.vOffset));
        }
        cb();
    };
    Reveal.prototype.open = function() {
        var _this = this;
        this.isActive = true;
        this.$element.css({
            visibility: "hidden"
        }).show().scrollTop(0);
        this._setPosition(function() {
            _this.$element.hide().css({
                visibility: ""
            });
            if (!_this.options.multipleOpened) {
                _this.$element.trigger("closeme.zf.reveal", _this.id);
            }
            if (_this.options.animationIn) {
                if (_this.options.overlay) {
                    Foundation.Motion.animateIn(_this.$overlay, "fade-in", function() {
                        Foundation.Motion.animateIn(_this.$element, _this.options.animationIn, function() {
                            _this.focusableElements = Foundation.Keyboard.findFocusable(_this.$element);
                        });
                    });
                } else {
                    Foundation.Motion.animateIn(_this.$element, _this.options.animationIn, function() {
                        _this.focusableElements = Foundation.Keyboard.findFocusable(_this.$element);
                    });
                }
            } else {
                if (_this.options.overlay) {
                    _this.$overlay.show(0, function() {
                        _this.$element.show(_this.options.showDelay, function() {});
                    });
                } else {
                    _this.$element.show(_this.options.showDelay, function() {});
                }
            }
        });
        this.$element.attr({
            "aria-hidden": false
        }).attr("tabindex", -1).focus().trigger("open.zf.reveal");
        $("body").addClass("is-reveal-open").attr({
            "aria-hidden": this.options.overlay || this.options.fullScreen ? true : false
        });
        setTimeout(function() {
            _this._extraHandlers();
        }, 0);
    };
    Reveal.prototype._extraHandlers = function() {
        var _this = this;
        this.focusableElements = Foundation.Keyboard.findFocusable(this.$element);
        if (!this.options.overlay && this.options.closeOnClick && !this.options.fullScreen) {
            $("body").on("click.zf.reveal", function(e) {
                _this.close();
            });
        }
        if (this.options.closeOnEsc) {
            $(window).on("keydown.zf.reveal", function(e) {
                Foundation.Keyboard.handleKey(e, "Reveal", {
                    close: function() {
                        if (_this.options.closeOnEsc) {
                            _this.close();
                            _this.$anchor.focus();
                        }
                    }
                });
                if (_this.focusableElements.length === 0) {
                    e.preventDefault();
                }
            });
        }
        this.$element.on("keydown.zf.reveal", function(e) {
            var $target = $(this);
            Foundation.Keyboard.handleKey(e, "Reveal", {
                tab_forward: function() {
                    if (_this.$element.find(":focus").is(_this.focusableElements.eq(-1))) {
                        _this.focusableElements.eq(0).focus();
                        e.preventDefault();
                    }
                },
                tab_backward: function() {
                    if (_this.$element.find(":focus").is(_this.focusableElements.eq(0)) || _this.$element.is(":focus")) {
                        _this.focusableElements.eq(-1).focus();
                        e.preventDefault();
                    }
                },
                open: function() {
                    if (_this.$element.find(":focus").is(_this.$element.find("[data-close]"))) {
                        setTimeout(function() {
                            _this.$anchor.focus();
                        }, 1);
                    } else if ($target.is(_this.focusableElements)) {
                        _this.open();
                    }
                },
                close: function() {
                    if (_this.options.closeOnEsc) {
                        _this.close();
                        _this.$anchor.focus();
                    }
                }
            });
        });
    };
    Reveal.prototype.close = function() {
        if (!this.isActive || !this.$element.is(":visible")) {
            return false;
        }
        var _this = this;
        if (this.options.animationOut) {
            Foundation.Motion.animateOut(this.$element, this.options.animationOut, function() {
                if (_this.options.overlay) {
                    Foundation.Motion.animateOut(_this.$overlay, "fade-out", function() {});
                }
            });
        } else {
            this.$element.hide(_this.options.hideDelay, function() {
                if (_this.options.overlay) {
                    _this.$overlay.hide(0, function() {});
                }
            });
        }
        if (this.options.closeOnEsc) {
            $(window).off("keydown.zf.reveal");
        }
        if (!this.options.overlay && this.options.closeOnClick) {
            $("body").off("click.zf.reveal");
        }
        this.$element.off("keydown.zf.reveal");
        if (this.changedSize) {
            this.$element.css({
                height: "",
                width: ""
            });
        }
        $("body").removeClass("is-reveal-open").attr({
            "aria-hidden": false,
            tabindex: ""
        });
        if (this.options.resetOnClose) {
            this.$element.html(this.$element.html());
        }
        this.isActive = false;
        this.$element.attr({
            "aria-hidden": true
        }).trigger("closed.zf.reveal");
    };
    Reveal.prototype.toggle = function() {
        if (this.isActive) {
            this.close();
        } else {
            this.open();
        }
    };
    Reveal.prototype.destroy = function() {
        if (this.options.overlay) {
            this.$overlay.hide().off().remove();
        }
        this.$element.hide();
        this.$anchor.off();
        Foundation.unregisterPlugin(this);
    };
    Foundation.plugin(Reveal, "Reveal");
    if (typeof module !== "undefined" && typeof module.exports !== "undefined") module.exports = Reveal;
    if (typeof define === "function") define([ "foundation" ], function() {
        return Reveal;
    });
}(Foundation, jQuery);

!function($, Foundation) {
    "use strict";
    function Slider(element, options) {
        this.$element = element;
        this.options = $.extend({}, Slider.defaults, this.$element.data(), options);
        this._init();
        Foundation.registerPlugin(this, "Slider");
        Foundation.Keyboard.register("Slider", {
            ltr: {
                ARROW_RIGHT: "increase",
                ARROW_UP: "increase",
                ARROW_DOWN: "decrease",
                ARROW_LEFT: "decrease",
                SHIFT_ARROW_RIGHT: "increase_fast",
                SHIFT_ARROW_UP: "increase_fast",
                SHIFT_ARROW_DOWN: "decrease_fast",
                SHIFT_ARROW_LEFT: "decrease_fast"
            },
            rtl: {
                ARROW_LEFT: "increase",
                ARROW_RIGHT: "decrease",
                SHIFT_ARROW_LEFT: "increase_fast",
                SHIFT_ARROW_RIGHT: "decrease_fast"
            }
        });
    }
    Slider.defaults = {
        start: 0,
        end: 100,
        step: 1,
        initialStart: 0,
        initialEnd: 100,
        binding: false,
        clickSelect: true,
        vertical: false,
        draggable: true,
        disabled: false,
        doubleSided: false,
        decimal: 2,
        moveTime: 200,
        disabledClass: "disabled"
    };
    Slider.prototype._init = function() {
        this.inputs = this.$element.find("input");
        this.handles = this.$element.find("[data-slider-handle]");
        this.$handle = this.handles.eq(0);
        this.$input = this.inputs.length ? this.inputs.eq(0) : $("#" + this.$handle.attr("aria-controls"));
        this.$fill = this.$element.find("[data-slider-fill]").css(this.options.vertical ? "height" : "width", 0);
        var isDbl = false, _this = this;
        if (this.options.disabled || this.$element.hasClass(this.options.disabledClass)) {
            this.options.disabled = true;
            this.$element.addClass(this.options.disabledClass);
        }
        if (!this.inputs.length) {
            this.inputs = $().add(this.$input);
            this.options.binding = true;
        }
        this._setInitAttr(0);
        this._events(this.$handle);
        if (this.handles[1]) {
            this.options.doubleSided = true;
            this.$handle2 = this.handles.eq(1);
            this.$input2 = this.inputs.length > 1 ? this.inputs.eq(1) : $("#" + this.$handle2.attr("aria-controls"));
            if (!this.inputs[1]) {
                this.inputs = this.inputs.add(this.$input2);
            }
            isDbl = true;
            this._setHandlePos(this.$handle, this.options.initialStart, true, function() {
                _this._setHandlePos(_this.$handle2, _this.options.initialEnd);
            });
            this._setInitAttr(1);
            this._events(this.$handle2);
        }
        if (!isDbl) {
            this._setHandlePos(this.$handle, this.options.initialStart, true);
        }
    };
    Slider.prototype._setHandlePos = function($hndl, location, noInvert, cb) {
        location = parseFloat(location);
        if (location < this.options.start) {
            location = this.options.start;
        } else if (location > this.options.end) {
            location = this.options.end;
        }
        var isDbl = this.options.doubleSided, callback = cb || null;
        if (isDbl) {
            if (this.handles.index($hndl) === 0) {
                var h2Val = parseFloat(this.$handle2.attr("aria-valuenow"));
                location = location >= h2Val ? h2Val - this.options.step : location;
            } else {
                var h1Val = parseFloat(this.$handle.attr("aria-valuenow"));
                location = location <= h1Val ? h1Val + this.options.step : location;
            }
        }
        if (this.options.vertical && !noInvert) {
            location = this.options.end - location;
        }
        var _this = this, vert = this.options.vertical, hOrW = vert ? "height" : "width", lOrT = vert ? "top" : "left", halfOfHandle = $hndl[0].getBoundingClientRect()[hOrW] / 2, elemDim = this.$element[0].getBoundingClientRect()[hOrW], pctOfBar = percent(location, this.options.end).toFixed(2), pxToMove = (elemDim - halfOfHandle) * pctOfBar, movement = (percent(pxToMove, elemDim) * 100).toFixed(this.options.decimal), location = location > 0 ? parseFloat(location.toFixed(this.options.decimal)) : 0, anim, prog, start = null, css = {};
        this._setValues($hndl, location);
        if (this.options.doubleSided) {
            var isLeftHndl = this.handles.index($hndl) === 0, dim, idx = this.handles.index($hndl);
            if (isLeftHndl) {
                css[lOrT] = (pctOfBar > 0 ? pctOfBar * 100 : 0) + "%";
                dim = ((percent(this.$handle2.position()[lOrT] + halfOfHandle, elemDim) - parseFloat(pctOfBar)) * 100).toFixed(this.options.decimal) + "%";
                css["min-" + hOrW] = dim;
                if (cb && typeof cb === "function") {
                    cb();
                }
            } else {
                var handleLeft = parseFloat(this.$handle[0].style.left);
                location = (location < 100 ? location : 100) - (!isNaN(handleLeft) ? handleLeft : this.options.end - location);
                css["min-" + hOrW] = location + "%";
            }
        }
        this.$element.one("finished.zf.animate", function() {
            _this.animComplete = true;
            _this.$element.trigger("moved.zf.slider", [ $hndl ]);
        });
        var moveTime = _this.$element.data("dragging") ? 1e3 / 60 : _this.options.moveTime;
        Foundation.Move(moveTime, $hndl, function() {
            $hndl.css(lOrT, movement + "%");
            if (!_this.options.doubleSided) {
                _this.$fill.css(hOrW, pctOfBar * 100 + "%");
            } else {
                _this.$fill.css(css);
            }
        });
    };
    Slider.prototype._setInitAttr = function(idx) {
        var id = this.inputs.eq(idx).attr("id") || Foundation.GetYoDigits(6, "slider");
        this.inputs.eq(idx).attr({
            id: id,
            max: this.options.end,
            min: this.options.start
        });
        this.handles.eq(idx).attr({
            role: "slider",
            "aria-controls": id,
            "aria-valuemax": this.options.end,
            "aria-valuemin": this.options.start,
            "aria-valuenow": idx === 0 ? this.options.initialStart : this.options.initialEnd,
            "aria-orientation": this.options.vertical ? "vertical" : "horizontal",
            tabindex: 0
        });
    };
    Slider.prototype._setValues = function($handle, val) {
        var idx = this.options.doubleSided ? this.handles.index($handle) : 0;
        this.inputs.eq(idx).val(val);
        $handle.attr("aria-valuenow", val);
    };
    Slider.prototype._handleEvent = function(e, $handle, val) {
        var value, hasVal;
        if (!val) {
            e.preventDefault();
            var _this = this, vertical = this.options.vertical, param = vertical ? "height" : "width", direction = vertical ? "top" : "left", pageXY = vertical ? e.pageY : e.pageX, halfOfHandle = this.$handle[0].getBoundingClientRect()[param] / 2, barDim = this.$element[0].getBoundingClientRect()[param], barOffset = this.$element.offset()[direction] - pageXY, barXY = barOffset > 0 ? -halfOfHandle : barOffset - halfOfHandle < -barDim ? barDim : Math.abs(barOffset), offsetPct = percent(barXY, barDim);
            value = (this.options.end - this.options.start) * offsetPct;
            hasVal = false;
            if (!$handle) {
                var firstHndlPos = absPosition(this.$handle, direction, barXY, param), secndHndlPos = absPosition(this.$handle2, direction, barXY, param);
                $handle = firstHndlPos <= secndHndlPos ? this.$handle : this.$handle2;
            }
        } else {
            value = val;
            hasVal = true;
        }
        this._setHandlePos($handle, value, hasVal);
    };
    Slider.prototype._events = function($handle) {
        if (this.options.disabled) {
            return false;
        }
        var _this = this, curHandle, timer;
        this.inputs.off("change.zf.slider").on("change.zf.slider", function(e) {
            var idx = _this.inputs.index($(this));
            _this._handleEvent(e, _this.handles.eq(idx), $(this).val());
        });
        if (this.options.clickSelect) {
            this.$element.off("click.zf.slider").on("click.zf.slider", function(e) {
                if (_this.$element.data("dragging")) {
                    return false;
                }
                _this.animComplete = false;
                if (_this.options.doubleSided) {
                    _this._handleEvent(e);
                } else {
                    _this._handleEvent(e, _this.$handle);
                }
            });
        }
        if (this.options.draggable) {
            this.handles.addTouch();
            var $body = $("body");
            $handle.off("mousedown.zf.slider").on("mousedown.zf.slider", function(e) {
                $handle.addClass("is-dragging");
                _this.$fill.addClass("is-dragging");
                _this.$element.data("dragging", true);
                _this.animComplete = false;
                curHandle = $(e.currentTarget);
                $body.on("mousemove.zf.slider", function(e) {
                    e.preventDefault();
                    _this._handleEvent(e, curHandle);
                }).on("mouseup.zf.slider", function(e) {
                    _this.animComplete = true;
                    _this._handleEvent(e, curHandle);
                    $handle.removeClass("is-dragging");
                    _this.$fill.removeClass("is-dragging");
                    _this.$element.data("dragging", false);
                    $body.off("mousemove.zf.slider mouseup.zf.slider");
                });
            });
        }
        $handle.off("keydown.zf.slider").on("keydown.zf.slider", function(e) {
            var idx = _this.options.doubleSided ? _this.handles.index($(this)) : 0, oldValue = parseFloat(_this.inputs.eq(idx).val()), newValue;
            var _$handle = $(this);
            Foundation.Keyboard.handleKey(e, "Slider", {
                decrease: function() {
                    newValue = oldValue - _this.options.step;
                },
                increase: function() {
                    newValue = oldValue + _this.options.step;
                },
                decrease_fast: function() {
                    newValue = oldValue - _this.options.step * 10;
                },
                increase_fast: function() {
                    newValue = oldValue + _this.options.step * 10;
                },
                handled: function() {
                    e.preventDefault();
                    _this._setHandlePos(_$handle, newValue, true);
                }
            });
        });
    };
    Slider.prototype.destroy = function() {
        this.handles.off(".zf.slider");
        this.inputs.off(".zf.slider");
        this.$element.off(".zf.slider");
        Foundation.unregisterPlugin(this);
    };
    Foundation.plugin(Slider, "Slider");
    function percent(frac, num) {
        return frac / num;
    }
    function absPosition($handle, dir, clickPos, param) {
        return Math.abs($handle.position()[dir] + $handle[param]() / 2 - clickPos);
    }
}(jQuery, window.Foundation);

!function($, Foundation) {
    "use strict";
    function Sticky(element, options) {
        this.$element = element;
        this.options = $.extend({}, Sticky.defaults, this.$element.data(), options);
        this._init();
        Foundation.registerPlugin(this, "Sticky");
    }
    Sticky.defaults = {
        container: "<div data-sticky-container></div>",
        stickTo: "top",
        anchor: "",
        topAnchor: "",
        btmAnchor: "",
        marginTop: 1,
        marginBottom: 1,
        stickyOn: "medium",
        stickyClass: "sticky",
        containerClass: "sticky-container",
        checkEvery: -1
    };
    Sticky.prototype._init = function() {
        var $parent = this.$element.parent("[data-sticky-container]"), id = this.$element[0].id || Foundation.GetYoDigits(6, "sticky"), _this = this;
        if (!$parent.length) {
            this.wasWrapped = true;
        }
        this.$container = $parent.length ? $parent : $(this.options.container).wrapInner(this.$element);
        this.$container.addClass(this.options.containerClass);
        this.$element.addClass(this.options.stickyClass).attr({
            "data-resize": id
        });
        this.scrollCount = this.options.checkEvery;
        this.isStuck = false;
        if (this.options.anchor !== "") {
            this.$anchor = $("#" + this.options.anchor);
        } else {
            this._parsePoints();
        }
        this._setSizes(function() {
            _this._calc(false);
        });
        this._events(id.split("-").reverse().join("-"));
    };
    Sticky.prototype._parsePoints = function() {
        var top = this.options.topAnchor, btm = this.options.btmAnchor, pts = [ top, btm ], breaks = {};
        if (top && btm) {
            for (var i = 0, len = pts.length; i < len && pts[i]; i++) {
                var pt;
                if (typeof pts[i] === "number") {
                    pt = pts[i];
                } else {
                    var place = pts[i].split(":"), anchor = $("#" + place[0]);
                    pt = anchor.offset().top;
                    if (place[1] && place[1].toLowerCase() === "bottom") {
                        pt += anchor[0].getBoundingClientRect().height;
                    }
                }
                breaks[i] = pt;
            }
        } else {
            breaks = {
                0: 1,
                1: document.documentElement.scrollHeight
            };
        }
        this.points = breaks;
        return;
    };
    Sticky.prototype._events = function(id) {
        var _this = this, scrollListener = this.scrollListener = "scroll.zf." + id;
        if (this.isOn) {
            return;
        }
        if (this.canStick) {
            this.isOn = true;
            $(window).off(scrollListener).on(scrollListener, function(e) {
                if (_this.scrollCount === 0) {
                    _this.scrollCount = _this.options.checkEvery;
                    _this._setSizes(function() {
                        _this._calc(false, window.pageYOffset);
                    });
                } else {
                    _this.scrollCount--;
                    _this._calc(false, window.pageYOffset);
                }
            });
        }
        this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger", function(e, el) {
            _this._setSizes(function() {
                _this._calc(false);
                if (_this.canStick) {
                    if (!_this.isOn) {
                        _this._events(id);
                    }
                } else if (_this.isOn) {
                    _this._pauseListeners(scrollListener);
                }
            });
        });
    };
    Sticky.prototype._pauseListeners = function(scrollListener) {
        this.isOn = false;
        $(window).off(scrollListener);
        this.$element.trigger("pause.zf.sticky");
    };
    Sticky.prototype._calc = function(checkSizes, scroll) {
        if (checkSizes) {
            this._setSizes();
        }
        if (!this.canStick) {
            if (this.isStuck) {
                this._removeSticky(true);
            }
            return false;
        }
        if (!scroll) {
            scroll = window.pageYOffset;
        }
        if (scroll >= this.topPoint) {
            if (scroll <= this.bottomPoint) {
                if (!this.isStuck) {
                    this._setSticky();
                }
            } else {
                if (this.isStuck) {
                    this._removeSticky(false);
                }
            }
        } else {
            if (this.isStuck) {
                this._removeSticky(true);
            }
        }
    };
    Sticky.prototype._setSticky = function() {
        var stickTo = this.options.stickTo, mrgn = stickTo === "top" ? "marginTop" : "marginBottom", notStuckTo = stickTo === "top" ? "bottom" : "top", css = {};
        css[mrgn] = this.options[mrgn] + "em";
        css[stickTo] = 0;
        css[notStuckTo] = "auto";
        css["left"] = this.$container.offset().left + parseInt(window.getComputedStyle(this.$container[0])["padding-left"], 10);
        this.isStuck = true;
        this.$element.removeClass("is-anchored is-at-" + notStuckTo).addClass("is-stuck is-at-" + stickTo).css(css).trigger("sticky.zf.stuckto:" + stickTo);
    };
    Sticky.prototype._removeSticky = function(isTop) {
        var stickTo = this.options.stickTo, stickToTop = stickTo === "top", css = {}, anchorPt = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight, mrgn = stickToTop ? "marginTop" : "marginBottom", notStuckTo = stickToTop ? "bottom" : "top", topOrBottom = isTop ? "top" : "bottom";
        css[mrgn] = 0;
        if (isTop && !stickToTop || stickToTop && !isTop) {
            css[stickTo] = anchorPt;
            css[notStuckTo] = 0;
        } else {
            css[stickTo] = 0;
            css[notStuckTo] = anchorPt;
        }
        css["left"] = "";
        this.isStuck = false;
        this.$element.removeClass("is-stuck is-at-" + stickTo).addClass("is-anchored is-at-" + topOrBottom).css(css).trigger("sticky.zf.unstuckfrom:" + topOrBottom);
    };
    Sticky.prototype._setSizes = function(cb) {
        this.canStick = Foundation.MediaQuery.atLeast(this.options.stickyOn);
        if (!this.canStick) {
            cb();
        }
        var _this = this, newElemWidth = this.$container[0].getBoundingClientRect().width, comp = window.getComputedStyle(this.$container[0]), pdng = parseInt(comp["padding-right"], 10);
        if (this.$anchor && this.$anchor.length) {
            this.anchorHeight = this.$anchor[0].getBoundingClientRect().height;
        } else {
            this._parsePoints();
        }
        this.$element.css({
            "max-width": newElemWidth - pdng + "px"
        });
        var newContainerHeight = this.$element[0].getBoundingClientRect().height || this.containerHeight;
        this.containerHeight = newContainerHeight;
        this.$container.css({
            height: newContainerHeight
        });
        this.elemHeight = newContainerHeight;
        if (this.isStuck) {
            this.$element.css({
                left: this.$container.offset().left + parseInt(comp["padding-left"], 10)
            });
        }
        this._setBreakPoints(newContainerHeight, function() {
            if (cb) {
                cb();
            }
        });
    };
    Sticky.prototype._setBreakPoints = function(elemHeight, cb) {
        if (!this.canStick) {
            if (cb) {
                cb();
            } else {
                return false;
            }
        }
        var mTop = emCalc(this.options.marginTop), mBtm = emCalc(this.options.marginBottom), topPoint = this.points ? this.points[0] : this.$anchor.offset().top, bottomPoint = this.points ? this.points[1] : topPoint + this.anchorHeight, winHeight = window.innerHeight;
        if (this.options.stickTo === "top") {
            topPoint -= mTop;
            bottomPoint -= elemHeight + mTop;
        } else if (this.options.stickTo === "bottom") {
            topPoint -= winHeight - (elemHeight + mBtm);
            bottomPoint -= winHeight - mBtm;
        } else {}
        this.topPoint = topPoint;
        this.bottomPoint = bottomPoint;
        if (cb) {
            cb();
        }
    };
    Sticky.prototype.destroy = function() {
        this._removeSticky(true);
        this.$element.removeClass(this.options.stickyClass + " is-anchored is-at-top").css({
            height: "",
            top: "",
            bottom: "",
            "max-width": ""
        }).off("resizeme.zf.trigger");
        this.$anchor.off("change.zf.sticky");
        $(window).off(this.scrollListener);
        if (this.wasWrapped) {
            this.$element.unwrap();
        } else {
            this.$container.removeClass(this.options.containerClass).css({
                height: ""
            });
        }
        Foundation.unregisterPlugin(this);
    };
    function emCalc(em) {
        return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * em;
    }
    Foundation.plugin(Sticky, "Sticky");
}(jQuery, window.Foundation);

!function($, Foundation) {
    "use strict";
    function Tabs(element, options) {
        this.$element = element;
        this.options = $.extend({}, Tabs.defaults, this.$element.data(), options);
        this._init();
        Foundation.registerPlugin(this, "Tabs");
        Foundation.Keyboard.register("Tabs", {
            ENTER: "open",
            SPACE: "open",
            ARROW_RIGHT: "next",
            ARROW_UP: "previous",
            ARROW_DOWN: "next",
            ARROW_LEFT: "previous"
        });
    }
    Tabs.defaults = {
        autoFocus: false,
        wrapOnKeys: true,
        matchHeight: false,
        linkClass: "tabs-title",
        panelClass: "tabs-panel"
    };
    Tabs.prototype._init = function() {
        var _this = this;
        this.$tabTitles = this.$element.find("." + this.options.linkClass);
        this.$tabContent = $('[data-tabs-content="' + this.$element[0].id + '"]');
        this.$tabTitles.each(function() {
            var $elem = $(this), $link = $elem.find("a"), isActive = $elem.hasClass("is-active"), hash = $link.attr("href").slice(1), linkId = hash + "-label", $tabContent = $(hash);
            $elem.attr({
                role: "presentation"
            });
            $link.attr({
                role: "tab",
                "aria-controls": hash,
                "aria-selected": isActive,
                id: linkId
            });
            $tabContent.attr({
                role: "tabpanel",
                "aria-hidden": !isActive,
                "aria-labelledby": linkId
            });
            if (isActive && _this.options.autoFocus) {
                $link.focus();
            }
        });
        if (this.options.matchHeight) {
            var $images = this.$tabContent.find("img");
            if ($images.length) {
                Foundation.onImagesLoaded($images, this._setHeight.bind(this));
            } else {
                this._setHeight();
            }
        }
        this._events();
    };
    Tabs.prototype._events = function() {
        this._addKeyHandler();
        this._addClickHandler();
        if (this.options.matchHeight) {
            $(window).on("changed.zf.mediaquery", this._setHeight.bind(this));
        }
    };
    Tabs.prototype._addClickHandler = function() {
        var _this = this;
        this.$element.off("click.zf.tabs").on("click.zf.tabs", "." + this.options.linkClass, function(e) {
            e.preventDefault();
            e.stopPropagation();
            if ($(this).hasClass("is-active")) {
                return;
            }
            _this._handleTabChange($(this));
        });
    };
    Tabs.prototype._addKeyHandler = function() {
        var _this = this;
        var $firstTab = _this.$element.find("li:first-of-type");
        var $lastTab = _this.$element.find("li:last-of-type");
        this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs", function(e) {
            if (e.which === 9) return;
            e.stopPropagation();
            e.preventDefault();
            var $element = $(this), $elements = $element.parent("ul").children("li"), $prevElement, $nextElement;
            $elements.each(function(i) {
                if ($(this).is($element)) {
                    if (_this.options.wrapOnKeys) {
                        $prevElement = i === 0 ? $elements.last() : $elements.eq(i - 1);
                        $nextElement = i === $elements.length - 1 ? $elements.first() : $elements.eq(i + 1);
                    } else {
                        $prevElement = $elements.eq(Math.max(0, i - 1));
                        $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1));
                    }
                    return;
                }
            });
            Foundation.Keyboard.handleKey(e, "Tabs", {
                open: function() {
                    $element.find('[role="tab"]').focus();
                    _this._handleTabChange($element);
                },
                previous: function() {
                    $prevElement.find('[role="tab"]').focus();
                    _this._handleTabChange($prevElement);
                },
                next: function() {
                    $nextElement.find('[role="tab"]').focus();
                    _this._handleTabChange($nextElement);
                }
            });
        });
    };
    Tabs.prototype._handleTabChange = function($target) {
        var $tabLink = $target.find('[role="tab"]'), hash = $tabLink.attr("href"), $targetContent = $(hash), $oldTab = this.$element.find("." + this.options.linkClass + ".is-active").removeClass("is-active").find('[role="tab"]').attr({
            "aria-selected": "false"
        }).attr("href");
        $($oldTab).removeClass("is-active").attr({
            "aria-hidden": "true"
        });
        $target.addClass("is-active");
        $tabLink.attr({
            "aria-selected": "true"
        });
        $targetContent.addClass("is-active").attr({
            "aria-hidden": "false"
        });
        this.$element.trigger("change.zf.tabs", [ $target ]);
    };
    Tabs.prototype.selectTab = function(elem) {
        var idStr;
        if (typeof elem === "object") {
            idStr = elem[0].id;
        } else {
            idStr = elem;
        }
        if (idStr.indexOf("#") < 0) {
            idStr = "#" + idStr;
        }
        var $target = this.$tabTitles.find('[href="' + idStr + '"]').parent("." + this.options.linkClass);
        this._handleTabChange($target);
    };
    Tabs.prototype._setHeight = function() {
        var max = 0;
        this.$tabContent.find("." + this.options.panelClass).css("height", "").each(function() {
            var panel = $(this), isActive = panel.hasClass("is-active");
            if (!isActive) {
                panel.css({
                    visibility: "hidden",
                    display: "block"
                });
            }
            var temp = this.getBoundingClientRect().height;
            if (!isActive) {
                panel.css({
                    visibility: "",
                    display: ""
                });
            }
            max = temp > max ? temp : max;
        }).css("height", max + "px");
    };
    Tabs.prototype.destroy = function() {
        this.$element.find("." + this.options.linkClass).off(".zf.tabs").hide().end().find("." + this.options.panelClass).hide();
        if (this.options.matchHeight) {
            $(window).off("changed.zf.mediaquery");
        }
        Foundation.unregisterPlugin(this);
    };
    Foundation.plugin(Tabs, "Tabs");
    function checkClass($elem) {
        return $elem.hasClass("is-active");
    }
}(jQuery, window.Foundation);

!function(Foundation, $) {
    "use strict";
    function Toggler(element, options) {
        this.$element = element;
        this.options = $.extend({}, Toggler.defaults, element.data(), options);
        this.className = "";
        this._init();
        this._events();
        Foundation.registerPlugin(this, "Toggler");
    }
    Toggler.defaults = {
        animate: false
    };
    Toggler.prototype._init = function() {
        var input;
        if (this.options.animate) {
            input = this.options.animate.split(" ");
            this.animationIn = input[0];
            this.animationOut = input[1] || null;
        } else {
            input = this.$element.data("toggler");
            this.className = input[0] === "." ? input.slice(1) : input;
        }
        var id = this.$element[0].id;
        $('[data-open="' + id + '"], [data-close="' + id + '"], [data-toggle="' + id + '"]').attr("aria-controls", id);
        this.$element.attr("aria-expanded", this.$element.is(":hidden") ? false : true);
    };
    Toggler.prototype._events = function() {
        this.$element.off("toggle.zf.trigger").on("toggle.zf.trigger", this.toggle.bind(this));
    };
    Toggler.prototype.toggle = function() {
        this[this.options.animate ? "_toggleAnimate" : "_toggleClass"]();
    };
    Toggler.prototype._toggleClass = function() {
        this.$element.toggleClass(this.className);
        var isOn = this.$element.hasClass(this.className);
        if (isOn) {
            this.$element.trigger("on.zf.toggler");
        } else {
            this.$element.trigger("off.zf.toggler");
        }
        this._updateARIA(isOn);
    };
    Toggler.prototype._toggleAnimate = function() {
        var _this = this;
        if (this.$element.is(":hidden")) {
            Foundation.Motion.animateIn(this.$element, this.animationIn, function() {
                this.trigger("on.zf.toggler");
                _this._updateARIA(true);
            });
        } else {
            Foundation.Motion.animateOut(this.$element, this.animationOut, function() {
                this.trigger("off.zf.toggler");
                _this._updateARIA(false);
            });
        }
    };
    Toggler.prototype._updateARIA = function(isOn) {
        this.$element.attr("aria-expanded", isOn ? true : false);
    };
    Toggler.prototype.destroy = function() {
        this.$element.off(".zf.toggler");
        Foundation.unregisterPlugin(this);
    };
    Foundation.plugin(Toggler, "Toggler");
    if (typeof module !== "undefined" && typeof module.exports !== "undefined") module.exports = Toggler;
    if (typeof define === "function") define([ "foundation" ], function() {
        return Toggler;
    });
}(Foundation, jQuery);

!function($, document, Foundation) {
    "use strict";
    function Tooltip(element, options) {
        this.$element = element;
        this.options = $.extend({}, Tooltip.defaults, this.$element.data(), options);
        this.isActive = false;
        this.isClick = false;
        this._init();
        Foundation.registerPlugin(this, "Tooltip");
    }
    Tooltip.defaults = {
        disableForTouch: false,
        hoverDelay: 200,
        fadeInDuration: 150,
        fadeOutDuration: 150,
        disableHover: false,
        templateClasses: "",
        tooltipClass: "tooltip",
        triggerClass: "has-tip",
        showOn: "small",
        template: "",
        tipText: "",
        touchCloseText: "Tap to close.",
        clickOpen: true,
        positionClass: "",
        vOffset: 10,
        hOffset: 12
    };
    Tooltip.prototype._init = function() {
        var elemId = this.$element.attr("aria-describedby") || Foundation.GetYoDigits(6, "tooltip");
        this.options.positionClass = this._getPositionClass(this.$element);
        this.options.tipText = this.options.tipText || this.$element.attr("title");
        this.template = this.options.template ? $(this.options.template) : this._buildTemplate(elemId);
        this.template.appendTo(document.body).text(this.options.tipText).hide();
        this.$element.attr({
            title: "",
            "aria-describedby": elemId,
            "data-yeti-box": elemId,
            "data-toggle": elemId,
            "data-resize": elemId
        }).addClass(this.triggerClass);
        this.usedPositions = [];
        this.counter = 4;
        this.classChanged = false;
        this._events();
    };
    Tooltip.prototype._getPositionClass = function(element) {
        if (!element) {
            return "";
        }
        var position = element[0].className.match(/(top|left|right)/g);
        position = position ? position[0] : "";
        return position;
    };
    Tooltip.prototype._buildTemplate = function(id) {
        var templateClasses = (this.options.tooltipClass + " " + this.options.positionClass).trim();
        var $template = $("<div></div>").addClass(templateClasses).attr({
            role: "tooltip",
            "aria-hidden": true,
            "data-is-active": false,
            "data-is-focus": false,
            id: id
        });
        return $template;
    };
    Tooltip.prototype._reposition = function(position) {
        this.usedPositions.push(position ? position : "bottom");
        if (!position && this.usedPositions.indexOf("top") < 0) {
            this.template.addClass("top");
        } else if (position === "top" && this.usedPositions.indexOf("bottom") < 0) {
            this.template.removeClass(position);
        } else if (position === "left" && this.usedPositions.indexOf("right") < 0) {
            this.template.removeClass(position).addClass("right");
        } else if (position === "right" && this.usedPositions.indexOf("left") < 0) {
            this.template.removeClass(position).addClass("left");
        } else if (!position && this.usedPositions.indexOf("top") > -1 && this.usedPositions.indexOf("left") < 0) {
            this.template.addClass("left");
        } else if (position === "top" && this.usedPositions.indexOf("bottom") > -1 && this.usedPositions.indexOf("left") < 0) {
            this.template.removeClass(position).addClass("left");
        } else if (position === "left" && this.usedPositions.indexOf("right") > -1 && this.usedPositions.indexOf("bottom") < 0) {
            this.template.removeClass(position);
        } else if (position === "right" && this.usedPositions.indexOf("left") > -1 && this.usedPositions.indexOf("bottom") < 0) {
            this.template.removeClass(position);
        } else {
            this.template.removeClass(position);
        }
        this.classChanged = true;
        this.counter--;
    };
    Tooltip.prototype._setPosition = function() {
        var position = this._getPositionClass(this.template), $tipDims = Foundation.Box.GetDimensions(this.template), $anchorDims = Foundation.Box.GetDimensions(this.$element), direction = position === "left" ? "left" : position === "right" ? "left" : "top", param = direction === "top" ? "height" : "width", offset = param === "height" ? this.options.vOffset : this.options.hOffset, _this = this;
        if ($tipDims.width >= $tipDims.windowDims.width || !this.counter && !Foundation.Box.ImNotTouchingYou(this.template)) {
            this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element, "center bottom", this.options.vOffset, this.options.hOffset, true)).css({
                width: $anchorDims.windowDims.width - this.options.hOffset * 2,
                height: "auto"
            });
            return false;
        }
        this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element, "center " + (position || "bottom"), this.options.vOffset, this.options.hOffset));
        while (!Foundation.Box.ImNotTouchingYou(this.template) && this.counter) {
            this._reposition(position);
            this._setPosition();
        }
    };
    Tooltip.prototype.show = function() {
        if (this.options.showOn !== "all" && !Foundation.MediaQuery.atLeast(this.options.showOn)) {
            return false;
        }
        var _this = this;
        this.template.css("visibility", "hidden").show();
        this._setPosition();
        this.$element.trigger("closeme.zf.tooltip", this.template.attr("id"));
        this.template.attr({
            "data-is-active": true,
            "aria-hidden": false
        });
        _this.isActive = true;
        this.template.stop().hide().css("visibility", "").fadeIn(this.options.fadeInDuration, function() {});
        this.$element.trigger("show.zf.tooltip");
    };
    Tooltip.prototype.hide = function() {
        var _this = this;
        this.template.stop().attr({
            "aria-hidden": true,
            "data-is-active": false
        }).fadeOut(this.options.fadeOutDuration, function() {
            _this.isActive = false;
            _this.isClick = false;
            if (_this.classChanged) {
                _this.template.removeClass(_this._getPositionClass(_this.template)).addClass(_this.options.positionClass);
                _this.usedPositions = [];
                _this.counter = 4;
                _this.classChanged = false;
            }
        });
        this.$element.trigger("hide.zf.tooltip");
    };
    Tooltip.prototype._events = function() {
        var _this = this;
        var $template = this.template;
        var isFocus = false;
        if (!this.options.disableHover) {
            this.$element.on("mouseenter.zf.tooltip", function(e) {
                if (!_this.isActive) {
                    _this.timeout = setTimeout(function() {
                        _this.show();
                    }, _this.options.hoverDelay);
                }
            }).on("mouseleave.zf.tooltip", function(e) {
                clearTimeout(_this.timeout);
                if (!isFocus || !_this.isClick && _this.options.clickOpen) {
                    _this.hide();
                }
            });
        }
        if (this.options.clickOpen) {
            this.$element.on("mousedown.zf.tooltip", function(e) {
                e.stopImmediatePropagation();
                if (_this.isClick) {
                    _this.hide();
                } else {
                    _this.isClick = true;
                    if ((_this.options.disableHover || !_this.$element.attr("tabindex")) && !_this.isActive) {
                        _this.show();
                    }
                }
            });
        }
        if (!this.options.disableForTouch) {
            this.$element.on("tap.zf.tooltip touchend.zf.tooltip", function(e) {
                _this.isActive ? _this.hide() : _this.show();
            });
        }
        this.$element.on({
            "close.zf.trigger": this.hide.bind(this)
        });
        this.$element.on("focus.zf.tooltip", function(e) {
            isFocus = true;
            if (_this.isClick) {
                return false;
            } else {
                _this.show();
            }
        }).on("focusout.zf.tooltip", function(e) {
            isFocus = false;
            _this.isClick = false;
            _this.hide();
        }).on("resizeme.zf.trigger", function() {
            if (_this.isActive) {
                _this._setPosition();
            }
        });
    };
    Tooltip.prototype.toggle = function() {
        if (this.isActive) {
            this.hide();
        } else {
            this.show();
        }
    };
    Tooltip.prototype.destroy = function() {
        this.$element.attr("title", this.template.text()).off(".zf.trigger .zf.tootip").removeAttr("aria-describedby").removeAttr("data-yeti-box").removeAttr("data-toggle").removeAttr("data-resize");
        this.template.remove();
        Foundation.unregisterPlugin(this);
    };
    Foundation.plugin(Tooltip, "Tooltip");
}(jQuery, window.document, window.Foundation);

!function(e, t) {
    "function" == typeof define && define.amd ? define([], function() {
        return t();
    }) : "object" == typeof exports ? module.exports = t() : e.whatInput = t();
}(this, function() {
    "use strict";
    function e(e) {
        clearTimeout(s), n(e), f = !0, s = setTimeout(function() {
            f = !1;
        }, 1e3);
    }
    function t(e) {
        f || n(e);
    }
    function n(e) {
        var t = o(e), n = r(e), d = w[e.type];
        "pointer" === d && (d = i(e)), p !== d && (!y && p && "keyboard" === d && "tab" !== v[t] && m.indexOf(n.nodeName.toLowerCase()) >= 0 || (p = d, 
        a.setAttribute("data-whatinput", p), -1 === h.indexOf(p) && h.push(p))), "keyboard" === d && u(t);
    }
    function o(e) {
        return e.keyCode ? e.keyCode : e.which;
    }
    function r(e) {
        return e.target || e.srcElement;
    }
    function i(e) {
        return "number" == typeof e.pointerType ? b[e.pointerType] : e.pointerType;
    }
    function u(e) {
        -1 === c.indexOf(v[e]) && v[e] && c.push(v[e]);
    }
    function d(e) {
        var t = o(e), n = c.indexOf(v[t]);
        -1 !== n && c.splice(n, 1);
    }
    var s, c = [], a = document.body, f = !1, p = null, m = [ "input", "select", "textarea" ], y = a.hasAttribute("data-whatinput-formtyping"), w = {
        keydown: "keyboard",
        mousedown: "mouse",
        mouseenter: "mouse",
        touchstart: "touch",
        pointerdown: "pointer",
        MSPointerDown: "pointer"
    }, h = [], v = {
        9: "tab",
        13: "enter",
        16: "shift",
        27: "esc",
        32: "space",
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    }, b = {
        2: "touch",
        3: "touch",
        4: "mouse"
    };
    return function() {
        var n = "mousedown";
        window.PointerEvent ? n = "pointerdown" : window.MSPointerEvent && (n = "MSPointerDown"), 
        a.addEventListener(n, t), a.addEventListener("mouseenter", t), "ontouchstart" in document.documentElement && a.addEventListener("touchstart", e), 
        a.addEventListener("keydown", t), a.addEventListener("keyup", d);
    }(), {
        ask: function() {
            return p;
        },
        keys: function() {
            return c;
        },
        types: function() {
            return h;
        },
        set: n
    };
});

(function(i, s, o, g, r, a, m) {
    i["GoogleAnalyticsObject"] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
})(window, document, "script", "//www.google-analytics.com/analytics.js", "ga");

ga("create", "UA-850650-2", "auto");

ga("send", "pageview");

$(document).ready(function() {
    var id = $("body").attr("id");
    if (id == "home") {
        var d = new Date();
        $("#scene").css("background", "url(/images/headers/" + d.getDate() + ".jpg) bottom center no-repeat");
    } else {
        var header = headers[Math.round(Math.random() * (headers.length - 1 - 0) + 0)];
        $("#scene").css("background", "url(/" + header.slice(0) + ") center center no-repeat");
    }
    $("#scene").css("background-size", "cover");
    $(".top-bar ul li:not(.active) a").hover(function() {
        $(this).addClass("animated pulse");
    }, function() {
        $(this).removeClass("animated pulse");
    });
    $("#resume .item img, #resume .item a").hover(function() {
        var $this = $(this).parent().find(".thm");
        $($this).addClass("pulse");
    }, function() {
        var $this = $(this).parent().find(".thm");
        $($this).removeClass("pulse");
    });
    if (id == "services" || id == "home") {
        $(".sitethumb").hover(function() {
            $(this).addClass("animated site-hover").find(".nameplate").fadeIn(250);
        }, function() {
            $(this).removeClass("animated site-hover");
            $(this).find(".nameplate").fadeOut(250);
        });
    }
});