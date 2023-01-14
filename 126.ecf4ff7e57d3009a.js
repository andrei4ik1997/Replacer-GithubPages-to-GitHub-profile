"use strict";
(self.webpackChunkGitHub_Replacer =
  self.webpackChunkGitHub_Replacer || []).push([
  [126],
  {
    126: (Gn, he, d) => {
      d.r(he), d.d(he, { MainComponent: () => Nn });
      var N = d(895),
        o = d(256),
        vt = d(76),
        Ct = d(751),
        Vt = d(742),
        At = d(421),
        Mt = d(669),
        bt = d(403),
        Dt = d(268),
        Et = d(810),
        Ot = d(4);
      let fe = (() => {
          class n {
            constructor(e, r) {
              (this._renderer = e),
                (this._elementRef = r),
                (this.onChange = i => {}),
                (this.onTouched = () => {});
            }
            setProperty(e, r) {
              this._renderer.setProperty(this._elementRef.nativeElement, e, r);
            }
            registerOnTouched(e) {
              this.onTouched = e;
            }
            registerOnChange(e) {
              this.onChange = e;
            }
            setDisabledState(e) {
              this.setProperty("disabled", e);
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(o.Y36(o.Qsj), o.Y36(o.SBq));
            }),
            (n.ɵdir = o.lG2({ type: n })),
            n
          );
        })(),
        m = (() => {
          class n extends fe {}
          return (
            (n.ɵfac = (function () {
              let t;
              return function (r) {
                return (t || (t = o.n5z(n)))(r || n);
              };
            })()),
            (n.ɵdir = o.lG2({ type: n, features: [o.qOj] })),
            n
          );
        })();
      const h = new o.OlP("NgValueAccessor"),
        Nt = { provide: h, useExisting: (0, o.Gpc)(() => S), multi: !0 },
        Gt = new o.OlP("CompositionEventMode");
      let S = (() => {
        class n extends fe {
          constructor(e, r, i) {
            super(e, r),
              (this._compositionMode = i),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function St() {
                  const n = (0, N.q)() ? (0, N.q)().getUserAgent() : "";
                  return /android (\d+)/.test(n.toLowerCase());
                })());
          }
          writeValue(e) {
            this.setProperty("value", e ?? "");
          }
          _handleInput(e) {
            (!this._compositionMode ||
              (this._compositionMode && !this._composing)) &&
              this.onChange(e);
          }
          _compositionStart() {
            this._composing = !0;
          }
          _compositionEnd(e) {
            (this._composing = !1), this._compositionMode && this.onChange(e);
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(o.Y36(o.Qsj), o.Y36(o.SBq), o.Y36(Gt, 8));
          }),
          (n.ɵdir = o.lG2({
            type: n,
            selectors: [
              ["input", "formControlName", "", 3, "type", "checkbox"],
              ["textarea", "formControlName", ""],
              ["input", "formControl", "", 3, "type", "checkbox"],
              ["textarea", "formControl", ""],
              ["input", "ngModel", "", 3, "type", "checkbox"],
              ["textarea", "ngModel", ""],
              ["", "ngDefaultControl", ""]
            ],
            hostBindings: function (e, r) {
              1 & e &&
                o.NdJ("input", function (s) {
                  return r._handleInput(s.target.value);
                })("blur", function () {
                  return r.onTouched();
                })("compositionstart", function () {
                  return r._compositionStart();
                })("compositionend", function (s) {
                  return r._compositionEnd(s.target.value);
                });
            },
            features: [o._Bn([Nt]), o.qOj]
          })),
          n
        );
      })();
      const l = new o.OlP("NgValidators"),
        p = new o.OlP("NgAsyncValidators");
      function be(n) {
        return null != n;
      }
      function De(n) {
        return (0, o.QGY)(n) ? (0, vt.D)(n) : n;
      }
      function Ee(n) {
        let t = {};
        return (
          n.forEach(e => {
            t = null != e ? { ...t, ...e } : t;
          }),
          0 === Object.keys(t).length ? null : t
        );
      }
      function Fe(n, t) {
        return t.map(e => e(n));
      }
      function Oe(n) {
        return n.map(t =>
          (function Pt(n) {
            return !n.validate;
          })(t)
            ? t
            : e => t.validate(e)
        );
      }
      function q(n) {
        return null != n
          ? (function we(n) {
              if (!n) return null;
              const t = n.filter(be);
              return 0 == t.length
                ? null
                : function (e) {
                    return Ee(Fe(e, t));
                  };
            })(Oe(n))
          : null;
      }
      function Y(n) {
        return null != n
          ? (function Ne(n) {
              if (!n) return null;
              const t = n.filter(be);
              return 0 == t.length
                ? null
                : function (e) {
                    return (function Ft(...n) {
                      const t = (0, Mt.jO)(n),
                        { args: e, keys: r } = (0, Vt.D)(n),
                        i = new Ct.y(s => {
                          const { length: a } = e;
                          if (!a) return void s.complete();
                          const c = new Array(a);
                          let v = a,
                            A = a;
                          for (let L = 0; L < a; L++) {
                            let ce = !1;
                            (0, At.Xf)(e[L]).subscribe(
                              (0, bt.x)(
                                s,
                                Sn => {
                                  ce || ((ce = !0), A--), (c[L] = Sn);
                                },
                                () => v--,
                                void 0,
                                () => {
                                  (!v || !ce) &&
                                    (A || s.next(r ? (0, Et.n)(r, c) : c),
                                    s.complete());
                                }
                              )
                            );
                          }
                        });
                      return t ? i.pipe((0, Dt.Z)(t)) : i;
                    })(Fe(e, t).map(De)).pipe((0, Ot.U)(Ee));
                  };
            })(Oe(n))
          : null;
      }
      function Se(n, t) {
        return null === n ? [t] : Array.isArray(n) ? [...n, t] : [n, t];
      }
      function Ge(n) {
        return n._rawValidators;
      }
      function xe(n) {
        return n._rawAsyncValidators;
      }
      function $(n) {
        return n ? (Array.isArray(n) ? n : [n]) : [];
      }
      function x(n, t) {
        return Array.isArray(n) ? n.includes(t) : n === t;
      }
      function Be(n, t) {
        const e = $(t);
        return (
          $(n).forEach(i => {
            x(e, i) || e.push(i);
          }),
          e
        );
      }
      function Pe(n, t) {
        return $(t).filter(e => !x(n, e));
      }
      class ke {
        constructor() {
          (this._rawValidators = []),
            (this._rawAsyncValidators = []),
            (this._onDestroyCallbacks = []);
        }
        get value() {
          return this.control ? this.control.value : null;
        }
        get valid() {
          return this.control ? this.control.valid : null;
        }
        get invalid() {
          return this.control ? this.control.invalid : null;
        }
        get pending() {
          return this.control ? this.control.pending : null;
        }
        get disabled() {
          return this.control ? this.control.disabled : null;
        }
        get enabled() {
          return this.control ? this.control.enabled : null;
        }
        get errors() {
          return this.control ? this.control.errors : null;
        }
        get pristine() {
          return this.control ? this.control.pristine : null;
        }
        get dirty() {
          return this.control ? this.control.dirty : null;
        }
        get touched() {
          return this.control ? this.control.touched : null;
        }
        get status() {
          return this.control ? this.control.status : null;
        }
        get untouched() {
          return this.control ? this.control.untouched : null;
        }
        get statusChanges() {
          return this.control ? this.control.statusChanges : null;
        }
        get valueChanges() {
          return this.control ? this.control.valueChanges : null;
        }
        get path() {
          return null;
        }
        _setValidators(t) {
          (this._rawValidators = t || []),
            (this._composedValidatorFn = q(this._rawValidators));
        }
        _setAsyncValidators(t) {
          (this._rawAsyncValidators = t || []),
            (this._composedAsyncValidatorFn = Y(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn || null;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn || null;
        }
        _registerOnDestroy(t) {
          this._onDestroyCallbacks.push(t);
        }
        _invokeOnDestroyCallbacks() {
          this._onDestroyCallbacks.forEach(t => t()),
            (this._onDestroyCallbacks = []);
        }
        reset(t) {
          this.control && this.control.reset(t);
        }
        hasError(t, e) {
          return !!this.control && this.control.hasError(t, e);
        }
        getError(t, e) {
          return this.control ? this.control.getError(t, e) : null;
        }
      }
      class u extends ke {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      class g extends ke {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null);
        }
      }
      class Ie {
        constructor(t) {
          this._cd = t;
        }
        get isTouched() {
          return !!this._cd?.control?.touched;
        }
        get isUntouched() {
          return !!this._cd?.control?.untouched;
        }
        get isPristine() {
          return !!this._cd?.control?.pristine;
        }
        get isDirty() {
          return !!this._cd?.control?.dirty;
        }
        get isValid() {
          return !!this._cd?.control?.valid;
        }
        get isInvalid() {
          return !!this._cd?.control?.invalid;
        }
        get isPending() {
          return !!this._cd?.control?.pending;
        }
        get isSubmitted() {
          return !!this._cd?.submitted;
        }
      }
      let Te = (() => {
          class n extends Ie {
            constructor(e) {
              super(e);
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(o.Y36(g, 2));
            }),
            (n.ɵdir = o.lG2({
              type: n,
              selectors: [
                ["", "formControlName", ""],
                ["", "ngModel", ""],
                ["", "formControl", ""]
              ],
              hostVars: 14,
              hostBindings: function (e, r) {
                2 & e &&
                  o.ekj("ng-untouched", r.isUntouched)(
                    "ng-touched",
                    r.isTouched
                  )("ng-pristine", r.isPristine)("ng-dirty", r.isDirty)(
                    "ng-valid",
                    r.isValid
                  )("ng-invalid", r.isInvalid)("ng-pending", r.isPending);
              },
              features: [o.qOj]
            })),
            n
          );
        })(),
        He = (() => {
          class n extends Ie {
            constructor(e) {
              super(e);
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)(o.Y36(u, 10));
            }),
            (n.ɵdir = o.lG2({
              type: n,
              selectors: [
                ["", "formGroupName", ""],
                ["", "formArrayName", ""],
                ["", "ngModelGroup", ""],
                ["", "formGroup", ""],
                ["form", 3, "ngNoForm", ""],
                ["", "ngForm", ""]
              ],
              hostVars: 16,
              hostBindings: function (e, r) {
                2 & e &&
                  o.ekj("ng-untouched", r.isUntouched)(
                    "ng-touched",
                    r.isTouched
                  )("ng-pristine", r.isPristine)("ng-dirty", r.isDirty)(
                    "ng-valid",
                    r.isValid
                  )("ng-invalid", r.isInvalid)("ng-pending", r.isPending)(
                    "ng-submitted",
                    r.isSubmitted
                  );
              },
              features: [o.qOj]
            })),
            n
          );
        })();
      const M = "VALID",
        P = "INVALID",
        C = "PENDING",
        b = "DISABLED";
      function J(n) {
        return (k(n) ? n.validators : n) || null;
      }
      function Q(n, t) {
        return (k(t) ? t.asyncValidators : n) || null;
      }
      function k(n) {
        return null != n && !Array.isArray(n) && "object" == typeof n;
      }
      function Re(n, t, e) {
        const r = n.controls;
        if (!(t ? Object.keys(r) : r).length) throw new o.vHH(1e3, "");
        if (!r[e]) throw new o.vHH(1001, "");
      }
      function je(n, t, e) {
        n._forEachChild((r, i) => {
          if (void 0 === e[i]) throw new o.vHH(1002, "");
        });
      }
      class I {
        constructor(t, e) {
          (this._pendingDirty = !1),
            (this._hasOwnPendingAsyncValidator = !1),
            (this._pendingTouched = !1),
            (this._onCollectionChange = () => {}),
            (this._parent = null),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []),
            this._assignValidators(t),
            this._assignAsyncValidators(e);
        }
        get validator() {
          return this._composedValidatorFn;
        }
        set validator(t) {
          this._rawValidators = this._composedValidatorFn = t;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn;
        }
        set asyncValidator(t) {
          this._rawAsyncValidators = this._composedAsyncValidatorFn = t;
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return this.status === M;
        }
        get invalid() {
          return this.status === P;
        }
        get pending() {
          return this.status == C;
        }
        get disabled() {
          return this.status === b;
        }
        get enabled() {
          return this.status !== b;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn
            ? this._updateOn
            : this.parent
            ? this.parent.updateOn
            : "change";
        }
        setValidators(t) {
          this._assignValidators(t);
        }
        setAsyncValidators(t) {
          this._assignAsyncValidators(t);
        }
        addValidators(t) {
          this.setValidators(Be(t, this._rawValidators));
        }
        addAsyncValidators(t) {
          this.setAsyncValidators(Be(t, this._rawAsyncValidators));
        }
        removeValidators(t) {
          this.setValidators(Pe(t, this._rawValidators));
        }
        removeAsyncValidators(t) {
          this.setAsyncValidators(Pe(t, this._rawAsyncValidators));
        }
        hasValidator(t) {
          return x(this._rawValidators, t);
        }
        hasAsyncValidator(t) {
          return x(this._rawAsyncValidators, t);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(t = {}) {
          (this.touched = !0),
            this._parent && !t.onlySelf && this._parent.markAsTouched(t);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }),
            this._forEachChild(t => t.markAllAsTouched());
        }
        markAsUntouched(t = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild(e => {
              e.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !t.onlySelf && this._parent._updateTouched(t);
        }
        markAsDirty(t = {}) {
          (this.pristine = !1),
            this._parent && !t.onlySelf && this._parent.markAsDirty(t);
        }
        markAsPristine(t = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild(e => {
              e.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !t.onlySelf && this._parent._updatePristine(t);
        }
        markAsPending(t = {}) {
          (this.status = C),
            !1 !== t.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !t.onlySelf && this._parent.markAsPending(t);
        }
        disable(t = {}) {
          const e = this._parentMarkedDirty(t.onlySelf);
          (this.status = b),
            (this.errors = null),
            this._forEachChild(r => {
              r.disable({ ...t, onlySelf: !0 });
            }),
            this._updateValue(),
            !1 !== t.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._updateAncestors({ ...t, skipPristineCheck: e }),
            this._onDisabledChange.forEach(r => r(!0));
        }
        enable(t = {}) {
          const e = this._parentMarkedDirty(t.onlySelf);
          (this.status = M),
            this._forEachChild(r => {
              r.enable({ ...t, onlySelf: !0 });
            }),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: t.emitEvent
            }),
            this._updateAncestors({ ...t, skipPristineCheck: e }),
            this._onDisabledChange.forEach(r => r(!1));
        }
        _updateAncestors(t) {
          this._parent &&
            !t.onlySelf &&
            (this._parent.updateValueAndValidity(t),
            t.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(t) {
          this._parent = t;
        }
        getRawValue() {
          return this.value;
        }
        updateValueAndValidity(t = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              (this.status === M || this.status === C) &&
                this._runAsyncValidator(t.emitEvent)),
            !1 !== t.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._parent &&
              !t.onlySelf &&
              this._parent.updateValueAndValidity(t);
        }
        _updateTreeValidity(t = { emitEvent: !0 }) {
          this._forEachChild(e => e._updateTreeValidity(t)),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: t.emitEvent
            });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? b : M;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(t) {
          if (this.asyncValidator) {
            (this.status = C), (this._hasOwnPendingAsyncValidator = !0);
            const e = De(this.asyncValidator(this));
            this._asyncValidationSubscription = e.subscribe(r => {
              (this._hasOwnPendingAsyncValidator = !1),
                this.setErrors(r, { emitEvent: t });
            });
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription &&
            (this._asyncValidationSubscription.unsubscribe(),
            (this._hasOwnPendingAsyncValidator = !1));
        }
        setErrors(t, e = {}) {
          (this.errors = t), this._updateControlsErrors(!1 !== e.emitEvent);
        }
        get(t) {
          let e = t;
          return null == e ||
            (Array.isArray(e) || (e = e.split(".")), 0 === e.length)
            ? null
            : e.reduce((r, i) => r && r._find(i), this);
        }
        getError(t, e) {
          const r = e ? this.get(e) : this;
          return r && r.errors ? r.errors[t] : null;
        }
        hasError(t, e) {
          return !!this.getError(t, e);
        }
        get root() {
          let t = this;
          for (; t._parent; ) t = t._parent;
          return t;
        }
        _updateControlsErrors(t) {
          (this.status = this._calculateStatus()),
            t && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(t);
        }
        _initObservables() {
          (this.valueChanges = new o.vpe()), (this.statusChanges = new o.vpe());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? b
            : this.errors
            ? P
            : this._hasOwnPendingAsyncValidator ||
              this._anyControlsHaveStatus(C)
            ? C
            : this._anyControlsHaveStatus(P)
            ? P
            : M;
        }
        _anyControlsHaveStatus(t) {
          return this._anyControls(e => e.status === t);
        }
        _anyControlsDirty() {
          return this._anyControls(t => t.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls(t => t.touched);
        }
        _updatePristine(t = {}) {
          (this.pristine = !this._anyControlsDirty()),
            this._parent && !t.onlySelf && this._parent._updatePristine(t);
        }
        _updateTouched(t = {}) {
          (this.touched = this._anyControlsTouched()),
            this._parent && !t.onlySelf && this._parent._updateTouched(t);
        }
        _registerOnCollectionChange(t) {
          this._onCollectionChange = t;
        }
        _setUpdateStrategy(t) {
          k(t) && null != t.updateOn && (this._updateOn = t.updateOn);
        }
        _parentMarkedDirty(t) {
          return (
            !t &&
            !(!this._parent || !this._parent.dirty) &&
            !this._parent._anyControlsDirty()
          );
        }
        _find(t) {
          return null;
        }
        _assignValidators(t) {
          (this._rawValidators = Array.isArray(t) ? t.slice() : t),
            (this._composedValidatorFn = (function jt(n) {
              return Array.isArray(n) ? q(n) : n || null;
            })(this._rawValidators));
        }
        _assignAsyncValidators(t) {
          (this._rawAsyncValidators = Array.isArray(t) ? t.slice() : t),
            (this._composedAsyncValidatorFn = (function Lt(n) {
              return Array.isArray(n) ? Y(n) : n || null;
            })(this._rawAsyncValidators));
        }
      }
      class D extends I {
        constructor(t, e, r) {
          super(J(e), Q(r, e)),
            (this.controls = t),
            this._initObservables(),
            this._setUpdateStrategy(e),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator
            });
        }
        registerControl(t, e) {
          return this.controls[t]
            ? this.controls[t]
            : ((this.controls[t] = e),
              e.setParent(this),
              e._registerOnCollectionChange(this._onCollectionChange),
              e);
        }
        addControl(t, e, r = {}) {
          this.registerControl(t, e),
            this.updateValueAndValidity({ emitEvent: r.emitEvent }),
            this._onCollectionChange();
        }
        removeControl(t, e = {}) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            delete this.controls[t],
            this.updateValueAndValidity({ emitEvent: e.emitEvent }),
            this._onCollectionChange();
        }
        setControl(t, e, r = {}) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            delete this.controls[t],
            e && this.registerControl(t, e),
            this.updateValueAndValidity({ emitEvent: r.emitEvent }),
            this._onCollectionChange();
        }
        contains(t) {
          return this.controls.hasOwnProperty(t) && this.controls[t].enabled;
        }
        setValue(t, e = {}) {
          je(this, 0, t),
            Object.keys(t).forEach(r => {
              Re(this, !0, r),
                this.controls[r].setValue(t[r], {
                  onlySelf: !0,
                  emitEvent: e.emitEvent
                });
            }),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          null != t &&
            (Object.keys(t).forEach(r => {
              const i = this.controls[r];
              i && i.patchValue(t[r], { onlySelf: !0, emitEvent: e.emitEvent });
            }),
            this.updateValueAndValidity(e));
        }
        reset(t = {}, e = {}) {
          this._forEachChild((r, i) => {
            r.reset(t[i], { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this._updatePristine(e),
            this._updateTouched(e),
            this.updateValueAndValidity(e);
        }
        getRawValue() {
          return this._reduceChildren(
            {},
            (t, e, r) => ((t[r] = e.getRawValue()), t)
          );
        }
        _syncPendingControls() {
          let t = this._reduceChildren(
            !1,
            (e, r) => !!r._syncPendingControls() || e
          );
          return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
        }
        _forEachChild(t) {
          Object.keys(this.controls).forEach(e => {
            const r = this.controls[e];
            r && t(r, e);
          });
        }
        _setUpControls() {
          this._forEachChild(t => {
            t.setParent(this),
              t._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(t) {
          for (const [e, r] of Object.entries(this.controls))
            if (this.contains(e) && t(r)) return !0;
          return !1;
        }
        _reduceValue() {
          return this._reduceChildren(
            {},
            (e, r, i) => ((r.enabled || this.disabled) && (e[i] = r.value), e)
          );
        }
        _reduceChildren(t, e) {
          let r = t;
          return (
            this._forEachChild((i, s) => {
              r = e(r, i, s);
            }),
            r
          );
        }
        _allControlsDisabled() {
          for (const t of Object.keys(this.controls))
            if (this.controls[t].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _find(t) {
          return this.controls.hasOwnProperty(t) ? this.controls[t] : null;
        }
      }
      class Le extends D {}
      const E = new o.OlP("CallSetDisabledState", {
          providedIn: "root",
          factory: () => X
        }),
        X = "always";
      function F(n, t, e = X) {
        K(n, t),
          t.valueAccessor.writeValue(n.value),
          (n.disabled || "always" === e) &&
            t.valueAccessor.setDisabledState?.(n.disabled),
          (function Yt(n, t) {
            t.valueAccessor.registerOnChange(e => {
              (n._pendingValue = e),
                (n._pendingChange = !0),
                (n._pendingDirty = !0),
                "change" === n.updateOn && qe(n, t);
            });
          })(n, t),
          (function Wt(n, t) {
            const e = (r, i) => {
              t.valueAccessor.writeValue(r), i && t.viewToModelUpdate(r);
            };
            n.registerOnChange(e),
              t._registerOnDestroy(() => {
                n._unregisterOnChange(e);
              });
          })(n, t),
          (function $t(n, t) {
            t.valueAccessor.registerOnTouched(() => {
              (n._pendingTouched = !0),
                "blur" === n.updateOn && n._pendingChange && qe(n, t),
                "submit" !== n.updateOn && n.markAsTouched();
            });
          })(n, t),
          (function qt(n, t) {
            if (t.valueAccessor.setDisabledState) {
              const e = r => {
                t.valueAccessor.setDisabledState(r);
              };
              n.registerOnDisabledChange(e),
                t._registerOnDestroy(() => {
                  n._unregisterOnDisabledChange(e);
                });
            }
          })(n, t);
      }
      function H(n, t, e = !0) {
        const r = () => {};
        t.valueAccessor &&
          (t.valueAccessor.registerOnChange(r),
          t.valueAccessor.registerOnTouched(r)),
          R(n, t),
          n &&
            (t._invokeOnDestroyCallbacks(),
            n._registerOnCollectionChange(() => {}));
      }
      function U(n, t) {
        n.forEach(e => {
          e.registerOnValidatorChange && e.registerOnValidatorChange(t);
        });
      }
      function K(n, t) {
        const e = Ge(n);
        null !== t.validator
          ? n.setValidators(Se(e, t.validator))
          : "function" == typeof e && n.setValidators([e]);
        const r = xe(n);
        null !== t.asyncValidator
          ? n.setAsyncValidators(Se(r, t.asyncValidator))
          : "function" == typeof r && n.setAsyncValidators([r]);
        const i = () => n.updateValueAndValidity();
        U(t._rawValidators, i), U(t._rawAsyncValidators, i);
      }
      function R(n, t) {
        let e = !1;
        if (null !== n) {
          if (null !== t.validator) {
            const i = Ge(n);
            if (Array.isArray(i) && i.length > 0) {
              const s = i.filter(a => a !== t.validator);
              s.length !== i.length && ((e = !0), n.setValidators(s));
            }
          }
          if (null !== t.asyncValidator) {
            const i = xe(n);
            if (Array.isArray(i) && i.length > 0) {
              const s = i.filter(a => a !== t.asyncValidator);
              s.length !== i.length && ((e = !0), n.setAsyncValidators(s));
            }
          }
        }
        const r = () => {};
        return U(t._rawValidators, r), U(t._rawAsyncValidators, r), e;
      }
      function qe(n, t) {
        n._pendingDirty && n.markAsDirty(),
          n.setValue(n._pendingValue, { emitModelToViewChange: !1 }),
          t.viewToModelUpdate(n._pendingValue),
          (n._pendingChange = !1);
      }
      function We(n, t) {
        const e = n.indexOf(t);
        e > -1 && n.splice(e, 1);
      }
      function ze(n) {
        return (
          "object" == typeof n &&
          null !== n &&
          2 === Object.keys(n).length &&
          "value" in n &&
          "disabled" in n
        );
      }
      const w = class extends I {
        constructor(t = null, e, r) {
          super(J(e), Q(r, e)),
            (this.defaultValue = null),
            (this._onChange = []),
            (this._pendingChange = !1),
            this._applyFormState(t),
            this._setUpdateStrategy(e),
            this._initObservables(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator
            }),
            k(e) &&
              (e.nonNullable || e.initialValueIsDefault) &&
              (this.defaultValue = ze(t) ? t.value : t);
        }
        setValue(t, e = {}) {
          (this.value = this._pendingValue = t),
            this._onChange.length &&
              !1 !== e.emitModelToViewChange &&
              this._onChange.forEach(r =>
                r(this.value, !1 !== e.emitViewToModelChange)
              ),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          this.setValue(t, e);
        }
        reset(t = this.defaultValue, e = {}) {
          this._applyFormState(t),
            this.markAsPristine(e),
            this.markAsUntouched(e),
            this.setValue(this.value, e),
            (this._pendingChange = !1);
        }
        _updateValue() {}
        _anyControls(t) {
          return !1;
        }
        _allControlsDisabled() {
          return this.disabled;
        }
        registerOnChange(t) {
          this._onChange.push(t);
        }
        _unregisterOnChange(t) {
          We(this._onChange, t);
        }
        registerOnDisabledChange(t) {
          this._onDisabledChange.push(t);
        }
        _unregisterOnDisabledChange(t) {
          We(this._onDisabledChange, t);
        }
        _forEachChild(t) {}
        _syncPendingControls() {
          return !(
            "submit" !== this.updateOn ||
            (this._pendingDirty && this.markAsDirty(),
            this._pendingTouched && this.markAsTouched(),
            !this._pendingChange) ||
            (this.setValue(this._pendingValue, {
              onlySelf: !0,
              emitModelToViewChange: !1
            }),
            0)
          );
        }
        _applyFormState(t) {
          ze(t)
            ? ((this.value = this._pendingValue = t.value),
              t.disabled
                ? this.disable({ onlySelf: !0, emitEvent: !1 })
                : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = t);
        }
      };
      let Ke = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵdir = o.lG2({
              type: n,
              selectors: [
                ["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]
              ],
              hostAttrs: ["novalidate", ""]
            })),
            n
          );
        })(),
        tt = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = o.oAB({ type: n })),
            (n.ɵinj = o.cJS({})),
            n
          );
        })();
      const oe = new o.OlP("NgModelWithFormControlWarning"),
        ln = { provide: u, useExisting: (0, o.Gpc)(() => j) };
      let j = (() => {
        class n extends u {
          constructor(e, r, i) {
            super(),
              (this.callSetDisabledState = i),
              (this.submitted = !1),
              (this._onCollectionChange = () => this._updateDomValue()),
              (this.directives = []),
              (this.form = null),
              (this.ngSubmit = new o.vpe()),
              this._setValidators(e),
              this._setAsyncValidators(r);
          }
          ngOnChanges(e) {
            this._checkFormPresent(),
              e.hasOwnProperty("form") &&
                (this._updateValidators(),
                this._updateDomValue(),
                this._updateRegistrations(),
                (this._oldForm = this.form));
          }
          ngOnDestroy() {
            this.form &&
              (R(this.form, this),
              this.form._onCollectionChange === this._onCollectionChange &&
                this.form._registerOnCollectionChange(() => {}));
          }
          get formDirective() {
            return this;
          }
          get control() {
            return this.form;
          }
          get path() {
            return [];
          }
          addControl(e) {
            const r = this.form.get(e.path);
            return (
              F(r, e, this.callSetDisabledState),
              r.updateValueAndValidity({ emitEvent: !1 }),
              this.directives.push(e),
              r
            );
          }
          getControl(e) {
            return this.form.get(e.path);
          }
          removeControl(e) {
            H(e.control || null, e, !1),
              (function Qt(n, t) {
                const e = n.indexOf(t);
                e > -1 && n.splice(e, 1);
              })(this.directives, e);
          }
          addFormGroup(e) {
            this._setUpFormContainer(e);
          }
          removeFormGroup(e) {
            this._cleanUpFormContainer(e);
          }
          getFormGroup(e) {
            return this.form.get(e.path);
          }
          addFormArray(e) {
            this._setUpFormContainer(e);
          }
          removeFormArray(e) {
            this._cleanUpFormContainer(e);
          }
          getFormArray(e) {
            return this.form.get(e.path);
          }
          updateModel(e, r) {
            this.form.get(e.path).setValue(r);
          }
          onSubmit(e) {
            return (
              (this.submitted = !0),
              (function $e(n, t) {
                n._syncPendingControls(),
                  t.forEach(e => {
                    const r = e.control;
                    "submit" === r.updateOn &&
                      r._pendingChange &&
                      (e.viewToModelUpdate(r._pendingValue),
                      (r._pendingChange = !1));
                  });
              })(this.form, this.directives),
              this.ngSubmit.emit(e),
              "dialog" === e?.target?.method
            );
          }
          onReset() {
            this.resetForm();
          }
          resetForm(e) {
            this.form.reset(e), (this.submitted = !1);
          }
          _updateDomValue() {
            this.directives.forEach(e => {
              const r = e.control,
                i = this.form.get(e.path);
              r !== i &&
                (H(r || null, e),
                (n => n instanceof w)(i) &&
                  (F(i, e, this.callSetDisabledState), (e.control = i)));
            }),
              this.form._updateTreeValidity({ emitEvent: !1 });
          }
          _setUpFormContainer(e) {
            const r = this.form.get(e.path);
            (function Ye(n, t) {
              K(n, t);
            })(r, e),
              r.updateValueAndValidity({ emitEvent: !1 });
          }
          _cleanUpFormContainer(e) {
            if (this.form) {
              const r = this.form.get(e.path);
              r &&
                (function zt(n, t) {
                  return R(n, t);
                })(r, e) &&
                r.updateValueAndValidity({ emitEvent: !1 });
            }
          }
          _updateRegistrations() {
            this.form._registerOnCollectionChange(this._onCollectionChange),
              this._oldForm &&
                this._oldForm._registerOnCollectionChange(() => {});
          }
          _updateValidators() {
            K(this.form, this), this._oldForm && R(this._oldForm, this);
          }
          _checkFormPresent() {}
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(o.Y36(l, 10), o.Y36(p, 10), o.Y36(E, 8));
          }),
          (n.ɵdir = o.lG2({
            type: n,
            selectors: [["", "formGroup", ""]],
            hostBindings: function (e, r) {
              1 & e &&
                o.NdJ("submit", function (s) {
                  return r.onSubmit(s);
                })("reset", function () {
                  return r.onReset();
                });
            },
            inputs: { form: ["formGroup", "form"] },
            outputs: { ngSubmit: "ngSubmit" },
            exportAs: ["ngForm"],
            features: [o._Bn([ln]), o.qOj, o.TTD]
          })),
          n
        );
      })();
      const cn = { provide: g, useExisting: (0, o.Gpc)(() => ae) };
      let ae = (() => {
          class n extends g {
            set isDisabled(e) {}
            constructor(e, r, i, s, a) {
              super(),
                (this._ngModelWarningConfig = a),
                (this._added = !1),
                (this.update = new o.vpe()),
                (this._ngModelWarningSent = !1),
                (this._parent = e),
                this._setValidators(r),
                this._setAsyncValidators(i),
                (this.valueAccessor = (function ne(n, t) {
                  if (!t) return null;
                  let e, r, i;
                  return (
                    Array.isArray(t),
                    t.forEach(s => {
                      s.constructor === S
                        ? (e = s)
                        : (function Jt(n) {
                            return Object.getPrototypeOf(n.constructor) === m;
                          })(s)
                        ? (r = s)
                        : (i = s);
                    }),
                    i || r || e || null
                  );
                })(0, s));
            }
            ngOnChanges(e) {
              this._added || this._setUpControl(),
                (function te(n, t) {
                  if (!n.hasOwnProperty("model")) return !1;
                  const e = n.model;
                  return !!e.isFirstChange() || !Object.is(t, e.currentValue);
                })(e, this.viewModel) &&
                  ((this.viewModel = this.model),
                  this.formDirective.updateModel(this, this.model));
            }
            ngOnDestroy() {
              this.formDirective && this.formDirective.removeControl(this);
            }
            viewToModelUpdate(e) {
              (this.viewModel = e), this.update.emit(e);
            }
            get path() {
              return (function T(n, t) {
                return [...t.path, n];
              })(
                null == this.name ? this.name : this.name.toString(),
                this._parent
              );
            }
            get formDirective() {
              return this._parent ? this._parent.formDirective : null;
            }
            _checkParentType() {}
            _setUpControl() {
              this._checkParentType(),
                (this.control = this.formDirective.addControl(this)),
                (this._added = !0);
            }
          }
          return (
            (n._ngModelWarningSentOnce = !1),
            (n.ɵfac = function (e) {
              return new (e || n)(
                o.Y36(u, 13),
                o.Y36(l, 10),
                o.Y36(p, 10),
                o.Y36(h, 10),
                o.Y36(oe, 8)
              );
            }),
            (n.ɵdir = o.lG2({
              type: n,
              selectors: [["", "formControlName", ""]],
              inputs: {
                name: ["formControlName", "name"],
                isDisabled: ["disabled", "isDisabled"],
                model: ["ngModel", "model"]
              },
              outputs: { update: "ngModelChange" },
              features: [o._Bn([cn]), o.qOj, o.TTD]
            })),
            n
          );
        })(),
        En = (() => {
          class n {}
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = o.oAB({ type: n })),
            (n.ɵinj = o.cJS({ imports: [tt] })),
            n
          );
        })();
      class _t extends I {
        constructor(t, e, r) {
          super(J(e), Q(r, e)),
            (this.controls = t),
            this._initObservables(),
            this._setUpdateStrategy(e),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator
            });
        }
        at(t) {
          return this.controls[this._adjustIndex(t)];
        }
        push(t, e = {}) {
          this.controls.push(t),
            this._registerControl(t),
            this.updateValueAndValidity({ emitEvent: e.emitEvent }),
            this._onCollectionChange();
        }
        insert(t, e, r = {}) {
          this.controls.splice(t, 0, e),
            this._registerControl(e),
            this.updateValueAndValidity({ emitEvent: r.emitEvent });
        }
        removeAt(t, e = {}) {
          let r = this._adjustIndex(t);
          r < 0 && (r = 0),
            this.controls[r] &&
              this.controls[r]._registerOnCollectionChange(() => {}),
            this.controls.splice(r, 1),
            this.updateValueAndValidity({ emitEvent: e.emitEvent });
        }
        setControl(t, e, r = {}) {
          let i = this._adjustIndex(t);
          i < 0 && (i = 0),
            this.controls[i] &&
              this.controls[i]._registerOnCollectionChange(() => {}),
            this.controls.splice(i, 1),
            e && (this.controls.splice(i, 0, e), this._registerControl(e)),
            this.updateValueAndValidity({ emitEvent: r.emitEvent }),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(t, e = {}) {
          je(this, 0, t),
            t.forEach((r, i) => {
              Re(this, !1, i),
                this.at(i).setValue(r, {
                  onlySelf: !0,
                  emitEvent: e.emitEvent
                });
            }),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          null != t &&
            (t.forEach((r, i) => {
              this.at(i) &&
                this.at(i).patchValue(r, {
                  onlySelf: !0,
                  emitEvent: e.emitEvent
                });
            }),
            this.updateValueAndValidity(e));
        }
        reset(t = [], e = {}) {
          this._forEachChild((r, i) => {
            r.reset(t[i], { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this._updatePristine(e),
            this._updateTouched(e),
            this.updateValueAndValidity(e);
        }
        getRawValue() {
          return this.controls.map(t => t.getRawValue());
        }
        clear(t = {}) {
          this.controls.length < 1 ||
            (this._forEachChild(e => e._registerOnCollectionChange(() => {})),
            this.controls.splice(0),
            this.updateValueAndValidity({ emitEvent: t.emitEvent }));
        }
        _adjustIndex(t) {
          return t < 0 ? t + this.length : t;
        }
        _syncPendingControls() {
          let t = this.controls.reduce(
            (e, r) => !!r._syncPendingControls() || e,
            !1
          );
          return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
        }
        _forEachChild(t) {
          this.controls.forEach((e, r) => {
            t(e, r);
          });
        }
        _updateValue() {
          this.value = this.controls
            .filter(t => t.enabled || this.disabled)
            .map(t => t.value);
        }
        _anyControls(t) {
          return this.controls.some(e => e.enabled && t(e));
        }
        _setUpControls() {
          this._forEachChild(t => this._registerControl(t));
        }
        _allControlsDisabled() {
          for (const t of this.controls) if (t.enabled) return !1;
          return this.controls.length > 0 || this.disabled;
        }
        _registerControl(t) {
          t.setParent(this),
            t._registerOnCollectionChange(this._onCollectionChange);
        }
        _find(t) {
          return this.at(t) ?? null;
        }
      }
      function yt(n) {
        return (
          !!n &&
          (void 0 !== n.asyncValidators ||
            void 0 !== n.validators ||
            void 0 !== n.updateOn)
        );
      }
      let Fn = (() => {
          class n {
            constructor() {
              this.useNonNullable = !1;
            }
            get nonNullable() {
              const e = new n();
              return (e.useNonNullable = !0), e;
            }
            group(e, r = null) {
              const i = this._reduceControls(e);
              let s = {};
              return (
                yt(r)
                  ? (s = r)
                  : null !== r &&
                    ((s.validators = r.validator),
                    (s.asyncValidators = r.asyncValidator)),
                new D(i, s)
              );
            }
            record(e, r = null) {
              const i = this._reduceControls(e);
              return new Le(i, r);
            }
            control(e, r, i) {
              let s = {};
              return this.useNonNullable
                ? (yt(r)
                    ? (s = r)
                    : ((s.validators = r), (s.asyncValidators = i)),
                  new w(e, { ...s, nonNullable: !0 }))
                : new w(e, r, i);
            }
            array(e, r, i) {
              const s = e.map(a => this._createControl(a));
              return new _t(s, r, i);
            }
            _reduceControls(e) {
              const r = {};
              return (
                Object.keys(e).forEach(i => {
                  r[i] = this._createControl(e[i]);
                }),
                r
              );
            }
            _createControl(e) {
              return e instanceof w || e instanceof I
                ? e
                : Array.isArray(e)
                ? this.control(
                    e[0],
                    e.length > 1 ? e[1] : null,
                    e.length > 2 ? e[2] : null
                  )
                : this.control(e);
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵprov = o.Yz7({
              token: n,
              factory: n.ɵfac,
              providedIn: "root"
            })),
            n
          );
        })(),
        On = (() => {
          class n {
            static withConfig(e) {
              return {
                ngModule: n,
                providers: [
                  {
                    provide: oe,
                    useValue: e.warnOnNgModelWithFormControl ?? "always"
                  },
                  { provide: E, useValue: e.callSetDisabledState ?? X }
                ]
              };
            }
          }
          return (
            (n.ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = o.oAB({ type: n })),
            (n.ɵinj = o.cJS({ imports: [En] })),
            n
          );
        })();
      var y = (() => {
          return ((n = y || (y = {})).Dot = "."), (n.Slash = "/"), y;
          var n;
        })(),
        V = (() => {
          return (
            ((n = V || (V = {})).Protocol = "https://"),
            (n.Ulr = "github.com"),
            V
          );
          var n;
        })();
      function wn(n, t) {
        if (
          (1 & n && (o.TgZ(0, "a", 10), o._uU(1, " GitHubLink "), o.qZA()),
          2 & n)
        ) {
          const e = o.oxw();
          o.Q6J("href", e.result, o.LSH);
        }
      }
      let Nn = (() => {
        class n {
          constructor(e) {
            (this.fb = e),
              (this.form = this.fb.nonNullable.group({ gitHubPageUrl: "" })),
              (this.result = "");
          }
          onConvert(e) {
            this.result = this.convertUrl(this.form.value.gitHubPageUrl);
          }
          onReset(e) {
            e.preventDefault(), (this.result = ""), this.form.reset();
          }
          convertUrl(e = "") {
            const r = e.replace(V.Protocol, ""),
              i = r.split(y.Dot).at(0),
              s = r
                .split(y.Slash)
                .filter(a => a)
                .at(-1);
            return V.Protocol + V.Ulr + y.Slash + i + y.Slash + s;
          }
        }
        return (
          (n.ɵfac = function (e) {
            return new (e || n)(o.Y36(Fn));
          }),
          (n.ɵcmp = o.Xpm({
            type: n,
            selectors: [["app-main"]],
            standalone: !0,
            features: [o.jDz],
            decls: 14,
            vars: 2,
            consts: [
              [1, "form-container"],
              [1, "form", 3, "formGroup", "reset", "ngSubmit"],
              [1, "form-field"],
              ["for", "url", 1, "form-label"],
              [
                "formControlName",
                "gitHubPageUrl",
                "type",
                "text",
                "id",
                "url",
                "placeholder",
                "Enter GitHub Page Url",
                1,
                "form-input"
              ],
              [1, "form-result"],
              [1, "form-label"],
              [
                "class",
                "form-result",
                "target",
                "_blank",
                3,
                "href",
                4,
                "ngIf"
              ],
              [1, "form-button"],
              ["type", "reset", 1, "form-button", "form-button-reset"],
              ["target", "_blank", 1, "form-result", 3, "href"]
            ],
            template: function (e, r) {
              1 & e &&
                (o.TgZ(0, "section", 0)(1, "form", 1),
                o.NdJ("reset", function (s) {
                  return r.onReset(s);
                })("ngSubmit", function (s) {
                  return r.onConvert(s);
                }),
                o.TgZ(2, "div", 2)(3, "label", 3),
                o._uU(4, "GitHub Page Url"),
                o.qZA(),
                o._UZ(5, "input", 4),
                o.qZA(),
                o.TgZ(6, "div", 5)(7, "span", 6),
                o._uU(8, "Result:"),
                o.qZA(),
                o.YNc(9, wn, 2, 1, "a", 7),
                o.qZA(),
                o.TgZ(10, "button", 8),
                o._uU(11, "Convert"),
                o.qZA(),
                o.TgZ(12, "button", 9),
                o._uU(13, "Clear"),
                o.qZA()()()),
                2 & e &&
                  (o.xp6(1),
                  o.Q6J("formGroup", r.form),
                  o.xp6(8),
                  o.Q6J("ngIf", r.result));
            },
            dependencies: [N.ez, N.O5, On, Ke, S, Te, He, j, ae],
            styles: [
              "[_nghost-%COMP%]{height:100%;display:flex;justify-content:center;gap:var(--margin-l);padding:0 var(--padding-l)}[_nghost-%COMP%]   .form-container[_ngcontent-%COMP%]{width:min(100%,30rem);display:flex;flex-direction:column;margin-top:var(--margin-l);background-color:var(--color-white);border-radius:var(--border-radius)}[_nghost-%COMP%]   .form[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;gap:var(--margin);padding:var(--padding-m);border-radius:var(--border-radius);background-color:var(--color-background)}[_nghost-%COMP%]   .form-field[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--margin-s)}[_nghost-%COMP%]   .form-input[_ngcontent-%COMP%]{width:100%;padding:var(--padding-d);border:var(--color-text) solid 2px;border-radius:var(--border-radius)}[_nghost-%COMP%]   .form-result[_ngcontent-%COMP%]{height:1rem}[_nghost-%COMP%]   .form-button[_ngcontent-%COMP%]{width:100%;padding:var(--padding-d);border:var(--color-accent-secondary-darker) 1px solid;border-radius:var(--border-radius);font-weight:700;text-transform:uppercase;background-color:var(--color-accent-secondary);color:var(--color-text);cursor:pointer}[_nghost-%COMP%]   .form-button[_ngcontent-%COMP%]:hover{opacity:.8}[_nghost-%COMP%]   .form-button[_ngcontent-%COMP%]:active{border:var(--color-accent-secondary) 1px solid;background-color:var(--color-accent-secondary-darker)}[_nghost-%COMP%]   .form-button-reset[_ngcontent-%COMP%]{border:var(--color-primary) 1px solid;background-color:transparent}"
            ],
            changeDetection: 0
          })),
          n
        );
      })();
    }
  }
]);
