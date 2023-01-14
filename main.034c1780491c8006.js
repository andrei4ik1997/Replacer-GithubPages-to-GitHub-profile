"use strict";
(self.webpackChunkGitHub_Replacer =
  self.webpackChunkGitHub_Replacer || []).push([
  [179],
  {
    889: (Ue, re, R) => {
      var v = R(256),
        L = R(895);
      class ee extends L.w_ {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      }
      class Z extends ee {
        static makeCurrent() {
          (0, L.HT)(new Z());
        }
        onAndCancel(i, r, l) {
          return (
            i.addEventListener(r, l, !1),
            () => {
              i.removeEventListener(r, l, !1);
            }
          );
        }
        dispatchEvent(i, r) {
          i.dispatchEvent(r);
        }
        remove(i) {
          i.parentNode && i.parentNode.removeChild(i);
        }
        createElement(i, r) {
          return (r = r || this.getDefaultDocument()).createElement(i);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument("fakeTitle");
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(i) {
          return i.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(i) {
          return i instanceof DocumentFragment;
        }
        getGlobalEventTarget(i, r) {
          return "window" === r
            ? window
            : "document" === r
            ? i
            : "body" === r
            ? i.body
            : null;
        }
        getBaseHref(i) {
          const r = (function pe() {
            return (
              (W = W || document.querySelector("base")),
              W ? W.getAttribute("href") : null
            );
          })();
          return null == r
            ? null
            : (function xe(a) {
                (ae = ae || document.createElement("a")),
                  ae.setAttribute("href", a);
                const i = ae.pathname;
                return "/" === i.charAt(0) ? i : `/${i}`;
              })(r);
        }
        resetBaseElement() {
          W = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(i) {
          return (0, L.Mx)(document.cookie, i);
        }
      }
      let ae,
        W = null;
      const ve = new v.OlP("TRANSITION_ID"),
        H = [
          {
            provide: v.ip1,
            useFactory: function Q(a, i, r) {
              return () => {
                r.get(v.CZH).donePromise.then(() => {
                  const l = (0, L.q)(),
                    c = i.querySelectorAll(`style[ng-transition="${a}"]`);
                  for (let f = 0; f < c.length; f++) l.remove(c[f]);
                });
              };
            },
            deps: [ve, L.K0, v.zs3],
            multi: !0
          }
        ];
      let He = (() => {
        class a {
          build() {
            return new XMLHttpRequest();
          }
        }
        return (
          (a.ɵfac = function (r) {
            return new (r || a)();
          }),
          (a.ɵprov = v.Yz7({ token: a, factory: a.ɵfac })),
          a
        );
      })();
      const X = new v.OlP("EventManagerPlugins");
      let Se = (() => {
        class a {
          constructor(r, l) {
            (this._zone = l),
              (this._eventNameToPlugin = new Map()),
              r.forEach(c => (c.manager = this)),
              (this._plugins = r.slice().reverse());
          }
          addEventListener(r, l, c) {
            return this._findPluginFor(l).addEventListener(r, l, c);
          }
          addGlobalEventListener(r, l, c) {
            return this._findPluginFor(l).addGlobalEventListener(r, l, c);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(r) {
            const l = this._eventNameToPlugin.get(r);
            if (l) return l;
            const c = this._plugins;
            for (let f = 0; f < c.length; f++) {
              const y = c[f];
              if (y.supports(r)) return this._eventNameToPlugin.set(r, y), y;
            }
            throw new Error(`No event manager plugin found for event ${r}`);
          }
        }
        return (
          (a.ɵfac = function (r) {
            return new (r || a)(v.LFG(X), v.LFG(v.R0b));
          }),
          (a.ɵprov = v.Yz7({ token: a, factory: a.ɵfac })),
          a
        );
      })();
      class we {
        constructor(i) {
          this._doc = i;
        }
        addGlobalEventListener(i, r, l) {
          const c = (0, L.q)().getGlobalEventTarget(this._doc, i);
          if (!c)
            throw new Error(`Unsupported event target ${c} for event ${r}`);
          return this.addEventListener(c, r, l);
        }
      }
      let Ve = (() => {
          class a {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(r) {
              const l = new Set();
              r.forEach(c => {
                this._stylesSet.has(c) || (this._stylesSet.add(c), l.add(c));
              }),
                this.onStylesAdded(l);
            }
            onStylesAdded(r) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            (a.ɵfac = function (r) {
              return new (r || a)();
            }),
            (a.ɵprov = v.Yz7({ token: a, factory: a.ɵfac })),
            a
          );
        })(),
        Ze = (() => {
          class a extends Ve {
            constructor(r) {
              super(),
                (this._doc = r),
                (this._hostNodes = new Map()),
                this._hostNodes.set(r.head, []);
            }
            _addStylesToHost(r, l, c) {
              r.forEach(f => {
                const y = this._doc.createElement("style");
                (y.textContent = f), c.push(l.appendChild(y));
              });
            }
            addHost(r) {
              const l = [];
              this._addStylesToHost(this._stylesSet, r, l),
                this._hostNodes.set(r, l);
            }
            removeHost(r) {
              const l = this._hostNodes.get(r);
              l && l.forEach(ht), this._hostNodes.delete(r);
            }
            onStylesAdded(r) {
              this._hostNodes.forEach((l, c) => {
                this._addStylesToHost(r, c, l);
              });
            }
            ngOnDestroy() {
              this._hostNodes.forEach(r => r.forEach(ht));
            }
          }
          return (
            (a.ɵfac = function (r) {
              return new (r || a)(v.LFG(L.K0));
            }),
            (a.ɵprov = v.Yz7({ token: a, factory: a.ɵfac })),
            a
          );
        })();
      function ht(a) {
        (0, L.q)().remove(a);
      }
      const le = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
          math: "http://www.w3.org/1998/MathML/"
        },
        de = /%COMP%/g;
      function A(a, i) {
        return i.flat(100).map(r => r.replace(de, a));
      }
      function N(a) {
        return i => {
          if ("__ngUnwrap__" === i) return a;
          !1 === a(i) && (i.preventDefault(), (i.returnValue = !1));
        };
      }
      let $ = (() => {
        class a {
          constructor(r, l, c) {
            (this.eventManager = r),
              (this.sharedStylesHost = l),
              (this.appId = c),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new x(r));
          }
          createRenderer(r, l) {
            if (!r || !l) return this.defaultRenderer;
            switch (l.encapsulation) {
              case v.ifc.Emulated: {
                let c = this.rendererByCompId.get(l.id);
                return (
                  c ||
                    ((c = new at(
                      this.eventManager,
                      this.sharedStylesHost,
                      l,
                      this.appId
                    )),
                    this.rendererByCompId.set(l.id, c)),
                  c.applyToHost(r),
                  c
                );
              }
              case v.ifc.ShadowDom:
                return new In(this.eventManager, this.sharedStylesHost, r, l);
              default:
                if (!this.rendererByCompId.has(l.id)) {
                  const c = A(l.id, l.styles);
                  this.sharedStylesHost.addStyles(c),
                    this.rendererByCompId.set(l.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (a.ɵfac = function (r) {
            return new (r || a)(v.LFG(Se), v.LFG(Ze), v.LFG(v.AFp));
          }),
          (a.ɵprov = v.Yz7({ token: a, factory: a.ɵfac })),
          a
        );
      })();
      class x {
        constructor(i) {
          (this.eventManager = i),
            (this.data = Object.create(null)),
            (this.destroyNode = null);
        }
        destroy() {}
        createElement(i, r) {
          return r
            ? document.createElementNS(le[r] || r, i)
            : document.createElement(i);
        }
        createComment(i) {
          return document.createComment(i);
        }
        createText(i) {
          return document.createTextNode(i);
        }
        appendChild(i, r) {
          (ke(i) ? i.content : i).appendChild(r);
        }
        insertBefore(i, r, l) {
          i && (ke(i) ? i.content : i).insertBefore(r, l);
        }
        removeChild(i, r) {
          i && i.removeChild(r);
        }
        selectRootElement(i, r) {
          let l = "string" == typeof i ? document.querySelector(i) : i;
          if (!l)
            throw new Error(`The selector "${i}" did not match any elements`);
          return r || (l.textContent = ""), l;
        }
        parentNode(i) {
          return i.parentNode;
        }
        nextSibling(i) {
          return i.nextSibling;
        }
        setAttribute(i, r, l, c) {
          if (c) {
            r = c + ":" + r;
            const f = le[c];
            f ? i.setAttributeNS(f, r, l) : i.setAttribute(r, l);
          } else i.setAttribute(r, l);
        }
        removeAttribute(i, r, l) {
          if (l) {
            const c = le[l];
            c ? i.removeAttributeNS(c, r) : i.removeAttribute(`${l}:${r}`);
          } else i.removeAttribute(r);
        }
        addClass(i, r) {
          i.classList.add(r);
        }
        removeClass(i, r) {
          i.classList.remove(r);
        }
        setStyle(i, r, l, c) {
          c & (v.JOm.DashCase | v.JOm.Important)
            ? i.style.setProperty(r, l, c & v.JOm.Important ? "important" : "")
            : (i.style[r] = l);
        }
        removeStyle(i, r, l) {
          l & v.JOm.DashCase ? i.style.removeProperty(r) : (i.style[r] = "");
        }
        setProperty(i, r, l) {
          i[r] = l;
        }
        setValue(i, r) {
          i.nodeValue = r;
        }
        listen(i, r, l) {
          return "string" == typeof i
            ? this.eventManager.addGlobalEventListener(i, r, N(l))
            : this.eventManager.addEventListener(i, r, N(l));
        }
      }
      function ke(a) {
        return "TEMPLATE" === a.tagName && void 0 !== a.content;
      }
      class at extends x {
        constructor(i, r, l, c) {
          super(i), (this.component = l);
          const f = A(c + "-" + l.id, l.styles);
          r.addStyles(f),
            (this.contentAttr = (function oe(a) {
              return "_ngcontent-%COMP%".replace(de, a);
            })(c + "-" + l.id)),
            (this.hostAttr = (function K(a) {
              return "_nghost-%COMP%".replace(de, a);
            })(c + "-" + l.id));
        }
        applyToHost(i) {
          super.setAttribute(i, this.hostAttr, "");
        }
        createElement(i, r) {
          const l = super.createElement(i, r);
          return super.setAttribute(l, this.contentAttr, ""), l;
        }
      }
      class In extends x {
        constructor(i, r, l, c) {
          super(i),
            (this.sharedStylesHost = r),
            (this.hostEl = l),
            (this.shadowRoot = l.attachShadow({ mode: "open" })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const f = A(c.id, c.styles);
          for (let y = 0; y < f.length; y++) {
            const E = document.createElement("style");
            (E.textContent = f[y]), this.shadowRoot.appendChild(E);
          }
        }
        nodeOrShadowRoot(i) {
          return i === this.hostEl ? this.shadowRoot : i;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(i, r) {
          return super.appendChild(this.nodeOrShadowRoot(i), r);
        }
        insertBefore(i, r, l) {
          return super.insertBefore(this.nodeOrShadowRoot(i), r, l);
        }
        removeChild(i, r) {
          return super.removeChild(this.nodeOrShadowRoot(i), r);
        }
        parentNode(i) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(i))
          );
        }
      }
      let Ae = (() => {
        class a extends we {
          constructor(r) {
            super(r);
          }
          supports(r) {
            return !0;
          }
          addEventListener(r, l, c) {
            return (
              r.addEventListener(l, c, !1),
              () => this.removeEventListener(r, l, c)
            );
          }
          removeEventListener(r, l, c) {
            return r.removeEventListener(l, c);
          }
        }
        return (
          (a.ɵfac = function (r) {
            return new (r || a)(v.LFG(L.K0));
          }),
          (a.ɵprov = v.Yz7({ token: a, factory: a.ɵfac })),
          a
        );
      })();
      const Zt = ["alt", "control", "meta", "shift"],
        Rr = {
          "\b": "Backspace",
          "\t": "Tab",
          "\x7f": "Delete",
          "\x1b": "Escape",
          Del: "Delete",
          Esc: "Escape",
          Left: "ArrowLeft",
          Right: "ArrowRight",
          Up: "ArrowUp",
          Down: "ArrowDown",
          Menu: "ContextMenu",
          Scroll: "ScrollLock",
          Win: "OS"
        },
        vt = {
          alt: a => a.altKey,
          control: a => a.ctrlKey,
          meta: a => a.metaKey,
          shift: a => a.shiftKey
        };
      let Tn = (() => {
        class a extends we {
          constructor(r) {
            super(r);
          }
          supports(r) {
            return null != a.parseEventName(r);
          }
          addEventListener(r, l, c) {
            const f = a.parseEventName(l),
              y = a.eventCallback(f.fullKey, c, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() =>
                (0, L.q)().onAndCancel(r, f.domEventName, y)
              );
          }
          static parseEventName(r) {
            const l = r.toLowerCase().split("."),
              c = l.shift();
            if (0 === l.length || ("keydown" !== c && "keyup" !== c))
              return null;
            const f = a._normalizeKey(l.pop());
            let y = "",
              E = l.indexOf("code");
            if (
              (E > -1 && (l.splice(E, 1), (y = "code.")),
              Zt.forEach(T => {
                const O = l.indexOf(T);
                O > -1 && (l.splice(O, 1), (y += T + "."));
              }),
              (y += f),
              0 != l.length || 0 === f.length)
            )
              return null;
            const S = {};
            return (S.domEventName = c), (S.fullKey = y), S;
          }
          static matchEventFullKeyCode(r, l) {
            let c = Rr[r.key] || r.key,
              f = "";
            return (
              l.indexOf("code.") > -1 && ((c = r.code), (f = "code.")),
              !(null == c || !c) &&
                ((c = c.toLowerCase()),
                " " === c ? (c = "space") : "." === c && (c = "dot"),
                Zt.forEach(y => {
                  y !== c && (0, vt[y])(r) && (f += y + ".");
                }),
                (f += c),
                f === l)
            );
          }
          static eventCallback(r, l, c) {
            return f => {
              a.matchEventFullKeyCode(f, r) && c.runGuarded(() => l(f));
            };
          }
          static _normalizeKey(r) {
            return "esc" === r ? "escape" : r;
          }
        }
        return (
          (a.ɵfac = function (r) {
            return new (r || a)(v.LFG(L.K0));
          }),
          (a.ɵprov = v.Yz7({ token: a, factory: a.ɵfac })),
          a
        );
      })();
      function Iu(a) {
        return {
          appProviders: [...Ut, ...(a?.providers ?? [])],
          platformProviders: $a
        };
      }
      const $a = [
          { provide: v.Lbi, useValue: L.bD },
          {
            provide: v.g9A,
            useValue: function Xe() {
              Z.makeCurrent();
            },
            multi: !0
          },
          {
            provide: L.K0,
            useFactory: function Mu() {
              return (0, v.RDi)(document), document;
            },
            deps: []
          }
        ],
        ja = new v.OlP(""),
        ji = [
          {
            provide: v.rWj,
            useClass: class ie {
              addToWindow(i) {
                (v.dqk.getAngularTestability = (l, c = !0) => {
                  const f = i.findTestabilityInTree(l, c);
                  if (null == f)
                    throw new Error("Could not find testability for element.");
                  return f;
                }),
                  (v.dqk.getAllAngularTestabilities = () =>
                    i.getAllTestabilities()),
                  (v.dqk.getAllAngularRootElements = () =>
                    i.getAllRootElements()),
                  v.dqk.frameworkStabilizers ||
                    (v.dqk.frameworkStabilizers = []),
                  v.dqk.frameworkStabilizers.push(l => {
                    const c = v.dqk.getAllAngularTestabilities();
                    let f = c.length,
                      y = !1;
                    const E = function (S) {
                      (y = y || S), f--, 0 == f && l(y);
                    };
                    c.forEach(function (S) {
                      S.whenStable(E);
                    });
                  });
              }
              findTestabilityInTree(i, r, l) {
                return null == r
                  ? null
                  : i.getTestability(r) ??
                      (l
                        ? (0, L.q)().isShadowRoot(r)
                          ? this.findTestabilityInTree(i, r.host, !0)
                          : this.findTestabilityInTree(i, r.parentElement, !0)
                        : null);
              }
            },
            deps: []
          },
          { provide: v.lri, useClass: v.dDg, deps: [v.R0b, v.eoX, v.rWj] },
          { provide: v.dDg, useClass: v.dDg, deps: [v.R0b, v.eoX, v.rWj] }
        ],
        Ut = [
          { provide: v.zSh, useValue: "root" },
          {
            provide: v.qLn,
            useFactory: function Tu() {
              return new v.qLn();
            },
            deps: []
          },
          { provide: X, useClass: Ae, multi: !0, deps: [L.K0, v.R0b, v.Lbi] },
          { provide: X, useClass: Tn, multi: !0, deps: [L.K0] },
          { provide: $, useClass: $, deps: [Se, Ze, v.AFp] },
          { provide: v.FYo, useExisting: $ },
          { provide: Ve, useExisting: Ze },
          { provide: Ze, useClass: Ze, deps: [L.K0] },
          { provide: Se, useClass: Se, deps: [X, v.R0b] },
          { provide: L.JF, useClass: He, deps: [] },
          []
        ];
      let ps = (() => {
          class a {
            constructor(r) {}
            static withServerTransition(r) {
              return {
                ngModule: a,
                providers: [
                  { provide: v.AFp, useValue: r.appId },
                  { provide: ve, useExisting: v.AFp },
                  H
                ]
              };
            }
          }
          return (
            (a.ɵfac = function (r) {
              return new (r || a)(v.LFG(ja, 12));
            }),
            (a.ɵmod = v.oAB({ type: a })),
            (a.ɵinj = v.cJS({
              providers: [...Ut, ...ji],
              imports: [L.ez, v.hGG]
            })),
            a
          );
        })(),
        Rn = (() => {
          class a {
            constructor(r) {
              this._doc = r;
            }
            getTitle() {
              return this._doc.title;
            }
            setTitle(r) {
              this._doc.title = r || "";
            }
          }
          return (
            (a.ɵfac = function (r) {
              return new (r || a)(v.LFG(L.K0));
            }),
            (a.ɵprov = v.Yz7({
              token: a,
              factory: function (r) {
                let l = null;
                return (
                  (l = r
                    ? new r()
                    : (function ao() {
                        return new Rn((0, v.LFG)(L.K0));
                      })()),
                  l
                );
              },
              providedIn: "root"
            })),
            a
          );
        })();
      typeof window < "u" && window;
      var Tt = R(76),
        Zn = R(669);
      function fe(...a) {
        const i = (0, Zn.yG)(a);
        return (0, Tt.D)(a, i);
      }
      var Ht = R(579);
      class Pn extends Ht.x {
        constructor(i) {
          super(), (this._value = i);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(i) {
          const r = super._subscribe(i);
          return !r.closed && i.next(this._value), r;
        }
        getValue() {
          const { hasError: i, thrownError: r, _value: l } = this;
          if (i) throw r;
          return this._throwIfClosed(), l;
        }
        next(i) {
          super.next((this._value = i));
        }
      }
      const sn = (0, R(888).d)(
        a =>
          function () {
            a(this),
              (this.name = "EmptyError"),
              (this.message = "no elements in sequence");
          }
      );
      var on = R(751),
        qe = R(742),
        Xn = R(671),
        Ds = R(268),
        _s = R(810),
        Ft = R(403),
        Hn = R(672);
      function Nr(...a) {
        const i = (0, Zn.yG)(a),
          r = (0, Zn.jO)(a),
          { args: l, keys: c } = (0, qe.D)(a);
        if (0 === l.length) return (0, Tt.D)([], i);
        const f = new on.y(
          (function Ga(a, i, r = Xn.y) {
            return l => {
              Or(
                i,
                () => {
                  const { length: c } = a,
                    f = new Array(c);
                  let y = c,
                    E = c;
                  for (let S = 0; S < c; S++)
                    Or(
                      i,
                      () => {
                        const T = (0, Tt.D)(a[S], i);
                        let O = !1;
                        T.subscribe(
                          (0, Ft.x)(
                            l,
                            V => {
                              (f[S] = V),
                                O || ((O = !0), E--),
                                E || l.next(r(f.slice()));
                            },
                            () => {
                              --y || l.complete();
                            }
                          )
                        );
                      },
                      l
                    );
                },
                l
              );
            };
          })(l, i, c ? y => (0, _s.n)(c, y) : Xn.y)
        );
        return r ? f.pipe((0, Ds.Z)(r)) : f;
      }
      function Or(a, i, r) {
        a ? (0, Hn.f)(r, a, i) : i();
      }
      var pr = R(189);
      function Hi(...a) {
        return (function Es() {
          return (0, pr.J)(1);
        })()((0, Tt.D)(a, (0, Zn.yG)(a)));
      }
      var Vi = R(421);
      function co(a) {
        return new on.y(i => {
          (0, Vi.Xf)(a()).subscribe(i);
        });
      }
      var fo = R(635),
        zi = R(576);
      function gr(a, i) {
        const r = (0, zi.m)(a) ? a : () => a,
          l = c => c.error(r());
        return new on.y(i ? c => i.schedule(l, 0, c) : l);
      }
      var je = R(515),
        xt = R(727),
        et = R(482);
      function Vn() {
        return (0, et.e)((a, i) => {
          let r = null;
          a._refCount++;
          const l = (0, Ft.x)(i, void 0, void 0, void 0, () => {
            if (!a || a._refCount <= 0 || 0 < --a._refCount)
              return void (r = null);
            const c = a._connection,
              f = r;
            (r = null),
              c && (!f || c === f) && c.unsubscribe(),
              i.unsubscribe();
          });
          a.subscribe(l), l.closed || (r = a.connect());
        });
      }
      class Xt extends on.y {
        constructor(i, r) {
          super(),
            (this.source = i),
            (this.subjectFactory = r),
            (this._subject = null),
            (this._refCount = 0),
            (this._connection = null),
            (0, et.A)(i) && (this.lift = i.lift);
        }
        _subscribe(i) {
          return this.getSubject().subscribe(i);
        }
        getSubject() {
          const i = this._subject;
          return (
            (!i || i.isStopped) && (this._subject = this.subjectFactory()),
            this._subject
          );
        }
        _teardown() {
          this._refCount = 0;
          const { _connection: i } = this;
          (this._subject = this._connection = null), i?.unsubscribe();
        }
        connect() {
          let i = this._connection;
          if (!i) {
            i = this._connection = new xt.w0();
            const r = this.getSubject();
            i.add(
              this.source.subscribe(
                (0, Ft.x)(
                  r,
                  void 0,
                  () => {
                    this._teardown(), r.complete();
                  },
                  l => {
                    this._teardown(), r.error(l);
                  },
                  () => this._teardown()
                )
              )
            ),
              i.closed && ((this._connection = null), (i = xt.w0.EMPTY));
          }
          return i;
        }
        refCount() {
          return Vn()(this);
        }
      }
      var Oe = R(4);
      function te(a, i) {
        return (0, et.e)((r, l) => {
          let c = null,
            f = 0,
            y = !1;
          const E = () => y && !c && l.complete();
          r.subscribe(
            (0, Ft.x)(
              l,
              S => {
                c?.unsubscribe();
                let T = 0;
                const O = f++;
                (0, Vi.Xf)(a(S, O)).subscribe(
                  (c = (0, Ft.x)(
                    l,
                    V => l.next(i ? i(S, V, O, T++) : V),
                    () => {
                      (c = null), E();
                    }
                  ))
                );
              },
              () => {
                (y = !0), E();
              }
            )
          );
        });
      }
      function Re(a) {
        return a <= 0
          ? () => je.E
          : (0, et.e)((i, r) => {
              let l = 0;
              i.subscribe(
                (0, Ft.x)(r, c => {
                  ++l <= a && (r.next(c), a <= l && r.complete());
                })
              );
            });
      }
      function wt(a, i) {
        return (0, et.e)((r, l) => {
          let c = 0;
          r.subscribe((0, Ft.x)(l, f => a.call(i, f, c++) && l.next(f)));
        });
      }
      var gt = R(577);
      function Mt(a) {
        return (0, et.e)((i, r) => {
          let l = !1;
          i.subscribe(
            (0, Ft.x)(
              r,
              c => {
                (l = !0), r.next(c);
              },
              () => {
                l || r.next(a), r.complete();
              }
            )
          );
        });
      }
      function Fr(a = ct) {
        return (0, et.e)((i, r) => {
          let l = !1;
          i.subscribe(
            (0, Ft.x)(
              r,
              c => {
                (l = !0), r.next(c);
              },
              () => (l ? r.complete() : r.error(a()))
            )
          );
        });
      }
      function ct() {
        return new sn();
      }
      function Nn(a, i) {
        const r = arguments.length >= 2;
        return l =>
          l.pipe(
            a ? wt((c, f) => a(c, f, l)) : Xn.y,
            Re(1),
            r ? Mt(i) : Fr(() => new sn())
          );
      }
      function zn(a, i) {
        return (0, zi.m)(i) ? (0, gt.z)(a, i, 1) : (0, gt.z)(a, 1);
      }
      function me(a, i, r) {
        const l =
          (0, zi.m)(a) || i || r ? { next: a, error: i, complete: r } : a;
        return l
          ? (0, et.e)((c, f) => {
              var y;
              null === (y = l.subscribe) || void 0 === y || y.call(l);
              let E = !0;
              c.subscribe(
                (0, Ft.x)(
                  f,
                  S => {
                    var T;
                    null === (T = l.next) || void 0 === T || T.call(l, S),
                      f.next(S);
                  },
                  () => {
                    var S;
                    (E = !1),
                      null === (S = l.complete) || void 0 === S || S.call(l),
                      f.complete();
                  },
                  S => {
                    var T;
                    (E = !1),
                      null === (T = l.error) || void 0 === T || T.call(l, S),
                      f.error(S);
                  },
                  () => {
                    var S, T;
                    E &&
                      (null === (S = l.unsubscribe) ||
                        void 0 === S ||
                        S.call(l)),
                      null === (T = l.finalize) || void 0 === T || T.call(l);
                  }
                )
              );
            })
          : Xn.y;
      }
      function Gn(a) {
        return (0, et.e)((i, r) => {
          let f,
            l = null,
            c = !1;
          (l = i.subscribe(
            (0, Ft.x)(r, void 0, void 0, y => {
              (f = (0, Vi.Xf)(a(y, Gn(a)(i)))),
                l ? (l.unsubscribe(), (l = null), f.subscribe(r)) : (c = !0);
            })
          )),
            c && (l.unsubscribe(), (l = null), f.subscribe(r));
        });
      }
      function Wt(a, i, r, l, c) {
        return (f, y) => {
          let E = r,
            S = i,
            T = 0;
          f.subscribe(
            (0, Ft.x)(
              y,
              O => {
                const V = T++;
                (S = E ? a(S, O, V) : ((E = !0), O)), l && y.next(S);
              },
              c &&
                (() => {
                  E && y.next(S), y.complete();
                })
            )
          );
        };
      }
      function ws(a, i) {
        return (0, et.e)(Wt(a, i, arguments.length >= 2, !0));
      }
      function Jn(a) {
        return a <= 0
          ? () => je.E
          : (0, et.e)((i, r) => {
              let l = [];
              i.subscribe(
                (0, Ft.x)(
                  r,
                  c => {
                    l.push(c), a < l.length && l.shift();
                  },
                  () => {
                    for (const c of l) r.next(c);
                    r.complete();
                  },
                  void 0,
                  () => {
                    l = null;
                  }
                )
              );
            });
      }
      function Lt(a, i) {
        const r = arguments.length >= 2;
        return l =>
          l.pipe(
            a ? wt((c, f) => a(c, f, l)) : Xn.y,
            Jn(1),
            r ? Mt(i) : Fr(() => new sn())
          );
      }
      function fn(a) {
        return (0, et.e)((i, r) => {
          try {
            i.subscribe(r);
          } finally {
            r.add(a);
          }
        });
      }
      const Pe = "primary",
        Lr = Symbol("RouteTitle");
      class ot {
        constructor(i) {
          this.params = i || {};
        }
        has(i) {
          return Object.prototype.hasOwnProperty.call(this.params, i);
        }
        get(i) {
          if (this.has(i)) {
            const r = this.params[i];
            return Array.isArray(r) ? r[0] : r;
          }
          return null;
        }
        getAll(i) {
          if (this.has(i)) {
            const r = this.params[i];
            return Array.isArray(r) ? r : [r];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function ri(a) {
        return new ot(a);
      }
      function Cs(a, i, r) {
        const l = r.path.split("/");
        if (
          l.length > a.length ||
          ("full" === r.pathMatch && (i.hasChildren() || l.length < a.length))
        )
          return null;
        const c = {};
        for (let f = 0; f < l.length; f++) {
          const y = l[f],
            E = a[f];
          if (y.startsWith(":")) c[y.substring(1)] = E;
          else if (y !== E.path) return null;
        }
        return { consumed: a.slice(0, l.length), posParams: c };
      }
      function an(a, i) {
        const r = a ? Object.keys(a) : void 0,
          l = i ? Object.keys(i) : void 0;
        if (!r || !l || r.length != l.length) return !1;
        let c;
        for (let f = 0; f < r.length; f++)
          if (((c = r[f]), !ii(a[c], i[c]))) return !1;
        return !0;
      }
      function ii(a, i) {
        if (Array.isArray(a) && Array.isArray(i)) {
          if (a.length !== i.length) return !1;
          const r = [...a].sort(),
            l = [...i].sort();
          return r.every((c, f) => l[f] === c);
        }
        return a === i;
      }
      function mr(a) {
        return Array.prototype.concat.apply([], a);
      }
      function Vt(a) {
        return a.length > 0 ? a[a.length - 1] : null;
      }
      function Je(a, i) {
        for (const r in a) a.hasOwnProperty(r) && i(a[r], r);
      }
      function Rt(a) {
        return (0, v.CqO)(a)
          ? a
          : (0, v.QGY)(a)
          ? (0, Tt.D)(Promise.resolve(a))
          : fe(a);
      }
      const yr = !1,
        si = {
          exact: function bs(a, i, r) {
            if (
              !ai(a.segments, i.segments) ||
              !Gi(a.segments, i.segments, r) ||
              a.numberOfChildren !== i.numberOfChildren
            )
              return !1;
            for (const l in i.children)
              if (!a.children[l] || !bs(a.children[l], i.children[l], r))
                return !1;
            return !0;
          },
          subset: Wa
        },
        oi = {
          exact: function Ss(a, i) {
            return an(a, i);
          },
          subset: function Ou(a, i) {
            return (
              Object.keys(i).length <= Object.keys(a).length &&
              Object.keys(i).every(r => ii(a[r], i[r]))
            );
          },
          ignored: () => !0
        };
      function hn(a, i, r) {
        return (
          si[r.paths](a.root, i.root, r.matrixParams) &&
          oi[r.queryParams](a.queryParams, i.queryParams) &&
          !("exact" === r.fragment && a.fragment !== i.fragment)
        );
      }
      function Wa(a, i, r) {
        return qa(a, i, i.segments, r);
      }
      function qa(a, i, r, l) {
        if (a.segments.length > r.length) {
          const c = a.segments.slice(0, r.length);
          return !(!ai(c, r) || i.hasChildren() || !Gi(c, r, l));
        }
        if (a.segments.length === r.length) {
          if (!ai(a.segments, r) || !Gi(a.segments, r, l)) return !1;
          for (const c in i.children)
            if (!a.children[c] || !Wa(a.children[c], i.children[c], l))
              return !1;
          return !0;
        }
        {
          const c = r.slice(0, a.segments.length),
            f = r.slice(a.segments.length);
          return (
            !!(ai(a.segments, c) && Gi(a.segments, c, l) && a.children[Pe]) &&
            qa(a.children[Pe], i, f, l)
          );
        }
      }
      function Gi(a, i, r) {
        return i.every((l, c) => oi[r](a[c].parameters, l.parameters));
      }
      class kr {
        constructor(i = new ze([], {}), r = {}, l = null) {
          (this.root = i), (this.queryParams = r), (this.fragment = l);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = ri(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return Fu.serialize(this);
        }
      }
      class ze {
        constructor(i, r) {
          (this.segments = i),
            (this.children = r),
            (this.parent = null),
            Je(r, (l, c) => (l.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return Ts(this);
        }
      }
      class Wi {
        constructor(i, r) {
          (this.path = i), (this.parameters = r);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = ri(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return qi(this);
        }
      }
      function ai(a, i) {
        return a.length === i.length && a.every((r, l) => r.path === i[l].path);
      }
      let Is = (() => {
        class a {}
        return (
          (a.ɵfac = function (r) {
            return new (r || a)();
          }),
          (a.ɵprov = v.Yz7({
            token: a,
            factory: function () {
              return new Ka();
            },
            providedIn: "root"
          })),
          a
        );
      })();
      class Ka {
        parse(i) {
          const r = new gn(i);
          return new kr(
            r.parseRootSegment(),
            r.parseQueryParams(),
            r.parseFragment()
          );
        }
        serialize(i) {
          const r = `/${vr(i.root, !0)}`,
            l = (function Za(a) {
              const i = Object.keys(a)
                .map(r => {
                  const l = a[r];
                  return Array.isArray(l)
                    ? l.map(c => `${po(r)}=${po(c)}`).join("&")
                    : `${po(r)}=${po(l)}`;
                })
                .filter(r => !!r);
              return i.length ? `?${i.join("&")}` : "";
            })(i.queryParams);
          return `${r}${l}${
            "string" == typeof i.fragment
              ? `#${(function xu(a) {
                  return encodeURI(a);
                })(i.fragment)}`
              : ""
          }`;
        }
      }
      const Fu = new Ka();
      function Ts(a) {
        return a.segments.map(i => qi(i)).join("/");
      }
      function vr(a, i) {
        if (!a.hasChildren()) return Ts(a);
        if (i) {
          const r = a.children[Pe] ? vr(a.children[Pe], !1) : "",
            l = [];
          return (
            Je(a.children, (c, f) => {
              f !== Pe && l.push(`${f}:${vr(c, !1)}`);
            }),
            l.length > 0 ? `${r}(${l.join("//")})` : r
          );
        }
        {
          const r = (function Jd(a, i) {
            let r = [];
            return (
              Je(a.children, (l, c) => {
                c === Pe && (r = r.concat(i(l, c)));
              }),
              Je(a.children, (l, c) => {
                c !== Pe && (r = r.concat(i(l, c)));
              }),
              r
            );
          })(a, (l, c) =>
            c === Pe ? [vr(a.children[Pe], !1)] : [`${c}:${vr(l, !1)}`]
          );
          return 1 === Object.keys(a.children).length && null != a.children[Pe]
            ? `${Ts(a)}/${r[0]}`
            : `${Ts(a)}/(${r.join("//")})`;
        }
      }
      function Ms(a) {
        return encodeURIComponent(a)
          .replace(/%40/g, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",");
      }
      function po(a) {
        return Ms(a).replace(/%3B/gi, ";");
      }
      function Ya(a) {
        return Ms(a)
          .replace(/\(/g, "%28")
          .replace(/\)/g, "%29")
          .replace(/%26/gi, "&");
      }
      function pn(a) {
        return decodeURIComponent(a);
      }
      function Qa(a) {
        return pn(a.replace(/\+/g, "%20"));
      }
      function qi(a) {
        return `${Ya(a.path)}${(function go(a) {
          return Object.keys(a)
            .map(i => `;${Ya(i)}=${Ya(a[i])}`)
            .join("");
        })(a.parameters)}`;
      }
      const mo = /^[^\/()?;=#]+/;
      function li(a) {
        const i = a.match(mo);
        return i ? i[0] : "";
      }
      const ui = /^[^=?&#]+/,
        As = /^[^&#]+/;
      class gn {
        constructor(i) {
          (this.url = i), (this.remaining = i);
        }
        parseRootSegment() {
          return (
            this.consumeOptional("/"),
            "" === this.remaining ||
            this.peekStartsWith("?") ||
            this.peekStartsWith("#")
              ? new ze([], {})
              : new ze([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const i = {};
          if (this.consumeOptional("?"))
            do {
              this.parseQueryParam(i);
            } while (this.consumeOptional("&"));
          return i;
        }
        parseFragment() {
          return this.consumeOptional("#")
            ? decodeURIComponent(this.remaining)
            : null;
        }
        parseChildren() {
          if ("" === this.remaining) return {};
          this.consumeOptional("/");
          const i = [];
          for (
            this.peekStartsWith("(") || i.push(this.parseSegment());
            this.peekStartsWith("/") &&
            !this.peekStartsWith("//") &&
            !this.peekStartsWith("/(");

          )
            this.capture("/"), i.push(this.parseSegment());
          let r = {};
          this.peekStartsWith("/(") &&
            (this.capture("/"), (r = this.parseParens(!0)));
          let l = {};
          return (
            this.peekStartsWith("(") && (l = this.parseParens(!1)),
            (i.length > 0 || Object.keys(r).length > 0) &&
              (l[Pe] = new ze(i, r)),
            l
          );
        }
        parseSegment() {
          const i = li(this.remaining);
          if ("" === i && this.peekStartsWith(";")) throw new v.vHH(4009, yr);
          return this.capture(i), new Wi(pn(i), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const i = {};
          for (; this.consumeOptional(";"); ) this.parseParam(i);
          return i;
        }
        parseParam(i) {
          const r = li(this.remaining);
          if (!r) return;
          this.capture(r);
          let l = "";
          if (this.consumeOptional("=")) {
            const c = li(this.remaining);
            c && ((l = c), this.capture(l));
          }
          i[pn(r)] = pn(l);
        }
        parseQueryParam(i) {
          const r = (function Xa(a) {
            const i = a.match(ui);
            return i ? i[0] : "";
          })(this.remaining);
          if (!r) return;
          this.capture(r);
          let l = "";
          if (this.consumeOptional("=")) {
            const y = (function Lu(a) {
              const i = a.match(As);
              return i ? i[0] : "";
            })(this.remaining);
            y && ((l = y), this.capture(l));
          }
          const c = Qa(r),
            f = Qa(l);
          if (i.hasOwnProperty(c)) {
            let y = i[c];
            Array.isArray(y) || ((y = [y]), (i[c] = y)), y.push(f);
          } else i[c] = f;
        }
        parseParens(i) {
          const r = {};
          for (
            this.capture("(");
            !this.consumeOptional(")") && this.remaining.length > 0;

          ) {
            const l = li(this.remaining),
              c = this.remaining[l.length];
            if ("/" !== c && ")" !== c && ";" !== c) throw new v.vHH(4010, yr);
            let f;
            l.indexOf(":") > -1
              ? ((f = l.slice(0, l.indexOf(":"))),
                this.capture(f),
                this.capture(":"))
              : i && (f = Pe);
            const y = this.parseChildren();
            (r[f] = 1 === Object.keys(y).length ? y[Pe] : new ze([], y)),
              this.consumeOptional("//");
          }
          return r;
        }
        peekStartsWith(i) {
          return this.remaining.startsWith(i);
        }
        consumeOptional(i) {
          return (
            !!this.peekStartsWith(i) &&
            ((this.remaining = this.remaining.substring(i.length)), !0)
          );
        }
        capture(i) {
          if (!this.consumeOptional(i)) throw new v.vHH(4011, yr);
        }
      }
      function Ki(a) {
        return a.segments.length > 0 ? new ze([], { [Pe]: a }) : a;
      }
      function ci(a) {
        const i = {};
        for (const l of Object.keys(a.children)) {
          const f = ci(a.children[l]);
          (f.segments.length > 0 || f.hasChildren()) && (i[l] = f);
        }
        return (function kt(a) {
          if (1 === a.numberOfChildren && a.children[Pe]) {
            const i = a.children[Pe];
            return new ze(a.segments.concat(i.segments), i.children);
          }
          return a;
        })(new ze(a.segments, i));
      }
      function $r(a) {
        return a instanceof kr;
      }
      function di(a, i, r, l, c) {
        if (0 === r.length) return Wn(i.root, i.root, i.root, l, c);
        const f = (function Rs(a) {
          if ("string" == typeof a[0] && 1 === a.length && "/" === a[0])
            return new er(!0, 0, a);
          let i = 0,
            r = !1;
          const l = a.reduce((c, f, y) => {
            if ("object" == typeof f && null != f) {
              if (f.outlets) {
                const E = {};
                return (
                  Je(f.outlets, (S, T) => {
                    E[T] = "string" == typeof S ? S.split("/") : S;
                  }),
                  [...c, { outlets: E }]
                );
              }
              if (f.segmentPath) return [...c, f.segmentPath];
            }
            return "string" != typeof f
              ? [...c, f]
              : 0 === y
              ? (f.split("/").forEach((E, S) => {
                  (0 == S && "." === E) ||
                    (0 == S && "" === E
                      ? (r = !0)
                      : ".." === E
                      ? i++
                      : "" != E && c.push(E));
                }),
                c)
              : [...c, f];
          }, []);
          return new er(r, i, l);
        })(r);
        return f.toRoot()
          ? Wn(i.root, i.root, new ze([], {}), l, c)
          : (function y(S) {
              const T = (function el(a, i, r, l) {
                  if (a.isAbsolute) return new st(i.root, !0, 0);
                  if (-1 === l) return new st(r, r === i.root, 0);
                  return (function ku(a, i, r) {
                    let l = a,
                      c = i,
                      f = r;
                    for (; f > c; ) {
                      if (((f -= c), (l = l.parent), !l))
                        throw new v.vHH(4005, !1);
                      c = l.segments.length;
                    }
                    return new st(l, !1, c - f);
                  })(r, l + ($t(a.commands[0]) ? 0 : 1), a.numberOfDoubleDots);
                })(f, i, a.snapshot?._urlSegment, S),
                O = T.processChildren
                  ? Yi(T.segmentGroup, T.index, f.commands)
                  : Do(T.segmentGroup, T.index, f.commands);
              return Wn(i.root, T.segmentGroup, O, l, c);
            })(a.snapshot?._lastPathIndex);
      }
      function $t(a) {
        return (
          "object" == typeof a && null != a && !a.outlets && !a.segmentPath
        );
      }
      function fi(a) {
        return "object" == typeof a && null != a && a.outlets;
      }
      function Wn(a, i, r, l, c) {
        let y,
          f = {};
        l &&
          Je(l, (S, T) => {
            f[T] = Array.isArray(S) ? S.map(O => `${O}`) : `${S}`;
          }),
          (y = a === i ? r : vo(a, i, r));
        const E = Ki(ci(y));
        return new kr(E, f, c);
      }
      function vo(a, i, r) {
        const l = {};
        return (
          Je(a.children, (c, f) => {
            l[f] = c === i ? r : vo(c, i, r);
          }),
          new ze(a.segments, l)
        );
      }
      class er {
        constructor(i, r, l) {
          if (
            ((this.isAbsolute = i),
            (this.numberOfDoubleDots = r),
            (this.commands = l),
            i && l.length > 0 && $t(l[0]))
          )
            throw new v.vHH(4003, !1);
          const c = l.find(fi);
          if (c && c !== Vt(l)) throw new v.vHH(4004, !1);
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            "/" == this.commands[0]
          );
        }
      }
      class st {
        constructor(i, r, l) {
          (this.segmentGroup = i), (this.processChildren = r), (this.index = l);
        }
      }
      function Do(a, i, r) {
        if (
          (a || (a = new ze([], {})),
          0 === a.segments.length && a.hasChildren())
        )
          return Yi(a, i, r);
        const l = (function _o(a, i, r) {
            let l = 0,
              c = i;
            const f = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; c < a.segments.length; ) {
              if (l >= r.length) return f;
              const y = a.segments[c],
                E = r[l];
              if (fi(E)) break;
              const S = `${E}`,
                T = l < r.length - 1 ? r[l + 1] : null;
              if (c > 0 && void 0 === S) break;
              if (S && T && "object" == typeof T && void 0 === T.outlets) {
                if (!Ge(S, T, y)) return f;
                l += 2;
              } else {
                if (!Ge(S, {}, y)) return f;
                l++;
              }
              c++;
            }
            return { match: !0, pathIndex: c, commandIndex: l };
          })(a, i, r),
          c = r.slice(l.commandIndex);
        if (l.match && l.pathIndex < a.segments.length) {
          const f = new ze(a.segments.slice(0, l.pathIndex), {});
          return (
            (f.children[Pe] = new ze(
              a.segments.slice(l.pathIndex),
              a.children
            )),
            Yi(f, 0, c)
          );
        }
        return l.match && 0 === c.length
          ? new ze(a.segments, {})
          : l.match && !a.hasChildren()
          ? Eo(a, i, r)
          : l.match
          ? Yi(a, 0, c)
          : Eo(a, i, r);
      }
      function Yi(a, i, r) {
        if (0 === r.length) return new ze(a.segments, {});
        {
          const l = (function $u(a) {
              return fi(a[0]) ? a[0].outlets : { [Pe]: a };
            })(r),
            c = {};
          return (
            Je(l, (f, y) => {
              "string" == typeof f && (f = [f]),
                null !== f && (c[y] = Do(a.children[y], i, f));
            }),
            Je(a.children, (f, y) => {
              void 0 === l[y] && (c[y] = f);
            }),
            new ze(a.segments, c)
          );
        }
      }
      function Eo(a, i, r) {
        const l = a.segments.slice(0, i);
        let c = 0;
        for (; c < r.length; ) {
          const f = r[c];
          if (fi(f)) {
            const S = ju(f.outlets);
            return new ze(l, S);
          }
          if (0 === c && $t(r[0])) {
            l.push(new Wi(a.segments[i].path, B(r[0]))), c++;
            continue;
          }
          const y = fi(f) ? f.outlets[Pe] : `${f}`,
            E = c < r.length - 1 ? r[c + 1] : null;
          y && E && $t(E)
            ? (l.push(new Wi(y, B(E))), (c += 2))
            : (l.push(new Wi(y, {})), c++);
        }
        return new ze(l, {});
      }
      function ju(a) {
        const i = {};
        return (
          Je(a, (r, l) => {
            "string" == typeof r && (r = [r]),
              null !== r && (i[l] = Eo(new ze([], {}), 0, r));
          }),
          i
        );
      }
      function B(a) {
        const i = {};
        return Je(a, (r, l) => (i[l] = `${r}`)), i;
      }
      function Ge(a, i, r) {
        return a == r.path && an(i, r.parameters);
      }
      const hi = "imperative";
      class On {
        constructor(i, r) {
          (this.id = i), (this.url = r);
        }
      }
      class mt extends On {
        constructor(i, r, l = "imperative", c = null) {
          super(i, r),
            (this.type = 0),
            (this.navigationTrigger = l),
            (this.restoredState = c);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class yn extends On {
        constructor(i, r, l) {
          super(i, r), (this.urlAfterRedirects = l), (this.type = 1);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class Dr extends On {
        constructor(i, r, l, c) {
          super(i, r), (this.reason = l), (this.code = c), (this.type = 2);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Fn extends On {
        constructor(i, r, l, c) {
          super(i, r), (this.reason = l), (this.code = c), (this.type = 16);
        }
      }
      class pi extends On {
        constructor(i, r, l, c) {
          super(i, r), (this.error = l), (this.target = c), (this.type = 3);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class Qi extends On {
        constructor(i, r, l, c) {
          super(i, r),
            (this.urlAfterRedirects = l),
            (this.state = c),
            (this.type = 4);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Bu extends On {
        constructor(i, r, l, c) {
          super(i, r),
            (this.urlAfterRedirects = l),
            (this.state = c),
            (this.type = 7);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class ef extends On {
        constructor(i, r, l, c, f) {
          super(i, r),
            (this.urlAfterRedirects = l),
            (this.state = c),
            (this.shouldActivate = f),
            (this.type = 8);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class wo extends On {
        constructor(i, r, l, c) {
          super(i, r),
            (this.urlAfterRedirects = l),
            (this.state = c),
            (this.type = 5);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class zt extends On {
        constructor(i, r, l, c) {
          super(i, r),
            (this.urlAfterRedirects = l),
            (this.state = c),
            (this.type = 6);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class tr {
        constructor(i) {
          (this.route = i), (this.type = 9);
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class tl {
        constructor(i) {
          (this.route = i), (this.type = 10);
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class gi {
        constructor(i) {
          (this.snapshot = i), (this.type = 11);
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class nr {
        constructor(i) {
          (this.snapshot = i), (this.type = 12);
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class Uu {
        constructor(i) {
          (this.snapshot = i), (this.type = 13);
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class nl {
        constructor(i) {
          (this.snapshot = i), (this.type = 14);
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class rl {
        constructor(i, r, l) {
          (this.routerEvent = i),
            (this.position = r),
            (this.anchor = l),
            (this.type = 15);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      let Co = (() => {
          class a {
            createUrlTree(r, l, c, f, y, E) {
              return di(r || l.root, c, f, y, E);
            }
          }
          return (
            (a.ɵfac = function (r) {
              return new (r || a)();
            }),
            (a.ɵprov = v.Yz7({ token: a, factory: a.ɵfac })),
            a
          );
        })(),
        So = (() => {
          class a {}
          return (
            (a.ɵfac = function (r) {
              return new (r || a)();
            }),
            (a.ɵprov = v.Yz7({
              token: a,
              factory: function (i) {
                return Co.ɵfac(i);
              },
              providedIn: "root"
            })),
            a
          );
        })();
      class bo {
        constructor(i) {
          this._root = i;
        }
        get root() {
          return this._root.value;
        }
        parent(i) {
          const r = this.pathFromRoot(i);
          return r.length > 1 ? r[r.length - 2] : null;
        }
        children(i) {
          const r = Zi(i, this._root);
          return r ? r.children.map(l => l.value) : [];
        }
        firstChild(i) {
          const r = Zi(i, this._root);
          return r && r.children.length > 0 ? r.children[0].value : null;
        }
        siblings(i) {
          const r = Xi(i, this._root);
          return r.length < 2
            ? []
            : r[r.length - 2].children.map(c => c.value).filter(c => c !== i);
        }
        pathFromRoot(i) {
          return Xi(i, this._root).map(r => r.value);
        }
      }
      function Zi(a, i) {
        if (a === i.value) return i;
        for (const r of i.children) {
          const l = Zi(a, r);
          if (l) return l;
        }
        return null;
      }
      function Xi(a, i) {
        if (a === i.value) return [i];
        for (const r of i.children) {
          const l = Xi(a, r);
          if (l.length) return l.unshift(i), l;
        }
        return [];
      }
      class qn {
        constructor(i, r) {
          (this.value = i), (this.children = r);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function Br(a) {
        const i = {};
        return a && a.children.forEach(r => (i[r.value.outlet] = r)), i;
      }
      class Io extends bo {
        constructor(i, r) {
          super(i), (this.snapshot = r), w(this, i);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function To(a, i) {
        const r = (function Mo(a, i) {
            const y = new _([], {}, {}, "", {}, Pe, i, null, a.root, -1, {});
            return new g("", new qn(y, []));
          })(a, i),
          l = new Pn([new Wi("", {})]),
          c = new Pn({}),
          f = new Pn({}),
          y = new Pn({}),
          E = new Pn(""),
          S = new mi(l, c, y, E, f, Pe, i, r.root);
        return (S.snapshot = r.root), new Io(new qn(S, []), r);
      }
      class mi {
        constructor(i, r, l, c, f, y, E, S) {
          (this.url = i),
            (this.params = r),
            (this.queryParams = l),
            (this.fragment = c),
            (this.data = f),
            (this.outlet = y),
            (this.component = E),
            (this.title = this.data?.pipe((0, Oe.U)(T => T[Lr])) ?? fe(void 0)),
            (this._futureSnapshot = S);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap ||
              (this._paramMap = this.params.pipe((0, Oe.U)(i => ri(i)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(
                (0, Oe.U)(i => ri(i))
              )),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function ol(a, i = "emptyOnly") {
        const r = a.pathFromRoot;
        let l = 0;
        if ("always" !== i)
          for (l = r.length - 1; l >= 1; ) {
            const c = r[l],
              f = r[l - 1];
            if (c.routeConfig && "" === c.routeConfig.path) l--;
            else {
              if (f.component) break;
              l--;
            }
          }
        return (function p(a) {
          return a.reduce(
            (i, r) => ({
              params: { ...i.params, ...r.params },
              data: { ...i.data, ...r.data },
              resolve: {
                ...r.data,
                ...i.resolve,
                ...r.routeConfig?.data,
                ...r._resolvedData
              }
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(r.slice(l));
      }
      class _ {
        get title() {
          return this.data?.[Lr];
        }
        constructor(i, r, l, c, f, y, E, S, T, O, V) {
          (this.url = i),
            (this.params = r),
            (this.queryParams = l),
            (this.fragment = c),
            (this.data = f),
            (this.outlet = y),
            (this.component = E),
            (this.routeConfig = S),
            (this._urlSegment = T),
            (this._lastPathIndex = O),
            (this._resolve = V);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = ri(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = ri(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url
            .map(l => l.toString())
            .join("/")}', path:'${
            this.routeConfig ? this.routeConfig.path : ""
          }')`;
        }
      }
      class g extends bo {
        constructor(i, r) {
          super(r), (this.url = i), w(this, r);
        }
        toString() {
          return I(this._root);
        }
      }
      function w(a, i) {
        (i.value._routerState = a), i.children.forEach(r => w(a, r));
      }
      function I(a) {
        const i =
          a.children.length > 0 ? ` { ${a.children.map(I).join(", ")} } ` : "";
        return `${a.value}${i}`;
      }
      function F(a) {
        if (a.snapshot) {
          const i = a.snapshot,
            r = a._futureSnapshot;
          (a.snapshot = r),
            an(i.queryParams, r.queryParams) ||
              a.queryParams.next(r.queryParams),
            i.fragment !== r.fragment && a.fragment.next(r.fragment),
            an(i.params, r.params) || a.params.next(r.params),
            (function ho(a, i) {
              if (a.length !== i.length) return !1;
              for (let r = 0; r < a.length; ++r) if (!an(a[r], i[r])) return !1;
              return !0;
            })(i.url, r.url) || a.url.next(r.url),
            an(i.data, r.data) || a.data.next(r.data);
        } else
          (a.snapshot = a._futureSnapshot), a.data.next(a._futureSnapshot.data);
      }
      function j(a, i) {
        const r =
          an(a.params, i.params) &&
          (function Xd(a, i) {
            return (
              ai(a, i) && a.every((r, l) => an(r.parameters, i[l].parameters))
            );
          })(a.url, i.url);
        return (
          r && !(!a.parent != !i.parent) && (!a.parent || j(a.parent, i.parent))
        );
      }
      function We(a, i, r) {
        if (r && a.shouldReuseRoute(i.value, r.value.snapshot)) {
          const l = r.value;
          l._futureSnapshot = i.value;
          const c = (function Ke(a, i, r) {
            return i.children.map(l => {
              for (const c of r.children)
                if (a.shouldReuseRoute(l.value, c.value.snapshot))
                  return We(a, l, c);
              return We(a, l);
            });
          })(a, i, r);
          return new qn(l, c);
        }
        {
          if (a.shouldAttach(i.value)) {
            const f = a.retrieve(i.value);
            if (null !== f) {
              const y = f.route;
              return (
                (y.value._futureSnapshot = i.value),
                (y.children = i.children.map(E => We(a, E))),
                y
              );
            }
          }
          const l = (function Qe(a) {
              return new mi(
                new Pn(a.url),
                new Pn(a.params),
                new Pn(a.queryParams),
                new Pn(a.fragment),
                new Pn(a.data),
                a.outlet,
                a.component,
                a
              );
            })(i.value),
            c = i.children.map(f => We(a, f));
          return new qn(l, c);
        }
      }
      const $e = "ngNavigationCancelingError";
      function dt(a, i) {
        const { redirectTo: r, navigationBehaviorOptions: l } = $r(i)
            ? { redirectTo: i, navigationBehaviorOptions: void 0 }
            : i,
          c = tt(!1, 0, i);
        return (c.url = r), (c.navigationBehaviorOptions = l), c;
      }
      function tt(a, i, r) {
        const l = new Error("NavigationCancelingError: " + (a || ""));
        return (l[$e] = !0), (l.cancellationCode = i), r && (l.url = r), l;
      }
      function Pt(a) {
        return ln(a) && $r(a.url);
      }
      function ln(a) {
        return a && a[$e];
      }
      class Jt {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.injector = null),
            (this.children = new _n()),
            (this.attachRef = null);
        }
      }
      let _n = (() => {
        class a {
          constructor() {
            this.contexts = new Map();
          }
          onChildOutletCreated(r, l) {
            const c = this.getOrCreateContext(r);
            (c.outlet = l), this.contexts.set(r, c);
          }
          onChildOutletDestroyed(r) {
            const l = this.getContext(r);
            l && ((l.outlet = null), (l.attachRef = null));
          }
          onOutletDeactivated() {
            const r = this.contexts;
            return (this.contexts = new Map()), r;
          }
          onOutletReAttached(r) {
            this.contexts = r;
          }
          getOrCreateContext(r) {
            let l = this.getContext(r);
            return l || ((l = new Jt()), this.contexts.set(r, l)), l;
          }
          getContext(r) {
            return this.contexts.get(r) || null;
          }
        }
        return (
          (a.ɵfac = function (r) {
            return new (r || a)();
          }),
          (a.ɵprov = v.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
          a
        );
      })();
      const xn = !1;
      let rr = (() => {
        class a {
          constructor() {
            (this.activated = null),
              (this._activatedRoute = null),
              (this.name = Pe),
              (this.activateEvents = new v.vpe()),
              (this.deactivateEvents = new v.vpe()),
              (this.attachEvents = new v.vpe()),
              (this.detachEvents = new v.vpe()),
              (this.parentContexts = (0, v.f3M)(_n)),
              (this.location = (0, v.f3M)(v.s_b)),
              (this.changeDetector = (0, v.f3M)(v.sBO)),
              (this.environmentInjector = (0, v.f3M)(v.lqb));
          }
          ngOnChanges(r) {
            if (r.name) {
              const { firstChange: l, previousValue: c } = r.name;
              if (l) return;
              this.isTrackedInParentContexts(c) &&
                (this.deactivate(),
                this.parentContexts.onChildOutletDestroyed(c)),
                this.initializeOutletWithName();
            }
          }
          ngOnDestroy() {
            this.isTrackedInParentContexts(this.name) &&
              this.parentContexts.onChildOutletDestroyed(this.name);
          }
          isTrackedInParentContexts(r) {
            return this.parentContexts.getContext(r)?.outlet === this;
          }
          ngOnInit() {
            this.initializeOutletWithName();
          }
          initializeOutletWithName() {
            if (
              (this.parentContexts.onChildOutletCreated(this.name, this),
              this.activated)
            )
              return;
            const r = this.parentContexts.getContext(this.name);
            r?.route &&
              (r.attachRef
                ? this.attach(r.attachRef, r.route)
                : this.activateWith(r.route, r.injector));
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new v.vHH(4012, xn);
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new v.vHH(4012, xn);
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute
              ? this._activatedRoute.snapshot.data
              : {};
          }
          detach() {
            if (!this.activated) throw new v.vHH(4012, xn);
            this.location.detach();
            const r = this.activated;
            return (
              (this.activated = null),
              (this._activatedRoute = null),
              this.detachEvents.emit(r.instance),
              r
            );
          }
          attach(r, l) {
            (this.activated = r),
              (this._activatedRoute = l),
              this.location.insert(r.hostView),
              this.attachEvents.emit(r.instance);
          }
          deactivate() {
            if (this.activated) {
              const r = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(r);
            }
          }
          activateWith(r, l) {
            if (this.isActivated) throw new v.vHH(4013, xn);
            this._activatedRoute = r;
            const c = this.location,
              y = r.snapshot.component,
              E = this.parentContexts.getOrCreateContext(this.name).children,
              S = new Ao(r, E, c.injector);
            if (
              l &&
              (function Ro(a) {
                return !!a.resolveComponentFactory;
              })(l)
            ) {
              const T = l.resolveComponentFactory(y);
              this.activated = c.createComponent(T, c.length, S);
            } else
              this.activated = c.createComponent(y, {
                index: c.length,
                injector: S,
                environmentInjector: l ?? this.environmentInjector
              });
            this.changeDetector.markForCheck(),
              this.activateEvents.emit(this.activated.instance);
          }
        }
        return (
          (a.ɵfac = function (r) {
            return new (r || a)();
          }),
          (a.ɵdir = v.lG2({
            type: a,
            selectors: [["router-outlet"]],
            inputs: { name: "name" },
            outputs: {
              activateEvents: "activate",
              deactivateEvents: "deactivate",
              attachEvents: "attach",
              detachEvents: "detach"
            },
            exportAs: ["outlet"],
            standalone: !0,
            features: [v.TTD]
          })),
          a
        );
      })();
      class Ao {
        constructor(i, r, l) {
          (this.route = i), (this.childContexts = r), (this.parent = l);
        }
        get(i, r) {
          return i === mi
            ? this.route
            : i === _n
            ? this.childContexts
            : this.parent.get(i, r);
        }
      }
      let al = (() => {
        class a {}
        return (
          (a.ɵfac = function (r) {
            return new (r || a)();
          }),
          (a.ɵcmp = v.Xpm({
            type: a,
            selectors: [["ng-component"]],
            standalone: !0,
            features: [v.jDz],
            decls: 1,
            vars: 0,
            template: function (r, l) {
              1 & r && v._UZ(0, "router-outlet");
            },
            dependencies: [rr],
            encapsulation: 2
          })),
          a
        );
      })();
      function tf(a, i) {
        return (
          a.providers &&
            !a._injector &&
            (a._injector = (0, v.MMx)(a.providers, i, `Route: ${a.path}`)),
          a._injector ?? i
        );
      }
      function ll(a) {
        const i = a.children && a.children.map(ll),
          r = i ? { ...a, children: i } : { ...a };
        return (
          !r.component &&
            !r.loadComponent &&
            (i || r.loadChildren) &&
            r.outlet &&
            r.outlet !== Pe &&
            (r.component = al),
          r
        );
      }
      function un(a) {
        return a.outlet || Pe;
      }
      function No(a, i) {
        const r = a.filter(l => un(l) === i);
        return r.push(...a.filter(l => un(l) !== i)), r;
      }
      function Ur(a) {
        if (!a) return null;
        if (a.routeConfig?._injector) return a.routeConfig._injector;
        for (let i = a.parent; i; i = i.parent) {
          const r = i.routeConfig;
          if (r?._loadedInjector) return r._loadedInjector;
          if (r?._injector) return r._injector;
        }
        return null;
      }
      class Wu {
        constructor(i, r, l, c) {
          (this.routeReuseStrategy = i),
            (this.futureState = r),
            (this.currState = l),
            (this.forwardEvent = c);
        }
        activate(i) {
          const r = this.futureState._root,
            l = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(r, l, i),
            F(this.futureState.root),
            this.activateChildRoutes(r, l, i);
        }
        deactivateChildRoutes(i, r, l) {
          const c = Br(r);
          i.children.forEach(f => {
            const y = f.value.outlet;
            this.deactivateRoutes(f, c[y], l), delete c[y];
          }),
            Je(c, (f, y) => {
              this.deactivateRouteAndItsChildren(f, l);
            });
        }
        deactivateRoutes(i, r, l) {
          const c = i.value,
            f = r ? r.value : null;
          if (c === f)
            if (c.component) {
              const y = l.getContext(c.outlet);
              y && this.deactivateChildRoutes(i, r, y.children);
            } else this.deactivateChildRoutes(i, r, l);
          else f && this.deactivateRouteAndItsChildren(r, l);
        }
        deactivateRouteAndItsChildren(i, r) {
          i.value.component &&
          this.routeReuseStrategy.shouldDetach(i.value.snapshot)
            ? this.detachAndStoreRouteSubtree(i, r)
            : this.deactivateRouteAndOutlet(i, r);
        }
        detachAndStoreRouteSubtree(i, r) {
          const l = r.getContext(i.value.outlet),
            c = l && i.value.component ? l.children : r,
            f = Br(i);
          for (const y of Object.keys(f))
            this.deactivateRouteAndItsChildren(f[y], c);
          if (l && l.outlet) {
            const y = l.outlet.detach(),
              E = l.children.onOutletDeactivated();
            this.routeReuseStrategy.store(i.value.snapshot, {
              componentRef: y,
              route: i,
              contexts: E
            });
          }
        }
        deactivateRouteAndOutlet(i, r) {
          const l = r.getContext(i.value.outlet),
            c = l && i.value.component ? l.children : r,
            f = Br(i);
          for (const y of Object.keys(f))
            this.deactivateRouteAndItsChildren(f[y], c);
          l &&
            l.outlet &&
            (l.outlet.deactivate(),
            l.children.onOutletDeactivated(),
            (l.attachRef = null),
            (l.resolver = null),
            (l.route = null));
        }
        activateChildRoutes(i, r, l) {
          const c = Br(r);
          i.children.forEach(f => {
            this.activateRoutes(f, c[f.value.outlet], l),
              this.forwardEvent(new nl(f.value.snapshot));
          }),
            i.children.length && this.forwardEvent(new nr(i.value.snapshot));
        }
        activateRoutes(i, r, l) {
          const c = i.value,
            f = r ? r.value : null;
          if ((F(c), c === f))
            if (c.component) {
              const y = l.getOrCreateContext(c.outlet);
              this.activateChildRoutes(i, r, y.children);
            } else this.activateChildRoutes(i, r, l);
          else if (c.component) {
            const y = l.getOrCreateContext(c.outlet);
            if (this.routeReuseStrategy.shouldAttach(c.snapshot)) {
              const E = this.routeReuseStrategy.retrieve(c.snapshot);
              this.routeReuseStrategy.store(c.snapshot, null),
                y.children.onOutletReAttached(E.contexts),
                (y.attachRef = E.componentRef),
                (y.route = E.route.value),
                y.outlet && y.outlet.attach(E.componentRef, E.route.value),
                F(E.route.value),
                this.activateChildRoutes(i, null, y.children);
            } else {
              const E = Ur(c.snapshot),
                S = E?.get(v._Vd) ?? null;
              (y.attachRef = null),
                (y.route = c),
                (y.resolver = S),
                (y.injector = E),
                y.outlet && y.outlet.activateWith(c, y.injector),
                this.activateChildRoutes(i, null, y.children);
            }
          } else this.activateChildRoutes(i, null, l);
        }
      }
      class ul {
        constructor(i) {
          (this.path = i), (this.route = this.path[this.path.length - 1]);
        }
      }
      class Oo {
        constructor(i, r) {
          (this.component = i), (this.route = r);
        }
      }
      function ir(a, i, r) {
        const l = a._root;
        return vi(l, i ? i._root : null, r, [l.value]);
      }
      function _r(a, i) {
        const r = Symbol(),
          l = i.get(a, r);
        return l === r
          ? "function" != typeof a || (0, v.Z0I)(a)
            ? i.get(a)
            : a
          : l;
      }
      function vi(
        a,
        i,
        r,
        l,
        c = { canDeactivateChecks: [], canActivateChecks: [] }
      ) {
        const f = Br(i);
        return (
          a.children.forEach(y => {
            (function qu(
              a,
              i,
              r,
              l,
              c = { canDeactivateChecks: [], canActivateChecks: [] }
            ) {
              const f = a.value,
                y = i ? i.value : null,
                E = r ? r.getContext(a.value.outlet) : null;
              if (y && f.routeConfig === y.routeConfig) {
                const S = (function cl(a, i, r) {
                  if ("function" == typeof r) return r(a, i);
                  switch (r) {
                    case "pathParamsChange":
                      return !ai(a.url, i.url);
                    case "pathParamsOrQueryParamsChange":
                      return (
                        !ai(a.url, i.url) || !an(a.queryParams, i.queryParams)
                      );
                    case "always":
                      return !0;
                    case "paramsOrQueryParamsChange":
                      return !j(a, i) || !an(a.queryParams, i.queryParams);
                    default:
                      return !j(a, i);
                  }
                })(y, f, f.routeConfig.runGuardsAndResolvers);
                S
                  ? c.canActivateChecks.push(new ul(l))
                  : ((f.data = y.data), (f._resolvedData = y._resolvedData)),
                  vi(a, i, f.component ? (E ? E.children : null) : r, l, c),
                  S &&
                    E &&
                    E.outlet &&
                    E.outlet.isActivated &&
                    c.canDeactivateChecks.push(new Oo(E.outlet.component, y));
              } else
                y && Di(i, E, c),
                  c.canActivateChecks.push(new ul(l)),
                  vi(a, null, f.component ? (E ? E.children : null) : r, l, c);
            })(y, f[y.value.outlet], r, l.concat([y.value]), c),
              delete f[y.value.outlet];
          }),
          Je(f, (y, E) => Di(y, r.getContext(E), c)),
          c
        );
      }
      function Di(a, i, r) {
        const l = Br(a),
          c = a.value;
        Je(l, (f, y) => {
          Di(f, c.component ? (i ? i.children.getContext(y) : null) : i, r);
        }),
          r.canDeactivateChecks.push(
            new Oo(
              c.component && i && i.outlet && i.outlet.isActivated
                ? i.outlet.component
                : null,
              c
            )
          );
      }
      function Ps(a) {
        return "function" == typeof a;
      }
      function xo(a) {
        return a instanceof sn || "EmptyError" === a?.name;
      }
      const Ns = Symbol("INITIAL_VALUE");
      function Kn() {
        return te(a =>
          Nr(
            a.map(i =>
              i.pipe(
                Re(1),
                (function ut(...a) {
                  const i = (0, Zn.yG)(a);
                  return (0, et.e)((r, l) => {
                    (i ? Hi(a, r, i) : Hi(a, r)).subscribe(l);
                  });
                })(Ns)
              )
            )
          ).pipe(
            (0, Oe.U)(i => {
              for (const r of i)
                if (!0 !== r) {
                  if (r === Ns) return Ns;
                  if (!1 === r || r instanceof kr) return r;
                }
              return !0;
            }),
            wt(i => i !== Ns),
            Re(1)
          )
        );
      }
      function hl(a) {
        return (0, fo.z)(
          me(i => {
            if ($r(i)) throw dt(0, i);
          }),
          (0, Oe.U)(i => !0 === i)
        );
      }
      const Hr = {
        matched: !1,
        consumedSegments: [],
        remainingSegments: [],
        parameters: {},
        positionalParamSegments: {}
      };
      function df(a, i, r, l, c) {
        const f = gl(a, i, r);
        return f.matched
          ? (function pl(a, i, r, l) {
              const c = i.canMatch;
              return c && 0 !== c.length
                ? fe(
                    c.map(y => {
                      const E = _r(y, a);
                      return Rt(
                        (function Fo(a) {
                          return a && Ps(a.canMatch);
                        })(E)
                          ? E.canMatch(i, r)
                          : a.runInContext(() => E(i, r))
                      );
                    })
                  ).pipe(Kn(), hl())
                : fe(!0);
            })((l = tf(i, l)), i, r).pipe(
              (0, Oe.U)(y => (!0 === y ? f : { ...Hr }))
            )
          : fe(f);
      }
      function gl(a, i, r) {
        if ("" === i.path)
          return "full" === i.pathMatch && (a.hasChildren() || r.length > 0)
            ? { ...Hr }
            : {
                matched: !0,
                consumedSegments: [],
                remainingSegments: r,
                parameters: {},
                positionalParamSegments: {}
              };
        const c = (i.matcher || Cs)(r, a, i);
        if (!c) return { ...Hr };
        const f = {};
        Je(c.posParams, (E, S) => {
          f[S] = E.path;
        });
        const y =
          c.consumed.length > 0
            ? { ...f, ...c.consumed[c.consumed.length - 1].parameters }
            : f;
        return {
          matched: !0,
          consumedSegments: c.consumed,
          remainingSegments: r.slice(c.consumed.length),
          parameters: y,
          positionalParamSegments: c.posParams ?? {}
        };
      }
      function rt(a, i, r, l) {
        if (
          r.length > 0 &&
          (function Lp(a, i, r) {
            return r.some(l => ml(a, i, l) && un(l) !== Pe);
          })(a, r, l)
        ) {
          const f = new ze(
            i,
            (function xp(a, i, r, l) {
              const c = {};
              (c[Pe] = l),
                (l._sourceSegment = a),
                (l._segmentIndexShift = i.length);
              for (const f of r)
                if ("" === f.path && un(f) !== Pe) {
                  const y = new ze([], {});
                  (y._sourceSegment = a),
                    (y._segmentIndexShift = i.length),
                    (c[un(f)] = y);
                }
              return c;
            })(a, i, l, new ze(r, a.children))
          );
          return (
            (f._sourceSegment = a),
            (f._segmentIndexShift = i.length),
            { segmentGroup: f, slicedSegments: [] }
          );
        }
        if (
          0 === r.length &&
          (function kp(a, i, r) {
            return r.some(l => ml(a, i, l));
          })(a, r, l)
        ) {
          const f = new ze(
            a.segments,
            (function Fp(a, i, r, l, c) {
              const f = {};
              for (const y of l)
                if (ml(a, r, y) && !c[un(y)]) {
                  const E = new ze([], {});
                  (E._sourceSegment = a),
                    (E._segmentIndexShift = i.length),
                    (f[un(y)] = E);
                }
              return { ...c, ...f };
            })(a, i, r, l, a.children)
          );
          return (
            (f._sourceSegment = a),
            (f._segmentIndexShift = i.length),
            { segmentGroup: f, slicedSegments: r }
          );
        }
        const c = new ze(a.segments, a.children);
        return (
          (c._sourceSegment = a),
          (c._segmentIndexShift = i.length),
          { segmentGroup: c, slicedSegments: r }
        );
      }
      function ml(a, i, r) {
        return (
          (!(a.hasChildren() || i.length > 0) || "full" !== r.pathMatch) &&
          "" === r.path
        );
      }
      function ff(a, i, r, l) {
        return (
          !!(un(a) === l || (l !== Pe && ml(i, r, a))) &&
          ("**" === a.path || gl(i, a, r).matched)
        );
      }
      function hf(a, i, r) {
        return 0 === i.length && !a.children[r];
      }
      const Vr = !1;
      class yl {
        constructor(i) {
          this.segmentGroup = i || null;
        }
      }
      class pf {
        constructor(i) {
          this.urlTree = i;
        }
      }
      function yt(a) {
        return gr(new yl(a));
      }
      function Lo(a) {
        return gr(new pf(a));
      }
      class _i {
        constructor(i, r, l, c, f) {
          (this.injector = i),
            (this.configLoader = r),
            (this.urlSerializer = l),
            (this.urlTree = c),
            (this.config = f),
            (this.allowRedirects = !0);
        }
        apply() {
          const i = rt(this.urlTree.root, [], [], this.config).segmentGroup,
            r = new ze(i.segments, i.children);
          return this.expandSegmentGroup(this.injector, this.config, r, Pe)
            .pipe(
              (0, Oe.U)(f =>
                this.createUrlTree(
                  ci(f),
                  this.urlTree.queryParams,
                  this.urlTree.fragment
                )
              )
            )
            .pipe(
              Gn(f => {
                if (f instanceof pf)
                  return (this.allowRedirects = !1), this.match(f.urlTree);
                throw f instanceof yl ? this.noMatchError(f) : f;
              })
            );
        }
        match(i) {
          return this.expandSegmentGroup(this.injector, this.config, i.root, Pe)
            .pipe(
              (0, Oe.U)(c =>
                this.createUrlTree(ci(c), i.queryParams, i.fragment)
              )
            )
            .pipe(
              Gn(c => {
                throw c instanceof yl ? this.noMatchError(c) : c;
              })
            );
        }
        noMatchError(i) {
          return new v.vHH(4002, Vr);
        }
        createUrlTree(i, r, l) {
          const c = Ki(i);
          return new kr(c, r, l);
        }
        expandSegmentGroup(i, r, l, c) {
          return 0 === l.segments.length && l.hasChildren()
            ? this.expandChildren(i, r, l).pipe((0, Oe.U)(f => new ze([], f)))
            : this.expandSegment(i, l, r, l.segments, c, !0);
        }
        expandChildren(i, r, l) {
          const c = [];
          for (const f of Object.keys(l.children))
            "primary" === f ? c.unshift(f) : c.push(f);
          return (0, Tt.D)(c).pipe(
            zn(f => {
              const y = l.children[f],
                E = No(r, f);
              return this.expandSegmentGroup(i, E, y, f).pipe(
                (0, Oe.U)(S => ({ segment: S, outlet: f }))
              );
            }),
            ws((f, y) => ((f[y.outlet] = y.segment), f), {}),
            Lt()
          );
        }
        expandSegment(i, r, l, c, f, y) {
          return (0, Tt.D)(l).pipe(
            zn(E =>
              this.expandSegmentAgainstRoute(i, r, l, E, c, f, y).pipe(
                Gn(T => {
                  if (T instanceof yl) return fe(null);
                  throw T;
                })
              )
            ),
            Nn(E => !!E),
            Gn((E, S) => {
              if (xo(E)) return hf(r, c, f) ? fe(new ze([], {})) : yt(r);
              throw E;
            })
          );
        }
        expandSegmentAgainstRoute(i, r, l, c, f, y, E) {
          return ff(c, r, f, y)
            ? void 0 === c.redirectTo
              ? this.matchSegmentAgainstRoute(i, r, c, f, y)
              : E && this.allowRedirects
              ? this.expandSegmentAgainstRouteUsingRedirect(i, r, l, c, f, y)
              : yt(r)
            : yt(r);
        }
        expandSegmentAgainstRouteUsingRedirect(i, r, l, c, f, y) {
          return "**" === c.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(i, l, c, y)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                i,
                r,
                l,
                c,
                f,
                y
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(i, r, l, c) {
          const f = this.applyRedirectCommands([], l.redirectTo, {});
          return l.redirectTo.startsWith("/")
            ? Lo(f)
            : this.lineralizeSegments(l, f).pipe(
                (0, gt.z)(y => {
                  const E = new ze(y, {});
                  return this.expandSegment(i, E, r, y, c, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(i, r, l, c, f, y) {
          const {
            matched: E,
            consumedSegments: S,
            remainingSegments: T,
            positionalParamSegments: O
          } = gl(r, c, f);
          if (!E) return yt(r);
          const V = this.applyRedirectCommands(S, c.redirectTo, O);
          return c.redirectTo.startsWith("/")
            ? Lo(V)
            : this.lineralizeSegments(c, V).pipe(
                (0, gt.z)(ye =>
                  this.expandSegment(i, r, l, ye.concat(T), y, !1)
                )
              );
        }
        matchSegmentAgainstRoute(i, r, l, c, f) {
          return "**" === l.path
            ? ((i = tf(l, i)),
              l.loadChildren
                ? (l._loadedRoutes
                    ? fe({
                        routes: l._loadedRoutes,
                        injector: l._loadedInjector
                      })
                    : this.configLoader.loadChildren(i, l)
                  ).pipe(
                    (0, Oe.U)(
                      E => (
                        (l._loadedRoutes = E.routes),
                        (l._loadedInjector = E.injector),
                        new ze(c, {})
                      )
                    )
                  )
                : fe(new ze(c, {})))
            : df(r, l, c, i).pipe(
                te(
                  ({ matched: y, consumedSegments: E, remainingSegments: S }) =>
                    y
                      ? this.getChildConfig((i = l._injector ?? i), l, c).pipe(
                          (0, gt.z)(O => {
                            const V = O.injector ?? i,
                              ye = O.routes,
                              { segmentGroup: Te, slicedSegments: ge } = rt(
                                r,
                                E,
                                S,
                                ye
                              ),
                              De = new ze(Te.segments, Te.children);
                            if (0 === ge.length && De.hasChildren())
                              return this.expandChildren(V, ye, De).pipe(
                                (0, Oe.U)(en => new ze(E, en))
                              );
                            if (0 === ye.length && 0 === ge.length)
                              return fe(new ze(E, {}));
                            const Be = un(l) === f;
                            return this.expandSegment(
                              V,
                              De,
                              ye,
                              ge,
                              Be ? Pe : f,
                              !0
                            ).pipe(
                              (0, Oe.U)(
                                St => new ze(E.concat(St.segments), St.children)
                              )
                            );
                          })
                        )
                      : yt(r)
                )
              );
        }
        getChildConfig(i, r, l) {
          return r.children
            ? fe({ routes: r.children, injector: i })
            : r.loadChildren
            ? void 0 !== r._loadedRoutes
              ? fe({ routes: r._loadedRoutes, injector: r._loadedInjector })
              : (function ns(a, i, r, l) {
                  const c = i.canLoad;
                  return void 0 === c || 0 === c.length
                    ? fe(!0)
                    : fe(
                        c.map(y => {
                          const E = _r(y, a);
                          return Rt(
                            (function Yu(a) {
                              return a && Ps(a.canLoad);
                            })(E)
                              ? E.canLoad(i, r)
                              : a.runInContext(() => E(i, r))
                          );
                        })
                      ).pipe(Kn(), hl());
                })(i, r, l).pipe(
                  (0, gt.z)(c =>
                    c
                      ? this.configLoader.loadChildren(i, r).pipe(
                          me(f => {
                            (r._loadedRoutes = f.routes),
                              (r._loadedInjector = f.injector);
                          })
                        )
                      : (function gf(a) {
                          return gr(tt(Vr, 3));
                        })()
                  )
                )
            : fe({ routes: [], injector: i });
        }
        lineralizeSegments(i, r) {
          let l = [],
            c = r.root;
          for (;;) {
            if (((l = l.concat(c.segments)), 0 === c.numberOfChildren))
              return fe(l);
            if (c.numberOfChildren > 1 || !c.children[Pe])
              return gr(new v.vHH(4e3, Vr));
            c = c.children[Pe];
          }
        }
        applyRedirectCommands(i, r, l) {
          return this.applyRedirectCreateUrlTree(
            r,
            this.urlSerializer.parse(r),
            i,
            l
          );
        }
        applyRedirectCreateUrlTree(i, r, l, c) {
          const f = this.createSegmentGroup(i, r.root, l, c);
          return new kr(
            f,
            this.createQueryParams(r.queryParams, this.urlTree.queryParams),
            r.fragment
          );
        }
        createQueryParams(i, r) {
          const l = {};
          return (
            Je(i, (c, f) => {
              if ("string" == typeof c && c.startsWith(":")) {
                const E = c.substring(1);
                l[f] = r[E];
              } else l[f] = c;
            }),
            l
          );
        }
        createSegmentGroup(i, r, l, c) {
          const f = this.createSegments(i, r.segments, l, c);
          let y = {};
          return (
            Je(r.children, (E, S) => {
              y[S] = this.createSegmentGroup(i, E, l, c);
            }),
            new ze(f, y)
          );
        }
        createSegments(i, r, l, c) {
          return r.map(f =>
            f.path.startsWith(":")
              ? this.findPosParam(i, f, c)
              : this.findOrReturn(f, l)
          );
        }
        findPosParam(i, r, l) {
          const c = l[r.path.substring(1)];
          if (!c) throw new v.vHH(4001, Vr);
          return c;
        }
        findOrReturn(i, r) {
          let l = 0;
          for (const c of r) {
            if (c.path === i.path) return r.splice(l), c;
            l++;
          }
          return i;
        }
      }
      class xs {}
      class yf {
        constructor(i, r, l, c, f, y, E) {
          (this.injector = i),
            (this.rootComponentType = r),
            (this.config = l),
            (this.urlTree = c),
            (this.url = f),
            (this.paramsInheritanceStrategy = y),
            (this.urlSerializer = E);
        }
        recognize() {
          const i = rt(
            this.urlTree.root,
            [],
            [],
            this.config.filter(r => void 0 === r.redirectTo)
          ).segmentGroup;
          return this.processSegmentGroup(
            this.injector,
            this.config,
            i,
            Pe
          ).pipe(
            (0, Oe.U)(r => {
              if (null === r) return null;
              const l = new _(
                  [],
                  Object.freeze({}),
                  Object.freeze({ ...this.urlTree.queryParams }),
                  this.urlTree.fragment,
                  {},
                  Pe,
                  this.rootComponentType,
                  null,
                  this.urlTree.root,
                  -1,
                  {}
                ),
                c = new qn(l, r),
                f = new g(this.url, c);
              return this.inheritParamsAndData(f._root), f;
            })
          );
        }
        inheritParamsAndData(i) {
          const r = i.value,
            l = ol(r, this.paramsInheritanceStrategy);
          (r.params = Object.freeze(l.params)),
            (r.data = Object.freeze(l.data)),
            i.children.forEach(c => this.inheritParamsAndData(c));
        }
        processSegmentGroup(i, r, l, c) {
          return 0 === l.segments.length && l.hasChildren()
            ? this.processChildren(i, r, l)
            : this.processSegment(i, r, l, l.segments, c);
        }
        processChildren(i, r, l) {
          return (0, Tt.D)(Object.keys(l.children)).pipe(
            zn(c => {
              const f = l.children[c],
                y = No(r, c);
              return this.processSegmentGroup(i, y, f, c);
            }),
            ws((c, f) => (c && f ? (c.push(...f), c) : null)),
            (function ni(a, i = !1) {
              return (0, et.e)((r, l) => {
                let c = 0;
                r.subscribe(
                  (0, Ft.x)(l, f => {
                    const y = a(f, c++);
                    (y || i) && l.next(f), !y && l.complete();
                  })
                );
              });
            })(c => null !== c),
            Mt(null),
            Lt(),
            (0, Oe.U)(c => {
              if (null === c) return null;
              const f = Ei(c);
              return (
                (function jp(a) {
                  a.sort((i, r) =>
                    i.value.outlet === Pe
                      ? -1
                      : r.value.outlet === Pe
                      ? 1
                      : i.value.outlet.localeCompare(r.value.outlet)
                  );
                })(f),
                f
              );
            })
          );
        }
        processSegment(i, r, l, c, f) {
          return (0, Tt.D)(r).pipe(
            zn(y =>
              this.processSegmentAgainstRoute(y._injector ?? i, y, l, c, f)
            ),
            Nn(y => !!y),
            Gn(y => {
              if (xo(y)) return hf(l, c, f) ? fe([]) : fe(null);
              throw y;
            })
          );
        }
        processSegmentAgainstRoute(i, r, l, c, f) {
          if (r.redirectTo || !ff(r, l, c, f)) return fe(null);
          let y;
          if ("**" === r.path) {
            const E = c.length > 0 ? Vt(c).parameters : {},
              S = tc(l) + c.length;
            y = fe({
              snapshot: new _(
                c,
                E,
                Object.freeze({ ...this.urlTree.queryParams }),
                this.urlTree.fragment,
                nc(r),
                un(r),
                r.component ?? r._loadedComponent ?? null,
                r,
                Dl(l),
                S,
                rc(r)
              ),
              consumedSegments: [],
              remainingSegments: []
            });
          } else
            y = df(l, r, c, i).pipe(
              (0, Oe.U)(
                ({
                  matched: E,
                  consumedSegments: S,
                  remainingSegments: T,
                  parameters: O
                }) => {
                  if (!E) return null;
                  const V = tc(l) + S.length;
                  return {
                    snapshot: new _(
                      S,
                      O,
                      Object.freeze({ ...this.urlTree.queryParams }),
                      this.urlTree.fragment,
                      nc(r),
                      un(r),
                      r.component ?? r._loadedComponent ?? null,
                      r,
                      Dl(l),
                      V,
                      rc(r)
                    ),
                    consumedSegments: S,
                    remainingSegments: T
                  };
                }
              )
            );
          return y.pipe(
            te(E => {
              if (null === E) return fe(null);
              const {
                snapshot: S,
                consumedSegments: T,
                remainingSegments: O
              } = E;
              i = r._injector ?? i;
              const V = r._loadedInjector ?? i,
                ye = (function En(a) {
                  return a.children
                    ? a.children
                    : a.loadChildren
                    ? a._loadedRoutes
                    : [];
                })(r),
                { segmentGroup: Te, slicedSegments: ge } = rt(
                  l,
                  T,
                  O,
                  ye.filter(Be => void 0 === Be.redirectTo)
                );
              if (0 === ge.length && Te.hasChildren())
                return this.processChildren(V, ye, Te).pipe(
                  (0, Oe.U)(Be => (null === Be ? null : [new qn(S, Be)]))
                );
              if (0 === ye.length && 0 === ge.length)
                return fe([new qn(S, [])]);
              const De = un(r) === f;
              return this.processSegment(V, ye, Te, ge, De ? Pe : f).pipe(
                (0, Oe.U)(Be => (null === Be ? null : [new qn(S, Be)]))
              );
            })
          );
        }
      }
      function vl(a) {
        const i = a.value.routeConfig;
        return i && "" === i.path && void 0 === i.redirectTo;
      }
      function Ei(a) {
        const i = [],
          r = new Set();
        for (const l of a) {
          if (!vl(l)) {
            i.push(l);
            continue;
          }
          const c = i.find(f => l.value.routeConfig === f.value.routeConfig);
          void 0 !== c ? (c.children.push(...l.children), r.add(c)) : i.push(l);
        }
        for (const l of r) {
          const c = Ei(l.children);
          i.push(new qn(l.value, c));
        }
        return i.filter(l => !r.has(l));
      }
      function Dl(a) {
        let i = a;
        for (; i._sourceSegment; ) i = i._sourceSegment;
        return i;
      }
      function tc(a) {
        let i = a,
          r = i._segmentIndexShift ?? 0;
        for (; i._sourceSegment; )
          (i = i._sourceSegment), (r += i._segmentIndexShift ?? 0);
        return r - 1;
      }
      function nc(a) {
        return a.data || {};
      }
      function rc(a) {
        return a.resolve || {};
      }
      function wl(a) {
        return "string" == typeof a.title || null === a.title;
      }
      function wi(a) {
        return te(i => {
          const r = a(i);
          return r ? (0, Tt.D)(r).pipe((0, Oe.U)(() => i)) : fe(i);
        });
      }
      const sr = new v.OlP("ROUTES");
      let rs = (() => {
        class a {
          constructor(r, l) {
            (this.injector = r),
              (this.compiler = l),
              (this.componentLoaders = new WeakMap()),
              (this.childrenLoaders = new WeakMap());
          }
          loadComponent(r) {
            if (this.componentLoaders.get(r))
              return this.componentLoaders.get(r);
            if (r._loadedComponent) return fe(r._loadedComponent);
            this.onLoadStartListener && this.onLoadStartListener(r);
            const l = Rt(r.loadComponent()).pipe(
                (0, Oe.U)(sc),
                me(f => {
                  this.onLoadEndListener && this.onLoadEndListener(r),
                    (r._loadedComponent = f);
                }),
                fn(() => {
                  this.componentLoaders.delete(r);
                })
              ),
              c = new Xt(l, () => new Ht.x()).pipe(Vn());
            return this.componentLoaders.set(r, c), c;
          }
          loadChildren(r, l) {
            if (this.childrenLoaders.get(l)) return this.childrenLoaders.get(l);
            if (l._loadedRoutes)
              return fe({
                routes: l._loadedRoutes,
                injector: l._loadedInjector
              });
            this.onLoadStartListener && this.onLoadStartListener(l);
            const f = this.loadModuleFactoryOrRoutes(l.loadChildren).pipe(
                (0, Oe.U)(E => {
                  this.onLoadEndListener && this.onLoadEndListener(l);
                  let S,
                    T,
                    O = !1;
                  Array.isArray(E)
                    ? (T = E)
                    : ((S = E.create(r).injector),
                      (T = mr(S.get(sr, [], v.XFs.Self | v.XFs.Optional))));
                  return { routes: T.map(ll), injector: S };
                }),
                fn(() => {
                  this.childrenLoaders.delete(l);
                })
              ),
              y = new Xt(f, () => new Ht.x()).pipe(Vn());
            return this.childrenLoaders.set(l, y), y;
          }
          loadModuleFactoryOrRoutes(r) {
            return Rt(r()).pipe(
              (0, Oe.U)(sc),
              (0, gt.z)(c =>
                c instanceof v.YKP || Array.isArray(c)
                  ? fe(c)
                  : (0, Tt.D)(this.compiler.compileModuleAsync(c))
              )
            );
          }
        }
        return (
          (a.ɵfac = function (r) {
            return new (r || a)(v.LFG(v.zs3), v.LFG(v.Sil));
          }),
          (a.ɵprov = v.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
          a
        );
      })();
      function sc(a) {
        return (function ic(a) {
          return a && "object" == typeof a && "default" in a;
        })(a)
          ? a.default
          : a;
      }
      let Er = (() => {
        class a {
          get hasRequestedNavigation() {
            return 0 !== this.navigationId;
          }
          constructor() {
            (this.currentNavigation = null),
              (this.lastSuccessfulNavigation = null),
              (this.events = new Ht.x()),
              (this.configLoader = (0, v.f3M)(rs)),
              (this.environmentInjector = (0, v.f3M)(v.lqb)),
              (this.urlSerializer = (0, v.f3M)(Is)),
              (this.rootContexts = (0, v.f3M)(_n)),
              (this.navigationId = 0),
              (this.afterPreactivation = () => fe(void 0)),
              (this.rootComponentType = null),
              (this.configLoader.onLoadEndListener = c =>
                this.events.next(new tl(c))),
              (this.configLoader.onLoadStartListener = c =>
                this.events.next(new tr(c)));
          }
          complete() {
            this.transitions?.complete();
          }
          handleNavigationRequest(r) {
            const l = ++this.navigationId;
            this.transitions?.next({ ...this.transitions.value, ...r, id: l });
          }
          setupNavigations(r) {
            return (
              (this.transitions = new Pn({
                id: 0,
                targetPageId: 0,
                currentUrlTree: r.currentUrlTree,
                currentRawUrl: r.currentUrlTree,
                extractedUrl: r.urlHandlingStrategy.extract(r.currentUrlTree),
                urlAfterRedirects: r.urlHandlingStrategy.extract(
                  r.currentUrlTree
                ),
                rawUrl: r.currentUrlTree,
                extras: {},
                resolve: null,
                reject: null,
                promise: Promise.resolve(!0),
                source: hi,
                restoredState: null,
                currentSnapshot: r.routerState.snapshot,
                targetSnapshot: null,
                currentRouterState: r.routerState,
                targetRouterState: null,
                guards: { canActivateChecks: [], canDeactivateChecks: [] },
                guardsResult: null
              })),
              this.transitions.pipe(
                wt(l => 0 !== l.id),
                (0, Oe.U)(l => ({
                  ...l,
                  extractedUrl: r.urlHandlingStrategy.extract(l.rawUrl)
                })),
                te(l => {
                  let c = !1,
                    f = !1;
                  return fe(l).pipe(
                    me(y => {
                      this.currentNavigation = {
                        id: y.id,
                        initialUrl: y.rawUrl,
                        extractedUrl: y.extractedUrl,
                        trigger: y.source,
                        extras: y.extras,
                        previousNavigation: this.lastSuccessfulNavigation
                          ? {
                              ...this.lastSuccessfulNavigation,
                              previousNavigation: null
                            }
                          : null
                      };
                    }),
                    te(y => {
                      const E = r.browserUrlTree.toString(),
                        S =
                          !r.navigated ||
                          y.extractedUrl.toString() !== E ||
                          E !== r.currentUrlTree.toString();
                      if (
                        !S &&
                        "reload" !==
                          (y.extras.onSameUrlNavigation ??
                            r.onSameUrlNavigation)
                      ) {
                        const O = "";
                        return (
                          this.events.next(
                            new Fn(y.id, r.serializeUrl(l.rawUrl), O, 0)
                          ),
                          (r.rawUrlTree = y.rawUrl),
                          y.resolve(null),
                          je.E
                        );
                      }
                      if (r.urlHandlingStrategy.shouldProcessUrl(y.rawUrl))
                        return (
                          is(y.source) && (r.browserUrlTree = y.extractedUrl),
                          fe(y).pipe(
                            te(O => {
                              const V = this.transitions?.getValue();
                              return (
                                this.events.next(
                                  new mt(
                                    O.id,
                                    this.urlSerializer.serialize(
                                      O.extractedUrl
                                    ),
                                    O.source,
                                    O.restoredState
                                  )
                                ),
                                V !== this.transitions?.getValue()
                                  ? je.E
                                  : Promise.resolve(O)
                              );
                            }),
                            (function ec(a, i, r, l) {
                              return te(c =>
                                (function Ln(a, i, r, l, c) {
                                  return new _i(a, i, r, l, c).apply();
                                })(a, i, r, c.extractedUrl, l).pipe(
                                  (0, Oe.U)(f => ({
                                    ...c,
                                    urlAfterRedirects: f
                                  }))
                                )
                              );
                            })(
                              this.environmentInjector,
                              this.configLoader,
                              this.urlSerializer,
                              r.config
                            ),
                            me(O => {
                              (this.currentNavigation = {
                                ...this.currentNavigation,
                                finalUrl: O.urlAfterRedirects
                              }),
                                (l.urlAfterRedirects = O.urlAfterRedirects);
                            }),
                            (function vf(a, i, r, l, c) {
                              return (0, gt.z)(f =>
                                (function $p(
                                  a,
                                  i,
                                  r,
                                  l,
                                  c,
                                  f,
                                  y = "emptyOnly"
                                ) {
                                  return new yf(a, i, r, l, c, y, f)
                                    .recognize()
                                    .pipe(
                                      te(E =>
                                        null === E
                                          ? (function mf(a) {
                                              return new on.y(i => i.error(a));
                                            })(new xs())
                                          : fe(E)
                                      )
                                    );
                                })(
                                  a,
                                  i,
                                  r,
                                  f.urlAfterRedirects,
                                  l.serialize(f.urlAfterRedirects),
                                  l,
                                  c
                                ).pipe(
                                  (0, Oe.U)(y => ({ ...f, targetSnapshot: y }))
                                )
                              );
                            })(
                              this.environmentInjector,
                              this.rootComponentType,
                              r.config,
                              this.urlSerializer,
                              r.paramsInheritanceStrategy
                            ),
                            me(O => {
                              if (
                                ((l.targetSnapshot = O.targetSnapshot),
                                "eager" === r.urlUpdateStrategy)
                              ) {
                                if (!O.extras.skipLocationChange) {
                                  const ye = r.urlHandlingStrategy.merge(
                                    O.urlAfterRedirects,
                                    O.rawUrl
                                  );
                                  r.setBrowserUrl(ye, O);
                                }
                                r.browserUrlTree = O.urlAfterRedirects;
                              }
                              const V = new Qi(
                                O.id,
                                this.urlSerializer.serialize(O.extractedUrl),
                                this.urlSerializer.serialize(
                                  O.urlAfterRedirects
                                ),
                                O.targetSnapshot
                              );
                              this.events.next(V);
                            })
                          )
                        );
                      if (
                        S &&
                        r.urlHandlingStrategy.shouldProcessUrl(r.rawUrlTree)
                      ) {
                        const {
                            id: O,
                            extractedUrl: V,
                            source: ye,
                            restoredState: Te,
                            extras: ge
                          } = y,
                          De = new mt(
                            O,
                            this.urlSerializer.serialize(V),
                            ye,
                            Te
                          );
                        this.events.next(De);
                        const Be = To(V, this.rootComponentType).snapshot;
                        return fe(
                          (l = {
                            ...y,
                            targetSnapshot: Be,
                            urlAfterRedirects: V,
                            extras: {
                              ...ge,
                              skipLocationChange: !1,
                              replaceUrl: !1
                            }
                          })
                        );
                      }
                      {
                        const O = "";
                        return (
                          this.events.next(
                            new Fn(y.id, r.serializeUrl(l.extractedUrl), O, 1)
                          ),
                          (r.rawUrlTree = y.rawUrl),
                          y.resolve(null),
                          je.E
                        );
                      }
                    }),
                    me(y => {
                      const E = new Bu(
                        y.id,
                        this.urlSerializer.serialize(y.extractedUrl),
                        this.urlSerializer.serialize(y.urlAfterRedirects),
                        y.targetSnapshot
                      );
                      this.events.next(E);
                    }),
                    (0, Oe.U)(
                      y =>
                        (l = {
                          ...y,
                          guards: ir(
                            y.targetSnapshot,
                            y.currentSnapshot,
                            this.rootContexts
                          )
                        })
                    ),
                    (function uf(a, i) {
                      return (0, gt.z)(r => {
                        const {
                          targetSnapshot: l,
                          currentSnapshot: c,
                          guards: {
                            canActivateChecks: f,
                            canDeactivateChecks: y
                          }
                        } = r;
                        return 0 === y.length && 0 === f.length
                          ? fe({ ...r, guardsResult: !0 })
                          : (function Xu(a, i, r, l) {
                              return (0, Tt.D)(a).pipe(
                                (0, gt.z)(c =>
                                  (function ts(a, i, r, l, c) {
                                    const f =
                                      i && i.routeConfig
                                        ? i.routeConfig.canDeactivate
                                        : null;
                                    return f && 0 !== f.length
                                      ? fe(
                                          f.map(E => {
                                            const S = Ur(i) ?? c,
                                              T = _r(E, S);
                                            return Rt(
                                              (function af(a) {
                                                return a && Ps(a.canDeactivate);
                                              })(T)
                                                ? T.canDeactivate(a, i, r, l)
                                                : S.runInContext(() =>
                                                    T(a, i, r, l)
                                                  )
                                            ).pipe(Nn());
                                          })
                                        ).pipe(Kn())
                                      : fe(!0);
                                  })(c.component, c.route, r, i, l)
                                ),
                                Nn(c => !0 !== c, !0)
                              );
                            })(y, l, c, a).pipe(
                              (0, gt.z)(E =>
                                E &&
                                (function Ku(a) {
                                  return "boolean" == typeof a;
                                })(E)
                                  ? (function dl(a, i, r, l) {
                                      return (0, Tt.D)(i).pipe(
                                        zn(c =>
                                          Hi(
                                            (function Ju(a, i) {
                                              return (
                                                null !== a && i && i(new gi(a)),
                                                fe(!0)
                                              );
                                            })(c.route.parent, l),
                                            (function cf(a, i) {
                                              return (
                                                null !== a && i && i(new Uu(a)),
                                                fe(!0)
                                              );
                                            })(c.route, l),
                                            (function es(a, i, r) {
                                              const l = i[i.length - 1],
                                                f = i
                                                  .slice(0, i.length - 1)
                                                  .reverse()
                                                  .map(y =>
                                                    (function sf(a) {
                                                      const i = a.routeConfig
                                                        ? a.routeConfig
                                                            .canActivateChild
                                                        : null;
                                                      return i && 0 !== i.length
                                                        ? { node: a, guards: i }
                                                        : null;
                                                    })(y)
                                                  )
                                                  .filter(y => null !== y)
                                                  .map(y =>
                                                    co(() =>
                                                      fe(
                                                        y.guards.map(S => {
                                                          const T =
                                                              Ur(y.node) ?? r,
                                                            O = _r(S, T);
                                                          return Rt(
                                                            (function Zu(a) {
                                                              return (
                                                                a &&
                                                                Ps(
                                                                  a.canActivateChild
                                                                )
                                                              );
                                                            })(O)
                                                              ? O.canActivateChild(
                                                                  l,
                                                                  a
                                                                )
                                                              : T.runInContext(
                                                                  () => O(l, a)
                                                                )
                                                          ).pipe(Nn());
                                                        })
                                                      ).pipe(Kn())
                                                    )
                                                  );
                                              return fe(f).pipe(Kn());
                                            })(a, c.path, r),
                                            (function fl(a, i, r) {
                                              const l = i.routeConfig
                                                ? i.routeConfig.canActivate
                                                : null;
                                              if (!l || 0 === l.length)
                                                return fe(!0);
                                              const c = l.map(f =>
                                                co(() => {
                                                  const y = Ur(i) ?? r,
                                                    E = _r(f, y);
                                                  return Rt(
                                                    (function Qu(a) {
                                                      return (
                                                        a && Ps(a.canActivate)
                                                      );
                                                    })(E)
                                                      ? E.canActivate(i, a)
                                                      : y.runInContext(() =>
                                                          E(i, a)
                                                        )
                                                  ).pipe(Nn());
                                                })
                                              );
                                              return fe(c).pipe(Kn());
                                            })(a, c.route, r)
                                          )
                                        ),
                                        Nn(c => !0 !== c, !0)
                                      );
                                    })(l, f, a, i)
                                  : fe(E)
                              ),
                              (0, Oe.U)(E => ({ ...r, guardsResult: E }))
                            );
                      });
                    })(this.environmentInjector, y => this.events.next(y)),
                    me(y => {
                      if (
                        ((l.guardsResult = y.guardsResult), $r(y.guardsResult))
                      )
                        throw dt(0, y.guardsResult);
                      const E = new ef(
                        y.id,
                        this.urlSerializer.serialize(y.extractedUrl),
                        this.urlSerializer.serialize(y.urlAfterRedirects),
                        y.targetSnapshot,
                        !!y.guardsResult
                      );
                      this.events.next(E);
                    }),
                    wt(
                      y =>
                        !!y.guardsResult ||
                        (r.restoreHistory(y),
                        this.cancelNavigationTransition(y, "", 3, r),
                        !1)
                    ),
                    wi(y => {
                      if (y.guards.canActivateChecks.length)
                        return fe(y).pipe(
                          me(E => {
                            const S = new wo(
                              E.id,
                              this.urlSerializer.serialize(E.extractedUrl),
                              this.urlSerializer.serialize(E.urlAfterRedirects),
                              E.targetSnapshot
                            );
                            this.events.next(S);
                          }),
                          te(E => {
                            let S = !1;
                            return fe(E).pipe(
                              (function Df(a, i) {
                                return (0, gt.z)(r => {
                                  const {
                                    targetSnapshot: l,
                                    guards: { canActivateChecks: c }
                                  } = r;
                                  if (!c.length) return fe(r);
                                  let f = 0;
                                  return (0, Tt.D)(c).pipe(
                                    zn(y =>
                                      (function _l(a, i, r, l) {
                                        const c = a.routeConfig,
                                          f = a._resolve;
                                        return (
                                          void 0 !== c?.title &&
                                            !wl(c) &&
                                            (f[Lr] = c.title),
                                          (function ko(a, i, r, l) {
                                            const c = (function El(a) {
                                              return [
                                                ...Object.keys(a),
                                                ...Object.getOwnPropertySymbols(
                                                  a
                                                )
                                              ];
                                            })(a);
                                            if (0 === c.length) return fe({});
                                            const f = {};
                                            return (0, Tt.D)(c).pipe(
                                              (0, gt.z)(y =>
                                                (function Ls(a, i, r, l) {
                                                  const c = Ur(i) ?? l,
                                                    f = _r(a, c);
                                                  return Rt(
                                                    f.resolve
                                                      ? f.resolve(i, r)
                                                      : c.runInContext(() =>
                                                          f(i, r)
                                                        )
                                                  );
                                                })(a[y], i, r, l).pipe(
                                                  Nn(),
                                                  me(E => {
                                                    f[y] = E;
                                                  })
                                                )
                                              ),
                                              Jn(1),
                                              (function xr(a) {
                                                return (0, Oe.U)(() => a);
                                              })(f),
                                              Gn(y => (xo(y) ? je.E : gr(y)))
                                            );
                                          })(f, a, i, l).pipe(
                                            (0, Oe.U)(
                                              y => (
                                                (a._resolvedData = y),
                                                (a.data = ol(a, r).resolve),
                                                c &&
                                                  wl(c) &&
                                                  (a.data[Lr] = c.title),
                                                null
                                              )
                                            )
                                          )
                                        );
                                      })(y.route, l, a, i)
                                    ),
                                    me(() => f++),
                                    Jn(1),
                                    (0, gt.z)(y =>
                                      f === c.length ? fe(r) : je.E
                                    )
                                  );
                                });
                              })(
                                r.paramsInheritanceStrategy,
                                this.environmentInjector
                              ),
                              me({
                                next: () => (S = !0),
                                complete: () => {
                                  S ||
                                    (r.restoreHistory(E),
                                    this.cancelNavigationTransition(
                                      E,
                                      "",
                                      2,
                                      r
                                    ));
                                }
                              })
                            );
                          }),
                          me(E => {
                            const S = new zt(
                              E.id,
                              this.urlSerializer.serialize(E.extractedUrl),
                              this.urlSerializer.serialize(E.urlAfterRedirects),
                              E.targetSnapshot
                            );
                            this.events.next(S);
                          })
                        );
                    }),
                    wi(y => {
                      const E = S => {
                        const T = [];
                        S.routeConfig?.loadComponent &&
                          !S.routeConfig._loadedComponent &&
                          T.push(
                            this.configLoader.loadComponent(S.routeConfig).pipe(
                              me(O => {
                                S.component = O;
                              }),
                              (0, Oe.U)(() => {})
                            )
                          );
                        for (const O of S.children) T.push(...E(O));
                        return T;
                      };
                      return Nr(E(y.targetSnapshot.root)).pipe(Mt(), Re(1));
                    }),
                    wi(() => this.afterPreactivation()),
                    (0, Oe.U)(y => {
                      const E = (function ce(a, i, r) {
                        const l = We(a, i._root, r ? r._root : void 0);
                        return new Io(l, i);
                      })(
                        r.routeReuseStrategy,
                        y.targetSnapshot,
                        y.currentRouterState
                      );
                      return (l = { ...y, targetRouterState: E });
                    }),
                    me(y => {
                      (r.currentUrlTree = y.urlAfterRedirects),
                        (r.rawUrlTree = r.urlHandlingStrategy.merge(
                          y.urlAfterRedirects,
                          y.rawUrl
                        )),
                        (r.routerState = y.targetRouterState),
                        "deferred" === r.urlUpdateStrategy &&
                          (y.extras.skipLocationChange ||
                            r.setBrowserUrl(r.rawUrlTree, y),
                          (r.browserUrlTree = y.urlAfterRedirects));
                    }),
                    ((a, i, r) =>
                      (0, Oe.U)(
                        l => (
                          new Wu(
                            i,
                            l.targetRouterState,
                            l.currentRouterState,
                            r
                          ).activate(a),
                          l
                        )
                      ))(this.rootContexts, r.routeReuseStrategy, y =>
                      this.events.next(y)
                    ),
                    me({
                      next: y => {
                        (c = !0),
                          (this.lastSuccessfulNavigation =
                            this.currentNavigation),
                          (r.navigated = !0),
                          this.events.next(
                            new yn(
                              y.id,
                              this.urlSerializer.serialize(y.extractedUrl),
                              this.urlSerializer.serialize(r.currentUrlTree)
                            )
                          ),
                          r.titleStrategy?.updateTitle(
                            y.targetRouterState.snapshot
                          ),
                          y.resolve(!0);
                      },
                      complete: () => {
                        c = !0;
                      }
                    }),
                    fn(() => {
                      c || f || this.cancelNavigationTransition(l, "", 1, r),
                        this.currentNavigation?.id === l.id &&
                          (this.currentNavigation = null);
                    }),
                    Gn(y => {
                      if (((f = !0), ln(y))) {
                        Pt(y) || ((r.navigated = !0), r.restoreHistory(l, !0));
                        const E = new Dr(
                          l.id,
                          this.urlSerializer.serialize(l.extractedUrl),
                          y.message,
                          y.cancellationCode
                        );
                        if ((this.events.next(E), Pt(y))) {
                          const S = r.urlHandlingStrategy.merge(
                              y.url,
                              r.rawUrlTree
                            ),
                            T = {
                              skipLocationChange: l.extras.skipLocationChange,
                              replaceUrl:
                                "eager" === r.urlUpdateStrategy || is(l.source)
                            };
                          r.scheduleNavigation(S, hi, null, T, {
                            resolve: l.resolve,
                            reject: l.reject,
                            promise: l.promise
                          });
                        } else l.resolve(!1);
                      } else {
                        r.restoreHistory(l, !0);
                        const E = new pi(
                          l.id,
                          this.urlSerializer.serialize(l.extractedUrl),
                          y,
                          l.targetSnapshot ?? void 0
                        );
                        this.events.next(E);
                        try {
                          l.resolve(r.errorHandler(y));
                        } catch (S) {
                          l.reject(S);
                        }
                      }
                      return je.E;
                    })
                  );
                })
              )
            );
          }
          cancelNavigationTransition(r, l, c, f) {
            const y = new Dr(
              r.id,
              this.urlSerializer.serialize(r.extractedUrl),
              l,
              c
            );
            this.events.next(y), r.resolve(!1);
          }
        }
        return (
          (a.ɵfac = function (r) {
            return new (r || a)();
          }),
          (a.ɵprov = v.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
          a
        );
      })();
      function is(a) {
        return a !== hi;
      }
      let oc = (() => {
          class a {
            buildTitle(r) {
              let l,
                c = r.root;
              for (; void 0 !== c; )
                (l = this.getResolvedTitleForRoute(c) ?? l),
                  (c = c.children.find(f => f.outlet === Pe));
              return l;
            }
            getResolvedTitleForRoute(r) {
              return r.data[Lr];
            }
          }
          return (
            (a.ɵfac = function (r) {
              return new (r || a)();
            }),
            (a.ɵprov = v.Yz7({
              token: a,
              factory: function () {
                return (0, v.f3M)(Hp);
              },
              providedIn: "root"
            })),
            a
          );
        })(),
        Hp = (() => {
          class a extends oc {
            constructor(r) {
              super(), (this.title = r);
            }
            updateTitle(r) {
              const l = this.buildTitle(r);
              void 0 !== l && this.title.setTitle(l);
            }
          }
          return (
            (a.ɵfac = function (r) {
              return new (r || a)(v.LFG(Rn));
            }),
            (a.ɵprov = v.Yz7({
              token: a,
              factory: a.ɵfac,
              providedIn: "root"
            })),
            a
          );
        })(),
        ac = (() => {
          class a {}
          return (
            (a.ɵfac = function (r) {
              return new (r || a)();
            }),
            (a.ɵprov = v.Yz7({
              token: a,
              factory: function () {
                return (0, v.f3M)(Vp);
              },
              providedIn: "root"
            })),
            a
          );
        })();
      class Ef {
        shouldDetach(i) {
          return !1;
        }
        store(i, r) {}
        shouldAttach(i) {
          return !1;
        }
        retrieve(i) {
          return null;
        }
        shouldReuseRoute(i, r) {
          return i.routeConfig === r.routeConfig;
        }
      }
      let Vp = (() => {
        class a extends Ef {}
        return (
          (a.ɵfac = (function () {
            let i;
            return function (l) {
              return (i || (i = v.n5z(a)))(l || a);
            };
          })()),
          (a.ɵprov = v.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
          a
        );
      })();
      const jo = new v.OlP("", { providedIn: "root", factory: () => ({}) });
      let Cf = (() => {
          class a {}
          return (
            (a.ɵfac = function (r) {
              return new (r || a)();
            }),
            (a.ɵprov = v.Yz7({
              token: a,
              factory: function () {
                return (0, v.f3M)(Bo);
              },
              providedIn: "root"
            })),
            a
          );
        })(),
        Bo = (() => {
          class a {
            shouldProcessUrl(r) {
              return !0;
            }
            extract(r) {
              return r;
            }
            merge(r, l) {
              return r;
            }
          }
          return (
            (a.ɵfac = function (r) {
              return new (r || a)();
            }),
            (a.ɵprov = v.Yz7({
              token: a,
              factory: a.ɵfac,
              providedIn: "root"
            })),
            a
          );
        })();
      function Sf(a) {
        throw a;
      }
      function lc(a, i, r) {
        return i.parse("/");
      }
      const zp = {
          paths: "exact",
          fragment: "ignored",
          matrixParams: "ignored",
          queryParams: "exact"
        },
        uc = {
          paths: "subset",
          fragment: "ignored",
          matrixParams: "ignored",
          queryParams: "subset"
        };
      let kn = (() => {
        class a {
          get navigationId() {
            return this.navigationTransitions.navigationId;
          }
          get browserPageId() {
            return this.location.getState()?.ɵrouterPageId;
          }
          get events() {
            return this.navigationTransitions.events;
          }
          constructor() {
            (this.disposed = !1),
              (this.currentPageId = 0),
              (this.console = (0, v.f3M)(v.c2e)),
              (this.isNgZoneEnabled = !1),
              (this.options = (0, v.f3M)(jo, { optional: !0 }) || {}),
              (this.errorHandler = this.options.errorHandler || Sf),
              (this.malformedUriErrorHandler =
                this.options.malformedUriErrorHandler || lc),
              (this.navigated = !1),
              (this.lastSuccessfulId = -1),
              (this.urlHandlingStrategy = (0, v.f3M)(Cf)),
              (this.routeReuseStrategy = (0, v.f3M)(ac)),
              (this.urlCreationStrategy = (0, v.f3M)(So)),
              (this.titleStrategy = (0, v.f3M)(oc)),
              (this.onSameUrlNavigation =
                this.options.onSameUrlNavigation || "ignore"),
              (this.paramsInheritanceStrategy =
                this.options.paramsInheritanceStrategy || "emptyOnly"),
              (this.urlUpdateStrategy =
                this.options.urlUpdateStrategy || "deferred"),
              (this.canceledNavigationResolution =
                this.options.canceledNavigationResolution || "replace"),
              (this.config = mr((0, v.f3M)(sr, { optional: !0 }) ?? [])),
              (this.navigationTransitions = (0, v.f3M)(Er)),
              (this.urlSerializer = (0, v.f3M)(Is)),
              (this.location = (0, v.f3M)(L.Ye)),
              (this.isNgZoneEnabled =
                (0, v.f3M)(v.R0b) instanceof v.R0b && v.R0b.isInAngularZone()),
              this.resetConfig(this.config),
              (this.currentUrlTree = new kr()),
              (this.rawUrlTree = this.currentUrlTree),
              (this.browserUrlTree = this.currentUrlTree),
              (this.routerState = To(this.currentUrlTree, null)),
              this.navigationTransitions.setupNavigations(this).subscribe(
                r => {
                  (this.lastSuccessfulId = r.id),
                    (this.currentPageId = r.targetPageId);
                },
                r => {
                  this.console.warn(`Unhandled Navigation Error: ${r}`);
                }
              );
          }
          resetRootComponentType(r) {
            (this.routerState.root.component = r),
              (this.navigationTransitions.rootComponentType = r);
          }
          initialNavigation() {
            if (
              (this.setUpLocationChangeListener(),
              !this.navigationTransitions.hasRequestedNavigation)
            ) {
              const r = this.location.getState();
              this.navigateToSyncWithBrowser(this.location.path(!0), hi, r);
            }
          }
          setUpLocationChangeListener() {
            this.locationSubscription ||
              (this.locationSubscription = this.location.subscribe(r => {
                const l = "popstate" === r.type ? "popstate" : "hashchange";
                "popstate" === l &&
                  setTimeout(() => {
                    this.navigateToSyncWithBrowser(r.url, l, r.state);
                  }, 0);
              }));
          }
          navigateToSyncWithBrowser(r, l, c) {
            const f = { replaceUrl: !0 },
              y = c?.navigationId ? c : null;
            if (c) {
              const S = { ...c };
              delete S.navigationId,
                delete S.ɵrouterPageId,
                0 !== Object.keys(S).length && (f.state = S);
            }
            const E = this.parseUrl(r);
            this.scheduleNavigation(E, l, y, f);
          }
          get url() {
            return this.serializeUrl(this.currentUrlTree);
          }
          getCurrentNavigation() {
            return this.navigationTransitions.currentNavigation;
          }
          resetConfig(r) {
            (this.config = r.map(ll)),
              (this.navigated = !1),
              (this.lastSuccessfulId = -1);
          }
          ngOnDestroy() {
            this.dispose();
          }
          dispose() {
            this.navigationTransitions.complete(),
              this.locationSubscription &&
                (this.locationSubscription.unsubscribe(),
                (this.locationSubscription = void 0)),
              (this.disposed = !0);
          }
          createUrlTree(r, l = {}) {
            const {
                relativeTo: c,
                queryParams: f,
                fragment: y,
                queryParamsHandling: E,
                preserveFragment: S
              } = l,
              T = S ? this.currentUrlTree.fragment : y;
            let O = null;
            switch (E) {
              case "merge":
                O = { ...this.currentUrlTree.queryParams, ...f };
                break;
              case "preserve":
                O = this.currentUrlTree.queryParams;
                break;
              default:
                O = f || null;
            }
            return (
              null !== O && (O = this.removeEmptyProps(O)),
              this.urlCreationStrategy.createUrlTree(
                c,
                this.routerState,
                this.currentUrlTree,
                r,
                O,
                T ?? null
              )
            );
          }
          navigateByUrl(r, l = { skipLocationChange: !1 }) {
            const c = $r(r) ? r : this.parseUrl(r),
              f = this.urlHandlingStrategy.merge(c, this.rawUrlTree);
            return this.scheduleNavigation(f, hi, null, l);
          }
          navigate(r, l = { skipLocationChange: !1 }) {
            return (
              (function bf(a) {
                for (let i = 0; i < a.length; i++) {
                  if (null == a[i]) throw new v.vHH(4008, !1);
                }
              })(r),
              this.navigateByUrl(this.createUrlTree(r, l), l)
            );
          }
          serializeUrl(r) {
            return this.urlSerializer.serialize(r);
          }
          parseUrl(r) {
            let l;
            try {
              l = this.urlSerializer.parse(r);
            } catch (c) {
              l = this.malformedUriErrorHandler(c, this.urlSerializer, r);
            }
            return l;
          }
          isActive(r, l) {
            let c;
            if (((c = !0 === l ? { ...zp } : !1 === l ? { ...uc } : l), $r(r)))
              return hn(this.currentUrlTree, r, c);
            const f = this.parseUrl(r);
            return hn(this.currentUrlTree, f, c);
          }
          removeEmptyProps(r) {
            return Object.keys(r).reduce((l, c) => {
              const f = r[c];
              return null != f && (l[c] = f), l;
            }, {});
          }
          scheduleNavigation(r, l, c, f, y) {
            if (this.disposed) return Promise.resolve(!1);
            let E, S, T, O;
            return (
              y
                ? ((E = y.resolve), (S = y.reject), (T = y.promise))
                : (T = new Promise((V, ye) => {
                    (E = V), (S = ye);
                  })),
              (O =
                "computed" === this.canceledNavigationResolution
                  ? c && c.ɵrouterPageId
                    ? c.ɵrouterPageId
                    : f.replaceUrl || f.skipLocationChange
                    ? this.browserPageId ?? 0
                    : (this.browserPageId ?? 0) + 1
                  : 0),
              this.navigationTransitions.handleNavigationRequest({
                targetPageId: O,
                source: l,
                restoredState: c,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.currentUrlTree,
                rawUrl: r,
                extras: f,
                resolve: E,
                reject: S,
                promise: T,
                currentSnapshot: this.routerState.snapshot,
                currentRouterState: this.routerState
              }),
              T.catch(V => Promise.reject(V))
            );
          }
          setBrowserUrl(r, l) {
            const c = this.urlSerializer.serialize(r),
              f = {
                ...l.extras.state,
                ...this.generateNgRouterState(l.id, l.targetPageId)
              };
            this.location.isCurrentPathEqualTo(c) || l.extras.replaceUrl
              ? this.location.replaceState(c, "", f)
              : this.location.go(c, "", f);
          }
          restoreHistory(r, l = !1) {
            if ("computed" === this.canceledNavigationResolution) {
              const c = this.currentPageId - r.targetPageId;
              ("popstate" !== r.source &&
                "eager" !== this.urlUpdateStrategy &&
                this.currentUrlTree !==
                  this.getCurrentNavigation()?.finalUrl) ||
              0 === c
                ? this.currentUrlTree ===
                    this.getCurrentNavigation()?.finalUrl &&
                  0 === c &&
                  (this.resetState(r),
                  (this.browserUrlTree = r.currentUrlTree),
                  this.resetUrlToCurrentUrlTree())
                : this.location.historyGo(c);
            } else
              "replace" === this.canceledNavigationResolution &&
                (l && this.resetState(r), this.resetUrlToCurrentUrlTree());
          }
          resetState(r) {
            (this.routerState = r.currentRouterState),
              (this.currentUrlTree = r.currentUrlTree),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(
                this.currentUrlTree,
                r.rawUrl
              ));
          }
          resetUrlToCurrentUrlTree() {
            this.location.replaceState(
              this.urlSerializer.serialize(this.rawUrlTree),
              "",
              this.generateNgRouterState(
                this.lastSuccessfulId,
                this.currentPageId
              )
            );
          }
          generateNgRouterState(r, l) {
            return "computed" === this.canceledNavigationResolution
              ? { navigationId: r, ɵrouterPageId: l }
              : { navigationId: r };
          }
        }
        return (
          (a.ɵfac = function (r) {
            return new (r || a)();
          }),
          (a.ɵprov = v.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
          a
        );
      })();
      class If {}
      let Wp = (() => {
        class a {
          constructor(r, l, c, f, y) {
            (this.router = r),
              (this.injector = c),
              (this.preloadingStrategy = f),
              (this.loader = y);
          }
          setUpPreloading() {
            this.subscription = this.router.events
              .pipe(
                wt(r => r instanceof yn),
                zn(() => this.preload())
              )
              .subscribe(() => {});
          }
          preload() {
            return this.processRoutes(this.injector, this.router.config);
          }
          ngOnDestroy() {
            this.subscription && this.subscription.unsubscribe();
          }
          processRoutes(r, l) {
            const c = [];
            for (const f of l) {
              f.providers &&
                !f._injector &&
                (f._injector = (0, v.MMx)(f.providers, r, `Route: ${f.path}`));
              const y = f._injector ?? r,
                E = f._loadedInjector ?? y;
              (f.loadChildren && !f._loadedRoutes && void 0 === f.canLoad) ||
              (f.loadComponent && !f._loadedComponent)
                ? c.push(this.preloadConfig(y, f))
                : (f.children || f._loadedRoutes) &&
                  c.push(this.processRoutes(E, f.children ?? f._loadedRoutes));
            }
            return (0, Tt.D)(c).pipe((0, pr.J)());
          }
          preloadConfig(r, l) {
            return this.preloadingStrategy.preload(l, () => {
              let c;
              c =
                l.loadChildren && void 0 === l.canLoad
                  ? this.loader.loadChildren(r, l)
                  : fe(null);
              const f = c.pipe(
                (0, gt.z)(y =>
                  null === y
                    ? fe(void 0)
                    : ((l._loadedRoutes = y.routes),
                      (l._loadedInjector = y.injector),
                      this.processRoutes(y.injector ?? r, y.routes))
                )
              );
              if (l.loadComponent && !l._loadedComponent) {
                const y = this.loader.loadComponent(l);
                return (0, Tt.D)([f, y]).pipe((0, pr.J)());
              }
              return f;
            });
          }
        }
        return (
          (a.ɵfac = function (r) {
            return new (r || a)(
              v.LFG(kn),
              v.LFG(v.Sil),
              v.LFG(v.lqb),
              v.LFG(If),
              v.LFG(rs)
            );
          }),
          (a.ɵprov = v.Yz7({ token: a, factory: a.ɵfac, providedIn: "root" })),
          a
        );
      })();
      const dc = new v.OlP("");
      let Tf = (() => {
        class a {
          constructor(r, l, c, f, y = {}) {
            (this.urlSerializer = r),
              (this.transitions = l),
              (this.viewportScroller = c),
              (this.zone = f),
              (this.options = y),
              (this.lastId = 0),
              (this.lastSource = "imperative"),
              (this.restoredId = 0),
              (this.store = {}),
              (y.scrollPositionRestoration =
                y.scrollPositionRestoration || "disabled"),
              (y.anchorScrolling = y.anchorScrolling || "disabled");
          }
          init() {
            "disabled" !== this.options.scrollPositionRestoration &&
              this.viewportScroller.setHistoryScrollRestoration("manual"),
              (this.routerEventsSubscription = this.createScrollEvents()),
              (this.scrollEventsSubscription = this.consumeScrollEvents());
          }
          createScrollEvents() {
            return this.transitions.events.subscribe(r => {
              r instanceof mt
                ? ((this.store[this.lastId] =
                    this.viewportScroller.getScrollPosition()),
                  (this.lastSource = r.navigationTrigger),
                  (this.restoredId = r.restoredState
                    ? r.restoredState.navigationId
                    : 0))
                : r instanceof yn &&
                  ((this.lastId = r.id),
                  this.scheduleScrollEvent(
                    r,
                    this.urlSerializer.parse(r.urlAfterRedirects).fragment
                  ));
            });
          }
          consumeScrollEvents() {
            return this.transitions.events.subscribe(r => {
              r instanceof rl &&
                (r.position
                  ? "top" === this.options.scrollPositionRestoration
                    ? this.viewportScroller.scrollToPosition([0, 0])
                    : "enabled" === this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition(r.position)
                  : r.anchor && "enabled" === this.options.anchorScrolling
                  ? this.viewportScroller.scrollToAnchor(r.anchor)
                  : "disabled" !== this.options.scrollPositionRestoration &&
                    this.viewportScroller.scrollToPosition([0, 0]));
            });
          }
          scheduleScrollEvent(r, l) {
            this.zone.runOutsideAngular(() => {
              setTimeout(() => {
                this.zone.run(() => {
                  this.transitions.events.next(
                    new rl(
                      r,
                      "popstate" === this.lastSource
                        ? this.store[this.restoredId]
                        : null,
                      l
                    )
                  );
                });
              }, 0);
            });
          }
          ngOnDestroy() {
            this.routerEventsSubscription?.unsubscribe(),
              this.scrollEventsSubscription?.unsubscribe();
          }
        }
        return (
          (a.ɵfac = function (r) {
            v.$Z();
          }),
          (a.ɵprov = v.Yz7({ token: a, factory: a.ɵfac })),
          a
        );
      })();
      function wr(a, i) {
        return { ɵkind: a, ɵproviders: i };
      }
      function hc() {
        const a = (0, v.f3M)(v.zs3);
        return i => {
          const r = a.get(v.z2F);
          if (i !== r.components[0]) return;
          const l = a.get(kn),
            c = a.get(pc);
          1 === a.get(Ml) && l.initialNavigation(),
            a.get(mc, null, v.XFs.Optional)?.setUpPreloading(),
            a.get(dc, null, v.XFs.Optional)?.init(),
            l.resetRootComponentType(r.componentTypes[0]),
            c.closed || (c.next(), c.unsubscribe());
        };
      }
      const pc = new v.OlP("", { factory: () => new Ht.x() }),
        Ml = new v.OlP("", { providedIn: "root", factory: () => 1 });
      const mc = new v.OlP("");
      function Rf(a) {
        return wr(0, [
          { provide: mc, useExisting: Wp },
          { provide: If, useExisting: a }
        ]);
      }
      const Ho = new v.OlP("ROUTER_FORROOT_GUARD"),
        yc = [
          L.Ye,
          { provide: Is, useClass: Ka },
          kn,
          _n,
          {
            provide: mi,
            useFactory: function Tl(a) {
              return a.routerState.root;
            },
            deps: [kn]
          },
          rs,
          []
        ];
      function Rl() {
        return new v.PXZ("Router", kn);
      }
      let qt = (() => {
        class a {
          constructor(r) {}
          static forRoot(r, l) {
            return {
              ngModule: a,
              providers: [
                yc,
                [],
                { provide: sr, multi: !0, useValue: r },
                {
                  provide: Ho,
                  useFactory: Nf,
                  deps: [[kn, new v.FiY(), new v.tp0()]]
                },
                { provide: jo, useValue: l || {} },
                l?.useHash
                  ? { provide: L.S$, useClass: L.Do }
                  : { provide: L.S$, useClass: L.b0 },
                {
                  provide: dc,
                  useFactory: () => {
                    const a = (0, v.f3M)(L.EM),
                      i = (0, v.f3M)(v.R0b),
                      r = (0, v.f3M)(jo),
                      l = (0, v.f3M)(Er),
                      c = (0, v.f3M)(Is);
                    return (
                      r.scrollOffset && a.setOffset(r.scrollOffset),
                      new Tf(c, l, a, i, r)
                    );
                  }
                },
                l?.preloadingStrategy
                  ? Rf(l.preloadingStrategy).ɵproviders
                  : [],
                { provide: v.PXZ, multi: !0, useFactory: Rl },
                l?.initialNavigation ? _c(l) : [],
                [
                  { provide: Ec, useFactory: hc },
                  { provide: v.tb, multi: !0, useExisting: Ec }
                ]
              ]
            };
          }
          static forChild(r) {
            return {
              ngModule: a,
              providers: [{ provide: sr, multi: !0, useValue: r }]
            };
          }
        }
        return (
          (a.ɵfac = function (r) {
            return new (r || a)(v.LFG(Ho, 8));
          }),
          (a.ɵmod = v.oAB({ type: a })),
          (a.ɵinj = v.cJS({ imports: [al] })),
          a
        );
      })();
      function Nf(a) {
        return "guarded";
      }
      function _c(a) {
        return [
          "disabled" === a.initialNavigation
            ? wr(3, [
                {
                  provide: v.ip1,
                  multi: !0,
                  useFactory: () => {
                    const i = (0, v.f3M)(kn);
                    return () => {
                      i.setUpLocationChangeListener();
                    };
                  }
                },
                { provide: Ml, useValue: 2 }
              ]).ɵproviders
            : [],
          "enabledBlocking" === a.initialNavigation
            ? wr(2, [
                { provide: Ml, useValue: 0 },
                {
                  provide: v.ip1,
                  multi: !0,
                  deps: [v.zs3],
                  useFactory: i => {
                    const r = i.get(L.V_, Promise.resolve());
                    return () =>
                      r.then(
                        () =>
                          new Promise(c => {
                            const f = i.get(kn),
                              y = i.get(pc);
                            (function l(c) {
                              i.get(kn)
                                .events.pipe(
                                  wt(
                                    y =>
                                      y instanceof yn ||
                                      y instanceof Dr ||
                                      y instanceof pi
                                  ),
                                  (0, Oe.U)(
                                    y =>
                                      y instanceof yn ||
                                      (y instanceof Dr &&
                                        (0 === y.code || 1 === y.code) &&
                                        null)
                                  ),
                                  wt(y => null !== y),
                                  Re(1)
                                )
                                .subscribe(() => {
                                  c();
                                });
                            })(() => {
                              c(!0);
                            }),
                              (i.get(Er).afterPreactivation = () => (
                                c(!0), y.closed ? fe(void 0) : y
                              )),
                              f.initialNavigation();
                          })
                      );
                  }
                }
              ]).ɵproviders
            : []
        ];
      }
      const Ec = new v.OlP("");
      let Cc = (() => {
          class a {
            get year() {
              return new Date().getFullYear();
            }
          }
          return (
            (a.ɵfac = function (r) {
              return new (r || a)();
            }),
            (a.ɵcmp = v.Xpm({
              type: a,
              selectors: [["app-footer"]],
              standalone: !0,
              features: [v.jDz],
              decls: 2,
              vars: 1,
              template: function (r, l) {
                1 & r && (v.TgZ(0, "span"), v._uU(1), v.qZA()),
                  2 & r &&
                    (v.xp6(1), v.hij("\xa9 ", l.year, " Andrei Shinkarev"));
              },
              dependencies: [L.ez],
              styles: [
                "[_nghost-%COMP%]{height:var(--height-footer);display:flex;align-items:center;justify-content:center;color:var(--color-text-light)}"
              ],
              changeDetection: 0
            })),
            a
          );
        })(),
        Of = (() => {
          class a {
            constructor(r) {
              this.title = r;
            }
          }
          return (
            (a.ɵfac = function (r) {
              return new (r || a)(v.Y36(Rn));
            }),
            (a.ɵcmp = v.Xpm({
              type: a,
              selectors: [["app-header"]],
              standalone: !0,
              features: [v.jDz],
              decls: 2,
              vars: 1,
              consts: [[1, "page-title"]],
              template: function (r, l) {
                1 & r && (v.TgZ(0, "h1", 0), v._uU(1), v.qZA()),
                  2 & r && (v.xp6(1), v.Oqu(l.title.getTitle()));
              },
              dependencies: [L.ez],
              changeDetection: 0
            })),
            a
          );
        })(),
        Ff = (() => {
          class a {}
          return (
            (a.ɵfac = function (r) {
              return new (r || a)();
            }),
            (a.ɵcmp = v.Xpm({
              type: a,
              selectors: [["app-root"]],
              standalone: !0,
              features: [v.jDz],
              decls: 6,
              vars: 0,
              consts: [
                [1, "header"],
                [1, "main"]
              ],
              template: function (r, l) {
                1 & r &&
                  (v.TgZ(0, "header", 0),
                  v._UZ(1, "app-header"),
                  v.qZA(),
                  v.TgZ(2, "main", 1),
                  v._UZ(3, "router-outlet"),
                  v.qZA(),
                  v.TgZ(4, "footer"),
                  v._UZ(5, "app-footer"),
                  v.qZA());
              },
              dependencies: [qt, rr, Of, Cc],
              styles: [
                "[_nghost-%COMP%]{display:flex;flex-direction:column;gap:var(--margin-l);height:100vh}[_nghost-%COMP%]   .header[_ngcontent-%COMP%]{height:var(--height-header);display:flex;align-items:center;justify-content:center;padding:.5rem 1rem;background-color:var(--color-primary);color:var(--color-white)}[_nghost-%COMP%]   .main[_ngcontent-%COMP%]{flex:1;margin:0 var(--margin-l);background-color:var(--color-white)}"
              ],
              changeDetection: 0
            })),
            a
          );
        })();
      class Vo {}
      class Pl {}
      const Sr = "*";
      function Go(a, i = null) {
        return { type: 2, steps: a, options: i };
      }
      function Wo(a) {
        return { type: 6, styles: a, offset: null };
      }
      function Ic(a) {
        Promise.resolve().then(a);
      }
      class Us {
        constructor(i = 0, r = 0) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._originalOnDoneFns = []),
            (this._originalOnStartFns = []),
            (this._started = !1),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._position = 0),
            (this.parentPlayer = null),
            (this.totalTime = i + r);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach(i => i()),
            (this._onDoneFns = []));
        }
        onStart(i) {
          this._originalOnStartFns.push(i), this._onStartFns.push(i);
        }
        onDone(i) {
          this._originalOnDoneFns.push(i), this._onDoneFns.push(i);
        }
        onDestroy(i) {
          this._onDestroyFns.push(i);
        }
        hasStarted() {
          return this._started;
        }
        init() {}
        play() {
          this.hasStarted() || (this._onStart(), this.triggerMicrotask()),
            (this._started = !0);
        }
        triggerMicrotask() {
          Ic(() => this._onFinish());
        }
        _onStart() {
          this._onStartFns.forEach(i => i()), (this._onStartFns = []);
        }
        pause() {}
        restart() {}
        finish() {
          this._onFinish();
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this.hasStarted() || this._onStart(),
            this.finish(),
            this._onDestroyFns.forEach(i => i()),
            (this._onDestroyFns = []));
        }
        reset() {
          (this._started = !1),
            (this._finished = !1),
            (this._onStartFns = this._originalOnStartFns),
            (this._onDoneFns = this._originalOnDoneFns);
        }
        setPosition(i) {
          this._position = this.totalTime ? i * this.totalTime : 1;
        }
        getPosition() {
          return this.totalTime ? this._position / this.totalTime : 1;
        }
        triggerCallback(i) {
          const r = "start" == i ? this._onStartFns : this._onDoneFns;
          r.forEach(l => l()), (r.length = 0);
        }
      }
      class Tc {
        constructor(i) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this._onDestroyFns = []),
            (this.parentPlayer = null),
            (this.totalTime = 0),
            (this.players = i);
          let r = 0,
            l = 0,
            c = 0;
          const f = this.players.length;
          0 == f
            ? Ic(() => this._onFinish())
            : this.players.forEach(y => {
                y.onDone(() => {
                  ++r == f && this._onFinish();
                }),
                  y.onDestroy(() => {
                    ++l == f && this._onDestroy();
                  }),
                  y.onStart(() => {
                    ++c == f && this._onStart();
                  });
              }),
            (this.totalTime = this.players.reduce(
              (y, E) => Math.max(y, E.totalTime),
              0
            ));
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach(i => i()),
            (this._onDoneFns = []));
        }
        init() {
          this.players.forEach(i => i.init());
        }
        onStart(i) {
          this._onStartFns.push(i);
        }
        _onStart() {
          this.hasStarted() ||
            ((this._started = !0),
            this._onStartFns.forEach(i => i()),
            (this._onStartFns = []));
        }
        onDone(i) {
          this._onDoneFns.push(i);
        }
        onDestroy(i) {
          this._onDestroyFns.push(i);
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this.parentPlayer || this.init(),
            this._onStart(),
            this.players.forEach(i => i.play());
        }
        pause() {
          this.players.forEach(i => i.pause());
        }
        restart() {
          this.players.forEach(i => i.restart());
        }
        finish() {
          this._onFinish(), this.players.forEach(i => i.finish());
        }
        destroy() {
          this._onDestroy();
        }
        _onDestroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._onFinish(),
            this.players.forEach(i => i.destroy()),
            this._onDestroyFns.forEach(i => i()),
            (this._onDestroyFns = []));
        }
        reset() {
          this.players.forEach(i => i.reset()),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1);
        }
        setPosition(i) {
          const r = i * this.totalTime;
          this.players.forEach(l => {
            const c = l.totalTime ? Math.min(1, r / l.totalTime) : 1;
            l.setPosition(c);
          });
        }
        getPosition() {
          const i = this.players.reduce(
            (r, l) => (null === r || l.totalTime > r.totalTime ? l : r),
            null
          );
          return null != i ? i.getPosition() : 0;
        }
        beforeDestroy() {
          this.players.forEach(i => {
            i.beforeDestroy && i.beforeDestroy();
          });
        }
        triggerCallback(i) {
          const r = "start" == i ? this._onStartFns : this._onDoneFns;
          r.forEach(l => l()), (r.length = 0);
        }
      }
      function qo(a) {
        return new v.vHH(3e3, !1);
      }
      function qf() {
        return typeof window < "u" && typeof window.document < "u";
      }
      function Hc() {
        return (
          typeof process < "u" &&
          "[object process]" === {}.toString.call(process)
        );
      }
      function zr(a) {
        switch (a.length) {
          case 0:
            return new Us();
          case 1:
            return a[0];
          default:
            return new Tc(a);
        }
      }
      function Xo(a, i, r, l, c = new Map(), f = new Map()) {
        const y = [],
          E = [];
        let S = -1,
          T = null;
        if (
          (l.forEach(O => {
            const V = O.get("offset"),
              ye = V == S,
              Te = (ye && T) || new Map();
            O.forEach((ge, De) => {
              let Be = De,
                it = ge;
              if ("offset" !== De)
                switch (((Be = i.normalizePropertyName(Be, y)), it)) {
                  case "!":
                    it = c.get(De);
                    break;
                  case Sr:
                    it = f.get(De);
                    break;
                  default:
                    it = i.normalizeStyleValue(De, Be, it, y);
                }
              Te.set(Be, it);
            }),
              ye || E.push(Te),
              (T = Te),
              (S = V);
          }),
          y.length)
        )
          throw (function kl(a) {
            return new v.vHH(3502, !1);
          })();
        return E;
      }
      function $l(a, i, r, l) {
        switch (i) {
          case "start":
            a.onStart(() => l(r && Jo(r, "start", a)));
            break;
          case "done":
            a.onDone(() => l(r && Jo(r, "done", a)));
            break;
          case "destroy":
            a.onDestroy(() => l(r && Jo(r, "destroy", a)));
        }
      }
      function Jo(a, i, r) {
        const f = ss(
            a.element,
            a.triggerName,
            a.fromState,
            a.toState,
            i || a.phaseName,
            r.totalTime ?? a.totalTime,
            !!r.disabled
          ),
          y = a._data;
        return null != y && (f._data = y), f;
      }
      function ss(a, i, r, l, c = "", f = 0, y) {
        return {
          element: a,
          triggerName: i,
          fromState: r,
          toState: l,
          phaseName: c,
          totalTime: f,
          disabled: !!y
        };
      }
      function cn(a, i, r) {
        let l = a.get(i);
        return l || a.set(i, (l = r)), l;
      }
      function jl(a) {
        const i = a.indexOf(":");
        return [a.substring(1, i), a.slice(i + 1)];
      }
      let ea = (a, i) => !1,
        Bl = (a, i, r) => [],
        Ul = null;
      function Hl(a) {
        const i = a.parentNode || a.host;
        return i === Ul ? null : i;
      }
      (Hc() || typeof Element < "u") &&
        (qf()
          ? ((Ul = (() => document.documentElement)()),
            (ea = (a, i) => {
              for (; i; ) {
                if (i === a) return !0;
                i = Hl(i);
              }
              return !1;
            }))
          : (ea = (a, i) => a.contains(i)),
        (Bl = (a, i, r) => {
          if (r) return Array.from(a.querySelectorAll(i));
          const l = a.querySelector(i);
          return l ? [l] : [];
        }));
      let bi = null,
        Vc = !1;
      const Qf = ea,
        Zf = Bl;
      let Xf = (() => {
          class a {
            validateStyleProperty(r) {
              return (function Gr(a) {
                bi ||
                  ((bi =
                    (function Yf() {
                      return typeof document < "u" ? document.body : null;
                    })() || {}),
                  (Vc = !!bi.style && "WebkitAppearance" in bi.style));
                let i = !0;
                return (
                  bi.style &&
                    !(function Kf(a) {
                      return "ebkit" == a.substring(1, 6);
                    })(a) &&
                    ((i = a in bi.style),
                    !i &&
                      Vc &&
                      (i =
                        "Webkit" + a.charAt(0).toUpperCase() + a.slice(1) in
                        bi.style)),
                  i
                );
              })(r);
            }
            matchesElement(r, l) {
              return !1;
            }
            containsElement(r, l) {
              return Qf(r, l);
            }
            getParentElement(r) {
              return Hl(r);
            }
            query(r, l, c) {
              return Zf(r, l, c);
            }
            computeStyle(r, l, c) {
              return c || "";
            }
            animate(r, l, c, f, y, E = [], S) {
              return new Us(c, f);
            }
          }
          return (
            (a.ɵfac = function (r) {
              return new (r || a)();
            }),
            (a.ɵprov = v.Yz7({ token: a, factory: a.ɵfac })),
            a
          );
        })(),
        zc = (() => {
          class a {}
          return (a.NOOP = new Xf()), a;
        })();
      const Vl = "ng-enter",
        na = "ng-leave",
        os = "ng-trigger",
        $n = ".ng-trigger",
        as = "ng-animating",
        ra = ".ng-animating";
      function or(a) {
        if ("number" == typeof a) return a;
        const i = a.match(/^(-?[\.\d]+)(m?s)/);
        return !i || i.length < 2 ? 0 : ia(parseFloat(i[1]), i[2]);
      }
      function ia(a, i) {
        return "s" === i ? 1e3 * a : a;
      }
      function zl(a, i, r) {
        return a.hasOwnProperty("duration")
          ? a
          : (function ng(a, i, r) {
              let c,
                f = 0,
                y = "";
              if ("string" == typeof a) {
                const E = a.match(
                  /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i
                );
                if (null === E)
                  return i.push(qo()), { duration: 0, delay: 0, easing: "" };
                c = ia(parseFloat(E[1]), E[2]);
                const S = E[3];
                null != S && (f = ia(parseFloat(S), E[4]));
                const T = E[5];
                T && (y = T);
              } else c = a;
              if (!r) {
                let E = !1,
                  S = i.length;
                c < 0 &&
                  (i.push(
                    (function Mc() {
                      return new v.vHH(3100, !1);
                    })()
                  ),
                  (E = !0)),
                  f < 0 &&
                    (i.push(
                      (function Ol() {
                        return new v.vHH(3101, !1);
                      })()
                    ),
                    (E = !0)),
                  E && i.splice(S, 0, qo());
              }
              return { duration: c, delay: f, easing: y };
            })(a, i, r);
      }
      function sa(a, i = {}) {
        return (
          Object.keys(a).forEach(r => {
            i[r] = a[r];
          }),
          i
        );
      }
      function oa(a) {
        const i = new Map();
        return (
          Object.keys(a).forEach(r => {
            i.set(r, a[r]);
          }),
          i
        );
      }
      function Ii(a, i = new Map(), r) {
        if (r) for (let [l, c] of r) i.set(l, c);
        for (let [l, c] of a) i.set(l, c);
        return i;
      }
      function Wl(a, i, r) {
        return r ? i + ":" + r + ";" : "";
      }
      function qc(a) {
        let i = "";
        for (let r = 0; r < a.style.length; r++) {
          const l = a.style.item(r);
          i += Wl(0, l, a.style.getPropertyValue(l));
        }
        for (const r in a.style)
          a.style.hasOwnProperty(r) &&
            !r.startsWith("_") &&
            (i += Wl(0, th(r), a.style[r]));
        a.setAttribute("style", i);
      }
      function ar(a, i, r) {
        a.style &&
          (i.forEach((l, c) => {
            const f = ql(c);
            r && !r.has(c) && r.set(c, a.style[f]), (a.style[f] = l);
          }),
          Hc() && qc(a));
      }
      function Ti(a, i) {
        a.style &&
          (i.forEach((r, l) => {
            const c = ql(l);
            a.style[c] = "";
          }),
          Hc() && qc(a));
      }
      function Vs(a) {
        return Array.isArray(a) ? (1 == a.length ? a[0] : Go(a)) : a;
      }
      const ls = new RegExp("{{\\s*(.+?)\\s*}}", "g");
      function Yc(a) {
        let i = [];
        if ("string" == typeof a) {
          let r;
          for (; (r = ls.exec(a)); ) i.push(r[1]);
          ls.lastIndex = 0;
        }
        return i;
      }
      function Mi(a, i, r) {
        const l = a.toString(),
          c = l.replace(ls, (f, y) => {
            let E = i[y];
            return (
              null == E &&
                (r.push(
                  (function jf(a) {
                    return new v.vHH(3003, !1);
                  })()
                ),
                (E = "")),
              E.toString()
            );
          });
        return c == l ? a : c;
      }
      function aa(a) {
        const i = [];
        let r = a.next();
        for (; !r.done; ) i.push(r.value), (r = a.next());
        return i;
      }
      const Nt = /-+([a-z0-9])/g;
      function ql(a) {
        return a.replace(Nt, (...i) => i[1].toUpperCase());
      }
      function th(a) {
        return a.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      }
      function Cn(a, i, r) {
        switch (i.type) {
          case 7:
            return a.visitTrigger(i, r);
          case 0:
            return a.visitState(i, r);
          case 1:
            return a.visitTransition(i, r);
          case 2:
            return a.visitSequence(i, r);
          case 3:
            return a.visitGroup(i, r);
          case 4:
            return a.visitAnimate(i, r);
          case 5:
            return a.visitKeyframes(i, r);
          case 6:
            return a.visitStyle(i, r);
          case 8:
            return a.visitReference(i, r);
          case 9:
            return a.visitAnimateChild(i, r);
          case 10:
            return a.visitAnimateRef(i, r);
          case 11:
            return a.visitQuery(i, r);
          case 12:
            return a.visitStagger(i, r);
          default:
            throw (function Ac(a) {
              return new v.vHH(3004, !1);
            })();
        }
      }
      function Zc(a, i) {
        return window.getComputedStyle(a)[i];
      }
      function ed(a, i) {
        const r = [];
        return (
          "string" == typeof a
            ? a.split(/\s*,\s*/).forEach(l =>
                (function td(a, i, r) {
                  if (":" == a[0]) {
                    const S = (function sg(a, i) {
                      switch (a) {
                        case ":enter":
                          return "void => *";
                        case ":leave":
                          return "* => void";
                        case ":increment":
                          return (r, l) => parseFloat(l) > parseFloat(r);
                        case ":decrement":
                          return (r, l) => parseFloat(l) < parseFloat(r);
                        default:
                          return (
                            i.push(
                              (function Qo(a) {
                                return new v.vHH(3016, !1);
                              })()
                            ),
                            "* => *"
                          );
                      }
                    })(a, r);
                    if ("function" == typeof S) return void i.push(S);
                    a = S;
                  }
                  const l = a.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
                  if (null == l || l.length < 4)
                    return (
                      r.push(
                        (function Yo(a) {
                          return new v.vHH(3015, !1);
                        })()
                      ),
                      i
                    );
                  const c = l[1],
                    f = l[2],
                    y = l[3];
                  i.push(Yl(c, y));
                  "<" == f[0] && !("*" == c && "*" == y) && i.push(Yl(y, c));
                })(l, r, i)
              )
            : r.push(a),
          r
        );
      }
      const Gs = new Set(["true", "1"]),
        Ws = new Set(["false", "0"]);
      function Yl(a, i) {
        const r = Gs.has(a) || Ws.has(a),
          l = Gs.has(i) || Ws.has(i);
        return (c, f) => {
          let y = "*" == a || a == c,
            E = "*" == i || i == f;
          return (
            !y && r && "boolean" == typeof c && (y = c ? Gs.has(a) : Ws.has(a)),
            !E && l && "boolean" == typeof f && (E = f ? Gs.has(i) : Ws.has(i)),
            y && E
          );
        };
      }
      const og = new RegExp("s*:selfs*,?", "g");
      function qs(a, i, r, l) {
        return new Ql(a).build(i, r, l);
      }
      class Ql {
        constructor(i) {
          this._driver = i;
        }
        build(i, r, l) {
          const c = new Ai(r);
          return this._resetContextStyleTimingState(c), Cn(this, Vs(i), c);
        }
        _resetContextStyleTimingState(i) {
          (i.currentQuerySelector = ""),
            (i.collectedStyles = new Map()),
            i.collectedStyles.set("", new Map()),
            (i.currentTime = 0);
        }
        visitTrigger(i, r) {
          let l = (r.queryCount = 0),
            c = (r.depCount = 0);
          const f = [],
            y = [];
          return (
            "@" == i.name.charAt(0) &&
              r.errors.push(
                (function Ci() {
                  return new v.vHH(3006, !1);
                })()
              ),
            i.definitions.forEach(E => {
              if ((this._resetContextStyleTimingState(r), 0 == E.type)) {
                const S = E,
                  T = S.name;
                T.toString()
                  .split(/\s*,\s*/)
                  .forEach(O => {
                    (S.name = O), f.push(this.visitState(S, r));
                  }),
                  (S.name = T);
              } else if (1 == E.type) {
                const S = this.visitTransition(E, r);
                (l += S.queryCount), (c += S.depCount), y.push(S);
              } else
                r.errors.push(
                  (function Pc() {
                    return new v.vHH(3007, !1);
                  })()
                );
            }),
            {
              type: 7,
              name: i.name,
              states: f,
              transitions: y,
              queryCount: l,
              depCount: c,
              options: null
            }
          );
        }
        visitState(i, r) {
          const l = this.visitStyle(i.styles, r),
            c = (i.options && i.options.params) || null;
          if (l.containsDynamicStyles) {
            const f = new Set(),
              y = c || {};
            l.styles.forEach(E => {
              E instanceof Map &&
                E.forEach(S => {
                  Yc(S).forEach(T => {
                    y.hasOwnProperty(T) || f.add(T);
                  });
                });
            }),
              f.size &&
                (aa(f.values()),
                r.errors.push(
                  (function Nc(a, i) {
                    return new v.vHH(3008, !1);
                  })()
                ));
          }
          return {
            type: 0,
            name: i.name,
            style: l,
            options: c ? { params: c } : null
          };
        }
        visitTransition(i, r) {
          (r.queryCount = 0), (r.depCount = 0);
          const l = Cn(this, Vs(i.animation), r);
          return {
            type: 1,
            matchers: ed(i.expr, r.errors),
            animation: l,
            queryCount: r.queryCount,
            depCount: r.depCount,
            options: lr(i.options)
          };
        }
        visitSequence(i, r) {
          return {
            type: 2,
            steps: i.steps.map(l => Cn(this, l, r)),
            options: lr(i.options)
          };
        }
        visitGroup(i, r) {
          const l = r.currentTime;
          let c = 0;
          const f = i.steps.map(y => {
            r.currentTime = l;
            const E = Cn(this, y, r);
            return (c = Math.max(c, r.currentTime)), E;
          });
          return (
            (r.currentTime = c), { type: 3, steps: f, options: lr(i.options) }
          );
        }
        visitAnimate(i, r) {
          const l = (function Zl(a, i) {
            if (a.hasOwnProperty("duration")) return a;
            if ("number" == typeof a) return Xl(zl(a, i).duration, 0, "");
            const r = a;
            if (
              r.split(/\s+/).some(f => "{" == f.charAt(0) && "{" == f.charAt(1))
            ) {
              const f = Xl(0, 0, "");
              return (f.dynamic = !0), (f.strValue = r), f;
            }
            const c = zl(r, i);
            return Xl(c.duration, c.delay, c.easing);
          })(i.timings, r.errors);
          r.currentAnimateTimings = l;
          let c,
            f = i.styles ? i.styles : Wo({});
          if (5 == f.type) c = this.visitKeyframes(f, r);
          else {
            let y = i.styles,
              E = !1;
            if (!y) {
              E = !0;
              const T = {};
              l.easing && (T.easing = l.easing), (y = Wo(T));
            }
            r.currentTime += l.duration + l.delay;
            const S = this.visitStyle(y, r);
            (S.isEmptyStep = E), (c = S);
          }
          return (
            (r.currentAnimateTimings = null),
            { type: 4, timings: l, style: c, options: null }
          );
        }
        visitStyle(i, r) {
          const l = this._makeStyleAst(i, r);
          return this._validateStyleAst(l, r), l;
        }
        _makeStyleAst(i, r) {
          const l = [],
            c = Array.isArray(i.styles) ? i.styles : [i.styles];
          for (let E of c)
            "string" == typeof E
              ? E === Sr
                ? l.push(E)
                : r.errors.push(new v.vHH(3002, !1))
              : l.push(oa(E));
          let f = !1,
            y = null;
          return (
            l.forEach(E => {
              if (
                E instanceof Map &&
                (E.has("easing") && ((y = E.get("easing")), E.delete("easing")),
                !f)
              )
                for (let S of E.values())
                  if (S.toString().indexOf("{{") >= 0) {
                    f = !0;
                    break;
                  }
            }),
            {
              type: 6,
              styles: l,
              easing: y,
              offset: i.offset,
              containsDynamicStyles: f,
              options: null
            }
          );
        }
        _validateStyleAst(i, r) {
          const l = r.currentAnimateTimings;
          let c = r.currentTime,
            f = r.currentTime;
          l && f > 0 && (f -= l.duration + l.delay),
            i.styles.forEach(y => {
              "string" != typeof y &&
                y.forEach((E, S) => {
                  const T = r.collectedStyles.get(r.currentQuerySelector),
                    O = T.get(S);
                  let V = !0;
                  O &&
                    (f != c &&
                      f >= O.startTime &&
                      c <= O.endTime &&
                      (r.errors.push(
                        (function Ko(a, i, r, l, c) {
                          return new v.vHH(3010, !1);
                        })()
                      ),
                      (V = !1)),
                    (f = O.startTime)),
                    V && T.set(S, { startTime: f, endTime: c }),
                    r.options &&
                      (function Kc(a, i, r) {
                        const l = i.params || {},
                          c = Yc(a);
                        c.length &&
                          c.forEach(f => {
                            l.hasOwnProperty(f) ||
                              r.push(
                                (function $f(a) {
                                  return new v.vHH(3001, !1);
                                })()
                              );
                          });
                      })(E, r.options, r.errors);
                });
            });
        }
        visitKeyframes(i, r) {
          const l = { type: 5, styles: [], options: null };
          if (!r.currentAnimateTimings)
            return (
              r.errors.push(
                (function Uf() {
                  return new v.vHH(3011, !1);
                })()
              ),
              l
            );
          let f = 0;
          const y = [];
          let E = !1,
            S = !1,
            T = 0;
          const O = i.steps.map(it => {
            const St = this._makeStyleAst(it, r);
            let en =
                null != St.offset
                  ? St.offset
                  : (function nh(a) {
                      if ("string" == typeof a) return null;
                      let i = null;
                      if (Array.isArray(a))
                        a.forEach(r => {
                          if (r instanceof Map && r.has("offset")) {
                            const l = r;
                            (i = parseFloat(l.get("offset"))),
                              l.delete("offset");
                          }
                        });
                      else if (a instanceof Map && a.has("offset")) {
                        const r = a;
                        (i = parseFloat(r.get("offset"))), r.delete("offset");
                      }
                      return i;
                    })(St.styles),
              bt = 0;
            return (
              null != en && (f++, (bt = St.offset = en)),
              (S = S || bt < 0 || bt > 1),
              (E = E || bt < T),
              (T = bt),
              y.push(bt),
              St
            );
          });
          S &&
            r.errors.push(
              (function Oc() {
                return new v.vHH(3012, !1);
              })()
            ),
            E &&
              r.errors.push(
                (function Fc() {
                  return new v.vHH(3200, !1);
                })()
              );
          const V = i.steps.length;
          let ye = 0;
          f > 0 && f < V
            ? r.errors.push(
                (function xc() {
                  return new v.vHH(3202, !1);
                })()
              )
            : 0 == f && (ye = 1 / (V - 1));
          const Te = V - 1,
            ge = r.currentTime,
            De = r.currentAnimateTimings,
            Be = De.duration;
          return (
            O.forEach((it, St) => {
              const en = ye > 0 ? (St == Te ? 1 : ye * St) : y[St],
                bt = en * Be;
              (r.currentTime = ge + De.delay + bt),
                (De.duration = bt),
                this._validateStyleAst(it, r),
                (it.offset = en),
                l.styles.push(it);
            }),
            l
          );
        }
        visitReference(i, r) {
          return {
            type: 8,
            animation: Cn(this, Vs(i.animation), r),
            options: lr(i.options)
          };
        }
        visitAnimateChild(i, r) {
          return r.depCount++, { type: 9, options: lr(i.options) };
        }
        visitAnimateRef(i, r) {
          return {
            type: 10,
            animation: this.visitReference(i.animation, r),
            options: lr(i.options)
          };
        }
        visitQuery(i, r) {
          const l = r.currentQuerySelector,
            c = i.options || {};
          r.queryCount++, (r.currentQuery = i);
          const [f, y] = (function rd(a) {
            const i = !!a.split(/\s*,\s*/).find(r => ":self" == r);
            return (
              i && (a = a.replace(og, "")),
              (a = a
                .replace(/@\*/g, $n)
                .replace(/@\w+/g, r => $n + "-" + r.slice(1))
                .replace(/:animating/g, ra)),
              [a, i]
            );
          })(i.selector);
          (r.currentQuerySelector = l.length ? l + " " + f : f),
            cn(r.collectedStyles, r.currentQuerySelector, new Map());
          const E = Cn(this, Vs(i.animation), r);
          return (
            (r.currentQuery = null),
            (r.currentQuerySelector = l),
            {
              type: 11,
              selector: f,
              limit: c.limit || 0,
              optional: !!c.optional,
              includeSelf: y,
              animation: E,
              originalSelector: i.selector,
              options: lr(i.options)
            }
          );
        }
        visitStagger(i, r) {
          r.currentQuery ||
            r.errors.push(
              (function Fl() {
                return new v.vHH(3013, !1);
              })()
            );
          const l =
            "full" === i.timings
              ? { duration: 0, delay: 0, easing: "full" }
              : zl(i.timings, r.errors, !0);
          return {
            type: 12,
            animation: Cn(this, Vs(i.animation), r),
            timings: l,
            options: null
          };
        }
      }
      class Ai {
        constructor(i) {
          (this.errors = i),
            (this.queryCount = 0),
            (this.depCount = 0),
            (this.currentTransition = null),
            (this.currentQuery = null),
            (this.currentQuerySelector = null),
            (this.currentAnimateTimings = null),
            (this.currentTime = 0),
            (this.collectedStyles = new Map()),
            (this.options = null),
            (this.unsupportedCSSPropertiesFound = new Set());
        }
      }
      function lr(a) {
        return (
          a
            ? (a = sa(a)).params &&
              (a.params = (function id(a) {
                return a ? sa(a) : null;
              })(a.params))
            : (a = {}),
          a
        );
      }
      function Xl(a, i, r) {
        return { duration: a, delay: i, easing: r };
      }
      function Ks(a, i, r, l, c, f, y = null, E = !1) {
        return {
          type: 1,
          element: a,
          keyframes: i,
          preStyleProps: r,
          postStyleProps: l,
          duration: c,
          delay: f,
          totalTime: c + f,
          easing: y,
          subTimeline: E
        };
      }
      class Ri {
        constructor() {
          this._map = new Map();
        }
        get(i) {
          return this._map.get(i) || [];
        }
        append(i, r) {
          let l = this._map.get(i);
          l || this._map.set(i, (l = [])), l.push(...r);
        }
        has(i) {
          return this._map.has(i);
        }
        clear() {
          this._map.clear();
        }
      }
      const Jl = new RegExp(":enter", "g"),
        ih = new RegExp(":leave", "g");
      function fa(a, i, r, l, c, f = new Map(), y = new Map(), E, S, T = []) {
        return new us().buildKeyframes(a, i, r, l, c, f, y, E, S, T);
      }
      class us {
        buildKeyframes(i, r, l, c, f, y, E, S, T, O = []) {
          T = T || new Ri();
          const V = new eu(i, r, T, c, f, O, []);
          V.options = S;
          const ye = S.delay ? or(S.delay) : 0;
          V.currentTimeline.delayNextStep(ye),
            V.currentTimeline.setStyles([y], null, V.errors, S),
            Cn(this, l, V);
          const Te = V.timelines.filter(ge => ge.containsAnimation());
          if (Te.length && E.size) {
            let ge;
            for (let De = Te.length - 1; De >= 0; De--) {
              const Be = Te[De];
              if (Be.element === r) {
                ge = Be;
                break;
              }
            }
            ge &&
              !ge.allowOnlyTimelineStyles() &&
              ge.setStyles([E], null, V.errors, S);
          }
          return Te.length
            ? Te.map(ge => ge.buildKeyframes())
            : [Ks(r, [], [], [], 0, ye, "", !1)];
        }
        visitTrigger(i, r) {}
        visitState(i, r) {}
        visitTransition(i, r) {}
        visitAnimateChild(i, r) {
          const l = r.subInstructions.get(r.element);
          if (l) {
            const c = r.createSubContext(i.options),
              f = r.currentTimeline.currentTime,
              y = this._visitSubInstructions(l, c, c.options);
            f != y && r.transformIntoNewTimeline(y);
          }
          r.previousNode = i;
        }
        visitAnimateRef(i, r) {
          const l = r.createSubContext(i.options);
          l.transformIntoNewTimeline(),
            this._applyAnimationRefDelays(
              [i.options, i.animation.options],
              r,
              l
            ),
            this.visitReference(i.animation, l),
            r.transformIntoNewTimeline(l.currentTimeline.currentTime),
            (r.previousNode = i);
        }
        _applyAnimationRefDelays(i, r, l) {
          for (const c of i) {
            const f = c?.delay;
            if (f) {
              const y =
                "number" == typeof f ? f : or(Mi(f, c?.params ?? {}, r.errors));
              l.delayNextStep(y);
            }
          }
        }
        _visitSubInstructions(i, r, l) {
          let f = r.currentTimeline.currentTime;
          const y = null != l.duration ? or(l.duration) : null,
            E = null != l.delay ? or(l.delay) : null;
          return (
            0 !== y &&
              i.forEach(S => {
                const T = r.appendInstructionToTimeline(S, y, E);
                f = Math.max(f, T.duration + T.delay);
              }),
            f
          );
        }
        visitReference(i, r) {
          r.updateOptions(i.options, !0),
            Cn(this, i.animation, r),
            (r.previousNode = i);
        }
        visitSequence(i, r) {
          const l = r.subContextCount;
          let c = r;
          const f = i.options;
          if (
            f &&
            (f.params || f.delay) &&
            ((c = r.createSubContext(f)),
            c.transformIntoNewTimeline(),
            null != f.delay)
          ) {
            6 == c.previousNode.type &&
              (c.currentTimeline.snapshotCurrentStyles(),
              (c.previousNode = ha));
            const y = or(f.delay);
            c.delayNextStep(y);
          }
          i.steps.length &&
            (i.steps.forEach(y => Cn(this, y, c)),
            c.currentTimeline.applyStylesToKeyframe(),
            c.subContextCount > l && c.transformIntoNewTimeline()),
            (r.previousNode = i);
        }
        visitGroup(i, r) {
          const l = [];
          let c = r.currentTimeline.currentTime;
          const f = i.options && i.options.delay ? or(i.options.delay) : 0;
          i.steps.forEach(y => {
            const E = r.createSubContext(i.options);
            f && E.delayNextStep(f),
              Cn(this, y, E),
              (c = Math.max(c, E.currentTimeline.currentTime)),
              l.push(E.currentTimeline);
          }),
            l.forEach(y => r.currentTimeline.mergeTimelineCollectedStyles(y)),
            r.transformIntoNewTimeline(c),
            (r.previousNode = i);
        }
        _visitTiming(i, r) {
          if (i.dynamic) {
            const l = i.strValue;
            return zl(r.params ? Mi(l, r.params, r.errors) : l, r.errors);
          }
          return { duration: i.duration, delay: i.delay, easing: i.easing };
        }
        visitAnimate(i, r) {
          const l = (r.currentAnimateTimings = this._visitTiming(i.timings, r)),
            c = r.currentTimeline;
          l.delay && (r.incrementTime(l.delay), c.snapshotCurrentStyles());
          const f = i.style;
          5 == f.type
            ? this.visitKeyframes(f, r)
            : (r.incrementTime(l.duration),
              this.visitStyle(f, r),
              c.applyStylesToKeyframe()),
            (r.currentAnimateTimings = null),
            (r.previousNode = i);
        }
        visitStyle(i, r) {
          const l = r.currentTimeline,
            c = r.currentAnimateTimings;
          !c && l.hasCurrentStyleProperties() && l.forwardFrame();
          const f = (c && c.easing) || i.easing;
          i.isEmptyStep
            ? l.applyEmptyStep(f)
            : l.setStyles(i.styles, f, r.errors, r.options),
            (r.previousNode = i);
        }
        visitKeyframes(i, r) {
          const l = r.currentAnimateTimings,
            c = r.currentTimeline.duration,
            f = l.duration,
            E = r.createSubContext().currentTimeline;
          (E.easing = l.easing),
            i.styles.forEach(S => {
              E.forwardTime((S.offset || 0) * f),
                E.setStyles(S.styles, S.easing, r.errors, r.options),
                E.applyStylesToKeyframe();
            }),
            r.currentTimeline.mergeTimelineCollectedStyles(E),
            r.transformIntoNewTimeline(c + f),
            (r.previousNode = i);
        }
        visitQuery(i, r) {
          const l = r.currentTimeline.currentTime,
            c = i.options || {},
            f = c.delay ? or(c.delay) : 0;
          f &&
            (6 === r.previousNode.type ||
              (0 == l && r.currentTimeline.hasCurrentStyleProperties())) &&
            (r.currentTimeline.snapshotCurrentStyles(), (r.previousNode = ha));
          let y = l;
          const E = r.invokeQuery(
            i.selector,
            i.originalSelector,
            i.limit,
            i.includeSelf,
            !!c.optional,
            r.errors
          );
          r.currentQueryTotal = E.length;
          let S = null;
          E.forEach((T, O) => {
            r.currentQueryIndex = O;
            const V = r.createSubContext(i.options, T);
            f && V.delayNextStep(f),
              T === r.element && (S = V.currentTimeline),
              Cn(this, i.animation, V),
              V.currentTimeline.applyStylesToKeyframe(),
              (y = Math.max(y, V.currentTimeline.currentTime));
          }),
            (r.currentQueryIndex = 0),
            (r.currentQueryTotal = 0),
            r.transformIntoNewTimeline(y),
            S &&
              (r.currentTimeline.mergeTimelineCollectedStyles(S),
              r.currentTimeline.snapshotCurrentStyles()),
            (r.previousNode = i);
        }
        visitStagger(i, r) {
          const l = r.parentContext,
            c = r.currentTimeline,
            f = i.timings,
            y = Math.abs(f.duration),
            E = y * (r.currentQueryTotal - 1);
          let S = y * r.currentQueryIndex;
          switch (f.duration < 0 ? "reverse" : f.easing) {
            case "reverse":
              S = E - S;
              break;
            case "full":
              S = l.currentStaggerTime;
          }
          const O = r.currentTimeline;
          S && O.delayNextStep(S);
          const V = O.currentTime;
          Cn(this, i.animation, r),
            (r.previousNode = i),
            (l.currentStaggerTime =
              c.currentTime - V + (c.startTime - l.currentTimeline.startTime));
        }
      }
      const ha = {};
      class eu {
        constructor(i, r, l, c, f, y, E, S) {
          (this._driver = i),
            (this.element = r),
            (this.subInstructions = l),
            (this._enterClassName = c),
            (this._leaveClassName = f),
            (this.errors = y),
            (this.timelines = E),
            (this.parentContext = null),
            (this.currentAnimateTimings = null),
            (this.previousNode = ha),
            (this.subContextCount = 0),
            (this.options = {}),
            (this.currentQueryIndex = 0),
            (this.currentQueryTotal = 0),
            (this.currentStaggerTime = 0),
            (this.currentTimeline = S || new pa(this._driver, r, 0)),
            E.push(this.currentTimeline);
        }
        get params() {
          return this.options.params;
        }
        updateOptions(i, r) {
          if (!i) return;
          const l = i;
          let c = this.options;
          null != l.duration && (c.duration = or(l.duration)),
            null != l.delay && (c.delay = or(l.delay));
          const f = l.params;
          if (f) {
            let y = c.params;
            y || (y = this.options.params = {}),
              Object.keys(f).forEach(E => {
                (!r || !y.hasOwnProperty(E)) &&
                  (y[E] = Mi(f[E], y, this.errors));
              });
          }
        }
        _copyOptions() {
          const i = {};
          if (this.options) {
            const r = this.options.params;
            if (r) {
              const l = (i.params = {});
              Object.keys(r).forEach(c => {
                l[c] = r[c];
              });
            }
          }
          return i;
        }
        createSubContext(i = null, r, l) {
          const c = r || this.element,
            f = new eu(
              this._driver,
              c,
              this.subInstructions,
              this._enterClassName,
              this._leaveClassName,
              this.errors,
              this.timelines,
              this.currentTimeline.fork(c, l || 0)
            );
          return (
            (f.previousNode = this.previousNode),
            (f.currentAnimateTimings = this.currentAnimateTimings),
            (f.options = this._copyOptions()),
            f.updateOptions(i),
            (f.currentQueryIndex = this.currentQueryIndex),
            (f.currentQueryTotal = this.currentQueryTotal),
            (f.parentContext = this),
            this.subContextCount++,
            f
          );
        }
        transformIntoNewTimeline(i) {
          return (
            (this.previousNode = ha),
            (this.currentTimeline = this.currentTimeline.fork(this.element, i)),
            this.timelines.push(this.currentTimeline),
            this.currentTimeline
          );
        }
        appendInstructionToTimeline(i, r, l) {
          const c = {
              duration: r ?? i.duration,
              delay: this.currentTimeline.currentTime + (l ?? 0) + i.delay,
              easing: ""
            },
            f = new tu(
              this._driver,
              i.element,
              i.keyframes,
              i.preStyleProps,
              i.postStyleProps,
              c,
              i.stretchStartingKeyframe
            );
          return this.timelines.push(f), c;
        }
        incrementTime(i) {
          this.currentTimeline.forwardTime(this.currentTimeline.duration + i);
        }
        delayNextStep(i) {
          i > 0 && this.currentTimeline.delayNextStep(i);
        }
        invokeQuery(i, r, l, c, f, y) {
          let E = [];
          if ((c && E.push(this.element), i.length > 0)) {
            i = (i = i.replace(Jl, "." + this._enterClassName)).replace(
              ih,
              "." + this._leaveClassName
            );
            let T = this._driver.query(this.element, i, 1 != l);
            0 !== l &&
              (T = l < 0 ? T.slice(T.length + l, T.length) : T.slice(0, l)),
              E.push(...T);
          }
          return (
            !f &&
              0 == E.length &&
              y.push(
                (function Lc(a) {
                  return new v.vHH(3014, !1);
                })()
              ),
            E
          );
        }
      }
      class pa {
        constructor(i, r, l, c) {
          (this._driver = i),
            (this.element = r),
            (this.startTime = l),
            (this._elementTimelineStylesLookup = c),
            (this.duration = 0),
            (this._previousKeyframe = new Map()),
            (this._currentKeyframe = new Map()),
            (this._keyframes = new Map()),
            (this._styleSummary = new Map()),
            (this._localTimelineStyles = new Map()),
            (this._pendingStyles = new Map()),
            (this._backFill = new Map()),
            (this._currentEmptyStepKeyframe = null),
            this._elementTimelineStylesLookup ||
              (this._elementTimelineStylesLookup = new Map()),
            (this._globalTimelineStyles =
              this._elementTimelineStylesLookup.get(r)),
            this._globalTimelineStyles ||
              ((this._globalTimelineStyles = this._localTimelineStyles),
              this._elementTimelineStylesLookup.set(
                r,
                this._localTimelineStyles
              )),
            this._loadKeyframe();
        }
        containsAnimation() {
          switch (this._keyframes.size) {
            case 0:
              return !1;
            case 1:
              return this.hasCurrentStyleProperties();
            default:
              return !0;
          }
        }
        hasCurrentStyleProperties() {
          return this._currentKeyframe.size > 0;
        }
        get currentTime() {
          return this.startTime + this.duration;
        }
        delayNextStep(i) {
          const r = 1 === this._keyframes.size && this._pendingStyles.size;
          this.duration || r
            ? (this.forwardTime(this.currentTime + i),
              r && this.snapshotCurrentStyles())
            : (this.startTime += i);
        }
        fork(i, r) {
          return (
            this.applyStylesToKeyframe(),
            new pa(
              this._driver,
              i,
              r || this.currentTime,
              this._elementTimelineStylesLookup
            )
          );
        }
        _loadKeyframe() {
          this._currentKeyframe &&
            (this._previousKeyframe = this._currentKeyframe),
            (this._currentKeyframe = this._keyframes.get(this.duration)),
            this._currentKeyframe ||
              ((this._currentKeyframe = new Map()),
              this._keyframes.set(this.duration, this._currentKeyframe));
        }
        forwardFrame() {
          (this.duration += 1), this._loadKeyframe();
        }
        forwardTime(i) {
          this.applyStylesToKeyframe(),
            (this.duration = i),
            this._loadKeyframe();
        }
        _updateStyle(i, r) {
          this._localTimelineStyles.set(i, r),
            this._globalTimelineStyles.set(i, r),
            this._styleSummary.set(i, { time: this.currentTime, value: r });
        }
        allowOnlyTimelineStyles() {
          return this._currentEmptyStepKeyframe !== this._currentKeyframe;
        }
        applyEmptyStep(i) {
          i && this._previousKeyframe.set("easing", i);
          for (let [r, l] of this._globalTimelineStyles)
            this._backFill.set(r, l || Sr), this._currentKeyframe.set(r, Sr);
          this._currentEmptyStepKeyframe = this._currentKeyframe;
        }
        setStyles(i, r, l, c) {
          r && this._previousKeyframe.set("easing", r);
          const f = (c && c.params) || {},
            y = (function ad(a, i) {
              const r = new Map();
              let l;
              return (
                a.forEach(c => {
                  if ("*" === c) {
                    l = l || i.keys();
                    for (let f of l) r.set(f, Sr);
                  } else Ii(c, r);
                }),
                r
              );
            })(i, this._globalTimelineStyles);
          for (let [E, S] of y) {
            const T = Mi(S, f, l);
            this._pendingStyles.set(E, T),
              this._localTimelineStyles.has(E) ||
                this._backFill.set(E, this._globalTimelineStyles.get(E) ?? Sr),
              this._updateStyle(E, T);
          }
        }
        applyStylesToKeyframe() {
          0 != this._pendingStyles.size &&
            (this._pendingStyles.forEach((i, r) => {
              this._currentKeyframe.set(r, i);
            }),
            this._pendingStyles.clear(),
            this._localTimelineStyles.forEach((i, r) => {
              this._currentKeyframe.has(r) || this._currentKeyframe.set(r, i);
            }));
        }
        snapshotCurrentStyles() {
          for (let [i, r] of this._localTimelineStyles)
            this._pendingStyles.set(i, r), this._updateStyle(i, r);
        }
        getFinalKeyframe() {
          return this._keyframes.get(this.duration);
        }
        get properties() {
          const i = [];
          for (let r in this._currentKeyframe) i.push(r);
          return i;
        }
        mergeTimelineCollectedStyles(i) {
          i._styleSummary.forEach((r, l) => {
            const c = this._styleSummary.get(l);
            (!c || r.time > c.time) && this._updateStyle(l, r.value);
          });
        }
        buildKeyframes() {
          this.applyStylesToKeyframe();
          const i = new Set(),
            r = new Set(),
            l = 1 === this._keyframes.size && 0 === this.duration;
          let c = [];
          this._keyframes.forEach((E, S) => {
            const T = Ii(E, new Map(), this._backFill);
            T.forEach((O, V) => {
              "!" === O ? i.add(V) : O === Sr && r.add(V);
            }),
              l || T.set("offset", S / this.duration),
              c.push(T);
          });
          const f = i.size ? aa(i.values()) : [],
            y = r.size ? aa(r.values()) : [];
          if (l) {
            const E = c[0],
              S = new Map(E);
            E.set("offset", 0), S.set("offset", 1), (c = [E, S]);
          }
          return Ks(
            this.element,
            c,
            f,
            y,
            this.duration,
            this.startTime,
            this.easing,
            !1
          );
        }
      }
      class tu extends pa {
        constructor(i, r, l, c, f, y, E = !1) {
          super(i, r, y.delay),
            (this.keyframes = l),
            (this.preStyleProps = c),
            (this.postStyleProps = f),
            (this._stretchStartingKeyframe = E),
            (this.timings = {
              duration: y.duration,
              delay: y.delay,
              easing: y.easing
            });
        }
        containsAnimation() {
          return this.keyframes.length > 1;
        }
        buildKeyframes() {
          let i = this.keyframes,
            { delay: r, duration: l, easing: c } = this.timings;
          if (this._stretchStartingKeyframe && r) {
            const f = [],
              y = l + r,
              E = r / y,
              S = Ii(i[0]);
            S.set("offset", 0), f.push(S);
            const T = Ii(i[0]);
            T.set("offset", od(E)), f.push(T);
            const O = i.length - 1;
            for (let V = 1; V <= O; V++) {
              let ye = Ii(i[V]);
              const Te = ye.get("offset");
              ye.set("offset", od((r + Te * l) / y)), f.push(ye);
            }
            (l = y), (r = 0), (c = ""), (i = f);
          }
          return Ks(
            this.element,
            i,
            this.preStyleProps,
            this.postStyleProps,
            l,
            r,
            c,
            !0
          );
        }
      }
      function od(a, i = 3) {
        const r = Math.pow(10, i - 1);
        return Math.round(a * r) / r;
      }
      class ga {}
      const sh = new Set([
        "width",
        "height",
        "minWidth",
        "minHeight",
        "maxWidth",
        "maxHeight",
        "left",
        "top",
        "bottom",
        "right",
        "fontSize",
        "outlineWidth",
        "outlineOffset",
        "paddingTop",
        "paddingLeft",
        "paddingBottom",
        "paddingRight",
        "marginTop",
        "marginLeft",
        "marginBottom",
        "marginRight",
        "borderRadius",
        "borderWidth",
        "borderTopWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderBottomWidth",
        "textIndent",
        "perspective"
      ]);
      class Ys extends ga {
        normalizePropertyName(i, r) {
          return ql(i);
        }
        normalizeStyleValue(i, r, l, c) {
          let f = "";
          const y = l.toString().trim();
          if (sh.has(r) && 0 !== l && "0" !== l)
            if ("number" == typeof l) f = "px";
            else {
              const E = l.match(/^[+-]?[\d\.]+([a-z]*)$/);
              E &&
                0 == E[1].length &&
                c.push(
                  (function Rc(a, i) {
                    return new v.vHH(3005, !1);
                  })()
                );
            }
          return y + f;
        }
      }
      function ld(a, i, r, l, c, f, y, E, S, T, O, V, ye) {
        return {
          type: 0,
          element: a,
          triggerName: i,
          isRemovalTransition: c,
          fromState: r,
          fromStyles: f,
          toState: l,
          toStyles: y,
          timelines: E,
          queriedElements: S,
          preStyleProps: T,
          postStyleProps: O,
          totalTime: V,
          errors: ye
        };
      }
      const Wr = {};
      class cs {
        constructor(i, r, l) {
          (this._triggerName = i), (this.ast = r), (this._stateStyles = l);
        }
        match(i, r, l, c) {
          return (function ud(a, i, r, l, c) {
            return a.some(f => f(i, r, l, c));
          })(this.ast.matchers, i, r, l, c);
        }
        buildStyles(i, r, l) {
          let c = this._stateStyles.get("*");
          return (
            void 0 !== i && (c = this._stateStyles.get(i?.toString()) || c),
            c ? c.buildStyles(r, l) : new Map()
          );
        }
        build(i, r, l, c, f, y, E, S, T, O) {
          const V = [],
            ye = (this.ast.options && this.ast.options.params) || Wr,
            ge = this.buildStyles(l, (E && E.params) || Wr, V),
            De = (S && S.params) || Wr,
            Be = this.buildStyles(c, De, V),
            it = new Set(),
            St = new Map(),
            en = new Map(),
            bt = "void" === c,
            Oi = { params: oh(De, ye), delay: this.ast.options?.delay },
            ur = O ? [] : fa(i, r, this.ast.animation, f, y, ge, Be, Oi, T, V);
          let tn = 0;
          if (
            (ur.forEach(Ir => {
              tn = Math.max(Ir.duration + Ir.delay, tn);
            }),
            V.length)
          )
            return ld(
              r,
              this._triggerName,
              l,
              c,
              bt,
              ge,
              Be,
              [],
              [],
              St,
              en,
              tn,
              V
            );
          ur.forEach(Ir => {
            const jn = Ir.element,
              Fi = cn(St, jn, new Set());
            Ir.preStyleProps.forEach(Qn => Fi.add(Qn));
            const xi = cn(en, jn, new Set());
            Ir.postStyleProps.forEach(Qn => xi.add(Qn)), jn !== r && it.add(jn);
          });
          const br = aa(it.values());
          return ld(r, this._triggerName, l, c, bt, ge, Be, ur, br, St, en, tn);
        }
      }
      function oh(a, i) {
        const r = sa(i);
        for (const l in a) a.hasOwnProperty(l) && null != a[l] && (r[l] = a[l]);
        return r;
      }
      class ah {
        constructor(i, r, l) {
          (this.styles = i), (this.defaultParams = r), (this.normalizer = l);
        }
        buildStyles(i, r) {
          const l = new Map(),
            c = sa(this.defaultParams);
          return (
            Object.keys(i).forEach(f => {
              const y = i[f];
              null !== y && (c[f] = y);
            }),
            this.styles.styles.forEach(f => {
              "string" != typeof f &&
                f.forEach((y, E) => {
                  y && (y = Mi(y, c, r));
                  const S = this.normalizer.normalizePropertyName(E, r);
                  (y = this.normalizer.normalizeStyleValue(E, S, y, r)),
                    l.set(E, y);
                });
            }),
            l
          );
        }
      }
      class cd {
        constructor(i, r, l) {
          (this.name = i),
            (this.ast = r),
            (this._normalizer = l),
            (this.transitionFactories = []),
            (this.states = new Map()),
            r.states.forEach(c => {
              this.states.set(
                c.name,
                new ah(c.style, (c.options && c.options.params) || {}, l)
              );
            }),
            ma(this.states, "true", "1"),
            ma(this.states, "false", "0"),
            r.transitions.forEach(c => {
              this.transitionFactories.push(new cs(i, c, this.states));
            }),
            (this.fallbackTransition = (function uh(a, i, r) {
              return new cs(
                a,
                {
                  type: 1,
                  animation: { type: 2, steps: [], options: null },
                  matchers: [(y, E) => !0],
                  options: null,
                  queryCount: 0,
                  depCount: 0
                },
                i
              );
            })(i, this.states));
        }
        get containsQueries() {
          return this.ast.queryCount > 0;
        }
        matchTransition(i, r, l, c) {
          return (
            this.transitionFactories.find(y => y.match(i, r, l, c)) || null
          );
        }
        matchStyles(i, r, l) {
          return this.fallbackTransition.buildStyles(i, r, l);
        }
      }
      function ma(a, i, r) {
        a.has(i)
          ? a.has(r) || a.set(r, a.get(i))
          : a.has(r) && a.set(i, a.get(r));
      }
      const nu = new Ri();
      class ch {
        constructor(i, r, l) {
          (this.bodyNode = i),
            (this._driver = r),
            (this._normalizer = l),
            (this._animations = new Map()),
            (this._playersById = new Map()),
            (this.players = []);
        }
        register(i, r) {
          const l = [],
            f = qs(this._driver, r, l, []);
          if (l.length)
            throw (function Hs(a) {
              return new v.vHH(3503, !1);
            })();
          this._animations.set(i, f);
        }
        _buildPlayer(i, r, l) {
          const c = i.element,
            f = Xo(0, this._normalizer, 0, i.keyframes, r, l);
          return this._driver.animate(
            c,
            f,
            i.duration,
            i.delay,
            i.easing,
            [],
            !0
          );
        }
        create(i, r, l = {}) {
          const c = [],
            f = this._animations.get(i);
          let y;
          const E = new Map();
          if (
            (f
              ? ((y = fa(
                  this._driver,
                  r,
                  f,
                  Vl,
                  na,
                  new Map(),
                  new Map(),
                  l,
                  nu,
                  c
                )),
                y.forEach(O => {
                  const V = cn(E, O.element, new Map());
                  O.postStyleProps.forEach(ye => V.set(ye, null));
                }))
              : (c.push(
                  (function Hf() {
                    return new v.vHH(3300, !1);
                  })()
                ),
                (y = [])),
            c.length)
          )
            throw (function $c(a) {
              return new v.vHH(3504, !1);
            })();
          E.forEach((O, V) => {
            O.forEach((ye, Te) => {
              O.set(Te, this._driver.computeStyle(V, Te, Sr));
            });
          });
          const T = zr(
            y.map(O => {
              const V = E.get(O.element);
              return this._buildPlayer(O, new Map(), V);
            })
          );
          return (
            this._playersById.set(i, T),
            T.onDestroy(() => this.destroy(i)),
            this.players.push(T),
            T
          );
        }
        destroy(i) {
          const r = this._getPlayer(i);
          r.destroy(), this._playersById.delete(i);
          const l = this.players.indexOf(r);
          l >= 0 && this.players.splice(l, 1);
        }
        _getPlayer(i) {
          const r = this._playersById.get(i);
          if (!r)
            throw (function Vf(a) {
              return new v.vHH(3301, !1);
            })();
          return r;
        }
        listen(i, r, l, c) {
          const f = ss(r, "", "", "");
          return $l(this._getPlayer(i), l, f, c), () => {};
        }
        command(i, r, l, c) {
          if ("register" == l) return void this.register(i, c[0]);
          if ("create" == l) return void this.create(i, r, c[0] || {});
          const f = this._getPlayer(i);
          switch (l) {
            case "play":
              f.play();
              break;
            case "pause":
              f.pause();
              break;
            case "reset":
              f.reset();
              break;
            case "restart":
              f.restart();
              break;
            case "finish":
              f.finish();
              break;
            case "init":
              f.init();
              break;
            case "setPosition":
              f.setPosition(parseFloat(c[0]));
              break;
            case "destroy":
              this.destroy(i);
          }
        }
      }
      const ya = "ng-animate-queued",
        ru = "ng-animate-disabled",
        ph = [],
        dd = {
          namespaceId: "",
          setForRemoval: !1,
          setForMove: !1,
          hasAnimation: !1,
          removedBeforeQueried: !1
        },
        gh = {
          namespaceId: "",
          setForMove: !1,
          setForRemoval: !1,
          hasAnimation: !1,
          removedBeforeQueried: !0
        },
        Kt = "__ng_removed";
      class Yn {
        get params() {
          return this.options.params;
        }
        constructor(i, r = "") {
          this.namespaceId = r;
          const l = i && i.hasOwnProperty("value");
          if (
            ((this.value = (function fd(a) {
              return a ?? null;
            })(l ? i.value : i)),
            l)
          ) {
            const f = sa(i);
            delete f.value, (this.options = f);
          } else this.options = {};
          this.options.params || (this.options.params = {});
        }
        absorbOptions(i) {
          const r = i.params;
          if (r) {
            const l = this.options.params;
            Object.keys(r).forEach(c => {
              null == l[c] && (l[c] = r[c]);
            });
          }
        }
      }
      const Zs = "void",
        iu = new Yn(Zs);
      class ug {
        constructor(i, r, l) {
          (this.id = i),
            (this.hostElement = r),
            (this._engine = l),
            (this.players = []),
            (this._triggers = new Map()),
            (this._queue = []),
            (this._elementListeners = new Map()),
            (this._hostClassName = "ng-tns-" + i),
            Ct(r, this._hostClassName);
        }
        listen(i, r, l, c) {
          if (!this._triggers.has(r))
            throw (function zf(a, i) {
              return new v.vHH(3302, !1);
            })();
          if (null == l || 0 == l.length)
            throw (function Gf(a) {
              return new v.vHH(3303, !1);
            })();
          if (
            !(function mh(a) {
              return "start" == a || "done" == a;
            })(l)
          )
            throw (function jc(a, i) {
              return new v.vHH(3400, !1);
            })();
          const f = cn(this._elementListeners, i, []),
            y = { name: r, phase: l, callback: c };
          f.push(y);
          const E = cn(this._engine.statesByElement, i, new Map());
          return (
            E.has(r) || (Ct(i, os), Ct(i, os + "-" + r), E.set(r, iu)),
            () => {
              this._engine.afterFlush(() => {
                const S = f.indexOf(y);
                S >= 0 && f.splice(S, 1), this._triggers.has(r) || E.delete(r);
              });
            }
          );
        }
        register(i, r) {
          return !this._triggers.has(i) && (this._triggers.set(i, r), !0);
        }
        _getTrigger(i) {
          const r = this._triggers.get(i);
          if (!r)
            throw (function Bc(a) {
              return new v.vHH(3401, !1);
            })();
          return r;
        }
        trigger(i, r, l, c = !0) {
          const f = this._getTrigger(r),
            y = new va(this.id, r, i);
          let E = this._engine.statesByElement.get(i);
          E ||
            (Ct(i, os),
            Ct(i, os + "-" + r),
            this._engine.statesByElement.set(i, (E = new Map())));
          let S = E.get(r);
          const T = new Yn(l, this.id);
          if (
            (!(l && l.hasOwnProperty("value")) &&
              S &&
              T.absorbOptions(S.options),
            E.set(r, T),
            S || (S = iu),
            T.value !== Zs && S.value === T.value)
          ) {
            if (
              !(function vh(a, i) {
                const r = Object.keys(a),
                  l = Object.keys(i);
                if (r.length != l.length) return !1;
                for (let c = 0; c < r.length; c++) {
                  const f = r[c];
                  if (!i.hasOwnProperty(f) || a[f] !== i[f]) return !1;
                }
                return !0;
              })(S.params, T.params)
            ) {
              const De = [],
                Be = f.matchStyles(S.value, S.params, De),
                it = f.matchStyles(T.value, T.params, De);
              De.length
                ? this._engine.reportError(De)
                : this._engine.afterFlush(() => {
                    Ti(i, Be), ar(i, it);
                  });
            }
            return;
          }
          const ye = cn(this._engine.playersByElement, i, []);
          ye.forEach(De => {
            De.namespaceId == this.id &&
              De.triggerName == r &&
              De.queued &&
              De.destroy();
          });
          let Te = f.matchTransition(S.value, T.value, i, T.params),
            ge = !1;
          if (!Te) {
            if (!c) return;
            (Te = f.fallbackTransition), (ge = !0);
          }
          return (
            this._engine.totalQueuedPlayers++,
            this._queue.push({
              element: i,
              triggerName: r,
              transition: Te,
              fromState: S,
              toState: T,
              player: y,
              isFallbackTransition: ge
            }),
            ge ||
              (Ct(i, ya),
              y.onStart(() => {
                ds(i, ya);
              })),
            y.onDone(() => {
              let De = this.players.indexOf(y);
              De >= 0 && this.players.splice(De, 1);
              const Be = this._engine.playersByElement.get(i);
              if (Be) {
                let it = Be.indexOf(y);
                it >= 0 && Be.splice(it, 1);
              }
            }),
            this.players.push(y),
            ye.push(y),
            y
          );
        }
        deregister(i) {
          this._triggers.delete(i),
            this._engine.statesByElement.forEach(r => r.delete(i)),
            this._elementListeners.forEach((r, l) => {
              this._elementListeners.set(
                l,
                r.filter(c => c.name != i)
              );
            });
        }
        clearElementCache(i) {
          this._engine.statesByElement.delete(i),
            this._elementListeners.delete(i);
          const r = this._engine.playersByElement.get(i);
          r &&
            (r.forEach(l => l.destroy()),
            this._engine.playersByElement.delete(i));
        }
        _signalRemovalForInnerTriggers(i, r) {
          const l = this._engine.driver.query(i, $n, !0);
          l.forEach(c => {
            if (c[Kt]) return;
            const f = this._engine.fetchNamespacesByElement(c);
            f.size
              ? f.forEach(y => y.triggerLeaveAnimation(c, r, !1, !0))
              : this.clearElementCache(c);
          }),
            this._engine.afterFlushAnimationsDone(() =>
              l.forEach(c => this.clearElementCache(c))
            );
        }
        triggerLeaveAnimation(i, r, l, c) {
          const f = this._engine.statesByElement.get(i),
            y = new Map();
          if (f) {
            const E = [];
            if (
              (f.forEach((S, T) => {
                if ((y.set(T, S.value), this._triggers.has(T))) {
                  const O = this.trigger(i, T, Zs, c);
                  O && E.push(O);
                }
              }),
              E.length)
            )
              return (
                this._engine.markElementAsRemoved(this.id, i, !0, r, y),
                l && zr(E).onDone(() => this._engine.processLeaveNode(i)),
                !0
              );
          }
          return !1;
        }
        prepareLeaveAnimationListeners(i) {
          const r = this._elementListeners.get(i),
            l = this._engine.statesByElement.get(i);
          if (r && l) {
            const c = new Set();
            r.forEach(f => {
              const y = f.name;
              if (c.has(y)) return;
              c.add(y);
              const S = this._triggers.get(y).fallbackTransition,
                T = l.get(y) || iu,
                O = new Yn(Zs),
                V = new va(this.id, y, i);
              this._engine.totalQueuedPlayers++,
                this._queue.push({
                  element: i,
                  triggerName: y,
                  transition: S,
                  fromState: T,
                  toState: O,
                  player: V,
                  isFallbackTransition: !0
                });
            });
          }
        }
        removeNode(i, r) {
          const l = this._engine;
          if (
            (i.childElementCount && this._signalRemovalForInnerTriggers(i, r),
            this.triggerLeaveAnimation(i, r, !0))
          )
            return;
          let c = !1;
          if (l.totalAnimations) {
            const f = l.players.length ? l.playersByQueriedElement.get(i) : [];
            if (f && f.length) c = !0;
            else {
              let y = i;
              for (; (y = y.parentNode); )
                if (l.statesByElement.get(y)) {
                  c = !0;
                  break;
                }
            }
          }
          if ((this.prepareLeaveAnimationListeners(i), c))
            l.markElementAsRemoved(this.id, i, !1, r);
          else {
            const f = i[Kt];
            (!f || f === dd) &&
              (l.afterFlush(() => this.clearElementCache(i)),
              l.destroyInnerAnimations(i),
              l._onRemovalComplete(i, r));
          }
        }
        insertNode(i, r) {
          Ct(i, this._hostClassName);
        }
        drainQueuedTransitions(i) {
          const r = [];
          return (
            this._queue.forEach(l => {
              const c = l.player;
              if (c.destroyed) return;
              const f = l.element,
                y = this._elementListeners.get(f);
              y &&
                y.forEach(E => {
                  if (E.name == l.triggerName) {
                    const S = ss(
                      f,
                      l.triggerName,
                      l.fromState.value,
                      l.toState.value
                    );
                    (S._data = i), $l(l.player, E.phase, S, E.callback);
                  }
                }),
                c.markedForDestroy
                  ? this._engine.afterFlush(() => {
                      c.destroy();
                    })
                  : r.push(l);
            }),
            (this._queue = []),
            r.sort((l, c) => {
              const f = l.transition.ast.depCount,
                y = c.transition.ast.depCount;
              return 0 == f || 0 == y
                ? f - y
                : this._engine.driver.containsElement(l.element, c.element)
                ? 1
                : -1;
            })
          );
        }
        destroy(i) {
          this.players.forEach(r => r.destroy()),
            this._signalRemovalForInnerTriggers(this.hostElement, i);
        }
        elementContainsData(i) {
          let r = !1;
          return (
            this._elementListeners.has(i) && (r = !0),
            (r = !!this._queue.find(l => l.element === i) || r),
            r
          );
        }
      }
      class cg {
        _onRemovalComplete(i, r) {
          this.onRemovalComplete(i, r);
        }
        constructor(i, r, l) {
          (this.bodyNode = i),
            (this.driver = r),
            (this._normalizer = l),
            (this.players = []),
            (this.newHostElements = new Map()),
            (this.playersByElement = new Map()),
            (this.playersByQueriedElement = new Map()),
            (this.statesByElement = new Map()),
            (this.disabledNodes = new Set()),
            (this.totalAnimations = 0),
            (this.totalQueuedPlayers = 0),
            (this._namespaceLookup = {}),
            (this._namespaceList = []),
            (this._flushFns = []),
            (this._whenQuietFns = []),
            (this.namespacesByHostElement = new Map()),
            (this.collectedEnterElements = []),
            (this.collectedLeaveElements = []),
            (this.onRemovalComplete = (c, f) => {});
        }
        get queuedPlayers() {
          const i = [];
          return (
            this._namespaceList.forEach(r => {
              r.players.forEach(l => {
                l.queued && i.push(l);
              });
            }),
            i
          );
        }
        createNamespace(i, r) {
          const l = new ug(i, r, this);
          return (
            this.bodyNode && this.driver.containsElement(this.bodyNode, r)
              ? this._balanceNamespaceList(l, r)
              : (this.newHostElements.set(r, l), this.collectEnterElement(r)),
            (this._namespaceLookup[i] = l)
          );
        }
        _balanceNamespaceList(i, r) {
          const l = this._namespaceList,
            c = this.namespacesByHostElement;
          if (l.length - 1 >= 0) {
            let y = !1,
              E = this.driver.getParentElement(r);
            for (; E; ) {
              const S = c.get(E);
              if (S) {
                const T = l.indexOf(S);
                l.splice(T + 1, 0, i), (y = !0);
                break;
              }
              E = this.driver.getParentElement(E);
            }
            y || l.unshift(i);
          } else l.push(i);
          return c.set(r, i), i;
        }
        register(i, r) {
          let l = this._namespaceLookup[i];
          return l || (l = this.createNamespace(i, r)), l;
        }
        registerTrigger(i, r, l) {
          let c = this._namespaceLookup[i];
          c && c.register(r, l) && this.totalAnimations++;
        }
        destroy(i, r) {
          if (!i) return;
          const l = this._fetchNamespace(i);
          this.afterFlush(() => {
            this.namespacesByHostElement.delete(l.hostElement),
              delete this._namespaceLookup[i];
            const c = this._namespaceList.indexOf(l);
            c >= 0 && this._namespaceList.splice(c, 1);
          }),
            this.afterFlushAnimationsDone(() => l.destroy(r));
        }
        _fetchNamespace(i) {
          return this._namespaceLookup[i];
        }
        fetchNamespacesByElement(i) {
          const r = new Set(),
            l = this.statesByElement.get(i);
          if (l)
            for (let c of l.values())
              if (c.namespaceId) {
                const f = this._fetchNamespace(c.namespaceId);
                f && r.add(f);
              }
          return r;
        }
        trigger(i, r, l, c) {
          if (Xs(r)) {
            const f = this._fetchNamespace(i);
            if (f) return f.trigger(r, l, c), !0;
          }
          return !1;
        }
        insertNode(i, r, l, c) {
          if (!Xs(r)) return;
          const f = r[Kt];
          if (f && f.setForRemoval) {
            (f.setForRemoval = !1), (f.setForMove = !0);
            const y = this.collectedLeaveElements.indexOf(r);
            y >= 0 && this.collectedLeaveElements.splice(y, 1);
          }
          if (i) {
            const y = this._fetchNamespace(i);
            y && y.insertNode(r, l);
          }
          c && this.collectEnterElement(r);
        }
        collectEnterElement(i) {
          this.collectedEnterElements.push(i);
        }
        markElementAsDisabled(i, r) {
          r
            ? this.disabledNodes.has(i) ||
              (this.disabledNodes.add(i), Ct(i, ru))
            : this.disabledNodes.has(i) &&
              (this.disabledNodes.delete(i), ds(i, ru));
        }
        removeNode(i, r, l, c) {
          if (Xs(r)) {
            const f = i ? this._fetchNamespace(i) : null;
            if (
              (f ? f.removeNode(r, c) : this.markElementAsRemoved(i, r, !1, c),
              l)
            ) {
              const y = this.namespacesByHostElement.get(r);
              y && y.id !== i && y.removeNode(r, c);
            }
          } else this._onRemovalComplete(r, c);
        }
        markElementAsRemoved(i, r, l, c, f) {
          this.collectedLeaveElements.push(r),
            (r[Kt] = {
              namespaceId: i,
              setForRemoval: c,
              hasAnimation: l,
              removedBeforeQueried: !1,
              previousTriggersValues: f
            });
        }
        listen(i, r, l, c, f) {
          return Xs(r) ? this._fetchNamespace(i).listen(r, l, c, f) : () => {};
        }
        _buildInstruction(i, r, l, c, f) {
          return i.transition.build(
            this.driver,
            i.element,
            i.fromState.value,
            i.toState.value,
            l,
            c,
            i.fromState.options,
            i.toState.options,
            r,
            f
          );
        }
        destroyInnerAnimations(i) {
          let r = this.driver.query(i, $n, !0);
          r.forEach(l => this.destroyActiveAnimationsForElement(l)),
            0 != this.playersByQueriedElement.size &&
              ((r = this.driver.query(i, ra, !0)),
              r.forEach(l => this.finishActiveQueriedAnimationOnElement(l)));
        }
        destroyActiveAnimationsForElement(i) {
          const r = this.playersByElement.get(i);
          r &&
            r.forEach(l => {
              l.queued ? (l.markedForDestroy = !0) : l.destroy();
            });
        }
        finishActiveQueriedAnimationOnElement(i) {
          const r = this.playersByQueriedElement.get(i);
          r && r.forEach(l => l.finish());
        }
        whenRenderingDone() {
          return new Promise(i => {
            if (this.players.length) return zr(this.players).onDone(() => i());
            i();
          });
        }
        processLeaveNode(i) {
          const r = i[Kt];
          if (r && r.setForRemoval) {
            if (((i[Kt] = dd), r.namespaceId)) {
              this.destroyInnerAnimations(i);
              const l = this._fetchNamespace(r.namespaceId);
              l && l.clearElementCache(i);
            }
            this._onRemovalComplete(i, r.setForRemoval);
          }
          i.classList?.contains(ru) && this.markElementAsDisabled(i, !1),
            this.driver.query(i, ".ng-animate-disabled", !0).forEach(l => {
              this.markElementAsDisabled(l, !1);
            });
        }
        flush(i = -1) {
          let r = [];
          if (
            (this.newHostElements.size &&
              (this.newHostElements.forEach((l, c) =>
                this._balanceNamespaceList(l, c)
              ),
              this.newHostElements.clear()),
            this.totalAnimations && this.collectedEnterElements.length)
          )
            for (let l = 0; l < this.collectedEnterElements.length; l++)
              Ct(this.collectedEnterElements[l], "ng-star-inserted");
          if (
            this._namespaceList.length &&
            (this.totalQueuedPlayers || this.collectedLeaveElements.length)
          ) {
            const l = [];
            try {
              r = this._flushAnimations(l, i);
            } finally {
              for (let c = 0; c < l.length; c++) l[c]();
            }
          } else
            for (let l = 0; l < this.collectedLeaveElements.length; l++)
              this.processLeaveNode(this.collectedLeaveElements[l]);
          if (
            ((this.totalQueuedPlayers = 0),
            (this.collectedEnterElements.length = 0),
            (this.collectedLeaveElements.length = 0),
            this._flushFns.forEach(l => l()),
            (this._flushFns = []),
            this._whenQuietFns.length)
          ) {
            const l = this._whenQuietFns;
            (this._whenQuietFns = []),
              r.length
                ? zr(r).onDone(() => {
                    l.forEach(c => c());
                  })
                : l.forEach(c => c());
          }
        }
        reportError(i) {
          throw (function Zo(a) {
            return new v.vHH(3402, !1);
          })();
        }
        _flushAnimations(i, r) {
          const l = new Ri(),
            c = [],
            f = new Map(),
            y = [],
            E = new Map(),
            S = new Map(),
            T = new Map(),
            O = new Set();
          this.disabledNodes.forEach(he => {
            O.add(he);
            const _e = this.driver.query(he, ".ng-animate-queued", !0);
            for (let Ce = 0; Ce < _e.length; Ce++) O.add(_e[Ce]);
          });
          const V = this.bodyNode,
            ye = Array.from(this.statesByElement.keys()),
            Te = pd(ye, this.collectedEnterElements),
            ge = new Map();
          let De = 0;
          Te.forEach((he, _e) => {
            const Ce = Vl + De++;
            ge.set(_e, Ce), he.forEach(Ye => Ct(Ye, Ce));
          });
          const Be = [],
            it = new Set(),
            St = new Set();
          for (let he = 0; he < this.collectedLeaveElements.length; he++) {
            const _e = this.collectedLeaveElements[he],
              Ce = _e[Kt];
            Ce &&
              Ce.setForRemoval &&
              (Be.push(_e),
              it.add(_e),
              Ce.hasAnimation
                ? this.driver
                    .query(_e, ".ng-star-inserted", !0)
                    .forEach(Ye => it.add(Ye))
                : St.add(_e));
          }
          const en = new Map(),
            bt = pd(ye, Array.from(it));
          bt.forEach((he, _e) => {
            const Ce = na + De++;
            en.set(_e, Ce), he.forEach(Ye => Ct(Ye, Ce));
          }),
            i.push(() => {
              Te.forEach((he, _e) => {
                const Ce = ge.get(_e);
                he.forEach(Ye => ds(Ye, Ce));
              }),
                bt.forEach((he, _e) => {
                  const Ce = en.get(_e);
                  he.forEach(Ye => ds(Ye, Ce));
                }),
                Be.forEach(he => {
                  this.processLeaveNode(he);
                });
            });
          const Oi = [],
            ur = [];
          for (let he = this._namespaceList.length - 1; he >= 0; he--)
            this._namespaceList[he].drainQueuedTransitions(r).forEach(Ce => {
              const Ye = Ce.player,
                jt = Ce.element;
              if ((Oi.push(Ye), this.collectedEnterElements.length)) {
                const Yt = jt[Kt];
                if (Yt && Yt.setForMove) {
                  if (
                    Yt.previousTriggersValues &&
                    Yt.previousTriggersValues.has(Ce.triggerName)
                  ) {
                    const Li = Yt.previousTriggersValues.get(Ce.triggerName),
                      Un = this.statesByElement.get(Ce.element);
                    if (Un && Un.has(Ce.triggerName)) {
                      const nn = Un.get(Ce.triggerName);
                      (nn.value = Li), Un.set(Ce.triggerName, nn);
                    }
                  }
                  return void Ye.destroy();
                }
              }
              const Bn = !V || !this.driver.containsElement(V, jt),
                Sn = en.get(jt),
                qr = ge.get(jt),
                ft = this._buildInstruction(Ce, l, qr, Sn, Bn);
              if (ft.errors && ft.errors.length) return void ur.push(ft);
              if (Bn)
                return (
                  Ye.onStart(() => Ti(jt, ft.fromStyles)),
                  Ye.onDestroy(() => ar(jt, ft.toStyles)),
                  void c.push(Ye)
                );
              if (Ce.isFallbackTransition)
                return (
                  Ye.onStart(() => Ti(jt, ft.fromStyles)),
                  Ye.onDestroy(() => ar(jt, ft.toStyles)),
                  void c.push(Ye)
                );
              const Cd = [];
              ft.timelines.forEach(Yt => {
                (Yt.stretchStartingKeyframe = !0),
                  this.disabledNodes.has(Yt.element) || Cd.push(Yt);
              }),
                (ft.timelines = Cd),
                l.append(jt, ft.timelines),
                y.push({ instruction: ft, player: Ye, element: jt }),
                ft.queriedElements.forEach(Yt => cn(E, Yt, []).push(Ye)),
                ft.preStyleProps.forEach((Yt, Li) => {
                  if (Yt.size) {
                    let Un = S.get(Li);
                    Un || S.set(Li, (Un = new Set())),
                      Yt.forEach((nn, wa) => Un.add(wa));
                  }
                }),
                ft.postStyleProps.forEach((Yt, Li) => {
                  let Un = T.get(Li);
                  Un || T.set(Li, (Un = new Set())),
                    Yt.forEach((nn, wa) => Un.add(wa));
                });
            });
          if (ur.length) {
            const he = [];
            ur.forEach(_e => {
              he.push(
                (function Si(a, i) {
                  return new v.vHH(3505, !1);
                })()
              );
            }),
              Oi.forEach(_e => _e.destroy()),
              this.reportError(he);
          }
          const tn = new Map(),
            br = new Map();
          y.forEach(he => {
            const _e = he.element;
            l.has(_e) &&
              (br.set(_e, _e),
              this._beforeAnimationBuild(
                he.player.namespaceId,
                he.instruction,
                tn
              ));
          }),
            c.forEach(he => {
              const _e = he.element;
              this._getPreviousPlayers(
                _e,
                !1,
                he.namespaceId,
                he.triggerName,
                null
              ).forEach(Ye => {
                cn(tn, _e, []).push(Ye), Ye.destroy();
              });
            });
          const Ir = Be.filter(he => yd(he, S, T)),
            jn = new Map();
          hd(jn, this.driver, St, T, Sr).forEach(he => {
            yd(he, S, T) && Ir.push(he);
          });
          const xi = new Map();
          Te.forEach((he, _e) => {
            hd(xi, this.driver, new Set(he), S, "!");
          }),
            Ir.forEach(he => {
              const _e = jn.get(he),
                Ce = xi.get(he);
              jn.set(
                he,
                new Map([
                  ...Array.from(_e?.entries() ?? []),
                  ...Array.from(Ce?.entries() ?? [])
                ])
              );
            });
          const Qn = [],
            Ea = [],
            eo = {};
          y.forEach(he => {
            const { element: _e, player: Ce, instruction: Ye } = he;
            if (l.has(_e)) {
              if (O.has(_e))
                return (
                  Ce.onDestroy(() => ar(_e, Ye.toStyles)),
                  (Ce.disabled = !0),
                  Ce.overrideTotalTime(Ye.totalTime),
                  void c.push(Ce)
                );
              let jt = eo;
              if (br.size > 1) {
                let Sn = _e;
                const qr = [];
                for (; (Sn = Sn.parentNode); ) {
                  const ft = br.get(Sn);
                  if (ft) {
                    jt = ft;
                    break;
                  }
                  qr.push(Sn);
                }
                qr.forEach(ft => br.set(ft, jt));
              }
              const Bn = this._buildAnimation(
                Ce.namespaceId,
                Ye,
                tn,
                f,
                xi,
                jn
              );
              if ((Ce.setRealPlayer(Bn), jt === eo)) Qn.push(Ce);
              else {
                const Sn = this.playersByElement.get(jt);
                Sn && Sn.length && (Ce.parentPlayer = zr(Sn)), c.push(Ce);
              }
            } else
              Ti(_e, Ye.fromStyles),
                Ce.onDestroy(() => ar(_e, Ye.toStyles)),
                Ea.push(Ce),
                O.has(_e) && c.push(Ce);
          }),
            Ea.forEach(he => {
              const _e = f.get(he.element);
              if (_e && _e.length) {
                const Ce = zr(_e);
                he.setRealPlayer(Ce);
              }
            }),
            c.forEach(he => {
              he.parentPlayer
                ? he.syncPlayerEvents(he.parentPlayer)
                : he.destroy();
            });
          for (let he = 0; he < Be.length; he++) {
            const _e = Be[he],
              Ce = _e[Kt];
            if ((ds(_e, na), Ce && Ce.hasAnimation)) continue;
            let Ye = [];
            if (E.size) {
              let Bn = E.get(_e);
              Bn && Bn.length && Ye.push(...Bn);
              let Sn = this.driver.query(_e, ra, !0);
              for (let qr = 0; qr < Sn.length; qr++) {
                let ft = E.get(Sn[qr]);
                ft && ft.length && Ye.push(...ft);
              }
            }
            const jt = Ye.filter(Bn => !Bn.destroyed);
            jt.length ? gd(this, _e, jt) : this.processLeaveNode(_e);
          }
          return (
            (Be.length = 0),
            Qn.forEach(he => {
              this.players.push(he),
                he.onDone(() => {
                  he.destroy();
                  const _e = this.players.indexOf(he);
                  this.players.splice(_e, 1);
                }),
                he.play();
            }),
            Qn
          );
        }
        elementContainsData(i, r) {
          let l = !1;
          const c = r[Kt];
          return (
            c && c.setForRemoval && (l = !0),
            this.playersByElement.has(r) && (l = !0),
            this.playersByQueriedElement.has(r) && (l = !0),
            this.statesByElement.has(r) && (l = !0),
            this._fetchNamespace(i).elementContainsData(r) || l
          );
        }
        afterFlush(i) {
          this._flushFns.push(i);
        }
        afterFlushAnimationsDone(i) {
          this._whenQuietFns.push(i);
        }
        _getPreviousPlayers(i, r, l, c, f) {
          let y = [];
          if (r) {
            const E = this.playersByQueriedElement.get(i);
            E && (y = E);
          } else {
            const E = this.playersByElement.get(i);
            if (E) {
              const S = !f || f == Zs;
              E.forEach(T => {
                T.queued || (!S && T.triggerName != c) || y.push(T);
              });
            }
          }
          return (
            (l || c) &&
              (y = y.filter(
                E => !((l && l != E.namespaceId) || (c && c != E.triggerName))
              )),
            y
          );
        }
        _beforeAnimationBuild(i, r, l) {
          const f = r.element,
            y = r.isRemovalTransition ? void 0 : i,
            E = r.isRemovalTransition ? void 0 : r.triggerName;
          for (const S of r.timelines) {
            const T = S.element,
              O = T !== f,
              V = cn(l, T, []);
            this._getPreviousPlayers(T, O, y, E, r.toState).forEach(Te => {
              const ge = Te.getRealPlayer();
              ge.beforeDestroy && ge.beforeDestroy(), Te.destroy(), V.push(Te);
            });
          }
          Ti(f, r.fromStyles);
        }
        _buildAnimation(i, r, l, c, f, y) {
          const E = r.triggerName,
            S = r.element,
            T = [],
            O = new Set(),
            V = new Set(),
            ye = r.timelines.map(ge => {
              const De = ge.element;
              O.add(De);
              const Be = De[Kt];
              if (Be && Be.removedBeforeQueried)
                return new Us(ge.duration, ge.delay);
              const it = De !== S,
                St = (function yh(a) {
                  const i = [];
                  return md(a, i), i;
                })((l.get(De) || ph).map(tn => tn.getRealPlayer())).filter(
                  tn => !!tn.element && tn.element === De
                ),
                en = f.get(De),
                bt = y.get(De),
                Oi = Xo(0, this._normalizer, 0, ge.keyframes, en, bt),
                ur = this._buildPlayer(ge, Oi, St);
              if ((ge.subTimeline && c && V.add(De), it)) {
                const tn = new va(i, E, De);
                tn.setRealPlayer(ur), T.push(tn);
              }
              return ur;
            });
          T.forEach(ge => {
            cn(this.playersByQueriedElement, ge.element, []).push(ge),
              ge.onDone(() =>
                (function dg(a, i, r) {
                  let l = a.get(i);
                  if (l) {
                    if (l.length) {
                      const c = l.indexOf(r);
                      l.splice(c, 1);
                    }
                    0 == l.length && a.delete(i);
                  }
                  return l;
                })(this.playersByQueriedElement, ge.element, ge)
              );
          }),
            O.forEach(ge => Ct(ge, as));
          const Te = zr(ye);
          return (
            Te.onDestroy(() => {
              O.forEach(ge => ds(ge, as)), ar(S, r.toStyles);
            }),
            V.forEach(ge => {
              cn(c, ge, []).push(Te);
            }),
            Te
          );
        }
        _buildPlayer(i, r, l) {
          return r.length > 0
            ? this.driver.animate(
                i.element,
                r,
                i.duration,
                i.delay,
                i.easing,
                l
              )
            : new Us(i.duration, i.delay);
        }
      }
      class va {
        constructor(i, r, l) {
          (this.namespaceId = i),
            (this.triggerName = r),
            (this.element = l),
            (this._player = new Us()),
            (this._containsRealPlayer = !1),
            (this._queuedCallbacks = new Map()),
            (this.destroyed = !1),
            (this.markedForDestroy = !1),
            (this.disabled = !1),
            (this.queued = !0),
            (this.totalTime = 0);
        }
        setRealPlayer(i) {
          this._containsRealPlayer ||
            ((this._player = i),
            this._queuedCallbacks.forEach((r, l) => {
              r.forEach(c => $l(i, l, void 0, c));
            }),
            this._queuedCallbacks.clear(),
            (this._containsRealPlayer = !0),
            this.overrideTotalTime(i.totalTime),
            (this.queued = !1));
        }
        getRealPlayer() {
          return this._player;
        }
        overrideTotalTime(i) {
          this.totalTime = i;
        }
        syncPlayerEvents(i) {
          const r = this._player;
          r.triggerCallback && i.onStart(() => r.triggerCallback("start")),
            i.onDone(() => this.finish()),
            i.onDestroy(() => this.destroy());
        }
        _queueEvent(i, r) {
          cn(this._queuedCallbacks, i, []).push(r);
        }
        onDone(i) {
          this.queued && this._queueEvent("done", i), this._player.onDone(i);
        }
        onStart(i) {
          this.queued && this._queueEvent("start", i), this._player.onStart(i);
        }
        onDestroy(i) {
          this.queued && this._queueEvent("destroy", i),
            this._player.onDestroy(i);
        }
        init() {
          this._player.init();
        }
        hasStarted() {
          return !this.queued && this._player.hasStarted();
        }
        play() {
          !this.queued && this._player.play();
        }
        pause() {
          !this.queued && this._player.pause();
        }
        restart() {
          !this.queued && this._player.restart();
        }
        finish() {
          this._player.finish();
        }
        destroy() {
          (this.destroyed = !0), this._player.destroy();
        }
        reset() {
          !this.queued && this._player.reset();
        }
        setPosition(i) {
          this.queued || this._player.setPosition(i);
        }
        getPosition() {
          return this.queued ? 0 : this._player.getPosition();
        }
        triggerCallback(i) {
          const r = this._player;
          r.triggerCallback && r.triggerCallback(i);
        }
      }
      function Xs(a) {
        return a && 1 === a.nodeType;
      }
      function su(a, i) {
        const r = a.style.display;
        return (a.style.display = i ?? "none"), r;
      }
      function hd(a, i, r, l, c) {
        const f = [];
        r.forEach(S => f.push(su(S)));
        const y = [];
        l.forEach((S, T) => {
          const O = new Map();
          S.forEach(V => {
            const ye = i.computeStyle(T, V, c);
            O.set(V, ye), (!ye || 0 == ye.length) && ((T[Kt] = gh), y.push(T));
          }),
            a.set(T, O);
        });
        let E = 0;
        return r.forEach(S => su(S, f[E++])), y;
      }
      function pd(a, i) {
        const r = new Map();
        if ((a.forEach(E => r.set(E, [])), 0 == i.length)) return r;
        const c = new Set(i),
          f = new Map();
        function y(E) {
          if (!E) return 1;
          let S = f.get(E);
          if (S) return S;
          const T = E.parentNode;
          return (S = r.has(T) ? T : c.has(T) ? 1 : y(T)), f.set(E, S), S;
        }
        return (
          i.forEach(E => {
            const S = y(E);
            1 !== S && r.get(S).push(E);
          }),
          r
        );
      }
      function Ct(a, i) {
        a.classList?.add(i);
      }
      function ds(a, i) {
        a.classList?.remove(i);
      }
      function gd(a, i, r) {
        zr(r).onDone(() => a.processLeaveNode(i));
      }
      function md(a, i) {
        for (let r = 0; r < a.length; r++) {
          const l = a[r];
          l instanceof Tc ? md(l.players, i) : i.push(l);
        }
      }
      function yd(a, i, r) {
        const l = r.get(a);
        if (!l) return !1;
        let c = i.get(a);
        return c ? l.forEach(f => c.add(f)) : i.set(a, l), r.delete(a), !0;
      }
      class Js {
        constructor(i, r, l) {
          (this.bodyNode = i),
            (this._driver = r),
            (this._normalizer = l),
            (this._triggerCache = {}),
            (this.onRemovalComplete = (c, f) => {}),
            (this._transitionEngine = new cg(i, r, l)),
            (this._timelineEngine = new ch(i, r, l)),
            (this._transitionEngine.onRemovalComplete = (c, f) =>
              this.onRemovalComplete(c, f));
        }
        registerTrigger(i, r, l, c, f) {
          const y = i + "-" + c;
          let E = this._triggerCache[y];
          if (!E) {
            const S = [],
              O = qs(this._driver, f, S, []);
            if (S.length)
              throw (function Ll(a, i) {
                return new v.vHH(3404, !1);
              })();
            (E = (function lh(a, i, r) {
              return new cd(a, i, r);
            })(c, O, this._normalizer)),
              (this._triggerCache[y] = E);
          }
          this._transitionEngine.registerTrigger(r, c, E);
        }
        register(i, r) {
          this._transitionEngine.register(i, r);
        }
        destroy(i, r) {
          this._transitionEngine.destroy(i, r);
        }
        onInsert(i, r, l, c) {
          this._transitionEngine.insertNode(i, r, l, c);
        }
        onRemove(i, r, l, c) {
          this._transitionEngine.removeNode(i, r, c || !1, l);
        }
        disableAnimations(i, r) {
          this._transitionEngine.markElementAsDisabled(i, r);
        }
        process(i, r, l, c) {
          if ("@" == l.charAt(0)) {
            const [f, y] = jl(l);
            this._timelineEngine.command(f, r, y, c);
          } else this._transitionEngine.trigger(i, r, l, c);
        }
        listen(i, r, l, c, f) {
          if ("@" == l.charAt(0)) {
            const [y, E] = jl(l);
            return this._timelineEngine.listen(y, r, E, f);
          }
          return this._transitionEngine.listen(i, r, l, c, f);
        }
        flush(i = -1) {
          this._transitionEngine.flush(i);
        }
        get players() {
          return this._transitionEngine.players.concat(
            this._timelineEngine.players
          );
        }
        whenRenderingDone() {
          return this._transitionEngine.whenRenderingDone();
        }
      }
      let _h = (() => {
        class a {
          constructor(r, l, c) {
            (this._element = r),
              (this._startStyles = l),
              (this._endStyles = c),
              (this._state = 0);
            let f = a.initialStylesByElement.get(r);
            f || a.initialStylesByElement.set(r, (f = new Map())),
              (this._initialStyles = f);
          }
          start() {
            this._state < 1 &&
              (this._startStyles &&
                ar(this._element, this._startStyles, this._initialStyles),
              (this._state = 1));
          }
          finish() {
            this.start(),
              this._state < 2 &&
                (ar(this._element, this._initialStyles),
                this._endStyles &&
                  (ar(this._element, this._endStyles),
                  (this._endStyles = null)),
                (this._state = 1));
          }
          destroy() {
            this.finish(),
              this._state < 3 &&
                (a.initialStylesByElement.delete(this._element),
                this._startStyles &&
                  (Ti(this._element, this._startStyles),
                  (this._endStyles = null)),
                this._endStyles &&
                  (Ti(this._element, this._endStyles),
                  (this._endStyles = null)),
                ar(this._element, this._initialStyles),
                (this._state = 3));
          }
        }
        return (a.initialStylesByElement = new WeakMap()), a;
      })();
      function ou(a) {
        let i = null;
        return (
          a.forEach((r, l) => {
            (function Fe(a) {
              return "display" === a || "position" === a;
            })(l) && ((i = i || new Map()), i.set(l, r));
          }),
          i
        );
      }
      class au {
        constructor(i, r, l, c) {
          (this.element = i),
            (this.keyframes = r),
            (this.options = l),
            (this._specialStyles = c),
            (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._initialized = !1),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this._originalOnDoneFns = []),
            (this._originalOnStartFns = []),
            (this.time = 0),
            (this.parentPlayer = null),
            (this.currentSnapshot = new Map()),
            (this._duration = l.duration),
            (this._delay = l.delay || 0),
            (this.time = this._duration + this._delay);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach(i => i()),
            (this._onDoneFns = []));
        }
        init() {
          this._buildPlayer(), this._preparePlayerBeforeStart();
        }
        _buildPlayer() {
          if (this._initialized) return;
          this._initialized = !0;
          const i = this.keyframes;
          (this.domPlayer = this._triggerWebAnimation(
            this.element,
            i,
            this.options
          )),
            (this._finalKeyframe = i.length ? i[i.length - 1] : new Map()),
            this.domPlayer.addEventListener("finish", () => this._onFinish());
        }
        _preparePlayerBeforeStart() {
          this._delay ? this._resetDomPlayerState() : this.domPlayer.pause();
        }
        _convertKeyframesToObject(i) {
          const r = [];
          return (
            i.forEach(l => {
              r.push(Object.fromEntries(l));
            }),
            r
          );
        }
        _triggerWebAnimation(i, r, l) {
          return i.animate(this._convertKeyframesToObject(r), l);
        }
        onStart(i) {
          this._originalOnStartFns.push(i), this._onStartFns.push(i);
        }
        onDone(i) {
          this._originalOnDoneFns.push(i), this._onDoneFns.push(i);
        }
        onDestroy(i) {
          this._onDestroyFns.push(i);
        }
        play() {
          this._buildPlayer(),
            this.hasStarted() ||
              (this._onStartFns.forEach(i => i()),
              (this._onStartFns = []),
              (this._started = !0),
              this._specialStyles && this._specialStyles.start()),
            this.domPlayer.play();
        }
        pause() {
          this.init(), this.domPlayer.pause();
        }
        finish() {
          this.init(),
            this._specialStyles && this._specialStyles.finish(),
            this._onFinish(),
            this.domPlayer.finish();
        }
        reset() {
          this._resetDomPlayerState(),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1),
            (this._onStartFns = this._originalOnStartFns),
            (this._onDoneFns = this._originalOnDoneFns);
        }
        _resetDomPlayerState() {
          this.domPlayer && this.domPlayer.cancel();
        }
        restart() {
          this.reset(), this.play();
        }
        hasStarted() {
          return this._started;
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._resetDomPlayerState(),
            this._onFinish(),
            this._specialStyles && this._specialStyles.destroy(),
            this._onDestroyFns.forEach(i => i()),
            (this._onDestroyFns = []));
        }
        setPosition(i) {
          void 0 === this.domPlayer && this.init(),
            (this.domPlayer.currentTime = i * this.time);
        }
        getPosition() {
          return this.domPlayer.currentTime / this.time;
        }
        get totalTime() {
          return this._delay + this._duration;
        }
        beforeDestroy() {
          const i = new Map();
          this.hasStarted() &&
            this._finalKeyframe.forEach((l, c) => {
              "offset" !== c &&
                i.set(c, this._finished ? l : Zc(this.element, c));
            }),
            (this.currentSnapshot = i);
        }
        triggerCallback(i) {
          const r = "start" === i ? this._onStartFns : this._onDoneFns;
          r.forEach(l => l()), (r.length = 0);
        }
      }
      class vd {
        validateStyleProperty(i) {
          return !0;
        }
        validateAnimatableStyleProperty(i) {
          return !0;
        }
        matchesElement(i, r) {
          return !1;
        }
        containsElement(i, r) {
          return Qf(i, r);
        }
        getParentElement(i) {
          return Hl(i);
        }
        query(i, r, l) {
          return Zf(i, r, l);
        }
        computeStyle(i, r, l) {
          return window.getComputedStyle(i)[r];
        }
        animate(i, r, l, c, f, y = []) {
          const S = {
            duration: l,
            delay: c,
            fill: 0 == c ? "both" : "forwards"
          };
          f && (S.easing = f);
          const T = new Map(),
            O = y.filter(Te => Te instanceof au);
          (function Kl(a, i) {
            return 0 === a || 0 === i;
          })(l, c) &&
            O.forEach(Te => {
              Te.currentSnapshot.forEach((ge, De) => T.set(De, ge));
            });
          let V = (function Gl(a) {
            return a.length
              ? a[0] instanceof Map
                ? a
                : a.map(i => oa(i))
              : [];
          })(r).map(Te => Ii(Te));
          V = (function Qc(a, i, r) {
            if (r.size && i.length) {
              let l = i[0],
                c = [];
              if (
                (r.forEach((f, y) => {
                  l.has(y) || c.push(y), l.set(y, f);
                }),
                c.length)
              )
                for (let f = 1; f < i.length; f++) {
                  let y = i[f];
                  c.forEach(E => y.set(E, Zc(a, E)));
                }
            }
            return i;
          })(i, V, T);
          const ye = (function Dh(a, i) {
            let r = null,
              l = null;
            return (
              Array.isArray(i) && i.length
                ? ((r = ou(i[0])), i.length > 1 && (l = ou(i[i.length - 1])))
                : i instanceof Map && (r = ou(i)),
              r || l ? new _h(a, r, l) : null
            );
          })(i, V);
          return new au(i, V, S, ye);
        }
      }
      let Dd = (() => {
        class a extends Vo {
          constructor(r, l) {
            super(),
              (this._nextAnimationId = 0),
              (this._renderer = r.createRenderer(l.body, {
                id: "0",
                encapsulation: v.ifc.None,
                styles: [],
                data: { animation: [] }
              }));
          }
          build(r) {
            const l = this._nextAnimationId.toString();
            this._nextAnimationId++;
            const c = Array.isArray(r) ? Go(r) : r;
            return (
              lu(this._renderer, null, l, "register", [c]),
              new Eh(l, this._renderer)
            );
          }
        }
        return (
          (a.ɵfac = function (r) {
            return new (r || a)(v.LFG(v.FYo), v.LFG(L.K0));
          }),
          (a.ɵprov = v.Yz7({ token: a, factory: a.ɵfac })),
          a
        );
      })();
      class Eh extends Pl {
        constructor(i, r) {
          super(), (this._id = i), (this._renderer = r);
        }
        create(i, r) {
          return new wh(this._id, i, r || {}, this._renderer);
        }
      }
      class wh {
        constructor(i, r, l, c) {
          (this.id = i),
            (this.element = r),
            (this._renderer = c),
            (this.parentPlayer = null),
            (this._started = !1),
            (this.totalTime = 0),
            this._command("create", l);
        }
        _listen(i, r) {
          return this._renderer.listen(this.element, `@@${this.id}:${i}`, r);
        }
        _command(i, ...r) {
          return lu(this._renderer, this.element, this.id, i, r);
        }
        onDone(i) {
          this._listen("done", i);
        }
        onStart(i) {
          this._listen("start", i);
        }
        onDestroy(i) {
          this._listen("destroy", i);
        }
        init() {
          this._command("init");
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this._command("play"), (this._started = !0);
        }
        pause() {
          this._command("pause");
        }
        restart() {
          this._command("restart");
        }
        finish() {
          this._command("finish");
        }
        destroy() {
          this._command("destroy");
        }
        reset() {
          this._command("reset"), (this._started = !1);
        }
        setPosition(i) {
          this._command("setPosition", i);
        }
        getPosition() {
          return this._renderer.engine.players[+this.id]?.getPosition() ?? 0;
        }
      }
      function lu(a, i, r, l, c) {
        return a.setProperty(i, `@@${r}:${l}`, c);
      }
      const uu = "@.disabled";
      let Ch = (() => {
        class a {
          constructor(r, l, c) {
            (this.delegate = r),
              (this.engine = l),
              (this._zone = c),
              (this._currentId = 0),
              (this._microtaskId = 1),
              (this._animationCallbacksBuffer = []),
              (this._rendererCache = new Map()),
              (this._cdRecurDepth = 0),
              (this.promise = Promise.resolve(0)),
              (l.onRemovalComplete = (f, y) => {
                const E = y?.parentNode(f);
                E && y.removeChild(E, f);
              });
          }
          createRenderer(r, l) {
            const f = this.delegate.createRenderer(r, l);
            if (!(r && l && l.data && l.data.animation)) {
              let O = this._rendererCache.get(f);
              return (
                O ||
                  ((O = new _d("", f, this.engine, () =>
                    this._rendererCache.delete(f)
                  )),
                  this._rendererCache.set(f, O)),
                O
              );
            }
            const y = l.id,
              E = l.id + "-" + this._currentId;
            this._currentId++, this.engine.register(E, r);
            const S = O => {
              Array.isArray(O)
                ? O.forEach(S)
                : this.engine.registerTrigger(y, E, r, O.name, O);
            };
            return l.data.animation.forEach(S), new fg(this, E, f, this.engine);
          }
          begin() {
            this._cdRecurDepth++, this.delegate.begin && this.delegate.begin();
          }
          _scheduleCountTask() {
            this.promise.then(() => {
              this._microtaskId++;
            });
          }
          scheduleListenerCallback(r, l, c) {
            r >= 0 && r < this._microtaskId
              ? this._zone.run(() => l(c))
              : (0 == this._animationCallbacksBuffer.length &&
                  Promise.resolve(null).then(() => {
                    this._zone.run(() => {
                      this._animationCallbacksBuffer.forEach(f => {
                        const [y, E] = f;
                        y(E);
                      }),
                        (this._animationCallbacksBuffer = []);
                    });
                  }),
                this._animationCallbacksBuffer.push([l, c]));
          }
          end() {
            this._cdRecurDepth--,
              0 == this._cdRecurDepth &&
                this._zone.runOutsideAngular(() => {
                  this._scheduleCountTask(),
                    this.engine.flush(this._microtaskId);
                }),
              this.delegate.end && this.delegate.end();
          }
          whenRenderingDone() {
            return this.engine.whenRenderingDone();
          }
        }
        return (
          (a.ɵfac = function (r) {
            return new (r || a)(v.LFG(v.FYo), v.LFG(Js), v.LFG(v.R0b));
          }),
          (a.ɵprov = v.Yz7({ token: a, factory: a.ɵfac })),
          a
        );
      })();
      class _d {
        constructor(i, r, l, c) {
          (this.namespaceId = i),
            (this.delegate = r),
            (this.engine = l),
            (this._onDestroy = c),
            (this.destroyNode = this.delegate.destroyNode
              ? f => r.destroyNode(f)
              : null);
        }
        get data() {
          return this.delegate.data;
        }
        destroy() {
          this.engine.destroy(this.namespaceId, this.delegate),
            this.delegate.destroy(),
            this._onDestroy?.();
        }
        createElement(i, r) {
          return this.delegate.createElement(i, r);
        }
        createComment(i) {
          return this.delegate.createComment(i);
        }
        createText(i) {
          return this.delegate.createText(i);
        }
        appendChild(i, r) {
          this.delegate.appendChild(i, r),
            this.engine.onInsert(this.namespaceId, r, i, !1);
        }
        insertBefore(i, r, l, c = !0) {
          this.delegate.insertBefore(i, r, l),
            this.engine.onInsert(this.namespaceId, r, i, c);
        }
        removeChild(i, r, l) {
          this.engine.onRemove(this.namespaceId, r, this.delegate, l);
        }
        selectRootElement(i, r) {
          return this.delegate.selectRootElement(i, r);
        }
        parentNode(i) {
          return this.delegate.parentNode(i);
        }
        nextSibling(i) {
          return this.delegate.nextSibling(i);
        }
        setAttribute(i, r, l, c) {
          this.delegate.setAttribute(i, r, l, c);
        }
        removeAttribute(i, r, l) {
          this.delegate.removeAttribute(i, r, l);
        }
        addClass(i, r) {
          this.delegate.addClass(i, r);
        }
        removeClass(i, r) {
          this.delegate.removeClass(i, r);
        }
        setStyle(i, r, l, c) {
          this.delegate.setStyle(i, r, l, c);
        }
        removeStyle(i, r, l) {
          this.delegate.removeStyle(i, r, l);
        }
        setProperty(i, r, l) {
          "@" == r.charAt(0) && r == uu
            ? this.disableAnimations(i, !!l)
            : this.delegate.setProperty(i, r, l);
        }
        setValue(i, r) {
          this.delegate.setValue(i, r);
        }
        listen(i, r, l) {
          return this.delegate.listen(i, r, l);
        }
        disableAnimations(i, r) {
          this.engine.disableAnimations(i, r);
        }
      }
      class fg extends _d {
        constructor(i, r, l, c, f) {
          super(r, l, c, f), (this.factory = i), (this.namespaceId = r);
        }
        setProperty(i, r, l) {
          "@" == r.charAt(0)
            ? "." == r.charAt(1) && r == uu
              ? this.disableAnimations(i, (l = void 0 === l || !!l))
              : this.engine.process(this.namespaceId, i, r.slice(1), l)
            : this.delegate.setProperty(i, r, l);
        }
        listen(i, r, l) {
          if ("@" == r.charAt(0)) {
            const c = (function Ed(a) {
              switch (a) {
                case "body":
                  return document.body;
                case "document":
                  return document;
                case "window":
                  return window;
                default:
                  return a;
              }
            })(i);
            let f = r.slice(1),
              y = "";
            return (
              "@" != f.charAt(0) &&
                ([f, y] = (function wd(a) {
                  const i = a.indexOf(".");
                  return [a.substring(0, i), a.slice(i + 1)];
                })(f)),
              this.engine.listen(this.namespaceId, c, f, y, E => {
                this.factory.scheduleListenerCallback(E._data || -1, l, E);
              })
            );
          }
          return this.delegate.listen(i, r, l);
        }
      }
      const _a = [
          { provide: Vo, useClass: Dd },
          {
            provide: ga,
            useFactory: function Sh() {
              return new Ys();
            }
          },
          {
            provide: Js,
            useClass: (() => {
              class a extends Js {
                constructor(r, l, c, f) {
                  super(r.body, l, c);
                }
                ngOnDestroy() {
                  this.flush();
                }
              }
              return (
                (a.ɵfac = function (r) {
                  return new (r || a)(
                    v.LFG(L.K0),
                    v.LFG(zc),
                    v.LFG(ga),
                    v.LFG(v.z2F)
                  );
                }),
                (a.ɵprov = v.Yz7({ token: a, factory: a.ɵfac })),
                a
              );
            })()
          },
          {
            provide: v.FYo,
            useFactory: function cu(a, i, r) {
              return new Ch(a, i, r);
            },
            deps: [$, Js, v.R0b]
          }
        ],
        du = [
          { provide: zc, useFactory: () => new vd() },
          { provide: v.QbO, useValue: "BrowserAnimations" },
          ..._a
        ],
        bh = [
          { provide: zc, useClass: Xf },
          { provide: v.QbO, useValue: "NoopAnimations" },
          ..._a
        ];
      let hg = (() => {
        class a {
          static withConfig(r) {
            return { ngModule: a, providers: r.disableAnimations ? bh : du };
          }
        }
        return (
          (a.ɵfac = function (r) {
            return new (r || a)();
          }),
          (a.ɵmod = v.oAB({ type: a })),
          (a.ɵinj = v.cJS({ providers: du, imports: [ps] })),
          a
        );
      })();
      (function rn(a, i) {
        return (0, v.iPO)({ rootComponent: a, ...Iu(i) });
      })(Ff, {
        providers: [
          (0, v.RIp)(
            qt.forRoot([
              {
                path: "",
                title: "GitHub Page Replacer",
                loadComponent: () =>
                  R.e(126)
                    .then(R.bind(R, 126))
                    .then(a => a.MainComponent)
              }
            ])
          ),
          hg
        ]
      }).catch(a => console.error(a));
    },
    751: (Ue, re, R) => {
      R.d(re, { y: () => xe });
      var v = R(961),
        L = R(727),
        ee = R(822),
        Z = R(635),
        W = R(416),
        pe = R(576),
        ae = R(806);
      let xe = (() => {
        class ie {
          constructor(X) {
            X && (this._subscribe = X);
          }
          lift(X) {
            const Se = new ie();
            return (Se.source = this), (Se.operator = X), Se;
          }
          subscribe(X, Se, we) {
            const Ve = (function H(ie) {
              return (
                (ie && ie instanceof v.Lv) ||
                ((function Q(ie) {
                  return (
                    ie &&
                    (0, pe.m)(ie.next) &&
                    (0, pe.m)(ie.error) &&
                    (0, pe.m)(ie.complete)
                  );
                })(ie) &&
                  (0, L.Nn)(ie))
              );
            })(X)
              ? X
              : new v.Hp(X, Se, we);
            return (
              (0, ae.x)(() => {
                const { operator: Ze, source: ht } = this;
                Ve.add(
                  Ze
                    ? Ze.call(Ve, ht)
                    : ht
                    ? this._subscribe(Ve)
                    : this._trySubscribe(Ve)
                );
              }),
              Ve
            );
          }
          _trySubscribe(X) {
            try {
              return this._subscribe(X);
            } catch (Se) {
              X.error(Se);
            }
          }
          forEach(X, Se) {
            return new (Se = ve(Se))((we, Ve) => {
              const Ze = new v.Hp({
                next: ht => {
                  try {
                    X(ht);
                  } catch (le) {
                    Ve(le), Ze.unsubscribe();
                  }
                },
                error: Ve,
                complete: we
              });
              this.subscribe(Ze);
            });
          }
          _subscribe(X) {
            var Se;
            return null === (Se = this.source) || void 0 === Se
              ? void 0
              : Se.subscribe(X);
          }
          [ee.L]() {
            return this;
          }
          pipe(...X) {
            return (0, Z.U)(X)(this);
          }
          toPromise(X) {
            return new (X = ve(X))((Se, we) => {
              let Ve;
              this.subscribe(
                Ze => (Ve = Ze),
                Ze => we(Ze),
                () => Se(Ve)
              );
            });
          }
        }
        return (ie.create = He => new ie(He)), ie;
      })();
      function ve(ie) {
        var He;
        return null !== (He = ie ?? W.v.Promise) && void 0 !== He
          ? He
          : Promise;
      }
    },
    579: (Ue, re, R) => {
      R.d(re, { x: () => ae });
      var v = R(751),
        L = R(727);
      const Z = (0, R(888).d)(
        ve =>
          function () {
            ve(this),
              (this.name = "ObjectUnsubscribedError"),
              (this.message = "object unsubscribed");
          }
      );
      var W = R(737),
        pe = R(806);
      let ae = (() => {
        class ve extends v.y {
          constructor() {
            super(),
              (this.closed = !1),
              (this.currentObservers = null),
              (this.observers = []),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          lift(H) {
            const ie = new xe(this, this);
            return (ie.operator = H), ie;
          }
          _throwIfClosed() {
            if (this.closed) throw new Z();
          }
          next(H) {
            (0, pe.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.currentObservers ||
                  (this.currentObservers = Array.from(this.observers));
                for (const ie of this.currentObservers) ie.next(H);
              }
            });
          }
          error(H) {
            (0, pe.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                (this.hasError = this.isStopped = !0), (this.thrownError = H);
                const { observers: ie } = this;
                for (; ie.length; ) ie.shift().error(H);
              }
            });
          }
          complete() {
            (0, pe.x)(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.isStopped = !0;
                const { observers: H } = this;
                for (; H.length; ) H.shift().complete();
              }
            });
          }
          unsubscribe() {
            (this.isStopped = this.closed = !0),
              (this.observers = this.currentObservers = null);
          }
          get observed() {
            var H;
            return (
              (null === (H = this.observers) || void 0 === H
                ? void 0
                : H.length) > 0
            );
          }
          _trySubscribe(H) {
            return this._throwIfClosed(), super._trySubscribe(H);
          }
          _subscribe(H) {
            return (
              this._throwIfClosed(),
              this._checkFinalizedStatuses(H),
              this._innerSubscribe(H)
            );
          }
          _innerSubscribe(H) {
            const { hasError: ie, isStopped: He, observers: X } = this;
            return ie || He
              ? L.Lc
              : ((this.currentObservers = null),
                X.push(H),
                new L.w0(() => {
                  (this.currentObservers = null), (0, W.P)(X, H);
                }));
          }
          _checkFinalizedStatuses(H) {
            const { hasError: ie, thrownError: He, isStopped: X } = this;
            ie ? H.error(He) : X && H.complete();
          }
          asObservable() {
            const H = new v.y();
            return (H.source = this), H;
          }
        }
        return (ve.create = (Q, H) => new xe(Q, H)), ve;
      })();
      class xe extends ae {
        constructor(Q, H) {
          super(), (this.destination = Q), (this.source = H);
        }
        next(Q) {
          var H, ie;
          null ===
            (ie =
              null === (H = this.destination) || void 0 === H
                ? void 0
                : H.next) ||
            void 0 === ie ||
            ie.call(H, Q);
        }
        error(Q) {
          var H, ie;
          null ===
            (ie =
              null === (H = this.destination) || void 0 === H
                ? void 0
                : H.error) ||
            void 0 === ie ||
            ie.call(H, Q);
        }
        complete() {
          var Q, H;
          null ===
            (H =
              null === (Q = this.destination) || void 0 === Q
                ? void 0
                : Q.complete) ||
            void 0 === H ||
            H.call(Q);
        }
        _subscribe(Q) {
          var H, ie;
          return null !==
            (ie =
              null === (H = this.source) || void 0 === H
                ? void 0
                : H.subscribe(Q)) && void 0 !== ie
            ? ie
            : L.Lc;
        }
      }
    },
    961: (Ue, re, R) => {
      R.d(re, { Hp: () => we, Lv: () => ie });
      var v = R(576),
        L = R(727),
        ee = R(416),
        Z = R(849);
      function W() {}
      const pe = ve("C", void 0, void 0);
      function ve(de, J, be) {
        return { kind: de, value: J, error: be };
      }
      var Q = R(410),
        H = R(806);
      class ie extends L.w0 {
        constructor(J) {
          super(),
            (this.isStopped = !1),
            J
              ? ((this.destination = J), (0, L.Nn)(J) && J.add(this))
              : (this.destination = le);
        }
        static create(J, be, nt) {
          return new we(J, be, nt);
        }
        next(J) {
          this.isStopped
            ? ht(
                (function xe(de) {
                  return ve("N", de, void 0);
                })(J),
                this
              )
            : this._next(J);
        }
        error(J) {
          this.isStopped
            ? ht(
                (function ae(de) {
                  return ve("E", void 0, de);
                })(J),
                this
              )
            : ((this.isStopped = !0), this._error(J));
        }
        complete() {
          this.isStopped
            ? ht(pe, this)
            : ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed ||
            ((this.isStopped = !0),
            super.unsubscribe(),
            (this.destination = null));
        }
        _next(J) {
          this.destination.next(J);
        }
        _error(J) {
          try {
            this.destination.error(J);
          } finally {
            this.unsubscribe();
          }
        }
        _complete() {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        }
      }
      const He = Function.prototype.bind;
      function X(de, J) {
        return He.call(de, J);
      }
      class Se {
        constructor(J) {
          this.partialObserver = J;
        }
        next(J) {
          const { partialObserver: be } = this;
          if (be.next)
            try {
              be.next(J);
            } catch (nt) {
              Ve(nt);
            }
        }
        error(J) {
          const { partialObserver: be } = this;
          if (be.error)
            try {
              be.error(J);
            } catch (nt) {
              Ve(nt);
            }
          else Ve(J);
        }
        complete() {
          const { partialObserver: J } = this;
          if (J.complete)
            try {
              J.complete();
            } catch (be) {
              Ve(be);
            }
        }
      }
      class we extends ie {
        constructor(J, be, nt) {
          let U;
          if ((super(), (0, v.m)(J) || !J))
            U = {
              next: J ?? void 0,
              error: be ?? void 0,
              complete: nt ?? void 0
            };
          else {
            let oe;
            this && ee.v.useDeprecatedNextContext
              ? ((oe = Object.create(J)),
                (oe.unsubscribe = () => this.unsubscribe()),
                (U = {
                  next: J.next && X(J.next, oe),
                  error: J.error && X(J.error, oe),
                  complete: J.complete && X(J.complete, oe)
                }))
              : (U = J);
          }
          this.destination = new Se(U);
        }
      }
      function Ve(de) {
        ee.v.useDeprecatedSynchronousErrorHandling
          ? (0, H.O)(de)
          : (0, Z.h)(de);
      }
      function ht(de, J) {
        const { onStoppedNotification: be } = ee.v;
        be && Q.z.setTimeout(() => be(de, J));
      }
      const le = {
        closed: !0,
        next: W,
        error: function Ze(de) {
          throw de;
        },
        complete: W
      };
    },
    727: (Ue, re, R) => {
      R.d(re, { Lc: () => pe, w0: () => W, Nn: () => ae });
      var v = R(576);
      const ee = (0, R(888).d)(
        ve =>
          function (H) {
            ve(this),
              (this.message = H
                ? `${H.length} errors occurred during unsubscription:\n${H.map(
                    (ie, He) => `${He + 1}) ${ie.toString()}`
                  ).join("\n  ")}`
                : ""),
              (this.name = "UnsubscriptionError"),
              (this.errors = H);
          }
      );
      var Z = R(737);
      class W {
        constructor(Q) {
          (this.initialTeardown = Q),
            (this.closed = !1),
            (this._parentage = null),
            (this._finalizers = null);
        }
        unsubscribe() {
          let Q;
          if (!this.closed) {
            this.closed = !0;
            const { _parentage: H } = this;
            if (H)
              if (((this._parentage = null), Array.isArray(H)))
                for (const X of H) X.remove(this);
              else H.remove(this);
            const { initialTeardown: ie } = this;
            if ((0, v.m)(ie))
              try {
                ie();
              } catch (X) {
                Q = X instanceof ee ? X.errors : [X];
              }
            const { _finalizers: He } = this;
            if (He) {
              this._finalizers = null;
              for (const X of He)
                try {
                  xe(X);
                } catch (Se) {
                  (Q = Q ?? []),
                    Se instanceof ee ? (Q = [...Q, ...Se.errors]) : Q.push(Se);
                }
            }
            if (Q) throw new ee(Q);
          }
        }
        add(Q) {
          var H;
          if (Q && Q !== this)
            if (this.closed) xe(Q);
            else {
              if (Q instanceof W) {
                if (Q.closed || Q._hasParent(this)) return;
                Q._addParent(this);
              }
              (this._finalizers =
                null !== (H = this._finalizers) && void 0 !== H ? H : []).push(
                Q
              );
            }
        }
        _hasParent(Q) {
          const { _parentage: H } = this;
          return H === Q || (Array.isArray(H) && H.includes(Q));
        }
        _addParent(Q) {
          const { _parentage: H } = this;
          this._parentage = Array.isArray(H) ? (H.push(Q), H) : H ? [H, Q] : Q;
        }
        _removeParent(Q) {
          const { _parentage: H } = this;
          H === Q
            ? (this._parentage = null)
            : Array.isArray(H) && (0, Z.P)(H, Q);
        }
        remove(Q) {
          const { _finalizers: H } = this;
          H && (0, Z.P)(H, Q), Q instanceof W && Q._removeParent(this);
        }
      }
      W.EMPTY = (() => {
        const ve = new W();
        return (ve.closed = !0), ve;
      })();
      const pe = W.EMPTY;
      function ae(ve) {
        return (
          ve instanceof W ||
          (ve &&
            "closed" in ve &&
            (0, v.m)(ve.remove) &&
            (0, v.m)(ve.add) &&
            (0, v.m)(ve.unsubscribe))
        );
      }
      function xe(ve) {
        (0, v.m)(ve) ? ve() : ve.unsubscribe();
      }
    },
    416: (Ue, re, R) => {
      R.d(re, { v: () => v });
      const v = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1
      };
    },
    515: (Ue, re, R) => {
      R.d(re, { E: () => L });
      const L = new (R(751).y)(W => W.complete());
    },
    76: (Ue, re, R) => {
      R.d(re, { D: () => nt });
      var v = R(421),
        L = R(672),
        ee = R(482),
        Z = R(403);
      function W(U, oe = 0) {
        return (0, ee.e)((K, A) => {
          K.subscribe(
            (0, Z.x)(
              A,
              N => (0, L.f)(A, U, () => A.next(N), oe),
              () => (0, L.f)(A, U, () => A.complete(), oe),
              N => (0, L.f)(A, U, () => A.error(N), oe)
            )
          );
        });
      }
      function pe(U, oe = 0) {
        return (0, ee.e)((K, A) => {
          A.add(U.schedule(() => K.subscribe(A), oe));
        });
      }
      var ve = R(751),
        H = R(202),
        ie = R(576);
      function X(U, oe) {
        if (!U) throw new Error("Iterable cannot be null");
        return new ve.y(K => {
          (0, L.f)(K, oe, () => {
            const A = U[Symbol.asyncIterator]();
            (0, L.f)(
              K,
              oe,
              () => {
                A.next().then(N => {
                  N.done ? K.complete() : K.next(N.value);
                });
              },
              0,
              !0
            );
          });
        });
      }
      var Se = R(670),
        we = R(239),
        Ve = R(144),
        Ze = R(495),
        ht = R(206),
        le = R(532),
        de = R(260);
      function nt(U, oe) {
        return oe
          ? (function be(U, oe) {
              if (null != U) {
                if ((0, Se.c)(U))
                  return (function ae(U, oe) {
                    return (0, v.Xf)(U).pipe(pe(oe), W(oe));
                  })(U, oe);
                if ((0, Ve.z)(U))
                  return (function Q(U, oe) {
                    return new ve.y(K => {
                      let A = 0;
                      return oe.schedule(function () {
                        A === U.length
                          ? K.complete()
                          : (K.next(U[A++]), K.closed || this.schedule());
                      });
                    });
                  })(U, oe);
                if ((0, we.t)(U))
                  return (function xe(U, oe) {
                    return (0, v.Xf)(U).pipe(pe(oe), W(oe));
                  })(U, oe);
                if ((0, ht.D)(U)) return X(U, oe);
                if ((0, Ze.T)(U))
                  return (function He(U, oe) {
                    return new ve.y(K => {
                      let A;
                      return (
                        (0, L.f)(K, oe, () => {
                          (A = U[H.h]()),
                            (0, L.f)(
                              K,
                              oe,
                              () => {
                                let N, $;
                                try {
                                  ({ value: N, done: $ } = A.next());
                                } catch (x) {
                                  return void K.error(x);
                                }
                                $ ? K.complete() : K.next(N);
                              },
                              0,
                              !0
                            );
                        }),
                        () => (0, ie.m)(A?.return) && A.return()
                      );
                    });
                  })(U, oe);
                if ((0, de.L)(U))
                  return (function J(U, oe) {
                    return X((0, de.Q)(U), oe);
                  })(U, oe);
              }
              throw (0, le.z)(U);
            })(U, oe)
          : (0, v.Xf)(U);
      }
    },
    421: (Ue, re, R) => {
      R.d(re, { Xf: () => He });
      var v = R(655),
        L = R(144),
        ee = R(239),
        Z = R(751),
        W = R(670),
        pe = R(206),
        ae = R(532),
        xe = R(495),
        ve = R(260),
        Q = R(576),
        H = R(849),
        ie = R(822);
      function He(de) {
        if (de instanceof Z.y) return de;
        if (null != de) {
          if ((0, W.c)(de))
            return (function X(de) {
              return new Z.y(J => {
                const be = de[ie.L]();
                if ((0, Q.m)(be.subscribe)) return be.subscribe(J);
                throw new TypeError(
                  "Provided object does not correctly implement Symbol.observable"
                );
              });
            })(de);
          if ((0, L.z)(de))
            return (function Se(de) {
              return new Z.y(J => {
                for (let be = 0; be < de.length && !J.closed; be++)
                  J.next(de[be]);
                J.complete();
              });
            })(de);
          if ((0, ee.t)(de))
            return (function we(de) {
              return new Z.y(J => {
                de.then(
                  be => {
                    J.closed || (J.next(be), J.complete());
                  },
                  be => J.error(be)
                ).then(null, H.h);
              });
            })(de);
          if ((0, pe.D)(de)) return Ze(de);
          if ((0, xe.T)(de))
            return (function Ve(de) {
              return new Z.y(J => {
                for (const be of de) if ((J.next(be), J.closed)) return;
                J.complete();
              });
            })(de);
          if ((0, ve.L)(de))
            return (function ht(de) {
              return Ze((0, ve.Q)(de));
            })(de);
        }
        throw (0, ae.z)(de);
      }
      function Ze(de) {
        return new Z.y(J => {
          (function le(de, J) {
            var be, nt, U, oe;
            return (0, v.mG)(this, void 0, void 0, function* () {
              try {
                for (be = (0, v.KL)(de); !(nt = yield be.next()).done; )
                  if ((J.next(nt.value), J.closed)) return;
              } catch (K) {
                U = { error: K };
              } finally {
                try {
                  nt && !nt.done && (oe = be.return) && (yield oe.call(be));
                } finally {
                  if (U) throw U.error;
                }
              }
              J.complete();
            });
          })(de, J).catch(be => J.error(be));
        });
      }
    },
    403: (Ue, re, R) => {
      R.d(re, { x: () => L });
      var v = R(961);
      function L(Z, W, pe, ae, xe) {
        return new ee(Z, W, pe, ae, xe);
      }
      class ee extends v.Lv {
        constructor(W, pe, ae, xe, ve, Q) {
          super(W),
            (this.onFinalize = ve),
            (this.shouldUnsubscribe = Q),
            (this._next = pe
              ? function (H) {
                  try {
                    pe(H);
                  } catch (ie) {
                    W.error(ie);
                  }
                }
              : super._next),
            (this._error = xe
              ? function (H) {
                  try {
                    xe(H);
                  } catch (ie) {
                    W.error(ie);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._error),
            (this._complete = ae
              ? function () {
                  try {
                    ae();
                  } catch (H) {
                    W.error(H);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._complete);
        }
        unsubscribe() {
          var W;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            const { closed: pe } = this;
            super.unsubscribe(),
              !pe &&
                (null === (W = this.onFinalize) ||
                  void 0 === W ||
                  W.call(this));
          }
        }
      }
    },
    4: (Ue, re, R) => {
      R.d(re, { U: () => ee });
      var v = R(482),
        L = R(403);
      function ee(Z, W) {
        return (0, v.e)((pe, ae) => {
          let xe = 0;
          pe.subscribe(
            (0, L.x)(ae, ve => {
              ae.next(Z.call(W, ve, xe++));
            })
          );
        });
      }
    },
    189: (Ue, re, R) => {
      R.d(re, { J: () => ee });
      var v = R(577),
        L = R(671);
      function ee(Z = 1 / 0) {
        return (0, v.z)(L.y, Z);
      }
    },
    577: (Ue, re, R) => {
      R.d(re, { z: () => xe });
      var v = R(4),
        L = R(421),
        ee = R(482),
        Z = R(672),
        W = R(403),
        ae = R(576);
      function xe(ve, Q, H = 1 / 0) {
        return (0, ae.m)(Q)
          ? xe(
              (ie, He) =>
                (0, v.U)((X, Se) => Q(ie, X, He, Se))((0, L.Xf)(ve(ie, He))),
              H
            )
          : ("number" == typeof Q && (H = Q),
            (0, ee.e)((ie, He) =>
              (function pe(ve, Q, H, ie, He, X, Se, we) {
                const Ve = [];
                let Ze = 0,
                  ht = 0,
                  le = !1;
                const de = () => {
                    le && !Ve.length && !Ze && Q.complete();
                  },
                  J = nt => (Ze < ie ? be(nt) : Ve.push(nt)),
                  be = nt => {
                    X && Q.next(nt), Ze++;
                    let U = !1;
                    (0, L.Xf)(H(nt, ht++)).subscribe(
                      (0, W.x)(
                        Q,
                        oe => {
                          He?.(oe), X ? J(oe) : Q.next(oe);
                        },
                        () => {
                          U = !0;
                        },
                        void 0,
                        () => {
                          if (U)
                            try {
                              for (Ze--; Ve.length && Ze < ie; ) {
                                const oe = Ve.shift();
                                Se ? (0, Z.f)(Q, Se, () => be(oe)) : be(oe);
                              }
                              de();
                            } catch (oe) {
                              Q.error(oe);
                            }
                        }
                      )
                    );
                  };
                return (
                  ve.subscribe(
                    (0, W.x)(Q, J, () => {
                      (le = !0), de();
                    })
                  ),
                  () => {
                    we?.();
                  }
                );
              })(ie, He, ve, H)
            ));
      }
    },
    410: (Ue, re, R) => {
      R.d(re, { z: () => v });
      const v = {
        setTimeout(L, ee, ...Z) {
          const { delegate: W } = v;
          return W?.setTimeout
            ? W.setTimeout(L, ee, ...Z)
            : setTimeout(L, ee, ...Z);
        },
        clearTimeout(L) {
          const { delegate: ee } = v;
          return (ee?.clearTimeout || clearTimeout)(L);
        },
        delegate: void 0
      };
    },
    202: (Ue, re, R) => {
      R.d(re, { h: () => L });
      const L = (function v() {
        return "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      })();
    },
    822: (Ue, re, R) => {
      R.d(re, { L: () => v });
      const v =
        ("function" == typeof Symbol && Symbol.observable) || "@@observable";
    },
    669: (Ue, re, R) => {
      R.d(re, { _6: () => pe, jO: () => Z, yG: () => W });
      var v = R(576);
      function ee(ae) {
        return ae[ae.length - 1];
      }
      function Z(ae) {
        return (0, v.m)(ee(ae)) ? ae.pop() : void 0;
      }
      function W(ae) {
        return (function L(ae) {
          return ae && (0, v.m)(ae.schedule);
        })(ee(ae))
          ? ae.pop()
          : void 0;
      }
      function pe(ae, xe) {
        return "number" == typeof ee(ae) ? ae.pop() : xe;
      }
    },
    742: (Ue, re, R) => {
      R.d(re, { D: () => W });
      const { isArray: v } = Array,
        { getPrototypeOf: L, prototype: ee, keys: Z } = Object;
      function W(ae) {
        if (1 === ae.length) {
          const xe = ae[0];
          if (v(xe)) return { args: xe, keys: null };
          if (
            (function pe(ae) {
              return ae && "object" == typeof ae && L(ae) === ee;
            })(xe)
          ) {
            const ve = Z(xe);
            return { args: ve.map(Q => xe[Q]), keys: ve };
          }
        }
        return { args: ae, keys: null };
      }
    },
    737: (Ue, re, R) => {
      function v(L, ee) {
        if (L) {
          const Z = L.indexOf(ee);
          0 <= Z && L.splice(Z, 1);
        }
      }
      R.d(re, { P: () => v });
    },
    888: (Ue, re, R) => {
      function v(L) {
        const Z = L(W => {
          Error.call(W), (W.stack = new Error().stack);
        });
        return (
          (Z.prototype = Object.create(Error.prototype)),
          (Z.prototype.constructor = Z),
          Z
        );
      }
      R.d(re, { d: () => v });
    },
    810: (Ue, re, R) => {
      function v(L, ee) {
        return L.reduce((Z, W, pe) => ((Z[W] = ee[pe]), Z), {});
      }
      R.d(re, { n: () => v });
    },
    806: (Ue, re, R) => {
      R.d(re, { O: () => Z, x: () => ee });
      var v = R(416);
      let L = null;
      function ee(W) {
        if (v.v.useDeprecatedSynchronousErrorHandling) {
          const pe = !L;
          if ((pe && (L = { errorThrown: !1, error: null }), W(), pe)) {
            const { errorThrown: ae, error: xe } = L;
            if (((L = null), ae)) throw xe;
          }
        } else W();
      }
      function Z(W) {
        v.v.useDeprecatedSynchronousErrorHandling &&
          L &&
          ((L.errorThrown = !0), (L.error = W));
      }
    },
    672: (Ue, re, R) => {
      function v(L, ee, Z, W = 0, pe = !1) {
        const ae = ee.schedule(function () {
          Z(), pe ? L.add(this.schedule(null, W)) : this.unsubscribe();
        }, W);
        if ((L.add(ae), !pe)) return ae;
      }
      R.d(re, { f: () => v });
    },
    671: (Ue, re, R) => {
      function v(L) {
        return L;
      }
      R.d(re, { y: () => v });
    },
    144: (Ue, re, R) => {
      R.d(re, { z: () => v });
      const v = L => L && "number" == typeof L.length && "function" != typeof L;
    },
    206: (Ue, re, R) => {
      R.d(re, { D: () => L });
      var v = R(576);
      function L(ee) {
        return Symbol.asyncIterator && (0, v.m)(ee?.[Symbol.asyncIterator]);
      }
    },
    576: (Ue, re, R) => {
      function v(L) {
        return "function" == typeof L;
      }
      R.d(re, { m: () => v });
    },
    670: (Ue, re, R) => {
      R.d(re, { c: () => ee });
      var v = R(822),
        L = R(576);
      function ee(Z) {
        return (0, L.m)(Z[v.L]);
      }
    },
    495: (Ue, re, R) => {
      R.d(re, { T: () => ee });
      var v = R(202),
        L = R(576);
      function ee(Z) {
        return (0, L.m)(Z?.[v.h]);
      }
    },
    239: (Ue, re, R) => {
      R.d(re, { t: () => L });
      var v = R(576);
      function L(ee) {
        return (0, v.m)(ee?.then);
      }
    },
    260: (Ue, re, R) => {
      R.d(re, { L: () => Z, Q: () => ee });
      var v = R(655),
        L = R(576);
      function ee(W) {
        return (0, v.FC)(this, arguments, function* () {
          const ae = W.getReader();
          try {
            for (;;) {
              const { value: xe, done: ve } = yield (0, v.qq)(ae.read());
              if (ve) return yield (0, v.qq)(void 0);
              yield yield (0, v.qq)(xe);
            }
          } finally {
            ae.releaseLock();
          }
        });
      }
      function Z(W) {
        return (0, L.m)(W?.getReader);
      }
    },
    482: (Ue, re, R) => {
      R.d(re, { A: () => L, e: () => ee });
      var v = R(576);
      function L(Z) {
        return (0, v.m)(Z?.lift);
      }
      function ee(Z) {
        return W => {
          if (L(W))
            return W.lift(function (pe) {
              try {
                return Z(pe, this);
              } catch (ae) {
                this.error(ae);
              }
            });
          throw new TypeError("Unable to lift unknown Observable type");
        };
      }
    },
    268: (Ue, re, R) => {
      R.d(re, { Z: () => Z });
      var v = R(4);
      const { isArray: L } = Array;
      function Z(W) {
        return (0, v.U)(pe =>
          (function ee(W, pe) {
            return L(pe) ? W(...pe) : W(pe);
          })(W, pe)
        );
      }
    },
    635: (Ue, re, R) => {
      R.d(re, { U: () => ee, z: () => L });
      var v = R(671);
      function L(...Z) {
        return ee(Z);
      }
      function ee(Z) {
        return 0 === Z.length
          ? v.y
          : 1 === Z.length
          ? Z[0]
          : function (pe) {
              return Z.reduce((ae, xe) => xe(ae), pe);
            };
      }
    },
    849: (Ue, re, R) => {
      R.d(re, { h: () => ee });
      var v = R(416),
        L = R(410);
      function ee(Z) {
        L.z.setTimeout(() => {
          const { onUnhandledError: W } = v.v;
          if (!W) throw Z;
          W(Z);
        });
      }
    },
    532: (Ue, re, R) => {
      function v(L) {
        return new TypeError(
          `You provided ${
            null !== L && "object" == typeof L ? "an invalid object" : `'${L}'`
          } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`
        );
      }
      R.d(re, { z: () => v });
    },
    655: (Ue, re, R) => {
      function xe(A, N, $, x) {
        return new ($ || ($ = Promise))(function (q, ke) {
          function at(Zt) {
            try {
              Ae(x.next(Zt));
            } catch (Rr) {
              ke(Rr);
            }
          }
          function In(Zt) {
            try {
              Ae(x.throw(Zt));
            } catch (Rr) {
              ke(Rr);
            }
          }
          function Ae(Zt) {
            Zt.done
              ? q(Zt.value)
              : (function se(q) {
                  return q instanceof $
                    ? q
                    : new $(function (ke) {
                        ke(q);
                      });
                })(Zt.value).then(at, In);
          }
          Ae((x = x.apply(A, N || [])).next());
        });
      }
      function Ve(A) {
        return this instanceof Ve ? ((this.v = A), this) : new Ve(A);
      }
      function Ze(A, N, $) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var se,
          x = $.apply(A, N || []),
          q = [];
        return (
          (se = {}),
          ke("next"),
          ke("throw"),
          ke("return"),
          (se[Symbol.asyncIterator] = function () {
            return this;
          }),
          se
        );
        function ke(vt) {
          x[vt] &&
            (se[vt] = function (Tn) {
              return new Promise(function (Mn, rn) {
                q.push([vt, Tn, Mn, rn]) > 1 || at(vt, Tn);
              });
            });
        }
        function at(vt, Tn) {
          try {
            !(function In(vt) {
              vt.value instanceof Ve
                ? Promise.resolve(vt.value.v).then(Ae, Zt)
                : Rr(q[0][2], vt);
            })(x[vt](Tn));
          } catch (Mn) {
            Rr(q[0][3], Mn);
          }
        }
        function Ae(vt) {
          at("next", vt);
        }
        function Zt(vt) {
          at("throw", vt);
        }
        function Rr(vt, Tn) {
          vt(Tn), q.shift(), q.length && at(q[0][0], q[0][1]);
        }
      }
      function le(A) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var $,
          N = A[Symbol.asyncIterator];
        return N
          ? N.call(A)
          : ((A = (function ie(A) {
              var N = "function" == typeof Symbol && Symbol.iterator,
                $ = N && A[N],
                x = 0;
              if ($) return $.call(A);
              if (A && "number" == typeof A.length)
                return {
                  next: function () {
                    return (
                      A && x >= A.length && (A = void 0),
                      { value: A && A[x++], done: !A }
                    );
                  }
                };
              throw new TypeError(
                N
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined."
              );
            })(A)),
            ($ = {}),
            x("next"),
            x("throw"),
            x("return"),
            ($[Symbol.asyncIterator] = function () {
              return this;
            }),
            $);
        function x(q) {
          $[q] =
            A[q] &&
            function (ke) {
              return new Promise(function (at, In) {
                !(function se(q, ke, at, In) {
                  Promise.resolve(In).then(function (Ae) {
                    q({ value: Ae, done: at });
                  }, ke);
                })(at, In, (ke = A[q](ke)).done, ke.value);
              });
            };
        }
      }
      R.d(re, { FC: () => Ze, KL: () => le, mG: () => xe, qq: () => Ve });
    },
    895: (Ue, re, R) => {
      R.d(re, {
        Do: () => ht,
        EM: () => Fu,
        HT: () => Z,
        JF: () => xu,
        K0: () => pe,
        Mx: () => co,
        O5: () => Oe,
        S$: () => we,
        V_: () => ve,
        Ye: () => le,
        b0: () => Ze,
        bD: () => Gi,
        ez: () => qa,
        q: () => ee,
        w_: () => W
      });
      var v = R(256);
      let L = null;
      function ee() {
        return L;
      }
      function Z(p) {
        L || (L = p);
      }
      class W {}
      const pe = new v.OlP("DocumentToken");
      let ae = (() => {
        class p {
          historyGo(g) {
            throw new Error("Not implemented");
          }
        }
        return (
          (p.ɵfac = function (g) {
            return new (g || p)();
          }),
          (p.ɵprov = v.Yz7({
            token: p,
            factory: function () {
              return (function xe() {
                return (0, v.LFG)(Q);
              })();
            },
            providedIn: "platform"
          })),
          p
        );
      })();
      const ve = new v.OlP("Location Initialized");
      let Q = (() => {
        class p extends ae {
          constructor(g) {
            super(),
              (this._doc = g),
              (this._location = window.location),
              (this._history = window.history);
          }
          getBaseHrefFromDOM() {
            return ee().getBaseHref(this._doc);
          }
          onPopState(g) {
            const w = ee().getGlobalEventTarget(this._doc, "window");
            return (
              w.addEventListener("popstate", g, !1),
              () => w.removeEventListener("popstate", g)
            );
          }
          onHashChange(g) {
            const w = ee().getGlobalEventTarget(this._doc, "window");
            return (
              w.addEventListener("hashchange", g, !1),
              () => w.removeEventListener("hashchange", g)
            );
          }
          get href() {
            return this._location.href;
          }
          get protocol() {
            return this._location.protocol;
          }
          get hostname() {
            return this._location.hostname;
          }
          get port() {
            return this._location.port;
          }
          get pathname() {
            return this._location.pathname;
          }
          get search() {
            return this._location.search;
          }
          get hash() {
            return this._location.hash;
          }
          set pathname(g) {
            this._location.pathname = g;
          }
          pushState(g, w, I) {
            H() ? this._history.pushState(g, w, I) : (this._location.hash = I);
          }
          replaceState(g, w, I) {
            H()
              ? this._history.replaceState(g, w, I)
              : (this._location.hash = I);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          historyGo(g = 0) {
            this._history.go(g);
          }
          getState() {
            return this._history.state;
          }
        }
        return (
          (p.ɵfac = function (g) {
            return new (g || p)(v.LFG(pe));
          }),
          (p.ɵprov = v.Yz7({
            token: p,
            factory: function () {
              return (function ie() {
                return new Q((0, v.LFG)(pe));
              })();
            },
            providedIn: "platform"
          })),
          p
        );
      })();
      function H() {
        return !!window.history.pushState;
      }
      function He(p, _) {
        if (0 == p.length) return _;
        if (0 == _.length) return p;
        let g = 0;
        return (
          p.endsWith("/") && g++,
          _.startsWith("/") && g++,
          2 == g ? p + _.substring(1) : 1 == g ? p + _ : p + "/" + _
        );
      }
      function X(p) {
        const _ = p.match(/#|\?|$/),
          g = (_ && _.index) || p.length;
        return p.slice(0, g - ("/" === p[g - 1] ? 1 : 0)) + p.slice(g);
      }
      function Se(p) {
        return p && "?" !== p[0] ? "?" + p : p;
      }
      let we = (() => {
        class p {
          historyGo(g) {
            throw new Error("Not implemented");
          }
        }
        return (
          (p.ɵfac = function (g) {
            return new (g || p)();
          }),
          (p.ɵprov = v.Yz7({
            token: p,
            factory: function () {
              return (0, v.f3M)(Ze);
            },
            providedIn: "root"
          })),
          p
        );
      })();
      const Ve = new v.OlP("appBaseHref");
      let Ze = (() => {
          class p extends we {
            constructor(g, w) {
              super(),
                (this._platformLocation = g),
                (this._removeListenerFns = []),
                (this._baseHref =
                  w ??
                  this._platformLocation.getBaseHrefFromDOM() ??
                  (0, v.f3M)(pe).location?.origin ??
                  "");
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(g) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(g),
                this._platformLocation.onHashChange(g)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(g) {
              return He(this._baseHref, g);
            }
            path(g = !1) {
              const w =
                  this._platformLocation.pathname +
                  Se(this._platformLocation.search),
                I = this._platformLocation.hash;
              return I && g ? `${w}${I}` : w;
            }
            pushState(g, w, I, F) {
              const j = this.prepareExternalUrl(I + Se(F));
              this._platformLocation.pushState(g, w, j);
            }
            replaceState(g, w, I, F) {
              const j = this.prepareExternalUrl(I + Se(F));
              this._platformLocation.replaceState(g, w, j);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(g = 0) {
              this._platformLocation.historyGo?.(g);
            }
          }
          return (
            (p.ɵfac = function (g) {
              return new (g || p)(v.LFG(ae), v.LFG(Ve, 8));
            }),
            (p.ɵprov = v.Yz7({
              token: p,
              factory: p.ɵfac,
              providedIn: "root"
            })),
            p
          );
        })(),
        ht = (() => {
          class p extends we {
            constructor(g, w) {
              super(),
                (this._platformLocation = g),
                (this._baseHref = ""),
                (this._removeListenerFns = []),
                null != w && (this._baseHref = w);
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(g) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(g),
                this._platformLocation.onHashChange(g)
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(g = !1) {
              let w = this._platformLocation.hash;
              return null == w && (w = "#"), w.length > 0 ? w.substring(1) : w;
            }
            prepareExternalUrl(g) {
              const w = He(this._baseHref, g);
              return w.length > 0 ? "#" + w : w;
            }
            pushState(g, w, I, F) {
              let j = this.prepareExternalUrl(I + Se(F));
              0 == j.length && (j = this._platformLocation.pathname),
                this._platformLocation.pushState(g, w, j);
            }
            replaceState(g, w, I, F) {
              let j = this.prepareExternalUrl(I + Se(F));
              0 == j.length && (j = this._platformLocation.pathname),
                this._platformLocation.replaceState(g, w, j);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(g = 0) {
              this._platformLocation.historyGo?.(g);
            }
          }
          return (
            (p.ɵfac = function (g) {
              return new (g || p)(v.LFG(ae), v.LFG(Ve, 8));
            }),
            (p.ɵprov = v.Yz7({ token: p, factory: p.ɵfac })),
            p
          );
        })(),
        le = (() => {
          class p {
            constructor(g) {
              (this._subject = new v.vpe()),
                (this._urlChangeListeners = []),
                (this._urlChangeSubscription = null),
                (this._locationStrategy = g);
              const w = this._locationStrategy.getBaseHref();
              (this._basePath = (function nt(p) {
                if (new RegExp("^(https?:)?//").test(p)) {
                  const [, g] = p.split(/\/\/[^\/]+/);
                  return g;
                }
                return p;
              })(X(be(w)))),
                this._locationStrategy.onPopState(I => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: I.state,
                    type: I.type
                  });
                });
            }
            ngOnDestroy() {
              this._urlChangeSubscription?.unsubscribe(),
                (this._urlChangeListeners = []);
            }
            path(g = !1) {
              return this.normalize(this._locationStrategy.path(g));
            }
            getState() {
              return this._locationStrategy.getState();
            }
            isCurrentPathEqualTo(g, w = "") {
              return this.path() == this.normalize(g + Se(w));
            }
            normalize(g) {
              return p.stripTrailingSlash(
                (function J(p, _) {
                  return p && _.startsWith(p) ? _.substring(p.length) : _;
                })(this._basePath, be(g))
              );
            }
            prepareExternalUrl(g) {
              return (
                g && "/" !== g[0] && (g = "/" + g),
                this._locationStrategy.prepareExternalUrl(g)
              );
            }
            go(g, w = "", I = null) {
              this._locationStrategy.pushState(I, "", g, w),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(g + Se(w)),
                  I
                );
            }
            replaceState(g, w = "", I = null) {
              this._locationStrategy.replaceState(I, "", g, w),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(g + Se(w)),
                  I
                );
            }
            forward() {
              this._locationStrategy.forward();
            }
            back() {
              this._locationStrategy.back();
            }
            historyGo(g = 0) {
              this._locationStrategy.historyGo?.(g);
            }
            onUrlChange(g) {
              return (
                this._urlChangeListeners.push(g),
                this._urlChangeSubscription ||
                  (this._urlChangeSubscription = this.subscribe(w => {
                    this._notifyUrlChangeListeners(w.url, w.state);
                  })),
                () => {
                  const w = this._urlChangeListeners.indexOf(g);
                  this._urlChangeListeners.splice(w, 1),
                    0 === this._urlChangeListeners.length &&
                      (this._urlChangeSubscription?.unsubscribe(),
                      (this._urlChangeSubscription = null));
                }
              );
            }
            _notifyUrlChangeListeners(g = "", w) {
              this._urlChangeListeners.forEach(I => I(g, w));
            }
            subscribe(g, w, I) {
              return this._subject.subscribe({
                next: g,
                error: w,
                complete: I
              });
            }
          }
          return (
            (p.normalizeQueryParams = Se),
            (p.joinWithSlash = He),
            (p.stripTrailingSlash = X),
            (p.ɵfac = function (g) {
              return new (g || p)(v.LFG(we));
            }),
            (p.ɵprov = v.Yz7({
              token: p,
              factory: function () {
                return (function de() {
                  return new le((0, v.LFG)(we));
                })();
              },
              providedIn: "root"
            })),
            p
          );
        })();
      function be(p) {
        return p.replace(/\/index.html$/, "");
      }
      function co(p, _) {
        _ = encodeURIComponent(_);
        for (const g of p.split(";")) {
          const w = g.indexOf("="),
            [I, F] = -1 == w ? [g, ""] : [g.slice(0, w), g.slice(w + 1)];
          if (I.trim() === _) return decodeURIComponent(F);
        }
        return null;
      }
      let Oe = (() => {
        class p {
          constructor(g, w) {
            (this._viewContainer = g),
              (this._context = new te()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = w);
          }
          set ngIf(g) {
            (this._context.$implicit = this._context.ngIf = g),
              this._updateView();
          }
          set ngIfThen(g) {
            Re("ngIfThen", g),
              (this._thenTemplateRef = g),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(g) {
            Re("ngIfElse", g),
              (this._elseTemplateRef = g),
              (this._elseViewRef = null),
              this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(
                    this._thenTemplateRef,
                    this._context
                  )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(
                    this._elseTemplateRef,
                    this._context
                  )));
          }
          static ngTemplateContextGuard(g, w) {
            return !0;
          }
        }
        return (
          (p.ɵfac = function (g) {
            return new (g || p)(v.Y36(v.s_b), v.Y36(v.Rgc));
          }),
          (p.ɵdir = v.lG2({
            type: p,
            selectors: [["", "ngIf", ""]],
            inputs: {
              ngIf: "ngIf",
              ngIfThen: "ngIfThen",
              ngIfElse: "ngIfElse"
            },
            standalone: !0
          })),
          p
        );
      })();
      class te {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function Re(p, _) {
        if (_ && !_.createEmbeddedView)
          throw new Error(
            `${p} must be a TemplateRef, but received '${(0, v.AaK)(_)}'.`
          );
      }
      let qa = (() => {
        class p {}
        return (
          (p.ɵfac = function (g) {
            return new (g || p)();
          }),
          (p.ɵmod = v.oAB({ type: p })),
          (p.ɵinj = v.cJS({})),
          p
        );
      })();
      const Gi = "browser";
      let Fu = (() => {
        class p {}
        return (
          (p.ɵprov = (0, v.Yz7)({
            token: p,
            providedIn: "root",
            factory: () => new Ts((0, v.LFG)(pe), window)
          })),
          p
        );
      })();
      class Ts {
        constructor(_, g) {
          (this.document = _), (this.window = g), (this.offset = () => [0, 0]);
        }
        setOffset(_) {
          this.offset = Array.isArray(_) ? () => _ : _;
        }
        getScrollPosition() {
          return this.supportsScrolling()
            ? [this.window.pageXOffset, this.window.pageYOffset]
            : [0, 0];
        }
        scrollToPosition(_) {
          this.supportsScrolling() && this.window.scrollTo(_[0], _[1]);
        }
        scrollToAnchor(_) {
          if (!this.supportsScrolling()) return;
          const g = (function Ms(p, _) {
            const g = p.getElementById(_) || p.getElementsByName(_)[0];
            if (g) return g;
            if (
              "function" == typeof p.createTreeWalker &&
              p.body &&
              (p.body.createShadowRoot || p.body.attachShadow)
            ) {
              const w = p.createTreeWalker(p.body, NodeFilter.SHOW_ELEMENT);
              let I = w.currentNode;
              for (; I; ) {
                const F = I.shadowRoot;
                if (F) {
                  const j =
                    F.getElementById(_) || F.querySelector(`[name="${_}"]`);
                  if (j) return j;
                }
                I = w.nextNode();
              }
            }
            return null;
          })(this.document, _);
          g && (this.scrollToElement(g), g.focus());
        }
        setHistoryScrollRestoration(_) {
          if (this.supportScrollRestoration()) {
            const g = this.window.history;
            g && g.scrollRestoration && (g.scrollRestoration = _);
          }
        }
        scrollToElement(_) {
          const g = _.getBoundingClientRect(),
            w = g.left + this.window.pageXOffset,
            I = g.top + this.window.pageYOffset,
            F = this.offset();
          this.window.scrollTo(w - F[0], I - F[1]);
        }
        supportScrollRestoration() {
          try {
            if (!this.supportsScrolling()) return !1;
            const _ =
              vr(this.window.history) ||
              vr(Object.getPrototypeOf(this.window.history));
            return !(!_ || (!_.writable && !_.set));
          } catch {
            return !1;
          }
        }
        supportsScrolling() {
          try {
            return (
              !!this.window &&
              !!this.window.scrollTo &&
              "pageXOffset" in this.window
            );
          } catch {
            return !1;
          }
        }
      }
      function vr(p) {
        return Object.getOwnPropertyDescriptor(p, "scrollRestoration");
      }
      class xu {}
    },
    256: (Ue, re, R) => {
      R.d(re, {
        QbO: () => Aw,
        tb: () => sv,
        AFp: () => nv,
        ip1: () => tv,
        CZH: () => zd,
        hGG: () => gC,
        z2F: () => Wd,
        sBO: () => eC,
        Sil: () => Fw,
        _Vd: () => Ys,
        EJc: () => Nw,
        Xts: () => Jc,
        SBq: () => cs,
        lqb: () => Pi,
        qLn: () => Qs,
        vpe: () => Xr,
        XFs: () => Y,
        OlP: () => rt,
        zs3: () => Ni,
        ZZ4: () => Pp,
        aQg: () => Np,
        soG: () => Gd,
        YKP: () => fy,
        h0i: () => xa,
        PXZ: () => qw,
        R0b: () => dr,
        FiY: () => Ls,
        Lbi: () => Mw,
        g9A: () => iv,
        Qsj: () => oh,
        FYo: () => ud,
        JOm: () => Cr,
        tp0: () => wi,
        Rgc: () => Su,
        dDg: () => Vw,
        eoX: () => fv,
        GfV: () => cd,
        s_b: () => Ud,
        ifc: () => sn,
        MMx: () => op,
        Lck: () => _E,
        G48: () => Jw,
        Gpc: () => ht,
        RIp: () => Gs,
        f3M: () => za,
        $WT: () => Vn,
        c2e: () => Rw,
        zSh: () => Zl,
        wAp: () => Me,
        vHH: () => U,
        lri: () => cv,
        rWj: () => dv,
        D6c: () => mC,
        cg1: () => Xh,
        kL8: () => km,
        dqk: () => pt,
        iPO: () => Qw,
        Z0I: () => ps,
        sIi: () => pu,
        CqO: () => Hg,
        QGY: () => Vh,
        F4k: () => Ug,
        RDi: () => $l,
        AaK: () => we,
        qOj: () => Fh,
        TTD: () => qi,
        _Bn: () => dy,
        jDz: () => py,
        xp6: () => au,
        uIk: () => kh,
        ekj: () => Yh,
        Suo: () => Ny,
        Xpm: () => Or,
        lG2: () => zi,
        Yz7: () => Gt,
        cJS: () => ji,
        oAB: () => Vi,
        Yjl: () => gr,
        Y36: () => bt,
        _UZ: () => Bh,
        qZA: () => Nd,
        TgZ: () => Pd,
        n5z: () => Xu,
        LFG: () => Et,
        $8M: () => fl,
        $Z: () => Oi,
        NdJ: () => zh,
        CRH: () => Oy,
        oxw: () => qg,
        Q6J: () => $h,
        iGM: () => Py,
        LSH: () => Kl,
        P3R: () => Xc,
        YNc: () => jg,
        _uU: () => ym,
        Oqu: () => Zh,
        hij: () => xd
      });
      var v = R(579),
        L = R(727),
        ee = R(751),
        Z = R(189),
        W = R(421),
        pe = R(515),
        ae = R(669),
        xe = R(76),
        Q = R(961),
        H = R(482);
      function He(e, t, ...n) {
        if (!0 === t) return void e();
        if (!1 === t) return;
        const s = new Q.Hp({
          next: () => {
            s.unsubscribe(), e();
          }
        });
        return (0, W.Xf)(t(...n)).subscribe(s);
      }
      function X(e) {
        for (let t in e) if (e[t] === X) return t;
        throw Error("Could not find renamed property on target object.");
      }
      function Se(e, t) {
        for (const n in t)
          t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
      }
      function we(e) {
        if ("string" == typeof e) return e;
        if (Array.isArray(e)) return "[" + e.map(we).join(", ") + "]";
        if (null == e) return "" + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const t = e.toString();
        if (null == t) return "" + t;
        const n = t.indexOf("\n");
        return -1 === n ? t : t.substring(0, n);
      }
      function Ve(e, t) {
        return null == e || "" === e
          ? null === t
            ? ""
            : t
          : null == t || "" === t
          ? e
          : e + " " + t;
      }
      const Ze = X({ __forward_ref__: X });
      function ht(e) {
        return (
          (e.__forward_ref__ = ht),
          (e.toString = function () {
            return we(this());
          }),
          e
        );
      }
      function le(e) {
        return de(e) ? e() : e;
      }
      function de(e) {
        return (
          "function" == typeof e &&
          e.hasOwnProperty(Ze) &&
          e.__forward_ref__ === ht
        );
      }
      function J(e) {
        return e && !!e.ɵproviders;
      }
      const nt = "https://g.co/ng/security#xss";
      class U extends Error {
        constructor(t, n) {
          super(
            (function oe(e, t) {
              return `NG0${Math.abs(e)}${t ? ": " + t.trim() : ""}`;
            })(t, n)
          ),
            (this.code = t);
        }
      }
      function K(e) {
        return "string" == typeof e ? e : null == e ? "" : String(e);
      }
      function se(e, t) {
        throw new U(-201, !1);
      }
      function An(e, t) {
        null == e &&
          (function Xe(e, t, n, s) {
            throw new Error(
              `ASSERTION ERROR: ${e}` +
                (null == s ? "" : ` [Expected=> ${n} ${s} ${t} <=Actual]`)
            );
          })(t, e, null, "!=");
      }
      function Gt(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0
        };
      }
      function ji(e) {
        return { providers: e.providers || [], imports: e.imports || [] };
      }
      function Ut(e) {
        return Ba(e, Rn) || Ba(e, Dt);
      }
      function ps(e) {
        return null !== Ut(e);
      }
      function Ba(e, t) {
        return e.hasOwnProperty(t) ? e[t] : null;
      }
      function ao(e) {
        return e && (e.hasOwnProperty(gs) || e.hasOwnProperty(Ie))
          ? e[gs]
          : null;
      }
      const Rn = X({ ɵprov: X }),
        gs = X({ ɵinj: X }),
        Dt = X({ ngInjectableDef: X }),
        Ie = X({ ngInjectorDef: X });
      var Y = (() => (
        ((Y = Y || {})[(Y.Default = 0)] = "Default"),
        (Y[(Y.Host = 1)] = "Host"),
        (Y[(Y.Self = 2)] = "Self"),
        (Y[(Y.SkipSelf = 4)] = "SkipSelf"),
        (Y[(Y.Optional = 8)] = "Optional"),
        Y
      ))();
      let Bi;
      function _t(e) {
        const t = Bi;
        return (Bi = e), t;
      }
      function Jr(e, t, n) {
        const s = Ut(e);
        return s && "root" == s.providedIn
          ? void 0 === s.value
            ? (s.value = s.factory())
            : s.value
          : n & Y.Optional
          ? null
          : void 0 !== t
          ? t
          : void se(we(e));
      }
      const pt = (() =>
          (typeof globalThis < "u" && globalThis) ||
          (typeof global < "u" && global) ||
          (typeof window < "u" && window) ||
          (typeof self < "u" &&
            typeof WorkerGlobalScope < "u" &&
            self instanceof WorkerGlobalScope &&
            self))(),
        ei = {},
        ti = "__NG_DI_FLAG__",
        ms = "ngTempTokenPath",
        Ru = /\n/gm,
        Ui = "__source";
      let fr;
      function hr(e) {
        const t = fr;
        return (fr = e), t;
      }
      function Pu(e, t = Y.Default) {
        if (void 0 === fr) throw new U(-203, !1);
        return null === fr
          ? Jr(e, void 0, t)
          : fr.get(e, t & Y.Optional ? null : void 0, t);
      }
      function Et(e, t = Y.Default) {
        return (
          (function Dn() {
            return Bi;
          })() || Pu
        )(le(e), t);
      }
      function za(e, t = Y.Default) {
        return Et(e, vs(t));
      }
      function vs(e) {
        return typeof e > "u" || "number" == typeof e
          ? e
          : 0 |
              (e.optional && 8) |
              (e.host && 1) |
              (e.self && 2) |
              (e.skipSelf && 4);
      }
      function lo(e) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
          const s = le(e[n]);
          if (Array.isArray(s)) {
            if (0 === s.length) throw new U(900, !1);
            let o,
              u = Y.Default;
            for (let d = 0; d < s.length; d++) {
              const h = s[d],
                m = Nu(h);
              "number" == typeof m
                ? -1 === m
                  ? (o = h.token)
                  : (u |= m)
                : (o = h);
            }
            t.push(Et(o, u));
          } else t.push(Et(s));
        }
        return t;
      }
      function Pr(e, t) {
        return (e[ti] = t), (e.prototype[ti] = t), e;
      }
      function Nu(e) {
        return e[ti];
      }
      function fe(e) {
        return { toString: e }.toString();
      }
      var Ht = (() => (
          ((Ht = Ht || {})[(Ht.OnPush = 0)] = "OnPush"),
          (Ht[(Ht.Default = 1)] = "Default"),
          Ht
        ))(),
        sn = (() => {
          return (
            ((e = sn || (sn = {}))[(e.Emulated = 0)] = "Emulated"),
            (e[(e.None = 2)] = "None"),
            (e[(e.ShadowDom = 3)] = "ShadowDom"),
            sn
          );
          var e;
        })();
      const on = {},
        qe = [],
        Xn = X({ ɵcmp: X }),
        Ds = X({ ɵdir: X }),
        _s = X({ ɵpipe: X }),
        Ft = X({ ɵmod: X }),
        Hn = X({ ɵfac: X }),
        Nr = X({ __NG_ELEMENT_ID__: X });
      let Ga = 0;
      function Or(e) {
        return fe(() => {
          const n = !0 === e.standalone,
            s = {},
            o = {
              type: e.type,
              providersResolver: null,
              decls: e.decls,
              vars: e.vars,
              factory: null,
              template: e.template || null,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              hostBindings: e.hostBindings || null,
              hostVars: e.hostVars || 0,
              hostAttrs: e.hostAttrs || null,
              contentQueries: e.contentQueries || null,
              declaredInputs: s,
              inputs: null,
              outputs: null,
              exportAs: e.exportAs || null,
              onPush: e.changeDetection === Ht.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              standalone: n,
              dependencies: (n && e.dependencies) || null,
              getStandaloneInjector: null,
              selectors: e.selectors || qe,
              viewQuery: e.viewQuery || null,
              features: e.features || null,
              data: e.data || {},
              encapsulation: e.encapsulation || sn.Emulated,
              id: "c" + Ga++,
              styles: e.styles || qe,
              _: null,
              setInput: null,
              schemas: e.schemas || null,
              tView: null,
              findHostDirectiveDefs: null,
              hostDirectives: null
            },
            u = e.dependencies,
            d = e.features;
          return (
            (o.inputs = fo(e.inputs, s)),
            (o.outputs = fo(e.outputs)),
            d && d.forEach(h => h(o)),
            (o.directiveDefs = u
              ? () => ("function" == typeof u ? u() : u).map(Es).filter(Hi)
              : null),
            (o.pipeDefs = u
              ? () => ("function" == typeof u ? u() : u).map(et).filter(Hi)
              : null),
            o
          );
        });
      }
      function Es(e) {
        return je(e) || xt(e);
      }
      function Hi(e) {
        return null !== e;
      }
      function Vi(e) {
        return fe(() => ({
          type: e.type,
          bootstrap: e.bootstrap || qe,
          declarations: e.declarations || qe,
          imports: e.imports || qe,
          exports: e.exports || qe,
          transitiveCompileScopes: null,
          schemas: e.schemas || null,
          id: e.id || null
        }));
      }
      function fo(e, t) {
        if (null == e) return on;
        const n = {};
        for (const s in e)
          if (e.hasOwnProperty(s)) {
            let o = e[s],
              u = o;
            Array.isArray(o) && ((u = o[1]), (o = o[0])),
              (n[o] = s),
              t && (t[o] = u);
          }
        return n;
      }
      const zi = Or;
      function gr(e) {
        return {
          type: e.type,
          name: e.name,
          factory: null,
          pure: !1 !== e.pure,
          standalone: !0 === e.standalone,
          onDestroy: e.type.prototype.ngOnDestroy || null
        };
      }
      function je(e) {
        return e[Xn] || null;
      }
      function xt(e) {
        return e[Ds] || null;
      }
      function et(e) {
        return e[_s] || null;
      }
      function Vn(e) {
        const t = je(e) || xt(e) || et(e);
        return null !== t && t.standalone;
      }
      function Xt(e, t) {
        const n = e[Ft] || null;
        if (!n && !0 === t)
          throw new Error(`Type ${we(e)} does not have '\u0275mod' property.`);
        return n;
      }
      function Je(e) {
        return Array.isArray(e) && "object" == typeof e[1];
      }
      function Rt(e) {
        return Array.isArray(e) && !0 === e[1];
      }
      function yr(e) {
        return 0 != (4 & e.flags);
      }
      function si(e) {
        return e.componentOffset > -1;
      }
      function oi(e) {
        return 1 == (1 & e.flags);
      }
      function hn(e) {
        return null !== e.template;
      }
      function Ss(e) {
        return 0 != (256 & e[2]);
      }
      function pn(e, t) {
        return e.hasOwnProperty(Hn) ? e[Hn] : null;
      }
      class Qa {
        constructor(t, n, s) {
          (this.previousValue = t),
            (this.currentValue = n),
            (this.firstChange = s);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function qi() {
        return go;
      }
      function go(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = mo), Za;
      }
      function Za() {
        const e = ui(this),
          t = e?.current;
        if (t) {
          const n = e.previous;
          if (n === on) e.previous = t;
          else for (let s in t) n[s] = t[s];
          (e.current = null), this.ngOnChanges(t);
        }
      }
      function mo(e, t, n, s) {
        const o = this.declaredInputs[n],
          u =
            ui(e) ||
            (function Xa(e, t) {
              return (e[li] = t);
            })(e, { previous: on, current: null }),
          d = u.current || (u.current = {}),
          h = u.previous,
          m = h[o];
        (d[o] = new Qa(m && m.currentValue, t, h === on)), (e[s] = t);
      }
      qi.ngInherit = !0;
      const li = "__ngSimpleChanges__";
      function ui(e) {
        return e[li] || null;
      }
      function kt(e) {
        for (; Array.isArray(e); ) e = e[0];
        return e;
      }
      function jr(e, t) {
        return kt(t[e]);
      }
      function mn(e, t) {
        return kt(t[e.index]);
      }
      function yo(e, t) {
        return e.data[t];
      }
      function $t(e, t) {
        const n = t[e];
        return Je(n) ? n : n[0];
      }
      function Wn(e) {
        return 64 == (64 & e[2]);
      }
      function er(e, t) {
        return null == t ? null : e[t];
      }
      function Rs(e) {
        e[18] = 0;
      }
      function st(e, t) {
        e[5] += t;
        let n = e,
          s = e[3];
        for (
          ;
          null !== s && ((1 === t && 1 === n[5]) || (-1 === t && 0 === n[5]));

        )
          (s[5] += t), (n = s), (s = s[3]);
      }
      const Ne = { lFrame: Br(null), bindingsEnabled: !0 };
      function _o() {
        return Ne.bindingsEnabled;
      }
      function B() {
        return Ne.lFrame.lView;
      }
      function Ge() {
        return Ne.lFrame.tView;
      }
      function mt() {
        let e = yn();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function yn() {
        return Ne.lFrame.currentTNode;
      }
      function Fn(e, t) {
        const n = Ne.lFrame;
        (n.currentTNode = e), (n.isParent = t);
      }
      function pi() {
        return Ne.lFrame.isParent;
      }
      function gi() {
        return Ne.lFrame.bindingIndex++;
      }
      function rl(e, t) {
        const n = Ne.lFrame;
        (n.bindingIndex = n.bindingRootIndex = e), il(t);
      }
      function il(e) {
        Ne.lFrame.currentDirectiveIndex = e;
      }
      function sl() {
        return Ne.lFrame.currentQueryIndex;
      }
      function So(e) {
        Ne.lFrame.currentQueryIndex = e;
      }
      function bo(e) {
        const t = e[1];
        return 2 === t.type ? t.declTNode : 1 === t.type ? e[6] : null;
      }
      function Zi(e, t, n) {
        if (n & Y.SkipSelf) {
          let o = t,
            u = e;
          for (
            ;
            !((o = o.parent),
            null !== o ||
              n & Y.Host ||
              ((o = bo(u)), null === o || ((u = u[15]), 10 & o.type)));

          );
          if (null === o) return !1;
          (t = o), (e = u);
        }
        const s = (Ne.lFrame = qn());
        return (s.currentTNode = t), (s.lView = e), !0;
      }
      function Xi(e) {
        const t = qn(),
          n = e[1];
        (Ne.lFrame = t),
          (t.currentTNode = n.firstChild),
          (t.lView = e),
          (t.tView = n),
          (t.contextLView = e),
          (t.bindingIndex = n.bindingStartIndex),
          (t.inI18n = !1);
      }
      function qn() {
        const e = Ne.lFrame,
          t = null === e ? null : e.child;
        return null === t ? Br(e) : t;
      }
      function Br(e) {
        const t = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: e,
          child: null,
          inI18n: !1
        };
        return null !== e && (e.child = t), t;
      }
      function Io() {
        const e = Ne.lFrame;
        return (
          (Ne.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e
        );
      }
      const To = Io;
      function Mo() {
        const e = Io();
        (e.isParent = !0),
          (e.tView = null),
          (e.selectedIndex = -1),
          (e.contextLView = null),
          (e.elementDepthCount = 0),
          (e.currentDirectiveIndex = -1),
          (e.currentNamespace = null),
          (e.bindingRootIndex = -1),
          (e.bindingIndex = -1),
          (e.currentQueryIndex = 0);
      }
      function p() {
        return Ne.lFrame.selectedIndex;
      }
      function _(e) {
        Ne.lFrame.selectedIndex = e;
      }
      function g() {
        const e = Ne.lFrame;
        return yo(e.tView, e.selectedIndex);
      }
      function Ke(e, t) {
        for (let n = t.directiveStart, s = t.directiveEnd; n < s; n++) {
          const u = e.data[n].type.prototype,
            {
              ngAfterContentInit: d,
              ngAfterContentChecked: h,
              ngAfterViewInit: m,
              ngAfterViewChecked: D,
              ngOnDestroy: C
            } = u;
          d && (e.contentHooks || (e.contentHooks = [])).push(-n, d),
            h &&
              ((e.contentHooks || (e.contentHooks = [])).push(n, h),
              (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, h)),
            m && (e.viewHooks || (e.viewHooks = [])).push(-n, m),
            D &&
              ((e.viewHooks || (e.viewHooks = [])).push(n, D),
              (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, D)),
            null != C && (e.destroyHooks || (e.destroyHooks = [])).push(n, C);
        }
      }
      function Qe(e, t, n) {
        tt(e, t, 3, n);
      }
      function $e(e, t, n, s) {
        (3 & e[2]) === n && tt(e, t, n, s);
      }
      function dt(e, t) {
        let n = e[2];
        (3 & n) === t && ((n &= 2047), (n += 1), (e[2] = n));
      }
      function tt(e, t, n, s) {
        const u = s ?? -1,
          d = t.length - 1;
        let h = 0;
        for (let m = void 0 !== s ? 65535 & e[18] : 0; m < d; m++)
          if ("number" == typeof t[m + 1]) {
            if (((h = t[m]), null != s && h >= s)) break;
          } else
            t[m] < 0 && (e[18] += 65536),
              (h < u || -1 == u) &&
                (Pt(e, n, t, m), (e[18] = (4294901760 & e[18]) + m + 2)),
              m++;
      }
      function Pt(e, t, n, s) {
        const o = n[s] < 0,
          u = n[s + 1],
          h = e[o ? -n[s] : n[s]];
        if (o) {
          if (e[2] >> 11 < e[18] >> 16 && (3 & e[2]) === t) {
            e[2] += 2048;
            try {
              u.call(h);
            } finally {
            }
          }
        } else
          try {
            u.call(h);
          } finally {
          }
      }
      class Jt {
        constructor(t, n, s) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = n),
            (this.injectImpl = s);
        }
      }
      function Vu(e, t, n) {
        let s = 0;
        for (; s < n.length; ) {
          const o = n[s];
          if ("number" == typeof o) {
            if (0 !== o) break;
            s++;
            const u = n[s++],
              d = n[s++],
              h = n[s++];
            e.setAttribute(t, d, h, u);
          } else {
            const u = o,
              d = n[++s];
            rf(u) ? e.setProperty(t, u, d) : e.setAttribute(t, u, d), s++;
          }
        }
        return s;
      }
      function nf(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function rf(e) {
        return 64 === e.charCodeAt(0);
      }
      function yi(e, t) {
        if (null !== t && 0 !== t.length)
          if (null === e || 0 === e.length) e = t.slice();
          else {
            let n = -1;
            for (let s = 0; s < t.length; s++) {
              const o = t[s];
              "number" == typeof o
                ? (n = o)
                : 0 === n ||
                  zu(e, n, o, null, -1 === n || 2 === n ? t[++s] : null);
            }
          }
        return e;
      }
      function zu(e, t, n, s, o) {
        let u = 0,
          d = e.length;
        if (-1 === t) d = -1;
        else
          for (; u < e.length; ) {
            const h = e[u++];
            if ("number" == typeof h) {
              if (h === t) {
                d = -1;
                break;
              }
              if (h > t) {
                d = u - 1;
                break;
              }
            }
          }
        for (; u < e.length; ) {
          const h = e[u];
          if ("number" == typeof h) break;
          if (h === n) {
            if (null === s) return void (null !== o && (e[u + 1] = o));
            if (s === e[u + 1]) return void (e[u + 2] = o);
          }
          u++, null !== s && u++, null !== o && u++;
        }
        -1 !== d && (e.splice(d, 0, t), (u = d + 1)),
          e.splice(u++, 0, n),
          null !== s && e.splice(u++, 0, s),
          null !== o && e.splice(u++, 0, o);
      }
      function Gu(e) {
        return -1 !== e;
      }
      function Po(e) {
        return 32767 & e;
      }
      function un(e, t) {
        let n = (function ll(e) {
            return e >> 16;
          })(e),
          s = t;
        for (; n > 0; ) (s = s[15]), n--;
        return s;
      }
      let No = !0;
      function Ur(e) {
        const t = No;
        return (No = e), t;
      }
      let Oo = 0;
      const ir = {};
      function _r(e, t) {
        const n = qu(e, t);
        if (-1 !== n) return n;
        const s = t[1];
        s.firstCreatePass &&
          ((e.injectorIndex = t.length),
          vi(s.data, e),
          vi(t, null),
          vi(s.blueprint, null));
        const o = cl(e, t),
          u = e.injectorIndex;
        if (Gu(o)) {
          const d = Po(o),
            h = un(o, t),
            m = h[1].data;
          for (let D = 0; D < 8; D++) t[u + D] = h[d + D] | m[d + D];
        }
        return (t[u + 8] = o), u;
      }
      function vi(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function qu(e, t) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === t[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function cl(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex)
          return e.parent.injectorIndex;
        let n = 0,
          s = null,
          o = t;
        for (; null !== o; ) {
          if (((s = Ju(o)), null === s)) return -1;
          if ((n++, (o = o[15]), -1 !== s.injectorIndex))
            return s.injectorIndex | (n << 16);
        }
        return -1;
      }
      function Di(e, t, n) {
        !(function sf(e, t, n) {
          let s;
          "string" == typeof n
            ? (s = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(Nr) && (s = n[Nr]),
            null == s && (s = n[Nr] = Oo++);
          const o = 255 & s;
          t.data[e + (o >> 5)] |= 1 << o;
        })(e, t, n);
      }
      function Ku(e, t, n) {
        if (n & Y.Optional || void 0 !== e) return e;
        se();
      }
      function Yu(e, t, n, s) {
        if (
          (n & Y.Optional && void 0 === s && (s = null),
          !(n & (Y.Self | Y.Host)))
        ) {
          const o = e[9],
            u = _t(void 0);
          try {
            return o ? o.get(t, s, n & Y.Optional) : Jr(t, s, n & Y.Optional);
          } finally {
            _t(u);
          }
        }
        return Ku(s, 0, n);
      }
      function Qu(e, t, n, s = Y.Default, o) {
        if (null !== e) {
          if (1024 & t[2]) {
            const d = (function cf(e, t, n, s, o) {
              let u = e,
                d = t;
              for (
                ;
                null !== u && null !== d && 1024 & d[2] && !(256 & d[2]);

              ) {
                const h = Zu(u, d, n, s | Y.Self, ir);
                if (h !== ir) return h;
                let m = u.parent;
                if (!m) {
                  const D = d[21];
                  if (D) {
                    const C = D.get(n, ir, s);
                    if (C !== ir) return C;
                  }
                  (m = Ju(d)), (d = d[15]);
                }
                u = m;
              }
              return o;
            })(e, t, n, s, ir);
            if (d !== ir) return d;
          }
          const u = Zu(e, t, n, s, ir);
          if (u !== ir) return u;
        }
        return Yu(t, n, s, o);
      }
      function Zu(e, t, n, s, o) {
        const u = (function lf(e) {
          if ("string" == typeof e) return e.charCodeAt(0) || 0;
          const t = e.hasOwnProperty(Nr) ? e[Nr] : void 0;
          return "number" == typeof t ? (t >= 0 ? 255 & t : uf) : t;
        })(n);
        if ("function" == typeof u) {
          if (!Zi(t, e, s)) return s & Y.Host ? Ku(o, 0, s) : Yu(t, n, s, o);
          try {
            const d = u(s);
            if (null != d || s & Y.Optional) return d;
            se();
          } finally {
            To();
          }
        } else if ("number" == typeof u) {
          let d = null,
            h = qu(e, t),
            m = -1,
            D = s & Y.Host ? t[16][6] : null;
          for (
            (-1 === h || s & Y.SkipSelf) &&
            ((m = -1 === h ? cl(e, t) : t[h + 8]),
            -1 !== m && Ns(s, !1)
              ? ((d = t[1]), (h = Po(m)), (t = un(m, t)))
              : (h = -1));
            -1 !== h;

          ) {
            const C = t[1];
            if (xo(u, h, C.data)) {
              const b = af(h, t, n, d, s, D);
              if (b !== ir) return b;
            }
            (m = t[h + 8]),
              -1 !== m && Ns(s, t[1].data[h + 8] === D) && xo(u, h, t)
                ? ((d = C), (h = Po(m)), (t = un(m, t)))
                : (h = -1);
          }
        }
        return o;
      }
      function af(e, t, n, s, o, u) {
        const d = t[1],
          h = d.data[e + 8],
          C = Fo(
            h,
            d,
            n,
            null == s ? si(h) && No : s != d && 0 != (3 & h.type),
            o & Y.Host && u === h
          );
        return null !== C ? Ji(t, d, C, h) : ir;
      }
      function Fo(e, t, n, s, o) {
        const u = e.providerIndexes,
          d = t.data,
          h = 1048575 & u,
          m = e.directiveStart,
          C = u >> 20,
          M = o ? h + C : e.directiveEnd;
        for (let P = s ? h : h + C; P < M; P++) {
          const k = d[P];
          if ((P < m && n === k) || (P >= m && k.type === n)) return P;
        }
        if (o) {
          const P = d[m];
          if (P && hn(P) && P.type === n) return m;
        }
        return null;
      }
      function Ji(e, t, n, s) {
        let o = e[n];
        const u = t.data;
        if (
          (function _n(e) {
            return e instanceof Jt;
          })(o)
        ) {
          const d = o;
          d.resolving &&
            (function N(e, t) {
              const n = t ? `. Dependency path: ${t.join(" > ")} > ${e}` : "";
              throw new U(
                -200,
                `Circular dependency in DI detected for ${e}${n}`
              );
            })(
              (function A(e) {
                return "function" == typeof e
                  ? e.name || e.toString()
                  : "object" == typeof e &&
                    null != e &&
                    "function" == typeof e.type
                  ? e.type.name || e.type.toString()
                  : K(e);
              })(u[n])
            );
          const h = Ur(d.canSeeViewProviders);
          d.resolving = !0;
          const m = d.injectImpl ? _t(d.injectImpl) : null;
          Zi(e, s, Y.Default);
          try {
            (o = e[n] = d.factory(void 0, u, e, s)),
              t.firstCreatePass &&
                n >= s.directiveStart &&
                (function We(e, t, n) {
                  const {
                    ngOnChanges: s,
                    ngOnInit: o,
                    ngDoCheck: u
                  } = t.type.prototype;
                  if (s) {
                    const d = go(t);
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(e, d),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, d);
                  }
                  o &&
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - e, o),
                    u &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, u),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, u));
                })(n, u[n], t);
          } finally {
            null !== m && _t(m), Ur(h), (d.resolving = !1), To();
          }
        }
        return o;
      }
      function xo(e, t, n) {
        return !!(n[t + (e >> 5)] & (1 << e));
      }
      function Ns(e, t) {
        return !(e & Y.Self || (e & Y.Host && t));
      }
      class Kn {
        constructor(t, n) {
          (this._tNode = t), (this._lView = n);
        }
        get(t, n, s) {
          return Qu(this._tNode, this._lView, t, vs(s), n);
        }
      }
      function uf() {
        return new Kn(mt(), B());
      }
      function Xu(e) {
        return fe(() => {
          const t = e.prototype.constructor,
            n = t[Hn] || dl(t),
            s = Object.prototype;
          let o = Object.getPrototypeOf(e.prototype).constructor;
          for (; o && o !== s; ) {
            const u = o[Hn] || dl(o);
            if (u && u !== n) return u;
            o = Object.getPrototypeOf(o);
          }
          return u => new u();
        });
      }
      function dl(e) {
        return de(e)
          ? () => {
              const t = dl(le(e));
              return t && t();
            }
          : pn(e);
      }
      function Ju(e) {
        const t = e[1],
          n = t.type;
        return 2 === n ? t.declTNode : 1 === n ? e[6] : null;
      }
      function fl(e) {
        return (function Ps(e, t) {
          if ("class" === t) return e.classes;
          if ("style" === t) return e.styles;
          const n = e.attrs;
          if (n) {
            const s = n.length;
            let o = 0;
            for (; o < s; ) {
              const u = n[o];
              if (nf(u)) break;
              if (0 === u) o += 2;
              else if ("number" == typeof u)
                for (o++; o < s && "string" == typeof n[o]; ) o++;
              else {
                if (u === t) return n[o + 1];
                o += 2;
              }
            }
          }
          return null;
        })(mt(), e);
      }
      const ts = "__parameters__";
      function Hr(e, t, n) {
        return fe(() => {
          const s = (function pl(e) {
            return function (...n) {
              if (e) {
                const s = e(...n);
                for (const o in s) this[o] = s[o];
              }
            };
          })(t);
          function o(...u) {
            if (this instanceof o) return s.apply(this, u), this;
            const d = new o(...u);
            return (h.annotation = d), h;
            function h(m, D, C) {
              const b = m.hasOwnProperty(ts)
                ? m[ts]
                : Object.defineProperty(m, ts, { value: [] })[ts];
              for (; b.length <= C; ) b.push(null);
              return (b[C] = b[C] || []).push(d), m;
            }
          }
          return (
            n && (o.prototype = Object.create(n.prototype)),
            (o.prototype.ngMetadataName = e),
            (o.annotationCls = o),
            o
          );
        });
      }
      class rt {
        constructor(t, n) {
          (this._desc = t),
            (this.ngMetadataName = "InjectionToken"),
            (this.ɵprov = void 0),
            "number" == typeof n
              ? (this.__NG_ELEMENT_ID__ = n)
              : void 0 !== n &&
                (this.ɵprov = Gt({
                  token: this,
                  providedIn: n.providedIn || "root",
                  factory: n.factory
                }));
        }
        get multi() {
          return this;
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      function _i(e, t) {
        e.forEach(n => (Array.isArray(n) ? _i(n, t) : t(n)));
      }
      function ec(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function Fs(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      function En(e, t, n) {
        let s = Ei(e, t);
        return (
          s >= 0
            ? (e[1 | s] = n)
            : ((s = ~s),
              (function yf(e, t, n, s) {
                let o = e.length;
                if (o == t) e.push(n, s);
                else if (1 === o) e.push(s, e[0]), (e[0] = n);
                else {
                  for (o--, e.push(e[o - 1], e[o]); o > t; )
                    (e[o] = e[o - 2]), o--;
                  (e[t] = n), (e[t + 1] = s);
                }
              })(e, s, t, n)),
          s
        );
      }
      function vl(e, t) {
        const n = Ei(e, t);
        if (n >= 0) return e[1 | n];
      }
      function Ei(e, t) {
        return (function Dl(e, t, n) {
          let s = 0,
            o = e.length >> n;
          for (; o !== s; ) {
            const u = s + ((o - s) >> 1),
              d = e[u << n];
            if (t === d) return u << n;
            d > t ? (o = u) : (s = u + 1);
          }
          return ~(o << n);
        })(e, t, 1);
      }
      const Ls = Pr(Hr("Optional"), 8),
        wi = Pr(Hr("SkipSelf"), 4);
      var Cr = (() => (
        ((Cr = Cr || {})[(Cr.Important = 1)] = "Important"),
        (Cr[(Cr.DashCase = 2)] = "DashCase"),
        Cr
      ))();
      const Al = new Map();
      let Af = 0;
      const Rl = "__ngContext__";
      function qt(e, t) {
        Je(t)
          ? ((e[Rl] = t[20]),
            (function Rf(e) {
              Al.set(e[20], e);
            })(t))
          : (e[Rl] = t);
      }
      function Pl(e, t) {
        return undefined(e, t);
      }
      function zo(e) {
        const t = e[3];
        return Rt(t) ? t[3] : t;
      }
      function Go(e) {
        return xf(e[13]);
      }
      function Wo(e) {
        return xf(e[4]);
      }
      function xf(e) {
        for (; null !== e && !Rt(e); ) e = e[4];
        return e;
      }
      function Bs(e, t, n, s, o) {
        if (null != s) {
          let u,
            d = !1;
          Rt(s) ? (u = s) : Je(s) && ((d = !0), (s = s[0]));
          const h = kt(s);
          0 === e && null !== n
            ? null == o
              ? Pc(t, n, h)
              : Ci(t, n, h, o || null, !0)
            : 1 === e && null !== n
            ? Ci(t, n, h, o || null, !0)
            : 2 === e
            ? (function Ll(e, t, n) {
                const s = Ko(e, t);
                s &&
                  (function Bf(e, t, n, s) {
                    e.removeChild(t, n, s);
                  })(e, s, t, n);
              })(t, h, d)
            : 3 === e && t.destroyNode(h),
            null != u &&
              (function Vf(e, t, n, s, o) {
                const u = n[7];
                u !== kt(n) && Bs(t, e, s, u, o);
                for (let h = 10; h < n.length; h++) {
                  const m = n[h];
                  Hs(m[1], m, e, t, s, u);
                }
              })(t, e, u, n, o);
        }
      }
      function bc(e, t, n) {
        return e.createElement(t, n);
      }
      function kf(e, t) {
        const n = e[9],
          s = n.indexOf(t),
          o = t[3];
        512 & t[2] && ((t[2] &= -513), st(o, -1)), n.splice(s, 1);
      }
      function qo(e, t) {
        if (e.length <= 10) return;
        const n = 10 + t,
          s = e[n];
        if (s) {
          const o = s[17];
          null !== o && o !== e && kf(o, s), t > 0 && (e[n - 1][4] = s[4]);
          const u = Fs(e, 10 + t);
          !(function Jp(e, t) {
            Hs(e, t, t[11], 2, null, null), (t[0] = null), (t[6] = null);
          })(s[1], s);
          const d = u[19];
          null !== d && d.detachView(u[1]),
            (s[3] = null),
            (s[4] = null),
            (s[2] &= -65);
        }
        return s;
      }
      function Mc(e, t) {
        if (!(128 & t[2])) {
          const n = t[11];
          n.destroyNode && Hs(e, t, n, 3, null, null),
            (function Us(e) {
              let t = e[13];
              if (!t) return Ol(e[1], e);
              for (; t; ) {
                let n = null;
                if (Je(t)) n = t[13];
                else {
                  const s = t[10];
                  s && (n = s);
                }
                if (!n) {
                  for (; t && !t[4] && t !== e; )
                    Je(t) && Ol(t[1], t), (t = t[3]);
                  null === t && (t = e), Je(t) && Ol(t[1], t), (n = t && t[4]);
                }
                t = n;
              }
            })(t);
        }
      }
      function Ol(e, t) {
        if (!(128 & t[2])) {
          (t[2] &= -65),
            (t[2] |= 128),
            (function jf(e, t) {
              let n;
              if (null != e && null != (n = e.destroyHooks))
                for (let s = 0; s < n.length; s += 2) {
                  const o = t[n[s]];
                  if (!(o instanceof Jt)) {
                    const u = n[s + 1];
                    if (Array.isArray(u))
                      for (let d = 0; d < u.length; d += 2) {
                        const h = o[u[d]],
                          m = u[d + 1];
                        try {
                          m.call(h);
                        } finally {
                        }
                      }
                    else
                      try {
                        u.call(o);
                      } finally {
                      }
                  }
                }
            })(e, t),
            (function $f(e, t) {
              const n = e.cleanup,
                s = t[7];
              let o = -1;
              if (null !== n)
                for (let u = 0; u < n.length - 1; u += 2)
                  if ("string" == typeof n[u]) {
                    const d = n[u + 3];
                    d >= 0 ? s[(o = d)]() : s[(o = -d)].unsubscribe(), (u += 2);
                  } else {
                    const d = s[(o = n[u + 1])];
                    n[u].call(d);
                  }
              if (null !== s) {
                for (let u = o + 1; u < s.length; u++) (0, s[u])();
                t[7] = null;
              }
            })(e, t),
            1 === t[1].type && t[11].destroy();
          const n = t[17];
          if (null !== n && Rt(t[3])) {
            n !== t[3] && kf(n, t);
            const s = t[19];
            null !== s && s.detachView(e);
          }
          !(function Kp(e) {
            Al.delete(e[20]);
          })(t);
        }
      }
      function Ac(e, t, n) {
        return (function Rc(e, t, n) {
          let s = t;
          for (; null !== s && 40 & s.type; ) s = (t = s).parent;
          if (null === s) return n[0];
          {
            const { componentOffset: o } = s;
            if (o > -1) {
              const { encapsulation: u } = e.data[s.directiveStart + o];
              if (u === sn.None || u === sn.Emulated) return null;
            }
            return mn(s, n);
          }
        })(e, t.parent, n);
      }
      function Ci(e, t, n, s, o) {
        e.insertBefore(t, n, s, o);
      }
      function Pc(e, t, n) {
        e.appendChild(t, n);
      }
      function Nc(e, t, n, s, o) {
        null !== s ? Ci(e, t, n, s, o) : Pc(e, t, n);
      }
      function Ko(e, t) {
        return e.parentNode(t);
      }
      let Xo,
        ss,
        xc = function Fc(e, t, n) {
          return 40 & e.type ? mn(e, n) : null;
        };
      function Yo(e, t, n, s) {
        const o = Ac(e, s, t),
          u = t[11],
          h = (function Oc(e, t, n) {
            return xc(e, t, n);
          })(s.parent || t[6], s, t);
        if (null != o)
          if (Array.isArray(n))
            for (let m = 0; m < n.length; m++) Nc(u, o, n[m], h, !1);
          else Nc(u, o, n, h, !1);
      }
      function Qo(e, t) {
        if (null !== t) {
          const n = t.type;
          if (3 & n) return mn(t, e);
          if (4 & n) return xl(-1, e[t.index]);
          if (8 & n) {
            const s = t.child;
            if (null !== s) return Qo(e, s);
            {
              const o = e[t.index];
              return Rt(o) ? xl(-1, o) : kt(o);
            }
          }
          if (32 & n) return Pl(t, e)() || kt(e[t.index]);
          {
            const s = kc(e, t);
            return null !== s
              ? Array.isArray(s)
                ? s[0]
                : Qo(zo(e[16]), s)
              : Qo(e, t.next);
          }
        }
        return null;
      }
      function kc(e, t) {
        return null !== t ? e[16][6].projection[t.projection] : null;
      }
      function xl(e, t) {
        const n = 10 + e + 1;
        if (n < t.length) {
          const s = t[n],
            o = s[1].firstChild;
          if (null !== o) return Qo(s, o);
        }
        return t[7];
      }
      function kl(e, t, n, s, o, u, d) {
        for (; null != n; ) {
          const h = s[n.index],
            m = n.type;
          if (
            (d && 0 === t && (h && qt(kt(h), s), (n.flags |= 2)),
            32 != (32 & n.flags))
          )
            if (8 & m) kl(e, t, n.child, s, o, u, !1), Bs(t, e, o, h, u);
            else if (32 & m) {
              const D = Pl(n, s);
              let C;
              for (; (C = D()); ) Bs(t, e, o, C, u);
              Bs(t, e, o, h, u);
            } else 16 & m ? $c(e, t, s, n, o, u) : Bs(t, e, o, h, u);
          n = d ? n.projectionNext : n.next;
        }
      }
      function Hs(e, t, n, s, o, u) {
        kl(n, s, e.firstChild, t, o, u, !1);
      }
      function $c(e, t, n, s, o, u) {
        const d = n[16],
          m = d[6].projection[s.projection];
        if (Array.isArray(m))
          for (let D = 0; D < m.length; D++) Bs(t, e, o, m[D], u);
        else kl(e, t, m, d[3], o, u, !0);
      }
      function jc(e, t, n) {
        "" === n
          ? e.removeAttribute(t, "class")
          : e.setAttribute(t, "class", n);
      }
      function Bc(e, t, n) {
        const { mergedAttrs: s, classes: o, styles: u } = n;
        null !== s && Vu(e, t, s),
          null !== o && jc(e, t, o),
          null !== u &&
            (function Gf(e, t, n) {
              e.setAttribute(t, "style", n);
            })(e, t, u);
      }
      function $l(e) {
        Xo = e;
      }
      function Bl(e) {
        return (
          (function cn() {
            if (void 0 === ss && ((ss = null), pt.trustedTypes))
              try {
                ss = pt.trustedTypes.createPolicy("angular#unsafe-bypass", {
                  createHTML: e => e,
                  createScript: e => e,
                  createScriptURL: e => e
                });
              } catch {}
            return ss;
          })()?.createScriptURL(e) || e
        );
      }
      class Ul {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${nt})`;
        }
      }
      function Gr(e) {
        return e instanceof Ul ? e.changingThisBreaksApplicationSecurity : e;
      }
      function ta(e, t) {
        const n = (function Yf(e) {
          return (e instanceof Ul && e.getTypeName()) || null;
        })(e);
        if (null != n && n !== t) {
          if ("ResourceURL" === n && "URL" === t) return !0;
          throw new Error(`Required a safe ${t}, got a ${n} (see ${nt})`);
        }
        return n === t;
      }
      const na =
        /^(?:(?:https?|mailto|data|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi;
      var Nt = (() => (
        ((Nt = Nt || {})[(Nt.NONE = 0)] = "NONE"),
        (Nt[(Nt.HTML = 1)] = "HTML"),
        (Nt[(Nt.STYLE = 2)] = "STYLE"),
        (Nt[(Nt.SCRIPT = 3)] = "SCRIPT"),
        (Nt[(Nt.URL = 4)] = "URL"),
        (Nt[(Nt.RESOURCE_URL = 5)] = "RESOURCE_URL"),
        Nt
      ))();
      function Kl(e) {
        const t = ca();
        return t
          ? t.sanitize(Nt.URL, e) || ""
          : ta(e, "URL")
          ? Gr(e)
          : (function os(e) {
              return (e = String(e)).match(na) ? e : "unsafe:" + e;
            })(K(e));
      }
      function Qc(e) {
        const t = ca();
        if (t) return Bl(t.sanitize(Nt.RESOURCE_URL, e) || "");
        if (ta(e, "ResourceURL")) return Bl(Gr(e));
        throw new U(904, !1);
      }
      function Xc(e, t, n) {
        return (function ua(e, t) {
          return ("src" === t &&
            ("embed" === e ||
              "frame" === e ||
              "iframe" === e ||
              "media" === e ||
              "script" === e)) ||
            ("href" === t && ("base" === e || "link" === e))
            ? Qc
            : Kl;
        })(
          t,
          n
        )(e);
      }
      function ca() {
        const e = B();
        return e && e[12];
      }
      const Jc = new rt("ENVIRONMENT_INITIALIZER"),
        zs = new rt("INJECTOR", -1),
        ed = new rt("INJECTOR_DEF_TYPES");
      class td {
        get(t, n = ei) {
          if (n === ei) {
            const s = new Error(`NullInjectorError: No provider for ${we(t)}!`);
            throw ((s.name = "NullInjectorError"), s);
          }
          return n;
        }
      }
      function Gs(...e) {
        return { ɵproviders: Ws(0, e), ɵfromNgModule: !0 };
      }
      function Ws(e, ...t) {
        const n = [],
          s = new Set();
        let o;
        return (
          _i(t, u => {
            const d = u;
            da(d, n, [], s) && (o || (o = []), o.push(d));
          }),
          void 0 !== o && Yl(o, n),
          n
        );
      }
      function Yl(e, t) {
        for (let n = 0; n < e.length; n++) {
          const { providers: o } = e[n];
          qs(o, u => {
            t.push(u);
          });
        }
      }
      function da(e, t, n, s) {
        if (!(e = le(e))) return !1;
        let o = null,
          u = ao(e);
        const d = !u && je(e);
        if (u || d) {
          if (d && !d.standalone) return !1;
          o = e;
        } else {
          const m = e.ngModule;
          if (((u = ao(m)), !u)) return !1;
          o = m;
        }
        const h = s.has(o);
        if (d) {
          if (h) return !1;
          if ((s.add(o), d.dependencies)) {
            const m =
              "function" == typeof d.dependencies
                ? d.dependencies()
                : d.dependencies;
            for (const D of m) da(D, t, n, s);
          }
        } else {
          if (!u) return !1;
          {
            if (null != u.imports && !h) {
              let D;
              s.add(o);
              try {
                _i(u.imports, C => {
                  da(C, t, n, s) && (D || (D = []), D.push(C));
                });
              } finally {
              }
              void 0 !== D && Yl(D, t);
            }
            if (!h) {
              const D = pn(o) || (() => new o());
              t.push(
                { provide: o, useFactory: D, deps: qe },
                { provide: ed, useValue: o, multi: !0 },
                { provide: Jc, useValue: () => Et(o), multi: !0 }
              );
            }
            const m = u.providers;
            null == m ||
              h ||
              qs(m, C => {
                t.push(C);
              });
          }
        }
        return o !== e && void 0 !== e.providers;
      }
      function qs(e, t) {
        for (let n of e)
          J(n) && (n = n.ɵproviders), Array.isArray(n) ? qs(n, t) : t(n);
      }
      const nd = X({ provide: String, useValue: X });
      function Ql(e) {
        return null !== e && "object" == typeof e && nd in e;
      }
      function Ai(e) {
        return "function" == typeof e;
      }
      const Zl = new rt("Set Injector scope."),
        lr = {},
        Xl = {};
      let Ks;
      function Ri() {
        return void 0 === Ks && (Ks = new td()), Ks;
      }
      class Pi {}
      class sd extends Pi {
        get destroyed() {
          return this._destroyed;
        }
        constructor(t, n, s, o) {
          super(),
            (this.parent = n),
            (this.source = s),
            (this.scopes = o),
            (this.records = new Map()),
            (this._ngOnDestroyHooks = new Set()),
            (this._onDestroyHooks = []),
            (this._destroyed = !1),
            tu(t, d => this.processProvider(d)),
            this.records.set(zs, us(void 0, this)),
            o.has("environment") && this.records.set(Pi, us(void 0, this));
          const u = this.records.get(Zl);
          null != u && "string" == typeof u.value && this.scopes.add(u.value),
            (this.injectorDefTypes = new Set(this.get(ed.multi, qe, Y.Self)));
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            for (const t of this._ngOnDestroyHooks) t.ngOnDestroy();
            for (const t of this._onDestroyHooks) t();
          } finally {
            this.records.clear(),
              this._ngOnDestroyHooks.clear(),
              this.injectorDefTypes.clear(),
              (this._onDestroyHooks.length = 0);
          }
        }
        onDestroy(t) {
          this._onDestroyHooks.push(t);
        }
        runInContext(t) {
          this.assertNotDestroyed();
          const n = hr(this),
            s = _t(void 0);
          try {
            return t();
          } finally {
            hr(n), _t(s);
          }
        }
        get(t, n = ei, s = Y.Default) {
          this.assertNotDestroyed(), (s = vs(s));
          const o = hr(this),
            u = _t(void 0);
          try {
            if (!(s & Y.SkipSelf)) {
              let h = this.records.get(t);
              if (void 0 === h) {
                const m =
                  (function pa(e) {
                    return (
                      "function" == typeof e ||
                      ("object" == typeof e && e instanceof rt)
                    );
                  })(t) && Ut(t);
                (h = m && this.injectableDefInScope(m) ? us(Jl(t), lr) : null),
                  this.records.set(t, h);
              }
              if (null != h) return this.hydrate(t, h);
            }
            return (s & Y.Self ? Ri() : this.parent).get(
              t,
              (n = s & Y.Optional && n === ei ? null : n)
            );
          } catch (d) {
            if ("NullInjectorError" === d.name) {
              if (((d[ms] = d[ms] || []).unshift(we(t)), o)) throw d;
              return (function Tt(e, t, n, s) {
                const o = e[ms];
                throw (
                  (t[Ui] && o.unshift(t[Ui]),
                  (e.message = (function Zn(e, t, n, s = null) {
                    e =
                      e && "\n" === e.charAt(0) && "\u0275" == e.charAt(1)
                        ? e.slice(2)
                        : e;
                    let o = we(t);
                    if (Array.isArray(t)) o = t.map(we).join(" -> ");
                    else if ("object" == typeof t) {
                      let u = [];
                      for (let d in t)
                        if (t.hasOwnProperty(d)) {
                          let h = t[d];
                          u.push(
                            d +
                              ":" +
                              ("string" == typeof h ? JSON.stringify(h) : we(h))
                          );
                        }
                      o = `{${u.join(", ")}}`;
                    }
                    return `${n}${s ? "(" + s + ")" : ""}[${o}]: ${e.replace(
                      Ru,
                      "\n  "
                    )}`;
                  })("\n" + e.message, o, n, s)),
                  (e.ngTokenPath = o),
                  (e[ms] = null),
                  e)
                );
              })(d, t, "R3InjectorError", this.source);
            }
            throw d;
          } finally {
            _t(u), hr(o);
          }
        }
        resolveInjectorInitializers() {
          const t = hr(this),
            n = _t(void 0);
          try {
            const s = this.get(Jc.multi, qe, Y.Self);
            for (const o of s) o();
          } finally {
            hr(t), _t(n);
          }
        }
        toString() {
          const t = [],
            n = this.records;
          for (const s of n.keys()) t.push(we(s));
          return `R3Injector[${t.join(", ")}]`;
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new U(205, !1);
        }
        processProvider(t) {
          let n = Ai((t = le(t))) ? t : le(t && t.provide);
          const s = (function ih(e) {
            return Ql(e) ? us(void 0, e.useValue) : us(fa(e), lr);
          })(t);
          if (Ai(t) || !0 !== t.multi) this.records.get(n);
          else {
            let o = this.records.get(n);
            o ||
              ((o = us(void 0, lr, !0)),
              (o.factory = () => lo(o.multi)),
              this.records.set(n, o)),
              (n = t),
              o.multi.push(t);
          }
          this.records.set(n, s);
        }
        hydrate(t, n) {
          return (
            n.value === lr && ((n.value = Xl), (n.value = n.factory())),
            "object" == typeof n.value &&
              n.value &&
              (function eu(e) {
                return (
                  null !== e &&
                  "object" == typeof e &&
                  "function" == typeof e.ngOnDestroy
                );
              })(n.value) &&
              this._ngOnDestroyHooks.add(n.value),
            n.value
          );
        }
        injectableDefInScope(t) {
          if (!t.providedIn) return !1;
          const n = le(t.providedIn);
          return "string" == typeof n
            ? "any" === n || this.scopes.has(n)
            : this.injectorDefTypes.has(n);
        }
      }
      function Jl(e) {
        const t = Ut(e),
          n = null !== t ? t.factory : pn(e);
        if (null !== n) return n;
        if (e instanceof rt) throw new U(204, !1);
        if (e instanceof Function)
          return (function rh(e) {
            const t = e.length;
            if (t > 0)
              throw (
                ((function xs(e, t) {
                  const n = [];
                  for (let s = 0; s < e; s++) n.push(t);
                  return n;
                })(t, "?"),
                new U(204, !1))
              );
            const n = (function Ua(e) {
              const t = e && (e[Rn] || e[Dt]);
              if (t) {
                const n = (function Au(e) {
                  if (e.hasOwnProperty("name")) return e.name;
                  const t = ("" + e).match(/^function\s*([^\s(]+)/);
                  return null === t ? "" : t[1];
                })(e);
                return (
                  console.warn(
                    `DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`
                  ),
                  t
                );
              }
              return null;
            })(e);
            return null !== n ? () => n.factory(e) : () => new e();
          })(e);
        throw new U(204, !1);
      }
      function fa(e, t, n) {
        let s;
        if (Ai(e)) {
          const o = le(e);
          return pn(o) || Jl(o);
        }
        if (Ql(e)) s = () => le(e.useValue);
        else if (
          (function id(e) {
            return !(!e || !e.useFactory);
          })(e)
        )
          s = () => e.useFactory(...lo(e.deps || []));
        else if (
          (function rd(e) {
            return !(!e || !e.useExisting);
          })(e)
        )
          s = () => Et(le(e.useExisting));
        else {
          const o = le(e && (e.useClass || e.provide));
          if (
            !(function ha(e) {
              return !!e.deps;
            })(e)
          )
            return pn(o) || Jl(o);
          s = () => new o(...lo(e.deps));
        }
        return s;
      }
      function us(e, t, n = !1) {
        return { factory: e, value: t, multi: n ? [] : void 0 };
      }
      function tu(e, t) {
        for (const n of e)
          Array.isArray(n) ? tu(n, t) : n && J(n) ? tu(n.ɵproviders, t) : t(n);
      }
      class od {}
      class ad {}
      class sh {
        resolveComponentFactory(t) {
          throw (function ag(e) {
            const t = Error(
              `No component factory found for ${we(
                e
              )}. Did you add it to @NgModule.entryComponents?`
            );
            return (t.ngComponent = e), t;
          })(t);
        }
      }
      let Ys = (() => {
        class e {}
        return (e.NULL = new sh()), e;
      })();
      function ld() {
        return Wr(mt(), B());
      }
      function Wr(e, t) {
        return new cs(mn(e, t));
      }
      let cs = (() => {
        class e {
          constructor(n) {
            this.nativeElement = n;
          }
        }
        return (e.__NG_ELEMENT_ID__ = ld), e;
      })();
      function lg(e) {
        return e instanceof cs ? e.nativeElement : e;
      }
      class ud {}
      let oh = (() => {
          class e {}
          return (
            (e.__NG_ELEMENT_ID__ = () =>
              (function ah() {
                const e = B(),
                  n = $t(mt().index, e);
                return (Je(n) ? n : e)[11];
              })()),
            e
          );
        })(),
        lh = (() => {
          class e {}
          return (
            (e.ɵprov = Gt({
              token: e,
              providedIn: "root",
              factory: () => null
            })),
            e
          );
        })();
      class cd {
        constructor(t) {
          (this.full = t),
            (this.major = t.split(".")[0]),
            (this.minor = t.split(".")[1]),
            (this.patch = t.split(".").slice(2).join("."));
        }
      }
      const uh = new cd("15.1.0"),
        ma = {};
      function ya(e) {
        return e.ngOriginalError;
      }
      class Qs {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const n = this._findOriginalError(t);
          this._console.error("ERROR", t),
            n && this._console.error("ORIGINAL ERROR", n);
        }
        _findOriginalError(t) {
          let n = t && ya(t);
          for (; n && ya(n); ) n = ya(n);
          return n || null;
        }
      }
      function Yn(e) {
        return e instanceof Function ? e() : e;
      }
      function fd(e, t, n) {
        let s = e.length;
        for (;;) {
          const o = e.indexOf(t, n);
          if (-1 === o) return o;
          if (0 === o || e.charCodeAt(o - 1) <= 32) {
            const u = t.length;
            if (o + u === s || e.charCodeAt(o + u) <= 32) return o;
          }
          n = o + 1;
        }
      }
      const Xs = "ng-template";
      function mh(e, t, n) {
        let s = 0;
        for (; s < e.length; ) {
          let o = e[s++];
          if (n && "class" === o) {
            if (((o = e[s]), -1 !== fd(o.toLowerCase(), t, 0))) return !0;
          } else if (1 === o) {
            for (; s < e.length && "string" == typeof (o = e[s++]); )
              if (o.toLowerCase() === t) return !0;
            return !1;
          }
        }
        return !1;
      }
      function su(e) {
        return 4 === e.type && e.value !== Xs;
      }
      function hd(e, t, n) {
        return t === (4 !== e.type || n ? e.value : Xs);
      }
      function pd(e, t, n) {
        let s = 4;
        const o = e.attrs || [],
          u = (function md(e) {
            for (let t = 0; t < e.length; t++) if (nf(e[t])) return t;
            return e.length;
          })(o);
        let d = !1;
        for (let h = 0; h < t.length; h++) {
          const m = t[h];
          if ("number" != typeof m) {
            if (!d)
              if (4 & s) {
                if (
                  ((s = 2 | (1 & s)),
                  ("" !== m && !hd(e, m, n)) || ("" === m && 1 === t.length))
                ) {
                  if (Ct(s)) return !1;
                  d = !0;
                }
              } else {
                const D = 8 & s ? m : t[++h];
                if (8 & s && null !== e.attrs) {
                  if (!mh(e.attrs, D, n)) {
                    if (Ct(s)) return !1;
                    d = !0;
                  }
                  continue;
                }
                const b = ds(8 & s ? "class" : m, o, su(e), n);
                if (-1 === b) {
                  if (Ct(s)) return !1;
                  d = !0;
                  continue;
                }
                if ("" !== D) {
                  let M;
                  M = b > u ? "" : o[b + 1].toLowerCase();
                  const P = 8 & s ? M : null;
                  if ((P && -1 !== fd(P, D, 0)) || (2 & s && D !== M)) {
                    if (Ct(s)) return !1;
                    d = !0;
                  }
                }
              }
          } else {
            if (!d && !Ct(s) && !Ct(m)) return !1;
            if (d && Ct(m)) continue;
            (d = !1), (s = m | (1 & s));
          }
        }
        return Ct(s) || d;
      }
      function Ct(e) {
        return 0 == (1 & e);
      }
      function ds(e, t, n, s) {
        if (null === t) return -1;
        let o = 0;
        if (s || !n) {
          let u = !1;
          for (; o < t.length; ) {
            const d = t[o];
            if (d === e) return o;
            if (3 === d || 6 === d) u = !0;
            else {
              if (1 === d || 2 === d) {
                let h = t[++o];
                for (; "string" == typeof h; ) h = t[++o];
                continue;
              }
              if (4 === d) break;
              if (0 === d) {
                o += 4;
                continue;
              }
            }
            o += u ? 1 : 2;
          }
          return -1;
        }
        return (function vh(e, t) {
          let n = e.indexOf(4);
          if (n > -1)
            for (n++; n < e.length; ) {
              const s = e[n];
              if ("number" == typeof s) return -1;
              if (s === t) return n;
              n++;
            }
          return -1;
        })(t, e);
      }
      function gd(e, t, n = !1) {
        for (let s = 0; s < t.length; s++) if (pd(e, t[s], n)) return !0;
        return !1;
      }
      function Js(e, t) {
        return e ? ":not(" + t.trim() + ")" : t;
      }
      function Dh(e) {
        let t = e[0],
          n = 1,
          s = 2,
          o = "",
          u = !1;
        for (; n < e.length; ) {
          let d = e[n];
          if ("string" == typeof d)
            if (2 & s) {
              const h = e[++n];
              o += "[" + d + (h.length > 0 ? '="' + h + '"' : "") + "]";
            } else 8 & s ? (o += "." + d) : 4 & s && (o += " " + d);
          else
            "" !== o && !Ct(d) && ((t += Js(u, o)), (o = "")),
              (s = d),
              (u = u || !Ct(s));
          n++;
        }
        return "" !== o && (t += Js(u, o)), t;
      }
      const Fe = {};
      function au(e) {
        vd(Ge(), B(), p() + e, !1);
      }
      function vd(e, t, n, s) {
        if (!s)
          if (3 == (3 & t[2])) {
            const u = e.preOrderCheckHooks;
            null !== u && Qe(t, u, n);
          } else {
            const u = e.preOrderHooks;
            null !== u && $e(t, u, 0, n);
          }
        _(n);
      }
      function Ed(e, t = null, n = null, s) {
        const o = wd(e, t, n, s);
        return o.resolveInjectorInitializers(), o;
      }
      function wd(e, t = null, n = null, s, o = new Set()) {
        const u = [n || qe, Gs(e)];
        return (
          (s = s || ("object" == typeof e ? void 0 : we(e))),
          new sd(u, t || Ri(), s || null, o)
        );
      }
      let Ni = (() => {
        class e {
          static create(n, s) {
            if (Array.isArray(n)) return Ed({ name: "" }, s, n, "");
            {
              const o = n.name ?? "";
              return Ed({ name: o }, n.parent, n.providers, o);
            }
          }
        }
        return (
          (e.THROW_IF_NOT_FOUND = ei),
          (e.NULL = new td()),
          (e.ɵprov = Gt({
            token: e,
            providedIn: "any",
            factory: () => Et(zs)
          })),
          (e.__NG_ELEMENT_ID__ = -1),
          e
        );
      })();
      function bt(e, t = Y.Default) {
        const n = B();
        return null === n ? Et(e, t) : Qu(mt(), n, le(e), t);
      }
      function Oi() {
        throw new Error("invalid");
      }
      function tn(e, t) {
        const n = e.contentQueries;
        if (null !== n)
          for (let s = 0; s < n.length; s += 2) {
            const u = n[s + 1];
            if (-1 !== u) {
              const d = e.data[u];
              So(n[s]), d.contentQueries(2, t[u], u);
            }
          }
      }
      function jn(e, t, n, s, o, u, d, h, m, D, C) {
        const b = t.blueprint.slice();
        return (
          (b[0] = o),
          (b[2] = 76 | s),
          (null !== C || (e && 1024 & e[2])) && (b[2] |= 1024),
          Rs(b),
          (b[3] = b[15] = e),
          (b[8] = n),
          (b[10] = d || (e && e[10])),
          (b[11] = h || (e && e[11])),
          (b[12] = m || (e && e[12]) || null),
          (b[9] = D || (e && e[9]) || null),
          (b[6] = u),
          (b[20] = (function mc() {
            return Af++;
          })()),
          (b[21] = C),
          (b[16] = 2 == t.type ? e[16] : b),
          b
        );
      }
      function Fi(e, t, n, s, o) {
        let u = e.data[t];
        if (null === u)
          (u = (function xi(e, t, n, s, o) {
            const u = yn(),
              d = pi(),
              m = (e.data[t] = (function Cd(e, t, n, s, o, u) {
                return {
                  type: n,
                  index: s,
                  insertBeforeIndex: null,
                  injectorIndex: t ? t.injectorIndex : -1,
                  directiveStart: -1,
                  directiveEnd: -1,
                  directiveStylingLast: -1,
                  componentOffset: -1,
                  propertyBindings: null,
                  flags: 0,
                  providerIndexes: 0,
                  value: o,
                  attrs: u,
                  mergedAttrs: null,
                  localNames: null,
                  initialInputs: void 0,
                  inputs: null,
                  outputs: null,
                  tViews: null,
                  next: null,
                  projectionNext: null,
                  child: null,
                  parent: t,
                  projection: null,
                  styles: null,
                  stylesWithoutHost: null,
                  residualStyles: void 0,
                  classes: null,
                  classesWithoutHost: null,
                  residualClasses: void 0,
                  classBindings: 0,
                  styleBindings: 0
                };
              })(0, d ? u : u && u.parent, n, t, s, o));
            return (
              null === e.firstChild && (e.firstChild = m),
              null !== u &&
                (d
                  ? null == u.child && null !== m.parent && (u.child = m)
                  : null === u.next && (u.next = m)),
              m
            );
          })(e, t, n, s, o)),
            (function Uu() {
              return Ne.lFrame.inI18n;
            })() && (u.flags |= 32);
        else if (64 & u.type) {
          (u.type = n), (u.value = s), (u.attrs = o);
          const d = (function Dr() {
            const e = Ne.lFrame,
              t = e.currentTNode;
            return e.isParent ? t : t.parent;
          })();
          u.injectorIndex = null === d ? -1 : d.injectorIndex;
        }
        return Fn(u, !0), u;
      }
      function Qn(e, t, n, s) {
        if (0 === n) return -1;
        const o = t.length;
        for (let u = 0; u < n; u++)
          t.push(s), e.blueprint.push(s), e.data.push(null);
        return o;
      }
      function Ea(e, t, n) {
        Xi(t);
        try {
          const s = e.viewQuery;
          null !== s && Nh(1, s, n);
          const o = e.template;
          null !== o && he(e, t, o, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            e.staticContentQueries && tn(e, t),
            e.staticViewQueries && Nh(2, e.viewQuery, n);
          const u = e.components;
          null !== u &&
            (function Ir(e, t) {
              for (let n = 0; n < t.length; n++) Jv(e, t[n]);
            })(t, u);
        } catch (s) {
          throw (
            (e.firstCreatePass &&
              ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
            s)
          );
        } finally {
          (t[2] &= -5), Mo();
        }
      }
      function eo(e, t, n, s) {
        const o = t[2];
        if (128 != (128 & o)) {
          Xi(t);
          try {
            Rs(t),
              (function tl(e) {
                return (Ne.lFrame.bindingIndex = e);
              })(e.bindingStartIndex),
              null !== n && he(e, t, n, 2, s);
            const d = 3 == (3 & o);
            if (d) {
              const D = e.preOrderCheckHooks;
              null !== D && Qe(t, D, null);
            } else {
              const D = e.preOrderHooks;
              null !== D && $e(t, D, 0, null), dt(t, 0);
            }
            if (
              ((function Zv(e) {
                for (let t = Go(e); null !== t; t = Wo(t)) {
                  if (!t[2]) continue;
                  const n = t[9];
                  for (let s = 0; s < n.length; s++) {
                    const o = n[s];
                    512 & o[2] || st(o[3], 1), (o[2] |= 512);
                  }
                }
              })(t),
              (function Qv(e) {
                for (let t = Go(e); null !== t; t = Wo(t))
                  for (let n = 10; n < t.length; n++) {
                    const s = t[n],
                      o = s[1];
                    Wn(s) && eo(o, s, o.template, s[8]);
                  }
              })(t),
              null !== e.contentQueries && tn(e, t),
              d)
            ) {
              const D = e.contentCheckHooks;
              null !== D && Qe(t, D);
            } else {
              const D = e.contentHooks;
              null !== D && $e(t, D, 1), dt(t, 1);
            }
            !(function ur(e, t) {
              const n = e.hostBindingOpCodes;
              if (null !== n)
                try {
                  for (let s = 0; s < n.length; s++) {
                    const o = n[s];
                    if (o < 0) _(~o);
                    else {
                      const u = o,
                        d = n[++s],
                        h = n[++s];
                      rl(d, u), h(2, t[u]);
                    }
                  }
                } finally {
                  _(-1);
                }
            })(e, t);
            const h = e.components;
            null !== h &&
              (function br(e, t) {
                for (let n = 0; n < t.length; n++) Xv(e, t[n]);
              })(t, h);
            const m = e.viewQuery;
            if ((null !== m && Nh(2, m, s), d)) {
              const D = e.viewCheckHooks;
              null !== D && Qe(t, D);
            } else {
              const D = e.viewHooks;
              null !== D && $e(t, D, 2), dt(t, 2);
            }
            !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
              (t[2] &= -41),
              512 & t[2] && ((t[2] &= -513), st(t[3], -1));
          } finally {
            Mo();
          }
        }
      }
      function he(e, t, n, s, o) {
        const u = p(),
          d = 2 & s;
        try {
          _(-1), d && t.length > 22 && vd(e, t, 22, !1), n(s, o);
        } finally {
          _(u);
        }
      }
      function _e(e, t, n) {
        if (yr(t)) {
          const o = t.directiveEnd;
          for (let u = t.directiveStart; u < o; u++) {
            const d = e.data[u];
            d.contentQueries && d.contentQueries(1, n[u], u);
          }
        }
      }
      function Ce(e, t, n) {
        _o() &&
          ((function Bv(e, t, n, s) {
            const o = n.directiveStart,
              u = n.directiveEnd;
            si(n) &&
              (function qv(e, t, n) {
                const s = mn(t, e),
                  o = jt(n),
                  u = e[10],
                  d = bd(
                    e,
                    jn(
                      e,
                      o,
                      null,
                      n.onPush ? 32 : 16,
                      s,
                      t,
                      u,
                      u.createRenderer(s, n),
                      null,
                      null,
                      null
                    )
                  );
                e[t.index] = d;
              })(t, n, e.data[o + n.componentOffset]),
              e.firstCreatePass || _r(n, t),
              qt(s, t);
            const d = n.initialInputs;
            for (let h = o; h < u; h++) {
              const m = e.data[h],
                D = Ji(t, e, h, n);
              qt(D, t),
                null !== d && Kv(0, h - o, D, m, 0, d),
                hn(m) && ($t(n.index, t)[8] = Ji(t, e, h, n));
            }
          })(e, t, n, mn(n, t)),
          64 == (64 & n.flags) && vg(e, t, n));
      }
      function Ye(e, t, n = mn) {
        const s = t.localNames;
        if (null !== s) {
          let o = t.index + 1;
          for (let u = 0; u < s.length; u += 2) {
            const d = s[u + 1],
              h = -1 === d ? n(t, e) : e[d];
            e[o++] = h;
          }
        }
      }
      function jt(e) {
        const t = e.tView;
        return null === t || t.incompleteFirstPass
          ? (e.tView = Bn(
              1,
              null,
              e.template,
              e.decls,
              e.vars,
              e.directiveDefs,
              e.pipeDefs,
              e.viewQuery,
              e.schemas,
              e.consts
            ))
          : t;
      }
      function Bn(e, t, n, s, o, u, d, h, m, D) {
        const C = 22 + s,
          b = C + o,
          M = (function Sn(e, t) {
            const n = [];
            for (let s = 0; s < t; s++) n.push(s < e ? null : Fe);
            return n;
          })(C, b),
          P = "function" == typeof D ? D() : D;
        return (M[1] = {
          type: e,
          blueprint: M,
          template: n,
          queries: null,
          viewQuery: h,
          declTNode: t,
          data: M.slice().fill(null, C),
          bindingStartIndex: C,
          expandoStartIndex: b,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: "function" == typeof u ? u() : u,
          pipeRegistry: "function" == typeof d ? d() : d,
          firstChild: null,
          schemas: m,
          consts: P,
          incompleteFirstPass: !1
        });
      }
      function ft(e, t, n, s) {
        const o = _g(t);
        null === n
          ? o.push(s)
          : (o.push(n), e.firstCreatePass && Eg(e).push(s, o.length - 1));
      }
      function Sd(e, t, n, s) {
        for (let o in e)
          if (e.hasOwnProperty(o)) {
            n = null === n ? {} : n;
            const u = e[o];
            null === s
              ? Yt(n, t, o, u)
              : s.hasOwnProperty(o) && Yt(n, t, s[o], u);
          }
        return n;
      }
      function Yt(e, t, n, s) {
        e.hasOwnProperty(n) ? e[n].push(t, s) : (e[n] = [t, s]);
      }
      function wa(e, t) {
        const n = $t(t, e);
        16 & n[2] || (n[2] |= 32);
      }
      function Th(e, t, n, s) {
        let o = !1;
        if (_o()) {
          const u = null === s ? null : { "": -1 },
            d = (function Hv(e, t) {
              const n = e.directiveRegistry;
              let s = null,
                o = null;
              if (n)
                for (let u = 0; u < n.length; u++) {
                  const d = n[u];
                  if (gd(t, d.selectors, !1))
                    if ((s || (s = []), hn(d)))
                      if (null !== d.findHostDirectiveDefs) {
                        const h = [];
                        (o = o || new Map()),
                          d.findHostDirectiveDefs(d, h, o),
                          s.unshift(...h, d),
                          Mh(e, t, h.length);
                      } else s.unshift(d), Mh(e, t, 0);
                    else
                      (o = o || new Map()),
                        d.findHostDirectiveDefs?.(d, s, o),
                        s.push(d);
                }
              return null === s ? null : [s, o];
            })(e, n);
          let h, m;
          null === d ? (h = m = null) : ([h, m] = d),
            null !== h && ((o = !0), yg(e, t, n, h, u, m)),
            u &&
              (function Vv(e, t, n) {
                if (t) {
                  const s = (e.localNames = []);
                  for (let o = 0; o < t.length; o += 2) {
                    const u = n[t[o + 1]];
                    if (null == u) throw new U(-301, !1);
                    s.push(t[o], u);
                  }
                }
              })(n, s, u);
        }
        return (n.mergedAttrs = yi(n.mergedAttrs, n.attrs)), o;
      }
      function yg(e, t, n, s, o, u) {
        for (let D = 0; D < s.length; D++) Di(_r(n, t), e, s[D].type);
        !(function Gv(e, t, n) {
          (e.flags |= 1),
            (e.directiveStart = t),
            (e.directiveEnd = t + n),
            (e.providerIndexes = t);
        })(n, e.data.length, s.length);
        for (let D = 0; D < s.length; D++) {
          const C = s[D];
          C.providersResolver && C.providersResolver(C);
        }
        let d = !1,
          h = !1,
          m = Qn(e, t, s.length, null);
        for (let D = 0; D < s.length; D++) {
          const C = s[D];
          (n.mergedAttrs = yi(n.mergedAttrs, C.hostAttrs)),
            Wv(e, n, t, m, C),
            zv(m, C, o),
            null !== C.contentQueries && (n.flags |= 4),
            (null !== C.hostBindings ||
              null !== C.hostAttrs ||
              0 !== C.hostVars) &&
              (n.flags |= 64);
          const b = C.type.prototype;
          !d &&
            (b.ngOnChanges || b.ngOnInit || b.ngDoCheck) &&
            ((e.preOrderHooks || (e.preOrderHooks = [])).push(n.index),
            (d = !0)),
            !h &&
              (b.ngOnChanges || b.ngDoCheck) &&
              ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(
                n.index
              ),
              (h = !0)),
            m++;
        }
        !(function Li(e, t, n) {
          const o = t.directiveEnd,
            u = e.data,
            d = t.attrs,
            h = [];
          let m = null,
            D = null;
          for (let C = t.directiveStart; C < o; C++) {
            const b = u[C],
              M = n ? n.get(b) : null,
              k = M ? M.outputs : null;
            (m = Sd(b.inputs, C, m, M ? M.inputs : null)),
              (D = Sd(b.outputs, C, D, k));
            const G = null === m || null === d || su(t) ? null : Yv(m, C, d);
            h.push(G);
          }
          null !== m &&
            (m.hasOwnProperty("class") && (t.flags |= 8),
            m.hasOwnProperty("style") && (t.flags |= 16)),
            (t.initialInputs = h),
            (t.inputs = m),
            (t.outputs = D);
        })(e, n, u);
      }
      function vg(e, t, n) {
        const s = n.directiveStart,
          o = n.directiveEnd,
          u = n.index,
          d = (function Hu() {
            return Ne.lFrame.currentDirectiveIndex;
          })();
        try {
          _(u);
          for (let h = s; h < o; h++) {
            const m = e.data[h],
              D = t[h];
            il(h),
              (null !== m.hostBindings ||
                0 !== m.hostVars ||
                null !== m.hostAttrs) &&
                Uv(m, D);
          }
        } finally {
          _(-1), il(d);
        }
      }
      function Uv(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t);
      }
      function Mh(e, t, n) {
        (t.componentOffset = n),
          (e.components || (e.components = [])).push(t.index);
      }
      function zv(e, t, n) {
        if (n) {
          if (t.exportAs)
            for (let s = 0; s < t.exportAs.length; s++) n[t.exportAs[s]] = e;
          hn(t) && (n[""] = e);
        }
      }
      function Wv(e, t, n, s, o) {
        e.data[s] = o;
        const u = o.factory || (o.factory = pn(o.type)),
          d = new Jt(u, hn(o), bt);
        (e.blueprint[s] = d),
          (n[s] = d),
          (function $v(e, t, n, s, o) {
            const u = o.hostBindings;
            if (u) {
              let d = e.hostBindingOpCodes;
              null === d && (d = e.hostBindingOpCodes = []);
              const h = ~t.index;
              (function jv(e) {
                let t = e.length;
                for (; t > 0; ) {
                  const n = e[--t];
                  if ("number" == typeof n && n < 0) return n;
                }
                return 0;
              })(d) != h && d.push(h),
                d.push(n, s, u);
            }
          })(e, t, s, Qn(e, n, o.hostVars, Fe), o);
      }
      function Kr(e, t, n, s, o, u) {
        const d = mn(e, t);
        !(function Ah(e, t, n, s, o, u, d) {
          if (null == u) e.removeAttribute(t, o, n);
          else {
            const h = null == d ? K(u) : d(u, s || "", o);
            e.setAttribute(t, o, h, n);
          }
        })(t[11], d, u, e.value, n, s, o);
      }
      function Kv(e, t, n, s, o, u) {
        const d = u[t];
        if (null !== d) {
          const h = s.setInput;
          for (let m = 0; m < d.length; ) {
            const D = d[m++],
              C = d[m++],
              b = d[m++];
            null !== h ? s.setInput(n, b, D, C) : (n[C] = b);
          }
        }
      }
      function Yv(e, t, n) {
        let s = null,
          o = 0;
        for (; o < n.length; ) {
          const u = n[o];
          if (0 !== u)
            if (5 !== u) {
              if ("number" == typeof u) break;
              if (e.hasOwnProperty(u)) {
                null === s && (s = []);
                const d = e[u];
                for (let h = 0; h < d.length; h += 2)
                  if (d[h] === t) {
                    s.push(u, d[h + 1], n[o + 1]);
                    break;
                  }
              }
              o += 2;
            } else o += 2;
          else o += 4;
        }
        return s;
      }
      function Dg(e, t, n, s) {
        return [e, !0, !1, t, null, 0, s, n, null, null];
      }
      function Xv(e, t) {
        const n = $t(t, e);
        if (Wn(n)) {
          const s = n[1];
          48 & n[2] ? eo(s, n, s.template, n[8]) : n[5] > 0 && Rh(n);
        }
      }
      function Rh(e) {
        for (let s = Go(e); null !== s; s = Wo(s))
          for (let o = 10; o < s.length; o++) {
            const u = s[o];
            if (Wn(u))
              if (512 & u[2]) {
                const d = u[1];
                eo(d, u, d.template, u[8]);
              } else u[5] > 0 && Rh(u);
          }
        const n = e[1].components;
        if (null !== n)
          for (let s = 0; s < n.length; s++) {
            const o = $t(n[s], e);
            Wn(o) && o[5] > 0 && Rh(o);
          }
      }
      function Jv(e, t) {
        const n = $t(t, e),
          s = n[1];
        (function eD(e, t) {
          for (let n = t.length; n < e.blueprint.length; n++)
            t.push(e.blueprint[n]);
        })(s, n),
          Ea(s, n, n[8]);
      }
      function bd(e, t) {
        return e[13] ? (e[14][4] = t) : (e[13] = t), (e[14] = t), t;
      }
      function Ph(e) {
        for (; e; ) {
          e[2] |= 32;
          const t = zo(e);
          if (Ss(e) && !t) return e;
          e = t;
        }
        return null;
      }
      function Id(e, t, n, s = !0) {
        const o = t[10];
        o.begin && o.begin();
        try {
          eo(e, t, e.template, n);
        } catch (d) {
          throw (s && Cg(t, d), d);
        } finally {
          o.end && o.end();
        }
      }
      function Nh(e, t, n) {
        So(0), t(e, n);
      }
      function _g(e) {
        return e[7] || (e[7] = []);
      }
      function Eg(e) {
        return e.cleanup || (e.cleanup = []);
      }
      function Cg(e, t) {
        const n = e[9],
          s = n ? n.get(Qs, null) : null;
        s && s.handleError(t);
      }
      function Oh(e, t, n, s, o) {
        for (let u = 0; u < n.length; ) {
          const d = n[u++],
            h = n[u++],
            m = t[d],
            D = e.data[d];
          null !== D.setInput ? D.setInput(m, o, s, h) : (m[h] = o);
        }
      }
      function Td(e, t, n) {
        let s = n ? e.styles : null,
          o = n ? e.classes : null,
          u = 0;
        if (null !== t)
          for (let d = 0; d < t.length; d++) {
            const h = t[d];
            "number" == typeof h
              ? (u = h)
              : 1 == u
              ? (o = Ve(o, h))
              : 2 == u && (s = Ve(s, h + ": " + t[++d] + ";"));
          }
        n ? (e.styles = s) : (e.stylesWithoutHost = s),
          n ? (e.classes = o) : (e.classesWithoutHost = o);
      }
      function Md(e, t, n, s, o = !1) {
        for (; null !== n; ) {
          const u = t[n.index];
          if ((null !== u && s.push(kt(u)), Rt(u)))
            for (let h = 10; h < u.length; h++) {
              const m = u[h],
                D = m[1].firstChild;
              null !== D && Md(m[1], m, D, s);
            }
          const d = n.type;
          if (8 & d) Md(e, t, n.child, s);
          else if (32 & d) {
            const h = Pl(n, t);
            let m;
            for (; (m = h()); ) s.push(m);
          } else if (16 & d) {
            const h = kc(t, n);
            if (Array.isArray(h)) s.push(...h);
            else {
              const m = zo(t[16]);
              Md(m[1], m, h, s, !0);
            }
          }
          n = o ? n.projectionNext : n.next;
        }
        return s;
      }
      class fu {
        get rootNodes() {
          const t = this._lView,
            n = t[1];
          return Md(n, t, n.firstChild, []);
        }
        constructor(t, n) {
          (this._lView = t),
            (this._cdRefInjectingView = n),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get context() {
          return this._lView[8];
        }
        set context(t) {
          this._lView[8] = t;
        }
        get destroyed() {
          return 128 == (128 & this._lView[2]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const t = this._lView[3];
            if (Rt(t)) {
              const n = t[8],
                s = n ? n.indexOf(this) : -1;
              s > -1 && (qo(t, s), Fs(n, s));
            }
            this._attachedToViewContainer = !1;
          }
          Mc(this._lView[1], this._lView);
        }
        onDestroy(t) {
          ft(this._lView[1], this._lView, null, t);
        }
        markForCheck() {
          Ph(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[2] &= -65;
        }
        reattach() {
          this._lView[2] |= 64;
        }
        detectChanges() {
          Id(this._lView[1], this._lView, this.context);
        }
        checkNoChanges() {}
        attachToViewContainerRef() {
          if (this._appRef) throw new U(902, !1);
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          (this._appRef = null),
            (function Ic(e, t) {
              Hs(e, t, t[11], 2, null, null);
            })(this._lView[1], this._lView);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer) throw new U(902, !1);
          this._appRef = t;
        }
      }
      class tD extends fu {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          const t = this._view;
          Id(t[1], t, t[8], !1);
        }
        checkNoChanges() {}
        get context() {
          return null;
        }
      }
      class Sg extends Ys {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const n = je(t);
          return new hu(n, this.ngModule);
        }
      }
      function bg(e) {
        const t = [];
        for (let n in e)
          e.hasOwnProperty(n) && t.push({ propName: e[n], templateName: n });
        return t;
      }
      class rD {
        constructor(t, n) {
          (this.injector = t), (this.parentInjector = n);
        }
        get(t, n, s) {
          s = vs(s);
          const o = this.injector.get(t, ma, s);
          return o !== ma || n === ma ? o : this.parentInjector.get(t, n, s);
        }
      }
      class hu extends ad {
        get inputs() {
          return bg(this.componentDef.inputs);
        }
        get outputs() {
          return bg(this.componentDef.outputs);
        }
        constructor(t, n) {
          super(),
            (this.componentDef = t),
            (this.ngModule = n),
            (this.componentType = t.type),
            (this.selector = (function _h(e) {
              return e.map(Dh).join(",");
            })(t.selectors)),
            (this.ngContentSelectors = t.ngContentSelectors
              ? t.ngContentSelectors
              : []),
            (this.isBoundToModule = !!n);
        }
        create(t, n, s, o) {
          let u = (o = o || this.ngModule) instanceof Pi ? o : o?.injector;
          u &&
            null !== this.componentDef.getStandaloneInjector &&
            (u = this.componentDef.getStandaloneInjector(u) || u);
          const d = u ? new rD(t, u) : t,
            h = d.get(ud, null);
          if (null === h) throw new U(407, !1);
          const m = d.get(lh, null),
            D = h.createRenderer(null, this.componentDef),
            C = this.componentDef.selectors[0][0] || "div",
            b = s
              ? (function qr(e, t, n) {
                  return e.selectRootElement(t, n === sn.ShadowDom);
                })(D, s, this.componentDef.encapsulation)
              : bc(
                  D,
                  C,
                  (function nD(e) {
                    const t = e.toLowerCase();
                    return "svg" === t ? "svg" : "math" === t ? "math" : null;
                  })(C)
                ),
            M = this.componentDef.onPush ? 288 : 272,
            P = Bn(0, null, null, 1, 0, null, null, null, null, null),
            k = jn(null, P, null, M, null, null, h, D, m, d, null);
          let G, ne;
          Xi(k);
          try {
            const ue = this.componentDef;
            let Ee,
              z = null;
            ue.findHostDirectiveDefs
              ? ((Ee = []),
                (z = new Map()),
                ue.findHostDirectiveDefs(ue, Ee, z),
                Ee.push(ue))
              : (Ee = [ue]);
            const Le = (function sD(e, t) {
                const n = e[1];
                return (e[22] = t), Fi(n, 22, 2, "#host", null);
              })(k, b),
              It = (function oD(e, t, n, s, o, u, d, h) {
                const m = o[1];
                !(function aD(e, t, n, s) {
                  for (const o of e)
                    t.mergedAttrs = yi(t.mergedAttrs, o.hostAttrs);
                  null !== t.mergedAttrs &&
                    (Td(t, t.mergedAttrs, !0), null !== n && Bc(s, n, t));
                })(s, e, t, d);
                const D = u.createRenderer(t, n),
                  C = jn(
                    o,
                    jt(n),
                    null,
                    n.onPush ? 32 : 16,
                    o[e.index],
                    e,
                    u,
                    D,
                    h || null,
                    null,
                    null
                  );
                return (
                  m.firstCreatePass && Mh(m, e, s.length - 1),
                  bd(o, C),
                  (o[e.index] = C)
                );
              })(Le, b, ue, Ee, k, h, D);
            (ne = yo(P, 22)),
              b &&
                (function uD(e, t, n, s) {
                  if (s) Vu(e, n, ["ng-version", uh.full]);
                  else {
                    const { attrs: o, classes: u } = (function ou(e) {
                      const t = [],
                        n = [];
                      let s = 1,
                        o = 2;
                      for (; s < e.length; ) {
                        let u = e[s];
                        if ("string" == typeof u)
                          2 === o
                            ? "" !== u && t.push(u, e[++s])
                            : 8 === o && n.push(u);
                        else {
                          if (!Ct(o)) break;
                          o = u;
                        }
                        s++;
                      }
                      return { attrs: t, classes: n };
                    })(t.selectors[0]);
                    o && Vu(e, n, o),
                      u && u.length > 0 && jc(e, n, u.join(" "));
                  }
                })(D, ue, b, s),
              void 0 !== n &&
                (function cD(e, t, n) {
                  const s = (e.projection = []);
                  for (let o = 0; o < t.length; o++) {
                    const u = n[o];
                    s.push(null != u ? Array.from(u) : null);
                  }
                })(ne, this.ngContentSelectors, n),
              (G = (function lD(e, t, n, s, o, u) {
                const d = mt(),
                  h = o[1],
                  m = mn(d, o);
                yg(h, o, d, n, null, s);
                for (let C = 0; C < n.length; C++)
                  qt(Ji(o, h, d.directiveStart + C, d), o);
                vg(h, o, d), m && qt(m, o);
                const D = Ji(o, h, d.directiveStart + d.componentOffset, d);
                if (((e[8] = o[8] = D), null !== u)) for (const C of u) C(D, t);
                return _e(h, d, e), D;
              })(It, ue, Ee, z, k, [dD])),
              Ea(P, k, null);
          } finally {
            Mo();
          }
          return new iD(this.componentType, G, Wr(ne, k), k, ne);
        }
      }
      class iD extends od {
        constructor(t, n, s, o, u) {
          super(),
            (this.location = s),
            (this._rootLView = o),
            (this._tNode = u),
            (this.instance = n),
            (this.hostView = this.changeDetectorRef = new tD(o)),
            (this.componentType = t);
        }
        setInput(t, n) {
          const s = this._tNode.inputs;
          let o;
          if (null !== s && (o = s[t])) {
            const u = this._rootLView;
            Oh(u[1], u, o, t, n), wa(u, this._tNode.index);
          }
        }
        get injector() {
          return new Kn(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }
      function dD() {
        const e = mt();
        Ke(B()[1], e);
      }
      function Fh(e) {
        let t = (function Ig(e) {
            return Object.getPrototypeOf(e.prototype).constructor;
          })(e.type),
          n = !0;
        const s = [e];
        for (; t; ) {
          let o;
          if (hn(e)) o = t.ɵcmp || t.ɵdir;
          else {
            if (t.ɵcmp) throw new U(903, !1);
            o = t.ɵdir;
          }
          if (o) {
            if (n) {
              s.push(o);
              const d = e;
              (d.inputs = xh(e.inputs)),
                (d.declaredInputs = xh(e.declaredInputs)),
                (d.outputs = xh(e.outputs));
              const h = o.hostBindings;
              h && gD(e, h);
              const m = o.viewQuery,
                D = o.contentQueries;
              if (
                (m && hD(e, m),
                D && pD(e, D),
                Se(e.inputs, o.inputs),
                Se(e.declaredInputs, o.declaredInputs),
                Se(e.outputs, o.outputs),
                hn(o) && o.data.animation)
              ) {
                const C = e.data;
                C.animation = (C.animation || []).concat(o.data.animation);
              }
            }
            const u = o.features;
            if (u)
              for (let d = 0; d < u.length; d++) {
                const h = u[d];
                h && h.ngInherit && h(e), h === Fh && (n = !1);
              }
          }
          t = Object.getPrototypeOf(t);
        }
        !(function fD(e) {
          let t = 0,
            n = null;
          for (let s = e.length - 1; s >= 0; s--) {
            const o = e[s];
            (o.hostVars = t += o.hostVars),
              (o.hostAttrs = yi(o.hostAttrs, (n = yi(n, o.hostAttrs))));
          }
        })(s);
      }
      function xh(e) {
        return e === on ? {} : e === qe ? [] : e;
      }
      function hD(e, t) {
        const n = e.viewQuery;
        e.viewQuery = n
          ? (s, o) => {
              t(s, o), n(s, o);
            }
          : t;
      }
      function pD(e, t) {
        const n = e.contentQueries;
        e.contentQueries = n
          ? (s, o, u) => {
              t(s, o, u), n(s, o, u);
            }
          : t;
      }
      function gD(e, t) {
        const n = e.hostBindings;
        e.hostBindings = n
          ? (s, o) => {
              t(s, o), n(s, o);
            }
          : t;
      }
      let Ad = null;
      function to() {
        if (!Ad) {
          const e = pt.Symbol;
          if (e && e.iterator) Ad = e.iterator;
          else {
            const t = Object.getOwnPropertyNames(Map.prototype);
            for (let n = 0; n < t.length; ++n) {
              const s = t[n];
              "entries" !== s &&
                "size" !== s &&
                Map.prototype[s] === Map.prototype.entries &&
                (Ad = s);
            }
          }
        }
        return Ad;
      }
      function pu(e) {
        return (
          !!Lh(e) && (Array.isArray(e) || (!(e instanceof Map) && to() in e))
        );
      }
      function Lh(e) {
        return null !== e && ("function" == typeof e || "object" == typeof e);
      }
      function vn(e, t, n) {
        return !Object.is(e[t], n) && ((e[t] = n), !0);
      }
      function kh(e, t, n, s) {
        const o = B();
        return vn(o, gi(), t) && (Ge(), Kr(g(), o, e, t, n, s)), kh;
      }
      function jg(e, t, n, s, o, u, d, h) {
        const m = B(),
          D = Ge(),
          C = e + 22,
          b = D.firstCreatePass
            ? (function bD(e, t, n, s, o, u, d, h, m) {
                const D = t.consts,
                  C = Fi(t, e, 4, d || null, er(D, h));
                Th(t, n, C, er(D, m)), Ke(t, C);
                const b = (C.tViews = Bn(
                  2,
                  C,
                  s,
                  o,
                  u,
                  t.directiveRegistry,
                  t.pipeRegistry,
                  null,
                  t.schemas,
                  D
                ));
                return (
                  null !== t.queries &&
                    (t.queries.template(t, C),
                    (b.queries = t.queries.embeddedTView(C))),
                  C
                );
              })(C, D, m, t, n, s, o, u, d)
            : D.data[C];
        Fn(b, !1);
        const M = m[11].createComment("");
        Yo(D, m, M, b),
          qt(M, m),
          bd(m, (m[C] = Dg(M, m, M, b))),
          oi(b) && Ce(D, m, b),
          null != d && Ye(m, b, h);
      }
      function $h(e, t, n) {
        const s = B();
        return (
          vn(s, gi(), t) &&
            (function nn(e, t, n, s, o, u, d, h) {
              const m = mn(t, n);
              let C,
                D = t.inputs;
              !h && null != D && (C = D[s])
                ? (Oh(e, n, C, s, o), si(t) && wa(n, t.index))
                : 3 & t.type &&
                  ((s = (function Un(e) {
                    return "class" === e
                      ? "className"
                      : "for" === e
                      ? "htmlFor"
                      : "formaction" === e
                      ? "formAction"
                      : "innerHtml" === e
                      ? "innerHTML"
                      : "readonly" === e
                      ? "readOnly"
                      : "tabindex" === e
                      ? "tabIndex"
                      : e;
                  })(s)),
                  (o = null != d ? d(o, t.value || "", s) : o),
                  u.setProperty(m, s, o));
            })(Ge(), g(), s, e, t, s[11], n, !1),
          $h
        );
      }
      function jh(e, t, n, s, o) {
        const d = o ? "class" : "style";
        Oh(e, n, t.inputs[d], d, s);
      }
      function Pd(e, t, n, s) {
        const o = B(),
          u = Ge(),
          d = 22 + e,
          h = o[11],
          m = (o[d] = bc(
            h,
            t,
            (function ce() {
              return Ne.lFrame.currentNamespace;
            })()
          )),
          D = u.firstCreatePass
            ? (function MD(e, t, n, s, o, u, d) {
                const h = t.consts,
                  D = Fi(t, e, 2, o, er(h, u));
                return (
                  Th(t, n, D, er(h, d)),
                  null !== D.attrs && Td(D, D.attrs, !1),
                  null !== D.mergedAttrs && Td(D, D.mergedAttrs, !0),
                  null !== t.queries && t.queries.elementStart(t, D),
                  D
                );
              })(d, u, o, 0, t, n, s)
            : u.data[d];
        return (
          Fn(D, !0),
          Bc(h, m, D),
          32 != (32 & D.flags) && Yo(u, o, m, D),
          0 ===
            (function $u() {
              return Ne.lFrame.elementDepthCount;
            })() && qt(m, o),
          (function Do() {
            Ne.lFrame.elementDepthCount++;
          })(),
          oi(D) && (Ce(u, o, D), _e(u, D, o)),
          null !== s && Ye(o, D),
          Pd
        );
      }
      function Nd() {
        let e = mt();
        pi()
          ? (function Qi() {
              Ne.lFrame.isParent = !1;
            })()
          : ((e = e.parent), Fn(e, !1));
        const t = e;
        !(function Yi() {
          Ne.lFrame.elementDepthCount--;
        })();
        const n = Ge();
        return (
          n.firstCreatePass && (Ke(n, e), yr(e) && n.queries.elementEnd(e)),
          null != t.classesWithoutHost &&
            (function Ro(e) {
              return 0 != (8 & e.flags);
            })(t) &&
            jh(n, t, B(), t.classesWithoutHost, !0),
          null != t.stylesWithoutHost &&
            (function al(e) {
              return 0 != (16 & e.flags);
            })(t) &&
            jh(n, t, B(), t.stylesWithoutHost, !1),
          Nd
        );
      }
      function Bh(e, t, n, s) {
        return Pd(e, t, n, s), Nd(), Bh;
      }
      function Vh(e) {
        return !!e && "function" == typeof e.then;
      }
      function Ug(e) {
        return !!e && "function" == typeof e.subscribe;
      }
      const Hg = Ug;
      function zh(e, t, n, s) {
        const o = B(),
          u = Ge(),
          d = mt();
        return (
          (function zg(e, t, n, s, o, u, d) {
            const h = oi(s),
              D = e.firstCreatePass && Eg(e),
              C = t[8],
              b = _g(t);
            let M = !0;
            if (3 & s.type || d) {
              const G = mn(s, t),
                ne = d ? d(G) : G,
                ue = b.length,
                Ee = d ? Le => d(kt(Le[s.index])) : s.index;
              let z = null;
              if (
                (!d &&
                  h &&
                  (z = (function PD(e, t, n, s) {
                    const o = e.cleanup;
                    if (null != o)
                      for (let u = 0; u < o.length - 1; u += 2) {
                        const d = o[u];
                        if (d === n && o[u + 1] === s) {
                          const h = t[7],
                            m = o[u + 2];
                          return h.length > m ? h[m] : null;
                        }
                        "string" == typeof d && (u += 2);
                      }
                    return null;
                  })(e, t, o, s.index)),
                null !== z)
              )
                ((z.__ngLastListenerFn__ || z).__ngNextListenerFn__ = u),
                  (z.__ngLastListenerFn__ = u),
                  (M = !1);
              else {
                u = Wg(s, t, C, u, !1);
                const Le = n.listen(ne, o, u);
                b.push(u, Le), D && D.push(o, Ee, ue, ue + 1);
              }
            } else u = Wg(s, t, C, u, !1);
            const P = s.outputs;
            let k;
            if (M && null !== P && (k = P[o])) {
              const G = k.length;
              if (G)
                for (let ne = 0; ne < G; ne += 2) {
                  const It = t[k[ne]][k[ne + 1]].subscribe(u),
                    Bt = b.length;
                  b.push(u, It), D && D.push(o, s.index, Bt, -(Bt + 1));
                }
            }
          })(u, o, o[11], d, e, t, s),
          zh
        );
      }
      function Gg(e, t, n, s) {
        try {
          return !1 !== n(s);
        } catch (o) {
          return Cg(e, o), !1;
        }
      }
      function Wg(e, t, n, s, o) {
        return function u(d) {
          if (d === Function) return s;
          Ph(e.componentOffset > -1 ? $t(e.index, t) : t);
          let m = Gg(t, 0, s, d),
            D = u.__ngNextListenerFn__;
          for (; D; ) (m = Gg(t, 0, D, d) && m), (D = D.__ngNextListenerFn__);
          return o && !1 === m && (d.preventDefault(), (d.returnValue = !1)), m;
        };
      }
      function qg(e = 1) {
        return (function mi(e) {
          return (Ne.lFrame.contextLView = (function ol(e, t) {
            for (; e > 0; ) (t = t[15]), e--;
            return t;
          })(e, Ne.lFrame.contextLView))[8];
        })(e);
      }
      function Od(e, t) {
        return (e << 17) | (t << 2);
      }
      function fs(e) {
        return (e >> 17) & 32767;
      }
      function Wh(e) {
        return 2 | e;
      }
      function ro(e) {
        return (131068 & e) >> 2;
      }
      function qh(e, t) {
        return (-131069 & e) | (t << 2);
      }
      function Kh(e) {
        return 1 | e;
      }
      function rm(e, t, n, s, o) {
        const u = e[n + 1],
          d = null === t;
        let h = s ? fs(u) : ro(u),
          m = !1;
        for (; 0 !== h && (!1 === m || d); ) {
          const C = e[h + 1];
          BD(e[h], t) && ((m = !0), (e[h + 1] = s ? Kh(C) : Wh(C))),
            (h = s ? fs(C) : ro(C));
        }
        m && (e[n + 1] = s ? Wh(u) : Kh(u));
      }
      function BD(e, t) {
        return (
          null === e ||
          null == t ||
          (Array.isArray(e) ? e[1] : e) === t ||
          (!(!Array.isArray(e) || "string" != typeof t) && Ei(e, t) >= 0)
        );
      }
      function Yh(e, t) {
        return (
          (function Tr(e, t, n, s) {
            const o = B(),
              u = Ge(),
              d = (function nr(e) {
                const t = Ne.lFrame,
                  n = t.bindingIndex;
                return (t.bindingIndex = t.bindingIndex + e), n;
              })(2);
            u.firstUpdatePass &&
              (function fm(e, t, n, s) {
                const o = e.data;
                if (null === o[n + 1]) {
                  const u = o[p()],
                    d = (function dm(e, t) {
                      return t >= e.expandoStartIndex;
                    })(e, n);
                  (function mm(e, t) {
                    return 0 != (e.flags & (t ? 8 : 16));
                  })(u, s) &&
                    null === t &&
                    !d &&
                    (t = !1),
                    (t = (function YD(e, t, n, s) {
                      const o = (function Co(e) {
                        const t = Ne.lFrame.currentDirectiveIndex;
                        return -1 === t ? null : e[t];
                      })(e);
                      let u = s ? t.residualClasses : t.residualStyles;
                      if (null === o)
                        0 === (s ? t.classBindings : t.styleBindings) &&
                          ((n = mu((n = Qh(null, e, t, n, s)), t.attrs, s)),
                          (u = null));
                      else {
                        const d = t.directiveStylingLast;
                        if (-1 === d || e[d] !== o)
                          if (((n = Qh(o, e, t, n, s)), null === u)) {
                            let m = (function QD(e, t, n) {
                              const s = n ? t.classBindings : t.styleBindings;
                              if (0 !== ro(s)) return e[fs(s)];
                            })(e, t, s);
                            void 0 !== m &&
                              Array.isArray(m) &&
                              ((m = Qh(null, e, t, m[1], s)),
                              (m = mu(m, t.attrs, s)),
                              (function ZD(e, t, n, s) {
                                e[fs(n ? t.classBindings : t.styleBindings)] =
                                  s;
                              })(e, t, s, m));
                          } else
                            u = (function XD(e, t, n) {
                              let s;
                              const o = t.directiveEnd;
                              for (
                                let u = 1 + t.directiveStylingLast;
                                u < o;
                                u++
                              )
                                s = mu(s, e[u].hostAttrs, n);
                              return mu(s, t.attrs, n);
                            })(e, t, s);
                      }
                      return (
                        void 0 !== u &&
                          (s
                            ? (t.residualClasses = u)
                            : (t.residualStyles = u)),
                        n
                      );
                    })(o, u, t, s)),
                    (function $D(e, t, n, s, o, u) {
                      let d = u ? t.classBindings : t.styleBindings,
                        h = fs(d),
                        m = ro(d);
                      e[s] = n;
                      let C,
                        D = !1;
                      if (
                        (Array.isArray(n)
                          ? ((C = n[1]),
                            (null === C || Ei(n, C) > 0) && (D = !0))
                          : (C = n),
                        o)
                      )
                        if (0 !== m) {
                          const M = fs(e[h + 1]);
                          (e[s + 1] = Od(M, h)),
                            0 !== M && (e[M + 1] = qh(e[M + 1], s)),
                            (e[h + 1] = (function LD(e, t) {
                              return (131071 & e) | (t << 17);
                            })(e[h + 1], s));
                        } else
                          (e[s + 1] = Od(h, 0)),
                            0 !== h && (e[h + 1] = qh(e[h + 1], s)),
                            (h = s);
                      else
                        (e[s + 1] = Od(m, 0)),
                          0 === h ? (h = s) : (e[m + 1] = qh(e[m + 1], s)),
                          (m = s);
                      D && (e[s + 1] = Wh(e[s + 1])),
                        rm(e, C, s, !0),
                        rm(e, C, s, !1),
                        (function jD(e, t, n, s, o) {
                          const u = o ? e.residualClasses : e.residualStyles;
                          null != u &&
                            "string" == typeof t &&
                            Ei(u, t) >= 0 &&
                            (n[s + 1] = Kh(n[s + 1]));
                        })(t, C, e, s, u),
                        (d = Od(h, m)),
                        u ? (t.classBindings = d) : (t.styleBindings = d);
                    })(o, u, t, n, d, s);
                }
              })(u, e, d, s),
              t !== Fe &&
                vn(o, d, t) &&
                (function pm(e, t, n, s, o, u, d, h) {
                  if (!(3 & t.type)) return;
                  const m = e.data,
                    D = m[h + 1],
                    C = (function kD(e) {
                      return 1 == (1 & e);
                    })(D)
                      ? gm(m, t, n, o, ro(D), d)
                      : void 0;
                  Fd(C) ||
                    (Fd(u) ||
                      ((function xD(e) {
                        return 2 == (2 & e);
                      })(D) &&
                        (u = gm(m, null, n, o, h, d))),
                    (function zf(e, t, n, s, o) {
                      if (t) o ? e.addClass(n, s) : e.removeClass(n, s);
                      else {
                        let u = -1 === s.indexOf("-") ? void 0 : Cr.DashCase;
                        null == o
                          ? e.removeStyle(n, s, u)
                          : ("string" == typeof o &&
                              o.endsWith("!important") &&
                              ((o = o.slice(0, -10)), (u |= Cr.Important)),
                            e.setStyle(n, s, o, u));
                      }
                    })(s, d, jr(p(), n), o, u));
                })(
                  u,
                  u.data[p()],
                  o,
                  o[11],
                  e,
                  (o[d + 1] = (function t_(e, t) {
                    return (
                      null == e ||
                        ("string" == typeof t
                          ? (e += t)
                          : "object" == typeof e && (e = we(Gr(e)))),
                      e
                    );
                  })(t, n)),
                  s,
                  d
                );
          })(e, t, null, !0),
          Yh
        );
      }
      function Qh(e, t, n, s, o) {
        let u = null;
        const d = n.directiveEnd;
        let h = n.directiveStylingLast;
        for (
          -1 === h ? (h = n.directiveStart) : h++;
          h < d && ((u = t[h]), (s = mu(s, u.hostAttrs, o)), u !== e);

        )
          h++;
        return null !== e && (n.directiveStylingLast = h), s;
      }
      function mu(e, t, n) {
        const s = n ? 1 : 2;
        let o = -1;
        if (null !== t)
          for (let u = 0; u < t.length; u++) {
            const d = t[u];
            "number" == typeof d
              ? (o = d)
              : o === s &&
                (Array.isArray(e) || (e = void 0 === e ? [] : ["", e]),
                En(e, d, !!n || t[++u]));
          }
        return void 0 === e ? null : e;
      }
      function gm(e, t, n, s, o, u) {
        const d = null === t;
        let h;
        for (; o > 0; ) {
          const m = e[o],
            D = Array.isArray(m),
            C = D ? m[1] : m,
            b = null === C;
          let M = n[o + 1];
          M === Fe && (M = b ? qe : void 0);
          let P = b ? vl(M, s) : C === s ? M : void 0;
          if ((D && !Fd(P) && (P = vl(m, s)), Fd(P) && ((h = P), d))) return h;
          const k = e[o + 1];
          o = d ? fs(k) : ro(k);
        }
        if (null !== t) {
          let m = u ? t.residualClasses : t.residualStyles;
          null != m && (h = vl(m, s));
        }
        return h;
      }
      function Fd(e) {
        return void 0 !== e;
      }
      function ym(e, t = "") {
        const n = B(),
          s = Ge(),
          o = e + 22,
          u = s.firstCreatePass ? Fi(s, o, 1, t, null) : s.data[o],
          d = (n[o] = (function Sc(e, t) {
            return e.createText(t);
          })(n[11], t));
        Yo(s, n, d, u), Fn(u, !1);
      }
      function Zh(e) {
        return xd("", e, ""), Zh;
      }
      function xd(e, t, n) {
        const s = B(),
          o = (function Sa(e, t, n, s) {
            return vn(e, gi(), n) ? t + K(n) + s : Fe;
          })(s, e, t, n);
        return (
          o !== Fe &&
            (function ki(e, t, n) {
              const s = jr(t, e);
              !(function Lf(e, t, n) {
                e.setValue(t, n);
              })(e[11], s, n);
            })(s, p(), o),
          xd
        );
      }
      const io = void 0;
      var E_ = [
        "en",
        [["a", "p"], ["AM", "PM"], io],
        [["AM", "PM"], io, io],
        [
          ["S", "M", "T", "W", "T", "F", "S"],
          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
        ],
        io,
        [
          ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ]
        ],
        io,
        [
          ["B", "A"],
          ["BC", "AD"],
          ["Before Christ", "Anno Domini"]
        ],
        0,
        [6, 0],
        ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
        ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
        ["{1}, {0}", io, "{1} 'at' {0}", io],
        [
          ".",
          ",",
          ";",
          "%",
          "+",
          "-",
          "E",
          "\xd7",
          "\u2030",
          "\u221e",
          "NaN",
          ":"
        ],
        ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"],
        "USD",
        "$",
        "US Dollar",
        {},
        "ltr",
        function __(e) {
          const n = Math.floor(Math.abs(e)),
            s = e.toString().replace(/^[^.]*\.?/, "").length;
          return 1 === n && 0 === s ? 1 : 5;
        }
      ];
      let Oa = {};
      function Xh(e) {
        const t = (function w_(e) {
          return e.toLowerCase().replace(/_/g, "-");
        })(e);
        let n = $m(t);
        if (n) return n;
        const s = t.split("-")[0];
        if (((n = $m(s)), n)) return n;
        if ("en" === s) return E_;
        throw new U(701, !1);
      }
      function km(e) {
        return Xh(e)[Me.PluralCase];
      }
      function $m(e) {
        return (
          e in Oa ||
            (Oa[e] =
              pt.ng &&
              pt.ng.common &&
              pt.ng.common.locales &&
              pt.ng.common.locales[e]),
          Oa[e]
        );
      }
      var Me = (() => (
        ((Me = Me || {})[(Me.LocaleId = 0)] = "LocaleId"),
        (Me[(Me.DayPeriodsFormat = 1)] = "DayPeriodsFormat"),
        (Me[(Me.DayPeriodsStandalone = 2)] = "DayPeriodsStandalone"),
        (Me[(Me.DaysFormat = 3)] = "DaysFormat"),
        (Me[(Me.DaysStandalone = 4)] = "DaysStandalone"),
        (Me[(Me.MonthsFormat = 5)] = "MonthsFormat"),
        (Me[(Me.MonthsStandalone = 6)] = "MonthsStandalone"),
        (Me[(Me.Eras = 7)] = "Eras"),
        (Me[(Me.FirstDayOfWeek = 8)] = "FirstDayOfWeek"),
        (Me[(Me.WeekendRange = 9)] = "WeekendRange"),
        (Me[(Me.DateFormat = 10)] = "DateFormat"),
        (Me[(Me.TimeFormat = 11)] = "TimeFormat"),
        (Me[(Me.DateTimeFormat = 12)] = "DateTimeFormat"),
        (Me[(Me.NumberSymbols = 13)] = "NumberSymbols"),
        (Me[(Me.NumberFormats = 14)] = "NumberFormats"),
        (Me[(Me.CurrencyCode = 15)] = "CurrencyCode"),
        (Me[(Me.CurrencySymbol = 16)] = "CurrencySymbol"),
        (Me[(Me.CurrencyName = 17)] = "CurrencyName"),
        (Me[(Me.Currencies = 18)] = "Currencies"),
        (Me[(Me.Directionality = 19)] = "Directionality"),
        (Me[(Me.PluralCase = 20)] = "PluralCase"),
        (Me[(Me.ExtraData = 21)] = "ExtraData"),
        Me
      ))();
      const Fa = "en-US";
      let jm = Fa;
      function tp(e, t, n, s, o) {
        if (((e = le(e)), Array.isArray(e)))
          for (let u = 0; u < e.length; u++) tp(e[u], t, n, s, o);
        else {
          const u = Ge(),
            d = B();
          let h = Ai(e) ? e : le(e.provide),
            m = fa(e);
          const D = mt(),
            C = 1048575 & D.providerIndexes,
            b = D.directiveStart,
            M = D.providerIndexes >> 20;
          if (Ai(e) || !e.multi) {
            const P = new Jt(m, o, bt),
              k = rp(h, t, o ? C : C + M, b);
            -1 === k
              ? (Di(_r(D, d), u, h),
                np(u, e, t.length),
                t.push(h),
                D.directiveStart++,
                D.directiveEnd++,
                o && (D.providerIndexes += 1048576),
                n.push(P),
                d.push(P))
              : ((n[k] = P), (d[k] = P));
          } else {
            const P = rp(h, t, C + M, b),
              k = rp(h, t, C, C + M),
              ne = k >= 0 && n[k];
            if ((o && !ne) || (!o && !(P >= 0 && n[P]))) {
              Di(_r(D, d), u, h);
              const ue = (function DE(e, t, n, s, o) {
                const u = new Jt(e, n, bt);
                return (
                  (u.multi = []),
                  (u.index = t),
                  (u.componentProviders = 0),
                  cy(u, o, s && !n),
                  u
                );
              })(o ? vE : yE, n.length, o, s, m);
              !o && ne && (n[k].providerFactory = ue),
                np(u, e, t.length, 0),
                t.push(h),
                D.directiveStart++,
                D.directiveEnd++,
                o && (D.providerIndexes += 1048576),
                n.push(ue),
                d.push(ue);
            } else np(u, e, P > -1 ? P : k, cy(n[o ? k : P], m, !o && s));
            !o && s && ne && n[k].componentProviders++;
          }
        }
      }
      function np(e, t, n, s) {
        const o = Ai(t),
          u = (function nh(e) {
            return !!e.useClass;
          })(t);
        if (o || u) {
          const m = (u ? le(t.useClass) : t).prototype.ngOnDestroy;
          if (m) {
            const D = e.destroyHooks || (e.destroyHooks = []);
            if (!o && t.multi) {
              const C = D.indexOf(n);
              -1 === C ? D.push(n, [s, m]) : D[C + 1].push(s, m);
            } else D.push(n, m);
          }
        }
      }
      function cy(e, t, n) {
        return n && e.componentProviders++, e.multi.push(t) - 1;
      }
      function rp(e, t, n, s) {
        for (let o = n; o < s; o++) if (t[o] === e) return o;
        return -1;
      }
      function yE(e, t, n, s) {
        return ip(this.multi, []);
      }
      function vE(e, t, n, s) {
        const o = this.multi;
        let u;
        if (this.providerFactory) {
          const d = this.providerFactory.componentProviders,
            h = Ji(n, n[1], this.providerFactory.index, s);
          (u = h.slice(0, d)), ip(o, u);
          for (let m = d; m < h.length; m++) u.push(h[m]);
        } else (u = []), ip(o, u);
        return u;
      }
      function ip(e, t) {
        for (let n = 0; n < e.length; n++) t.push((0, e[n])());
        return t;
      }
      function dy(e, t = []) {
        return n => {
          n.providersResolver = (s, o) =>
            (function mE(e, t, n) {
              const s = Ge();
              if (s.firstCreatePass) {
                const o = hn(e);
                tp(n, s.data, s.blueprint, o, !0),
                  tp(t, s.data, s.blueprint, o, !1);
              }
            })(s, o ? o(e) : e, t);
        };
      }
      class xa {}
      class fy {}
      function _E(e, t) {
        return new hy(e, t ?? null);
      }
      class hy extends xa {
        constructor(t, n) {
          super(),
            (this._parent = n),
            (this._bootstrapComponents = []),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new Sg(this));
          const s = Xt(t);
          (this._bootstrapComponents = Yn(s.bootstrap)),
            (this._r3Injector = wd(
              t,
              n,
              [
                { provide: xa, useValue: this },
                { provide: Ys, useValue: this.componentFactoryResolver }
              ],
              we(t),
              new Set(["environment"])
            )),
            this._r3Injector.resolveInjectorInitializers(),
            (this.instance = this._r3Injector.get(t));
        }
        get injector() {
          return this._r3Injector;
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(),
            this.destroyCbs.forEach(n => n()),
            (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class sp extends fy {
        constructor(t) {
          super(), (this.moduleType = t);
        }
        create(t) {
          return new hy(this.moduleType, t);
        }
      }
      class EE extends xa {
        constructor(t, n, s) {
          super(),
            (this.componentFactoryResolver = new Sg(this)),
            (this.instance = null);
          const o = new sd(
            [
              ...t,
              { provide: xa, useValue: this },
              { provide: Ys, useValue: this.componentFactoryResolver }
            ],
            n || Ri(),
            s,
            new Set(["environment"])
          );
          (this.injector = o), o.resolveInjectorInitializers();
        }
        destroy() {
          this.injector.destroy();
        }
        onDestroy(t) {
          this.injector.onDestroy(t);
        }
      }
      function op(e, t, n = null) {
        return new EE(e, t, n).injector;
      }
      let wE = (() => {
        class e {
          constructor(n) {
            (this._injector = n), (this.cachedInjectors = new Map());
          }
          getOrCreateStandaloneInjector(n) {
            if (!n.standalone) return null;
            if (!this.cachedInjectors.has(n.id)) {
              const s = Ws(0, n.type),
                o =
                  s.length > 0
                    ? op([s], this._injector, `Standalone[${n.type.name}]`)
                    : null;
              this.cachedInjectors.set(n.id, o);
            }
            return this.cachedInjectors.get(n.id);
          }
          ngOnDestroy() {
            try {
              for (const n of this.cachedInjectors.values())
                null !== n && n.destroy();
            } finally {
              this.cachedInjectors.clear();
            }
          }
        }
        return (
          (e.ɵprov = Gt({
            token: e,
            providedIn: "environment",
            factory: () => new e(Et(Pi))
          })),
          e
        );
      })();
      function py(e) {
        e.getStandaloneInjector = t =>
          t.get(wE).getOrCreateStandaloneInjector(e);
      }
      function lp(e) {
        return t => {
          setTimeout(e, void 0, t);
        };
      }
      const Xr = class KE extends v.x {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, n, s) {
          let o = t,
            u = n || (() => null),
            d = s;
          if (t && "object" == typeof t) {
            const m = t;
            (o = m.next?.bind(m)),
              (u = m.error?.bind(m)),
              (d = m.complete?.bind(m));
          }
          this.__isAsync && ((u = lp(u)), o && (o = lp(o)), d && (d = lp(d)));
          const h = super.subscribe({ next: o, error: u, complete: d });
          return t instanceof L.w0 && t.add(h), h;
        }
      };
      function YE() {
        return this._results[to()]();
      }
      class up {
        get changes() {
          return this._changes || (this._changes = new Xr());
        }
        constructor(t = !1) {
          (this._emitDistinctChangesOnly = t),
            (this.dirty = !0),
            (this._results = []),
            (this._changesDetected = !1),
            (this._changes = null),
            (this.length = 0),
            (this.first = void 0),
            (this.last = void 0);
          const n = to(),
            s = up.prototype;
          s[n] || (s[n] = YE);
        }
        get(t) {
          return this._results[t];
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, n) {
          return this._results.reduce(t, n);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t, n) {
          const s = this;
          s.dirty = !1;
          const o = (function Ln(e) {
            return e.flat(Number.POSITIVE_INFINITY);
          })(t);
          (this._changesDetected = !(function gf(e, t, n) {
            if (e.length !== t.length) return !1;
            for (let s = 0; s < e.length; s++) {
              let o = e[s],
                u = t[s];
              if ((n && ((o = n(o)), (u = n(u))), u !== o)) return !1;
            }
            return !0;
          })(s._results, o, n)) &&
            ((s._results = o),
            (s.length = o.length),
            (s.last = o[this.length - 1]),
            (s.first = o[0]));
        }
        notifyOnChanges() {
          this._changes &&
            (this._changesDetected || !this._emitDistinctChangesOnly) &&
            this._changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      let Su = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = XE), e;
      })();
      const QE = Su,
        ZE = class extends QE {
          constructor(t, n, s) {
            super(),
              (this._declarationLView = t),
              (this._declarationTContainer = n),
              (this.elementRef = s);
          }
          createEmbeddedView(t, n) {
            const s = this._declarationTContainer.tViews,
              o = jn(
                this._declarationLView,
                s,
                t,
                16,
                null,
                s.declTNode,
                null,
                null,
                null,
                null,
                n || null
              );
            o[17] = this._declarationLView[this._declarationTContainer.index];
            const d = this._declarationLView[19];
            return (
              null !== d && (o[19] = d.createEmbeddedView(s)),
              Ea(s, o, t),
              new fu(o)
            );
          }
        };
      function XE() {
        return Bd(mt(), B());
      }
      function Bd(e, t) {
        return 4 & e.type ? new ZE(t, e, Wr(e, t)) : null;
      }
      let Ud = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = JE), e;
      })();
      function JE() {
        return My(mt(), B());
      }
      const ew = Ud,
        Iy = class extends ew {
          constructor(t, n, s) {
            super(),
              (this._lContainer = t),
              (this._hostTNode = n),
              (this._hostLView = s);
          }
          get element() {
            return Wr(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new Kn(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = cl(this._hostTNode, this._hostLView);
            if (Gu(t)) {
              const n = un(t, this._hostLView),
                s = Po(t);
              return new Kn(n[1].data[s + 8], n);
            }
            return new Kn(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const n = Ty(this._lContainer);
            return (null !== n && n[t]) || null;
          }
          get length() {
            return this._lContainer.length - 10;
          }
          createEmbeddedView(t, n, s) {
            let o, u;
            "number" == typeof s
              ? (o = s)
              : null != s && ((o = s.index), (u = s.injector));
            const d = t.createEmbeddedView(n || {}, u);
            return this.insert(d, o), d;
          }
          createComponent(t, n, s, o, u) {
            const d =
              t &&
              !(function Os(e) {
                return "function" == typeof e;
              })(t);
            let h;
            if (d) h = n;
            else {
              const b = n || {};
              (h = b.index),
                (s = b.injector),
                (o = b.projectableNodes),
                (u = b.environmentInjector || b.ngModuleRef);
            }
            const m = d ? t : new hu(je(t)),
              D = s || this.parentInjector;
            if (!u && null == m.ngModule) {
              const M = (d ? D : this.parentInjector).get(Pi, null);
              M && (u = M);
            }
            const C = m.create(D, o, void 0, u);
            return this.insert(C.hostView, h), C;
          }
          insert(t, n) {
            const s = t._lView,
              o = s[1];
            if (
              (function vo(e) {
                return Rt(e[3]);
              })(s)
            ) {
              const C = this.indexOf(t);
              if (-1 !== C) this.detach(C);
              else {
                const b = s[3],
                  M = new Iy(b, b[6], b[3]);
                M.detach(M.indexOf(t));
              }
            }
            const u = this._adjustIndex(n),
              d = this._lContainer;
            !(function Tc(e, t, n, s) {
              const o = 10 + s,
                u = n.length;
              s > 0 && (n[o - 1][4] = t),
                s < u - 10
                  ? ((t[4] = n[o]), ec(n, 10 + s, t))
                  : (n.push(t), (t[4] = null)),
                (t[3] = n);
              const d = t[17];
              null !== d &&
                n !== d &&
                (function Nl(e, t) {
                  const n = e[9];
                  t[16] !== t[3][3][16] && (e[2] = !0),
                    null === n ? (e[9] = [t]) : n.push(t);
                })(d, t);
              const h = t[19];
              null !== h && h.insertView(e), (t[2] |= 64);
            })(o, s, d, u);
            const h = xl(u, d),
              m = s[11],
              D = Ko(m, d[7]);
            return (
              null !== D &&
                (function eg(e, t, n, s, o, u) {
                  (s[0] = o), (s[6] = t), Hs(e, s, n, 1, o, u);
                })(o, d[6], m, s, D, h),
              t.attachToViewContainerRef(),
              ec(cp(d), u, t),
              t
            );
          }
          move(t, n) {
            return this.insert(t, n);
          }
          indexOf(t) {
            const n = Ty(this._lContainer);
            return null !== n ? n.indexOf(t) : -1;
          }
          remove(t) {
            const n = this._adjustIndex(t, -1),
              s = qo(this._lContainer, n);
            s && (Fs(cp(this._lContainer), n), Mc(s[1], s));
          }
          detach(t) {
            const n = this._adjustIndex(t, -1),
              s = qo(this._lContainer, n);
            return s && null != Fs(cp(this._lContainer), n) ? new fu(s) : null;
          }
          _adjustIndex(t, n = 0) {
            return t ?? this.length + n;
          }
        };
      function Ty(e) {
        return e[8];
      }
      function cp(e) {
        return e[8] || (e[8] = []);
      }
      function My(e, t) {
        let n;
        const s = t[e.index];
        if (Rt(s)) n = s;
        else {
          let o;
          if (8 & e.type) o = kt(s);
          else {
            const u = t[11];
            o = u.createComment("");
            const d = mn(e, t);
            Ci(
              u,
              Ko(u, d),
              o,
              (function Uf(e, t) {
                return e.nextSibling(t);
              })(u, d),
              !1
            );
          }
          (t[e.index] = n = Dg(s, t, o, e)), bd(t, n);
        }
        return new Iy(n, e, t);
      }
      class dp {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new dp(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class fp {
        constructor(t = []) {
          this.queries = t;
        }
        createEmbeddedView(t) {
          const n = t.queries;
          if (null !== n) {
            const s =
                null !== t.contentQueries ? t.contentQueries[0] : n.length,
              o = [];
            for (let u = 0; u < s; u++) {
              const d = n.getByIndex(u);
              o.push(this.queries[d.indexInDeclarationView].clone());
            }
            return new fp(o);
          }
          return null;
        }
        insertView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        detachView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        dirtyQueriesWithMatches(t) {
          for (let n = 0; n < this.queries.length; n++)
            null !== Ly(t, n).matches && this.queries[n].setDirty();
        }
      }
      class Ay {
        constructor(t, n, s = null) {
          (this.predicate = t), (this.flags = n), (this.read = s);
        }
      }
      class hp {
        constructor(t = []) {
          this.queries = t;
        }
        elementStart(t, n) {
          for (let s = 0; s < this.queries.length; s++)
            this.queries[s].elementStart(t, n);
        }
        elementEnd(t) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].elementEnd(t);
        }
        embeddedTView(t) {
          let n = null;
          for (let s = 0; s < this.length; s++) {
            const o = null !== n ? n.length : 0,
              u = this.getByIndex(s).embeddedTView(t, o);
            u &&
              ((u.indexInDeclarationView = s),
              null !== n ? n.push(u) : (n = [u]));
          }
          return null !== n ? new hp(n) : null;
        }
        template(t, n) {
          for (let s = 0; s < this.queries.length; s++)
            this.queries[s].template(t, n);
        }
        getByIndex(t) {
          return this.queries[t];
        }
        get length() {
          return this.queries.length;
        }
        track(t) {
          this.queries.push(t);
        }
      }
      class pp {
        constructor(t, n = -1) {
          (this.metadata = t),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = n);
        }
        elementStart(t, n) {
          this.isApplyingToNode(n) && this.matchTNode(t, n);
        }
        elementEnd(t) {
          this._declarationNodeIndex === t.index &&
            (this._appliesToNextNode = !1);
        }
        template(t, n) {
          this.elementStart(t, n);
        }
        embeddedTView(t, n) {
          return this.isApplyingToNode(t)
            ? ((this.crossesNgTemplate = !0),
              this.addMatch(-t.index, n),
              new pp(this.metadata))
            : null;
        }
        isApplyingToNode(t) {
          if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
            const n = this._declarationNodeIndex;
            let s = t.parent;
            for (; null !== s && 8 & s.type && s.index !== n; ) s = s.parent;
            return n === (null !== s ? s.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(t, n) {
          const s = this.metadata.predicate;
          if (Array.isArray(s))
            for (let o = 0; o < s.length; o++) {
              const u = s[o];
              this.matchTNodeWithReadOption(t, n, tw(n, u)),
                this.matchTNodeWithReadOption(t, n, Fo(n, t, u, !1, !1));
            }
          else
            s === Su
              ? 4 & n.type && this.matchTNodeWithReadOption(t, n, -1)
              : this.matchTNodeWithReadOption(t, n, Fo(n, t, s, !1, !1));
        }
        matchTNodeWithReadOption(t, n, s) {
          if (null !== s) {
            const o = this.metadata.read;
            if (null !== o)
              if (o === cs || o === Ud || (o === Su && 4 & n.type))
                this.addMatch(n.index, -2);
              else {
                const u = Fo(n, t, o, !1, !1);
                null !== u && this.addMatch(n.index, u);
              }
            else this.addMatch(n.index, s);
          }
        }
        addMatch(t, n) {
          null === this.matches
            ? (this.matches = [t, n])
            : this.matches.push(t, n);
        }
      }
      function tw(e, t) {
        const n = e.localNames;
        if (null !== n)
          for (let s = 0; s < n.length; s += 2) if (n[s] === t) return n[s + 1];
        return null;
      }
      function rw(e, t, n, s) {
        return -1 === n
          ? (function nw(e, t) {
              return 11 & e.type ? Wr(e, t) : 4 & e.type ? Bd(e, t) : null;
            })(t, e)
          : -2 === n
          ? (function iw(e, t, n) {
              return n === cs
                ? Wr(t, e)
                : n === Su
                ? Bd(t, e)
                : n === Ud
                ? My(t, e)
                : void 0;
            })(e, t, s)
          : Ji(e, e[1], n, t);
      }
      function Ry(e, t, n, s) {
        const o = t[19].queries[s];
        if (null === o.matches) {
          const u = e.data,
            d = n.matches,
            h = [];
          for (let m = 0; m < d.length; m += 2) {
            const D = d[m];
            h.push(D < 0 ? null : rw(t, u[D], d[m + 1], n.metadata.read));
          }
          o.matches = h;
        }
        return o.matches;
      }
      function gp(e, t, n, s) {
        const o = e.queries.getByIndex(n),
          u = o.matches;
        if (null !== u) {
          const d = Ry(e, t, o, n);
          for (let h = 0; h < u.length; h += 2) {
            const m = u[h];
            if (m > 0) s.push(d[h / 2]);
            else {
              const D = u[h + 1],
                C = t[-m];
              for (let b = 10; b < C.length; b++) {
                const M = C[b];
                M[17] === M[3] && gp(M[1], M, D, s);
              }
              if (null !== C[9]) {
                const b = C[9];
                for (let M = 0; M < b.length; M++) {
                  const P = b[M];
                  gp(P[1], P, D, s);
                }
              }
            }
          }
        }
        return s;
      }
      function Py(e) {
        const t = B(),
          n = Ge(),
          s = sl();
        So(s + 1);
        const o = Ly(n, s);
        if (
          e.dirty &&
          (function fi(e) {
            return 4 == (4 & e[2]);
          })(t) ===
            (2 == (2 & o.metadata.flags))
        ) {
          if (null === o.matches) e.reset([]);
          else {
            const u = o.crossesNgTemplate ? gp(n, t, s, []) : Ry(n, t, o, s);
            e.reset(u, lg), e.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function Ny(e, t, n, s) {
        const o = Ge();
        if (o.firstCreatePass) {
          const u = mt();
          (function xy(e, t, n) {
            null === e.queries && (e.queries = new hp()),
              e.queries.track(new pp(t, n));
          })(o, new Ay(t, n, s), u.index),
            (function aw(e, t) {
              const n = e.contentQueries || (e.contentQueries = []);
              t !== (n.length ? n[n.length - 1] : -1) &&
                n.push(e.queries.length - 1, t);
            })(o, e),
            2 == (2 & n) && (o.staticContentQueries = !0);
        }
        !(function Fy(e, t, n) {
          const s = new up(4 == (4 & n));
          ft(e, t, s, s.destroy),
            null === t[19] && (t[19] = new fp()),
            t[19].queries.push(new dp(s));
        })(o, B(), n);
      }
      function Oy() {
        return (function ow(e, t) {
          return e[19].queries[t].queryList;
        })(B(), sl());
      }
      function Ly(e, t) {
        return e.queries.getByIndex(t);
      }
      function Vd(...e) {}
      const tv = new rt("Application Initializer");
      let zd = (() => {
        class e {
          constructor(n) {
            (this.appInits = n),
              (this.resolve = Vd),
              (this.reject = Vd),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((s, o) => {
                (this.resolve = s), (this.reject = o);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const n = [],
              s = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let o = 0; o < this.appInits.length; o++) {
                const u = this.appInits[o]();
                if (Vh(u)) n.push(u);
                else if (Hg(u)) {
                  const d = new Promise((h, m) => {
                    u.subscribe({ complete: h, error: m });
                  });
                  n.push(d);
                }
              }
            Promise.all(n)
              .then(() => {
                s();
              })
              .catch(o => {
                this.reject(o);
              }),
              0 === n.length && s(),
              (this.initialized = !0);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(Et(tv, 8));
          }),
          (e.ɵprov = Gt({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      const nv = new rt("AppId", {
        providedIn: "root",
        factory: function rv() {
          return `${_p()}${_p()}${_p()}`;
        }
      });
      function _p() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const iv = new rt("Platform Initializer"),
        Mw = new rt("Platform ID", {
          providedIn: "platform",
          factory: () => "unknown"
        }),
        sv = new rt("appBootstrapListener"),
        Aw = new rt("AnimationModuleType");
      let Rw = (() => {
        class e {
          log(n) {
            console.log(n);
          }
          warn(n) {
            console.warn(n);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = Gt({ token: e, factory: e.ɵfac, providedIn: "platform" })),
          e
        );
      })();
      const Gd = new rt("LocaleId", {
          providedIn: "root",
          factory: () =>
            za(Gd, Y.Optional | Y.SkipSelf) ||
            (function Pw() {
              return (typeof $localize < "u" && $localize.locale) || Fa;
            })()
        }),
        Nw = new rt("DefaultCurrencyCode", {
          providedIn: "root",
          factory: () => "USD"
        });
      class Ow {
        constructor(t, n) {
          (this.ngModuleFactory = t), (this.componentFactories = n);
        }
      }
      let Fw = (() => {
        class e {
          compileModuleSync(n) {
            return new sp(n);
          }
          compileModuleAsync(n) {
            return Promise.resolve(this.compileModuleSync(n));
          }
          compileModuleAndAllComponentsSync(n) {
            const s = this.compileModuleSync(n),
              u = Yn(Xt(n).declarations).reduce((d, h) => {
                const m = je(h);
                return m && d.push(new hu(m)), d;
              }, []);
            return new Ow(s, u);
          }
          compileModuleAndAllComponentsAsync(n) {
            return Promise.resolve(this.compileModuleAndAllComponentsSync(n));
          }
          clearCache() {}
          clearCacheFor(n) {}
          getModuleId(n) {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = Gt({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      const kw = (() => Promise.resolve(0))();
      function Ep(e) {
        typeof Zone > "u"
          ? kw.then(() => {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask("scheduleMicrotask", e);
      }
      class dr {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: n = !1,
          shouldCoalesceRunChangeDetection: s = !1
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Xr(!1)),
            (this.onMicrotaskEmpty = new Xr(!1)),
            (this.onStable = new Xr(!1)),
            (this.onError = new Xr(!1)),
            typeof Zone > "u")
          )
            throw new U(908, !1);
          Zone.assertZonePatched();
          const o = this;
          (o._nesting = 0),
            (o._outer = o._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (o._inner = o._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t &&
              Zone.longStackTraceZoneSpec &&
              (o._inner = o._inner.fork(Zone.longStackTraceZoneSpec)),
            (o.shouldCoalesceEventChangeDetection = !s && n),
            (o.shouldCoalesceRunChangeDetection = s),
            (o.lastRequestAnimationFrameId = -1),
            (o.nativeRequestAnimationFrame = (function $w() {
              let e = pt.requestAnimationFrame,
                t = pt.cancelAnimationFrame;
              if (typeof Zone < "u" && e && t) {
                const n = e[Zone.__symbol__("OriginalDelegate")];
                n && (e = n);
                const s = t[Zone.__symbol__("OriginalDelegate")];
                s && (t = s);
              }
              return {
                nativeRequestAnimationFrame: e,
                nativeCancelAnimationFrame: t
              };
            })().nativeRequestAnimationFrame),
            (function Uw(e) {
              const t = () => {
                !(function Bw(e) {
                  e.isCheckStableRunning ||
                    -1 !== e.lastRequestAnimationFrameId ||
                    ((e.lastRequestAnimationFrameId =
                      e.nativeRequestAnimationFrame.call(pt, () => {
                        e.fakeTopEventTask ||
                          (e.fakeTopEventTask = Zone.root.scheduleEventTask(
                            "fakeTopEventTask",
                            () => {
                              (e.lastRequestAnimationFrameId = -1),
                                Cp(e),
                                (e.isCheckStableRunning = !0),
                                wp(e),
                                (e.isCheckStableRunning = !1);
                            },
                            void 0,
                            () => {},
                            () => {}
                          )),
                          e.fakeTopEventTask.invoke();
                      })),
                    Cp(e));
                })(e);
              };
              e._inner = e._inner.fork({
                name: "angular",
                properties: { isAngularZone: !0 },
                onInvokeTask: (n, s, o, u, d, h) => {
                  try {
                    return lv(e), n.invokeTask(o, u, d, h);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection &&
                      "eventTask" === u.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      t(),
                      uv(e);
                  }
                },
                onInvoke: (n, s, o, u, d, h, m) => {
                  try {
                    return lv(e), n.invoke(o, u, d, h, m);
                  } finally {
                    e.shouldCoalesceRunChangeDetection && t(), uv(e);
                  }
                },
                onHasTask: (n, s, o, u) => {
                  n.hasTask(o, u),
                    s === o &&
                      ("microTask" == u.change
                        ? ((e._hasPendingMicrotasks = u.microTask),
                          Cp(e),
                          wp(e))
                        : "macroTask" == u.change &&
                          (e.hasPendingMacrotasks = u.macroTask));
                },
                onHandleError: (n, s, o, u) => (
                  n.handleError(o, u),
                  e.runOutsideAngular(() => e.onError.emit(u)),
                  !1
                )
              });
            })(o);
        }
        static isInAngularZone() {
          return typeof Zone < "u" && !0 === Zone.current.get("isAngularZone");
        }
        static assertInAngularZone() {
          if (!dr.isInAngularZone()) throw new U(909, !1);
        }
        static assertNotInAngularZone() {
          if (dr.isInAngularZone()) throw new U(909, !1);
        }
        run(t, n, s) {
          return this._inner.run(t, n, s);
        }
        runTask(t, n, s, o) {
          const u = this._inner,
            d = u.scheduleEventTask("NgZoneEvent: " + o, t, jw, Vd, Vd);
          try {
            return u.runTask(d, n, s);
          } finally {
            u.cancelTask(d);
          }
        }
        runGuarded(t, n, s) {
          return this._inner.runGuarded(t, n, s);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      const jw = {};
      function wp(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function Cp(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection ||
            e.shouldCoalesceRunChangeDetection) &&
            -1 !== e.lastRequestAnimationFrameId)
        );
      }
      function lv(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function uv(e) {
        e._nesting--, wp(e);
      }
      class Hw {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Xr()),
            (this.onMicrotaskEmpty = new Xr()),
            (this.onStable = new Xr()),
            (this.onError = new Xr());
        }
        run(t, n, s) {
          return t.apply(n, s);
        }
        runGuarded(t, n, s) {
          return t.apply(n, s);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, n, s, o) {
          return t.apply(n, s);
        }
      }
      const cv = new rt(""),
        dv = new rt("");
      let Sp,
        Vw = (() => {
          class e {
            constructor(n, s, o) {
              (this._ngZone = n),
                (this.registry = s),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                Sp ||
                  ((function zw(e) {
                    Sp = e;
                  })(o),
                  o.addToWindow(s)),
                this._watchAngularEvents(),
                n.run(() => {
                  this.taskTrackingZone =
                    typeof Zone > "u"
                      ? null
                      : Zone.current.get("TaskTrackingZone");
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                }
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      dr.assertNotInAngularZone(),
                        Ep(() => {
                          (this._isZoneStable = !0),
                            this._runCallbacksIfReady();
                        });
                    }
                  });
                });
            }
            increasePendingRequestCount() {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error("pending async requests below zero");
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                Ep(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let n = this._callbacks.pop();
                    clearTimeout(n.timeoutId), n.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let n = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  s =>
                    !s.updateCb ||
                    !s.updateCb(n) ||
                    (clearTimeout(s.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map(n => ({
                    source: n.source,
                    creationLocation: n.creationLocation,
                    data: n.data
                  }))
                : [];
            }
            addCallback(n, s, o) {
              let u = -1;
              s &&
                s > 0 &&
                (u = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(
                    d => d.timeoutId !== u
                  )),
                    n(this._didWork, this.getPendingTasks());
                }, s)),
                this._callbacks.push({ doneCb: n, timeoutId: u, updateCb: o });
            }
            whenStable(n, s, o) {
              if (o && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'
                );
              this.addCallback(n, s, o), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            registerApplication(n) {
              this.registry.registerApplication(n, this);
            }
            unregisterApplication(n) {
              this.registry.unregisterApplication(n);
            }
            findProviders(n, s, o) {
              return [];
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(Et(dr), Et(fv), Et(dv));
            }),
            (e.ɵprov = Gt({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        fv = (() => {
          class e {
            constructor() {
              this._applications = new Map();
            }
            registerApplication(n, s) {
              this._applications.set(n, s);
            }
            unregisterApplication(n) {
              this._applications.delete(n);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(n) {
              return this._applications.get(n) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(n, s = !0) {
              return Sp?.findTestabilityInTree(this, n, s) ?? null;
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵprov = Gt({
              token: e,
              factory: e.ɵfac,
              providedIn: "platform"
            })),
            e
          );
        })(),
        hs = null;
      const bp = new rt("PlatformDestroyListeners");
      class qw {
        constructor(t, n) {
          (this.name = t), (this.token = n);
        }
      }
      function Qw(e) {
        const { rootComponent: t, appProviders: n, platformProviders: s } = e,
          o = (function Yw(e = []) {
            if (hs) return hs;
            const t = (function gv(e = [], t) {
              return Ni.create({
                name: t,
                providers: [
                  { provide: Zl, useValue: "platform" },
                  { provide: bp, useValue: new Set([() => (hs = null)]) },
                  ...e
                ]
              });
            })(e);
            return (
              (hs = t),
              (function pv(e) {
                const t = e.get(iv, null);
                t && t.forEach(n => n());
              })(t),
              t
            );
          })(s),
          u = (function vv(e, t) {
            let n;
            return (
              (n =
                "noop" === e
                  ? new Hw()
                  : ("zone.js" === e ? void 0 : e) || new dr(t)),
              n
            );
          })(
            "zone.js",
            (function yv(e) {
              return {
                enableLongStackTrace: !1,
                shouldCoalesceEventChangeDetection:
                  !(!e || !e.ngZoneEventCoalescing) || !1,
                shouldCoalesceRunChangeDetection:
                  !(!e || !e.ngZoneRunCoalescing) || !1
              };
            })()
          );
        return u.run(() => {
          const h = op(
              [{ provide: dr, useValue: u }, ...(n || [])],
              o,
              "Environment Injector"
            ),
            m = h.get(Qs, null);
          let D;
          u.runOutsideAngular(() => {
            D = u.onError.subscribe({
              next: M => {
                m.handleError(M);
              }
            });
          });
          const C = () => h.destroy(),
            b = o.get(bp);
          return (
            b.add(C),
            h.onDestroy(() => {
              D.unsubscribe(), b.delete(C);
            }),
            (function Dv(e, t, n) {
              try {
                const s = n();
                return Vh(s)
                  ? s.catch(o => {
                      throw (t.runOutsideAngular(() => e.handleError(o)), o);
                    })
                  : s;
              } catch (s) {
                throw (t.runOutsideAngular(() => e.handleError(s)), s);
              }
            })(m, u, () => {
              const M = h.get(zd);
              return (
                M.runInitializers(),
                M.donePromise.then(() => {
                  !(function Bm(e) {
                    An(e, "Expected localeId to be defined"),
                      "string" == typeof e &&
                        (jm = e.toLowerCase().replace(/_/g, "-"));
                  })(h.get(Gd, Fa) || Fa);
                  const k = h.get(Wd);
                  return void 0 !== t && k.bootstrap(t), k;
                })
              );
            })
          );
        });
      }
      let Wd = (() => {
        class e {
          get destroyed() {
            return this._destroyed;
          }
          get injector() {
            return this._injector;
          }
          constructor(n, s, o) {
            (this._zone = n),
              (this._injector = s),
              (this._exceptionHandler = o),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._stable = !0),
              (this._destroyed = !1),
              (this._destroyListeners = []),
              (this.componentTypes = []),
              (this.components = []),
              (this._onMicrotaskEmptySubscription =
                this._zone.onMicrotaskEmpty.subscribe({
                  next: () => {
                    this._zone.run(() => {
                      this.tick();
                    });
                  }
                }));
            const u = new ee.y(h => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    h.next(this._stable), h.complete();
                  });
              }),
              d = new ee.y(h => {
                let m;
                this._zone.runOutsideAngular(() => {
                  m = this._zone.onStable.subscribe(() => {
                    dr.assertNotInAngularZone(),
                      Ep(() => {
                        !this._stable &&
                          !this._zone.hasPendingMacrotasks &&
                          !this._zone.hasPendingMicrotasks &&
                          ((this._stable = !0), h.next(!0));
                      });
                  });
                });
                const D = this._zone.onUnstable.subscribe(() => {
                  dr.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        h.next(!1);
                      }));
                });
                return () => {
                  m.unsubscribe(), D.unsubscribe();
                };
              });
            this.isStable = (function ve(...e) {
              const t = (0, ae.yG)(e),
                n = (0, ae._6)(e, 1 / 0),
                s = e;
              return s.length
                ? 1 === s.length
                  ? (0, W.Xf)(s[0])
                  : (0, Z.J)(n)((0, xe.D)(s, t))
                : pe.E;
            })(
              u,
              d.pipe(
                (function ie(e = {}) {
                  const {
                    connector: t = () => new v.x(),
                    resetOnError: n = !0,
                    resetOnComplete: s = !0,
                    resetOnRefCountZero: o = !0
                  } = e;
                  return u => {
                    let d,
                      h,
                      m,
                      D = 0,
                      C = !1,
                      b = !1;
                    const M = () => {
                        h?.unsubscribe(), (h = void 0);
                      },
                      P = () => {
                        M(), (d = m = void 0), (C = b = !1);
                      },
                      k = () => {
                        const G = d;
                        P(), G?.unsubscribe();
                      };
                    return (0, H.e)((G, ne) => {
                      D++, !b && !C && M();
                      const ue = (m = m ?? t());
                      ne.add(() => {
                        D--, 0 === D && !b && !C && (h = He(k, o));
                      }),
                        ue.subscribe(ne),
                        !d &&
                          D > 0 &&
                          ((d = new Q.Hp({
                            next: Ee => ue.next(Ee),
                            error: Ee => {
                              (b = !0), M(), (h = He(P, n, Ee)), ue.error(Ee);
                            },
                            complete: () => {
                              (C = !0), M(), (h = He(P, s)), ue.complete();
                            }
                          })),
                          (0, W.Xf)(G).subscribe(d));
                    })(u);
                  };
                })()
              )
            );
          }
          bootstrap(n, s) {
            const o = n instanceof ad;
            if (!this._injector.get(zd).done)
              throw (!o && Vn(n), new U(405, false));
            let d;
            (d = o ? n : this._injector.get(Ys).resolveComponentFactory(n)),
              this.componentTypes.push(d.componentType);
            const h = (function Ww(e) {
                return e.isBoundToModule;
              })(d)
                ? void 0
                : this._injector.get(xa),
              D = d.create(Ni.NULL, [], s || d.selector, h),
              C = D.location.nativeElement,
              b = D.injector.get(cv, null);
            return (
              b?.registerApplication(C),
              D.onDestroy(() => {
                this.detachView(D.hostView),
                  qd(this.components, D),
                  b?.unregisterApplication(C);
              }),
              this._loadComponent(D),
              D
            );
          }
          tick() {
            if (this._runningTick) throw new U(101, !1);
            try {
              this._runningTick = !0;
              for (let n of this._views) n.detectChanges();
            } catch (n) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(n)
              );
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(n) {
            const s = n;
            this._views.push(s), s.attachToAppRef(this);
          }
          detachView(n) {
            const s = n;
            qd(this._views, s), s.detachFromAppRef();
          }
          _loadComponent(n) {
            this.attachView(n.hostView), this.tick(), this.components.push(n);
            const s = this._injector.get(sv, []);
            s.push(...this._bootstrapListeners), s.forEach(o => o(n));
          }
          ngOnDestroy() {
            if (!this._destroyed)
              try {
                this._destroyListeners.forEach(n => n()),
                  this._views.slice().forEach(n => n.destroy()),
                  this._onMicrotaskEmptySubscription.unsubscribe();
              } finally {
                (this._destroyed = !0),
                  (this._views = []),
                  (this._bootstrapListeners = []),
                  (this._destroyListeners = []);
              }
          }
          onDestroy(n) {
            return (
              this._destroyListeners.push(n),
              () => qd(this._destroyListeners, n)
            );
          }
          destroy() {
            if (this._destroyed) throw new U(406, !1);
            const n = this._injector;
            n.destroy && !n.destroyed && n.destroy();
          }
          get viewCount() {
            return this._views.length;
          }
          warnIfDestroyed() {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(Et(dr), Et(Pi), Et(Qs));
          }),
          (e.ɵprov = Gt({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      function qd(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      function Jw() {}
      let eC = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = tC), e;
      })();
      function tC(e) {
        return (function nC(e, t, n) {
          if (si(e) && !n) {
            const s = $t(e.index, t);
            return new fu(s, s);
          }
          return 47 & e.type ? new fu(t[16], t) : null;
        })(mt(), B(), 16 == (16 & e));
      }
      class bv {
        constructor() {}
        supports(t) {
          return pu(t);
        }
        create(t) {
          return new lC(t);
        }
      }
      const aC = (e, t) => t;
      class lC {
        constructor(t) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = t || aC);
        }
        forEachItem(t) {
          let n;
          for (n = this._itHead; null !== n; n = n._next) t(n);
        }
        forEachOperation(t) {
          let n = this._itHead,
            s = this._removalsHead,
            o = 0,
            u = null;
          for (; n || s; ) {
            const d = !s || (n && n.currentIndex < Tv(s, o, u)) ? n : s,
              h = Tv(d, o, u),
              m = d.currentIndex;
            if (d === s) o--, (s = s._nextRemoved);
            else if (((n = n._next), null == d.previousIndex)) o++;
            else {
              u || (u = []);
              const D = h - o,
                C = m - o;
              if (D != C) {
                for (let M = 0; M < D; M++) {
                  const P = M < u.length ? u[M] : (u[M] = 0),
                    k = P + M;
                  C <= k && k < D && (u[M] = P + 1);
                }
                u[d.previousIndex] = C - D;
              }
            }
            h !== m && t(d, h, m);
          }
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousItHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachMovedItem(t) {
          let n;
          for (n = this._movesHead; null !== n; n = n._nextMoved) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        forEachIdentityChange(t) {
          let n;
          for (
            n = this._identityChangesHead;
            null !== n;
            n = n._nextIdentityChange
          )
            t(n);
        }
        diff(t) {
          if ((null == t && (t = []), !pu(t))) throw new U(900, !1);
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let o,
            u,
            d,
            n = this._itHead,
            s = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let h = 0; h < this.length; h++)
              (u = t[h]),
                (d = this._trackByFn(h, u)),
                null !== n && Object.is(n.trackById, d)
                  ? (s && (n = this._verifyReinsertion(n, u, d, h)),
                    Object.is(n.item, u) || this._addIdentityChange(n, u))
                  : ((n = this._mismatch(n, u, d, h)), (s = !0)),
                (n = n._next);
          } else
            (o = 0),
              (function wD(e, t) {
                if (Array.isArray(e))
                  for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[to()]();
                  let s;
                  for (; !(s = n.next()).done; ) t(s.value);
                }
              })(t, h => {
                (d = this._trackByFn(o, h)),
                  null !== n && Object.is(n.trackById, d)
                    ? (s && (n = this._verifyReinsertion(n, h, d, o)),
                      Object.is(n.item, h) || this._addIdentityChange(n, h))
                    : ((n = this._mismatch(n, h, d, o)), (s = !0)),
                  (n = n._next),
                  o++;
              }),
              (this.length = o);
          return this._truncate(n), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              t = this._previousItHead = this._itHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded)
              t.previousIndex = t.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                t = this._movesHead;
              null !== t;
              t = t._nextMoved
            )
              t.previousIndex = t.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, n, s, o) {
          let u;
          return (
            null === t ? (u = this._itTail) : ((u = t._prev), this._remove(t)),
            null !==
            (t =
              null === this._unlinkedRecords
                ? null
                : this._unlinkedRecords.get(s, null))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._reinsertAfter(t, u, o))
              : null !==
                (t =
                  null === this._linkedRecords
                    ? null
                    : this._linkedRecords.get(s, o))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._moveAfter(t, u, o))
              : (t = this._addAfter(new uC(n, s), u, o)),
            t
          );
        }
        _verifyReinsertion(t, n, s, o) {
          let u =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(s, null);
          return (
            null !== u
              ? (t = this._reinsertAfter(u, t._prev, o))
              : t.currentIndex != o &&
                ((t.currentIndex = o), this._addToMoves(t, o)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const n = t._next;
            this._addToRemovals(this._unlink(t)), (t = n);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, n, s) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const o = t._prevRemoved,
            u = t._nextRemoved;
          return (
            null === o ? (this._removalsHead = u) : (o._nextRemoved = u),
            null === u ? (this._removalsTail = o) : (u._prevRemoved = o),
            this._insertAfter(t, n, s),
            this._addToMoves(t, s),
            t
          );
        }
        _moveAfter(t, n, s) {
          return (
            this._unlink(t),
            this._insertAfter(t, n, s),
            this._addToMoves(t, s),
            t
          );
        }
        _addAfter(t, n, s) {
          return (
            this._insertAfter(t, n, s),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = t)
                : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, n, s) {
          const o = null === n ? this._itHead : n._next;
          return (
            (t._next = o),
            (t._prev = n),
            null === o ? (this._itTail = t) : (o._prev = t),
            null === n ? (this._itHead = t) : (n._next = t),
            null === this._linkedRecords && (this._linkedRecords = new Iv()),
            this._linkedRecords.put(t),
            (t.currentIndex = s),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const n = t._prev,
            s = t._next;
          return (
            null === n ? (this._itHead = s) : (n._next = s),
            null === s ? (this._itTail = n) : (s._prev = n),
            t
          );
        }
        _addToMoves(t, n) {
          return (
            t.previousIndex === n ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = t)
                  : (this._movesTail._nextMoved = t)),
            t
          );
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new Iv()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t),
                (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, n) {
          return (
            (t.item = n),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class uC {
        constructor(t, n) {
          (this.item = t),
            (this.trackById = n),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class cC {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t),
              (t._nextDup = null),
              (t._prevDup = null))
            : ((this._tail._nextDup = t),
              (t._prevDup = this._tail),
              (t._nextDup = null),
              (this._tail = t));
        }
        get(t, n) {
          let s;
          for (s = this._head; null !== s; s = s._nextDup)
            if (
              (null === n || n <= s.currentIndex) &&
              Object.is(s.trackById, t)
            )
              return s;
          return null;
        }
        remove(t) {
          const n = t._prevDup,
            s = t._nextDup;
          return (
            null === n ? (this._head = s) : (n._nextDup = s),
            null === s ? (this._tail = n) : (s._prevDup = n),
            null === this._head
          );
        }
      }
      class Iv {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const n = t.trackById;
          let s = this.map.get(n);
          s || ((s = new cC()), this.map.set(n, s)), s.add(t);
        }
        get(t, n) {
          const o = this.map.get(t);
          return o ? o.get(t, n) : null;
        }
        remove(t) {
          const n = t.trackById;
          return this.map.get(n).remove(t) && this.map.delete(n), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function Tv(e, t, n) {
        const s = e.previousIndex;
        if (null === s) return s;
        let o = 0;
        return n && s < n.length && (o = n[s]), s + t + o;
      }
      class Mv {
        constructor() {}
        supports(t) {
          return t instanceof Map || Lh(t);
        }
        create() {
          return new dC();
        }
      }
      class dC {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(t) {
          let n;
          for (n = this._mapHead; null !== n; n = n._next) t(n);
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousMapHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachChangedItem(t) {
          let n;
          for (n = this._changesHead; null !== n; n = n._nextChanged) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || Lh(t))) throw new U(900, !1);
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let n = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (s, o) => {
              if (n && n.key === o)
                this._maybeAddToChanges(n, s),
                  (this._appendAfter = n),
                  (n = n._next);
              else {
                const u = this._getOrCreateRecordForKey(o, s);
                n = this._insertBeforeOrAppend(n, u);
              }
            }),
            n)
          ) {
            n._prev && (n._prev._next = null), (this._removalsHead = n);
            for (let s = n; null !== s; s = s._nextRemoved)
              s === this._mapHead && (this._mapHead = null),
                this._records.delete(s.key),
                (s._nextRemoved = s._next),
                (s.previousValue = s.currentValue),
                (s.currentValue = null),
                (s._prev = null),
                (s._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, n) {
          if (t) {
            const s = t._prev;
            return (
              (n._next = t),
              (n._prev = s),
              (t._prev = n),
              s && (s._next = n),
              t === this._mapHead && (this._mapHead = n),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = n), (n._prev = this._appendAfter))
              : (this._mapHead = n),
            (this._appendAfter = n),
            null
          );
        }
        _getOrCreateRecordForKey(t, n) {
          if (this._records.has(t)) {
            const o = this._records.get(t);
            this._maybeAddToChanges(o, n);
            const u = o._prev,
              d = o._next;
            return (
              u && (u._next = d),
              d && (d._prev = u),
              (o._next = null),
              (o._prev = null),
              o
            );
          }
          const s = new fC(t);
          return (
            this._records.set(t, s),
            (s.currentValue = n),
            this._addToAdditions(s),
            s
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              this._previousMapHead = this._mapHead, t = this._previousMapHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged)
              t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded)
              t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, n) {
          Object.is(n, t.currentValue) ||
            ((t.previousValue = t.currentValue),
            (t.currentValue = n),
            this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, n) {
          t instanceof Map
            ? t.forEach(n)
            : Object.keys(t).forEach(s => n(t[s], s));
        }
      }
      class fC {
        constructor(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      function Av() {
        return new Pp([new bv()]);
      }
      let Pp = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, s) {
            if (null != s) {
              const o = s.factories.slice();
              n = n.concat(o);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: s => e.create(n, s || Av()),
              deps: [[e, new wi(), new Ls()]]
            };
          }
          find(n) {
            const s = this.factories.find(o => o.supports(n));
            if (null != s) return s;
            throw new U(901, !1);
          }
        }
        return (e.ɵprov = Gt({ token: e, providedIn: "root", factory: Av })), e;
      })();
      function Rv() {
        return new Np([new Mv()]);
      }
      let Np = (() => {
          class e {
            constructor(n) {
              this.factories = n;
            }
            static create(n, s) {
              if (s) {
                const o = s.factories.slice();
                n = n.concat(o);
              }
              return new e(n);
            }
            static extend(n) {
              return {
                provide: e,
                useFactory: s => e.create(n, s || Rv()),
                deps: [[e, new wi(), new Ls()]]
              };
            }
            find(n) {
              const s = this.factories.find(o => o.supports(n));
              if (s) return s;
              throw new U(901, !1);
            }
          }
          return (
            (e.ɵprov = Gt({ token: e, providedIn: "root", factory: Rv })), e
          );
        })(),
        gC = (() => {
          class e {
            constructor(n) {}
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(Et(Wd));
            }),
            (e.ɵmod = Vi({ type: e })),
            (e.ɵinj = ji({})),
            e
          );
        })();
      function mC(e) {
        return "boolean" == typeof e ? e : null != e && "false" !== e;
      }
    }
  },
  Ue => {
    Ue((Ue.s = 889));
  }
]);
